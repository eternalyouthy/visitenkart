/* German GRAMMAR · B2 · Futur II: werden + Partizip II + haben / sein — completed future and assumptions about the past.
 * Related: grammar_b2_vermutung.js (muss / dürfte … gemacht haben). Explanations ru + en inline. */
GT.registerGrammar({
  id: 'futur2',
  level: 'B2',
  title: { ru: 'Futur II: wird … gemacht haben', en: 'Futur II: wird … gemacht haben' },
  summary: {
    ru: 'Bis Freitag werde ich es geschafft haben («к пятнице успею») и Er wird es vergessen haben («наверное, он забыл»). Второе значение встречается чаще.',
    en: 'Bis Freitag werde ich es geschafft haben (“will have done”) and Er wird es vergessen haben (“he has probably forgotten”). The second use is more common.'
  },
  explanation: {
    ru: '<p><b>Форма:</b> <b>werden</b> (на 2-м месте) + <b>Partizip II</b> + <b>haben / sein</b> (в конце). haben или sein — как в Perfekt: <em>Ich <b>werde</b> den Bericht <b>geschrieben haben</b>. Sie <b>wird</b> schon <b>angekommen sein</b>.</em></p>' +
      '<p><b>1. Предположение о прошлом</b> (самое частое употребление). Говорящий не знает точно, но уверен почти наверняка; обычно со словами <em>wohl, sicher, bestimmt, schon</em>:</p>' +
      '<ul>' +
      '<li><em>Paul ist nicht gekommen. Er <b>wird</b> den Termin <b>vergessen haben</b>.</em> — Наверное, он забыл про встречу.</li>' +
      '<li><em>Die Kinder <b>werden</b> schon <b>eingeschlafen sein</b>.</em> — Дети, наверное, уже уснули.</li>' +
      '</ul>' +
      '<p>По смыслу это = <em>Er hat den Termin wahrscheinlich vergessen</em>. Сравните модальные глаголы с тем же «перфектным инфинитивом»: <em>Er <b>muss</b> den Termin vergessen haben</em> (наверняка) — см. <a href="#/grammar/vermutung">Assumptions</a>.</p>' +
      '<p><b>2. Действие, завершённое к моменту в будущем:</b> <em>Bis Freitag <b>werde</b> ich alles <b>erledigt haben</b>.</em> — К пятнице я всё сделаю. В разговоре чаще говорят проще, Perfekt + указание времени: <em>Bis Freitag <b>habe</b> ich alles <b>erledigt</b>.</em></p>' +
      '<p>В придаточном <em>wird</em> уходит в самый конец: <em>Ich glaube, dass er bis dahin alles vorbereitet haben <b>wird</b>.</em></p>' +
      '<p><b>Осторожно:</b> <em>werden + Partizip II</em> без haben / sein — это <b>пассив</b>: <em>Der Brief <b>wird gelesen</b></em> = письмо читают. В русском такого времени нет, поэтому эту разницу легко пропустить.</p>',
    en: '<p><b>Form:</b> <b>werden</b> (position 2) + <b>Partizip II</b> + <b>haben / sein</b> (at the end), with haben / sein chosen as in the Perfekt: <em>Ich <b>werde</b> den Bericht <b>geschrieben haben</b>. Sie <b>wird</b> schon <b>angekommen sein</b>.</em></p>' +
      '<p><b>1. Assumption about the past</b> (the most common use). English says “must have / has probably”, German often says “will have”, usually with <em>wohl, sicher, bestimmt, schon</em>:</p>' +
      '<ul>' +
      '<li><em>Paul ist nicht gekommen. Er <b>wird</b> den Termin <b>vergessen haben</b>.</em> — He’ll have forgotten the appointment / He has probably forgotten it.</li>' +
      '<li><em>Die Kinder <b>werden</b> schon <b>eingeschlafen sein</b>.</em> — The children will have fallen asleep by now.</li>' +
      '</ul>' +
      '<p>Compare the modal verbs with the same perfect infinitive: <em>Er <b>muss</b> den Termin vergessen haben</em> (he must have) — see <a href="#/grammar/vermutung">Assumptions</a>.</p>' +
      '<p><b>2. Completed by a future time</b> — English “will have done”: <em>Bis Freitag <b>werde</b> ich alles <b>erledigt haben</b>.</em> In everyday speech Germans prefer the Perfekt + a time phrase: <em>Bis Freitag <b>habe</b> ich alles <b>erledigt</b>.</em> So use Futur II less often than English “will have”.</p>' +
      '<p>In a subordinate clause <em>wird</em> goes to the very end: <em>Ich glaube, dass er bis dahin alles vorbereitet haben <b>wird</b>.</em></p>' +
      '<p><b>Careful:</b> <em>werden + Partizip II</em> without haben / sein is the <b>passive</b>: <em>Der Brief <b>wird gelesen</b></em> = the letter is being read.</p>'
  },
  tables: [
    {
      caption: { ru: 'Futur II и похожие формы', en: 'Futur II and look-alikes' },
      head: { ru: ['Форма', 'Пример', 'Значение'], en: ['Form', 'Example', 'Meaning'] },
      deCols: [1],
      rows: {
        ru: [
          ['Futur II (предположение)', 'Er wird den Zug verpasst haben.', 'наверное, он опоздал на поезд'],
          ['Futur II (завершено к сроку)', 'Bis Montag werde ich alles erledigt haben.', 'к понедельнику всё сделаю'],
          ['Perfekt + время (разговорно)', 'Bis Montag habe ich alles erledigt.', 'к понедельнику всё сделаю'],
          ['Futur I', 'Er wird den Zug verpassen.', 'он опоздает на поезд'],
          ['Passiv Präsens', 'Der Zug wird kontrolliert.', 'поезд проверяют']
        ],
        en: [
          ['Futur II (assumption)', 'Er wird den Zug verpasst haben.', 'he has probably missed the train'],
          ['Futur II (completed by then)', 'Bis Montag werde ich alles erledigt haben.', 'by Monday I’ll have done it all'],
          ['Perfekt + time (spoken)', 'Bis Montag habe ich alles erledigt.', 'by Monday I’ll have done it all'],
          ['Futur I', 'Er wird den Zug verpassen.', 'he will miss the train'],
          ['Passive present', 'Der Zug wird kontrolliert.', 'the train is being checked']
        ]
      }
    }
  ],
  examples: [
    { de: 'Paul ist nicht da. Er [[wird]] den Termin wohl [[vergessen haben]].', ru: 'Пауля нет. Наверное, он забыл про встречу.', en: 'Paul isn’t here. He’ll have forgotten the appointment.' },
    { de: 'Keine Sorge, sie [[wird]] schon gut [[angekommen sein]].', ru: 'Не волнуйся, она наверняка уже благополучно доехала.', en: 'Don’t worry, she’ll have arrived safely by now.' },
    { de: 'Bis Ende des Jahres [[werden]] wir die Wohnung [[renoviert haben]].', ru: 'К концу года мы закончим ремонт квартиры.', en: 'By the end of the year we’ll have renovated the flat.' },
    { de: 'Das Paket ist nicht da. Die Post [[wird]] es [[verloren haben]].', ru: 'Посылки нет. Наверное, почта её потеряла.', en: 'The parcel isn’t here. The post office must have lost it.' },
    { de: 'Warum ist Anna so müde? — Sie [[wird]] schlecht [[geschlafen haben]].', ru: 'Почему Анна такая уставшая? — Наверное, плохо спала.', en: 'Why is Anna so tired? — She probably slept badly.' }
  ],
  pitfalls: [
    {
      title: { ru: 'wird gelesen ≠ wird gelesen haben', en: 'wird gelesen ≠ wird gelesen haben' },
      html: {
        ru: 'Без haben / sein получается пассив: <span class="wrong">Er wird den Termin vergessen.</span> = «он забудет» (Futur I), а <em>Der Termin wird vergessen</em> = «о встрече забывают». «Наверное, он забыл» → <span class="right">Er wird den Termin vergessen haben.</span>',
        en: 'Drop haben / sein and you get something else: <em>Er wird den Termin vergessen</em> = he will forget (Futur I); <em>Der Termin wird vergessen</em> = the appointment is forgotten (passive). “He has probably forgotten” → <span class="right">Er wird den Termin vergessen haben.</span>'
      }
    },
    {
      title: { ru: 'haben или sein — как в Perfekt', en: 'haben or sein — as in the Perfekt' },
      html: {
        ru: '<span class="wrong">Sie wird schon angekommen haben.</span> → <span class="right">Sie wird schon angekommen sein.</span> (sie ist angekommen).',
        en: 'English always says “will have”: “she will have arrived”. German follows the Perfekt: <span class="wrong">Sie wird angekommen haben.</span> → <span class="right">Sie wird angekommen sein.</span>'
      }
    },
    {
      title: { ru: 'Не переусердствуйте', en: 'Don’t overuse it for plans' },
      html: {
        ru: 'Для сроков в повседневной речи хватает Perfekt: <span class="right">Bis morgen habe ich das gemacht.</span> Futur II здесь звучит книжно, но не ошибочно.',
        en: 'For deadlines, everyday German prefers the Perfekt: <span class="right">Bis morgen habe ich das gemacht.</span> Futur II is correct but sounds formal — unlike English “I’ll have done it”, which is neutral.'
      }
    }
  ],
  drills: [
    {
      id: 'g-f2-d1', kind: 'choice',
      q: 'Bis morgen Abend ___ ich die Arbeit beendet haben.',
      options: ['werde', 'wird', 'habe'],
      answer: 0,
      explain: { ru: 'Futur II: werden (ich werde) + Partizip II + haben.', en: 'Futur II: werden (ich werde) + Partizip II + haben.' }
    },
    {
      id: 'g-f2-d2', kind: 'choice',
      q: 'Paul ist nicht gekommen. Er ___ den Termin wohl vergessen haben.',
      options: ['wird', 'hat', 'ist'],
      answer: 0,
      explain: { ru: 'Предположение о прошлом: wird + vergessen haben.', en: 'Assumption about the past: wird + vergessen haben.' }
    },
    {
      id: 'g-f2-d3', kind: 'choice',
      q: 'Es ist schon spät. Sie wird inzwischen zu Hause ___.',
      options: ['angekommen sein', 'angekommen haben', 'ankommen sein'],
      answer: 0,
      explain: { ru: 'ankommen — Perfekt с sein → angekommen sein.', en: 'ankommen takes sein in the Perfekt → angekommen sein.' }
    },
    {
      id: 'g-f2-d4', kind: 'gap',
      q: 'Bis zum Sommer werden wir die Wohnung renoviert ___.',
      hint: { ru: 'haben или sein?', en: 'haben or sein?' },
      answer: 'haben',
      explain: { ru: 'renovieren — Perfekt с haben.', en: 'renovieren takes haben in the Perfekt.' }
    },
    {
      id: 'g-f2-d5', kind: 'choice',
      q: '„Er wird krank gewesen sein.“ bedeutet:',
      options: ['Er war wahrscheinlich krank.', 'Er wird bald krank.', 'Er wird krank gemacht.'],
      answer: 0,
      explain: { ru: 'Futur II = предположение о прошлом: «наверное, был болен».', en: 'Futur II = assumption about the past: “he was probably ill”.' }
    },
    {
      id: 'g-f2-d6', kind: 'choice',
      q: 'Das Paket ist immer noch nicht da. Die Post ___ es verloren haben.',
      options: ['wird', 'wurde', 'hat'],
      answer: 0,
      explain: { ru: 'Предположение: wird + verloren haben. wurde — Präteritum, а «hat … verloren haben» невозможно.', en: 'Assumption: wird + verloren haben. wurde is Präteritum, and “hat … verloren haben” is impossible.' }
    },
    {
      id: 'g-f2-d7', kind: 'choice',
      q: 'In zwei Jahren ___ ich mein Studium abgeschlossen haben.',
      options: ['werde', 'wäre', 'bin'],
      answer: 0,
      explain: { ru: 'Завершено к моменту в будущем: werde … abgeschlossen haben.', en: 'Completed by a future time: werde … abgeschlossen haben.' }
    },
    {
      id: 'g-f2-d8', kind: 'gap',
      q: 'Es ist schon zehn. Die Kinder werden schon ___ sein. (einschlafen)',
      answer: 'eingeschlafen',
      explain: { ru: 'einschlafen — отделяемый, Partizip II eingeschlafen, Perfekt с sein.', en: 'einschlafen is separable: Partizip II eingeschlafen, Perfekt with sein.' }
    },
    {
      id: 'g-f2-d9', kind: 'choice',
      q: '„Der Brief wird gelesen.“ ist:',
      options: ['Passiv Präsens', 'Futur II', 'Futur I'],
      answer: 0,
      explain: { ru: 'werden + Partizip II без haben / sein = пассив.', en: 'werden + Partizip II without haben / sein = passive.' }
    },
    {
      id: 'g-f2-d10', kind: 'choice',
      q: 'Ich glaube, dass er bis dahin alles vorbereitet haben ___.',
      options: ['wird', 'werde', 'hat'],
      answer: 0,
      explain: { ru: 'В придаточном спрягаемое wird стоит в самом конце.', en: 'In a subordinate clause the conjugated wird goes to the very end.' }
    },
    {
      id: 'g-f2-d11', kind: 'choice',
      q: 'Warum ist Anna heute so müde? — Sie ___ schlecht geschlafen haben.',
      options: ['wird', 'wurde', 'ist'],
      answer: 0,
      explain: { ru: 'Предположение о прошлом → wird … geschlafen haben.', en: 'Assumption about the past → wird … geschlafen haben.' }
    },
    {
      id: 'g-f2-d12', kind: 'reorder',
      q: { ru: 'Соберите фразу. «К понедельнику я всё сделаю».', en: 'Build the sentence. “By Monday I’ll have done everything.”' },
      tokens: ['Bis Montag', 'werde', 'ich', 'alles', 'erledigt', 'haben.'],
      answer: 'Bis Montag werde ich alles erledigt haben.',
      explain: { ru: 'werde на 2-м месте, в конце Partizip II + haben.', en: 'werde in position 2, Partizip II + haben at the end.' }
    }
  ]
});
