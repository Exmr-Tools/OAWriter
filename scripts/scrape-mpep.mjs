/**
 * Scrapes MPEP form paragraphs from the USPTO website.
 * Run once: node scripts/scrape-mpep.mjs
 * Output: src/data/mpep-paragraphs.json
 *
 * Inline formatting is preserved in body text using these markers:
 *   __text__   italic  (<i>, <em>)           — case names, Latin phrases
 *   **text**   bold    (<b>, <strong>)        — statute / regulation citations
 * Blockquote paragraphs are prefixed with ">" to indicate indentation.
 */

import { parse } from 'node-html-parser'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_FILE = join(__dirname, '../src/data/mpep-paragraphs.json')

const URL = 'https://www.uspto.gov/web/offices/pac/mpep/mpep-9095-Form-Paragraph-Chapter.html'

// Matches form paragraph numbers like 7.39, 7.39.01, 7.40.02.aia, 2.10, 15.05
const FP_NUMBER_RE = /^(\d+\.\d[\d.]*(?:\.[a-z]+)?)\s+(.+)/i

// Matches placeholders: [1], [2], [***], [*], [i], etc.
const PLACEHOLDER_RE = /\[\d+\]|\[\*+\]|\[[ivxlIVXL]+\]/g

// Matches "preceded by form paragraph X.XX" or "use with form paragraph X.XX"
const REQUIRED_HEADER_RE = /(?:preceded by|use with|must be preceded by)\s+form\s+paragraph\s+([\d.]+(?:\.[a-z]+)?)/gi

function extractPlaceholders(text) {
  const matches = text.match(PLACEHOLDER_RE) ?? []
  return [...new Set(matches)]
}

function extractRequiredHeaders(examinerNote) {
  const headers = []
  let match
  REQUIRED_HEADER_RE.lastIndex = 0
  while ((match = REQUIRED_HEADER_RE.exec(examinerNote)) !== null) {
    headers.push(match[1])
  }
  return [...new Set(headers)]
}

function cleanText(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\[top\]/gi, '')
    .replace(/ /g, ' ')
    .trim()
}

// Walks an element's child nodes and returns a string that preserves italic and
// bold formatting using __..__ and **..** markers respectively.
// Links (<a>) are unwrapped to plain text — URLs aren't useful in the editor.
function richText(el) {
  const parts = []
  for (const node of el.childNodes) {
    const tag = node.tagName?.toUpperCase()
    if (!tag) {
      // Text node
      parts.push(node.text.replace(/ /g, ' '))
    } else if (tag === 'I' || tag === 'EM') {
      const inner = node.text.replace(/\s+/g, ' ').replace(/ /g, ' ').trim()
      if (inner) parts.push(`__${inner}__`)
    } else if (tag === 'B' || tag === 'STRONG') {
      // Recurse so <b><a>35 U.S.C. 102</a></b> yields bold text.
      // Don't wrap placeholder-only content — [1] stays a placeholder, not bold text.
      const inner = richText(node)
      if (inner) {
        parts.push(/^\[\d+\]$|^\[\*\*\*\]$/.test(inner.trim()) ? inner : `**${inner}**`)
      }
    } else {
      // A, SPAN, SUP, etc. — extract text only
      parts.push(richText(node))
    }
  }
  return parts.join('')
    .replace(/\[top\]/gi, '')
    .replace(/ {2,}/g, ' ')
    .trim()
}

