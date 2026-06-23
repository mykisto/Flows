# Flows - Personas

Seeded from [`research.md`](research.md), primarily the beachhead survey (§6, N=22) plus the desk/forum evidence in §1 and §5. These are behavioural personas, not demographic portraits: the research has no interviews, so we have how people *act and choose*, not deep *why*. Names, ages, and photos are deliberately omitted because no demographic data was collected `[?]`.

**Evidence legend.** `[N=22]` = beachhead survey (directional, convenience sample, not statistical; §6). `[desk]` = competitor synthesis / Bogleheads / self-observation (§1, §5). `Hypothesis:` = inference beyond the data, flagged so it is not mistaken for a finding. `[?]` = we do not have this.

Three personas: one primary, two secondary. Rationale for the split is at the end. The jobs listed here feed the JTBD matrix next.

---

## P1 - The Excel Consolidator (PRIMARY)

**Context.** A multi-asset retail investor in the Inzhur community. Holds the universal core, Inzhur certificates + OVDP (~95% each), plus a few of: stocks/ETF, crypto, real estate, deposits (mean ~3.5 asset types) `[N=22, Q1]`. Spread across 3+ platforms (73%), with no single platform holding the majority for most people (≤50% share for 55%) `[N=22, Q2/Q3]`. Already keeps everything in Excel or Google Sheets, the single biggest consolidation method `[N=22, Q4, 41%]`. They stay on it for convenience and path-dependence (the shortest familiar path; the sheet grew organically and migrating costs more than continuing), not distrust `[§7.1]`. Reviews weekly or more `[N=22, Q6, 55%]`. Works across phone and laptop; the sheet pulls them to a bigger screen `[N=22, Q5]`. The Inzhur app is their home silo, good for Inzhur assets only `[skrín inzhur-dashboard.png]`.

**Jobs.**
- See total position and this-month's income across every platform in one place, without rebuilding the sheet by hand `[research goal; N=22, Q7: 82% track income, forward leads]`.
- Keep it current with little effort: the monthly cadence is fine, the data-gathering is not `[N=22, §6 #1 / R7]`.
- Represent every asset they actually hold, including Inzhur certs, OVDP, and odd ones, without hitting a catalog wall `[N=22, R8; benchmark §2 escape hatch]`.

**Pains (worst first).**
- Logging in across platforms to collect the numbers is the real pain `[N=22, R7]`.
- Scattered assets (27%) + manual math (23%) + data goes stale (18%) are the named top difficulties `[N=22, Q9]`.
- No app covers Inzhur certs / OVDP as anything but manual, and auto-sync does not reach UA institutions, so apps feel "manual anyway" `[§5 gap #2; §1 desk]`.

**Trust triggers.**
- Convinces: less manual labour, now confirmed as the real driver, not privacy `[N=22, Q9 distrust 0%; §7.1/7.3]`. Honest "as of" freshness and never showing a fabricated number matter more here than any privacy pitch, because broken sync and wrong numbers are what people actually abandon trackers over `[§7.3]`.
- Repels: re-entering or re-checking data by hand, and tools whose numbers go stale or wrong `[§7.3]`. A forced cloud account is a mild negative, not a dealbreaker, for this persona `[N=22, Q9 distrust 0%]`.

**Mood quote (real, beachhead).** *"once a month is tolerable; the pain is logging in here and there to gather all the data"* `[N=22, §6 #1 / R7]`.

**Why primary.** The success hypothesis and the comparative usability test both run against the participant's own Excel workflow `[CLAUDE.md Validation; research goal]`. Excel is the biggest incumbent `[N=22, Q4]`, and this persona's pain is the named adoption pain `[N=22, R7]`. The product is literally being validated against this person.

---

## P2 - The Low-Complexity Holder (mostly nowhere) (secondary)

**Context.** Holds few assets, often concentrated in one platform (for example everything in Inzhur) plus maybe one more they rarely open (a short, fixed-term crypto position). Consolidates nowhere because there is little to consolidate, not because they lack a tool `[N=22, Q4: 23% nowhere; Q3: 23% hold >75% in one platform; first-hand beachhead self-report; §7.2]`. Checks rarely and irregularly `[beachhead self-report; hypothesis]`. Demographics `[?]`.

**Jobs.**
- For most of this group, no job Flows serves yet: with little spread there is nothing to bring together `[§7.2]`.
- The real prospect is the subset outgrowing one platform: when a second or third holding appears, get a single view without building anything `[N=22, Q7 income interest; hypothesis]`.

**Pains (worst first).**
- For most, no acute pain; that is the point `[§7.2]`.
- For the growing subset: the moment a second platform appears is when "nowhere" stops working `[hypothesis]`.

