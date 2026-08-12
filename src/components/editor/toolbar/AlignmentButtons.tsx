import { useEditorRef, useEditorSelector } from 'platejs/react'
import { setAlign, type Alignment } from '@platejs/basic-styles'
import { ToolbarButton } from '@/components/ui/ToolbarButton'
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react'

function AlignButton({
  value,
  currentAlign,
  icon: Icon,
  label,
}: {
  value: Alignment
  currentAlign: string | undefined
  icon: typeof AlignLeft
  label: string
}) {
  const editor = useEditorRef()
  // Left is the implicit default — show as active when no alignment is stored.
  const active =
    value === 'left'
      ? !currentAlign || currentAlign === 'left'
      : currentAlign === value
  return (
    <ToolbarButton
      label={label}
      active={active}
      onClick={() => setAlign(editor as Parameters<typeof setAlign>[0], value)}
    >
      <Icon size={14} />
    </ToolbarButton>
  )
}

export function AlignmentButtons() {
  const currentAlign = useEditorSelector((ed) => {
    const block = ed.api.block()
    return block
      ? (block[0] as Record<string, unknown>).textAlign as string | undefined
      : undefined
  }, [])

  return (
    <>
      <AlignButton value="left"    currentAlign={currentAlign} icon={AlignLeft}    label="Align left" />
      <AlignButton value="center"  currentAlign={currentAlign} icon={AlignCenter}  label="Align center" />
      <AlignButton value="right"   currentAlign={currentAlign} icon={AlignRight}   label="Align right" />
      <AlignButton value="justify" currentAlign={currentAlign} icon={AlignJustify} label="Justify" />
    </>
  )
}
