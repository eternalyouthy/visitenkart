/* German GRAMMAR · B2 · Nominal style: verb ↔ noun, clause ↔ prepositional phrase, Nomen-Verb-Verbindungen.
 * Explanations ru + en inline. */
GT.registerGrammar({
  id: 'nominalstil',
  level: 'B2',
  title: { ru: 'Номинальный стиль и Nomen-Verb-Verbindungen', en: 'Nominal style and noun–verb collocations' },
  summary: {
    ru: 'weil es regnet → wegen des Regens; entscheiden → eine Entscheidung treffen. Язык писем, отчётов и экзамена B2.',
    en: 'weil es regnet → wegen des Regens; entscheiden → eine Entscheidung treffen. The language of letters, reports and the B2 exam.'
  },
  explanation: {
    ru: '<p>Устная речь — <b>глагольный стиль</b> (придаточные). Официальные тексты — <b>номинальный</b>: придаточное сжимается в предложную группу с существительным.</p>' +
      '<ul>' +
      '<li><b>weil / da</b> → <b>wegen / aufgrund + Gen.</b>: <em>weil die Kosten steigen → wegen der steigenden Kosten</em></li>' +
      '<li><b>wenn / falls</b> → <b>bei + Dat.</b>: <em>wenn es regnet → bei Regen</em></li>' +
      '<li><b>als / während</b> → <b>bei / während</b>: <em>während er studierte → während seines Studiums</em></li>' +
      '<li><b>nachdem / bevor</b> → <b>nach / vor + Dat.</b>: <em>nachdem er angekommen war → nach seiner Ankunft</em></li>' +
      '<li><b>obwohl</b> → <b>trotz + Gen.</b>; <b>damit / um … zu</b> → <b>zur / zum + Nomen</b>: <em>um Energie zu sparen → zum Energiesparen</em></li>' +
      '</ul>' +
      '<p>Подлежащее превращается в Genitiv или притяжательное: <em>der Zug kommt an → die Ankunft <b>des Zuges</b> / <b>seine</b> Ankunft</em>. Дополнение — тоже в Genitiv: <em>Daten analysieren → die Analyse <b>der Daten</b></em>.</p>' +
      '<p><b>Nomen-Verb-Verbindungen</b> — устойчивые пары, где смысл несёт существительное: <em>eine Entscheidung treffen</em> (решить), <em>in Frage kommen</em>, <em>zur Verfügung stellen</em>, <em>Kritik üben</em>. Их надо учить целиком — глагол не переводится по отдельности.</p>',
    en: '<p>Speech uses <b>verbal style</b> (clauses). Official texts use <b>nominal style</b>: the clause is compressed into a prepositional phrase built around a noun.</p>' +
      '<ul>' +
      '<li><b>weil / da</b> → <b>wegen / aufgrund + Gen.</b>: <em>weil die Kosten steigen → wegen der steigenden Kosten</em></li>' +
      '<li><b>wenn / falls</b> → <b>bei + Dat.</b>: <em>wenn es regnet → bei Regen</em></li>' +
      '<li><b>als / während</b> → <b>bei / während</b>: <em>während er studierte → während seines Studiums</em></li>' +
      '<li><b>nachdem / bevor</b> → <b>nach / vor + Dat.</b>: <em>nachdem er angekommen war → nach seiner Ankunft</em></li>' +
      '<li><b>obwohl</b> → <b>trotz + Gen.</b>; <b>damit / um … zu</b> → <b>zur / zum + noun</b>: <em>um Energie zu sparen → zum Energiesparen</em></li>' +
      '</ul>' +
      '<p>The subject becomes a Genitiv or possessive: <em>der Zug kommt an → die Ankunft <b>des Zuges</b> / <b>seine</b> Ankunft</em>. The object goes into the Genitiv too: <em>Daten analysieren → die Analyse <b>der Daten</b></em>.</p>' +
      '<p><b>Noun–verb collocations</b> (Nomen-Verb-Verbindungen) are fixed pairs where the noun carries the meaning: <em>eine Entscheidung treffen</em> (to make a decision), <em>in Frage kommen</em>, <em>zur Verfügung stellen</em>, <em>Kritik üben</em>. Learn them as chunks — the verb can’t be translated on its own.</p>'
  },
  tables: [
    {
      caption: { ru: 'Глагольный ↔ номинальный стиль', en: 'Verbal ↔ nominal style' },
      head: { ru: ['Глагольный', 'Номинальный'], en: ['Verbal', 'Nominal'] },
      deCols: [0, 1],
      rows: [
        ['Weil das Wetter schlecht war, …', 'Wegen des schlechten Wetters …'],
        ['Wenn man die Maschine benutzt, …', 'Bei der Benutzung der Maschine …'],
        ['Nachdem er das Studium beendet hatte, …', 'Nach dem Ende seines Studiums …'],
        ['Obwohl es Probleme gab, …', 'Trotz der Probleme …'],
        ['Um die Qualität zu verbessern, …', 'Zur Verbesserung der Qualität …']
      ]
    },
    {
      caption: { ru: 'Частые Nomen-Verb-Verbindungen', en: 'Common noun–verb collocations' },
      head: { ru: ['Сочетание', 'Значение'], en: ['Collocation', 'Meaning'] },
      deCols: [0],
      rows: {
        ru: [
          ['eine Entscheidung treffen', 'принять решение'],
          ['in Frage kommen', 'подходить, рассматриваться'],
          ['zur Verfügung stehen / stellen', 'быть / предоставить в распоряжение'],
          ['Rücksicht nehmen auf', 'считаться с'],
          ['in Kraft treten', 'вступить в силу'],
          ['einen Antrag stellen', 'подать заявление'],
          ['Kritik üben an', 'критиковать']
        ],
        en: [
          ['eine Entscheidung treffen', 'make a decision'],
          ['in Frage kommen', 'be an option'],
          ['zur Verfügung stehen / stellen', 'be available / provide'],
          ['Rücksicht nehmen auf', 'show consideration for'],
          ['in Kraft treten', 'come into force'],
          ['einen Antrag stellen', 'submit an application'],
          ['Kritik üben an', 'criticise']
        ]
      }
    }
  ],
  examples: [
    { de: '[[Wegen]] des starken Verkehrs kam ich zu spät.', ru: 'Из-за сильного движения я опоздал.', en: 'Because of the heavy traffic I was late.' },
    { de: '[[Bei]] Fragen wenden Sie sich bitte an die Rezeption.', ru: 'Если возникнут вопросы, обращайтесь на ресепшен.', en: 'If you have any questions, please contact reception.' },
    { de: '[[Nach]] der Einführung des neuen Systems sanken die Kosten.', ru: 'После внедрения новой системы расходы снизились.', en: 'After the new system was introduced, costs fell.' },
    { de: 'Wir müssen bis Freitag eine [[Entscheidung treffen]].', ru: 'Мы должны принять решение до пятницы.', en: 'We have to make a decision by Friday.' },
    { de: 'Das neue Gesetz [[tritt]] im Januar [[in Kraft]].', ru: 'Новый закон вступает в силу в январе.', en: 'The new law comes into force in January.' },
    { de: 'Die Firma [[stellt]] uns die Räume kostenlos [[zur Verfügung]].', ru: 'Компания бесплатно предоставляет нам помещения.', en: 'The company provides us with the rooms free of charge.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Не переводите глагол дословно', en: 'Don’t translate the verb word for word' },
      html: {
        ru: '«принять решение» — <span class="right">eine Entscheidung treffen</span>, не <span class="wrong">eine Entscheidung nehmen</span>. «Задать вопрос» — <span class="right">eine Frage stellen</span>, не <span class="wrong">fragen geben</span>.',
        en: '“make a decision” is <span class="right">eine Entscheidung treffen</span>, not <span class="wrong">eine Entscheidung machen</span>. “Ask a question” is <span class="right">eine Frage stellen</span>.'
      }
    },
    {
      title: { ru: 'Подлежащее → Genitiv', en: 'Subject → Genitiv' },
      html: {
        ru: '<em>Die Preise steigen</em> → <span class="right">der Anstieg der Preise</span>, не <span class="wrong">der Anstieg von die Preise</span>. Без артикля можно <span class="right">von + Dativ</span>: <em>der Anstieg von Preisen</em>.',
        en: '<em>Die Preise steigen</em> → <span class="right">der Anstieg der Preise</span>, not <span class="wrong">der Anstieg von die Preise</span>. Without an article use <span class="right">von + Dativ</span>: <em>der Anstieg von Preisen</em>.'
      }
    },
    {
      title: { ru: 'Не перегружайте', en: 'Don’t overdo it' },
      html: {
        ru: 'Номинальный стиль уместен в письме и отчёте, но в разговоре звучит канцелярски. <span class="wrong">Nach erfolgter Durchführung der Reinigung …</span> → <span class="right">Nachdem wir sauber gemacht haben, …</span>',
        en: 'Nominal style suits letters and reports but sounds bureaucratic in speech. <span class="wrong">Nach erfolgter Durchführung der Reinigung …</span> → <span class="right">Nachdem wir sauber gemacht haben, …</span>'
      }
    }
  ],
  drills: [
    {
      id: 'g-nst-d1', kind: 'choice',
      q: 'Weil es Probleme mit dem Server gab, … → ___ der Probleme mit dem Server …',
      options: ['Wegen', 'Trotz', 'Bei'],
      answer: 0,
      explain: { ru: 'weil → wegen + Genitiv.', en: 'weil → wegen + Genitiv.' }
    },
    {
      id: 'g-nst-d2', kind: 'choice',
      q: 'Obwohl es regnete, … → ___ des Regens …',
      options: ['Wegen', 'Trotz', 'Nach'],
      answer: 1,
      explain: { ru: 'obwohl → trotz.', en: 'obwohl → trotz.' }
    },
    {
      id: 'g-nst-d3', kind: 'gap',
      q: 'Wir müssen heute noch eine Entscheidung ___.',
      answer: 'treffen',
      explain: { ru: 'eine Entscheidung treffen — устойчивое сочетание.', en: 'eine Entscheidung treffen is a fixed collocation.' }
    },
    {
      id: 'g-nst-d4', kind: 'gap',
      q: 'Um die Qualität zu sichern, … → ___ Sicherung der Qualität …',
      hint: { ru: 'zu + der, слитно.', en: 'zu + der, contracted.' },
      answer: 'Zur',
      explain: { ru: 'Цель → zur / zum + существительное.', en: 'Purpose → zur / zum + noun.' }
    },
    {
      id: 'g-nst-d5', kind: 'choice',
      q: 'Welche Lösung ___ für uns in Frage?',
      options: ['kommt', 'steht', 'nimmt'],
      answer: 0,
      explain: { ru: 'in Frage kommen.', en: 'in Frage kommen.' }
    },
    {
      id: 'g-nst-d6', kind: 'choice',
      q: 'Nachdem er angekommen war, … → Nach ___ …',
      options: ['seiner Ankunft', 'seine Ankunft', 'sein Ankommen war'],
      answer: 0,
      explain: { ru: 'nach + Dativ: nach seiner Ankunft.', en: 'nach + Dativ: nach seiner Ankunft.' }
    }
  ]
});