**Trust triggers.**
- Hypothesis: instant value with no account and no setup chore is what would convert the growing subset; a no-login demo lowered friction for FIREkit `[§1 FIREkit row; skrín firekit-demo-forecast.png]`.
- Hypothesis: any heavy onboarding or mandatory sign-up loses them `[?]`.

**Mood quote.** `[?]` - no verbatim from this segment exists in the research. Hypothesised sentiment, NOT a real quote: *"I roughly know what I have; it is mostly in one place, so I have never needed anything else."*

**Why secondary, and partly out of scope.** A large share of this group simply does not need a consolidation tool `[§7.2]`. Only the subset outgrowing one platform is a real prospect, and we have the thinnest evidence on them.

**What changed (this revision).** Split "nowhere" from "Excel". "Nowhere" is reframed from "scattered people who want consolidation but lack a system" to low-complexity holders who mostly do not need the product. The earlier "often a narrower portfolio" line, previously unsupported, is now the defining trait, grounded in Q3 + first-hand beachhead self-report + the web scan `[§7.2]`. The earlier "two-thirds on a sheet or nothing" reading wrongly treated all of "nowhere" as latent demand `[corrects §6, Q4]`.

---

## P3 - The Trust-Wary Abandoner (secondary)

**Context.** Has actually quit an app over account or data-access demands at least once `[N=22, Q8, 36%]`, so trust is a real entry filter for them. But this is not why they are on Excel or nowhere: distrust is nobody's top daily pain `[N=22, Q9: 0%]`, and in the wider scan privacy is a secondary churn reason, not a primary one `[§7.3]`. Demographics `[?]`.

**Jobs.**
- Consolidate without handing the full picture to a cloud account `[CLAUDE.md Storage & trust]`.
- Choose their own spot on the privacy-vs-convenience line, e.g. opt into broker sync for part of the portfolio while keeping the rest local `[CLAUDE.md; decisions #2/#12]`.

**Pains (worst first).**
- Mainstream apps are cloud + account by default `[§1 shared pattern #2]`.
- Real-time auto-sync reads as a "red flag" `[Bogleheads, §1 / H4]`.
- Honest caveat: this is an adoption filter, not their daily felt pain. 0% name distrust as the top difficulty and 50% are comfortable with bank/broker apps `[N=22, Q8/Q9]`; the web scan agrees that privacy is a secondary churn reason behind broken sync and wrong numbers `[§7.3]`.

**Trust triggers.**
- Convinces: local-first, no account, "never your balances", opt-in (not forced) sync, and on-device or BYOK AI so no server sees the data; a polished local-first tool can still have reach `[teardown / Wealthfolio, H4]`.
- Repels: a forced account or always-on bank linking `[N=22, Q8; Bogleheads]`.

**Mood quote.** `[?]` for the beachhead. The often-cited *"red flag"* line about auto-sync is from Bogleheads, a non-beachhead forum, and is no longer load-bearing `[§7.3]`. We have no verbatim trust quote from our own users.

**Why secondary.** Trust unlocks roughly a third of users at the entry point, but nobody names it as their top difficulty and half are comfortable with bank/broker apps `[N=22, Q8/Q9]`. It reads as a necessary posture and an acquisition stance, not the primary wedge `[H4; §7.3]`.

**What changed (this revision).** Removed the claim that this persona sits on Excel or nowhere because of distrust; the survey and the web scan refute it `[N=22, Q9; §7.3]`. Demoted the Bogleheads "red flag" quote to non-load-bearing. Trust reframed as an entry filter and acquisition stance, not a daily driver.

---

## Out of scope (named, not a target)

The "I'm fine" 27% `[N=22, Q9]`: mostly low-complexity holders or people already on a dedicated tool, including one respondent who uses **Strum** daily and is satisfied `[N=22, §6]`. Not a design target now. A *frustrated* Strum-style user (the tool misses Inzhur certificates, the 95% core) could be a future switch target, but the research has only the one satisfied data point, so we do not invent that persona `[?]`.

## Why this split, and why P1 is primary

The data offers no demographic axis (none was collected), so the personas cut along **behaviour**: how people consolidate today and why `[N=22, Q4; §7.1/7.2]`. P1 is primary because the whole validation plan targets Excel users measured against their own sheet `[CLAUDE.md Validation]`, and P1 carries the named adoption pain `[N=22, R7]`. P2 is mostly out of scope: low-complexity holders who do not need consolidation, with only the outgrowing subset as a prospect `[§7.2]`. P3 captures a real entry filter (trust) that works as an acquisition stance, not a daily driver `[N=22, Q8/Q9; §7.3]`. Both secondaries rest on thinner evidence than P1.
