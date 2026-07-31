# CLAUDE.md

## Development commands

- `pnpm dev` — start the React Router development server
- `pnpm build` — type-check and build the production application
- `pnpm preview` — preview the production build
- `pnpm check` — run the TypeScript compiler without emitting files

## Architecture

This is a client-side rendered React portfolio using:

- React Router 8.3 Framework Mode, Vite, and TypeScript
- TanStack Markdown for blog rendering
- TanStack Highlight for synchronous code highlighting
- Tailwind CSS v4
- shadcn/ui `base-nova` components backed by Base UI

### Application structure

- `src/routes.ts` defines the route tree; `src/routes/` contains Framework route modules.
- `.react-router/types/` contains generated route types and is not committed.
- `src/pages/` contains route-level React components.
- `src/components/` contains shared application components.
- `src/components/ui/` contains open-code shadcn components.
- `src/lib/content.ts` imports and parses repository-authored MDX as raw text.
- `src/lib/highlight.ts` connects TanStack Highlight to TanStack Markdown.
- `content/` contains blog source files and frontmatter.
- `public/images/` contains responsive photography assets.

Blog files may contain the legacy `<MyButton />` marker. `BlogContent` splits on
that marker and renders the surrounding text with TanStack Markdown while
placing the interactive React counter between the resulting sections. Do not
pass MDX or JSX directly to TanStack Markdown.

## Routing and deployment

The application uses React Router Framework Mode with `ssr: false`. It builds a
static SPA into `build/client`. `public/_redirects` provides an `index.html`
fallback for Cloudflare Pages so direct requests to client routes work. Use
`clientLoader` for child-route browser data; Framework SPA Mode only permits a
server `loader` on the root route.

## UI conventions

Use components from `src/components/ui/` and preserve the Base UI component
base in `components.json`. For link-shaped buttons, apply `buttonVariants` to a
semantic React Router `Link` or anchor rather than rendering a link through the
Base UI `Button` primitive.
