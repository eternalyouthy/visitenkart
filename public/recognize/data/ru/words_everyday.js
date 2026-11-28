/* RUSSIAN · Words: Everyday Core, People, Home, Food & Money (A2–B1).
 * t = Russian ("+" before the stressed vowel), en / de = meaning; explanations { en, de }. */
GT.register({ tab: 'words', topic: 'everyday', items: [
{
  id: 'ru-w-uspevat', pos: 'verb', level: 'B1', aspect: 'impf', t: 'успев+ать',
  forms: { praes: 'успев+аю, успев+аешь', praet: 'успев+ал', perf: 'pf. усп+еть (усп+ею)' },
  en: 'to manage (in time), to make it', de: 'es (rechtzeitig) schaffen',
  examples: [{ t: 'Я не [[усп+ею]] к трём часа́м.', en: 'I won’t make it by three o’clock.', de: 'Ich schaffe es nicht bis drei Uhr.' }],
  note: { en: 'No single-word equivalent in English or German: “to have enough time to do something”. Very common with infinitive: «успеть сделать».', de: 'Kein Einzelwort im Deutschen: „genug Zeit haben, etwas zu tun“. Sehr häufig mit Infinitiv: «успеть сделать».' }
},
{
  id: 'ru-w-reshat', pos: 'verb', level: 'A2', aspect: 'impf', t: 'реш+ать',
  forms: { praes: 'реш+аю, реш+аешь', praet: 'реш+ал', perf: 'pf. реш+ить (реш+у, реш+ишь)' },
  en: 'to decide; to solve', de: 'entscheiden; lösen',
  examples: [
    { sense: { en: 'to decide', de: 'entscheiden' }, t: 'Мы [[реш+или]] перенести́ встре́чу.', en: 'We decided to postpone the meeting.', de: 'Wir haben beschlossen, das Treffen zu verschieben.' },
    { sense: { en: 'to solve', de: 'lösen' }, t: 'Э́ту пробле́му на́до [[реш+ить]] до пя́тницы.', en: 'This problem must be solved by Friday.', de: 'Dieses Problem muss bis Freitag gelöst werden.' }
  ],
  meaningType: 'polysemous',
  meaningExplanation: { en: 'One verb for two English/German verbs: to decide (решить + infinitive) and to solve (решить задачу, проблему).', de: 'Ein Verb für zwei deutsche: entscheiden (решить + Infinitiv) und lösen (решить задачу, проблему).' },
  meaningExamples: [{ t: 'Я реш+ил уйти́.', en: 'I decided to leave.', de: 'Ich habe beschlossen zu gehen.' }, { t: 'реш+ить зада́чу', en: 'to solve a problem (task)', de: 'eine Aufgabe lösen' }]
},
{
  id: 'ru-w-pora', pos: 'predicative', level: 'A2', t: 'пор+а',
  en: 'it’s time (to …)', de: 'es ist Zeit (zu …)',
  examples: [{ t: 'Мне [[пор+а]], до за́втра!', en: 'I have to go, see you tomorrow!', de: 'Ich muss los, bis morgen!' }],
  note: { en: 'Impersonal: the person is in the dative («мне пора», «нам пора»). «Пора домой» — time to go home.', de: 'Unpersönlich: die Person steht im Dativ («мне пора», «нам пора»). «Пора домой» — Zeit, nach Hause zu gehen.' }
},
{
  id: 'ru-w-vsyo-ravno', pos: 'adv', level: 'B1', t: 'всё равн+о',
  en: 'anyway, still; it’s all the same (to me)', de: 'trotzdem, sowieso; (mir) egal',
  examples: [
    { sense: { en: 'anyway, still', de: 'trotzdem' }, t: 'Бы́ло тру́дно, но мы [[всё равн+о]] успе́ли.', en: 'It was hard, but we still made it.', de: 'Es war schwer, aber wir haben es trotzdem geschafft.' },
    { sense: { en: 'I don’t care', de: 'egal' }, t: 'Мне [[всё равн+о]], где обе́дать.', en: 'I don’t mind where we have lunch.', de: 'Mir ist egal, wo wir zu Mittag essen.' }
  ],
  meaningType: 'polysemous',
  meaningExplanation: { en: 'Two separate uses: as an adverb “anyway / still” and, with a dative, “it’s all the same to someone”. Tone matters: «мне всё равно» can sound indifferent or rude.', de: 'Zwei Verwendungen: als Adverb „trotzdem / sowieso“ und mit Dativ „jemandem egal“. Achtung: «мне всё равно» kann gleichgültig oder unhöflich klingen.' },
  meaningExamples: [{ t: 'Я всё равн+о приду́.', en: 'I’ll come anyway.', de: 'Ich komme trotzdem.' }, { t: 'Ему́ всё равн+о.', en: 'He doesn’t care.', de: 'Ihm ist es egal.' }]
},
{
  id: 'ru-w-hotya', pos: 'conj', level: 'B1', t: 'хот+я',
  en: 'although', de: 'obwohl',
  examples: [{ t: '[[Хот+я]] шёл дождь, мы пошли́ гуля́ть.', en: 'Although it was raining, we went for a walk.', de: 'Obwohl es regnete, gingen wir spazieren.' }],
  note: { en: 'Unlike German obwohl, хотя does not change word order. In speech «хотя…» also means “on second thoughts”.', de: 'Anders als bei „obwohl“ ändert sich die Wortstellung nicht. Umgangssprachlich heißt «хотя…» auch „wobei…, andererseits…“.' }
},
{
  id: 'ru-w-poetomu', pos: 'adv', level: 'A2', t: 'по+этому',
  en: 'therefore, that’s why', de: 'deshalb, darum',
  examples: [{ t: 'Я заболе́л, [[по+этому]] не пришёл.', en: 'I fell ill, that’s why I didn’t come.', de: 'Ich war krank, deshalb bin ich nicht gekommen.' }],
  note: { en: 'Do not confuse with «потому что» (because): поэтому introduces the consequence, потому что the reason.', de: 'Nicht verwechseln mit «потому что» (weil): поэтому leitet die Folge ein, потому что den Grund.' }
},
{
  id: 'ru-w-zanimatsya', pos: 'verb', level: 'A2', aspect: 'impf', t: 'заним+аться', gov: '+ Instr.',
  forms: { praes: 'занима́юсь, занима́ешься', praet: 'занима́лся', perf: '—' },
  en: 'to be engaged in, to do (sport, a task); to study', de: 'sich beschäftigen mit; (Sport) treiben; lernen',
  examples: [{ t: 'Я [[занима́юсь]] информацио́нной безопа́сностью.', en: 'I work in information security.', de: 'Ich beschäftige mich mit Informationssicherheit.' }],
  note: { en: 'Always with the instrumental: «заниматься спортом / делом / английским». Asking about someone’s job: «Чем вы занимаетесь?»', de: 'Immer mit Instrumental: «заниматься спортом / делом / английским». Frage nach dem Beruf: «Чем вы занимаетесь?»' }
},
{
  id: 'ru-w-poluchat', pos: 'verb', level: 'A2', aspect: 'impf', t: 'получ+ать',
  forms: { praes: 'получ+аю, получ+аешь', praet: 'получ+ал', perf: 'pf. получ+ить (получ+у, пол+учишь)' },
  en: 'to receive, to get', de: 'bekommen, erhalten',
  examples: [{ t: 'Вы [[получ+или]] моё письмо́?', en: 'Did you get my email?', de: 'Haben Sie meine E-Mail bekommen?' }],
  note: { en: 'In speech «получилось / не получилось» = it worked / it didn’t work out.', de: 'Umgangssprachlich: «получилось / не получилось» = hat geklappt / hat nicht geklappt.' }
},
{
  id: 'ru-w-mesto', pos: 'noun', level: 'A2', t: 'м+есто', gender: 'n', plural: 'мест+а',
  en: 'place; seat; room, space', de: 'der Ort, der Platz; der Sitzplatz',
  examples: [{ t: 'Э́то [[м+есто]] свобо́дно?', en: 'Is this seat free?', de: 'Ist dieser Platz frei?' }]
},
{
  id: 'ru-w-vremya', pos: 'noun', level: 'A2', t: 'вр+емя', gender: 'n', plural: 'времен+а',
  en: 'time', de: 'die Zeit',
  examples: [{ t: 'У меня́ нет [[вр+емени]].', en: 'I have no time.', de: 'Ich habe keine Zeit.' }],
  note: { en: 'One of ten neuter nouns in -мя with the stem -мен-: вре́мя → вре́мени, и́мя → и́мени. Plural времена́ means “times, eras” or grammatical tenses.', de: 'Eines von zehn Neutra auf -мя mit Stamm -мен-: вре́мя → вре́мени, и́мя → и́мени. Plural времена́ = „Zeiten, Epochen“ oder grammatische Tempora.' }
}
]});

