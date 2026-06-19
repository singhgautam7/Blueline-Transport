# Blueline Transport

Static marketing website for **Blueline Transport** — a Mumbai / Bhiwandi road
logistics company. Single page, fully responsive, every call-to-action funnels
to phone or WhatsApp. Built with Next.js (static export) + Tailwind CSS, run with
**bun**.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3 (`curl -fsSL https://bun.sh/install | bash`)
- That's it — bun is the package manager **and** runtime.

## Run with bun

```bash
bun install        # install dependencies
bun run dev        # start dev server → http://localhost:3000
```

### Build the static site

```bash
bun run build      # outputs a fully static site to ./out
bunx serve out     # (optional) preview the production build locally
```

The `out/` folder is plain HTML/CSS/JS — deploy it to any static host
(Netlify, Cloudflare Pages, Vercel, GitHub Pages, nginx, S3…).

### Other scripts

```bash
bun run lint       # eslint
bun run start      # serve the production build (non-export mode)
```

## Editing site content

All text, numbers and contact details live in one file:

```
src/data/siteContent.ts
```

Edit values there to update the whole site — no other files need changing. See
the comment at the top of that file for safe-editing tips, then run `bun run dev`
to preview.

## Project layout

| Path                        | What it is                                            |
| --------------------------- | ----------------------------------------------------- |
| `src/data/siteContent.ts`   | **Single source of truth** for all content            |
| `src/app/layout.tsx`        | Fonts, SEO metadata, `LocalBusiness` JSON-LD          |
| `src/app/page.tsx`          | Page assembly (sections in order)                     |
| `src/components/`           | One component per section + shared UI                 |
| `src/lib/links.ts`          | `tel:` / `wa.me` / map-embed helpers                  |
| `public/_headers`           | Security headers for the host (Netlify/CF format)     |
| `public/images/`            | Drop real photos here (see its README)                |
| `CLAUDE.md`                 | Project guide for contributors / AI tools             |
| `.env.example`              | Optional env vars (Web3Forms key)                     |

> The design handoff and design notes live in `/specs/` (git-ignored). Durable
> guidance is in [`CLAUDE.md`](./CLAUDE.md).

## Contact form

The site is static, so the quote form **opens WhatsApp** with the load details
pre-filled by default — no backend, no secrets. To switch to email delivery via
Web3Forms, see the commented path in `src/components/ContactSection.tsx` and set
`NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local` (documented in `.env.example`).

## Deploying

Build, then upload `out/`. Security headers are applied at the host:

- **Netlify / Cloudflare Pages:** `public/_headers` ships inside `out/` — done.
- **Vercel:** add the same headers to `vercel.json` (`headers`).
- **nginx:** translate each header line to `add_header … always;`.

See [`CLAUDE.md`](./CLAUDE.md) for details.
