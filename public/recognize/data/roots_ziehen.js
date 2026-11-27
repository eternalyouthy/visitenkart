/* ROOT: ziehen. Learning content in Russian. */
GT.registerRoot({
  id: 'ziehen', verb: 'ziehen', ru: 'тянуть; переезжать',
  words: [
    {
      id: 'r-ziehen-ziehen', base: true, pos: 'verb',
      de: 'ziehen', forms: { praes: 'zieht', praet: 'zog', perf: 'hat / ist gezogen' }, gov: '+ Akk.',
      ru: 'тянуть; (с sein) переезжать; (es zieht) сквозит',
      examples: [
        { sense: 'тянуть (с haben)', de: 'Du musst an der Tür [[ziehen]], nicht drücken.', ru: 'Дверь нужно тянуть, а не толкать.' },
        { sense: 'переезжать (с sein)', de: 'Nach dem Studium ist sie nach Berlin [[gezogen]].', ru: 'После учёбы она переехала в Берлин.' }
      ],
      morph: 'zieh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'С haben глагол ziehen значит «тянуть», с sein — «переезжать», а безличное es zieht — «сквозит, дует».',
      meaningExamples: [{ de: 'Bitte an der Tür ziehen.', ru: 'Потяните, пожалуйста, дверь.' }, { de: 'Wir sind nach München gezogen.', ru: 'Мы переехали в Мюнхен.' }, { de: 'Mach das Fenster zu, es zieht!', ru: 'Закрой окно, сквозит!' }],
      note: 'Сильный глагол: zog, gezogen. Тянуть что-то → haben; переезжать → sein. «Es zieht!» — сквозит! На двери: «Ziehen» — на себя, «Drücken» — от себя.',
      why: {
        confidence: 'high',
        root: 'ziehen',
        text: 'Состав: корневой глагол zieh- + -en.\nПроисхождение: древневерхненемецкое ziohan («тянуть, вести») восходит к индоевропейскому корню *deuk- «вести, тянуть», к которому относится и латинское dūcere (от него пришли «продукт», «редукция»). Из «тянуть» развилось «двигаться, переезжать» и крупное гнездо приставочных глаголов.\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. ziehen',
        evidence: 'Др.-в.-нем. ziohan «тянуть, вести» < герм. *teuhaną < и.-е. *deuk- (родственно лат. dūcere).'
      }
    },
    {
      id: 'r-ziehen-anziehen', prefix: 'an', sep: 'trennbar', stress: 'ánziehen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'anziehen', forms: { praes: 'zieht an', praet: 'zog an', perf: 'hat angezogen' }, gov: '+ Akk.; sich anziehen',
      ru: 'надевать (одежду); одевать (кого-то); притягивать, привлекать',
      parallel: 'ПРИтягивать (магнит)',
      prefixDrill: { ex: 0, meaning: 4, explain: 'an- здесь означает «надевание» — буквально «натянуть на себя» (куртку, одежду).' },
      examples: [
        { sense: 'надевать (одежду)', de: '[[Zieh]] dir eine Jacke [[an]], es ist kalt.', ru: 'Надень куртку, холодно.' },
        { sense: 'притягивать, привлекать', de: 'Gute Arbeitsbedingungen [[ziehen]] Fachkräfte [[an]].', ru: 'Хорошие условия труда привлекают специалистов.' }
      ],
      morph: 'an-zieh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'anziehen значит «надевать одежду» (и «одеваться» с sich), а также «притягивать, привлекать» (магнит, город, событие).',
      meaningExamples: [{ de: 'eine warme Jacke anziehen', ru: 'надеть тёплую куртку' }, { de: 'Berlin zieht viele IT-Fachkräfte an.', ru: 'Берлин привлекает много IT-специалистов.' }],
      note: '«Sich anziehen» — одеваться; «sich (Dat.) etw. anziehen» — надеть что-то. «Anziehend» — привлекательный. Отсюда же «der Anzug» — костюм (то, что надевают).'
    },
    {
      id: 'r-ziehen-ausziehen', prefix: 'aus', sep: 'trennbar', stress: 'áusziehen', pos: 'verb',
      alsoIn: [['words', 'home']], // Wortliste p. 22
      core: true, transparency: 'transparent',
      de: 'ausziehen', forms: { praes: 'zieht aus', praet: 'zog aus', perf: 'hat / ist ausgezogen' }, gov: '+ Akk.; aus + Dat.',
      ru: 'снимать (одежду); (с sein) выезжать (из квартиры)',
      parallel: 'ВЫезжать (из квартиры)',
      prefixDrill: { ex: 1, meaning: 0, explain: 'aus- здесь означает «наружу, изнутри» — съехать, выехать из квартиры (рус. вы-езжать).' },
      examples: [
        { sense: 'снимать одежду (с haben)', de: 'Bitte [[ziehen]] Sie die Schuhe [[aus]].', ru: 'Пожалуйста, снимите обувь.' },
        { sense: 'выезжать из квартиры (с sein)', de: 'Unsere Nachbarn sind letzten Monat [[ausgezogen]].', ru: 'Наши соседи съехали в прошлом месяце.' }
      ],
      morph: 'aus-zieh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'С haben глагол ausziehen значит «снимать одежду», а с sein — «выезжать из квартиры».',
      meaningExamples: [{ de: 'die Schuhe ausziehen', ru: 'снять обувь (haben)' }, { de: 'Ende des Monats ziehen wir aus.', ru: 'В конце месяца мы съезжаем (sein).' }],
      note: 'Одежду снимают → haben; из квартиры выезжают → sein. «Sich ausziehen» — раздеваться. «Der Auszug» — выезд; а ещё «выписка» (Kontoauszug — выписка со счёта).'
    },
    {
      id: 'r-ziehen-umziehen', prefix: 'um', sep: 'trennbar', stress: 'úmziehen', pos: 'verb',
      alsoIn: [['words', 'home']], // Wortliste p. 90
      core: true, transparency: 'transparent',
      de: 'umziehen', forms: { praes: 'zieht um', praet: 'zog um', perf: 'ist umgezogen / hat sich umgezogen' }, gov: 'nach / in + …; sich umziehen',
      ru: 'переезжать; (sich umziehen) переодеваться',
      parallel: 'ПЕРЕезжать / ПЕРЕодеваться',
      prefixDrill: { ex: 0, meaning: 0, explain: 'ударная отделяемая um- означает «смена, переезд» — переехать в другой город (рус. пере-езжать).' },
      examples: [
        { sense: 'переезжать (с sein)', de: 'Wir [[ziehen]] im März nach Hamburg [[um]].', ru: 'В марте мы переезжаем в Гамбург.' },
        { sense: 'переодеваться (sich, с haben)', de: 'Nach dem Sport muss ich mich noch [[umziehen]].', ru: 'После спорта мне ещё нужно переодеться.' }
      ],
      morph: 'um-zieh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Без sich (и с sein) umziehen значит «переезжать», а с sich (и с haben) — «переодеваться».',
      meaningExamples: [{ de: 'Wir sind letztes Jahr umgezogen.', ru: 'Мы переехали в прошлом году (sein).' }, { de: 'Ich muss mich kurz umziehen.', ru: 'Мне нужно быстро переодеться (haben).' }],
      note: 'Переезжать → sein (ist umgezogen); переодеваться → haben (hat sich umgezogen). «Der Umzug» — переезд. При переезде в Германии — «sich ummelden» (перерегистрироваться).'
    },
    {
      id: 'r-ziehen-einziehen', prefix: 'ein', sep: 'trennbar', stress: 'éinziehen', pos: 'verb',
      alsoIn: [['words', 'home']], // Wortliste p. 35
      core: true, transparency: 'figurative',
      de: 'einziehen', forms: { praes: 'zieht ein', praet: 'zog ein', perf: 'ist / hat eingezogen' }, gov: 'in + Akk.; + Akk.',
      ru: '(с sein) въезжать, вселяться; (с haben) списывать, взимать (деньги)',
      parallel: 'ВЪезжать',
      prefixDrill: [
        { ex: 0, meaning: 0, explain: 'ein- здесь означает «внутрь, вход» — въехать в новую квартиру (рус. въ-езжать).' },
        { ex: 1, meaning: 4, explain: 'ein- здесь означает «сбор, взимание» — автоматическое списание аренды.' }
      ],
      examples: [
        { sense: 'въезжать, вселяться (с sein)', de: 'Die neuen Nachbarn sind letzte Woche [[eingezogen]].', ru: 'Новые соседи въехали на прошлой неделе.' },
        { sense: 'списывать, взимать деньги (с haben)', de: 'Die Miete wird jeden Monat automatisch [[eingezogen]].', ru: 'Аренда автоматически списывается каждый месяц.' }
      ],
      morph: 'ein-zieh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'С sein глагол einziehen значит «въезжать в жильё», а с haben — «списывать, взимать деньги» (например, автоплатежом).',
      meaningExamples: [{ de: 'Am Samstag ziehen wir ein.', ru: 'В субботу мы въезжаем (sein).' }, { de: 'Die Bank zieht die Miete automatisch ein.', ru: 'Банк автоматически списывает аренду (haben).' }],
      note: '«Das Lastschriftverfahren / die Einzugsermächtigung» — разрешение на автоматическое списание. «Der Einzug» — въезд; «der Einzugstermin» — дата въезда.'
    },
    {
      id: 'r-ziehen-abziehen', prefix: 'ab', sep: 'trennbar', stress: 'ábziehen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'abziehen', forms: { praes: 'zieht ab', praet: 'zog ab', perf: 'hat abgezogen' }, gov: '+ Akk.; von + Dat.',
      ru: 'вычитать, удерживать (деньги); снимать, стягивать; выдёргивать (штекер)',
      prefixDrill: { ex: 0, meaning: 2, explain: 'ab- здесь означает «уменьшение, вычет» — налоги удерживаются из суммы зарплаты (ср. der Abzug).' },
      examples: [
        { sense: 'вычитать, удерживать (деньги)', de: 'Die Steuern werden direkt vom Gehalt [[abgezogen]].', ru: 'Налоги удерживаются прямо из зарплаты.' },
        { sense: 'выдёргивать, снимать (штекер, плёнку)', de: '[[Zieh]] den Stecker [[ab]], bevor du das Gerät öffnest.', ru: 'Выдерни штекер, прежде чем открывать прибор.' }
      ],
      morph: 'ab-zieh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'abziehen значит «вычитать, удерживать» (деньги, налог) и физическое «стягивать, выдёргивать» (плёнку, сетевой кабель).',
      meaningExamples: [{ de: 'Steuern direkt vom Gehalt abziehen', ru: 'удерживать налоги прямо из зарплаты' }, { de: 'das Netzwerkkabel abziehen', ru: 'выдернуть сетевой кабель' }],
      note: '«Der Abzug» — вычет («nach Abzug der Steuern» — после вычета налогов). Разговорно «jdn. abziehen» — обмануть, развести на деньги.'
    },
    {
      id: 'r-ziehen-vorziehen', prefix: 'vor', sep: 'trennbar', stress: 'vórziehen', pos: 'verb',
      transparency: 'figurative',
      de: 'vorziehen', forms: { praes: 'zieht vor', praet: 'zog vor', perf: 'hat vorgezogen' }, gov: 'etw. (Akk.) einer Sache (Dat.)',
      ru: 'предпочитать; переносить на более ранний срок',
      parallel: 'ПРЕДпочитать',
      prefixDrill: { ex: 1, meaning: 1, explain: 'vor- здесь означает «заранее, перенос на раньше» — перенести встречу на более раннее время.' },
      examples: [
        { sense: 'предпочитать (Akk. + Dat.)', de: 'Ich [[ziehe]] Tee dem Kaffee [[vor]].', ru: 'Я предпочитаю чай кофе.' },
        { sense: 'переносить на более ранний срок', de: 'Können wir das Meeting auf 10 Uhr [[vorziehen]]?', ru: 'Можем перенести встречу пораньше, на 10:00?' }
      ],
      morph: 'vor-zieh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'vorziehen значит «предпочитать что-то чему-то» и «переносить встречу/срок на более раннее время».',
      meaningExamples: [{ de: 'Ich ziehe Homeoffice dem Großraumbüro vor.', ru: 'Я предпочитаю удалёнку опенспейсу.' }, { de: 'Können wir das Meeting auf 10 Uhr vorziehen?', ru: 'Можем перенести встречу пораньше, на 10?' }],
      note: 'Падежи как в русском: что предпочитают — Akk., чему — Dat. («dem Kaffee»). В разговоре проще: «Ich trinke lieber Tee». Второе значение: «einen Termin vorziehen» — перенести на раньше (противоположность: verschieben).'
    },
    {
      id: 'r-ziehen-erziehen', prefix: 'er', sep: 'untrennbar', stress: 'erzíehen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'erziehen', forms: { praes: 'erzieht', praet: 'erzog', perf: 'hat erzogen' }, gov: '+ Akk.',
      ru: 'воспитывать',
      parallel: 'ВОСпитывать',
      examples: [
        { de: 'Sie hat ihre zwei Kinder allein [[erzogen]].', ru: 'Она воспитала двоих детей одна.' },
        { de: 'Der Hund ist gut [[erzogen]].', ru: 'Собака хорошо воспитана.' }
      ],
      morph: 'er-zieh-en',
      note: '«Die Erziehung» — воспитание; «der Erzieher / die Erzieherin» — воспитатель (в Kita). «Gut / schlecht erzogen» — хорошо / плохо воспитанный.',
      why: {
        confidence: 'medium',
        root: 'ziehen',
        text: 'Состав: неотделяемая приставка er- + ziehen («тянуть»).\nПроисхождение: древневерхненемецкое irziohan значило «вытягивать вверх, взращивать». Значение «воспитывать» часто приводят как кальку латинского ēducāre / ēdūcere («выводить, растить»), чей корень dūcere исторически родственен ziehen, хотя степень латинского влияния оценивается по-разному.\nПрозрачность: переносная — в современном языке связь с «тянуть» почти не осознаётся.',
        source: 'DWDS (Pfeifer), s.v. erziehen',
        evidence: 'Др.-в.-нем. irziohan «вытягивать, растить»; значение «воспитывать» часто связывают с лат. ēducāre / ēdūcere.'
      }
    },
    {
      id: 'r-ziehen-beziehen', prefix: 'be', sep: 'untrennbar', stress: 'bezíehen', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'beziehen', forms: { praes: 'bezieht', praet: 'bezog', perf: 'hat bezogen' }, gov: '+ Akk.; sich auf + Akk.',
      ru: '(sich beziehen auf) ссылаться на, относиться к; получать (пособие, доход, товар); застилать (постель)',
      examples: [
        { sense: 'ссылаться на, относиться к (sich auf + Akk.)', de: 'Ich [[beziehe]] mich auf Ihre E-Mail vom 3. März.', ru: 'Ссылаюсь на ваше письмо от 3 марта.' },
        { sense: 'получать (пособие, доход, товар)', de: 'Er [[bezieht]] seit zwei Monaten Arbeitslosengeld.', ru: 'Он уже два месяца получает пособие по безработице.' },
        { sense: 'застилать (постель)', de: 'Vor dem Besuch muss ich noch das Gästebett [[beziehen]].', ru: 'Перед приходом гостей мне ещё нужно застелить гостевую кровать.' }
      ],
      morph: 'be-zieh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'beziehen объединяет три частых значения: sich beziehen auf («ссылаться на»), «получать» (пособие, доход, товар) и «застилать постель».',
      meaningExamples: [{ de: 'Ich beziehe mich auf Ihre E-Mail.', ru: 'Я ссылаюсь на ваше письмо.' }, { de: 'Strom aus erneuerbaren Energien beziehen', ru: 'получать электричество из ВИЭ' }, { de: 'das Bett frisch beziehen', ru: 'постелить свежее бельё' }],
      note: 'Значения разошлись и из «тянуть» уже не выводятся — учите как отдельные выражения. «Bezugnehmend auf …» — ссылаясь на (официальные письма). «Das Bett beziehen» — застелить постель. Также официально «eine neue Wohnung beziehen» — въехать в новую квартиру.',
      why: {
        confidence: 'high',
        root: 'ziehen',
        text: 'Состав: неотделяемая приставка be- + ziehen.\nПроисхождение: исторически связано с ziehen («тянуть»): в средневерхненемецком beziehen значило «обтягивать» (отсюда «застилать постель» — натянуть бельё), «привлекать к себе, получать» (пособие, товар) и «относить к чему-либо» (sich beziehen auf).\nПрозрачность: непрозрачное — этимологически глагол восходит к ziehen, но современные значения разошлись настолько, что без заучивания не выводятся.',
        source: 'DWDS (Pfeifer), s.v. beziehen',
        evidence: 'Ср.-в.-нем. beziehen (от ziehen): «обтягивать» → «застилать», «привлекать/получать», «соотносить с».'
      }
    },
    {
      id: 'r-ziehen-zuziehen', prefix: 'zu', sep: 'trennbar', stress: 'zúziehen', pos: 'verb',
      transparency: 'figurative',
      de: 'zuziehen', forms: { praes: 'zieht zu', praet: 'zog zu', perf: 'hat / ist zugezogen' }, gov: '+ Akk.; sich (Dat.) etw.',
      ru: 'задёргивать (шторы); (sich etw. zuziehen) получить (травму, болезнь); (с sein) переехать (в город)',
      prefixDrill: { ex: 0, meaning: 0, explain: 'zu- здесь означает «закрытие, заслон» — задёрнуть шторы (рус. за-дёрнуть).' },
      examples: [
        { sense: 'задёргивать (шторы), закрывать', de: '[[Zieh]] bitte die Vorhänge [[zu]], die Sonne blendet.', ru: 'Задёрни, пожалуйста, шторы, солнце слепит.' },
        { sense: 'получить травму / подхватить болезнь (sich Dat.)', de: 'Er hat sich beim Fußball eine Verletzung [[zugezogen]].', ru: 'Он получил травму на футболе.' },
        { sense: 'переехать в город/регион (с sein)', de: 'Letztes Jahr sind viele junge Familien hierher [[zugezogen]].', ru: 'В прошлом году сюда переехало много молодых семей.' }
      ],
      morph: 'zu-zieh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'zuziehen значит «задёрнуть шторы», с sich (Dat.) — «получить травму / подхватить болезнь», а с sein — «переехать в новый город/регион».',
      meaningExamples: [{ de: 'die Vorhänge zuziehen', ru: 'задёрнуть шторы' }, { de: 'sich eine Erkältung zuziehen', ru: 'подхватить простуду' }],
      note: 'zu = закрыть: «die Tür zuziehen» — притянуть дверь до щелчка. «Sich eine Erkältung zuziehen» — подхватить простуду. «Zugezogen» — недавно переехавший (в город).'
    },
    {
      id: 'r-ziehen-ueberziehen', prefix: 'über', sep: 'untrennbar', stress: 'überzíehen', pos: 'verb',
      transparency: 'figurative',
      de: 'überziehen', forms: { praes: 'überzieht', praet: 'überzog', perf: 'hat überzogen' }, gov: '+ Akk.',
      ru: 'превышать (лимит счёта, время)',
      prefixDrill: { ex: 0, meaning: 1, explain: 'неотделяемая über- здесь означает «превышение нормы, лимита» — уйти в минус сверх лимита счёта.' },
      examples: [
        { sense: 'уйти в минус по счёту', de: 'Mein Konto ist schon wieder [[überzogen]].', ru: 'У меня снова минус на счёте.' },
        { sense: 'превысить отведённое время', de: 'Der Redner hat seine Zeit um zehn Minuten [[überzogen]].', ru: 'Докладчик превысил своё время на десять минут.' }
      ],
      morph: 'über-zieh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'überziehen значит «уйти в минус (превысить лимит) по счёту» и «превысить отведённое время» (на встрече, выступлении).',
      meaningExamples: [{ de: 'das Konto überziehen', ru: 'уйти в овердрафт по счёту' }, { de: 'Wir haben das Meeting um zehn Minuten überzogen.', ru: 'Мы затянули встречу на десять минут.' }],
      note: 'Неотделяемый (ударение на -zieh-): überzogen, без ge-. «Der Dispo / Dispositionskredit» — овердрафт. «Überzogen» как прилагательное — преувеличенный («überzogene Erwartungen»). Отделяемая пара — в блоке ниже.'
    },
    {
      id: 'r-ziehen-durchziehen', prefix: 'durch', sep: 'trennbar', stress: 'dúrchziehen', pos: 'verb',
      transparency: 'figurative',
      de: 'durchziehen', forms: { praes: 'zieht durch', praet: 'zog durch', perf: 'hat durchgezogen' }, gov: '+ Akk.',
      ru: '(разг.) довести до конца, провести (несмотря ни на что); протягивать насквозь',
      prefixDrill: { ex: 0, meaning: 0, explain: 'durch- (отделяемая) означает «довести дело до конца несмотря ни на что» — дожать проект.' },
      examples: [
        { de: 'Das Projekt [[ziehen]] wir jetzt bis zum Ende [[durch]].', ru: 'Этот проект мы теперь доведём до конца.' },
        { de: 'Sie hat das Training trotz Regen [[durchgezogen]].', ru: 'Она провела тренировку, несмотря на дождь.' }
      ],
      morph: 'durch-zieh-en',
      meaningType: 'colloquial',
      meaningExplanation: 'В живой разговорной речи durchziehen значит «дожать, довести задуманное до конца несмотря на трудности» (помимо буквального «протянуть насквозь»).',
      meaningExamples: [{ de: 'Wir ziehen das Projekt jetzt durch!', ru: 'Мы сейчас дожмём этот проект до конца!' }],
      note: 'Разговорное, но очень частое в офисе: «Das ziehen wir durch!» — доведём до конца, не сдадимся.'
    },
    {
      id: 'r-ziehen-zug', pos: 'noun',
      de: 'Zug', article: 'der', plural: 'die Züge',
      ru: 'поезд; ход (в игре); черта (лица, характера); тяга, сквозняк',
      examples: [
        { sense: 'поезд', de: 'Der [[Zug]] nach München hat 40 Minuten Verspätung.', ru: 'Поезд в Мюнхен опаздывает на 40 минут.' },
        { sense: 'ход (в игре, перен.)', de: 'Jetzt bist du am [[Zug]].', ru: 'Теперь твой ход.' }
      ],
      morph: 'Zug',
      meaningType: 'polysemous',
      meaningExplanation: 'der Zug имеет сразу несколько самостоятельных значений: «поезд», «ход в игре», «черта лица/характера» и «сквозняк, тяга».',
      meaningExamples: [{ de: 'den Zug nach Hamburg nehmen', ru: 'сесть на поезд до Гамбурга' }, { de: 'ein kluger Zug', ru: 'умный ход' }],
      note: 'Множество значений от «тянуть»: поезд (то, что тянут), ход, глоток («in einem Zug» — залпом), черта характера («ein schöner Zug von ihm»). «Im Zuge der Umstellung» — в ходе перехода.'
    },
    {
      id: 'r-ziehen-umzug', pos: 'noun', transparency: 'transparent',
      de: 'Umzug', article: 'der', plural: 'die Umzüge',
      ru: 'переезд; шествие',
      examples: [
        { sense: 'переезд', de: 'Für den [[Umzug]] nehme ich zwei Tage Urlaub.', ru: 'На переезд я возьму два дня отпуска.' },
        { sense: 'шествие, парад', de: 'Beim Karneval gibt es einen großen [[Umzug]] durch die Stadt.', ru: 'На карнавале по городу проходит большое шествие.' }
      ],
      morph: 'Um-zug',
      meaningType: 'polysemous',
      meaningExplanation: 'Чаще всего der Umzug — это «переезд на новую квартиру», но также это «праздничное шествие, парад» (например, карнавальное).',
      meaningExamples: [{ de: 'Hilfe beim Umzug brauchen', ru: 'нуждаться в помощи с переездом' }, { de: 'ein bunter Karnevalsumzug', ru: 'яркое карнавальное шествие' }],
      note: 'Во многих фирмах есть «Sonderurlaub für Umzug» — день отпуска на переезд. «Das Umzugsunternehmen» — фирма по переездам.'
    },
    {
      id: 'r-ziehen-anzug', pos: 'noun', transparency: 'figurative',
      de: 'Anzug', article: 'der', plural: 'die Anzüge',
      ru: 'костюм (мужской)',
      examples: [
        { de: 'Zum Vorstellungsgespräch trage ich einen [[Anzug]].', ru: 'На собеседование я надену костюм.' },
        { de: 'In unserer IT-Abteilung trägt niemand einen [[Anzug]].', ru: 'В нашем IT-отделе никто не носит костюм.' }
      ],
      morph: 'An-zug',
      note: 'От «anziehen» — надевать: то, что надевают. «Der Schutzanzug» — защитный костюм. Женский деловой костюм — «das Kostüm» (не путать с карнавальным!) или «der Hosenanzug».'
    },
    {
      id: 'r-ziehen-beziehung', pos: 'noun', transparency: 'opaque',
      alsoIn: [['words', 'people']], // Wortliste p. 27
      de: 'Beziehung', article: 'die', plural: 'die Beziehungen',
      ru: 'отношения (между людьми); связь, отношение',
      examples: [
        { sense: 'романтические отношения', de: 'Die beiden sind seit drei Jahren in einer [[Beziehung]].', ru: 'Они уже три года в отношениях.' },
        { sense: 'связи, знакомства', de: 'Ohne [[Beziehungen]] bekommt man hier keinen Termin.', ru: 'Без связей тут к врачу не записаться.' }
      ],
      morph: 'Be-zieh-ung',
      meaningType: 'polysemous',
      meaningExplanation: 'В единственном числе die Beziehung чаще означает «романтические отношения» (или связь между явлениями), а во множественном (Beziehungen) — «деловые связи, знакомства».',
      meaningExamples: [{ de: 'in einer festen Beziehung sein', ru: 'быть в серьёзных отношениях' }, { de: 'gute Beziehungen in der Branche haben', ru: 'иметь хорошие связи в отрасли' }],
      note: 'Из «тянуть» напрямую не выводится — учите как отдельное слово. «In Beziehung zu + Dat.» — по отношению к. «Beziehungen haben» — иметь связи (ср. шутку «Vitamin B»).'
    },
    {
      id: 'r-ziehen-erziehung', pos: 'noun', transparency: 'figurative',
      de: 'Erziehung', article: 'die',
      ru: 'воспитание',
      examples: [
        { de: 'Gute [[Erziehung]] beginnt mit gutem Vorbild.', ru: 'Хорошее воспитание начинается с хорошего примера.' },
        { de: 'Die Eltern teilen sich die [[Erziehung]] ihrer Kinder.', ru: 'Родители вместе занимаются воспитанием детей.' }
      ],
      morph: 'Er-zieh-ung',
      note: '«Die Elternzeit» — отпуск по уходу за ребёнком; «das Erziehungsgeld» — старое название пособия (сейчас Elterngeld).'
    }
  ],
  pairs: [
    {
      a: { stress: 'ǘberziehen', sep: 'trennbar', ru: 'надевать (поверх)', ex: { de: 'Zieh dir lieber noch einen Pulli [[über]].', ru: 'Надень-ка лучше ещё свитер сверху.' } },
      b: { stress: 'überzíehen', sep: 'untrennbar', ru: 'превышать (лимит, время)', ex: { de: 'Ich habe mein Konto [[überzogen]].', ru: 'Я ушёл в минус по счёту.' } }
    }
  ]
});
