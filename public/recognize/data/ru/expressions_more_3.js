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
