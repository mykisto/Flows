# Flows — Deep Dive: Flexibility *Without* Effort

A focused study of the one make-or-break dimension for Flows: **can a user replicate their *entire* real portfolio — every asset, no exceptions — while spending far *less* effort than a spreadsheet?** This is the crux of the whole product.

## The dimension, stated sharply

People stay on spreadsheets because, by hand, they can model *anything* — any asset, any field, any schedule, no ceiling. Every dedicated tracker eventually hits something it can't represent, and **the moment it can't represent *your* portfolio, it's useless and you're back in Excel.** So this dimension is two things at once:

- **Expressive power** — cover 100% of any portfolio, including the one weird asset.
- **Low effort** — much faster and easier than a spreadsheet.

The trap is a tradeoff between them: **pure flexibility is just a spreadsheet** (already exists, worthless to rebuild); **pure simplicity can't model real portfolios** (users leave). A winning product *refuses* the tradeoff — total coverage **with the structuring done FOR the user.** This deep dive mines non-finance products that already pull that off, to extract mechanisms we can port.

**Legend.** ✅ verified on a public/marketing/docs page (cited) · ⚠️ reasoned/inferred from the public feature set, not a direct quote · 🔒 login-gated (not inspected) · 🔭 borrow into Flows · 🚫 do **not** borrow.

**Honesty notes.** All findings below come from public marketing, support, and developer-documentation pages — **no accounts created, no logins, no gated screens.** Where a claim is my synthesis rather than a vendor's words, it's marked ⚠️. Product/marketing language is the vendor's framing, not independent fact. Every URL is in [Sources](#sources).

---

## 1. Evaluation criteria

Seven concrete, scoreable criteria (1–5). They deliberately straddle **both halves** — expressiveness *and* effort — because the whole point is the combination. I merged the brief's starting "custom fields" and "escape-hatch quality" into a single criterion (**#7**): for these products the custom field *is* the escape hatch, so splitting them double-counts.

| # | Criterion | What a 5 looks like | Which half |
|---|---|---|---|
| **C1** | **Expressive ceiling / coverage** | Can represent *any* item a user has, including unusual ones, with no wall (the "100% replication" test). | Expressiveness |
| **C2** | **Guided structure vs blank canvas** | Guides you to the right structure (types, suggestions, prefilled slots) instead of making you *design* it — the core anti-spreadsheet mechanism. | Effort |
| **C3** | **Smart defaults & templates** | You start from a pre-structured something, never a blank page; units/fields/aggregation are preset. | Effort |
| **C4** | **Progressive disclosure** | Simple cases stay one-line-simple; power appears only when wanted. | Effort |
| **C5** | **Speed of entry** | Adding an item is near-frictionless — ideally auto-captured or one natural line. | Effort |
| **C6** | **Adaptability without reconfiguration** | The model bends to edge cases without the user re-architecting everything. | Expressiveness |
| **C7** | **Escape hatch (custom fields + manual override)** | Full manual control — custom fields, free-form — is available *without breaking the clean experience*. | Both |

---

## 2. Best-in-class products

Four non-finance exemplars chosen for how *powerfully* each embodies the dimension, plus one spreadsheet-killer studied for **how it won the switch**. Each profile notes the one mechanism most worth stealing.

