export interface MpepPlaceholder {
  index: number
  label: string
}

export interface MpepParagraph {
  id: string
  number: string
  chapter: string
  title: string
  body: string
  placeholders: MpepPlaceholder[]
  examinerNote?: string
  requiredHeaders?: string[]
  tags?: string[]
}
