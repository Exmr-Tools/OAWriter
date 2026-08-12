import { createPlatePlugin } from 'platejs/react'
import { FpPlaceholderElement } from './FpPlaceholderElement'

export const FP_PLACEHOLDER_TYPE = 'fp-placeholder'

export const FpPlaceholderPlugin = createPlatePlugin({
  key: FP_PLACEHOLDER_TYPE,
  node: {
    isElement: true,
    isInline: true,
    isVoid: false,
    type: FP_PLACEHOLDER_TYPE,
  },
  handlers: {
    onKeyDown: ({ editor, event }) => {
      const isTab = event.key === 'Tab'
      // F9 = Word's field-navigation key (works on Windows/Edge).
      // On macOS, use Fn+F9 to bypass Mission Control capturing bare F9.
      const isF9 = event.key === 'F9'

      // Printable character while cursor is inside a placeholder → replace
      // the entire placeholder node with the typed character as plain text.
      const isPrintable =
        event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey

      const above = editor.api.above({
        match: (n) => (n as { type?: string }).type === FP_PLACEHOLDER_TYPE,
      })

      if (isPrintable && above && !isTab) {
        event.preventDefault()
        const [, phPath] = above
        editor.tf.removeNodes({ at: phPath })
        editor.tf.insertText(event.key)
        return
      }

      if (!isTab && !isF9) return

      const allPlaceholders = Array.from(
        editor.api.nodes({
          at: [],
          match: (n) => (n as { type?: string }).type === FP_PLACEHOLDER_TYPE,
        })
      )

      if (allPlaceholders.length === 0) return

      // For Tab: only activate when cursor is already inside a placeholder
      // For F9: activate from anywhere in the document
      if (isTab && !above) return

      event.preventDefault()

      const direction = isTab && event.shiftKey ? -1 : 1

      let nextIndex: number
      if (above) {
        const currentIndex = allPlaceholders.findIndex(
          ([, p]) => JSON.stringify(p) === JSON.stringify(above[1])
        )
        nextIndex = (currentIndex + direction + allPlaceholders.length) % allPlaceholders.length
      } else {
        // F9 with cursor outside a placeholder — find the next placeholder after
        // the cursor position, wrapping around to the first if past the last.
        const sel = editor.selection
        if (!sel) {
          nextIndex = 0
        } else {
          const [anchorBlock, anchorChild = 0] = sel.anchor.path
          const afterIdx = allPlaceholders.findIndex(([, p]) =>
            p[0] > anchorBlock || (p[0] === anchorBlock && p[1] > anchorChild)
          )
          nextIndex = afterIdx === -1 ? 0 : afterIdx
        }
      }

      const [, nextPath] = allPlaceholders[nextIndex]
      editor.tf.select(nextPath)
      editor.tf.focus()
    },
  },
}).withComponent(FpPlaceholderElement)
