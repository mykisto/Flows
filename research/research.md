# Flows — Research (synthesis)

The research-stage hub. **This is assembly, not new research** — it synthesizes four source documents into one place that feeds the Define stage and the case study. Each is the authority for its area; follow the links for full evidence:

- [`competitor-analysis.md`](competitor-analysis.md) — the three-group competitor map (desk research, June 2026)
- [`competitor-teardown.md`](competitor-teardown.md) — firsthand, logged-in axis comparison + [`screens/`](screens/)
- [`flexibility-deep-dive.md`](flexibility-deep-dive.md) — the flexibility-without-effort benchmark (non-finance exemplars)
- [`portfolio-view-patterns.md`](portfolio-view-patterns.md) — the consolidated-view pattern choice

**Goal.** Validate the success hypothesis: investors who consolidate multi-source holdings into one income-focused view will prefer it to their spreadsheet — completing *"understand my total position and this month's income"* faster, and rating clarity higher.

**Legend.** ✅ verified (desk source or firsthand) · ✅📷 verified firsthand in the teardown (capture named) · ⚠️ inferred/unverified · 🔒 paywalled feature · 🇺🇦 beachhead-accessibility note · `[?]` unknown — not invented.

**Conflicts are noted, not silently resolved.** Where firsthand teardown corrected earlier desk research, both are shown.

---

## 1. Competitors

