# Flows — Competitor Analysis

Competitive landscape for **Flows** (cross-platform, income-first holdings consolidator; beachhead = Ukrainian retail investors like the Inzhur community). Feeds the research stage and the case study. Pairs with [`research.md`](research.md); the central question — *"why do people still choose a spreadsheet over dedicated apps?"* — is the spine of the SOFT group.

**Method.** Each competitor was checked against live web sources in **June 2026** (search + page fetch). Sources are listed at the end. This is desk research, not hands-on testing.

**Verification legend.**
- ✅ **Verified** — existence + the cited feature confirmed against a current source.
- ⚠️ **Inferred / unverified** — reasoned but not directly confirmed; treat as a hypothesis to test. Pricing and feature tiers drift, so all prices are "as of mid-2026, may change."
- 🇺🇦 **Beachhead-usability** is mostly *inferred*: Western apps rely on Plaid/Yodlee-style bank linking that does **not** cover Ukrainian banks/brokers/Inzhur, so for our users they collapse to **manual entry**. Where I say "auto-sync won't reach UA," that's reasoned from how aggregation works, not a tested fact. ⚠️

> **The thesis up front:** "Income tracking" already exists — but in the market it almost always means *dividends from listed equities*. Nobody blends **dividends + bond coupons + rent + deposit interest + REIT/fund payouts** into one forward monthly number, and nobody covers the beachhead's actual assets (Inzhur certificates, OVDP, UA deposits) as anything but manual. Flows' wedge is the **blend + the coverage + local-first**, not "income" in the abstract.

---

## Group 1 — HARD: dedicated multi-asset / income trackers our users could realistically use today

These are direct, same-job products. All are **realistically usable by a Ukrainian retail investor via manual entry** (and global stocks/crypto), but none natively understand Inzhur certificates, OVDP, or UA deposits, and their auto-sync doesn't reach UA institutions 🇺🇦⚠️. Notably, **four of five lead with dividends** — proof that the *income angle is not unique to us at the dividend level*. The gap is broader passive income and local coverage.

### At-a-glance matrix

| Competitor | Asset coverage | Forward income / payout calendar | Data-in | Multi-currency | Mobile | Price (mid-2026) |
|---|---|---|---|---|---|---|
| **getquin** ✅ | Stocks/ETFs/crypto + real estate & alternatives (manual) | Dividend calendar + forecast — **listed only** ✅ | Broker API (EU) + manual ✅ | Yes ✅ | iOS/Android + web ✅ | Free; ~€50/yr Premium ✅ |
| **Parqet** ✅ | Stocks/ETFs/crypto + manual assets | Dividend dashboard + calendar + forecast — **listed** ✅ | 50+ broker import (DE/EU) + manual ✅ | Primarily EUR; broader multi-currency ⚠️ | iOS/Android + web ✅ | Freemium ✅ |
| **Sharesight** ✅ | 700k+ global equities/ETFs/funds, + bonds & metals (2025–26), + custom (manual) ✅ | **Future Income report + Income Calendar** — best-in-class for income clarity, paid ✅ | Broker sync/email + manual + CSV ✅ | **Yes — base currency + auto FX** ✅ | Web-first (app exists) ⚠️ | Free ≤10 holdings; paid from ~$7/mo ✅ |
| **Snowball Analytics** ✅ | Stocks/ETFs/crypto + funds | Dividend calendar + **12-mo forecast** + dividend rating ✅ | 15 brokers + Yodlee + manual/CSV ✅ | Multi-currency ⚠️ | Web (+ app) ⚠️ | Freemium ✅ |
| **Portfolio Performance** ✅ | Stocks/ETFs/crypto/bonds + **anything, manual** | **None native** — performance-first (IRR / True-TWR) ✅ | Manual + price feeds (Yahoo, CoinGecko…) + CSV; **local XML files** ✅ | Yes ✅ | **Desktop only** (Win/Mac/Linux) ✅ | **Free, open-source** ✅ |

### What to study, per competitor

