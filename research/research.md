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

**Set-composition note (conflict/scope):** the desk doc's Group 1 used **Portfolio Performance** as the local-first power-tool; the firsthand teardown **replaced it with FIREkit** (the Inzhur community's recommended Excel replacement) as more beachhead-relevant. FIREkit is **cloud + account**, so it does *not* fill the local-first slot — **Wealthfolio** does (now reviewed **firsthand on the desktop build 3.5.2**, alongside self-hosted Ghostfolio — see the [teardown](competitor-teardown.md)). That firsthand pass corrects/sharpens three things: local-first tools are **not desktop-only**; its **manual CSV wizard *plus* AI chat import** make it the *second* competitor (after getquin) to match/beat the planned CSV wedge; and — decisively — its **AI is itself local-first** (on-device Ollama *or* BYOK to the user's own LLM), which shows **AI import doesn't have to break local-first** (bears on decision #22).

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
- **CSV-import = a bridge, not a differentiator:** first-class CSV import (auto-detect + remap) still removes Excel switching cost — but it's **no longer a wedge**. Firsthand, Wealthfolio's *manual* CSV wizard already matches our exact plan (auto-detect + per-column remap + saveable templates), and *both* getquin and Wealthfolio add AI file ingest on top ([teardown](competitor-teardown.md)). Keep CSV as the bridge from Excel; don't lean on it for differentiation. *(Open: whether to also adopt AI import — firsthand shows it can be local-first-compatible via on-device Ollama or BYOK; pending a decision-log call.)*
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
**Everything above rests on one belief: that the beachhead actually stays on spreadsheets primarily for coverage/flexibility** — i.e. that our make-or-break premise ("coverage is the dealbreaker; trust is only a barrier") is true *for these specific users*. Today that rests on the Bogleheads thread and self-observation of the Inzhur community, **not on direct evidence from the beachhead** `[?]`. **There are no interviews in the research stage** — so Define proceeds on this as a *stated, unvalidated bet*, not a confirmed fact, and we carry it forward explicitly. **It gets tested at the user-testing stage**, via the comparative usability test against the participant's own Excel workflow: the preference split, plus a debrief on *why* they would or wouldn't drop the spreadsheet, is what confirms or overturns it. If that testing shows the real reason is something else — habit, cost, blanket distrust of any app, or simply not caring about a blended view — then the make-or-break dimension flips and H1–H5 weaken.
