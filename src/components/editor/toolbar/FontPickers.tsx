import { useEditorRef, useEditorSelector } from 'platejs/react'
import { setLineHeight } from '@platejs/basic-styles'
import { ToolbarSelect, type SelectOption } from '@/components/ui/ToolbarButton'

const FONT_FAMILIES: SelectOption[] = [
  { label: 'Times New Roman', value: 'Times New Roman, serif', style: { fontFamily: 'Times New Roman, serif' } },
  { label: 'Arial',           value: 'Arial, sans-serif',      style: { fontFamily: 'Arial, sans-serif' } },
  { label: 'Courier New',     value: 'Courier New, monospace', style: { fontFamily: 'Courier New, monospace' } },
]

const FONT_SIZES: SelectOption[] = ['8','9','10','11','12','14','16','18','20','24','28','36','48','72']
  .map((s) => ({ label: s, value: s }))

const LINE_HEIGHTS: SelectOption<number>[] = [
  { label: 'Single', value: 1 },
  { label: '1.5×',  value: 1.5 },
  { label: 'Double', value: 2 },
  { label: 'Triple', value: 3 },
]

export function FontFamilyPicker() {
  const editor = useEditorRef()
  const current = useEditorSelector(
    (ed) => (ed.api.marks() as Record<string, unknown>)?.['fontFamily'] as string | undefined,
    []
  )
  return (
    <ToolbarSelect
      aria-label="Font family"
      value={current ?? 'Times New Roman, serif'}
      options={FONT_FAMILIES}
      onChange={(val) => {
        editor.tf.addMark('fontFamily', val)
        editor.tf.focus()
      }}
      style={{ width: 130 }}
    />
  )
}

export function FontSizePicker() {
  const editor = useEditorRef()
  const current = useEditorSelector(
    (ed) => (ed.api.marks() as Record<string, unknown>)?.['fontSize'] as string | undefined,
    []
  )
  const currentNum = current ? String(parseInt(current)) : '12'

  return (
    <ToolbarSelect
      aria-label="Font size"
      value={currentNum}
      options={FONT_SIZES}
      onChange={(val) => {
        editor.tf.addMark('fontSize', `${val}pt`)
        editor.tf.focus()
      }}
      style={{ width: 56 }}
    />
  )
}

export function LineHeightPicker({
  defaultLineHeight,
  onChangeDefault,
}: {
  defaultLineHeight: number
  onChangeDefault: (v: number) => void
}) {
  const editor = useEditorRef()
  const blockLineHeight = useEditorSelector((ed) => {
    const block = ed.api.block()
    return block ? (block[0] as Record<string, unknown>).lineHeight as number | undefined : undefined
  }, [])

  return (
    <ToolbarSelect
      aria-label="Line spacing"
      value={blockLineHeight ?? defaultLineHeight}
      options={LINE_HEIGHTS}
      onChange={(val) => {
        if (!editor.selection) {
          onChangeDefault(val)
        } else {
          setLineHeight(editor, val)
          editor.tf.focus()
        }
      }}
      style={{ minWidth: 72 }}
    />
  )
}
