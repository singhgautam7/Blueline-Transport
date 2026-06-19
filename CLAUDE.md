# Blueline Transport — project guide

Single-page, **static** marketing website for Blueline Transport, a Mumbai /
Bhiwandi road-logistics company. Brochure site only — no backend, no database,
no booking. Every call-to-action funnels to **phone or WhatsApp**.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **bun** as package manager + runtime
- **Tailwind CSS v4** (CSS-first tokens in `src/app/globals.css`)
- **lucide-react** icons
- **Static export** → `next.config.ts` sets `output: 'export'` +
  `images.unoptimized: true`; `bun run build` emits a static site to `out/`.

## Run it

```bash
bun install      # install dependencies
bun run dev      # dev server at http://localhost:3000
bun run build    # static export to ./out
bun run lint     # eslint
```

Serve the build locally with any static server, e.g. `bunx serve out`.

## Where the editable content lives

**`src/data/siteContent.ts`** is the single source of truth — all copy, numbers,
services, fleet, coverage, clients and contact details. Every component reads
from it; there is **no hardcoded company content** elsewhere. A non-technical
editor only needs this file (see its top comment for safe-editing rules).

## Layout

- `src/app/layout.tsx` — fonts (Archivo + Hanken Grotesk), SEO metadata,
  `LocalBusiness` JSON-LD (all from `siteContent`).
- `src/app/page.tsx` — assembles the sections in order.
- `src/components/*` — one component per section + shared `icons.tsx`,
  `SectionHeading.tsx`. `Header`, `StatsBar`, `ContactSection` are client
  components (menu toggle, count-up, form).
- `src/lib/links.ts` — `telHref()`, `waHref(msg?)`, `mapEmbedSrc()` helpers.
- `public/_headers` — security headers for the host (see below).
- `public/images/` — drop real photos here (see its README).

## Design reference

The visual system and the original Claude Design handoff live in **`/specs`**
(git-ignored): [`specs/DESIGN.md`](specs/DESIGN.md) (tokens, type scale, spacing,
component patterns) and [`specs/requirements.md`](specs/requirements.md). Because
`/specs` is not committed, this file is the durable guidance that travels with
the repo.

## Contact form

Static-safe: by default the quote form opens WhatsApp with the load details
pre-filled (no backend, no secrets). A commented **Web3Forms** email path +
`NEXT_PUBLIC_WEB3FORMS_KEY` TODO is in `src/components/ContactSection.tsx` to
switch to email delivery later (document the key in `.env.local`, see
`.env.example`).

## Security headers (static export caveat)

Next static export cannot set headers, so they ship at the host via
`public/_headers` (Netlify / Cloudflare Pages format). Equivalents:

- **Vercel:** add a `headers` array in `vercel.json` with the same values.
- **nginx:** translate each line to `add_header "<Name>" "<value>" always;`.

The CSP allows the Google Maps iframe (`frame-src`) and `wa.me`
(`form-action`); fonts are self-hosted by `next/font`. If you enable Web3Forms,
add `https://api.web3forms.com` to `connect-src`.

## Notes for future edits

- Keep CTAs pointing at `tel:` / `wa.me` via the `src/lib/links.ts` helpers.
- Don't add a real client name or logo without written permission.
- Single responsive breakpoint is **860px** — the Tailwind `site:` variant.

<!-- BEGIN:nextjs-agent-rules -->
## This is NOT the Next.js you know

This version (16) may have breaking changes vs. training data — APIs,
conventions and file structure can differ. Check `node_modules/next/dist/docs/`
before writing framework code, and heed deprecation notices.
<!-- END:nextjs-agent-rules -->
