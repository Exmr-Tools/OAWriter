import { describe, it, expect, vi } from 'vitest'
import {
  isBlockEmpty,
  isHeaderPresent,
  isHeadingInDoc,
  getInsertAt,
  doInsert,
  doInsertHeading,
} from '@/components/form-paragraphs/insertFormParagraph'
import { FP_PLACEHOLDER_TYPE } from '@/components/placeholder/FpPlaceholderPlugin'
import type { MpepParagraph } from '@/types/mpep'

type Block = Record<string, unknown>

function makeEditor({
  children = [] as Block[],
  nodes = [] as Array<[unknown, number[]]>,
  selection = undefined as { anchor: { path: number[]; offset: number } } | null | undefined,
} = {}) {
  return {
    children,
    selection,
    api: {
      nodes: vi.fn().mockImplementation(
        ({ match }: { match: (n: unknown) => boolean }) =>
          nodes.filter(([n]) => match(n))
      ),
      // Returns a collapsed point at the start of the given path
      start: vi.fn().mockImplementation((path: number[]) => ({ path: [...path, 0], offset: 0 })),
    },
    tf: {
      insertNodes: vi.fn(),
      removeNodes: vi.fn(),
      setNodes: vi.fn(),
      select: vi.fn(),
      focus: vi.fn(),
    },
  }
}

function para(overrides: Partial<MpepParagraph> = {}): MpepParagraph {
  return {
    id: 'test-fp',
    number: '7.99',
    chapter: '7',
    title: 'Test FP',
    body: 'Simple body text.',
    placeholders: [],
    ...overrides,
  }
}

// ─── isBlockEmpty ─────────────────────────────────────────────────────────────

describe('isBlockEmpty', () => {
  it('returns true for a block whose only child is an empty text node', () => {
    expect(isBlockEmpty({ children: [{ text: '' }] })).toBe(true)
  })

  it('returns true when all text children are empty', () => {
    expect(isBlockEmpty({ children: [{ text: '' }, { text: '' }] })).toBe(true)
  })

  it('returns false when any text node has content', () => {
    expect(isBlockEmpty({ children: [{ text: 'hello' }] })).toBe(false)
  })

  it('returns false for a block with no children', () => {
    expect(isBlockEmpty({ children: [] })).toBe(false)
  })

  it('returns false when a child is an element (not a text node)', () => {
    expect(isBlockEmpty({ children: [{ type: FP_PLACEHOLDER_TYPE, children: [] }] })).toBe(false)
  })

  it('returns false for undefined', () => {
    expect(isBlockEmpty(undefined)).toBe(false)
  })
})

// ─── getInsertAt ──────────────────────────────────────────────────────────────

describe('getInsertAt', () => {
  it('returns editor.children.length when there is no selection', () => {
    const editor = makeEditor({ children: [{ children: [{ text: 'a' }] }], selection: null })
    expect(getInsertAt(editor as never)).toBe(1)
  })

  it('returns path[0] + 1 when cursor is on a non-empty block', () => {
    const editor = makeEditor({
      children: [{ children: [{ text: 'line' }] }, { children: [{ text: 'line2' }] }],
      selection: { anchor: { path: [0, 0], offset: 0 } },
    })
    expect(getInsertAt(editor as never)).toBe(1)
  })

  it('returns path[0] (not +1) when cursor is on an empty block', () => {
    const editor = makeEditor({
      children: [{ children: [{ text: 'content' }] }, { children: [{ text: '' }] }],
      selection: { anchor: { path: [1, 0], offset: 0 } },
    })
    expect(getInsertAt(editor as never)).toBe(1)
  })
})

// ─── isHeaderPresent ──────────────────────────────────────────────────────────

describe('isHeaderPresent', () => {
  it('returns false when no nodes have a matching data-fp-id', () => {
    const editor = makeEditor({ nodes: [] })
    expect(isHeaderPresent(editor as never, '7.103')).toBe(false)
  })

  it('returns true when a node has the exact matching data-fp-id', () => {
    const node = { type: 'p', 'data-fp-id': '7.103' }
    const editor = makeEditor({ nodes: [[node, [0]]] })
    expect(isHeaderPresent(editor as never, '7.103')).toBe(true)
  })

  it('returns true when a suffix variant is present (7.03 → 7.03.aia)', () => {
    const node = { type: 'p', 'data-fp-id': '7.103.aia' }
    const editor = makeEditor({ nodes: [[node, [0]]] })
    expect(isHeaderPresent(editor as never, '7.103')).toBe(true)
  })

  it('returns false when only a different fp-id is present', () => {
    const node = { type: 'p', 'data-fp-id': '7.102' }
    const editor = makeEditor({ nodes: [[node, [0]]] })
    expect(isHeaderPresent(editor as never, '7.103')).toBe(false)
  })

  it('strips a trailing dot from the header ID before matching', () => {
    const node = { type: 'p', 'data-fp-id': '7.103.aia' }
    const editor = makeEditor({ nodes: [[node, [0]]] })
    // Scraped IDs sometimes have trailing sentence punctuation (e.g. "7.103.")
    expect(isHeaderPresent(editor as never, '7.103.')).toBe(true)
  })

  it('does not match a partial prefix that is not a full segment boundary', () => {
    const node = { type: 'p', 'data-fp-id': '7.103.aia' }
    const editor = makeEditor({ nodes: [[node, [0]]] })
    expect(isHeaderPresent(editor as never, '7.10')).toBe(false)
  })
})