async function scrape() {
  console.log('Fetching MPEP form paragraphs...')
  const res = await fetch(URL)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const html = await res.text()
  console.log(`Fetched ${Math.round(html.length / 1024)}KB`)

  const root = parse(html)
  const paragraphs = []

  // Each form paragraph is a <div class="formPara1"> containing:
  //   <a name="fpX.XX">  — the anchor/id
  //   <h1 class="page-title">X.XX  Title</h1>  — number + title
  //   <p>...</p>  — body paragraphs (may be multiple)
  //   <h3>Examiner Note:</h3><ul>...</ul>  — optional examiner notes
  const divs = root.querySelectorAll('div.formPara1')
  console.log(`Found ${divs.length} formPara1 divs`)

  for (const div of divs) {
    // Extract id from <a name="fpX.XX">
    const anchor = div.querySelector('a[name]')
    const anchorName = anchor?.getAttribute('name') ?? ''
    const id = anchorName.startsWith('fp') ? anchorName.slice(2) : anchorName

    // Extract number + title from <h1 class="page-title">
    const h1 = div.querySelector('h1.page-title')
    if (!h1) continue
    const headingText = cleanText(h1.text)
    const match = headingText.match(FP_NUMBER_RE)
    if (!match) continue

    const [, number, title] = match
    const chapter = number.split('.')[0]

    // Collect body paragraphs and examiner note items
    const bodyParts = []
    const examinerNoteParts = []
    let inExaminerNote = false
    // Buffer for top-level inline content (B, I, A, text nodes) between block elements
    const inlineBuffer = []

    function flushInline() {
      const t = inlineBuffer.join('').replace(/ {2,}/g, ' ').trim()
      if (t) bodyParts.push(t)
      inlineBuffer.length = 0
    }

    for (const child of div.childNodes) {
      const tag = child.tagName?.toUpperCase()
      const text = tag ? cleanText(child.text) : child.text?.replace(/\s+/g, ' ').trim()

      if (!tag) {
        // Raw text node between block elements — buffer it
        if (text && !inExaminerNote) inlineBuffer.push(text)
        continue
      }

      if (tag === 'H1') { flushInline(); continue }

      if (tag === 'H3' && text.toLowerCase().includes('examiner note')) {
        flushInline()
        inExaminerNote = true
        continue
      }

      if (inExaminerNote) {
        if (tag === 'UL' || tag === 'OL') {
          child.querySelectorAll('li').forEach(li => {
            const t = cleanText(li.text)
            if (t) examinerNoteParts.push(t)
          })
        } else if (tag === 'P' && text) {
          examinerNoteParts.push(text)
        }
      } else {
        if (tag === 'P') {
          flushInline()
          const t = richText(child)
          if (t) bodyParts.push(t)
        } else if (tag === 'BLOCKQUOTE') {
          // Statutory/regulatory quotes — capture <p> and <li> children as indented paragraphs
          flushInline()
          child.querySelectorAll('p, li').forEach(el => {
            const t = richText(el)
            if (t) bodyParts.push(`>${t}`)
          })
        } else if (tag === 'OL' || tag === 'UL') {
          flushInline()
          child.querySelectorAll('li').forEach(li => {
            const t = richText(li)
            if (t) bodyParts.push(t)
          })
        } else if (tag === 'DIV') {
          // Certificate templates and other block containers
          flushInline()
          child.querySelectorAll('p').forEach(p => {
            const t = richText(p)
            if (t) bodyParts.push(t)
          })
        } else if (tag === 'I' || tag === 'EM') {
          if (text) inlineBuffer.push(`__${text}__`)
        } else if (tag === 'B' || tag === 'STRONG') {
          const rt = richText(child)
          if (rt) inlineBuffer.push(/^\[\d+\]$|^\[\*\*\*\]$/.test(rt.trim()) ? rt : `**${rt}**`)
        } else if (['A', 'SPAN'].includes(tag)) {
          if (text) inlineBuffer.push(text)
        }
      }
    }
    flushInline()

    if (bodyParts.length === 0) continue

    const body = bodyParts.join('\n\n')
    const examinerNote = examinerNoteParts.join('\n')
    const placeholders = extractPlaceholders(body)
    const requiredHeaders = extractRequiredHeaders(examinerNote)

    paragraphs.push({
      id: id || number,
      number,
      chapter,
      title: cleanText(title),
      body,
      placeholders,
      examinerNote,
      requiredHeaders,
    })
  }

  console.log(`Parsed ${paragraphs.length} form paragraphs`)

  // Sort by chapter then by number within chapter
  paragraphs.sort((a, b) => {
    const aNum = a.number.split('.').map(p => isNaN(Number(p)) ? p : Number(p).toString().padStart(4, '0')).join('.')
    const bNum = b.number.split('.').map(p => isNaN(Number(p)) ? p : Number(p).toString().padStart(4, '0')).join('.')
    return aNum.localeCompare(bNum)
  })

  writeFileSync(OUT_FILE, JSON.stringify(paragraphs, null, 2))
  console.log(`Written to ${OUT_FILE}`)

  // Quick sanity check
  const chapters = [...new Set(paragraphs.map(p => p.chapter))].sort((a, b) => Number(a) - Number(b))
  console.log(`Chapters: ${chapters.join(', ')}`)
  console.log(`Sample: ${paragraphs[0]?.number} — ${paragraphs[0]?.title}`)
  const withPlaceholders = paragraphs.filter(p => p.placeholders.length > 0)
  console.log(`With placeholders: ${withPlaceholders.length}`)
  const withHeaders = paragraphs.filter(p => p.requiredHeaders.length > 0)
  console.log(`With required headers: ${withHeaders.length}`)

  // Formatting stats
  const withItalic = paragraphs.filter(p => p.body.includes('__'))
  const withBold = paragraphs.filter(p => p.body.includes('**'))
  const withIndent = paragraphs.filter(p => p.body.includes('\n>') || p.body.startsWith('>'))
  console.log(`With italic text: ${withItalic.length}`)
  console.log(`With bold statute citations: ${withBold.length}`)
  console.log(`With indented (blockquote) paragraphs: ${withIndent.length}`)
}

scrape().catch(err => {
  console.error(err)
  process.exit(1)
})