**getquin** — *Type:* web + iOS/Android, social investing platform (German-origin), free tier + ~€50/yr Premium.
- **Consolidation:** Among the broadest — stocks, ETFs, crypto *and* manual real estate / luxury / alternatives in one view. Good model for "everything in one place" beyond securities.
- **Income:** Has a dividend calendar with forecasting and YoY growth — but it's **dividend-of-listed-securities**, not blended cross-asset passive income. Study the calendar UX; note the coverage gap (no coupons/rent/deposit interest as first-class income).
- **Data-in:** Broker API connections (EU brokers) + manual. Onboarding is light *if* your broker connects — which for UA users it won't 🇺🇦⚠️.
- **Loses to Excel when:** your assets don't fit its catalog, or you distrust a social/cloud platform holding your full picture. Its strength (auto-connect, community) is exactly what's unavailable/unwanted for our beachhead.

**Parqet** — *Type:* web + iOS/Android (German; formerly Tresor One), **hosted in Germany, privacy-forward** ("never finances itself through your data") ✅.
- **Consolidation:** Securities + crypto + manual assets; strong analytics (X-Ray ETF look-through, allocation, tax, cash-flow dashboards).
- **Income:** A genuinely income-forward product — dedicated **dividend dashboard + calendar + forecast + payout notifications**. The closest competitor in *spirit* to our cash-flow hero — study its dividend dashboard hierarchy. Still listed-dividend-centric.
- **Data-in:** Import for 50+ (mostly German/EU) brokers + manual. ⚠️ Multi-currency depth beyond EUR is **unverified** — check before claiming we beat it on FX.
- **Loses to Excel when:** non-German/EU broker, exotic asset, or you want one custom field it doesn't model. Privacy story is good but still cloud + account.

**Sharesight** — *Type:* web-first portfolio/tax tracker (NZ-origin, global), free ≤10 holdings then paid. **The income-clarity benchmark of this group.**
- **Consolidation:** 700k+ global instruments + custom (manual) investments; expanded into **bonds & precious metals (2025–26)** — closing the "only-equities" gap others have.
- **Income:** **Future Income report + 2025 Income Calendar** show paid / pending / upcoming / forecast dividends together, up to **3 years out**, auto-converted to home currency. This is the bar for *income clarity* — emulate the "paid vs projected, in one timeline" framing directly. (Still equity/fund-dividend + coupon centric; no rent / deposit interest / Inzhur payouts.)
- **Data-in:** Broker sync, email-in, manual, **CSV** — and famously tax-report-oriented. Onboarding heavier (built for record-keeping/tax).
- **Multi-currency:** ✅ Real strength — base currency + automatic FX + a Multi-Currency Valuation report. We must be *at least* this good here.
- **Loses to Excel when:** the user wants a single calm "this month" glance rather than report-heavy depth, or holds assets Sharesight can't price. It out-rigors Excel but doesn't out-*simplify* it.

**Snowball Analytics** — *Type:* web (+ app ⚠️) dividend-focused tracker, freemium.
- **Consolidation:** Securities/crypto/funds. Less "alternative assets" than getquin/Kubera.
- **Income:** Dividend specialist — **12-month income forecast**, dividend calendar (ex-div/record/pay dates), DRIP planning, and a **dividend safety rating** (13 fundamentals). Study the forecast + calendar; the safety rating is out of scope for us but shows how far "income analytics" can go.
- **Data-in:** 15 broker imports + Yodlee + manual/CSV.
- **Loses to Excel when:** same pattern — listed-dividend-only, cloud/account, and no room for a UA fund certificate or a custom income schedule.