GT.register({ tab: 'words', topic: 'people', items: [
{
  id: 'ru-w-drug', pos: 'noun', level: 'A2', t: 'друг', gender: 'm', plural: 'друзь+я',
  en: 'friend', de: 'der Freund',
  examples: [{ t: 'Э́то мой ста́рый [[друг]].', en: 'This is an old friend of mine.', de: 'Das ist ein alter Freund von mir.' }],
  note: { en: 'Irregular plural друзья́. «Друг» is a close friend; a looser acquaintance is «знакомый». «Подруга» — female friend.', de: 'Unregelmäßiger Plural друзья́. «Друг» ist ein enger Freund; ein Bekannter ist «знакомый». «Подруга» — Freundin.' }
},
{
  id: 'ru-w-semya', pos: 'noun', level: 'A2', t: 'семь+я', gender: 'f', plural: 'с+емьи',
  en: 'family', de: 'die Familie',
  examples: [{ t: 'У меня́ больш+ая [[семь+я]].', en: 'I have a big family.', de: 'Ich habe eine große Familie.' }]
},
{
  id: 'ru-w-rodstvennik', pos: 'noun', level: 'B1', t: 'р+одственник', gender: 'm', plural: 'р+одственники',
  en: 'relative', de: 'der Verwandte',
  examples: [{ t: 'На пра́здник прие́хали все [[р+одственники]].', en: 'All the relatives came for the holiday.', de: 'Zum Fest kamen alle Verwandten.' }],
  parts: [['р+од', { en: 'root: birth, kin', de: 'Wurzel: Geburt, Sippe' }], ['-ствен-', { en: 'adjective suffix', de: 'Adjektivsuffix' }], ['-ник', { en: 'person', de: 'Person' }]],
  note: { en: 'Same root as род (kin), родители (parents), родина (homeland).', de: 'Gleiche Wurzel wie род (Geschlecht), родители (Eltern), родина (Heimat).' }
},
{
  id: 'ru-w-znakomitsya', pos: 'verb', level: 'A2', aspect: 'impf', t: 'знак+омиться', gov: 'с + Instr.',
  forms: { praes: 'знак+омлюсь, знак+омишься', praet: 'знак+омился', perf: 'pf. познак+омиться' },
  en: 'to get to know, to meet (for the first time)', de: 'sich kennenlernen',
  examples: [{ t: 'Дава́йте [[познак+омимся]]!', en: 'Let’s introduce ourselves!', de: 'Lassen Sie uns einander vorstellen!' }],
  note: { en: '«Познакомься, это Анна» — Meet Anna. «Очень приятно» is the polite reply.', de: '«Познакомься, это Анна» — Darf ich vorstellen: Anna. Höfliche Antwort: «Очень приятно».' }
},
{
  id: 'ru-w-obizhatsya', pos: 'verb', level: 'B1', aspect: 'impf', t: 'обиж+аться', gov: 'на + Acc.',
  forms: { praes: 'обиж+аюсь, обиж+аешься', praet: 'обиж+ался', perf: 'pf. об+идеться (об+ижусь)' },
  en: 'to take offence, to be hurt', de: 'beleidigt sein, gekränkt sein',
  examples: [{ t: 'Не [[обиж+айся]], я пошути́л.', en: 'Don’t be offended, I was joking.', de: 'Sei nicht beleidigt, das war ein Scherz.' }]
},
{
  id: 'ru-w-doveryat', pos: 'verb', level: 'B1', aspect: 'impf', t: 'довер+ять', gov: '+ Dat.',
  forms: { praes: 'довер+яю, довер+яешь', praet: 'довер+ял', perf: 'pf. дов+ерить' },
  en: 'to trust', de: 'vertrauen',
  examples: [{ t: 'Я [[довер+яю]] своей кома́нде.', en: 'I trust my team.', de: 'Ich vertraue meinem Team.' }],
  note: { en: 'Dative like German vertrauen + Dat. Noun: дове́рие (trust).', de: 'Dativ wie im Deutschen: vertrauen + Dat. Substantiv: дове́рие (Vertrauen).' }
}
]});

