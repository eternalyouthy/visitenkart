GT.registerGrammar({
  id: 'perfekt',
  title: { ru: 'Прошедшее время · Perfekt и Präteritum', en: 'Past time · Perfekt and Präteritum' },
  summary: {
    ru: 'Выберите haben или sein, образуйте Partizip II и подберите время под ситуацию.',
    en: 'Choose haben or sein, form the past participle and pick a tense that fits the situation.'
  },
  explanation: {
    ru: '<p>В разговоре и переписке о событиях часто используют <b>Perfekt</b>. В письменном повествовании, например в хронологии сбоя, часто встречается <b>Präteritum</b>. Формы <em>war</em>, <em>hatte</em> и модальные <em>musste</em>, <em>konnte</em> обычны и в разговоре. Обе формы могут сочетаться в одном рассказе, например <em>Der Server war kurz offline, aber wir haben die Ursache gefunden.</em></p>' +
      '<p><b>Perfekt = haben или sein в Präsens + Partizip II.</b> В главном предложении вспомогательный глагол занимает место V2 и согласуется с подлежащим. Partizip II закрывает рамку. Сравните <em>Ich habe die Logs geprüft</em> и <em>Wir haben die Logs geprüft</em>. В простом придаточном вспомогательный глагол идёт после причастия, как в <em>…, weil wir die Logs geprüft haben</em>.</p>' +
      '<p><b>Чаще всего берите haben.</b> С ним образуют Perfekt многие глаголы с прямым дополнением (<em>die Datei prüfen</em>) и обозначения деятельности без прямого дополнения (<em>arbeiten</em>, <em>warten</em>). <b>Sein</b> характерен для многих непереходных глаголов со сменой места или состояния (<em>ankommen</em>, <em>aufstehen</em>, <em>einschlafen</em>). Запомните также <em>ist geblieben</em> и <em>ist gewesen</em>.</p>' +
      '<p><b>Partizip II.</b> Слабые глаголы обычно имеют окончание <em>-t</em> или <em>-et</em>, сильные — <em>-en</em> и иногда меняют гласную. У обычных отделяемых глаголов <em>ge-</em> стоит между приставкой и основой (<em>zurück-ge-rufen</em>). У глаголов с безударными неотделяемыми приставками вроде <em>be-</em> и <em>ver-</em>, как и у глаголов на <em>-ieren</em>, причастие образуется без <em>ge-</em>.</p>' +
      '<p>Подробнее о позиции глагола — в уроках <a href="#/grammar/wortstellung">Wortstellung</a> и <a href="#/grammar/nebensaetze">Nebensätze</a>.</p>',
    en: '<p>In conversations and everyday messages, the <b>Perfekt</b> is common for past events. The <b>Präteritum</b> is common in written narrative, such as an incident timeline. Forms like <em>war</em>, <em>hatte</em> and the modals <em>musste</em> and <em>konnte</em> are common in speech too. Both tenses can occur in the same account, as in <em>Der Server war kurz offline, aber wir haben die Ursache gefunden.</em></p>' +
      '<p><b>Perfekt = present-tense haben or sein + Partizip II.</b> In a main-clause statement, the auxiliary agrees with the subject and takes position two. The participle closes the bracket. Compare <em>Ich habe die Logs geprüft</em> and <em>Wir haben die Logs geprüft</em>. In a simple subordinate clause, the auxiliary follows the participle, as in <em>…, weil wir die Logs geprüft haben</em>.</p>' +
      '<p><b>Haben is the usual choice.</b> Use it with many verbs that take a direct object (<em>die Datei prüfen</em>) and with many activities without a direct object (<em>arbeiten</em>, <em>warten</em>). <b>Sein</b> is common with intransitive verbs that describe a change of place or state (<em>ankommen</em>, <em>aufstehen</em>, <em>einschlafen</em>). Learn <em>ist geblieben</em> and <em>ist gewesen</em> as well.</p>' +
      '<p><b>Partizip II.</b> Weak verbs typically end in <em>-t</em> or <em>-et</em>. Strong verbs end in <em>-en</em> and may change their stem vowel. With typical separable verbs, <em>ge-</em> goes between the prefix and the stem (<em>zurück-ge-rufen</em>). Verbs with unstressed inseparable prefixes such as <em>be-</em> and <em>ver-</em>, and verbs in <em>-ieren</em>, form the participle without <em>ge-</em>.</p>' +
      '<p>See <a href="#/grammar/wortstellung">Wortstellung</a> and <a href="#/grammar/nebensaetze">Nebensätze</a> for verb placement.</p>'
  },
  tables: [
    {
      caption: { ru: 'Как образуется Partizip II', en: 'How the past participle is formed' },
      head: { ru: ['Тип', 'Инфинитив', 'Форма в Perfekt'], en: ['Type', 'Infinitive', 'Perfekt form'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['Слабый глагол', 'prüfen', 'hat geprüft'],
          ['Сильный глагол', 'finden', 'hat gefunden'],
          ['Смешанный глагол', 'bringen', 'hat gebracht'],
          ['Отделяемая приставка', 'zurückrufen', 'hat zurückgerufen'],
          ['Неотделяемая приставка', 'verschieben', 'hat verschoben'],
          ['Глагол на -ieren', 'installieren', 'hat installiert'],
          ['Движение с sein', 'ankommen', 'ist angekommen']
        ],
        en: [
          ['Weak verb', 'prüfen', 'hat geprüft'],
          ['Strong verb', 'finden', 'hat gefunden'],
          ['Mixed verb', 'bringen', 'hat gebracht'],
          ['Separable prefix', 'zurückrufen', 'hat zurückgerufen'],
          ['Inseparable prefix', 'verschieben', 'hat verschoben'],
          ['Verb ending in -ieren', 'installieren', 'hat installiert'],
          ['Movement with sein', 'ankommen', 'ist angekommen']
        ]
      }
    },
    {
      caption: { ru: 'Как описать одну ситуацию', en: 'Two ways to describe the same event' },
      head: { ru: ['Типичный контекст', 'Пример'], en: ['Typical context', 'Example'] },
      deCols: [1],
      rows: {
        ru: [
          ['Разговор с коллегой', 'Der Server war um 14 Uhr kurz offline. Zehn Minuten später haben wir den Fehler gefunden.'],
          ['Письменная хронология', 'Der Server fiel um 14 Uhr aus. Zehn Minuten später fanden wir den Fehler.']
        ],
        en: [
          ['Conversation with a colleague', 'Der Server war um 14 Uhr kurz offline. Zehn Minuten später haben wir den Fehler gefunden.'],
          ['Written timeline', 'Der Server fiel um 14 Uhr aus. Zehn Minuten später fanden wir den Fehler.']
        ]
      }
    }
  ],
  examples: [
    { de: 'Ich [[habe]] die Logdateien schon [[geprüft]].', ru: 'Я уже проверил логи.', en: 'I’ve already checked the logs.' },
    { de: 'Die Kollegin [[ist]] um neun [[angekommen]].', ru: 'Коллега приехала в девять.', en: 'The colleague arrived at nine.' },
    { de: 'Wir [[haben]] die Besprechung auf Freitag [[verschoben]].', ru: 'Мы перенесли совещание на пятницу.', en: 'We’ve moved the meeting to Friday.' },
    { de: 'Gestern [[hatte]] ich wenig Zeit, weil ich länger arbeiten [[musste]].', ru: 'Вчера у меня было мало времени, потому что пришлось дольше работать.', en: 'I had little time yesterday because I had to work longer.' },
    { de: 'Ich weiß, dass du den Kunden [[zurückgerufen hast]].', ru: 'Я знаю, что ты перезвонил клиенту.', en: 'I know you called the customer back.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Вспомогательный глагол зависит от конструкции', en: 'The construction can change the auxiliary' },
      html: {
        ru: '<em>Sie ist nach Bonn gefahren</em> описывает поездку до места. В <em>Sie hat den Lieferwagen selbst gefahren</em> глагол употреблён с прямым дополнением <em>den Lieferwagen</em>.',
        en: '<em>Sie ist nach Bonn gefahren</em> describes travelling to a destination. In <em>Sie hat den Lieferwagen selbst gefahren</em>, the verb takes the direct object <em>den Lieferwagen</em>.'
      }
    },
    {
      title: { ru: 'Время события можно указать с Perfekt', en: 'Perfekt can name a specific time in the past' },
      html: {
        ru: 'В разговоре естественно сказать <em>Gestern habe ich die Datei geschickt</em>. Слово <em>gestern</em> задаёт время отправки, а выбор Perfekt соответствует разговорному контексту.',
        en: '<em>Gestern habe ich die Datei geschickt</em> is natural in conversation. With a finished time such as yesterday, English normally uses the simple past (“I sent the file yesterday”).'
      }
    },
    {
      title: { ru: 'Граница приставки важна для Partizip II', en: 'Prefix type shapes the past participle' },
      html: {
        ru: 'Отделяемое <em>zurück-</em> остаётся перед <em>ge-</em> в форме <span class="right">zurückgerufen</span>. У <em>verschieben</em> приставка <em>ver-</em> неотделяемая, поэтому форма — <span class="right">verschoben</span>.',
        en: 'The separable <em>zurück-</em> precedes <em>ge-</em> in <span class="right">zurückgerufen</span>. The inseparable prefix <em>ver-</em> gives the form <span class="right">verschoben</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-pf-d1', kind: 'choice',
      q: 'Wir ___ den Fehler gefunden.',
      options: ['sind', 'hat', 'haben'],
      answer: 2,
      explain: { ru: 'Finden в значении «найти что-либо» образует Perfekt с haben. С wir нужна форма haben.', en: 'Finden takes haben when you find something. The form for wir is haben.' }
    },
    {
      id: 'g-pf-d2', kind: 'choice',
      q: 'Die Kollegin ___ um neun angekommen.',
      options: ['ist', 'hat', 'sind'],
      answer: 0,
      explain: { ru: 'Ankommen описывает прибытие и образует Perfekt с sein. С die Kollegin нужна форма ist.', en: 'Ankommen describes arrival and forms the Perfekt with sein. Use ist with die Kollegin.' }
    },
    {
      id: 'g-pf-d3', kind: 'gap',
      q: 'Ich habe den Termin auf Freitag ___. (verschieben)',
      hint: { ru: 'Образуйте Partizip II от verschieben.', en: 'Form the past participle of verschieben.' },
      answer: 'verschoben',
      explain: { ru: 'У сильного глагола verschieben меняется гласная. С неотделяемым ver- получается verschoben.', en: 'Verschieben is a strong verb with a stem-vowel change. Its inseparable ver- gives verschoben.' }
    },
    {
      id: 'g-pf-d4', kind: 'gap',
      q: 'Wir haben das Programm schon ___. (installieren)',
      hint: { ru: 'Образуйте Partizip II от installieren.', en: 'Form the past participle of installieren.' },
      answer: 'installiert',
      explain: { ru: 'У глаголов на -ieren Partizip II оканчивается на -iert и образуется без ge-.', en: 'Verbs ending in -ieren form the past participle in -iert, without ge-.' }
    },
    {
      id: 'g-pf-d5', kind: 'reorder',
      q: { ru: 'Начните с Nach dem Update. «После обновления мы проверили соединение».', en: 'Start with Nach dem Update. “After the update, we checked the connection.”' },
      tokens: ['Nach dem Update', 'haben', 'wir', 'die Verbindung', 'geprüft.'],
      answer: 'Nach dem Update haben wir die Verbindung geprüft.',
      explain: { ru: 'Nach dem Update занимает первый блок. Haben стоит вторым, geprüft закрывает рамку.', en: 'Nach dem Update is the first constituent. Haben comes second and geprüft closes the bracket.' }
    },
    {
      id: 'g-pf-d6', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Я знаю, что ты перезвонил клиенту».', en: 'Build the sentence. “I know you called the customer back.”' },
      tokens: ['Ich weiß,', 'dass', 'du', 'den Kunden', 'zurückgerufen', 'hast.'],
      answer: 'Ich weiß, dass du den Kunden zurückgerufen hast.',
      explain: { ru: 'В придаточном с dass вспомогательное hast стоит после Partizip II zurückgerufen.', en: 'In the dass-clause, the auxiliary hast follows the participle zurückgerufen.' }
    },
    {
      id: 'g-pf-d7', kind: 'choice',
      q: 'Gestern ___ ich den ganzen Tag im Büro. (sein)',
      hint: { ru: 'Выберите Präteritum от sein.', en: 'Choose the Präteritum form of sein.' },
      options: ['bin', 'war', 'hatte'],
      answer: 1,
      explain: { ru: 'Для ich форма sein в Präteritum — war. Она обычна и в разговоре.', en: 'With ich, the Präteritum of sein is war. It is common in conversation too.' }
    },
    {
      id: 'g-pf-d8', kind: 'reorder',
      q: { ru: 'Начните с Der Server. «Сервер недолго был недоступен, но мы нашли причину».', en: 'Start with Der Server. “The server was briefly offline, but we found the cause.”' },
      tokens: ['Der Server', 'war', 'kurz offline,', 'aber', 'wir', 'haben', 'die Ursache', 'gefunden.'],
      answer: 'Der Server war kurz offline, aber wir haben die Ursache gefunden.',
      explain: { ru: 'War описывает состояние, haben … gefunden сообщает о событии. После aber первый блок нового главного предложения — wir.', en: 'War describes the state, and haben … gefunden reports the event. After aber, wir is the first constituent of the new main clause.' }
    },
    {
      id: 'g-pf-d9', kind: 'choice',
      q: 'Wir ___ letzte Woche nach Hamburg gefahren.',
      options: ['sind', 'haben', 'werden'],
      answer: 0,
      explain: { ru: 'fahren — движение → sein: sind gefahren.', en: 'fahren is movement → sein: sind gefahren.' }
    },
    {
      id: 'g-pf-d10', kind: 'gap',
      q: 'Hast du die Miete schon ___? (überweisen)',
      answer: 'überwiesen',
      explain: { ru: 'überweisen — неотделяемая приставка über-, сильный глагол → überwiesen (без ge-).', en: 'überweisen has the inseparable prefix über- and is strong → überwiesen (no ge-).' }
    },
    {
      id: 'g-pf-d11', kind: 'choice',
      q: 'Der Kurs hat schon um neun Uhr ___.',
      options: ['angefangen', 'angefängt', 'geanfangen'],
      answer: 0,
      explain: { ru: 'anfangen — сильный, отделяемый: an-ge-fangen.', en: 'anfangen is strong and separable: an-ge-fangen.' }
    },
    {
      id: 'g-pf-d12', kind: 'gap',
      q: 'Am Sonntag bin ich lange im Bett ___. (bleiben)',
      answer: 'geblieben',
      explain: { ru: 'bleiben — с sein, Partizip II geblieben.', en: 'bleiben takes sein; Partizip II geblieben.' }
    },
    {
      id: 'g-pf-d13', kind: 'choice',
      q: 'Wann ___ ihr heute aufgestanden?',
      options: ['seid', 'habt', 'wart'],
      answer: 0,
      explain: { ru: 'aufstehen — изменение положения → sein: ihr seid.', en: 'aufstehen is a change of position → sein: ihr seid.' }
    },
    {
      id: 'g-pf-d14', kind: 'gap',
      q: 'Wir haben die Küche im März ___. (renovieren)',
      answer: 'renoviert',
      explain: { ru: 'Глаголы на -ieren без ge-: renoviert.', en: 'Verbs in -ieren have no ge-: renoviert.' }
    },
    {
      id: 'g-pf-d15', kind: 'choice',
      q: 'Gestern ___ ich leider nicht kommen, ich war krank.',
      options: ['konnte', 'habe gekonnt', 'könnte'],
      answer: 0,
      explain: { ru: 'Модальные глаголы в прошедшем обычно в Präteritum: konnte.', en: 'Modal verbs in the past are usually Präteritum: konnte.' }
    },
    {
      id: 'g-pf-d16', kind: 'choice',
      q: 'Das Paket ist leider noch nicht ___.',
      options: ['angekommen', 'angekommt', 'ankommen'],
      answer: 0,
      explain: { ru: 'ankommen — с sein, отделяемый, сильный: angekommen.', en: 'ankommen takes sein, is separable and strong: angekommen.' }
    },
    {
      id: 'g-pf-d17', kind: 'reorder',
      q: { ru: 'Соберите вопрос. «Куда вы ездили?» (ihr)', en: 'Build the question. “Where did you go?” (ihr)' },
      tokens: ['Wohin', 'seid', 'ihr', 'gefahren?'],
      answer: 'Wohin seid ihr gefahren?',
      explain: { ru: 'W-слово, затем seid (движение → sein), Partizip II в конце.', en: 'Question word, then seid (movement → sein), Partizip II at the end.' }
    }
  ]
});
