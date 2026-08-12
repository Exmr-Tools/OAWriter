/** Slate node type keys for all block elements used in the editor. */
export const BlockType = {
  Paragraph: 'p',
  NumberedParagraph: 'numbered-p',
  Blockquote: 'blockquote',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
} as const

export type BlockTypeValue = (typeof BlockType)[keyof typeof BlockType]

/** All block types that the LineHeightPlugin should apply to. */
export const LINE_HEIGHT_TARGET_TYPES: string[] = [
  BlockType.Paragraph,
  BlockType.NumberedParagraph,
  BlockType.Blockquote,
  BlockType.H1,
  BlockType.H2,
  BlockType.H3,
  BlockType.H4,
  BlockType.H5,
  BlockType.H6,
]
