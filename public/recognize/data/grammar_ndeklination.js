/* German GRAMMAR · B1 · n-Deklination: der Kollege → den / dem / des Kollegen, Herr → Herrn, der Name → des Namens.
 * Split out of grammar_infinitiv.js (drills g-inf-d5 and g-inf-d8 moved here with their ids). Explanations ru + en inline. */
GT.registerGrammar({
  id: 'ndeklination',
  level: 'B1',
  title: { ru: 'n-склонение · n-Deklination', en: 'n-declension · n-Deklination' },
  summary: {
    ru: 'der Kollege → den / dem / des Kollegen. Какие существительные мужского рода получают -n во всех падежах, кроме Nominativ.',
    en: 'der Kollege → den / dem / des Kollegen. Which masculine nouns add -n in every case except the Nominativ.'
  },
  explanation: {
    ru: '<p>Обычно немецкое существительное в единственном числе почти не меняется: <em>der Tisch, den Tisch, dem Tisch</em>. Но есть группа существительных <b>мужского рода</b>, которые получают <b>-n / -en</b> во <b>всех падежах, кроме Nominativ единственного числа</b>. Это и есть n-склонение.</p>' +
      '<p><b>Кто в этой группе:</b></p>' +
      '<ul>' +
      '<li>одушевлённые на <b>-e</b>: <em>der Kollege, der Kunde, der Junge, der Neffe, der Zeuge, der Löwe</em>;</li>' +
      '<li>заимствования на <b>-ent, -ant, -ist, -oge, -at, -af</b>: <em>der Student, der Patient, der Praktikant, der Polizist, der Journalist, der Biologe, der Soldat, der Fotograf</em>;</li>' +
      '<li>несколько старых слов: <em>der Mensch, der Nachbar, der Herr, der Held, der Bauer, der Bär</em>.</li>' +
      '</ul>' +
      '<p><b>Herr</b>: в единственном числе <em>Herrn</em>, во множественном <em>Herren</em>. В обращении стоит Nominativ: <em>Sehr geehrter <b>Herr</b> Weber</em>, а в адресе на конверте — Akkusativ: <em>An <b>Herrn</b> Weber</em>.</p>' +
      '<p><b>Особая подгруппа</b> (неодушевлённые): <em>der Name, der Gedanke, der Buchstabe, der Glaube</em> — тоже <em>-n</em>, но в Genitiv <b>-ns</b>: <em>des Namens</em>. И одно слово среднего рода: <em>das Herz → dem Herzen, des Herzens</em>.</p>' +
      '<p>Русскому уху это знакомо — у нас тоже меняется конец слова. Ловушка в другом: выучив правило «немецкие существительные почти не склоняются», легко забыть про -n.</p>',
    en: '<p>German singular nouns hardly change: <em>der Tisch, den Tisch, dem Tisch</em>. But a group of <b>masculine</b> nouns adds <b>-n / -en</b> in <b>every case except the Nominativ singular</b>. That is the n-declension.</p>' +
      '<p><b>Who is in the group:</b></p>' +
      '<ul>' +
      '<li>people and animals ending in <b>-e</b>: <em>der Kollege, der Kunde, der Junge, der Neffe, der Zeuge, der Löwe</em>;</li>' +
      '<li>loanwords in <b>-ent, -ant, -ist, -oge, -at, -af</b>: <em>der Student, der Patient, der Praktikant, der Polizist, der Journalist, der Biologe, der Soldat, der Fotograf</em>;</li>' +
      '<li>a few old words: <em>der Mensch, der Nachbar, der Herr, der Held, der Bauer, der Bär</em>.</li>' +
      '</ul>' +
      '<p><b>Herr</b> is <em>Herrn</em> in the singular and <em>Herren</em> in the plural. A letter greeting is Nominativ: <em>Sehr geehrter <b>Herr</b> Weber</em>; the address on the envelope is Akkusativ: <em>An <b>Herrn</b> Weber</em>.</p>' +
      '<p><b>A special subgroup</b> (things): <em>der Name, der Gedanke, der Buchstabe, der Glaube</em> also add <em>-n</em>, but the Genitiv is <b>-ns</b>: <em>des Namens</em>. And one neuter noun: <em>das Herz → dem Herzen, des Herzens</em>.</p>' +
      '<p>English nouns never change for case, so the extra -n feels optional — it isn’t. <em>mit dem Kollege</em> sounds as wrong to a German as “two child” does to you.</p>'
  },
  tables: [
    {
      caption: { ru: 'Формы', en: 'Forms' },
      head: { ru: ['Падеж', 'der Kollege', 'der Student', 'der Herr', 'der Name'], en: ['Case', 'der Kollege', 'der Student', 'der Herr', 'der Name'] },
      deCols: [0, 1, 2, 3, 4],
      rows: [
        ['Nominativ', 'der Kollege', 'der Student', 'der Herr', 'der Name'],
        ['Akkusativ', 'den Kollegen', 'den Studenten', 'den Herrn', 'den Namen'],
        ['Dativ', 'dem Kollegen', 'dem Studenten', 'dem Herrn', 'dem Namen'],
        ['Genitiv', 'des Kollegen', 'des Studenten', 'des Herrn', 'des Namens'],
        ['Plural', 'die Kollegen', 'die Studenten', 'die Herren', 'die Namen']
      ]
    }
  ],
  examples: [
    { de: 'Wir haben gestern mit [[dem neuen Kunden]] gesprochen.', ru: 'Мы вчера поговорили с новым клиентом.', en: 'We spoke with the new client yesterday.' },
    { de: 'Kennst du schon [[den Nachbarn]] von oben?', ru: 'Ты уже знаешь соседа сверху?', en: 'Have you met the neighbour from upstairs yet?' },
    { de: 'Die Ärztin hat [[dem Patienten]] ein Rezept gegeben.', ru: 'Врач дала пациенту рецепт.', en: 'The doctor gave the patient a prescription.' },
    { de: 'Den Brief schicken Sie bitte an [[Herrn]] Becker.', ru: 'Письмо отправьте, пожалуйста, господину Беккеру.', en: 'Please send the letter to Mr Becker.' },
    { de: 'Ich kann mich an [[seinen Namen]] nicht erinnern.', ru: 'Я не могу вспомнить его имя.', en: 'I can’t remember his name.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Помните про -n у der Kollege / der Kunde / der Student', en: 'Remember the -n on der Kollege / der Kunde / der Student' },
      html: {
        ru: 'После предлога или как дополнение эти слова получают <em>-n</em>: <span class="right">Ich sehe den Studenten</span>, <span class="right">mit dem Kollegen</span> (не <span class="wrong">mit dem Kollege</span>).',
        en: 'In every case except Nominativ singular, these nouns add <em>-n</em>: <span class="right">Ich sehe den Studenten</span>, <span class="right">mit dem Kollegen</span> (not <span class="wrong">mit dem Kollege</span>).'
      }
    },
    {
      title: { ru: 'Не каждый мужской род', en: 'Not every masculine noun' },
      html: {
        ru: 'Только эта группа. <span class="wrong">mit dem Freunden</span>, <span class="wrong">den Lehreren</span> — ошибки: <span class="right">mit dem Freund</span>, <span class="right">den Lehrer</span>. Подсказка: если во множественном числе слово кончается на -(e)n (die Kollegen, die Studenten) и обозначает человека мужского рода, проверьте n-склонение.',
        en: 'Only this group. <span class="wrong">mit dem Freunden</span>, <span class="wrong">den Lehreren</span> are wrong: <span class="right">mit dem Freund</span>, <span class="right">den Lehrer</span>. A clue: a masculine person whose plural ends in -(e)n (die Kollegen, die Studenten) is probably n-declension.'
      }
    },
    {
      title: { ru: 'Herr в письме', en: 'Herr in letters' },
      html: {
        ru: 'Обращение — Nominativ: <span class="right">Sehr geehrter Herr Klein,</span> (не <span class="wrong">Herrn Klein</span>). Адрес и «для кого» — Akkusativ: <span class="right">An Herrn Klein</span>, <span class="right">für Herrn Klein</span>.',
        en: 'The greeting is Nominativ: <span class="right">Sehr geehrter Herr Klein,</span> (not <span class="wrong">Herrn Klein</span>). The address and “for” are Akkusativ: <span class="right">An Herrn Klein</span>, <span class="right">für Herrn Klein</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-inf-d5', kind: 'choice',
      q: 'Das Team hat lange mit dem neuen ___ über die Anforderungen gesprochen.',
      options: ['Kunde', 'Kunden', 'Kundes'],
      answer: 1,
      explain: { ru: 'der Kunde относится к n-склонению: в Dativ (после mit) получаем -n → dem Kunden.', en: 'der Kunde is an n-declension noun: in Dativ (after mit) it adds -n → dem Kunden.' }
    },
    {
      id: 'g-inf-d8', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Я помогаю коллеге с презентацией». (der Kollege → n-склонение)', en: 'Build the sentence. “I am helping the colleague with the presentation.”' },
      tokens: ['Ich', 'helfe', 'dem Kollegen', 'bei der', 'Präsentation.'],
      answer: 'Ich helfe dem Kollegen bei der Präsentation.',
      explain: { ru: 'helfen + Dativ, der Kollege получает окончание -n → dem Kollegen.', en: 'helfen + Dativ, and der Kollege adds -n → dem Kollegen.' }
    },
    {
      id: 'g-nd-d1', kind: 'choice',
      q: 'Kennst du schon den neuen ___?',
      options: ['Nachbarn', 'Nachbar', 'Nachbars'],
      answer: 0,
      explain: { ru: 'der Nachbar — n-склонение; Akkusativ → den Nachbarn.', en: 'der Nachbar is n-declension; Akkusativ → den Nachbarn.' }
    },
    {
      id: 'g-nd-d2', kind: 'choice',
      q: 'Der Brief ist an ___ Schmidt adressiert.',
      options: ['Herrn', 'Herr', 'Herren'],
      answer: 0,
      explain: { ru: 'an + Akkusativ (адрес), единственное число → Herrn. Herren — множественное.', en: 'an + Akkusativ (address), singular → Herrn. Herren is the plural.' }
    },
    {
      id: 'g-nd-d3', kind: 'gap',
      q: 'Ich habe gestern mit einem ___ gesprochen. (der Polizist)',
      answer: 'Polizisten',
      explain: { ru: '-ist → n-склонение; mit + Dativ → einem Polizisten.', en: '-ist → n-declension; mit + Dativ → einem Polizisten.' }
    },
    {
      id: 'g-nd-d4', kind: 'choice',
      q: 'Wie heißt der Vater des ___?',
      options: ['Jungen', 'Junges', 'Junge'],
      answer: 0,
      explain: { ru: 'der Junge — n-склонение, Genitiv тоже на -n, без -s: des Jungen.', en: 'der Junge is n-declension; the Genitiv also ends in -n, no -s: des Jungen.' }
    },
    {
      id: 'g-nd-d5', kind: 'choice',
      q: 'Ich kann mich an seinen ___ nicht erinnern.',
      options: ['Namen', 'Name', 'Namens'],
      answer: 0,
      explain: { ru: 'der Name: Akkusativ den / seinen Namen. -ns только в Genitiv (des Namens).', en: 'der Name: Akkusativ den / seinen Namen. -ns is only for the Genitiv (des Namens).' }
    },
    {
      id: 'g-nd-d6', kind: 'choice',
      q: 'Der neue ___ fängt am Montag an.',
      options: ['Praktikant', 'Praktikanten', 'Praktikants'],
      answer: 0,
      explain: { ru: 'Подлежащее, Nominativ единственного числа — без окончания: der Praktikant.', en: 'Subject, Nominativ singular — no ending: der Praktikant.' }
    },
    {
      id: 'g-nd-d7', kind: 'gap',
      q: 'Die Ärztin fragt nach dem Geburtsdatum des ___. (der Patient)',
      answer: 'Patienten',
      explain: { ru: '-ent → n-склонение; Genitiv → des Patienten (без -s).', en: '-ent → n-declension; Genitiv → des Patienten (no -s).' }
    },
    {
      id: 'g-nd-d8', kind: 'choice',
      q: 'Das Geschenk ist für meinen ___.',
      options: ['Neffen', 'Neffe', 'Neffes'],
      answer: 0,
      explain: { ru: 'der Neffe — одушевлённый на -e → n-склонение; für + Akk → meinen Neffen.', en: 'der Neffe is a person ending in -e → n-declension; für + Akk → meinen Neffen.' }
    },
    {
      id: 'g-nd-d9', kind: 'choice',
      q: 'Kennst du den ___ von Anna?',
      options: ['Freund', 'Freunden', 'Freunde'],
      answer: 0,
      explain: { ru: 'der Freund НЕ относится к n-склонению: den Freund. Freunden — Dativ мн. ч.', en: 'der Freund is NOT n-declension: den Freund. Freunden is the Dativ plural.' }
    },
    {
      id: 'g-nd-d10', kind: 'choice',
      q: 'Sehr geehrter ___ Weber, vielen Dank für Ihre Nachricht.',
      options: ['Herr', 'Herrn', 'Herren'],
      answer: 0,
      explain: { ru: 'Обращение — Nominativ: Sehr geehrter Herr …', en: 'The greeting is Nominativ: Sehr geehrter Herr …' }
    },
    {
      id: 'g-nd-d11', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Врач даёт пациенту рецепт».', en: 'Build the sentence. “The doctor gives the patient a prescription.”' },
      tokens: ['Der Arzt', 'gibt', 'dem Patienten', 'ein Rezept.'],
      answer: 'Der Arzt gibt dem Patienten ein Rezept.',
      explain: { ru: 'Кому? — dem Patienten (Dativ, n-склонение). Dativ перед Akkusativ.', en: 'To whom? — dem Patienten (Dativ, n-declension). Dativ before Akkusativ.' }
    }
  ]
});
