@AGENTS.md

# Flows — Project Brief

**Working name: Flows.** A single responsive web app that consolidates a retail investor's holdings across many platforms (REIT/fund certificates, government bonds, stocks/ETFs, crypto, real estate, bank deposits) into one place — centered on **total position and passive income / cash flow**. This file is the source of truth for product decisions and reflects the latest agreed direction.

## Problem
Investors holding assets across several platforms have no single trustworthy place to see everything together, so they fall back to manual spreadsheets. Surfaced in the Inzhur investor community (30k+), where new investors repeatedly default to Excel/CSV because existing apps lack the coverage or flexibility they need. **Beating Excel is the core challenge.**

## Goal
A user sees their entire cross-platform position and blended monthly income in one view — faster and more clearly than in their spreadsheet — and feels no need to fall back to Excel.

**Success hypothesis:** if investors can consolidate multi-source holdings into one flexible, income-focused view, they'll prefer it to their spreadsheet. Validate with Inzhur members: they complete "understand my total position and this month's income" faster and rate clarity higher than their current Excel workflow.

## Audience (beachhead)
Multi-asset retail investors like the Inzhur community who currently track in Excel — a fund/REIT position plus assets elsewhere. Broader market (any multi-asset investor, 25–65, worldwide) is future expansion, not the current design target.

## Platform & how we work
- Single responsive web app — one build, one design system — fluid from mobile to desktop. **Mobile-first** (primary context: quick check-ins on the go), scaled up for deeper desktop review. Explicitly NOT two experiences: same features, structure, and content, reflowed for screen size.
- **Built directly in code** on the existing Next.js 16 app; the usability test runs on the real build. No separate Figma deliverable.
- **AGENTS.md governs the build** — this Next.js version has breaking changes vs. training data; read `node_modules/next/dist/docs/` before writing any code.
- The repo doubles as the case-study record: `research/`, `wireframes/`, `concept/`, `tokens/`, `components/`, `design-system/`, `handoff/` (see README index).

## Asset types (v1)
REIT / fund certificates (Inzhur), government bonds (OVDP), stocks / ETFs, crypto, real estate, bank deposits. The data model is a flexible generic "asset" with type-specific fields so new types are cheap to add later — but only these are fully designed for v1.

## Data model (per holding)
Core fields: asset name, type, quantity, cost basis, current value, currency, and income info (amount + frequency/schedule — monthly dividend, coupon date, rent, deposit interest). **Income fields are essential, not optional** — they power the cash-flow view.

Assets split into two valuation classes:
- **Price-tracked** (crypto, stocks/ETFs): current value + history auto-fetched from public price feeds, keyed on a symbol.
- **Manually-valued** (OVDP, Inzhur certificates, real estate, deposits): user-entered value, updated periodically. OVDP & Inzhur are modeled **feed-ready** so a data source can slot in later.

## Valuation & 30-day change
Every value is shown with its direction, but **only where we have real data** — fetched history for price-tracked assets, the user's own snapshot history for manually-valued ones. Everywhere else: a neutral state, never a fabricated number. Freshness varies by class (crypto 24/7, stocks market-hours, manual assets infrequent), so show "as of [time]" cues and fall back gracefully to the last-known value.

## Cash flow / passive income (the hero)
Both projected and realized, **leading forward-looking**. A payout calendar / projection of upcoming income across all assets is the emotional core; realized income-to-date is the track record. **This month's income (realized + projected) is the primary "why I opened the app" metric — not net worth.** Realized capture: a projected payout **auto-rolls to realized once its date passes, flagged for one-tap confirm/edit.**

## Main consolidated view (priority order)
1. Total position across everything
2. Blended monthly + projected income
3. Breakdown by asset type
4. Upcoming payout calendar

Assume ~5–30 holdings → a grouped, scannable list (no heavy search/filter on day one); confirm the real range in interviews.

## Performance / P&L
Income leads everywhere. Unrealized gain/loss + total return live in **holding detail, not the dashboard hero** — keeps the income wedge sharp rather than becoming "just another portfolio tracker."

