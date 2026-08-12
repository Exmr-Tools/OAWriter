/**
 * Direct OOXML → Plate node converter.
 *
 * Mammoth (used by importDocx from @platejs/docx-io) converts DOCX to HTML but
 * deliberately strips character-level formatting such as font size, font family,
 * background color, subscript/superscript, and paragraph alignment. This module
 * reads the OOXML XML directly so that all formatting survives the round-trip.
 *
 * IMPORTANT: When a new toolbar formatting feature is added, update parseRPr,
 * parsePPr, or convertParagraph below to read the corresponding OOXML element.
 */
import JSZip from 'jszip'

// WordprocessingML namespace
const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'

// --- low-level XML helpers ---

function wChild(el: Element, localName: string): Element | undefined {
  for (let i = 0; i < el.children.length; i++) {
    const c = el.children[i]
    if (c.localName === localName) return c
  }
  return undefined
}

function wChildren(el: Element, localName: string): Element[] {
  const out: Element[] = []
  for (let i = 0; i < el.children.length; i++) {
    const c = el.children[i]
    if (c.localName === localName) out.push(c)
  }
  return out
}

// Attribute access: try namespaced form first, then prefix-qualified fallback.
function wAttr(el: Element, attr: string): string | undefined {
  return (
    el.getAttributeNS(W, attr) ??
    el.getAttribute('w:' + attr) ??
    undefined
  )
}

function isSuppressed(el: Element): boolean {
  const val = wAttr(el, 'val')
  return val === '0' || val === 'false'
}

// --- color helpers ---

// Font family: html-to-docx strips CSS generic families, storing only the first
// name ("Times New Roman"). Re-attach the CSS fallback for Plate's FontFamilyPicker.
const FONT_MAP: Record<string, string> = {
  'Times New Roman': 'Times New Roman, serif',
  'Arial':           'Arial, sans-serif',
  'Helvetica':       'Arial, sans-serif',
  'Courier New':     'Courier New, monospace',
  'Courier':         'Courier New, monospace',
}
function normalizeFontFamily(name: string): string {
  return FONT_MAP[name] ?? name
}

// Word's named highlight colors → hex (used by <w:highlight> in Word documents)
const HIGHLIGHT_NAME_TO_HEX: Record<string, string> = {
  yellow:       '#ffff00',
  green:        '#00ff00',
  cyan:         '#00ffff',
  magenta:      '#ff00ff',
  blue:         '#0000ff',
  red:          '#ff0000',
  darkBlue:     '#000080',
  darkCyan:     '#008080',
  darkGreen:    '#008000',
  darkMagenta:  '#800080',
  darkRed:      '#800000',
  darkYellow:   '#808000',
  darkGray:     '#808080',
  lightGray:    '#c0c0c0',
  black:        '#000000',
  white:        '#ffffff',
}

// OOXML numFmt value → Plate listStyleType string
const NUM_FMT_TO_LIST_STYLE: Record<string, string> = {
  decimal:     'decimal',
  lowerLetter: 'lower-alpha',
  upperLetter: 'upper-alpha',
  lowerRoman:  'lower-roman',
  upperRoman:  'upper-roman',
  bullet:      'disc',
}

// --- run-property types ---

interface RunStyle {
  bold?:            true
  italic?:          true
  underline?:       true
  strikethrough?:   true
  subscript?:       true
  superscript?:     true
  fontSize?:        string   // e.g. "12pt"
  fontFamily?:      string   // e.g. "Times New Roman, serif"
  color?:           string   // e.g. "#1F2937"
  backgroundColor?: string   // e.g. "#fef08a"
}

