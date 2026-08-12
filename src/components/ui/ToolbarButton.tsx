import { cn } from '@/lib/utils'
import { useState, useEffect, useRef, type CSSProperties, type ButtonHTMLAttributes } from 'react'
import { ChevronDown } from 'lucide-react'

interface ToolbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  label: string
}

export function ToolbarButton({
  active,
  label,
  className,
  children,
  ...props
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={active}
      onMouseDown={(e) => e.preventDefault()}
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded text-sm transition-colors',
        'hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500',
        active && 'bg-gray-200 text-blue-700',
        !active && 'text-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function ToolbarSeparator() {
  return <div className="mx-1 h-5 w-px bg-gray-300" aria-hidden />
}

export interface SelectOption<T extends string | number = string> {
  label: string
  value: T
  style?: CSSProperties
}

interface ToolbarSelectProps<T extends string | number> {
  value: T
  options: SelectOption<T>[]
  onChange: (value: T) => void
  'aria-label': string
  style?: CSSProperties
  className?: string
}

// Custom select that keeps editor focus (and thus visual text selection) intact
// by using onMouseDown + preventDefault on every interactive element, mirroring
// the same technique used by ToolbarButton.
export function ToolbarSelect<T extends string | number>({
  value,
  options,
  onChange,
  'aria-label': ariaLabel,
  style,
  className,
}: ToolbarSelectProps<T>) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  const currentOption = options.find((o) => o.value === value)
  const label = currentOption?.label ?? String(value)

  const triggerClass = cn(
    'flex w-full h-7 items-center gap-0.5 rounded border border-gray-300 px-1 text-xs text-gray-700',
    'hover:bg-gray-50',
    className
  )

  return (
    <div ref={containerRef} style={{ position: 'relative', display: 'inline-block', ...style }}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onMouseDown={(e) => { e.preventDefault(); setOpen((o) => !o) }}
        className={triggerClass}
      >
        <span style={currentOption?.style}>{label}</span>
        <ChevronDown size={10} className="text-gray-500 shrink-0" />
      </button>
      {open && (
        <div
          role="listbox"
          aria-label={ariaLabel}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 200,
            marginTop: 2,
            minWidth: '100%',
            maxHeight: 240,
            overflowY: 'auto',
            background: 'white',
            border: '1px solid #d1d5db',
            borderRadius: 4,
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          }}
        >
          {options.map((opt) => (
            <button
              key={String(opt.value)}
              type="button"
              role="option"
              aria-selected={opt.value === value}
              onMouseDown={(e) => {
                e.preventDefault()
                onChange(opt.value)
                setOpen(false)
              }}
              style={opt.style}
              className={cn(
                'block w-full px-2 py-1 text-left text-xs text-gray-700 hover:bg-blue-50',
                opt.value === value && 'bg-blue-100 font-medium'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
