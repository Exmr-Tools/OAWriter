import type { MpepParagraph } from '@/types/mpep'

export interface TreeNode {
  id: string
  number: string
  title: string
  paragraph: MpepParagraph | null  // null for chapter-level nodes
  children: TreeNode[]
  depth: number
}

/**
 * Derives a tree from the flat paragraph list using numeric prefix matching.
 * e.g. 7.40 is a parent of 7.40.01 and 7.40.02.aia
 *
 * Algorithm:
 * 1. Sort paragraphs by number (already sorted in JSON).
 * 2. For each paragraph, find the longest existing ancestor whose number
 *    is a proper prefix of this one.
 * 3. Paragraphs with no ancestor become direct children of their chapter node.
 */
export function buildTree(paragraphs: MpepParagraph[]): TreeNode[] {
  // Chapter root nodes
  const chapterNodes = new Map<string, TreeNode>()
  const nodeByNumber = new Map<string, TreeNode>()
  const roots: TreeNode[] = []

  function getOrCreateChapter(chapter: string): TreeNode {
    if (!chapterNodes.has(chapter)) {
      const node: TreeNode = {
        id: `chapter-${chapter}`,
        number: chapter,
        title: `Chapter ${chapter}`,
        paragraph: null,
        children: [],
        depth: 0,
      }
      chapterNodes.set(chapter, node)
      roots.push(node)
    }
    return chapterNodes.get(chapter)!
  }

  for (const fp of paragraphs) {
    // Find the closest ancestor: the longest registered number that is a
    // proper dot-prefix of this paragraph's number.
    let parent: TreeNode | null = null
    const parts = fp.number.split('.')
    for (let len = parts.length - 1; len >= 1; len--) {
      const candidate = parts.slice(0, len).join('.')
      if (nodeByNumber.has(candidate)) {
        parent = nodeByNumber.get(candidate)!
        break
      }
    }

    const depth = parent ? parent.depth + 1 : 1
    const node: TreeNode = {
      id: fp.id,
      number: fp.number,
      title: fp.title,
      paragraph: fp,
      children: [],
      depth,
    }

    nodeByNumber.set(fp.number, node)

    if (parent) {
      parent.children.push(node)
    } else {
      getOrCreateChapter(fp.chapter).children.push(node)
    }
  }

  return roots
}
