# Decision Log

## Purpose

This log records every meaningful design and product decision on Flows, and the reasoning behind it. It exists for two reasons: (1) it's the raw material for the portfolio case study — the thinking captured in real time instead of reconstructed from memory months later; and (2) in an AI-accelerated process, it's the evidence that a human made the calls. Entries are written in my voice (first person), because the judgment is mine to own.

## Conventions

- **Append-only.** Never edit or delete a past decision. If a decision changes, add a *new* entry that supersedes the old one and mark the old one's status "Superseded by #N". The trail of changes is part of the value.
- **What earns an entry.** A decision that shaped product direction or scope, involved a real trade-off, is something I'd need to explain in a case study, or is something I might second-guess later. Skip trivial, easily reversible choices — keep the log signal, not noise.
- **Always capture the Why and the Alternatives,** not just the decision. Those two fields are what make the case study strong and prove the judgment.

## Entry format

```
## NN - Short title
- Date: YYYY-MM-DD
- Stage: Brief | Research | Define | Ideate | Design | Validate | Outcome
- Status: Active | Superseded by #N
- Decision: what was decided (1-2 sentences)
- Why: the reasoning — the trade-off, signal, or constraint that drove it
- Alternatives considered: what else was on the table and why it lost
```

## Status values

Each entry carries one status:

- **Active** - the decision currently stands.
- **Provisional** - decided for now, but explicitly expected to be tested against reality and likely revisited (e.g. a scope guard or validation plan set before the research that will pressure-test it). Use sparingly - only when a decision is genuinely a placeholder, not just any decision that could theoretically change.
- **Superseded by #N** - replaced by a later decision (#N), which sets a new direction. The old entry stays exactly as written.
- **Revisited in #N** - part of this decision was later revised by #N while the rest still stands. The entry stays exactly as written; #N is current on the revised point.
- **Reversed** - undone and returned to the prior state, with no new decision replacing it. Rare; different from Superseded.
- **Dropped** - became irrelevant because its context disappeared (e.g. the feature it concerned was cut), not because a better choice replaced it.

Default to Active. Active, Superseded, and Revisited do most of the work - reach for Provisional, Reversed, or Dropped only when a real entry genuinely needs one, not in advance.

## How to supersede or revisit a decision

