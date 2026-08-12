import { useSelected } from 'platejs/react'
import type { PlateElementProps } from 'platejs/react'
import { PlateElement } from 'platejs/react'
import { cn } from '@/lib/utils'

export function FpPlaceholderElement({
  children,
  className,
  ...props
}: PlateElementProps) {
  const selected = useSelected()

  return (
    <PlateElement
      as="span"
      {...props}
      className={cn(
        'inline cursor-text rounded px-1 py-0.5 font-mono text-sm',
        'border border-yellow-400 bg-yellow-100 text-yellow-900',
        selected && 'bg-yellow-200 ring-2 ring-yellow-500 outline-none',
        className
      )}
    >
      {children}
    </PlateElement>
  )
}
