/**
 * Flows — beachhead survey generator.
 *
 * Builds the full Google Form (10 questions, Ukrainian) in one run.
 * How to use:
 *   1. Open https://script.google.com → New project.
 *   2. Paste this whole file, Save.
 *   3. Run `createFlowsSurvey` once; approve the permission prompt.
 *   4. Open the "Execution log" — it prints the Edit URL and the live (share) URL.
 *
 * The form lands in your Google Drive; edit/style it there before sharing.
 * Mirror of research/beachhead-survey.md — keep the two in sync if you change questions.
 */
function createFlowsSurvey() {
  var form = FormApp.create('Flows — як ви стежите за своїм портфелем')
    .setDescription(
      'Коротке опитування (~3–5 хв) про те, як ви насправді стежите за своїми ' +
      'інвестиціями. Правильних відповідей немає — цікавить лише ваш реальний ' +
      'досвід. Відповіді конфіденційні.')
    .setProgressBar(true)
    .setCollectEmail(false)
    .setAllowResponseEdits(false);

  // 1 — asset types (multi-select)
  form.addCheckboxItem()
    .setTitle('Які типи активів зараз у вашому портфелі?')
    .setRequired(true)
    .setChoiceValues([
      'REIT / сертифікати фондів (Inzhur)',
      'ОВДП (державні облігації)',
      'Акції / ETF',
      'Криптовалюта',
      'Нерухомість',
      'Банківські депозити'
    ])
    .showOtherOption(true);

  // 2 — number of platforms (single)
  form.addMultipleChoiceItem()
    .setTitle('На скількох різних платформах або застосунках зараз лежать ваші інвестиції?')
    .setRequired(true)
    .setChoiceValues(['1', '2', '3', '4', '5 і більше']);

  // 3 — concentration in the largest platform (single)  ← the critical one
  form.addMultipleChoiceItem()
    .setTitle('Яка приблизно частка всього портфеля — у найбільшій одній платформі?')
    .setRequired(true)
    .setChoiceValues(['до 25%', '25–50%', '50–75%', 'понад 75%']);

  // 4 — where they consolidate today (single)
  form.addMultipleChoiceItem()
    .setTitle('Де ви зараз зводите всі свої інвестиції разом?')
    .setRequired(true)
    .setChoiceValues([
      'Excel',
      'Google Sheets',
      'У застосунку фонду (Inzhur)',
      'У застосунку брокера',
      'У кількох місцях окремо, разом не зводжу',
      'Ніде, тримаю в голові'
    ]);

  // 5 — device (single)
  form.addMultipleChoiceItem()
    .setTitle('На якому пристрої ви найчастіше переглядаєте свій портфель?')
    .setRequired(true)
    .setChoiceValues(['Телефон', 'Ноутбук / комп\'ютер', 'Планшет', 'По-різному']);

  // 6 — update cadence (single)
  form.addMultipleChoiceItem()
    .setTitle('Як часто ви оновлюєте або переглядаєте свій облік?')
    .setRequired(true)
    .setChoiceValues([
      'Щодня',
      'Щотижня',
      'Раз на місяць',
      'Раз на кілька місяців',
      '1–2 рази на рік',
      'Не веду регулярно'
    ]);

  // 7 — income: realized vs forward (single)
  form.addMultipleChoiceItem()
    .setTitle('Чи стежите ви за доходом від інвестицій (дивіденди, купони, оренда, відсотки)?')
    .setRequired(true)
    .setChoiceValues([
      'Так — і вже отриманий, і майбутні виплати наперед',
      'Лише вже отриманий дохід',
      'Ні, окремо дохід не рахую'
    ]);

  // 8 — trust / local-first via past behaviour (single)
  form.addMultipleChoiceItem()
    .setTitle('Чи відмовлялись ви колись від фінансового застосунку через те, що він вимагав акаунт або доступ до ваших даних?')
    .setRequired(true)
    .setChoiceValues([
      'Так, через це відмовлявся',
      'Ні, мене це не зупиняло',
      'Спокійно користуюсь застосунками банку / брокера — питання не виникало'
    ]);

  // 9 — biggest difficulty → which wedge is the real pain (single)
  form.addMultipleChoiceItem()
    .setTitle('Що найбільше ускладнює вам стеження за портфелем зараз? (оберіть головне)')
    .setRequired(true)
    .setChoiceValues([
      'Доводиться все рахувати вручну',
      'Активи розкидані, немає єдиної картини',
      'Не бачу майбутній дохід наперед',
      'Дані застарівають, треба оновлювати руками',
      'Не довіряю застосункам свої дані',
      'Мене все влаштовує'
    ]);

  // 10 — open wishes / pains (optional)
  form.addParagraphTextItem()
    .setTitle('Чого вам найбільше бракує в інструменті для обліку портфеля? Поділіться найболючішими проблемами або побажаннями.')
    .setRequired(false);

  Logger.log('Готово.');
  Logger.log('Редагувати: ' + form.getEditUrl());
  Logger.log('Поділитися (для спільноти): ' + form.getPublishedUrl());
}
