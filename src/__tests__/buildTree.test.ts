import { describe, it, expect } from 'vitest'
import { buildTree } from '@/components/form-paragraphs/buildTree'
import type { MpepParagraph } from '@/types/mpep'

function para(id: string, number: string, chapter: string): MpepParagraph {
  return { id, number, chapter, title: `Title ${number}`, body: 'Body.', placeholders: [] }
}

describe('buildTree', () => {
  it('returns empty array for empty input', () => {
    expect(buildTree([])).toHaveLength(0)
  })

  it('creates one chapter node per unique chapter', () => {
    const fps = [para('7.01', '7.01', '7'), para('8.01', '8.01', '8')]
    const tree = buildTree(fps)
    expect(tree).toHaveLength(2)
    expect(tree.map((n) => n.number)).toEqual(expect.arrayContaining(['7', '8']))
  })

  it('chapter node has paragraph === null and depth 0', () => {
    const tree = buildTree([para('7.01', '7.01', '7')])
    expect(tree[0].paragraph).toBeNull()
    expect(tree[0].depth).toBe(0)
  })

  it('fp node is attached under its chapter with correct paragraph reference', () => {
    const fp = para('7.01', '7.01', '7')
    const tree = buildTree([fp])
    const fpNode = tree[0].children[0]
    expect(fpNode.paragraph).toBe(fp)
    expect(fpNode.number).toBe('7.01')
    expect(fpNode.depth).toBe(1)
  })

  it('nests child FP under parent via dot-prefix matching', () => {
    const fps = [para('7.40', '7.40', '7'), para('7.40.01', '7.40.01', '7')]
    const tree = buildTree(fps)
    const parentNode = tree[0].children[0]
    expect(parentNode.number).toBe('7.40')
    expect(parentNode.children).toHaveLength(1)
    expect(parentNode.children[0].number).toBe('7.40.01')
  })

  it('assigns increasing depth: chapter=0, top-level fp=1, child fp=2', () => {
    const fps = [para('7.40', '7.40', '7'), para('7.40.01', '7.40.01', '7')]
    const tree = buildTree(fps)
    const topFp = tree[0].children[0]
    const childFp = topFp.children[0]
    expect(topFp.depth).toBe(1)
    expect(childFp.depth).toBe(2)
  })

  it('paragraphs without a dot-prefix parent go directly under chapter', () => {
    const fps = [
      para('7.01', '7.01', '7'),
      para('7.02', '7.02', '7'),
      para('7.03', '7.03', '7'),
    ]
    const tree = buildTree(fps)
    expect(tree[0].children).toHaveLength(3)
  })

  it('multiple chapters keep paragraphs grouped correctly', () => {
    const fps = [
      para('7.01', '7.01', '7'),
      para('7.02', '7.02', '7'),
      para('8.01', '8.01', '8'),
    ]
    const tree = buildTree(fps)
    const ch7 = tree.find((n) => n.number === '7')!
    const ch8 = tree.find((n) => n.number === '8')!
    expect(ch7.children).toHaveLength(2)
    expect(ch8.children).toHaveLength(1)
  })

  it('picks the longest matching prefix as parent (grandparent-skipping)', () => {
    // 7.40.01 should nest under 7.40, not directly under chapter 7
    const fps = [
      para('7.40', '7.40', '7'),
      para('7.40.01', '7.40.01', '7'),
      para('7.40.01.fti', '7.40.01.fti', '7'),
    ]
    const tree = buildTree(fps)
    const ch7 = tree[0]
    const node740 = ch7.children[0]
    const node74001 = node740.children[0]
    expect(node74001.number).toBe('7.40.01')
    expect(node74001.children[0].number).toBe('7.40.01.fti')
  })
})
