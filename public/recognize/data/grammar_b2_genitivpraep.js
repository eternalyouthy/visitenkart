/* German GRAMMAR · B2 · Prepositions with the Genitiv (aufgrund, innerhalb, außerhalb, anstelle, mithilfe, infolge,
 * angesichts, bezüglich, laut, dank …) + Genitiv of adjectives. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'genitivpraep',
  level: 'B2',
  title: { ru: 'Предлоги с Genitiv', en: 'Prepositions with the Genitiv' },
  summary: {
    ru: 'aufgrund, innerhalb, außerhalb, anstelle, mithilfe, infolge, angesichts, bezüglich — и окончания des …en …s.',
    en: 'aufgrund, innerhalb, außerhalb, anstelle, mithilfe, infolge, angesichts, bezüglich — and the des …en …s endings.'
  },
  explanation: {
    ru: '<p>На B1 вы знаете <em>wegen, trotz, während, statt</em>. На B2 добавляется целая группа «письменных» предлогов с <b>Genitiv</b>. Они часты в новостях, договорах и письмах.</p>' +
      '<ul>' +
      '<li><b>Причина:</b> <em>aufgrund, infolge, angesichts</em> («ввиду»), <em>dank</em> (благодаря; часто и с Dativ).</li>' +
      '<li><b>Место/время:</b> <em>innerhalb, außerhalb, oberhalb, unterhalb, unweit</em>.</li>' +
      '<li><b>Замена, средство:</b> <em>anstelle / statt, mithilfe, anhand</em> («на основе»).</li>' +
      '<li><b>Тема:</b> <em>bezüglich, hinsichtlich</em> («относительно»), <em>laut</em> («согласно»; чаще с Dativ).</li>' +
      '</ul>' +
      '<p><b>Окончания Genitiv:</b> артикль <b>des / der</b>; мужской и средний род получают <b>-(e)s</b>: <em>des Vertrag<b>s</b>, des Jahr<b>es</b></em>. Прилагательное после артикля всегда <b>-en</b>: <em>aufgrund des schlecht<b>en</b> Wetters</em>. Без артикля прилагательное берёт сильное окончание: <em>innerhalb kurz<b>er</b> Zeit</em>.</p>' +
      '<p>Если Genitiv во множественном числе не виден (нет артикля), используют <b>von + Dativ</b>: <em>innerhalb <b>von</b> zwei Tagen</em>.</p>',
    en: '<p>At B1 you know <em>wegen, trotz, während, statt</em>. B2 adds a whole set of “written” prepositions with the <b>Genitiv</b>. They are common in news, contracts and letters.</p>' +
      '<ul>' +
      '<li><b>Cause:</b> <em>aufgrund</em> (due to), <em>infolge</em> (as a result of), <em>angesichts</em> (in view of), <em>dank</em> (thanks to; also with Dativ).</li>' +
      '<li><b>Place/time:</b> <em>innerhalb, außerhalb, oberhalb, unterhalb, unweit</em>.</li>' +
      '<li><b>Replacement, means:</b> <em>anstelle / statt</em> (instead of), <em>mithilfe</em> (with the help of), <em>anhand</em> (on the basis of).</li>' +
      '<li><b>Topic:</b> <em>bezüglich, hinsichtlich</em> (regarding), <em>laut</em> (according to; usually Dativ).</li>' +
      '</ul>' +
      '<p><b>Genitiv endings:</b> article <b>des / der</b>; masculine and neuter nouns add <b>-(e)s</b>: <em>des Vertrag<b>s</b>, des Jahr<b>es</b></em>. An adjective after the article always ends in <b>-en</b>: <em>aufgrund des schlecht<b>en</b> Wetters</em>. Without an article the adjective takes the strong ending: <em>innerhalb kurz<b>er</b> Zeit</em>.</p>' +
      '<p>When a plural Genitiv would be invisible (no article), use <b>von + Dativ</b>: <em>innerhalb <b>von</b> zwei Tagen</em>.</p>'
  },
  tables: [
    {
      caption: { ru: 'Предлоги и значения', en: 'Prepositions and meanings' },
      head: { ru: ['Предлог', 'Значение', 'Пример'], en: ['Preposition', 'Meaning', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['aufgrund', 'из-за, на основании', 'aufgrund der hohen Nachfrage'],
          ['infolge', 'вследствие', 'infolge des Unfalls'],
          ['angesichts', 'ввиду, перед лицом', 'angesichts der Lage'],
          ['innerhalb', 'в течение, внутри', 'innerhalb einer Woche'],
          ['außerhalb', 'вне', 'außerhalb der Öffnungszeiten'],
          ['anstelle', 'вместо', 'anstelle eines Briefes'],
          ['mithilfe', 'с помощью', 'mithilfe einer App'],
          ['bezüglich', 'относительно', 'bezüglich Ihrer Anfrage']
        ],
        en: [
          ['aufgrund', 'due to', 'aufgrund der hohen Nachfrage'],
          ['infolge', 'as a result of', 'infolge des Unfalls'],
          ['angesichts', 'in view of', 'angesichts der Lage'],
          ['innerhalb', 'within', 'innerhalb einer Woche'],
          ['außerhalb', 'outside', 'außerhalb der Öffnungszeiten'],
          ['anstelle', 'instead of', 'anstelle eines Briefes'],
          ['mithilfe', 'with the help of', 'mithilfe einer App'],
          ['bezüglich', 'regarding', 'bezüglich Ihrer Anfrage']
        ]
      }
    }
  ],
  examples: [
    { de: '[[Aufgrund des]] Streiks fallen heute viele Züge aus.', ru: 'Из-за забастовки сегодня отменено много поездов.', en: 'Due to the strike, many trains are cancelled today.' },
    { de: 'Bitte zahlen Sie [[innerhalb]] von 14 Tagen.', ru: 'Пожалуйста, оплатите в течение 14 дней.', en: 'Please pay within 14 days.' },
    { de: '[[Außerhalb der]] Stadt sind die Mieten günstiger.', ru: 'За городом аренда дешевле.', en: 'Rents are cheaper outside the city.' },
    { de: '[[Bezüglich Ihrer]] Bewerbung melden wir uns nächste Woche.', ru: 'По поводу вашей заявки мы свяжемся с вами на следующей неделе.', en: 'Regarding your application, we’ll be in touch next week.' },
    { de: '[[Mithilfe einer]] Übersetzungs-App verstand ich den Brief.', ru: 'С помощью приложения-переводчика я понял письмо.', en: 'With the help of a translation app I understood the letter.' },
    { de: '[[Angesichts der]] steigenden Preise sparen viele Familien.', ru: 'Ввиду роста цен многие семьи экономят.', en: 'In view of rising prices, many families are saving.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Genitiv м. и ср. рода: -s на существительном', en: 'Masculine/neuter Genitiv: -s on the noun' },
      html: {
        ru: '<span class="wrong">aufgrund des Regen</span> → <span class="right">aufgrund des Regens</span>. Односложные часто -es: <em>des Tages, des Jahres</em>. Женский род без окончания: <em>der Zeit</em>.',
        en: '<span class="wrong">aufgrund des Regen</span> → <span class="right">aufgrund des Regens</span>. One-syllable nouns often take -es: <em>des Tages, des Jahres</em>. Feminine nouns add nothing: <em>der Zeit</em>.'
      }
    },
    {
      title: { ru: 'innerhalb von + число', en: 'innerhalb von + number' },
      html: {
        ru: 'С числом без артикля — <span class="right">innerhalb von drei Tagen</span>; <span class="wrong">innerhalb drei Tage</span> неверно, т. к. Genitiv не виден.',
        en: 'With a bare number use <span class="right">innerhalb von drei Tagen</span>; <span class="wrong">innerhalb drei Tage</span> is wrong because the Genitiv is invisible.'
      }
    },
    {
      title: { ru: 'aufgrund — слитно', en: 'aufgrund is one word' },
      html: {
        ru: 'Пишется <span class="right">aufgrund</span> (вариант <em>auf Grund</em> тоже допустим), но <span class="right">mithilfe</span> / <em>mit Hilfe</em>, <span class="right">anstelle</span> / <em>an Stelle</em>. Главное — Genitiv после них.',
        en: 'Write <span class="right">aufgrund</span> (<em>auf Grund</em> is also allowed), <span class="right">mithilfe</span> / <em>mit Hilfe</em>, <span class="right">anstelle</span> / <em>an Stelle</em>. What matters is the Genitiv after them.'
      }
    }
  ],
  drills: [
    {
      id: 'g-gp-d1', kind: 'choice',
      q: 'Aufgrund ___ Wetters wurde das Konzert abgesagt.',
      options: ['des schlechten', 'dem schlechten', 'das schlechte'],
      answer: 0,
      explain: { ru: 'aufgrund + Genitiv: des schlechten Wetters.', en: 'aufgrund + Genitiv: des schlechten Wetters.' }
    },
    {
      id: 'g-gp-d2', kind: 'gap',
      q: 'Das Paket kommt innerhalb ___ Woche. (eine)',
      answer: 'einer',
      explain: { ru: 'Genitiv ж. р.: einer Woche.', en: 'Feminine Genitiv: einer Woche.' }
    },
    {
      id: 'g-gp-d3', kind: 'choice',
      q: 'Bitte rufen Sie nicht ___ der Sprechzeiten an.',
      options: ['außerhalb', 'innerhalb', 'anhand'],
      answer: 0,
      explain: { ru: '«вне приёмных часов» → außerhalb.', en: '“outside office hours” → außerhalb.' }
    },
    {
      id: 'g-gp-d4', kind: 'gap',
      q: 'Wegen des ___ blieben wir zu Hause. (Sturm)',
      answer: 'Sturms',
      explain: { ru: 'Мужской род в Genitiv получает -s: des Sturms.', en: 'Masculine Genitiv adds -s: des Sturms.' }
    },
    {
      id: 'g-gp-d5', kind: 'choice',
      q: '___ Ihrer Frage zur Rechnung: Der Betrag ist korrekt.',
      options: ['Bezüglich', 'Infolge', 'Außerhalb'],
      answer: 0,
      explain: { ru: '«относительно» → bezüglich.', en: '“regarding” → bezüglich.' }
    },
    {
      id: 'g-gp-d6', kind: 'choice',
      q: 'Bitte antworten Sie innerhalb ___ zehn Tagen.',
      options: ['von', 'der', '—'],
      answer: 0,
      explain: { ru: 'Число без артикля → innerhalb von + Dativ.', en: 'A bare number → innerhalb von + Dativ.' }
    }
  ]
});
