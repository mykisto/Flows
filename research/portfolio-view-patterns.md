# Flows — Portfolio-View Patterns (a conscious choice)

A structured comparison of five **structurally distinct** UX patterns for the core screen: how a user views and understands their **entire consolidated portfolio in one place** — what they own across all asset types and the income it generates. This is the main *"why I opened Flows"* screen, so the choice of pattern is a product decision, not a styling one.

**The job to judge against (not generic prettiness):** *understand total position + this month's and upcoming income, across mixed asset types, on mobile, faster and more clearly than in a spreadsheet.* Our wedge is **income and forward cash flow as the lead — not net worth** ([CLAUDE.md](../CLAUDE.md)). A pattern that renders one net-worth number beautifully but buries income is a **poor fit even if elegant** — flagged as such below.

**Legend.** ✅ verified firsthand in our [competitor teardown](competitor-teardown.md) (captures in [`screens/`](screens/)) · ⚠️ from general product knowledge, **not** re-verified this pass · 🔭 borrow · 🚫 avoid.

**Honesty note.** Firsthand product claims are limited to what our teardown already verified (Parqet, getquin, Sharesight, Kubera, Inzhur, FIREkit). Non-finance and US-broker exemplars are marked ⚠️ — they're real products I'm citing from general knowledge, not re-inspected for this document. I invented no features.

---

## The five patterns

The five below are genuinely different *structures*, not restyles of one idea. A card-based feed is deliberately **excluded** as a sixth — it's a visual treatment of Pattern 1 or 2 (rows rendered as cards), not a distinct structure, so per the rules it's folded in rather than padded out.

| # | Pattern | Organizing principle | One-line essence |
|---|---|---|---|
| 1 | Summary-first hero + expandable breakdown | **Priority** (most-important-first, one column) | Headline metrics on top, segments expand below |
| 2 | Grouped ledger / sectioned table | **The table itself** (rows = holdings) | A clean spreadsheet with subtotals per type |
| 3 | Timeline / payout calendar | **Time** (a temporal axis) | Money organized by *when* it arrives |
| 4 | Hierarchical drill-down | **Nesting** (one level at a time) | Total → type → holding → detail, by tapping in |
| 5 | Visualization-led (treemap / allocation canvas) | **A single graphic** (proportional area) | The chart *is* the interface; numbers read off it |

---

### Pattern 1 — Summary-first hero + expandable breakdown
**How it works.** A vertical priority cascade in one column: one or two headline figures at the very top (the "hero"), then progressively less-critical sections beneath — a by-type breakdown, key modules — each expandable for detail. The *structure encodes the priority order*: what matters most is physically first and biggest.
**Where it's used.** Parqet and getquin both open onto a consolidated overview (headline total + holdings beneath) ✅ (`parqet-dashboard-populated.png`, `getquin-dashboard.png`). Robinhood and most mobile banking apps lead with a single portfolio/balance figure then a list ⚠️. Empower/Personal Capital's dashboard is the canonical version — *though it leads with net worth* ⚠️.
**When it fits.** When there are a **handful of headline numbers** users want at a glance, a clear priority order exists, and the device is **mobile** (a single prioritized column is the most mobile-native layout). Ideal for ~5–30 holdings where a grouped breakdown stays scannable.
**When it breaks.** Beyond **~3–4 co-equal headline metrics** the hero turns into a cluttered tile-wall and the priority signal collapses (everything bold = nothing bold). It also **inherits whatever you put first** — most implementations default the hero to net worth, which would silently bury income. It's weak when the user's real question is comparative/relational ("how do these stack up against each other") rather than "what's my top-line."

