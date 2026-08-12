import { useEditorRef } from 'platejs/react'
import { ToolbarButton, ToolbarSeparator } from '@/components/ui/ToolbarButton'
import { SymbolPicker } from './SymbolPicker'
import { FormattingButtons } from './toolbar/FormattingButtons'
import { FontFamilyPicker, FontSizePicker, LineHeightPicker } from './toolbar/FontPickers'
import { AlignmentButtons } from './toolbar/AlignmentButtons'
import { BulletListButton, NumberedListSection, ToggleNumberedButton } from './toolbar/ListButtons'
import { InsertImageButton, PastePlainTextButton } from './toolbar/InsertButtons'
import { downloadAsDocx, openDocxFile, triggerFileInput } from '@/lib/docx'
import { Undo, Redo, PanelRightOpen, PanelRightClose } from 'lucide-react'

interface OAToolbarProps {
  panelOpen: boolean
  onTogglePanel: () => void
  onNewDocument: () => void
  onOpenDocument: (title: string) => void
  documentTitle: string
  defaultLineHeight: number
  onChangeDefaultLineHeight: (v: number) => void
}

export function OAToolbar({
  panelOpen,
  onTogglePanel,
  onNewDocument,
  onOpenDocument,
  documentTitle,
  defaultLineHeight,
  onChangeDefaultLineHeight,
}: OAToolbarProps) {
  const editor = useEditorRef()

  const sanitizedTitle = documentTitle
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-') || 'office-action'

  const handleSave = () => downloadAsDocx(editor, sanitizedTitle, defaultLineHeight)
  const handleOpen = () =>
    triggerFileInput((file) => {
      openDocxFile(editor, file)
      onOpenDocument(file.name.replace(/\.docx$/i, ''))
    })

  return (
    <div
      className="sticky top-0 z-10 flex flex-wrap items-center gap-0.5 border-b border-gray-300 bg-white px-2 py-1 shadow-sm"
      role="toolbar"
      aria-label="Editor toolbar"
    >
      {/* File */}
      <button type="button" onClick={onNewDocument} className="rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100">
        New
      </button>
      <button type="button" onClick={handleOpen} className="rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100">
        Open
      </button>
      <button type="button" onClick={handleSave} className="rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100">
        Save .docx
      </button>

      <ToolbarSeparator />

      {/* History */}
      <ToolbarButton label="Undo" onClick={() => editor.tf.undo()}>
        <Undo size={14} />
      </ToolbarButton>
      <ToolbarButton label="Redo" onClick={() => editor.tf.redo()}>
        <Redo size={14} />
      </ToolbarButton>

      <ToolbarSeparator />

      {/* Marks + color */}
      <FormattingButtons />

      <ToolbarSeparator />

      {/* Font family, size & line spacing */}
      <FontFamilyPicker />
      <FontSizePicker />
      <LineHeightPicker defaultLineHeight={defaultLineHeight} onChangeDefault={onChangeDefaultLineHeight} />

      <ToolbarSeparator />

      {/* Alignment */}
      <AlignmentButtons />

      <ToolbarSeparator />

      {/* Lists */}
      <BulletListButton />
      <NumberedListSection />
      <ToggleNumberedButton />

      <ToolbarSeparator />

      {/* Insert */}
      <InsertImageButton />
      <PastePlainTextButton />
      <SymbolPicker />

      <ToolbarSeparator />

      {/* Form paragraphs panel toggle */}
      <ToolbarButton label="Toggle form paragraphs panel" onClick={onTogglePanel}>
        {panelOpen ? <PanelRightClose size={14} /> : <PanelRightOpen size={14} />}
      </ToolbarButton>
    </div>
  )
}