When a later decision (#N) changes an earlier one (#M), record it on the **earlier** entry's status - never with an extra field, so every entry keeps the same shape:

1. On the OLD entry (#M): change only its status line - `Superseded by #N` if #N fully replaces it and sets a new direction, or `Revisited in #N` if #N revises only part of a decision that otherwise still stands. Change NOTHING ELSE - not the decision, the why, or the alternatives. The old reasoning was true at the time, and preserving it unedited is the entire point of an append-only log. Do not "tidy" or "correct" a past entry to match the new direction.
2. On the NEW entry (#N): leave `Status: Active` and state in the Why what changed and what new information drove it. The link lives in #M's forward-pointing status, so no back-reference field is needed.

The same applies to Reversed and Dropped: record the state change on the entry's status, never by editing its original content.

------------------------------------------------------

## 01 - Project definition
- Date: 2026-06-09
- Stage: Brief
- Status: Superseded by #02
- Decision: First case study would be a community-grounded concept exploration of the Inzhur app (not a redesign), designed specifically for Inzhur with generalizability as an emergent strength.
- Why: Specificity was the strength — a real product, real users, and a real baseline beat an abstract "tracker for any fund."
- Alternatives considered: A fund-agnostic tracker from the start (rejected — removed the constraints and real research base that made the case strong); three other product ideas (UGC portal, calendar, real-estate-agent tool) rejected for weaker user access or positioning.

------------------------------------------------------

## 02 - Project pivot to a multi-asset tracker
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Shifted from an Inzhur holdings-view concept exploration to a multi-asset portfolio tracker that consolidates holdings from multiple sources in one place, still anchored in the Inzhur investor community as the research base and initial users.
- Why: A real, recurring, self-observed pain — community members repeatedly ask what to track with and default to Excel because no app gives them the coverage and flexibility. Stronger problem than "the app could look nicer," and the research base still aligns with the design.
- Alternatives considered: Staying with the Inzhur-specific holdings view (still valid, but a narrower problem); a fully generic tracker with no anchor (rejected — reintroduces the vacuum-design and portfolio-cliché risk). The "specific anchor, emergent generality" principle is retained — the anchor just moved from Inzhur's app to the Inzhur community.

------------------------------------------------------

## 03 - Single responsive web app, no mobile/desktop divergence
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: One responsive web app - a single build and design system that reflows from mobile to desktop - designed mobile-first. Not two separate experiences.
- Why: I don't want divergence between mobile and desktop: same features, structure, and content everywhere, just reflowed for screen size. Mobile is the primary context (quick check-ins), so mobile-first constraints keep the design honest; desktop is for deeper review.
- Alternatives considered: Separate mobile and desktop experiences (rejected - divergence adds maintenance and consistency cost, unjustified for a 0-to-1 project); a native mobile app (rejected - heavier to build; responsive web is enough to prove the concept and serve as the portfolio prototype).

------------------------------------------------------

## 04 - Beachhead audience over broad market
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Design for a specific beachhead - multi-asset retail investors like the Inzhur community who currently track in Excel - and treat the broad market (any multi-asset investor, 25-65, worldwide) as future expansion, not the current target.
- Why: Specificity is this case's strength. A real, reachable segment with a documented pain keeps research and design aligned and avoids the generic everything-app trap. Sharpens the audience left vague in the original course brief.
- Alternatives considered: A broad "anyone with at least one investment" audience (rejected - too broad to drive design decisions, and pushes toward a generic tracker).

------------------------------------------------------

## 05 - Income and cash flow as the core
- Date: 2026-06-09
- Stage: Brief
- Status: Revisited in #16
- Decision: The primary "why I opened the app" metric is this month's income (realized + projected), not net worth. Cash flow covers both projected and realized income, leading with a forward-looking payout calendar. Every absolute value is shown together with its 30-day % change.
- Why: Income is the underserved part - it's why people hold these assets and the hardest thing to assemble by hand in Excel, so automating it is the wedge. Net-worth-first is crowded; income-forward is differentiated. Pairing every figure with its 30-day change shows direction, not just a static number.
- Alternatives considered: Net-worth-first like most trackers (rejected - crowded, not the underserved need); realized income only (rejected - the forward-looking projection is the emotional core).

------------------------------------------------------

## 06 - Asset coverage for v1 plus a flexible model
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Fully design six asset types for v1 - REIT/fund certificates (Inzhur), government bonds (OVDP), stocks/ETFs, crypto, real estate, bank deposits - but build the data model around a flexible generic "asset" with type-specific fields so new types are cheap to add.
- Why: Covers what the Inzhur community actually holds without trying to design every exotic instrument. The flexible model is what lets generality stay an emergent strength rather than scope creep.
- Alternatives considered: "Any type of asset" (rejected - unbounded, invites scope explosion); a rigid per-type model (rejected - expensive to extend later).

------------------------------------------------------

## 07 - CSV import as a first-class feature
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: CSV import is in scope for v1 as a first-class feature, even though all other live integrations and auto-sync are deferred.
- Why: My incumbent is Excel/CSV. Importing an existing spreadsheet in one step removes the switching cost and directly attacks "I'll just keep using Excel." It's a bridge from the incumbent, which is categorically different from the competing integrations I'm deferring.
- Alternatives considered: Manual entry only in v1 (rejected - leaves the switching cost intact and weakens the wedge against Excel); live integrations/auto-sync (deferred - the part that balloons scope).

------------------------------------------------------

## 08 - Multi-currency with one display currency
- Date: 2026-06-09
- Stage: Brief
- Status: Revisited in #20
- Decision: Support multi-currency entry with a single user-chosen display currency. Manual/fixed conversion for v1; live FX rates deferred.
- Why: Users hold assets in different currencies, and Inzhur values in UAH but pegs to USD - so currency clarity is a real design theme, not a footnote. Live FX is an integration I'm deferring, but the multi-currency need itself can't wait.
- Alternatives considered: Single-currency only (rejected - doesn't match real holdings); live FX in v1 (deferred - integration scope).

------------------------------------------------------

## 09 - English-first UI, localization built in
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Ship the v1 UI in English, but build for localization from the start, with a language picker offering English and Ukrainian as the initial two options. Ukrainian localization follows.
- Why: The portfolio audience is international, so English presents best - but the real user community is Ukrainian, so localization isn't an afterthought. Designing the picker now forces the UI to handle localization properly instead of retrofitting it later.
- Alternatives considered: Ukrainian-first (rejected - weaker for an international portfolio audience); English-only with no localization plan (rejected - ignores the actual user base and makes later localization a retrofit).

------------------------------------------------------

## 10 - v1 scope guard
- Date: 2026-06-09
- Stage: Brief
- Status: Revisited in #15, #20
- Decision: In scope for the 0-to-1 build - manual entry across asset types, CSV import, and the consolidated holdings + cash-flow view. Deferred - live integrations/auto-sync, AI features, buying/selling/transactions, live FX.
- Why: This is a 12-week course project; the consolidated view plus getting data in is enough to prove the concept and validate the hypothesis. Aggregation/integrations is the part that balloons, so it's explicitly fenced off. AI and visual polish are a deliberate post-course pass.
- Alternatives considered: Including integrations or AI in v1 (rejected - scope explosion that would swamp the timeline and dilute the core problem).

------------------------------------------------------

## 11 - Validate against the user's own Excel workflow
- Date: 2026-06-09
- Stage: Brief
- Status: Provisional
- Decision: Validate via a comparative usability test against participants' own Excel/CSV workflow, recruited from the Inzhur community - measuring task completion time, a clarity rating, and a preference split (optionally a SUS score).
- Why: Excel is the real incumbent, so the honest test is "is this better than the spreadsheet they use now?" It maps straight to the success hypothesis and produces tier-3 evidence with real users, which is rare and credible for a portfolio piece.
- Alternatives considered: Comparing against competitor apps (rejected - not what these users actually use); absolute usability testing with no baseline (rejected - no comparison story).

------------------------------------------------------

## 12 - Build directly in code, not a Figma prototype
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Build Flows directly in code on the existing Next.js app and run the usability test on the real build, rather than designing a hi-fi Figma prototype first.
- Why: The working build is both the portfolio artifact and what I test on - no Figma-to-code translation loss, and a real product is more convincing than a clickable mockup. I'm accepting slower iteration and a less tidy "design process" story as the cost.
- Alternatives considered: Figma-first then build (rejected - adds a translation step and a throwaway artifact); a Figma prototype as the only deliverable (rejected - ships no real product, weak for a design-engineer portfolio).

------------------------------------------------------

## 13 - Local-first storage, no account
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Keep all data local-first in the browser (IndexedDB) with no account in v1; nothing leaves the device except public price lookups and the daily FX fetch. Cross-device sync is deferred.
- Why: Distrust is part of why people avoid these apps, so "your balances never leave your device" is the strongest trust story I can offer - and it's the least backend to build solo. Sync is a real need, but not a v1 one.
- Alternatives considered: Accounts + cloud database (rejected for v1 - more to build and a bigger trust ask for a new app holding someone's whole financial picture); a seeded demo with no real storage (rejected - participants couldn't enter their own data, weakening the comparison against their spreadsheet).

------------------------------------------------------

## 14 - Split the asset model into price-tracked vs manually-valued
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Within the flexible asset model, separate assets into price-tracked (have a public feed) and manually-valued (none), and let that split drive how current value and the 30-day change behave per type. Builds on #06.
- Why: It's the honest cut - some assets can be auto-valued and some can't, and pretending otherwise produces fake precision. The split is one clean rule the whole valuation and change-display logic can hang off.
- Alternatives considered: One uniform valuation path for all assets (rejected - either forces manual entry where I could auto-value, or implies live data I don't have for the rest).

------------------------------------------------------

## 15 - Live prices for crypto and stocks; OVDP and Inzhur stay manual
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Auto-fetch price and history for crypto and listed stocks/ETFs; keep OVDP, Inzhur certificates, real estate, and deposits manually valued, with OVDP and Inzhur modeled feed-ready. Refines the "live integrations deferred" line of #10: read-only public price lookups are in; account auto-sync stays out.
- Why: Crypto and listed equities have easy, reliable public data; OVDP and Inzhur don't (OVDP is yield/accrued-interest off NBU/broker data, Inzhur is periodic NAV, not a live ticker). Promising live data everywhere would overpromise, and a read-only lookup is categorically different from the account integrations I'm still deferring.
- Alternatives considered: Live data for all six types (rejected - OVDP/Inzhur lack clean feeds; bespoke sourcing burns solo build time and risks overpromising); all values manual (rejected - throws away easy, high-value automation for crypto and stocks).

------------------------------------------------------

## 16 - Show the 30-day change only where there's real data
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Show the 30-day % change wherever there's real data - fetched history for price-tracked assets, my own snapshots for manually-valued ones - and a neutral state everywhere else. Never fabricate a number. Revises the "every absolute value shows its 30-day % change" clause of #05.
- Why: With manual entry and no live data on day one, there's often no history to compute a change from. Showing a number I can't back up is exactly the false precision that breaks trust in a finance app - the thing I most need to protect.
- Alternatives considered: A "value 30 days ago" field per holding so it always shows (rejected - entry burden, cuts against "flexibility without the labor"); keeping the original "every value shows a change" promise (rejected - can't be honored honestly without data).

------------------------------------------------------

## 17 - Realized income by auto-roll plus one-tap confirm
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: When a projected payout's date passes, auto-roll it into realized income but flag it for a one-tap confirm or edit.
- Why: It balances the two things in tension - low upkeep (the app does the rolling) and trust (I'm not silently asserting money arrived that may have been missed or cut). Pure automation risks logging income that never landed; pure manual logging is the Excel labor I'm trying to kill.
- Alternatives considered: Silent auto-roll with no confirmation (rejected - assumes every scheduled payout actually arrived); manual "mark received" on every payout (rejected - most accurate, but the most ongoing labor).

------------------------------------------------------

## 18 - Income leads; performance/P&L stays secondary
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Keep income the headline everywhere and put unrealized gain/loss and total return in holding detail, not on the dashboard hero.
- Why: Income is the wedge and the reason to open the app; leading with P&L would blur Flows into "just another portfolio tracker." But people with a cost basis still want to know if they're up or down, so P&L belongs in the product - just not in the lead.
- Alternatives considered: Income only, no P&L at all (rejected - feels incomplete to anyone tracking cost basis); equal billing for position/P&L and income (rejected - dilutes the income story that's the whole reason to exist).

------------------------------------------------------

## 19 - CSV import that accepts the user's own sheet
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Make CSV import auto-detect common column headers and offer a quick remap step to fix mismatches, rather than forcing a fixed template. Details the first-class CSV import committed in #07.
- Why: The whole point is removing the switching cost from Excel. A fixed template that makes people reshape their spreadsheet reintroduces exactly the friction the import is meant to kill. Auto-detect with a remap fallback gets most of the value without full arbitrary-column-mapping complexity.
- Alternatives considered: A fixed downloadable template (rejected - simplest to build, but pushes the reshaping work back onto the user); full hand-mapping of every column (rejected - the heaviest build for one person in 12 weeks).

------------------------------------------------------

## 20 - Auto-fetch a daily FX rate
- Date: 2026-06-09
- Stage: Brief
- Status: Active
- Decision: Auto-fetch a daily FX rate for conversion into the display currency, instead of manual/fixed conversion. Revises the "manual/fixed conversion, live FX deferred" clause of #08 and the "live FX" deferral in #10.
- Why: Once crypto and stock prices are live (#15), pairing a fresh price with a stale hand-entered rate produces an incoherent converted total - and most of my audience is cross-currency (UAH/USD). A once-a-day rate is cheap, reuses the same fetch machinery, and keeps the freshness story honest. Live-tick FX is still unnecessary.
- Alternatives considered: Manual/fixed FX as in the original brief (rejected - fresh prices with a stale rate undercut the point of going live); live-tick FX (rejected - needless precision and cost for daily-checked portfolios).

------------------------------------------------------

## 21 - Spreadsheet classified as SOFT, not HARD, competitor
- Date: 2026-06-09
- Stage: Research
- Status: Active
- Decision: In the competitor analysis, the spreadsheet (Excel / Google Sheets and community tracking templates) is classified as a SOFT competitor - same JTBD, different product - while being singled out as the primary incumbent to study most deeply within that group.
- Why: Competitor groups are defined by product category, not strategic importance. A spreadsheet is a general-purpose tool people bend to the job, not a dedicated tracker, so by definition it's SOFT (same job, different product). It's still the most important competitor to understand, because it's what our users actually default to - but importance and category are separate axes, and conflating them would distort the framework. "Why do people still choose a spreadsheet over dedicated apps?" remains the central research question regardless of which group it sits in.
- Alternatives considered: Placing the spreadsheet in HARD because it's the main thing to beat (rejected - HARD means same product/same audience, and a spreadsheet is neither; classifying by importance rather than product category breaks the analysis and would make the competitor grouping inconsistent and hard to defend later).

------------------------------------------------------

## 22 - Keep CSV import local and template-free; don't chase getquin's AI file import
- Date: 2026-06-09
- Stage: Research
- Status: Active
- Decision: After seeing getquin's import firsthand - an LLM that ingests any CSV/XLSX/PDF/screenshot - deliberately keep Flows' import to the #19 approach (auto-detect headers + quick remap), done on-device with no LLM and no upload, rather than matching that AI bar.
- Why: Local-first (#13) is the trust wedge. Routing someone's holdings file through a cloud LLM to parse it directly contradicts "your data never leaves the device," so getquin's cleverness is a feature I can't copy without giving up the thing that differentiates us. Auto-detect + remap still does the Excel-bridge job (#07) without the privacy cost.
- Alternatives considered: Match getquin (AI parses any file, incl. broker PDFs and screenshots) - rejected: needs server-side parsing and uploading financial data, breaking the local-first promise; a fixed template - already rejected in #19.

------------------------------------------------------

## 23 - Lead on the forward blended-income view as a free, local-first differentiator
- Date: 2026-06-09
- Stage: Research
- Status: Active
- Decision: Position the hero - the forward, blended, cross-asset passive-income view - explicitly as free and on-device, because the teardown found this exact capability is paywalled wherever it exists.
- Why: Firsthand, Sharesight gates both its Future Income report and multi-currency valuation behind "Upgrade", and Parqet gates its upcoming-distributions calendar; the strongest consolidators (Kubera, FIREkit) have no blended forward income at all. So our wedge isn't "income" in the abstract - it's that the forward blended view is simultaneously underbuilt and, where it exists for listed dividends, locked behind a subscription. Offering it free turns a market paywall into our differentiator and reinforces the local-first story. Sharpens #05/#18.
- Alternatives considered: Treat income parity as "good enough" (rejected - competitors charge for it, so free+blended is the sharper wedge); lead on consolidation/net worth (rejected - that's Kubera/FIREkit's turf and not the underserved need).

------------------------------------------------------

## 24 - Differentiate on cross-silo consolidation + blended income; treat single-silo polish as table stakes
- Date: 2026-06-09
- Stage: Research
- Status: Active
- Decision: Anchor positioning on cross-platform consolidation plus blended forward income, and treat single-silo polish as table stakes rather than a differentiator.
- Why: Firsthand, two reference points the beachhead already uses are strong but bounded - Inzhur's own app shows a polished income view (dividends, OVDP coupons, yield, settings) for Inzhur assets only, and FIREkit (the community's recommended Excel replacement) is a flexible multi-asset tracker whose only forward view is a decades-out FIRE projection, not a near-term blended payout calendar. Neither blends income across silos. Flows can't win by out-polishing one silo; the unmet job is the layer above all of them. Builds on #02/#04.
- Alternatives considered: Compete on silo polish or analytics depth (rejected - Inzhur/FIREkit already strong there, not the gap); broaden to a generic net-worth tracker (rejected - reintroduces the everything-app trap #04 guards against).

------------------------------------------------------

## 25 - No competitor can auto-sync Ukrainian institutions, so manual + CSV is competitive, not a compromise
- Date: 2026-06-09
- Stage: Research
- Status: Active
- Decision: Treat the finding that no tracker can auto-sync Ukrainian institutions (Inzhur, OVDP, UA banks/brokers) as confirming the manual-entry + first-class-CSV bet (#07/#19/#10) and the deferral of account auto-sync (#10/#15) - for our beachhead, every dedicated app is "manual anyway."
- Why: Western trackers' stickiness comes from Plaid/Yodlee-style linking that doesn't cover UA institutions; firsthand, getquin/Parqet/Sharesight all collapse to manual entry for our assets. That erases their one structural advantage over the spreadsheet for our audience, so I'm giving up nothing by deferring auto-sync - manual + CSV is genuinely on par here, not a budget compromise. Pre-empts the obvious "but competitors auto-sync, shouldn't we?" challenge.
- Alternatives considered: Pursuing account auto-sync to match competitors (rejected - the aggregation graph doesn't include UA institutions, so it's high effort that still wouldn't reach the beachhead's assets); treating "everyone has auto-sync" as a reason to deprioritise manual/CSV (rejected - for our users that edge is illusory).

------------------------------------------------------

## 26 - Name the wedge as blended cross-asset income + coverage, not "income" in general
- Date: 2026-06-09
- Stage: Research
- Status: Active
- Decision: Sharpen the income positioning (#05/#18/#23): the differentiator is specifically the blend of cross-asset passive income - dividends + bond coupons + rent + deposit interest + REIT/fund payouts - together with coverage of the beachhead's actual assets, not "income tracking" in the abstract.
- Why: The research showed "income tracking" already exists, but in the market it almost always means dividends from listed equities (getquin/Parqet/Sharesight/Snowball), and Western PFM "cash flow" means budgeting. Claiming "income-focused" as our edge would be undefendable - plenty of apps say that. The true, defensible claim is the blend across asset types plus the UA-asset coverage no one else has. A messaging/scoping refinement, not a change to the income-leads direction.
- Alternatives considered: Positioning broadly on "income-focused tracking" (rejected - not differentiated; competitors already forecast listed dividends); leading on the payout-calendar mechanic alone (rejected - the mechanic matters, but the defensible wedge is the blend + coverage it operates on).

------------------------------------------------------

## 27 - Auto-sync treated as a "red flag" reinforces local-first as a trust feature
- Date: 2026-06-09
- Stage: Research
- Status: Active
- Decision: Treat the evidence that serious investors openly call real-time auto-sync a "red flag" (Bogleheads) and that the leading free cloud aggregator (Mint) shut down as independent validation of local-first, no-account storage (#13) - reframing it as a deliberate trust advantage, not just a solo-build simplification.
- Why: I adopted local-first partly to minimise backend for a solo build, but the research shows the privacy posture is also a positive trust signal to the exact distrustful users who avoid these apps - they see cloud linking as a liability, and Mint's death underlines how fragile the free-cloud-aggregator model is. So local-first does double duty (less to build and a stronger trust story), which strengthens my confidence in keeping accounts/sync out of v1.
- Alternatives considered: Reading local-first purely as a v1 shortcut to be replaced by cloud sync later (rejected for now - the research reframes it as a trust advantage worth keeping central, not a temporary measure).
