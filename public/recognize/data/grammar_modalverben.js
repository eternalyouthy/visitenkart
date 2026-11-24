/* German GRAMMAR · B1 · Modal verbs: meanings, Präteritum, Perfekt (Ersatzinfinitiv), nicht müssen / nicht brauchen zu.
 * Explanations ru + en inline. */
GT.registerGrammar({
  id: 'modalverben',
  level: 'B1',
  title: { ru: 'Модальные глаголы', en: 'Modal verbs' },
  summary: {
    ru: 'können, müssen, dürfen, sollen, wollen, mögen/möchten — значения, Präteritum без умлаута, «не нужно» = nicht müssen / nicht brauchen zu.',
    en: 'können, müssen, dürfen, sollen, wollen, mögen/möchten — meanings, Präteritum without umlaut, “don’t have to” = nicht müssen / nicht brauchen zu.'
  },
  explanation: {
    ru: '<p>Модальный глагол спрягается и стоит на месте 2, а смысловой глагол в <b>инфинитиве без zu</b> уходит в конец: <em>Ich <b>muss</b> heute länger <b>arbeiten</b>.</em> В 1-м и 3-м лице ед. ч. окончания нет: <em>ich kann, er kann</em>.</p>' +
      '<ul>' +
      '<li><b>können</b> — уметь / иметь возможность; <b>dürfen</b> — разрешено; <b>nicht dürfen</b> — запрещено.</li>' +
      '<li><b>müssen</b> — необходимость; <b>nicht müssen</b> = <b>nicht brauchen zu</b> — «не обязательно».</li>' +
      '<li><b>sollen</b> — чужое требование или совет («мне велели»); <b>wollen</b> — собственное намерение.</li>' +
      '<li><b>möchten</b> — вежливое желание (форма от mögen); <b>mögen</b> + существительное — нравиться.</li>' +
      '</ul>' +
      '<p><b>Präteritum</b> — главное прошедшее для модальных (и в устной речи тоже): <b>-te</b> и <b>без умлаута</b>: <em>konnte, musste, durfte, wollte, sollte, mochte</em>. Для möchten в прошлом используют <em>wollte</em>.</p>' +
      '<p><b>Perfekt</b> с другим глаголом — два инфинитива в конце: <em>Ich habe gestern arbeiten <b>müssen</b>.</em> Это громоздко, поэтому обычно говорят <em>Ich musste gestern arbeiten.</em></p>',
    en: '<p>The modal is conjugated in position 2; the main verb goes to the end as an <b>infinitive without zu</b>: <em>Ich <b>muss</b> heute länger <b>arbeiten</b>.</em> The 1st and 3rd person singular have no ending: <em>ich kann, er kann</em>.</p>' +
      '<ul>' +
      '<li><b>können</b> — can / be able to; <b>dürfen</b> — be allowed to; <b>nicht dürfen</b> — must not.</li>' +
      '<li><b>müssen</b> — have to; <b>nicht müssen</b> = <b>nicht brauchen zu</b> — don’t have to.</li>' +
      '<li><b>sollen</b> — someone else’s demand or advice (“I’m supposed to”); <b>wollen</b> — your own intention.</li>' +
      '<li><b>möchten</b> — polite “would like” (a form of mögen); <b>mögen</b> + noun — to like.</li>' +
      '</ul>' +
      '<p>The <b>Präteritum</b> is the normal past for modals (in speech too): <b>-te</b> and <b>no umlaut</b>: <em>konnte, musste, durfte, wollte, sollte, mochte</em>. For the past of möchten use <em>wollte</em>.</p>' +
      '<p>The <b>Perfekt</b> with another verb ends in two infinitives: <em>Ich habe gestern arbeiten <b>müssen</b>.</em> It is clumsy, so people usually say <em>Ich musste gestern arbeiten.</em></p>'
  },
  tables: [
    {
      caption: { ru: 'Präsens и Präteritum', en: 'Present and Präteritum' },
      head: { ru: ['Инфинитив', 'ich / er', 'wir / sie', 'Präteritum (ich)'], en: ['Infinitive', 'ich / er', 'wir / sie', 'Präteritum (ich)'] },
      deCols: [0, 1, 2, 3],
      rows: [
        ['können', 'kann', 'können', 'konnte'],
        ['müssen', 'muss', 'müssen', 'musste'],
        ['dürfen', 'darf', 'dürfen', 'durfte'],
        ['sollen', 'soll', 'sollen', 'sollte'],
        ['wollen', 'will', 'wollen', 'wollte'],
        ['mögen', 'mag', 'mögen', 'mochte'],
        ['möchten', 'möchte', 'möchten', '(wollte)']
      ]
    }
  ],
  examples: [
    { de: 'Hier [[darf]] man nicht parken.', ru: 'Здесь нельзя парковаться.', en: 'You’re not allowed to park here.' },
    { de: 'Du [[musst]] nicht kommen, wenn du keine Zeit hast.', ru: 'Тебе не обязательно приходить, если нет времени.', en: 'You don’t have to come if you don’t have time.' },
    { de: 'Der Arzt sagt, ich [[soll]] mehr schlafen.', ru: 'Врач говорит, что мне надо больше спать.', en: 'The doctor says I should sleep more.' },
    { de: 'Als Kind [[konnte]] ich nicht schwimmen.', ru: 'В детстве я не умел плавать.', en: 'As a child I couldn’t swim.' },
    { de: 'Wir [[wollten]] eigentlich früher losfahren.', ru: 'Вообще-то мы хотели выехать раньше.', en: 'We actually wanted to leave earlier.' },
    { de: 'Du [[brauchst]] das Formular nicht auszudrucken.', ru: 'Форму распечатывать не нужно.', en: 'You don’t need to print the form.' }
  ],
  pitfalls: [
    {
      title: { ru: 'nicht müssen ≠ «нельзя»', en: 'nicht müssen ≠ must not' },
      html: {
        ru: '<span class="right">Du musst nicht kommen</span> — «можешь не приходить». Запрет — <span class="right">Du darfst nicht kommen</span>. Англоговорящие путают с <em>must not</em>, русскоговорящие — с «не должен».',
        en: '<span class="right">Du musst nicht kommen</span> means “you don’t have to come”. A ban is <span class="right">Du darfst nicht kommen</span>. English “must not” is <b>nicht dürfen</b>, not nicht müssen.'
      }
    },
    {
      title: { ru: 'Без zu после модального', en: 'No zu after a modal' },
      html: {
        ru: '<span class="wrong">Ich muss zu arbeiten.</span> → <span class="right">Ich muss arbeiten.</span> Но у brauchen — с zu: <span class="right">Ich brauche nicht zu arbeiten.</span>',
        en: '<span class="wrong">Ich muss zu arbeiten.</span> → <span class="right">Ich muss arbeiten.</span> But brauchen takes zu: <span class="right">Ich brauche nicht zu arbeiten.</span>'
      }
    },
    {
      title: { ru: 'Präteritum без умлаута', en: 'No umlaut in the Präteritum' },
      html: {
        ru: '<span class="wrong">ich könnte</span> в прошлом — это Konjunktiv II («я мог бы»). Прошедшее — <span class="right">ich konnte</span>, <span class="right">ich musste</span>, <span class="right">ich durfte</span>.',
        en: '<span class="wrong">ich könnte</span> is Konjunktiv II (“I could / would be able to”). The past is <span class="right">ich konnte</span>, <span class="right">ich musste</span>, <span class="right">ich durfte</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-mv-d1', kind: 'choice',
      q: 'Im Krankenhaus ___ man nicht telefonieren.',
      options: ['darf', 'muss', 'will'],
      answer: 0,
      explain: { ru: 'Запрет → nicht dürfen.', en: 'A ban → nicht dürfen.' }
    },
    {
      id: 'g-mv-d2', kind: 'choice',
      q: 'Morgen ist Feiertag, wir ___ nicht arbeiten.',
      options: ['dürfen', 'müssen', 'sollen'],
      answer: 1,
      explain: { ru: '«не обязаны» → nicht müssen.', en: '“don’t have to” → nicht müssen.' }
    },
    {
      id: 'g-mv-d3', kind: 'gap',
      q: 'Gestern ___ ich leider nicht kommen. (können, Präteritum)',
      answer: 'konnte',
      explain: { ru: 'Präteritum без умлаута: konnte.', en: 'Präteritum without umlaut: konnte.' }
    },
    {
      id: 'g-mv-d4', kind: 'gap',
      q: 'Als Kind ___ ich keinen Spinat. (mögen, Präteritum)',
      answer: 'mochte',
      explain: { ru: 'mögen → mochte (с -ch-).', en: 'mögen → mochte (with -ch-).' }
    },
    {
      id: 'g-mv-d5', kind: 'choice',
      q: 'Meine Chefin sagt, ich ___ den Bericht bis Freitag schicken.',
      options: ['soll', 'will', 'mag'],
      answer: 0,
      explain: { ru: 'Чужое требование → sollen.', en: 'Someone else’s demand → sollen.' }
    },
    {
      id: 'g-mv-d6', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Тебе не нужно мне помогать».', en: 'Build the sentence. “You don’t need to help me.”' },
      tokens: ['Du', 'brauchst', 'mir', 'nicht', 'zu', 'helfen.'],
      answer: 'Du brauchst mir nicht zu helfen.',
      explain: { ru: 'nicht brauchen + zu + инфинитив.', en: 'nicht brauchen + zu + infinitive.' }
    }
  ]
});
