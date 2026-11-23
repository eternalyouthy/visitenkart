/* ROOT: brechen. Learning content in Russian (ru); English meanings inline (en). */
GT.registerRoot({
  id: 'brechen', verb: 'brechen', ru: 'ломать; ломаться', en: 'to break',
  words: [
    {
      id: 'r-brechen-brechen', base: true, pos: 'verb',
      de: 'brechen', forms: { praes: 'bricht', praet: 'brach', perf: 'hat / ist gebrochen' }, gov: '+ Akk.',
      ru: 'ломать; (с sein) ломаться; нарушать (обещание, правило)', en: 'to break; (with sein) to break (intrans.); to break (a promise, a rule)',
      examples: [
        { sense: 'ломать (кость, предмет)', de: 'Sie hat sich beim Joggen den Fuß [[gebrochen]].', ru: 'Она сломала ногу на пробежке.', en: 'She broke her foot jogging.' },
        { sense: 'нарушать (слово, правило)', de: 'Er hat sein Versprechen schon wieder [[gebrochen]].', ru: 'Он опять нарушил своё обещание.', en: 'He has broken his promise again.' }
      ],
      morph: 'brech-en',
      meaningType: 'polysemous',
      meaningExplanation: 'brechen — физически «ломать / ломаться» (с haben переходное, с sein — само сломалось), «нарушать» (Versprechen, Regel, Rekord — побить рекорд) и в медицине «рвать» (= sich erbrechen).',
      meaningExamples: [{ de: 'einen Rekord brechen', ru: 'побить рекорд' }, { de: 'Das Eis ist gebrochen.', ru: 'Лёд треснул / лёд сломан (и перен.)' }],
      note: 'Сильный глагол с чередованием e → i: du brichst, er bricht; brach, gebrochen. Perfekt с haben (кто-то ломает что-то) или с sein (что-то сломалось само).',
      i18n: { en: {
        meaningExplanation: 'brechen means physically “to break” (transitive with haben, intransitive with sein), “to break” a promise / rule / record, and medically “to vomit” (= sich erbrechen).',
        note: 'Strong verb with e → i: du brichst, er bricht; brach, gebrochen. Perfekt with haben (someone breaks something) or sein (something broke by itself).' } },
      why: {
        confidence: 'high',
        root: 'brechen',
        text: 'Состав: корневой сильный глагол brech- + -en.\nПроисхождение: др.-в.-нем. brehhan, герм. *brekan-; родственен английскому break и латинскому frangere (причастие fractus → Fraktur, Fraktion). От немецкого корня: Bruch, Abbruch, Einbruch, Verbrechen.\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. brechen',
        evidence: 'Др.-в.-нем. brehhan (VIII в.), герм. *brekan-; соответствия: англ. break, гот. brikan; и.-е. *bʰreg- «ломать».',
        i18n: { en: {
          text: 'Composition: strong root verb brech- + -en.\nOrigin: Old High German brehhan, Germanic *brekan-; cognate with English break and Latin frangere (participle fractus → Fraktur, Fraktion). From the German root: Bruch, Abbruch, Einbruch, Verbrechen.\nTransparency: base root of the family.',
          evidence: 'OHG brehhan (8th c.), Germanic *brekan-; cognates: English break, Gothic brikan; PIE *bʰreg- “to break”.' } }
      }
    },
    {
      id: 'r-brechen-abbrechen', prefix: 'ab', sep: 'trennbar', stress: 'ábbrechen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'abbrechen', forms: { praes: 'bricht ab', praet: 'brach ab', perf: 'hat / ist abgebrochen' }, gov: '+ Akk.',
      ru: 'прерывать, отменять (процесс, соединение, учёбу); отламывать(ся)', en: 'to abort, to cancel (a process, a connection, studies); to break off',
      parallel: 'ОБрывать / ПРЕрывать',
      drill: { ru: 'прервать (процесс, установку)', en: 'to abort (a process, an installation)', de: 'die Installation ___brechen' },
      prefixDrill: { ex: 0, meaning: 2, explain: 'ab- = отмена: процесс «обламывают» — прерывают и отменяют.' },
      examples: [
        { sense: 'прервать процесс / соединение', de: 'Die Verbindung zum Server wurde [[abgebrochen]].', ru: 'Соединение с сервером было прервано.', en: 'The connection to the server was dropped.' },
        { sense: 'отломаться', de: 'Mir ist der Schlüssel im Schloss [[abgebrochen]].', ru: 'У меня ключ обломился в замке.', en: 'My key broke off in the lock.' }
      ],
      morph: 'ab-brech-en',
      meaningType: 'polysemous',
      meaningExplanation: 'abbrechen — «отломать / отломаться» и очень частое переносное «прервать, отменить» (кнопка «Abbrechen» = Cancel; das Studium abbrechen — бросить учёбу).',
      meaningExamples: [{ de: 'auf „Abbrechen“ klicken', ru: 'нажать «Отмена»' }, { de: 'das Studium abbrechen', ru: 'бросить учёбу' }],
      note: 'В интерфейсах «Abbrechen» — это кнопка Cancel. Существительное: der Abbruch (прерывание, отмена; снос).',
      i18n: { en: {
        meaningExplanation: 'abbrechen means “to break off” and, very often, “to abort, to cancel” (the “Abbrechen” button = Cancel; das Studium abbrechen — to drop out of university).',
        note: 'In user interfaces “Abbrechen” is the Cancel button. Noun: der Abbruch (abort, cancellation; demolition).' } }
    },
    {
      id: 'r-brechen-aufbrechen', prefix: 'auf', sep: 'trennbar', stress: 'áufbrechen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'aufbrechen', forms: { praes: 'bricht auf', praet: 'brach auf', perf: 'hat / ist aufgebrochen' }, gov: '+ Akk.',
      ru: 'взламывать (дверь, замок); (с sein) отправляться в путь', en: 'to break open; (with sein) to set off',
      examples: [
        { sense: 'взломать', de: 'Die Diebe haben die Tür mit einer Brechstange [[aufgebrochen]].', ru: 'Воры взломали дверь ломом.', en: 'The thieves broke the door open with a crowbar.' },
        { sense: 'отправиться в путь (sein)', de: 'Wir [[brechen]] morgen früh um sechs [[auf]].', ru: 'Мы выдвигаемся завтра в шесть утра.', en: 'We’re setting off tomorrow at six in the morning.' }
      ],
      prefixDrill: { ex: 0, meaning: 1, explain: 'auf- = открытие: дверь «раскрывают ломая» — взламывают.' },
      morph: 'auf-brech-en',
      meaningType: 'polysemous',
      meaningExplanation: 'aufbrechen — «вскрыть, взломать» (с haben) и «отправиться в путь, сняться с места» (с sein; образ — «сорваться с места»).',
      meaningExamples: [{ de: 'ein Auto aufbrechen', ru: 'вскрыть машину' }, { de: 'zu einer Reise aufbrechen', ru: 'отправиться в поездку' }],
      i18n: { en: { meaningExplanation: 'aufbrechen means “to break open” (with haben) and “to set off” (with sein; the image is “breaking camp”).' } }
    },
    {
      id: 'r-brechen-ausbrechen', prefix: 'aus', sep: 'trennbar', stress: 'áusbrechen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'ausbrechen', forms: { praes: 'bricht aus', praet: 'brach aus', perf: 'ist ausgebrochen' }, gov: 'aus + Dat.',
      ru: 'вспыхнуть, разразиться (пожар, война, эпидемия, паника); сбежать (из тюрьмы)', en: 'to break out (fire, war, an epidemic, panic); to escape (from prison)',
      parallel: 'ВЫрваться / разРАЗиться',
      drill: { ru: 'вспыхнуть (о пожаре, панике)', en: 'to break out (fire, panic)', de: 'Im Serverraum ist ein Feuer ___gebrochen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'aus- = наружу: огонь или паника «вырываются наружу».' },
      examples: [{ de: 'Nach der Phishing-Welle ist im Büro fast Panik [[ausgebrochen]].', ru: 'После волны фишинга в офисе чуть не началась паника.', en: 'After the phishing wave, panic almost broke out in the office.' }],
      morph: 'aus-brech-en',
      note: 'Существительное: der Ausbruch (вспышка эпидемии, извержение вулкана, побег).',
      i18n: { en: { note: 'Noun: der Ausbruch (outbreak, eruption, escape).' } }
    },
    {
      id: 'r-brechen-einbrechen', prefix: 'ein', sep: 'trennbar', stress: 'éinbrechen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'einbrechen', forms: { praes: 'bricht ein', praet: 'brach ein', perf: 'ist / hat eingebrochen' }, gov: 'in + Akk.',
      ru: 'вламываться, совершать кражу со взломом; (о ценах, спросе) резко падать', en: 'to break in, to burgle; (prices, demand) to slump',
      drill: { ru: 'вломиться (в квартиру, в сеть)', en: 'to break into (a flat, a network)', de: 'in die Wohnung ___brechen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'ein- = внутрь: проникнуть внутрь, сломав защиту.' },
      examples: [
        { sense: 'вломиться', de: 'Bei unseren Nachbarn wurde letzte Nacht [[eingebrochen]].', ru: 'Прошлой ночью соседей обокрали (вломились к ним).', en: 'Our neighbours were burgled last night.' },
        { sense: 'резко упасть (о показателях)', de: 'Nach dem Datenleck sind die Verkäufe stark [[eingebrochen]].', ru: 'После утечки данных продажи резко упали.', en: 'Sales slumped after the data leak.' }
      ],
      morph: 'ein-brech-en',
      meaningType: 'polysemous',
      meaningExplanation: 'einbrechen — «вломиться (со взломом)» и переносное «обрушиться, резко упасть» (продажи, курс, лёд под ногами).',
      meaningExamples: [{ de: 'ins Eis einbrechen', ru: 'провалиться под лёд' }, { de: 'Die Kurse brechen ein.', ru: 'Курсы обваливаются.' }],
      note: 'Существительное: der Einbruch (кража со взломом; резкий спад). Хакер, проникший в сеть, тоже «bricht ins Netzwerk ein».',
      i18n: { en: {
        meaningExplanation: 'einbrechen means “to break in” and figuratively “to collapse, to slump” (sales, share prices, ice underfoot).',
        note: 'Noun: der Einbruch (burglary; slump). A hacker who gets into a network also “bricht ins Netzwerk ein”.' } }
    },
    {
      id: 'r-brechen-unterbrechen', prefix: 'unter', sep: 'untrennbar', stress: 'unterbréchen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'unterbrechen', forms: { praes: 'unterbricht', praet: 'unterbrach', perf: 'hat unterbrochen' }, gov: '+ Akk.',
      ru: 'прерывать, перебивать (речь, работу, соединение)', en: 'to interrupt',
      parallel: 'ПРЕрывать / ПЕРЕбивать',
      examples: [{ de: 'Darf ich kurz [[unterbrechen]]? Der Server ist gerade ausgefallen.', ru: 'Можно я ненадолго прерву? Сервер только что упал.', en: 'May I interrupt for a moment? The server has just gone down.' }],
      morph: 'unter-brech-en',
      note: 'Неотделяемая: «Er unterbricht mich ständig». Существительное: die Unterbrechung (перерыв; прерывание, в т. ч. сбой связи).',
      i18n: { en: { note: 'Inseparable: “Er unterbricht mich ständig”. Noun: die Unterbrechung (break; interruption, also a connection drop).' } }
    },
    {
      id: 'r-brechen-zerbrechen', prefix: 'zer', sep: 'untrennbar', stress: 'zerbréchen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'zerbrechen', forms: { praes: 'zerbricht', praet: 'zerbrach', perf: 'hat / ist zerbrochen' }, gov: '+ Akk.',
      ru: 'разбить вдребезги; (sein) разбиться, распасться', en: 'to smash; (with sein) to shatter, to fall apart',
      parallel: 'РАЗбивать',
      drill: { ru: 'разбить (чашку) вдребезги', en: 'to smash (a cup)', de: 'die Tasse ___brechen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'zer- = разрушение на части: чашка разлетелась на куски.' },
      examples: [{ de: 'Mir ist meine Lieblingstasse [[zerbrochen]].', ru: 'У меня разбилась любимая чашка.', en: 'My favourite mug broke.' }],
      morph: 'zer-brech-en',
      note: '«Zerbrechlich» — хрупкий (надпись на посылках). Переносно: «Die Ehe ist zerbrochen» — брак распался.',
      i18n: { en: { note: '“Zerbrechlich” — fragile (on parcels). Figuratively: “Die Ehe ist zerbrochen” — the marriage fell apart.' } }
    },
    {
      id: 'r-brechen-durchbrechen', prefix: 'durch', sep: 'trennbar', stress: 'dúrchbrechen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'durchbrechen', forms: { praes: 'bricht durch', praet: 'brach durch', perf: 'hat / ist durchgebrochen' }, gov: '+ Akk.',
      ru: 'переломить пополам; (sein) проломиться', en: 'to break in two; (with sein) to break through',
      prefixDrill: { ex: 0, meaning: 1, explain: 'Отделяемое durch- = сквозь: доска ломается насквозь, на две части.' },
      examples: [{ de: 'Das alte Brett ist einfach in der Mitte [[durchgebrochen]].', ru: 'Старая доска просто переломилась посередине.', en: 'The old board just broke in two in the middle.' }],
      morph: 'durch-brech-en',
      note: 'Сравните неотделяемое durchbréchen — «прорвать (блокаду, оборону), нарушить (правило)» — см. пары ниже. Существительное: der Durchbruch (прорыв).',
      i18n: { en: { note: 'Compare inseparable durchbréchen — “to break through (a barrier), to breach (a rule)” — see the pairs below. Noun: der Durchbruch (breakthrough).' } }
    },
    {
      id: 'r-brechen-erbrechen', prefix: 'er', sep: 'untrennbar', stress: 'erbréchen', pos: 'verb',
      transparency: 'opaque',
      de: 'sich erbrechen', forms: { praes: 'erbricht sich', praet: 'erbrach sich', perf: 'hat sich erbrochen' },
      ru: 'рвать, тошнить (мед., официально)', en: 'to vomit (medical, formal)',
      examples: [{ de: 'Der Patient hat sich in der Nacht zweimal [[erbrochen]].', ru: 'Ночью пациента дважды вырвало.', en: 'The patient vomited twice during the night.' }],
      morph: 'er-brech-en',
      note: 'Медицинское / официальное слово. В обычной речи: «sich übergeben» или просто «brechen».',
      i18n: { en: { note: 'A medical / formal word. In everyday speech: “sich übergeben” or simply “brechen”.' } }
    },
    {
      id: 'r-brechen-bruch', pos: 'noun', article: 'der', plural: 'die Brüche',
      de: 'Bruch', ru: 'перелом; разрыв, нарушение; (мат.) дробь', en: 'fracture; break, breach; (maths) fraction',
      examples: [{ de: 'Auf dem Röntgenbild sieht man einen [[Bruch]] am Handgelenk.', ru: 'На рентгене виден перелом запястья.', en: 'The X-ray shows a fracture of the wrist.' }],
      note: 'Устойчивое: «zu Bruch gehen» — разбиться; «Vertragsbruch» — нарушение договора.',
      i18n: { en: { note: 'Fixed phrases: “zu Bruch gehen” — to get broken; “Vertragsbruch” — breach of contract.' } }
    },
    {
      id: 'r-brechen-abbruch', pos: 'noun', article: 'der', plural: 'die Abbrüche',
      de: 'Abbruch', ru: 'прерывание, обрыв (процесса, связи); снос (здания)', en: 'abort, termination; demolition',
      examples: [{ de: 'Nach dem dritten [[Abbruch]] haben wir das Update gestoppt.', ru: 'После третьего обрыва мы остановили обновление.', en: 'After the third abort we stopped the update.' }],
      morph: 'Ab-bruch'
    },
    {
      id: 'r-brechen-einbruch', pos: 'noun', article: 'der', plural: 'die Einbrüche',
      de: 'Einbruch', ru: 'кража со взломом, проникновение; резкий спад', en: 'burglary, break-in; slump',
      examples: [{ de: 'Den [[Einbruch]] ins Netzwerk haben wir erst nach Wochen bemerkt.', ru: 'Проникновение в сеть мы заметили только через несколько недель.', en: 'We only noticed the break-in to the network weeks later.' }],
      morph: 'Ein-bruch'
    },
    {
      id: 'r-brechen-unterbrechung', pos: 'noun', article: 'die', plural: 'die Unterbrechungen',
      de: 'Unterbrechung', ru: 'прерывание, перерыв', en: 'interruption, break',
      examples: [{ de: 'Wir haben ohne [[Unterbrechung]] bis Mitternacht gearbeitet.', ru: 'Мы работали без перерыва до полуночи.', en: 'We worked without a break until midnight.' }],
      morph: 'Unter-brech-ung'
    },
    {
      id: 'r-brechen-verbrechen', pos: 'noun', article: 'das', plural: 'die Verbrechen',
      de: 'Verbrechen', ru: 'преступление', en: 'crime',
      examples: [{ de: 'Ransomware-Angriffe sind schwere [[Verbrechen]].', ru: 'Атаки шифровальщиков — тяжкие преступления.', en: 'Ransomware attacks are serious crimes.' }],
      morph: 'Ver-brech-en', transparency: 'opaque',
      note: 'Субстантивированный старый глагол verbrechen («нарушить (закон)»). Преступник — der Verbrecher; киберпреступность — die Cyberkriminalität.',
      i18n: { en: { note: 'A noun from the old verb verbrechen (“to break the law”). Criminal — der Verbrecher; cybercrime — die Cyberkriminalität.' } }
    }
  ],
  pairs: [
    {
      a: { stress: 'dúrchbrechen', sep: 'trennbar · hat/ist durchgebrochen', ru: 'переломить(ся) пополам', en: 'to break in two',
        ex: { de: 'Er hat den Stock über dem Knie [[durchgebrochen]].', ru: 'Он переломил палку о колено.', en: 'He broke the stick in two over his knee.' } },
      b: { stress: 'durchbréchen', sep: 'untrennbar · hat durchbrochen', ru: 'прорвать (преграду); нарушить (правило, шаблон)', en: 'to break through (a barrier); to break (a pattern, a rule)',
        ex: { de: 'Die Angreifer haben die erste Verteidigungslinie [[durchbrochen]].', ru: 'Атакующие прорвали первую линию обороны.', en: 'The attackers broke through the first line of defence.' } }
    }
  ]
});
