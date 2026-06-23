# Flows - Personas

Seeded from [`research.md`](research.md), primarily the beachhead survey (§6, N=22) plus the desk/forum evidence in §1 and §5. These are behavioural personas, not demographic portraits: the research has no interviews, so we have how people *act and choose*, not deep *why*. Names, ages, and photos are deliberately omitted because no demographic data was collected `[?]`.

**Evidence legend.** `[N=22]` = beachhead survey (directional, convenience sample, not statistical; §6). `[desk]` = competitor synthesis / Bogleheads / self-observation (§1, §5). `Hypothesis:` = inference beyond the data, flagged so it is not mistaken for a finding. `[?]` = we do not have this.

Three personas: one primary, two secondary. Rationale for the split is at the end. The jobs listed here feed the JTBD matrix next.

---

## P1 - The Excel Consolidator (PRIMARY)

**Context.** A multi-asset retail investor in the Inzhur community. Holds the universal core, Inzhur certificates + OVDP (~95% each), plus a few of: stocks/ETF, crypto, real estate, deposits (mean ~3.5 asset types) `[N=22, Q1]`. Spread across 3+ platforms (73%), with no single platform holding the majority for most people (≤50% share for 55%) `[N=22, Q2/Q3]`. Already keeps everything in Excel or Google Sheets, the single biggest consolidation method `[N=22, Q4, 41%]`. Reviews weekly or more `[N=22, Q6, 55%]`. Works across phone and laptop; the sheet pulls them to a bigger screen `[N=22, Q5]`. The Inzhur app is their home silo, good for Inzhur assets only `[skrín inzhur-dashboard.png]`.

**Jobs.**
- See total position and this-month's income across every platform in one place, without rebuilding the sheet by hand `[research goal; N=22, Q7: 82% track income, forward leads]`.
- Keep it current with little effort: the monthly cadence is fine, the data-gathering is not `[N=22, §6 #1 / R7]`.
- Represent every asset they actually hold, including Inzhur certs, OVDP, and odd ones, without hitting a catalog wall `[N=22, R8; benchmark §2 escape hatch]`.

**Pains (worst first).**
- Logging in across platforms to collect the numbers is the real pain `[N=22, R7]`.
- Scattered assets (27%) + manual math (23%) + data goes stale (18%) are the named top difficulties `[N=22, Q9]`.
- No app covers Inzhur certs / OVDP as anything but manual, and auto-sync does not reach UA institutions, so apps feel "manual anyway" `[§5 gap #2; §1 desk]`.

**Trust triggers.**
- Convinces: less manual labour is the actual driver here, not privacy `[N=22, Q9 distrust 0%]`. Local-first with no forced account, "we fetch public prices, never your balances", and honest "as of" freshness reassure without being the headline.
- Repels: being pushed into a cloud account that holds the full picture `[N=22, Q8: 36% have abandoned an app over data demands; Bogleheads "red flag", §1]`.

**Mood quote (real, beachhead).** *"once a month is tolerable; the pain is logging in here and there to gather all the data"* `[N=22, §6 #1 / R7]`.

**Why primary.** The success hypothesis and the comparative usability test both run against the participant's own Excel workflow `[CLAUDE.md Validation; research goal]`. Excel is the biggest incumbent `[N=22, Q4]`, and this persona's pain is the named adoption pain `[N=22, R7]`. The product is literally being validated against this person.

---

## P2 - The Scattered Non-Tracker (secondary)

**Context.** Holds the same Inzhur + OVDP core, often a narrower portfolio, but consolidates nowhere: in their head or scattered notes `[N=22, Q4, 23% "nowhere / scattered"]`. Hypothesis: reviews less often or irregularly, and has a low tolerance for setup effort, which is why they never built a sheet `[?]`. Demographics `[?]`.

**Jobs.**
- Get a first single view with near-zero setup: "what do I have, and what is it paying?" without building anything `[research goal; N=22, Q7 income interest]`.
- Hypothesis: stay in a glanceable mode rather than maintaining a system `[?]`.

