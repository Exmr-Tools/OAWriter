import { describe, it, expect, vi, beforeEach } from 'vitest'
import { downloadAsDocx, openDocxFile, triggerFileInput } from '@/lib/docx'

// Mock @platejs/docx-io — full manual mock to avoid native dep resolution in jsdom
vi.mock('@platejs/docx-io', () => ({
  htmlToDocxBlob: vi.fn().mockResolvedValue(new Blob(['docx'], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })),
  downloadDocx: vi.fn(),
  importDocx: vi.fn(),
  DOCX_EXPORT_STYLES: '',
  DEFAULT_DOCX_MARGINS: { top: 720, right: 720, bottom: 720, left: 720 },
}))

vi.mock('platejs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('platejs')>()
  return {
    ...actual,
    createSlateEditor: vi.fn().mockReturnValue({ children: [] }),
  }
})

vi.mock('platejs/static', () => ({
  serializeHtml: vi.fn().mockResolvedValue('<p>test content</p>'),
}))

vi.mock('juice', () => ({
  default: vi.fn().mockImplementation((html: string) => html),
}))

import { htmlToDocxBlob, downloadDocx, importDocx } from '@platejs/docx-io'

const mockHtmlToDocxBlob = vi.mocked(htmlToDocxBlob)
const mockDownloadDocx = vi.mocked(downloadDocx)
const mockImportDocx = vi.mocked(importDocx)

function makeEditor(overrides: Record<string, unknown> = {}) {
  return {
    children: [{ type: 'p', children: [{ text: 'test' }] }],
    tf: { setValue: vi.fn() },
    ...overrides,
  } as unknown as Parameters<typeof downloadAsDocx>[0]
}

describe('downloadAsDocx', () => {
  beforeEach(() => {
    mockHtmlToDocxBlob.mockReset()
    mockHtmlToDocxBlob.mockResolvedValue(new Blob())
    mockDownloadDocx.mockReset()
  })

  it('calls downloadDocx with the returned blob and the given filename', async () => {
    const editor = makeEditor()
    await downloadAsDocx(editor, 'my-action')
    expect(mockHtmlToDocxBlob).toHaveBeenCalledOnce()
    expect(mockDownloadDocx).toHaveBeenCalledWith(expect.any(Blob), 'my-action')
  })

  it('uses default filename when none provided', async () => {
    const editor = makeEditor()
    await downloadAsDocx(editor)
    expect(mockDownloadDocx).toHaveBeenCalledWith(expect.any(Blob), 'office-action')
  })

  it('exports with 1-inch margins (1440 twips) and Times New Roman font', async () => {
    const editor = makeEditor()
    await downloadAsDocx(editor, 'test')
    const [, options] = mockHtmlToDocxBlob.mock.calls[0]
    expect(options?.margins).toEqual({ top: 1440, right: 1440, bottom: 1440, left: 1440 })
    expect(options?.font).toBe('Times New Roman')
  })

  it('passes the blob from htmlToDocxBlob directly to downloadDocx', async () => {
    const specificBlob = new Blob(['specific'])
    mockHtmlToDocxBlob.mockResolvedValueOnce(specificBlob)
    const editor = makeEditor()
    await downloadAsDocx(editor, 'test')
    expect(mockDownloadDocx).toHaveBeenCalledWith(specificBlob, 'test')
  })
})

describe('openDocxFile', () => {
  beforeEach(() => {
    mockImportDocx.mockReset()
  })

  it('reads the file as ArrayBuffer and calls importDocx', async () => {
    const fakeNodes = [{ type: 'p', children: [{ text: 'imported' }] }]
    mockImportDocx.mockResolvedValue({ nodes: fakeNodes } as never)

    const fakeBuffer = new ArrayBuffer(8)
    const file = new File([fakeBuffer], 'test.docx', {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })

    const editor = makeEditor()
    await openDocxFile(editor, file)

    expect(mockImportDocx).toHaveBeenCalledWith(
      expect.anything(),
      expect.any(ArrayBuffer)
    )
    expect(editor.tf.setValue).toHaveBeenCalledWith(fakeNodes)
  })

  it('propagates errors thrown by importDocx', async () => {
    mockImportDocx.mockRejectedValue(new Error('corrupt file'))
    const file = new File(['bad data'], 'bad.docx')
    const editor = makeEditor()
    await expect(openDocxFile(editor, file)).rejects.toThrow('corrupt file')
  })
})

describe('triggerFileInput', () => {
  it('creates a file input and calls the callback when a file is selected', () => {
    const callback = vi.fn()
    const fakeFile = new File([''], 'test.docx')

    const originalCreate = document.createElement.bind(document)
    const createSpy = vi.spyOn(document, 'createElement').mockImplementation((tag) => {
      if (tag === 'input') {
        const input = originalCreate('input') as HTMLInputElement
        vi.spyOn(input, 'click').mockImplementation(() => {
          Object.defineProperty(input, 'files', { value: [fakeFile], configurable: true })
          input.onchange?.(new Event('change'))
        })
        return input
      }
      return originalCreate(tag)
    })

    triggerFileInput(callback)

    expect(callback).toHaveBeenCalledWith(fakeFile)
    createSpy.mockRestore()
  })

  it('does not call the callback when no file is selected', () => {
    const callback = vi.fn()

    const originalCreate = document.createElement.bind(document)
    const createSpy = vi.spyOn(document, 'createElement').mockImplementation((tag) => {
      if (tag === 'input') {
        const input = originalCreate('input') as HTMLInputElement
        vi.spyOn(input, 'click').mockImplementation(() => {
          input.onchange?.(new Event('change'))
        })
        return input
      }
      return originalCreate(tag)
    })

    triggerFileInput(callback)

    expect(callback).not.toHaveBeenCalled()
    createSpy.mockRestore()
  })
})
