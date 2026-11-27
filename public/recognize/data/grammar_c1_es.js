/* German GRAMMAR · C1 · Uses of "es": impersonal subject, placeholder (Vorfeld-es), correlate (es … dass), fixed phrases.
 * Explanations ru + en inline. */
GT.registerGrammar({
  id: 'es_gebrauch',
  level: 'C1',
  title: { ru: 'Употребление es', en: 'The many uses of es' },
  summary: {
    ru: 'Es regnet. Es kamen viele Gäste. Ich finde es gut, dass… — когда es обязателен, а когда исчезает.',
    en: 'Es regnet. Es kamen viele Gäste. Ich finde es gut, dass… — when es is required and when it disappears.'
  },
  explanation: {
    ru: '<p>У <em>es</em> несколько разных функций. Главное на C1 — понимать, <b>когда es пропадает</b> при перестановке слов.</p>' +
      '<ul>' +
      '<li><b>Безличное подлежащее</b> — всегда остаётся: погода и время (<em>Es regnet. Es ist spät.</em>), устойчивые выражения (<em>Es gibt…, Es geht mir gut, Es handelt sich um…, Es kommt darauf an</em>). <em>Heute regnet <b>es</b>.</em></li>' +
      '<li><b>Заполнитель первого места</b> (Platzhalter-es) — когда настоящее подлежащее хотят поставить ближе к концу (как новое). Глагол согласуется с настоящим подлежащим. <b>Исчезает</b>, если первое место занято чем-то другим: <em><b>Es</b> warten draußen drei Leute.</em> → <em>Draußen warten drei Leute.</em></li>' +
      '<li><b>Коррелят</b> — указывает вперёд на придаточное или инфинитив: <em>Ich finde <b>es</b> wichtig, dass du kommst.</em> <em><b>Es</b> freut mich, dich zu sehen.</em> Если придаточное стоит первым, es обычно исчезает: <em>Dass du kommst, finde ich wichtig.</em></li>' +
      '<li><b>Безличный пассив</b>: <em><b>Es</b> wird hier nicht geraucht.</em> → <em>Hier wird nicht geraucht.</em></li>' +
      '</ul>',
    en: '<p><em>es</em> has several different jobs. The key C1 point is knowing <b>when es disappears</b> if you reorder the sentence.</p>' +
      '<ul>' +
      '<li><b>Impersonal subject</b> — always stays: weather and time (<em>Es regnet. Es ist spät.</em>), fixed phrases (<em>Es gibt…, Es geht mir gut, Es handelt sich um…, Es kommt darauf an</em>). <em>Heute regnet <b>es</b>.</em></li>' +
      '<li><b>Placeholder in position 1</b> (Platzhalter-es) — used to push the real subject towards the end (as new information), like English “there”. The verb agrees with the real subject. It <b>disappears</b> when something else takes position 1: <em><b>Es</b> warten draußen drei Leute.</em> → <em>Draußen warten drei Leute.</em></li>' +
      '<li><b>Correlate</b> — points ahead to a clause or infinitive, like English “it”: <em>Ich finde <b>es</b> wichtig, dass du kommst.</em> <em><b>Es</b> freut mich, dich zu sehen.</em> If the clause comes first, es usually disappears: <em>Dass du kommst, finde ich wichtig.</em></li>' +
      '<li><b>Impersonal passive</b>: <em><b>Es</b> wird hier nicht geraucht.</em> → <em>Hier wird nicht geraucht.</em></li>' +
      '</ul>'
  },
  tables: [
    {
      caption: { ru: 'Остаётся или исчезает', en: 'Stays or disappears' },
      head: { ru: ['Тип', 'es на 1-м месте', 'Другое на 1-м месте'], en: ['Type', 'es in position 1', 'Something else in position 1'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['безличное подлежащее', 'Es schneit seit Tagen.', 'Seit Tagen schneit es.'],
          ['заполнитель', 'Es fehlen noch zwei Unterlagen.', 'Noch fehlen zwei Unterlagen.'],
          ['безличный пассив', 'Es wird viel gelacht.', 'Bei uns wird viel gelacht.'],
          ['коррелят', 'Es ist schade, dass du gehst.', 'Schade ist (es), dass du gehst.']
        ],
        en: [
          ['impersonal subject', 'Es schneit seit Tagen.', 'Seit Tagen schneit es.'],
          ['placeholder', 'Es fehlen noch zwei Unterlagen.', 'Noch fehlen zwei Unterlagen.'],
          ['impersonal passive', 'Es wird viel gelacht.', 'Bei uns wird viel gelacht.'],
          ['correlate', 'Es ist schade, dass du gehst.', 'Schade ist (es), dass du gehst.']
        ]
      }
    }
  ],
  examples: [
    { de: '[[Es]] kamen mehr Gäste als erwartet.', ru: 'Пришло больше гостей, чем ожидалось.', en: 'More guests came than expected.' },
    { de: 'Gestern kamen mehr Gäste als erwartet.', ru: 'Вчера пришло больше гостей, чем ожидалось.', en: 'Yesterday more guests came than expected.' },
    { de: 'Ich halte [[es]] für sinnvoll, früher anzufangen.', ru: 'Я считаю разумным начать раньше.', en: 'I think it makes sense to start earlier.' },
    { de: 'In dem Artikel handelt [[es]] sich um Datenschutz.', ru: 'В статье речь идёт о защите данных.', en: 'The article is about data protection.' },
    { de: 'Mir geht [[es]] heute viel besser.', ru: 'Мне сегодня намного лучше.', en: 'I feel much better today.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Глагол — по настоящему подлежащему', en: 'The verb agrees with the real subject' },
      html: {
        ru: '<span class="wrong">Es wartet drei Leute draußen.</span> → <span class="right">Es warten drei Leute draußen.</span>',
        en: '<span class="wrong">Es wartet drei Leute draußen.</span> → <span class="right">Es warten drei Leute draußen.</span> Compare English “There are three people…”.'
      }
    },
    {
      title: { ru: 'es gibt не исчезает', en: 'es gibt never drops es' },
      html: {
        ru: '<span class="wrong">Hier gibt viele Cafés.</span> → <span class="right">Hier gibt es viele Cafés.</span> Это безличное подлежащее, а не заполнитель.',
        en: '<span class="wrong">Hier gibt viele Cafés.</span> → <span class="right">Hier gibt es viele Cafés.</span> This is an impersonal subject, not a placeholder.'
      }
    }
  ],
  drills: [
    {
      id: 'g-es-d1', kind: 'choice',
      q: 'Im Park ___ viele Kinder.',
      options: ['spielen', 'spielen es', 'spielt es'],
      answer: 0,
      explain: { ru: 'Заполнитель es исчезает, если 1-е место занято (Im Park).', en: 'The placeholder es disappears when position 1 is taken (Im Park).' }
    },
    {
      id: 'g-es-d2', kind: 'choice',
      q: 'In der Altstadt gibt ___ viele kleine Läden.',
      options: ['es', '—', 'sie'],
      answer: 0,
      explain: { ru: 'es gibt — es всегда остаётся.', en: 'es gibt — es always stays.' }
    },
    {
      id: 'g-es-d3', kind: 'choice',
      q: '___ fehlen noch zwei Unterschriften.',
      options: ['Es', 'Sie', 'Das'],
      answer: 0,
      explain: { ru: 'Заполнитель на 1-м месте; глагол fehlen — по Unterschriften.', en: 'Placeholder in position 1; fehlen agrees with Unterschriften.' }
    },
    {
      id: 'g-es-d4', kind: 'choice',
      q: 'Dass du so schnell geantwortet hast, freut ___ sehr.',
      options: ['mich', 'es mich', 'mich es'],
      answer: 0,
      explain: { ru: 'Придаточное уже на 1-м месте → коррелят es не нужен.', en: 'The clause is already in position 1 → no correlate es.' }
    },
    {
      id: 'g-es-d5', kind: 'gap',
      q: 'Bei der Besprechung handelte ___ sich um das neue Budget.',
      answer: 'es',
      explain: { ru: 'Es handelt sich um — es всегда остаётся.', en: 'Es handelt sich um — es always stays.' }
    }
  ]
});

