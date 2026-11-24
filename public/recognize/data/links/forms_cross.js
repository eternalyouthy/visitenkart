/* Cross-language data for the "Which form?" sections (js/whichform.js, js/forms/*.js). Always loaded.
 *
 * notes[learned language][key][known language] = a short contrastive note, written in the KNOWN language.
 *   key: 't:' + exact sentence text (data files) · a reason (v:helfen, job …) · 'p:*+wo' / 'v:*' wildcards.
 *   A note that starts with '=' means "works like in your language" (shown, but not a trap).
 *   Every other note marks interference: the sentence also goes into the pack's Interference mode.
 *   Russian words in notes for English / German speakers carry '+' stress marks.
 * genderTraps: nouns whose gender differs between German and Russian — [article, German noun, Russian noun, Russian gender, English].
 * casesPage(api): the #/cases page "Cases across your languages".
 * Facts: standard grammar only (Duden / Grammis, Russian school grammar, Cambridge / Oxford grammar references). */
(function () {
  'use strict';
  function T(o) { return GT.whichForm.tx(o); }
  function sm(s) { return GT.whichForm.stressMarks(s); }

  var notes = {
    /* ---------------- learning German ---------------- */
    de: {
      'v:helfen': { ru: '=Как в русском: помогать кому → Dativ.', en: 'English: help someone (direct object). German: helfen + Dativ — Ich helfe meinem Bruder.' },
      'v:danken': { ru: 'По-русски благодарить кого (вин. п.), а в немецком danken + Dativ: Ich danke dir.', en: 'English: thank someone (direct object). German: danken + Dativ — Ich danke dir.' },
      'v:gratulieren': { ru: 'По-русски поздравлять кого (вин. п.), а в немецком gratulieren + Dativ: Ich gratuliere dir.', en: 'English: congratulate someone (direct object). German: gratulieren + Dativ.' },
      'v:folgen': { ru: 'По-русски следовать за кем (твор. п.), в немецком folgen + Dativ без предлога.', en: 'English: follow someone (direct object). German: folgen + Dativ.' },
      'v:glauben': { ru: '=Как в русском: верить кому → Dativ.', en: 'English: believe someone (direct object). German: glauben + Dativ for a person.' },
      'v:gehören': { ru: '=Как в русском: принадлежать кому → Dativ.', en: '=Like “belong to”: the owner is Dativ.' },
      'v:gefallen': { ru: '=Как нравиться: Die Jacke gefällt meiner Tochter = Куртка нравится моей дочери (кому → Dativ).', en: 'English: my daughter likes the jacket. German turns it round: Die Jacke gefällt meiner Tochter — the thing is the subject, the person is Dativ.' },
      'v:antworten': { ru: '=Как в русском: отвечать кому → Dativ.', en: 'English: answer someone (direct object). German: antworten + Dativ.' },
      'v:vertrauen': { ru: '=Как в русском: доверять кому → Dativ.', en: 'English: trust someone (direct object). German: vertrauen + Dativ.' },
      'v:schmecken': { ru: 'Похоже на «нравиться»: Das Essen schmeckt den Kindern — кому → Dativ.', en: 'English: the children like the food. German: Das Essen schmeckt den Kindern — the person is Dativ.' },
      'vp:warten auf': { ru: 'По-русски ждать кого/что без предлога, в немецком warten auf + Akkusativ.', en: 'English: wait FOR. German: warten AUF + Akkusativ (not für).' },
      'vp:sich freuen auf': { ru: 'sich freuen auf + Akk — радоваться будущему, ждать с нетерпением (по-русски без такого предлога).', en: 'English: look forward TO. German: sich freuen AUF + Akkusativ.' },
      'vp:denken an': { ru: 'По-русски думать о + предл. п., в немецком denken an + Akkusativ.', en: 'English: think OF / ABOUT. German: denken AN + Akkusativ.' },
      'vp:sprechen über': { ru: 'По-русски говорить о + предл. п., в немецком sprechen über + Akkusativ.', en: '=Like “talk about”: über + Akkusativ.' },
      'vp:sich interessieren für': { ru: 'По-русски интересоваться чем (твор. п., без предлога), в немецком sich interessieren für + Akkusativ.', en: 'English: interested IN. German: sich interessieren FÜR + Akkusativ.' },
      'vp:sich ärgern über': { ru: 'По-русски злиться на + вин. п., в немецком sich ärgern über + Akkusativ.', en: '=Like “annoyed about”: über + Akkusativ.' },
      'vp:bitten um': { ru: 'По-русски просить о чём / что, в немецком bitten um + Akkusativ.', en: 'English: ask FOR. German: bitten UM + Akkusativ.' },
      'vp:teilnehmen an': { ru: 'По-русски участвовать в + предл. п., в немецком teilnehmen an + Dativ.', en: 'English: take part IN. German: teilnehmen AN + Dativ.' },
      'esgibt': { ru: 'По-русски «есть, имеется» + им. п., а es gibt требует Akkusativ: Es gibt einen Supermarkt.', en: 'English: there is a supermarket (it looks like a subject). German: es gibt + Akkusativ — einen Supermarkt.' },
      'iobj': { ru: '=Как в русском: кому? → Dativ (дать брату = dem Bruder geben).', en: 'English shows the receiver by word order or “to”. German marks it with the Dativ: Ich gebe dem Mann den Schlüssel.' },
      'gen': { ru: '=Как родительный: машина отца = das Auto des Vaters. В разговоре часто von + Dativ: das Auto von meinem Vater.', en: '=Like “the father’s car / the car of my father”: des Vaters. In speech also von + Dativ.' },
      'time': { ru: '=Как в русском: каждый день, всю неделю — Akkusativ без предлога: jeden Tag.', en: '=Like “every day”: no preposition — jeden Tag (Akkusativ).' },
      'p:*+wo': { ru: '=Как в / на: где? → в русском предложный, в немецком Dativ.', en: 'English: in / on (where?). German shows the difference with the case: wo? → Dativ.' },
      'p:*+wohin': { ru: '=Как в / на + куда? → в обоих языках винительный / Akkusativ.', en: 'English: into / onto (where to?). German: wohin? → Akkusativ.' },
      'p:mit': { ru: '=с + твор. п. ≈ mit + Dativ: с другом = mit dem Freund.', en: '=with → mit + Dativ.' },
      't:Ich rufe ___ Chef an.': { ru: 'По-русски звонить кому (дат. п.), а anrufen + Akkusativ: Ich rufe meinen Chef an.', en: '=Like “call someone”: direct object → Akkusativ.' },
      't:Sie hat ___ Bruder und zwei Schwestern.': { ru: 'По-русски «у неё есть брат» (у + род. п.), а в немецком haben + Akkusativ: Sie hat einen Bruder.', en: '=Like “she has a brother”: haben + Akkusativ.' },
      't:Ich fahre mit ___ Fahrrad zur Arbeit.': { ru: 'По-русски «на велосипеде» (на + предл. п.), в немецком mit + Dativ: mit dem Fahrrad.', en: 'English: by bike (no article). German: mit dem Fahrrad — with the article in the Dativ.' },
      't:Ich fahre mit ___ Zug.': { ru: 'По-русски «на поезде» (на + предл. п.), в немецком mit + Dativ: mit dem Zug.', en: 'English: by train (no article). German: mit dem Zug — article in the Dativ.' },
      't:Wir fahren an ___ See.': { ru: 'По-русски «на озеро» (на + вин. п.), в немецком an + Akkusativ: an den See. der See = озеро, die See = море.', en: 'English: to the lake. German: an den See (wohin? → Akkusativ). der See = lake, die See = sea.' }
    },

    /* ---------------- learning English ---------------- */
    en: {
      'job': { ru: 'По-русски «Он учитель» — без артикля. По-английски обязательно a: He is a teacher.', de: 'Deutsch: Er ist Lehrer — ohne Artikel. Englisch braucht a: He is a teacher.' },
      'first': { ru: 'В русском артиклей нет, но исчисляемое в ед. ч. не может стоять «голым»: There is a problem.', de: '=Wie ein / eine: Es gibt ein Problem → There is a problem.' },
      'class': { ru: '«Это хорошая книга» → This is a good book: перед прилагательным + существительным нужен a.', de: '=Wie im Deutschen: Das ist ein gutes Buch → This is a good book.' },
      'one': { ru: '«Через час» → in an hour: a / an здесь значит «один».', de: '=Wie „in einer Stunde“ → in an hour.' },
      'known': { ru: 'Русский показывает «тот самый» порядком слов или словом «этот»; в английском — the.', de: '=Wie der / die / das für etwas schon Erwähntes.' },
      'defined': { ru: '«Столица Франции» → the capital of France: уточнение после слова требует the.', de: '=Wie im Deutschen: die Hauptstadt von Frankreich → the capital of France.' },
      'situation': { ru: '«Закрой окно» → Close the window: всем ясно, какое окно, — the.', de: '=Wie im Deutschen: Mach das Fenster zu → Close the window.' },
      'unique': { ru: '«Солнце, луна, интернет» — по-английски с the: the sun, the moon, the internet.', de: '=Wie im Deutschen: die Sonne → the sun.' },
      'super': { ru: '«Самый лучший», «первый», «тот же» → the best, the first, the same.', de: '=Wie im Deutschen: der beste, der erste → the best, the first.' },
      'geo': { ru: '«Темза, Альпы, Нидерланды» → the Thames, the Alps, the Netherlands.', de: '=Wie im Deutschen: die Themse, die Alpen → the Thames, the Alps.' },
      'fixedthe': { ru: '«Утром, в кино, справа» → in the morning, to the cinema, on the right.', de: '=Wie am Morgen, ins Kino, rechts → in the morning, to the cinema, on the right.' },
      'instrument': { ru: '«Играть на пианино» → play the piano: the и без предлога.', de: 'Deutsch: Klavier spielen — ohne Artikel. Englisch: play the piano.' },
      'general': { ru: 'Русскоговорящие часто ставят лишний the. «Я люблю музыку» = I love music: о чём-то вообще — без артикля.', de: 'Deutsch nimmt bei allgemeinen Begriffen oft den Artikel: das Leben, die Musik, die Natur. Englisch nicht: Life is short, I love music.' },
      'names': { ru: '=Как в русском: имена, города, большинство стран — без артикля.', de: '=Wie im Deutschen: Anna, Berlin, Deutschland — ohne Artikel.' },
      'fixed': { ru: '«В школе, спать, на автобусе» → at school, go to bed, by bus: без артикля.', de: 'Deutsch: in der Schule, ins Bett, mit dem Bus, in der Nacht — mit Artikel. Englisch: at school, to bed, by bus, at night — ohne.' },
      'meals': { ru: '«На завтрак», «пообедать» → for breakfast, have lunch: без артикля.', de: 'Deutsch: zum Frühstück, Das Abendessen ist fertig. Englisch ohne Artikel: for breakfast, Dinner is ready.' },
      'langsub': { ru: '«Играть в футбол» → play football: без артикля и без предлога.', de: '=Wie Fußball spielen, Deutsch sprechen: ohne Artikel.' },
      'days': { ru: '=Как в русском: on Monday, in May — без артикля.', de: 'Deutsch: am Montag, im Mai (mit Artikel). Englisch: on Monday, in May — ohne.' },
      'next': { ru: '«В следующем месяце» → next month: без артикля и без предлога.', de: '=Wie „nächsten Monat“: ohne Artikel und ohne Präposition.' },
      'rate': { ru: '«Три раза в неделю» → three times a week: a вместо «в».', de: 'Deutsch: dreimal pro Woche / in der Woche. Englisch: three times a week.' },
      'whata': { ru: '«Какой прекрасный день!» → What a beautiful day!', de: '=Wie „Was für ein schöner Tag!“ → What a beautiful day!' },
      't:She lives in ___ Switzerland.': { de: 'Deutsch: in der Schweiz — mit Artikel. Englisch: in Switzerland — ohne.', ru: '=Как в русском: в Швейцарии — без артикля.' }
    },

    /* ---------------- learning Russian ---------------- */
    ru: {
      'job': { de: 'Deutsch: Er arbeitet als Arzt / Er wird Arzt (Nominativ). Russisch: раб+отает врач+ом, стан+ет врач+ом — Instrumental.', en: 'English: he works as a doctor / becomes a doctor. Russian: раб+отает врач+ом — Instrumental, no “as”.' },
      'tool': { de: 'Deutsch: mit dem Stift schreiben (mit + Dativ). Russisch ohne Präposition: пис+ать р+учкой (Instrumental).', en: 'English: write WITH a pen. Russian has no preposition: пис+ать р+учкой (Instrumental).' },
      'v:заниматься': { de: 'Deutsch: Sport treiben (Akkusativ). Russisch: заним+аться сп+ортом — Instrumental.', en: 'English: do sport (direct object). Russian: заним+аться сп+ортом — Instrumental.' },
      'v:интересоваться': { de: 'Deutsch: sich interessieren für + Akkusativ. Russisch ohne Präposition: интересов+аться + Instrumental.', en: 'English: interested IN. Russian: интересов+аться + Instrumental, no preposition.' },
      'v:гордиться': { de: 'Deutsch: stolz sein auf + Akkusativ. Russisch: горд+иться + Instrumental.', en: 'English: proud OF. Russian: горд+иться + Instrumental.' },
      'v:звонить': { de: 'Deutsch: jemanden anrufen (Akkusativ). Russisch: звон+ить кому — Dativ.', en: 'English: call someone (direct object). Russian: звон+ить кому — Dative.' },
      'v:помогать': { de: '=Wie helfen + Dativ: помог+ать кому.', en: 'English: help someone (direct object). Russian: помог+ать кому — Dative.' },
      'v:нравиться': { de: '=Wie gefallen: Mir gefällt … = Мне нр+авится … (Dativ).', en: 'English: I like it. Russian turns it round: Мне нр+авится — the person is Dative, the thing is the subject.' },
      'age': { de: 'Deutsch: Ich bin zwanzig. Russisch: Мне дв+адцать лет — die Person im Dativ.', en: 'English: I am twenty. Russian: Мне дв+адцать лет — the person is Dative.' },
      'need': { de: 'Deutsch: Ich brauche … Russisch: Мне н+ужно … — die Person im Dativ.', en: 'English: I need … Russian: Мне н+ужно … — the person is Dative.' },
      'p:у': { de: 'Deutsch: Ich habe einen Bruder. Russisch: У мен+я есть брат — у + Genitiv statt „haben“.', en: 'English: I have a brother. Russian: У мен+я есть брат — у + Genitive instead of “have”.' },
      'net': { de: 'Deutsch: kein + Akkusativ (Ich habe keine Zeit). Russisch: нет + Genitiv (нет вр+емени).', en: 'English: there is no / I have no … Russian: нет + Genitive (нет вр+емени).' },
      'poss': { de: '=Wie der Genitiv, nachgestellt: das Auto des Bruders = маш+ина бр+ата.', en: 'English: the brother’s car. Russian: маш+ина бр+ата — the owner comes after the thing, in the Genitive.' },
      'qty': { de: 'Deutsch: viele Freunde (Nominativ / Akkusativ). Russisch: мн+ого друз+ей — Genitiv Plural.', en: 'English: many friends. Russian: мн+ого друз+ей — Genitive plural.' },
      'p:о': { de: 'Deutsch: denken an / sprechen über + Akkusativ. Russisch: д+умать о, говор+ить о + Präpositiv.', en: '=about → о + Prepositional.' },
      'p:по': { de: 'Deutsch: durch die Stadt, am Telefon. Russisch: по + Dativ — по г+ороду, по телеф+ону.', en: 'English: around the city, on the phone. Russian: по + Dative — по г+ороду, по телеф+ону.' },
      'p:к': { de: '=Wie zu + Dativ: zum Arzt = к врач+у.', en: 'English: to the doctor. Russian: к + Dative — к врач+у.' },
      'p:для': { de: 'Deutsch: für + Akkusativ. Russisch: для + Genitiv.', en: '=for → для + Genitive.' },
      'p:без': { de: 'Deutsch: ohne + Akkusativ. Russisch: без + Genitiv.', en: '=without → без + Genitive.' },
      'p:из': { de: 'Deutsch: aus + Dativ. Russisch: из + Genitiv.', en: '=from / out of → из + Genitive.' },
      'p:от': { de: 'Deutsch: von + Dativ. Russisch: от + Genitiv.', en: '=from → от + Genitive.' },
      'p:после': { de: 'Deutsch: nach + Dativ. Russisch: п+осле + Genitiv.', en: '=after → п+осле + Genitive.' },
      'p:с': { de: '=Wie mit + Dativ: mit dem Freund = с др+угом (Instrumental).', en: '=with → с + Instrumental.' },
      'p:*+где': { de: '=Wie die Wechselpräpositionen: wo? → im Deutschen Dativ, im Russischen Präpositiv (в Москв+е = in Moskau).', en: 'English: in / at (where?). Russian: в / на + Prepositional.' },
      'p:*+куда': { de: '=Wie wohin? → Akkusativ (in die Schule = в шк+олу).', en: 'English: to / into (where to?). Russian: в / на + Accusative.' },
      'time': { de: 'Deutsch: am Samstag (an + Dativ). Russisch: в субб+оту — в + Akkusativ.', en: 'English: on Saturday. Russian: в субб+оту — в + Accusative.' },
      'transport': { de: 'Deutsch: mit dem Bus (mit + Dativ). Russisch: на авт+обусе — на + Präpositiv.', en: 'English: by bus. Russian: на авт+обусе — на + Prepositional.' },
      'iobj': { de: '=Wie im Deutschen: wem? → Dativ (dem Direktor schreiben = дир+ектору пис+ать).', en: 'English: write to the director. Russian: the receiver is Dative without a preposition.' },
      't:Я благодар+ю ___ за п+омощь.': { de: 'Deutsch: danken + Dativ (Ich danke meinem Freund). Russisch: благодар+ить кого — Akkusativ.', en: '=Like “thank someone”: a direct object → Accusative.' },
      't:Я поздравл+яю ___ с днём рожд+ения.': { de: 'Deutsch: gratulieren + Dativ. Russisch: поздравл+ять кого — Akkusativ.', en: '=Like “congratulate someone”: a direct object → Accusative.' }
    }
  };

  Object.assign(notes.de, {
    "p:ohne": {
      ru: "«Без ключа» требует родительного. Немецкое ohne ставит определитель в Akkusativ, например ohne meinen Schlüssel.",
      en: "English leaves the possessive unchanged in “without my key”. German marks the accusative on meinen in ohne meinen Schlüssel."
    },
    "p:für": {
      ru: "Русскому «для моего отца» с родительным соответствует für meinen Vater с Akkusativ.",
      en: "In “for my father”, my stays the same. In für meinen Vater, the masculine accusative adds -en."
    },
    "p:aus": {
      ru: "В «из сумки» предлог требует родительного. После aus нужен Dativ, например aus meiner Tasche.",
      en: "English “out of my bag” keeps my unchanged. In German aus takes the dative, giving aus meiner Tasche."
    },
    "p:seit": {
      ru: "Для длительности русский часто обходится без предлога, например «я здесь уже месяц». По-немецки seit einem Monat, с Dativ.",
      en: "English distinguishes “since March” from “for a month”. German uses seit for both, with the dative in seit einem Monat."
    },
    "t:Der Stift rollt unter ___ Sofa.": {
      ru: "=Карандаш закатывается под диван. И в немецком, и в русском цель движения после unter или «под» выражена винительным.",
      en: "“Under the sofa” can name a destination or a location in English. Here the pen ends up underneath it, giving unter das Sofa."
    },
    "t:Unter ___ Sofa liegt ein Stift.": {
      ru: "«Под диваном» требует творительного. Для места после unter в немецком нужен Dativ, поэтому unter dem Sofa.",
      en: "English keeps “under the sofa” unchanged. The stationary location in German takes the dative, unter dem Sofa."
    },
    "t:Nach ___ Probe packen wir die Instrumente ein.": {
      ru: "В сочетании «после репетиции» нужен родительный. В nach der Probe предлог nach требует Dativ.",
      en: "English says “after the rehearsal”. German nach requires the dative, giving nach der Probe."
    }
  });

  Object.assign(notes.de, {
    "p:neben+wo": {
      ru: "Рядом с кроватью — «с» и творительный. В немецком место обозначается сочетанием neben dem Bett с Dativ.",
      en: "“Beside the bed” describes a position. German uses the dative after neben for that reading."
    },
    "p:neben+wohin": {
      ru: "«Поставить рядом с кроватью» сохраняет творительный после «рядом с». Немецкое neben обозначает здесь конечное положение и требует Akkusativ.",
      en: "In “put it beside the bed”, beside gives the destination. German marks that reading with the accusative after neben."
    },
    "p:zwischen+wo": {
      ru: "«Между стульями» требует творительного. В немецком для места после zwischen нужен Dativ, например zwischen den Stühlen.",
      en: "English “between the chairs” does not mark case on chairs. For a position, German uses zwischen den Stühlen."
    },
    "p:zwischen+wohin": {
      ru: "В «поставить между креслом и стеллажом» оба существительных стоят в творительном. В немецком цель перемещения после zwischen требует Akkusativ.",
      en: "In “slide it between the armchair and the shelf”, between gives the destination. German uses the accusative after zwischen here."
    },
    "p:vor+wo": {
      ru: "Для места в «перед ратушей» нужен творительный. По-немецки перед зданием — vor dem Rathaus, с Dativ.",
      en: "English “in front of the town hall” gives a position. German uses vor with the dative here."
    },
    "p:vor+wohin": {
      ru: "«Поставить перед шкафом» требует творительного после «перед». В немецком цель перемещения даёт Akkusativ, vor den Schrank.",
      en: "English keeps “in front of the cupboard” after put. German marks the destination with vor den Schrank."
    },
    "p:hinter+wo": {
      ru: "В «за занавесом» место выражается творительным. В немецком hinter для места требует Dativ.",
      en: "For a position, “behind the curtain” corresponds to hinter dem Vorhang with the dative."
    },
    "p:hinter+wohin": {
      ru: "=В «забежать за занавес» и в hinter den Vorhang laufen цель движения выражена винительным.",
      en: "English “behind the curtain” can describe a destination. German uses the accusative when the cat moves to that spot."
    },
    "p:über+wo": {
      ru: "В «над столом» предлог требует творительного. В немецком место над предметом выражается сочетанием über с Dativ.",
      en: "“Above the table” gives a position. German marks it with the dative after über."
    },
    "p:über+wohin": {
      ru: "По-русски «повесить лампу над столом» сохраняет творительный. В немецком при размещении лампы над столом нужен Akkusativ, über den Tisch.",
      en: "In “hang the lamp above the table”, above gives the intended position. German uses über with the accusative for that destination."
    }
  });
  Object.assign(notes.en, {
    "t:My neighbour is ___ union representative.": {
      ru: "В «мой сосед — представитель профсоюза» артикля нет. Здесь нужна форма a, потому что union начинается со звука /j/.",
      de: "Bei „Mein Nachbar ist Gewerkschaftsvertreter“ steht die Berufsbezeichnung ohne Artikel. Das englische union beginnt mit /j/, daher a union representative."
    },
    "t:The walk takes ___ hour and ten minutes.": {
      ru: "Английское an перед hour соответствует числу «один» в «час и десять минут». Начальное h не произносится.",
      de: "Deutsch „eine Stunde“ hat einen Artikel mit Genusendung. In an hour entscheidet der Vokalanlaut von hour über an."
    },
    "t:What ___ lovely weather for a walk!": {
      ru: "«Какая прекрасная погода!» В английском weather неисчисляемое, поэтому после what перед lovely weather артикля нет.",
      de: "Im Deutschen ist „Was für ein schönes Wetter!“ möglich. Das englische weather ist nicht zählbar, daher What lovely weather!"
    },
    "t:Our choir rehearses twice ___ month.": {
      ru: "Английскому twice a month соответствует «дважды в месяц». Частоту выражает a перед единицей времени.",
      de: "Deutsch „zweimal im Monat“ entspricht englisch twice a month. Die Zeiteinheit steht mit a."
    },
    "t:I get to work by ___ tram most mornings.": {
      ru: "«На трамвае» передаётся сочетанием by tram. Когда by обозначает способ передвижения, название транспорта стоит без артикля.",
      de: "„Mit der Straßenbahn“ enthält den bestimmten Artikel. In by tram bezeichnet tram die Art der Fortbewegung und steht ohne Artikel."
    },
    "t:She plays ___ violin in a string quartet.": {
      ru: "«Она играет на скрипке» передаётся сочетанием plays the violin, где перед инструментом стоит the.",
      de: "Deutsch „Sie spielt Geige“ kommt ohne Artikel aus. In der hier geübten Wendung steht play the violin."
    },
    "t:The twins were born on ___ same day.": {
      ru: "В выражении «в один и тот же день» нет отдельного артикля. Английское сочетание — on the same day.",
      de: "=„Am selben Tag“ enthält den bestimmten Artikel in am. Auch im Englischen steht hier the same day."
    }
  });

  Object.assign(notes.ru, {
    "p:до": {
      en: "English uses “until” for time or “as far as” for distance. Russian до takes the genitive in both uses, as in до субб+оты and до гост+иницы.",
      de: "Deutsch unterscheidet etwa „bis Samstag“ und „bis zum Hotel“. Im Russischen verlangt до in beiden Fällen den Genitiv."
    },
    "p:около": {
      en: "English “near the school” leaves school unchanged. Russian +около takes the genitive, as in +около шк+олы.",
      de: "Deutsch sagt etwa „in der Nähe der Schule“. Im Russischen verlangt die Präposition +около unmittelbar den Genitiv."
    },
    "t:Сейф открыв+ается ___.": {
      en: "“With a key” names a tool. In Russian the instrumental ending alone does that work, giving ключ+ом.",
      de: "„Mit einem Schlüssel“ bezeichnet das Werkzeug. Russisch verwendet dafür den Instrumental ключ+ом ohne Präposition."
    },
    "t:Над ___ вис+ит п+олка с кн+игами.": {
      en: "English “above the table” leaves table unchanged. Russian над takes the instrumental for this stationary location, над стол+ом.",
      de: "Bei einer Ortsangabe steht im Deutschen „über dem Tisch“ mit Dativ. Im Russischen heißt es над стол+ом mit Instrumental."
    },
    "t:Мы прошл+и ч+ерез ___ двор.": {
      en: "English “through our courtyard” keeps our unchanged. Russian ч+ерез takes the accusative. For the inanimate masculine двор the accusative looks like the nominative.",
      de: "=„Durch unseren Hof“ und ч+ерез наш двор stehen beide im Akkusativ. Beim unbelebten Maskulinum двор ist die russische Form mit dem Nominativ identisch."
    },
    "t:У ___ сос+едки есть запасн+ой ключ.": {
      en: "English makes the owner the subject of “our neighbour has a spare key”. Russian places her after у in the genitive, у н+ашей сос+едки.",
      de: "Deutsch macht die Besitzerin zum Subjekt in „Unsere Nachbarin hat einen Ersatzschlüssel“. Russisch nennt sie mit у und Genitiv, у н+ашей сос+едки."
    },
    "t:Вчер+а мы говор+или об ___.": {
      en: "English “about the exercise” keeps the dictionary form. After об the Russian prepositional of упражн+ение ends in -ии, упражн+ении.",
      de: "Deutsch sagt „über die Übung“ mit Akkusativ. Im Russischen steht nach об der Präpositiv, hier mit der Endung -ии."
    }
  });
  // [article, German noun, Russian noun (stress), Russian gender, English]
  var genderTraps = [
    ['die', 'Sonne', 'с+олнце', 'n', 'sun'], ['der', 'Mond', 'лун+а', 'f', 'moon'], ['das', 'Mädchen', 'д+евочка', 'f', 'girl'],
    ['die', 'Zeit', 'вр+емя', 'n', 'time'], ['das', 'Auto', 'маш+ина', 'f', 'car'], ['der', 'Löffel', 'л+ожка', 'f', 'spoon'],
    ['das', 'Messer', 'нож', 'm', 'knife'], ['der', 'Hund', 'соб+ака', 'f', 'dog'], ['das', 'Haus', 'дом', 'm', 'house'],
    ['die', 'Stadt', 'г+ород', 'm', 'city'], ['das', 'Land', 'стран+а', 'f', 'country'], ['der', 'Brief', 'письм+о', 'n', 'letter'],
    ['der', 'Baum', 'д+ерево', 'n', 'tree'], ['das', 'Bett', 'кров+ать', 'f', 'bed'], ['das', 'Buch', 'кн+ига', 'f', 'book'],
    ['das', 'Bild', 'карт+ина', 'f', 'picture'], ['die', 'Milch', 'молок+о', 'n', 'milk'], ['das', 'Wasser', 'вод+а', 'f', 'water'],
    ['das', 'Zimmer', 'к+омната', 'f', 'room'], ['der', 'See', '+озеро', 'n', 'lake'], ['das', 'Problem', 'пробл+ема', 'f', 'problem'],
    ['der', 'Name', '+имя', 'n', 'name'], ['das', 'Leben', 'жизнь', 'f', 'life'], ['das', 'Jahr', 'год', 'm', 'year'],
    ['die', 'Frage', 'вопр+ос', 'm', 'question'], ['die', 'Antwort', 'отв+ет', 'm', 'answer'], ['der', 'Fehler', 'ош+ибка', 'f', 'mistake'],
    ['das', 'Essen', 'ед+а', 'f', 'food'], ['der', 'Apfel', '+яблоко', 'n', 'apple'], ['das', 'Thema', 'т+ема', 'f', 'topic'],
    ['das', 'Geschenk', 'под+арок', 'm', 'present'], ['das', 'Flugzeug', 'самолёт', 'm', 'plane'], ['das', 'Fahrrad', 'велосип+ед', 'm', 'bike'],
    ['das', 'Glas', 'стак+ан', 'm', 'glass'], ['das', 'Schiff', 'кор+абль', 'm', 'ship'], ['das', 'Ende', 'кон+ец', 'm', 'end'],
    ['das', 'Hemd', 'руб+ашка', 'f', 'shirt'], ['das', 'Lied', 'п+есня', 'f', 'song'], ['das', 'Spiel', 'игр+а', 'f', 'game'],
    ['die', 'Rechnung', 'счёт', 'm', 'bill'], ['das', 'Kind', 'ребёнок', 'm', 'child'], ['der', 'Tee', 'чай', 'm', 'tea']
  ].filter(function (x) { return { der: 'm', die: 'f', das: 'n' }[x[0]] !== x[3]; });

  genderTraps.push(
  ["das", "Heft", "тетр+адь", "f", "exercise book"],
  ["das", "Dach", "кр+ыша", "f", "roof"],
  ["der", "Spiegel", "з+еркало", "n", "mirror"],
  ["die", "Brücke", "мост", "m", "bridge"],
  ["die", "Insel", "+остров", "m", "island"],
  ["das", "Papier", "бум+ага", "f", "paper"],
  ["der", "Kopf", "голов+а", "f", "head"],
  ["das", "Auge", "глаз", "m", "eye"],
  ["die", "Nase", "нос", "m", "nose"],
  ["der", "Fuß", "стоп+а", "f", "foot"],
  ["das", "Werkzeug", "инструм+ент", "m", "tool"],
  ["das", "Licht", "свет", "m", "light"],
  ["die", "Luft", "в+оздух", "m", "air"],
  ["das", "Dorf", "дер+евня", "f", "village"],
  ["der", "Stern", "звезд+а", "f", "star"],
  ["das", "Boot", "л+одка", "f", "boat"]
);

  /* ---------------- #/cases ---------------- */
  var L3 = ['de', 'ru', 'en'];
  function order() { var l = GT.learn, k = GT.know; return [l, k].concat(L3.filter(function (x) { return x !== l && x !== k; })); }
  var LN = { de: 'Deutsch', ru: 'Русский', en: 'English' };
  // rows: per language [case name, question, example]
  var MAP = [
    { de: ['Nominativ', 'wer? was?', 'Mein Bruder liest.'], ru: ['именительный', 'кто? что?', 'Мой брат чит+ает.'], en: ['subject', 'who? what?', 'My brother reads.'] },
    { de: ['Akkusativ', 'wen? was?', 'Ich sehe meinen Bruder.'], ru: ['винительный', 'кого? что?', 'Я в+ижу моег+о бр+ата.'], en: ['direct object', 'whom? what?', 'I see my brother.'] },
    { de: ['Dativ', 'wem?', 'Ich gebe meinem Bruder das Buch.'], ru: ['дательный', 'кому?', 'Я да+ю моем+у бр+ату кн+игу.'], en: ['indirect object, “to …”', 'to whom?', 'I give my brother the book.'] },
    { de: ['Genitiv (oft von + Dativ)', 'wessen?', 'das Auto meines Bruders'], ru: ['родительный', 'кого? чего?', 'маш+ина моег+о бр+ата'], en: ['“of”, ’s', 'whose?', 'my brother’s car'] },
    { de: ['— mit + Dativ; als + Nominativ', 'mit wem? womit?', 'mit meinem Bruder · mit dem Stift · als Arzt'], ru: ['творительный', 'кем? чем?', 'с мо+им бр+атом · р+учкой · врач+ом'], en: ['“with”, “by”, “as”', 'with whom? with what?', 'with my brother · with a pen · as a doctor'] },
    { de: ['— in / an / auf + Dativ (wo?); über + Akkusativ', 'wo? worüber?', 'in Moskau · über meinen Bruder'], ru: ['предложный', 'где? о ком? о чём?', 'в Москв+е · о моём бр+ате'], en: ['“in”, “at”, “about”', 'where? about whom?', 'in Moscow · about my brother'] }
  ];
  // verbs whose case differs: [German, Russian, English]
  var VERBS = [
    ['helfen + Dativ', 'помог+ать + дательный', 'help + object'],
    ['danken + Dativ', 'благодар+ить + винительный', 'thank + object'],
    ['gratulieren + Dativ', 'поздравл+ять + винительный', 'congratulate + object'],
    ['anrufen + Akkusativ', 'звон+ить + дательный', 'call + object'],
    ['gefallen + Dativ (Mir gefällt …)', 'нр+авиться + дательный (Мне нр+авится …)', 'like (I like …)'],
    ['folgen + Dativ', 'сл+едовать за + творительный', 'follow + object'],
    ['warten auf + Akkusativ', 'ждать + винительный (или родительный)', 'wait for'],
    ['sich interessieren für + Akkusativ', 'интересов+аться + творительный', 'be interested in'],
    ['denken an + Akkusativ', 'д+умать о + предложный', 'think of / about'],
    ['werden / arbeiten als + Nominativ', 'стать / раб+отать + творительный', 'become / work as'],
    ['Ich habe … (Akkusativ)', 'У мен+я есть … (у + родительный)', 'I have …'],
    ['Ich bin 20.', 'Мне 20 лет. (дательный)', 'I am 20.'],
    ['Ich brauche … (Akkusativ)', 'Мне н+ужно / н+ужен … (дательный)', 'I need …'],
    ['mit dem Bus (mit + Dativ)', 'на авт+обусе (на + предложный)', 'by bus']
  ];
  var SECTIONS = [['map', 'Case map'], ['verbs', 'Verbs that differ'], ['where', 'Where? · Where to?'], ['gender', 'Gender traps']];
  function casesPage(api) {
    var esc = api.esc, o = order(), h = '';
    h += '<header class="page-head"><h1>' + T({ ru: 'Падежи в ваших языках', en: 'Cases across your languages', de: 'Fälle in deinen Sprachen' }) + '</h1><p class="lead">' +
      T({ ru: 'Немецкий и русский показывают роль слова окончанием (падежом), английский — порядком слов и предлогами. Таблица сопоставляет одно с другим. Совпадения нестрогие: важнее всего — столбец «где расходятся».',
        en: 'German and Russian show a word’s role with its ending (the case); English uses word order and prepositions. The table maps one onto the other. It is a rough match — the most useful part is where they differ.',
        de: 'Deutsch und Russisch zeigen die Rolle eines Wortes mit der Endung (dem Fall), Englisch mit Wortstellung und Präpositionen. Die Tabelle ordnet das einander zu. Die Entsprechung ist grob — am nützlichsten ist, wo sie sich unterscheiden.' }) + '</p></header>';
    var wf = GT.whichForm.active();
    h += '<div class="actions-row">' + (wf ? '<a class="btn" href="#/' + wf.route + '">← ' + esc(wf.label) + '</a><a class="btn primary" href="#/' + wf.route + '/play">Play · ' + esc(wf.game.title) + '</a>' : '') + '</div>';
    h += GT.whichForm.sectionTitle(T({ ru: 'Карта падежей', en: 'Case map', de: 'Fälle im Überblick' }), 'map') +
      '<div class="table-wrap"><table><thead><tr>' + o.map(function (l) { return '<th>' + LN[l] + '</th>'; }).join('') + '</tr></thead><tbody>' +
      MAP.map(function (r) {
        return '<tr>' + o.map(function (l) { return '<td><b>' + esc(sm(r[l][0])) + '</b> <span class="ag-q">' + esc(r[l][1]) + '</span><br><span class="de" lang="' + l + '">' + esc(sm(r[l][2])) + '</span></td>'; }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
    h += '<p class="note muted ag-note">' + T({
      ru: 'В немецком нет творительного и предложного: их работу делают предлоги + Dativ (mit dem Bruder, in Moskau). В английском падежи остались только у местоимений: I / me, he / him, who / whom.',
      en: 'German has no instrumental or prepositional: prepositions + Dativ do their job (mit dem Bruder, in Moskau). English keeps case only in pronouns: I / me, he / him, who / whom.',
      de: 'Das Deutsche hat keinen Instrumental und keinen Präpositiv: Präpositionen + Dativ übernehmen ihre Aufgabe (mit dem Bruder, in Moskau). Im Englischen gibt es Fälle nur noch bei Pronomen: I / me, he / him, who / whom.' }) + '</p>';

    var vi = { de: 0, ru: 1, en: 2 };
    h += GT.whichForm.sectionTitle(T({ ru: 'Глаголы, где падежи расходятся', en: 'Verbs that take different cases', de: 'Verben mit unterschiedlichem Fall' }), 'verbs') +
      '<div class="table-wrap"><table><thead><tr>' + o.map(function (l) { return '<th>' + LN[l] + '</th>'; }).join('') + '</tr></thead><tbody>' +
      VERBS.map(function (r) { return '<tr>' + o.map(function (l) { return '<td class="de" lang="' + l + '">' + esc(sm(r[vi[l]])) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
    h += '<p class="note muted ag-note">' + T({
      ru: 'Эти сочетания учите целиком: глагол + падеж (+ предлог). Именно они дают больше всего ошибок при переносе из родного языка.',
      en: 'Learn these as blocks: verb + case (+ preposition). They cause most of the mistakes that come from your own language.',
      de: 'Lerne sie als Block: Verb + Fall (+ Präposition). Gerade sie verursachen die meisten Fehler, die aus der eigenen Sprache kommen.' }) + '</p>';

    h += GT.whichForm.sectionTitle(T({ ru: 'Где? · Куда?', en: 'Where? · Where to?', de: 'Wo? · Wohin?' }), 'where') +
      '<div class="table-wrap"><table><thead><tr>' + o.map(function (l) { return '<th>' + LN[l] + '</th>'; }).join('') + '</tr></thead><tbody>' +
      [{ de: 'wo? in / an / auf + Dativ — im Büro', ru: sm('где? в / на + предложный — в +офисе'), en: 'where? in / at / on — in the office' },
        { de: 'wohin? in / an / auf + Akkusativ — ins Büro', ru: sm('куда? в / на + винительный — в +офис'), en: 'where to? to / into — to the office' }]
        .map(function (r) { return '<tr>' + o.map(function (l) { return '<td class="de" lang="' + l + '">' + esc(r[l]) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
    h += '<p class="note muted ag-note">' + T({
      ru: 'Немецкий и русский устроены одинаково: место — один падеж, направление — винительный. Английский различает это предлогом (in / into) или не различает вовсе.',
      en: 'German and Russian work the same way: location takes one case, direction takes the accusative. English shows it with the preposition (in / into) or not at all.',
      de: 'Deutsch und Russisch funktionieren gleich: Ort → ein Fall, Richtung → Akkusativ. Englisch zeigt es mit der Präposition (in / into) oder gar nicht.' }) + '</p>';

    h += GT.whichForm.sectionTitle(T({ ru: 'Ловушки рода · немецкий ↔ русский', en: 'Gender traps · German ↔ Russian', de: 'Genus-Fallen · Deutsch ↔ Russisch' }), 'gender') +
      '<div class="table-wrap"><table><thead><tr><th>Deutsch</th><th>Русский</th><th>English</th></tr></thead><tbody>' +
      genderTraps.map(function (x) { return '<tr><td class="de" lang="de"><b class="a-' + x[0] + '">' + x[0] + '</b> ' + esc(x[1]) + '</td><td class="de" lang="ru">' + esc(sm(x[2])) + ' <span class="ag-q">' + { m: 'м. р.', f: 'ж. р.', n: 'ср. р.' }[x[3]] + '</span></td><td>' + esc(x[4]) + '</td></tr>'; }).join('') +
      '</tbody></table></div>' +
      '<p class="note muted ag-note">' + T({ ru: 'Род не переносится из языка в язык: учите немецкое слово сразу с артиклем. В английском рода у существительных нет.', en: 'Gender does not carry over from one language to the other: learn every German noun with its article and every Russian noun with мой / моя / моё. English nouns have no gender.', de: 'Das Genus lässt sich nicht übertragen: lerne jedes russische Nomen mit мой / моя / моё. Englische Nomen haben kein Genus.' }) + '</p>';
    if (wf && (GT.learn === 'de' || GT.learn === 'ru')) h += '<div class="actions"><a class="btn primary" href="#/' + wf.route + '/play">Play · ' + esc(wf.game.title) + ' →</a></div>';
    return h;
  }

  GT.FORMS_CROSS = { notes: notes, genderTraps: genderTraps, casesPage: casesPage, casesSections: SECTIONS };
})();
