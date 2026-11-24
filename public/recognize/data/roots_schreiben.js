/* ROOT: schreiben. Learning content in Russian (ru); English meanings inline (en) for "I know: English".
 * Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, meaningType, why. */
GT.registerRoot({
  id: 'schreiben', verb: 'schreiben', ru: 'писать', en: 'to write',
  words: [
    {
      id: 'r-schreiben-schreiben', base: true, pos: 'verb',
      de: 'schreiben', forms: { praes: 'schreibt', praet: 'schrieb', perf: 'hat geschrieben' }, gov: '+ Akk. · an + Akk.',
      ru: 'писать', en: 'to write',
      examples: [
        { de: 'Ich [[schreibe]] dir später eine kurze Mail.', ru: 'Я напишу тебе позже короткое письмо.', en: 'I’ll write you a short email later.' },
        { de: 'Wie [[schreibt]] man Ihren Namen?', ru: 'Как пишется ваша фамилия?', en: 'How do you spell your name?' }
      ],
      morph: 'schreib-en',
      note: 'Сильный глагол: schrieb, hat geschrieben. «Wie schreibt man das?» — как это пишется? Писать кому-то: «jemandem schreiben» или «an jemanden schreiben».',
      i18n: { en: { note: 'Strong verb: schrieb, hat geschrieben. “Wie schreibt man das?” — how do you spell that? Write to someone: “jemandem schreiben” or “an jemanden schreiben”.' } },
      why: {
        confidence: 'high',
        root: 'schreiben',
        text: 'Состав: корневой сильный глагол schreib- + -en.\nПроисхождение: раннее заимствование из латинского scribere («писать, царапать») вместе с римской письменной культурой; др.-в.-нем. scrīban. От него: Schrift, Unterschrift, Vorschrift, schriftlich.\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. schreiben',
        evidence: 'Др.-в.-нем. scrīban (VIII в.) — заимствование из лат. scrībere; германское исконное слово для «писать» было вытеснено.',
        i18n: { en: {
          text: 'Composition: strong root verb schreib- + -en.\nOrigin: an early loan from Latin scribere (“to write, to scratch”), borrowed together with Roman writing culture; Old High German scrīban. From it: Schrift, Unterschrift, Vorschrift, schriftlich.\nTransparency: base root of the family.',
          evidence: 'OHG scrīban (8th c.) — borrowed from Latin scrībere; it replaced the native Germanic word for “write”.' } }
      }
    },
    {
      id: 'r-schreiben-aufschreiben', prefix: 'auf', sep: 'trennbar', stress: 'áufschreiben', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'aufschreiben', forms: { praes: 'schreibt auf', praet: 'schrieb auf', perf: 'hat aufgeschrieben' }, gov: '+ Akk.',
      ru: 'записывать (чтобы не забыть)', en: 'to write down, to note down',
      parallel: 'ЗАписать',
      drill: { ru: 'записать (номер, идею)', en: 'to write down (a number, an idea)', de: 'die Telefonnummer ___schreiben' },
      examples: [{ de: 'Moment, ich [[schreibe]] mir die Ticketnummer kurz [[auf]].', ru: 'Минутку, я быстро запишу номер тикета.', en: 'Hang on, I’ll just write down the ticket number.' }],
      morph: 'auf-schreib-en',
      note: 'Частое «sich (Dat.) etwas aufschreiben» — записать себе. Не путать с «unterschreiben» (подписать).',
      i18n: { en: { note: 'Common: “sich (dat.) etwas aufschreiben” — to make a note of something. Don’t confuse with “unterschreiben” (to sign).' } }
    },
    {
      id: 'r-schreiben-abschreiben', prefix: 'ab', sep: 'trennbar', stress: 'ábschreiben', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'abschreiben', forms: { praes: 'schreibt ab', praet: 'schrieb ab', perf: 'hat abgeschrieben' }, gov: '+ Akk.',
      ru: 'списывать, переписывать (у кого-то); списывать (со счетов, в убыток)', en: 'to copy (from someone); to write off',
      parallel: 'СПИСывать',
      drill: { ru: 'списывать (на экзамене)', en: 'to copy (in an exam)', de: 'vom Nachbarn ___schreiben' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'ab- = «от, с источника»: текст «снимают» с чужой работы — списывают.' },
      examples: [
        { sense: 'списывать (копировать чужое)', de: 'Er hat die Lösung einfach aus dem Internet [[abgeschrieben]].', ru: 'Он просто списал решение из интернета.', en: 'He simply copied the solution from the internet.' },
        { sense: 'списывать со счетов (перен.)', de: 'Das alte Projekt haben wir längst [[abgeschrieben]].', ru: 'Старый проект мы давно списали со счетов.', en: 'We wrote off the old project long ago.' }
      ],
      morph: 'ab-schreib-en',
      meaningType: 'polysemous',
      meaningExplanation: 'abschreiben — и «списывать/переписывать текст», и бухгалтерское «списывать стоимость» (амортизация), и переносное «поставить крест на чём-то».',
      meaningExamples: [{ de: 'die Hausaufgaben abschreiben', ru: 'списывать домашнее задание' }, { de: 'einen Laptop über drei Jahre abschreiben', ru: 'амортизировать ноутбук за три года' }],
      note: 'Совпадает с русским «списывать» во всех трёх значениях. Существительное: die Abschreibung (амортизация).',
      i18n: { en: {
        meaningExplanation: 'abschreiben means copying a text, the accounting “write-off” (depreciation), and figuratively “to give up on something”.',
        note: 'Noun: die Abschreibung (depreciation).' } }
    },
    {
      id: 'r-schreiben-beschreiben', prefix: 'be', sep: 'untrennbar', stress: 'beschréiben', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'beschreiben', forms: { praes: 'beschreibt', praet: 'beschrieb', perf: 'hat beschrieben' }, gov: '+ Akk.',
      ru: 'описывать', en: 'to describe',
      parallel: 'ОПИСывать',
      drill: { ru: 'описывать (проблему)', en: 'to describe (a problem)', de: 'das Problem genau ___schreiben' },
      prefixDrill: { ex: 0, meaning: 1, explain: 'be- = охват предмета целиком: «обписать» проблему со всех сторон — описать.' },
      examples: [{ de: 'Bitte [[beschreiben]] Sie das Problem so genau wie möglich.', ru: 'Пожалуйста, опишите проблему как можно точнее.', en: 'Please describe the problem as precisely as possible.' }],
      morph: 'be-schreib-en',
      note: 'Существительное: die Beschreibung (описание). В тикете: «Fehlerbeschreibung».',
      i18n: { en: { note: 'Noun: die Beschreibung (description). In a ticket: “Fehlerbeschreibung”.' } }
    },
    {
      id: 'r-schreiben-unterschreiben', prefix: 'unter', sep: 'untrennbar', stress: 'unterschréiben', pos: 'verb',
      alsoIn: [['words', 'authorities']], // Wortliste p. 91
      core: true, transparency: 'transparent',
      de: 'unterschreiben', forms: { praes: 'unterschreibt', praet: 'unterschrieb', perf: 'hat unterschrieben' }, gov: '+ Akk.',
      ru: 'подписывать', en: 'to sign',
      parallel: 'ПОДписывать',
      examples: [{ de: 'Bitte [[unterschreiben]] Sie hier unten.', ru: 'Пожалуйста, подпишите здесь внизу.', en: 'Please sign here at the bottom.' }],
      morph: 'unter-schreib-en',
      note: 'Неотделяемая приставка: «Ich unterschreibe», «hat unterschrieben». Существительное: die Unterschrift. Буквально «писать под» — как русское «под-писать».',
      i18n: { en: { note: 'Inseparable: “ich unterschreibe”, “hat unterschrieben”. Noun: die Unterschrift. Literally “write under” — like English “underwrite”.' } }
    },
    {
      id: 'r-schreiben-umschreiben', prefix: 'um', sep: 'trennbar', stress: 'úmschreiben', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'umschreiben', forms: { praes: 'schreibt um', praet: 'schrieb um', perf: 'hat umgeschrieben' }, gov: '+ Akk.',
      ru: 'переписывать (по-новому); переоформлять (документ на кого-то)', en: 'to rewrite; to transfer (a document to someone)',
      parallel: 'ПЕРЕписывать',
      drill: { ru: 'переписать текст заново', en: 'to rewrite a text', de: 'den Code komplett ___schreiben' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'Отделяемое um- = переделка: текст пишут заново, по-другому.' },
      examples: [{ de: 'Den alten Code müssen wir komplett [[umschreiben]].', ru: 'Старый код нам придётся полностью переписать.', en: 'We’ll have to rewrite the old code completely.' }],
      morph: 'um-schreib-en',
      note: 'Сравните неотделяемое umschréiben — «описывать иносказательно, перефразировать» (см. пары ниже). «Den Führerschein umschreiben lassen» — переоформить права.',
      i18n: { en: { note: 'Compare inseparable umschréiben — “to paraphrase” (see the pairs below). “Den Führerschein umschreiben lassen” — to have a driving licence converted.' } }
    },
    {
      id: 'r-schreiben-ausschreiben', prefix: 'aus', sep: 'trennbar', stress: 'áusschreiben', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'ausschreiben', forms: { praes: 'schreibt aus', praet: 'schrieb aus', perf: 'hat ausgeschrieben' }, gov: '+ Akk.',
      ru: 'объявлять (вакансию, тендер); писать полностью (без сокращений)', en: 'to advertise (a job, a tender); to write out in full',
      drill: { ru: 'объявить вакансию', en: 'to advertise a job', de: 'eine Stelle ___schreiben' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'aus- = наружу: вакансию «выписывают наружу», делают публичной.' },
      examples: [
        { sense: 'объявлять вакансию / тендер', de: 'Die Stelle im SOC wurde gestern [[ausgeschrieben]].', ru: 'Вакансию в SOC объявили вчера.', en: 'The SOC job was advertised yesterday.' },
        { sense: 'писать полностью', de: 'Bitte [[schreiben]] Sie den Vornamen [[aus]], keine Abkürzung.', ru: 'Пожалуйста, напишите имя полностью, без сокращения.', en: 'Please write your first name out in full, no abbreviation.' }
      ],
      morph: 'aus-schreib-en',
      meaningType: 'polysemous',
      meaningExplanation: 'ausschreiben — «объявлять публично» (вакансию, тендер, конкурс) и «писать полностью» (слово без сокращения, сумму прописью).',
      meaningExamples: [{ de: 'einen Auftrag ausschreiben', ru: 'объявить тендер на заказ' }, { de: 'den Betrag in Worten ausschreiben', ru: 'написать сумму прописью' }],
      note: 'Существительное: die Ausschreibung (тендер; объявление о вакансии).',
      i18n: { en: {
        meaningExplanation: 'ausschreiben means “to announce publicly” (a job, a tender, a competition) and “to write out in full” (a word without abbreviation, a sum in words).',
        note: 'Noun: die Ausschreibung (tender; job advertisement).' } }
    },
    {
      id: 'r-schreiben-vorschreiben', prefix: 'vor', sep: 'trennbar', stress: 'vórschreiben', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'vorschreiben', forms: { praes: 'schreibt vor', praet: 'schrieb vor', perf: 'hat vorgeschrieben' }, gov: 'jdm. etw.',
      ru: 'предписывать, устанавливать (правило); указывать (кому что делать)', en: 'to prescribe, to stipulate; to tell (someone what to do)',
      parallel: 'ПРЕДписывать',
      drill: { ru: 'предписывать (о законе, политике)', en: 'to stipulate (a law, a policy)', de: 'Das Gesetz ___schreibt eine Meldung vor' },
      prefixDrill: { ex: 0, meaning: 2, explain: 'vor- = образец: правило «пишется заранее» как образец, которому надо следовать.' },
      examples: [{ de: 'Die DSGVO [[schreibt]] eine Meldung innerhalb von 72 Stunden [[vor]].', ru: 'GDPR предписывает уведомление в течение 72 часов.', en: 'The GDPR requires notification within 72 hours.' }],
      morph: 'vor-schreib-en',
      note: '«Du kannst mir nicht vorschreiben, was ich anziehe» — ты не можешь мне указывать. Существительное: die Vorschrift (предписание, норма); «vorschriftsmäßig» — по правилам.',
      i18n: { en: { note: '“Du kannst mir nicht vorschreiben, was ich anziehe” — you can’t tell me what to wear. Noun: die Vorschrift (regulation); “vorschriftsmäßig” — according to the rules.' } }
    },
    {
      id: 'r-schreiben-verschreiben', prefix: 'ver', sep: 'untrennbar', stress: 'verschréiben', pos: 'verb',
      transparency: 'figurative',
      de: 'verschreiben', forms: { praes: 'verschreibt', praet: 'verschrieb', perf: 'hat verschrieben' }, gov: '+ Akk. · sich',
      ru: 'выписывать (лекарство); (sich) ошибиться при письме', en: 'to prescribe (medicine); (sich) to make a slip of the pen',
      prefixDrill: { ex: 1, meaning: 0, explain: 'ver- = ошибка: «sich verschreiben» — написать мимо, сделать описку.' },
      examples: [
        { sense: 'выписать лекарство', de: 'Die Ärztin hat mir Tropfen [[verschrieben]].', ru: 'Врач выписала мне капли.', en: 'The doctor prescribed me some drops.' },
        { sense: 'описаться (sich)', de: 'Entschuldigung, ich habe mich [[verschrieben]] — es ist Port 8443.', ru: 'Извините, я описался — это порт 8443.', en: 'Sorry, typo — it’s port 8443.' }
      ],
      morph: 'ver-schreib-en',
      meaningType: 'polysemous',
      meaningExplanation: 'verschreiben — врачебное «выписать (лекарство)» и с sich — «ошибиться при письме» (ver- как в sich versprechen, sich verhören).',
      meaningExamples: [{ de: 'ein Medikament verschreiben', ru: 'выписать лекарство' }, { de: 'sich bei der IP verschreiben', ru: 'ошибиться при записи IP' }],
      i18n: { en: { meaningExplanation: 'verschreiben means a doctor’s “to prescribe” and, with sich, “to make a slip of the pen” (ver- as in sich versprechen, sich verhören).' } }
    },
    {
      id: 'r-schreiben-zuschreiben', prefix: 'zu', sep: 'trennbar', stress: 'zúschreiben', pos: 'verb',
      transparency: 'figurative',
      de: 'zuschreiben', forms: { praes: 'schreibt zu', praet: 'schrieb zu', perf: 'hat zugeschrieben' }, gov: 'jdm./etw. (Dat.) etw.',
      ru: 'приписывать (кому-то авторство, вину, причину)', en: 'to attribute (to)',
      prefixDrill: { ex: 0, meaning: 1, explain: 'zu- = направление к кому-то: ответственность «записывают на» группу.' },
      examples: [{ de: 'Der Angriff wird einer bekannten Gruppe [[zugeschrieben]].', ru: 'Атаку приписывают известной группировке.', en: 'The attack is attributed to a well-known group.' }],
      morph: 'zu-schreib-en',
      note: 'В SOC-контексте — атрибуция атак. «Das hast du dir selbst zuzuschreiben» — сам виноват.',
      i18n: { en: { note: 'In a SOC context: attack attribution. “Das hast du dir selbst zuzuschreiben” — you only have yourself to blame.' } }
    },
    {
      id: 'r-schreiben-anschreiben', prefix: 'an', sep: 'trennbar', stress: 'ánschreiben', pos: 'verb',
      transparency: 'transparent',
      de: 'anschreiben', forms: { praes: 'schreibt an', praet: 'schrieb an', perf: 'hat angeschrieben' }, gov: '+ Akk.',
      ru: 'написать (кому-то первым), обратиться письменно; записать на доске', en: 'to write to, to contact in writing; to write on the board',
      prefixDrill: { ex: 0, meaning: 3, explain: 'an- = направленность к собеседнику: письмо адресовано конкретному человеку.' },
      examples: [{ de: 'Ich habe den Support schon zweimal [[angeschrieben]].', ru: 'Я уже дважды писал в поддержку.', en: 'I’ve already written to support twice.' }],
      morph: 'an-schreib-en',
      note: 'Существительное: das Anschreiben — сопроводительное письмо (к резюме)!',
      i18n: { en: { note: 'Noun: das Anschreiben — cover letter (for a job application)!' } }
    },
    {
      id: 'r-schreiben-schrift', pos: 'noun', article: 'die', plural: 'die Schriften',
      de: 'Schrift', ru: 'шрифт; почерк; письменность', en: 'font; handwriting; script',
      examples: [{ de: 'Kannst du die [[Schrift]] etwas größer machen?', ru: 'Можешь сделать шрифт немного крупнее?', en: 'Can you make the font a bit bigger?' }],
      note: '«Schriftlich» — письменно: «Bitte bestätigen Sie das schriftlich».',
      i18n: { en: { note: '“Schriftlich” — in writing: “Bitte bestätigen Sie das schriftlich”.' } }
    },
    {
      id: 'r-schreiben-unterschrift', pos: 'noun', article: 'die', plural: 'die Unterschriften',
      alsoIn: [['words', 'authorities']], // Wortliste p. 91
      de: 'Unterschrift', ru: 'подпись', en: 'signature',
      examples: [{ de: 'Ohne [[Unterschrift]] ist der Vertrag nicht gültig.', ru: 'Без подписи договор недействителен.', en: 'The contract isn’t valid without a signature.' }],
      morph: 'Unter-schrift'
    },
    {
      id: 'r-schreiben-vorschrift', pos: 'noun', article: 'die', plural: 'die Vorschriften',
      de: 'Vorschrift', ru: 'предписание, норма, правило', en: 'regulation, rule',
      examples: [{ de: 'Laut [[Vorschrift]] müssen alle Besucher einen Ausweis tragen.', ru: 'По правилам все посетители должны носить пропуск.', en: 'According to the regulations all visitors must wear a badge.' }],
      morph: 'Vor-schrift',
      note: '«Dienst nach Vorschrift» — работа строго по инструкции (форма протеста).',
      i18n: { en: { note: '“Dienst nach Vorschrift” — work-to-rule (a form of protest).' } }
    },
    {
      id: 'r-schreiben-beschreibung', pos: 'noun', article: 'die', plural: 'die Beschreibungen',
      de: 'Beschreibung', ru: 'описание', en: 'description',
      examples: [{ de: 'In der [[Beschreibung]] des Tickets fehlen die Logs.', ru: 'В описании тикета не хватает логов.', en: 'The logs are missing from the ticket description.' }],
      morph: 'Be-schreib-ung'
    },
    {
      id: "r-schreiben-mitschreiben", de: "mitschreiben", pos: 'verb', core: true,
      prefix: "mit", sep: 'trennbar', forms: { praes: "schreibt mit", praet: "schrieb mit", perf: "hat mitgeschrieben" },
      ru: "записывать по ходу разговора или занятия", en: "to take notes as someone speaks",
      examples: [{ de: "Im Kurs [[schreibe]] ich nur die wichtigsten Beispiele [[mit]].", ru: "На занятии я записываю только самые важные примеры.", en: "In class I only take notes on the most important examples." }]
    },
    {
      id: "r-schreiben-weiterschreiben", de: "weiterschreiben", pos: 'verb', core: false,
      prefix: "weiter", sep: 'trennbar', forms: { praes: "schreibt weiter", praet: "schrieb weiter", perf: "hat weitergeschrieben" },
      ru: "продолжать писать", en: "to carry on writing",
      examples: [{ de: "Nach der Pause [[schreibt]] Lea an ihrem Bericht [[weiter]].", ru: "После перерыва Леа продолжает писать отчёт.", en: "After the break Lea carries on writing her report." }]
    },
    {
      id: "r-schreiben-zurueckschreiben", de: "zurückschreiben", pos: 'verb', core: false,
      prefix: "zurück", sep: 'trennbar', forms: { praes: "schreibt zurück", praet: "schrieb zurück", perf: "hat zurückgeschrieben" },
      ru: "писать в ответ", en: "to write back",
      examples: [{ de: "Danke für deine Nachricht! Ich [[schreibe]] dir morgen [[zurück]].", ru: "Спасибо за сообщение! Отвечу тебе завтра.", en: "Thanks for your message! I'll write back tomorrow." }]
    }
  ],
  pairs: [
    {
      a: { stress: 'úmschreiben', sep: 'trennbar · hat umgeschrieben', ru: 'переписать заново, переделать текст', en: 'to rewrite',
        ex: { de: 'Ich [[schreibe]] den Bericht noch einmal [[um]].', ru: 'Я ещё раз перепишу отчёт.', en: 'I’ll rewrite the report once more.' } },
      b: { stress: 'umschréiben', sep: 'untrennbar · hat umschrieben', ru: 'описать другими словами, перефразировать', en: 'to paraphrase, to describe in other words',
        ex: { de: 'Wenn dir ein Wort fehlt, [[umschreibe]] es einfach.', ru: 'Если не хватает слова, просто опиши его другими словами.', en: 'If you can’t find a word, just paraphrase it.' } }
    }
  ]
});
