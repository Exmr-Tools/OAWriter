import type { PlateEditor } from 'platejs/react'
import type { MpepParagraph } from '@/types/mpep'
import { FP_PLACEHOLDER_TYPE } from '@/components/placeholder/FpPlaceholderPlugin'
import { NodeApi } from 'platejs'
import { ULIST_STYLE_TYPES } from '@platejs/list'
import { asNodePatch, asNodes } from '@/lib/plateTypes'

// Move cursor to the block immediately after afterIdx, creating one if needed.
// Used after every insert so the cursor lands on a clean new line.
export function moveToAfter(editor: PlateEditor, afterIdx: number): void {
  if (afterIdx >= editor.children.length) {
    editor.tf.insertNodes(
      asNodes([{ type: 'numbered-p', children: [{ text: '' }] }]),
      { at: [afterIdx] }
    )
  }
  editor.tf.select(editor.api.start([afterIdx]))
}

// Focus the editor and scroll the newly-inserted content into view.
// Must be deferred: insertNodes updates Slate state, then React re-renders asynchronously.
// If we call focus() synchronously, Slate can't yet map its selection to the new DOM nodes.
// setTimeout(0) waits for React to commit, then focus() correctly resolves the DOM position.
function scrollCursorIntoView(editor: PlateEditor): void {
  setTimeout(() => {
    editor.tf.focus()
    requestAnimationFrame(() => {
      const sel = window.getSelection()
      if (!sel || sel.rangeCount === 0) return
      const node = sel.getRangeAt(0).startContainer
      const el = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement
      el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    })
  }, 0)
}

export function isBlockEmpty(block: unknown): boolean {
  const b = block as { children?: unknown[] }
  return (
    (b?.children?.length ?? 0) > 0 &&
    b!.children!.every((c) => {
      const child = c as { text?: string }
      return typeof child.text === 'string' && child.text === ''
    })
  )
}

// Splits on inline markers: placeholders [1]/[***], __italic__, **bold**,
// <big>larger</big>, <small>smaller</small>
const SEGMENT_RE = /(\[\d+\]|\[\*\*\*\]|__[^_]+__|<big>[^<]*<\/big>|<small>[^<]*<\/small>|\*\*[^*]+\*\*)/
const PLACEHOLDER_INNER_RE = /(\[\d+\]|\[\*\*\*\])/

function placeholder(label: string) {
  return { type: FP_PLACEHOLDER_TYPE, placeholderLabel: label, children: [{ text: label }] }
}

function parseLineToNodes(line: string) {
  // Normalize any remaining single newlines/whitespace runs within a line
  const normalized = line.replace(/\n/g, ' ').replace(/ {2,}/g, ' ').trim()
  if (!normalized) return null

  const parts = normalized.split(SEGMENT_RE)
  return parts
    .filter((p) => p.length > 0)
    .flatMap((part) => {
      if (/^\[\d+\]$|^\[\*\*\*\]$/.test(part)) {
        return [placeholder(part)]
      }
      if (part.startsWith('__') && part.endsWith('__')) {
        return [{ text: part.slice(2, -2), italic: true }]
      }
      if (part.startsWith('<big>') && part.endsWith('</big>')) {
        return [{ text: part.slice(5, -6), fontSize: '14pt' }]
      }
      if (part.startsWith('<small>') && part.endsWith('</small>')) {
        return [{ text: part.slice(7, -8), fontSize: '10pt' }]
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        const inner = part.slice(2, -2)
        // Bold segment may contain a placeholder (e.g. **[1],**) — split and preserve both
        if (PLACEHOLDER_INNER_RE.test(inner)) {
          return inner.split(PLACEHOLDER_INNER_RE).filter(s => s.length > 0).map(s =>
            /^\[\d+\]$|^\[\*\*\*\]$/.test(s) ? placeholder(s) : { text: s, bold: true }
          )
        }
        return [{ text: inner, bold: true }]
      }
      return [{ text: part }]
    })
}

// Optional block-level line-height marker: <lh:N> at the start of a paragraph's text
// (after the type prefix). E.g. "<lh:1>Statutory text..." → single-spaced blockquote.
// Overrides the document default for that paragraph only.
const BLOCK_LH_RE = /^<lh:([\d.]+)>/

export function parseParagraphToBlocks(id: string, body: string) {
  // Split on blank lines (double newline = paragraph break in legal text)
  const paragraphs = body.split(/\n{2,}/)
  return paragraphs
    .map((para) => {
      // Paragraph-level type prefixes:
      //   ">"  → blockquote (statutory/regulatory quote, unnumbered, indented)
      //   "~"  → plain unnumbered paragraph (boilerplate, transitional text)
      //   none → numbered paragraph (joins the document's auto-numbering)
      const isBlockquote = para.startsWith('>')
      const isPlain = !isBlockquote && para.startsWith('~')
      let text = (isBlockquote || isPlain) ? para.slice(1) : para

      // Optional line-height override for this block
      let lineHeight: number | undefined
      const lhMatch = text.match(BLOCK_LH_RE)
      if (lhMatch) {
        lineHeight = Number(lhMatch[1])
        text = text.slice(lhMatch[0].length)
      }

      const children = parseLineToNodes(text)
      if (!children || children.length === 0) return null
      const type = isBlockquote ? 'blockquote' : isPlain ? 'p' : 'numbered-p'
      const block: Record<string, unknown> = { type, 'data-fp-id': id, children }
      if (lineHeight !== undefined) block.lineHeight = lineHeight
      return block
    })
    .filter(Boolean)
}