## Currency
Multi-currency entry, one user-chosen display currency. **FX rate auto-fetched daily** (keeps a fresh price from being paired with a stale rate; live-tick FX is unnecessary). Native currency is shown alongside the converted value. Treat currency clarity as a design theme, not a footnote (Inzhur values in UAH pegged to USD; users hold other currencies too).

## Data in (onboarding)
Manual entry across asset types, plus **first-class CSV import** — the bridge FROM Excel that removes switching cost. Import accepts the user's existing sheet: **auto-detect common headers, with a quick remap step** to fix mismatches. Live account integrations / auto-sync are deferred.

## Storage & trust
**Local-first, no account** — data lives in the browser (IndexedDB); nothing leaves the device except public price lookups and the daily FX fetch. Trust copy: "we fetch public prices, never your balances." Distrust is part of why people avoid these apps, so trust cues (data locality, "as of" freshness, honest empty states) are first-class. Cross-device sync deferred.

## Wedge against Excel
Excel gives total flexibility but makes you do all the math and upkeep by hand. Flows matches enough flexibility (custom assets/fields) while automatically handling income projection, the payout calendar, live prices where available, and consolidated visualization. **"Excel's flexibility without Excel's labor."**

## Visual direction
Clean, calm, trustworthy, data-forward but not intimidating for first-time investors. Deliberately NOT generic fintech-blue — this is also a portfolio piece, so distinctiveness matters. Owned by the designer; treat as direction, not a lock.

## Language
English UI for v1, built for localization from the start. Language picker with English and Ukrainian as the initial two options; Ukrainian localization follows.

## Validation
Comparative usability test against participants' own Excel workflow, recruited from the Inzhur community. Measure task completion time, a clarity rating, and a preference split (optionally a SUS score). Maps directly to the success hypothesis.

## Scope
**In (v1):** manual entry across asset types; first-class CSV import (auto-detect + remap); the consolidated holdings + cash-flow view (total position, blended income, breakdown by type, payout calendar); live price + history for crypto and listed stocks/ETFs; daily auto-fetched FX; local-first storage; EN UI + EN/UA language picker.

**Deferred:** account integrations / auto-sync; AI features; buying/selling/transactions; accounts + cross-device sync; live-tick FX; live feeds for OVDP & Inzhur (manual now, modeled feed-ready); broader (non-beachhead) audience.

## Constraints
Solo designer; ~12-week timeline; becomes a portfolio case study — keep the reasoning explicit throughout (see decision log).

## Decision log

> **Maintaining [`DECISION-LOG.md`](DECISION-LOG.md) — the authoritative, append-only record:** When superseding, revisiting, reversing, or dropping a decision, change only the affected (earlier) entry's status line. Every entry keeps the same fields, so the link lives in that status (`Superseded by #N` / `Revisited in #N`), never in an extra field on the newer entry. Never alter the original Decision, Why, or Alternatives text of a past entry. If a past decision's reasoning now looks wrong, that's exactly what should be preserved - add a new entry explaining the change, don't edit the old one.

The list below is a snapshot of key calls; the log holds the full set.

1. **Build directly in code** (not Figma-first) — the real build is both the portfolio artifact and what the usability test runs on.
2. **Local-first, no account** (IndexedDB) — strongest privacy story for a distrusted category; least backend for a solo build; sync deferred.
3. **Asset model splits price-tracked vs manually-valued** — clean basis for how valuation and the 30-day change behave per type.
4. **Live price + history for crypto & stocks/ETFs; OVDP & Inzhur manual but feed-ready** — honest about Ukrainian-market data availability; avoids overpromising live feeds we can't reliably get.
5. **30-day change shown only where real data exists** (fetched or snapshot) — never fabricate a number; protects trust.
6. **Realized income = auto-roll past-due payouts, flagged for one-tap confirm** — low labor with user control.
7. **Income leads; P&L secondary** (holding detail) — keeps the income wedge sharp vs. a generic tracker.
8. **CSV import = auto-detect + remap fallback** — a true bridge from Excel without full column-mapping complexity.
9. **FX auto-fetched daily** — keeps fresh prices from pairing with a stale rate; live-tick FX is unnecessary.
