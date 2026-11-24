/* German GRAMMAR · Adjektivdeklination: endings after der-words, ein-words and with no article.
 * Explanations ru + en inline, original examples. */
GT.registerGrammar({
  id: 'adjektive',
  title: { ru: 'Окончания прилагательных · Adjektivdeklination', en: 'Adjective endings · Adjektivdeklination' },
  summary: {
    ru: 'Падеж и род должны где-то показаться. Если артикль их уже показал — у прилагательного -e или -en. Если нет — окончание берёт на себя прилагательное.',
    en: 'Case and gender have to show somewhere. If the article already shows them, the adjective takes -e or -en. If not, the adjective carries the signal itself.'
  },
  explanation: {
    ru: '<p>Прилагательное перед существительным всегда получает окончание: <em>der neue Kollege</em>, <em>ein neuer Kollege</em>, <em>neuer Kaffee</em>. После глагола <em>sein, werden, bleiben</em> окончания нет: <em>Der Kollege ist neu.</em></p>' +
      '<p><b>Главный принцип — один сигнал на группу.</b> Сигнал рода и падежа — это окончания <em>-r, -s, -e, -m, -n</em> из таблицы артиклей (<em>der, das, die, dem, den</em>). Если артикль уже показал сигнал, прилагательному остаётся «слабое» <em>-e</em> или <em>-en</em>. Если артикля нет или он «молчит», сигнал переходит на прилагательное.</p>' +
      '<p><b>1. После der, dieser, jeder, welcher (слабый тип).</b> Всего два окончания: <em>-e</em> в пяти формах (Nominativ всех родов в единственном числе и Akkusativ женского и среднего рода), во всех остальных — <em>-en</em>. <em>Der neue Kollege, die neue Kollegin, das neue Büro, den neuen Kollegen, mit dem neuen Kollegen, die neuen Kollegen.</em></p>' +
      '<p><b>2. После ein, kein, mein, unser (смешанный тип).</b> Как слабый, кроме трёх мест, где у <em>ein</em> нет окончания: Nominativ мужского рода и Nominativ/Akkusativ среднего. Там прилагательное берёт сигнал на себя: <em>ein neu<b>er</b> Kollege, ein neu<b>es</b> Büro</em>.</p>' +
      '<p><b>3. Без артикля (сильный тип).</b> Прилагательное получает окончание определённого артикля: <em>heiß<b>er</b> Kaffee (der), kalt<b>es</b> Wasser (das), frisch<b>e</b> Milch (die), mit heiß<b>em</b> Wasser (dem)</em>. Так же после чисел и слов <em>viele, einige, wenige, mehrere</em>: <em>zwei neue Kollegen</em>.</p>',
    en: '<p>An adjective before a noun always takes an ending: <em>der neue Kollege</em>, <em>ein neuer Kollege</em>, <em>neuer Kaffee</em>. After <em>sein, werden, bleiben</em> it takes none: <em>Der Kollege ist neu.</em></p>' +
      '<p><b>The key idea: one signal per noun phrase.</b> The signal for gender and case is one of the endings <em>-r, -s, -e, -m, -n</em> from the article table (<em>der, das, die, dem, den</em>). If the article already shows it, the adjective takes a “weak” <em>-e</em> or <em>-en</em>. If there is no article, or the article is silent, the adjective carries the signal.</p>' +
      '<p><b>1. After der, dieser, jeder, welcher (weak).</b> Only two endings: <em>-e</em> in five forms (the singular Nominativ of all genders, plus the feminine and neuter Akkusativ), and <em>-en</em> everywhere else. <em>Der neue Kollege, die neue Kollegin, das neue Büro, den neuen Kollegen, mit dem neuen Kollegen, die neuen Kollegen.</em></p>' +
      '<p><b>2. After ein, kein, mein, unser (mixed).</b> Like the weak type, except in the three places where <em>ein</em> has no ending: masculine Nominativ and neuter Nominativ/Akkusativ. There the adjective takes the signal: <em>ein neu<b>er</b> Kollege, ein neu<b>es</b> Büro</em>.</p>' +
      '<p><b>3. No article (strong).</b> The adjective takes the ending of the definite article: <em>heiß<b>er</b> Kaffee (der), kalt<b>es</b> Wasser (das), frisch<b>e</b> Milch (die), mit heiß<b>em</b> Wasser (dem)</em>. The same after numbers and <em>viele, einige, wenige, mehrere</em>: <em>zwei neue Kollegen</em>.</p>'
  },
  tables: [
    {
      caption: { ru: 'После der / dieser (слабый тип)', en: 'After der / dieser (weak)' },
      head: { ru: ['Падеж', 'муж. р.', 'жен. р.', 'ср. р.', 'мн. ч.'], en: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'] },
      deCols: [1, 2, 3, 4],
      rows: {
        ru: [
          ['Nominativ', 'der neue Tisch', 'die neue Lampe', 'das neue Sofa', 'die neuen Stühle'],
          ['Akkusativ', 'den neuen Tisch', 'die neue Lampe', 'das neue Sofa', 'die neuen Stühle'],
          ['Dativ', 'dem neuen Tisch', 'der neuen Lampe', 'dem neuen Sofa', 'den neuen Stühlen'],
          ['Genitiv', 'des neuen Tisches', 'der neuen Lampe', 'des neuen Sofas', 'der neuen Stühle']
        ],
        en: [
          ['Nominativ', 'der neue Tisch', 'die neue Lampe', 'das neue Sofa', 'die neuen Stühle'],
          ['Akkusativ', 'den neuen Tisch', 'die neue Lampe', 'das neue Sofa', 'die neuen Stühle'],
          ['Dativ', 'dem neuen Tisch', 'der neuen Lampe', 'dem neuen Sofa', 'den neuen Stühlen'],
          ['Genitiv', 'des neuen Tisches', 'der neuen Lampe', 'des neuen Sofas', 'der neuen Stühle']
        ]
      }
    },
    {
      caption: { ru: 'После ein / kein / mein (смешанный тип)', en: 'After ein / kein / mein (mixed)' },
      head: { ru: ['Падеж', 'муж. р.', 'жен. р.', 'ср. р.', 'мн. ч. (kein / mein)'], en: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural (kein / mein)'] },
      deCols: [1, 2, 3, 4],
      rows: {
        ru: [
          ['Nominativ', 'ein neuer Tisch', 'eine neue Lampe', 'ein neues Sofa', 'meine neuen Stühle'],
          ['Akkusativ', 'einen neuen Tisch', 'eine neue Lampe', 'ein neues Sofa', 'meine neuen Stühle'],
          ['Dativ', 'einem neuen Tisch', 'einer neuen Lampe', 'einem neuen Sofa', 'meinen neuen Stühlen'],
          ['Genitiv', 'eines neuen Tisches', 'einer neuen Lampe', 'eines neuen Sofas', 'meiner neuen Stühle']
        ],
        en: [
          ['Nominativ', 'ein neuer Tisch', 'eine neue Lampe', 'ein neues Sofa', 'meine neuen Stühle'],
          ['Akkusativ', 'einen neuen Tisch', 'eine neue Lampe', 'ein neues Sofa', 'meine neuen Stühle'],
          ['Dativ', 'einem neuen Tisch', 'einer neuen Lampe', 'einem neuen Sofa', 'meinen neuen Stühlen'],
          ['Genitiv', 'eines neuen Tisches', 'einer neuen Lampe', 'eines neuen Sofas', 'meiner neuen Stühle']
        ]
      }
    },
    {
      caption: { ru: 'Без артикля (сильный тип)', en: 'No article (strong)' },
      head: { ru: ['Падеж', 'муж. р.', 'жен. р.', 'ср. р.', 'мн. ч.'], en: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'] },
      deCols: [1, 2, 3, 4],
      rows: {
        ru: [
          ['Nominativ', 'heißer Tee', 'frische Milch', 'kaltes Wasser', 'neue Stühle'],
          ['Akkusativ', 'heißen Tee', 'frische Milch', 'kaltes Wasser', 'neue Stühle'],
          ['Dativ', 'mit heißem Tee', 'mit frischer Milch', 'mit kaltem Wasser', 'mit neuen Stühlen'],
          ['Genitiv', 'heißen Tees', 'frischer Milch', 'kalten Wassers', 'neuer Stühle']
        ],
        en: [
          ['Nominativ', 'heißer Tee', 'frische Milch', 'kaltes Wasser', 'neue Stühle'],
          ['Akkusativ', 'heißen Tee', 'frische Milch', 'kaltes Wasser', 'neue Stühle'],
          ['Dativ', 'mit heißem Tee', 'mit frischer Milch', 'mit kaltem Wasser', 'mit neuen Stühlen'],
          ['Genitiv', 'heißen Tees', 'frischer Milch', 'kalten Wassers', 'neuer Stühle']
        ]
      }
    }
  ],
  examples: [
    { de: 'Der [[neue]] Kollege kommt aus Hamburg.', ru: 'Новый коллега из Гамбурга.', en: 'The new colleague is from Hamburg.' },
    { de: 'Wir suchen eine [[größere]] Wohnung mit einem [[kleinen]] Garten.', ru: 'Мы ищем квартиру побольше с маленьким садом.', en: 'We’re looking for a bigger flat with a small garden.' },
    { de: 'Das ist ein [[gutes]] Angebot.', ru: 'Это хорошее предложение.', en: 'That’s a good offer.' },
    { de: 'Ich trinke morgens gern [[starken]] Kaffee.', ru: 'По утрам я люблю крепкий кофе.', en: 'I like strong coffee in the morning.' },
    { de: 'Mit [[freundlichen]] Grüßen', ru: 'С уважением (подпись в письме)', en: 'Kind regards (letter sign-off)' },
    { de: 'Sie hat zwei [[kleine]] Kinder.', ru: 'У неё двое маленьких детей.', en: 'She has two small children.' }
  ],
  pitfalls: [
    {
      title: { ru: 'После sein — без окончания', en: 'No ending after sein' },
      html: {
        ru: 'В русском «новый» меняется и после «быть»: «он новый». В немецком после <em>sein, werden, bleiben</em> прилагательное стоит в базовой форме: <span class="right">Die Wohnung ist groß</span>, не <span class="wrong">ist große</span>.',
        en: 'After <em>sein, werden, bleiben</em> the adjective takes no ending: <span class="right">Die Wohnung ist groß</span>, not <span class="wrong">ist große</span>.'
      }
    },
    {
      title: { ru: 'ein + средний род: -es', en: 'ein + neuter: -es' },
      html: {
        ru: '<em>Ein</em> не показывает, что слово среднего рода, поэтому это делает прилагательное: <span class="right">ein schönes Haus</span>, <span class="right">Ich habe ein neues Handy</span>. Частая ошибка — <span class="wrong">ein schöne Haus</span>.',
        en: '<em>Ein</em> doesn’t show that the noun is neuter, so the adjective does: <span class="right">ein schönes Haus</span>, <span class="right">Ich habe ein neues Handy</span>. A common mistake is <span class="wrong">ein schöne Haus</span>.'
      }
    },
    {
      title: { ru: 'Множественное число после kein / mein: -en', en: 'Plural after kein / mein: -en' },
      html: {
        ru: 'Без артикля во множественном числе <span class="right">neue Schuhe</span>, но после <em>keine, meine, diese</em> всегда <em>-en</em>: <span class="right">meine neuen Schuhe</span>, <span class="right">keine guten Nachrichten</span>.',
        en: 'With no article the plural is <span class="right">neue Schuhe</span>, but after <em>keine, meine, diese</em> it is always <em>-en</em>: <span class="right">meine neuen Schuhe</span>, <span class="right">keine guten Nachrichten</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-adj-d1', kind: 'choice',
      q: 'Der ___ Bahnhof ist sehr modern.',
      options: ['neue', 'neuen', 'neuer'],
      answer: 0,
      explain: { ru: 'После der в Nominativ единственного числа: -e.', en: 'After der in the singular Nominativ: -e.' }
    },
    {
      id: 'g-adj-d2', kind: 'choice',
      q: 'Wir haben einen ___ Hund.',
      options: ['kleine', 'kleinen', 'kleiner'],
      answer: 1,
      explain: { ru: 'Akkusativ мужского рода: einen показывает сигнал -n, прилагательное — слабое -en.', en: 'Masculine Akkusativ: einen carries the -n signal, so the adjective takes weak -en.' }
    },
    {
      id: 'g-adj-d3', kind: 'choice',
      q: 'Das ist ein ___ Restaurant.',
      options: ['gute', 'guten', 'gutes'],
      answer: 2,
      explain: { ru: 'Ein в среднем роде без окончания, поэтому сигнал -s переходит на прилагательное: gutes.', en: 'Neuter ein has no ending, so the adjective takes the -s signal: gutes.' }
    },
    {
      id: 'g-adj-d4', kind: 'choice',
      q: 'Ich wohne in einer ___ Stadt.',
      options: ['kleinen', 'kleine', 'kleiner'],
      answer: 0,
      explain: { ru: 'In + Dativ (wo?). Einer уже показывает Dativ, прилагательное — -en.', en: 'In + Dativ (wo?). Einer already shows the Dativ, so the adjective takes -en.' }
    },
    {
      id: 'g-adj-d5', kind: 'gap',
      q: 'Ich trinke gern ___ Tee. (schwarz)',
      hint: { ru: 'Артикля нет; Tee мужского рода, Akkusativ.', en: 'No article; Tee is masculine, Akkusativ.' },
      answer: 'schwarzen',
      explain: { ru: 'Без артикля прилагательное берёт окончание артикля den: schwarzen.', en: 'With no article, the adjective takes the ending of den: schwarzen.' }
    },
    {
      id: 'g-adj-d6', kind: 'gap',
      q: 'Mit ___ Grüßen, Anna Müller (freundlich)',
      hint: { ru: 'Dativ множественного числа без артикля.', en: 'Dativ plural, no article.' },
      answer: 'freundlichen',
      explain: { ru: 'Mit + Dativ, мн. ч. без артикля: окончание как у den → freundlichen.', en: 'Mit + Dativ plural with no article: the ending of den → freundlichen.' }
    },
    {
      id: 'g-adj-d7', kind: 'choice',
      q: 'Meine ___ Schuhe sind zu klein.',
      options: ['neue', 'neuen', 'neuer'],
      answer: 1,
      explain: { ru: 'Во множественном числе после meine всегда -en.', en: 'In the plural after meine, always -en.' }
    },
    {
      id: 'g-adj-d8', kind: 'choice',
      q: 'Die Wohnung ist wirklich ___.',
      options: ['schön', 'schöne', 'schönes'],
      answer: 0,
      explain: { ru: 'После sein прилагательное без окончания.', en: 'After sein the adjective takes no ending.' }
    },
    {
      id: 'g-adj-d9', kind: 'choice',
      q: 'Wir suchen eine Wohnung mit ___ Balkon.',
      options: ['großem', 'großen', 'großer'],
      answer: 0,
      explain: { ru: 'mit + Dativ, артикля нет → сильное окончание: großem (как dem).', en: 'mit + Dativ with no article → strong ending: großem (like dem).' }
    },
    {
      id: 'g-adj-d10', kind: 'choice',
      q: 'Bei dem ___ Wetter bleiben wir lieber zu Hause.',
      options: ['schlechten', 'schlechte', 'schlechtem'],
      answer: 0,
      explain: { ru: 'После dem артикль уже показал падеж → -en.', en: 'After dem the article already shows the case → -en.' }
    },
    {
      id: 'g-adj-d11', kind: 'gap',
      q: 'Wo ist der Schlüssel des ___ Autos? (neu)',
      answer: 'neuen',
      explain: { ru: 'Genitiv после des → -en.', en: 'Genitiv after des → -en.' }
    },
    {
      id: 'g-adj-d12', kind: 'choice',
      q: 'Für den Termin beim Amt brauchen Sie einen ___ Pass.',
      options: ['gültigen', 'gültiger', 'gültigem'],
      answer: 0,
      explain: { ru: 'einen (Akk м. р.) показал падеж → -en.', en: 'einen (masc. Akk) already shows the case → -en.' }
    },
    {
      id: 'g-adj-d13', kind: 'gap',
      q: 'Ich wünsche Ihnen ein ___ Wochenende! (schön)',
      answer: 'schönes',
      explain: { ru: 'ein + ср. р. Akk: у ein нет окончания → прилагательное берёт -es.', en: 'ein + neuter Akk: ein has no ending → the adjective takes -es.' }
    },
    {
      id: 'g-adj-d14', kind: 'choice',
      q: '___ Kundinnen und Kunden, ab Montag haben wir neue Öffnungszeiten.',
      options: ['Liebe', 'Lieben', 'Lieber'],
      answer: 0,
      explain: { ru: 'Мн. ч. без артикля, Nominativ → -e: Liebe.', en: 'Plural with no article, Nominativ → -e: Liebe.' }
    },
    {
      id: 'g-adj-d15', kind: 'gap',
      q: 'Bei ___ Wetter fahre ich mit dem Rad zur Arbeit. (gut)',
      answer: 'gutem',
      explain: { ru: 'bei + Dativ без артикля → сильное -em: bei gutem Wetter.', en: 'bei + Dativ with no article → strong -em: bei gutem Wetter.' }
    },
    {
      id: 'g-adj-d16', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Мы нашли маленькую квартиру с большим садом».', en: 'Build the sentence. “We found a small flat with a big garden.”' },
      tokens: ['Wir', 'haben', 'eine kleine Wohnung', 'mit großem Garten', 'gefunden.'],
      answer: 'Wir haben eine kleine Wohnung mit großem Garten gefunden.',
      explain: { ru: 'eine kleine (Akk ж. р. → -e), mit großem (Dativ без артикля → -em).', en: 'eine kleine (fem. Akk → -e), mit großem (Dativ, no article → -em).' }
    }
  ]
});