export function isHeadingInDoc(editor: PlateEditor, headingLabel: string): boolean {
  const target = headingLabel.trim()
  for (const [node] of editor.api.nodes({ at: [], match: (n) => (n as Record<string, unknown>)['type'] === 'p' })) {
    const n = node as { children?: Array<{ text?: string }> }
    const text = (n.children ?? []).map((c) => c.text ?? '').join('').trim()
    if (text === target) return true
  }
  return false
}

export function isHeaderPresent(editor: PlateEditor, headerId: string): boolean {
  // Strip trailing dot (scraper captures sentence punctuation: "form paragraph 7.03.")
  // then match by prefix so "7.03" matches both "7.03.aia" and "7.03.fti".
  const base = headerId.replace(/\.$/, '')
  const nodes = Array.from(
    editor.api.nodes({
      at: [],
      match: (n) => {
        const id = (n as Record<string, unknown>)['data-fp-id'] as string | undefined
        return !!id && (id === base || id.startsWith(base + '.'))
      },
    })
  )
  return nodes.length > 0
}

function applyListContinuation(
  editor: PlateEditor,
  blockBefore: Record<string, unknown> | undefined,
  blockAfter: Record<string, unknown> | undefined,
  at: number
): void {
  const listType = blockBefore?.listStyleType as string | undefined
  if (
    blockBefore?.indent != null &&
    blockAfter?.indent != null &&
    listType &&
    listType === (blockAfter.listStyleType as string | undefined) &&
    !ULIST_STYLE_TYPES.includes(listType)
  ) {
    const prevStart = (blockBefore.listStart as number | undefined) ?? 1
    editor.tf.setNodes(
      asNodePatch({ listRestartPolite: prevStart + 1 }),
      { at: [at] }
    )
  }
}

/**
 * Returns the top-level index where the next insertion should land.
 * If the cursor is on an empty block, returns that block's index so the
 * insert replaces it rather than pushing it further down the document.
 */
export function getInsertAt(editor: PlateEditor): number {
  const sel = editor.selection
  if (!sel) return editor.children.length
  const idx = sel.anchor.path[0]
  return isBlockEmpty(editor.children[idx]) ? idx : idx + 1
}

/**
 * Insert a heading paragraph at `at` (defaults to after cursor).
 * Returns the index immediately after the inserted heading so callers can chain.
 *
 * If the insertion point is an empty block, that block is removed first so it
 * doesn't accumulate below the new content.
 */
export function doInsertHeading(editor: PlateEditor, label: string, at?: number): number {
  const insertAt = at ?? getInsertAt(editor)

  // If inserting at an empty block, remove it first so it doesn't linger below.
  const willRemoveEmpty = insertAt < editor.children.length && isBlockEmpty(editor.children[insertAt])
  // Snapshot adjacent blocks BEFORE any mutation for list-continuity detection.
  const blockBefore = insertAt > 0
    ? NodeApi.get(editor, [insertAt - 1]) as Record<string, unknown> | undefined
    : undefined
  // When replacing an empty block the relevant "after" block is one further out.
  const blockAfter = NodeApi.get(editor, [willRemoveEmpty ? insertAt + 1 : insertAt]) as Record<string, unknown> | undefined

  if (willRemoveEmpty) {
    editor.tf.removeNodes({ at: [insertAt] })
  }

  editor.tf.insertNodes(
    asNodes([{ type: 'p', align: 'center', children: [{ text: label, bold: true }] }]),
    { at: [insertAt] }
  )

  // Move cursor to the line after the heading so the next insert lands there.
  moveToAfter(editor, insertAt + 1)
  scrollCursorIntoView(editor)

  applyListContinuation(editor, blockBefore, blockAfter, insertAt + 1)
  return insertAt + 1
}

/**
 * Insert a form paragraph at `at` (defaults to after cursor).
 * Returns the index immediately after the last inserted block so callers can chain.
 *
 * If the insertion point is an empty block, that block is removed first so it
 * doesn't accumulate below the new content.
 */
export function doInsert(editor: PlateEditor, paragraph: MpepParagraph, at?: number): number {
  const insertAt = at ?? getInsertAt(editor)
  const blocks = parseParagraphToBlocks(paragraph.id, paragraph.body)
  if (blocks.length === 0) return insertAt

  // If inserting at an empty block, remove it first so it doesn't linger below.
  const willRemoveEmpty = insertAt < editor.children.length && isBlockEmpty(editor.children[insertAt])
  // Snapshot adjacent blocks BEFORE any mutation for list-continuity detection.
  const blockBefore = insertAt > 0
    ? NodeApi.get(editor, [insertAt - 1]) as Record<string, unknown> | undefined
    : undefined
  const blockAfter = NodeApi.get(editor, [willRemoveEmpty ? insertAt + 1 : insertAt]) as Record<string, unknown> | undefined

  if (willRemoveEmpty) {
    editor.tf.removeNodes({ at: [insertAt] })
  }

  editor.tf.insertNodes(
    asNodes(blocks),
    { at: [insertAt] }
  )

  const nextAt = insertAt + blocks.length

  // Navigate to the first placeholder in the newly inserted blocks only.
  // If no placeholders, move cursor to the clean line after the FP.
  const newPlaceholders = Array.from(
    editor.api.nodes({
      at: [],
      match: (n) => (n as { type?: string }).type === FP_PLACEHOLDER_TYPE,
    })
  ).filter(([, path]) => path[0] >= insertAt && path[0] < nextAt)

  if (newPlaceholders.length > 0) {
    editor.tf.select(newPlaceholders[0][1])
  } else {
    moveToAfter(editor, nextAt)
  }
  scrollCursorIntoView(editor)

  applyListContinuation(editor, blockBefore, blockAfter, nextAt)
  return nextAt
}
