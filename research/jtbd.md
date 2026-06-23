# Flows - Jobs to be done

Derived from [`personas.md`](personas.md) and [`research.md`](research.md). Each job is written as progress for the person, not a product feature: *When [situation], I want [motivation], so I can [outcome].* Written in English to match the other research artifacts.

Every job carries its **persona** and the **research evidence** it grew from. Jobs that nothing in the research supports are not in the main list; they live in **Hypotheses** at the end, marked `[?]`.

**Evidence legend.** `[N=22]` = beachhead survey (directional, §6). `[desk]` = competitor synthesis / Bogleheads (§1, §5). `[?]` = not in the data.

---

## Main job

> **When my money is spread across several platforms and I'm piecing the picture together by hand, I want to understand my whole position and what it is paying me, faster than my spreadsheet does, so I can know where I stand without the manual upkeep.**

From **P1 (Excel Consolidator)**. Evidence: research goal (the success hypothesis is this exact task); Excel is the biggest incumbent `[N=22, Q4: 41%]`; fragmentation is real `[N=22, Q2: 3+ platforms for 73%]`; income is already tracked by most `[N=22, Q7: 82%]`; the felt pain is the manual gathering `[N=22, R7]`.

---

## Related jobs (the path to the main job)

**RJ1 - Bring the numbers together.**
> When my holdings sit on several platforms, I want my numbers to come together without me logging into each one, so I can keep the picture current without the chore.

P1. Evidence: `[N=22, R7]` ("the pain is logging in here and there to gather all the data"); fragmentation `[N=22, Q2]`.

**RJ2 - Hold everything I actually own.**
> When I own something the usual apps do not fit (an Inzhur certificate, an OVDP line, a one-off), I want to record it anyway, so I do not fall back to a spreadsheet for the parts that do not fit.

P1. Evidence: flexibility is a named want `[N=22, R8]`; no app covers the core assets as anything but manual `[§5 gap #2]`; the open escape hatch is what turns ~90% coverage into 100% `[benchmark §2; desk]`.

**RJ3 - See income coming and arriving.**
> When I depend on payouts from different assets, I want to see what is coming and what has already arrived across all of them, so I can plan around my income.

P1. Evidence: forward + realized is the largest group `[N=22, Q7: 50% both, 32% realized]`.

**RJ4 - Move in without redoing the work.**
> When I already track this in a spreadsheet, I want to bring it across without re-entering everything, so I can switch without losing the work I have done.

P1. Evidence: Excel is where they consolidate now `[N=22, Q4: 41%]`; switching cost from the sheet is the barrier `[research goal; desk]`.

**RJ5 - Decide how much to share.**
> When I am wary of handing my full financial picture to an app, I want to choose what stays on my device and what I share, so I can use it without giving up control.

P3 (Trust-Wary Abandoner). Evidence: a third have quit an app over data demands `[N=22, Q8: 36%]`; auto-sync reads as a "red flag" `[Bogleheads, §1]`; but half are comfortable with bank/broker apps, so this is a choice, not a default `[N=22, Q8: 50%]`.

---

## Emotional jobs

**EJ1 - Feel on top of it, not vaguely unsure.**
> When my assets are scattered, I want to feel on top of my money instead of vaguely unsure, so I can stop worrying that I have missed something.

P1 / P2. Evidence: scattered assets is the single most-named difficulty `[N=22, Q9: 27%]`.

**EJ2 - Feel my data is mine.**
> When I try a finance app, I want to feel my data is mine and not being harvested, so I can use it without a nagging distrust.

P3. Evidence: real past abandonment over data demands `[N=22, Q8: 36%]`; "red flag" `[Bogleheads]`. Honest caveat: felt as an entry filter, not a daily pain `[N=22, Q9: distrust 0%]`.

**EJ3 - Feel my plan is working.**
> When I have been investing for a while, I want to see the income I have actually earned add up, so I can feel my plan is working.

P1. Evidence: most track income, and half track realized income specifically `[N=22, Q7: 82% track, 32% realized-only + 50% both]`.

---

## Social jobs

No social job is supported by the current research. The survey did not ask about how people are seen by others, and no response touches it. Candidate social jobs are in **Hypotheses** below, marked `[?]`, so they are not mistaken for findings.