**Pains (worst first).**
- No overview at all; the upkeep of any tool or sheet has not felt worth it `[N=22, Q4; Q9 scattered assets 27%]`.
- Apps feel like no real gain because sync does not reach UA holdings `[§1 desk, "manual anyway"]`.
- Hypothesis: the blocker is an effort-to-payoff threshold, not distrust `[N=22, Q9 distrust 0%; inference]`.

**Trust triggers.**
- Hypothesis: instant value with no account and no import chore is what converts them; a no-login demo lowered friction for FIREkit `[§1 FIREkit row; skrín firekit-demo-forecast.png]`.
- Hypothesis: any heavy onboarding or mandatory sign-up loses them `[?]`.

**Mood quote.** `[?]` - no verbatim from this segment exists in the research. Hypothesised sentiment, NOT a real quote: *"I roughly know, but I've never put it all in one place."*

**Why secondary.** Real and sizable (23%), but the success hypothesis is anchored on beating Excel, and this group has no Excel to beat. We also have the weakest signal on what actually converts them, so most of this persona is hypothesis.

---

## P3 - The Trust-Wary Abandoner (secondary)

**Context.** Multi-asset, but has actually quit an app over account or data-access demands `[N=22, Q8, 36%]`. Values data ownership; may sit in Excel or nowhere partly for this reason `[desk; Bogleheads]`. Demographics `[?]`.

**Jobs.**
- Consolidate without handing the full picture to a cloud account `[CLAUDE.md Storage & trust]`.
- Choose their own spot on the privacy-vs-convenience line, e.g. opt into broker sync for part of the portfolio while keeping the rest local `[CLAUDE.md; decisions #2/#12]`.

**Pains (worst first).**
- Mainstream apps are cloud + account by default `[§1 shared pattern #2]`.
- Real-time auto-sync reads as a "red flag" `[Bogleheads, §1 / H4]`.
- Honest caveat: this is an adoption filter, not their daily felt pain. 0% name distrust as the top difficulty and 50% are comfortable with bank/broker apps `[N=22, Q8/Q9]`.

**Trust triggers.**
- Convinces: local-first, no account, "never your balances", opt-in (not forced) sync, and on-device or BYOK AI so no server sees the data; a polished local-first tool can still have reach `[teardown / Wealthfolio, H4]`.
- Repels: a forced account or always-on bank linking `[N=22, Q8; Bogleheads]`.

**Mood quote (real, forum).** auto-sync is a *"red flag"* `[Bogleheads, §1 / H4]`.

**Why secondary.** Trust unlocks roughly a third of users and removes a real blocker, but nobody names it as their top difficulty and half are comfortable with bank/broker apps `[N=22, Q8/Q9]`. So it is a necessary posture, not the primary wedge `[H4]`.

---

## Out of scope (named, not a target)

The "I'm fine" 27% `[N=22, Q9]`: mostly low-complexity holders or people already on a dedicated tool, including one respondent who uses **Strum** daily and is satisfied `[N=22, §6]`. Not a design target now. A *frustrated* Strum-style user (the tool misses Inzhur certificates, the 95% core) could be a future switch target, but the research has only the one satisfied data point, so we do not invent that persona `[?]`.

## Why this split, and why P1 is primary

The data offers no demographic axis (none was collected), so the personas cut along **behaviour**: how people consolidate today (Excel power-user / nowhere / on a tool) `[N=22, Q4]` crossed with their **trust stance** `[N=22, Q8]`. P1 is primary because the whole validation plan targets Excel users measured against their own sheet `[CLAUDE.md Validation]`, and P1 carries the named adoption pain `[N=22, R7]`. P2 and P3 are real, evidenced segments with distinct product implications (near-zero-setup onboarding; trust as a user-selectable stance), but each rests on thinner or more inferential evidence than P1.