function parseRPr(rPr: Element | undefined): RunStyle {
  if (!rPr) return {}
  const s: RunStyle = {}

  // Bold
  const b = wChild(rPr, 'b')
  if (b && !isSuppressed(b)) s.bold = true

  // Italic
  const i = wChild(rPr, 'i')
  if (i && !isSuppressed(i)) s.italic = true

  // Underline
  const u = wChild(rPr, 'u')
  if (u && wAttr(u, 'val') !== 'none') s.underline = true

  // Strikethrough
  const strike = wChild(rPr, 'strike')
  if (strike && !isSuppressed(strike)) s.strikethrough = true

  // Subscript / Superscript  (<w:vertAlign w:val="subscript|superscript"/>)
  const vertAlign = wChild(rPr, 'vertAlign')
  if (vertAlign) {
    const val = wAttr(vertAlign, 'val')
    if (val === 'subscript')   s.subscript   = true
    if (val === 'superscript') s.superscript = true
  }

  // Font size  (<w:sz w:val="24"/> → 24 half-points → 12pt)
  const sz = wChild(rPr, 'sz')
  if (sz) {
    const val = wAttr(sz, 'val')
    if (val && /^\d+$/.test(val)) s.fontSize = `${Math.round(parseInt(val) / 2)}pt`
  }

  // Font family  (<w:rFonts w:ascii="Times New Roman"/>)
  const rFonts = wChild(rPr, 'rFonts')
  if (rFonts) {
    const name = wAttr(rFonts, 'ascii') ?? wAttr(rFonts, 'hAnsi')
    if (name) s.fontFamily = normalizeFontFamily(name)
  }

  // Font color  (<w:color w:val="1F2937"/> — no leading #)
  const color = wChild(rPr, 'color')
  if (color) {
    const val = wAttr(color, 'val')
    if (val && val !== 'auto') s.color = `#${val}`
  }

  // Background / highlight color
  // html-to-docx writes custom hex colors as <w:shd w:val="clear" w:fill="fef08a"/>
  // Word itself writes named colors as <w:highlight w:val="yellow"/>
  const shd = wChild(rPr, 'shd')
  if (shd) {
    const fill = wAttr(shd, 'fill')
    if (fill && fill !== 'auto' && fill.toUpperCase() !== 'FFFFFF' && fill !== '000000') {
      s.backgroundColor = `#${fill}`
    }
  }
  if (!s.backgroundColor) {
    const highlight = wChild(rPr, 'highlight')
    if (highlight) {
      const val = wAttr(highlight, 'val')
      if (val && val in HIGHLIGHT_NAME_TO_HEX) s.backgroundColor = HIGHLIGHT_NAME_TO_HEX[val]
    }
  }

  return s
}

// --- paragraph-property types ---

interface ParaProps {
  styleId?:   string
  alignment?: string   // 'center' | 'right' | 'justify' | 'left'
  numId?:     string
  ilvl?:      number
  lineHeight?: number  // e.g. 2.0 for double-spaced
}

function parsePPr(pPr: Element | undefined): ParaProps {
  if (!pPr) return {}
  const p: ParaProps = {}

  // Paragraph style reference
  const pStyle = wChild(pPr, 'pStyle')
  if (pStyle) p.styleId = wAttr(pStyle, 'val')

  // Text alignment  (<w:jc w:val="center|right|both|left"/>)
  const jc = wChild(pPr, 'jc')
  if (jc) {
    const val = wAttr(jc, 'val')
    if      (val === 'center')                   p.alignment = 'center'
    else if (val === 'right')                    p.alignment = 'right'
    else if (val === 'both' || val === 'distribute') p.alignment = 'justify'
    else if (val === 'left')                     p.alignment = 'left'
  }

  // List / numbering  (<w:numPr><w:numId w:val="1"/><w:ilvl w:val="0"/></w:numPr>)
  const numPr = wChild(pPr, 'numPr')
  if (numPr) {
    const numId = wChild(numPr, 'numId')
    const ilvl  = wChild(numPr, 'ilvl')
    if (numId) p.numId = wAttr(numId, 'val')
    if (ilvl)  p.ilvl  = parseInt(wAttr(ilvl, 'val') ?? '0')
  }

  // Line height  (<w:spacing w:line="480" w:lineRule="auto"/> → 480/240 = 2.0)
  const spacing = wChild(pPr, 'spacing')
  if (spacing) {
    const line     = wAttr(spacing, 'line')
    const lineRule = wAttr(spacing, 'lineRule')
    if (line && (lineRule === 'auto' || lineRule == null)) {
      const lh = parseInt(line) / 240
      if (!isNaN(lh) && lh > 0) p.lineHeight = Math.round(lh * 100) / 100
    }
  }

  return p
}

// --- style-sheet parsing ---

interface StyleDef {
  type?:        string     // 'h1'–'h6', undefined = paragraph
  alignment?:   string
  runDefaults?: RunStyle
  basedOn?:     string
}

