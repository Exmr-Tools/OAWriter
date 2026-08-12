import { useState, useRef, useEffect } from 'react'
import { useEditorRef, useEditorSelector } from 'platejs/react'
import { ToolbarButton } from '@/components/ui/ToolbarButton'

const FONT_COLORS = [
  { label: 'Black',     value: '#000000' },
  { label: 'Dark gray', value: '#595959' },
  { label: 'Red',       value: '#c0392b' },
  { label: 'Blue',      value: '#2980b9' },
  { label: 'Green',     value: '#27ae60' },
  { label: 'Orange',    value: '#e67e22' },
]

const HIGHLIGHT_COLORS = [
  { label: 'Yellow', value: '#fef08a' },
  { label: 'Green',  value: '#bbf7d0' },
  { label: 'Blue',   value: '#bfdbfe' },
  { label: 'Pink',   value: '#fecdd3' },
  { label: 'Orange', value: '#fed7aa' },
  { label: 'Purple', value: '#e9d5ff' },
]

interface ColorPickerButtonProps {
  mark: string
  colors: { label: string; value: string }[]
  label: string
  swatchColor: string
}

function ColorPickerButton({ mark, colors, label, swatchColor }: ColorPickerButtonProps) {
  const editor = useEditorRef()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  function apply(color: string) {
    editor.tf.addMark(mark, color)
    editor.tf.focus()
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <ToolbarButton
        label={label}
        onClick={() => setOpen((v) => !v)}
        active={open}
      >
        <span className="flex flex-col items-center leading-none select-none">
          <span className="text-xs font-bold" style={{ fontSize: 11 }}>A</span>
          <span
            className="h-1 w-3.5 rounded-sm transition-colors"
            style={{ backgroundColor: swatchColor }}
          />
        </span>
      </ToolbarButton>

      {open && (
        <div className="absolute left-0 top-8 z-50 flex gap-1 rounded border border-gray-200 bg-white p-1.5 shadow-lg">
          {colors.map((c) => (
            <button
              key={c.value}
              type="button"
              title={c.label}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => apply(c.value)}
              className="h-5 w-5 rounded border border-gray-300 hover:scale-110 transition-transform"
              style={{ backgroundColor: c.value }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function FontColorPicker() {
  const currentColor = useEditorSelector(
    (ed) => (ed.api.marks() as Record<string, unknown>)?.['color'] as string | undefined,
    []
  )
  return (
    <ColorPickerButton
      mark="color"
      colors={FONT_COLORS}
      label="Font color"
      swatchColor={currentColor ?? '#000000'}
    />
  )
}

export function HighlightColorPicker() {
  const currentHighlight = useEditorSelector(
    (ed) => (ed.api.marks() as Record<string, unknown>)?.['backgroundColor'] as string | undefined,
    []
  )
  return (
    <ColorPickerButton
      mark="backgroundColor"
      colors={HIGHLIGHT_COLORS}
      label="Highlight color"
      swatchColor={currentHighlight ?? '#fef08a'}
    />
  )
}
