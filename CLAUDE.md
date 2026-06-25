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
- **Manually-valued** (real estate, deposits): user-entered value, updated periodically.
- **OVDP & Inzhur certificates — now feed-feasible, not just feed-ready.** A firsthand teardown (bonds.pp.ua) confirmed live data exists for both: OVDP buy/sell + yields per ISIN across brokers, and Inzhur REIT/Energy daily NAV + monthly dividend per certificate (UAH+USD), sourced from Inzhur's own daily NAV publication. The prototype auto-pulls their current price; which exact source we use is still open (we don't have to use bonds.pp.ua).

## Valuation & 30-day change
Every value is shown with its direction, but **only where we have real data** — fetched history for price-tracked assets, the user's own snapshot history for manually-valued ones. Everywhere else: a neutral state, never a fabricated number. Freshness varies by class (crypto 24/7, stocks market-hours, manual assets infrequent), so show "as of [time]" cues and fall back gracefully to the last-known value.

## Cash flow / passive income
Income is one of **two co-equal leads** (see *Main consolidated view*) — the emotional differentiator and delight, not a metric that outranks current position. Both projected and realized, **leading forward-looking**. A payout calendar / projection of upcoming income across all assets is the emotional core; realized income-to-date is the track record. **The user can focus on income alone if that's all they care about**, but it doesn't subordinate the consolidated current position. *(Survey: forward income is latent — 53% already track it, yet the named adoption pain is "everything in one place without manual labour.")* Realized capture: a scheduled payout **auto-rolls to realized on its own date, with no per-payout confirm**. On session start (login, app open, update, a new session) we re-check the calendar and, if payouts landed while the user was away or land today, **greet them with what arrived** - informing and a small delight, not a gate - which also acts as the natural cue to **make changes** (bulk or per holding) if something did not actually happen (they sold the asset, a coupon was cut).

## Main consolidated view
**Two co-equal leads, now delivered as two peer screens** over one shared holdings base (resolving the earlier "one toggle vs two screens" question):
- **Position, the Overview screen:** total position across everything → breakdown by asset type, with a blended this-month income headline so income stays co-equal on the front door.
- **Income, the Calendar screen:** a **month view** of dated money events. This month's blended income, navigable to past months (realized) and future months (**labeled "projected"** so a forecast is never read as exact); it also plots the dated changes the user recorded (buys/sells from import or Record changes), with income as the lead layer. The "focus on income alone" screen.

Assume ~5–30 holdings → a grouped, scannable list (no heavy search/filter on day one); confirm the real range in user testing.

