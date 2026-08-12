import { useState, useRef, useEffect, useCallback } from 'react'
import { useEditorRef } from 'platejs/react'
import type { MpepParagraph } from '@/types/mpep'
import { useFormParagraphs } from './useFormParagraphs'
import { isHeaderPresent, isHeadingInDoc, doInsert, doInsertHeading, getInsertAt, moveToAfter } from './insertFormParagraph'
import { FP_PLACEHOLDER_TYPE } from '@/components/placeholder/FpPlaceholderPlugin'
import { CATEGORIES, type CatNode } from './categories'
import { CATEGORIES_AIA } from './categories-aia'
import { ALPHABETICAL } from './alphabetical'
import { SUBJECT } from './subject'
import mpepData from '@/data/mpep-paragraphs.json'

const allParagraphs = mpepData as MpepParagraph[]
// Key by p.number (trimmed) because some JSON id fields have trailing spaces
const fpIndex = new Map(allParagraphs.map((p) => [p.number.trim(), p]))

interface PendingInsert {
  paragraph: MpepParagraph
  missingHeaders: string[]   // required header FP IDs not yet in doc
  missingHeading?: string    // parent section heading label not yet in doc
}

function resolveHeaderFp(id: string, forParagraph: MpepParagraph): MpepParagraph | { id: string; number: string; title: string } {
  const base = id.replace(/\.$/, '')
  const suffix = forParagraph.id.match(/\.(aia|fti)$/)?.[1]
  return (
    allParagraphs.find((p) => p.id === base) ??
    (suffix ? allParagraphs.find((p) => p.id === `${base}.${suffix}`) : undefined) ??
    allParagraphs.find((p) => p.id.startsWith(`${base}.`) || p.id === base) ??
    { id: base, number: base, title: 'Unknown paragraph' }
  )
}

// ─── Panel root ───────────────────────────────────────────────────────────────

interface FormParagraphPanelProps {
  regime: 'aia' | 'fti'
}

