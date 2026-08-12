import { asAt } from '@/lib/plateTypes'
import { BasicMarksPlugin, BasicBlocksPlugin, HighlightPlugin } from '@platejs/basic-nodes/react'
import {
  FontFamilyPlugin,
  FontSizePlugin,
  FontColorPlugin,
  FontBackgroundColorPlugin,
  TextAlignPlugin,
  LineHeightPlugin,
} from '@platejs/basic-styles/react'
import { ListPlugin } from '@platejs/list/react'
import { ImagePlugin } from '@platejs/media/react'
import { ImageElement } from './ImageElement'
import { createPlatePlugin } from 'platejs/react'
import { PathApi } from 'platejs'
import { CaptionPlugin } from '@platejs/caption/react'
import { LINE_HEIGHT_TARGET_TYPES } from '@/constants/blockTypes'
import { LinkPlugin } from '@platejs/link/react'
import { DocxExportPlugin } from '@platejs/docx-io'
import { FpPlaceholderPlugin } from '@/components/placeholder/FpPlaceholderPlugin'
import { NumberedParagraphPlugin } from './NumberedParagraphPlugin'

export const editorPlugins = [
  // Core marks (bold, italic, underline, strikethrough, code, subscript, superscript)
  BasicMarksPlugin,
  HighlightPlugin,

  // Block elements (headings H1-H6, blockquote, horizontal rule)
  BasicBlocksPlugin,

  // Styling (font family/size/color, text alignment, line height)
  FontFamilyPlugin,
  FontSizePlugin,
  FontColorPlugin,
  FontBackgroundColorPlugin,
  TextAlignPlugin.configure({
    inject: { targetPlugins: LINE_HEIGHT_TARGET_TYPES },
  }),
  // Configure LineHeightPlugin:
  // - targetPlugins: extend beyond Plate's default ('p' only) to cover all block types we use.
  // - defaultNodeValue: 0 is a sentinel no real line-height will match, so setLineHeight always
  //   calls setNodes (not unsetNodes). Without this, picking 1.5× calls unsetNodes because
  //   Plate's built-in defaultNodeValue is 1.5.
  LineHeightPlugin.configure({
    inject: {
      nodeProps: {
        defaultNodeValue: 0,
      },
      targetPlugins: LINE_HEIGHT_TARGET_TYPES,
    },
  }),

  // Lists (bullet + numbered)
  ListPlugin,

  ImagePlugin.withComponent(ImageElement),
  CaptionPlugin,

  // Links
  LinkPlugin,

  // DOCX export/import
  DocxExportPlugin,

  // Image paste: Safari exposes clipboard images via items, not files.
  // This plugin handles Cmd+V for images independently of ImagePlugin's
  // withImageUpload (which targets editor.tf.insertData, not pipeHandler).
  createPlatePlugin({
    key: 'image-paste',
    handlers: {
      onPaste: ({ editor, event }) => {
        const items = Array.from(event.clipboardData?.items ?? [])
        const imageItems = items.filter(
          (item) => item.kind === 'file' && item.type.startsWith('image/')
        )
        if (imageItems.length === 0) return
        // Prevent browser default AND return true to stop Plate's HTML deserializer
        // from also inserting the <img> that Safari includes in the text/html item.
        event.preventDefault()
        const selection = editor.selection
        for (const item of imageItems) {
          const file = item.getAsFile()
          if (!file) continue
          const reader = new FileReader()
          reader.onload = (e) => {
            const url = e.target?.result as string
            const imageNode = { type: editor.getType('img'), url, children: [{ text: '' }] } as never
            const blockEntry = editor.api.block({ highest: true, at: selection ?? undefined })
            editor.tf.focus()
            if (blockEntry) {
              const [blockNode, blockPath] = blockEntry
              if (editor.api.isEmpty(asAt(blockNode))) {
                editor.tf.insertNodes(imageNode, { at: blockPath })
                editor.tf.removeNodes({ at: PathApi.next(blockPath) })
              } else {
                editor.tf.insertNodes(imageNode, { at: PathApi.next(blockPath) })
              }
            } else {
              editor.tf.insertNodes(imageNode, { at: selection ?? undefined })
            }
          }
          reader.readAsDataURL(file)
        }
        return true
      },
    },
  }),

  // Numbered paragraphs — must come before FpPlaceholderPlugin so Enter is handled first
  NumberedParagraphPlugin,

  // Custom form-paragraph placeholders (registered last to handle Tab)
  FpPlaceholderPlugin,
]
