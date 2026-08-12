import { useState } from 'react'
import { useEditorRef, useEditorSelector } from 'platejs/react'
import { useListToolbarButton, useListToolbarButtonState } from '@platejs/list/react'
import { ListStyleType } from '@platejs/list'
import { ToolbarButton } from '@/components/ui/ToolbarButton'
import { NUMBERED_P_TYPE } from '../NumberedParagraphPlugin'
import { BlockType } from '@/constants/blockTypes'
import { asNodePatch } from '@/lib/plateTypes'
import { List, ListOrdered, Hash } from 'lucide-react'

const NUMBER_FORMATS = [
  { value: ListStyleType.Decimal,    label: '1, 2, 3' },
  { value: ListStyleType.LowerAlpha, label: 'a, b, c' },
  { value: ListStyleType.UpperAlpha, label: 'A, B, C' },
  { value: ListStyleType.LowerRoman, label: 'i, ii, iii' },
  { value: ListStyleType.UpperRoman, label: 'I, II, III' },
]

export function BulletListButton() {
  const state = useListToolbarButtonState({ nodeType: ListStyleType.Disc })
  const { props } = useListToolbarButton(state)
  return (
    <ToolbarButton label="Bullet list" active={props.pressed} onClick={props.onClick}>
      <List size={14} />
    </ToolbarButton>
  )
}

export function NumberedListSection() {
  const [format, setFormat] = useState<ListStyleType>(ListStyleType.Decimal)
  const state = useListToolbarButtonState({ nodeType: format })
  const { props } = useListToolbarButton(state)
  return (
    <>
      <ToolbarButton label="Numbered list" active={props.pressed} onClick={props.onClick}>
        <ListOrdered size={14} />
      </ToolbarButton>
      <select
        value={format}
        onMouseDown={(e) => e.stopPropagation()}
        onChange={(e) => setFormat(e.target.value as ListStyleType)}
        title="Number format"
        className="h-6 rounded border border-gray-300 bg-white px-0.5 text-xs text-gray-700 focus:outline-none"
      >
        {NUMBER_FORMATS.map((f) => (
          <option key={f.value} value={f.value}>{f.label}</option>
        ))}
      </select>
    </>
  )
}

export function ToggleNumberedButton() {
  const editor = useEditorRef()
  const isNumbered = useEditorSelector((ed) => {
    const block = ed.api.block()
    return block ? (block[0] as { type?: string }).type === NUMBERED_P_TYPE : false
  }, [])

  return (
    <ToolbarButton
      label={isNumbered ? 'Remove paragraph numbering' : 'Add paragraph numbering'}
      active={isNumbered}
      onClick={() => {
        const entry = editor.api.block()
        if (!entry) return
        const [node, path] = entry
        const currentType = (node as { type?: string }).type
        const nextType = currentType === NUMBERED_P_TYPE ? BlockType.Paragraph : NUMBERED_P_TYPE
        editor.tf.setNodes(asNodePatch({ type: nextType }), { at: path })
      }}
    >
      <Hash size={14} />
    </ToolbarButton>
  )
}