export function FormParagraphPanel({ regime }: FormParagraphPanelProps) {
  const editor = useEditorRef()
  const { tree, searchQuery, setSearchQuery, selectedParagraph, setSelectedParagraph } =
    useFormParagraphs()

  const [tab, setTab] = useState<'chapters' | 'categories' | 'alphabetical' | 'subject'>('chapters')
  const [pendingInsert, setPendingInsert] = useState<PendingInsert | null>(null)
  const [selectedHeading, setSelectedHeading] = useState<{ id: string; label: string } | null>(null)
  const [selectedParagraphHeading, setSelectedParagraphHeading] = useState<string | undefined>()

  const MIN_WIDTH = 200
  const MAX_WIDTH = 600
  const [panelWidth, setPanelWidth] = useState(320)
  const dragStartX = useRef<number>(0)
  const dragStartWidth = useRef<number>(320)

  const onResizePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    dragStartX.current = e.clientX
    dragStartWidth.current = panelWidth
  }, [panelWidth])

  const onResizePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons === 0) return
    const delta = dragStartX.current - e.clientX
    setPanelWidth(Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, dragStartWidth.current + delta)))
  }, [])

  const handleInsert = (paragraph: MpepParagraph, parentHeading?: string) => {
    const missingHeaders =
      paragraph.requiredHeaders?.filter((id) => !isHeaderPresent(editor, id)) ?? []
    const missingHeading =
      parentHeading && !isHeadingInDoc(editor, parentHeading) ? parentHeading : undefined
    if (missingHeaders.length > 0 || missingHeading) {
      setPendingInsert({ paragraph, missingHeaders, missingHeading })
      return
    }
    doInsert(editor, paragraph)
  }

  const handleInsertHeading = (label: string) => {
    doInsertHeading(editor, label)
  }

  const handleInsertAll = () => {
    if (!pendingInsert) return
    let at = getInsertAt(editor)
    if (pendingInsert.missingHeading) {
      at = doInsertHeading(editor, pendingInsert.missingHeading, at)
    }
    for (const id of pendingInsert.missingHeaders) {
      const headerFP = fpIndex.get(resolveHeaderFp(id, pendingInsert.paragraph).id)
      if (headerFP) at = doInsert(editor, headerFP, at)
    }
    doInsert(editor, pendingInsert.paragraph, at)
    setPendingInsert(null)
  }

  const handleInsertAnyway = () => {
    if (!pendingInsert) return
    doInsert(editor, pendingInsert.paragraph)
    setPendingInsert(null)
  }

  const actions: NodeActions = {
    selectedId: selectedParagraph?.id ?? null,
    selectedHeadingId: selectedHeading?.id ?? null,
    onSelect: (p, parentHeading) => {
      setSelectedParagraph(p)
      setSelectedParagraphHeading(p ? parentHeading : undefined)
      if (p) setSelectedHeading(null)
    },
    onSelectHeading: (id, label) => {
      setSelectedHeading({ id, label })
      setSelectedParagraph(null)
      setSelectedParagraphHeading(undefined)
    },
    onInsert: handleInsert,
    onInsertHeading: handleInsertHeading,
  }

  return (
    <>
      <div
        className="relative flex h-full shrink-0 flex-col border-l border-gray-200 bg-white"
        style={{ fontFamily: 'Arial, Helvetica, sans-serif', width: panelWidth }}
        onMouseDown={(e) => {
          e.preventDefault()
          // If cursor is inside a placeholder, escape to after the full FP.
          const sel = editor.selection
          if (!sel) return
          const above = editor.api.above({
            match: (n) => (n as { type?: string }).type === FP_PLACEHOLDER_TYPE,
          })
          if (!above) return
          const blockIdx = above[1][0]
          const fpId = (editor.children[blockIdx] as Record<string, unknown>)?.['data-fp-id'] as string | undefined
          let lastIdx = blockIdx
          if (fpId) {
            for (let i = blockIdx + 1; i < editor.children.length; i++) {
              if ((editor.children[i] as Record<string, unknown>)?.['data-fp-id'] === fpId) lastIdx = i
              else break
            }
          }
          moveToAfter(editor, lastIdx + 1)
        }}
      >
        {/* Resize handle — drag left edge to resize panel */}
        <div
          className="absolute inset-y-0 left-0 z-10 w-1 cursor-col-resize hover:bg-blue-400/40 active:bg-blue-500/50"
          onPointerDown={onResizePointerDown}
          onPointerMove={onResizePointerMove}
        />

        {/* Header */}
        <div className="border-b border-gray-200 px-3 py-2">
          <h2 className="text-sm font-normal text-gray-800">Form Paragraphs</h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {(['chapters', 'categories', 'alphabetical', 'subject'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`flex-1 py-1 text-xs font-medium capitalize transition-colors ${
                tab === t
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Search — chapters only for now */}
        {tab === 'chapters' && (
          <div className="border-b border-gray-200 px-3 py-2">
            <input
              type="search"
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onMouseDown={(e) => e.stopPropagation()}
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
              aria-label="Search form paragraphs"
            />
          </div>
        )}

        {/* Tree */}
        <div className="flex-1 overflow-y-auto">
          {tab === 'chapters' ? (
            tree.length === 0 ? (
              <p className="px-3 py-4 text-sm text-gray-500">No paragraphs match.</p>
            ) : (
              <ul className="tree-view">
                {tree.map((chapterNode) => (
                  <ChapterSection
                    key={chapterNode.id}
                    node={chapterNode}
                    isSearching={searchQuery.length > 0}
                    {...actions}
                  />
                ))}
              </ul>
            )
          ) : (
            <ul className="tree-view">
              {(tab === 'categories'
                ? (regime === 'aia' ? CATEGORIES_AIA : CATEGORIES)
                : tab === 'alphabetical'
                ? ALPHABETICAL
                : SUBJECT
              ).map((cat) => (
                <CatSectionRoot key={cat.id} node={cat} {...actions} />
              ))}
            </ul>
          )}
        </div>

        {/* Examiner note */}
        {selectedParagraph?.examinerNote && (
          <div className="max-h-48 overflow-y-auto border-t border-yellow-200 bg-yellow-50 px-3 py-2">
            <p className="mb-1 text-xs font-normal text-yellow-800">Examiner Note</p>
            <p className="whitespace-pre-line text-xs leading-relaxed text-yellow-900">
              {selectedParagraph.examinerNote}
            </p>
          </div>
        )}

        {/* Bottom insert button */}
        <div className="border-t border-gray-200 px-3 py-2">
          <button
            type="button"
            disabled={!selectedParagraph && !selectedHeading}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              if (selectedParagraph) handleInsert(selectedParagraph, selectedParagraphHeading)
              else if (selectedHeading) handleInsertHeading(selectedHeading.label)
            }}
            className="w-full rounded bg-blue-600 py-1.5 text-xs font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          >
            {selectedParagraph
              ? `Insert ${toDisplayNum(selectedParagraph.number)}`
              : selectedHeading
              ? 'Insert heading'
              : 'Select a paragraph or heading'}
          </button>
        </div>
      </div>

      {pendingInsert && (() => {
        const resolvedFPs = pendingInsert.missingHeaders.map((id) =>
          resolveHeaderFp(id, pendingInsert.paragraph)
        )
        const hasMultiple =
          resolvedFPs.length + (pendingInsert.missingHeading ? 1 : 0) > 1
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
              <h2 className="mb-2 text-base font-semibold text-gray-900">
                {hasMultiple ? 'Prerequisites missing' : 'Prerequisite missing'}
              </h2>
              <p className="mb-3 text-sm text-gray-600">
                Before inserting{' '}
                <strong>¶ {pendingInsert.paragraph.number}</strong>{' '}
                ("{pendingInsert.paragraph.title}"), add{' '}
                {hasMultiple ? 'these' : 'this'} to your document first:
              </p>
              <ul className="mb-4 space-y-1">
                {pendingInsert.missingHeading && (
                  <li className="text-sm">
                    Section heading: <strong>"{pendingInsert.missingHeading}"</strong>
                  </li>
                )}
                {resolvedFPs.map((fp) => (
                  <li key={fp.id} className="text-sm">
                    <strong>¶ {fp.number}</strong>
                    {'title' in fp && fp.title ? ` — ${fp.title}` : ''}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleInsertAll}
                  className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Insert {hasMultiple ? 'all' : 'it'} + ¶ {pendingInsert.paragraph.number}
                </button>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleInsertAnyway}
                  className="rounded border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Insert ¶ {pendingInsert.paragraph.number} only
                </button>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setPendingInsert(null)}
                  className="rounded px-3 py-2 text-sm text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )
      })()}
    </>
  )
}

// ─── Shared types ─────────────────────────────────────────────────────────────

interface NodeActions {
  selectedId: string | null
  selectedHeadingId: string | null
  onSelect: (p: MpepParagraph | null, parentHeading?: string) => void
  onSelectHeading: (id: string, label: string) => void
  onInsert: (p: MpepParagraph, parentHeading?: string) => void
  onInsertHeading: (label: string) => void
}

// ─── Tree components ──────────────────────────────────────────────────────────

import type { TreeNode } from './buildTree'

// ─── Chapters tab ─────────────────────────────────────────────────────────────

function ChapterSection({
  node,
  isSearching,
  ...actions
}: { node: TreeNode; isSearching: boolean } & NodeActions) {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    const el = detailsRef.current
    if (!el) return
    if (isSearching) {
      wasOpenRef.current = el.open
      el.open = true
    } else {
      el.open = wasOpenRef.current
    }
  }, [isSearching])

  return (
    <li>
      <details ref={detailsRef}>
        <summary className="text-xs font-semibold uppercase tracking-wide text-gray-700">
          Chapter {node.number}
        </summary>
        <ul>
          {node.children.map((child) => (
            <ChapterFpNode
              key={child.id}
              node={child}
              isSearching={isSearching}
              {...actions}
            />
          ))}
        </ul>
      </details>
    </li>
  )
}

function ChapterFpNode({
  node,
  isSearching,
  ...actions
}: { node: TreeNode; isSearching: boolean } & NodeActions) {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const wasOpenRef = useRef(false)
  const hasChildren = node.children.length > 0
  const fp = node.paragraph!
  const isSelected = actions.selectedId === fp.id

  useEffect(() => {
    if (!hasChildren) return
    const el = detailsRef.current
    if (!el) return
    if (isSearching) {
      wasOpenRef.current = el.open
      el.open = true
    } else {
      el.open = wasOpenRef.current
    }
  }, [isSearching, hasChildren])

  if (!hasChildren) {
    return (
      <li
        className={isSelected ? 'fp-selected' : undefined}
        onClick={() => actions.onSelect(isSelected ? null : fp)}
        onDoubleClick={() => { actions.onSelect(fp); actions.onInsert(fp) }}
        style={{ cursor: 'pointer' }}
      >
        <FpLabel fp={fp} />
      </li>
    )
  }

  return (
    <li>
      <details ref={detailsRef}>
        <summary
          className={isSelected ? 'fp-selected' : undefined}
          onClick={() => actions.onSelect(isSelected ? null : fp)}
          onDoubleClick={(e) => {
            e.preventDefault()
            actions.onSelect(fp)
            actions.onInsert(fp)
          }}
        >
          <FpLabel fp={fp} />
        </summary>
        <ul>
          {node.children.map((child) => (
            <ChapterFpNode
              key={child.id}
              node={child}
              isSearching={isSearching}
              {...actions}
            />
          ))}
        </ul>
      </details>
    </li>
  )
}

// ─── Categories / Alphabetical / Subject tabs ─────────────────────────────────

function CatSectionRoot({ node, ...actions }: { node: CatNode } & NodeActions) {
  const hasChildren = (node.children?.length ?? 0) > 0
  const isSelectedHeading = node.isHeading && actions.selectedHeadingId === node.id
  const insertLabel = node.headingLabel ?? node.label!

  return (
    <li>
      <details>
        <summary
          className={isSelectedHeading ? 'fp-selected text-xs font-medium' : 'text-xs font-medium text-gray-700'}
          onMouseDown={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (node.isHeading) actions.onSelectHeading(node.id, insertLabel)
          }}
          onDoubleClick={(e) => {
            e.preventDefault()
            if (node.isHeading) actions.onInsertHeading(insertLabel)
          }}
        >
          {node.label}
        </summary>
        <ul>
          {hasChildren
            ? node.children!.map((child) => (
                <CatNodeRenderer
                  key={child.id}
                  node={child}
                  parentHeading={undefined}
                  {...actions}
                />
              ))
            : <li className="text-xs italic text-gray-400">No paragraphs assigned yet.</li>
          }
        </ul>
      </details>
    </li>
  )
}

function CatNodeRenderer({
  node,
  parentHeading,
  ...actions
}: { node: CatNode; parentHeading?: string } & NodeActions) {
  const hasChildren = (node.children?.length ?? 0) > 0
  const fp = node.fpId ? fpIndex.get(node.fpId) : undefined
  const childHeading = node.isHeading ? node.label : parentHeading
  const isSelectedHeading = node.isHeading && actions.selectedHeadingId === node.id

  // FP leaf (no children)
  if (fp && !hasChildren) {
    const isSelected = actions.selectedId === fp.id
    return (
      <li
        className={isSelected ? 'fp-selected' : undefined}
        onClick={() => actions.onSelect(isSelected ? null : fp, parentHeading)}
        onDoubleClick={() => { actions.onSelect(fp, parentHeading); actions.onInsert(fp, parentHeading) }}
        style={{ cursor: 'pointer' }}
      >
        <FpLabel fp={fp} />
      </li>
    )
  }

  // FP node WITH children
  if (fp && hasChildren) {
    const isSelected = actions.selectedId === fp.id
    return (
      <li>
        <details>
          <summary
            className={isSelected ? 'fp-selected' : undefined}
            onClick={() => actions.onSelect(isSelected ? null : fp, parentHeading)}
            onDoubleClick={(e) => {
              e.preventDefault()
              actions.onSelect(fp, parentHeading)
              actions.onInsert(fp, parentHeading)
            }}
          >
            <FpLabel fp={fp} />
          </summary>
          <ul>
            {node.children!.map((child) => (
              <CatNodeRenderer
                key={child.id}
                node={child}
                parentHeading={childHeading}
                {...actions}
              />
            ))}
          </ul>
        </details>
      </li>
    )
  }

  // Section header with children
  if (hasChildren) {
    return (
      <li>
        <details>
          <summary
            className={isSelectedHeading ? 'fp-selected' : undefined}
            onClick={() => { if (node.isHeading) actions.onSelectHeading(node.id, node.label!) }}
            onDoubleClick={(e) => {
              e.preventDefault()
              if (node.isHeading) actions.onInsertHeading(node.label!)
            }}
          >
            <span className={`text-xs ${node.isHeading ? 'font-medium text-gray-800' : 'text-gray-600'}`}>
              {node.label}
            </span>
          </summary>
          <ul>
            {node.children!.map((child) => (
              <CatNodeRenderer
                key={child.id}
                node={child}
                parentHeading={childHeading}
                {...actions}
              />
            ))}
          </ul>
        </details>
      </li>
    )
  }

  // Leaf section label (no children, no FP)
  return (
    <li
      className={isSelectedHeading ? 'fp-selected' : undefined}
      style={node.isHeading ? { cursor: 'pointer' } : undefined}
      onClick={() => { if (node.isHeading) actions.onSelectHeading(node.id, node.label!) }}
      onDoubleClick={() => { if (node.isHeading) actions.onInsertHeading(node.label!) }}
    >
      <span className={`text-xs ${node.isHeading ? 'font-medium text-gray-800' : 'italic text-gray-400'}`}>
        {node.label}
      </span>
    </li>
  )
}

// ─── FP label ─────────────────────────────────────────────────────────────────

function toDisplayNum(num: string): string {
  const parts = num.split('.')
  if (parts[0].length === 1) parts[0] = '0' + parts[0]
  return parts.join('-')
}

function FpLabel({ fp }: { fp: MpepParagraph }) {
  return (
    <span className="text-xs">
      {fp.title}{' '}
      <span className="opacity-60">({toDisplayNum(fp.number)})</span>
    </span>
  )
}