function parseStylesXml(xml: string): Map<string, StyleDef> {
  const dom = new DOMParser().parseFromString(xml, 'application/xml')
  const map = new Map<string, StyleDef>()

  for (const style of Array.from(dom.getElementsByTagNameNS(W, 'style'))) {
    const styleId = wAttr(style, 'styleId')
    if (!styleId) continue

    const def: StyleDef = {}

    const nameEl  = wChild(style, 'name')
    const nameVal = nameEl ? (wAttr(nameEl, 'val') ?? '').toLowerCase() : ''
    const hMatch  = nameVal.match(/^heading (\d)$/)
    if (hMatch) def.type = `h${hMatch[1]}`

    const basedOn = wChild(style, 'basedOn')
    if (basedOn) def.basedOn = wAttr(basedOn, 'val')

    const pPr = wChild(style, 'pPr')
    if (pPr) {
      const jc = wChild(pPr, 'jc')
      if (jc) {
        const val = wAttr(jc, 'val')
        if      (val === 'center')                       def.alignment = 'center'
        else if (val === 'right')                        def.alignment = 'right'
        else if (val === 'both' || val === 'distribute') def.alignment = 'justify'
      }
    }

    const rPr = wChild(style, 'rPr')
    if (rPr) def.runDefaults = parseRPr(rPr)

    map.set(styleId, def)
  }

  return map
}

function resolveStyle(styleId: string | undefined, styles: Map<string, StyleDef>): StyleDef {
  if (!styleId) return {}
  const def = styles.get(styleId)
  if (!def) return {}
  const base = resolveStyle(def.basedOn, styles)
  return {
    type:        def.type        ?? base.type,
    alignment:   def.alignment   ?? base.alignment,
    runDefaults: { ...base.runDefaults, ...def.runDefaults },
  }
}

// --- numbering-definitions parsing ---

interface NumInfo {
  ordered:     boolean
  listStyle:   string   // Plate listStyleType value
}

function parseNumberingXml(xml: string): Map<string, NumInfo> {
  const dom = new DOMParser().parseFromString(xml, 'application/xml')

  // abstractNumId → { ilvl → { ordered, listStyle } }
  const abstracts = new Map<string, Map<number, NumInfo>>()
  for (const abs of Array.from(dom.getElementsByTagNameNS(W, 'abstractNum'))) {
    const id = wAttr(abs, 'abstractNumId')
    if (!id) continue
    const levels = new Map<number, NumInfo>()
    for (const lvl of Array.from(abs.getElementsByTagNameNS(W, 'lvl'))) {
      const ilvl   = parseInt(wAttr(lvl, 'ilvl') ?? '0')
      const numFmt = wChild(lvl, 'numFmt')
      const fmt    = numFmt ? (wAttr(numFmt, 'val') ?? 'decimal') : 'decimal'
      const ordered   = fmt !== 'bullet'
      const listStyle = NUM_FMT_TO_LIST_STYLE[fmt] ?? 'decimal'
      levels.set(ilvl, { ordered, listStyle })
    }
    abstracts.set(id, levels)
  }

  // numId → { ordered, listStyle } (resolved at ilvl=0 as default)
  const result = new Map<string, NumInfo>()
  for (const num of Array.from(dom.getElementsByTagNameNS(W, 'num'))) {
    const numId   = wAttr(num, 'numId')
    if (!numId) continue
    const absIdEl = wChild(num, 'abstractNumId')
    const absId   = absIdEl ? wAttr(absIdEl, 'val') : undefined
    if (absId == null) continue
    const levels  = abstracts.get(absId)
    // Store full level map by packing it; look up per-ilvl in convertParagraph
    // We use ilvl=0 as a representative default
    const lvl0 = levels?.get(0) ?? { ordered: true, listStyle: 'decimal' }
    result.set(numId, lvl0)

    // Also attach the per-level map for ilvl lookup
    ;(result as Map<string, NumInfo & { levels?: Map<number, NumInfo> }>)
      .set(numId, { ...lvl0, levels })
  }

  return result
}

// Helper to get per-level NumInfo from the extended map
function getNumInfoAtIlvl(
  numbering: Map<string, NumInfo>,
  numId: string,
  ilvl: number
): NumInfo | undefined {
  const entry = numbering.get(numId) as (NumInfo & { levels?: Map<number, NumInfo> }) | undefined
  if (!entry) return undefined
  return entry.levels?.get(ilvl) ?? entry
}

// --- run-text extraction ---