---

## Hypotheses (no research support yet, [?])

These are plausible but unevidenced. Each is a question for user testing, not a basis for design decisions.

- **HJ1 (social) - Be seen as having it together.** *When I am part of an investor community, I want to look like someone who has their finances in order, so I can feel credible among peers.* `[?]` The Inzhur community exists and the survey was recruited there, but nothing shows people want the product for image.
- **HJ2 (social) - Share my approach.** *When I find a setup that works, I want to compare or share it with the community, so I can help and be helped.* `[?]` Weak signal only: some respondents built and shared their own tools (PowerBI, Notion) `[N=22, §6]`.
- **HJ3 - Track progress toward a long-term goal.** *When I am building toward a goal like financial independence, I want to see whether I am on track, so I can adjust.* `[?]` Only an adjacent product hint (FIREkit's FIRE projection, §1), no beachhead data.
- **HJ4 (P2) - Stay aware without maintaining anything.** *When I check my money, I want a glance rather than a system to keep up, so I can stay aware with near-zero effort.* `[?]` Inferred from the 23% who consolidate nowhere `[N=22, Q4]`; their actual motivation is unknown.
- **HJ5 - Decide what to buy or rebalance.** *When markets move, I want to decide what to buy, sell, or rebalance.* `[?]` No evidence, and out of the current direction (Flows is not P&L-led; transactions are deferred). Listed to mark it as deliberately excluded.

---

*Check: every job in the main list describes the person's progress, not a Flows feature. No formulation names a screen, button, or capability (no "dashboard", "calendar", "import", "sync").*

---

## JTBD matrix (jobs x personas)

*Revision: synced with the persona reframe and the §7 web scan. P2 is now "Low-Complexity Holder (mostly nowhere)", so most of its column is low; the trust cells for P3 cite §7.3 instead of the demoted Bogleheads thread.*

**How to read importance.** `1-3` = how central the job is to that persona (3 = high). The survey reports the whole sample, not per-persona splits, so only **P1** importances have direct survey anchors (P1 is the modal respondent). For **P2/P3**, `infer` or a `§` ref marks importance reasoned from the persona's defining trait, not a measured value. `[?]` means no basis at all; it is left blank, not averaged. **P2 scores are for the bulk low-complexity group, who mostly do not need the product (§7.2); the subset outgrowing one platform moves toward P1's profile.**

| Job | P1 - Excel Consolidator (primary) | P2 - Low-Complexity Holder (mostly nowhere) | P3 - Trust-Wary Abandoner | Function that closes it | Closed by competitors? (research.md) |
|---|---|---|---|---|---|
| **Main - whole position + income, no upkeep** | 3 · Q4/R7/goal | 1 · §7.2 (little to consolidate) | 3 · infer | Consolidated view, two co-equal lenses (position + income) | **No** - nobody blends cross-silo, incl. Inzhur/OVDP, into one forward number (§1 #1, §5 gap #3) |
| **RJ1 - bring the numbers together** | 3 · R7 | 1 · §7.2 (few platforms to gather from) | 3 · infer | Auto-fetched prices (crypto/stocks + OVDP/Inzhur feeds), daily FX, opt-in sync | **No for UA core** - Plaid/Yodlee sync misses UA; Inzhur/OVDP feeds done by no one (§1 #3, §6 #3) |
| **RJ2 - hold any asset I own** | 3 · R8/§5 | 1 · §7.2 (few, simple assets) | 2 · infer | Flexible generic asset model: typed stubs + custom-field escape hatch | **Partial** - broad catalogs exist but Inzhur certs/OVDP unmodeled; only Excel is a true escape hatch (§1, §2) |
| **RJ3 - income coming + arrived** | 3 · Q7 | 1 · §7.2 (Inzhur app already shows their income) | 2 · infer | Forward income projection + realized auto-roll, blended across assets | **No / paywalled** - forward income gated (Sharesight, Parqet) and listed-only; Kubera/FIREkit none (§5 gap #1) |
| **RJ4 - move in without redoing work** | 3 · Q4 | 1 · Q4 (nothing to bring) | [?] (Excel or nowhere unclear) | Move existing tracking in (auto-detect + remap), optional AI-assisted | **Yes** - getquin + Wealthfolio match CSV + AI import (§1, §4) |
| **RJ5 - decide how much to share** | 1 · Q9 (distrust 0% top pain) | [?] no data | 3 · Q8/§7.3 | Local-first by default + opt-in sharing/sync; BYOK or on-device AI | **Partial** - only niche local-first tools (Wealthfolio, Ghostfolio, Portfolio Performance) (§1 #3, H4) |
| **EJ1 - feel on top, not unsure** | 3 · Q9 (scattered 27%) | 1 · §7.2 (concentrated, already feel on top) | 2 · infer | Consolidated view + honest "as of" / empty states | **Partial** - consolidation views exist (getquin "all in one place") but not for the UA core blend (§1) |
| **EJ2 - feel my data is mine** | 1 · Q9 | [?] no data | 3 · Q8/§7.3 | Local-first, no account, "never your balances" cues | **Partial** - Wealthfolio strongest local-first; Parqet privacy framing (§1) |
| **EJ3 - feel my plan is working** | 2 · Q7 | 1 · §7.2 (Inzhur shows realized income) | 2 · infer | Realized income to-date / track record | **Yes** - realized income common (Inzhur all-time dividends, FIREkit, Wealthfolio) (§1) |

Hypotheses (HJ1-HJ5) are deliberately out of the matrix: with no evidence, an importance score would be invented.

---

## Conclusion

### 3 jobs for the MVP core

The test is strict: **high for the primary persona (P1 = 3) and not closed by the market.** Three jobs pass cleanly, and together they are the consolidation + automation + blended-income spine of the product.

1. **Main job - whole position + income in one place, without the upkeep.** P1 = 3; no competitor blends the cross-silo picture incl. the UA core (§5 gap #3).
2. **RJ1 - bring the numbers together for the UA core.** P1 = 3; sync misses UA institutions and no one pulls the Inzhur/OVDP feeds, so this directly kills the named pain in R7 (§1 #3, §6 #3). The web scan adds that broken sync and wrong numbers are what competitors actually lose users over (§7.3), so our own feeds plus "as of" freshness attack the real failure mode.
3. **RJ3 - income coming and arrived, blended.** P1 = 3; the forward blended view is the clearest market gap, gated or absent everywhere (§5 gap #1). This is the differentiator. The web scan confirms forward income is a real draw, and our knowable coupon/dividend dates make the forecast accurate rather than speculative (§7.4).

Runner-up, deliberately not in the three: **RJ2 (hold any asset)** is also P1 = 3 and is the make-or-break flexibility dimension (§4), but Excel already closes it, so it is table-stakes against the spreadsheet rather than a market gap. It stays in scope as a must-have, just not a wedge.

### Function candidates to cut or defer (close no unmet job)

- **Opt-in broker sync (e.g. Interactive Brokers).** For the beachhead it closes no reachable job: sync does not reach UA institutions (§1 #3), and the UA core is covered by RJ1's own feeds. Helps only non-UA holdings, which are the long tail (Q1). Defer for the beachhead.
- **P&L / total return.** Maps to no evidenced job (the only buy/sell/rebalance job, HJ5, has no support and is out of direction). Keep it minimal in holding detail, never a hero; do not invest beyond that.
- **AI-assisted import (note, not a cut).** It closes RJ4, but RJ4 is already matched by competitors and is not an unmet job (§4). Keep it as an optional power path; do not treat it as a wedge or spend the MVP's weight on it.

### Updated by the web scan (§7)

- **Trust stays a stance, not a hero.** The scan confirms privacy is a secondary churn reason, not a daily pain (§7.3), so RJ5/EJ2 keep local-first as a selectable default and an acquisition story, not a headline screen. The hero is consolidation + blended income, not a trust pitch.
- **The real reliability bar is freshness, not sync coverage.** Competitors lose users to broken sync and wrong numbers (§7.3), which reframes RJ1's success measure: "as of [freshness]" and never showing a fabricated number matter more than how many sources we can sync.
- **P2 onboarding is no longer a strong design driver.** With "nowhere" reframed as mostly out of scope (§7.2), a special near-zero-setup path for P2 drops in priority; low setup still matters, but for P1's RJ4 and the outgrowing-P2 subset, not as its own goal.