### Pattern 2 — Grouped ledger / sectioned table
**How it works.** The primary object is a **dense table**: one row per holding, columns for value/quantity/income, grouped into sections by asset type with a subtotal per group and a grand total. Scanning and comparing rows is the interaction.
**Where it's used.** Kubera is explicitly *"just like a spreadsheet"* — a grouped value table ✅ (`kubera-add-assets.png`). Sharesight surfaces Income and Currency-gain as first-class columns ✅ (`sharesight-portfolio-empty.png`). FIREkit's broad asset table (ETFs, bonds, crypto, REITs, cash, deposits, even a car) ✅ (`firekit-demo-holdings.png`). Brokerage holdings screens (Fidelity, Schwab) ⚠️.
**When it fits.** When users want to **see everything at once and compare across rows**, the data is reasonably uniform across columns, and there's screen width (desktop). It's the **lowest switching cost from a spreadsheet** — it looks like what they already use.
**When it breaks.** On **mobile it degrades hard** — many columns don't fit, forcing horizontal scroll or column-hiding, which kills the "everything at once" benefit that justifies the pattern. It also breaks across **heterogeneous asset types**: a crypto row and a real-estate row and a deposit row don't share meaningful columns, so a single table is full of N/A gaps. And critically — *looking like the spreadsheet is also its trap*: it concedes our whole thesis. If the consolidated view is just a nicer table, we haven't done the structuring **for** the user, we've rebuilt their sheet.