function extractRunText(run: Element, baseStyle: RunStyle): unknown[] {
  const rPr   = wChild(run, 'rPr')
  const style = { ...baseStyle, ...parseRPr(rPr) }
  const nodes: unknown[] = []

  for (const t of wChildren(run, 't')) {
    const text = t.textContent ?? ''
    if (!text) continue
    const node: Record<string, unknown> = { text }
    if (style.bold)            node.bold            = true
    if (style.italic)          node.italic          = true
    if (style.underline)       node.underline       = true
    if (style.strikethrough)   node.strikethrough   = true
    if (style.subscript)       node.subscript       = true
    if (style.superscript)     node.superscript     = true
    if (style.fontSize)        node.fontSize        = style.fontSize
    if (style.fontFamily)      node.fontFamily      = style.fontFamily
    if (style.color)           node.color           = style.color
    if (style.backgroundColor) node.backgroundColor = style.backgroundColor
    nodes.push(node)
  }

  // Inline line break
  if (wChild(run, 'br')) nodes.push({ text: '\n' })

  return nodes
}

// --- paragraph conversion ---

function convertParagraph(
  para: Element,
  styles: Map<string, StyleDef>,
  numbering: Map<string, NumInfo>,
): Record<string, unknown> | null {
  const pPr = wChild(para, 'pPr')
  const { styleId, alignment, numId, ilvl = 0, lineHeight } = parsePPr(pPr)

  const styleDef        = resolveStyle(styleId, styles)
  const effectiveAlign  = alignment ?? styleDef.alignment
  const paraRunDefaults = styleDef.runDefaults ?? {}

  // Determine Plate block type and list properties
  let type                    = styleDef.type ?? 'p'
  let listStyleType: string | undefined
  let indent:        number   | undefined

  if (numId && numId !== '0') {
    const info = getNumInfoAtIlvl(numbering, numId, ilvl)
    if (info) {
      if (info.ordered && ilvl === 0) {
        // Top-level ordered list → our numbered-p paragraph type
        type = 'numbered-p'
      } else {
        // Nested ordered lists or any unordered list → preserve as BaseListPlugin node
        listStyleType = info.listStyle
        indent        = ilvl + 1
      }
    }
  }

  // Collect text children from runs (and simplified hyperlinks)
  const children: unknown[] = []

  for (const child of Array.from(para.children)) {
    if (child.localName === 'r') {
      children.push(...extractRunText(child, paraRunDefaults))
    } else if (child.localName === 'hyperlink') {
      for (const run of wChildren(child, 'r')) {
        children.push(...extractRunText(run, paraRunDefaults))
      }
    }
    // w:bookmarkStart, w:bookmarkEnd, w:proofErr, etc. silently ignored
  }

  if (children.length === 0) children.push({ text: '' })

  const node: Record<string, unknown> = { type, children }
  if (effectiveAlign && effectiveAlign !== 'left') node.textAlign  = effectiveAlign
  if (lineHeight != null)                          node.lineHeight  = lineHeight
  if (listStyleType)                               node.listStyleType = listStyleType
  if (indent != null)                              node.indent      = indent

  return node
}

// --- public entry point ---

export async function parseDocxToNodes(buffer: ArrayBuffer): Promise<unknown[]> {
  const zip = await JSZip.loadAsync(buffer)

  const docXml       = await zip.file('word/document.xml')?.async('text')
  const stylesXml    = await zip.file('word/styles.xml')?.async('text')
  const numberingXml = await zip.file('word/numbering.xml')?.async('text')

  if (!docXml) throw new Error('Invalid DOCX: missing word/document.xml')

  const styles    = stylesXml    ? parseStylesXml(stylesXml)       : new Map<string, StyleDef>()
  const numbering = numberingXml ? parseNumberingXml(numberingXml) : new Map<string, NumInfo>()

  const docDom = new DOMParser().parseFromString(docXml, 'application/xml')
  const body   = docDom.getElementsByTagNameNS(W, 'body')[0]
  if (!body) throw new Error('Invalid DOCX: missing w:body')

  const nodes: unknown[] = []
  for (const child of Array.from(body.children)) {
    if (child.localName === 'p') {
      const node = convertParagraph(child, styles, numbering)
      if (node) nodes.push(node)
    }
    // w:tbl (tables) currently omitted
  }

  if (nodes.length === 0) nodes.push({ type: 'p', children: [{ text: '' }] })

  return nodes
}