## Screens & navigation
The screen map groups by what the person is doing, not by app convention. **Four screens lead** (the global nav tabs): **Overview** (position + a blended income headline), **Calendar** (the month view of dated money events, income the lead layer), **Analytics** (allocation, income by source, P&L and trends over time, all computed from the held data - so P&L lives here, not on the Overview hero), and **Goals / Calculator** (a contribution-to-goal scenario tool, defaults drawn from the user's own history, every figure labeled an estimate). Analytics and Goals are derived screens resting on evidence-thin survey asks; they stay complementary and never claim the core jobs.

Supporting screens sit off the nav: **Holding detail** (one asset in full, the home for P&L), **Record changes** (the persistent "make changes" flow for what the feeds and schedules can't see, in bulk or per holding), **Payout edit** (correct one diverged realized payout), and the get-holdings-in path (**Get started** → **Add a holding** → **Add manually** / **Import** → **Map columns** / **Review draft holdings**, plus opt-in **Connect an account / broker sync**). **My data & privacy** sits behind the profile.

**Main flow.** Launch lands on Overview. Holdings load while prices and FX fetch; a failed fetch falls back to the last-known value with an "as of" flag, never a fabricated number. A session-open greeting surfaces any income that arrived while the user was away, and is the natural cue to Record changes if a payout did not actually happen. The one intentional dead-end is the empty first run, which is why the first session routes through Get started instead.

**Navigation & depth.** Global navigation is the four tabs above. **Add (+) is not a tab** - it lives on the Overview screen, since adding is occasional. **Profile is a header entry point** (create / log in / manage), the door to the opt-in account and My data & privacy; local-first means it is optional. Display currency and the EN↔UA language toggle are global-header controls, so there is no Settings tab; top-vs-bottom tab placement is left for the wireframe stage. Overview's hero carries position and this-month's income together, so the main job sits **0 taps** in for a returning user; the income calendar, a holding, Add, and Record changes are each 1 tap.

## Performance / P&L
Neither lens is a P&L screen. Unrealized gain/loss + total return live in **holding detail, not the dashboard hero** — keeps both the income and position leads sharp rather than becoming "just another portfolio tracker."

## Currency
Multi-currency entry, one user-chosen display currency. **FX rate auto-fetched daily** (keeps a fresh price from being paired with a stale rate; live-tick FX is unnecessary). Native currency is shown alongside the converted value. Treat currency clarity as a design theme, not a footnote (Inzhur values in UAH pegged to USD; users hold other currencies too).

## Data in (onboarding)
Manual entry across asset types, plus **first-class CSV import** — the bridge FROM Excel that removes switching cost. Import accepts the user's existing sheet: **auto-detect common headers, with a quick remap step** to fix mismatches. **Optional AI-assisted import** (an LLM that drafts mapped activities from a messy CSV/statement — later images/PDF — for the user to review) sits on top as a power path, built so **no Flows server ever sees the data**: BYOK to the user's own LLM key now, on-device later (see DECISION-LOG #32). **Adding holdings spans a control↔automation spectrum the user picks from** — manual entry, CSV import, and **opt-in account sync (e.g. Interactive Brokers) for the part of the portfolio that supports it** (sync pulls the holdings list; prices stay fresh via our own feeds). One "+" reveals *what* to add, then *how*. Sync reaches only what it can; Inzhur & OVDP auto-update via their feeds, the rest stays manual/CSV. Blanket bank-aggregation / always-on sync of every platform stays deferred.

## Storage & trust
**Local-first, no account** — data lives in the browser (IndexedDB); nothing leaves the device except public price lookups, the daily FX fetch, and — **only if the user opts in** — an AI-assisted import that runs on-device or via the user's own LLM key (**never through a Flows server**). Trust copy: "we fetch public prices, never your balances." **The no-account default is a low-friction choice, not a privacy one:** it gives instant value with no sign-up wall (setup effort is the real pain), and the feeds that kill upkeep for ~95% of users (Inzhur + OVDP) work with or without an account. "As of" freshness and honest empty states stay first-class because broken/stale numbers, not privacy, are what people actually abandon trackers over. **Trust is a user-selectable stance, not a single dogma:** no-account/local is the default, while a user who prefers automation can opt into an account and sharing part of their portfolio (e.g. broker sync) — they choose where they sit on the privacy↔convenience spectrum. *(Survey: 37% have abandoned an app over account/data demands, yet 50% are comfortable with bank/broker apps and 0% name distrust as their top pain.)* Cross-device sync deferred.

## Wedge against Excel
Excel gives total flexibility but makes you do all the math and upkeep by hand. Flows matches enough flexibility (custom assets/fields) while automatically handling income projection, the payout calendar, live prices where available, and consolidated visualization. **"Excel's flexibility without Excel's labor."**

## Visual direction
Clean, calm, trustworthy, data-forward but not intimidating for first-time investors. Deliberately NOT generic fintech-blue — this is also a portfolio piece, so distinctiveness matters. Owned by the designer; treat as direction, not a lock.

## Language
Built for localization from the start, with a **working in-UI language switch (English ↔ Ukrainian)**, not a deferred nicety. Two delivery contexts: the **Ukrainian interface is what the usability tests with Inzhur users run on**, while **English is the default for the portfolio case study** — flipping the whole UI between them must be one easy toggle. Further locales follow.

## Validation
Comparative usability test against participants' own Excel workflow, recruited from the Inzhur community. Measure task completion time, a clarity rating, and a preference split (optionally a SUS score). Maps directly to the success hypothesis. A closed-question **beachhead survey (N=30)** was run ahead of it to pre-test the load-bearing assumptions (see `research/` — survey findings).

## Scope
**In (v1):** manual entry across asset types; first-class CSV import (auto-detect + remap); the consolidated holdings + cash-flow view (total position, blended income, breakdown by type, payout calendar); live price + history for crypto and listed stocks/ETFs; **auto-fetched price for OVDP & Inzhur certificates**; daily auto-fetched FX; local-first storage with **opt-in account sync for supported holdings (e.g. Interactive Brokers)**; **optional AI-assisted import (BYOK now, on-device later; no Flows server sees the data)**; **in-UI EN↔UA language switch (UA for user tests, EN for the portfolio)**.

**Deferred:** blanket bank-aggregation / always-on auto-sync of every platform (opt-in broker sync for supported holdings is in); AI features **beyond import**; buying/selling/transactions; accounts + cross-device sync; live-tick FX; broader (non-beachhead) audience.

## Constraints
Solo designer; becomes a portfolio case study — keep the reasoning explicit throughout (see decision log).

## Decision log

> **Maintaining [`DECISION-LOG.md`](DECISION-LOG.md) — the authoritative, append-only record:** When superseding, revisiting, reversing, or dropping a decision, change only the affected (earlier) entry's status line. Every entry keeps the same fields, so the link lives in that status (`Superseded by #N` / `Revisited in #N`), never in an extra field on the newer entry. Never alter the original Decision, Why, or Alternatives text of a past entry. If a past decision's reasoning now looks wrong, that's exactly what should be preserved - add a new entry explaining the change, don't edit the old one.

The list below is a snapshot of key calls; the log holds the full set.

1. **Build directly in code** (not Figma-first) — the real build is both the portfolio artifact and what the usability test runs on.
2. **No-account default for low friction, not trust; sharing/sync as a user-selectable stance** (IndexedDB; opt-in account + broker sync for users who prefer automation) — the default is no sign-up wall and feeds that work without an account, with privacy a side-benefit, not the reason. Survey: 37% have abandoned an app over data demands, but 50% are fine with bank/broker apps and 0% name distrust as their top pain. Blanket aggregation/sync deferred.
3. **Asset model splits price-tracked vs manually-valued** — clean basis for how valuation and the 30-day change behave per type.
4. **Live price for crypto & stocks/ETFs; OVDP & Inzhur now feed-feasible (auto-pulled in the prototype)** — a firsthand teardown confirmed live data exists for both (and they're the ~95% beachhead core); real estate & deposits stay manual. Revises the earlier "OVDP & Inzhur manual but feed-ready" call.
5. **30-day change shown only where real data exists** (fetched or snapshot) — never fabricate a number; protects trust.
6. **Realized income = scheduled payouts auto-roll to realized silently, surfaced as a "you got paid" greeting on return; corrections via a persistent make-changes flow** — low labor, a delight on the way in, and one obvious place to fix what automation can't see.
7. **Income and current position are co-equal, user-switchable lenses; P&L stays in holding detail** — survey showed forward income is a latent delight (53% already track it) while consolidation + upkeep is the named adoption pain. Revises the earlier "income leads; P&L secondary" call.
8. **CSV import = auto-detect + remap fallback** — a true bridge from Excel without full column-mapping complexity (a bridge, not a differentiator — competitors match it).
9. **FX auto-fetched daily** — keeps fresh prices from pairing with a stale rate; live-tick FX is unnecessary.
10. **AI-assisted import adopted** — optional power path on top of CSV; BYOK to the user's own LLM now, on-device later, so no Flows server sees the data. Reverses the earlier "no AI import" call (DECISION-LOG #32).
11. **Beachhead survey (N=30) run before user testing** — confirms multi-asset fragmentation and the spreadsheet incumbent; redirects the wedge toward *ongoing automation* (upkeep + consolidation is the named pain, forward income a latent delight); first direct beachhead evidence.
12. **Opt-in broker sync as one option on a control↔automation spectrum** — manual / CSV / sync; sync pulls the holdings list, our feeds keep prices fresh. Pairs with #2 (trust is the user's choice).
13. **In-UI EN↔UA language switch** — Ukrainian for the Inzhur usability tests, English for the portfolio; one easy toggle.
