import { useMemo, useState } from 'react'
import type { MpepParagraph } from '@/types/mpep'
import mpepData from '@/data/mpep-paragraphs.json'
import { buildTree, type TreeNode } from './buildTree'

const allParagraphs = mpepData as MpepParagraph[]
const fullTree = buildTree(allParagraphs)

function filterTree(nodes: TreeNode[], q: string): TreeNode[] {
  const result: TreeNode[] = []
  for (const node of nodes) {
    if (node.paragraph === null) {
      // Chapter node — recurse
      const filteredChildren = filterTree(node.children, q)
      if (filteredChildren.length > 0) {
        result.push({ ...node, children: filteredChildren })
      }
    } else {
      const fp = node.paragraph
      const matches =
        fp.number.includes(q) ||
        fp.title.toLowerCase().includes(q) ||
        fp.body.toLowerCase().includes(q)
      if (matches) {
        // Include with children also filtered
        const filteredChildren = filterTree(node.children, q)
        result.push({ ...node, children: filteredChildren })
      } else {
        // This node doesn't match, but children might
        const filteredChildren = filterTree(node.children, q)
        if (filteredChildren.length > 0) {
          result.push({ ...node, children: filteredChildren })
        }
      }
    }
  }
  return result
}

export function useFormParagraphs() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedParagraph, setSelectedParagraph] = useState<MpepParagraph | null>(null)

  const tree = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return fullTree
    return filterTree(fullTree, q)
  }, [searchQuery])

  return {
    tree,
    searchQuery,
    setSearchQuery,
    selectedParagraph,
    setSelectedParagraph,
  }
}
