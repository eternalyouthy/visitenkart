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

/* === Content expansion 2026-11-27 (+5 C1 & +2 B1/B2 EN grammar lessons, +48 drills on thin lessons) === */
(function () {
  var pack = GT.packs.en || GT._target;
  if (!pack || !pack.config || !pack.config.TOPICS) return;
  function addLesson(topicName, page) {
    if (!pack.config.TOPICS.grammar.some(function (t) { return t.id === page.id; })) {
      pack.config.TOPICS.grammar.push({ id: page.id, name: topicName, level: page.level });
    }
    GT.registerGrammar(page);
  }

  // 1. C1: Ellipsis & substitution
  addLesson('Ellipsis & substitution: so/not, do so, one', {
    id: 'ellipsis-substitution',
    level: 'C1',
    title: { ru: 'Эллипсис и замещение: so, not, do so, one(s)', de: 'Ellipse und Substitution: so, not, do so, one(s)' },
    summary: {
      ru: 'I hope so / I don’t think so / do so / a green one — как избегать громоздких повторов в естественном C1 английском.',
      de: 'I hope so / I don’t think so / do so / a green one — unnötige Wiederholungen im C1-Englisch elegant vermeiden.'
    },
    explanation: {
      ru: '<p>На уровне C1 естественно сокращать повторяющиеся глаголы, существительные и целые придаточные с помощью точных заместителей:</p>' +
        '<ul>' +
        '<li><b>so / not после глаголов мнения и ожидания</b>: <em>think, believe, expect, hope, be afraid, suppose</em>. Положительно: <em>I think <b>so</b></em>. Отрицание у <em>hope / be afraid / guess</em> почти всегда с <b>not</b> (<em>I hope <b>not</b></em>, *I don’t hope so — ошибка!), а у <em>think / believe</em> — обычно <em>I don’t think <b>so</b></em>.</li>' +
        '<li><b>do so / do it / do that</b> — замена глагольной группы в формальном или связном тексте: <em>Those who wish to leave early may <b>do so</b>.</em></li>' +
        '<li><b>Эллипсис после to и вспомогательных глаголов</b>: <em>You don’t have to come if you don’t want <b>to</b>.</em> / <em>She didn’t sign, though she promised <b>to</b>.</em></li>' +
        '<li><b>one / ones</b> — только для исчисляемых существительных (никогда для неисчисляемых!): <em>this ticket → a cheaper <b>one</b></em>, но <em>cold water</em> (не *cold one).</li>' +
        '</ul>',
      de: '<p>Auf C1-Niveau vermeidet man Wiederholungen durch feste Kurzformen und Ersatzwörter:</p>' +
        '<ul>' +
        '<li><b>so / not nach Verben des Denkens/Hoffens</b>: positiv immer <em>I think <b>so</b></em>. Verneinung bei <em>hope, be afraid, guess</em> mit <b>not</b> (<em>I hope <b>not</b></em>, nicht *I don’t hope so); bei <em>think, believe</em> meist <em>I don’t think <b>so</b></em>.</li>' +
        '<li><b>do so</b> ersetzt formell eine ganze Verbgruppe: <em>Anyone wishing to apply should <b>do so</b> by Friday.</em></li>' +
        '<li><b>to-Ellipse & Hilfsverben</b>: <em>Stay if you want <b>to</b>.</em> / <em>I haven’t replied yet, though I ought <b>to have</b>.</em></li>' +
        '<li><b>one / ones</b> nur für zählbare Nomen, niemals für unzählbare (nicht *fresh milk → fresh one).</li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Отрицание с so и not', de: 'Verneinung mit so und not' },
      head: { ru: ['Глагол', 'Отрицание', 'Пометки'], de: ['Verb', 'Verneinung', 'Hinweis'] },
      deCols: [1],
      rows: {
        ru: [
          ['hope / be afraid', 'I hope not. / I’m afraid not.', '*I don’t hope so — неверно'],
          ['think / believe / expect', 'I don’t think so. / I expect not.', 'в think преобладает I don’t think so'],
          ['suppose / imagine / guess', 'I guess not. / I don’t suppose so.', 'оба варианта живые']
        ],
        de: [
          ['hope / be afraid', 'I hope not. / I’m afraid not.', '*I don’t hope so ist falsch'],
          ['think / believe / expect', 'I don’t think so. / I expect not.', 'bei think überwiegt I don’t think so'],
          ['suppose / imagine / guess', 'I guess not. / I don’t suppose so.', 'beide Varianten geläufig']
        ]
      }
    }],
    examples: [
      { t: 'Will the train be delayed again? — I certainly [[hope not]].', ru: 'Поезд снова опоздает? — Очень надеюсь, что нет.', de: 'Hat der Zug wieder Verspätung? — Ich hoffe doch nicht.' },
      { t: 'Applicants wishing to withdraw may [[do so]] before Monday.', ru: 'Кандидаты, желающие отозвать заявку, могут сделать это до понедельника.', de: 'Bewerber, die zurückziehen möchten, können dies bis Montag tun.' },
      { t: 'I didn’t call her back, even though I had intended [[to]].', ru: 'Я не перезвонил ей, хотя и собирался.', de: 'Ich habe sie nicht zurückgerufen, obwohl ich es vorhatte.' },
      { t: 'Keep the black folder and pass me the blue [[one]].', ru: 'Оставь чёрную папку себе и передай мне синюю.', de: 'Behalte den schwarzen Ordner und reich mir den blauen.' }
    ],
    pitfalls: [{
      title: { ru: '*I don’t hope so — частая ошибка', de: '*I don’t hope so ist falsch' },
      html: {
        ru: '<span class="wrong">Will it rain? — I don’t hope so.</span> → <span class="right">I hope not.</span>',
        de: '<span class="wrong">Will it rain? — I don’t hope so.</span> → <span class="right">I hope not.</span>'
      }
    }],
    drills: [
      { id: 'en-g-x27-el-1', kind: 'choice', q: 'Did we miss the last bus? — ___, unfortunately.', options: ['I’m afraid so', 'I’m afraid it', 'I think yes'], answer: 0, explain: { ru: 'Согласие с неприятным фактом → I’m afraid so.', de: 'Bedauernde Bestätigung → I’m afraid so.' } },
      { id: 'en-g-x27-el-2', kind: 'choice', q: 'Do you think they will cancel the workshop? — I ___!', options: ['hope not', 'don’t hope so', 'not hope'], answer: 0, explain: { ru: 'С hope отрицание строится только через I hope not.', de: 'Bei hope steht die Verneinung immer als I hope not.' } },
      { id: 'en-g-x27-el-3', kind: 'gap', q: 'Members who wish to vote online may do ___ until 5 p.m.', answer: 'so', explain: { ru: 'Формальное замещение глагольного действия → do so.', de: 'Formelle Ersetzung einer Handlung → do so.' } },
      { id: 'en-g-x27-el-4', kind: 'choice', q: 'She offered to help, even though she didn’t need ___.', options: ['to', 'so', 'do'], answer: 0, explain: { ru: 'После need сохраняется одиночное to (эллипсис инфинитива).', de: 'Nach need bleibt das einzelne to erhalten.' } },
      { id: 'en-g-x27-el-5', kind: 'choice', q: 'These headphones broke, so I bought new ___.', options: ['ones', 'one', 'them'], answer: 0, explain: { ru: 'headphones всегда мн. число → ones.', de: 'headphones steht im Plural → ones.' } },
      { id: 'en-g-x27-el-6', kind: 'gap', q: 'Have you seen my charger? — I don’t think ___, sorry.', answer: 'so', explain: { ru: 'Отрицание с think → I don’t think so.', de: 'Verneinung mit think → I don’t think so.' } },
      { id: 'en-g-x27-el-7', kind: 'choice', q: 'Would you prefer white coffee or black ___?', options: ['coffee', 'one', 'ones'], answer: 0, explain: { ru: 'coffee как напиток неисчисляемо — one здесь невозможно!', de: 'coffee ist hier unzählbar — daher kein one!' } },
      { id: 'en-g-x27-el-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Я не собирался оставаться, но пришлось».', de: 'Bilde den Satz: „Ich wollte nicht bleiben, aber ich musste.“' }, tokens: ['I didn’t', 'want to stay,', 'but I', 'had to.'], answer: 'I didn’t want to stay, but I had to.', explain: { ru: 'had to закрывает эллипсис без повторения stay.', de: 'had to beendet die Ellipse ohne Wiederholung von stay.' } }
    ]
  });

  // 2. C1: Fronting & stylistic emphasis
  addLesson('Fronting & stylistic emphasis', {
    id: 'fronting-emphasis',
    level: 'C1',
    title: { ru: 'Вынесение в начало (Fronting) и стилистический акцент', de: 'Voranstellung (Fronting) und stilistische Hervorhebung' },
    summary: {
      ru: 'What surprised me was… / All I need is… / Strange though it may sound… — акценты для эссе, докладов и точной речи.',
      de: 'What surprised me was… / All I need is… / Strange though it may sound… — gezielte Betonung auf C1.'
    },
    explanation: {
      ru: '<p>Вынесение элемента в начало предложения (<b>fronting</b>) или псевдо-расщепление (<b>wh-cleft</b>) позволяет чётко выделить контраст или вывод:</p>' +
        '<ul>' +
        '<li><b>What-cleft</b>: <em><b>What we need is</b> clearer documentation.</em> Показывает главное требование/результат. С <em>All I want / All they did was</em> работает та же схема.</li>' +
        '<li><b>Прилагательное + though / as</b> (уступка): <em><b>Difficult though</b> the task was, we finished on time.</em> (Прилагательное выносится перед <em>though/as</em>!).</li>' +
        '<li><b>Вынесенное дополнение для контраста</b>: <em><b>That question</b> I simply cannot answer.</em> (Обычный порядок подлежащее + глагол остаётся, если элемент не отрицательный!).</li>' +
        '<li><b>So / Such в начале с инверсией</b>: <em><b>Such was the storm that</b> flights stopped.</em> / <em><b>So loudly did he speak</b> that everyone turned.</em></li>' +
        '</ul>',
      de: '<p>Durch <b>Fronting</b> oder <b>Wh-Cleft-Sätze</b> rückt man Kontraste und Kernpunkte wirkungsvoll an den Anfang:</p>' +
        '<ul>' +
        '<li><b>What-Cleft</b>: <em><b>What we need is</b> clearer documentation.</em> Ebenso mit <em>All I need is…</em></li>' +
        '<li><b>Adjektiv + though / as</b> (Konzessiv): <em><b>Strange as</b> it may seem, the method works.</em></li>' +
        '<li><b>Objekt-Fronting</b> für Kontrast: <em><b>His enthusiasm</b> I admire; his planning I doubt.</em></li>' +
        '<li><b>So / Such am Satzanfang</b> löst Inversion aus: <em><b>So severe was</b> the drought that crops failed.</em></li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Инструменты акцента на уровне C1', de: 'C1-Muster für Hervorhebung' },
      head: { ru: ['Модель', 'Пример'], de: ['Muster', 'Beispiel'] },
      deCols: [0, 1],
      rows: [
        ['What + S + V + is/was', 'What really matters is reliability.'],
        ['All + S + do + is (to) V', 'All you have to do is sign here.'],
        ['Adj. + though/as + S + V', 'Tired though she was, she stayed.'],
        ['So + Adj. + Aux + S', 'So complex was the bug that two teams investigated.']
      ]
    }],
    examples: [
      { t: '[[What surprised everyone was]] how calmly she handled the crisis.', ru: 'Что всех удивило, так это то, как спокойно она справилась с кризисом.', de: 'Was alle überraschte, war, wie ruhig sie die Krise meisterte.' },
      { t: '[[All I asked for]] was a brief update before noon.', ru: 'Всё, о чём я просил, — короткое обновление до полудня.', de: 'Alles, worum ich bat, war ein kurzes Update vor Mittag.' },
      { t: '[[Unlikely though]] it may sound, the old server outperformed the new one.', ru: 'Как бы невероятно это ни звучало, старый сервер обогнал новый.', de: 'So unwahrscheinlich es klingen mag, der alte Server war schneller als der neue.' },
      { t: '[[Such was the demand]] that tickets sold out in five minutes.', ru: 'Спрос оказался таким, что билеты раскупили за пять минут.', de: 'Die Nachfrage war so groß, dass die Tickets in fünf Minuten ausverkauft waren.' }
    ],
    pitfalls: [{
      title: { ru: 'Порядок после though при fronting', de: 'Wortstellung bei vorangestelltem Adjektiv' },
      html: {
        ru: '<span class="wrong">Although strange it sounds…</span> → <span class="right">Strange though it sounds…</span>',
        de: '<span class="wrong">Although strange it sounds…</span> → <span class="right">Strange though it sounds…</span>'
      }
    }],
    drills: [
      { id: 'en-g-x27-fr-1', kind: 'choice', q: '___ we urgently need is a simpler sign-up flow.', options: ['What', 'That', 'Which'], answer: 0, explain: { ru: 'What-cleft: What we need is… («То, что нам нужно, — это…»).', de: 'What-Cleft: What we need is…' } },
      { id: 'en-g-x27-fr-2', kind: 'choice', q: 'Expensive ___ the software is, it saves hours every week.', options: ['though', 'although', 'however'], answer: 0, explain: { ru: 'Прилагательное + though/as в начале = «хотя и…».', de: 'Adjektiv + though/as am Anfang drückt einen Gegensatz aus.' } },
      { id: 'en-g-x27-fr-3', kind: 'gap', q: '___ you need to do is restart the router once.', answer: 'All', explain: { ru: 'All you need to do is… — мягкое выделение единственного шага.', de: 'All you need to do is… betont den einen nötigen Schritt.' } },
      { id: 'en-g-x27-fr-4', kind: 'choice', q: 'So loud ___ the applause that the speaker paused.', options: ['was', 'it was', 'did be'], answer: 0, explain: { ru: 'Вынесенное So + прилагательное вызывает инверсию was the applause.', de: 'Vorangestelltes So + Adjektiv erfordert Inversion (was the applause).' } },
      { id: 'en-g-x27-fr-5', kind: 'choice', q: 'What happened next ___ nobody expected.', options: ['was something', 'were what', 'it was'], answer: 0, explain: { ru: 'What happened next (ед. ч.) + was something…', de: 'What happened next (Singular) + was something…' } },
      { id: 'en-g-x27-fr-6', kind: 'gap', q: '___ was the confusion that nobody knew which room to enter.', answer: 'Such', explain: { ru: 'Such was + существительное + that… («таким было недоразумение, что…»).', de: 'Such was + Nomen + that… („so groß war die Verwirrung, dass…“).' } },
      { id: 'en-g-x27-fr-7', kind: 'choice', q: 'Try ___ he might, he couldn’t open the jammed window.', options: ['as', 'although', 'so'], answer: 0, explain: { ru: 'Глагол + as + подлежащее + might = «как бы ни старался».', de: 'Verb + as + Subjekt + might = „so sehr er es auch versuchte“.' } },
      { id: 'en-g-x27-fr-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Что действительно помогает, так это регулярная обратная связь».', de: 'Bilde den Satz: „Was wirklich hilft, ist regelmäßiges Feedback.“' }, tokens: ['What', 'really helps', 'is regular', 'feedback.'], answer: 'What really helps is regular feedback.', explain: { ru: 'What-cleft ставит фокус на regular feedback в конце.', de: 'Der What-Cleft lenkt den Fokus ans Ende auf regular feedback.' } }
    ]
  });

  // 3. C1: Discourse markers
  addLesson('C1 discourse markers: albeit, nonetheless, inasmuch as', {
    id: 'discourse-markers-c1',
    level: 'C1',
    title: { ru: 'Дискурсивные связки C1: albeit, nonetheless, conversely…', de: 'C1-Diskursmarker: albeit, nonetheless, conversely…' },
    summary: {
      ru: 'nonetheless, albeit, inasmuch as, conversely, notwithstanding — точные связки для аргументации, уступки и контраста.',
      de: 'nonetheless, albeit, inasmuch as, conversely, notwithstanding — präzise Verknüpfungen für Argumentation und Sachtexte.'
    },
    explanation: {
      ru: '<p>На уровне C1 связки отличаются грамматической ролью — важно не путать союзы, наречия и предлоги:</p>' +
        '<ul>' +
        '<li><b>albeit</b> (= хотя и; перед прилагательным, наречием или предложной группой, <b>без глагола</b>!): <em>a useful report, <b>albeit</b> a brief one.</em></li>' +
        '<li><b>nonetheless / nevertheless</b> (= тем не менее; вводное наречие между предложениями с точкой с запятой или запятыми).</li>' +
        '<li><b>conversely / by contrast</b> (= наоборот, с другой стороны; чёткое противопоставление).</li>' +
        '<li><b>inasmuch as</b> (= поскольку, в той мере в какой; уточняет причину или границу утверждения).</li>' +
        '<li><b>notwithstanding / regardless of</b> (= несмотря на + существительное / -ing).</li>' +
        '</ul>',
      de: '<p>Auf C1 unterscheiden sich Diskursmarker in ihrer Wortart (Konjunktion vs. Adverb vs. Präposition):</p>' +
        '<ul>' +
        '<li><b>albeit</b> („wenngleich / wenn auch“) steht vor Phrasen ohne finites Verb: <em>progress, <b>albeit</b> slow.</em></li>' +
        '<li><b>nonetheless / nevertheless</b> („dennoch“) leitet als Adverb einen neuen Hauptsatz ein.</li>' +
        '<li><b>conversely</b> („umgekehrt / im Gegenteil“) markiert eine gegenläufige Aussage.</li>' +
        '<li><b>inasmuch as</b> („insofern als / da“) präzisiert Grund oder Geltungsbereich.</li>' +
        '<li><b>notwithstanding</b> („ungeachtet + Nomen“) fungiert als gehobene Präposition.</li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Грамматическая роль связок C1', de: 'Grammatische Rolle der C1-Marker' },
      head: { ru: ['Связка', 'Часть речи / конструкция', 'Функция'], de: ['Marker', 'Struktur', 'Funktion'] },
      deCols: [0],
      rows: {
        ru: [
          ['albeit + Adj./NP', 'без глагола', 'оговорка («хотя и»)'],
          ['nonetheless / nevertheless', 'наречие (после ; или .)', 'уступка («тем не менее»)'],
          ['conversely', 'наречие', 'обратный контраст («напротив»)'],
          ['inasmuch as + Clause', 'подчинительный союз', 'уточняющая причина («поскольку»)'],
          ['by the same token', 'вводная фраза', 'аналогичный довод («по той же логике»)']
        ],
        de: [
          ['albeit + Adj./NP', 'ohne finites Verb', 'Einschränkung („wenn auch“)'],
          ['nonetheless / nevertheless', 'Adverb (nach ; oder .)', 'Konzession („dennoch“)'],
          ['conversely', 'Adverb', 'Gegenüberstellung („umgekehrt“)'],
          ['inasmuch as + Satz', 'Nebensatzkonjunktion', 'Begründung („insofern als“)'],
          ['by the same token', 'Einleitung', 'paralleles Argument („ebenso“)']
        ]
      }
    }],
    examples: [
      { t: 'The rollout succeeded, [[albeit]] with a two-day delay.', ru: 'Запуск прошёл успешно, хотя и с двухдневной задержкой.', de: 'Die Einführung gelang, wenn auch mit zwei Tagen Verspätung.' },
      { t: 'The terms were strict; [[nonetheless]], both sides signed on time.', ru: 'Условия были жёсткими; тем не менее обе стороны подписали вовремя.', de: 'Die Bedingungen waren streng; dennoch unterschrieben beide Seiten pünktlich.' },
      { t: 'Urban rents climbed sharply; [[conversely]], rural prices remained flat.', ru: 'Городская аренда резко выросла; напротив, цены в пригородах остались прежними.', de: 'Die Stadtmieten stiegen stark; umgekehrt blieben ländliche Preise stabil.' },
      { t: 'The rule is fair [[inasmuch as]] it treats new and existing clients alike.', ru: 'Правило справедливо в той мере, в какой оно одинаково относится к новым и старым клиентам.', de: 'Die Regel ist fair, insofern als sie neue und bestehende Kunden gleich behandelt.' }
    ],
    pitfalls: [{
      title: { ru: 'После albeit не ставят придаточное с личным глаголом', de: 'Kein vollständiger Nebensatz nach albeit' },
      html: {
        ru: '<span class="wrong">The tool works, albeit it is slow.</span> → <span class="right">The tool works, albeit slowly.</span>',
        de: '<span class="wrong">The tool works, albeit it is slow.</span> → <span class="right">The tool works, albeit slowly.</span>'
      }
    }],
    drills: [
      { id: 'en-g-x27-dm-1', kind: 'choice', q: 'She accepted the role, ___ with slightly revised duties.', options: ['albeit', 'even though', 'despite'], answer: 0, explain: { ru: 'Перед предложной группой (with…) без глагола идеально подходит albeit.', de: 'Vor einer Präpositionalphrase ohne Verb passt albeit perfekt.' } },
      { id: 'en-g-x27-dm-2', kind: 'choice', q: 'Data protection costs money; ___, skipping it risks far heavier fines.', options: ['conversely / by contrast', 'albeit', 'provided that'], answer: 0, explain: { ru: 'Противопоставление двух последствий → conversely / by contrast.', de: 'Gegenüberstellung zweier Seiten → conversely / by contrast.' } },
      { id: 'en-g-x27-dm-3', kind: 'gap', q: 'The evidence is circumstantial; ___, the audit committee took it seriously. (тем не менее)', answer: 'nonetheless', explain: { ru: 'nonetheless (или nevertheless) вводит уступительный контраст после точки с запятой.', de: 'nonetheless drückt nach Semikolon einen Einwand („dennoch“) aus.' } },
      { id: 'en-g-x27-dm-4', kind: 'choice', q: 'The reform matters ___ it cuts paperwork for small firms.', options: ['inasmuch as', 'notwithstanding', 'albeit'], answer: 0, explain: { ru: 'Перед полноценным придаточным (it cuts…) нужен союз inasmuch as («поскольку»).', de: 'Vor einem vollständigen Nebensatz steht die Konjunktion inasmuch as.' } },
      { id: 'en-g-x27-dm-5', kind: 'choice', q: '___ the initial sceptics, the pilot turned a modest profit.', options: ['Notwithstanding', 'Whereas', 'Nonetheless'], answer: 0, explain: { ru: 'Перед именной группой («несмотря на…») → предлог Notwithstanding.', de: 'Vor einer Nominalgruppe steht die Präposition Notwithstanding.' } },
      { id: 'en-g-x27-dm-6', kind: 'gap', q: 'Automation cuts errors; by the same ___, it demands cleaner input data.', answer: 'token', explain: { ru: 'by the same token = «по той же причине / с другой стороны той же медали».', de: 'by the same token = „aus demselben Grund / ebenso“.' } },
      { id: 'en-g-x27-dm-7', kind: 'choice', q: 'Which sentence is grammatically sound?', options: ['It was a worthwhile trip, albeit exhausting.', 'It was a worthwhile trip, albeit it exhausted us.', 'Nonethless the cost, we went ahead.'], answer: 0, explain: { ru: 'albeit + прилагательное (exhausting) корректно, а nonetheless требует запятой и предложения.', de: 'albeit + Adjektiv (exhausting) ist richtig; nonetheless steht nicht als Präposition.' } },
      { id: 'en-g-x27-dm-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Прогноз выглядит обнадёживающе, хотя и остаётся осторожным».', de: 'Bilde den Satz: „Die Prognose wirkt ermutigend, wenn auch vorsichtig.“' }, tokens: ['The outlook', 'appears encouraging,', 'albeit', 'cautious.'], answer: 'The outlook appears encouraging, albeit cautious.', explain: { ru: 'albeit + прилагательное кратко вводит оговорку.', de: 'albeit + Adjektiv kürzt den Nebensatz elegant ab.' } }
    ]
  });

  // 4. C1: Advanced modality & epistemic hedging
  addLesson('Advanced modality: bound to, may well, might as well', {
    id: 'advanced-modality',
    level: 'C1',
    title: { ru: 'Сложная модальность: bound to, may well, might as well', de: 'Erweiterte Modalität: bound to, may well, might as well' },
    summary: {
      ru: 'bound to happen, liable to fail, may well be right, might as well start, needn’t have worried — оттенки неизбежности, оценки и допущения.',
      de: 'bound to happen, liable to fail, may well be right, might as well start — Abstufungen von Sicherheit und Zweckmäßigkeit.'
    },
    explanation: {
      ru: '<p>На C1 модальность часто строится полу-модальными прилагательными и сочетаниями с <em>may/might</em>:</p>' +
        '<ul>' +
        '<li><b>be bound to + V</b> — практически неизбежно: <em>Prices are <b>bound to</b> rise in winter.</em></li>' +
        '<li><b>be liable to + V</b> — склонен / подвержен (обычно о сбое или риске): <em>Untested code is <b>liable to</b> break.</em></li>' +
        '<li><b>may well / might well + V</b> — вполне вероятно / скорее всего: <em>You <b>may well</b> be right about the timing.</em></li>' +
        '<li><b>might as well + V</b> — «с тем же успехом можно / раз уж так, проще…»: <em>Since we’re waiting, we <b>might as well</b> review the notes.</em></li>' +
        '<li><b>needn’t have V3</b> (сделал, хотя не нужно было) vs. <b>didn’t need to V</b> (не нужно было, и не делал).</li>' +
        '</ul>',
      de: '<p>Auf C1 werden feine Abstufungen durch Halbmodalformen und feste Modalverbindungen ausgedrückt:</p>' +
        '<ul>' +
        '<li><b>be bound to + V</b> — nahezu unausweichlich: <em>Mistakes are <b>bound to</b> happen under stress.</em></li>' +
        '<li><b>be liable to + V</b> — neigt dazu (oft bei Störungen): <em>Old pipes are <b>liable to</b> leak.</em></li>' +
        '<li><b>may well / might well + V</b> — durchaus möglich / wahrscheinlich: <em>She <b>may well</b> accept the offer.</em></li>' +
        '<li><b>might as well + V</b> — „da können wir ebenso gut…“: <em>We <b>might as well</b> start early.</em></li>' +
        '<li><b>needn’t have V3</b> (unnötigerweise getan) vs. <b>didn’t need to V</b> (war nicht nötig).</li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Тонкие различия в C1-модальности', de: 'Feinunterschiede in der C1-Modalität' },
      head: { ru: ['Выражение', 'Значение', 'Пример'], de: ['Ausdruck', 'Bedeutung', 'Beispiel'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['be bound to V', 'неизбежно (~99%)', 'This shortcut is bound to cause bugs later.'],
          ['may well V', 'вполне вероятно', 'The meeting may well run until six.'],
          ['might as well V', 'разумно/остаётся просто…', 'The lift is out — we might as well take the stairs.'],
          ['needn’t have V3', 'сделали зря (было лишним)', 'You needn’t have brought cash; cards work.']
        ],
        de: [
          ['be bound to V', 'zwangsläufig (~99%)', 'This shortcut is bound to cause bugs later.'],
          ['may well V', 'durchaus möglich', 'The meeting may well run until six.'],
          ['might as well V', 'genauso gut können', 'The lift is out — we might as well take the stairs.'],
          ['needn’t have V3', 'unnötig getan haben', 'You needn’t have brought cash; cards work.']
        ]
      }
    }],
    examples: [
      { t: 'If nobody tests the backup, something is [[bound to]] go wrong.', ru: 'Если никто не проверяет резервную копию, что-нибудь неизбежно сломается.', de: 'Wenn niemand das Backup testet, geht zwangsläufig etwas schief.' },
      { t: 'She [[may well]] already know about the schedule change.', ru: 'Она вполне может уже знать о переносе графика.', de: 'Sie weiß möglicherweise schon von der Terminänderung.' },
      { t: 'The train isn’t due for 40 minutes, so we [[might as well]] grab coffee.', ru: 'Поезд будет только через 40 минут, так что можем заодно взять кофе.', de: 'Der Zug kommt erst in 40 Minuten, also können wir genauso gut Kaffee holen.' },
      { t: 'You [[needn’t have]] printed fifty copies — half the room joined online.', ru: 'Не стоило печатать пятьдесят копий — половина участников подключилась онлайн.', de: 'Du hättest nicht fünfzig Kopien drucken müssen — die Hälfte war online dabei.' }
    ],
    pitfalls: [{
      title: { ru: 'may well ≠ might as well', de: 'may well ≠ might as well' },
      html: {
        ru: '<em>He may well refuse</em> = «вполне может отказаться» (вероятность). <em>We might as well leave</em> = «раз такое дело, проще уйти» (целесообразность).',
        de: '<em>He may well refuse</em> = „er lehnt vielleicht ab“. <em>We might as well leave</em> = „da können wir genauso gut gehen“.'
      }
    }],
    drills: [
      { id: 'en-g-x27-am-1', kind: 'choice', q: 'Leaving passwords in plain text is ___ lead to a breach sooner or later.', options: ['bound to', 'might as well', 'liable'], answer: 0, explain: { ru: 'is bound to + V = практически неизбежно приведёт.', de: 'is bound to + Infinitiv = führt mit Sicherheit zu…' } },
      { id: 'en-g-x27-am-2', kind: 'choice', q: 'Don’t throw away the packaging yet — we ___ need it for the return.', options: ['may well', 'might as well', 'are bound'], answer: 0, explain: { ru: 'may well = «вполне может понадобиться».', de: 'may well = „möglicherweise durchaus brauchen“.' } },
      { id: 'en-g-x27-am-3', kind: 'gap', q: 'No one else is coming, so we ___ as well wrap up the call.', answer: 'might', explain: { ru: 'Устойчивое выражение might as well + V.', de: 'Feste Wendung: might as well + Infinitiv.' } },
      { id: 'en-g-x27-am-4', kind: 'choice', q: 'You ___ worried — the client loved the prototype!', options: ['needn’t have', 'didn’t need', 'mustn’t have'], answer: 0, explain: { ru: 'Зря переживал (действие было совершено напрасно) → needn’t have + V3.', de: 'Unnötige Sorge in der Vergangenheit → needn’t have + Partizip.' } },
      { id: 'en-g-x27-am-5', kind: 'choice', q: 'That wooden bridge is ___ freeze over in January, so walk carefully.', options: ['liable to', 'may well', 'needn’t'], answer: 0, explain: { ru: 'is liable to + V = «имеет склонность / рискует покрыться льдом».', de: 'is liable to + V = „neigt dazu“ (oft bei Risiken).' } },
      { id: 'en-g-x27-am-6', kind: 'gap', q: 'I had already paid online, so I didn’t need ___ queue at the desk.', answer: 'to', explain: { ru: 'didn’t need to + V (действие не потребовалось и не совершалось).', de: 'didn’t need to + Infinitiv (war nicht nötig und wurde unterlassen).' } },
      { id: 'en-g-x27-am-7', kind: 'choice', q: 'Could he have forgotten? — He ___, given how hectic Monday was.', options: ['might well have', 'is bound to', 'might as well have'], answer: 0, explain: { ru: '«Вполне мог (тогда) забыть» → might well have (эллипсис V3).', de: '„Das könnte er damals durchaus“ → might well have.' } },
      { id: 'en-g-x27-am-8', kind: 'reorder', q: { ru: 'Соберите фразу: «После стольких изменений ошибки почти неизбежны».', de: 'Bilde den Satz: „Nach so vielen Änderungen passieren Fehler zwangsläufig.“' }, tokens: ['Mistakes', 'are bound', 'to happen', 'after so many changes.'], answer: 'Mistakes are bound to happen after so many changes.', explain: { ru: 'are bound to happen — стандартная C1 формула неизбежности.', de: 'are bound to happen drückt Zwangsläufigkeit aus.' } }
    ]
  });

  // 5. C1: Complex passive & impersonal reporting
  addLesson('Complex passive: reporting, passive -ing & infinitives', {
    id: 'complex-passive-c1',
    level: 'C1',
    title: { ru: 'Сложный пассив: reporting infinitives и пассивный герундий', de: 'Komplexes Passiv: Reporting-Infinitive und Passiv-Gerundium' },
    summary: {
      ru: 'is thought to have left / avoid being interrupted / to be reviewed — пассив с перфектным инфинитивом, -ing и каузативом.',
      de: 'is thought to have left / avoid being interrupted / to be reviewed — gehobene Passivstrukturen auf C1.'
    },
    explanation: {
      ru: '<p>На C1 пассив регулярно встраивается внутрь инфинитивных, герундиальных и отчётных конструкций:</p>' +
        '<ul>' +
        '<li><b>Персональное отчётное пассивное сказуемое</b>: настоящее — <em>She is said <b>to live</b> in Vienna</em>; длительное — <em><b>to be working</b> on</em>; прошедшее — <em>The data is believed <b>to have been leaked</b> earlier.</em></li>' +
        '<li><b>Пассивный герундий (being + V3)</b> после предлогов и глаголов (<em>avoid, risk, resent, complain about, look forward to</em>): <em>Nobody likes <b>being kept</b> waiting.</em></li>' +
        '<li><b>Пассивный инфинитив (to be + V3 / to have been + V3)</b>: <em>The draft needs <b>to be checked</b>.</em> / <em>I’d love <b>to have been invited</b>.</em></li>' +
        '<li><b>Пассивный оттенок с get / have someone do vs. get something done</b>: <em>We had the auditor review it</em> (поручили сделать) vs. <em>We had it reviewed</em> (отдали на проверку).</li>' +
        '</ul>',
      de: '<p>Auf C1 erscheint das Passiv häufig eingebettet in Infinitive, Gerundien und Berichtssätze:</p>' +
        '<ul>' +
        '<li><b>Persönlicher Bericht mit Passiv + Infinitiv</b>: Gegenwart — <em>is said <b>to be</b></em>; Verlauf — <em><b>to be working</b></em>; Vergangenheit — <em>is believed <b>to have been sold</b></em>.</li>' +
        '<li><b>Passiv-Gerundium (being + V3)</b> nach Präpositionen/Verben: <em>He dislikes <b>being interrupted</b>.</em></li>' +
        '<li><b>Passiv-Infinitiv (to be + V3)</b>: <em>There is still work <b>to be done</b>.</em></li>' +
        '<li><b>Kausativ aktiv vs. passiv</b>: <em>have someone check X</em> vs. <em>have X checked</em>.</li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Временное согласование в reporting passive', de: 'Zeitverhältnisse beim Reporting Passive' },
      head: { ru: ['Время события', 'Форма инфинитива', 'Пример'], de: ['Zeitbezug', 'Infinitivform', 'Beispiel'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['сейчас / обычно', 'to + V', 'He is known to work remotely.'],
          ['в процессе сейчас', 'to be + V-ing', 'They are thought to be negotiating a merger.'],
          ['в прошлом (актив)', 'to have + V3', 'She is rumoured to have resigned yesterday.'],
          ['в прошлом (пассив)', 'to have been + V3', 'The parcel is believed to have been delivered.']
        ],
        de: [
          ['jetzt / allgemein', 'to + V', 'He is known to work remotely.'],
          ['gerade laufend', 'to be + V-ing', 'They are thought to be negotiating a merger.'],
          ['Vergangenheit (Aktiv)', 'to have + V3', 'She is rumoured to have resigned yesterday.'],
          ['Vergangenheit (Passiv)', 'to have been + V3', 'The parcel is believed to have been delivered.']
        ]
      }
    }],
    examples: [
      { t: 'The lost manuscript is believed [[to have been written]] around 1790.', ru: 'Считается, что утерянная рукопись была написана около 1790 года.', de: 'Das verschollene Manuskript soll um 1790 verfasst worden sein.' },
      { t: 'Senior managers dislike [[being kept]] in the dark during outages.', ru: 'Руководители не любят, когда их держат в неведении во время сбоев.', de: 'Führungskräfte mögen es nicht, bei Ausfällen im Dunkeln gelassen zu werden.' },
      { t: 'All safety checks need [[to be completed]] before takeoff.', ru: 'Все проверки безопасности должны быть завершены до вылета.', de: 'Alle Sicherheitsprüfungen müssen vor dem Abflug abgeschlossen sein.' },
      { t: 'We [[had our accounts audited]] by an external firm last month.', ru: 'В прошлом месяце мы провели аудит отчётности силами внешней компании.', de: 'Wir ließen unsere Bücher letzten Monat von einer externen Firma prüfen.' }
    ],
    pitfalls: [{
      title: { ru: 'Нельзя терять been в пассивном перфектном инфинитиве', de: 'been im passiven Perfekt-Infinitiv nicht vergessen' },
      html: {
        ru: '<span class="wrong">The letter is thought to have sent yesterday.</span> → <span class="right">The letter is thought to have been sent yesterday.</span>',
        de: '<span class="wrong">The letter is thought to have sent yesterday.</span> → <span class="right">The letter is thought to have been sent yesterday.</span>'
      }
    }],
    drills: [
      { id: 'en-g-x27-cp-1', kind: 'choice', q: 'The company is rumoured ___ talks with two investors right now.', options: ['to be holding', 'to have held', 'holding'], answer: 0, explain: { ru: 'Действие происходит прямо сейчас → продолжительный инфинитив to be holding.', de: 'Gegenwärtiger Verlauf → Verlaufsinfinitiv to be holding.' } },
      { id: 'en-g-x27-cp-2', kind: 'choice', q: 'No one enjoys ___ in front of colleagues.', options: ['being criticised', 'to criticise', 'been criticised'], answer: 0, explain: { ru: 'После enjoy нужен герундий; пассивный герундий → being criticised.', de: 'Nach enjoy folgt das Gerundium; passiv → being criticised.' } },
      { id: 'en-g-x27-cp-3', kind: 'gap', q: 'The ancient coin is thought to have ___ struck in Alexandria. (be)', answer: 'been', explain: { ru: 'Прошлый пассив в отчётной конструкции: to have been + V3.', de: 'Vergangenes Passiv im Infinitiv: to have been + Partizip II.' } },
      { id: 'en-g-x27-cp-4', kind: 'choice', q: 'We ___ a local electrician inspect the wiring before moving in.', options: ['had', 'got done', 'made be'], answer: 0, explain: { ru: 'have + исполнитель (electrician) + инфинитив без to (inspect).', de: 'have + Person + reiner Infinitiv (inspect).' } },
      { id: 'en-g-x27-cp-5', kind: 'choice', q: 'There remain several minor bugs ___ before Friday’s release.', options: ['to be fixed', 'to fix been', 'being fixed to'], answer: 0, explain: { ru: 'bugs + пассивный инфинитив to be fixed.', de: 'bugs + passiver Infinitiv to be fixed.' } },
      { id: 'en-g-x27-cp-6', kind: 'gap', q: 'She insists on ___ consulted before any budget cuts are approved. (be)', answer: 'being', explain: { ru: 'После предлога on идёт герундий; пассив → being consulted.', de: 'Nach der Präposition on steht das Passiv-Gerundium being consulted.' } },
      { id: 'en-g-x27-cp-7', kind: 'choice', q: 'Two suspects are reported ___ the country last night.', options: ['to have left', 'to leave', 'having left'], answer: 0, explain: { ru: 'last night (прошлое) в reporting passive → перфектный инфинитив to have left.', de: 'last night (Vergangenheit) erfordert den Perfekt-Infinitiv to have left.' } },
      { id: 'en-g-x27-cp-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Считается, что проект был отложен из-за сбоя».', de: 'Bilde den Satz: „Das Projekt soll wegen des Ausfalls verschoben worden sein.“' }, tokens: ['The project', 'is thought', 'to have been delayed', 'by the outage.'], answer: 'The project is thought to have been delayed by the outage.', explain: { ru: 'is thought + пассивный перфектный инфинитив to have been delayed.', de: 'is thought + passiver Perfekt-Infinitiv to have been delayed.' } }
    ]
  });

  // 6. B1: Question tags & echo questions
  addLesson('Question tags & echo questions', {
    id: 'question-tags',
    level: 'B1',
    title: { ru: 'Разделительные вопросы (Question tags) и эхо-вопросы', de: 'Question tags (Anhängselfragen) und Rückfragen' },
    summary: {
      ru: 'You’ve met her, haven’t you? / Let’s start, shall we? — живое подтверждение в разговоре.',
      de: 'You’ve met her, haven’t you? / Let’s start, shall we? — natürliche Bestätigungsfragen im Gespräch.'
    },
    explanation: {
      ru: '<p><b>Question tag</b> повторяет вспомогательный или модальный глагол с противоположным знаком (+ → −, − → +) и местоимением:</p>' +
        '<ul>' +
        '<li><b>Базовое правило</b>: <em>You live here, <b>don’t you</b>?</em> / <em>She won’t forget, <b>will she</b>?</em></li>' +
        '<li><b>Отрицательные слова</b> (<em>never, rarely, hardly, nobody</em>) делают первую часть отрицательной → хвостик <b>утвердительный</b>: <em>He rarely complains, <b>does he</b>?</em></li>' +
        '<li><b>Исключения, которые нужно помнить</b>: <em>I’m late, <b>aren’t I</b>?</em>; <em>Let’s go, <b>shall we</b>?</em>; просьбы — <em>Open the window, <b>will you</b>?</em></li>' +
        '<li><b>Nobody / everyone</b> в хвостике заменяются на <b>they</b>: <em>Everyone agreed, <b>didn’t they</b>?</em></li>' +
        '</ul>',
      de: '<p>Ein <b>Question tag</b> greift Hilfsverb (oder do/did) und Pronomen mit umgekehrter Polarität (+ → −, − → +) auf:</p>' +
        '<ul>' +
        '<li><b>Grundregel</b>: <em>You live here, <b>don’t you</b>?</em> / <em>She won’t forget, <b>will she</b>?</em></li>' +
        '<li><b>Verneinte Wörter</b> (<em>never, hardly, nobody</em>) zählen als negativ → Tag bleibt <b>positiv</b>: <em>He never calls, <b>does he</b>?</em></li>' +
        '<li><b>Feste Ausnahmen</b>: <em>I’m right, <b>aren’t I</b>?</em>; <em>Let’s start, <b>shall we</b>?</em>; Imperativ: <em>Help me, <b>will you</b>?</em></li>' +
        '<li><b>Nobody / everyone</b> werden mit <b>they</b> wiederaufgenommen: <em>Nobody noticed, <b>did they</b>?</em></li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Типичные хвостики и исключения', de: 'Häufige Question tags und Ausnahmen' },
      head: { ru: ['Начало', 'Question tag'], de: ['Aussage', 'Question tag'] },
      deCols: [0, 1],
      rows: [
        ['You’ve finished,', 'haven’t you?'],
        ['They didn’t call,', 'did they?'],
        ['I’m next,', 'aren’t I?'],
        ['Let’s take a break,', 'shall we?'],
        ['Everyone brought ID,', 'didn’t they?'],
        ['Nothing went wrong,', 'did it?']
      ]
    }],
    examples: [
      { t: 'The workshop starts at nine, [[doesn’t it]]?', ru: 'Семинар начинается в девять, не так ли?', de: 'Der Workshop beginnt um neun, oder nicht?' },
      { t: 'Nobody told you about the room change, [[did they]]?', ru: 'Тебе никто не сказал о смене аудитории, правда?', de: 'Niemand hat dir vom Raumwechsel erzählt, oder?' },
      { t: 'I’m on the shortlist, [[aren’t I]]?', ru: 'Я ведь в коротком списке, правда?', de: 'Ich stehe doch auf der Auswahlliste, oder?' },
      { t: '[[Let’s]] double-check the address, [[shall we]]?', ru: 'Давай перепроверим адрес, ладно?', de: 'Überprüfen wir noch schnell die Adresse, einverstanden?' }
    ],
    pitfalls: [{
      title: { ru: 'I’m … → aren’t I?, не *amn’t I?', de: 'I’m … → aren’t I?, nicht *amn’t I?' },
      html: {
        ru: '<span class="wrong">I’m holding you up, amn’t I?</span> → <span class="right">I’m holding you up, aren’t I?</span>',
        de: '<span class="wrong">I’m holding you up, amn’t I?</span> → <span class="right">I’m holding you up, aren’t I?</span>'
      }
    }],
    drills: [
      { id: 'en-g-x27-qt-1', kind: 'choice', q: 'You haven’t seen my keys anywhere, ___?', options: ['have you', 'haven’t you', 'did you'], answer: 0, explain: { ru: 'Отрицание haven’t → положительный хвостик have you.', de: 'Verneintes haven’t → positiver Tag have you.' } },
      { id: 'en-g-x27-qt-2', kind: 'choice', q: 'I’m responsible for the slides, ___?', options: ['aren’t I', 'isn’t it', 'am not I'], answer: 0, explain: { ru: 'Исключение для I’m в вопросительном хвостике: aren’t I?.', de: 'Feste Ausnahme für I’m: aren’t I?.' } },
      { id: 'en-g-x27-qt-3', kind: 'gap', q: 'Let’s review the budget after lunch, ___ we?', answer: 'shall', explain: { ru: 'После предложения с Let’s всегда идёт shall we?.', de: 'Nach Let’s steht immer shall we?.' } },
      { id: 'en-g-x27-qt-4', kind: 'choice', q: 'She hardly ever misses a train, ___?', options: ['does she', 'doesn’t she', 'is she'], answer: 0, explain: { ru: 'hardly ever несёт отрицательный смысл → положительный хвостик does she.', de: 'hardly ever zählt als negativ → positiver Tag does she.' } },
      { id: 'en-g-x27-qt-5', kind: 'choice', q: 'Everyone enjoyed the tour, ___?', options: ['didn’t they', 'didn’t he', 'weren’t they'], answer: 0, explain: { ru: 'everyone в хвостике заменяется на they + вспомогательный глагол did.', de: 'everyone wird im Tag zu they; Past Simple nutzt didn’t.' } },
      { id: 'en-g-x27-qt-6', kind: 'gap', q: 'Nothing was broken in transit, ___ it?', answer: 'was', explain: { ru: 'Nothing отрицательно → утвердительный was it?.', de: 'Nothing ist negativ → positives was it?.' } },
      { id: 'en-g-x27-qt-7', kind: 'choice', q: 'Send me the link when you’re back, ___?', options: ['will you', 'shall you', 'don’t you'], answer: 0, explain: { ru: 'Просьба/повелительное наклонение → will you?.', de: 'Aufforderung / Imperativ → will you?.' } },
      { id: 'en-g-x27-qt-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Он раньше работал в Лионе, не так ли?»', de: 'Bilde den Satz: „Er hat früher in Lyon gearbeitet, nicht wahr?“' }, tokens: ['He used to', 'work in Lyon,', 'didn’t', 'he?'], answer: 'He used to work in Lyon, didn’t he?', explain: { ru: 'Past Simple (used to) берёт вспомогательный didn’t he?.', de: 'used to bildet den Tag mit didn’t he?.' } }
    ]
  });

  // 7. B2: Future in the past
  addLesson('Future in the past: was going to, was about to, would', {
    id: 'future-in-the-past',
    level: 'B2',
    title: { ru: 'Будущее в прошедшем: was going to, was about to, would', de: 'Zukunft in der Vergangenheit: was going to, was about to, would' },
    summary: {
      ru: 'was going to call / was about to leave / would later become — планы из прошлого (часто не сбывшиеся) и взгляд вперёд из рассказа.',
      de: 'was going to call / was about to leave / would later become — frühere Pläne und Vorausdeutungen.'
    },
    explanation: {
      ru: '<p>Когда точка отсчёта находится в прошлом, о дальнейших событиях говорят тремя основными способами:</p>' +
        '<ul>' +
        '<li><b>was/were going to + V</b> — прежнее намерение (часто так и не выполненное): <em>I <b>was going to</b> email you, but my battery died.</em></li>' +
        '<li><b>was/were about to + V</b> — вот-вот собирался сделать (в последнюю секунду прервали): <em>We <b>were about to</b> board when the gate changed.</em></li>' +
        '<li><b>would + V</b> — судьба / взгляд в будущее из прошлого (книжное повествование или косвенная речь): <em>She left the village and <b>would never return</b>.</em></li>' +
        '<li><b>was/were due to + V</b> — ожидалось по расписанию: <em>The flight <b>was due to</b> land at six.</em></li>' +
        '</ul>',
      de: '<p>Steht der Bezugspunkt in der Vergangenheit, drückt man Zukünftiges von damals so aus:</p>' +
        '<ul>' +
        '<li><b>was/were going to + V</b> — frühere Absicht (oft nicht umgesetzt): <em>I <b>was going to</b> call, but forgot.</em></li>' +
        '<li><b>was/were about to + V</b> — war gerade im Begriff, etwas zu tun: <em>I <b>was about to</b> leave when he arrived.</em></li>' +
        '<li><b>would + V</b> — spätere Entwicklung aus damaliger Sicht oder indirekte Rede: <em>That decision <b>would change</b> everything.</em></li>' +
        '<li><b>was/were due to + V</b> — fahrplanmäßig erwartet: <em>The train <b>was due to</b> arrive at eight.</em></li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Оттенки будущего в прошлом', de: 'Varianten der Zukunft in der Vergangenheit' },
      head: { ru: ['Форма', 'Когда выбирать'], de: ['Form', 'Verwendung'] },
      deCols: [0],
      rows: {
        ru: [
          ['was going to V', 'планировал / собирался, но часто передумал или помешали'],
          ['was about to V', 'прямо в ту секунду уже начинал (… when …)'],
          ['was due to V', 'по официальному графику / расписанию'],
          ['would V', 'косвенная речь или «что случилось позже в истории»']
        ],
        de: [
          ['was going to V', 'hatte vor, oft aber nicht ausgeführt'],
          ['was about to V', 'war gerade im Begriff (… when …)'],
          ['was due to V', 'fahrplanmäßig / laut Zeitplan erwartet'],
          ['would V', 'indirekte Rede oder späteres Schicksal in einer Erzählung']
        ]
      }
    }],
    examples: [
      { t: 'I [[was going to]] bring my umbrella, but the morning sky looked clear.', ru: 'Я собирался взять зонт, но с утра небо казалось ясным.', de: 'Ich wollte eigentlich einen Schirm mitnehmen, aber der Himmel war klar.' },
      { t: 'They [[were just about to]] lock the office when a courier arrived.', ru: 'Они уже собирались запирать офис, когда пришёл курьер.', de: 'Sie wollten gerade das Büro abschließen, als ein Kurier kam.' },
      { t: 'That tiny prototype [[would]] eventually power the whole hospital.', ru: 'Этот крошечный прототип впоследствии стал питать всю больницу.', de: 'Dieser kleine Prototyp sollte später das ganze Krankenhaus versorgen.' },
      { t: 'The inspection [[was due to]] start on Tuesday, yet paperwork held it up.', ru: 'Инспекция должна была начаться во вторник, но бумаги её задержали.', de: 'Die Prüfung sollte am Dienstag beginnen, doch Formalitäten verzögerten sie.' }
    ],
    pitfalls: [{
      title: { ru: 'Не используйте *will в рассказе о прошлом', de: 'Kein *will bei Vergangenheitsbezug' },
      html: {
        ru: '<span class="wrong">He promised he will help next week.</span> → <span class="right">He promised he would help the next week.</span>',
        de: '<span class="wrong">He promised he will help next week.</span> → <span class="right">He promised he would help the next week.</span>'
      }
    }],
    drills: [
      { id: 'en-g-x27-fitp-1', kind: 'choice', q: 'I ___ text you last night, but I fell asleep on the sofa.', options: ['was going to', 'will', 'was due'], answer: 0, explain: { ru: 'Несбывшееся намерение из прошлого → was going to.', de: 'Unausgeführter Plan in der Vergangenheit → was going to.' } },
      { id: 'en-g-x27-fitp-2', kind: 'choice', q: 'She ___ step into the lift when she noticed it was out of order.', options: ['was about to', 'would later', 'was due'], answer: 0, explain: { ru: 'Мгновение прямо перед действием (… when …) → was about to.', de: 'Unmittelbar bevorstehende Handlung → was about to.' } },
      { id: 'en-g-x27-fitp-3', kind: 'gap', q: 'The CEO announced that the branch ___ open in September.', answer: 'would', explain: { ru: 'Согласование времён в косвенной речи: will → would.', de: 'Zeitenfolge in indirekter Rede: will → would.' } },
      { id: 'en-g-x27-fitp-4', kind: 'choice', q: 'Our ferry ___ dock at 6:30, so we packed early.', options: ['was due to', 'was about', 'had going to'], answer: 0, explain: { ru: 'По расписанию в прошлом → was due to.', de: 'Fahrplanmäßig in der Vergangenheit → was due to.' } },
      { id: 'en-g-x27-fitp-5', kind: 'choice', q: 'They never guessed how useful that spare key ___ prove to be.', options: ['would', 'will', 'is going to'], answer: 0, explain: { ru: 'Заглядывание вперёд в рассказе в прошлом → would.', de: 'Vorausblick aus der Vergangenheit → would.' } },
      { id: 'en-g-x27-fitp-6', kind: 'gap', q: 'We were supposed ___ submit the form on Monday, not Tuesday.', answer: 'to', explain: { ru: 'were supposed to + V («должны были по договорённости»).', de: 'were supposed to + Infinitiv.' } },
      { id: 'en-g-x27-fitp-7', kind: 'choice', q: 'What did you say you ___ do once the course ended?', options: ['were going to', 'will', 'are about to'], answer: 0, explain: { ru: 'План, о котором спрашивали в прошлом → were going to.', de: 'Erfragter Plan in der Vergangenheit → were going to.' } },
      { id: 'en-g-x27-fitp-8', kind: 'reorder', q: { ru: 'Соберите фразу: «Я уже собирался уходить, когда зазвонил телефон».', de: 'Bilde den Satz: „Ich wollte gerade gehen, als das Telefon klingelte.“' }, tokens: ['I was', 'about to leave', 'when the phone', 'rang.'], answer: 'I was about to leave when the phone rang.', explain: { ru: 'was about to + V … when + Past Simple.', de: 'was about to + Infinitiv … when + Past Simple.' } }
    ]
  });

  /* ---- +4 bilingual drills on all 12 existing C1 & thin 4-drill EN lessons ---- */
  var extras = {
    inversion: [
      { id: 'en-g-x27-inv-6', kind: 'choice', q: 'Seldom ___ such thorough documentation in a small startup.', options: ['have I seen', 'I have seen', 'did I saw'], answer: 0, explain: { ru: 'Seldom в начале → инверсия have I seen.', de: 'Seldom am Anfang → Inversion have I seen.' } },
      { id: 'en-g-x27-inv-7', kind: 'choice', q: 'Under no circumstances ___ passwords be shared by chat.', options: ['should', 'they should', 'are to they'], answer: 0, explain: { ru: 'Under no circumstances → модальный глагол (should) перед подлежащим.', de: 'Under no circumstances → Modalverb (should) vor dem Subjekt.' } },
      { id: 'en-g-x27-inv-8', kind: 'gap', q: 'Little ___ they know that the backup had failed too.', answer: 'did', explain: { ru: 'Little в начале с Past Simple → did they know.', de: 'Little am Satzanfang im Past Simple → did they know.' } },
      { id: 'en-g-x27-inv-9', kind: 'reorder', q: { ru: 'Соберите инверсию: «Едва он вошёл, как начался дождь».', de: 'Bilde die Inversion: „Kaum war er eingetreten, da begann der Regen.“' }, tokens: ['Hardly had', 'he stepped inside', 'when it', 'started raining.'], answer: 'Hardly had he stepped inside when it started raining.', explain: { ru: 'Hardly had + S + V3 … when…', de: 'Hardly had + Subjekt + V3 … when…' } }
    ],
    cleft: [
      { id: 'en-g-x27-cl-6', kind: 'choice', q: 'It was the noise ___ made working from home impossible.', options: ['that', 'what', 'who'], answer: 0, explain: { ru: 'It was X that… — стандартное расщепление для предмета/явления.', de: 'It was X that… hebt ein Substantiv hervor.' } },
      { id: 'en-g-x27-cl-7', kind: 'choice', q: 'It isn’t until you live abroad ___ you truly appreciate your idioms.', options: ['that', 'when', 'than'], answer: 0, explain: { ru: 'В обороте It is not until … используется связка that.', de: 'In It is not until … folgt that.' } },
      { id: 'en-g-x27-cl-8', kind: 'gap', q: 'It was Elena ___ spotted the discrepancy in row four.', answer: 'who', explain: { ru: 'Для одушевлённого лица в It-cleft предпочтительно who (или that).', de: 'Für eine Person im It-Cleft steht who (oder that).' } },
      { id: 'en-g-x27-cl-9', kind: 'choice', q: 'What bothered the guests most ___ the broken lift.', options: ['was', 'were', 'it was'], answer: 0, explain: { ru: 'What-cleft с единственным подлежащим в конце берёт глагол was.', de: 'What-Cleft mit Singular-Bezug nutzt was.' } }
    ],
    'participle-clauses': [
      { id: 'en-g-x27-pc-6', kind: 'choice', q: '___ the report twice, she felt ready to present it.', options: ['Having checked', 'Checked', 'Have checking'], answer: 0, explain: { ru: 'Предшествующее активное действие (сначала проверила, потом…) → Having + V3.', de: 'Vorzeitige aktive Handlung → Having + V3.' } },
      { id: 'en-g-x27-pc-7', kind: 'choice', q: '___ in clear German, the leaflet was easy for newcomers to read.', options: ['Written', 'Writing', 'Having writing'], answer: 0, explain: { ru: 'Пассивное значение («написанная на ясном немецком») → V3 Written.', de: 'Passiver Sinn („geschrieben in…“) → Partizip II Written.' } },
      { id: 'en-g-x27-pc-8', kind: 'gap', q: 'Not ___ what to say, Tom simply smiled and nodded. (know)', answer: 'knowing', explain: { ru: 'Отрицание перед причастием настоящего времени → Not knowing.', de: 'Verneinung vor Partizip Präsens → Not knowing.' } },
      { id: 'en-g-x27-pc-9', kind: 'choice', q: 'Which sentence avoids a dangling participle?', options: ['Walking down the street, I spotted an old friend.', 'Walking down the street, the café looked cosy.', 'Built in 1920, my grandfather lived in the house.'], answer: 0, explain: { ru: 'Подлежащее главного предложения (I) должно совпадать с субъектом причастия (Walking).', de: 'Das Subjekt des Hauptsatzes (I) muss zum Partizip (Walking) passen.' } }
    ],
    subjunctive: [
      { id: 'en-g-x27-sj-5', kind: 'choice', q: 'The committee recommended that each clinic ___ an emergency kit.', options: ['keep', 'keeps', 'to keep'], answer: 0, explain: { ru: 'Mandative subjunctive после recommend that: инфинитив без -s (keep).', de: 'Subjunctive nach recommend that: Grundform ohne -s (keep).' } },
      { id: 'en-g-x27-sj-6', kind: 'choice', q: 'It is essential that the witness ___ informed today.', options: ['be', 'is', 'to be'], answer: 0, explain: { ru: 'Пассив в subjunctive использует чистую основу be.', de: 'Passiv im Subjunctive verwendet reines be.' } },
      { id: 'en-g-x27-sj-7', kind: 'gap', q: 'She insisted that the refund ___ transferred before Friday. (be)', answer: 'be', explain: { ru: 'insist that + подлежащее + be + V3.', de: 'insist that + Subjekt + be + V3.' } },
      { id: 'en-g-x27-sj-8', kind: 'choice', q: 'If I ___ in your shoes, I’d ask for written confirmation.', options: ['were', 'am', 'had'], answer: 0, explain: { ru: 'Устойчивое сослагательное условие: If I were in your shoes…', de: 'Fester Irrealis: If I were in your shoes…' } }
    ],
    'if-alternatives': [
      { id: 'en-g-x27-ifa-6', kind: 'choice', q: '___ we leave within ten minutes, we’ll make the ferry.', options: ['Provided that', 'Unless', 'But for'], answer: 0, explain: { ru: '«При условии, что» → Provided (that).', de: '„Vorausgesetzt, dass“ → Provided (that).' } },
      { id: 'en-g-x27-ifa-7', kind: 'choice', q: '___ your quick reaction, the data would have been lost.', options: ['But for', 'Provided', 'In case'], answer: 0, explain: { ru: '«Если бы не + существительное» → But for + noun phrase.', de: '„Ohne / Wäre … nicht gewesen“ + Nomen → But for.' } },
      { id: 'en-g-x27-ifa-8', kind: 'gap', q: '___ you ever visit Leipzig, let me show you around. (formal inversion)', answer: 'Should', explain: { ru: 'Вежливая инверсия для возможного события → Should you…', de: 'Höfliche Inversion für mögliche Fälle → Should you…' } },
      { id: 'en-g-x27-ifa-9', kind: 'choice', q: 'Let’s bring snacks ___ the seminar runs late.', options: ['in case', 'unless', 'had'], answer: 0, explain: { ru: 'На всякий случай → in case.', de: 'Für den Fall, dass / vorsichtshalber → in case.' } }
    ],
    'frequency-position': [
      { id: 'en-g-x27-fp-1', kind: 'choice', q: 'Where does always go with the verb be? — She ___ on time.', options: ['is always', 'always is', 'always be'], answer: 0, explain: { ru: 'Наречие частотности ставится ПОСЛЕ глагола be (is always).', de: 'Häufigkeitsadverbien stehen NACH be (is always).' } },
      { id: 'en-g-x27-fp-2', kind: 'choice', q: 'They ___ worked together before.', options: ['have never', 'never have', 'hadn’t never'], answer: 0, explain: { ru: 'Перед смысловым глаголом, но ПОСЛЕ первого вспомогательного (have never worked).', de: 'Nach dem ersten Hilfsverb und vor dem Vollverb (have never worked).' } },
      { id: 'en-g-x27-fp-3', kind: 'gap', q: 'We ___ check our inbox first thing in the morning. (обычно — usually)', answer: 'usually', explain: { ru: 'Перед обычным смысловым глаголом (check) → usually check.', de: 'Vor dem Vollverb check → usually check.' } },
      { id: 'en-g-x27-fp-4', kind: 'reorder', q: { ru: 'Поставьте слова правильно: «Он почти никогда не пьёт кофе вечером».', de: 'Ordne den Satz: „Er trinkt abends fast nie Kaffee.“' }, tokens: ['He', 'hardly ever', 'drinks coffee', 'in the evening.'], answer: 'He hardly ever drinks coffee in the evening.', explain: { ru: 'hardly ever идёт прямо перед смысловым глаголом drinks.', de: 'hardly ever steht direkt vor dem Vollverb drinks.' } }
    ],
    'duration-for-since': [
      { id: 'en-g-x27-dfs-1', kind: 'choice', q: 'I’ve been learning German ___ nearly two years.', options: ['for', 'since', 'ago'], answer: 0, explain: { ru: 'Отрезок времени (two years) требует предлога for.', de: 'Eine Zeitspanne (two years) braucht for.' } },
      { id: 'en-g-x27-dfs-2', kind: 'choice', q: 'She has worked at that studio ___ 2021.', options: ['since', 'for', 'from'], answer: 0, explain: { ru: 'Отправная точка в прошлом (2021) + Present Perfect → since.', de: 'Zeitpunkt in der Vergangenheit (2021) + Present Perfect → since.' } },
      { id: 'en-g-x27-dfs-3', kind: 'gap', q: 'How long have you lived here? — Ever ___ my university days.', answer: 'since', explain: { ru: 'Событие в прошлом как точка отсчёта → (ever) since.', de: 'Vergangener Startpunkt → (ever) since.' } },
      { id: 'en-g-x27-dfs-4', kind: 'choice', q: 'They moved to Munich three months ___.', options: ['ago', 'since', 'for'], answer: 0, explain: { ru: 'С Past Simple («три месяца назад») используется ago.', de: 'Mit Past Simple („vor drei Monaten“) steht ago.' } }
    ],
    'past-habitual': [
      { id: 'en-g-x27-ph-1', kind: 'choice', q: 'We ___ own a tiny flat near the canal, though we sold it.', options: ['used to', 'would', 'are used to'], answer: 0, explain: { ru: 'Для глаголов состояния в прошлом (own, live, be) можно used to, но нельзя would!', de: 'Zustandsverben in der Vergangenheit (own) brauchen used to, nicht would.' } },
      { id: 'en-g-x27-ph-2', kind: 'choice', q: 'Every summer as kids, we ___ cycle down to the lake.', options: ['would / used to', 'are used to', 'will'], answer: 0, explain: { ru: 'Повторяющиеся действия в прошлом могут использовать и would, и used to.', de: 'Wiederholte Handlungen erlauben sowohl would als auch used to.' } },
      { id: 'en-g-x27-ph-3', kind: 'gap', q: 'Did you ___ to walk to school when you lived in Prague?', answer: 'use', explain: { ru: 'В вопросе Did you use to…? окончание -d отпадает.', de: 'Nach Did fällt das -d weg: Did you use to…?' } },
      { id: 'en-g-x27-ph-4', kind: 'choice', q: 'She’s a nurse, so she is ___ working night shifts.', options: ['used to', 'use to', 'used'], answer: 0, explain: { ru: 'be used to + -ing = «привыкнуть к чему-то сейчас».', de: 'be used to + -ing = „gewohnt sein an“.' } }
    ],
    'reporting-passive': [
      { id: 'en-g-x27-rp-1', kind: 'choice', q: 'It ___ that winter temperatures will break records.', options: ['is expected', 'expects', 'is expecting'], answer: 0, explain: { ru: 'Безличное пассивное сообщение → It is expected that…', de: 'Unpersönliche Berichtsform → It is expected that…' } },
      { id: 'en-g-x27-rp-2', kind: 'choice', q: 'The bridge is believed ___ built in the 18th century.', options: ['to have been', 'to be', 'being'], answer: 0, explain: { ru: 'Постройка завершилась в прошлом → to have been + V3.', de: 'Abgeschlossene Vergangenheit → to have been + Partizip.' } },
      { id: 'en-g-x27-rp-3', kind: 'gap', q: 'The new tax rule is said ___ affect freelancers most.', answer: 'to', explain: { ru: 'is said + to-инфинитив.', de: 'is said + to-Infinitiv.' } },
      { id: 'en-g-x27-rp-4', kind: 'choice', q: 'He is thought ___ in Zurich for the past decade.', options: ['to have lived', 'living', 'to live been'], answer: 0, explain: { ru: 'Действие тянулось в прошлом до сих пор → to have lived (или to have been living).', de: 'Bis heute andauernde Vergangenheit → to have lived.' } }
    ],
    'past-modals': [
      { id: 'en-g-x27-pm-1', kind: 'choice', q: 'She isn’t at her desk yet; she ___ missed the early tram.', options: ['must have', 'must', 'should have'], answer: 0, explain: { ru: 'Уверенная догадка о прошлом («должно быть, опоздала») → must have + V3.', de: 'Sichere Vermutung über Vergangenes → must have + V3.' } },
      { id: 'en-g-x27-pm-2', kind: 'choice', q: 'You ___ told me earlier! Now the booking window is closed.', options: ['should have', 'must have', 'couldn’t have'], answer: 0, explain: { ru: 'Упрёк / сожаление о несделанном («следовало сказать раньше») → should have + V3.', de: 'Vorwurf / Versäumnis in der Vergangenheit → should have + V3.' } },
      { id: 'en-g-x27-pm-3', kind: 'gap', q: 'They ___ have seen us — the lights were completely off!', answer: 'can’t / couldn’t', explain: { ru: 'Невозможность в прошлом («не могли видеть») → can’t / couldn’t have + V3.', de: 'Unmöglichkeit in der Vergangenheit → can’t / couldn’t have + V3.' } },
      { id: 'en-g-x27-pm-4', kind: 'choice', q: 'Don’t worry if it’s lost; it ___ fallen out on the train.', options: ['might have', 'can’t have', 'oughtn’t'], answer: 0, explain: { ru: 'Вероятная догадка о прошлом («могло выпасть») → might/could have + V3.', de: 'Mögliche Erklärung für die Vergangenheit → might have + V3.' } }
    ],
    'linking-b2': [
      { id: 'en-g-x27-lb2-1', kind: 'choice', q: '___ the heavy snow, all regional trains ran on schedule.', options: ['Despite', 'Although', 'However'], answer: 0, explain: { ru: 'Перед именной группой (the heavy snow) → предлог Despite (или In spite of).', de: 'Vor einer Nominalgruppe → Präposition Despite (oder In spite of).' } },
      { id: 'en-g-x27-lb2-2', kind: 'choice', q: 'The report is solid; ___, the charts need clearer labels.', options: ['however', 'despite', 'although'], answer: 0, explain: { ru: 'Между двумя самостоятельными частями с точкой с запятой → наречие however.', de: 'Zwischen zwei Hauptsätzen nach Semikolon → Adverb however.' } },
      { id: 'en-g-x27-lb2-3', kind: 'gap', q: 'We switched providers ___ order to cut monthly hosting fees.', answer: 'in', explain: { ru: 'Целевая конструкция → in order to + V.', de: 'Finaler Anschluss → in order to + Infinitiv.' } },
      { id: 'en-g-x27-lb2-4', kind: 'choice', q: '___ she prefers working solo, she runs weekly team check-ins.', options: ['Even though', 'Despite', 'In spite of'], answer: 0, explain: { ru: 'Перед полным предложением с глаголом (she prefers) нужен союз Even though / Although.', de: 'Vor einem Nebensatz mit Subjekt und Verb steht Even though.' } }
    ],
    'rather-better-time': [
      { id: 'en-g-x27-rbt-1', kind: 'choice', q: 'It’s high time we ___ the outdated billing script.', options: ['replaced', 'replace', 'will replace'], answer: 0, explain: { ru: 'It’s (high) time + Past Simple = «давно пора (сейчас)».', de: 'It’s (high) time + Past Simple drückt Dringlichkeit in der Gegenwart aus.' } },
      { id: 'en-g-x27-rbt-2', kind: 'choice', q: 'I’d rather you ___ anyone about the salary offer yet.', options: ['didn’t tell', 'don’t tell', 'not tell'], answer: 0, explain: { ru: 'would rather + другое лицо + Past Simple (о настоящем/будущем).', de: 'would rather + anderes Subjekt + Past Simple.' } },
      { id: 'en-g-x27-rbt-3', kind: 'gap', q: 'You had ___ double-check the gate number before boarding.', answer: 'better', explain: { ru: 'Срочный совет («тебе лучше бы…») → had better + V без to.', de: 'Dringender Rat → had better + reiner Infinitiv.' } },
      { id: 'en-g-x27-rbt-4', kind: 'choice', q: 'I’d rather ___ by night train than catch a 6 a.m. flight.', options: ['travel', 'to travel', 'travelled'], answer: 0, explain: { ru: 'Если субъект один (I’d rather…), ставится инфинитив без to (travel).', de: 'Bei gleichem Subjekt folgt nach would rather der reine Infinitiv.' } }
    ]
  };

  Object.keys(extras).forEach(function (tid) {
    var lesson = pack.grammar && pack.grammar[tid];
    if (!lesson) return;
    extras[tid].forEach(function (d) {
      GT.registerDrill(d, 'grammar', tid);
      lesson.drills.push(d);
    });
  });
})();
