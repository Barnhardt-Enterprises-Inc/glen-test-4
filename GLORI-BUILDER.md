# CloudNine — Project Builder Rules

This is the authoritative configuration file for the CloudNine marketing site.
Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS v4, ShadCN UI.

## Conventions

- App Router only — no `pages/` directory, no `next/document` imports
- Tailwind v4: `@import "tailwindcss"` in globals.css, `@tailwindcss/postcss` plugin, NO `tailwind.config.*`
- `"use client"` only when hooks/browser APIs are needed
- Route handlers in `src/app/<path>/route.ts` (not `pages/api`)
- ShadCN components in `src/components/ui/`
- Shared utilities in `src/lib/utils.ts` (uses `cn()` helper from `clsx` + `tailwind-merge`)

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

- `NEXT_PUBLIC_SITE_URL` — canonical URL of the deployed site
- `NEXT_PUBLIC_APP_NAME` — app display name

## Safety Rules

**NEVER run non-terminating commands** (`npm run dev`, `next dev`, `--watch`,
`tail -f`, `nodemon`, etc.). Use `npm run build` to verify the app compiles.
Wrap long commands with `timeout <seconds>`.

## Verification

```bash
# 1. Type-check (TypeScript, exit 0)
timeout 120 npm run type-check

# 2. Lint (Next.js ESLint, exit 0)
timeout 60 npm run lint

# 3. Production build (exit 0 proves the app compiles end-to-end)
timeout 300 npm run build

# 4. Self-grep gate — must print "ok: no next/document"
grep -rn "next/document" src && echo "BUG: remove next/document from App Router" || echo "ok: no next/document"
```

All four steps must pass with exit code 0 (grep check must print `ok`) before
a PR is merged.
