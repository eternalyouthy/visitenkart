/* German GRAMMAR · B2 · Modal verbs for assumptions (subjektiver Gebrauch) and Futur I/II for guesses.
 * Explanations ru + en inline. */
GT.registerGrammar({
  id: 'vermutung',
  level: 'B2',
  title: { ru: 'Предположение: muss, dürfte, soll, will, wird … haben', en: 'Assumptions: muss, dürfte, soll, will, wird … haben' },
  summary: {
    ru: 'Er muss krank sein. Sie soll reich sein. Er wird es vergessen haben. Насколько вы уверены — и чьё это мнение.',
    en: 'Er muss krank sein. Sie soll reich sein. Er wird es vergessen haben. How sure you are — and whose claim it is.'
  },
  explanation: {
    ru: '<p>Модальные глаголы умеют не только «должен/могу», но и <b>оценивать вероятность</b>. Шкала уверенности:</p>' +
      '<ul>' +
      '<li><b>muss</b> — почти уверен («наверняка»): <em>Er <b>muss</b> zu Hause sein, das Licht brennt.</em></li>' +
      '<li><b>wird</b> (Futur I/II) — уверенное предположение: <em>Sie <b>wird</b> im Stau stehen.</em></li>' +
      '<li><b>dürfte</b> — вероятно: <em>Das <b>dürfte</b> etwa 50 Euro kosten.</em></li>' +
      '<li><b>kann / könnte</b> — возможно: <em>Er <b>könnte</b> sich verlaufen haben.</em></li>' +
      '<li><b>kann nicht</b> — невозможно: <em>Das <b>kann nicht</b> stimmen.</em></li>' +
      '</ul>' +
      '<p><b>Чужие утверждения:</b> <b>sollen</b> — «говорят, что…» (слух, СМИ): <em>Der Film <b>soll</b> sehr gut sein.</em> <b>wollen</b> — «утверждает о себе, но я сомневаюсь»: <em>Er <b>will</b> das allein gemacht haben.</em></p>' +
      '<p><b>Прошлое:</b> модальный + <b>Partizip II + haben/sein</b> (Infinitiv Perfekt): <em>Er muss den Zug <b>verpasst haben</b>. Sie wird schon <b>angekommen sein</b>.</em></p>',
    en: '<p>Modal verbs don’t only mean “must / can” — they also <b>rate probability</b>. From most to least sure:</p>' +
      '<ul>' +
      '<li><b>muss</b> — almost certain (“must be”): <em>Er <b>muss</b> zu Hause sein, das Licht brennt.</em></li>' +
      '<li><b>wird</b> (Futur I/II) — confident guess (“will be”): <em>Sie <b>wird</b> im Stau stehen.</em></li>' +
      '<li><b>dürfte</b> — probably: <em>Das <b>dürfte</b> etwa 50 Euro kosten.</em></li>' +
      '<li><b>kann / könnte</b> — possibly: <em>Er <b>könnte</b> sich verlaufen haben.</em></li>' +
      '<li><b>kann nicht</b> — impossible (“can’t be”): <em>Das <b>kann nicht</b> stimmen.</em></li>' +
      '</ul>' +
      '<p><b>Other people’s claims:</b> <b>sollen</b> — “is said to” (rumour, media): <em>Der Film <b>soll</b> sehr gut sein.</em> <b>wollen</b> — “claims (about himself), and I doubt it”: <em>Er <b>will</b> das allein gemacht haben.</em></p>' +
      '<p><b>Past:</b> modal + <b>Partizip II + haben/sein</b> (perfect infinitive): <em>Er muss den Zug <b>verpasst haben</b>. Sie wird schon <b>angekommen sein</b>.</em> Compare English “must have missed”.</p>'
  },
  tables: [
    {
      caption: { ru: 'Шкала уверенности', en: 'Certainty scale' },
      head: { ru: ['Форма', 'Уверенность', 'Пример'], en: ['Form', 'Certainty', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['muss', '≈ 95 %', 'Er muss krank sein.'],
          ['wird', '≈ 90 %', 'Er wird krank sein.'],
          ['dürfte', '≈ 75 %', 'Er dürfte krank sein.'],
          ['kann / könnte', '≈ 50 %', 'Er könnte krank sein.'],
          ['kann nicht', '≈ 0 %', 'Er kann nicht krank sein.'],
          ['soll', 'говорят', 'Er soll krank sein.'],
          ['will', 'он утверждает', 'Er will krank sein.']
        ],
        en: [
          ['muss', '≈ 95 %', 'Er muss krank sein.'],
          ['wird', '≈ 90 %', 'Er wird krank sein.'],
          ['dürfte', '≈ 75 %', 'Er dürfte krank sein.'],
          ['kann / könnte', '≈ 50 %', 'Er könnte krank sein.'],
          ['kann nicht', '≈ 0 %', 'Er kann nicht krank sein.'],
          ['soll', 'people say', 'Er soll krank sein.'],
          ['will', 'he claims', 'Er will krank sein.']
        ]
      }
    }
  ],
  examples: [
    { de: 'Das Restaurant [[muss]] gut sein — es ist immer voll.', ru: 'Ресторан, должно быть, хороший — там всегда полно.', en: 'The restaurant must be good — it’s always full.' },
    { de: 'Er [[wird]] den Termin [[vergessen haben]].', ru: 'Он, наверное, забыл о встрече.', en: 'He’s probably forgotten the appointment.' },
    { de: 'Die Reparatur [[dürfte]] eine Woche dauern.', ru: 'Ремонт, вероятно, займёт неделю.', en: 'The repair will probably take a week.' },
    { de: 'Der neue Chef [[soll]] sehr streng sein.', ru: 'Говорят, новый начальник очень строгий.', en: 'The new boss is said to be very strict.' },
    { de: 'Sie [[will]] den Brief nie [[bekommen haben]].', ru: 'Она утверждает, что так и не получила письмо.', en: 'She claims never to have received the letter.' },
    { de: 'Das [[kann]] nicht [[stimmen]].', ru: 'Этого не может быть.', en: 'That can’t be right.' }
  ],
  pitfalls: [
    {
      title: { ru: 'soll ≠ «должен» в предположении', en: 'soll ≠ should here' },
      html: {
        ru: '<span class="right">Er soll reich sein</span> — «говорят, он богат», а не «он должен быть богат». Для вывода используйте <span class="right">muss</span>.',
        en: '<span class="right">Er soll reich sein</span> means “he is said to be rich”, not “he should be rich”. For a logical conclusion use <span class="right">muss</span>.'
      }
    },
    {
      title: { ru: 'Прошлое: Partizip + haben в конце', en: 'Past: participle + haben at the end' },
      html: {
        ru: '«Он, должно быть, проспал» — <span class="right">Er muss verschlafen haben</span>. <span class="wrong">Er hat verschlafen müssen</span> значит «ему пришлось проспать».',
        en: '“He must have overslept” = <span class="right">Er muss verschlafen haben</span>. <span class="wrong">Er hat verschlafen müssen</span> means “he had to oversleep”.'
      }
    },
    {
      title: { ru: 'wird ≠ всегда будущее', en: 'wird is not always future' },
      html: {
        ru: 'С <em>wohl, schon, sicher</em> Futur выражает предположение о <b>настоящем</b>: <span class="right">Sie wird wohl noch schlafen</span> — «она, наверное, ещё спит».',
        en: 'With <em>wohl, schon, sicher</em> the future tense expresses a guess about the <b>present</b>: <span class="right">Sie wird wohl noch schlafen</span> — “she’s probably still asleep”.'
      }
    }
  ],
  drills: [
    {
      id: 'g-vm-d1', kind: 'choice',
      q: 'Überall liegt Schnee — es ___ in der Nacht geschneit haben.',
      options: ['muss', 'soll', 'will'],
      answer: 0,
      explain: { ru: 'Вывод по фактам → muss.', en: 'A conclusion from evidence → muss.' }
    },
    {
      id: 'g-vm-d2', kind: 'choice',
      q: 'In der Zeitung steht, der Minister ___ zurücktreten.',
      options: ['will', 'soll', 'darf'],
      answer: 1,
      explain: { ru: 'Информация от других → soll.', en: 'Reported by others → soll.' }
    },
    {
      id: 'g-vm-d3', kind: 'choice',
      q: 'Er ___ das ganz allein programmiert haben — aber ich glaube ihm nicht.',
      options: ['soll', 'will', 'muss'],
      answer: 1,
      explain: { ru: 'Утверждает сам о себе, с сомнением → will.', en: 'Claims it himself, doubted → will.' }
    },
    {
      id: 'g-vm-d4', kind: 'gap',
      q: 'Sie antwortet nicht. Sie ___ wohl noch im Meeting sein. (werden)',
      answer: 'wird',
      explain: { ru: 'wohl + Futur I = предположение о настоящем.', en: 'wohl + Futur I = a guess about now.' }
    },
    {
      id: 'g-vm-d5', kind: 'gap',
      q: 'Der Bus ist weg. Wir müssen ihn knapp verpasst ___.',
      answer: 'haben',
      explain: { ru: 'Прошлое: Partizip II + haben.', en: 'Past: Partizip II + haben.' }
    },
    {
      id: 'g-vm-d6', kind: 'choice',
      q: 'Das Paket ___ morgen ankommen — sicher bin ich aber nicht.',
      options: ['dürfte', 'muss', 'kann nicht'],
      answer: 0,
      explain: { ru: '«вероятно, но не точно» → dürfte.', en: '“probably, not sure” → dürfte.' }
    }
  ]
});
