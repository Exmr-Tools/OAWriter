import { useEditorRef } from 'platejs/react'
import { ToolbarButton } from '@/components/ui/ToolbarButton'
import { Image, ClipboardPaste } from 'lucide-react'

export function InsertImageButton() {
  const editor = useEditorRef()

  function handleFile(file: File) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const url = e.target?.result as string
      editor.tf.focus()
      editor.tf.insertNodes(
        { type: editor.getType('img'), url, children: [{ text: '' }] } as never,
        { nextBlock: true }
      )
    }
    reader.readAsDataURL(file)
  }

  return (
    <ToolbarButton
      label="Insert image"
      onClick={() => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.onchange = () => {
          const file = input.files?.[0]
          if (file) handleFile(file)
        }
        input.click()
      }}
    >
      <Image size={14} />
    </ToolbarButton>
  )
}

export function PastePlainTextButton() {
  const editor = useEditorRef()
  return (
    <ToolbarButton
      label="Paste as plain text"
      onClick={async () => {
        try {
          const text = await navigator.clipboard.readText()
          editor.tf.insertText(text)
        } catch {
          // Clipboard API not available or denied
        }
      }}
    >
      <ClipboardPaste size={14} />
    </ToolbarButton>
  )
}
