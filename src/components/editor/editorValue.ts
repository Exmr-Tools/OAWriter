import type { Value } from 'platejs'
import { StorageKey } from '@/constants/storage'
import { BlockType } from '@/constants/blockTypes'

export const DEFAULT_VALUE: Value = [
  { type: BlockType.NumberedParagraph, children: [{ text: '' }] },
]

export function loadFromStorage(): Value | null {
  try {
    const raw = localStorage.getItem(StorageKey.EditorContent)
    return raw ? (JSON.parse(raw) as Value) : null
  } catch {
    return null
  }
}

export function saveToStorage(value: Value, title = 'Untitled'): void {
  try {
    localStorage.setItem(StorageKey.EditorContent, JSON.stringify(value))
    localStorage.setItem(
      StorageKey.EditorMeta,
      JSON.stringify({ lastSaved: new Date().toISOString(), title })
    )
  } catch {
    // Storage quota exceeded — silently ignore
  }
}

export function clearStorage(): void {
  localStorage.removeItem(StorageKey.EditorContent)
  localStorage.removeItem(StorageKey.EditorMeta)
}

export function loadMeta(): { lastSaved: string; title: string } | null {
  try {
    const raw = localStorage.getItem(StorageKey.EditorMeta)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function loadDefaultLineHeight(): number {
  try {
    const raw = localStorage.getItem(StorageKey.DefaultLineHeight)
    const n = raw ? Number(raw) : NaN
    return isNaN(n) ? 2 : n
  } catch {
    return 2
  }
}

export function saveDefaultLineHeight(value: number): void {
  try {
    localStorage.setItem(StorageKey.DefaultLineHeight, String(value))
  } catch {}
}
