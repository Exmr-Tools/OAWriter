import { useCallback, useRef, useState } from 'react'
import type { Value } from 'platejs'
import { saveToStorage } from '@/components/editor/editorValue'

const DEBOUNCE_MS = 1000

export function useAutoSave(title: string) {
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const save = useCallback(
    (value: Value) => {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        saveToStorage(value, title)
        setLastSaved(new Date())
      }, DEBOUNCE_MS)
    },
    [title]
  )

  return { save, lastSaved }
}
