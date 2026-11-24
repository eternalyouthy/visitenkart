/* ROOT: sprechen. Learning content in Russian. Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, meaningType, why. */
GT.registerRoot({
  id: 'sprechen', verb: 'sprechen', ru: 'говорить, разговаривать',
  words: [
    {
      id: 'r-sprechen-sprechen', base: true, pos: 'verb',
      de: 'sprechen', forms: { praes: 'spricht', praet: 'sprach', perf: 'hat gesprochen' }, gov: 'mit + Dat. · über + Akk.',
      ru: 'говорить, разговаривать; владеть (языком)',
      examples: [
        { sense: 'разговаривать с кем-то о чём-то', de: 'Ich habe gestern mit dem Teamleiter über das Projekt [[gesprochen]].', ru: 'Я вчера поговорил с тимлидом о проекте.' },
        { sense: 'говорить на языке', de: 'Bei uns im Team [[sprechen]] wir meistens Deutsch und Englisch.', ru: 'У нас в команде мы в основном говорим по-немецки и по-английски.' }
      ],
      morph: 'sprech-en',
      note: 'Сильный глагол с e→i: du sprichst, er spricht; sprach, hat gesprochen. «Etwas spricht für / gegen …» — что-то говорит в пользу / против …',
      why: {
        confidence: 'high',
        root: 'sprechen',
        text: 'Состав: корневой сильный глагол sprech- + -en.\nПроисхождение: западногерманский глагол (др.-в.-нем. sprehhan «говорить», родственно английскому speak, потерявшему -r-). Даёт ключевые слова B1: die Sprache, das Gespräch, die Sprechstunde, besprechen, versprechen.\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. sprechen',
        evidence: 'Др.-в.-нем. sprehhan < зап.-герм. *sprekan- (родств. англ. speak).'
      }
    },
    {
      id: 'r-sprechen-besprechen', prefix: 'be', sep: 'untrennbar', stress: 'bespréchen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'besprechen', forms: { praes: 'bespricht', praet: 'besprach', perf: 'hat besprochen' }, gov: '+ Akk. (mit + Dat.)',
      ru: 'обсуждать (тему, план, инцидент)',
      parallel: 'ОБсуждать',
      drill: { ru: 'обсуждать (проблему, план)', de: 'das Problem im Meeting ___sprechen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'be- делает sprechen переходным: вместо «über etw. sprechen» появляется прямой Akkusativ — «etw. besprechen».' },
      examples: [
        { de: 'Wir [[besprechen]] die neuen Firewall-Regeln morgen im Daily.', ru: 'Мы обсудим новые правила файрвола завтра на дейли.' },
        { de: 'Ich muss das erst kurz mit meiner Kollegin [[besprechen]].', ru: 'Мне нужно сначала коротко обсудить это с коллегой.' }
      ],
      morph: 'be-sprech-en',
      note: 'Без предлога über! Правильно: «etwas besprechen» (Akk.), а с простым sprechen — «über etwas sprechen». Существительное: «die Besprechung» (совещание).'
    },
    {
      id: 'r-sprechen-versprechen', prefix: 'ver', sep: 'untrennbar', stress: 'verspréchen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'versprechen', forms: { praes: 'verspricht', praet: 'versprach', perf: 'hat versprochen' }, gov: 'jdm. (Dat.) etw. (Akk.) · sich versprechen',
      ru: 'обещать; (sich versprechen) оговориться',
      drill: { ru: 'оговориться (ошибиться в речи); обещать', de: 'Ich habe mich ___sprochen' },
      prefixDrill: { ex: 1, meaning: 0, explain: 'С возвратным sich приставка ver- регулярно обозначает ошибку в действии — «оговориться» (как sich verschreiben, sich verhören).' },
      examples: [
        { sense: 'обещать (Dat. + Akk.)', de: 'Ich [[verspreche]] dir, dass ich mir das Ticket heute noch anschaue.', ru: 'Обещаю тебе, что ещё сегодня посмотрю этот тикет.' },
        { sense: 'оговориться (sich versprechen)', de: 'Entschuldigung, ich habe mich [[versprochen]]: Ich meinte 14 Uhr, nicht 16 Uhr.', ru: 'Извините, я оговорился: я имел в виду 14 часов, а не 16.' }
      ],
      morph: 'ver-sprech-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Переходное versprechen значит «обещать» (jdm. etw. versprechen), а возвратное sich versprechen — «оговориться, сделать речевую ошибку».',
      meaningExamples: [{ de: 'etwas fest versprechen', ru: 'твёрдо пообещать' }, { de: 'Sorry, ich habe mich versprochen!', ru: 'Извини, я оговорился!' }],
      note: 'Существительное «das Versprechen» — обещание («ein Versprechen halten / brechen»).',
      why: {
        confidence: 'high',
        root: 'sprechen',
        text: 'Состав: неотделяемая приставка ver- + sprechen («говорить»).\nПроисхождение: в двух значениях работают разные функции ver-: в «обещать» — доведение слова до обязательства (закрепилось с XV–XVI вв.), а в возвратном sich versprechen — «сделать действие ошибочно» (как sich verschreiben «описаться»).\nПрозрачность: оба значения продуктивно запоминаются в паре.',
        source: 'DWDS (Pfeifer), s.v. versprechen',
        evidence: 'ver- + sprechen: «обязаться словом → обещать» (XV–XVI вв.); возвратная модель ver- «ошибиться в действии».'
      }
    },
    {
      id: 'r-sprechen-ansprechen', prefix: 'an', sep: 'trennbar', stress: 'ánsprechen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'ansprechen', forms: { praes: 'spricht an', praet: 'sprach an', perf: 'hat angesprochen' }, gov: '+ Akk.',
      ru: 'заговорить с кем-то, обратиться; поднять тему, затронуть вопрос',
      parallel: 'ЗАговорить с / затронуть',
      drill: { ru: 'поднять тему (на встрече); обратиться к кому-то', de: 'ein Problem offen ___sprechen' },
      prefixDrill: { ex: 0, meaning: 3, explain: 'an- обозначает направленность речи к собеседнику или к конкретной теме — «поднять вопрос напрямую».' },
      examples: [
        { sense: 'поднять тему, затронуть вопрос', de: 'Gut, dass du das Thema Backup-Tests [[angesprochen]] hast.', ru: 'Хорошо, что ты поднял тему тестирования бэкапов.' },
        { sense: 'заговорить с кем-то, обратиться', de: 'Wenn du Fragen hast, [[sprich]] mich einfach jederzeit [[an]].', ru: 'Если будут вопросы — просто обращайся ко мне в любой момент.' }
      ],
      morph: 'an-sprech-en',
      meaningType: 'polysemous',
      meaningExplanation: 'ansprechen значит «обратиться к человеку / заговорить с ним» и деловое «поднять, затронуть важную тему на обсуждении».',
      meaningExamples: [{ de: 'jdn. auf der Straße ansprechen', ru: 'заговорить с кем-то на улице' }, { de: 'einen Punkt im Meeting ansprechen', ru: 'затронуть пункт на встрече' }],
      note: 'Очень офисное слово: «der Ansprechpartner / die Ansprechpartnerin» — контактное лицо («Wer ist mein Ansprechpartner dafür?»).'
    },
    {
      id: 'r-sprechen-aussprechen', prefix: 'aus', sep: 'trennbar', stress: 'áussprechen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'aussprechen', forms: { praes: 'spricht aus', praet: 'sprach aus', perf: 'hat ausgesprochen' }, gov: '+ Akk. · sich aussprechen',
      ru: 'произносить (слово); высказать (мнение, рекомендацию); (sich aussprechen) высказаться начистоту',
      parallel: 'ПРОизносить / ВЫсказывать',
      drill: { ru: 'произносить (слово)', de: 'Wie ___ man das Wort ___?' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'aus- означает движение наружу — «выговорить, произнести вслух».' },
      examples: [
        { sense: 'произносить (слово)', de: 'Wie [[spricht]] man Ihren Nachnamen genau [[aus]]?', ru: 'Как точно произносится ваша фамилия?' },
        { sense: 'высказать (предупреждение, рекомендацию) / поговорить начистоту', de: 'Wir haben uns nach dem Streit endlich [[ausgesprochen]].', ru: 'После ссоры мы наконец поговорили начистоту.' }
      ],
      morph: 'aus-sprech-en',
      meaningType: 'polysemous',
      meaningExplanation: 'aussprechen значит «произносить» (слово, имя), «высказывать официально» (eine Empfehlung / Warnung aussprechen), а sich aussprechen — «высказаться начистоту» или «выступить за/против» (für/gegen).',
      meaningExamples: [{ de: 'ein Wort richtig aussprechen', ru: 'правильно произносить слово' }, { de: 'eine Empfehlung aussprechen', ru: 'дать рекомендацию' }],
      note: 'Существительное: «die Aussprache» — произношение («eine deutliche Aussprache»).'
    },
    {
      id: 'r-sprechen-entsprechen', prefix: 'ent', sep: 'untrennbar', stress: 'entspréchen', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'entsprechen', forms: { praes: 'entspricht', praet: 'entsprach', perf: 'hat entsprochen' }, gov: '+ Dat.',
      ru: 'соответствовать (стандарту, требованиям, ожиданиям)',
      examples: [
        { de: 'Die neue Passwort-Richtlinie [[entspricht]] den Vorgaben des BSI.', ru: 'Новая политика паролей соответствует требованиям BSI.' },
        { de: 'Das Ergebnis [[entspricht]] leider nicht unseren Erwartungen.', ru: 'Результат, к сожалению, не соответствует нашим ожиданиям.' }
      ],
      morph: 'ent-sprech-en',
      note: 'ВСЕГДА требует Dativ (den Vorgaben, unseren Erwartungen)! Причастие «entsprechend» — «соответствующий / соответственно» («entsprechende Maßnahmen treffen»).',
      why: {
        confidence: 'high',
        root: 'sprechen',
        text: 'Состав: неотделяемая приставка ent- + sprechen («говорить»).\nПроисхождение: др.-в.-нем. intsprehhan первоначально значило «отвечать (на зов)» — из идеи «откликаться в ответ» в XVIII в. закрепилось значение «соответствовать, отвечать требованиям».\nПрозрачность: непрозрачное — сегодня из «говорить» значение «соответствовать» не выводится.',
        source: 'DWDS (Pfeifer), s.v. entsprechen',
        evidence: 'Др.-в.-нем. intsprehhan («отвечать, возражать») → с XVIII в. «соответствовать, отвечать требованиям».'
      }
    },
    {
      id: 'r-sprechen-widersprechen', prefix: 'wider', sep: 'untrennbar', stress: 'widerspréchen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'widersprechen', forms: { praes: 'widerspricht', praet: 'widersprach', perf: 'hat widersprochen' }, gov: '+ Dat.',
      ru: 'возражать (кому-то); противоречить (фактам, правилу)',
      parallel: 'ПРОТИВОречить',
      examples: [
        { sense: 'возражать кому-то (Dat.)', de: 'Da muss ich dir leider [[widersprechen]]: Das Risiko ist deutlich höher.', ru: 'Тут я, к сожалению, должен тебе возразить: риск значительно выше.' },
        { sense: 'противоречить (фактам)', de: 'Die beiden Log-Einträge [[widersprechen]] sich komplett.', ru: 'Эти две записи в логах полностью противоречат друг другу.' }
      ],
      morph: 'wider-sprech-en',
      meaningType: 'polysemous',
      meaningExplanation: 'widersprechen (+ Dat.) значит «возражать человеку» (в споре/на встрече) и «противоречить» (фактам, закону, показаниям).',
      meaningExamples: [{ de: 'jdm. höflich widersprechen', ru: 'вежливо возразить кому-то' }, { de: 'Das widerspricht der Richtlinie.', ru: 'Это противоречит политике.' }],
      note: 'Неотделяемый (пишется wider-, НЕ wieder-!): «er widerspricht», «hat widersprochen». Всегда с Dativ! Существительное: «der Widerspruch» (возражение, обжалование решения ведомства!).'
    },
    {
      id: 'r-sprechen-absprechen', prefix: 'ab', sep: 'trennbar', stress: 'ábsprechen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'absprechen', forms: { praes: 'spricht ab', praet: 'sprach ab', perf: 'hat abgesprochen' }, gov: 'etw. (Akk.) mit + Dat. · sich absprechen',
      ru: 'договариваться, согласовывать заранее; (jdm. etw. absprechen) отказывать кому-то в чём-то',
      drill: { ru: 'согласовать заранее (с коллегой)', de: 'das Vorgehen mit dem Team ___sprechen' },
      examples: [
        { sense: 'договариваться, согласовывать', de: 'Wir haben gestern [[abgesprochen]], wer am Wochenende Bereitschaft hat.', ru: 'Мы вчера договорились, кто дежурит на выходных.' },
        { sense: 'согласовываться между собой (sich absprechen)', de: 'Bitte [[sprecht]] euch kurz [[ab]], bevor ihr das Ticket eskaliert.', ru: 'Пожалуйста, коротко согласуйтесь между собой, прежде чем эскалировать тикет.' }
      ],
      morph: 'ab-sprech-en',
      note: 'От него образовано деловое «die Absprache» («nach Absprache mit …») и любимая фраза писем «wie abgesprochen» («как договаривались»).'
    },
    {
      id: 'r-sprechen-durchsprechen', prefix: 'durch', sep: 'trennbar', stress: 'dúrchsprechen', pos: 'verb',
      transparency: 'transparent',
      de: 'durchsprechen', forms: { praes: 'spricht durch', praet: 'sprach durch', perf: 'hat durchgesprochen' }, gov: '+ Akk.',
      ru: 'проговорить от начала до конца, подробно разобрать (по пунктам)',
      parallel: 'ПРОговорить полностью',
      drill: { ru: 'проговорить по пунктам от начала до конца', de: 'die Liste Punkt für Punkt ___sprechen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'Отделяемая durch- означает «от начала до конца, полностью» — проговорить весь план целиком.' },
      examples: [
        { de: 'Lass uns die Checkliste vor dem Audit noch einmal [[durchsprechen]].', ru: 'Давай перед аудитом ещё раз проговорим чек-лист от начала до конца.' }
      ],
      morph: 'durch-sprech-en',
      note: 'Отделяемый: «Wir sprechen das morgen durch», «hat durchgesprochen».'
    },
    {
      id: 'r-sprechen-mitsprechen', prefix: 'mit', sep: 'trennbar', stress: 'mítsprechen', pos: 'verb',
      transparency: 'transparent',
      de: 'mitsprechen', forms: { praes: 'spricht mit', praet: 'sprach mit', perf: 'hat mitgesprochen' }, gov: 'bei + Dat.',
      ru: 'участвовать в обсуждении, иметь право голоса (в решении)',
      parallel: 'участвовать в обсуждении',
      prefixDrill: { ex: 0, meaning: 0, explain: 'mit- выражает совместное участие наравне с другими — иметь право голоса в решении.' },
      examples: [
        { de: 'Bei technischen Entscheidungen sollte das Team immer [[mitsprechen]] können.', ru: 'При технических решениях команда всегда должна иметь право голоса.' }
      ],
      morph: 'mit-sprech-en',
      note: 'Близкий синоним: «mitreden» («Da kann ich nicht mitreden» — в этом я не разбираюсь / не могу судить).'
    },
    {
      id: 'r-sprechen-nachsprechen', prefix: 'nach', sep: 'trennbar', stress: 'náchsprechen', pos: 'verb',
      transparency: 'transparent',
      de: 'nachsprechen', forms: { praes: 'spricht nach', praet: 'sprach nach', perf: 'hat nachgesprochen' }, gov: '+ Akk.',
      ru: 'повторять вслух (за диктором, преподавателем)',
      parallel: 'ПОВТОРЯТЬ вслед',
      prefixDrill: { ex: 0, meaning: 0, explain: 'nach- здесь означает «по образцу, вслед за кем-то» — повторять слова за диктором.' },
      examples: [
        { de: 'Hör dir den Satz an und [[sprich]] ihn laut [[nach]].', ru: 'Послушай предложение и повтори его вслух.' }
      ],
      morph: 'nach-sprech-en',
      note: 'Классический глагол для тренировки произношения (Shadowing).'
    },
    {
      id: 'r-sprechen-sprache', pos: 'noun',
      de: 'Sprache', article: 'die', plural: 'die Sprachen',
      transparency: 'transparent',
      ru: 'язык; речь',
      examples: [
        { de: 'Welche [[Sprachen]] sprechen Sie neben Deutsch und Russisch?', ru: 'На каких языках вы говорите помимо немецкого и русского?' }
      ],
      morph: 'Sprach-e',
      note: '«Die Muttersprache» — родной язык, «die Fremdsprache» — иностранный язык, «die Programmiersprache» — язык программирования. «Etwas zur Sprache bringen» — поднять вопрос.'
    },
    {
      id: 'r-sprechen-gespraech', pos: 'noun',
      de: 'Gespräch', article: 'das', plural: 'die Gespräche',
      transparency: 'transparent',
      ru: 'разговор, беседа; собеседование',
      examples: [
        { de: 'Vielen Dank für das angenehme [[Gespräch]] heute!', ru: 'Большое спасибо за сегодняшнюю приятную беседу!' }
      ],
      morph: 'Ge-spräch',
      note: 'Всегда среднего рода (Ge- → das). «Das Vorstellungsgespräch / Bewerbungsgespräch» — собеседование; «das Mitarbeitergespräch» — ежегодная беседа с руководителем.'
    },
    {
      id: 'r-sprechen-ansprechpartner', pos: 'noun',
      de: 'Ansprechpartner', article: 'der', plural: 'die Ansprechpartner',
      transparency: 'transparent',
      ru: 'контактное лицо (к кому обращаться по вопросу)',
      examples: [
        { de: 'Für Fragen zur IT-Sicherheit bin ich Ihr direkter [[Ansprechpartner]].', ru: 'По вопросам IT-безопасности я — ваше прямое контактное лицо.' }
      ],
      morph: 'An-sprech-partner',
      note: 'Незаменимое офисное слово в Германии. Женский род: «die Ansprechpartnerin».'
    },
    {
      id: 'r-sprechen-widerspruch', pos: 'noun',
      de: 'Widerspruch', article: 'der', plural: 'die Widersprüche',
      transparency: 'transparent',
      ru: 'противоречие; возражение, официальное обжалование (в ведомстве)',
      examples: [
        { sense: 'официальное обжалование (в ведомстве)', de: 'Gegen den Bescheid können Sie innerhalb eines Monats [[Widerspruch]] einlegen.', ru: 'Решение ведомства вы можете обжаловать в течение месяца.' },
        { sense: 'противоречие', de: 'Zwischen den beiden Aussagen gibt es einen klaren [[Widerspruch]].', ru: 'Между этими двумя утверждениями есть явное противоречие.' }
      ],
      morph: 'Wider-spruch',
      meaningType: 'polysemous',
      meaningExplanation: 'der Widerspruch — это «логическое противоречие» и важнейший юридический термин в Германии «официальное обжалование решения ведомства / страховки» (Widerspruch einlegen).',
      meaningExamples: [{ de: 'Widerspruch gegen einen Bescheid einlegen', ru: 'подать возражение/апелляцию на решение ведомства' }, { de: 'im Widerspruch zu etw. stehen', ru: 'противоречить чему-то' }],
      note: '«Widerspruch einlegen» — подать официальное возражение (например, в Krankenkasse, Finanzamt или Ausländerbehörde).'
    },
    {
      id: "r-sprechen-vorsprechen", de: "vorsprechen", pos: 'verb', core: true,
      prefix: "vor", sep: 'trennbar', forms: { praes: "spricht vor", praet: "sprach vor", perf: "hat vorgesprochen" },
      ru: "проходить актёрское прослушивание", en: "to audition for a role",
      examples: [{ de: "Am Freitag [[spricht]] sie für eine Rolle im Theater [[vor]].", ru: "В пятницу она проходит прослушивание на роль в театре.", en: "On Friday she's auditioning for a part in a play." }]
    },
    {
      id: "r-sprechen-zusprechen", de: "zusprechen", pos: 'verb', core: false,
      prefix: "zu", sep: 'trennbar', forms: { praes: "spricht zu", praet: "sprach zu", perf: "hat zugesprochen" },
      ru: "присуждать кому-либо что-либо", en: "to award something to someone",
      examples: [{ de: "Das Gericht [[sprach]] den Mietern eine Entschädigung [[zu]].", ru: "Суд присудил жильцам компенсацию.", en: "The court awarded the tenants compensation." }]
    },
    {
      id: "r-sprechen-freisprechen", de: "freisprechen", pos: 'verb', core: false,
      prefix: "frei", sep: 'trennbar', forms: { praes: "spricht frei", praet: "sprach frei", perf: "hat freigesprochen" },
      ru: "оправдывать в суде", en: "to acquit",
      examples: [{ de: "Das Gericht hat die Angeklagte [[freigesprochen]].", ru: "Суд оправдал обвиняемую.", en: "The court acquitted the defendant." }]
    }
  ]
});
