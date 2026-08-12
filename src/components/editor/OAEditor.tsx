import React, { useState } from 'react'
import { usePlateEditor, Plate, PlateContent } from 'platejs/react'
import { editorPlugins } from './plugins'
import { OAToolbar } from './OAToolbar'
import { FormParagraphPanel } from '@/components/form-paragraphs/FormParagraphPanel'
import { loadFromStorage, DEFAULT_VALUE, clearStorage, loadDefaultLineHeight, saveDefaultLineHeight } from './editorValue'
import { useAutoSave } from '@/hooks/useAutoSave'
import type { Value } from 'platejs'

export function OAEditor() {
  const [title, setTitle] = useState('')
  const [panelOpen, setPanelOpen] = useState(true)
  const [regime, setRegime] = useState<'aia' | 'fti'>('aia')
  const [defaultLineHeight, setDefaultLineHeight] = useState(() => loadDefaultLineHeight())

  const handleChangeDefaultLineHeight = (v: number) => {
    setDefaultLineHeight(v)
    saveDefaultLineHeight(v)
  }
  const { save, lastSaved } = useAutoSave(title)

  const editor = usePlateEditor({
    plugins: editorPlugins,
    value: loadFromStorage() ?? DEFAULT_VALUE,
  })

  const handleNewDocument = () => {
    if (!confirm('Start a new document? Unsaved changes will be lost.')) return
    clearStorage()
    editor.tf.setValue(DEFAULT_VALUE)
    setTitle('')
  }

  return (
    // Everything that uses Plate hooks must be inside <Plate>
    <Plate
      editor={editor}
      onValueChange={({ value }) => save(value as Value)}
    >
      <div className="flex h-screen flex-col overflow-hidden">
        <OAToolbar
          panelOpen={panelOpen}
          onTogglePanel={() => setPanelOpen((v) => !v)}
          onNewDocument={handleNewDocument}
          onOpenDocument={setTitle}
          documentTitle={title}
          defaultLineHeight={defaultLineHeight}
          onChangeDefaultLineHeight={handleChangeDefaultLineHeight}
        />

        {/* Title bar */}
        <div className="relative flex shrink-0 items-center border-b border-gray-200 bg-white px-4 py-1.5">
          {/* Left: AIA / Pre-AIA toggle */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setRegime('aia')}
              className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
                regime === 'aia'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              AIA
            </button>
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setRegime('fti')}
              className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
                regime === 'fti'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Pre-AIA (FTI)
            </button>
          </div>

          {/* Center: document title (absolutely centered so toggle width doesn't shift it) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="pointer-events-auto w-72 bg-transparent text-center text-sm font-medium text-gray-600 focus:outline-none"
              placeholder="XX/XXX,XXX (Click to edit)"
              title="Document Title"
              aria-label="Document title"
            />
          </div>

          {/* Right: last-saved timestamp */}
          <div className="ml-auto">
            {lastSaved && (
              <span className="text-xs text-gray-400">
                Saved {lastSaved.toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>

        {/* Main area: editor canvas + panel */}
        <div className="flex flex-1 overflow-hidden">
          {/* Page canvas */}
          <div className="flex-1 overflow-auto bg-gray-100 p-8">
            <div
              className="mx-auto min-h-[1056px] w-full max-w-[850px] rounded bg-white shadow-md"
              style={{ padding: '96px' }}
            >
              <PlateContent
                style={{ fontFamily: 'Times New Roman, serif', fontSize: '12pt', '--doc-lh': defaultLineHeight } as React.CSSProperties}
                className="min-h-full focus:outline-none"
                aria-label="Document editor"
                spellCheck
              />
            </div>
          </div>

          {/* Form paragraph panel — inside Plate so hooks work */}
          {panelOpen && <FormParagraphPanel regime={regime} />}
        </div>
      </div>
    </Plate>
  )
}
