/* English GRAMMAR · full lessons by level (B1: narrative tenses, future forms; B2: verb + -ing / to with a change of
 * meaning, reporting passive). Explanations ru + de inline (English can be learnt from Russian or German). */
(function () {
  'use strict';
  var pack = GT._target;
  function lesson(topicName, page) {
    pack.config.TOPICS.grammar.push({ id: page.id, name: topicName, level: page.level });
    GT.registerGrammar(page);
  }

  /* ---------- B1 · Narrative tenses ---------- */
  lesson('Narrative tenses: past simple, continuous, perfect', {
    id: 'narrative-tenses', level: 'B1',
    title: 'Narrative tenses',
    summary: {
      ru: 'Past Simple — события по порядку, Past Continuous — фон, Past Perfect — то, что было раньше.',
      de: 'Past Simple für die Ereigniskette, Past Continuous für den Hintergrund, Past Perfect für das, was vorher war.'
    },
    explanation: {
      ru: '<p>В рассказе о прошлом английский распределяет роли между тремя временами:</p>' +
        '<ul>' +
        '<li><b>Past Simple</b> — основные события по порядку: <em>I <b>got</b> up, <b>made</b> coffee and <b>checked</b> my email.</em></li>' +
        '<li><b>Past Continuous</b> (was/were + -ing) — фон, процесс, который <b>шёл</b>, когда что-то случилось: <em>I <b>was cooking</b> when the phone <b>rang</b>.</em></li>' +
        '<li><b>Past Perfect</b> (had + V3) — событие <b>раньше</b> другого прошедшего: <em>When I arrived, the meeting <b>had</b> already <b>started</b>.</em></li>' +
        '</ul>' +
        '<p>Русский часто передаёт разницу видом (готовил / приготовил), но не всегда. Правило: длительный фон → Continuous, короткое событие → Simple. <b>when</b> обычно вводит короткое событие, <b>while</b> — процесс.</p>',
      de: '<p>In Erzählungen verteilt das Englische die Rollen auf drei Zeiten:</p>' +
        '<ul>' +
        '<li><b>Past Simple</b> — die Hauptereignisse der Reihe nach: <em>I <b>got</b> up, <b>made</b> coffee and <b>checked</b> my email.</em></li>' +
        '<li><b>Past Continuous</b> (was/were + -ing) — Hintergrund, eine Handlung, die gerade <b>lief</b>, als etwas passierte: <em>I <b>was cooking</b> when the phone <b>rang</b>.</em> (Ich kochte gerade, als …)</li>' +
        '<li><b>Past Perfect</b> (had + Partizip) — etwas, das <b>vorher</b> passiert war (= Plusquamperfekt): <em>When I arrived, the meeting <b>had</b> already <b>started</b>.</em></li>' +
        '</ul>' +
        '<p>Das Deutsche hat keine Verlaufsform; „gerade“ oder „dabei sein“ hilft beim Übersetzen. Faustregel: langer Hintergrund → Continuous, kurzes Ereignis → Simple. <b>when</b> leitet meist das kurze Ereignis ein, <b>while</b> den Vorgang.</p>'
    },
    tables: [{
      caption: { ru: 'Три времени рассказа', de: 'Drei Erzählzeiten' },
      head: { ru: ['Время', 'Роль', 'Пример'], de: ['Zeit', 'Funktion', 'Beispiel'] },
      deCols: [2],
      rows: {
        ru: [['Past Simple', 'события по порядку', 'She opened the door and saw him.'], ['Past Continuous', 'фон, процесс', 'It was raining and people were hurrying home.'], ['Past Perfect', 'раньше другого прошлого', 'He had left before I called.']],
        de: [['Past Simple', 'Ereigniskette', 'She opened the door and saw him.'], ['Past Continuous', 'Hintergrund, Vorgang', 'It was raining and people were hurrying home.'], ['Past Perfect', 'Vorzeitigkeit', 'He had left before I called.']]
      }
    }],
    examples: [
      { t: 'I [[was driving]] to work when I [[saw]] the accident.', ru: 'Я ехал на работу, когда увидел аварию.', de: 'Ich war auf dem Weg zur Arbeit, als ich den Unfall sah.' },
      { t: 'While we [[were talking]], the server [[crashed]].', ru: 'Пока мы разговаривали, сервер упал.', de: 'Während wir uns unterhielten, stürzte der Server ab.' },
      { t: 'By the time the police arrived, the thief [[had escaped]].', ru: 'К приезду полиции вор уже сбежал.', de: 'Als die Polizei kam, war der Dieb schon geflohen.' },
      { t: 'She [[locked]] the door, [[turned]] off the lights and [[left]].', ru: 'Она заперла дверь, выключила свет и ушла.', de: 'Sie schloss ab, machte das Licht aus und ging.' },
      { t: 'I didn’t recognise him because he [[had grown]] a beard.', ru: 'Я не узнал его, потому что он отрастил бороду.', de: 'Ich erkannte ihn nicht, weil er sich einen Bart hatte wachsen lassen.' }
    ],
    pitfalls: [
      { title: { ru: 'Состояния без -ing', de: 'Zustandsverben ohne -ing' },
        html: { ru: 'know, want, believe, belong обычно не стоят в Continuous: <span class="wrong">I was knowing</span> → <span class="right">I knew</span>.', de: 'know, want, believe, belong stehen normalerweise nicht in der Verlaufsform: <span class="wrong">I was knowing</span> → <span class="right">I knew</span>.' } },
      { title: { ru: 'Past Perfect только при нужде', de: 'Past Perfect nur bei Bedarf' },
        html: { ru: 'Если события идут по порядку, Past Perfect не нужен: <span class="right">I finished work and went home.</span> Он нужен, когда порядок нарушен: <span class="right">I went home after I had finished.</span>', de: 'Wenn die Reihenfolge klar ist, braucht man kein Past Perfect: <span class="right">I finished work and went home.</span> Es wird gebraucht, wenn man zurückblickt: <span class="right">When I got home, I realised I had left my keys at work.</span>' } }
    ],
    drills: [
      { id: 'en-g-nt-1', kind: 'choice', q: 'I ___ a shower when the doorbell rang.', options: ['was having', 'had', 'have had'], answer: 0,
        explain: { ru: 'Процесс, прерванный событием → Past Continuous.', de: 'Laufende Handlung, unterbrochen → Past Continuous.' } },
      { id: 'en-g-nt-2', kind: 'choice', q: 'When we got to the cinema, the film ___.', options: ['had already started', 'already started', 'was already start'], answer: 0,
        explain: { ru: 'Фильм начался раньше нашего прихода → Past Perfect.', de: 'Der Film begann vorher → Past Perfect.' } },
      { id: 'en-g-nt-3', kind: 'gap', q: 'While she ___ (read), she fell asleep.', answer: 'was reading',
        explain: { ru: 'while + процесс → was reading.', de: 'while + Vorgang → was reading.' } },
      { id: 'en-g-nt-4', kind: 'gap', q: 'He ___ (forget) his password, so he couldn’t log in.', answer: 'had forgotten', accepted: ['had forgot'],
        explain: { ru: 'Забыл раньше, чем пытался войти → had forgotten.', de: 'Vorher vergessen → had forgotten.' } },
      { id: 'en-g-nt-5', kind: 'choice', q: 'It was a beautiful morning. The sun ___ and birds were singing.', options: ['was shining', 'shone suddenly', 'had shone'], answer: 0,
        explain: { ru: 'Описание фона → Continuous.', de: 'Hintergrundbeschreibung → Continuous.' } }
    ]
  });

  /* ---------- B1 · Future forms ---------- */
  lesson('Future forms: will, going to, present continuous', {
    id: 'future-forms', level: 'B1',
    title: 'Future forms',
    summary: {
      ru: 'will — решение сейчас и прогноз; going to — план и очевидный признак; Present Continuous — договорённость.',
      de: 'will — spontane Entscheidung und Vorhersage; going to — Plan und sichtbares Anzeichen; Present Continuous — feste Verabredung.'
    },
    explanation: {
      ru: '<p>В английском нет одного «будущего». Форму выбирают по тому, <b>откуда</b> вы знаете о будущем:</p>' +
        '<ul>' +
        '<li><b>will</b> — решение в момент речи, обещание, предложение, мнение: <em>I’ll help you. I think it <b>will</b> rain.</em></li>' +
        '<li><b>be going to</b> — уже принятое намерение или вывод по признакам: <em>I’m <b>going to</b> learn Spanish. Look at the clouds — it’s <b>going to</b> rain.</em></li>' +
        '<li><b>Present Continuous</b> — договорённость с датой/местом: <em>I’m <b>meeting</b> Anna at six.</em></li>' +
        '<li><b>Present Simple</b> — расписание: <em>The train <b>leaves</b> at 7:15.</em></li>' +
        '</ul>',
      de: '<p>Englisch hat nicht <i>ein</i> Futur. Man wählt die Form danach, <b>woher</b> man von der Zukunft weiß:</p>' +
        '<ul>' +
        '<li><b>will</b> — spontane Entscheidung, Versprechen, Angebot, Meinung: <em>I’ll help you. I think it <b>will</b> rain.</em> (Achtung: <em>will</em> ≠ dt. „wollen“!)</li>' +
        '<li><b>be going to</b> — vorher gefasster Plan oder sichtbares Anzeichen: <em>I’m <b>going to</b> learn Spanish. Look at the clouds — it’s <b>going to</b> rain.</em></li>' +
        '<li><b>Present Continuous</b> — feste Verabredung: <em>I’m <b>meeting</b> Anna at six.</em></li>' +
        '<li><b>Present Simple</b> — Fahrplan, Programm: <em>The train <b>leaves</b> at 7:15.</em></li>' +
        '</ul><p>Im Deutschen reicht oft das Präsens („Ich treffe Anna um sechs“), im Englischen nicht immer.</p>'
    },
    tables: [{
      caption: { ru: 'Выбор формы', de: 'Formwahl' },
      head: { ru: ['Ситуация', 'Форма', 'Пример'], de: ['Situation', 'Form', 'Beispiel'] },
      deCols: [2],
      rows: {
        ru: [['решаю сейчас', 'will', 'I’ll take the blue one.'], ['мой план', 'going to', 'We’re going to move in May.'], ['вижу признак', 'going to', 'Careful! You’re going to fall.'], ['договорился', 'Present Continuous', 'I’m seeing the dentist tomorrow.'], ['расписание', 'Present Simple', 'The course starts on Monday.']],
        de: [['entscheide jetzt', 'will', 'I’ll take the blue one.'], ['mein Plan', 'going to', 'We’re going to move in May.'], ['sehe ein Anzeichen', 'going to', 'Careful! You’re going to fall.'], ['verabredet', 'Present Continuous', 'I’m seeing the dentist tomorrow.'], ['Fahrplan', 'Present Simple', 'The course starts on Monday.']]
      }
    }],
    examples: [
      { t: 'The phone’s ringing. — I[[’ll]] get it.', ru: 'Телефон звонит. — Я возьму.', de: 'Das Telefon klingelt. — Ich geh ran.' },
      { t: 'We[[’re going to]] renovate the kitchen this summer.', ru: 'Этим летом мы собираемся сделать ремонт на кухне.', de: 'Wir wollen diesen Sommer die Küche renovieren.' },
      { t: 'I[[’m flying]] to Berlin on Friday.', ru: 'В пятницу я лечу в Берлин.', de: 'Am Freitag fliege ich nach Berlin.' },
      { t: 'The meeting [[starts]] at ten.', ru: 'Совещание начинается в десять.', de: 'Das Meeting beginnt um zehn.' },
      { t: 'I don’t think he[[’ll]] like it.', ru: 'Не думаю, что ему понравится.', de: 'Ich glaube nicht, dass es ihm gefällt.' }
    ],
    pitfalls: [
      { title: { ru: 'После when/if — Present', de: 'Nach when/if — Present' },
        html: { ru: '<span class="wrong">When I will arrive, I’ll call.</span> → <span class="right">When I arrive, I’ll call.</span>', de: '<span class="wrong">When I will arrive, I’ll call.</span> → <span class="right">When I arrive, I’ll call.</span>' } },
      { title: { ru: 'will ≠ хотеть', de: 'will ≠ wollen' },
        html: { ru: 'will — будущее, не желание. «Я хочу» = <span class="right">I want to</span>.', de: 'Englisch <em>will</em> ist Futur, nicht „wollen“. „Ich will gehen“ = <span class="right">I want to go</span>, nicht <span class="wrong">I will go</span>.' } }
    ],
    drills: [
      { id: 'en-g-ff-1', kind: 'choice', q: 'I’m cold. — Wait, I ___ close the window.', options: ['’ll', '’m going to', '’m closing'], answer: 0,
        explain: { ru: 'Решение в момент речи → will.', de: 'Spontane Entscheidung → will.' } },
      { id: 'en-g-ff-2', kind: 'choice', q: 'Look at that car! It ___ crash!', options: ['will', 'is going to', 'crashes'], answer: 1,
        explain: { ru: 'Видимый признак → going to.', de: 'Sichtbares Anzeichen → going to.' } },
      { id: 'en-g-ff-3', kind: 'choice', q: 'I ___ lunch with a client tomorrow — it’s in my calendar.', options: ['have', '’m having', '’ll have'], answer: 1,
        explain: { ru: 'Договорённость → Present Continuous.', de: 'Feste Verabredung → Present Continuous.' } },
      { id: 'en-g-ff-4', kind: 'gap', q: 'Our flight ___ (leave) at 6:40 tomorrow morning.', answer: 'leaves',
        explain: { ru: 'Расписание → Present Simple.', de: 'Fahrplan → Present Simple.' } },
      { id: 'en-g-ff-5', kind: 'gap', q: 'I’ll text you as soon as I ___ (get) home.', answer: 'get',
        explain: { ru: 'После as soon as — Present Simple.', de: 'Nach as soon as steht Present Simple.' } }
    ]
  });

  /* ---------- B2 · Verb + -ing or to: change of meaning ---------- */
  lesson('Remember, stop, try: -ing or to', {
    id: 'ing-to-meaning', level: 'B2',
    title: 'Verb + -ing or to-infinitive: change of meaning',
    summary: {
      ru: 'remember doing ≠ remember to do; stop smoking ≠ stop to smoke; try doing ≠ try to do.',
      de: 'remember doing ≠ remember to do; stop smoking ≠ stop to smoke; try doing ≠ try to do.'
    },
    explanation: {
      ru: '<p>Некоторые глаголы допускают обе формы, но <b>смысл меняется</b>. Общая логика: <b>-ing</b> смотрит на действие, которое уже есть/было; <b>to</b> — на действие, которое ещё впереди.</p>' +
        '<ul>' +
        '<li><b>remember / forget doing</b> — помнить/забыть, что делал; <b>remember / forget to do</b> — не забыть/забыть сделать.</li>' +
        '<li><b>stop doing</b> — прекратить; <b>stop to do</b> — остановиться, чтобы сделать.</li>' +
        '<li><b>try doing</b> — попробовать как эксперимент; <b>try to do</b> — постараться (трудно).</li>' +
        '<li><b>regret doing</b> — жалеть о сделанном; <b>regret to inform</b> — с сожалением сообщить.</li>' +
        '<li><b>go on doing</b> — продолжать то же; <b>go on to do</b> — перейти к следующему.</li>' +
        '<li><b>need doing</b> — нуждается в (пассивный смысл): <em>The car needs washing.</em></li>' +
        '</ul>',
      de: '<p>Einige Verben erlauben beide Formen, aber <b>die Bedeutung ändert sich</b>. Grundidee: <b>-ing</b> blickt auf eine Handlung, die schon da ist/war; <b>to</b> blickt nach vorn.</p>' +
        '<ul>' +
        '<li><b>remember / forget doing</b> — sich erinnern / vergessen, dass man etwas getan hat; <b>remember / forget to do</b> — daran denken / vergessen, etwas zu tun.</li>' +
        '<li><b>stop doing</b> — aufhören; <b>stop to do</b> — anhalten, um etwas zu tun.</li>' +
        '<li><b>try doing</b> — etwas ausprobieren; <b>try to do</b> — versuchen (es ist schwer).</li>' +
        '<li><b>regret doing</b> — bereuen; <b>regret to inform</b> — bedauerlicherweise mitteilen.</li>' +
        '<li><b>go on doing</b> — weitermachen; <b>go on to do</b> — danach etwas anderes tun.</li>' +
        '<li><b>need doing</b> — muss gemacht werden (passivisch): <em>The car needs washing.</em></li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Пары', de: 'Paare' },
      head: { ru: ['-ing', 'to'], de: ['-ing', 'to'] },
      deCols: [0, 1],
      rows: [['I remember locking the door.', 'Remember to lock the door.'], ['He stopped smoking.', 'He stopped to smoke.'], ['Try restarting it.', 'I tried to open it, but it was stuck.'], ['I regret saying that.', 'We regret to inform you …']]
    }],
    examples: [
      { t: 'Did you [[remember to]] send the invoice?', ru: 'Ты не забыл отправить счёт?', de: 'Hast du daran gedacht, die Rechnung zu schicken?' },
      { t: 'I’ll never [[forget meeting]] her for the first time.', ru: 'Никогда не забуду нашу первую встречу.', de: 'Ich werde nie vergessen, wie ich sie zum ersten Mal traf.' },
      { t: 'We [[stopped to]] buy some water.', ru: 'Мы остановились, чтобы купить воды.', de: 'Wir hielten an, um Wasser zu kaufen.' },
      { t: 'If the app freezes, [[try clearing]] the cache.', ru: 'Если приложение зависает, попробуй очистить кэш.', de: 'Wenn die App hängt, versuch mal, den Cache zu leeren.' },
      { t: 'The windows [[need cleaning]].', ru: 'Окна нужно помыть.', de: 'Die Fenster müssen geputzt werden.' }
    ],
    pitfalls: [
      { title: { ru: '«перестал, чтобы»', de: '„aufhören“ ≠ „anhalten, um“' },
        html: { ru: '<span class="right">I stopped drinking coffee</span> — бросил пить кофе. <span class="right">I stopped to drink coffee</span> — остановился выпить кофе.', de: '<span class="right">I stopped drinking coffee</span> — ich habe aufgehört, Kaffee zu trinken. <span class="right">I stopped to drink coffee</span> — ich hielt an, um Kaffee zu trinken.' } },
      { title: { ru: 'try to ≠ try -ing', de: 'try to ≠ try -ing' },
        html: { ru: 'Совет «попробуй» — обычно <span class="right">try doing</span>: <em>Try turning it off and on.</em> «Я пытался, но не смог» — <span class="right">I tried to …</span>', de: 'Ein Tipp („probier mal“) ist meist <span class="right">try doing</span>. „Ich habe es versucht, aber es ging nicht“ ist <span class="right">I tried to …</span>' } }
    ],
    drills: [
      { id: 'en-g-it-1', kind: 'choice', q: 'Please remember ___ the lights when you leave.', options: ['to switch off', 'switching off'], answer: 0,
        explain: { ru: 'Действие впереди → remember to.', de: 'Handlung kommt noch → remember to.' } },
      { id: 'en-g-it-2', kind: 'choice', q: 'I clearly remember ___ the door, but now it’s open!', options: ['to lock', 'locking'], answer: 1,
        explain: { ru: 'Воспоминание о сделанном → -ing.', de: 'Erinnerung an Vergangenes → -ing.' } },
      { id: 'en-g-it-3', kind: 'choice', q: 'On the way home we stopped ___ petrol.', options: ['to get', 'getting'], answer: 0,
        explain: { ru: 'Остановились, чтобы → stop to.', de: 'Angehalten, um zu → stop to.' } },
      { id: 'en-g-it-4', kind: 'gap', q: 'Your hair needs ___ (cut).', answer: 'cutting',
        explain: { ru: 'need + -ing в пассивном смысле.', de: 'need + -ing mit passiver Bedeutung.' } },
      { id: 'en-g-it-5', kind: 'choice', q: 'We regret ___ you that the flight has been cancelled.', options: ['to inform', 'informing'], answer: 0,
        explain: { ru: 'Официальное сообщение → regret to inform.', de: 'Formelle Mitteilung → regret to inform.' } }
    ]
  });

  /* ---------- B2 · Reporting passive ---------- */
  lesson('It is said that … / He is believed to …', {
    id: 'reporting-passive', level: 'B2',
    title: 'The reporting passive',
    summary: {
      ru: 'It is said that… / She is thought to be… / He is believed to have left… — язык новостей и отчётов.',
      de: 'It is said that … / She is thought to be … / He is believed to have left … — die Sprache von Nachrichten und Berichten.'
    },
    explanation: {
      ru: '<p>Чтобы передать мнение «людей вообще» без указания источника, используют пассив глаголов <b>say, think, believe, expect, report, know, consider</b>. Два шаблона:</p>' +
        '<ul>' +
        '<li><b>It + is said + that-clause</b>: <em><b>It is believed that</b> the company will close.</em></li>' +
        '<li><b>Подлежащее + is said + to-infinitive</b>: <em>The company <b>is believed to</b> be in trouble.</em></li>' +
        '</ul>' +
        '<p>Если действие было <b>раньше</b> момента сообщения, нужен <b>perfect infinitive</b>: <em>He is said <b>to have left</b> the country.</em> Если идёт сейчас — <b>to be + -ing</b>: <em>They are thought <b>to be negotiating</b>.</em></p>' +
        '<p>В русском это «говорят, что…», «считается, что…», «по сообщениям…».</p>',
      de: '<p>Um eine allgemeine Meinung ohne Quelle wiederzugeben, nutzt man das Passiv von <b>say, think, believe, expect, report, know, consider</b>. Zwei Muster:</p>' +
        '<ul>' +
        '<li><b>It + is said + that-Satz</b>: <em><b>It is believed that</b> the company will close.</em></li>' +
        '<li><b>Subjekt + is said + to-Infinitiv</b>: <em>The company <b>is believed to</b> be in trouble.</em></li>' +
        '</ul>' +
        '<p>Liegt die Handlung <b>vor</b> der Aussage, braucht man den <b>Infinitiv Perfekt</b>: <em>He is said <b>to have left</b> the country.</em> Läuft sie gerade — <b>to be + -ing</b>: <em>They are thought <b>to be negotiating</b>.</em></p>' +
        '<p>Im Deutschen entspricht das „man sagt, dass …“, „er soll … haben“, „angeblich“ — vgl. <em>Er soll das Land verlassen haben.</em></p>'
    },
    tables: [{
      caption: { ru: 'Время инфинитива', de: 'Zeitform des Infinitivs' },
      head: { ru: ['Когда', 'Форма', 'Пример'], de: ['Wann', 'Form', 'Beispiel'] },
      deCols: [2],
      rows: {
        ru: [['одновременно', 'to + V', 'She is said to be very rich.'], ['сейчас в процессе', 'to be + -ing', 'He is thought to be hiding abroad.'], ['раньше', 'to have + V3', 'The painting is believed to have been stolen in 1990.']],
        de: [['gleichzeitig', 'to + Verb', 'She is said to be very rich.'], ['gerade im Gange', 'to be + -ing', 'He is thought to be hiding abroad.'], ['vorher', 'to have + Partizip', 'The painting is believed to have been stolen in 1990.']]
      }
    }],
    examples: [
      { t: '[[It is expected that]] prices will rise again.', ru: 'Ожидается, что цены снова вырастут.', de: 'Es wird erwartet, dass die Preise wieder steigen.' },
      { t: 'The castle [[is said to be]] haunted.', ru: 'Говорят, в замке водятся привидения.', de: 'Im Schloss soll es spuken.' },
      { t: 'The suspect [[is believed to have left]] the city.', ru: 'Считается, что подозреваемый покинул город.', de: 'Der Verdächtige soll die Stadt verlassen haben.' },
      { t: 'Ten people [[are reported to have been]] injured.', ru: 'По сообщениям, пострадали десять человек.', de: 'Berichten zufolge wurden zehn Menschen verletzt.' }
    ],
    pitfalls: [
      { title: { ru: 'Не забудьте have для прошлого', de: 'have für die Vergangenheit' },
        html: { ru: '<span class="wrong">He is said to leave yesterday.</span> → <span class="right">He is said to have left yesterday.</span>', de: '<span class="wrong">He is said to leave yesterday.</span> → <span class="right">He is said to have left yesterday.</span>' } },
      { title: { ru: 'Без «people say» в официальном стиле', de: 'Formell statt „people say“' },
        html: { ru: 'В отчётах <span class="right">It is widely believed that …</span> звучит лучше, чем <span class="wrong">Many people think …</span>.', de: 'In Berichten klingt <span class="right">It is widely believed that …</span> besser als <span class="wrong">Many people think …</span>.' } }
    ],
    drills: [
      { id: 'en-g-rp-1', kind: 'choice', q: 'The minister is said ___ last night.', options: ['to have resigned', 'to resign', 'resigned'], answer: 0,
        explain: { ru: 'Прошлое событие → to have + V3.', de: 'Vergangenes → to have + Partizip.' } },
      { id: 'en-g-rp-2', kind: 'choice', q: '___ that the new law will reduce traffic.', options: ['It is hoped', 'It hopes', 'Is hoped'], answer: 0,
        explain: { ru: 'It + is + V3 + that.', de: 'It + is + Partizip + that.' } },
      { id: 'en-g-rp-3', kind: 'gap', q: 'The company is thought ___ (plan) a merger right now.', answer: 'to be planning',
        explain: { ru: 'Процесс сейчас → to be + -ing.', de: 'Gerade im Gange → to be + -ing.' } },
      { id: 'en-g-rp-4', kind: 'gap', q: 'Shakespeare is believed ___ (be) born in 1564.', answer: 'to have been',
        explain: { ru: 'Прошлое → to have been born.', de: 'Vergangenheit → to have been born.' } }
    ]
  });
})();
