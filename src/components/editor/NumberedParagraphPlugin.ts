import { createPlatePlugin } from 'platejs/react'
import { NumberedParagraphElement } from './NumberedParagraphElement'
import { BlockType } from '@/constants/blockTypes'
import { asNodePatch } from '@/lib/plateTypes'

export const NUMBERED_P_TYPE = BlockType.NumberedParagraph

export const NumberedParagraphPlugin = createPlatePlugin({
  key: NUMBERED_P_TYPE,
  node: { isElement: true, type: NUMBERED_P_TYPE },
  handlers: {
    onKeyDown: ({ editor, event }) => {
      if (event.key !== 'Enter' || event.shiftKey) return
      const entry = editor.api.block()
      if (!entry) return
      const [node, blockPath] = entry
      const type = (node as { type?: string }).type
      // Only intercept plain and blockquote — numbered-p splits naturally to another numbered-p
      if (type !== 'p' && type !== 'blockquote') return
      event.preventDefault()
      // Capture block index BEFORE the split so we know exactly which block is new.
      // splitNodes cursor behaviour varies; using a fixed index is unambiguous.
      const blockIndex = blockPath[0]
      editor.tf.splitNodes({ always: true })
      // New block is always at blockIndex + 1. The original block stays unchanged.
      const newPath: [number] = [blockIndex + 1]
      editor.tf.setNodes(
        asNodePatch({ type: NUMBERED_P_TYPE }),
        { at: newPath }
      )
      editor.tf.select(editor.api.start(newPath))
      return true
    },
  },
}).withComponent(NumberedParagraphElement)
