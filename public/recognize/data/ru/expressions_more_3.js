/* RUSSIAN · Expressions fourth batch: 6 idioms + 4 everyday phrases + 26 chunks (2 per function × 13 functions) = 36 cards.
 * Stress marked with "+" before the stressed vowel (never before ё). Checked against inventory for zero duplicates.
 * Glosses en / de. Original examples. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(n) { return n ? { en: n[0], de: n[1] } : undefined; }
  function I(id, t, level, register, en, de, e, note) {
    return { id: 'ru-ex-idiom-' + id, t: t, level: level, register: register, en: en, de: de, examples: [e], note: nt(note) };
  }
  function E(id, t, level, register, en, de, e, note) {
    return { id: 'ru-ex-ev-' + id, t: t, level: level, register: register, en: en, de: de, examples: [e], note: nt(note) };
  }
  function C(id, fn, topics, t, register, en, de, e, note) {
    return { id: 'ru-ch3-' + id, topic: fn, topics: topics, t: t, register: register, en: en, de: de, examples: [e], note: nt(note) };
  }

  GT.register({ tab: 'expressions', topic: 'idioms', type: 'chunk', items: [
    I('kot-v-meshke', 'куп+ить кот+а в мешк+е', 'B2', 'informal', 'to buy a pig in a poke', 'die Katze im Sack kaufen',
      ex('Снач+ала попр+обуй д+емо, чт+обы не [[куп+ить кот+а в мешк+е]].', 'Try the demo first so you don’t buy a pig in a poke.', 'Teste erst die Demo, um nicht die Katze im Sack zu kaufen.'),
      ['Literally “buy a cat in a sack”, matching German die Katze im Sack.', 'Wörtlich „eine Katze im Sack kaufen“.']),
    I('svoimi-imenami', 'назыв+ать в+ещи сво+ими имен+ами', 'B2', 'neutral', 'to call a spade a spade', 'das Kind beim Namen nennen',
      ex('Дав+айте [[назыв+ать в+ещи сво+ими имен+ами]]: рел+из не гот+ов.', 'Let’s call a spade a spade: the release isn’t ready.', 'Nennen wir das Kind beim Namen: Das Release ist nicht fertig.')),
    I('igrat-s-ognyom', 'игр+ать с огнём', 'B2', 'neutral', 'to play with fire', 'mit dem Feuer spielen',
      ex('Не ст+авить обновл+ения безоп+асности — это [[игр+ать с огнём]].', 'Skipping security updates is playing with fire.', 'Sicherheitsupdates wegzulassen heißt, mit dem Feuer zu spielen.')),
    I('izobretat-velosiped', 'изобрет+ать велосип+ед', 'B2', 'informal', 'to reinvent the wheel', 'das Rad neu erfinden',
      ex('Есть гот+овая библиот+ека, не н+адо [[изобрет+ать велосип+ед]].', 'There’s a ready library; no need to reinvent the wheel.', 'Es gibt eine fertige Bibliothek, man muss das Rad nicht neu erfinden.')),
    I('chitat-mezhdu-strok', 'чит+ать м+ежду строк', 'B2', 'neutral', 'to read between the lines', 'zwischen den Zeilen lesen',
      ex('В +этом отк+азе в+ажно [[чит+ать м+ежду строк]].', 'In this rejection it’s important to read between the lines.', 'Bei dieser Absage muss man zwischen den Zeilen lesen.')),
    I('podlivat-masla', 'подлив+ать м+асла в ог+онь', 'B2', 'neutral', 'to add fuel to the fire', 'Öl ins Feuer gießen',
      ex('Резкий отв+ет в чате т+олько [[подл+ил м+асла в ог+онь]].', 'The sharp reply in the chat only added fuel to the fire.', 'Die scharfe Antwort im Chat goss nur Öl ins Feuer.'))
  ] });

  GT.register({ tab: 'expressions', topic: 'everyday', type: 'chunk', items: [
    E('kak-by-to-ni-bylo', 'Как бы то ни б+ыло.', 'C1', 'neutral', 'Be that as it may.', 'Wie dem auch sei.',
      ex('[[Как бы то ни б+ыло]], реш+ение н+ужно прин+ять сег+одня.', 'Be that as it may, we have to make a decision today.', 'Wie dem auch sei, wir müssen heute entscheiden.')),
    E('samo-soboy', '+Это сам+о соб+ой разум+еется.', 'B2', 'neutral', 'That goes without saying.', 'Das versteht sich von selbst.',
      ex('Пар+оли ником+у не передаём — [[+это сам+о соб+ой разум+еется]].', 'We never share passwords — that goes without saying.', 'Passwörter geben wir nie weiter — das versteht sich von selbst.')),
    E('bez-obid', 'Без об+ид.', 'B1', 'informal', 'No offence.', 'Nichts für ungut.',
      ex('[[Без об+ид]], но старый вар+иант был уд+обнее.', 'No offence, but the old version was handier.', 'Nichts für ungut, aber die alte Version war praktischer.')),
    E('kamen-s-dushi', 'К+амень с душ+и уп+ал!', 'B2', 'informal', 'That’s a weight off my mind!', 'Mir fällt ein Stein vom Herzen!',
      ex('С+ервер сн+ова в сет+и? Прямо [[к+амень с душ+и уп+ал]]!', 'The server’s back online? What a weight off my mind!', 'Der Server ist wieder online? Mir fällt ein Stein vom Herzen!'))
  ] });

  GT.register({ tab: 'chunks', items: [
    // opinion (2)
    C('ubezhdyon-chto', 'opinion', ['society', 'workcomm'], 'Я твёрдо убеждён (убежден+а), что …', 'formal', 'I’m firmly convinced that …', 'Ich bin fest davon überzeugt, dass …',
      ex('[[Я твёрдо убеждён, что]] автот+есты экон+омят вр+емя.', 'I’m firmly convinced that automated tests save time.', 'Ich bin fest davon überzeugt, dass automatisierte Tests Zeit sparen.')),
    C('somnevayus-chto', 'opinion', ['workcomm', 'society'], 'Я сомнев+аюсь, что …', 'neutral', 'I doubt that … / I’m sceptical whether …', 'Ich bezweifle, dass …',
      ex('[[Я сомнев+аюсь, что]] мы усп+еем всё за одн+у нед+елю.', 'I doubt we can finish everything in one week.', 'Ich bezweifle, dass wir alles in einer Woche schaffen.')),
    // agree (2)
    C('eto-logichno', 'agree', ['workcomm', 'everyday'], '+Это звуч+ит лог+ично.', 'neutral', 'That makes complete sense.', 'Das leuchtet mir ein.',
      ex('Снач+ала сд+елать бэк+ап? [[+Это звуч+ит лог+ично]].', 'Take a backup first? That makes complete sense.', 'Zuerst ein Backup machen? Das leuchtet ein.')),
    C('vynuzhden-ne-soglasitsya', 'agree', ['workcomm', 'society'], 'Вынужден(а) не соглас+иться.', 'formal', 'I’m afraid I have to disagree.', 'Da muss ich leider widersprechen.',
      ex('С р+остом цен здесь я [[вынужден не соглас+иться]]: т+есты пок+азывают друг+ое.', 'I have to disagree here: tests show otherwise.', 'Da muss ich leider widersprechen: Tests zeigen etwas anderes.')),
    // clarify (2)
    C('mozhno-utochnit', 'clarify', ['workcomm', 'authorities'], 'М+ожно кор+отко уточн+ить [X]?', 'neutral', 'Could I briefly clarify [X]?', 'Darf ich kurz [X] nachfragen?',
      ex('[[М+ожно кор+отко уточн+ить]] ср+оки отпр+авки отчёта?', 'Could I briefly clarify the deadline for sending the report?', 'Darf ich kurz die Frist für den Bericht nachfragen?')),
    C('kak-na-praktike', 'clarify', ['workcomm', 'dev'], 'Как +это в+ыглядит на пр+актике?', 'neutral', 'What does that look like in practice?', 'Wie sieht das in der Praxis aus?',
      ex('Пр+авило понятное, но [[как +это в+ыглядит на пр+актике]]?', 'The rule is clear, but what does that look like in practice?', 'Die Regel ist klar, aber wie sieht das in der Praxis aus?')),
    // phone (2)
    C('kto-sprashivaet', 'phone', ['work', 'authorities'], 'Кт+о ег+о / её спр+ашивает?', 'formal', 'Who may I say is calling?', 'Wen darf ich melden?',
      ex('Сек+унду, переключ+у на отд+ел — [[кт+о ег+о спр+ашивает]]?', 'One moment, transferring you — who’s calling please?', 'Einen Moment, ich verbinde — wen darf ich melden?')),
    C('svyaz-preryvaetsya', 'phone', ['everyday', 'workcomm'], 'Связь прерыв+ается — перезвон+ю чер+ез мин+уту.', 'neutral', 'The line is breaking up — I’ll call right back.', 'Die Verbindung bricht ab — ich rufe gleich zurück.',
      ex('Я в тунн+еле, [[связь прерыв+ается — перезвон+ю чер+ез мин+уту]].', 'I’m in a tunnel, the line’s breaking up — I’ll call right back.', 'Ich bin im Tunnel, die Verbindung bricht ab — ich rufe gleich zurück.')),
    // complain (2)
    C('uzhe-soobshchal', 'complain', ['authorities', 'home'], 'Я уж+е сообщ+ал(а) об +этом [д+ата].', 'formal', 'I already reported this on [date].', 'Ich habe das bereits am [Datum] gemeldet.',
      ex('[[Я уж+е сообщ+ал об +этом]] в пр+ошлый понед+ельник, но отв+ета нет.', 'I already reported this last Monday, yet there’s no reply.', 'Ich habe das bereits letzten Montag gemeldet, aber ohne Antwort.')),
    C('tak-dalshe-nelzya', 'complain', ['home', 'everyday'], 'Так д+альше продолж+аться не м+ожет.', 'neutral', 'This simply can’t go on like this.', 'So kann es nicht weitergehen.',
      ex('Сб+ои к+аждое +утро — [[так д+альше продолж+аться не м+ожет]].', 'Outages every morning — this can’t go on.', 'Jeden Morgen Ausfälle — so kann es nicht weitergehen.')),
    // problem (2)
    C('lokalizovat-prichinu', 'problem', ['infra', 'dev'], 'Нам удал+ось локализ+овать прич+ину.', 'formal', 'We’ve managed to narrow down the cause.', 'Wir konnten die Ursache eingrenzen.',
      ex('[[Нам удал+ось локализ+овать прич+ину]]: истёк сертифик+ат.', 'We narrowed down the cause: a certificate expired.', 'Wir konnten die Ursache eingrenzen: ein Zertifikat ist abgelaufen.')),
    C('tekst-oshibki', 'problem', ['dev', 'infra'], 'Текст ош+ибки так+ой: [X].', 'neutral', 'The error message reads: [X].', 'Die Fehlermeldung lautet: [X].',
      ex('[[Текст ош+ибки так+ой]]: «Д+оступ запрещён».', 'The error message reads: “Access denied”.', 'Die Fehlermeldung lautet: „Zugriff verweigert“.')),
    // appointments (2)
    C('otmenit-vstrechu', 'appointments', ['workcomm', 'health'], 'Мне, к сожал+ению, придётся отмен+ить встр+ечу.', 'formal', 'Unfortunately I have to cancel the meeting.', 'Leider muss ich den Termin absagen.',
      ex('Я прибол+ел — [[мне, к сожал+ению, придётся отмен+ить встр+ечу]] в четв+ерг.', 'I caught a cold — unfortunately I have to cancel Thursday’s meeting.', 'Ich bin krank — leider muss ich den Termin am Donnerstag absagen.')),
    C('kakoy-slot', 'appointments', ['workcomm', 'authorities'], 'Как+ой друг+ой день вам бы подошёл?', 'formal', 'Which other day would suit you?', 'Welcher andere Tag würde Ihnen passen?',
      ex('Сред+а з+анята — [[как+ой друг+ой день вам бы подошёл]]?', 'Wednesday is booked — which other day would work for you?', 'Mittwoch ist belegt — welcher andere Tag würde Ihnen passen?')),
    // email (2)
    C('esli-vozniknut-voprosy', 'email', ['work', 'authorities'], '+Если возн+икнут вопр+осы, пож+алуйста, пиш+ите.', 'formal', 'If you have any questions, please write.', 'Bei Rückfragen schreiben Sie mir gerne.',
      ex('Всё распис+али в ф+айле. [[+Если возн+икнут вопр+осы, пож+алуйста, пиш+ите]].', 'Everything is detailed in the file. If any questions arise, please write.', 'Alles steht in der Datei. Bei Rückfragen schreiben Sie gerne.')),
    C('zaranee-blagodaryu', 'email', ['work', 'authorities'], 'Заран+ее благодар+ю за сод+ействие.', 'formal', 'Thank you in advance for your cooperation.', 'Vielen Dank im Voraus für Ihre Unterstützung.',
      ex('[[Заран+ее благодар+ю за сод+ействие]] в оформл+ении проп+уска.', 'Thank you in advance for your help arranging the pass.', 'Vielen Dank im Voraus für Ihre Unterstützung beim Ausstellen des Ausweises.')),
    // smalltalk (2)
    C('nakonets-pyatnitsa', 'smalltalk', ['everyday', 'workcomm'], 'Након+ец-то п+ятница!', 'informal', 'Friday at last!', 'Endlich Freitag!',
      ex('[[Након+ец-то п+ятница]]! Отл+ичных выходн+ых!', 'Friday at last! Have a great weekend!', 'Endlich Freitag! Schönes Wochenende!')),
    C('budesh-kofe', 'smalltalk', ['workcomm', 'everyday'], 'Я пошёл (пошл+а) за к+офе — теб+е взять?', 'informal', 'I’m grabbing coffee — want one too?', 'Ich hole Kaffee — möchtest du auch einen?',
      ex('Перер+ыв пять мин+ут: [[я пошёл за к+офе — теб+е взять]]?', 'Five-minute break: I’m grabbing coffee — want one?', 'Fünf Minuten Pause: Ich hole Kaffee — magst du auch einen?')),
    // it_standup (2)
    C('zadacha-na-revyu', 'it_standup', ['dev', 'workcomm'], 'Зад+ача сейч+ас на ревь+ю.', 'neutral', 'The task is currently in review.', 'Das Ticket ist jetzt im Review.',
      ex('Код гот+ов, [[зад+ача сейч+ас на ревь+ю]].', 'The code is ready, the task is now in review.', 'Der Code ist fertig, die Aufgabe liegt jetzt im Review.')),
    C('blokery-net', 'it_standup', ['workcomm', 'dev'], 'Бл+океров у мен+я нет.', 'neutral', 'I have no blockers.', 'Blocker habe ich keine.',
      ex('Ид+у по гр+афику, [[бл+океров у мен+я нет]].', 'I’m on schedule, I have no blockers.', 'Ich liege im Plan, Blocker habe ich keine.')),
    // it_bug (2)
    C('posle-otkata', 'it_bug', ['infra', 'dev'], 'П+осле отк+ата всё сн+ова зараб+отало.', 'neutral', 'After the rollback everything worked again.', 'Nach dem Rollback lief wieder alles.',
      ex('Мы отмен+или рел+из — [[п+осле отк+ата всё сн+ова зараб+отало]].', 'We reverted the release — after the rollback everything worked again.', 'Wir haben das Release zurückgerollt — danach lief wieder alles.')),
    C('v-logah-vidno', 'it_bug', ['dev', 'infra'], 'В л+огах чётко в+идно, где п+адает.', 'neutral', 'The logs clearly show where it crashes.', 'In den Logs sieht man genau, wo es abbricht.',
      ex('Глянь на сорок втор+ую стр+оку — [[в л+огах чётко в+идно, где п+адает]].', 'Check line 42 — the logs clearly show where it crashes.', 'Schau in Zeile 42 — in den Logs sieht man genau, wo es abbricht.')),
    // it_help (2)
    C('sam-ne-spravlyus', 'it_help', ['dev', 'infra'], 'Бо+юсь, сам(а) я зд+есь не разбер+усь.', 'neutral', 'I’m afraid I won’t figure this out on my own.', 'Ich fürchte, allein komme ich hier nicht weiter.',
      ex('Час ищ+у прич+ину, но [[бо+юсь, сам я зд+есь не разбер+усь]].', 'Been searching for an hour, afraid I won’t solve this alone.', 'Suche schon eine Stunde — allein komme ich hier nicht weiter.')),
    C('uzhe-proboval', 'it_help', ['dev', 'infra'], 'Я уж+е пр+обовал(а) [X], но не помогл+о.', 'neutral', 'I’ve already tried [X], but it didn’t help.', 'Ich habe [X] schon probiert, aber es half nicht.',
      ex('[[Я уж+е пр+обовал]] пересобра́ть конт+ейнер, [[но не помогл+о]].', 'I’ve already tried rebuilding the container, but it didn’t help.', 'Ich habe schon versucht, den Container neu zu bauen, half aber nicht.')),
    // it_meeting (2)
    C('vizhu-risk', 'it_meeting', ['security', 'workcomm'], 'Я в+ижу зд+есь риск с [X].', 'neutral', 'I see a risk here with [X].', 'Ich sehe hier ein Risiko bei [X].',
      ex('[[Я в+ижу зд+есь риск с]] хран+ением ключей в открытом в+иде.', 'I see a risk here with storing keys in plaintext.', 'Ich sehe hier ein Risiko bei der Speicherung von Schlüsseln im Klartext.')),
    C('vzvesim-plyusy-minusy', 'it_meeting', ['workcomm', 'dev'], 'Дав+айте взв+есим плю́сы и м+инусы.', 'neutral', 'Let’s weigh up the pros and cons.', 'Wägen wir die Vor- und Nachteile ab.',
      ex('Перед в+ыбором базы д+анных [[дав+айте взв+есим плю́сы и м+инусы]].', 'Before choosing a database, let’s weigh up the pros and cons.', 'Vor der Wahl der Datenbank lasst uns Vor- und Nachteile abwägen.'))
  ] });
})();

/* RECGZ content expansion 2026-11-26 — content only.
 * Editorial learning targets; original examples; permanent IDs. */
