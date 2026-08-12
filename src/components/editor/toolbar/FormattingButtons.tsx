import { useMarkToolbarButton, useMarkToolbarButtonState } from 'platejs/react'
import {
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
} from '@platejs/basic-nodes/react'
import { ToolbarButton } from '@/components/ui/ToolbarButton'
import { FontColorPicker, HighlightColorPicker } from '../ColorPicker'
import { Bold, Italic, Underline, Strikethrough, Subscript, Superscript } from 'lucide-react'

function MarkButton({
  nodeType,
  label,
  icon: Icon,
}: {
  nodeType: string
  label: string
  icon: React.ComponentType<{ size?: number }>
}) {
  const state = useMarkToolbarButtonState({ nodeType })
  const { props } = useMarkToolbarButton(state)
  return (
    <ToolbarButton label={label} active={props.pressed} onClick={props.onClick}>
      <Icon size={14} />
    </ToolbarButton>
  )
}

export function FormattingButtons() {
  return (
    <>
      <MarkButton nodeType={BoldPlugin.key} label="Bold" icon={Bold} />
      <MarkButton nodeType={ItalicPlugin.key} label="Italic" icon={Italic} />
      <MarkButton nodeType={UnderlinePlugin.key} label="Underline" icon={Underline} />
      <MarkButton nodeType={StrikethroughPlugin.key} label="Strikethrough" icon={Strikethrough} />
      <MarkButton nodeType={SubscriptPlugin.key} label="Subscript" icon={Subscript} />
      <MarkButton nodeType={SuperscriptPlugin.key} label="Superscript" icon={Superscript} />
      <FontColorPicker />
      <HighlightColorPicker />
    </>
  )
}
