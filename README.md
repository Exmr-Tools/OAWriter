# OA Writer

A browser-based editor for drafting USPTO patent office actions. Built with [Plate.js](https://platejs.org/) (v53), React 19, and Vite.

## Features

- Rich text editing with formatting (bold, italic, underline, font family/size, alignment, lists)
- Auto-numbered paragraph blocks with CSS counters
- Form paragraph (FP) library sourced from MPEP chapters, organized in a collapsible tree panel
- FP markup system: paragraph type prefixes (`~`, `>`), inline markers (`**bold**`, `__italic__`, `<big>`, `<small>`), and per-block line-height overrides (`<lh:1>`)
- Tab/F9 placeholder navigation within inserted form paragraphs
- Configurable document line spacing (per-block or document-wide default)
- Export to `.docx` with accurate per-paragraph formatting
- Import `.docx` files
- Auto-save to `localStorage`
- AIA / Pre-AIA (FTI) regime toggle

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build locally |
| `npm test` | Run tests in watch mode |
| `npm run test:run` | Run tests once (CI) |
| `npm run lint` | Lint with oxlint |

## Project Structure

```
src/
  components/
    editor/          # Plate editor, toolbar, plugins, custom block types
      toolbar/       # Individual toolbar section components
    form-paragraphs/ # FP panel, tree, insertion logic, categories
    placeholder/     # FP placeholder inline node
    ui/              # Shared UI primitives
  constants/         # Shared string keys (block types, storage keys)
  data/              # mpep-paragraphs.json (scraped from USPTO)
  hooks/             # useAutoSave
  lib/               # DOCX export/import, utility functions
  types/             # TypeScript types
scripts/
  scrape-mpep.mjs    # Scrapes MPEP chapters from USPTO to regenerate mpep-paragraphs.json
```

## Regenerating Form Paragraphs

The FP data lives in `src/data/mpep-paragraphs.json`. To regenerate it from USPTO:

```bash
node scripts/scrape-mpep.mjs
```

## Tech Stack

- [Plate.js](https://platejs.org/) v53 — rich text editor framework
- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) v4
- [shadcn/ui](https://ui.shadcn.com/) primitives
- [@platejs/docx-io](https://platejs.org/) — DOCX import/export
- [juice](https://github.com/Automattic/juice) — CSS inlining for DOCX export

## Contributing

Contributions welcome. Please open an issue before large changes to discuss the approach.