**Portfolio Performance** — *Type:* **free, open-source desktop** app (Java; Win/Mac/Linux). The power-user's Excel replacement. *(Kin: **Ghostfolio** — self-hosted web ✅; **Wealthfolio** — local-first, open-source ✅, the closest architectural twin to Flows' local-first model — **now reviewed firsthand: desktop + iOS + self-hosted web, not desktop-only; see [`competitor-teardown.md`](competitor-teardown.md)**.)*
- **Consolidation:** Extremely flexible — model essentially **any** asset manually, pull prices from many feeds, define your own asset allocation. This is what disciplined ex-spreadsheet investors graduate to.
- **Income:** **This is the tell — it's performance-first (IRR / True-Time-Weighted Return), with no native forward payout calendar.** Even the most powerful free tracker treats income as a byproduct, not the hero. Direct opening for Flows.
- **Data-in:** Manual + price feeds + CSV; **data lives in local XML files** — i.e., it *already* satisfies the local-first/data-ownership demand that pushes people away from cloud apps.
- **Mobile:** **None.** Desktop-only Java app — the opposite of our mobile-first responsive bet. A quick "how much lands this month?" check on a phone is impossible here.
- **Loses to Excel when:** honestly, it often *wins* vs Excel for power users — but its **steep learning curve and desktop-only, finance-jargon UI** lose the *less technical* Inzhur investor, who retreats to the familiar sheet. Flows' opening vs PP = mobile + calm + income-first + zero learning curve, same local-first privacy.

---

## Group 2 — SOFT: same job, different product (the tools people *bend* to it)

The job — *"understand everything I own and the income it throws off, across sources, in one place"* — is mostly done today with tools that aren't trackers. The spreadsheet is the real incumbent and gets the deepest treatment.

### 2.1 — Excel / Google Sheets + community tracking templates ⭐ (the true incumbent)

*Type:* general-purpose spreadsheet + shared templates (e.g., GOOGLEFINANCE dividend trackers, "yield-on-cost" sheets, international dividend templates). ✅

**Why it wins — and keeps winning (this is the whole question):**
- **Total flexibility.** Any asset, any custom field, any income schedule — an Inzhur certificate, an OVDP coupon, a rented flat, a USD deposit all sit side by side. No catalog can reject your asset. ✅
- **Data ownership & trust.** The file is *yours*, offline, no account, no linking. On Bogleheads, investors explicitly call **real-time auto-sync a "red flag"** and unnecessary complexity, not a feature ✅ — a direct rebuttal to every aggregator's core pitch, and strong validation of our **local-first, no-account** stance.
- **Right-sized effort.** Passive investors update **1–2× a year** (rebalance, taxes) ✅ — so "always-on sync" solves a problem they don't have, while a sheet costs nothing to leave alone.
- **"Good enough" automation.** `GOOGLEFINANCE` pulls live-ish prices (~20-min delay) ✅, so even the live-price advantage of apps is partly neutralized for listed assets.
- **Zero cost, infinite tutorials, and the satisfaction of building your own.** ✅

**Where it breaks (our opening — "Excel's flexibility without Excel's labor"):**
- **No automatic forward payout calendar.** Projecting "what lands next month" across mixed assets is hand-built and brittle. ⚠️ (general knowledge)
- **FX is painful.** No native "rate on the coupon date"; multi-currency blending is manual and error-prone. ⚠️
- **GOOGLEFINANCE is flaky** for crypto/non-US tickers and throws `#N/A`; formulas rot. ⚠️
- **Bad on mobile.** Quick phone entry/glance — our primary context — is exactly what spreadsheets are worst at. ⚠️
- **No graceful "as of" / freshness or honest empty states** — you either fake a number or stare at a blank cell.
- **You build every chart, every total, every grouping by hand.**

> **Design mandate:** every Flows feature should be answerable as *"this is the part of the spreadsheet you'd otherwise maintain by hand."* And we must **not** beat the sheet on flexibility/ownership where it's already unbeatable — we match those (custom assets/fields, local-first) and win on **labor** (auto payout calendar, auto FX, auto consolidation, mobile glance).

### 2.2 — Inzhur's own in-app portfolio (the beachhead's home platform) 🇺🇦 ✅ — *and it just leveled up*

