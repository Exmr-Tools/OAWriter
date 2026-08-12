import { PlateElement } from 'platejs/react'
import type { PlateElementProps } from 'platejs/react'

export function ImageElement({ children, element, ...props }: PlateElementProps) {
  const url = (element as { url?: string }).url ?? ''
  return (
    <PlateElement as="figure" element={element} {...props} className="my-2">
      <img src={url} alt="" style={{ maxWidth: '100%', display: 'block' }} />
      {/* Slate requires void children to be rendered for cursor/selection */}
      <span style={{ display: 'none' }}>{children}</span>
    </PlateElement>
  )
}