// ─── isHeadingInDoc ───────────────────────────────────────────────────────────

describe('isHeadingInDoc', () => {
  it('returns false when no paragraph matches', () => {
    const node = { type: 'p', children: [{ text: 'Something else' }] }
    const editor = makeEditor({ nodes: [[node, [0]]] })
    expect(isHeadingInDoc(editor as never, 'Response to Arguments')).toBe(false)
  })

  it('returns true when a paragraph text exactly matches the label', () => {
    const node = { type: 'p', children: [{ text: 'Response to Arguments' }] }
    const editor = makeEditor({ nodes: [[node, [0]]] })
    expect(isHeadingInDoc(editor as never, 'Response to Arguments')).toBe(true)
  })

  it('trims whitespace from both sides before comparing', () => {
    const node = { type: 'p', children: [{ text: '  Response to Arguments  ' }] }
    const editor = makeEditor({ nodes: [[node, [0]]] })
    expect(isHeadingInDoc(editor as never, 'Response to Arguments')).toBe(true)
  })

  it('does not match a partial substring', () => {
    const node = { type: 'p', children: [{ text: 'Response to Arguments — See Below' }] }
    const editor = makeEditor({ nodes: [[node, [0]]] })
    expect(isHeadingInDoc(editor as never, 'Response to Arguments')).toBe(false)
  })

  it('concatenates multiple text children before comparing', () => {
    const node = { type: 'p', children: [{ text: 'Double ' }, { text: 'Patenting', bold: true }] }
    const editor = makeEditor({ nodes: [[node, [0]]] })
    expect(isHeadingInDoc(editor as never, 'Double Patenting')).toBe(true)
  })
})

// ─── doInsert ─────────────────────────────────────────────────────────────────

describe('doInsert', () => {
  it('inserts at editor.children.length when no selection exists', () => {
    const editor = makeEditor({ children: [{}, {}] }) // length = 2, no selection
    doInsert(editor as never, para({ body: 'Plain text.' }))
    expect(editor.tf.insertNodes).toHaveBeenCalledWith(
      expect.any(Array),
      { at: [2] }
    )
  })

  it('does nothing when paragraph body produces no blocks', () => {
    const editor = makeEditor()
    doInsert(editor as never, para({ body: '' }))
    expect(editor.tf.insertNodes).not.toHaveBeenCalled()
  })

  it('attaches data-fp-id to every inserted block', () => {
    const editor = makeEditor()
    doInsert(editor as never, para({ id: '7.42', body: 'Block one.\n\nBlock two.' }))
    const [blocks] = (editor.tf.insertNodes as ReturnType<typeof vi.fn>).mock.calls[0]
    blocks.forEach((b: Block) => expect(b['data-fp-id']).toBe('7.42'))
  })

  it('selects the first new placeholder, not a pre-existing one', () => {
    const oldPlaceholder = { type: FP_PLACEHOLDER_TYPE }
    const newPlaceholder = { type: FP_PLACEHOLDER_TYPE }
    const oldPath = [0, 1]
    const newPath = [2, 0] // insertAt = 2 (children.length with no selection)

    const editor = makeEditor({
      children: [{}, {}],
      nodes: [[oldPlaceholder, oldPath], [newPlaceholder, newPath]],
    })
    doInsert(editor as never, para({ body: 'Claim [1] rejected.' }))
    expect(editor.tf.select).toHaveBeenCalledWith(newPath)
    expect(editor.tf.select).not.toHaveBeenCalledWith(oldPath)
  })

  it('moves cursor after the inserted blocks when there are no placeholders', () => {
    const editor = makeEditor({ children: [{}], nodes: [] }) // insertAt = 1
    doInsert(editor as never, para({ body: 'No placeholders here.' }))
    // No placeholder → moveToAfter(nextAt) → tf.select(api.start([nextAt]))
    expect(editor.tf.select).toHaveBeenCalledWith(
      expect.objectContaining({ path: expect.arrayContaining([2]) })
    )
  })
})

// ─── doInsertHeading ──────────────────────────────────────────────────────────

describe('doInsertHeading', () => {
  it('inserts at editor.children.length when no selection exists', () => {
    const editor = makeEditor({ children: [{}, {}] }) // length = 2
    doInsertHeading(editor as never, 'Response to Arguments')
    expect(editor.tf.insertNodes).toHaveBeenCalledWith(
      expect.any(Array),
      { at: [2] }
    )
  })

  it('inserts a centered paragraph with bold and italic text', () => {
    const editor = makeEditor()
    doInsertHeading(editor as never, 'Double Patenting')
    const [nodes] = (editor.tf.insertNodes as ReturnType<typeof vi.fn>).mock.calls[0]
    expect(nodes[0]).toMatchObject({
      type: 'p',
      align: 'center',
      children: [{ text: 'Double Patenting', bold: true, italic: true }],
    })
  })

  it('uses the exact label string as the text content', () => {
    const editor = makeEditor()
    doInsertHeading(editor as never, '102 rejections')
    const [nodes] = (editor.tf.insertNodes as ReturnType<typeof vi.fn>).mock.calls[0]
    expect(nodes[0].children[0].text).toBe('102 rejections')
  })

  it('returns the index immediately after the inserted heading', () => {
    const editor = makeEditor({ children: [{}, {}] }) // insertAt = 2
    const result = doInsertHeading(editor as never, 'Heading')
    expect(result).toBe(3) // insertAt + 1
  })
})
