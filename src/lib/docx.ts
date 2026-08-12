import React from 'react'
import { asValue } from '@/lib/plateTypes'
import type { PlateEditor } from 'platejs/react'
import { createSlateEditor } from 'platejs'
import { serializeHtml } from 'platejs/static'
import juice from 'juice'
import {
  htmlToDocxBlob,
  downloadDocx,
  DOCX_EXPORT_STYLES,
  DEFAULT_DOCX_MARGINS,
} from '@platejs/docx-io'
import { createSlatePlugin } from '@platejs/core'
import { LINE_HEIGHT_TARGET_TYPES } from '@/constants/blockTypes'
import { BaseBasicMarksPlugin, BaseBasicBlocksPlugin, BaseHighlightPlugin } from '@platejs/basic-nodes'
import {
  BaseTextAlignPlugin,
  BaseFontFamilyPlugin,
  BaseFontSizePlugin,
  BaseFontColorPlugin,
  BaseFontBackgroundColorPlugin,
  BaseLineHeightPlugin,
} from '@platejs/basic-styles'
import { BaseListPlugin } from '@platejs/list'

function FpPlaceholderStatic({ children }: { children: React.ReactNode }) {
  return React.createElement('span', null, children)
}

function NumberedParagraphStatic({
  children,
  style,
  className,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}) {
  return React.createElement(
    'div',
    { className: `slate-numbered-p${className ? ` ${className}` : ''}`, style },
    children
  )
}

const FP_PLACEHOLDER_STATIC_PLUGIN = createSlatePlugin({
  key: 'fp-placeholder',
  node: { isElement: true, isInline: true, type: 'fp-placeholder' },
}).withComponent(FpPlaceholderStatic)

const NUMBERED_P_STATIC_PLUGIN = createSlatePlugin({
  key: 'numbered-p',
  node: { isElement: true, type: 'numbered-p' },
}).withComponent(NumberedParagraphStatic)

// Match the live editor's LineHeightPlugin config so all explicit lineHeight values
// (including 1.5) are serialized as inline styles rather than being silently dropped.
const DOCX_LINE_HEIGHT_PLUGIN = BaseLineHeightPlugin.configure({
  inject: {
    nodeProps: { defaultNodeValue: 0 },
    targetPlugins: LINE_HEIGHT_TARGET_TYPES,
  },
})

const DOCX_EDITOR_PLUGINS = [
  BaseBasicMarksPlugin,
  BaseBasicBlocksPlugin,
  BaseHighlightPlugin,
  BaseTextAlignPlugin.configure({
    inject: { targetPlugins: LINE_HEIGHT_TARGET_TYPES },
  }),
  BaseFontFamilyPlugin,
  BaseFontSizePlugin,
  BaseFontColorPlugin,
  BaseFontBackgroundColorPlugin,
  DOCX_LINE_HEIGHT_PLUGIN,
  BaseListPlugin,
  FP_PLACEHOLDER_STATIC_PLUGIN,
  NUMBERED_P_STATIC_PLUGIN,
]

// Extra CSS rules added on top of DOCX_EXPORT_STYLES before juice inlines them.
// BaseTextAlignPlugin injects textAlign as an inline style via styleKey, so the attribute-selector
// rules below are a safety net for any code path that emits a data attribute instead.
// body line-height is set dynamically from the document's default at export time.
function buildCustomExportStyles(defaultLineHeight: number): string {
  return `
[data-slate-text-align="left"]    { text-align: left; }
[data-slate-text-align="center"]  { text-align: center; }
[data-slate-text-align="right"]   { text-align: right; }
[data-slate-text-align="justify"] { text-align: justify; }
body { line-height: ${defaultLineHeight}; }
`.trim()
}