### A. Airtable — "a database that looks like a spreadsheet"
The reference for *structure-anything-but-not-from-a-blank-cell*. Airtable supports **31 field types** (Single line text, Single/Multiple select, Date & Time, Currency, Number, Percent, Duration, Formula, Linked record, Lookup, Rollup, Attachment, Rating, Checkbox, Button, Barcode, and more), and each field type **structures and validates its column** — a Currency field formats money, a Date field gives a calendar widget and stores ISO 8601, a Linked record field "represent[s] the relationships between related records." ✅ ([Airtable support](https://support.airtable.com/docs/supported-field-types-in-airtable-overview))
**Steal 🔭:** the **typed column** — the cell already *knows* what kind of thing it holds, so the user gets validation and the right input for free instead of typing raw text into a grey box.

### B. Notion — databases + one-click templates + page-per-row
Notion has **a dozen-plus property types** (Text, Number, Date, Select, Multi-select, Status, Person, Relation, Rollup, Formula, Files, …) ✅, but its standout is **database templates**: "define and replicate certain page structures with one click," with **property defaults baked in** — e.g. a bug-report template that auto-sets Priority = P1 and assigns a PM on creation. ✅ Crucially, **every row is also a page** — an infinite free-form body lives under each structured record. ([Notion: database templates](https://www.notion.com/help/database-templates), [database properties](https://www.notion.com/help/database-properties))
**Steal 🔭:** **page-per-row** — structured fields on top, an *unbounded* free-form escape hatch underneath every item, so nothing is ever un-representable.

### C. Todoist — Quick Add natural-language capture
The poster child for *usable-in-seconds, powerful-when-needed*. **Quick Add** parses one natural line into structured slots: `"Take trash to curb every Sunday at 8pm #Chores @home p1"` → a recurring task, due Sun 8pm, in the Chores project, with the `home` label and priority 1 — date, project, label, priority all extracted from plain text. ✅ ([Todoist: Quick Add](https://www.todoist.com/help/articles/use-task-quick-add-in-todoist-va4Lhpzz)) Sub-tasks, sections, filters, and priorities exist but stay out of the way until summoned. ⚠️
**Steal 🔭:** **NLP-routed entry** — the user types naturally; the system *parses it into the right structured fields*, so structuring costs the user nothing.

### D. Apple Health — heterogeneous data into one model, near-zero config
HealthKit defines **100+ predefined data types** (quantity, category, workout, clinical-record) covering wildly heterogeneous data, each with a **preset unit and aggregation style** — Sum for steps/calories, Average for heart rate, custom pipelines for sleep. ✅ Multiple apps/devices write to the *same* fixed schema; Health **reconciles overlapping sources by priority** and aggregates automatically via `StatisticsCollectionQuery`. The user configures essentially nothing, and data is **stored locally, end-to-end encrypted.** ✅ ([Apple Developer: HealthKit data types](https://developer.apple.com/documentation/healthkit/data-types), [HealthKit](https://developer.apple.com/documentation/healthkit)) **The catch:** the catalog is *closed* — an end user **cannot add a data type Apple hasn't defined.** ✅
**Steal 🔭:** **predefined types carry their own units + aggregation rules**, so heterogeneous inputs collapse into one coherent model with zero user setup. **Don't steal 🚫:** the *closed* catalog (see §5).

### E. Attio — the spreadsheet-killer CRM *(how it won the switch)*
Chosen as the "beat *just use a spreadsheet*" exemplar. Attio is built on a **flexible relational data model**: **objects** (People, Companies, Deals, or custom ones you create — Investors, Invoices, Fundraising Rounds), **records**, and **attributes**, with table views that look "spreadsheet-style" but behave as a designed database. ✅ It explicitly targets the *"we've outgrown spreadsheets"* moment, and beats the blank sheet two ways: **standard objects ship pre-modeled**, and **email/calendar sync auto-populates** People and Companies from your entire inbox/calendar history "without manual imports," then **auto-enriches** records (logos, socials, descriptions) and keeps them current. ✅ ([Attio data structure & syncing](https://attio.com/platform/data), [enriched data](https://attio.com/help/reference/managing-your-data/enriched-data), [email sync](https://attio.com/help/academy/introduction/email-sync-people-companies); positioning via [CRM.org review](https://crm.org/news/attio-review))
**Steal 🔭:** **auto-population** — the system fills the structure *for* you from data you already have, so the spreadsheet's worst tax (manual data entry + upkeep) largely disappears. *Trade-off noted:* reviewers consistently flag a **steeper learning curve** than lightweight tools like Folk — power bought with onboarding cost. ✅ ([Attio vs Folk comparisons](https://prospeo.io/s/attio-vs-folk))

> **Why not a budgeting tool for slot E?** The brief allowed a budgeting tool or a CRM. A CRM keeps us in *non-finance* territory (fresh mechanisms, per the brief) while still being a category that *demonstrably* won users off spreadsheets — Attio's whole pitch is the spreadsheet-graduation moment, which is exactly Flows' fight.

---

## 3. Scoring table

Scores are my assessment against the §1 rubric, from the cited public material. Domain-narrow tools (Todoist) score low on *coverage* **by design** — that's the rubric measuring general portfolio-replication, not a knock on the product for its own job.

| Product | C1 Ceiling | C2 Guided structure | C3 Defaults/templates | C4 Progressive disclosure | C5 Speed of entry | C6 Adapt w/o reconfig | C7 Escape hatch | Avg |
|---|---|---|---|---|---|---|---|---|
| **Airtable** | **5** — 31 field types + relations model almost anything | 4 — typed columns guide, but you still design the schema | 4 — big template gallery, yet a blank base is blank | 3 — formulas/field config surface complexity early | 3 — fast once built; setup is real work | 3 — add a field easily; re-relating can mean rework | **5** — it *is* a database; ultimate custom fields | **3.9** |
| **Notion** | **5** — page-per-row holds arbitrary content + relations | 3 — famously a blank canvas you architect | **5** — one-click templates with property defaults | 4 — page stays simple; DB power on demand | 3 — quick row add; routing it well is slower | 4 — add a property anytime; page body absorbs edges | **5** — infinite free-form body under every row | **4.1** |
| **Todoist** | 2 — superb for tasks, can't model arbitrary items | 4 — task is the unit; #project @label route input | 4 — project templates + smart date defaults | **5** — one line works; depth fully hidden | **5** — NLP parses date/project/label/priority in one line | 3 — bends within tasks only | 2 — free-form description, but no custom structured fields | **3.6** |
| **Apple Health** | 4 — 100+ heterogeneous types, but catalog is *capped* | **5** — every metric pre-typed with unit + aggregation | **5** — units, aggregation, source priority all preset | 4 — highlights up front; per-type depth in settings | 4 — auto-ingest = zero entry for connected sources | 4 — auto-adds sources/types; reconciles duplicates | **1** — no user-defined types/fields at all | **3.9** |
| **Attio** | 4 — custom objects/attributes/relations, flexible | **5** — standard objects ship modeled; sync builds the graph | 4 — standard objects + AI-generated attributes | 3 — powerful but a steeper curve (reviewers) | **5** — auto-populates contacts from inbox history | 4 — add objects/attributes; relational model bends | 4 — custom objects + spreadsheet-style table view | **4.1** |

### What the top performers do that the others don't

Two clusters win, and they win *differently*:

- **The coverage cluster (Notion, Airtable, 4.1/3.9):** they guarantee C1 + C7 by keeping an **unbounded escape hatch** under every structured item (Notion's page body; Airtable's open schema). Nothing is ever un-representable. Their weakness is **effort** — you still *design* the structure (C2/C5 ~3).
- **The effort cluster (Apple Health, Attio, 3.9/4.1):** they win C2 + C3 + C5 by **doing the structuring for you** — predefined typed schemas (Health) and auto-populated standard objects (Attio) mean you start from a *working* model, not a blank one. Their weakness is the **ceiling/escape hatch**: Health's catalog is closed (C7 = 1); Attio's curve is steeper (C4 = 3).

**The synthesis the whole product hinges on:** *no single exemplar maxes both halves.* The ones that cover everything make you do the structuring; the ones that do the structuring for you cap what you can cover. **Flows' job is to be the product that fuses the two clusters** — Apple Health's typed-schema-with-defaults *plus* Notion's free-form escape hatch *plus* Attio/Todoist's auto-and-NLP capture. That fusion, not any one mechanism, is the refusal of the tradeoff.

---

## 4. Synthesis — three mechanisms to bring into the Flows MVP

Each is framed as: *how it lets a user represent their **full** portfolio* **and** *how it attacks "I'll just keep using my spreadsheet."*

### 🔭 1. Typed asset entry with built-in defaults *(Apple Health + Airtable + Attio)*
Each v1 asset type (Inzhur certificate, OVDP, stock/ETF, crypto, real estate, deposit) ships a **pre-structured form** that already knows its own fields, units, and schedule — a bond stub knows it has a coupon and a maturity; a dividend stock knows it pays on a frequency; a deposit knows it has an interest rate and a term. The user **picks a type and starts from a structured stub, never a blank cell** (Airtable's typed column + Health's "the type carries its own units & aggregation").
- **Full-portfolio coverage:** the type set covers the common 90% of holdings instantly and correctly.
- **Beats the spreadsheet:** the structuring *and the math* are done for you — the field already knows it's a coupon date, so Flows can project income off it. In Excel you'd build that schema and those formulas by hand, per asset. This is the literal "*Excel's flexibility without Excel's labor*."

### 🔭 2. A custom-field / free-form escape hatch under every holding *(Notion page-per-row + Airtable custom fields)*
When a holding *doesn't* fit a type — an unusual instrument, an extra attribute, a private loan, a note — the user **adds a custom field or free-form note in place**, without leaving the clean flow. **Progressive disclosure** keeps it tucked away so simple cases stay simple, and it appears only when a holding needs it.
- **Full-portfolio coverage:** this is the **100%-replication guarantee** — the typed forms cover the 90%, the escape hatch covers the remaining 10%, so the user **never hits a wall and bounces to Excel.** This is the single mechanism that converts "covers most of my stuff" into "covers *all* of my stuff."
- **Beats the spreadsheet:** it matches the *one* thing Excel does that trackers usually can't — "I can always just add a column" — while keeping everything else automated.

### 🔭 3. Auto-population so entry costs less than a spreadsheet *(Todoist Quick Add + Attio sync + Apple Health auto-ingest)*
Push as much data-entry and upkeep as possible onto the system, not the user: the already-planned **CSV auto-detect + remap** import (the bridge *from* Excel), **price + history auto-fetch** for crypto/stocks, **daily FX**, **income auto-projection**, and **auto-roll of past-due payouts to realized**. Direction to push further ⚠️: a Todoist-style **single-line quick-add** for a new holding, and Attio-style enrichment of the symbol (name/logo/currency) once entered.
- **Full-portfolio coverage:** auto-fetched price/FX/income means even a large, multi-currency portfolio stays current without manual recalculation — the thing that makes big spreadsheets rot.
- **Beats the spreadsheet:** this *is* the "without effort" half. A spreadsheet makes you do every total, every rate-on-coupon-date, every FX conversion by hand; Flows does the upkeep for you, so the ongoing labor — not just the setup — drops below Excel's.

---

## 5. One mechanism that works for its exemplar but would **backfire** in Flows

### 🚫 Apple Health's **closed, no-escape-hatch catalog** (zero user-defined types or fields)
Apple Health earns its frictionless, zero-config magic *precisely by refusing custom types*: Apple defines every data type, unit, and aggregation rule, so there is nothing for the user to configure or get wrong (C2/C3 = 5, C7 = 1). That bargain works **only because Apple controls the whole ecosystem of data producers** — devices and apps are *forced* to write into a fixed, finite, standardizable schema — and health metrics are genuinely enumerable.

**For Flows it would backfire, and on the exact axis that defines the product.** A finite, closed asset catalog with no custom fields is *the wall* that sends users back to Excel. Real portfolios always contain the one weird thing a closed catalog can't hold — a private loan to a friend, a co-op share, a collectible, a foreign instrument with no symbol, an off-list pension. **The moment Flows can't represent *your* portfolio, it's worthless to you** — and unlike Apple, Flows controls *none* of the upstream data producers, so it can never assume the world fits its schema.

So Flows must **invert** Apple Health's bargain: borrow the *typed-defaults-with-auto-aggregation* engine (Mechanism 1), but pair it with an *open* escape hatch (Mechanism 2). Keep the guidance; reject the closed catalog.

---

## Sources

- Airtable — Supported field types: https://support.airtable.com/docs/supported-field-types-in-airtable-overview
- Notion — Database templates: https://www.notion.com/help/database-templates
- Notion — Database properties: https://www.notion.com/help/database-properties
- Todoist — Use Task Quick Add: https://www.todoist.com/help/articles/use-task-quick-add-in-todoist-va4Lhpzz
- Apple Developer — HealthKit Data Types: https://developer.apple.com/documentation/healthkit/data-types
- Apple Developer — HealthKit (overview, local/encrypted storage): https://developer.apple.com/documentation/healthkit
- Apple Developer — Exploring New Data Representations in HealthKit (WWDC19, aggregation/StatisticsCollectionQuery): https://developer.apple.com/videos/play/wwdc2019/218/
- Attio — Data structure & syncing: https://attio.com/platform/data
- Attio — Enriched data: https://attio.com/help/reference/managing-your-data/enriched-data
- Attio — Email sync, People & Company records: https://attio.com/help/academy/introduction/email-sync-people-companies
- Attio — Define your data model (objects, lists, views): https://attio.com/help/reference/attio-101/attios-data-model/define-your-data-model-objects-lists-and-views
- CRM.org — Attio review (positioning, learning curve): https://crm.org/news/attio-review
- Prospeo — Attio vs Folk (spreadsheet-graduation framing, curve trade-off): https://prospeo.io/s/attio-vs-folk
