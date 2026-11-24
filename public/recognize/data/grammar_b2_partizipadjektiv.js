/* German GRAMMAR · B2 · Partizip I and II as adjectives: die laufende Woche, das gekochte Ei, der angekommene Zug.
 * The extended (C1) form is in grammar_c1_partizipattribut.js. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'partizip_adj',
  level: 'B2',
  title: { ru: 'Причастия как прилагательные · Partizip I / II', en: 'Participles as adjectives · Partizip I / II' },
  summary: {
    ru: 'kochendes Wasser или gekochtes Ei: Partizip I = «-ющий» (идёт сейчас), Partizip II = «-нный» (уже сделано). Окончания — как у прилагательных.',
    en: 'kochendes Wasser or gekochtes Ei: Partizip I = “-ing” (in progress), Partizip II = “-ed” (done). The endings are normal adjective endings.'
  },
  explanation: {
    ru: '<p>Оба причастия могут стоять перед существительным как обычное прилагательное и получают <b>те же окончания</b> (см. <a href="#/grammar/adjektive">Adjective declension</a>).</p>' +
      '<p><b>Partizip I</b> = инфинитив + <b>-d</b>: <em>laufen → laufend, kochen → kochend, fehlen → fehlend</em>. Действие <b>идёт одновременно</b>, активный смысл, как русское «-ющий / -ящий»: <em>das kochend<b>e</b> Wasser</em> — кипящая вода, <em>die laufend<b>e</b> Woche</em> — текущая неделя, <em>ein schlafend<b>es</b> Kind</em> — спящий ребёнок.</p>' +
      '<p><b>Partizip II</b> — уже знакомая форма Perfekt (<em>gekocht, repariert, verloren</em>):</p>' +
      '<ul>' +
      '<li>у переходных глаголов (с haben) — <b>пассивный, завершённый</b> смысл, как «-нный / -тый»: <em>das gekocht<b>e</b> Ei</em> — варёное яйцо, <em>die repariert<b>e</b> Heizung</em> — отремонтированное отопление;</li>' +
      '<li>у глаголов движения и изменения состояния (с sein) — <b>активный, завершённый</b>: <em>der angekommen<b>e</b> Zug</em> — прибывший поезд, <em>die gestiegen<b>en</b> Preise</em> — выросшие цены.</li>' +
      '</ul>' +
      '<p>Сравните: <em>die steigenden Preise</em> (растущие — процесс идёт) и <em>die gestiegenen Preise</em> (выросшие — уже произошло).</p>' +
      '<p>Причастия можно субстантивировать: <em>der / die Reisende</em> (путешественник), <em>der / die Angestellte</em> (служащий). Длинные причастные обороты (<em>die seit Jahren steigenden Preise</em>) — тема C1: <a href="#/grammar/partizipattribut">Extended participle attributes</a>.</p>',
    en: '<p>Both participles can stand before a noun like any adjective and take <b>the same endings</b> (see <a href="#/grammar/adjektive">Adjective declension</a>).</p>' +
      '<p><b>Partizip I</b> = infinitive + <b>-d</b>: <em>laufen → laufend, kochen → kochend, fehlen → fehlend</em>. It is <b>active and in progress</b>, like English “-ing”: <em>das kochend<b>e</b> Wasser</em> — boiling water, <em>die laufend<b>e</b> Woche</em> — the current week, <em>ein schlafend<b>es</b> Kind</em> — a sleeping child.</p>' +
      '<p><b>Partizip II</b> is the Perfekt form you know (<em>gekocht, repariert, verloren</em>):</p>' +
      '<ul>' +
      '<li>for transitive verbs (haben) it is <b>passive and completed</b>, like “-ed”: <em>das gekocht<b>e</b> Ei</em> — the boiled egg, <em>die repariert<b>e</b> Heizung</em> — the repaired heating;</li>' +
      '<li>for verbs of movement or change (sein) it is <b>active and completed</b>: <em>der angekommen<b>e</b> Zug</em> — the train that has arrived, <em>die gestiegen<b>en</b> Preise</em> — the prices that have risen.</li>' +
      '</ul>' +
      '<p>English often puts participles <b>after</b> the noun (“the documents attached”, “the train arriving”). German puts them <b>before</b> the noun, with an ending: <em>die beigefügten Unterlagen</em>.</p>' +
      '<p>Participles can become nouns: <em>der / die Reisende</em> (traveller), <em>der / die Angestellte</em> (employee). Long participle phrases (<em>die seit Jahren steigenden Preise</em>) are C1: <a href="#/grammar/partizipattribut">Extended participle attributes</a>.</p>'
  },
  tables: [
    {
      caption: { ru: 'Partizip I и Partizip II', en: 'Partizip I and Partizip II' },
      head: { ru: ['Глагол', 'Partizip I (процесс)', 'Partizip II (результат)'], en: ['Verb', 'Partizip I (in progress)', 'Partizip II (completed)'] },
      deCols: [0, 1, 2],
      rows: [
        ['kochen', 'das kochende Wasser', 'das gekochte Ei'],
        ['steigen', 'die steigenden Preise', 'die gestiegenen Preise'],
        ['schlafen', 'das schlafende Kind', '—'],
        ['verlieren', '—', 'die verlorene Brieftasche'],
        ['reparieren', '—', 'das reparierte Auto'],
        ['ankommen', 'die ankommenden Gäste', 'der angekommene Zug']
      ]
    }
  ],
  examples: [
    { de: 'Vorsicht, [[kochendes]] Wasser!', ru: 'Осторожно, кипяток!', en: 'Careful, boiling water!' },
    { de: 'Zum Frühstück gibt es ein [[gekochtes]] Ei.', ru: 'На завтрак варёное яйцо.', en: 'There’s a boiled egg for breakfast.' },
    { de: 'Das besprechen wir noch in der [[laufenden]] Woche.', ru: 'Это мы обсудим ещё на этой неделе.', en: 'We’ll discuss that later this week.' },
    { de: 'Bitte schicken Sie uns die [[fehlenden]] Unterlagen.', ru: 'Пожалуйста, пришлите нам недостающие документы.', en: 'Please send us the missing documents.' },
    { de: 'Die [[gestiegenen]] Mieten sind ein großes Problem.', ru: 'Выросшая арендная плата — большая проблема.', en: 'The increased rents are a big problem.' },
    { de: 'Im Fundbüro liegt eine [[verlorene]] Geldbörse.', ru: 'В бюро находок лежит потерянный кошелёк.', en: 'There’s a lost purse at the lost-property office.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Не забудьте -d у Partizip I', en: 'Don’t forget the -d of Partizip I' },
      html: {
        ru: '<span class="wrong">die laufene Woche</span>, <span class="wrong">das kochene Wasser</span> → <span class="right">die laufende Woche</span>, <span class="right">das kochende Wasser</span>. Partizip I всегда = инфинитив + d + окончание.',
        en: '<span class="wrong">die laufene Woche</span>, <span class="wrong">das kochene Wasser</span> → <span class="right">die laufende Woche</span>, <span class="right">das kochende Wasser</span>. Partizip I is always infinitive + d + ending.'
      }
    },
    {
      title: { ru: 'Окончание обязательно', en: 'The ending is not optional' },
      html: {
        ru: 'Перед существительным причастие склоняется: <span class="wrong">ein gekocht Ei</span> → <span class="right">ein gekochtes Ei</span>; <span class="wrong">mit dem repariert Auto</span> → <span class="right">mit dem reparierten Auto</span>. Без окончания — только после sein: <em>Das Ei ist gekocht.</em>',
        en: 'Before a noun the participle declines: <span class="wrong">ein gekocht Ei</span> → <span class="right">ein gekochtes Ei</span>. English never adds endings, so this is the classic slip. Without an ending only after sein: <em>Das Ei ist gekocht.</em>'
      }
    },
    {
      title: { ru: 'Процесс или результат?', en: '“-ing” is not always Partizip I' },
      html: {
        ru: '«Растущие цены» — <span class="right">steigende Preise</span> (сейчас), «выросшие цены» — <span class="right">gestiegene Preise</span> (уже). Русские причастия совпадают по смыслу — опирайтесь на них.',
        en: 'English “-ing” is also the gerund: “the cooking time” is <span class="right">die Kochzeit</span>, not <span class="wrong">die kochende Zeit</span>. Use Partizip I only for something that is itself doing the action.'
      }
    }
  ],
  drills: [
    {
      id: 'g-padj-d1', kind: 'choice',
      q: 'Vorsicht, ___ Wasser!',
      options: ['kochendes', 'gekochtes', 'kochende'],
      answer: 0,
      explain: { ru: 'Вода кипит сейчас → Partizip I; das Wasser без артикля → -es.', en: 'The water is boiling now → Partizip I; das Wasser with no article → -es.' }
    },
    {
      id: 'g-padj-d2', kind: 'choice',
      q: 'Zum Frühstück esse ich gern ein ___ Ei.',
      options: ['gekochtes', 'kochendes', 'gekochte'],
      answer: 0,
      explain: { ru: 'Яйцо уже сварено (пассив, результат) → Partizip II; ein + ср. р. → -es.', en: 'The egg has been boiled (passive, completed) → Partizip II; ein + neuter → -es.' }
    },
    {
      id: 'g-padj-d3', kind: 'gap',
      q: 'Wir besprechen das noch in der ___ Woche. (laufen, Partizip I)',
      answer: 'laufenden',
      explain: { ru: 'laufen + d = laufend; in der (Dativ ж. р.) → -en.', en: 'laufen + d = laufend; in der (Dativ fem.) → -en.' }
    },
    {
      id: 'g-padj-d4', kind: 'gap',
      q: 'Bitte reichen Sie die ___ Unterlagen bis Freitag nach. (fehlen, Partizip I)',
      answer: 'fehlenden',
      explain: { ru: 'fehlen + d = fehlend; die … Unterlagen (мн. ч. после die) → -en.', en: 'fehlen + d = fehlend; die … Unterlagen (plural after die) → -en.' }
    },
    {
      id: 'g-padj-d5', kind: 'choice',
      q: 'Er hat auf der Straße eine ___ Brieftasche gefunden.',
      options: ['verlorene', 'verlierende', 'verloren'],
      answer: 0,
      explain: { ru: 'Кто-то её потерял → Partizip II verloren; eine + ж. р. Akk → -e.', en: 'Someone lost it → Partizip II verloren; eine + feminine Akk → -e.' }
    },
    {
      id: 'g-padj-d6', kind: 'choice',
      q: 'Die ___ Preise machen vielen Familien Sorgen.',
      options: ['steigenden', 'steigende', 'steigend'],
      answer: 0,
      explain: { ru: 'После die во мн. ч. — слабое окончание -en.', en: 'After plural die — weak ending -en.' }
    },
    {
      id: 'g-padj-d7', kind: 'gap',
      q: 'Die Werkstatt hat uns das ___ Auto heute zurückgebracht. (reparieren, Partizip II)',
      answer: 'reparierte',
      explain: { ru: 'Partizip II repariert; das … Auto в Akk после das → -e.', en: 'Partizip II repariert; das … Auto in the Akk after das → -e.' }
    },
    {
      id: 'g-padj-d8', kind: 'choice',
      q: '„die geschlossene Tür“ bedeutet:',
      options: ['Die Tür ist geschlossen.', 'Die Tür schließt gerade.', 'Die Tür muss geschlossen werden.'],
      answer: 0,
      explain: { ru: 'Partizip II переходного глагола = результат: дверь закрыта.', en: 'Partizip II of a transitive verb = result: the door is closed.' }
    },
    {
      id: 'g-padj-d9', kind: 'choice',
      q: '„der schlafende Hund“ bedeutet:',
      options: ['Der Hund schläft gerade.', 'Der Hund hat geschlafen.', 'Der Hund wird geweckt.'],
      answer: 0,
      explain: { ru: 'Partizip I = действие идёт сейчас: собака спит.', en: 'Partizip I = happening now: the dog is sleeping.' }
    },
    {
      id: 'g-padj-d10', kind: 'gap',
      q: 'Für ___ Gegenstände übernehmen wir keine Haftung. (verlieren, Partizip II)',
      answer: 'verlorene',
      explain: { ru: 'für + Akk, мн. ч. без артикля → сильное окончание -e: verlorene.', en: 'für + Akk, plural with no article → strong ending -e: verlorene.' }
    },
    {
      id: 'g-padj-d11', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Она ищет хорошо оплачиваемую работу».', en: 'Build the sentence. “She is looking for a well-paid job.”' },
      tokens: ['Sie', 'sucht', 'eine', 'gut bezahlte', 'Stelle.'],
      answer: 'Sie sucht eine gut bezahlte Stelle.',
      explain: { ru: 'Причастие стоит между артиклем и существительным: eine gut bezahlte Stelle.', en: 'The participle goes between article and noun: eine gut bezahlte Stelle.' }
    }
  ]
});