// html-to-docx parses marks via semantic HTML tags (<em>, <u>, …), but when tags are nested
// it resets accumulated formatting at every level — so only the innermost mark survives.
//
// Two-part workaround that generalises to any mark combination:
//
// Part 1 — Bold as inline style:
//   Replace <strong> with <span style="font-weight: bold">. html-to-docx reads font-weight from
//   the style attribute and carries it forward even when the span wraps a semantic tag inside.
//
// Part 2 — Dummy sibling for nested semantic tags:
//   When a semantic formatting tag (<em>, <u>, <s>, …) has exactly ONE child that is also a
//   semantic formatting tag, html-to-docx never merges the outer tag's attribute into the base
//   because the "children.length > 1" branch in buildRun is never taken. Appending an empty
//   <span> sibling makes children.length === 2, triggering the merge so all accumulated marks
//   reach the final text run.
function fixNestedFormattingForDocx(html: string): string {
  // Step 1: replace <strong> with inline-style span
  const step1 = html
    .replace(/<strong[^>]*>/g, '<span style="font-weight: bold">')
    .replace(/<\/strong>/g, '</span>')

  // Step 2: add dummy span siblings using the DOM (browser-only, fine here)
  const FORMATTING_TAGS = new Set(['em', 'i', 'u', 'ins', 's', 'strike', 'del', 'sub', 'sup', 'mark'])

  const container = document.createElement('div')
  container.innerHTML = step1

  function addDummySiblings(el: Element): void {
    // Bottom-up: fix children before checking the parent
    for (const child of Array.from(el.children)) addDummySiblings(child)

    if (!FORMATTING_TAGS.has(el.tagName.toLowerCase())) return

    // If this formatting element's only child is another formatting element, html-to-docx's
    // buildRun will reset tempAttributes before accumulating this element's mark. An empty span
    // sibling makes childNodes.length === 2 so the outer mark gets merged into base attributes.
    const nodes = Array.from(el.childNodes)
    if (
      nodes.length === 1 &&
      nodes[0].nodeType === Node.ELEMENT_NODE &&
      FORMATTING_TAGS.has((nodes[0] as Element).tagName.toLowerCase())
    ) {
      el.appendChild(document.createElement('span'))
    }
  }

  for (const child of Array.from(container.children)) addDummySiblings(child)

  // Step 3: Group consecutive numbered-p blocks into <ol><li> runs so Word
  // renders them with its native List Number style.  Each run after the first
  // gets start="N" to continue the sequence across intervening headings/quotes.
  //
  // serializeHtml wraps all blocks in a <div data-slate-editor="true"> root; look
  // inside that wrapper so we see the actual block elements, not just the wrapper.
  const editorRoot = container.querySelector('[data-slate-editor="true"]') as HTMLElement | null
  const source = editorRoot ?? container
  const result = document.createElement('div')
  let globalNum = 0
  let currentOl: HTMLOListElement | null = null

  for (const child of Array.from(source.children)) {
    if (child.classList.contains('slate-numbered-p')) {
      if (!currentOl) {
        currentOl = document.createElement('ol')
        if (globalNum > 0) currentOl.setAttribute('start', String(globalNum + 1))
        result.appendChild(currentOl)
      }
      const li = document.createElement('li')
      li.innerHTML = (child as HTMLElement).innerHTML
      // Copy all attributes except class so that data-slate-text-align (and any
      // other data-slate-* attributes) are present for juice to inline as CSS.
      for (const attr of Array.from(child.attributes)) {
        if (attr.name !== 'class') li.setAttribute(attr.name, attr.value)
      }
      currentOl.appendChild(li)
      globalNum++
    } else {
      currentOl = null
      result.appendChild(child.cloneNode(true))
    }
  }

  return result.innerHTML
}

export async function downloadAsDocx(
  editor: PlateEditor,
  filename = 'office-action',
  defaultLineHeight = 2
): Promise<void> {
  // Pre-fill blocks that have no explicit lineHeight with the document default so that
  // every block gets an inline line-height style in the serialized HTML. This ensures
  // per-paragraph spacing is preserved accurately in the exported Word file.
  const valueWithLineHeight = (editor.children as Array<Record<string, unknown>>).map((node) =>
    node.lineHeight == null ? { ...node, lineHeight: defaultLineHeight } : node
  )

  // Serialize the Plate value to HTML using a static (no-hooks) editor
  const staticEditor = createSlateEditor({
    plugins: DOCX_EDITOR_PLUGINS as NonNullable<Parameters<typeof createSlateEditor>[0]>['plugins'],
    value: valueWithLineHeight as NonNullable<Parameters<typeof createSlateEditor>[0]>['value'],
  })
  const rawHtml = await serializeHtml(staticEditor, {})

  // Fix combined formatting marks so they survive the html-to-docx conversion
  const fixedHtml = fixNestedFormattingForDocx(rawHtml)

  // Wrap in a full HTML document with inlined styles.
  // body line-height acts as a fallback for any block the pre-fill missed (e.g. list items
  // or deeply-nested elements that aren't top-level children of editor.children).
  const customStyles = buildCustomExportStyles(defaultLineHeight)
  const fullHtml = `<html lang="en"><head><meta charset="utf-8" /><style>${DOCX_EXPORT_STYLES}\n${customStyles}</style></head><body>${fixedHtml}</body></html>`
  const juicedHtml = juice(fullHtml, {
    removeStyleTags: false,
    preserveMediaQueries: false,
    preserveFontFaces: false,
  })

  const blob = await htmlToDocxBlob(juicedHtml, {
    font: 'Times New Roman',
    margins: { ...DEFAULT_DOCX_MARGINS, top: 1440, right: 1440, bottom: 1440, left: 1440 },
    orientation: 'portrait',
  })
  downloadDocx(blob, filename)
}

export async function openDocxFile(
  editor: PlateEditor,
  file: File
): Promise<void> {
  const buffer = await file.arrayBuffer()
  const { parseDocxToNodes } = await import('./docxImport')
  const nodes = await parseDocxToNodes(buffer)
  editor.tf.setValue(asValue(nodes))
}

export function triggerFileInput(onFile: (file: File) => void): void {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = '.docx'
  input.onchange = () => {
    const file = input.files?.[0]
    if (file) onFile(file)
  }
  input.click()
}
