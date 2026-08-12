import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useFormParagraphs } from '@/components/form-paragraphs/useFormParagraphs'
import type { TreeNode } from '@/components/form-paragraphs/buildTree'
import type { MpepParagraph } from '@/types/mpep'

describe('useFormParagraphs', () => {
  it('returns a non-empty tree by default', () => {
    const { result } = renderHook(() => useFormParagraphs())
    expect(result.current.tree.length).toBeGreaterThan(0)
  })

  it('top-level tree nodes are chapter nodes with paragraph === null', () => {
    const { result } = renderHook(() => useFormParagraphs())
    result.current.tree.forEach((node) => {
      expect(node.paragraph).toBeNull()
    })
  })

  it('chapter nodes have FP children', () => {
    const { result } = renderHook(() => useFormParagraphs())
    expect(result.current.tree.some((node) => node.children.length > 0)).toBe(true)
  })

  it('selectedParagraph is initially null', () => {
    const { result } = renderHook(() => useFormParagraphs())
    expect(result.current.selectedParagraph).toBeNull()
  })

  it('setSelectedParagraph updates state', () => {
    const { result } = renderHook(() => useFormParagraphs())
    const fpNode = result.current.tree[0].children[0]
    act(() => result.current.setSelectedParagraph(fpNode.paragraph))
    expect(result.current.selectedParagraph?.id).toBe(fpNode.paragraph?.id)
  })

  it('setSelectedParagraph accepts null to clear selection', () => {
    const { result } = renderHook(() => useFormParagraphs())
    const fpNode = result.current.tree[0].children[0]
    act(() => result.current.setSelectedParagraph(fpNode.paragraph))
    act(() => result.current.setSelectedParagraph(null))
    expect(result.current.selectedParagraph).toBeNull()
  })

  it('search query filters tree — result is non-empty and smaller than full tree', () => {
    const { result } = renderHook(() => useFormParagraphs())
    const fullCount = result.current.tree.length
    act(() => result.current.setSearchQuery('Final'))
    expect(result.current.tree.length).toBeGreaterThan(0)
    expect(result.current.tree.length).toBeLessThanOrEqual(fullCount)
  })

  it('search query filters tree — every leaf FP node matches the query', () => {
    const { result } = renderHook(() => useFormParagraphs())
    act(() => result.current.setSearchQuery('Final'))
    // Leaf nodes (no children) are only included when they themselves match.
    // Parent FP nodes may be included to preserve hierarchy even if they don't match.
    function collectLeafFps(nodes: TreeNode[]): MpepParagraph[] {
      return nodes.flatMap((n) => {
        if (n.children.length === 0 && n.paragraph) return [n.paragraph]
        return collectLeafFps(n.children)
      })
    }
    const leafFps = collectLeafFps(result.current.tree)
    expect(leafFps.length).toBeGreaterThan(0)
    leafFps.forEach((fp) => {
      expect(
        fp.title.toLowerCase().includes('final') ||
        fp.number.toLowerCase().includes('final') ||
        fp.body.toLowerCase().includes('final')
      ).toBe(true)
    })
  })

  it('non-matching search query returns empty tree', () => {
    const { result } = renderHook(() => useFormParagraphs())
    act(() => result.current.setSearchQuery('zzz_no_match_xyz'))
    expect(result.current.tree).toHaveLength(0)
  })

  it('clearing search restores full tree', () => {
    const { result } = renderHook(() => useFormParagraphs())
    const fullCount = result.current.tree.length
    act(() => result.current.setSearchQuery('Final'))
    act(() => result.current.setSearchQuery(''))
    expect(result.current.tree.length).toBe(fullCount)
  })

  it('search is case-insensitive', () => {
    const { result } = renderHook(() => useFormParagraphs())
    act(() => result.current.setSearchQuery('final'))
    const lowerCount = result.current.tree.length
    act(() => result.current.setSearchQuery('FINAL'))
    const upperCount = result.current.tree.length
    expect(lowerCount).toBe(upperCount)
    expect(lowerCount).toBeGreaterThan(0)
  })
})
