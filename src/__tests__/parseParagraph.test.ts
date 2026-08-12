import { describe, it, expect } from 'vitest'
import { FP_PLACEHOLDER_TYPE } from '@/components/placeholder/FpPlaceholderPlugin'
import { parseParagraphToBlocks } from '@/components/form-paragraphs/insertFormParagraph'

describe('parseParagraphToBlocks', () => {
  it('returns a single paragraph block for body with no newlines', () => {
    const blocks = parseParagraphToBlocks('7.39', 'This action is made final.')
    expect(blocks).toHaveLength(1)
    expect(blocks[0]).toMatchObject({ type: 'p', 'data-fp-id': '7.39' })
  })

  it('splits on double newlines into separate paragraph blocks', () => {
    const body = 'First paragraph.\n\nSecond paragraph.'
    const blocks = parseParagraphToBlocks('7.40', body)
    expect(blocks).toHaveLength(2)
    const children0 = (blocks[0] as { children: { text: string }[] }).children
    const children1 = (blocks[1] as { children: { text: string }[] }).children
    expect(children0[0]).toEqual({ text: 'First paragraph.' })
    expect(children1[0]).toEqual({ text: 'Second paragraph.' })
  })

  it('normalizes single newlines to spaces within a paragraph', () => {
    const body = 'Claim [1] is\nrejected under 35 USC [2].'
    const blocks = parseParagraphToBlocks('7.15', body)
    expect(blocks).toHaveLength(1)
    const children = (blocks[0] as { children: unknown[] }).children
    // Single \n should become a space — "is rejected" not "is\nrejected"
    const textBefore = children.find(
      (n) => typeof n === 'object' && 'text' in (n as object) && (n as { text: string }).text.includes('is')
    ) as { text: string } | undefined
    expect(textBefore?.text).not.toContain('\n')
  })

  it('parses numbered bracket placeholders [1], [2] inside a block', () => {
    const body = 'Claim [1] rejected under 35 USC [2].'
    const blocks = parseParagraphToBlocks('7.15', body)
    const children = (blocks[0] as { children: unknown[] }).children
    const placeholders = children.filter(
      (n) => typeof n === 'object' && 'type' in (n as object) && (n as { type: string }).type === FP_PLACEHOLDER_TYPE
    )
    expect(placeholders).toHaveLength(2)
  })

  it('parses [***] placeholder format', () => {
    const body = 'Claims [***] are rejected.'
    const blocks = parseParagraphToBlocks('x', body)
    const children = (blocks[0] as { children: unknown[] }).children
    const ph = children.find(
      (n) => typeof n === 'object' && 'type' in (n as object)
    ) as { type: string; placeholderLabel: string } | undefined
    expect(ph?.type).toBe(FP_PLACEHOLDER_TYPE)
    expect(ph?.placeholderLabel).toBe('[***]')
  })

  it('converts __text__ to an italic leaf node', () => {
    const blocks = parseParagraphToBlocks('7.15', 'See __In re Bartfeld__, 925 F.2d 1450.')
    const children = (blocks[0] as { children: unknown[] }).children
    const italic = children.find(
      (n) => typeof n === 'object' && (n as Record<string,unknown>).italic === true
    ) as { text: string; italic: boolean } | undefined
    expect(italic?.text).toBe('In re Bartfeld')
    expect(italic?.italic).toBe(true)
  })

  it('converts **text** to a bold leaf node', () => {
    const blocks = parseParagraphToBlocks('7.15', 'Rejected under **35 U.S.C. 102**.')
    const children = (blocks[0] as { children: unknown[] }).children
    const bold = children.find(
      (n) => typeof n === 'object' && (n as Record<string,unknown>).bold === true
    ) as { text: string; bold: boolean } | undefined
    expect(bold?.text).toBe('35 U.S.C. 102')
    expect(bold?.bold).toBe(true)
  })

  it('extracts a placeholder from inside a bold segment (**[1],**)', () => {
    const blocks = parseParagraphToBlocks('2.01', 'App. **[1],** filed **[2]**.')
    const children = (blocks[0] as { children: unknown[] }).children
    const phs = children.filter(
      (n) => typeof n === 'object' && (n as Record<string,unknown>).type === FP_PLACEHOLDER_TYPE
    )
    expect(phs).toHaveLength(2)
  })

  it('marks a paragraph starting with > as type blockquote', () => {
    const blocks = parseParagraphToBlocks('6.22', '>When the invention consists of an improvement.')
    expect((blocks[0] as Record<string, unknown>).type).toBe('blockquote')
    const children = (blocks[0] as { children: { text: string }[] }).children
    expect(children[0].text).toMatch(/^When the invention/)
  })

  it('plain paragraph does not have an indent property', () => {
    const blocks = parseParagraphToBlocks('7.39', 'This action is made final.')
    expect((blocks[0] as Record<string, unknown>).indent).toBeUndefined()
  })

  it('handles body with trailing newlines cleanly', () => {
    const body = 'Claim [1] rejected.\n\n[2]\n'
    const blocks = parseParagraphToBlocks('x', body)
    // Should get 2 blocks, not 3 (trailing \n doesn't add empty block)
    expect(blocks).toHaveLength(2)
  })

  it('attaches data-fp-id to every block', () => {
    const body = 'Para one.\n\nPara two.'
    const blocks = parseParagraphToBlocks('7.103', body)
    blocks.forEach((b) => {
      expect((b as Record<string, unknown>)['data-fp-id']).toBe('7.103')
    })
  })
})
