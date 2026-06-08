# Flows

A web application built with [Next.js 16](https://nextjs.org) (App Router) and TypeScript, styled with Tailwind CSS. Continuously deployed to [Vercel](https://vercel.com) — every push to `main` ships to production automatically, and other branches get their own preview deployments.

> 🚧 Early-stage project — currently the default starter UI. This description will grow to explain what Flows actually does as the app takes shape.

## Tech stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
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
