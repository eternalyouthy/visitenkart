/* English GRAMMAR · C1 lessons: cleft sentences, participle clauses, the subjunctive, alternatives to if
 * (+ extra drills for the inversion starter). Explanations ru + de inline. */
(function () {
  'use strict';
  var pack = GT._target;
  function lesson(topicName, page) {
    pack.config.TOPICS.grammar.push({ id: page.id, name: topicName, level: page.level });
    GT.registerGrammar(page);
  }

  /* ---------- C1 · Cleft sentences ---------- */
  lesson('Cleft sentences: It was … that / What I need is …', {
    id: 'cleft', level: 'C1',
    title: 'Cleft sentences for emphasis',
    summary: {
      ru: 'It was Anna who called. What I need is a holiday. — как выделить одну часть предложения.',
      de: 'It was Anna who called. What I need is a holiday. — wie man einen Satzteil hervorhebt.'
    },
    explanation: {
      ru: '<p>В русском выделение делают интонацией и порядком слов («Звонила <b>Анна</b>»). В английском порядок слов жёсткий, поэтому предложение «раскалывают» на две части:</p>' +
        '<ul>' +
        '<li><b>It-cleft</b>: <b>It is/was + выделяемое + who/that + остальное</b>: <em>Anna called yesterday.</em> → <em><b>It was Anna who</b> called yesterday.</em> / <em><b>It was yesterday that</b> Anna called.</em></li>' +
        '<li><b>Wh-cleft</b> (pseudo-cleft): <b>What + подлежащее + глагол + is/was + выделяемое</b>: <em><b>What I need is</b> a long holiday.</em> <em><b>What annoys me is</b> the noise.</em></li>' +
        '<li>Выделение действия: <em><b>What we did was (to) call</b> the police.</em> <em><b>All I want is</b> some peace.</em></li>' +
        '<li>Другие начала: <em>The thing (that)…, The reason (why)…, The place where…, The person who…</em>: <em><b>The reason I’m late is that</b> the train broke down.</em></li>' +
        '</ul>' +
        '<p>Чаще всего так исправляют чужую ошибку или противопоставляют: <em>It wasn’t me who broke it — it was the cat.</em></p>',
      de: '<p>Im Deutschen betont man durch Intonation und Wortstellung („<b>Anna</b> hat angerufen“). Die englische Wortstellung ist starr, deshalb „spaltet“ man den Satz:</p>' +
        '<ul>' +
        '<li><b>It-cleft</b>: <b>It is/was + Betontes + who/that + Rest</b>: <em><b>It was Anna who</b> called yesterday.</em> (= Anna war es, die angerufen hat.) <em><b>It was yesterday that</b> Anna called.</em></li>' +
        '<li><b>Wh-cleft</b>: <b>What + Subjekt + Verb + is/was + Betontes</b>: <em><b>What I need is</b> a long holiday.</em> (= Was ich brauche, ist …)</li>' +
        '<li>Betonung einer Handlung: <em><b>What we did was (to) call</b> the police.</em> <em><b>All I want is</b> some peace.</em></li>' +
        '<li>Weitere Einleitungen: <em>The thing (that)…, The reason (why)…, The place where…</em>: <em><b>The reason I’m late is that</b> the train broke down.</em></li>' +
        '</ul>' +
        '<p>Typisch zum Korrigieren oder Kontrastieren: <em>It wasn’t me who broke it — it was the cat.</em></p>'
    },
    tables: [{
      caption: { ru: 'Одна мысль — разный фокус', de: 'Ein Gedanke — verschiedener Fokus' },
      head: { ru: ['Фокус', 'Предложение'], de: ['Fokus', 'Satz'] },
      deCols: [1],
      rows: {
        ru: [['нейтрально', 'Tom lost the keys at the station.'], ['кто', 'It was Tom who lost the keys at the station.'], ['что', 'It was the keys that Tom lost at the station.'], ['где', 'It was at the station that Tom lost the keys.'], ['what-cleft', 'What Tom lost at the station was the keys.']],
        de: [['neutral', 'Tom lost the keys at the station.'], ['wer', 'It was Tom who lost the keys at the station.'], ['was', 'It was the keys that Tom lost at the station.'], ['wo', 'It was at the station that Tom lost the keys.'], ['what-cleft', 'What Tom lost at the station was the keys.']]
      }
    }],
    examples: [
      { t: '[[It was]] my sister [[who]] told me the news.', ru: 'Это сестра рассказала мне новость.', de: 'Es war meine Schwester, die mir die Nachricht erzählt hat.' },
      { t: '[[What]] I really like about this city [[is]] the food.', ru: 'Что мне по-настоящему нравится в этом городе — так это еда.', de: 'Was mir an dieser Stadt wirklich gefällt, ist das Essen.' },
      { t: '[[All]] you have to do [[is]] press this button.', ru: 'Всё, что нужно сделать, — нажать эту кнопку.', de: 'Du musst nur diesen Knopf drücken.' },
      { t: '[[It wasn’t until]] midnight [[that]] we finally got home.', ru: 'Только к полуночи мы наконец добрались домой.', de: 'Erst um Mitternacht kamen wir endlich nach Hause.' }
    ],
    pitfalls: [
      { title: { ru: 'Согласование с is/was', de: 'Kongruenz mit is/was' },
        html: { ru: 'После it всегда <b>is/was</b>, даже с множественным числом: <span class="right">It was the neighbours who complained.</span> (не <span class="wrong">It were</span>)', de: 'Nach it immer <b>is/was</b>, auch bei Plural: <span class="right">It was the neighbours who complained.</span> (nicht <span class="wrong">It were</span>)' } },
      { title: { ru: 'what, а не that в начале', de: 'what, nicht that am Anfang' },
        html: { ru: '<span class="wrong">That I need is a break.</span> → <span class="right">What I need is a break.</span>', de: '<span class="wrong">That I need is a break.</span> → <span class="right">What I need is a break.</span> (Deutsch „Was“ = what)' } }
    ],
    drills: [
      { id: 'en-g-cl-1', kind: 'choice', q: '___ I don’t understand is why he left so suddenly.', options: ['What', 'That', 'Which'], answer: 0,
        explain: { ru: 'Wh-cleft начинается с What.', de: 'Wh-cleft beginnt mit What.' } },
      { id: 'en-g-cl-2', kind: 'choice', q: 'It was in 2015 ___ they first met.', options: ['that', 'when it', 'what'], answer: 0,
        explain: { ru: 'It was + время + that.', de: 'It was + Zeit + that.' } },
      { id: 'en-g-cl-3', kind: 'gap', q: 'It ___ (be, past) the children who noticed the smoke first.', answer: 'was',
        explain: { ru: 'После it — was, даже с множественным числом.', de: 'Nach it steht was, auch bei Plural.' } },
      { id: 'en-g-cl-4', kind: 'reorder', q: { ru: 'Соберите: «Всё, что мне нужно, — немного тишины».', de: 'Bilde den Satz: „Alles, was ich brauche, ist etwas Ruhe.“' },
        tokens: ['All', 'I', 'need', 'is', 'some', 'peace', 'and', 'quiet.'], answer: 'All I need is some peace and quiet.',
        explain: { ru: 'All + подлежащее + глагол + is + выделяемое.', de: 'All + Subjekt + Verb + is + Betontes.' } },
      { id: 'en-g-cl-5', kind: 'choice', q: 'The reason I called ___ that I need your advice.', options: ['is', 'it is', 'because'], answer: 0,
        explain: { ru: 'The reason … is that (не because).', de: 'The reason … is that (nicht because).' } }
    ]
  });

  /* ---------- C1 · Participle clauses ---------- */
  lesson('Participle clauses: Having finished…, Built in 1900…', {
    id: 'participle-clauses', level: 'C1',
    title: 'Participle clauses',
    summary: {
      ru: 'Walking home, I met Tom. Having finished, she left. Built in 1900, the house… — сжатые придаточные.',
      de: 'Walking home, I met Tom. Having finished, she left. Built in 1900, the house… — verkürzte Nebensätze.'
    },
    explanation: {
      ru: '<p>Причастный оборот сжимает придаточное (время, причину, условие, результат). Он типичен для письменной речи и похож на русский деепричастный и причастный оборот.</p>' +
        '<ul>' +
        '<li><b>-ing</b> — одновременное активное действие или причина: <em><b>Walking</b> home, I met Tom.</em> (= While I was walking) <em><b>Not knowing</b> what to say, she smiled.</em> (= Because she didn’t know)</li>' +
        '<li><b>Having + V3</b> — действие <b>раньше</b> главного: <em><b>Having finished</b> the report, she went home.</em> (= After she had finished)</li>' +
        '<li><b>V3</b> (пассив): <em><b>Built</b> in 1900, the house needs repairs.</em> (= Because it was built) <em><b>Asked</b> about it, he refused to comment.</em></li>' +
        '<li>С союзами: <em>after/before/since/while/when + -ing</em>: <em><b>Before leaving</b>, check the windows.</em> <em><b>If used</b> correctly, it’s safe.</em></li>' +
        '<li>Сокращённые определительные придаточные: <em>The man <b>sitting</b> by the window is my boss. Goods <b>ordered</b> online arrive in two days.</em></li>' +
        '</ul>' +
        '<p><b>Главное правило</b>: подлежащее оборота = подлежащее главного предложения. Иначе получается «висячее причастие».</p>',
      de: '<p>Partizipialkonstruktionen verkürzen Nebensätze (Zeit, Grund, Bedingung). Sie sind typisch für die Schriftsprache — im Deutschen wirken sie oft gestelzt, im Englischen sind sie normal.</p>' +
        '<ul>' +
        '<li><b>-ing</b> — gleichzeitige aktive Handlung oder Grund: <em><b>Walking</b> home, I met Tom.</em> (= Als ich nach Hause ging) <em><b>Not knowing</b> what to say, she smiled.</em> (= Da sie nicht wusste)</li>' +
        '<li><b>Having + Partizip</b> — Handlung <b>vor</b> dem Hauptsatz: <em><b>Having finished</b> the report, she went home.</em> (= Nachdem sie … beendet hatte)</li>' +
        '<li><b>Partizip (Passiv)</b>: <em><b>Built</b> in 1900, the house needs repairs.</em> (= Da es 1900 gebaut wurde) <em><b>Asked</b> about it, he refused to comment.</em></li>' +
        '<li>Mit Konjunktion: <em>after/before/since/while/when + -ing</em>: <em><b>Before leaving</b>, check the windows.</em> <em><b>If used</b> correctly, it’s safe.</em></li>' +
        '<li>Verkürzte Relativsätze: <em>The man <b>sitting</b> by the window is my boss.</em> (= der Mann, der am Fenster sitzt)</li>' +
        '</ul>' +
        '<p><b>Hauptregel</b>: Das Subjekt der Konstruktion = Subjekt des Hauptsatzes, sonst entsteht ein „dangling participle“.</p>'
    },
    tables: [{
      caption: { ru: 'Три формы', de: 'Drei Formen' },
      head: { ru: ['Форма', 'Смысл', 'Пример'], de: ['Form', 'Bedeutung', 'Beispiel'] },
      deCols: [2],
      rows: {
        ru: [['-ing', 'одновременно / причина', 'Feeling tired, I went to bed.'], ['having + V3', 'раньше', 'Having lived in Spain, he speaks Spanish.'], ['V3', 'пассив', 'Written in 1850, the book is still popular.'], ['not + -ing', 'причина-отрицание', 'Not wanting to wake her, I left quietly.']],
        de: [['-ing', 'gleichzeitig / Grund', 'Feeling tired, I went to bed.'], ['having + Partizip', 'vorzeitig', 'Having lived in Spain, he speaks Spanish.'], ['Partizip', 'Passiv', 'Written in 1850, the book is still popular.'], ['not + -ing', 'verneinter Grund', 'Not wanting to wake her, I left quietly.']]
      }
    }],
    examples: [
      { t: '[[Having read]] the contract carefully, she signed it.', ru: 'Внимательно прочитав договор, она его подписала.', de: 'Nachdem sie den Vertrag sorgfältig gelesen hatte, unterschrieb sie ihn.' },
      { t: '[[Not having]] a car, we took the bus.', ru: 'Поскольку машины у нас не было, мы поехали на автобусе.', de: 'Da wir kein Auto hatten, nahmen wir den Bus.' },
      { t: '[[Seen]] from above, the city looks like a map.', ru: 'Если смотреть сверху, город похож на карту.', de: 'Von oben gesehen sieht die Stadt wie eine Karte aus.' },
      { t: 'Anyone [[wishing]] to attend should register by Friday.', ru: 'Все желающие присутствовать должны зарегистрироваться до пятницы.', de: 'Wer teilnehmen möchte, sollte sich bis Freitag anmelden.' }
    ],
    pitfalls: [
      { title: { ru: 'Висячее причастие', de: 'Dangling participle' },
        html: { ru: '<span class="wrong">Walking into the room, the lights went out.</span> (свет входил в комнату?) → <span class="right">Walking into the room, I noticed the lights went out.</span> / <span class="right">As I walked into the room, the lights went out.</span> Ср. русское «Подъезжая к станции, у меня слетела шляпа».', de: '<span class="wrong">Walking into the room, the lights went out.</span> (das Licht ging ins Zimmer?) → <span class="right">As I walked into the room, the lights went out.</span>' } },
      { title: { ru: 'having для предшествования', de: 'having für Vorzeitigkeit' },
        html: { ru: '<span class="wrong">Finishing the exam, he left.</span> подразумевает одновременность. Если сначала закончил: <span class="right">Having finished the exam, he left.</span>', de: '<span class="wrong">Finishing the exam, he left.</span> klingt gleichzeitig. Wenn erst fertig, dann weg: <span class="right">Having finished the exam, he left.</span>' } }
    ],
    drills: [
      { id: 'en-g-pc-1', kind: 'choice', q: '___ all his money, he had to borrow some from a friend.', options: ['Having spent', 'Spent', 'Spending it'], answer: 0,
        explain: { ru: 'Сначала потратил → Having + V3.', de: 'Zuerst ausgegeben → Having + Partizip.' } },
      { id: 'en-g-pc-2', kind: 'choice', q: '___ in 1889, the Eiffel Tower was meant to be temporary.', options: ['Completed', 'Completing', 'Having completed'], answer: 0,
        explain: { ru: 'Башню построили (пассив) → V3.', de: 'Der Turm wurde fertiggestellt (Passiv) → Partizip.' } },
      { id: 'en-g-pc-3', kind: 'gap', q: '___ (not / know) the way, we asked a local.', answer: 'Not knowing',
        explain: { ru: 'Причина-отрицание → Not + -ing.', de: 'Verneinter Grund → Not + -ing.' } },
      { id: 'en-g-pc-4', kind: 'choice', q: 'Which sentence is correct?', options: ['Driving to work, I saw an accident.', 'Driving to work, an accident happened.', 'Driven to work, I saw an accident.'], answer: 0,
        explain: { ru: 'Подлежащее оборота = I.', de: 'Subjekt der Konstruktion = I.' } },
      { id: 'en-g-pc-5', kind: 'gap', q: 'The woman ___ (stand) next to the door is our new manager.', answer: 'standing',
        explain: { ru: 'Сокращённое определительное (who is standing) → -ing.', de: 'Verkürzter Relativsatz (who is standing) → -ing.' } }
    ]
  });

  /* ---------- C1 · The subjunctive ---------- */
  lesson('The subjunctive: I suggest that he be…', {
    id: 'subjunctive', level: 'C1',
    title: 'The subjunctive and formal “should”',
    summary: {
      ru: 'It’s essential that she be on time. I recommend that he apply. If I were… — форма без окончаний в официальной речи.',
      de: 'It’s essential that she be on time. I recommend that he apply. If I were… — die endungslose Form in formeller Sprache.'
    },
    explanation: {
      ru: '<p>Английский субъюнктив — это <b>базовая форма глагола без -s и без прошедшего времени</b> для всех лиц. Он сохранился в нескольких конструкциях:</p>' +
        '<ul>' +
        '<li><b>Требование, предложение, важность</b> (mandative subjunctive): после <em>suggest, recommend, insist, demand, propose, request, ask</em> и <em>it is essential / vital / important / necessary that</em>: <em>I suggest that he <b>apply</b> early.</em> <em>It’s vital that she <b>be</b> informed.</em> Отрицание — <b>not + V</b>: <em>…that he <b>not be</b> told.</em></li>' +
        '<li>В британском английском вместо него часто <b>should + V</b>: <em>I suggest that he <b>should apply</b>.</em> Или обычное настоящее время в разговоре.</li>' +
        '<li><b>were</b> для нереального: <em>If I <b>were</b> you… I wish it <b>were</b> Friday. as if he <b>were</b> the boss.</em></li>' +
        '<li>Устойчивые формулы: <em>God save the King, so be it, be that as it may, come what may, if need be</em>.</li>' +
        '</ul>',
      de: '<p>Der englische Konjunktiv (subjunctive) ist die <b>Grundform des Verbs ohne -s und ohne Vergangenheit</b> für alle Personen. Er lebt in einigen Konstruktionen weiter:</p>' +
        '<ul>' +
        '<li><b>Forderung, Vorschlag, Wichtigkeit</b>: nach <em>suggest, recommend, insist, demand, propose, request</em> und <em>it is essential / vital / important that</em>: <em>I suggest that he <b>apply</b> early.</em> <em>It’s vital that she <b>be</b> informed.</em> Verneinung: <b>not + Verb</b>: <em>…that he <b>not be</b> told.</em></li>' +
        '<li>Im britischen Englisch oft <b>should + Verb</b>: <em>I suggest that he <b>should apply</b>.</em> Umgangssprachlich auch normales Präsens.</li>' +
        '<li><b>were</b> für Irreales (= Konjunktiv II): <em>If I <b>were</b> you… I wish it <b>were</b> Friday. as if he <b>were</b> the boss.</em></li>' +
        '<li>Feste Formeln: <em>God save the King, so be it, be that as it may, come what may, if need be</em>.</li>' +
        '</ul>'
    },
    examples: [
      { t: 'The doctor recommended that he [[take]] a week off.', ru: 'Врач рекомендовал ему взять неделю отдыха.', de: 'Der Arzt empfahl ihm, eine Woche freizunehmen.' },
      { t: 'It is essential that every passenger [[be]] seated during take-off.', ru: 'Обязательно, чтобы все пассажиры сидели во время взлёта.', de: 'Es ist unerlässlich, dass alle Passagiere beim Start sitzen.' },
      { t: 'They insisted that the meeting [[not be]] recorded.', ru: 'Они настояли, чтобы встречу не записывали.', de: 'Sie bestanden darauf, dass das Meeting nicht aufgezeichnet wird.' },
      { t: '[[Be that as it may]], we still need a decision.', ru: 'Как бы то ни было, решение всё равно нужно.', de: 'Wie dem auch sei, wir brauchen trotzdem eine Entscheidung.' }
    ],
    pitfalls: [
      { title: { ru: 'Без -s', de: 'Ohne -s' },
        html: { ru: '<span class="wrong">I suggest that she takes a break.</span> — разговорно возможно, но в формальном стиле <span class="right">…that she take a break</span> или <span class="right">…that she should take a break</span>.', de: '<span class="wrong">I suggest that she takes a break.</span> — umgangssprachlich möglich, formell aber <span class="right">…that she take a break</span> oder <span class="right">…that she should take a break</span>.' } },
      { title: { ru: 'suggest + to', de: 'suggest + to' },
        html: { ru: '<span class="wrong">I suggest him to apply.</span> → <span class="right">I suggest that he apply.</span> / <span class="right">I suggest applying.</span>', de: '<span class="wrong">I suggest him to apply.</span> → <span class="right">I suggest that he apply.</span> / <span class="right">I suggest applying.</span>' } }
    ],
    drills: [
      { id: 'en-g-sj-1', kind: 'choice', q: 'The committee demanded that the report ___ by Monday.', options: ['be submitted', 'is submitted', 'was submitted'], answer: 0,
        explain: { ru: 'demand that + субъюнктив (be + V3).', de: 'demand that + Subjunctive (be + Partizip).' } },
      { id: 'en-g-sj-2', kind: 'choice', q: 'It is important that he ___ the deadline.', options: ['not miss', 'doesn’t miss', 'not misses'], answer: 0,
        explain: { ru: 'Отрицание субъюнктива: not + базовая форма.', de: 'Verneinter Subjunctive: not + Grundform.' } },
      { id: 'en-g-sj-3', kind: 'gap', q: 'I recommend that she ___ (apply) for the scholarship.', answer: 'apply', accepted: ['should apply'],
        explain: { ru: 'recommend that + базовая форма (или should + V).', de: 'recommend that + Grundform (oder should + Verb).' } },
      { id: 'en-g-sj-4', kind: 'choice', q: 'He talks as if he ___ the owner of the company.', options: ['were', 'is being', 'be'], answer: 0,
        explain: { ru: 'Нереальное сравнение → were.', de: 'Irrealer Vergleich → were.' } }
    ]
  });

  /* ---------- C1 · Alternatives to if ---------- */
  lesson('Alternatives to if: unless, provided, should you…', {
    id: 'if-alternatives', level: 'C1',
    title: 'Alternatives to if',
    summary: {
      ru: 'provided that, as long as, unless, supposing, in case, otherwise, but for, Should you…, Were I to…, Had we known…',
      de: 'provided that, as long as, unless, supposing, in case, otherwise, but for, Should you…, Were I to…, Had we known…'
    },
    explanation: {
      ru: '<ul>' +
        '<li><b>unless</b> = if … not: <em>We’ll go <b>unless</b> it rains.</em></li>' +
        '<li><b>provided / providing (that), as long as, on condition that</b> — только при условии: <em>You can borrow it <b>as long as</b> you return it.</em></li>' +
        '<li><b>suppose / supposing / what if</b> — представим: <em><b>Supposing</b> you lost your job, what would you do?</em></li>' +
        '<li><b>in case</b> — на случай, если (мера предосторожности, <b>не</b> условие!): <em>Take an umbrella <b>in case</b> it rains.</em></li>' +
        '<li><b>otherwise / or else</b> — иначе: <em>Hurry, <b>otherwise</b> we’ll miss it.</em></li>' +
        '<li><b>but for / without</b> + сущ. — если бы не: <em><b>But for</b> your help, I would have failed.</em></li>' +
        '<li><b>Инверсия вместо if</b> (официально): <em><b>Should</b> you have any questions, contact us.</em> (= If you have) · <em><b>Were</b> I to win, I’d travel.</em> (= If I won) · <em><b>Had</b> we known, we’d have come.</em> (= If we had known). Отрицание без сокращения: <em>Had we <b>not</b> left…</em></li>' +
        '</ul>',
      de: '<ul>' +
        '<li><b>unless</b> = if … not (= es sei denn): <em>We’ll go <b>unless</b> it rains.</em></li>' +
        '<li><b>provided / providing (that), as long as, on condition that</b> = sofern, solange: <em>You can borrow it <b>as long as</b> you return it.</em></li>' +
        '<li><b>suppose / supposing / what if</b> = angenommen: <em><b>Supposing</b> you lost your job, what would you do?</em></li>' +
        '<li><b>in case</b> = für den Fall, dass (Vorsichtsmaßnahme, <b>keine</b> Bedingung!): <em>Take an umbrella <b>in case</b> it rains.</em> ≠ „falls“!</li>' +
        '<li><b>otherwise / or else</b> = sonst.</li>' +
        '<li><b>but for / without</b> + Nomen = wenn … nicht gewesen wäre: <em><b>But for</b> your help, I would have failed.</em></li>' +
        '<li><b>Inversion statt if</b> (formell, wie dt. „Sollten Sie…“, „Hätten wir…“): <em><b>Should</b> you have any questions, contact us.</em> · <em><b>Were</b> I to win, I’d travel.</em> · <em><b>Had</b> we known, we’d have come.</em> Verneinung ungekürzt: <em>Had we <b>not</b> left…</em></li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Инверсия вместо if', de: 'Inversion statt if' },
      head: { ru: ['С if', 'Без if'], de: ['Mit if', 'Ohne if'] },
      deCols: [0, 1],
      rows: [['If you need help, call me.', 'Should you need help, call me.'], ['If I were in charge, …', 'Were I in charge, …'], ['If he moved abroad, …', 'Were he to move abroad, …'], ['If we had known, …', 'Had we known, …'], ['If they hadn’t helped, …', 'Had they not helped, …']]
    }],
    examples: [
      { t: '[[Should]] the problem persist, please restart the device.', ru: 'Если проблема сохранится, перезапустите устройство.', de: 'Sollte das Problem weiter bestehen, starten Sie das Gerät bitte neu.' },
      { t: 'I’ll lend you my car [[provided that]] you fill it up.', ru: 'Я одолжу тебе машину при условии, что ты её заправишь.', de: 'Ich leihe dir mein Auto, sofern du es volltankst.' },
      { t: 'Save a copy [[in case]] the file gets corrupted.', ru: 'Сохрани копию на случай, если файл повредится.', de: 'Speichere eine Kopie, für den Fall, dass die Datei beschädigt wird.' },
      { t: '[[Had]] I known about the traffic, I would have left earlier.', ru: 'Знал бы я про пробки, выехал бы раньше.', de: 'Hätte ich von dem Stau gewusst, wäre ich früher losgefahren.' }
    ],
    pitfalls: [
      { title: { ru: 'in case ≠ if', de: 'in case ≠ if' },
        html: { ru: '<span class="right">Take a coat in case it gets cold</span> — возьми в любом случае, на всякий случай. <span class="right">Take a coat if it gets cold</span> — возьми, только если похолодает.', de: '<span class="right">Take a coat in case it gets cold</span> — nimm sie auf jeden Fall mit, vorsichtshalber. <span class="right">Take a coat if it gets cold</span> — nur wenn es kalt wird.' } },
      { title: { ru: 'Сокращение в инверсии', de: 'Keine Kurzform bei Inversion' },
        html: { ru: '<span class="wrong">Hadn’t we left early, …</span> → <span class="right">Had we not left early, …</span>', de: '<span class="wrong">Hadn’t we left early, …</span> → <span class="right">Had we not left early, …</span>' } }
    ],
    drills: [
      { id: 'en-g-ifa-1', kind: 'choice', q: '___ you require further information, please do not hesitate to contact us.', options: ['Should', 'Would', 'Unless'], answer: 0,
        explain: { ru: 'Официальное «если» → Should + подлежащее.', de: 'Formelles „falls“ → Should + Subjekt.' } },
      { id: 'en-g-ifa-2', kind: 'choice', q: 'Write down the number ___ you forget it.', options: ['in case', 'unless', 'provided'], answer: 0,
        explain: { ru: 'Мера предосторожности → in case.', de: 'Vorsichtsmaßnahme → in case.' } },
      { id: 'en-g-ifa-3', kind: 'gap', q: '___ we not taken a taxi, we would have missed the flight. (Inversion)', answer: 'Had',
        explain: { ru: 'Third Conditional без if: Had + подлежащее + not + V3.', de: 'Third Conditional ohne if: Had + Subjekt + not + Partizip.' } },
      { id: 'en-g-ifa-4', kind: 'choice', q: '___ the rain, the festival would have been perfect.', options: ['But for', 'Unless', 'Provided'], answer: 0,
        explain: { ru: 'Если бы не + существительное → But for.', de: 'Wenn … nicht gewesen wäre + Nomen → But for.' } },
      { id: 'en-g-ifa-5', kind: 'choice', q: 'You won’t get a refund ___ you have the receipt.', options: ['unless', 'in case', 'otherwise'], answer: 0,
        explain: { ru: 'unless = if … not.', de: 'unless = if … not.' } }
    ]
  });

  /* ---------- extra drills for the inversion lesson ---------- */
  var inv = pack.grammar.inversion;
  if (inv) {
    [
      { id: 'en-g-inv-4', kind: 'choice', q: 'Only after the meeting ___ how serious the problem was.', options: ['did I realise', 'I realised', 'I did realise'], answer: 0,
        explain: { ru: 'Only after… → инверсия в главной части.', de: 'Only after… → Inversion im Hauptsatz.' } },
      { id: 'en-g-inv-5', kind: 'gap', q: 'Not only ___ she speak French, but she also speaks Arabic. (do)', answer: 'does',
        explain: { ru: 'Not only + does + подлежащее + V.', de: 'Not only + does + Subjekt + Verb.' } }
    ].forEach(function (d) { GT.registerDrill(d, 'grammar', 'inversion'); inv.drills.push(d); });
    inv.pitfalls.push({ title: { ru: 'Инверсия только после ограничителя в начале', de: 'Inversion nur nach einschränkendem Ausdruck am Anfang' },
      html: { ru: 'Если never стоит в обычном месте — порядок обычный: <span class="right">I have never seen such chaos.</span> Инверсия — только когда наречие вынесено вперёд.', de: 'Steht never an normaler Stelle, gilt normale Wortstellung: <span class="right">I have never seen such chaos.</span> Inversion nur, wenn das Adverb vorne steht.' } });
  }
})();