GT.register({ tab: 'words', topic: 'home', items: [
{
  id: 'ru-w-kvartira', pos: 'noun', level: 'A2', t: 'кварт+ира', gender: 'f', plural: 'кварт+иры',
  en: 'flat, apartment', de: 'die Wohnung',
  examples: [{ t: 'Мы и́щем [[кварт+иру]] в це́нтре.', en: 'We’re looking for a flat in the centre.', de: 'Wir suchen eine Wohnung im Zentrum.' }],
  note: { en: '«Двухкомнатная квартира» counts all rooms (living room included): a two-room flat.', de: '«Двухкомнатная квартира» zählt alle Zimmer inkl. Wohnzimmer: eine Zweizimmerwohnung.' }
},
{
  id: 'ru-w-snimat', pos: 'verb', level: 'B1', aspect: 'impf', t: 'сним+ать',
  forms: { praes: 'сним+аю, сним+аешь', praet: 'сним+ал', perf: 'pf. снять (сним+у, сн+имешь)' },
  en: 'to rent (as tenant); to take off; to film; to withdraw (money)', de: 'mieten; ausziehen, abnehmen; filmen; abheben',
  examples: [
    { sense: { en: 'to rent', de: 'mieten' }, t: 'Мы [[сним+аем]] кварти́ру у знако́мых.', en: 'We rent a flat from acquaintances.', de: 'Wir mieten eine Wohnung von Bekannten.' },
    { sense: { en: 'to withdraw money', de: 'Geld abheben' }, t: 'На́до [[снять]] нали́чные в банкома́те.', en: 'I need to withdraw cash at the ATM.', de: 'Ich muss am Automaten Bargeld abheben.' }
  ],
  meaningType: 'polysemous',
  meaningExplanation: { en: 'The core idea is “to take off / take down” (с- + -ним- “take”). From it: take off clothes, take money off an account, “take” a picture or film, and rent a flat (from the owner). The owner who lets the flat uses «сдавать».', de: 'Grundidee: „herunternehmen“ (с- + -ним- „nehmen“). Daraus: Kleidung ausziehen, Geld abheben, ein Bild/einen Film „aufnehmen“ und eine Wohnung mieten. Der Vermieter dagegen «сдаёт» die Wohnung.' },
  meaningExamples: [{ t: 'Сним+ите ку́ртку.', en: 'Take off your jacket.', de: 'Ziehen Sie die Jacke aus.' }, { t: 'снять фильм', en: 'to shoot a film', de: 'einen Film drehen' }]
},
{
  id: 'ru-w-hozyain', pos: 'noun', level: 'B1', t: 'хоз+яин', gender: 'm', plural: 'хоз+яева',
  en: 'owner; landlord; host', de: 'der Besitzer; der Vermieter; der Gastgeber',
  examples: [{ t: '[[Хоз+яин]] кварти́ры живёт в друго́м го́роде.', en: 'The owner of the flat lives in another city.', de: 'Der Besitzer der Wohnung wohnt in einer anderen Stadt.' }],
  note: { en: 'Irregular plural хозя́ева. Female: хозя́йка (also “housewife”).', de: 'Unregelmäßiger Plural хозя́ева. Weiblich: хозя́йка (auch „Hausfrau“).' }
},
{
  id: 'ru-w-sosed', pos: 'noun', level: 'A2', t: 'сос+ед', gender: 'm', plural: 'сос+еди',
  en: 'neighbour', de: 'der Nachbar',
  examples: [{ t: 'Наши [[сос+еди]] о́чень шу́мные.', en: 'Our neighbours are very noisy.', de: 'Unsere Nachbarn sind sehr laut.' }],
  note: { en: 'Soft plural: сосе́ди, сосе́дей. Female: сосе́дка.', de: 'Weicher Plural: сосе́ди, сосе́дей. Weiblich: сосе́дка.' }
},
{
  id: 'ru-w-remont', pos: 'noun', level: 'B1', t: 'рем+онт', gender: 'm',
  en: 'repair; renovation', de: 'die Reparatur; die Renovierung',
  examples: [{ t: 'В подъе́зде идёт [[рем+онт]].', en: 'The stairwell is being renovated.', de: 'Im Treppenhaus wird renoviert.' }],
  note: { en: 'Covers both fixing something and redecorating a flat («сделать ремонт»). From French remonte via German Remonte; today it is fully Russian in meaning.', de: 'Bedeutet sowohl Reparatur als auch Renovierung einer Wohnung («сделать ремонт»).' }
},
{
  id: 'ru-w-ubirat', pos: 'verb', level: 'A2', aspect: 'impf', t: 'убир+ать',
  forms: { praes: 'убир+аю, убир+аешь', praet: 'убир+ал', perf: 'pf. убр+ать (убер+у)' },
  en: 'to tidy up, to clean; to put away', de: 'aufräumen, putzen; wegräumen',
  examples: [{ t: 'По суббо́там мы [[убир+аем]] кварти́ру.', en: 'On Saturdays we clean the flat.', de: 'Samstags putzen wir die Wohnung.' }],
  note: { en: 'Prefix у- “away” + -бир- “take”: literally “take away”. Noun: убо́рка (cleaning).', de: 'Präfix у- „weg“ + -бир- „nehmen“: wörtlich „wegnehmen“. Substantiv: убо́рка (Putzen).' }
}
]});

