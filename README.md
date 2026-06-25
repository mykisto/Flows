# Flows

Flows consolidates a retail investor's holdings from many platforms — REIT/fund certificates, government bonds, stocks/ETFs, crypto, real estate, bank deposits — into one responsive, mobile-first web app, centered on **total position and passive income** rather than net worth. The goal is to beat the spreadsheet: *"Excel's flexibility without Excel's labor."*

**Live:** https://flows-nu.vercel.app/ · **Brief:** [CLAUDE.md](CLAUDE.md)

> 🚧 Early-stage. The product is being built directly in this Next.js app; the design case-study artifacts live alongside it (index below).

## Repository index

| Path | What's there |
| --- | --- |
| [`app/`](app/) | The Next.js app — the product itself |
| [`research/`](research/) | User research - [`research.md`](research/research.md), [`competitor-analysis.md`](research/competitor-analysis.md) (desk scan), [`competitor-teardown.md`](research/competitor-teardown.md) (hands-on teardown - logged-in web apps + a firsthand desktop app), [`flexibility-deep-dive.md`](research/flexibility-deep-dive.md) (flexibility-without-effort study, non-finance exemplars), [`beachhead-survey.md`](research/beachhead-survey.md) (Inzhur-community survey + form generator), [`beachhead-responses.md`](research/beachhead-responses.md) (all 30 responses; summary + charts in `research.md` §6 / the case-study page), [`personas.md`](research/personas.md) (3 behavioural personas), [`jtbd.md`](research/jtbd.md) (jobs-to-be-done matrix) + [`screens/`](research/screens/) (competitor captures; usability test to come) |
| [`wireframes/`](wireframes/) | Low-fi flows & layouts - [`sitemap.md`](wireframes/sitemap.md) (entities → screens → navigation → traceability matrix, each traced to `jtbd.md`) and [`flows.md`](wireframes/flows.md) (screen-to-screen user flows, one per job, as Mermaid diagrams) |
| [`concept/`](concept/) | Visual direction & concept exploration |
| [`tokens/`](tokens/) | Design tokens |
| [`components/`](components/) | Component inventory & specs |
| [`design-system/`](design-system/) | Assembled design system |
| [`handoff/`](handoff/) | Design → build handoff notes |
| [`CLAUDE.md`](CLAUDE.md) | Project brief (source of truth) |
| [`AGENTS.md`](AGENTS.md) | Build guardrails (Next.js 16 specifics) |

## Structure

The design pipeline from jobs to screens lives in two files under [`wireframes/`](wireframes/), rendered together with the research on the case-study page ([`research/research.html`](research/research.html), section 04):

- **[`sitemap.md`](wireframes/sitemap.md)** - the bridge from jobs to wireframes. It opens with the entity inventory (the objects a person handles to close each job), derives the screens from those entities, lays out the navigation (four tabs - Overview, Calendar, Analytics, Goals - with Add and Profile deliberately off the tabs), and closes with a traceability matrix of jobs against screens that checks for no orphan screen and no orphan job.
- **[`flows.md`](wireframes/flows.md)** - screen-to-screen user flows, one per load-bearing job, as Mermaid diagrams. Each flow draws both ends on purpose: the success path and the dead-ends, with screen states (loading / empty / error / populated) shown explicitly.

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
