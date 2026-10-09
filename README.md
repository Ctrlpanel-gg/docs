# CtrlPanel.gg documentation

A static Fumadocs site using the Next.js App Router, React, Tailwind CSS, and Bun. Production output is `out/`: pre-rendered HTML, CSS, JavaScript, assets, downloads, and a client-side search index.

## Project layout

| Directory | Purpose |
| --- | --- |
| `app/` | Website routes and page/layout integration |
| `components/` | Native Fumadocs adapters and small shared UI components |
| `content/docs/` | Published MDX guides and versioned documentation |
| `content/blog/` | Published blog articles |
| `lib/` | Content loaders, navigation, migrated-route manifest, and aliases |
| `public/` | Static images, font files, OpenAPI specification, and example downloads |
| `examples/` | Complete authored extension examples; never loaded by the website runtime |
| `scripts/` | Import, static preview/export, and validation tools |
| `migration/docusaurus/` | Original Docusaurus content/assets/components preserved for reference |

## Development

```sh
bun install
bun run dev
```

Open http://localhost:3000. Edit published guides in `content/docs/`. Each folder's `meta.json` controls the navigation order. The latest section is organized by operator/developer goals; older version families retain their historical content.

The documentation home offers native Fumadocs cards, steps, and FAQ accordions. Configuration, theming, extensions, operations, updating, and development have their own entry pages. Old migrated routes remain available for bookmarks.

## Static build and checks

```sh
bun run typecheck
bun scripts/check-mdx.ts
bun run build
bun scripts/audit-headings.ts
bun scripts/verify-export.ts
bun run serve
```

Deploy the contents of `out/` to GitHub Pages or another static host. The GitHub workflows use Bun, publish `out/`, and validate heading IDs and migrated routes. `CNAME`, `.nojekyll`, fonts, example archives, and the OpenAPI download are included.

Bun 1.4.2 is pinned in the project for consistent builds. The preview server is only a local file server; it is not required after deployment.

## Source verification

New technical guides target CtrlPanel 1.2.0. Expanded technical pages include upstream source links for reference. Building this site does not modify an upstream checkout or production panel.

The example PHP files are authored tutorial code. They are syntax-checked locally; this does not claim a live Laravel/database/payment integration test. The downloadable archives mirror the source in `examples/extensions/`.

## Safe legacy import

```sh
bun run migrate
```

This command reads `migration/docusaurus/` and writes a disposable import to `migration/generated/`. It **does not overwrite published guides**, navigation, or live assets. Review staged results before copying any intentional change into the published content. The staging directory is ignored by Git.

`lib/migration-manifest.json` records all original source routes. Legacy introduction and category URLs are exported as static redirects with query strings and fragments preserved. One screenshot was already missing from the original source; its historical page states that explicitly.

## Navigation and fonts

`ScopedDocsLayout` shows only the selected version's content. `LiveDocsPage` filters the native TOC to visible headings and refreshes its observer after tab and visibility changes. Its regression checks covered all 12 original tabbed pages, including nested tabs, query-selected tabs, overlays, and resizing.

Red Hat Display is self-hosted with variable regular/italic Latin and extended Latin subsets. Its license is in `public/fonts/`. Command examples retain a monospace font. Semantic warning/danger callouts use amber/red with readable body text.