GT.register({ tab: 'words', topic: 'food', items: [
{
  id: 'ru-w-platit', pos: 'verb', level: 'A2', aspect: 'impf', t: 'плат+ить', gov: 'за + Acc.',
  forms: { praes: 'плачу́, пл+атишь', praet: 'плат+ил', perf: 'pf. заплат+ить' },
  en: 'to pay', de: 'bezahlen',
  examples: [{ t: 'Мо́жно [[заплат+ить]] ка́ртой?', en: 'Can I pay by card?', de: 'Kann ich mit Karte zahlen?' }],
  note: { en: 'Pay FOR something: «платить за квартиру» (за + accusative). By card / in cash: «картой / наличными» (instrumental).', de: 'Für etwas zahlen: «платить за квартиру» (за + Akkusativ). Mit Karte / bar: «картой / наличными» (Instrumental).' }
},
{
  id: 'ru-w-schyot', pos: 'noun', level: 'B1', t: 'счёт', gender: 'm', plural: 'счет+а',
  en: 'bill (in a restaurant); (bank) account; score', de: 'die Rechnung; das Konto; der Spielstand',
  examples: [
    { sense: { en: 'bill', de: 'Rechnung' }, t: '[[Счёт]], пожа́луйста!', en: 'The bill, please!', de: 'Die Rechnung, bitte!' },
    { sense: { en: 'bank account', de: 'Konto' }, t: 'Де́ньги пришли́ на [[счёт]].', en: 'The money has arrived in the account.', de: 'Das Geld ist auf dem Konto eingegangen.' }
  ],
  meaningType: 'polysemous',
  meaningExplanation: { en: 'From считать (to count): anything that is counted — a bill, an account, a score. Note «за счёт» = at the expense of / thanks to.', de: 'Von считать (zählen): alles Gezählte — Rechnung, Konto, Spielstand. Dazu «за счёт» = auf Kosten von / dank.' },
  meaningExamples: [{ t: 'Счёт 2:1.', en: 'The score is 2–1.', de: 'Es steht 2:1.' }, { t: 'за счёт фи́рмы', en: 'at the company’s expense', de: 'auf Kosten der Firma' }]
},
{
  id: 'ru-w-sdacha', pos: 'noun', level: 'B1', t: 'сд+ача', gender: 'f',
  en: 'change (money)', de: 'das Wechselgeld',
  examples: [{ t: 'Возьми́те [[сд+ачу]].', en: 'Here is your change.', de: 'Hier ist Ihr Wechselgeld.' }],
  note: { en: '«Без сдачи» — exact amount. Also: сда́ча экза́мена — passing an exam (from сдать).', de: '«Без сдачи» — passend. Auch: сда́ча экза́мена — Ablegen einer Prüfung (von сдать).' }
},
{
  id: 'ru-w-skidka', pos: 'noun', level: 'B1', t: 'ск+идка', gender: 'f', plural: 'ск+идки',
  en: 'discount', de: 'der Rabatt',
  examples: [{ t: 'Сего́дня на всё [[ск+идка]] два́дцать проце́нтов.', en: 'Today everything is 20% off.', de: 'Heute gibt es auf alles zwanzig Prozent Rabatt.' }]
},
{
  id: 'ru-w-nalichnye', pos: 'noun', level: 'B1', t: 'нал+ичные', gender: 'pl',
  en: 'cash', de: 'das Bargeld',
  examples: [{ t: 'У вас есть [[нал+ичные]]?', en: 'Do you have cash?', de: 'Haben Sie Bargeld?' }],
  note: { en: 'An adjective used as a noun, plural only. Pay in cash: «наличными».', de: 'Substantiviertes Adjektiv, nur Plural. Bar zahlen: «наличными».' }
},
{
  id: 'ru-w-pokupka', pos: 'noun', level: 'A2', t: 'пок+упка', gender: 'f', plural: 'пок+упки',
  en: 'purchase; (pl.) shopping', de: 'der Einkauf, der Kauf',
  examples: [{ t: 'Я пошла́ за [[пок+упками]].', en: 'I went shopping.', de: 'Ich bin einkaufen gegangen.' }],
  note: { en: 'From покупа́ть / купи́ть (to buy). «Ходить за покупками» — to go shopping.', de: 'Von покупа́ть / купи́ть (kaufen). «Ходить за покупками» — einkaufen gehen.' }
}
]});
