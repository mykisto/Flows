# Flows

Flows consolidates a retail investor's holdings from many platforms — REIT/fund certificates, government bonds, stocks/ETFs, crypto, real estate, bank deposits — into one responsive, mobile-first web app, centered on **total position and passive income** rather than net worth. The goal is to beat the spreadsheet: *"Excel's flexibility without Excel's labor."*

**Live:** https://flows-nu.vercel.app/ · **Brief:** [CLAUDE.md](CLAUDE.md)

> 🚧 Early-stage. The product is being built directly in this Next.js app; the design case-study artifacts live alongside it (index below).

## Repository index

| Path | What's there |
| --- | --- |
| [`app/`](app/) | The Next.js app — the product itself |
| [`research/`](research/) | User research - [`research.md`](research/research.md), [`competitor-analysis.md`](research/competitor-analysis.md) (desk scan), [`competitor-teardown.md`](research/competitor-teardown.md) (hands-on teardown - logged-in web apps + a firsthand desktop app), [`flexibility-deep-dive.md`](research/flexibility-deep-dive.md) (flexibility-without-effort study, non-finance exemplars), [`beachhead-survey.md`](research/beachhead-survey.md) (Inzhur-community survey + form generator), [`beachhead-responses.md`](research/beachhead-responses.md) (all 22 responses; summary + charts in `research.md` §6 / the research page), [`personas.md`](research/personas.md) (3 behavioural personas), [`jtbd.md`](research/jtbd.md) (jobs-to-be-done matrix) + [`screens/`](research/screens/) (competitor captures; usability test to come) |
| [`wireframes/`](wireframes/) | Low-fi flows & layouts - [`sitemap.md`](wireframes/sitemap.md) (entity inventory: the objects each job needs, traced to `jtbd.md`, before any screen is drawn) |
| [`concept/`](concept/) | Visual direction & concept exploration |
| [`tokens/`](tokens/) | Design tokens |
| [`components/`](components/) | Component inventory & specs |
| [`design-system/`](design-system/) | Assembled design system |
| [`handoff/`](handoff/) | Design → build handoff notes |
| [`CLAUDE.md`](CLAUDE.md) | Project brief (source of truth) |
| [`AGENTS.md`](AGENTS.md) | Build guardrails (Next.js 16 specifics) |

## Tech stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Storage:** Local-first (browser IndexedDB) — no account in v1
- **Hosting / CI:** Vercel (auto-deploy from GitHub)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

Edit `app/page.tsx` — the page hot-reloads as you save.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Deployment

Hosted on Vercel with the GitHub integration:

- Push to **`main`** → deploys to **production**
- Push any other branch / open a PR → gets its own **preview** deployment