*Type:* native iOS/Android app from Inzhur (the REIT/fund issuer our community already uses).
- **Brand-new and decision-relevant:** the Inzhur app went **publicly available June 2, 2026** (≈7 days before this writing), **15,000+ installs in 48h**, with REIT/real-estate funds **+ OVDP + energy**, auto-reinvest, **"30+ portfolio indicators,"** and a 10-UAH minimum. ✅
- **Consolidation:** Excellent — *for Inzhur-held assets only.* It is a **single-platform silo**: it does not (and won't) show your Binance crypto, Freedom24 stocks, a rented flat, or a Privat24 deposit.
- **Income:** Strong for its own instruments (OVDP coupons, fund distributions, auto-reinvest), and tax-advantaged OVDP messaging. But it's *Inzhur income*, not your blended whole.
- **What to study:** This is the **quality bar our beachhead now anchors on** for the home silo — 30+ indicators, clean native entry/exit. **Implication: Flows can't win by out-polishing one silo; it wins by being the layer *above* all silos — cross-platform total + blended income.**

### 2.3 — Brokerage & crypto-exchange dashboards (per-silo views) 🇺🇦

*Type:* in-app portfolio screens of the platforms UA investors actually use — **Freedom24** (foreign stocks/ETFs), **mono invest** (Monobank's separate app, S&P 500 only ✅), **Privat24** (can buy OVDP ✅), crypto exchanges (Binance et al.). 
- **Consolidation:** None across platforms — each shows only its own holdings. A UA investor with Inzhur + Freedom24 + a crypto exchange + a bank deposit has **four dashboards and no total.**
- **Income:** Weak and backward-looking. **Freedom24 shows realized dividends in a cash-flow section but explicitly *cannot show upcoming dividends* ✅** — the forward view, our hero, is missing even here. Users export to third-party trackers (e.g., Portseido) to get it.
- **Why this matters:** This silo-fragmentation **across Ukrainian platforms** is the concrete reason the spreadsheet exists. Flows is the consolidation layer these dashboards structurally can't be.

### 2.4 — Banking / personal-finance aggregation apps (and the UA reality)

*Type:* PFM aggregators — **Mint** (✅ **shut down 23 Mar 2024**, folded into Credit Karma, which **dropped budgeting/net-worth-planning** ✅), **Empower** (see Aspirational), plus UA banking apps (**Monobank**, **Privat24**).
- **The aggregation magic doesn't reach the beachhead.** These apps' stickiness comes from auto-linking thousands of *US/EU* institutions via Plaid/Yodlee. **UA banks/brokers/Inzhur aren't in that graph** 🇺🇦⚠️ — so for our users the aggregator's one advantage over Excel evaporates, and they'd be back to manual entry anyway.
- **UA banking apps are themselves silos:** Privat24 sells OVDP, mono invest holds US stocks — neither consolidates the other, let alone crypto/real estate.
- **Signal worth noting:** the most popular free aggregator (Mint) **died and its replacement got worse** — the "free cloud aggregator" model is fragile, which quietly strengthens the case for local-first, no-account, no-server-cost.

### 2.5 — Google Finance / generic finance dashboards & Notion templates

*Type:* lightweight quote/watchlist dashboards and DIY Notion/finance templates. ⚠️ (lightly verified)
- **Consolidation:** Watchlist-grade — quotes and a basic holdings list, no real multi-asset balance, no liabilities, thin on manual/alternative assets.
- **Income:** Essentially none — no payout calendar, no projection.
- **Role:** They're where someone lands *before* committing to a spreadsheet; they lose the job the moment income or mixed assets enter. Not a serious threat, but they show how low the bar is for "a list of tickers."

---

## Group 3 — ASPIRATIONAL: international best-in-class (category + craft benchmarks)

Benchmarks for quality, **not** realistically usable by the beachhead (US/Canada bank-linking; some are single-platform). Study the craft; don't assume the model ports.

**Empower (formerly Personal Capital)** — *Type:* free web + mobile net-worth/investment dashboard (US). ✅
- **Study:** The gold standard for a **single consolidated dashboard** — net worth, investments, allocation, "investment checkup," all auto-synced, "15 minutes a month" upkeep. This is the *consolidation + low-effort* feeling to aim for.
- **Income caveat — important:** its "cash flow" is **bank cash in/out (budgeting)**, *not* a forward passive-income calendar. Even the category leader doesn't do our hero. Don't mistake its cash-flow tab for our wedge.
- **Doesn't port:** US-only linking; free because it's a funnel for paid wealth management (0.49–0.89% AUM).

**Monarch Money** — *Type:* paid web + mobile PFM (US/Canada), the post-Mint favorite. ✅
- **Study:** **Cash-flow projection / forecasting UX** — it projects account balances weeks/months out from recurring income & bills, with clean tabbed navigation and strong onboarding. The *forward-looking* framing and the "what lands when" mental model are directly transferable to our payout calendar — even though its inputs are bills, not coupons.
- **Doesn't port:** subscription + US/Canada bank linking; "income" = paychecks/bills, not investment payouts.

**Copilot Money** — *Type:* **iOS/macOS-only** PFM, ex-Apple designers, ~$95/yr. ✅
- **Study:** Widely called the **best data visualization in consumer finance** — calm, dense, native-feeling charts and a clear income/spending/net cash-flow view. This is the **visual-craft bar** for presenting dense financial data simply.
- **Deliberate anti-model for us:** no web, no Android, **by choice.** We're making the *opposite* bet (one responsive web app, mobile→desktop). Borrow the visual restraint; reject the platform strategy.

**Kubera** — *Type:* paid web net-worth tracker (~$150/yr), built for "manage-your-own-wealth" people. ✅
- **Study:** Best-in-class **broad manual multi-asset + multi-currency** — banks, brokerages, crypto/DeFi, real estate, private equity, domains, collectibles, with **100+ fiat currencies and real-time FX**. The cleanest answer to "model *anything* and convert everything to one display currency" — our multi-currency + manual-asset challenge, solved elegantly.
- **Anti-benchmark on income:** it's a **balance sheet — net-worth-first, essentially no passive-income/dividend story.** Concrete proof that the best multi-asset consolidator on the market still leaves our income wedge wide open.

**Flighty** *(non-finance craft benchmark)* — *Type:* iOS flight tracker, **Apple Design Award 2023 (Interaction)**. ✅
- **Why it's here:** It is *the* reference for **dense data presented calmly** (it borrows airport-departure-board visual language) and for a **forward-looking, context-aware timeline** that surfaces only what matters at each stage. That is almost exactly our two hardest design problems: a **forward payout calendar** and **"this month's income" as one calm hero number** amid a lot of underlying data.
- **Study:** information hierarchy under density, "what to show now vs on scroll," and forward-timeline states. Proof that dense ≠ intimidating — central to "data-forward but not intimidating for first-time investors."

---

## Synthesis — the opening for Flows

1. **"Income" in the market = listed dividends.** getquin / Parqet / Sharesight / Snowball all forecast equity/fund dividends well; Western PFM "cash flow" is *budgeting* (bills vs paychecks). **Nobody blends dividends + bond coupons + rent + deposit interest + REIT/fund payouts into one forward monthly number.** Our wedge is real but **specific** — it's the *blend + coverage*, not "income tracking," and our messaging should say so precisely.

2. **No one covers the beachhead's actual assets — so every app is "manual anyway" for our users.** Inzhur certificates, OVDP, UA deposits reduce to manual entry everywhere, and auto-sync (the dedicated apps' main edge over Excel) **doesn't reach UA institutions** 🇺🇦⚠️. This *erases* their advantage over the spreadsheet for our audience — and validates our **manual-first + first-class CSV import** bet.

3. **The world is fragmented into silos — even inside Ukraine.** Inzhur app, mono invest, Privat24, Freedom24, crypto exchanges each show only their own assets. The **cross-silo total + blended income is the unmet job**, and it's exactly the moment a user opens a spreadsheet. Flows is the layer *above* the silos.

4. **Why Excel still wins (verified, not assumed):** total flexibility for any asset/field, **data ownership** (investors call auto-sync a *red flag*, not a feature), right-sized low effort for passive investors, zero cost, and "good-enough" live prices via GOOGLEFINANCE. We must **match** flexibility + ownership (custom fields, **local-first, no account**) rather than try to beat the sheet there.

5. **Where Excel breaks = our build list:** no auto forward payout calendar, manual/brittle FX, flaky formulas, weak mobile entry/glance, no honest "as of"/freshness, every chart hand-built. **"Excel's flexibility without Excel's labor"** should map 1:1 onto these failure points.

6. **Local-first is rare and differentiating.** Only niche power-tools (Portfolio Performance, Wealthfolio, self-hosted Ghostfolio) match our privacy posture; the mainstream is cloud + account + bank-linking — and Mint's death shows that model is fragile. **Local-first + no account is a direct answer to the trust objection** that pushes our users back to a sheet.

7. **The bar at home just rose (this week).** Inzhur's **native app (June 2, 2026, 30+ indicators)** means our beachhead now has a polished single-silo view. Flows must win on **cross-platform consolidation + blended income**, not on out-prettying one issuer's app — single-silo polish is now table stakes.

8. **Craft benchmarks to emulate, one per challenge:** **Sharesight's Future Income report** (paid vs projected income in one timeline) · **Monarch's** forward cash-flow projection UX · **Copilot's** calm data-viz density · **Flighty's** forward-looking timeline. Common thread = *dense data, calm presentation* — our core design problem.

---

## Sources

**HARD**
- getquin — https://www.getquin.com/portfolio-tracker/ · https://www.getquin.com/dividend-tracker/
- Parqet — https://parqet.com/en · https://parqet.com/en/dividend-tracker
- Sharesight — https://www.sharesight.com/dividend-tracker/ · https://www.sharesight.com/us/features/ · https://stockanalysis.com/article/best-dividend-tracker/
- Snowball Analytics — https://snowball-analytics.com/ · https://snowball-analytics.com/dividend-calendar
- Portfolio Performance — https://www.portfolio-performance.info/en/ · https://github.com/portfolio-performance/portfolio · (kin) https://wealthfolio.app/ · https://github.com/ghostfolio/ghostfolio

**SOFT**
- Spreadsheet incumbent (why people prefer it) — https://www.bogleheads.org/forum/viewtopic.php?t=433919
- Google Sheets templates / GOOGLEFINANCE — https://tawcan.com/step-step-guide-make-google-spreadsheet-dividend-portfolio-template/ · https://www.expensesorted.com/blog/91_dividend_tracker_spreadsheet
- Inzhur app launch — https://www.rbc.ua/rus/news/inzhur-zapustiv-zastosunok-investitsiy-neruhomist-1780571504.html · https://www.inzhur.reit/news/inzhur-zapustiv-investicziyi-v-ovdp-na-svoyemu-sajti
- Freedom24 (no upcoming dividends) — https://freedom24.com/faq/13444-overview-of-our-analytical-tools · https://www.portseido.com/dividend-tracker/freedom24/
- Mint shutdown / Credit Karma — https://www.cnbc.com/2023/11/07/budgeting-app-mint-is-shutting-down-users-are-disappointed.html · https://wallethub.com/edu/b/what-happened-to-mint/151868
- UA banking (mono invest, Privat24 OVDP) — https://en.wikipedia.org/wiki/Monobank_(Ukraine) · https://itomychstudio.com/en/blog/ukrainian-mobile-apps-for-investment-new-potential-or-risk/

**ASPIRATIONAL**
- Empower / Personal Capital — https://robberger.com/empower-review/ · https://www.nerdwallet.com/finance/learn/empower-personal-dashboard-budget-app-review
- Monarch Money — https://www.monarch.com/ · https://help.monarch.com/hc/en-us/articles/20504904768020-Cash-Flow
- Copilot Money — https://www.copilot.money/ · https://apps.apple.com/us/app/copilot-track-budget-money/id1447330651
- Kubera — https://www.kubera.com/net-worth-tracker · https://www.kubera.com/blog/multi-currency-portfolio-tracking
- Flighty — https://developer.apple.com/news/?id=970ncww4 · https://en.wikipedia.org/wiki/Flighty

*Compiled June 9, 2026. Re-verify pricing, feature tiers, and (especially) Ukrainian accessibility before any claim goes into the case study or marketing.*