/* === Content expansion 2026-11-27 (+5 C1 & +1 B2 DE grammar lessons) === */
(function () {
  var cfg = GT.packs.de && GT.packs.de.config;
  var topics = cfg && cfg.TOPICS && cfg.TOPICS.grammar;
  function addTopic(id, name, level) {
    if (topics && !topics.some(function (t) { return t.id === id; })) {
      topics.push({ id: id, name: name, level: level, group: 'Grammar topics' });
    }
  }

  // 1. C1: Funktionsverbgefüge
  addTopic('funktionsverbgefuege', 'Noun-verb collocations · C1', 'C1');
  GT.registerGrammar({
    id: 'funktionsverbgefuege',
    level: 'C1',
    title: { ru: 'Устойчивые глагольно-именные сочетания (Funktionsverbgefüge)', en: 'Noun-verb collocations (Funktionsverbgefüge)' },
    summary: {
      ru: 'eine Entscheidung treffen, in Betracht ziehen, zur Verfügung stehen — официальная, точная речь на уровне C1.',
      en: 'eine Entscheidung treffen, in Betracht ziehen, zur Verfügung stehen — formal and precise C1 German.'
    },
    explanation: {
      ru: '<p><b>Funktionsverbgefüge (FVG)</b> — сочетание глагола с ослабленным значением (<em>treffen, stellen, stehen, kommen, ziehen, nehmen</em>) и отглагольного существительного. Смысл несёт существительное, а глагол задаёт грамматику и аспект (начало, состояние, каузацию).</p>' +
        '<ul>' +
        '<li><b>Значение результата / действия</b>: <em>eine Entscheidung treffen</em> (= entscheiden), <em>einen Antrag stellen</em> (= beantragen), <em>Kritik üben an + Dat.</em> (= kritisieren).</li>' +
        '<li><b>Активное vs. пассивное значение</b>: <em>zur Verfügung stellen</em> (предоставлять) ↔ <em>zur Verfügung stehen</em> (быть в распоряжении); <em>in Gang setzen</em> ↔ <em>in Gang kommen</em>.</li>' +
        '<li><b>Ограничение артикля</b>: предложные FVG почти всегда сливаются без артикля или со стянутым предлогом (<em>in Frage kommen, zum Abschluss bringen</em>). Существительное с определением может требовать неопределённого артикля: <em>eine kluge Entscheidung treffen</em>.</li>' +
        '</ul>',
      en: '<p>A <b>Funktionsverbgefüge (FVG)</b> pairs a semantically bleached verb (<em>treffen, stellen, stehen, kommen, ziehen, nehmen</em>) with a verbal noun. The noun carries the core meaning while the verb expresses grammar and aspect (cause, state, start).</p>' +
        '<ul>' +
        '<li><b>Action equivalents</b>: <em>eine Entscheidung treffen</em> (= entscheiden), <em>einen Antrag stellen</em> (= beantragen), <em>Kritik üben an + Dat.</em> (= kritisieren).</li>' +
        '<li><b>Active vs. passive-like pairs</b>: <em>zur Verfügung stellen</em> (provide) ↔ <em>zur Verfügung stehen</em> (be available); <em>in Gang setzen</em> ↔ <em>in Gang kommen</em>.</li>' +
        '<li><b>Article rule</b>: prepositional FVGs drop the article or fuse it (<em>in Frage kommen, zum Abschluss bringen</em>). Adding an adjective restores an article where applicable: <em>eine kluge Entscheidung treffen</em>.</li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Частые пары FVG и простые глаголы', en: 'High-frequency FVG pairs and plain verbs' },
      head: { ru: ['Funktionsverbgefüge', 'Простой глагол', 'Оттенок'], en: ['Funktionsverbgefüge', 'Plain verb', 'Nuance'] },
      deCols: [0, 1],
      rows: {
        ru: [
          ['eine Entscheidung treffen', 'entscheiden', 'официальнее, выражает завершённый акт'],
          ['in Betracht ziehen', 'erwägen / bedenken', 'рассматривать как вариант'],
          ['in Frage kommen', 'möglich sein', 'подходить, рассматриваться'],
          ['Bezug nehmen auf + Akk.', 'sich beziehen auf', 'ссылаться (в письме / отчёте)'],
          ['zur Verfügung stehen', 'verfügbar sein', 'иметься в распоряжении'],
          ['Rücksicht nehmen auf + Akk.', 'berücksichtigen', 'принимать во внимание, щадить']
        ],
        en: [
          ['eine Entscheidung treffen', 'entscheiden', 'more formal; stresses a definite act'],
          ['in Betracht ziehen', 'erwägen / bedenken', 'to consider as an option'],
          ['in Frage kommen', 'möglich sein', 'to be viable / out of the question'],
          ['Bezug nehmen auf + Akk.', 'sich beziehen auf', 'to refer back to (emails/reports)'],
          ['zur Verfügung stehen', 'verfügbar sein', 'to be at someone’s disposal'],
          ['Rücksicht nehmen auf + Akk.', 'berücksichtigen', 'to show consideration for']
        ]
      }
    }],
    examples: [
      { de: 'Wir müssen bis Freitag [[eine Entscheidung treffen]].', ru: 'Мы должны принять решение до пятницы.', en: 'We have to make a decision by Friday.' },
      { de: 'Diese Lösung kommt für uns leider nicht [[in Frage]].', ru: 'Это решение нам, к сожалению, не подходит.', en: 'Unfortunately, this solution is out of the question for us.' },
      { de: 'Ich [[nehme Bezug auf]] Ihre E-Mail vom 12. Mai.', ru: 'Я ссылаюсь на ваше письмо от 12 мая.', en: 'I am referring to your email of 12 May.' },
      { de: 'Für Rückfragen [[stehe]] ich Ihnen gern [[zur Verfügung]].', ru: 'По всем вопросам я с радостью в вашем распоряжении.', en: 'I am happy to be at your disposal for any follow-up questions.' }
    ],
    pitfalls: [
      {
        title: { ru: 'Нельзя заменять глагол произвольно', en: 'Verb choice is fixed' },
        html: {
          ru: '<span class="wrong">eine Entscheidung machen</span> → <span class="right">eine Entscheidung treffen</span>. Глагол в FVG фиксирован словарём.',
          en: '<span class="wrong">eine Entscheidung machen</span> → <span class="right">eine Entscheidung treffen</span>. The functional verb is lexically fixed.'
        }
      },
      {
        title: { ru: 'Отрицание nicht в конце перед инфинитивом/предлогом', en: 'Negation stays before the FVG noun/phrase' },
        html: {
          ru: '<span class="right">Das kommt nicht in Frage.</span> (nicht перед предложным оборотом), но <span class="right">Wir treffen keine Entscheidung.</span>',
          en: '<span class="right">Das kommt nicht in Frage.</span> (nicht precedes the prepositional phrase), whereas <span class="right">Wir treffen keine Entscheidung.</span>'
        }
      }
    ],
    drills: [
      { id: 'de-g-x27-fvg-1', kind: 'choice', q: 'Ich möchte eine wichtige Entscheidung ___.', options: ['treffen', 'machen', 'geben'], answer: 0, explain: { ru: 'Устойчивое сочетание — eine Entscheidung treffen.', en: 'The fixed collocation is eine Entscheidung treffen.' } },
      { id: 'de-g-x27-fvg-2', kind: 'choice', q: 'Für weitere Auskünfte ___ wir Ihnen jederzeit zur Verfügung.', options: ['stehen', 'stellen', 'liegen'], answer: 0, explain: { ru: 'Быть в распоряжении (состояние) → zur Verfügung stehen.', en: 'Being available (state) uses zur Verfügung stehen.' } },
      { id: 'de-g-x27-fvg-3', kind: 'choice', q: 'Man sollte diese Alternative ernsthaft in Betracht ___.', options: ['ziehen', 'nehmen', 'bringen'], answer: 0, explain: { ru: 'Рассматривать вариант → in Betracht ziehen.', en: 'To consider an option → in Betracht ziehen.' } },
      { id: 'de-g-x27-fvg-4', kind: 'gap', q: 'Bei der Planung müssen wir Rücksicht ___ die Anwohner nehmen.', answer: 'auf', explain: { ru: 'Rücksicht nehmen требует предлога auf + Akkusativ.', en: 'Rücksicht nehmen takes auf + accusative.' } },
      { id: 'de-g-x27-fvg-5', kind: 'choice', q: 'Mit diesem Schreiben nehme ich Bezug ___ unser Telefonat.', options: ['auf', 'an', 'über'], answer: 0, explain: { ru: 'Bezug nehmen всегда сочетается с auf + Akk.', en: 'Bezug nehmen always pairs with auf + accusative.' } },
      { id: 'de-g-x27-fvg-6', kind: 'gap', q: 'Ein späterer Liefertermin kommt für den Kunden nicht in ___.', answer: 'Frage', explain: { ru: 'Неподходящий вариант → nicht in Frage kommen.', en: 'Out of the question → nicht in Frage kommen.' } },
      { id: 'de-g-x27-fvg-7', kind: 'choice', q: 'Die neue Regelung tritt am 1. Januar in ___.', options: ['Kraft', 'Geltung', 'Macht'], answer: 0, explain: { ru: 'Вступать в силу (о законе/договоре) → in Kraft treten.', en: 'Enter into force → in Kraft treten.' } },
      { id: 'de-g-x27-fvg-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Проект наконец запускается в работу».', en: 'Build: “The project is finally getting underway.”' }, tokens: ['Das Projekt', 'kommt', 'endlich', 'in Gang.'], answer: 'Das Projekt kommt endlich in Gang.', explain: { ru: 'in Gang kommen — приходить в движение, запускаться.', en: 'in Gang kommen means to get underway.' } }
    ]
  });

  // 2. C1: Subjektive Modalverben
  addTopic('subjektive_modalverben', 'Subjective modal verbs · C1', 'C1');
  GT.registerGrammar({
    id: 'subjektive_modalverben',
    level: 'C1',
    title: { ru: 'Субъективное значение модальных глаголов', en: 'Subjective (epistemic) modal verbs' },
    summary: {
      ru: 'muss, dürfte, könnte, mag, soll, will + Infinitiv I / II — степень уверенности говорящего и передача чужих слов.',
      en: 'muss, dürfte, könnte, mag, soll, will + Infinitiv I / II — speaker certainty and reported claims.'
    },
    explanation: {
      ru: '<p>В <b>субъективном значении</b> модальный глагол оценивает вероятность факта (для настоящего — с <b>Infinitiv I</b>, для прошлого — с <b>Infinitiv II</b>: <em>Partizip II + haben/sein</em>).</p>' +
        '<ul>' +
        '<li><b>Шкала вероятности</b>: <em>muss</em> (~95%: наверняка) → <em>müsste</em> (~80%) → <em>dürfte</em> (~75%: по всей видимости, используется только в Konjunktiv II!) → <em>kann / könnte</em> (~40%: возможно) → <em>mag</em> (допустим, правда…).</li>' +
        '<li><b>Чужие слова и самовосхваление</b>: <em>soll</em> = «говорят, по слухам» (индикатив в претерите не меняется: <em>Er soll in Berlin wohnen</em> / <em>gewesen sein</em>); <em>will</em> = «сам утверждает про себя, но я сомневаюсь» (<em>Er will nichts gesehen haben</em>).</li>' +
        '</ul>',
      en: '<p>Used <b>epistemically</b>, modal verbs express how sure the speaker is (present/ongoing: <b>Infinitiv I</b>; past event: <b>Infinitiv II</b> = <em>Partizip II + haben/sein</em>).</p>' +
        '<ul>' +
        '<li><b>Certainty scale</b>: <em>muss</em> (~95%) → <em>müsste</em> (~80%) → <em>dürfte</em> (~75%: most likely, always Konjunktiv II) → <em>kann / könnte</em> (~40%: maybe) → <em>mag</em> (admittedly / may well).</li>' +
        '<li><b>Reported claims</b>: <em>soll</em> = “people say / reportedly” (<em>Er soll das gemeldet haben</em>); <em>will</em> = “he/she claims about themselves, though I doubt it” (<em>Sie will alles allein geschafft haben</em>).</li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Шкала уверенности и передача чужих слов', en: 'Certainty scale & reported claims' },
      head: { ru: ['Модальный глагол', 'Оценка', 'Пример (Infinitiv II)'], en: ['Modal verb', 'Meaning', 'Past example (Infinitiv II)'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['muss', '~95% (почти уверен)', 'Er muss den Zug verpasst haben.'],
          ['dürfte', '~75% (скорее всего)', 'Das dürfte etwa zwei Stunden gedauert haben.'],
          ['kann / könnte', '~40% (возможно)', 'Sie könnte sich geirrt haben.'],
          ['mag', 'уступка / «пусть так»', 'Das mag stimmen, reicht aber nicht.'],
          ['soll', 'по слухам / говорят', 'Der Film soll großartig gewesen sein.'],
          ['will', 'утверждает сам (скепсис)', 'Er will die E-Mail nie erhalten haben.']
        ],
        en: [
          ['muss', '~95% (near certainty)', 'Er muss den Zug verpasst haben.'],
          ['dürfte', '~75% (very probable)', 'Das dürfte etwa zwei Stunden gedauert haben.'],
          ['kann / könnte', '~40% (possibility)', 'Sie könnte sich geirrt haben.'],
          ['mag', 'concessive “may be true”', 'Das mag stimmen, reicht aber nicht.'],
          ['soll', 'rumour / “is said to”', 'Der Film soll großartig gewesen sein.'],
          ['will', 'self-claim (speaker doubts it)', 'Er will die E-Mail nie erhalten haben.']
        ]
      }
    }],
    examples: [
      { de: 'Hier brennt kein Licht; sie [[müssen]] schon gegangen sein.', ru: 'Здесь не горит свет; они, должно быть, уже ушли.', en: 'No light is on; they must have already left.' },
      { de: 'Der Umbau [[dürfte]] deutlich teurer geworden sein.', ru: 'Перестройка, по всей видимости, вышла заметно дороже.', en: 'The renovation is likely to have become significantly more expensive.' },
      { de: 'Das neue Restaurant [[soll]] ausgezeichnet sein.', ru: 'Говорят, новый ресторан превосходен.', en: 'The new restaurant is said to be excellent.' },
      { de: 'Der Zeuge [[will]] in der Nacht nichts gehört haben.', ru: 'Свидетель утверждает, что ночью ничего не слышал.', en: 'The witness claims not to have heard anything that night.' }
    ],
    pitfalls: [
      {
        title: { ru: 'dürfte всегда с умлаутом', en: 'dürfte always uses Konjunktiv II' },
        html: {
          ru: '<span class="wrong">Das darf bald fertig sein.</span> (неверно для предположения) → <span class="right">Das dürfte bald fertig sein.</span>',
          en: '<span class="wrong">Das darf bald fertig sein.</span> (not epistemic) → <span class="right">Das dürfte bald fertig sein.</span>'
        }
      },
      {
        title: { ru: 'soll ≠ will', en: 'soll vs. will' },
        html: {
          ru: '<em>Er soll krank sein</em> = говорят другие. <em>Er will ein Experte sein</em> = он сам так утверждает (а мы сомневаемся).',
          en: '<em>Er soll krank sein</em> = others say so. <em>Er will ein Experte sein</em> = he claims it about himself (with doubt).'
        }
      }
    ],
    drills: [
      { id: 'de-g-x27-smv-1', kind: 'choice', q: 'Die Straße ist komplett nass. Es ___ in der Nacht stark geregnet haben.', options: ['muss', 'will', 'soll'], answer: 0, explain: { ru: 'Очевидный вывод по мокрой улице (~95%) → muss + Infinitiv II.', en: 'Strong logical deduction from wet streets (~95%) → muss + Infinitiv II.' } },
      { id: 'de-g-x27-smv-2', kind: 'choice', q: 'Nach allen Prognosen ___ die Preise im Herbst weiter steigen.', options: ['dürften', 'wollen', 'sollen nicht'], answer: 0, explain: { ru: 'Высокая вероятность по прогнозам (~75%) → dürften.', en: 'High probability based on forecasts → dürften.' } },
      { id: 'de-g-x27-smv-3', kind: 'choice', q: 'Hast du gehört? Die Firma ___ bald von einem Konzern übernommen werden.', options: ['soll', 'will', 'darf'], answer: 0, explain: { ru: 'Передача слухов («говорят») → soll.', en: 'Reporting rumours (“is said to”) → soll.' } },
      { id: 'de-g-x27-smv-4', kind: 'choice', q: 'Der Politiker ___ von den geheimen Zahlungen nichts gewusst haben (doch kaum jemand glaubt ihm).', options: ['will', 'dürfte', 'muss'], answer: 0, explain: { ru: 'Человек сам утверждает о себе при скепсисе говорящего → will.', en: 'Self-claim met with speaker scepticism → will.' } },
      { id: 'de-g-x27-smv-5', kind: 'gap', q: 'Das ___ zwar stimmen, löst unser Problem aber nicht. (mögen)', answer: 'mag', explain: { ru: 'Уступительное «допустим, это правда» → Das mag stimmen.', en: 'Concessive “that may well be true” → Das mag stimmen.' } },
      { id: 'de-g-x27-smv-6', kind: 'gap', q: 'Wo ist Jonas? — Er könnte den Brief schon eingeworfen ___.', answer: 'haben', explain: { ru: 'einwerfen образует перфект с haben → Infinitiv II = eingeworfen haben.', en: 'einwerfen takes haben in the perfect → Infinitiv II = eingeworfen haben.' } },
      { id: 'de-g-x27-smv-7', kind: 'choice', q: 'Unmöglich! Sie kann das Dokument unmöglich vergessen ___.', options: ['haben', 'sein', 'worden'], answer: 0, explain: { ru: 'vergessen требует haben → vergessen haben.', en: 'vergessen uses haben → vergessen haben.' } },
      { id: 'de-g-x27-smv-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Он, должно быть, опоздал на поезд».', en: 'Build: “He must have missed the train.”' }, tokens: ['Er', 'muss', 'den Zug', 'verpasst', 'haben.'], answer: 'Er muss den Zug verpasst haben.', explain: { ru: 'Субъективное muss + Infinitiv II (verpasst haben) в конце.', en: 'Epistemic muss + Infinitiv II (verpasst haben) at the end.' } }
    ]
  });

  // 3. C1: Uneingeleitete Bedingungs- und Konzessivsätze
  addTopic('uneingeleitete_saetze', 'Verb-first conditional & concessive clauses · C1', 'C1');
  GT.registerGrammar({
    id: 'uneingeleitete_saetze',
    level: 'C1',
    title: { ru: 'Бессоюзные условные и уступительные придаточные', en: 'Verb-first conditionals & concessives (without wenn)' },
    summary: {
      ru: 'Hätte ich Zeit, … / Sollte es regnen, … / Mag es auch schwer sein, … — высокий стиль без союза wenn.',
      en: 'Hätte ich Zeit, … / Sollte es regnen, … / Mag es auch schwer sein, … — concise C1 conditionals and concessives.'
    },
    explanation: {
      ru: '<p>На уровне C1 союз <em>wenn</em> часто опускают, ставя <b>спрягаемый глагол на 1-е место</b> в придаточном. После такого придаточного в главном предложении на первом месте сразу идёт спрягаемый глагол (часто после <em>so</em> или <em>dann</em>).</p>' +
        '<ul>' +
        '<li><b>Реальное/вежливое условие</b>: <em><b>Sollte</b> sich der Termin ändern, informieren wir Sie sofort.</em> (= Wenn sich … ändern sollte)</li>' +
        '<li><b>Нереальное условие (Konjunktiv II)</b>: <em><b>Hätten</b> wir früher begonnen, wären wir längst fertig.</em> (= Wenn wir früher begonnen hätten)</li>' +
        '<li><b>Бессоюзная уступка</b>: <em><b>Mag</b> der Vorschlag noch so klingen, er spart Geld.</em> / <em><b>Ist</b> es auch spät, ich rufe noch an.</em></li>' +
        '<li><b>Выборный уступительный оборот с auch</b>: <em><b>Wie gut</b> es <b>auch</b> klingt…</em> / <em><b>Was</b> er <b>auch</b> sagt…</em> (здесь порядок обычный: глагол в конце!).</li>' +
        '</ul>',
      en: '<p>At C1, <em>wenn</em> is often dropped by moving the <b>conjugated verb to position 1</b> inside the subordinate clause. The main clause then immediately opens with its own conjugated verb (or <em>so/dann</em>).</p>' +
        '<ul>' +
        '<li><b>Open / polite condition</b>: <em><b>Sollte</b> sich der Termin ändern, informieren wir Sie sofort.</em></li>' +
        '<li><b>Unreal condition (Konjunktiv II)</b>: <em><b>Hätten</b> wir früher begonnen, wären wir längst fertig.</em></li>' +
        '<li><b>Verb-first concessive</b>: <em><b>Mag</b> der Preis auch hoch sein, die Qualität stimmt.</em></li>' +
        '<li><b>Wh-word + auch concessives</b>: <em><b>Wie</b> schwierig es <b>auch</b> ist…</em> (note: normal subordinate verb-final order here!).</li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Союзный вариант vs. бессоюзный (C1)', en: 'With conjunction vs. verb-first C1 variant' },
      head: { ru: ['С wenn / obwohl', 'Бессоюзный вариант (глагол на 1-м месте)'], en: ['With wenn / obwohl', 'Verb-first variant'] },
      deCols: [0, 1],
      rows: {
        ru: [
          ['Wenn Sie Fragen haben sollten, …', 'Sollten Sie Fragen haben, …'],
          ['Wenn ich das gewusst hätte, …', 'Hätte ich das gewusst, …'],
          ['Wenn wir mehr Geld hätten, …', 'Hätten wir mehr Geld, …'],
          ['Obwohl das Risiko groß ist, …', 'Ist das Risiko auch noch so groß, …'],
          ['Obwohl er sich bemüht, …', 'Mag er sich auch noch so bemühen, …']
        ],
        en: [
          ['Wenn Sie Fragen haben sollten, …', 'Sollten Sie Fragen haben, …'],
          ['Wenn ich das gewusst hätte, …', 'Hätte ich das gewusst, …'],
          ['Wenn wir mehr Geld hätten, …', 'Hätten wir mehr Geld, …'],
          ['Obwohl das Risiko groß ist, …', 'Ist das Risiko auch noch so groß, …'],
          ['Obwohl er sich bemüht, …', 'Mag er sich auch noch so bemühen, …']
        ]
      }
    }],
    examples: [
      { de: '[[Sollte]] die Lieferung sich verzögern, geben wir Ihnen Bescheid.', ru: 'Если доставка задержится, мы дадим вам знать.', en: 'Should the delivery be delayed, we will let you know.' },
      { de: '[[Wären]] wir pünktlicher losgefahren, hätten wir den Anschluss erreicht.', ru: 'Выехали бы мы вовремя, успели бы на пересадку.', en: 'Had we set off more punctually, we would have caught the connection.' },
      { de: '[[Mag]] die Kritik auch hart sein, im Kern ist sie berechtigt.', ru: 'Пусть критика и жёсткая, по сути она справедлива.', en: 'Harsh though the criticism may be, at its core it is justified.' },
      { de: '[[Wie]] spät es [[auch]] wird, wir schließen das heute ab.', ru: 'Как бы поздно ни стало, мы закончим это сегодня.', en: 'No matter how late it gets, we will wrap this up today.' }
    ],
    pitfalls: [
      {
        title: { ru: 'В главном предложении после бессоюзного придаточного — сразу глагол', en: 'Main clause opens straight with the finite verb' },
        html: {
          ru: '<span class="wrong">Hätte ich Zeit, ich würde kommen.</span> → <span class="right">Hätte ich Zeit, würde ich kommen.</span> (или <em>… so würde ich kommen</em>).',
          en: '<span class="wrong">Hätte ich Zeit, ich würde kommen.</span> → <span class="right">Hätte ich Zeit, würde ich kommen.</span>'
        }
      }
    ],
    drills: [
      { id: 'de-g-x27-uns-1', kind: 'choice', q: '___ Sie noch Unterlagen benötigen, melden Sie sich bitte kurz.', options: ['Sollten', 'Wenn sollten', 'Würden'], answer: 0, explain: { ru: 'Вежливое условие без wenn: Sollten + подлежащее + Infinitiv.', en: 'Polite verb-first conditional: Sollten + subject + infinitive.' } },
      { id: 'de-g-x27-uns-2', kind: 'choice', q: '___ ich deinen Rat früher befolgt, wäre vieles leichter gewesen.', options: ['Hätte', 'Wäre', 'Würde'], answer: 0, explain: { ru: 'befolgen образует перфект с haben → Hätte ich … befolgt.', en: 'befolgen forms its perfect with haben → Hätte ich … befolgt.' } },
      { id: 'de-g-x27-uns-3', kind: 'gap', q: '___ der Weg auch weit ist, die Wanderung lohnt sich. (mögen)', answer: 'Mag', explain: { ru: 'Бессоюзная уступка с глаголом на 1-м месте: Mag … auch … sein.', en: 'Verb-first concessive starts with Mag: Mag … auch …' } },
      { id: 'de-g-x27-uns-4', kind: 'choice', q: 'Hätte das Team besser getestet, ___ der Fehler rechtzeitig aufgefallen.', options: ['wäre', 'es wäre', 'hatte'], answer: 0, explain: { ru: 'После придаточного глагол главного предложения (wäre) идёт сразу после запятой.', en: 'After the subordinate clause, the main verb (wäre) comes right after the comma.' } },
      { id: 'de-g-x27-uns-5', kind: 'choice', q: 'Was er ___ verspricht, er hält seine Termine selten ein.', options: ['auch', 'wenn', 'obwohl'], answer: 0, explain: { ru: 'Независимо от того что: Was er auch verspricht (= egal was).', en: 'Whatever / no matter what: Was er auch verspricht.' } },
      { id: 'de-g-x27-uns-6', kind: 'gap', q: '___ du morgen früher fertig werden, sag mir bitte kurz Bescheid. (sollen, 2. Sg.)', answer: 'Solltest', explain: { ru: 'Solltest du … (условие без wenn для du).', en: 'Solltest du … (verb-first conditional for du).' } },
      { id: 'de-g-x27-uns-7', kind: 'choice', q: 'Kommt kein Einspruch bis Montag, ___ der Vertrag als angenommen.', options: ['gilt', 'es gilt', 'so'], answer: 0, explain: { ru: 'Бессоюзное условие Kommt… → в главной части сразу глагол gilt.', en: 'Verb-first conditional Kommt… → main clause starts with gilt.' } },
      { id: 'de-g-x27-uns-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Знал бы я это заранее, я бы остался дома».', en: 'Build: “Had I known that in advance, I would have stayed home.”' }, tokens: ['Hätte ich das', 'vorher gewusst,', 'wäre ich', 'zu Hause geblieben.'], answer: 'Hätte ich das vorher gewusst, wäre ich zu Hause geblieben.', explain: { ru: 'Бессоюзное Hätte… с глаголом wäre сразу после запятой.', en: 'Verb-first Hätte… followed directly by wäre after the comma.' } }
    ]
  });

  // 4. C1: Korrelate (es, daran, darauf, damit, davon)
  addTopic('korrelate_c1', 'Clause correlates (es, daran, darauf…) · C1', 'C1');
  GT.registerGrammar({
    id: 'korrelate_c1',
    level: 'C1',
    title: { ru: 'Корреляты перед придаточными (es, daran, darauf, damit)', en: 'Clause correlates (es, daran, darauf, damit)' },
    summary: {
      ru: 'Ich verlasse mich darauf, dass… / Ich lehne es ab, … — когда предложное наречие (da-) обязательно.',
      en: 'Ich verlasse mich darauf, dass… / Ich lehne es ab, … — when da- correlates are mandatory or optional.'
    },
    explanation: {
      ru: '<p>Глаголы, прилагательные и существительные с предложным управлением часто ставят в главном предложении местоименное наречие <b>da(r)- + предлог</b> в качестве «крючка» перед <em>dass</em>-придаточным или <em>zu</em>-инфинитивом.</p>' +
        '<ul>' +
        '<li><b>Обязательный коррелят</b>: при противопоставлении, ударении на причине/способе или у некоторых глаголов без коррелята меняется смысл: <em>Es liegt <b>daran</b>, dass…</em>, <em>Ich bestehe <b>darauf</b>, dass…</em>, <em>Wir gehen <b>davon</b> aus, dass…</em>, <em>Er ist <b>daran</b> interessiert, zu lernen</em>.</li>' +
        '<li><b>Факультативный коррелят</b>: после <em>sich freuen (darüber), warten (darauf), hoffen (darauf), Angst haben (davor)</em> коррелят можно опустить в нейтральной речи.</li>' +
        '<li><b>Отрицание или фокус несут именно коррелят</b>: <em>Es liegt <b>nicht daran</b>, dass…, sondern…</em>, <em>Ich bin <b>dagegen</b>, dass…</em></li>' +
        '</ul>',
      en: '<p>Verbs, adjectives, and nouns with fixed prepositions frequently place a <b>da(r)- + preposition</b> correlate in the main clause to preview a following <em>dass</em>-clause or <em>zu</em>-infinitive.</p>' +
        '<ul>' +
        '<li><b>Required correlate</b>: essential when contrasted, negated, or when omitting it sounds unidiomatic/ambiguous: <em>Es liegt <b>daran</b>, dass…</em>, <em>Ich bestehe <b>darauf</b>, dass…</em>, <em>Wir gehen <b>davon</b> aus, dass…</em></li>' +
        '<li><b>Optional correlate</b>: verbs of emotion/expectation often allow dropping it in neutral style (<em>Ich freue mich [darüber], dass du kommst</em>).</li>' +
        '<li><b>Always darauf ≠ darin</b>: match the verb’s preposition strictly (<em>warten auf → darauf</em>, <em>bestehen auf → darauf</em>, <em>bestehen aus/in → darin</em>).</li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Частые глаголы с обязательным или типичным коррелятом', en: 'High-frequency verbs and their correlates' },
      head: { ru: ['Конструкция', 'Управление', 'Пример'], en: ['Structure', 'Preposition', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['abhängen + davon', 'von + Dat.', 'Alles hängt davon ab, ob das Budget reicht.'],
          ['ausgehen + davon', 'von + Dat.', 'Wir gehen davon aus, dass alle teilnehmen.'],
          ['bestehen + darauf', 'auf + Dat./Akk.', 'Sie besteht darauf, den Bericht selbst zu prüfen.'],
          ['dazu beitragen', 'zu + Dat.', 'Guter Schlaf trägt dazu bei, konzentriert zu bleiben.'],
          ['daran liegen', 'an + Dat.', 'Das Problem liegt daran, dass der Server überlastet ist.'],
          ['sich darauf verlassen', 'auf + Akk.', 'Ich verlasse mich darauf, dass du pünktlich bist.']
        ],
        en: [
          ['abhängen + davon', 'von + dat.', 'Alles hängt davon ab, ob das Budget reicht.'],
          ['ausgehen + davon', 'von + dat.', 'Wir gehen davon aus, dass alle teilnehmen.'],
          ['bestehen + darauf', 'auf + dat./acc.', 'Sie besteht darauf, den Bericht selbst zu prüfen.'],
          ['dazu beitragen', 'zu + dat.', 'Guter Schlaf trägt dazu bei, konzentriert zu bleiben.'],
          ['daran liegen', 'an + dat.', 'Das Problem liegt daran, dass der Server überlastet ist.'],
          ['sich darauf verlassen', 'auf + acc.', 'Ich verlasse mich darauf, dass du pünktlich bist.']
        ]
      }
    }],
    examples: [
      { de: 'Wir gehen [[davon]] aus, dass der Vertrag morgen unterschrieben wird.', ru: 'Мы исходим из того, что договор подпишут завтра.', en: 'We assume that the contract will be signed tomorrow.' },
      { de: 'Die Verzögerung liegt [[daran]], dass zwei Unterschriften fehlen.', ru: 'Задержка вызвана тем, что не хватает двух подписей.', en: 'The delay is due to the fact that two signatures are missing.' },
      { de: 'Ich verlasse mich fest [[darauf]], pünktlich informiert zu werden.', ru: 'Я твёрдо рассчитываю на то, что меня проинформируют вовремя.', en: 'I am firmly counting on being informed on time.' },
      { de: 'Dieses Werkzeug trägt [[dazu]] bei, Fehler früh zu erkennen.', ru: 'Этот инструмент способствует раннему выявлению ошибок.', en: 'This tool helps detect errors early on.' }
    ],
    pitfalls: [
      {
        title: { ru: 'Нельзя заменять предложный коррелят словом es', en: 'Never use plain es instead of a prepositional da-correlate' },
        html: {
          ru: '<span class="wrong">Ich warte es, dass du antwortest.</span> → <span class="right">Ich warte darauf, dass du antwortest.</span>',
          en: '<span class="wrong">Ich warte es, dass du antwortest.</span> → <span class="right">Ich warte darauf, dass du antwortest.</span>'
        }
      }
    ],
    drills: [
      { id: 'de-g-x27-kor-1', kind: 'choice', q: 'Wir gehen ___ aus, dass die Zahlen bis Freitag vorliegen.', options: ['davon', 'darauf', 'daran'], answer: 0, explain: { ru: 'ausgehen von → davon ausgehen.', en: 'ausgehen von → davon ausgehen.' } },
      { id: 'de-g-x27-kor-2', kind: 'choice', q: 'Die hohen Kosten liegen ___, dass wir alles neu importieren müssen.', options: ['daran', 'darüber', 'damit'], answer: 0, explain: { ru: 'liegen an → daran liegen.', en: 'liegen an → daran liegen.' } },
      { id: 'de-g-x27-kor-3', kind: 'gap', q: 'Alles hängt ___ ab, wie schnell die Genehmigung eintrifft.', answer: 'davon', explain: { ru: 'abhängen von → davon abhängen.', en: 'abhängen von → davon abhängen.' } },
      { id: 'de-g-x27-kor-4', kind: 'choice', q: 'Klare Regeln tragen ___ bei, Missverständnisse zu vermeiden.', options: ['dazu', 'darauf', 'dafür'], answer: 0, explain: { ru: 'beitragen zu → dazu beitragen.', en: 'beitragen zu → dazu beitragen.' } },
      { id: 'de-g-x27-kor-5', kind: 'choice', q: 'Unsere Firma besteht ___, dass alle Daten verschlüsselt werden.', options: ['darauf', 'davon', 'darin'], answer: 0, explain: { ru: 'bestehen auf (настаивать) → darauf bestehen.', en: 'bestehen auf (insist on) → darauf bestehen.' } },
      { id: 'de-g-x27-kor-6', kind: 'gap', q: 'Ich rechne fest ___, dass du mich vor der Sitzung anrufst.', answer: 'damit', explain: { ru: 'rechnen mit (рассчитывать на) → damit rechnen.', en: 'rechnen mit (count on) → damit rechnen.' } },
      { id: 'de-g-x27-kor-7', kind: 'choice', q: 'Er warnt uns ___, den Vertrag vorschnell zu unterschreiben.', options: ['davor', 'darüber', 'daran'], answer: 0, explain: { ru: 'warnen vor + Dat. → davor warnen.', en: 'warnen vor → davor warnen.' } },
      { id: 'de-g-x27-kor-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Я полагаюсь на то, что вы правы».', en: 'Build: “I rely on your being right.”' }, tokens: ['Ich verlasse', 'mich darauf,', 'dass Sie', 'recht haben.'], answer: 'Ich verlasse mich darauf, dass Sie recht haben.', explain: { ru: 'sich verlassen auf → sich darauf verlassen, dass…', en: 'sich verlassen auf → sich darauf verlassen, dass…' } }
    ]
  });

  // 5. C1: Passiv-Feinheiten
  addTopic('passiv_feinheiten', 'Advanced passive distinctions · C1', 'C1');
  GT.registerGrammar({
    id: 'passiv_feinheiten',
    level: 'C1',
    title: { ru: 'Тонкости пассива: Zustandspassiv, Rezipientenpassiv и unpersönlich', en: 'Advanced passive: Zustandspassiv, bekommen-passive & impersonal' },
    summary: {
      ru: 'wird geprüft vs. ist geprüft; bekommt etwas erklärt; Es wurde viel diskutiert — различаем процесс, состояние и адресата.',
      en: 'wird geprüft vs. ist geprüft; bekommt etwas erklärt; Es wurde viel diskutiert — process vs. state vs. recipient.'
    },
    explanation: {
      ru: '<p>На C1 важно точно выбирать между тремя видами пассива:</p>' +
        '<ul>' +
        '<li><b>Vorgangspassiv (<em>werden</em> + Partizip II)</b> — сам процесс/действие: <em>Die Tür <b>wird</b> um 18 Uhr <b>geschlossen</b>.</em> Перфект процесса: <em>ist geschlossen <b>worden</b></em> (без ge-!).</li>' +
        '<li><b>Zustandspassiv (<em>sein</em> + Partizip II)</b> — результат/состояние после завершения: <em>Um 19 Uhr <b>ist</b> die Tür <b>geschlossen</b>.</em> Предлог источника состояния часто не <em>von</em>, а <em>mit/durch/in</em> (<em>mit Tinte geschrieben</em>).</li>' +
        '<li><b>Rezipientenpassiv / Dativpassiv (<em>bekommen/kriegen/erhalten</em> + Partizip II)</b> — подлежащим становится <b>получатель (датив)</b>, а прямое дополнение остаётся в аккузативе: <em>Der Patient bekommt das Medikament verschrieben.</em> (= Ihm wird … verschrieben).</li>' +
        '<li><b>Безличный пассив (для непереходных глаголов)</b>: <em>Hier wird nicht geraucht.</em> / <em>Ihm wurde sofort geholfen.</em> (подлежащего нет; глагол всегда 3 л. ед. ч.!).</li>' +
        '</ul>',
      en: '<p>At C1, choosing the right passive subtype changes precision cleanly:</p>' +
        '<ul>' +
        '<li><b>Vorgangspassiv (<em>werden</em> + Partizip II)</b> — ongoing/repeated process: <em>Die Tür <b>wird</b> um 18 Uhr <b>geschlossen</b>.</em> Its perfect drops ge-: <em>ist geschlossen <b>worden</b></em>.</li>' +
        '<li><b>Zustandspassiv (<em>sein</em> + Partizip II)</b> — resulting state after an action: <em>Um 19 Uhr <b>ist</b> die Tür <b>geschlossen</b>.</em></li>' +
        '<li><b>Recipient / Dativpassiv (<em>bekommen/kriegen/erhalten</em> + Partizip II)</b> — promotes the <b>dative recipient</b> to subject while keeping the direct object in the accusative: <em>Sie bekommt die Kosten erstattet.</em></li>' +
        '<li><b>Impersonal passive</b> (for intransitive / dative verbs): <em>Ihm wurde geholfen.</em> (always 3rd person singular — never *Er wurde geholfen!).</li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Четыре пассивных модели в сравнении', en: 'Four passive structures compared' },
      head: { ru: ['Тип', 'Формула', 'Пример'], en: ['Type', 'Pattern', 'Example'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['Vorgangspassiv (процесс)', 'werden + Partizip II', 'Der Bericht wird gerade korrigiert.'],
          ['Zustandspassiv (результат)', 'sein + Partizip II', 'Der Bericht ist endlich korrigiert.'],
          ['Rezipientenpassiv (адресат)', 'bekommen + Partizip II', 'Sie bekommt den Schaden ersetzt.'],
          ['Unpersönliches Passiv', '(Es) + werden (3. Sg.) + Partizip II', 'Am Ende wurde allen gedankt.']
        ],
        en: [
          ['Process passive', 'werden + Partizip II', 'Der Bericht wird gerade korrigiert.'],
          ['State passive', 'sein + Partizip II', 'Der Bericht ist endlich korrigiert.'],
          ['Recipient passive', 'bekommen + Partizip II', 'Sie bekommt den Schaden ersetzt.'],
          ['Impersonal passive', '(Es) + werden (3rd sg.) + Partizip II', 'Am Ende wurde allen gedankt.']
        ]
      }
    }],
    examples: [
      { de: 'Der Fehler [[ist]] bereits [[behoben]]. Wir können weitermachen.', ru: 'Ошибка уже исправлена (состояние). Мы можем продолжать.', en: 'The error is already fixed (state). We can carry on.' },
      { de: 'Die Brücke [[ist]] letztes Jahr [[saniert worden]].', ru: 'Мост отремонтировали в прошлом году (процесс в перфекте).', en: 'The bridge was renovated last year (process perfect).' },
      { de: 'Alle Teilnehmer [[bekommen]] ein Zertifikat [[ausgestellt]].', ru: 'Всем участникам выдаётся сертификат.', en: 'All participants receive a certificate issued to them.' },
      { de: 'Den Verletzten [[wurde]] innerhalb weniger Minuten [[geholfen]].', ru: 'Пострадавшим помогли за считаные минуты.', en: 'The injured were helped within a few minutes.' }
    ],
    pitfalls: [
      {
        title: { ru: 'helfen / danken / folgen не берут номинатив в пассиве', en: 'Dative verbs stay dative in impersonal passives' },
        html: {
          ru: '<span class="wrong">Ich wurde sofort geholfen.</span> → <span class="right">Mir wurde sofort geholfen.</span>',
          en: '<span class="wrong">Ich wurde sofort geholfen.</span> → <span class="right">Mir wurde sofort geholfen.</span>'
        }
      }
    ],
    drills: [
      { id: 'de-g-x27-pf-1', kind: 'choice', q: 'Schau, die Dokumente ___ bereits unterschrieben; wir können sie abschicken.', options: ['sind', 'werden', 'wurden'], answer: 0, explain: { ru: 'Готовый результат на данный момент (Zustandspassiv) → sind unterschrieben.', en: 'Completed current state (Zustandspassiv) → sind unterschrieben.' } },
      { id: 'de-g-x27-pf-2', kind: 'choice', q: 'Die Straße ist erst letzte Woche neu asphaltiert ___.', options: ['worden', 'geworden', 'gewesen'], answer: 0, explain: { ru: 'В перфекте пассива всегда используется усечённое worden (без ge-).', en: 'Passive perfect always uses worden (never geworden).' } },
      { id: 'de-g-x27-pf-3', kind: 'choice', q: 'Nach der Reklamation ___ die Kundin den vollen Betrag erstattet.', options: ['bekam', 'wurde', 'war'], answer: 0, explain: { ru: 'Rezipientenpassiv: подлежащее Kundin получает сумму → bekam … erstattet.', en: 'Recipient passive with subject Kundin → bekam … erstattet.' } },
      { id: 'de-g-x27-pf-4', kind: 'choice', q: '___ wurde bis tief in die Nacht über die Reform diskutiert.', options: ['Es', 'Man', 'Sie'], answer: 0, explain: { ru: 'Безличный пассив с 1-м местом-заполнителем → Es wurde diskutiert.', en: 'Impersonal passive with Vorfeld-es → Es wurde diskutiert.' } },
      { id: 'de-g-x27-pf-5', kind: 'gap', q: 'Auf die genaue Frage ___ leider nicht geantwortet. (Präteritum Passiv)', answer: 'wurde', explain: { ru: 'Безличный пассив: глагол antworten непереходный → wurde geantwortet (3-е лицо ед. ч.).', en: 'Impersonal passive in the past → wurde geantwortet (3rd person singular).' } },
      { id: 'de-g-x27-pf-6', kind: 'choice', q: 'Der neue Mitarbeiter ___ am ersten Tag alle Programme erklärt.', options: ['kriegt', 'wird', 'ist'], answer: 0, explain: { ru: 'В разговорном Rezipientenpassiv neben bekommen часто используют kriegen.', en: 'Colloquial recipient passive uses kriegen or bekommen.' } },
      { id: 'de-g-x27-pf-7', kind: 'choice', q: '___ wurde für die schnelle Hilfe herzlich gedankt.', options: ['Den Helferinnen', 'Die Helferinnen', 'Für die Helferinnen'], answer: 0, explain: { ru: 'danken управляет дативом (Den Helferinnen), подлежащего нет → безличный пассив wurde gedankt.', en: 'danken governs dative (Den Helferinnen), keeping an impersonal passive with wurde gedankt.' } },
      { id: 'de-g-x27-pf-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Ему сразу помогли».', en: 'Build: “He was helped immediately.”' }, tokens: ['Ihm', 'wurde', 'sofort', 'geholfen.'], answer: 'Ihm wurde sofort geholfen.', explain: { ru: 'helfen управляет дативом (Ihm), глагол всегда 3-го лица ед. ч. (wurde).', en: 'helfen takes dative (Ihm), keeping the passive verb 3rd singular (wurde).' } }
    ]
  });

  // 6. B2: Irreale Vergleichssätze (als ob / als wenn / als)
  addTopic('irreale_vergleiche', 'Unreal comparison clauses (als ob / als) · B2', 'B2');
  GT.registerGrammar({
    id: 'irreale_vergleiche',
    level: 'B2',
    title: { ru: 'Нереальные сравнительные придаточные (als ob / als wenn / als)', en: 'Unreal comparisons (als ob / als wenn / als)' },
    summary: {
      ru: 'Er tut so, als ob er nichts wüsste / als wüsste er nichts — как выражать «как будто».',
      en: 'Er tut so, als ob er nichts wüsste / als wüsste er nichts — “as if / as though” with Konjunktiv II.'
    },
    explanation: {
      ru: '<p>Для сравнения с нереальной или вымышленной ситуацией («как будто») в немецком языке есть два типа порядка слов:</p>' +
        '<ul>' +
        '<li><b>С союзами <em>als ob / als wenn / wie wenn</em></b> — глагол в <b>Konjunktiv II</b> (или Konjunktiv I) уходит <b>в конец</b>: <em>Sie redet so, <b>als ob</b> sie alles genau <b>wüsste</b>.</em></li>' +
        '<li><b>Сокращённый союз <em>als</em> (без ob/wenn)</b> — глагол сразу <b>после als</b> (инверсия!): <em>Sie redet so, <b>als wüsste</b> sie alles genau.</em></li>' +
        '<li><b>Прошлое в «как будто»</b>: если нереальное действие было раньше, используем <b>hätte / wäre + Partizip II</b>: <em>Er sah aus, als hätte er tagelang nicht geschlafen.</em></li>' +
        '</ul>',
      en: '<p>To say “as if / as though” for an imagined state or event, German offers two word orders:</p>' +
        '<ul>' +
        '<li><b>With <em>als ob / als wenn</em></b> — verb in <b>Konjunktiv II</b> (or Konjunktiv I) goes to the <b>end</b>: <em>Sie tut so, <b>als ob</b> sie nichts <b>merkte / merken würde</b>.</em></li>' +
        '<li><b>With bare <em>als</em></b> — verb comes <b>immediately after als</b>: <em>Sie tut so, <b>als hätte</b> sie keine Zeit.</em></li>' +
        '<li><b>Prior past action</b>: use <b>hätte / wäre + Partizip II</b>: <em>Es fühlte sich an, als wäre nichts passiert.</em></li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'als ob vs. краткое als', en: 'als ob vs. bare als' },
      head: { ru: ['Форма', 'Место глагола', 'Пример'], en: ['Conjunction', 'Verb position', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['als ob + Konj. II', 'в конце придаточного', 'Er tut, als ob er der Chef wäre.'],
          ['als wenn + Konj. II', 'в конце придаточного', 'Es sah aus, als wenn es bald schneite.'],
          ['als + Konj. II', 'сразу после als', 'Er tut, als wäre er der Chef.'],
          ['als + hätte/wäre (прошлое)', 'сразу после als', 'Sie wirkt, als hätte sie kaum geschlafen.']
        ],
        en: [
          ['als ob + Konj. II', 'clause-final', 'Er tut, als ob er der Chef wäre.'],
          ['als wenn + Konj. II', 'clause-final', 'Es sah aus, als wenn es bald schneite.'],
          ['als + Konj. II', 'right after als', 'Er tut, als wäre er der Chef.'],
          ['als + hätte/wäre (past)', 'right after als', 'Sie wirkt, als hätte sie kaum geschlafen.']
        ]
      }
    }],
    examples: [
      { de: 'Du schaust mich an, [[als ob]] du ein Gespenst gesehen [[hättest]].', ru: 'Ты смотришь на меня так, как будто увидел привидение.', en: 'You are looking at me as if you had seen a ghost.' },
      { de: 'Es scheint, [[als wäre]] die Sache längst erledigt.', ru: 'Кажется, будто дело уже давно улажено.', en: 'It seems as though the matter were long settled.' },
      { de: 'Er benimmt sich, [[als würde]] ihm die ganze Firma gehören.', ru: 'Он ведёт себя так, будто ему принадлежит вся фирма.', en: 'He acts as if the whole company belonged to him.' },
      { de: 'Es klingt, [[als hätten]] wir den richtigen Ansatz gefunden.', ru: 'Звучит так, словно мы нашли верный подход.', en: 'It sounds as if we had found the right approach.' }
    ],
    pitfalls: [
      {
        title: { ru: 'Разный порядок слов у als ob и простого als', en: 'Different word order for als ob vs. bare als' },
        html: {
          ru: '<span class="wrong">… als ob wäre er krank.</span> → <span class="right">… als ob er krank wäre.</span> / <span class="right">… als wäre er krank.</span>',
          en: '<span class="wrong">… als ob wäre er krank.</span> → <span class="right">… als ob er krank wäre.</span> / <span class="right">… als wäre er krank.</span>'
        }
      }
    ],
    drills: [
      { id: 'de-g-x27-irr-1', kind: 'choice', q: 'Sie lächelt so entspannt, als ob sie gar keinen Stress ___.', options: ['hätte', 'hat', 'wird'], answer: 0, explain: { ru: 'После als ob в конце стоит Konjunktiv II (hätte).', en: 'After als ob, the clause ends with Konjunktiv II (hätte).' } },
      { id: 'de-g-x27-irr-2', kind: 'choice', q: 'Er tut immer so, als ___ er alle Antworten schon auswendig.', options: ['wüsste', 'er wüsste', 'weiß'], answer: 0, explain: { ru: 'После короткого als глагол (wüsste) идёт сразу на 2-м шаге перед подлежащим.', en: 'After bare als, the finite verb (wüsste) immediately precedes the subject.' } },
      { id: 'de-g-x27-irr-3', kind: 'gap', q: 'Die beiden begrüßen sich, als ___ sie sich noch nie begegnet. (sein, Konj. II)', answer: 'wären', explain: { ru: 'begegnen (встретиться) с sein → als wären sie … begegnet.', en: 'begegnen forms its perfect with sein → als wären sie … begegnet.' } },
      { id: 'de-g-x27-irr-4', kind: 'choice', q: 'Es riecht hier, als ___ jemand gerade frischen Kaffee gekocht.', options: ['hätte', 'habe wird', 'hat'], answer: 0, explain: { ru: 'После als сразу глагол в Konjunktiv II прошлого → hätte … gekocht.', en: 'With bare als + past action → als hätte … gekocht.' } },
      { id: 'de-g-x27-irr-5', kind: 'choice', q: 'Du redest, als ___ ich an dem Missverständnis schuld!', options: ['wäre', 'wären', 'bin'], answer: 0, explain: { ru: 'После краткого als сразу идёт глагол в Konjunktiv II для ich → als wäre ich …', en: 'Bare als places Konjunktiv II (wäre) right before ich.' } },
      { id: 'de-g-x27-irr-6', kind: 'gap', q: 'Man hat den Eindruck, als ___ der Winter diesmal gar nicht enden wollen.', answer: 'würde', explain: { ru: 'als + würde … enden wollen.', en: 'als + würde … enden wollen.' } },
      { id: 'de-g-x27-irr-7', kind: 'choice', q: 'Welche Variante ist korrekt?', options: ['Er schaut, als ob nichts passiert wäre.', 'Er schaut, als ob wäre nichts passiert.', 'Er schaut, als nichts passiert wäre.'], answer: 0, explain: { ru: 'als ob держит глагол в конце; без ob глагол идёт сразу после als.', en: 'als ob sends the verb to the end; bare als puts the verb immediately after als.' } },
      { id: 'de-g-x27-irr-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Казалось, будто время остановилось».', en: 'Build: “It seemed as if time had stood still.”' }, tokens: ['Es schien,', 'als wäre', 'die Zeit', 'stehen geblieben.'], answer: 'Es schien, als wäre die Zeit stehen geblieben.', explain: { ru: 'stehen bleiben с sein → als wäre die Zeit stehen geblieben.', en: 'stehen bleiben uses sein → als wäre die Zeit stehen geblieben.' } }
    ]
  });
})();
