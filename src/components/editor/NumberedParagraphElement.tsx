import type { PlateElementProps } from 'platejs/react'
import { PlateElement } from 'platejs/react'

export function NumberedParagraphElement({ children, className, ...props }: PlateElementProps) {
  return (
    <PlateElement className={`slate-numbered-p${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </PlateElement>
  )
}