### Pattern 3 — Timeline / payout calendar
**How it works.** The organizing axis is **time**, not asset or category. Income events (dividends, coupons, rent, deposit interest) are laid out along a forward calendar / month strip, so the screen answers *"what lands, and when."* Current value is secondary or absent.
**Where it's used.** Snowball's dividend calendar ✅ (`snowball-dividend-calendar.png`), Sharesight's Future Income report ✅🔒 (`sharesight-future-income-gated.png`), Parqet's in-app dividend calendar ✅ (`parqet-dividend-calendar-app.png`). Google Calendar is the generic exemplar ⚠️.
**When it fits.** When the **key information is a projection over time**, not a current snapshot — exactly our forward-cash-flow wedge. It's the single pattern that natively expresses *"how much income is coming this month and next."* Strong when the user's dominant question is temporal.
**When it breaks.** It's a **poor primary** when the user's first question is *"what do I own and what's it worth"* — a calendar buries total position (CLAUDE.md priority #1) because position has no natural place on a time axis. It **fails for assets with no scheduled cash flow** (a growth stock, idle crypto) — they vanish from a calendar entirely, so it can't represent the *whole* portfolio alone. And in the firsthand market it's consistently the **paywalled** view, which tells us it's valued — but also that it's typically a *companion* to a position view, not the home screen.

### Pattern 4 — Hierarchical drill-down
**How it works.** Nested levels shown **one at a time**: a top summary → tap an asset type → see its holdings → tap a holding → detail. Navigation *is* the interaction; depth is reached by descending, and a back gesture returns. Classic progressive disclosure.
**Where it's used.** Apple Health's category cards → metric → detail ⚠️; iOS Settings ⚠️; our beachhead's own Inzhur app drills from the dashboard into per-fund detail (dividends paid, settings) ✅ (`inzhur-dashboard.png`). Most brokerage apps drill from a holdings list into a position page ⚠️.
**When it fits.** When the data is **deeply layered** and most of it should stay hidden — large portfolios (50+ holdings), or when each holding has rich detail users only occasionally need. Excellent for keeping a complex model feeling simple on a small screen.
**When it breaks.** It **fails the "one place" job by construction**: consolidation means *seeing across* asset types at once, and drill-down hides everything except the level you're on, so you can never see total + income + breakdown together — you navigate to them serially. It's **over-engineering for ~5–30 holdings** (CLAUDE.md's expected range): the hierarchy adds taps without earning them. Burying the income figure two levels down would directly contradict the income-first lead.

### Pattern 5 — Visualization-led (treemap / allocation canvas)
**How it works.** A **single interactive graphic is the primary object** — a treemap, allocation donut, or heatmap where area encodes value. Users read proportions off the visual and tap regions to inspect; numbers are subordinate to the picture.
**Where it's used.** FIREkit's dense allocation / heatmap / geography / currency charts ✅ (`firekit-demo-analytics.png`). Finviz's market treemap ⚠️; allocation donuts in Delta/Kubera-style trackers ⚠️.
**When it fits.** When the user's primary question is **"how is my money distributed"** — proportion and concentration at a glance, for a portfolio large/varied enough that proportions are the insight.
**When it breaks.** Three ways, all acute for us. (1) It is **inherently a net-worth/allocation device** — area = *current value* — and **forward income has no natural representation** in it; you cannot render "next month's projected coupons" as a treemap tile. So by construction it leads with the thing we deliberately don't lead with. (2) It demands **precise, fresh values for every slice**, but half our assets are manually-valued with stale or absent values — a precise-looking treemap over imprecise data is exactly the **false precision that breaks trust**. (3) It's **mobile-hostile**: small tiles are hard to read and tap accurately. And it's **FIREkit's turf** — dense allocation analytics is precisely the net-worth-first ground we chose *not* to compete on.

---

## The decision (grounded in CLAUDE.md)

### ✅ Best fit — Pattern 1: Summary-first hero + expandable breakdown (income-led)
The hero carries **this month's income (realized + projected)** as the distinctive headline alongside total position, then a by-type breakdown, with the payout calendar (Pattern 3) embedded as a key module rather than the frame. Three reasons tied to our actual context:

1. **It's the only structure where "income leads" is enforced by the layout, not just hoped for.** A priority cascade puts whatever matters most physically first and biggest. We can make the income figure the hero and refuse the net-worth-first default that every Empower/Parqet-style dashboard falls into ✅ — the pattern's whole logic is "most important, first," which *is* our income-first lead.
2. **It's the most mobile-native, and we're mobile-first.** One prioritized vertical column reflows cleanly from phone to desktop with no horizontal-scroll compromise — unlike the ledger (Pattern 2), which collapses on a phone. Matches the "quick check-in on the go" primary context.
3. **It does the structuring FOR the spreadsheet refugee — the win condition of the whole product.** A clean summary-first view is the *opposite* of a dense sheet: totals, blended income, and breakdown computed and laid out for you. That's the immediate "I understood my position + income faster than in Excel" that the success hypothesis tests for, and the concrete face of the flexibility-without-effort spine. It also holds CLAUDE.md's exact priority order (total position → blended income → breakdown → calendar) in one scannable screen for ~5–30 holdings without heavy nav.

### 🥈 Second-best — Pattern 3: Timeline / payout calendar
It becomes the **right primary** under one assumption **X**: *if validation shows the dominant reason users open Flows is forward cash-flow ("how much income is coming, and when") rather than current position ("what do I own / what's it worth").* CLAUDE.md already calls this-month's income the primary "why I opened the app" metric, so X is plausible — but it lists **total position as view-priority #1**, so today the calendar is the emotional core *embedded inside* a summary-first frame, not the frame itself. If user testing shows users barely care about total position and live in the "when does money land" question, promote the calendar to the home canvas. (The assumption that would have to be true: position is a check-occasionally number, and the recurring daily job is the forward schedule.)

### 🚫 Clearly does not fit — Pattern 5: Visualization-led (treemap / allocation canvas)
This is the *elegant-but-wrong* one the brief warns about. It is structurally a **net-worth/allocation device** — it leads with proportion of current value and has **no native place for forward income**, so it buries our entire wedge by construction. It also demands per-slice precision our **manually-valued assets don't have** (false precision → trust damage), is **mobile-hostile**, and competes directly on **FIREkit's** allocation-analytics turf we explicitly avoid. Beautiful, and wrong for this job.

*(Patterns 2 and 4 sit in the middle: the **ledger** is the lowest-switching-cost option but concedes the thesis by re-creating the spreadsheet and breaks on mobile across heterogeneous types; **drill-down** is right only for far larger portfolios and fights the "see it all in one place" job.)*

---

## Sources

Firsthand product evidence is the in-repo teardown and its captures — no new external research this pass:

- [`research/competitor-teardown.md`](competitor-teardown.md) and [`research/screens/`](screens/) — Parqet, getquin, Sharesight, Kubera, Inzhur, FIREkit (✅ cited inline above).
- [`CLAUDE.md`](../CLAUDE.md) — project brief: main consolidated view priority order, income-as-lead, mobile-first, asset model.
- ⚠️ Empower/Personal Capital, Robinhood, Apple Health, iOS Settings, Finviz, Delta, Fidelity/Schwab — cited from general product knowledge, not re-verified this pass.
