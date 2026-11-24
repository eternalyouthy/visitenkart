GT.registerGrammar({
  id: 'passiv',
  title: 'Passiv',
  summary: 'werden + Partizip II в Präsens, Präteritum, Perfekt и с модальными глаголами.',
  explanation:
    '<p>Пассив ставит в центр <b>действие</b>, а не того, кто его совершает. Поэтому он очень част в рабочих письмах, отчётах, инструкциях и новостях.</p>' +
    '<p><b>Образование:</b> <b>werden</b> (спрягается) + <b>Partizip II</b> в конце: <em>Die Daten werden gesichert.</em> — Данные сохраняются.</p>' +
    '<ul>' +
    '<li>Кем: <b>von + Dativ</b> (человек или исполнитель): <em>von einer Kollegin</em></li>' +
    '<li>Чем / по какой причине: <b>durch + Akkusativ</b>: <em>durch ein Update</em></li>' +
    '<li>В Perfekt — <b>worden</b> (а не geworden): <em>Das Paket ist geliefert worden.</em></li>' +
    '<li>С модальным глаголом: модальный + Partizip II + <b>werden</b>: <em>Das muss repariert werden.</em></li>' +
    '</ul>' +
    '<p>Осторожно: <b>sein + Partizip II</b> описывает <b>состояние</b> (Zustandspassiv): <em>Die Tür ist geschlossen</em> (дверь закрыта) vs <em>Die Tür wird geschlossen</em> (дверь закрывают).</p>',
  tables: [
    {
      caption: 'Времена',
      head: ['Время', 'Форма', 'Пример'],
      deCols: [2],
      rows: [
        ['Präsens', 'wird + Partizip II', 'Der Server wird neu gestartet.'],
        ['Präteritum', 'wurde + Partizip II', 'Der Server wurde neu gestartet.'],
        ['Perfekt', 'ist + Partizip II + worden', 'Der Server ist neu gestartet worden.'],
        ['С модальным (Präsens)', 'muss + Partizip II + werden', 'Der Server muss neu gestartet werden.'],
        ['С модальным (Präteritum)', 'musste + Partizip II + werden', 'Der Server musste neu gestartet werden.']
      ]
    }
  ],
  examples: [
    { de: 'Die Daten [[werden]] jede Nacht automatisch [[gesichert]].', ru: 'Данные автоматически сохраняются каждую ночь.' },
    { de: 'Das Rathaus [[wurde]] 1890 [[gebaut]].', ru: 'Ратуша была построена в 1890 году.' },
    { de: 'Der Fehler [[wurde]] von einer Kollegin [[entdeckt]].', ru: 'Ошибку обнаружила коллега.' },
    { de: 'Die Schwachstelle muss sofort [[geschlossen werden]].', ru: 'Уязвимость нужно закрыть немедленно.' },
    { de: 'Hier darf nicht [[geraucht werden]].', ru: 'Здесь курить нельзя.' },
    { de: 'Ihr Antrag kann leider erst nächste Woche [[bearbeitet werden]].', ru: 'К сожалению, ваше заявление смогут рассмотреть только на следующей неделе.' },
    { de: 'In Deutschland [[wird]] viel Fahrrad [[gefahren]].', ru: 'В Германии много ездят на велосипеде.' }
  ],
  pitfalls: [
    { title: 'Не «sich» для пассива', html: 'В русском пассив часто передают через «-ся»: «Дом строится». Немецкий здесь не использует возвратный глагол: <span class="wrong">Das Haus baut sich.</span> → <span class="right">Das Haus wird gebaut.</span> или с «man»: <span class="right">Man baut hier ein Haus.</span>' },
    { title: '«был построен» ≠ «war gebaut»', html: 'Для события в прошлом используйте <span class="right">wurde gebaut</span>. <span class="wrong">war gebaut</span> описывает состояние («уже был построен») — обычно это не то, что вы хотите сказать.' },
    { title: '«worden», а не «geworden»', html: 'В пассиве Perfekt: <span class="right">Das Paket ist geliefert worden.</span> А не <span class="wrong">… geliefert geworden</span>. «Geworden» — только у обычного глагола werden: «Er ist Arzt geworden».' },
    { title: 'Кем — von, а не mit', html: 'Русский творительный падеж («сделано коллегой») не переводится через «mit»: <span class="right">von meinem Kollegen</span> (человек), <span class="right">durch das Update</span> (средство/причина).' },
    { title: 'Модальный + пассив: «werden», а не «sein»', html: '«Должен быть отремонтирован» → <span class="right">muss repariert werden</span>. <span class="wrong">muss repariert sein</span> значит, что он уже должен находиться в отремонтированном состоянии.' }
  ],
  drills: [
    { id: 'g-pa-d1', kind: 'gap', q: 'Die Backups ___ jede Nacht automatisch erstellt. (Präsens)', answer: 'werden', explain: 'Подлежащее во мн. ч. → werden + Partizip II.' },
    { id: 'g-pa-d2', kind: 'gap', q: 'Der Fehler ___ gestern von Anna gefunden. (Präteritum)', answer: 'wurde', explain: 'Пассив Präteritum: wurde + Partizip II.' },
    { id: 'g-pa-d3', kind: 'choice', q: 'Das Paket ist gestern geliefert ___.', options: ['geworden', 'worden', 'werden'], answer: 1, explain: 'Пассив Perfekt образуется с worden.' },
    { id: 'g-pa-d4', kind: 'gap', q: 'Die Lücke muss sofort geschlossen ___.', answer: 'werden', explain: 'Модальный + Partizip II + werden.' },
    { id: 'g-pa-d5', kind: 'reorder', q: 'Составьте: «Сервер нужно перезапустить».', tokens: ['Der', 'Server', 'muss', 'neu', 'gestartet', 'werden.'], answer: 'Der Server muss neu gestartet werden.', explain: 'Модальный на втором месте, Partizip II + werden в конце.' },
    { id: 'g-pa-d6', kind: 'choice', q: 'Der Angriff wurde ___ ein Monitoring-Tool entdeckt.', options: ['von', 'durch', 'mit'], answer: 1, explain: 'Средство / инструмент → durch + Akk.' },
    { id: 'g-pa-d7', kind: 'choice', q: '«Здесь не курят.» → Hier ___ nicht geraucht.', options: ['wird', 'ist', 'raucht'], answer: 0, explain: 'Безличный пассив: Hier wird nicht geraucht.' },
    { id: 'g-pa-d8', kind: 'gap', q: 'Man repariert die Heizung morgen. → Die Heizung ___ morgen ___.', answer: 'wird … repariert', explain: 'Актив с «man» → пассив с werden + Partizip II.' },
    {
      id: 'g-pa-d9', kind: 'choice',
      q: 'Die Brücke ___ 1990 gebaut.',
      options: ['wurde', 'wird', 'hat'],
      answer: 0,
      explain: { ru: 'Событие в прошлом → пассив Präteritum: wurde gebaut.', en: 'A past event → passive Präteritum: wurde gebaut.' }
    },
    {
      id: 'g-pa-d10', kind: 'gap',
      q: 'In Deutschland ___ sehr viel Kaffee getrunken. (Präsens)',
      answer: 'wird',
      explain: { ru: 'Подлежащее Kaffee (ед. ч.) → wird + Partizip II.', en: 'Subject Kaffee (singular) → wird + Partizip II.' }
    },
    {
      id: 'g-pa-d11', kind: 'choice',
      q: 'Das Formular muss vollständig ___.',
      options: ['ausgefüllt werden', 'ausfüllen werden', 'ausgefüllt worden'],
      answer: 0,
      explain: { ru: 'Модальный глагол + Partizip II + werden.', en: 'Modal + Partizip II + werden.' }
    },
    {
      id: 'g-pa-d12', kind: 'choice',
      q: 'Die Patientin wurde ___ einer jungen Ärztin untersucht.',
      options: ['von', 'durch', 'mit'],
      answer: 0,
      explain: { ru: 'Действующее лицо → von + Dativ.', en: 'The person doing it → von + Dativ.' }
    },
    {
      id: 'g-pa-d13', kind: 'gap',
      q: 'Ihr Antrag ist schon bearbeitet ___. (Perfekt Passiv)',
      answer: 'worden',
      explain: { ru: 'Пассив Perfekt: ist + Partizip II + worden (не geworden).', en: 'Passive Perfekt: ist + Partizip II + worden (not geworden).' }
    },
    {
      id: 'g-pa-d14', kind: 'choice',
      q: 'Man hat den Dieb gestern gefasst. → ___',
      options: ['Der Dieb ist gestern gefasst worden.', 'Der Dieb hat gestern gefasst worden.', 'Der Dieb ist gestern gefasst geworden.'],
      answer: 0,
      explain: { ru: 'Пассив Perfekt: ist … gefasst worden.', en: 'Passive Perfekt: ist … gefasst worden.' }
    },
    {
      id: 'g-pa-d15', kind: 'gap',
      q: 'Hier darf nicht geparkt ___.',
      answer: 'werden',
      explain: { ru: 'Модальный + Partizip II + werden: darf … geparkt werden.', en: 'Modal + Partizip II + werden: darf … geparkt werden.' }
    },
    {
      id: 'g-pa-d16', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Квартиру ремонтируют на следующей неделе».', en: 'Build the sentence. “The flat is being renovated next week.”' },
      tokens: ['Die Wohnung', 'wird', 'nächste Woche', 'renoviert.'],
      answer: 'Die Wohnung wird nächste Woche renoviert.',
      explain: { ru: 'wird на 2-м месте, Partizip II renoviert в конце.', en: 'wird in position 2, Partizip II renoviert at the end.' }
    }
  ]
});
