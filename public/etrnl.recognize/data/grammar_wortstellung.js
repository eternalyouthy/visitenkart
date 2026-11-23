GT.registerGrammar({
  id: 'wortstellung',
  title: { ru: 'Порядок слов · Wortstellung', en: 'Word order · Wortstellung' },
  summary: {
    ru: 'Поставьте спрягаемый глагол на нужное место и соберите глагольную рамку.',
    en: 'Place the finite verb and build the sentence bracket.'
  },
  explanation: {
    ru: '<p>В обычном повествовательном главном предложении спрягаемый глагол стоит <b>на втором месте</b> (V2). Перед ним помещается один смысловой блок (<i>Vorfeld</i>). Таким блоком может быть подлежащее, обстоятельство или целое придаточное. В <em>Nach der Besprechung schicke ich dir die Unterlagen</em> слова <em>nach der Besprechung</em> вместе занимают первое место. Глагол <em>schicke</em> стоит вторым, а подлежащее <em>ich</em> идёт за ним.</p>' +
      '<p><b>Рамка (Satzklammer).</b> В главном предложении спрягаемая часть открывает рамку, а приставка, инфинитив или Partizip II закрывает её. В следующих примерах подлежащее и дополнение стоят между этими частями. Сравните <em>Heute <b>rufe</b> ich den Kunden <b>zurück</b></em>, <em>Heute <b>muss</b> ich den Kunden <b>zurückrufen</b></em> и <em>Heute <b>habe</b> ich den Kunden <b>zurückgerufen</b></em>.</p>' +
      '<p><b>Прямые вопросы.</b> Вопрос без вопросительного слова обычно начинается со спрягаемого глагола, как в <em>Hast du die Datei geschickt?</em> В W-вопросе вопросительное слово или группа занимает первое место, как в <em>Wann hast du die Datei geschickt?</em></p>' +
      '<p><b>Придаточное.</b> Союз <em>weil</em>, <em>dass</em> или <em>wenn</em> открывает рамку. В простых конструкциях спрягаемая часть стоит в конце, например <em>…, weil der Zug ausfällt</em> и <em>…, weil ich die Datei geschickt habe</em>. В <em>Wenn der Server wieder läuft, <b>rufen</b> wir den Kunden zurück</em> придаточное целиком занимает первое место главного предложения.</p>' +
      '<p>Подробнее о союзах и косвенных вопросах — в уроке <a href="#/grammar/nebensaetze">Nebensätze</a>. Формы прошедшего времени разбираются в <a href="#/grammar/perfekt">Perfekt vs Präteritum</a>.</p>',
    en: '<p>In an ordinary main-clause statement, the finite verb takes <b>second position</b> (V2). One constituent comes before it in the <i>Vorfeld</i>. That constituent can be the subject, an adverbial phrase or an entire subordinate clause. In <em>Nach der Besprechung schicke ich dir die Unterlagen</em>, the words <em>nach der Besprechung</em> occupy position one together. The verb <em>schicke</em> comes second, followed by the subject <em>ich</em>.</p>' +
      '<p><b>The sentence bracket (Satzklammer).</b> In a main clause, the finite part opens the bracket. A separable prefix, infinitive or past participle closes it. In these examples, the subject and object sit between the two parts. Compare <em>Heute <b>rufe</b> ich den Kunden <b>zurück</b></em>, <em>Heute <b>muss</b> ich den Kunden <b>zurückrufen</b></em> and <em>Heute <b>habe</b> ich den Kunden <b>zurückgerufen</b></em>.</p>' +
      '<p><b>Direct questions.</b> A yes/no question normally starts with the finite verb, as in <em>Hast du die Datei geschickt?</em> In a W-question, the question word or phrase takes position one, as in <em>Wann hast du die Datei geschickt?</em></p>' +
      '<p><b>Subordinate clauses.</b> A conjunction such as <em>weil</em>, <em>dass</em> or <em>wenn</em> opens the bracket. The finite part comes last in simple constructions such as <em>…, weil der Zug ausfällt</em> and <em>…, weil ich die Datei geschickt habe</em>. In <em>Wenn der Server wieder läuft, <b>rufen</b> wir den Kunden zurück</em>, the whole subordinate clause fills the first position of the main clause.</p>' +
      '<p>See <a href="#/grammar/nebensaetze">Nebensätze</a> for conjunctions and indirect questions, and <a href="#/grammar/perfekt">Perfekt vs Präteritum</a> for the past tenses.</p>'
  },
  tables: [
    {
      caption: { ru: 'Границы рамки', en: 'The edges of the bracket' },
      head: {
        ru: ['Первый блок', 'Левая часть', 'Середина', 'Правая часть'],
        en: ['First constituent', 'Left bracket', 'Middle field', 'Right bracket']
      },
      deCols: [0, 1, 2, 3],
      rows: [
        ['Heute', 'rufe', 'ich den Kunden', 'zurück.'],
        ['Nach der Besprechung', 'muss', 'ich die Datei', 'schicken.'],
        ['Gestern', 'habe', 'ich die Datei', 'geschickt.'],
        ['—', 'Hast', 'du die Datei', 'geschickt?'],
        ['Wann', 'hast', 'du die Datei', 'geschickt?'],
        ['—', 'weil', 'ich die Datei', 'geschickt habe']
      ]
    }
  ],
  examples: [
    { de: 'Nach der Besprechung [[schicke]] ich dir die Unterlagen.', ru: 'После совещания я пришлю тебе документы.', en: 'I’ll send you the documents after the meeting.' },
    { de: 'Heute muss ich den Termin [[verschieben]].', ru: 'Сегодня мне нужно перенести встречу.', en: 'I need to reschedule the appointment today.' },
    { de: '[[Hast]] du die Änderung schon [[getestet]]?', ru: 'Ты уже проверил это изменение?', en: 'Have you tested the change yet?' },
    { de: 'Wann [[fängt]] die Besprechung [[an]]?', ru: 'Когда начинается совещание?', en: 'When does the meeting start?' },
    { de: 'Wenn der Server wieder läuft, [[rufen]] wir den Kunden [[zurück]].', ru: 'Когда сервер снова заработает, мы перезвоним клиенту.', en: 'When the server is back up, we’ll call the customer back.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Первое место может занимать целая группа', en: 'A whole phrase can occupy position one' },
      html: {
        ru: 'В <em>Am frühen Morgen rufe ich an</em> вся группа <em>am frühen Morgen</em> занимает первое место. Сразу за ней стоит <span class="right">rufe</span>.',
        en: 'In <em>Am frühen Morgen rufe ich an</em>, the entire phrase <em>am frühen Morgen</em> occupies position one. The finite verb <span class="right">rufe</span> follows it.'
      }
    },
    {
      title: { ru: 'Форма приставки зависит от рамки', en: 'Separable prefixes follow the clause pattern' },
      html: {
        ru: '<em>Ich rufe zurück</em> — приставка замыкает рамку главного предложения. <em>…, weil ich zurückrufe</em> — глагол с приставкой стоит в конце придаточного одним словом.',
        en: 'In <em>Ich rufe zurück</em>, the prefix closes the main-clause bracket. In <em>…, weil ich zurückrufe</em>, the verb and prefix form one word at the end of the subordinate clause.'
      }
    },
    {
      title: { ru: 'Deshalb и weil строят разные конструкции', en: 'Deshalb and weil build different clause patterns' },
      html: {
        ru: '<em>Deshalb verschieben wir den Termin</em> — <em>deshalb</em> занимает первое место главного предложения. В <em>…, weil wir den Termin verschieben</em> союз <em>weil</em> открывает придаточное.',
        en: '<em>Deshalb</em> takes first position in the main clause <em>Deshalb verschieben wir den Termin</em>. <em>Weil</em> introduces the subordinate clause <em>…, weil wir den Termin verschieben</em>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-ws-d1', kind: 'choice',
      q: 'Nach der Besprechung ___',
      options: ['ich schicke dir die Unterlagen.', 'schicke ich dir die Unterlagen.', 'ich dir die Unterlagen schicke.'],
      answer: 1,
      explain: { ru: 'Nach der Besprechung — первый блок. За ним идёт спрягаемое schicke, затем ich.', en: 'Nach der Besprechung is the first constituent. The finite schicke follows it, then ich.' }
    },
    {
      id: 'g-ws-d2', kind: 'reorder',
      q: { ru: 'Начните с Morgen früh. «Завтра утром я перезвоню клиенту».', en: 'Start with Morgen früh. “Tomorrow morning I’ll call the customer back.”' },
      tokens: ['Morgen früh', 'rufe', 'ich', 'den Kunden', 'zurück.'],
      answer: 'Morgen früh rufe ich den Kunden zurück.',
      explain: { ru: 'Morgen früh занимает первое место. Rufe стоит на втором, zurück закрывает рамку.', en: 'Morgen früh takes first position. Rufe comes second, and zurück closes the bracket.' }
    },
    {
      id: 'g-ws-d3', kind: 'gap',
      q: 'Ich rufe den Kunden nach dem Termin ___. (zurückrufen)',
      hint: { ru: 'Допишите отделяемую приставку.', en: 'Complete the sentence with the separable prefix.' },
      answer: 'zurück',
      explain: { ru: 'В главном предложении rufe открывает рамку, а zurück закрывает её.', en: 'In the main clause, rufe opens the bracket and zurück closes it.' }
    },
    {
      id: 'g-ws-d4', kind: 'choice',
      q: '___ den Termin verschieben?',
      hint: { ru: 'Задайте прямой вопрос, на который можно ответить «да» или «нет».', en: 'Ask a direct yes/no question.' },
      options: ['Sie können', 'Sie', 'Können Sie'],
      answer: 2,
      explain: { ru: 'Können стоит первым в прямом вопросе без вопросительного слова. Инфинитив verschieben закрывает рамку.', en: 'Können takes first position in a direct yes/no question. The infinitive verschieben closes the bracket.' }
    },
    {
      id: 'g-ws-d5', kind: 'reorder',
      q: { ru: 'Начните с Heute. «Сегодня я проверил логи».', en: 'Start with Heute. “Today I checked the logs.”' },
      tokens: ['Heute', 'habe', 'ich', 'die Logdateien', 'geprüft.'],
      answer: 'Heute habe ich die Logdateien geprüft.',
      explain: { ru: 'После Heute идёт спрягаемое habe. Partizip II geprüft закрывает рамку.', en: 'The finite habe follows Heute. The participle geprüft closes the bracket.' }
    },
    {
      id: 'g-ws-d6', kind: 'reorder',
      q: { ru: 'Поставьте придаточное с Wenn первым. «Когда сервер снова заработает, мы перезвоним клиенту».', en: 'Put the Wenn-clause first. “When the server is back up, we’ll call the customer back.”' },
      tokens: ['Wenn der Server wieder läuft,', 'rufen', 'wir', 'den Kunden', 'zurück.'],
      answer: 'Wenn der Server wieder läuft, rufen wir den Kunden zurück.',
      explain: { ru: 'Всё придаточное занимает первое место. Сразу после запятой идёт rufen, затем подлежащее wir.', en: 'The whole subordinate clause occupies position one. Rufen follows the comma, then the subject wir.' }
    },
    {
      id: 'g-ws-d7', kind: 'gap',
      q: 'Ich weiß, dass die Besprechung um neun ___. (anfangen)',
      hint: { ru: 'Поставьте anfangen в Präsens в придаточном с dass.', en: 'Put anfangen in the present tense in the dass-clause.' },
      answer: 'anfängt',
      explain: { ru: 'В конце придаточного приставка an- и форма fängt пишутся одним словом anfängt.', en: 'At the end of the subordinate clause, an- and fängt join to form anfängt.' }
    },
    {
      id: 'g-ws-d8', kind: 'choice',
      q: 'Die Kollegin ist krank. Deshalb ___',
      options: ['wir verschieben den Termin.', 'wir den Termin verschieben.', 'verschieben wir den Termin.'],
      answer: 2,
      explain: { ru: 'Deshalb занимает первое место главного предложения. Сразу после него идёт verschieben.', en: 'Deshalb occupies first position in the main clause. Verschieben comes immediately after it.' }
    }
  ]
});
