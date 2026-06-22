# Flows — Beachhead survey (Inzhur community)

**Purpose.** Collect first-person evidence from the actual beachhead (Inzhur community) to test the load-bearing assumption and the gaps the synthesis flagged but never validated on this population (see `research.md` — "no direct evidence from the beachhead"). First primary-data instrument pointed at the real users.

**Design constraints (final).** Max **10 questions**, only about the product domain (how they track their portfolio), **all closed/multiple-choice for speed**, **Ukrainian** (the recipients are Ukrainian), **no recruitment block**. The single open question is the last one (wishes / pains), optional.

**Method.** Each closed question is a *guess turned into a forced choice about real behaviour* — not "would you like X." Q9 in particular converts the "biggest pain" into a ranked choice across the candidate wedges, so the answer points straight at which wedge matters.

The Ukrainian text below is the live instrument; the English notes are the case-study layer. The Apps Script in `scripts/` (or pasted into script.google.com) builds this exact form.

## What each question tests (guess → question)

| # | Question (topic) | Guess being tested | Gap |
| --- | --- | --- | --- |
| 1 | Asset types | which of the v1 types they actually hold (coverage) | — |
| 2 | How many platforms | portfolios are fragmented across platforms | 5 |
| 3 | Share in the largest platform | **if most sits inside Inzhur, the consolidation wedge shrinks** | 5 |
| 4 | Where they consolidate today | they fall back to Excel/Sheets | — |
| 5 | Device | reviewing the whole portfolio is a mobile task (pattern choice rests on this) | 6 |
| 6 | Update cadence | if 1–2×/yr, "without effort" is a weak motive | 4 |
| 7 | Income tracking (realized vs forward) | they want a forward, not just realized, income view (the hero) | wedge/H1 |
| 8 | Ever abandoned an app over account/data access | the local-first / trust pillar, tested via past behaviour not opinion | 3/H4 |
| 9 | Biggest difficulty (pick one) | **which wedge is the real pain** — manual math / scattered / no forward income / staleness / distrust | 3–5 |
| 10 | Wishes / pains (open, optional) | catch anything the closed set missed | — |

---

## Intro (form description — Ukrainian)

> Коротке опитування (~3–5 хв) про те, **як ви насправді стежите за своїми інвестиціями**. Правильних відповідей немає — цікавить лише ваш реальний досвід. Відповіді конфіденційні.

---

## Questions (Ukrainian — the live form)

**1. Які типи активів зараз у вашому портфелі?** *(кілька варіантів)*
- REIT / сертифікати фондів (Inzhur)
- ОВДП (державні облігації)
- Акції / ETF
- Криптовалюта
- Нерухомість
- Банківські депозити
- Інше…

**2. На скількох різних платформах або застосунках зараз лежать ваші інвестиції?** *(один варіант)*
- 1 · 2 · 3 · 4 · 5 і більше

**3. Яка приблизно частка всього портфеля — у найбільшій одній платформі?** *(один варіант)*
- до 25% · 25–50% · 50–75% · понад 75%

**4. Де ви зараз зводите всі свої інвестиції разом?** *(один варіант)*
- Excel
- Google Sheets
- У застосунку фонду (Inzhur)
- У застосунку брокера
- У кількох місцях окремо, разом не зводжу
- Ніде, тримаю в голові

**5. На якому пристрої ви найчастіше переглядаєте свій портфель?** *(один варіант)*
- Телефон · Ноутбук / комп'ютер · Планшет · По-різному

**6. Як часто ви оновлюєте або переглядаєте свій облік?** *(один варіант)*
- Щодня · Щотижня · Раз на місяць · Раз на кілька місяців · 1–2 рази на рік · Не веду регулярно

**7. Чи стежите ви за доходом від інвестицій (дивіденди, купони, оренда, відсотки)?** *(один варіант)*
- Так — і вже отриманий, і майбутні виплати наперед
- Лише вже отриманий дохід
- Ні, окремо дохід не рахую

**8. Чи відмовлялись ви колись від фінансового застосунку через те, що він вимагав акаунт або доступ до ваших даних?** *(один варіант)*
- Так, через це відмовлявся
- Ні, мене це не зупиняло
- Спокійно користуюсь застосунками банку / брокера — питання не виникало

**9. Що найбільше ускладнює вам стеження за портфелем зараз?** *(оберіть головне)*
- Доводиться все рахувати вручну
- Активи розкидані, немає єдиної картини
- Не бачу майбутній дохід наперед
- Дані застарівають, треба оновлювати руками
- Не довіряю застосункам свої дані
- Мене все влаштовує

**10. Чого вам найбільше бракує в інструменті для обліку портфеля? Поділіться найболючішими проблемами або побажаннями.** *(відкрите, за бажанням)*

---

## Deliberately NOT asked (a choice, not an oversight)
- **Recruitment for the usability test** — handled separately, per the latest scope for this form.
- **Willingness to pay** — out of scope for now.
- **Direct "is local-first important to you?"** — replaced by the past-behaviour question (8); the direct version only collects polite agreement.
