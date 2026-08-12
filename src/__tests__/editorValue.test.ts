import { describe, it, expect, beforeEach } from 'vitest'
import {
  loadFromStorage,
  saveToStorage,
  clearStorage,
  loadMeta,
  DEFAULT_VALUE,
} from '@/components/editor/editorValue'

// jsdom provides localStorage automatically

describe('editorValue', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('loadFromStorage returns null when nothing is saved', () => {
    expect(loadFromStorage()).toBeNull()
  })

  it('saveToStorage and loadFromStorage round-trip correctly', () => {
    const value = [{ type: 'p', children: [{ text: 'Hello World' }] }]
    saveToStorage(value as never, 'Test Doc')
    expect(loadFromStorage()).toEqual(value)
  })

  it('loadMeta returns saved title and timestamp', () => {
    saveToStorage(DEFAULT_VALUE as never, 'My Office Action')
    const meta = loadMeta()
    expect(meta?.title).toBe('My Office Action')
    expect(meta?.lastSaved).toMatch(/^\d{4}-\d{2}-\d{2}T/)
  })

  it('clearStorage removes saved content and meta', () => {
    saveToStorage(DEFAULT_VALUE as never, 'Test')
    clearStorage()
    expect(loadFromStorage()).toBeNull()
    expect(loadMeta()).toBeNull()
  })

  it('loadFromStorage returns null when storage contains invalid JSON', () => {
    localStorage.setItem('oa-editor-content', 'not-json{{{')
    expect(loadFromStorage()).toBeNull()
  })
})
