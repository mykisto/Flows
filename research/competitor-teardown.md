# Flows — Competitor Teardown

A hands-on teardown of the competitors named in [`competitor-analysis.md`](competitor-analysis.md), pressure-testing our design problem: a **cross-platform, income-first holdings consolidator** for Inzhur-style Ukrainian retail investors who currently live in a spreadsheet.

**This revision (9 June 2026) adds firsthand, logged-in inspection** of Parqet, getquin, Sharesight, and Kubera (using the user's own accounts, driven in an automation browser), the beachhead's home silo **Inzhur** (logged-in, name-only redacted), and **FIREkit** (firekit.space) — the Excel-replacement the Inzhur community recommends — captured via its public demo. **FIREkit replaces Portfolio Performance** in this set as a more beachhead-relevant peer. Where earlier desk research was marked `[secondary]`, those claims are now either **confirmed**, **corrected**, or **extended** — flagged inline.

## Method & honesty notes

- **Firsthand, logged-in (📷✅):** I drove the user's authenticated sessions for **Parqet, getquin, Sharesight, Kubera** and captured real in-product screens into `research/screens/`. To exercise income/forecast views I added a **single dummy holding** (Realty Income) to Parqet and **one manual asset** (a USD-valued item) to Kubera, captured the result, then **deleted both** and verified the accounts returned to empty. Sharesight and getquin findings came from their real flows without leaving data behind.
- **Inzhur (firsthand 📷):** I drove the user's **real Inzhur dashboard** and captured it with **only the user's name hidden** (per the user's instruction to redact the name and nothing else) — the balances and income figures shown are the user's real data, displayed intentionally. A persistent text-node redactor kept the name masked through the SPA's re-renders; verified zero name mentions remained before capture.
- **FIREkit (firsthand 📷, public demo):** firekit.space exposes a no-login **live demo** (`/demo/...`) with realistic seeded data — captured directly. **Replaces Portfolio Performance** in this set (the Inzhur community recommends FIREkit as an Excel replacement, making it the more relevant peer). Note: FIREkit is a **cloud account app, not local-first** — so it no longer represents the local-first slot (Wealthfolio / self-hosted Ghostfolio do).
- **Marketing pages (📷):** the public marketing screenshots from the first pass remain in `screens/` and are still cited as vendor framing.
- **🇺🇦 Beachhead caveat:** Western auto-sync (Plaid/Yodlee) doesn't reach UA institutions, so for our users these apps collapse to manual entry. Marked ⚠️ where reasoned, not tested.

**Legend.** ✅ verified · ⚠️ inferred · 🔒 login-gated/paywalled feature · 📷 screenshot captured · 🇺🇦 beachhead note.

### Screens captured

**Firsthand, logged-in (this pass):**

| File | What it shows |
|---|---|
| `getquin-dashboard.png` | Empty "All your assets in one place" consolidation hero |
| `getquin-import-options.png` | Add-account: Brokers / Exchanges / Wallets / **Alternative Assets** + Custom Import |
| `getquin-custom-import-detail.png` | Custom Import → **AI Import** + Manual import |
| `getquin-ai-import.png` | **AI file import** — drag-drop CSV/XLSX/PDF/DOC/JPEG/PNG, LLM-parsed *(corrects desk research)* |
| `getquin-manual-import.png` | Add-transaction modal: Security/Crypto/**Bond**/Cash/**Real Estate**/NFT/Commodities/P2P; currency UAH |
| `parqet-import-broker-list.png` | Import-first onboarding (broker list) an empty portfolio is locked into |
| `parqet-add-activity.png` | Manual asset types + **file import "PDF statement or CSV"** |
| `parqet-dividend-dashboard.png` | **Populated** dividend dashboard: forward forecast, monthly chart, **paid upgrade gate on "upcoming distributions"** |
| `parqet-dashboard-populated.png` | Consolidated overview with the holding |
| `parqet-dividend-calendar-app.png` | In-app global dividend calendar |
| `sharesight-portfolio-empty.png` | Free plan, base currency UAH, Income + Currency-gain columns |
| `sharesight-tools-reports.png` | Reports incl. **Future income**, **Calendar**, **Multi-currency valuation** |
| `sharesight-future-income-gated.png` | **Future Income report gated — "Upgrade to see"** (forecasts to 3 yrs) |
| `sharesight-multicurrency-gated.png` | **Multi-currency valuation gated — "Upgrade to use"** |
| `kubera-add-assets.png` | Asset breadth + AI Appraiser + Link Portfolio (name redacted) |
| `kubera-manual-asset-fx.png` | **USD 250,000 → ₴11,150,227** native+converted FX; no income column (name redacted) |
| `inzhur-dashboard.png` / `inzhur-dashboard-top.png` | Beachhead silo: net worth, **all-time dividend income** (month/quarter/year toggle), Inzhur REIT/Energy + **OVDP coupons/yield/maturity** — name hidden, real values |
| `firekit-demo-holdings.png` / `firekit-demo-holdings-top.png` | FIREkit consolidation: net worth + TWR + deposits/dividends/profit; broad asset table (ETFs, bonds, crypto, REITs, treasury, cash, deposits, even a car) with goals/tags |
| `firekit-demo-analytics.png` | Dense allocation / heatmap / geography / **currency** charts |
| `firekit-demo-forecast.png` | **FIRE net-worth projection** (savings + return, decades out) — not a monthly payout calendar |
| `firekit-demo-transactions.png` | Transactions (Profit / Deposit / Purchase) + realized P&L / deposits summary, USD toggle |

**Marketing pages (first pass):** `getquin-portfolio-tracker.png`, `getquin-dividend-tracker.png`, `parqet-dividend-tracker.png`, `sharesight-income-calendar.png`, `snowball-dividend-calendar.png`, `kubera-home.png`, `monarch-home.png`, `copilot-home.png`, `inzhur-home.png`, `firekit-home.png`.

---

## Comparison table

Firsthand-verified cells marked ✅📷; paywalled features 🔒; secondary/marketing unmarked or ⚠️.

| Competitor | Audience | Asset coverage & one-view consolidation | Income & forward cash flow (our wedge) | Data-in & onboarding | Multi-currency | Mobile | Trust |
|---|---|---|---|---|---|---|---|
| **Parqet** 📷✅ | DE/EU, income-forward, privacy-leaning | Manual: Securities (incl. **bonds**), Cash, Crypto, **physical metals, real estate, collectibles** ✅📷 | Dividend dashboard with **forward 12-mo forecast + monthly projection chart + gross/net/tax** ✅📷; **detailed "upcoming distributions" calendar is PAID** 🔒📷 — listed-dividend-centric | **Import-first**: empty portfolio is locked into broker onboarding ✅📷. File import = **"PDF statement or CSV" only** (`accept=.pdf,.csv`), broker-template based — **not** generic header-remap, **not** xlsx ✅📷 | Display currency settable (was **UAH**); EUR prices auto-fetched + ECB FX shown ✅📷 | iOS/Android + web | "Never finances itself through your data," DE-hosted |
| **getquin** 📷✅ | EU, social + tracking, beginner | Broad manual: **Security/Crypto/Bond/Cash/Real Estate/NFT/Commodities/P2P Loans** ✅📷 + "Alternative Assets" connect tab | Dividend calendar + forecast (marketing); couldn't populate firsthand (autocomplete resisted automation) — **listed dividends only** | **CORRECTION (firsthand):** working **AI Import** — drag-drop **any CSV/XLS(X)/PDF/TXT/DOC(X)/JPEG/PNG**, LLM-parsed, 1000 txns/file, 30k-token/mo budget ✅📷. *Desk research said CSV was "marketing-only/non-functional" — that's now wrong.* Also Manual import + broker connect | Display currency **UAH** ✅📷 | iOS/Android + web | Cloud + account + social feed |
| **Sharesight** 📷✅ (Free) | Record-keeping / tax-focused global | Base currency UAH; columns include **Income** + **Currency gain** as first-class ✅📷; 700k+ instruments + bonds/metals | **Future Income report** (dividends + interest, to **3 yrs**, export CSV/PDF) — **GATED, "Upgrade to see" on Free** 🔒📷. Calendar report also present | Broker sync + email-in + manual + **CSV**; heavier, tax-oriented | Base/display currency works on Free (UAH), but **Multi-currency valuation report is PAID, "Upgrade to use"** 🔒📷 | Web-first; app exists | Established, tax-grade rigor; cloud + account |
| **Kubera** 📷✅ | Self-directed HNW / expats | Best-in-class breadth: banks/brokerages, crypto, **real estate, vehicles, metals**, + **AI Appraiser** (AI-estimates illiquid value) + **Link Portfolio** (trusts/LLCs) + manual ✅📷 | **CONFIRMED anti-benchmark:** pure **ASSET/VALUE balance sheet, no income column or forecast** ✅📷 — net-worth-first | Spreadsheet-like table; **"just like a spreadsheet"**; manual value updates saved as **historical entries** (snapshot history) ✅📷; AI file import | **Best-in-class:** enter value in **any currency code** → stores native (**USD 250,000**) + shows converted (**₴11,150,227**) together; NW ₴11.15M ✅📷 | Web, responsive | Sleek; paid (~$249/yr), no ad/data funnel |
| **Inzhur** 🇺🇦✅📷 (firsthand) | Beachhead's home silo (REIT/fund + OVDP issuer) | Excellent **for Inzhur assets only** — REIT, Energy, OVDP; a **single-platform silo** ✅📷 | **Does show income for its own instruments:** all-time **dividend income** with month/quarter/year toggles, per-fund "dividends paid" + **dividend settings**; OVDP **coupons paid + coupon settings + yield% + maturity** ✅📷 — mostly realized/backward-looking; *Inzhur* income only | In-platform only; 10-UAH min | Native iOS/Android + web; **₴/$ toggle** ✅📷 | Trusted issuer, Deloitte/Baker Tilly audits; holds your money |
| **Excel / Sheets** ⭐ | The true incumbent | Unbeatable flexibility — any asset/field/schedule | **No auto forward payout calendar**; `GOOGLEFINANCE` pulls prices but **no dividend data at all** ✅ | 100% manual; build every total by hand | Manual/brittle; no "rate on coupon date" | Weak on mobile | Maximal — file is yours, offline, no account |
| **FIREkit** 📷✅ (public demo) | FIRE/DIY investors; **recommended in the Inzhur community as an Excel replacement** | **Broad & flexible**: stocks, ETFs, IPOs, **bonds, crypto, treasury, cash, deposits, real estate, even a car**, with custom tags/categories/**goals** ("Child's education", "Buffer") ✅📷 | Tracks **realized** dividends/deposits/profit + **TWR**; **no forward payout calendar** — its only *forward* view is a **decades-out FIRE net-worth projection** ✅📷 | Manual asset/transaction entry; instant **public demo, no login** ✅📷; CSV/file import unconfirmed | Multi-currency (EUR txns + USD toggle, **currency-distribution** chart) ✅📷 | Responsive web | **Public demo without login** = strong low-friction trust; but cloud + account |
| **Snowball / Monarch / Copilot / Empower** | (see analysis doc) | listed/PFM scope | listed dividends (Snowball) or **budgeting cash flow, not investment payouts** (Monarch/Copilot/Empower) | broker/bank linking | varies | mostly mobile+web | cloud + account |

---

## Firsthand findings worth their own callout

1. **getquin now has a working, format-agnostic AI import — desk research was wrong.** The "Custom Import → AI Import" accepts **any CSV/XLS(X)/PDF/DOC(X)/JPEG/PNG** and parses it with an LLM (1000 txns/file, 30k tokens/month, "never used for training"). This is *more* flexible than the "auto-detect headers + remap" we'd planned — it ingests screenshots and broker PDFs too. **The import bar has moved.** 📷 `getquin-ai-import.png`
2. **The forward-income view — our hero — is consistently a paid upsell.** Firsthand: **Sharesight gates both Future Income and Multi-currency valuation on Free** 🔒; **Parqet gates the detailed "upcoming distributions" calendar** 🔒 (only the aggregate forecast is free). So the exact thing we want to lead with is, across the market, the feature people must pay to unlock. 📷 `sharesight-future-income-gated.png`, `parqet-dividend-dashboard.png`
3. **Kubera is the multi-currency benchmark, and confirms the income gap.** Typing **"USD 250000"** stored the native value and displayed **₴11,150,227** converted, net worth rolling to ₴11.15M — native + converted shown together (exactly our brief's pattern). And it has **no income column at all** — pure balance sheet. 📷 `kubera-manual-asset-fx.png`
4. **Both Parqet and getquin push import-first and are EU-broker-shaped.** Parqet literally locks an empty portfolio into a broker-selection screen; its file import is **PDF/CSV broker exports only** (not arbitrary Excel). For a UA user with no supported broker, the smooth path collapses to manual entry — reinforcing the "manual anyway" thesis. 📷 `parqet-import-broker-list.png`, `parqet-add-activity.png`
5. **Both model UAH and broad asset types manually** — getquin (Bond/Real Estate/NFT/Commodities/P2P) and Parqet (bonds, metals, real estate, collectibles), both in UAH. So "custom asset types in UAH" is **not** itself differentiating; the wedge stays the **blend + forward income + local-first**, not coverage alone.
6. **Inzhur's single-silo income view is genuinely strong** (dividend income with period toggles, coupon tracking with yield/maturity, dividend/coupon settings) — but only for Inzhur-held assets. It is the **quality bar** our beachhead now anchors on, and confirms Flows must win **above** the silo, not by out-polishing it.
7. **Even the beachhead's favorite Excel-replacement (FIREkit) skips our wedge.** FIREkit is a genuinely strong, flexible multi-asset consolidator with dense analytics — but income is **realized-only** (dividends/profit/deposits as backward metrics) and its sole *forward* view is a **decades-out FIRE net-worth/retirement projection**, not a near-term blended payout calendar. The tool our community already likes still leaves "what income lands next month, across everything" unbuilt — strong validation of the wedge. It's also cloud + account, so it doesn't answer the local-first trust objection either. 📷 `firekit-demo-forecast.png`, `firekit-demo-holdings.png`

---

## Synthesis

### 3 shared patterns
1. **"Income" = listed dividends, and the forward view is paywalled.** Every tracker forecasts equity/fund dividends; the *forward* income/calendar feature is a paid upgrade (Sharesight, Parqet — firsthand). None blend coupons + rent + deposit interest into one free forward number.
2. **Cloud + account + import-first is the default.** Parqet/getquin both gate the empty state behind "connect/import"; Kubera/Sharesight/**FIREkit** are accounts too. Only niche tools (Wealthfolio, self-hosted Ghostfolio) are local-first — the opposite of the mainstream, and the gap our local-first bet targets.
3. **Auto-sync doesn't reach the beachhead**, so for our users all of these reduce to manual entry — and they all *do* support broad manual asset types in UAH, so manual coverage alone isn't a moat.

### 3 key differences
1. **Hero metric differs:** Parqet/Sharesight/Snowball = forward dividends; **FIREkit = net worth + TWR + a decades-out FIRE projection**; **Kubera = net worth, no income**. Nobody leads with "this month's blended passive income."
2. **Import models diverge sharply:** getquin = **LLM ingests any file** (incl. PDF/screenshots); Parqet = **broker PDF/CSV templates**; Sharesight = CSV + broker + email. Our planned "auto-detect + remap" sits *between* getquin's AI flexibility and Parqet's rigidity — worth reconsidering against getquin's bar.
3. **Multi-currency depth splits:** Kubera (any currency, native+converted, free-flowing) ≫ Sharesight (real, but **report paywalled**) ≫ Parqet (display currency + auto FX, depth ⚠️).

### 3 open questions for our research
1. Does the beachhead actually want the *blended* forward number, or do they mentally bucket income by silo (and just want a total value)?
2. Given competitors **charge** for the forward-income view, is "free + local-first forward income" a strong enough wedge — or do users read "free" as "less trustworthy"?
3. How many silos does a real user juggle, and at what update cadence — does "labor saved" actually motivate a switch if they update ~1–2×/yr?

### Where the income / cash-flow angle is underserved
- The **forward, blended, cross-asset** income view is unbuilt *and* the listed-only version is **paywalled** everywhere we checked. The strongest consolidator (Kubera) has **zero** income story (firsthand). That intersection — consolidate everything **and** show free forward blended income — is wide open.

### Why people fall back to a spreadsheet (reinforced firsthand)
1. **Coverage/flexibility** — though note getquin/Parqet/Kubera all model custom assets in UAH now, so this gap is narrower than assumed; the sheet still wins on *zero-catalog* freedom.
2. **Distrust of cloud + account** — every tracker is account-gated; local-first remains rare.
3. **Right-sized effort + paywalls** — the forward-income clarity that would justify switching is behind a subscription in Sharesight/Parqet, so a free sheet stays "good enough."
4. **The sheet still breaks where we win:** no auto forward payout calendar, brittle FX, `GOOGLEFINANCE` has **no dividend data**, weak mobile.

---

## Flags for the decision log (your call — I won't edit `DECISION-LOG.md`)

- **Strongest — import bar moved (firsthand correction).** getquin ships a working **LLM-based import** accepting any CSV/XLSX/PDF/image — *not* the broken CSV the desk research assumed. Revisit decision **#8** (CSV auto-detect+remap): consider whether our bridge-from-Excel should aim at getquin's "drop any file, AI parses it" bar (incl. broker PDFs/screenshots), or deliberately stay simpler/local (no LLM, privacy-first) and say so.
- **New — forward income is the market's paywall; make ours a free, local-first lead.** Firsthand: Sharesight gates Future Income + multi-currency; Parqet gates the upcoming-distributions calendar. Supports **#7** (income leads) and suggests positioning: *the forward blended payout view others charge for, free and on-device.*
- **Validation — Kubera multi-currency is the FX bar.** Native + converted shown together (USD 250k → ₴11.15M) is exactly our brief's currency model; adopt that display pattern. Relates to the FX decision (**#9**).
- **Reinforces flag A (Inzhur).** Firsthand confirms Inzhur's single-silo income view is strong (dividends + OVDP coupons + settings) — table-stakes polish; Flows wins above the silo.

---

## Sources

Firsthand sessions (9 Jun 2026): app.parqet.com · app.getquin.com · portfolio.sharesight.com · app.kubera.com (user's accounts) · inzhur.reit/dashboard (user's account, name-only redacted) · **firekit.space/demo** (public demo, no login). Plus the marketing/teardown URLs from `competitor-analysis.md` (getquin, Parqet, Sharesight, Snowball, Kubera, Monarch, Copilot, Empower, Inzhur, Bogleheads, GOOGLEFINANCE limits) and `firekit.space`. *Portfolio Performance dropped from this set in favour of FIREkit; it still appears in `competitor-analysis.md` as a local-first power-tool reference. Re-verify pricing/tiers and UA accessibility before any case-study claim.*
