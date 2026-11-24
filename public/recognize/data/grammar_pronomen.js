/* German GRAMMAR · B1 · Personal and possessive pronouns: ich / mich / mir, er → ihn → ihm, sein vs ihr, euer → eure.
 * Explanations ru + en inline, original examples. */
GT.registerGrammar({
  id: 'pronomen',
  level: 'B1',
  title: { ru: 'Личные и притяжательные местоимения', en: 'Personal and possessive pronouns' },
  summary: {
    ru: 'ich → mich → mir, er → ihn → ihm. sein или ihr, почему нет слова «свой» и откуда окончание у meinem / unserer.',
    en: 'ich → mich → mir, er → ihn → ihm. sein or ihr, “it” for things is er / sie / es, and the endings on meinem / unserer.'
  },
  explanation: {
    ru: '<p><b>Личные местоимения</b> меняются по падежам почти как в русском: <em>ich – mich – mir</em> ≈ «я – меня – мне». Самые частые ошибки — <em>ihn</em> (его, Akk) и <em>ihm</em> (ему, Dat): <em>Ich sehe <b>ihn</b>. Ich helfe <b>ihm</b>.</em> Вежливое <b>Sie</b> и его формы пишутся с заглавной: <em>Sie, Ihnen, Ihr</em>.</p>' +
      '<p>Для вещей местоимение выбирается <b>по роду слова</b>, как в русском: <em>Der Tisch? <b>Er</b> ist neu. Die Lampe? <b>Sie</b> ist kaputt.</em></p>' +
      '<p><b>Притяжательные местоимения:</b> <em>mein, dein, sein, ihr, sein, unser, euer, ihr, Ihr</em>. Основа зависит от <b>владельца</b>: <em>sein</em> — если владелец er или es, <em>ihr</em> — если владелец sie (она) или sie (они). А <b>окончание</b> зависит от того, <b>чем владеют</b>, и совпадает с окончаниями <em>ein / kein</em>: <em>mein Bruder, meine Schwester, mit meinem Bruder, mit meiner Schwester</em>.</p>' +
      '<p><b>Слова «свой» в немецком нет.</b> По-русски «Анна взяла свою сумку», по-немецки нужно выбрать по владельцу: <em>Anna nimmt <b>ihre</b> Tasche. Tom nimmt <b>seine</b> Tasche. Ich nehme <b>meine</b> Tasche.</em></p>' +
      '<p><b>euer</b> теряет -e-, если есть окончание: <em>euer Auto</em>, но <em>eure Wohnung, mit eurem Hund</em>. У <em>unser</em> -e- остаётся: <em>unsere, unserem</em>.</p>',
    en: '<p><b>Personal pronouns</b> change for case like English “I – me”, but German has three forms: <em>ich – mich – mir</em>. The ones to watch are <em>ihn</em> (him, Akk) and <em>ihm</em> (him, Dat): <em>Ich sehe <b>ihn</b>. Ich helfe <b>ihm</b>.</em> Polite <b>Sie</b> and its forms are capitalised: <em>Sie, Ihnen, Ihr</em>.</p>' +
      '<p><b>“It” is not always es.</b> For things, German uses the gender of the noun: <em>Der Tisch? <b>Er</b> ist neu. Die Lampe? <b>Sie</b> ist kaputt. Den Film? Ich finde <b>ihn</b> gut.</em> Only das-nouns take es.</p>' +
      '<p><b>Possessives:</b> <em>mein, dein, sein, ihr, sein, unser, euer, ihr, Ihr</em>. As in English, the stem follows the <b>owner</b>: <em>sein</em> = his / its, <em>ihr</em> = her / their, <em>Ihr</em> = your (polite). But the <b>ending</b> follows the <b>thing owned</b> — its gender and case — exactly like <em>ein / kein</em>: <em>mein Bruder, meine Schwester, mit meinem Bruder, mit meiner Schwester</em>.</p>' +
      '<p><b>ihr has three meanings:</b> her, their, and (capitalised) your. Context and capitals decide: <em>Die Kinder machen <b>ihre</b> Hausaufgaben</em> (their). <em>Herr Klein, ist das <b>Ihr</b> Koffer?</em> (your).</p>' +
      '<p><b>euer</b> drops its second e when an ending follows: <em>euer Auto</em>, but <em>eure Wohnung, mit eurem Hund</em>. <em>unser</em> keeps it: <em>unsere, unserem</em>.</p>'
  },
  tables: [
    {
      caption: { ru: 'Личные местоимения', en: 'Personal pronouns' },
      head: { ru: ['Nominativ', 'Akkusativ', 'Dativ', 'Притяжательное'], en: ['Nominativ', 'Akkusativ', 'Dativ', 'Possessive'] },
      deCols: [0, 1, 2, 3],
      rows: [
        ['ich', 'mich', 'mir', 'mein'],
        ['du', 'dich', 'dir', 'dein'],
        ['er', 'ihn', 'ihm', 'sein'],
        ['sie', 'sie', 'ihr', 'ihr'],
        ['es', 'es', 'ihm', 'sein'],
        ['wir', 'uns', 'uns', 'unser'],
        ['ihr', 'euch', 'euch', 'euer'],
        ['sie', 'sie', 'ihnen', 'ihr'],
        ['Sie', 'Sie', 'Ihnen', 'Ihr']
      ]
    },
    {
      caption: { ru: 'Окончания притяжательных (как у ein / kein)', en: 'Possessive endings (like ein / kein)' },
      head: { ru: ['Падеж', 'муж. р.', 'жен. р.', 'ср. р.', 'мн. ч.'], en: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'] },
      deCols: [1, 2, 3, 4],
      rows: [
        ['Nominativ', 'mein', 'meine', 'mein', 'meine'],
        ['Akkusativ', 'meinen', 'meine', 'mein', 'meine'],
        ['Dativ', 'meinem', 'meiner', 'meinem', 'meinen + -n'],
        ['Genitiv', 'meines', 'meiner', 'meines', 'meiner']
      ]
    }
  ],
  examples: [
    { de: 'Wo ist dein Schlüssel? — Ich habe [[ihn]] im Auto gelassen.', ru: 'Где твой ключ? — Я оставил его в машине.', en: 'Where’s your key? — I left it in the car.' },
    { de: 'Kannst du [[ihm]] bitte meine Nummer geben?', ru: 'Можешь дать ему мой номер?', en: 'Can you give him my number, please?' },
    { de: 'Anna fährt mit [[ihrem]] Bruder nach Hamburg.', ru: 'Анна едет со своим братом в Гамбург.', en: 'Anna is going to Hamburg with her brother.' },
    { de: 'Wir haben [[unsere]] Wohnung renoviert.', ru: 'Мы отремонтировали нашу квартиру.', en: 'We’ve renovated our flat.' },
    { de: 'Herr Klein, ist das [[Ihr]] Koffer?', ru: 'Господин Кляйн, это ваш чемодан?', en: 'Mr Klein, is this your suitcase?' },
    { de: 'Wie findest du den neuen Film? — Ich finde [[ihn]] spannend.', ru: 'Как тебе новый фильм? — По-моему, он захватывающий.', en: 'What do you think of the new film? — I find it exciting.' }
  ],
  pitfalls: [
    {
      title: { ru: '«свой» → sein / ihr / mein …', en: 'sein vs ihr: look at the owner' },
      html: {
        ru: 'В немецком нет «свой», поэтому русскоязычные часто ставят <em>sein</em> везде: <span class="wrong">Maria ruft seinen Mann an.</span> → <span class="right">Maria ruft ihren Mann an.</span> Владелец — Maria (она) → <em>ihr-</em>; муж — мужского рода, Akkusativ → <em>-en</em>.',
        en: 'The stem follows the owner, as in English: Maria’s husband → <span class="right">ihren Mann</span>, not <span class="wrong">seinen Mann</span> just because Mann is masculine. The ending (-en) comes from the husband, the stem (ihr-) from Maria.'
      }
    },
    {
      title: { ru: 'ihn ≠ ihm', en: 'ihn ≠ ihm' },
      html: {
        ru: '«Его» — <span class="right">ihn</span> (Akk), «ему» — <span class="right">ihm</span> (Dat). <span class="wrong">Ich rufe ihm an</span> → <span class="right">Ich rufe ihn an</span> (anrufen + Akk, хотя по-русски «звоню ему»).',
        en: 'English “him” is both: <span class="right">Ich sehe ihn</span> (Akk), <span class="right">Ich helfe ihm</span> (Dat). Verbs like helfen, danken, gefallen take ihm: <span class="wrong">Ich helfe ihn.</span> → <span class="right">Ich helfe ihm.</span>'
      }
    },
    {
      title: { ru: 'Окончание — от того, чем владеют', en: '“it” for der- and die-nouns' },
      html: {
        ru: '<span class="wrong">Ich wohne bei mein Bruder.</span> → <span class="right">Ich wohne bei meinem Bruder.</span> Притяжательное склоняется как ein: bei + Dativ, der Bruder → meinem.',
        en: '<span class="wrong">Der Film? Ich finde es gut.</span> → <span class="right">Ich finde ihn gut.</span> <span class="wrong">Die Suppe? Es ist kalt.</span> → <span class="right">Sie ist kalt.</span> Use er / sie / es by the gender of the noun.'
      }
    }
  ],
  drills: [
    {
      id: 'g-pro-d1', kind: 'choice',
      q: 'Wo ist mein Schlüssel? — Ich habe ___ nicht gesehen.',
      options: ['ihn', 'ihm', 'es'],
      answer: 0,
      explain: { ru: 'der Schlüssel → er; прямое дополнение (Akk) → ihn.', en: 'der Schlüssel → er; direct object (Akk) → ihn.' }
    },
    {
      id: 'g-pro-d2', kind: 'choice',
      q: 'Anna sucht ___ Handy.',
      options: ['ihr', 'sein', 'ihre'],
      answer: 0,
      explain: { ru: 'Владелец Anna → ihr-. das Handy, Akkusativ ср. р. — без окончания: ihr Handy.', en: 'Owner Anna → ihr-. das Handy, neuter Akkusativ — no ending: ihr Handy.' }
    },
    {
      id: 'g-pro-d3', kind: 'choice',
      q: 'Tom besucht am Wochenende ___ Eltern.',
      options: ['seine', 'ihre', 'seinen'],
      answer: 0,
      explain: { ru: 'Владелец Tom → sein-; die Eltern, мн. ч. Akk → seine.', en: 'Owner Tom → sein-; die Eltern, plural Akk → seine.' }
    },
    {
      id: 'g-pro-d4', kind: 'gap',
      q: 'Kannst du ___ bitte die Datei schicken? (wir)',
      answer: 'uns',
      explain: { ru: 'Кому? → Dativ от wir: uns.', en: 'To whom? → Dativ of wir: uns.' }
    },
    {
      id: 'g-pro-d5', kind: 'choice',
      q: 'Wie gefällt ___ die neue Wohnung? (Sie, formal)',
      options: ['Ihnen', 'Sie', 'Ihr'],
      answer: 0,
      explain: { ru: 'gefallen + Dativ; вежливое Sie в Dativ → Ihnen.', en: 'gefallen + Dativ; polite Sie in the Dativ → Ihnen.' }
    },
    {
      id: 'g-pro-d6', kind: 'choice',
      q: 'Kinder, ist das ___ Auto da vorne?',
      options: ['euer', 'eure', 'euren'],
      answer: 0,
      explain: { ru: 'das Auto, Nominativ ср. р. — без окончания: euer.', en: 'das Auto, neuter Nominativ — no ending: euer.' }
    },
    {
      id: 'g-pro-d7', kind: 'choice',
      q: 'Wir fahren mit ___ Kindern in den Urlaub.',
      options: ['unseren', 'unsere', 'unserer'],
      answer: 0,
      explain: { ru: 'mit + Dativ, мн. ч. → unseren (и Kindern с -n).', en: 'mit + Dativ, plural → unseren (and Kindern with -n).' }
    },
    {
      id: 'g-pro-d8', kind: 'gap',
      q: 'Ich habe ___ Schwester ein Buch geschenkt. (mein)',
      answer: 'meiner',
      explain: { ru: 'Кому? → Dativ, die Schwester → meiner.', en: 'To whom? → Dativ, die Schwester → meiner.' }
    },
    {
      id: 'g-pro-d9', kind: 'choice',
      q: 'Wie findest du den Film? — Ich finde ___ langweilig.',
      options: ['ihn', 'es', 'sie'],
      answer: 0,
      explain: { ru: 'der Film → er, Akkusativ → ihn.', en: 'der Film → er, Akkusativ → ihn. Not es: German “it” follows the noun’s gender.' }
    },
    {
      id: 'g-pro-d10', kind: 'choice',
      q: 'Die Kinder haben ___ Hausaufgaben schon gemacht.',
      options: ['ihre', 'seine', 'ihren'],
      answer: 0,
      explain: { ru: 'Владельцы — die Kinder (они) → ihr-; die Hausaufgaben, мн. ч. Akk → ihre.', en: 'Owners die Kinder (they) → ihr-; die Hausaufgaben, plural Akk → ihre.' }
    },
    {
      id: 'g-pro-d11', kind: 'choice',
      q: 'Herr Klein, ist das ___ Koffer?',
      options: ['Ihr', 'ihr', 'sein'],
      answer: 0,
      explain: { ru: 'Обращение на Sie → Ihr с заглавной буквы.', en: 'Speaking to someone as Sie → capital Ihr (“your”).' }
    },
    {
      id: 'g-pro-d12', kind: 'gap',
      q: 'Das ist nicht mein Problem, das ist ___ Problem! (du)',
      answer: 'dein',
      explain: { ru: 'das Problem, Nominativ ср. р. → dein без окончания.', en: 'das Problem, neuter Nominativ → dein with no ending.' }
    },
    {
      id: 'g-pro-d13', kind: 'reorder',
      q: { ru: 'Соберите вопрос. «Можешь дать мне свой номер телефона?»', en: 'Build the question. “Can you give me your phone number?”' },
      tokens: ['Kannst', 'du', 'mir', 'deine Telefonnummer', 'geben?'],
      answer: 'Kannst du mir deine Telefonnummer geben?',
      explain: { ru: '«свой» при du → dein-; die Telefonnummer, Akk → deine. Местоимение mir стоит перед существительным.', en: 'The owner is du → dein-; die Telefonnummer, Akk → deine. The pronoun mir comes before the noun.' }
    }
  ]
});
