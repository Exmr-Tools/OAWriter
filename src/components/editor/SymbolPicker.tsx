import { useState, useRef, useEffect } from 'react'
import { useEditorRef } from 'platejs/react'
import { ToolbarButton } from '@/components/ui/ToolbarButton'
import { Omega } from 'lucide-react'

const SYMBOLS: { label: string; chars: string[] }[] = [
  {
    label: 'Greek',
    chars: ['α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','π','ρ','σ','τ','υ','φ','χ','ψ','ω',
            'Α','Β','Γ','Δ','Ε','Ζ','Η','Θ','Λ','Μ','Ν','Ξ','Π','Ρ','Σ','Τ','Υ','Φ','Χ','Ψ','Ω'],
  },
  {
    label: 'Common',
    chars: ['°','§','©','®','™','¶','†','‡','•','…','—','–','′','″','‰','№'],
  },
  {
    label: 'Math',
    chars: ['±','×','÷','≠','≤','≥','≈','∞','√','∫','∑','∏','∂','∈','∉','⊂','⊃','∩','∪','∀','∃','∇','∝'],
  },
]

export function SymbolPicker() {
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

  function insert(char: string) {
    editor.tf.focus()
    editor.tf.insertText(char)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <ToolbarButton label="Insert symbol" onClick={() => setOpen((v) => !v)} active={open}>
        <Omega size={14} />
      </ToolbarButton>

      {open && (
        <div className="absolute left-0 top-8 z-50 w-72 rounded border border-gray-200 bg-white p-2 shadow-lg">
          {SYMBOLS.map((group) => (
            <div key={group.label} className="mb-2">
              <div className="mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-0.5">
                {group.chars.map((char) => (
                  <button
                    key={char}
                    type="button"
                    onClick={() => insert(char)}
                    className="flex h-7 w-7 items-center justify-center rounded text-sm hover:bg-blue-100 hover:text-blue-700 font-serif"
                    title={`U+${char.codePointAt(0)!.toString(16).toUpperCase().padStart(4,'0')} ${char}`}
                  >
                    {char}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