GT.register({
  "tab": "chunks",
  "topic": "opinion",
  "items": [
    {
      "id": "ru-content26-ch-judge",
      "t": "Наск+олько я мог+у суд+ить, [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "As far as I can judge, [X].",
      "de": "Soweit ich das beurteilen kann, [X].",
      "examples": [
        {
          "t": "[[Наск+олько я мог+у суд+ить]], план реалист+ичен.",
          "en": "As far as I can judge, the plan is realistic.",
          "de": "Soweit ich das beurteilen kann, ist der Plan realistisch."
        }
      ]
    },
    {
      "id": "ru-content26-ch-rule-out",
      "t": "Я бы не стал(а) исключ+ать [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "C1",
      "register": "neutral",
      "en": "I wouldn’t rule out [X].",
      "de": "Ich würde [X] nicht ausschließen.",
      "examples": [
        {
          "t": "[[Я бы не стал исключ+ать]] зад+ержку.",
          "en": "I wouldn’t rule out a delay.",
          "de": "Ich würde eine Verzögerung nicht ausschließen."
        }
      ],
      "note": {
        "en": "A qualified possibility, not a prediction that it will happen.",
        "de": "Eine vorsichtig formulierte Möglichkeit, keine Vorhersage."
      }
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "agree",
  "items": [
    {
      "id": "ru-content26-ch-hard-to-argue",
      "t": "С +этим тр+удно посп+орить.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "It’s hard to argue with that.",
      "de": "Dagegen lässt sich schwer etwas einwenden.",
      "examples": [
        {
          "t": "[[С +этим тр+удно посп+орить]], но расх+оды т+оже важн+ы.",
          "en": "It’s hard to argue with that, but costs matter too.",
          "de": "Dagegen lässt sich schwer etwas einwenden, aber die Kosten sind auch wichtig."
        }
      ]
    },
    {
      "id": "ru-content26-ch-aim-method",
      "t": "Я согл+асен (согл+асна) с ц+елью, но не с м+етодом.",
      "pos": "chunk",
      "type": "chunk",
      "level": "C1",
      "register": "neutral",
      "en": "I agree with the aim, but not the method.",
      "de": "Ich stimme dem Ziel zu, aber nicht der Methode.",
      "examples": [
        {
          "t": "[[Я согл+асен с ц+елью, но не с м+етодом]]. Дав+айте рассм+отрим друг+ой подх+од.",
          "en": "I agree with the aim, but not the method. Let’s consider another approach.",
          "de": "Ich stimme dem Ziel zu, aber nicht der Methode. Betrachten wir einen anderen Ansatz."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "clarify",
  "items": [
    {
      "id": "ru-content26-ch-talking-about",
      "t": "Речь идёт о [X] или о [Y]?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "neutral",
      "en": "Are we talking about [X] or [Y]?",
      "de": "Geht es um [X] oder um [Y]?",
      "examples": [
        {
          "t": "[[Речь идёт о]] цен+е [[или о]] ср+оках?",
          "en": "Are we talking about the price or the deadlines?",
          "de": "Geht es um den Preis oder um die Termine?"
        }
      ]
    },
    {
      "id": "ru-content26-ch-include",
      "t": "Что +именно вы отн+осите к [X]?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "What exactly do you include in [X]?",
      "de": "Was genau zählen Sie zu [X]?",
      "examples": [
        {
          "t": "[[Что +именно вы отн+осите к]] дополн+ительным расх+одам?",
          "en": "What exactly do you include in additional costs?",
          "de": "Was genau zählen Sie zu den zusätzlichen Kosten?"
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "complain",
  "items": [
    {
      "id": "ru-content26-ch-resolution",
      "t": "Прош+у сообщ+ить, как вы план+ируете реш+ить +эту пробл+ему.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "formal",
      "en": "Please explain how you intend to resolve this.",
      "de": "Bitte erläutern Sie, wie Sie dieses Problem lösen wollen.",
      "examples": [
        {
          "t": "[[Прош+у сообщ+ить, как вы план+ируете реш+ить +эту пробл+ему]]. Отопл+ения нет уж+е тр+етий день.",
          "en": "Please explain how you intend to resolve this. The heating has been off for three days.",
          "de": "Bitte erläutern Sie, wie Sie dieses Problem lösen wollen. Die Heizung ist seit drei Tagen ausgefallen."
        }
      ]
    },
    {
      "id": "ru-content26-ch-deadline-passed",
      "t": "К сожал+ению, соглас+ованный срок уж+е истёк.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "formal",
      "en": "Unfortunately, the agreed deadline has passed.",
      "de": "Leider ist die vereinbarte Frist bereits abgelaufen.",
      "examples": [
        {
          "t": "[[К сожал+ению, соглас+ованный срок уж+е истёк]], а отв+ета я не получ+ил.",
          "en": "Unfortunately, the agreed deadline has passed, and I have not received a reply.",
          "de": "Leider ist die vereinbarte Frist bereits abgelaufen, und ich habe keine Antwort erhalten."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "problem",
  "items": [
    {
      "id": "ru-content26-ch-even-though",
      "t": "Не получ+ается [X], хот+я [Y].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "neutral",
      "en": "I can’t [X], even though [Y].",
      "de": "Ich kann [X] nicht, obwohl [Y].",
      "examples": [
        {
          "t": "[[Не получ+ается]] войт+и, [[хот+я]] пар+оль в+ерный.",
          "en": "I can’t log in, even though the password is correct.",
          "de": "Ich kann mich nicht anmelden, obwohl das Passwort richtig ist."
        }
      ]
    },
    {
      "id": "ru-content26-ch-only-affects",
      "t": "Пробл+ема затр+агивает т+олько [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "The issue only affects [X].",
      "de": "Das Problem betrifft nur [X].",
      "examples": [
        {
          "t": "[[Пробл+ема затр+агивает т+олько]] моб+ильную в+ерсию.",
          "en": "The issue only affects the mobile version.",
          "de": "Das Problem betrifft nur die mobile Version."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "appointments",
  "items": [
    {
      "id": "ru-content26-ch-earlier",
      "t": "М+ожно ли сдв+инуть встр+ечу на час р+аньше?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "Could we bring the meeting forward by an hour?",
      "de": "Könnten wir das Treffen um eine Stunde vorverlegen?",
      "examples": [
        {
          "t": "[[М+ожно ли сдв+инуть встр+ечу на час р+аньше]]? Мне н+ужно усп+еть на п+оезд.",
          "en": "Could we bring the meeting forward by an hour? I need to catch a train.",
          "de": "Könnten wir das Treffen um eine Stunde vorverlegen? Ich muss einen Zug erreichen."
        }
      ],
      "note": {
        "en": "Сдвинуть на час раньше means move earlier (e.g. 15:00 to 14:00). State the new time explicitly.",
        "de": "Сдвинуть на час раньше bedeutet vorverlegen (z. B. 15 Uhr auf 14 Uhr). Die neue Uhrzeit ausdrücklich nennen."
      }
    },
    {
      "id": "ru-content26-ch-local-time",
      "t": "Подтверд+ите, пож+алуйста, м+естное вр+емя встр+ечи.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "Please confirm the local time of the meeting.",
      "de": "Bitte bestätigen Sie die Ortszeit des Treffens.",
      "examples": [
        {
          "t": "[[Подтверд+ите, пож+алуйста, м+естное вр+емя встр+ечи]]: у нас р+азные часов+ые пояс+а.",
          "en": "Please confirm the local time of the meeting: we are in different time zones.",
          "de": "Bitte bestätigen Sie die Ortszeit des Treffens: Wir sind in verschiedenen Zeitzonen."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "phone",
  "items": [
    {
      "id": "ru-content26-ch-prefer-email",
      "t": "Мне уд+обнее, +если вы нап+ишете по электр+онной п+очте.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "I’d prefer it if you emailed me.",
      "de": "Mir wäre es lieber, wenn Sie mir eine E-Mail schreiben würden.",
      "examples": [
        {
          "t": "[[Мне уд+обнее, +если вы нап+ишете по электр+онной п+очте]]. Я смог+у прилож+ить докум+енты.",
          "en": "I’d prefer it if you emailed me. I can then attach the documents.",
          "de": "Mir wäre es lieber, wenn Sie mir eine E-Mail schreiben würden. Dann kann ich die Dokumente anhängen."
        }
      ]
    },
    {
      "id": "ru-content26-ch-stay-line",
      "t": "Остав+айтесь, пож+алуйста, на л+инии.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "neutral",
      "en": "Please stay on the line.",
      "de": "Bitte bleiben Sie in der Leitung.",
      "examples": [
        {
          "t": "[[Остав+айтесь, пож+алуйста, на л+инии]], я уточн+ю информ+ацию.",
          "en": "Please stay on the line while I check the information.",
          "de": "Bitte bleiben Sie in der Leitung, während ich die Information prüfe."
        }
      ],
      "note": {
        "en": "Polite service phrase; the caller should keep the call connected.",
        "de": "Höfliche Serviceformel: Der Anrufer soll nicht auflegen."
      }
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "email",
  "items": [
    {
      "id": "ru-content26-ch-following",
      "t": "В продолж+ение н+ашего разгов+ора направл+яю [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "formal",
      "en": "Following our conversation, I’m sending [X].",
      "de": "Im Anschluss an unser Gespräch sende ich Ihnen [X].",
      "examples": [
        {
          "t": "[[В продолж+ение н+ашего разгов+ора направл+яю]] обновлённую см+ету.",
          "en": "Following our conversation, I’m sending the updated estimate.",
          "de": "Im Anschluss an unser Gespräch sende ich Ihnen den aktualisierten Kostenvoranschlag."
        }
      ]
    },
    {
      "id": "ru-content26-ch-please-note",
      "t": "Прош+у прин+ять к св+едению, что [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "formal",
      "en": "Please note that [X].",
      "de": "Bitte beachten Sie, dass [X].",
      "examples": [
        {
          "t": "[[Прош+у прин+ять к св+едению, что]] срок под+ачи продлён.",
          "en": "Please note that the submission deadline has been extended.",
          "de": "Bitte beachten Sie, dass die Einreichungsfrist verlängert wurde."
        }
      ],
      "note": {
        "en": "Formal phrase used in official letters and notices.",
        "de": "Formelle Wendung für offizielle Schreiben und Mitteilungen."
      }
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "smalltalk",
  "items": [
    {
      "id": "ru-content26-ch-settling-in",
      "t": "Как ты здесь осв+аиваешься?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "informal",
      "en": "How are you settling in?",
      "de": "Wie lebst du dich hier ein?",
      "examples": [
        {
          "t": "[[Как ты здесь осв+аиваешься]]? Уж+е познак+омился с сос+едями?",
          "en": "How are you settling in? Have you met the neighbours yet?",
          "de": "Wie lebst du dich hier ein? Hast du die Nachbarn schon kennengelernt?"
        }
      ]
    },
    {
      "id": "ru-content26-ch-lined-up",
      "t": "Есть как+ие-нибудь интер+есные пл+аны?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "informal",
      "en": "Got anything interesting lined up?",
      "de": "Hast du etwas Interessantes vor?",
      "examples": [
        {
          "t": "На выходн+ые [[есть как+ие-нибудь интер+есные пл+аны]]?",
          "en": "Got anything interesting lined up for the weekend?",
          "de": "Hast du am Wochenende etwas Interessantes vor?"
        }
      ],
      "note": {
        "en": "Casual way to ask about someone's upcoming plans.",
        "de": "Lockere Frage nach den kommenden Plänen."
      }
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it_standup",
  "items": [
    {
      "id": "ru-content26-ch-waiting-confirmation",
      "t": "Жду подтвержд+ения от [X], чт+обы прод+олжить.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "I’m waiting for confirmation from [X] before I can continue.",
      "de": "Ich warte auf die Bestätigung von [X], bevor ich weitermachen kann.",
      "examples": [
        {
          "t": "[[Жду подтвержд+ения от]] зак+азчика, [[чт+обы прод+олжить]].",
          "en": "I’m waiting for confirmation from the client before I can continue.",
          "de": "Ich warte auf die Bestätigung des Kunden, bevor ich weitermachen kann."
        }
      ]
    },
    {
      "id": "ru-content26-ch-end-day",
      "t": "К конц+у дня рассч+итываю заверш+ить [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "I expect to finish [X] by the end of the day.",
      "de": "Ich rechne damit, [X] bis Tagesende abzuschließen.",
      "examples": [
        {
          "t": "[[К конц+у дня рассч+итываю заверш+ить]] пров+ерку.",
          "en": "I expect to finish the review by the end of the day.",
          "de": "Ich rechne damit, die Prüfung bis Tagesende abzuschließen."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it_bug",
  "items": [
    {
      "id": "ru-content26-ch-no-repro",
      "t": "С +этими д+анными ош+ибка не воспроизв+одится.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "I can’t reproduce the issue with this data.",
      "de": "Mit diesen Daten kann ich den Fehler nicht reproduzieren.",
      "examples": [
        {
          "t": "[[С +этими д+анными ош+ибка не воспроизв+одится]]. Н+ужен друг+ой прим+ер.",
          "en": "I can’t reproduce the issue with this data. I need another example.",
          "de": "Mit diesen Daten kann ich den Fehler nicht reproduzieren. Ich brauche ein anderes Beispiel."
        }
      ]
    },
    {
      "id": "ru-content26-ch-previous-version",
      "t": "На предыд+ущей в+ерсии +этого не б+ыло.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "neutral",
      "en": "This didn’t happen in the previous version.",
      "de": "In der vorherigen Version ist das nicht passiert.",
      "examples": [
        {
          "t": "[[На предыд+ущей в+ерсии +этого не б+ыло]]: п+оиск раб+отал б+ыстро.",
          "en": "This didn’t happen in the previous version: the search was fast.",
          "de": "In der vorherigen Version ist das nicht passiert: Die Suche war schnell."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it_help",
  "items": [
    {
      "id": "ru-content26-ch-check-assumption",
      "t": "М+ожешь пров+ерить моё предполож+ение?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "informal",
      "en": "Could you check my assumption?",
      "de": "Könntest du meine Annahme überprüfen?",
      "examples": [
        {
          "t": "[[М+ожешь пров+ерить моё предполож+ение]]? К+ажется, пробл+ема в к+эше.",
          "en": "Could you check my assumption? I think the cache is the problem.",
          "de": "Könntest du meine Annahme überprüfen? Ich glaube, das Problem liegt im Cache."
        }
      ]
    },
    {
      "id": "ru-content26-ch-where-start",
      "t": "Покаж+и, пож+алуйста, с чег+о нач+ать.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "informal",
      "en": "Could you show me where to start?",
      "de": "Könntest du mir zeigen, wo ich anfangen soll?",
      "examples": [
        {
          "t": "[[Покаж+и, пож+алуйста, с чег+о нач+ать]]: я ещё не раб+отал с +этой сист+емой.",
          "en": "Could you show me where to start? I haven’t worked with this system before.",
          "de": "Könntest du mir zeigen, wo ich anfangen soll? Ich habe noch nicht mit diesem System gearbeitet."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it_meeting",
  "items": [
    {
      "id": "ru-content26-ch-criteria",
      "t": "Предлаг+аю снач+ала согласов+ать крит+ерии.",
      "pos": "chunk",
      "type": "chunk",
      "level": "C1",
      "register": "neutral",
      "en": "I suggest we agree on the criteria first.",
      "de": "Ich schlage vor, dass wir zuerst die Kriterien abstimmen.",
      "examples": [
        {
          "t": "[[Предлаг+аю снач+ала согласов+ать крит+ерии]], а пот+ом ср+авнивать вари+анты.",
          "en": "I suggest we agree on the criteria first and then compare the options.",
          "de": "Ich schlage vor, dass wir zuerst die Kriterien abstimmen und dann die Optionen vergleichen."
        }
      ]
    },
    {
      "id": "ru-content26-ch-responsibility",
      "t": "Кто возьмёт на себ+я отв+етственность за [X]?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "en": "Who will take responsibility for [X]?",
      "de": "Wer übernimmt die Verantwortung für [X]?",
      "examples": [
        {
          "t": "[[Кто возьмёт на себ+я отв+етственность за]] пров+ерку результ+ата?",
          "en": "Who will take responsibility for checking the result?",
          "de": "Wer übernimmt die Verantwortung für die Überprüfung des Ergebnisses?"
        }
      ]
    }
  ]
});

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.register({
  "tab": "chunks",
  "topic": "appointments",
  "items": [
    {
      "id": "ru-telc26-ch-rechtzeitig-bescheid",
      "t": "Пож+алуйста, сообщ+ите нам зар+анее.",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 10,
          "headword": "rechtzeitig Bescheid geben",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Bitte geben Sie uns rechtzeitig Bescheid.",
      "en": "Please let us know in good time.",
      "examples": [
        {
          "t": "+Если вы не см+ожете прийт+и на встр+ечу, [[пож+алуйста, сообщ+ите нам зар+анее]].",
          "de": "Falls Sie den Termin nicht wahrnehmen können, geben Sie uns bitte rechtzeitig Bescheid.",
          "en": "If you cannot attend the appointment, please let us know in good time."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "email",
  "items": [
    {
      "id": "ru-telc26-ch-rechnung-begleichen",
      "t": "Я оплач+у счёт до [д+ата].",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 27,
          "headword": "eine Rechnung begleichen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Ich werde die Rechnung bis [Datum] begleichen.",
      "en": "I will settle the invoice by [date].",
      "examples": [
        {
          "t": "[[Я оплач+у счёт до]] п+ятницы.",
          "de": "Ich werde die Rechnung bis Freitag begleichen.",
          "en": "I will settle the invoice by Friday."
        }
      ]
    },
    {
      "id": "ru-telc26-ch-schriftform",
      "t": "Для [X] тр+ебуется п+исьменная ф+орма.",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 35,
          "headword": "etwas bedarf der Schriftform",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "[X] bedarf der Schriftform.",
      "en": "[X] must be in writing.",
      "examples": [
        {
          "t": "Согл+асно про+екту, для измен+ения соглаш+ения [[тр+ебуется п+исьменная ф+орма]].",
          "de": "Laut Entwurf bedarf eine Änderung der Vereinbarung der Schriftform.",
          "en": "According to the draft, an amendment must be in writing."
        }
      ],
      "note": {
        "de": "Formelle Wendung für eine schriftliche Formvorschrift in Verträgen oder Entwürfen.",
        "en": "Formal wording for a written-form requirement in contracts or draft documents."
      }
    },
    {
      "id": "ru-telc26-ch-ab-werk",
      "t": "с зав+ода",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 25,
          "headword": "ab Werk",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "ab Werk",
      "en": "ex works",
      "examples": [
        {
          "t": "В предлож+ении ук+азана отгр+узка [[с зав+ода]] поставщик+а.",
          "de": "Das Angebot gilt ab Werk des Lieferanten.",
          "en": "The quote is ex works at the supplier’s premises."
        }
      ],
      "note": {
        "de": "Kaufmännische Lieferangabe. Die konkreten Kosten und Pflichten ergeben sich aus den vereinbarten Bedingungen.",
        "en": "A commercial delivery expression used in quotations. The actual allocation of costs and duties belongs in the agreed terms."
      }
    },
    {
      "id": "ru-telc26-ch-nachfrage",
      "t": "По запр+осу мы м+ожем напр+авить вам [X].",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 12,
          "headword": "auf Nachfrage",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Auf Nachfrage senden wir Ihnen [X].",
      "en": "On request, we can send you [X].",
      "examples": [
        {
          "t": "[[По запр+осу мы м+ожем напр+авить вам]] п+олное техн+ическое опис+ание.",
          "de": "Auf Nachfrage senden wir Ihnen das vollständige Datenblatt.",
          "en": "On request, we can send you the complete datasheet."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it_meeting",
  "items": [
    {
      "id": "ru-telc26-ch-gegenvorschlag",
      "t": "Я хот+ел(а) бы предлож+ить встр+ечный вари+ант.",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 21,
          "headword": "einen Gegenvorschlag machen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Ich möchte einen Gegenvorschlag machen.",
      "en": "I’d like to make a counterproposal.",
      "examples": [
        {
          "t": "[[Я хот+ел бы предлож+ить встр+ечный вари+ант]]: снач+ала пров+ерим б+олее прост+ое реш+ение.",
          "de": "Ich möchte einen Gegenvorschlag machen: Wir testen zuerst eine kleinere Lösung.",
          "en": "I’d like to make a counterproposal: let’s test a smaller solution first."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "complain",
  "items": [
    {
      "id": "ru-telc26-ch-verstaendnis",
      "t": "Пр+осим отнест+ись с поним+анием.",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 29,
          "headword": "um Verständnis bitten",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Wir bitten um Ihr Verständnis.",
      "en": "We ask for your understanding.",
      "examples": [
        {
          "t": "Дост+авка зад+ерживается на од+ин день. [[Пр+осим отнест+ись с поним+анием]].",
          "de": "Die Lieferung verzögert sich um einen Tag. Wir bitten um Ihr Verständnis.",
          "en": "The delivery is delayed by one day. We ask for your understanding."
        }
      ]
    }
  ]
});

/* === Content expansion 2026-11-27 === */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(n) { return n ? { en: n[0], de: n[1] } : undefined; }
  function I(id, t, level, register, en, de, e, note) {
    return { id: 'ru-ex-idiom-x27-' + id, t: t, level: level, register: register, en: en, de: de, examples: [e], note: nt(note) };
  }
  function E(id, t, level, register, en, de, e, note) {
    return { id: 'ru-ex-ev-x27-' + id, t: t, level: level, register: register, en: en, de: de, examples: [e], note: nt(note) };
  }

  GT.register({ tab: 'expressions', topic: 'idioms', type: 'chunk', items: [
    // idioms-people (9)
    I('dusha-v-dushu', 'жить душ+а в д+ушу', 'B2', 'neutral', 'to live in complete harmony', 'ein Herz und eine Seele sein',
      ex('Они жен+аты уж+е д+есять лет и [[жив+ут душ+а в д+ушу]].', 'They have been married for ten years and live in complete harmony.', 'Sie sind seit zehn Jahren verheiratet und leben in völliger Harmonie.'),
      ['Lit. “soul to soul”.', 'Wörtl. „Seele in Seele leben“.']),
    I('ne-razley-voda', 'не разл+ей вод+а', 'B2', 'informal', 'inseparable / thick as thieves', 'unzertrennlich sein',
      ex('С п+ервого к+урса он+и с Андр+еем [[не разл+ей вод+а]].', 'Since freshman year she and Andrey have been inseparable.', 'Seit dem ersten Studienjahr sind die beiden unzertrennlich.')),
    I('vyyti-iz-sebya', 'в+ыйти из себ+я', 'B2', 'neutral', 'to lose one’s temper / blow up', 'aus der Haut fahren',
      ex('От +этой н+аглости он ч+уть не [[в+ышел из себ+я]].', 'That nerve nearly made him lose his temper.', 'Bei dieser Frechheit fuhr er fast aus der Haut.')),
    I('vstat-ne-s-toy-nogi', 'встать не с той ног+и', 'B2', 'informal', 'to get up on the wrong side of the bed', 'mit dem linken Fuß aufstehen',
      ex('Он сег+одня раздражён — нав+ерное, [[встал не с той ног+и]].', 'He is irritable today — he must have got up on the wrong side of the bed.', 'Er ist heute gereizt — wahrscheinlich ist er mit dem linken Fuß aufgestanden.')),
    I('dusha-naraspashku', 'душ+а нарасп+ашку', 'C1', 'neutral', 'open-hearted / wearing one’s heart on one’s sleeve', 'ein offenes Herz haben',
      ex('Мой сос+ед — челов+ек с [[душ+ой нарасп+ашку]]: всем помог+ает.', 'My neighbour is completely open-hearted: he helps everyone.', 'Mein Nachbar ist eine offene Seele: Er hilft jedem.')),
    I('soyti-s-uma', 'сойт+и с ум+а', 'B1', 'informal', 'to go crazy / lose one’s mind', 'verrückt werden',
      ex('С +этим ш+умом за окн+ом м+ожно [[сойт+и с ум+а]]!', 'With that noise outside you could lose your mind!', 'Bei diesem Lärm vor dem Fenster kann man verrückt werden!')),
    I('ne-v-duhe', 'быть не в д+ухе', 'B2', 'neutral', 'to be in a bad mood / out of sorts', 'schlecht gelaunt sein',
      ex('Л+учше зайд+и поп+озже: дир+ектор сег+одня [[не в д+ухе]].', 'Better drop by later: the director is out of sorts today.', 'Komm lieber später vorbei: Der Chef ist heute schlecht gelaunt.')),
    I('obvesti-vokrug-paltsa', 'обвест+и вокр+уг п+альца', 'C1', 'neutral', 'to twist someone around one’s little finger / outwit', 'jemanden um den Finger wickeln',
      ex('Мош+енник легко [[обвёл]] дов+ерчивого кли+ента [[вокр+уг п+альца]].', 'The scammer easily outwitted the trusting client.', 'Der Betrüger wickelte den gutgläubigen Kunden leicht um den Finger.')),
    I('priyatno-po-dushe', 'прийт+ись по душ+е', 'B2', 'neutral', 'to appeal to / be to one’s liking', 'jemandem ans Herz gehen / zusagen',
      ex('Наш н+овый про+ект [[пришёлся по душ+е]] всем уч+астникам.', 'Our new project appealed to all participants.', 'Unser neues Projekt fand bei allen Teilnehmern großen Anklang.')),

    // idioms-talk (9)
    I('na-chistotu', 'поговор+ить начистот+у', 'B2', 'neutral', 'to have a heart-to-heart / speak frankly', 'Klartext reden',
      ex('Хв+атит намек+ать, дав+ай [[поговор+им начистот+у]].', 'Stop hinting, let’s talk frankly.', 'Schluss mit Andeutungen, lass uns Klartext reden.')),
    I('vertitsya-na-yazyke', 'верт+еться на язык+е', 'B2', 'informal', 'to be on the tip of one’s tongue', 'auf der Zunge liegen',
      ex('+Имя +этого актёра [[в+ертится у мен+я на язык+е]], но не в+ыговорю.', 'That actor’s name is on the tip of my tongue, but I can’t recall it.', 'Der Name dieses Schauspielers liegt mir auf der Zunge, aber er fällt mir nicht ein.')),
    I('slovo-za-slovo', 'сл+ово за сл+ово', 'B2', 'neutral', 'one word led to another', 'ein Wort gab das andere',
      ex('Снач+ала спор был спок+ойным, а пот+ом [[сл+ово за сл+ово]] началс+я сканд+ал.', 'At first the argument was calm, then one word led to another and a row broke out.', 'Erst war das Gespräch ruhig, doch ein Wort gab das andere.')),
    I('govorit-na-raznyh-yazykah', 'говор+ить на р+азных язык+ах', 'B2', 'neutral', 'to talk past each other / be on different wavelengths', 'aneinander vorbeireden',
      ex('Маркет+ологи и инжен+еры иногд+а [[говор+ят на р+азных язык+ах]].', 'Marketers and engineers sometimes speak different languages.', 'Marketer und Ingenieure reden manchmal aneinander vorbei.')),
    I('pereyti-k-delu', 'перейт+и к д+елу', 'B1', 'neutral', 'to get down to business / get to the point', 'zur Sache kommen',
      ex('Вр+емени м+ало, дав+айте ср+азу [[перейдём к д+елу]].', 'Time is short, let’s get straight to the point.', 'Wir haben wenig Zeit, kommen wir direkt zur Sache.')),
    I('s-poluslova', 'поним+ать с полусл+ова', 'B2', 'neutral', 'to understand at half a word / read each other’s minds', 'sich blind verstehen',
      ex('Мы давн+о раб+отаем вм+есте и [[поним+аем друг др+уга с полусл+ова]].', 'We have worked together for long and understand each other without finishing sentences.', 'Wir arbeiten lange zusammen und verstehen uns blind.')),
    I('ne-lezet-za-slovom', 'не лезть за сл+овом в карм+ан', 'C1', 'neutral', 'to be quick-witted / never at a loss for words', 'nicht auf den Mund gefallen sein',
      ex('Она [[за сл+овом в карм+ан не л+езет]] и ср+азу отв+етила на кр+итику.', 'She is never at a loss for words and answered the criticism right away.', 'Sie ist nicht auf den Mund gefallen und konterte sofort.')),
    I('derzhat-yazyk-za-zubami', 'держ+ать яз+ык за зуб+ами', 'B2', 'informal', 'to keep one’s mouth shut / keep a secret', 'reinen Wein einschenken / den Mund halten',
      ex('Пож+алуйста, [[держ+и яз+ык за зуб+ами]] до объявл+ения.', 'Please keep your mouth shut until the announcement.', 'Bitte halt den Mund bis zur Ankündigung.')),
    I('sarafannoe-radio', 'сараф+анное р+адио', 'B2', 'informal', 'word of mouth', 'Mundpropaganda',
      ex('Почт+и все н+овые кли+енты пришл+и к нам ч+ерез [[сараф+анное р+адио]].', 'Almost all new clients came to us through word of mouth.', 'Fast alle neuen Kunden kamen durch Mundpropaganda zu uns.')),

    // idioms-work (9)
    I('sdvinut-s-mertvoy', 'сдв+инуть с мёртвой т+очки', 'C1', 'neutral', 'to break the deadlock / get things moving', 'etwas vom toten Punkt wegbewegen',
      ex('После перегов+оров удал+ось [[сдв+инуть про+ект с мёртвой т+очки]].', 'After talks, they managed to get the project moving again.', 'Nach den Verhandlungen gelang es, das Projekt wieder in Gang zu bringen.')),
    I('ruka-ob-ruku', 'идт+и рук+а +об руку', 'B2', 'neutral', 'to go hand in hand', 'Hand in Hand gehen',
      ex('Усп+ех и уп+орство всегд+а [[ид+ут рук+а +об руку]].', 'Success and persistence always go hand in hand.', 'Erfolg und Ausdauer gehen immer Hand in Hand.')),
    I('shag-za-shagom', 'шаг за ш+агом', 'B1', 'neutral', 'step by step', 'Schritt für Schritt',
      ex('Мы внедр+или н+овую сист+ему [[шаг за ш+агом]].', 'We rolled out the new system step by step.', 'Wir haben das neue System Schritt für Schritt eingeführt.')),
    I('na-polnuyu-katushku', 'раб+отать на п+олную кат+ушку', 'B2', 'informal', 'to work flat out / at full throttle', 'auf Hochtouren laufen / alles geben',
      ex('Перед сд+ачей отчёта отд+ел выкл+адывается [[на п+олную кат+ушку]].', 'Before submitting the report the team works at full throttle.', 'Vor der Abgabe arbeitet die Abteilung auf Hochtouren.')),
    I('ne-pokladaya-ruk', 'не поклад+ая рук', 'C1', 'neutral', 'tirelessly / without stopping', 'unermüdlich',
      ex('Инжен+еры труд+ились [[не поклад+ая рук]] всю нед+елю.', 'The engineers worked tirelessly all week.', 'Die Ingenieure arbeiteten die ganze Woche unermüdlich.')),
    I('peregibat-palku', 'перегиб+ать п+алку', 'B2', 'informal', 'to go too far / overdo it', 'den Bogen überspannen',
      ex('Контр+оль важен, но не ст+оит [[перегиб+ать п+алку]].', 'Oversight matters, but you shouldn’t go too far.', 'Kontrolle ist wichtig, aber man sollte den Bogen nicht überspannen.')),
    I('delat-na-sovest', 'д+елать на с+овесть', 'B2', 'neutral', 'to do thoroughly / conscientiously', 'gewissenhaft machen',
      ex('Если берешься за рем+онт, [[д+елай]] всё [[на с+овесть]].', 'If you take on a repair, do it conscientiously.', 'Wenn du die Reparatur übernimmst, mach alles gründlich.')),
    I('master-na-vse-ruki', 'м+астер на все р+уки', 'B2', 'neutral', 'jack of all trades / handyman', 'ein Alleskönner / geschickter Handwerker',
      ex('Мой д+ядя — [[м+астер на все р+уки]]: и м+ебель соберёт, и пр+овод починит.', 'My uncle is a jack of all trades: he builds furniture and fixes wiring too.', 'Mein Onkel ist ein Alleskönner: Er baut Möbel und repariert Kabel.')),
    I('sidet-slozha-ruki', 'сид+еть слож+а р+уки', 'B2', 'neutral', 'to sit idly by / twiddle one’s thumbs', 'die Hände in den Schoß legen',
      ex('Нельзя просто [[сид+еть слож+а р+уки]], когд+а ср+оки горят.', 'You can’t just sit idly by when deadlines are pressing.', 'Man kann nicht einfach die Hände in den Schoß legen, wenn die Frist drängt.')),

    // idioms-situations (9)
    I('net-huda-bez-dobra', 'нет х+уда без добр+а', 'B2', 'neutral', 'every cloud has a silver lining', 'nichts ist so schlecht, dass es nicht für etwas gut wäre',
      ex('Рейс отмен+или, но мы нашл+и у+ютное каф+е — [[нет х+уда без добр+а]].', 'The flight was cancelled, but we found a cosy café — every cloud has a silver lining.', 'Der Flug fiel aus, doch wir fanden ein nettes Café — alles hat sein Gutes.')),
    I('na-voloske', 'вис+еть на волоск+е', 'C1', 'neutral', 'to hang by a thread', 'an einem seidenen Faden hängen',
      ex('Сделка [[вис+ела на волоск+е]], но в посл+едний мом+ент её подписали.', 'The deal hung by a thread, yet at the last moment it was signed.', 'Der Deal hing an einem seidenen Faden, wurde aber doch unterzeichnet.')),
    I('kak-grom-sredi', 'как гром сред+и +ясного н+еба', 'C1', 'neutral', 'like a bolt from the blue', 'wie ein Blitz aus heiterem Himmel',
      ex('Новость об увольнении прозвуч+ала [[как гром сред+и +ясного н+еба]].', 'The dismissal news came like a bolt from the blue.', 'Die Entlassungsnachricht traf ein wie ein Blitz aus heiterem Himmel.')),
    I('chuvstvovat-kak-ryba', 'ч+увствовать себ+я как р+ыба в вод+е', 'B2', 'neutral', 'to feel like a fish in water / in one’s element', 'sich wie ein Fisch im Wasser fühlen',
      ex('На сцене она [[ч+увствует себ+я как р+ыба в вод+е]].', 'On stage she feels completely in her element.', 'Auf der Bühne fühlt sie sich wie ein Fisch im Wasser.')),
    I('brodit-v-potemkah', 'брод+ить в потёмках', 'C1', 'neutral', 'to grope in the dark / be clueless', 'im Dunkeln tappen',
      ex('Без чётких д+анных аналитики [[бр+одят в потёмках]].', 'Without solid data, analysts are groping in the dark.', 'Ohne verlässliche Daten tappen die Analysten im Dunkeln.')),
    I('vyshel-suhim', 'в+ыйти сух+им из вод+ы', 'C1', 'neutral', 'to get off scot-free', 'ungeschoren davonkommen',
      ex('После ош+ибки ему оп+ять удал+ось [[в+ыйти сух+им из вод+ы]].', 'After the mistake he somehow got off scot-free again.', 'Nach dem Fehler kam er wieder ungeschoren davon.')),
    I('kaplya-v-more', 'к+апля в м+оре', 'B2', 'neutral', 'a drop in the ocean', 'ein Tropfen auf den heißen Stein',
      ex('Собр+анная с+умма — +это пок+а лишь [[к+апля в м+оре]].', 'The amount raised so far is only a drop in the ocean.', 'Der gesammelte Betrag ist vorerst nur ein Tropfen auf den heißen Stein.')),
    I('ni-sveta-ni-zari', 'ни свет ни зар+я', 'B2', 'neutral', 'at the crack of dawn', 'in aller Herrgottsfrühe',
      ex('Чт+обы успеть на п+оезд, мы в+ышли [[ни свет ни зар+я]].', 'To catch the train we left at the crack of dawn.', 'Um den Zug zu erwischen, brachen wir in aller Herrgottsfrühe auf.')),
    I('kak-na-igolkah', 'сид+еть как на иг+олках', 'B2', 'informal', 'to be on pins and needles / on tenterhooks', 'wie auf heißen Kohlen sitzen',
      ex('Все [[сид+ели как на иг+олках]] в ожид+ании результ+атов.', 'Everyone was on pins and needles waiting for the results.', 'Alle saßen wie auf heißen Kohlen und warteten auf die Ergebnisse.')),

    // idioms-decisions (9)
    I('na-svoy-strah', 'на свой страх и риск', 'B2', 'neutral', 'at one’s own risk', 'auf eigene Gefahr',
      ex('Вы м+ожете обнов+ить прогр+амму [[на свой страх и риск]].', 'You may update the software at your own risk.', 'Sie können das Programm auf eigene Gefahr aktualisieren.')),
    I('sem-raz-otmer', 'семь раз отм+ерь, од+ин раз отр+ежь', 'B2', 'neutral', 'measure twice, cut once', 'erst wägen, dann wagen',
      ex('Не спеш+и с подписями: [[семь раз отм+ерь, од+ин раз отр+ежь]].', 'Don’t rush signing: measure twice, cut once.', 'Überstürze die Unterschrift nicht: erst wägen, dann wagen.')),
    I('zakryt-glaza', 'закр+ыть глаз+а на чт+о-то', 'B2', 'neutral', 'to turn a blind eye to something', 'ein Auge zudrücken',
      ex('На этот раз руковод+итель [[закр+ыл глаз+а на]] опозд+ание.', 'This time the manager turned a blind eye to being late.', 'Diesmal drückte der Chef bei der Verspätung ein Auge zu.')),
    I('vzyat-byka-za-roga', 'взять бык+а за рог+а', 'B2', 'neutral', 'to take the bull by the horns', 'den Stier bei den Hörnern packen',
      ex('Пора [[взять бык+а за рог+а]] и закрыть ст+арый долг.', 'It’s time to take the bull by the horns and settle the old debt.', 'Es wird Zeit, den Stier bei den Hörnern zu packen.')),
    I('idti-na-ustupki', 'идт+и на уст+упки', 'B2', 'neutral', 'to make concessions / compromise', 'Zugeständnisse machen',
      ex('Для компромисса об+еим сторон+ам н+ужно [[идт+и на уст+упки]].', 'For a compromise, both sides have to make concessions.', 'Für einen Kompromiss müssen beide Seiten Zugeständnisse machen.')),
    I('podstrakhovatsya', 'подстрахов+аться на вс+який сл+учай', 'B2', 'neutral', 'to play it safe just in case', 'sich vorsichtshalber absichern',
      ex('Л+учше сд+елать к+опию файла — [[подстрахов+аться на вс+який сл+учай]].', 'Better make a copy of the file — play it safe just in case.', 'Besser eine Kopie anlegen, um sich vorsichtshalber abzusichern.')),
    I('vzvesit-vse-za', 'взв+есить все за и пр+отив', 'B2', 'neutral', 'to weigh all the pros and cons', 'alle Für und Wider abwägen',
      ex('Перед переездом мы [[взв+есили все за и пр+отив]].', 'Before moving we weighed all the pros and cons.', 'Vor dem Umzug haben wir alle Für und Wider abgewogen.')),
    I('splyasat-ot-pechki', 'пляс+ать от п+ечки', 'C1', 'informal', 'to start from scratch / from the basics', 'ganz von vorn anfangen',
      ex('Сх+ема не раб+отает, придётся [[пляс+ать от п+ечки]].', 'The scheme doesn’t work; we’ll have to start from the basics.', 'Das Modell funktioniert nicht, wir müssen ganz von vorn anfangen.')),
    I('rubit-s-plecha', 'руб+ить с плеч+а', 'C1', 'neutral', 'to make rash, blunt decisions', 'voreilig und schroff handeln',
      ex('В сл+ожных спорах вредно [[руб+ить с плеч+а]].', 'In tricky disputes it’s harmful to act rashly.', 'Bei schwierigen Konflikten ist es schädlich, voreilig durchzugreifen.'))
  ] });

  GT.register({ tab: 'expressions', topic: 'everyday', type: 'chunk', items: [
    // everyday-respond (8)
    E('i-ne-govori', 'И не говор+и!', 'B1', 'informal', 'Tell me about it! / You’re telling me!', 'Wem sagst du das!',
      ex('— Оп+ять пробки на дор+оге. — [[И не говор+и!]]', '“Traffic jams again.” — “Tell me about it!”', '„Schon wieder Stau.“ — „Wem sagst du das!“')),
    E('trudno-poverit', 'Тр+удно пов+ерить!', 'B1', 'neutral', 'Hard to believe!', 'Kaum zu glauben!',
      ex('[[Тр+удно пов+ерить]], что про+ект заверш+или за два дн+я.', 'Hard to believe the project finished in two days.', 'Kaum zu glauben, dass das Projekt in zwei Tagen fertig wurde.')),
    E('ya-tak-i-dumal', 'Я так и д+умал!', 'B1', 'neutral', 'I thought so! / Just as I thought!', 'Das habe ich mir gedacht!',
      ex('Сервер отключ+ился? [[Я так и д+умал!]]', 'The server went down? I thought so!', 'Der Server ist ausgefallen? Das habe ich mir gedacht!')),
    E('podozhdi-sekundu', 'Подожд+и сек+унду.', 'A2', 'neutral', 'Wait a second.', 'Warte mal eine Sekunde.',
      ex('[[Подожд+и сек+унду]], я сейч+ас откр+ою д+анные.', 'Wait a second, I’ll open the data right now.', 'Warte mal eine Sekunde, ich öffne gleich die Daten.')),
    E('ne-mozhet-byt', 'Не м+ожет быть!', 'B1', 'neutral', 'No way! / It can’t be!', 'Das gibt’s doch nicht!',
      ex('Он сд+ал экз+амен с п+ервого р+аза? [[Не м+ожет быть!]]', 'He passed on the first try? No way!', 'Er hat beim ersten Mal bestanden? Das gibt’s doch nicht!')),
    E('kak-raz-vovremya', 'Как раз в+овремя!', 'B1', 'neutral', 'Just in time!', 'Gerade rechtzeitig!',
      ex('Ты пришёл [[как раз в+овремя]], обед т+олько п+одали.', 'You arrived just in time, lunch was just served.', 'Du kommst gerade rechtzeitig, das Essen wird gerade serviert.')),
    E('kstati-govorya', 'Кст+ати говор+я, …', 'B1', 'neutral', 'By the way, …', 'Übrigens, …',
      ex('[[Кст+ати говор+я]], мы перенесл+и созв+он на четв+ерг.', 'By the way, we moved the call to Thursday.', 'Übrigens, wir haben das Telefonat auf Donnerstag verlegt.')),
    E('slushayu-tebya', 'Я теб+я сл+ушаю.', 'A2', 'neutral', 'I’m listening.', 'Ich höre dir zu.',
      ex('Заход+и, садись — [[я теб+я сл+ушаю]].', 'Come in, have a seat — I’m listening.', 'Komm rein, setz dich — ich höre dir zu.')),

    // everyday-opinion (8)
    E('na-moy-vzglyad', 'По моем+у мн+ению, …', 'B1', 'neutral', 'In my opinion, …', 'Meiner Meinung nach …',
      ex('[[По моем+у мн+ению]], в+ажно снач+ала пров+ерить т+есты.', 'In my opinion, it’s important to check tests first.', 'Meiner Meinung nach sollte man zuerst die Tests prüfen.')),
    E('polnostyu-soglasen', 'П+олностью согл+асен (согл+асна).', 'B1', 'neutral', 'I completely agree.', 'Da stimme ich völlig zu.',
      ex('С +этим выводом я [[п+олностью согл+асен]].', 'With that conclusion I completely agree.', 'Dieser Schlussfolgerung stimme ich völlig zu.')),
    E('somnevayus', 'Что-то я сомнев+аюсь.', 'B1', 'informal', 'I somehow doubt it.', 'Da habe ich meine Zweifel.',
      ex('Усп+еем до вечера? Честно, [[что-то я сомнев+аюсь]].', 'Will we make it by evening? Honestly, I somehow doubt it.', 'Schaffen wir das bis heute Abend? Ehrlich gesagt habe ich da Zweifel.')),
    E('vpolne-logichno', 'Вполн+е лог+ично.', 'B2', 'neutral', 'Quite logical / Makes sense.', 'Durchaus logisch.',
      ex('Сравн+ить цены перед закупкой — [[вполн+е лог+ично]].', 'Comparing prices before buying makes total sense.', 'Vor dem Einkauf Preise zu vergleichen ist durchaus logisch.')),
    E('delo-vkusa', '+Это д+ело вк+уса.', 'B1', 'neutral', 'It’s a matter of taste.', 'Das ist Geschmackssache.',
      ex('Кому-то нр+авится тёмная тема, кому-то светлая — [[+это д+ело вк+уса]].', 'Some like dark mode, others light — it’s a matter of taste.', 'Manche mögen Dark Mode, andere hell — das ist Geschmackssache.')),
    E('zavisit-ot-situatsii', 'Зав+исит от ситу+ации.', 'B1', 'neutral', 'It depends on the situation.', 'Das hängt von der Situation ab.',
      ex('Н+ужно ли встреч+аться л+ично? [[Зав+исит от ситу+ации]].', 'Do we need to meet in person? It depends on the situation.', 'Müssen wir uns persönlich treffen? Das hängt von der Situation ab.')),
    E('chestno-govorya', 'Ч+естно говор+я, …', 'B1', 'neutral', 'Honestly speaking, …', 'Ehrlich gesagt, …',
      ex('[[Ч+естно говор+я]], я не ожид+ал так+ой подд+ержки.', 'Honestly speaking, I didn’t expect such support.', 'Ehrlich gesagt hatte ich so viel Unterstützung nicht erwartet.')),
    E('ni-v-koem-sluchae', 'Ни в к+оем сл+учае!', 'B2', 'neutral', 'Under no circumstances! / No way!', 'Auf keinen Fall!',
      ex('Не удал+яй архив [[ни в к+оем сл+учае]]!', 'Do not delete the archive under any circumstances!', 'Lösche das Archiv auf keinen Fall!')),

    // everyday-arrange (8)
    E('ya-uzhe-v-puti', 'Я уж+е в пут+и.', 'B1', 'neutral', 'I’m already on my way.', 'Ich bin schon unterwegs.',
      ex('Не волн+уйся, [[я уж+е в пут+и]], буду через десять мин+ут.', 'Don’t worry, I’m already on my way, I’ll be there in ten minutes.', 'Keine Sorge, ich bin schon unterwegs und in zehn Minuten da.')),
    E('derzhi-v-kurse', 'Держ+и мен+я в к+урсе.', 'B1', 'neutral', 'Keep me posted.', 'Halte mich auf dem Laufenden.',
      ex('Как т+олько придет отв+ет, [[держ+и мен+я в к+урсе]].', 'As soon as a reply arrives, keep me posted.', 'Sobald eine Antwort kommt, halte mich auf dem Laufenden.')),
    E('kogda-tebe-udobno', 'Когд+а теб+е уд+обно?', 'A2', 'neutral', 'When suits you?', 'Wann passt es dir?',
      ex('Дав+ай созвонимся — [[когд+а теб+е уд+обно]]?', 'Let’s have a call — when suits you?', 'Lass uns telefonieren — wann passt es dir?')),
    E('mne-eto-podhodit', 'Мне +это подх+одит.', 'B1', 'neutral', 'That works for me.', 'Das passt mir gut.',
      ex('Встр+еча в п+олдень? Да, [[мне +это подх+одит]].', 'Meeting at noon? Yes, that works for me.', 'Treffen um zwölf? Ja, das passt mir gut.')),
    E('ya-zaderzhivayus', 'Я немн+ого зад+ерживаюсь.', 'B1', 'neutral', 'I’m running a little late.', 'Ich verspäte mich etwas.',
      ex('Пробки на просп+екте, [[я немн+ого зад+ерживаюсь]].', 'There’s traffic on the avenue, I’m running a little late.', 'Stau auf der Allee, ich verspäte mich etwas.')),
    E('day-znat', 'Дай знать.', 'B1', 'informal', 'Let me know.', 'Gib mir Bescheid.',
      ex('Если пл+аны изм+енятся, пр+осто [[дай знать]].', 'If plans change, just let me know.', 'Wenn sich die Pläne ändern, gib mir einfach Bescheid.')),
    E('do-zavtra', 'До з+автра!', 'A1', 'neutral', 'See you tomorrow!', 'Bis morgen!',
      ex('Спас+ибо за п+омощь сег+одня, [[до з+автра]]!', 'Thanks for the help today, see you tomorrow!', 'Danke für die Hilfe heute, bis morgen!')),
    E('ya-na-sekundu-vyshla', 'Я отойд+у на мин+утку.', 'B1', 'neutral', 'I’ll step out for a minute.', 'Ich bin kurz weg.',
      ex('[[Я отойд+у на мин+утку]], скор+о вернусь.', 'I’ll step out for a minute and be right back.', 'Ich bin kurz weg und komme gleich zurück.')),

    // everyday-comfort (8)
    E('ne-berite-v-golovu', 'Не бер+и в г+олову!', 'B2', 'informal', 'Don’t worry about it! / Never mind!', 'Mach dir keinen Kopf!',
      ex('Быв+ают м+елкие сб+ои, [[не бер+и в г+олову]].', 'Minor glitches happen, don’t sweat it.', 'Kleine Pannen passieren, mach dir keinen Kopf.')),
    E('vsyo-budet-horosho', 'Всё б+удет хорош+о.', 'A2', 'neutral', 'Everything will be alright.', 'Alles wird gut.',
      ex('Не пережив+ай перед выступлением — [[всё б+удет хорош+о]].', 'Don’t stress before the talk — everything will be alright.', 'Mach dir vor dem Vortrag keine Sorgen — alles wird gut.')),
    E('ne-toropis', 'Не тороп+ись.', 'B1', 'informal', 'Take your time / Don’t rush.', 'Lass dir Zeit.',
      ex('У нас ещё есть вр+емя, [[не тороп+ись]].', 'We still have time, don’t rush.', 'Wir haben noch Zeit, lass dir ruhig Zeit.')),
    E('net-povoda-dlya', 'Нет п+овода для волн+ения.', 'B2', 'neutral', 'There’s no cause for worry.', 'Es gibt keinen Grund zur Sorge.',
      ex('Ан+ализы в н+орме, [[нет п+овода для волн+ения]].', 'The test results are normal, there is no cause for worry.', 'Die Werte sind normal, es gibt keinen Grund zur Sorge.')),
    E('derzhis', 'Держ+ись!', 'B1', 'informal', 'Hang in there!', 'Halt durch!',
      ex('Остался посл+едний экз+амен — [[держ+ись]]!', 'Only one exam left — hang in there!', 'Nur noch eine Prüfung — halt durch!')),
    E('byvaet-huzhe', 'Быв+ает и х+уже.', 'B1', 'informal', 'Could be worse.', 'Es hätte schlimmer kommen können.',
      ex('Потеряли полчас+а на дор+оге? [[Быв+ает и х+уже]].', 'Lost half an hour on the road? Could be worse.', 'Eine halbe Stunde verloren? Es hätte schlimmer kommen können.')),
    E('povezet-v-sleduyushchiy', 'Повезёт в сл+едующий раз!', 'B1', 'neutral', 'Better luck next time!', 'Beim nächsten Mal klappt es!',
      ex('Не расстр+аивайся из-за ничьей — [[повезёт в сл+едующий раз]]!', 'Don’t be upset about the draw — better luck next time!', 'Ärgere dich nicht über das Unentschieden — beim nächsten Mal klappt es!')),
    E('pustyak', 'Пуст+як, не ст+оит!', 'B1', 'informal', 'It’s nothing, don’t mention it!', 'Kleinigkeit, keine Ursache!',
      ex('— Спас+ибо за зонт! — [[Пуст+як, не ст+оит]]!', '“Thanks for the umbrella!” — “It’s nothing, don’t mention it!”', '„Danke für den Regenschirm!“ — „Kleinigkeit, gern geschehen!“')),

    // everyday-social (8)
    E('horoshih-vyhodnyh', 'Хор+оших выходн+ых!', 'A2', 'neutral', 'Have a nice weekend!', 'Schönes Wochenende!',
      ex('До понед+ельника, [[хор+оших выходн+ых]]!', 'See you Monday, have a nice weekend!', 'Bis Montag, schönes Wochenende!')),
    E('priyatnogo-appetita', 'При+ятного аппет+ита!', 'A2', 'neutral', 'Enjoy your meal!', 'Guten Appetit!',
      ex('Обед на стол+е — [[при+ятного аппет+ита]]!', 'Lunch is on the table — enjoy your meal!', 'Das Essen steht auf dem Tisch — guten Appetit!')),
    E('beregi-sebya', 'Берег+и себ+я!', 'B1', 'neutral', 'Take care of yourself!', 'Pass auf dich auf!',
      ex('Зим+ой од+евайся тепл+ее, [[берег+и себ+я]]!', 'Dress warmly in winter, take care of yourself!', 'Zieh dich im Winter warm an, pass auf dich auf!')),
    E('vyzdoravlivay', 'Выздор+авливай скор+ее!', 'B1', 'neutral', 'Get well soon!', 'Gute Besserung!',
      ex('Слышу, ты прост+ужен — [[выздор+авливай скор+ее]]!', 'I hear you caught a cold — get well soon!', 'Ich höre, du bist erkältet — gute Besserung!')),
    E('dobro-pozhalovat', 'Добр+о пож+аловать!', 'A2', 'neutral', 'Welcome!', 'Herzlich willkommen!',
      ex('[[Добр+о пож+аловать]] в н+ашу ком+анду!', 'Welcome to our team!', 'Herzlich willkommen in unserem Team!')),
    E('spokoynoy-nochi', 'Спок+ойной н+очи!', 'A1', 'neutral', 'Good night!', 'Gute Nacht!',
      ex('Увидимся +утром, [[спок+ойной н+очи]]!', 'See you in the morning, good night!', 'Wir sehen uns morgen früh, gute Nacht!')),
    E('schastlivogo-puti', 'Счастл+ивого пут+и!', 'B1', 'neutral', 'Have a safe trip!', 'Gute Reise!',
      ex('Сумки собр+аны? [[Счастл+ивого пут+и]]!', 'Bags packed? Have a safe trip!', 'Koffer gepackt? Gute Reise!')),
    E('spasibo-bolshoe', 'Больш+ое спас+ибо!', 'A1', 'neutral', 'Thank you very much!', 'Vielen Dank!',
      ex('[[Больш+ое спас+ибо]] за быстрый отв+ет!', 'Thank you very much for the quick reply!', 'Vielen Dank für die schnelle Antwort!'))
  ] });
})();

/* === Content expansion Wave 2 (2026-11-27): +50 RU B2/C1 spoken & workplace chunks === */
(function () {
  'use strict';
  function ch(id, topic, topics, t, level, register, en, de, exT, exEn, exDe, nEn, nDe) {
    return {
      id: 'ru-ch-w2-' + id,
      topic: topic,
      topics: topics,
      type: 'chunk',
      level: level,
      register: register,
      t: t,
      en: en,
      de: de,
      examples: [{ t: exT, en: exEn, de: exDe }],
      note: (nEn || nDe) ? { en: nEn || '', de: nDe || '' } : undefined
    };
  }

  GT.register({ tab: 'chunks', items: [
    // opinion (4)
    ch('nelzya-ne-priznat', 'opinion', ['society', 'workcomm'], 'Нельз+я не призн+ать, что …', 'C1', 'formal',
      'One cannot help admitting that … / There’s no denying that …', 'Man muss anerkennen, dass … / Es lässt sich nicht leugnen, dass …',
      '[[Нельз+я не призн+ать, что]] к+ачество отчётов зам+етно выросло.',
      'There’s no denying that the quality of the reports has improved noticeably.',
      'Es lässt sich nicht leugnen, dass die Qualität der Berichte spürbar gestiegen ist.',
      'Literally “it is impossible not to admit”. Double negative makes a strong formal concession.',
      'Wörtlich „man kann nicht nicht anerkennen“. Starke gehobene Einräumung.'),
    ch('s-odnoy-storony-s-drugoy', 'opinion', ['society', 'workcomm'], 'С одн+ой сторон+ы, …, но с друг+ой — …', 'B2', 'neutral',
      'On the one hand …, yet on the other hand …', 'Einerseits …, aber andererseits …',
      '[[С одн+ой сторон+ы]], так быстр+ее, [[но с друг+ой]] — р+исков больше.',
      'On the one hand it is faster, yet on the other hand there are more risks.',
      'Einerseits geht es so schneller, aber andererseits sind die Risiken größer.'),
    ch('imeet-smysl-uchityvat', 'opinion', ['workcomm', 'society'], 'Ст+оит уч+итывать, что …', 'B2', 'neutral',
      'It is worth bearing in mind that …', 'Es lohnt sich zu bedenken, dass …',
      '[[Ст+оит уч+итывать, что]] в +августе мн+огие колл+еги в +отпуске.',
      'It is worth bearing in mind that many colleagues are on leave in August.',
      'Es lohnt sich zu bedenken, dass im August viele Kollegen im Urlaub sind.'),
    ch('na-moy-subjektivnyy-vzglyad', 'opinion', ['everyday', 'workcomm'], '+Если смотр+еть ш+ире, …', 'C1', 'neutral',
      'Looking at the bigger picture, …', 'Wenn man das Gesamtbild betrachtet, …',
      '[[+Если смотр+еть ш+ире]], +эта инвестиция ок+упится за два г+ода.',
      'Looking at the bigger picture, this investment will pay off within two years.',
      'Wenn man das Gesamtbild betrachtet, zahlt sich diese Investition in zwei Jahren aus.'),

    // agree (4)
    ch('v-etom-est-ratsionalnoe-zerno', 'agree', ['workcomm', 'society'], 'В +этом есть раз+умное зерн+о.', 'C1', 'neutral',
      'There is a grain of truth / solid sense in that.', 'Daran ist ein vernünftiger Kern.',
      'Идея не идеальная, но [[в +этом есть раз+умное зерн+о]].',
      'The idea isn’t perfect, yet there is solid sense in it.',
      'Die Idee ist nicht perfekt, aber darin steckt ein vernünftiger Kern.'),
    ch('razdelyayu-vashu-pozitsiyu', 'agree', ['workcomm', 'authorities'], 'Я п+олностью разделяю в+ашу поз+ицию.', 'C1', 'formal',
      'I completely share your view / stance.', 'Ich teile Ihren Standpunkt voll und ganz.',
      'По вопросу безоп+асности [[я п+олностью разделяю в+ашу поз+ицию]].',
      'On the safety issue I completely share your stance.',
      'Beim Thema Sicherheit teile ich Ihren Standpunkt voll und ganz.'),
    ch('pri-vsem-uvazhenii', 'agree', ['workcomm', 'authorities'], 'При всём уваж+ении, я с +этим не согл+асен (согл+асна).', 'C1', 'formal',
      'With all due respect, I disagree with that.', 'Bei allem Respekt, da bin ich anderer Meinung.',
      '[[При всём уваж+ении, я с +этим не согл+асен]]: ц+ифры говор+ят об обр+атном.',
      'With all due respect, I disagree: the numbers say the opposite.',
      'Bei allem Respekt, da bin ich anderer Meinung: Die Zahlen zeigen das Gegenteil.'),
    ch('soglashus-s-ogovorkoy', 'agree', ['workcomm'], 'В ц+елом да, но с одн+ой огов+оркой: …', 'C1', 'neutral',
      'Broadly yes, with one caveat: …', 'Im Großen und Ganzen ja, mit einem Vorbehalt: …',
      '[[В ц+елом да, но с одн+ой огов+оркой:]] ср+оки должны быть ре+альными.',
      'Broadly yes, with one caveat: the deadlines must be realistic.',
      'Im Großen und Ganzen ja, mit einem Vorbehalt: Die Fristen müssen realistisch sein.'),

    // clarify (4)
    ch('pravilno-li-ya-ponyal', 'clarify', ['workcomm', 'everyday'], 'Пр+авильно ли я п+онял(а), что …?', 'B2', 'neutral',
      'Did I understand correctly that …?', 'Habe ich das richtig verstanden, dass …?',
      '[[Пр+авильно ли я п+онял, что]] дост+авка входит в ц+ену?',
      'Did I understand correctly that delivery is included in the price?',
      'Habe ich richtig verstanden, dass die Lieferung im Preis inbegriffen ist?'),
    ch('mozhno-po-podrobnee', 'clarify', ['workcomm', 'everyday'], 'Не могл+и бы вы поясн+ить +это на прим+ере?', 'B2', 'formal',
      'Could you illustrate that with an example?', 'Könnten Sie das an einem Beispiel erläutern?',
      'Правило звуч+ит абстр+актно — [[не могл+и бы вы поясн+ить +это на прим+ере?]]',
      'The rule sounds abstract — could you illustrate it with an example?',
      'Die Regel klingt abstrakt — könnten Sie das an einem Beispiel erläutern?'),
    ch('chtoby-isklyuchit-raznochteniya', 'clarify', ['workcomm', 'authorities'], 'Чт+обы не возн+икло недоразум+ений: …', 'C1', 'formal',
      'So that no misunderstandings arise: …', 'Um Missverständnisse auszuschließen: …',
      '[[Чт+обы не возн+икло недоразум+ений:]] опл+ата прошл+а ещё вчер+а.',
      'So no misunderstandings arise: the payment already went through yesterday.',
      'Um Missverständnisse auszuschließen: Die Zahlung ging bereits gestern durch.'),
    ch('utochnite-pozh-granitsy', 'clarify', ['workcomm', 'dev'], 'Чт+о +именно вх+одит в р+амки +этой зад+ачи?', 'B2', 'neutral',
      'What exactly is within the scope of this task?', 'Was genau fällt in den Umfang dieser Aufgabe?',
      'П+еред оценкой ср+оков: [[чт+о +именно вх+одит в р+амки +этой зад+ачи?]]',
      'Before we estimate time: what exactly falls within this task’s scope?',
      'Vor der Zeitschätzung: Was genau gehört zum Umfang dieser Aufgabe?'),

    // complain (4)
    ch('eto-ne-sootvetstvuet', 'complain', ['authorities', 'workcomm'], '+Это не соотв+етствует н+ашим договорённостям.', 'B2', 'formal',
      'This does not match what we agreed.', 'Das entspricht nicht unserer Vereinbarung.',
      'Срок изменили без предупрежд+ения — [[+это не соотв+етствует н+ашим договорённостям]].',
      'The deadline was changed without notice — that does not match what we agreed.',
      'Die Frist wurde ohne Vorwarnung geändert — das entspricht nicht unserer Vereinbarung.'),
    ch('prosim-ustranit-nedostatki', 'complain', ['authorities', 'services'], 'Пр+осим устран+ить +этот недостаток в кратч+айшие ср+оки.', 'C1', 'formal',
      'We ask you to remedy this defect as soon as possible.', 'Wir bitten um schnellstmögliche Beseitigung dieses Mangels.',
      'Шум из-за сквозняк+а меш+ает раб+оте; [[пр+осим устран+ить +этот недостаток в кратч+айшие ср+оки]].',
      'Draught noise disrupts work; please remedy this defect promptly.',
      'Zugluft stört bei der Arbeit; bitte beheben Sie den Mangel schnellstmöglich.'),
    ch('nesmotrya-na-napominanie', 'complain', ['authorities', 'workcomm'], 'Несмотр+я на повторное обращ+ение, отв+ета пок+а нет.', 'B2', 'formal',
      'Despite a follow-up request, there is still no reply.', 'Trotz erneuter Nachfrage liegt noch keine Antwort vor.',
      'Заявку отпр+авили две нед+ели наз+ад; [[несмотр+я на повторное обращ+ение, отв+ета пок+а нет]].',
      'We sent the application two weeks ago; despite a follow-up, there is still no reply.',
      'Den Antrag schickten wir vor zwei Wochen; trotz Nachfrage gibt es noch keine Antwort.'),
    ch('rasschityvaem-na-kompensatsiyu', 'complain', ['services', 'authorities'], 'Мы рассч+итываем на перерасчёт или возврат с+уммы.', 'B2', 'formal',
      'We expect a recalculation or refund of the amount.', 'Wir rechnen mit einer Neuberechnung oder Erstattung.',
      'Услуга не был+а ок+азана в п+олном объёме, поэ́тому [[мы рассч+итываем на перерасчёт или возврат с+уммы]].',
      'The service was not provided in full, so we expect a recalculation or refund.',
      'Die Leistung war unvollständig, daher erwarten wir eine Erstattung.'),

    // problem (4)
    ch('ne-poluchaetsya-otkryt', 'problem', ['everyday', 'workcomm'], 'Не получ+ается [инфинит+ив], хот+я всё сд+елано по инстр+укции.', 'B2', 'neutral',
      'I can’t manage to [do X], even though everything followed the guide.', 'Ich bekomme [X] nicht hin, obwohl alles nach Anleitung lief.',
      '[[Не получ+ается]] войти в сист+ему, [[хот+я]] пар+оль в+ерный.',
      'I can’t log in, even though the password is correct.',
      'Ich komme nicht ins System, obwohl das Passwort stimmt.'),
    ch('my-ishchem-vremennoe-reshenie', 'problem', ['workcomm', 'dev'], 'Мы сейч+ас +ищем вр+еменный обходн+ой путь.', 'B2', 'neutral',
      'We are looking for a temporary workaround right now.', 'Wir suchen gerade nach einer Zwischenlösung.',
      'Пока чиним основн+ой шлюз, [[мы сейч+ас +ищем вр+еменный обходн+ой путь]].',
      'While fixing the main gateway, we are looking for a temporary workaround.',
      'Während wir das Haupt-Gateway reparieren, suchen wir eine Übergangslösung.'),
    ch('blokiruet-dalneyshuyu-rabotu', 'problem', ['workcomm', 'dev'], '+Эта ош+ибка пок+а блок+ирует дальнейшую раб+оту.', 'B2', 'neutral',
      'This error is currently blocking further work.', 'Dieser Fehler blockiert derzeit die weitere Arbeit.',
      'Без д+оступа к базе [[+эта ош+ибка пок+а блок+ирует дальнейшую раб+оту]].',
      'Without database access, this error blocks further work.',
      'Ohne Datenbankzugang blockiert dieser Fehler die weitere Arbeit.'),
    ch('nuzhno-ponyat-pervoprichinu', 'problem', ['workcomm', 'dev'], 'Снач+ала в+ажно выясн+ить первоприч+ину сб+оя.', 'C1', 'formal',
      'First it is vital to find the root cause of the outage.', 'Zunächst gilt es, die Grundursache des Ausfalls zu klären.',
      'Прост+ой перезапуск не пом+ожет: [[снач+ала в+ажно выясн+ить первоприч+ину сб+оя]].',
      'A simple restart won’t help: first we must find the root cause.',
      'Ein Neustart reicht nicht: Zuerst muss die Grundursache geklärt werden.'),

    // appointments (4)
    ch('vnezapno-poyavilis-dela', 'appointments', ['everyday', 'workcomm'], 'У мен+я в посл+едний мом+ент сдвинулось распис+ание.', 'B2', 'neutral',
      'My schedule shifted at the last minute.', 'Mein Zeitplan hat sich kurzfristig verschoben.',
      'Извините, [[у мен+я в посл+едний мом+ент сдвинулось распис+ание]] — перенесём на полчас+а?',
      'Sorry, my schedule shifted last minute — could we move it by half an hour?',
      'Entschuldigung, mein Zeitplan hat sich kurzfristig verschoben — um 30 Minuten verschieben?'),
    ch('prishlyu-priglashenie-v-kalendar', 'appointments', ['workcomm'], 'Я ср+азу отпр+авлю приглаш+ение в календ+арь.', 'B1', 'neutral',
      'I’ll send the calendar invite straight away.', 'Ich schicke sofort eine Kalendereinladung.',
      'Вторник в д+есять подх+одит; [[я ср+азу отпр+авлю приглаш+ение в календ+арь]].',
      'Tuesday at ten works; I’ll send the calendar invite straight away.',
      'Dienstag um zehn passt; ich schicke sofort die Kalendereinladung.'),
    ch('udobno-li-v-pervoy-polovine', 'appointments', ['workcomm', 'everyday'], 'Вам уд+обнее в п+ервой или во втор+ой полов+ине дн+я?', 'B1', 'formal',
      'Do you prefer the morning or the afternoon?', 'Passt es Ihnen eher vor- oder nachmittags?',
      'Подбир+аем слот на пятницу — [[вам уд+обнее в п+ервой или во втор+ой полов+ине дн+я?]]',
      'Picking a slot for Friday — morning or afternoon better for you?',
      'Für Freitag: Passt es Ihnen eher vor- oder nachmittags?'),
    ch('perezapisatsya-na-bolee-ranniy', 'appointments', ['services', 'everyday'], 'Можно перенести приём на более р+аннее вр+емя?', 'B2', 'neutral',
      'Could we bring the appointment forward earlier?', 'Können wir den Termin vorverlegen?',
      'Освобод+илось окн+о — [[можно перенести приём на более р+аннее вр+емя?]]',
      'A slot opened up — can we move the appointment earlier?',
      'Es ist ein Termin frei geworden — können wir vorverlegen?'),

    // phone (3)
    ch('podozhdite-na-linii-pozhaluysta', 'phone', ['workcomm', 'services'], 'Не кладите трубку, я сейчас переключ+у вас.', 'B1', 'formal',
      'Please hold the line, I’ll put you through now.', 'Bleiben Sie dran, ich verbinde Sie gleich.',
      'Минуту, пров+ерю своб+одна ли линия — [[не кладите трубку, я сейчас переключ+у вас]].',
      'One moment while I check the line — please hold, I’ll connect you.',
      'Einen Moment, ich verbinde Sie gleich — bitte bleiben Sie dran.'),
    ch('ne-smog-dozvonitsya', 'phone', ['everyday', 'workcomm'], 'Я звон+ил(а) вам +утром, но никто не брал трубку.', 'B1', 'neutral',
      'I called you this morning, but nobody picked up.', 'Ich habe heute früh angerufen, aber niemand ging ran.',
      '[[Я звон+ил вам +утром, но никто не брал трубку]], поэ́тому пиш+у здесь.',
      'I rang this morning, but nobody picked up, so I’m messaging here.',
      'Ich habe heute früh angerufen, niemand nahm ab, daher schreibe ich hier.'),
    ch('mozhem-obsuzhdat-golosom', 'phone', ['workcomm'], 'Думаю, быстрее созвон+иться на пять мин+ут.', 'B1', 'neutral',
      'I think it’s faster to jump on a five-minute call.', 'Ich denke, ein kurzes Telefonat geht schneller.',
      'Переп+иска затянулась — [[думаю, быстрее созвон+иться на пять мин+ут]].',
      'The thread is dragging out — easier to jump on a 5-minute call.',
      'Der Chat zieht sich — ein kurzes Telefonat von fünf Minuten geht schneller.'),

    // email (4)
    ch('vo-vlozhenii-napravlyayu', 'email', ['workcomm', 'authorities'], 'Во влож+ении направл+яю акту+альную в+ерсию докум+ента.', 'B2', 'formal',
      'Please find attached the latest version of the document.', 'Im Anhang sende ich Ihnen die aktuelle Fassung des Dokuments.',
      'Добрый день! [[Во влож+ении направл+яю акту+альную в+ерсию докум+ента]].',
      'Hello! Please find the updated document attached.',
      'Guten Tag! Im Anhang übersende ich die aktuelle Fassung des Dokuments.'),
    ch('budem-priznatelny-za-otvet-do', 'email', ['workcomm', 'authorities'], 'Б+удем признательны за отв+ет до [дата].', 'C1', 'formal',
      'We would appreciate a reply by [date].', 'Für eine Rückmeldung bis [Datum] wären wir dankbar.',
      'Для согласов+ания см+еты [[б+удем признательны за отв+ет до]] четверг+а.',
      'To finalise the estimate, we would appreciate a reply by Thursday.',
      'Zur Abstimmung des Angebots wären wir für eine Antwort bis Donnerstag dankbar.'),
    ch('dubliruyu-pismo', 'email', ['workcomm'], 'Дубл+ирую письм+о, чт+обы оно не затерялось.', 'B2', 'neutral',
      'Resending / bumping this email so it doesn’t get buried.', 'Ich hake kurz per Mail nach, damit die Nachricht nicht untergeht.',
      'Коллеги, [[дубл+ирую письм+о, чт+обы оно не затерялось]] в общем потоке.',
      'Team, bumping this email so it doesn’t get lost in the thread.',
      'Liebe Kollegen, ich sende die Mail sicherheitshalber noch einmal nach.'),
    ch('napominayu-o-sroke', 'email', ['workcomm', 'authorities'], 'Позвольте корректно нап+омнить о ближ+айшем ср+оке.', 'C1', 'formal',
      'May I politely remind you of the upcoming deadline.', 'Darf ich höflich an die bevorstehende Frist erinnern.',
      '[[Позвольте корректно нап+омнить о ближ+айшем ср+оке]] сдачи актов.',
      'May I gently remind you of the upcoming deadline for the reports.',
      'Darf ich höflich an die bevorstehende Abgabefrist erinnern.'),

    // smalltalk (4)
    ch('kak-proshli-vyhodnye', 'smalltalk', ['everyday'], 'Как провёл (провел+а) выходн+ые?', 'A2', 'informal',
      'How did you spend your weekend?', 'Wie hast du das Wochenende verbracht?',
      'Доброе +утро! [[Как провёл выходн+ые?]] Удал+ось отдохн+уть?',
      'Good morning! How was your weekend? Did you manage to rest?',
      'Guten Morgen! Wie war dein Wochenende? Konntest du dich erholen?'),
    ch('davno-ne-obshchalis', 'smalltalk', ['everyday', 'workcomm'], 'Давно не пересек+ались — как дел+а на новом месте?', 'B2', 'informal',
      'Long time no catch up — how are things in the new role?', 'Lange nicht gesehen — wie läuft es an der neuen Stelle?',
      'Привет! [[Давно не пересек+ались — как дел+а на новом месте?]]',
      'Hey! We haven’t crossed paths in ages — how’s the new place?',
      'Hallo! Lange nicht begegnet — wie läuft es am neuen Arbeitsplatz?'),
    ch('pogoda-segodnya-udivlyaet', 'smalltalk', ['everyday'], 'Погода сег+одня совс+ем непредсказ+уемая!', 'B1', 'neutral',
      'The weather is completely unpredictable today!', 'Das Wetter ist heute völlig unberechenbar!',
      'С утра солнце, а потом ливень — [[погода сег+одня совс+ем непредсказ+уемая!]]',
      'Sun in the morning, then downpour — weather is totally unpredictable today!',
      'Morgens Sonne, dann Platzregen — das Wetter ist heute unberechenbar!'),
    ch('horoshego-otdyha-vecherom', 'smalltalk', ['everyday', 'workcomm'], 'Желаю хор+ошего в+ечера п+осле раб+оты!', 'B1', 'neutral',
      'Wishing you a lovely evening after work!', 'Ich wünsche dir einen schönen Feierabend!',
      'Я выключаю ноутб+ук — [[желаю хор+ошего в+ечера п+осле раб+оты!]]',
      'Shutting down my laptop now — have a great evening!',
      'Ich klappe den Laptop zu — schönen Feierabend!'),

    // it_standup (3)
    ch('vzyal-v-rabotu-prioritet', 'it_standup', ['dev', 'workcomm'], 'Сегодня переключ+усь на приорит+етный т+икет [X].', 'B2', 'neutral',
      'Today I’m switching over to high-priority ticket [X].', 'Heute wechsle ich zum vorrangigen Ticket [X].',
      'Поддержку закр+ыл, [[сегодня переключ+усь на приорит+етный т+икет]] по оплате.',
      'Closed the support thread; today I’m moving onto the high-priority billing ticket.',
      'Support ist erledigt, heute übernehme ich das dringende Zahlungsticket.'),
    ch('potrebuetsya-pomoshch-s-deploy', 'it_standup', ['dev', 'infra'], 'П+осле обеда мне пон+адобится ревью перед выкаткой.', 'B2', 'neutral',
      'This afternoon I’ll need a review before rollout.', 'Am Nachmittag brauche ich ein Review vor dem Rollout.',
      'Код доп+исан, [[п+осле обеда мне пон+адобится ревью перед выкаткой]].',
      'Code is written; this afternoon I’ll need a review before rollout.',
      'Der Code steht; nachmittags brauche ich noch ein Review vor dem Release.'),
    ch('zavishu-ot-otveta-smegnik', 'it_standup', ['workcomm', 'dev'], 'Дальнейший шаг зависит от отв+ета сос+едней ком+анды.', 'B2', 'neutral',
      'The next step depends on the neighbouring team’s reply.', 'Der nächste Schritt hängt von der Antwort des Nachbarteams ab.',
      'По интегр+ации всё гот+ово, [[дальнейший шаг зависит от отв+ета сос+едней ком+анды]].',
      'Integration is ready on my side; next step waits on the partner team.',
      'Seitens Integration ist alles bereit; der nächste Schritt wartet auf das Partnerteam.'),

    // it_bug (4)
    ch('sboy-poyavilsya-posle-reliza', 'it_bug', ['dev', 'infra'], 'Сбой возник сразу п+осле вчер+ашнего рел+иза.', 'B2', 'neutral',
      'The failure started right after yesterday’s release.', 'Die Störung trat direkt nach dem gestrigen Release auf.',
      'По гр+афикам в+идно: [[сбой возник сразу п+осле вчер+ашнего рел+иза]].',
      'The graphs show the failure started right after yesterday’s release.',
      'An den Graphen sieht man: Die Störung begann sofort nach dem Release.'),
    ch('problema-tolko-v-prode', 'it_bug', ['infra', 'dev'], 'На т+естовом стенде тишин+а, а на боев+ом падает.', 'B2', 'informal',
      'Staging is clean, while production is failing.', 'Auf dem Testsystem läuft es, aber produktiv stürzt es ab.',
      'Странно: [[на т+естовом стенде тишин+а, а на боев+ом падает]].',
      'Odd: staging is completely quiet while production crashes.',
      'Seltsam: Auf Staging passiert nichts, doch in Produktion stürzt es ab.'),
    ch('prilozhil-skrinshot-i-logi', 'it_bug', ['dev', 'workcomm'], 'Скринш+от и фрагмент л+ога прикреп+ил к зад+аче.', 'B2', 'neutral',
      'I attached the screenshot and log excerpt to the ticket.', 'Screenshot und Log-Auszug habe ich ans Ticket gehängt.',
      'Чтобы не тратить вр+емя, [[скринш+от и фрагмент л+ога прикреп+ил к зад+аче]].',
      'To save time, I attached a screenshot and log snippet to the ticket.',
      'Um Zeit zu sparen, habe ich Screenshot und Log-Auszug angehängt.'),
    ch('posle-ochistki-kesha-ok', 'it_bug', ['dev', 'infra'], 'П+осле сброса кэша ош+ибка исч+езла.', 'B1', 'neutral',
      'After flushing the cache, the error disappeared.', 'Nach dem Leeren des Caches war der Fehler weg.',
      'Висел ст+арый токен — [[п+осле сброса кэша ош+ибка исч+езла]].',
      'An old token was cached — after clearing cache the error went away.',
      'Ein altes Token hing fest — nach dem Cache-Reset verschwand der Fehler.'),

    // it_help (4)
    ch('davay-rassharim-ekran', 'it_help', ['dev', 'workcomm'], 'Давай на пару мин+ут расш+арим экр+ан?', 'B1', 'informal',
      'Shall we share screens for a couple of minutes?', 'Sollen wir kurz den Bildschirm teilen?',
      'В чате долго объяснять — [[давай на пару мин+ут расш+арим экр+ан?]]',
      'Too hard to explain in chat — shall we screen-share for two minutes?',
      'Im Chat dauert es zu lang — teilen wir kurz den Bildschirm?'),
    ch('ya-zdes-chto-to-upustil', 'it_help', ['dev', 'workcomm'], 'Подскаж+и, я здесь ничег+о в настройках не упуст+ил(а)?', 'B2', 'neutral',
      'Tell me, did I miss anything in the config here?', 'Sag mal, habe ich in der Konfiguration etwas übersehen?',
      'Переменные проверил, но не стартует — [[подскаж+и, я здесь ничег+о в настройках не упуст+ил?]]',
      'Checked the env vars, still won’t start — did I miss something in settings?',
      'Umgebungsvariablen geprüft, startet nicht — habe ich hier etwas übersehen?'),
    ch('ot-kakoy-vetki-otvetvitsya', 'it_help', ['dev'], 'От как+ой в+етки сейчас пр+авильнее ответв+иться?', 'B2', 'neutral',
      'Which branch is the right one to branch off right now?', 'Von welchem Branch sollte ich jetzt abzweigen?',
      'Перед нач+алом пр+авок: [[от как+ой в+етки сейчас пр+авильнее ответв+иться?]]',
      'Before starting edits: which branch should I branch off?',
      'Vor den Änderungen: Von welchem Branch zweige ich am besten ab?'),
    ch('spasibo-s-tvoey-podskazkoy', 'it_help', ['everyday', 'workcomm'], 'Спас+ибо, тв+оя подск+азка ср+азу навел+а на мысль!', 'B2', 'informal',
      'Thanks, your hint pointed me straight in the right direction!', 'Danke, dein Hinweis hat mich sofort auf die richtige Spur gebracht!',
      '[[Спас+ибо, тв+оя подск+азка ср+азу навел+а на мысль]] — нашёл нету запятую.',
      'Thanks, your hint put me straight onto it — found the missing comma.',
      'Danke, dein Tipp führte mich direkt hin — habe den Fehler gefunden!'),

    // it_meeting (4)
    ch('mozhno-korotko-vklinit-sya', 'it_meeting', ['workcomm', 'presentations'], 'М+ожно кор+откое дополн+ение по +этому пункту?', 'C1', 'formal',
      'May I make a brief addition on this point?', 'Darf ich zu diesem Punkt kurz etwas ergänzen?',
      '[[М+ожно кор+откое дополн+ение по +этому пункту?]] Похожий сл+учай был в марте.',
      'May I add a quick point here? We had a similar case in March.',
      'Darf ich kurz etwas ergänzen? Im März hatten wir einen ähnlichen Fall.'),
    ch('vernemsya-k-glavnoy-teme', 'it_meeting', ['workcomm'], 'Давайте вернёмся к основн+ой т+еме пов+естки.', 'B2', 'formal',
      'Let’s return to the main item on the agenda.', 'Kommen wir zum Hauptpunkt der Tagesordnung zurück.',
      'Мы ушли в дет+али — [[давайте вернёмся к основн+ой т+еме пов+естки]].',
      'We drifted into details — let’s come back to the main agenda item.',
      'Wir sind abgedriftet — kehren wir zum Hauptpunkt der Agenda zurück.'),
    ch('zafiksiruem-zadachu-i-srok', 'it_meeting', ['workcomm', 'product'], 'Давайте ср+азу зафикс+ируем отв+етственного и срок.', 'B2', 'neutral',
      'Let’s lock in an owner and deadline right now.', 'Halten wir gleich den Verantwortlichen und die Frist fest.',
      'Чтобы вопрос не повис: [[давайте ср+азу зафикс+ируем отв+етственного и срок]].',
      'So the task doesn’t hang: let’s lock in owner and deadline now.',
      'Damit nichts liegen bleibt, legen wir gleich Verantwortlichen und Termin fest.'),
    ch('podvodim-itog-vstrechi', 'it_meeting', ['workcomm', 'presentations'], '+Если подвест+и ит+ог, у нас три конкр+етных шага.', 'C1', 'neutral',
      'To sum up, we have three concrete next steps.', 'Zusammengefasst haben wir drei konkrete nächste Schritte.',
      'Время вых+одит: [[+если подвест+и ит+ог, у нас три конкр+етных шага]].',
      'We’re out of time: summing up, we have three concrete action items.',
      'Die Zeit wird knapp: Kurz gesagt haben wir drei konkrete nächste Schritte.')
  ] });
})();
