/* German GRAMMAR · B2 · Passive alternatives: sich lassen, -bar / -lich, sein + zu, Zustandspassiv. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'passiversatz',
  level: 'B2',
  title: { ru: 'Замены пассива и Zustandspassiv', en: 'Passive alternatives and the state passive' },
  summary: {
    ru: 'lässt sich lösen, ist lösbar, ist zu lösen, ist gelöst — как сказать «можно / нужно сделать» без werden.',
    en: 'lässt sich lösen, ist lösbar, ist zu lösen, ist gelöst — saying “can / must be done” without werden.'
  },
  explanation: {
    ru: '<p>На B1 вы освоили пассив с <em>werden</em>. На B2 нужны конструкции, которые несут пассивный смысл <b>плюс модальность</b> («можно», «нужно»). Они особенно часты в инструкциях, отчётах и официальных письмах.</p>' +
      '<ul>' +
      '<li><b>sich lassen + инфинитив</b> = можно: <em>Das Problem <b>lässt sich</b> leicht <b>lösen</b>.</em> = <em>kann gelöst werden</em>.</li>' +
      '<li><b>-bar / -lich</b> = можно: <em>Das Problem ist <b>lösbar</b>. Die Schrift ist kaum <b>lesbar</b>. Das ist <b>verständlich</b>.</em></li>' +
      '<li><b>sein + zu + инфинитив</b> = можно <b>или</b> нужно (по контексту): <em>Der Antrag <b>ist</b> bis Freitag <b>einzureichen</b>.</em> (нужно) / <em>Das <b>ist</b> nicht <b>zu ändern</b>.</em> (нельзя)</li>' +
      '<li><b>man</b> — самый разговорный вариант: <em>Man kann das Problem lösen.</em></li>' +
      '</ul>' +
      '<p><b>Zustandspassiv</b> = <b>sein + Partizip II</b> описывает <b>результат</b>, а не процесс: <em>Das Fenster <b>wird</b> geöffnet</em> (кто-то открывает) — <em>Das Fenster <b>ist</b> geöffnet</em> (окно открыто).</p>',
    en: '<p>At B1 you learnt the passive with <em>werden</em>. At B2 you need structures that carry a passive meaning <b>plus a modal one</b> (“can”, “must”). They are common in instructions, reports and official letters.</p>' +
      '<ul>' +
      '<li><b>sich lassen + infinitive</b> = can be: <em>Das Problem <b>lässt sich</b> leicht <b>lösen</b>.</em> = <em>kann gelöst werden</em>.</li>' +
      '<li><b>-bar / -lich</b> = -able: <em>Das Problem ist <b>lösbar</b>. Die Schrift ist kaum <b>lesbar</b>. Das ist <b>verständlich</b>.</em></li>' +
      '<li><b>sein + zu + infinitive</b> = can <b>or</b> must be (context decides): <em>Der Antrag <b>ist</b> bis Freitag <b>einzureichen</b>.</em> (must) / <em>Das <b>ist</b> nicht <b>zu ändern</b>.</em> (can’t)</li>' +
      '<li><b>man</b> — the most colloquial option: <em>Man kann das Problem lösen.</em></li>' +
      '</ul>' +
      '<p>The <b>state passive</b> (Zustandspassiv) = <b>sein + Partizip II</b> describes a <b>result</b>, not a process: <em>Das Fenster <b>wird</b> geöffnet</em> (someone is opening it) vs <em>Das Fenster <b>ist</b> geöffnet</em> (it is open).</p>'
  },
  tables: [
    {
      caption: { ru: 'Одна мысль — пять форм', en: 'One idea, five forms' },
      head: { ru: ['Конструкция', 'Пример', 'Смысл'], en: ['Structure', 'Example', 'Meaning'] },
      deCols: [1],
      rows: {
        ru: [
          ['Passiv + können', 'Der Fehler kann behoben werden.', 'можно'],
          ['sich lassen', 'Der Fehler lässt sich beheben.', 'можно'],
          ['-bar', 'Der Fehler ist behebbar.', 'можно'],
          ['sein + zu', 'Der Fehler ist zu beheben.', 'можно / нужно'],
          ['Zustandspassiv', 'Der Fehler ist behoben.', 'результат: исправлен']
        ],
        en: [
          ['Passive + können', 'Der Fehler kann behoben werden.', 'can'],
          ['sich lassen', 'Der Fehler lässt sich beheben.', 'can'],
          ['-bar', 'Der Fehler ist behebbar.', 'can'],
          ['sein + zu', 'Der Fehler ist zu beheben.', 'can / must'],
          ['State passive', 'Der Fehler ist behoben.', 'result: fixed']
        ]
      }
    }
  ],
  examples: [
    { de: 'Die Datei [[lässt sich]] nicht [[öffnen]].', ru: 'Файл не открывается.', en: 'The file can’t be opened.' },
    { de: 'Diese Flaschen sind nicht [[recycelbar]].', ru: 'Эти бутылки нельзя переработать.', en: 'These bottles aren’t recyclable.' },
    { de: 'Die Gebühr [[ist]] vor dem Termin [[zu bezahlen]].', ru: 'Пошлину нужно оплатить до приёма.', en: 'The fee must be paid before the appointment.' },
    { de: 'Sein Verhalten ist kaum [[zu erklären]].', ru: 'Его поведение трудно объяснить.', en: 'His behaviour is hard to explain.' },
    { de: 'Keine Sorge, die Tür [[ist]] schon [[abgeschlossen]].', ru: 'Не волнуйся, дверь уже заперта.', en: 'Don’t worry, the door is already locked.' },
    { de: 'Das [[lässt sich]] nicht mehr [[ändern]].', ru: 'Это уже не изменить.', en: 'That can’t be changed any more.' }
  ],
  pitfalls: [
    {
      title: { ru: 'sich lassen: возвратное обязательно', en: 'sich lassen needs the sich' },
      html: {
        ru: '<span class="wrong">Das Fenster lässt öffnen.</span> → <span class="right">Das Fenster lässt sich öffnen.</span> Без sich значение другое: <em>Ich lasse das Fenster öffnen</em> — «я велю открыть окно».',
        en: '<span class="wrong">Das Fenster lässt öffnen.</span> → <span class="right">Das Fenster lässt sich öffnen.</span> Without sich it means something else: <em>Ich lasse das Fenster öffnen</em> — “I have the window opened”.'
      }
    },
    {
      title: { ru: 'sein + zu: zu внутри отделяемого глагола', en: 'sein + zu: zu goes inside separable verbs' },
      html: {
        ru: 'У отделяемых глаголов zu встаёт между приставкой и корнем: <span class="right">einzureichen, auszufüllen, anzumelden</span>, не <span class="wrong">zu einreichen</span>.',
        en: 'With separable verbs zu goes between prefix and stem: <span class="right">einzureichen, auszufüllen, anzumelden</span>, not <span class="wrong">zu einreichen</span>.'
      }
    },
    {
      title: { ru: 'ist geöffnet ≠ wurde geöffnet', en: 'ist geöffnet ≠ wurde geöffnet' },
      html: {
        ru: '<span class="right">Das Geschäft ist geöffnet</span> — магазин открыт (состояние). <span class="right">Das Geschäft wird um 9 Uhr geöffnet</span> — магазин открывают в 9 (процесс). Русское «был открыт» может означать и то, и другое: <em>war geöffnet</em> (состояние) или <em>wurde geöffnet</em> (событие).',
        en: '<span class="right">Das Geschäft ist geöffnet</span> — the shop is open (state). <span class="right">Das Geschäft wird um 9 Uhr geöffnet</span> — the shop is opened at 9 (process). English “was opened” can mean either: <em>war geöffnet</em> (state) or <em>wurde geöffnet</em> (event).'
      }
    }
  ],
  drills: [
    {
      id: 'g-pe-d1', kind: 'choice',
      q: 'Das Problem ___ sich leider nicht schnell lösen.',
      options: ['lässt', 'ist', 'wird'],
      answer: 0,
      explain: { ru: 'sich lassen + инфинитив = можно.', en: 'sich lassen + infinitive = can be.' }
    },
    {
      id: 'g-pe-d2', kind: 'gap',
      q: 'Das Formular ist bis Montag ___. (ausfüllen, sein + zu)',
      answer: 'auszufüllen',
      explain: { ru: 'Отделяемый глагол: aus + zu + füllen.', en: 'Separable verb: aus + zu + füllen.' }
    },
    {
      id: 'g-pe-d3', kind: 'gap',
      q: 'Kann man das Wasser trinken? — Ja, es ist ___. (trinken + -bar)',
      answer: 'trinkbar',
      explain: { ru: 'Основа + -bar: trinkbar.', en: 'Stem + -bar: trinkbar.' }
    },
    {
      id: 'g-pe-d4', kind: 'choice',
      q: 'Komm rein, die Tür ___ schon aufgeschlossen — das habe ich vorhin gemacht.',
      options: ['ist', 'wird', 'lässt'],
      answer: 0,
      explain: { ru: 'Результат действия → Zustandspassiv: ist aufgeschlossen.', en: 'The result of an action → state passive: ist aufgeschlossen.' }
    },
    {
      id: 'g-pe-d5', kind: 'choice',
      q: '„Die Ergebnisse sind kaum zu glauben.“ bedeutet:',
      options: ['Man kann sie kaum glauben.', 'Man muss sie glauben.', 'Sie werden gerade geglaubt.'],
      answer: 0,
      explain: { ru: 'kaum + sein zu → «едва можно».', en: 'kaum + sein zu → “can hardly”.' }
    },
    {
      id: 'g-pe-d6', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Это уже не изменить».', en: 'Build the sentence. “That can’t be changed any more.”' },
      tokens: ['Das', 'lässt', 'sich', 'nicht', 'mehr', 'ändern.'],
      answer: 'Das lässt sich nicht mehr ändern.',
      explain: { ru: 'lässt — на 2-м месте, инфинитив в конце.', en: 'lässt in position 2, infinitive at the end.' }
    }
  ]
});