### Comparison matrix (our axes)
Condensed from the firsthand [teardown](competitor-teardown.md); ✅📷 = verified in-product, ✅ = verified on a source, 🔒 = paid, ⚠️ = inferred. The eight rows are the decision-relevant set (the desk doc's fuller list of 15+ lives in [`competitor-analysis.md`](competitor-analysis.md)).

| Product | Asset coverage & one-view consolidation | Income & forward cash flow (our wedge) | Data-in | Multi-currency | Mobile | Trust / architecture |
|---|---|---|---|---|---|---|
| **Parqet** ✅📷 | Manual: securities incl. bonds, cash, crypto, metals, real estate, collectibles | Dividend dashboard + 12-mo forecast (free); **detailed "upcoming distributions" calendar is paid** 🔒📷 — listed-dividend-centric | **Import-first** onboarding; file import = "PDF statement or CSV" only, broker-template based (not generic remap, not xlsx) ✅📷 | Display currency settable (seen as UAH); EUR prices + ECB FX ✅📷 *(corrects desk "primarily EUR ⚠️")* | iOS/Android + web | DE-hosted, "never finances itself through your data" |
| **getquin** ✅📷 | Broad manual: Security/Crypto/Bond/Cash/Real Estate/NFT/Commodities/P2P ✅📷 | Dividend calendar + forecast (marketing) — listed only; couldn't populate firsthand `[?]` | **Working AI import** — drag-drop any CSV/XLSX/PDF/DOC/JPEG/PNG, LLM-parsed ✅📷. **Corrects desk research**, which had called CSV "marketing-only" | Display currency UAH ✅📷 | iOS/Android + web | Cloud + account + social feed |
| **Sharesight** ✅📷 (Free) | 700k+ instruments + bonds/metals; Income + Currency-gain first-class columns ✅📷 | **Future Income report** (to 3 yrs) — **gated, "Upgrade to see"** 🔒📷; Income Calendar present | Broker sync + email-in + manual + CSV; tax-oriented, heavier | Base currency UAH works free; **Multi-currency valuation report is paid** 🔒📷 | Web-first; app exists ⚠️ | Established, tax-grade; cloud + account |
| **Kubera** ✅📷 | Best-in-class breadth: banks, crypto, real estate, vehicles, metals + AI Appraiser; "just like a spreadsheet" ✅📷 | **Anti-benchmark: pure balance sheet, no income column or forecast** ✅📷 | Spreadsheet-like table; manual value updates saved as snapshot history ✅📷 | **Best-in-class:** enter any currency → stores native (USD 250,000) + shows converted (₴11,150,227) together ✅📷 | Web, responsive | Paid (~$249/yr), no data funnel |
| **Inzhur** 🇺🇦✅📷 | Excellent **for Inzhur assets only** (REIT, Energy, OVDP) — a single-platform silo ✅📷 | Shows income for its own instruments: all-time dividends (month/quarter/year), OVDP coupons/yield/maturity — mostly realized ✅📷 | In-platform only; 10-UAH min | Native ₴/$ toggle ✅📷 | Native iOS/Android + web | Trusted issuer; holds your money |
| **FIREkit** ✅📷 (public demo) | Broad & flexible: stocks, bonds, crypto, treasury, cash, deposits, real estate, even a car, with tags/goals ✅📷 | Tracks **realized** dividends/deposits/profit + TWR; **no forward payout calendar** — only forward view is a decades-out FIRE net-worth projection ✅📷 | Manual entry; instant public demo, no login ✅📷; CSV import `[?]` | Multi-currency + currency-distribution chart ✅📷 | Responsive web | Public no-login demo = low-friction; but cloud + account |
| **Wealthfolio** ✅📷 (firsthand, desktop 3.5.2) | Securities-broad + alternatives (real estate, collectibles, private equity, liabilities); now spans **Investments / Net Worth / Spending (PFM)** ✅📷. **But the "Other Asset" form is value-only — no income schedule** ✅📷; beachhead test: `IR`/`IE` mis-mapped to US stocks, OVDP ISIN priced at UAH 0 ✅📷 | **Realized dividends + interest only**; Income page bars **all past — no forward/projected, no payout calendar** ✅📷; hero is **value + performance (TWR/IRR)** ✅📷 | **Manual CSV wizard** (5-step, auto-detect + per-column remap + saveable templates, isin→symbol) ✅📷 **+ AI chat import** (`import_csv` LLM tool, **BYOK** to user's own OpenAI/Anthropic — needs their credits) ✅📷; self-contained SQLite backup + export ✅📷 | Multiple currencies + FX; mixed UAH/USD in one ledger ✅📷 | **Desktop verified firsthand**; iOS + self-hosted web exist 📄 (not driven) | **Strongest local-first: local SQLite, no account, no cloud by default** ✅📷; **AI is local-first too — on-device Ollama option** + BYOK + per-category data-access toggles ✅📷; optional paid Connect = cloud by choice |
| **Excel / Sheets** ⭐ | Unbeatable flexibility — any asset/field/schedule ✅ | **No auto forward payout calendar**; `GOOGLEFINANCE` pulls prices but no dividend data ✅ | 100% manual; every total by hand | Manual/brittle; no "rate on coupon date" ⚠️ | Weak on mobile ⚠️ | Maximal — file is yours, offline, no account ✅ |

**Set-composition note (conflict/scope):** the desk doc's Group 1 used **Portfolio Performance** as the local-first power-tool; the firsthand teardown **replaced it with FIREkit** (the Inzhur community's recommended Excel replacement) as more beachhead-relevant. FIREkit is **cloud + account**, so it does *not* fill the local-first slot — **Wealthfolio** does (now reviewed **firsthand on the desktop build 3.5.2**, alongside self-hosted Ghostfolio — see the [teardown](competitor-teardown.md)). That firsthand pass corrects/sharpens three things: local-first tools are **not desktop-only**; its **manual CSV wizard *plus* AI chat import** make it the *second* competitor (after getquin) to match/beat the planned CSV wedge; and — decisively — its **AI is itself local-first** (on-device Ollama *or* BYOK to the user's own LLM), which shows **AI import doesn't have to break local-first** — the basis for Flows adopting AI-assisted import on exactly these terms (BYOK to the user's own LLM now, on-device later).

### 3 shared patterns across the market
1. **"Income" means listed dividends.** getquin/Parqet/Sharesight/Snowball all forecast equity/fund dividends; Western PFM "cash flow" is *budgeting* (bills vs paychecks, e.g. Empower/Monarch). **Nobody blends dividends + bond coupons + rent + deposit interest + REIT/fund payouts into one forward monthly number** ([competitor-analysis.md](competitor-analysis.md) synthesis #1).
2. **Cloud + account + bank-linking is the default architecture**, and where a forward-income view exists it's **paywalled** (Sharesight Future Income 🔒📷 `sharesight-future-income-gated.png`; Parqet upcoming-distributions 🔒📷 `parqet-dividend-dashboard.png`).
3. **Auto-sync is the apps' main edge over Excel — and it relies on Plaid/Yodlee, which doesn't reach UA institutions** 🇺🇦⚠️, so for our beachhead every app collapses to manual entry ([competitor-analysis.md](competitor-analysis.md) §2.4; inferred from how aggregation works, not tested).

### 3 key differences (where they diverge from each other)
1. **Asset breadth:** Kubera/getquin/FIREkit model alternatives (real estate, collectibles, vehicles); Snowball and listed-only trackers are narrower ✅📷.
2. **Income vs net worth:** Parqet/Sharesight/Snowball are income-forward (forecast + calendar); **Kubera and Empower are pure balance sheets with essentially no passive-income story** ✅📷 (`kubera-manual-asset-fx.png`).
3. **Trust architecture:** mainstream is cloud + account; only niche power-tools (Portfolio Performance, Wealthfolio, self-hosted Ghostfolio) are local-first ✅. Privacy framing also splits (Parqet "never finances itself through your data" vs getquin's social/cloud model).

### Where income / cash-flow is underserved
The **forward, blended, cross-asset payout calendar** — Flows' hero — is the clearest gap: absent in the strongest consolidators (Kubera, FIREkit have no forward payout view ✅📷), **paywalled** where it exists for listed dividends (Sharesight, Parqet 🔒📷), and never extended to coupons / rent / deposit interest / Inzhur payouts as first-class income. Even per-silo, **Freedom24 shows realized dividends but explicitly cannot show upcoming ones** ✅ ([competitor-analysis.md](competitor-analysis.md) §2.3).

### Recurring reasons people fall back to a spreadsheet
- **Coverage/flexibility** — their actual assets (Inzhur certificate, OVDP, UA deposit) or a custom field don't fit the app's catalog ✅ (Excel synthesis, [competitor-analysis.md](competitor-analysis.md) §2.1).
- **Trust/ownership** — they don't want a cloud account holding their full picture; investors call real-time auto-sync a **"red flag"** ✅ (Bogleheads thread).
- **No real advantage** — auto-sync doesn't reach UA institutions, so the app is "manual anyway" 🇺🇦⚠️.
- **Right-sized effort** — passive investors update **1–2× a year** ✅, so always-on sync solves a non-problem.
- **Cost / familiarity / the satisfaction of building your own** ✅.

---

## 2. Benchmark — flexibility without effort

The make-or-break dimension: replicate **100%** of any real portfolio while spending **far less effort** than a spreadsheet. Studied against five non-finance exemplars (Airtable, Notion, Todoist, Apple Health, Attio); full scoring in [flexibility-deep-dive.md](flexibility-deep-dive.md). Key finding: *no exemplar maxes both halves* — coverage leaders (Notion/Airtable) make you design the structure; effort leaders (Apple Health/Attio) cap what you can represent. **Flows must fuse them.**

### Top 3 mechanisms to bring into the MVP
1. **Typed asset entry with built-in defaults** *(Apple Health + Airtable + Attio)* — each asset type ships a pre-structured form that knows its own fields, units, and schedule (a bond stub has coupon + maturity; a dividend stock has a frequency). **How it lets you replicate the portfolio:** types cover the common ~90% instantly and correctly. **How it beats the spreadsheet:** the structuring *and the math* are done for you, so the field already knows it's a coupon date and Flows can project income off it — in Excel you'd build that schema by hand per asset.
2. **A custom-field / free-form escape hatch under every holding** *(Notion page-per-row + Airtable custom fields)* — add a custom field or note in place when a type doesn't fit. **How it lets you replicate the portfolio:** this is the **100%-replication guarantee** — types cover the 90%, the escape hatch covers the weird 10% (a private loan, co-op share, off-list instrument), so the user **never hits a wall and bounces to Excel**.
3. **Auto-population so entry costs less than a spreadsheet** *(Todoist Quick Add + Attio email sync + Apple Health auto-ingest)* — CSV auto-detect + remap, price/history + daily FX auto-fetch, income auto-projection + auto-roll to realized. **How it beats the spreadsheet:** this is the "without effort" half — Flows does the *ongoing* upkeep Excel makes you do by hand.

### One mechanism that works for its exemplar but NOT for Flows
**Apple Health's closed, no-escape-hatch catalog.** Health earns its zero-config magic *by refusing custom types* — Apple defines every type/unit/aggregation. That works only because Apple controls every upstream data producer and health metrics are enumerable. **For Flows it backfires:** a finite, closed asset catalog with no custom fields *is the wall* that sends users back to Excel, and Flows controls none of its upstream sources. Borrow Health's typed-defaults engine; **reject the closed catalog** — keep the escape hatch open ([flexibility-deep-dive.md](flexibility-deep-dive.md) §5).

---

## 3. Patterns

Five structurally distinct patterns for the consolidated view were evaluated in [portfolio-view-patterns.md](portfolio-view-patterns.md). The choice:

**Chosen — Summary-first, income-led hero + expandable breakdown.** A vertical priority cascade: hero carries **this month's income (realized + projected)** alongside total position, then a by-type breakdown, with the payout calendar embedded as a module. Three reasons tied to our context:
1. **It's the only structure where "income leads" is enforced by the layout**, not hoped for — the most-important figure is physically first/biggest, operationalizing the income-first lead instead of drifting to the net-worth-first default every dashboard falls into.
2. **It's the most mobile-native** — one prioritized column reflows phone→desktop with no horizontal-scroll compromise (unlike a ledger), matching the mobile-first bet.
3. **It does the structuring FOR the spreadsheet refugee** — a clean summary view is the opposite of a dense sheet, delivering the immediate "understood my position + income faster than Excel" the success hypothesis tests (the face of the flexibility-without-effort spine).

**Second-best — Timeline / payout calendar**, under **condition X:** *if validation shows the dominant reason users open Flows is forward cash-flow ("how much income, and when") rather than current position.* CLAUDE.md still ranks total position as view-priority #1, so today the calendar is the emotional core *embedded inside* the summary frame, not the frame itself.

**Does NOT fit — Visualization-led (treemap / allocation canvas).** Structurally a net-worth/allocation device with **no native place for forward income**; demands per-slice precision our manually-valued assets lack (false precision → trust damage); mobile-hostile; and it's FIREkit's allocation-analytics turf we avoid. Elegant, and wrong for this job.

---

## 4. Key product choices grounding this synthesis

The make-or-break calls already made — the conclusions below build on these:

- **Flexibility-without-effort is the make-or-break dimension** (not trust): Excel's real moat is *coverage*, not distrust; trust is "only" a barrier.
- **Income-first lead:** this-month's income (realized + projected) is the hero metric, not net worth; P&L lives in holding detail.
- **Beachhead audience:** design for Inzhur-style multi-asset investors on spreadsheets; broad market is later expansion.
- **CSV-import = a bridge, not a differentiator:** first-class CSV import (auto-detect + remap) still removes Excel switching cost — but it's **no longer a wedge**. Firsthand, Wealthfolio's *manual* CSV wizard already matches our exact plan (auto-detect + per-column remap + saveable templates), and *both* getquin and Wealthfolio add AI file ingest on top ([teardown](competitor-teardown.md)). Keep CSV as the bridge from Excel; don't lean on it for differentiation. **AI-assisted import is now adopted** as an optional power path on top: BYOK to the user's own LLM now, on-device later — built so *no Flows server ever sees the data*.
- **v1 scope guard:** manual entry + CSV + the consolidated income view are in; integrations/auto-sync, AI, transactions are deferred.
- *(supporting)* cross-platform consolidation · local-first, no account · win on cross-silo blended income, not single-silo polish · custom-field escape hatch · typed-stub + escape-hatch + auto-population spine · summary-first income-led consolidated view.

---

## 5. Conclusions — gaps & hypotheses

### Gaps this research exposes
1. **The forward, blended, cross-asset payout calendar is missing or paywalled** — the single clearest opening (Sharesight/Parqet gate it 🔒📷; Kubera/FIREkit lack it ✅📷).
2. **No app covers the beachhead's actual assets** (Inzhur certificates, OVDP, UA deposits) as anything but manual; auto-sync doesn't reach UA institutions 🇺🇦⚠️.
3. **The cross-silo consolidation layer doesn't exist** — Inzhur app, mono invest, Privat24, Freedom24, crypto exchanges are each silos; the total + blended income across them is the unmet job ([competitor-analysis.md](competitor-analysis.md) §2.3).
4. **Local-first + no-account is rare** (only power-tools); the mainstream cloud-aggregator model is fragile (Mint shut down) ✅.
5. **Trackers are either flexible-but-complex** (Portfolio Performance: powerful, desktop-only, steep) **or simple-but-limited** — nobody delivers flexibility *without* effort.

### Hypotheses (IF / THEN / BECAUSE — each traced to a finding)
- **H1.** **IF** Flows leads with a *free, on-device* forward blended-income view, **THEN** beachhead investors prefer it to their spreadsheet for "this month's income," **BECAUSE** that exact view is paywalled where it exists (Sharesight Future Income 🔒📷 `sharesight-future-income-gated.png`; Parqet upcoming distributions 🔒📷 `parqet-dividend-dashboard.png`) and absent in the strongest consolidators (Kubera 📷 `kubera-manual-asset-fx.png`).
- **H2.** **IF** Flows offers typed asset stubs **+** a user custom-field escape hatch, **THEN** users can replicate 100% of their portfolio without bouncing back to Excel, **BECAUSE** the deep-dive found the open escape hatch is the mechanism converting ~90% coverage to 100% ([flexibility-deep-dive.md](flexibility-deep-dive.md) §5), and Excel's verified moat is coverage/flexibility ([competitor-analysis.md](competitor-analysis.md) §2.1, Bogleheads).
- **H3.** **IF** Flows ships manual-first + first-class CSV import, **THEN** deferring auto-sync costs nothing vs competitors for the beachhead, **BECAUSE** no tracker's auto-sync reaches UA institutions, so every app collapses to manual for our users 🇺🇦⚠️ ([competitor-analysis.md](competitor-analysis.md) §2.4). *(Note: this BECAUSE is inferred from how aggregation works, not directly tested.)*
- **H4.** **IF** Flows is local-first, no-account, **THEN** it answers the trust objection that pushes users to spreadsheets, **BECAUSE** investors openly call auto-sync a "red flag" (Bogleheads) and the leading free cloud aggregator (Mint) died ([competitor-analysis.md](competitor-analysis.md) §2.1/§2.4). **Exemplar + caveat (Wealthfolio, firsthand):** a polished local-first tracker *can* have reach (~6k GitHub stars, HN/Product Hunt) — not a fringe-only dead end — and it even keeps **AI local-first** (on-device Ollama or BYOK + per-category data-access toggles), so the posture isn't a ceiling on capability either. **But** its users **self-select** for privacy, and it still pairs the local core with *optional* cloud layers (Connect sync, managed AI), hinting at a convenience ceiling. So local-first reads as a *necessary posture, not a sufficient wedge* — and whether the *Inzhur beachhead* (not Wealthfolio's audience) values it stays a user-testing question ([teardown](competitor-teardown.md)).
- **H5.** **IF** the consolidated view is a summary-first income-led hero (not net-worth/treemap), **THEN** Flows wins the "understand total + income faster than my sheet" task on mobile, **BECAUSE** the layout enforces income-lead and is mobile-native, while every dashboard competitor defaults net-worth-first ([portfolio-view-patterns.md](portfolio-view-patterns.md)).

### ⚠️ Load-bearing assumption (carried forward to user testing)
**Everything above rests on one belief: that the beachhead actually stays on spreadsheets primarily for coverage/flexibility** — i.e. that our make-or-break premise ("coverage is the dealbreaker; trust is only a barrier") is true *for these specific users*. Today that rests on the Bogleheads thread and self-observation of the Inzhur community, **not on direct evidence from the beachhead** `[?]`. **There are no interviews in the research stage** — so Define proceeds on this as a *stated, unvalidated bet*, not a confirmed fact, and we carry it forward explicitly. **It gets tested at the user-testing stage**, via the comparative usability test against the participant’s own Excel workflow: the preference split, plus a debrief on *why* they would or wouldn't drop the spreadsheet, is what confirms or overturns it. If that testing shows the real reason is something else — habit, cost, blanket distrust of any app, or simply not caring about a blended view — then the make-or-break dimension flips and H1–H5 weaken.

> **Update (§6 below).** A closed-question beachhead survey now supplies the **first direct evidence from these users** this assumption flagged as missing. It doesn't replace the comparative usability test — but it pressure-tests the bet early, and it moves three things.

---

## 6. Beachhead survey — primary data (N=22)

First primary data from the actual beachhead. A 10-question survey (9 closed + 1 open, Ukrainian, no recruitment block) went to the Inzhur community; **22 responses** over two days. Convenience sample — **directional, not statistical**, and Inzhur is over-represented by construction (that's the beachhead). Full instrument: [`beachhead-survey.md`](beachhead-survey.md); every raw response: [`beachhead-responses.md`](beachhead-responses.md).

### Distributions

- **Q1 — Asset types (multi).** Inzhur 21/22 (95%) · OVDP 21/22 (95%) · Stocks/ETF 9 (41%) · Crypto 9 (41%) · Real estate 9 (41%) · Deposits 8 (36%). Mean ≈ 3.5 types each. **Inzhur + OVDP are the universal core; everything else is a long tail.**
- **Q2 — Platforms.** 3+ platforms for 73% (16/22); 5+ for 36%. ✔ fragmentation confirmed.
- **Q3 — Share in the largest platform.** ≤50% for 55% (genuinely spread); >75% for only 23%. **Consolidation value holds for the majority — but not for everyone.**
- **Q4 — Where they consolidate (primary method).** Excel/Sheets 9 (41%) · nowhere / in head / scattered 5 (23%) · dedicated tracker 5 (23%) · native Inzhur/broker app 3 (14%). **Spreadsheets are the single biggest method; with "nowhere," ⅔ are on a sheet or nothing.**
- **Q5 — Device.** Phone 45% · laptop 27% · varies 27% · tablet 0. Phone-inclusive ≈ 73%, **but laptop/varies = 55% and skews to the spreadsheet/tool power users** → mobile-first, desktop essential.
- **Q6 — Cadence.** Daily 23% + weekly 32% = **55% check weekly or more**; monthly 32%. High engagement → manual upkeep hurts *repeatedly*.
- **Q7 — Income tracking.** Realized + projected 50% · realized only 32% · none 18%. **82% track income; forward-looking is already the single largest group.**
- **Q8 — Abandoned an app over account/data demands.** Yes 36% · didn't stop me 14% · comfortable with bank/broker apps 50%.
- **Q9 — Biggest difficulty (single choice).** Scattered assets 27% · manual math 23% · data goes stale 18% · no forward income **5%** · distrust **0%** · "I'm fine" 27%.

### What it confirms, challenges, and moves

**Confirms:** multi-asset fragmentation (Q1/Q2), the spreadsheet as the real incumbent (Q4 — H3/Excel-as-competitor), mobile-first with a desktop tier (Q5, H5), income demand with forward already leading (Q7), and — verbatim in Q10 — the flexible-generic-asset thesis with the price-tracked/manual split (R8) and multi-currency / USD-peg (R8).

**Three things it moves:**

1. **The named pain is upkeep + consolidation, not "no forward income."** Forward income was the top pain for only **1/22** and distrust for **0/22**; the named pains are scattered assets (27%) and effort — manual math + staleness (41% combined). Q10 sharpens *which* effort: R7 — "once a month is tolerable; the pain is **logging in here and there to gather all the data**." So **forward income is a latent delight (50% already do it but don't name it as the pain); the pain that wins adoption is "everything in one place without manual labor."** This reframes the hero (see below).

2. **Trust is an adoption filter, not a daily pain.** 36% have *actually abandoned* an app over account/data demands (real past behaviour) — yet 0% name distrust as the top difficulty and 50% are comfortable with bank/broker apps. So local-first removes a real blocker for ~⅓, but isn't what most users feel day-to-day → **trust as a user-selectable stance, not a single dogma** (it also reconciles with offering opt-in broker sync for the half who want automation over local-only).

3. **The two "manual, feed-ready" assets are the universal core — and a feed for them is demonstrably feasible.** Inzhur + OVDP are held by ~95% of respondents, and a firsthand teardown of **bonds.pp.ua** shows both are obtainable as live data: it aggregates OVDP buy/sell quotes + yields per ISIN across brokers (with a computed coupon/redemption cash-flow schedule), and exposes a clean per-fund JSON for **Inzhur REIT and Energy** — daily NAV/buy/sell (UAH+USD) with history **plus** monthly dividend per certificate. The underlying source is Inzhur's own daily NAV publication; bonds.pp.ua only proves it's reachable. So the assets nobody else auto-updates — and that **Strum doesn't cover at all** — can be auto-tracked for our beachhead, attacking the #1 named pain directly.

### Competitor signal from the responses

Respondents named the tools they actually use: **Strum** (Ukrainian, multi-asset — the closest direct competitor; one respondent uses it daily and is satisfied, but it omits Inzhur certificates, the 95% core), plus **firekit**, **Account Tracker**, **WiseWallet**, **Notion**, and a self-built **PowerBI** report. The "I'm fine" 27% are mostly either low-complexity holders or already on a dedicated tool — **the opportunity is the spreadsheet / nowhere / scattered majority**, not the tool-satisfied tail. firekit, Account Tracker and WiseWallet are queued for a later scan.

### Effect on the load-bearing assumption

The assumption ("the beachhead stays on spreadsheets primarily for coverage/flexibility") is **partly supported and partly redirected.** Supported: spreadsheets/nothing dominate (Q4) and flexibility-across-heterogeneous-assets is a named want (R8). Redirected: the *felt* dealbreaker is **ongoing upkeep / data-gathering** at least as much as coverage — so "Excel's flexibility without Excel's labour" should foreground the *labour* (ongoing automation), not just one-time coverage. The comparative usability test (the assumption's real test) still stands; the survey simply de-risks the direction going into Define.

