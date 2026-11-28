/* Health & Doctor, batch 2: treatment, medicine, emergencies, care. Source: Goethe B1 Wortliste. */
GT.register({ tab: 'words', topic: 'health', items: [
{
  id: 'b1-health-ueberweisung', pos: 'noun',
  de: 'Überweisung', article: 'die', plural: 'die Überweisungen',
  ru: 'направление (к специалисту); банковский перевод',
  examples: [
    { sense: 'направление к специалисту', de: 'Für den Orthopäden brauchen Sie eine [[Überweisung]] vom Hausarzt.', ru: 'К ортопеду нужно направление от семейного врача.' },
    { sense: 'банковский перевод', de: 'Ich habe die Miete per [[Überweisung]] bezahlt.', ru: 'Я оплатил аренду банковским переводом.' }
  ],
  morph: 'Über-weis-ung', root: 'weisen',
  parts: [['über-', 'через, «передать дальше»'], ['weis', 'основа weisen — указывать, направлять'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'figurative',
  family: ['überweisen', 'der Ausweis', 'der Hinweis', 'beweisen', 'nachweisen', 'der Beweis'],
  meaningType: 'polysemous',
  meaningExplanation: 'Überweisung в быту в Германии регулярно встречается в двух разных сферах: направление к врачу-специалисту и банковский перевод денег.',
  meaningExamples: [{ de: 'eine Überweisung zum Facharzt', ru: 'направление к специалисту' }, { de: 'eine Überweisung per Online-Banking', ru: 'банковский перевод онлайн' }],
  note: 'Значение решает контекст: у врача — направление, в банке — перевод. Глагол: «jdn. zum Facharzt überweisen» / «Geld auf ein Konto überweisen». Все существительные на -ung — женского рода, артикль угадывать не нужно.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола überweisen (über- «через» + weisen «указывать, направлять») + -ung.\nПроисхождение: буквально «направлять, передавать на другую сторону»; с XVIII–XIX вв. закрепилось в банковском деле (перевод денег на другой счёт) и в медицине (направление пациента к другому врачу).\nПрозрачность: переносная — корень weisen виден, но оба специальных значения нужно знать по контексту.',
    source: 'DWDS (Pfeifer), s.v. überweisen / weisen',
    evidence: 'über- + weisen («направлять, передавать другому»); финансовое и медицинское значения развились из идеи передачи адресату.'
  },
  ru_link: null
},
{
  id: 'b1-health-notaufnahme', pos: 'noun',
  de: 'Notaufnahme', article: 'die', plural: 'die Notaufnahmen',
  ru: 'приёмное отделение, неотложка (в больнице)',
  examples: [
    { de: 'Nachts ist die Praxis zu, deshalb sind wir in die [[Notaufnahme]] gefahren.', ru: 'Ночью кабинет закрыт, поэтому мы поехали в приёмное отделение.' },
    { de: 'In der [[Notaufnahme]] mussten wir drei Stunden warten.', ru: 'В приёмном отделении нам пришлось ждать три часа.' }
  ],
  morph: 'Not-aufnahme', root: 'nehmen',
  parts: [['Not-', 'die Not — беда, экстренность'], ['Aufnahme', 'die Aufnahme — приём (от aufnehmen)']],
  transparency: 'transparent',
  family: ['der Notfall', 'der Notarzt', 'aufnehmen', 'die Aufnahme', 'nehmen'],
  note: 'Только для настоящих экстренных случаев. Если можно подождать, а кабинет закрыт — звоните 116 117 (дежурные врачи). «Aufnehmen» — принять (пациента), а также записать (аудио/видео).',
  why: {
    confidence: 'high',
    root: 'nehmen',
    text: 'Состав: die Not («беда, экстренность») + die Aufnahme («приём», от aufnehmen).\nПроисхождение: современное медицинское сложение — буквально «экстренный приём (в больницу)», от значения глагола aufnehmen «принимать пациента в стационар».\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS, s.v. Notaufnahme / aufnehmen',
    evidence: 'Сложение Not («экстренная нужда») + Aufnahme («приём в учреждение», от aufnehmen).'
  },
  ru_link: null
},
{
  id: 'b1-health-krankenwagen', pos: 'noun',
  de: 'Krankenwagen', article: 'der', plural: 'die Krankenwagen',
  ru: 'машина скорой помощи',
  examples: [
    { de: 'Ruf bitte sofort einen [[Krankenwagen]]!', ru: 'Срочно вызови скорую!' },
    { de: 'Der [[Krankenwagen]] war nach acht Minuten da.', ru: 'Скорая приехала через восемь минут.' }
  ],
  morph: 'Kranken-wagen', root: 'krank',
  parts: [['Kranken-', 'die Kranken — больные'], ['Wagen', 'der Wagen — машина, повозка']],
  transparency: 'transparent',
  family: ['krank', 'das Krankenhaus', 'die Krankenkasse', 'der Wagen', 'der Rettungswagen'],
  note: 'Профессионалы и новости говорят ещё «der Rettungswagen» (RTW). Номер — 112. Мн. ч. не меняется: die Krankenwagen (на юге Германии также «Krankenwägen»).',
  why: {
    confidence: 'high',
    text: 'Состав: die Kranken («больные») + der Wagen («повозка, автомобиль»).\nПроисхождение: сложение XIX в. — буквально «повозка для перевозки больных». Немецкое der Wagen восходит к индоевропейскому корню *weǵʰ- («везти»), родственному русскому «воз».\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Wagen; Vasmer: воз',
    evidence: 'Kranken + Wagen (др.-в.-нем. wagan < и.-е. *weǵʰ- «везти», родственно рус. «воз»).'
  },
  ru_link: null
},
{
  id: 'b1-health-unfall', pos: 'noun',
  de: 'Unfall', article: 'der', plural: 'die Unfälle',
  ru: 'несчастный случай, авария',
  examples: [
    { de: 'Auf dem Weg zur Arbeit hatte ich einen kleinen [[Unfall]] mit dem Fahrrad.', ru: 'По дороге на работу я попал в небольшую аварию на велосипеде.' },
    { de: 'Bei dem [[Unfall]] wurde zum Glück niemand verletzt.', ru: 'К счастью, в аварии никто не пострадал.' }
  ],
  morph: 'Un-fall', root: 'fallen',
  parts: [['Un-', 'отрицательная приставка: «плохой», «не-»'], ['Fall', 'der Fall — случай (от fallen)']],
  transparency: 'figurative',
  family: ['fallen', 'der Fall', 'der Notfall', 'der Arbeitsunfall', 'der Zufall', 'unfallfrei'],
  note: '«Einen Unfall haben / bauen (разг.) / verursachen» (стать виновником). «Der Arbeitsunfall» — несчастный случай на работе: обязательно скажите врачу, потому что платит другая страховка (Berufsgenossenschaft).',
  why: {
    confidence: 'high',
    text: 'Состав: приставка un- (здесь «дурной, неудачный») + der Fall («случай», от fallen «падать»).\nПроисхождение: средневерхненемецкое unval значило «несчастье, беда, дурной жребий». Как и в Unwetter («непогода») или Unkraut («сорняк»), приставка un- здесь даёт негативную оценку, а не просто отрицание.\nПрозрачность: переносная — «плохой случай» хорошо считывается.',
    source: 'DWDS (Pfeifer), s.v. Unfall / un-',
    evidence: 'Ср.-в.-нем. unval «несчастье, беда» из пейоративного un- + Fall («случай, жребий» от fallen).'
  },
  ru_link: null
},
{
  id: 'b1-health-wunde', pos: 'noun',
  de: 'Wunde', article: 'die', plural: 'die Wunden',
  ru: 'рана',
  examples: [
    { de: 'Die [[Wunde]] muss genäht werden.', ru: 'Рану нужно зашить.' },
    { de: 'Halt die [[Wunde]] sauber, dann heilt sie schneller.', ru: 'Держи рану в чистоте, тогда она быстрее заживёт.' }
  ],
  morph: 'Wunde',
  family: ['wund', 'verwunden', 'verwundet', 'die Verletzung', 'heilen'],
  note: 'Рана заживает: «Die Wunde heilt». Типичные глаголы: reinigen (промыть), desinfizieren, verbinden (перевязать), nähen (зашить). Прилагательное «wund» — натёртый, воспалённый.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводная основа Wunde (от того же корня прилагательное wund «раненый, натёртый»).\nПроисхождение: общегерманское слово (др.-в.-нем. wunta, родственно английскому wound «рана»).\nПрозрачность: базовый корень (ср. verwunden «ранить»).',
    source: 'DWDS (Pfeifer), s.v. Wunde',
    evidence: 'Др.-в.-нем. wunta < герм. *wundō (родственно англ. wound), при прилагательном wund.'
  },
  ru_link: null
},
{
  id: 'b1-health-pflaster', pos: 'noun',
  de: 'Pflaster', article: 'das', plural: 'die Pflaster',
  ru: 'пластырь; мостовая, брусчатка',
  examples: [
    { sense: 'пластырь', de: 'Hast du ein [[Pflaster]]? Ich habe mich am Papier geschnitten.', ru: 'У тебя есть пластырь? Я порезался бумагой.' },
    { sense: 'пластырь (клейкость)', de: 'Das [[Pflaster]] klebt nicht mehr richtig.', ru: 'Пластырь уже плохо держится.' }
  ],
  morph: 'Pflaster',
  family: ['das Straßenpflaster', 'pflastern', 'der Verband', 'kleben'],
  meaningType: 'polysemous',
  meaningExplanation: 'Слово das Pflaster имеет два несвязанных в современном языке значения: медицинский пластырь и мостовая (брусчатка).',
  meaningExamples: [{ de: 'ein Pflaster auf die Wunde kleben', ru: 'наклеить пластырь на рану' }, { de: 'auf dem alten Pflaster gehen', ru: 'идти по старой брусчатке' }],
  note: 'Средний род: das Pflaster, мн. ч. не меняется. Второе значение — мостовая («Kopfsteinpflaster» — брусчатка). Повязка побольше — «der Verband».',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Pflaster).\nПроисхождение: раннее заимствование (др.-в.-нем. pflastar) через латинское emplastrum из греческого émplastron («то, что намазывают»). Слово сначала обозначало и лечебную мазь-пластырь, и известковый раствор/покрытие пола, откуда второе значение — «мостовая».\nПрозрачность: два значения (пластырь и мостовая) связаны историей заимствования, но сегодня воспринимаются отдельно.',
    source: 'DWDS (Pfeifer), s.v. Pflaster; Vasmer: пластырь',
    evidence: 'Др.-в.-нем. pflastar < лат. emplastrum < греч. émplastron; от значения «строительный раствор, покрытие» развилось «мостовая».'
  },
  ru_link: { type: 'internationalism', text: 'пластырь: оба восходят к греческому émplastron («то, что намазывают»), через латинское emplastrum.' }
},
{
  id: 'b1-health-salbe', pos: 'noun',
  de: 'Salbe', article: 'die', plural: 'die Salben',
  ru: 'мазь',
  examples: [
    { de: 'Tragen Sie die [[Salbe]] zweimal täglich dünn auf.', ru: 'Наносите мазь тонким слоем два раза в день.' },
    { de: 'Gegen den Sonnenbrand hat mir die Apothekerin eine [[Salbe]] empfohlen.', ru: 'От солнечного ожога фармацевт посоветовала мне мазь.' }
  ],
  morph: 'Salbe',
  family: ['salben', 'die Creme', 'auftragen', 'eincremen'],
  note: 'Глагол: «die Salbe auftragen» — наносить мазь. Обычная косметика — «die Creme»; «Salbe» звучит по-медицински.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное существительное (мн. ч. die Salben).\nПроисхождение: общегерманское слово (др.-в.-нем. salba «мазь, жир», родственно английскому salve), восходит к индоевропейскому корню *selp- со значением «жир, масло».\nПрозрачность: базовый корень.',
    source: 'DWDS (Pfeifer), s.v. Salbe',
    evidence: 'Др.-в.-нем. salba < герм. *salbō < и.-е. *selp- «жир, масло» (родственно англ. salve).'
  },
  ru_link: null
},
{
  id: 'b1-health-spritze', pos: 'noun',
  de: 'Spritze', article: 'die', plural: 'die Spritzen',
  ru: 'укол; шприц',
  examples: [
    { de: 'Gegen die Schmerzen bekommen Sie jetzt eine [[Spritze]].', ru: 'Сейчас вам сделают укол от боли.' },
    { de: 'Ich habe ein bisschen Angst vor der [[Spritze]].', ru: 'Я немного боюсь укола.' }
  ],
  morph: 'Spritze', root: 'spritzen',
  family: ['spritzen', 'der Spritzer', 'die Impfung'],
  meaningType: 'polysemous',
  meaningExplanation: 'die Spritze обозначает как сам инструмент (шприц), так и процедуру (укол, инъекцию).',
  meaningExamples: [{ de: 'eine Spritze gegen Schmerzen bekommen', ru: 'получить укол от боли' }, { de: 'eine sterile Spritze benutzen', ru: 'использовать стерильный шприц' }],
  note: 'По-немецки укол «получают»: «eine Spritze bekommen»; врач её «gibt». «Spritzen» — ещё и брызгать: «Das Auto hat mich nass gespritzt».',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола spritzen («брызгать, впрыскивать»).\nПроисхождение: с XVI–XVII вв. Spritze обозначало прибор для разбрызгивания (в т. ч. пожарную помпу), затем медицинский шприц, а по смежности — саму инъекцию. Русское «шприц» заимствовано из немецкого, но закрепилось только за инструментом.\nПрозрачность: связь с глаголом spritzen легко видна.',
    source: 'DWDS (Pfeifer), s.v. Spritze / spritzen; Vasmer: шприц',
    evidence: 'От spritzen («брызгать»); сначала «прибор для впрыскивания», затем шприц и по метонимии сам укол.'
  },
  ru_link: { type: 'loan_in_russian', text: 'Spritze → шприц. Русский взял слово из немецкого, но только в значении «инструмент». Сам укол по-русски — укол.' }
},
{
  id: 'b1-health-tablette', pos: 'noun',
  de: 'Tablette', article: 'die', plural: 'die Tabletten',
  ru: 'таблетка',
  examples: [
    { de: 'Nehmen Sie dreimal täglich eine [[Tablette]] nach dem Essen.', ru: 'Принимайте по одной таблетке три раза в день после еды.' },
    { de: 'Ich habe eine [[Tablette]] gegen Kopfschmerzen genommen.', ru: 'Я выпил таблетку от головной боли.' }
  ],
  morph: 'Tablette',
  family: ['das Medikament', 'die Pille', 'einnehmen', 'das Tablett'],
  note: 'Таблетку «nehmen» или (официально, в инструкции) «einnehmen»: «vor / nach dem Essen». Не путать с «das Tablett» (поднос) и «das Tablet» (планшет).',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Tabletten).\nПроисхождение: заимствовано в XIX в. из французского tablette («небольшая дощечка, плиточка», уменьшительное от table < лат. tabula «доска»). В фармации так назвали спрессованную лекарственную форму.\nПрозрачность: непроизводное заимствование, совпадает с русским.',
    source: 'DWDS (Pfeifer), s.v. Tablette; Vasmer: таблетка',
    evidence: 'Заимствовано в XIX в. из фр. tablette («плиточка», уменьш. от table < лат. tabula).'
  },
  ru_link: { type: 'internationalism', text: 'таблетка: оба слова из французского tablette. Значение то же.' }
},
{
  id: 'b1-health-tropfen', pos: 'noun',
  de: 'Tropfen', article: 'der', plural: 'die Tropfen',
  ru: 'капля; (мн. ч.) капли (лекарство)',
  examples: [
    { de: 'Der Arzt hat mir [[Tropfen]] für die Augen verschrieben.', ru: 'Врач выписал мне глазные капли.' },
    { de: 'Nehmen Sie zehn [[Tropfen]] mit etwas Wasser.', ru: 'Принимайте десять капель с небольшим количеством воды.' }
  ],
  morph: 'Tropfen', root: 'tropfen',
  family: ['tropfen', 'der Tropf', 'die Nasentropfen', 'die Augentropfen'],
  note: 'Как лекарство — почти всегда во мн. ч.: «Nasentropfen, Augentropfen, Ohrentropfen». «Der Tropf» — капельница («am Tropf hängen»). Глагол «tropfen» — капать.',
  why: {
    confidence: 'high',
    text: 'Состав: существительное der Tropfen (мн. ч. совпадает), рядом глагол tropfen («капать»).\nПроисхождение: общегерманское слово (др.-в.-нем. tropfo, родственно английскому drop «капля»), связано с сильным глаголом triefen («капать, сочиться»).\nПрозрачность: базовый корень.',
    source: 'DWDS (Pfeifer), s.v. Tropfen',
    evidence: 'Др.-в.-нем. tropfo < герм. *drupōn- (родственно англ. drop и нем. triefen).'
  },
  ru_link: null
},
{
  id: 'b1-health-pille', pos: 'noun',
  de: 'Pille', article: 'die', plural: 'die Pillen',
  ru: 'пилюля, таблетка; (die Pille) противозачаточные таблетки',
  examples: [
    { sense: 'таблетка, пилюля', de: 'Diese kleinen weißen [[Pillen]] muss ich jeden Morgen schlucken.', ru: 'Эти маленькие белые таблетки мне нужно глотать каждое утро.' },
    { sense: 'противозачаточные таблетки (die Pille)', de: 'Sie nimmt seit Jahren die [[Pille]].', ru: 'Она уже много лет принимает противозачаточные.' }
  ],
  morph: 'Pille',
  family: ['die Tablette', 'das Medikament', 'schlucken'],
  meaningType: 'polysemous',
  meaningExplanation: 'С неопределённым артиклем eine Pille — это любая таблетка/пилюля, а с определённым die Pille обычно означает именно противозачаточные таблетки.',
  meaningExamples: [{ de: 'eine bittere Pille schlucken', ru: 'проглотить горькую пилюлю' }, { de: 'die Pille nehmen', ru: 'принимать противозачаточные' }],
  note: '«Die Pille» с определённым артиклем обычно значит противозачаточные таблетки. Для обычных лекарств чаще говорят «Tablette».',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Pillen).\nПроисхождение: заимствовано в XIV–XV вв. из латинского pilula («шарик», уменьшительное от pila «мяч, шар») — по круглой форме старых аптекарских лекарств. С 1960-х гг. «die Pille» закрепилось за противозачаточными таблетками.\nПрозрачность: непроизводное заимствование.',
    source: 'DWDS (Pfeifer), s.v. Pille; Vasmer: пилюля',
    evidence: 'Из лат. pilula («шарик», уменьш. от pila) в XIV–XV вв.'
  },
  ru_link: { type: 'internationalism', text: 'пилюля: оба слова от латинского pilula («шарик»).' }
},
{
  id: 'b1-health-schmerzmittel', pos: 'noun',
  de: 'Schmerzmittel', article: 'das', plural: 'die Schmerzmittel',
  ru: 'обезболивающее',
  examples: [
    { de: 'Nehmen Sie das [[Schmerzmittel]] nur, wenn es wirklich nötig ist.', ru: 'Принимайте обезболивающее только при необходимости.' },
    { de: 'Gibt es dieses [[Schmerzmittel]] auch ohne Rezept?', ru: 'Это обезболивающее продаётся без рецепта?' }
  ],
  morph: 'Schmerz-mittel', root: 'Mittel',
  parts: [['Schmerz-', 'der Schmerz — боль'], ['Mittel', 'das Mittel — средство']],
  transparency: 'transparent',
  family: ['der Schmerz', 'das Mittel', 'das Hausmittel', 'das Lebensmittel', 'das Suchtmittel'],
  note: 'Средний род из-за «das Mittel» (средство): Waschmittel, Lebensmittel, Verkehrsmittel. «Ein Mittel gegen + Akk.»: ein Mittel gegen Husten — средство от кашля.',
  why: {
    confidence: 'high',
    text: 'Состав: der Schmerz («боль») + das Mittel («средство»).\nПроисхождение: das Mittel восходит к die Mitte («середина»): то, что находится «посередине», связывает цель и результат → «посредник, средство» (ср. русское «средство» от «середина»!).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Mittel / Schmerz; Vasmer: средство',
    evidence: 'Mittel — субстантивация ср.-в.-нем. mittel («средний», от Mitte): «посредствующее» → «средство».'
  },
  ru_link: null
},
{
  id: 'b1-health-therapie', pos: 'noun',
  de: 'Therapie', article: 'die', plural: 'die Therapien',
  ru: 'терапия, лечение; (часто) психотерапия',
  examples: [
    { de: 'Nach der Operation beginnt die [[Therapie]] mit einem Physiotherapeuten.', ru: 'После операции начинается лечение у физиотерапевта.' },
    { de: 'Die [[Therapie]] hat gut angeschlagen.', ru: 'Лечение хорошо подействовало.' }
  ],
  morph: 'Therapie',
  family: ['der Therapeut', 'die Therapeutin', 'die Physiotherapie', 'die Psychotherapie', 'therapieren'],
  note: '«Eine Therapie machen» часто значит психотерапию. «Die Therapie schlägt an» — лечение действует. Ударение на последний слог: Thera-PIE.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Therapien).\nПроисхождение: заимствовано в XVIII в. через медицинскую латынь из греческого therapeía («уход, забота, лечение»).\nПрозрачность: международный медицинский термин (но помните отличие значения слова «Therapeut» от русского «терапевт»).',
    source: 'DWDS (Pfeifer), s.v. Therapie',
    evidence: 'В XVIII в. из греч. therapeía («уход, служение, лечение»).'
  },
  ru_link: { type: 'internationalism', text: 'терапия: общий греческий корень (therapeía). Но осторожно: русский «терапевт» — врач общей практики (по-немецки Hausarzt / Internist), а немецкий «Therapeut» — физио- или психотерапевт.' }
},
{
  id: 'b1-health-operation', pos: 'noun',
  de: 'Operation', article: 'die', plural: 'die Operationen',
  ru: 'операция',
  examples: [
    { de: 'Die [[Operation]] ist gut verlaufen.', ru: 'Операция прошла хорошо.' },
    { de: 'Vor der [[Operation]] dürfen Sie nichts essen.', ru: 'Перед операцией вам нельзя ничего есть.' }
  ],
  morph: 'Operation',
  family: ['operieren', 'der OP', 'der Operationssaal'],
  note: 'Глагол чаще в пассиве: «Ich werde am Knie operiert» — мне делают операцию на колене. Разговорно — «die OP» (произносится «О-Пе»). Также военная/полицейская операция.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Operationen).\nПроисхождение: из латинского operātio («действие, работа, труд», к opus «дело»). В XVI–XVII вв. термин закрепился за хирургическим вмешательством, а затем и за военными/финансовыми действиями.\nПрозрачность: международный термин, полностью совпадает с русским.',
    source: 'DWDS (Pfeifer), s.v. Operation',
    evidence: 'Из лат. operātio («действие, работа», от operārī / opus); хирургическое значение с XVI–XVII вв.'
  },
  ru_link: { type: 'internationalism', text: 'операция: оба слова от латинского operatio. Значение то же.' }
},
{
  id: 'b1-health-station', pos: 'noun',
  de: 'Station', article: 'die', plural: 'die Stationen',
  ru: 'отделение (больницы); станция, остановка',
  examples: [
    { sense: 'отделение больницы', de: 'Mein Vater liegt auf [[Station]] 4, Zimmer 12.', ru: 'Мой отец лежит в 4-м отделении, палата 12.' },
    { sense: 'станция, остановка', de: 'Wie viele [[Stationen]] sind es noch bis zum Hauptbahnhof?', ru: 'Сколько ещё остановок до главного вокзала?' }
  ],
  morph: 'Station',
  family: ['stationär', 'ambulant', 'die Intensivstation'],
  meaningType: 'polysemous',
  meaningExplanation: 'В больнице die Station — это отделение (хирургия, интенсивная терапия), а в городе — станция метро или остановка.',
  meaningExamples: [{ de: 'Sie liegt auf Station 3.', ru: 'Она лежит в 3-м отделении.' }, { de: 'an der nächsten Station aussteigen', ru: 'выйти на следующей станции' }],
  note: 'В больнице: «auf Station liegen» (без артикля). «Stationär» — стационарно; «ambulant» — амбулаторно (в тот же день домой). «Die Intensivstation» — реанимация.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Stationen).\nПроисхождение: от латинского statio («стояние, стоянка, пост», к stāre «стоять»). От идеи «места стоянки / поста» разошлись значения «остановка, станция» и «отделение больницы» (пост ухода за пациентами).\nПрозрачность: общий латинский корень со словом «станция», но больничное значение нужно запомнить.',
    source: 'DWDS (Pfeifer), s.v. Station',
    evidence: 'Из лат. statio («стояние, пост, стоянка», к stāre); в больнице — «отделение, пост ухода».'
  },
  ru_link: { type: 'internationalism', text: 'станция: общий латинский корень (statio). Но отделение больницы по-русски — отделение, а не станция.' }
},
{
  id: 'b1-health-klinik', pos: 'noun',
  de: 'Klinik', article: 'die', plural: 'die Kliniken',
  ru: 'клиника, больница (часто специализированная)',
  examples: [
    { de: 'Sie wurde in eine [[Klinik]] für Herzkrankheiten gebracht.', ru: 'Её отвезли в кардиологическую клинику.' },
    { de: 'Nach der Operation bleibt er noch eine Woche in der [[Klinik]].', ru: 'После операции он ещё неделю пробудет в больнице.' }
  ],
  morph: 'Klinik',
  family: ['das Krankenhaus', 'klinisch', 'die Uniklinik', 'das Klinikum'],
  note: 'Часто синоним Krankenhaus, особенно для специализированных и университетских больниц («Uniklinik»). Маленькая частная «клиника» по-немецки — скорее Praxis.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Kliniken).\nПроисхождение: заимствовано в XVIII в. через французское clinique из греческого klinikḗ (téchnē) — буквально «искусство врачевания у постели больного» (от klínē «ложе, кровать»).\nПрозрачность: международный термин, совпадает с русским.',
    source: 'DWDS (Pfeifer), s.v. Klinik',
    evidence: 'Через фр. clinique (XVIII в.) < греч. klinikḗ (от klínē «ложе, постель»).'
  },
  ru_link: { type: 'internationalism', text: 'клиника: оба слова от греческого klinikē («лечение у постели больного»).' }
},
{
  id: 'b1-health-patient', pos: 'noun',
  de: 'Patient', article: 'der', plural: 'die Patienten',
  ru: 'пациент',
  examples: [
    { de: 'Der Arzt spricht gerade mit einem anderen [[Patienten]].', ru: 'Врач сейчас разговаривает с другим пациентом.' },
    { de: 'Als [[Patientin]] haben Sie das Recht, Ihre Unterlagen zu sehen.', ru: 'Как пациентка вы имеете право видеть свою медицинскую документацию.' }
  ],
  morph: 'Patient',
  family: ['die Patientin', 'die Patientenakte', 'geduldig', 'die Geduld'],
  note: 'n-склонение! Во всех падежах, кроме Nominativ, окончание -en: den / dem / des Patienten. Женский род: die Patientin. «Die Patientenakte» — медицинская карта.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (n-склонение).\nПроисхождение: заимствовано в XVI в. из латинского patiēns («терпящий, страдающий», причастие от patī «терпеть»). От того же латинского корня пришло английское patient («терпеливый»).\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Patient',
    evidence: 'Заимствовано в XVI в. из лат. patiēns («страдающий, терпящий», к patī).'
  },
  ru_link: { type: 'internationalism', text: 'пациент: оба слова от латинского patiens («терпящий, страдающий»).' }
},
{
  id: 'b1-health-krankenpfleger', pos: 'noun',
  de: 'Krankenpfleger', article: 'der', plural: 'die Krankenpfleger',
  ru: 'медбрат; (die Krankenpflegerin) медсестра',
  examples: [
    { de: 'Der [[Krankenpfleger]] misst zweimal am Tag meinen Blutdruck.', ru: 'Медбрат дважды в день измеряет мне давление.' },
    { de: 'Fragen Sie bitte die [[Krankenschwester]], wann die Visite ist.', ru: 'Спросите, пожалуйста, медсестру, когда обход.' }
  ],
  morph: 'Kranken-pfleg-er', root: 'pflegen',
  parts: [['Kranken-', 'die Kranken — больные'], ['pfleg', 'основа pflegen — ухаживать'], ['-er', 'тот, кто делает']],
  transparency: 'transparent',
  family: ['pflegen', 'die Pflege', 'der Pfleger', 'die Krankenschwester', 'die Pflegefachkraft'],
  note: '«Krankenschwester» — традиционное слово для медсестры, в быту до сих пор обычное. Официально профессия теперь называется «Pflegefachfrau / Pflegefachmann». «Die Visite» — обход врачей.',
  why: {
    confidence: 'high',
    text: 'Состав: die Kranken («больные») + der Pfleger («тот, кто ухаживает», от pflegen + -er).\nПроисхождение: глагол pflegen в древневерхненемецком (pflegan) значил «брать на себя заботу, ручаться, ухаживать». Сложение Krankenpfleger буквально значит «ухаживающий за больными».\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. pflegen / Krankenpfleger',
    evidence: 'Kranken + Pfleger (от pflegen < др.-в.-нем. pflegan «заботиться, ухаживать»).'
  },
  ru_link: null
},
{
  id: 'b1-health-versichertenkarte', pos: 'noun',
  de: 'Versichertenkarte', article: 'die', plural: 'die Versichertenkarten',
  ru: 'карточка медицинского страхования',
  examples: [
    { de: 'Haben Sie Ihre [[Versichertenkarte]] dabei?', ru: 'У вас с собой карточка страховки?' },
    { de: 'Am Empfang musste ich zuerst meine [[Versichertenkarte]] zeigen.', ru: 'На ресепшене мне сначала нужно было показать карточку страховки.' }
  ],
  morph: 'Versicherten-karte', root: 'sicher',
  parts: [['Versicherten-', 'der/die Versicherte — застрахованный'], ['Karte', 'die Karte — карта, карточка']],
  transparency: 'transparent',
  family: ['versichern', 'die Versicherung', 'versichert', 'der/die Versicherte', 'sicher', 'die Gesundheitskarte'],
  note: 'Первый вопрос в любом кабинете. Ещё её называют «Gesundheitskarte» или «Krankenkassenkarte». Показывать нужно раз в квартал.',
  why: {
    confidence: 'high',
    text: 'Состав: der/die Versicherte («застрахованный», от versichern) + die Karte («карточка»).\nПроисхождение: versichern («обезопасить, застраховать») образовано от sicher (< лат. sēcūrus «безопасный»); die Karte заимствовано через французское carte из латинского charta («лист папируса, бумаги»).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. sicher / Karte',
    evidence: 'Versicherte (от versichern < sicher < лат. sēcūrus) + Karte (< фр. carte < лат. charta).'
  },
  ru_link: null
},
{
  id: 'b1-health-altenheim', pos: 'noun',
  de: 'Altenheim', article: 'das', plural: 'die Altenheime',
  ru: 'дом престарелых',
  examples: [
    { de: 'Meine Oma lebt seit einem Jahr im [[Altenheim]].', ru: 'Моя бабушка уже год живёт в доме престарелых.' },
    { de: 'Die [[Altenheime]] suchen dringend Pflegepersonal.', ru: 'Домам престарелых срочно нужен персонал по уходу.' }
  ],
  morph: 'Alten-heim', root: 'alt',
  parts: [['Alten-', 'die Alten — старики, пожилые'], ['Heim', 'das Heim — дом, приют']],
  transparency: 'transparent',
  family: ['alt', 'das Alter', 'das Heim', 'das Pflegeheim', 'die Heimat'],
  note: 'Средний род из-за «das Heim». Сейчас чаще говорят «das Seniorenheim» или «das Pflegeheim» (с медицинским уходом); «Altenheim» звучит немного старомодно, но понятно всем.',
  why: {
    confidence: 'high',
    text: 'Состав: die Alten («пожилые») + das Heim («дом, приют»).\nПроисхождение: das Heim — древнее общегерманское слово («жилище, селение», родственно английскому home); в сложениях XX в. (Altenheim, Studentenwohnheim, Pflegeheim) часто обозначает жилое учреждение.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Heim',
    evidence: 'Alten + das Heim (< др.-в.-нем. heim «жилище, дом», родственно англ. home).'
  },
  ru_link: null
},
{
  id: 'b1-health-ergebnis', pos: 'noun',
  de: 'Ergebnis', article: 'das', plural: 'die Ergebnisse',
  ru: 'результат',
  examples: [
    { de: 'Die [[Ergebnisse]] der Blutuntersuchung bekommen Sie nächste Woche.', ru: 'Результаты анализа крови вы получите на следующей неделе.' },
    { de: 'Das [[Ergebnis]] des Scans war eindeutig: Der Rechner war infiziert.', ru: 'Результат сканирования был однозначным: компьютер заражён.' }
  ],
  morph: 'Er-geb-nis', root: 'geben',
  parts: [['er-', 'достижение результата (sich ergeben — получаться)'], ['geb', 'основа geben — давать'], ['-nis', 'суффикс существительного (das или die)']],
  transparency: 'figurative',
  family: ['geben', 'sich ergeben', 'die Angabe', 'die Ausgabe', 'vergeben'],
  note: 'Во мн. ч. удваивается s: die Ergebnisse. Часто у врача и в IT-отчётах: «das Ergebnis liegt vor» (результат готов), «zu einem Ergebnis kommen» (прийти к результату).',
  why: {
    confidence: 'high',
    root: 'geben',
    text: 'Состав: от глагола ergeben (er- + geben) + суффикс -nis.\nПроисхождение: образовано в XVIII в. от значения «sich ergeben» («получаться, вытекать как итог»); закрепилось как немецкий эквивалент латинского Resultat.\nПрозрачность: переносная — корень geben виден, смысл понятен через глагол ergeben («давать результат»).',
    source: 'DWDS (Pfeifer), s.v. Ergebnis',
    evidence: 'Образование XVIII в. от (sich) ergeben («вытекать, получаться») + суффикс -nis.'
  },
  ru_link: null
},
{
  id: 'b1-health-temperatur', pos: 'noun',
  de: 'Temperatur', article: 'die', plural: 'die Temperaturen',
  ru: 'температура',
  examples: [
    { de: 'Haben Sie heute schon [[Temperatur]] gemessen?', ru: 'Вы сегодня уже мерили температуру?' },
    { de: 'Am Wochenende steigen die [[Temperaturen]] auf über 30 Grad.', ru: 'На выходных температура поднимется выше 30 градусов.' }
  ],
  morph: 'Temperatur',
  family: ['das Fieber', 'messen', 'das Thermometer', 'die Körpertemperatur'],
  note: '«Temperatur haben / erhöhte Temperatur» — небольшая температура, как русское «у меня температура». Примерно с 38 °C немцы говорят «Fieber». Мерить: «Fieber / Temperatur messen».',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Temperaturen).\nПроисхождение: из латинского temperātūra («надлежащее смешение, соразмерность», от temperāre «умеренно смешивать»); с XVII в. закрепилось в физике и медицине как «степень нагрева».\nПрозрачность: международный термин, совпадает с русским.',
    source: 'DWDS (Pfeifer), s.v. Temperatur',
    evidence: 'Из лат. temperātūra («надлежащая мера, смешение»); физическое значение «степень тепла» с XVII в.'
  },
  ru_link: { type: 'internationalism', text: 'температура: оба слова от латинского temperatura. Даже оборот совпадает: «Ich habe Temperatur» ≈ «у меня температура».' }
},
{
  id: 'b1-health-medizin', pos: 'noun',
  de: 'Medizin', article: 'die',
  ru: 'медицина; (разг.) лекарство',
  examples: [
    { sense: 'медицина (наука)', de: 'Meine Schwester studiert [[Medizin]] in Leipzig.', ru: 'Моя сестра изучает медицину в Лейпциге.' },
    { sense: 'лекарство (разг.)', de: 'Hast du deine [[Medizin]] heute schon genommen?', ru: 'Ты уже принял сегодня лекарство?' }
  ],
  morph: 'Medizin',
  family: ['medizinisch', 'der Mediziner', 'das Medikament', 'die Medizintechnik'],
  meaningType: 'polysemous',
  meaningExplanation: 'Основное значение — наука и отрасль «медицина», но в разговорной речи die Medizin также часто значит «лекарство».',
  meaningExamples: [{ de: 'Sie studiert Medizin.', ru: 'Она учится на врача (изучает медицину).' }, { de: 'Hast du deine Medizin genommen?', ru: 'Ты принял своё лекарство? (разг.)' }],
  note: 'Наука: «Medizin studieren». В значении «лекарство» — разговорно; нормативное слово — «das Medikament» (мн. ч. Medikamente).',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование.\nПроисхождение: из латинского (ars) medicīna («врачебное искусство, а также целебное средство», от medicus «врач»). В немецком, как и в английском medicine, сохранились оба значения: наука и (разг.) лекарство.\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Medizin',
    evidence: 'Из лат. medicīna («врачебное искусство; лекарство», от medicus).'
  },
  ru_link: { type: 'internationalism', text: 'медицина: оба слова от латинского medicina.' }
},
{
  id: 'b1-health-krankheit', pos: 'noun',
  de: 'Krankheit', article: 'die', plural: 'die Krankheiten',
  ru: 'болезнь, заболевание',
  examples: [
    { de: 'Wegen einer langen [[Krankheit]] konnte er ein halbes Jahr nicht arbeiten.', ru: 'Из-за долгой болезни он полгода не мог работать.' },
    { de: 'Diese [[Krankheit]] ist zum Glück nicht ansteckend.', ru: 'К счастью, эта болезнь не заразна.' }
  ],
  morph: 'Krank-heit', root: 'krank',
  parts: [['krank', 'больной'], ['-heit', 'прилагательное → существительное, всегда die']],
  transparency: 'transparent',
  family: ['krank', 'erkranken', 'der/die Kranke', 'das Krankenhaus', 'die Gesundheit'],
  note: '«An einer Krankheit leiden» (Dativ) — страдать болезнью. «Chronisch» — хронический, «ansteckend» — заразный. Существительные на -heit / -keit всегда женского рода.',
  why: {
    confidence: 'high',
    text: 'Состав: прилагательное krank («больной») + суффикс -heit.\nПроисхождение: суффикс -heit (изначально самостоятельное др.-в.-нем. существительное heit «состояние, вид, чин») превращает прилагательные в абстрактные существительные женского рода. Старое значение krank — «слабый, немощный».\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. Krankheit / -heit',
    evidence: 'krank + суффикс -heit (< др.-в.-нем. heit «состояние, образ»).'
  },
  ru_link: null
}
]});
