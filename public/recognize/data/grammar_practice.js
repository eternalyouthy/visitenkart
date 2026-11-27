/* Additional practice for existing lessons, followed by new lessons. */
(function () {
  'use strict';
  var pack = GT._target;
  function practice(topic, drill) {
    GT.registerDrill(drill, 'grammar', topic);
    pack.grammar[topic].drills.push(drill);
  }

  practice("wortstellung", {
    id: "de-g-wortstellung-practice", kind: "choice",
    q: "Morgen ___ der Kurs erst um zehn an. (anfangen)",
    options: ["fängt", "fangen", "anfängt"],
    answer: 0,
    explain: "После Morgen спрягаемая часть занимает второе место, а приставка an отделяется. В этом предложении время стоит в конце перед приставкой."
  });
  practice("perfekt", {
    id: "de-g-perfekt-practice", kind: "gap",
    q: "Die letzte Bahn ist schon ___. (abfahren)",
    answer: "abgefahren",
    explain: "У отделяемого abfahren элемент ge стоит между ab и fahren."
  });
  practice("nebensaetze", {
    id: "de-g-nebensaetze-practice", kind: "gap",
    q: "Ich bleibe hier, bis der Bus ___. (ankommen)",
    answer: "ankommt",
    explain: "В придаточном с bis приставка остаётся при глаголе в конце."
  });
  practice("relativsaetze", {
    id: "de-g-relativsaetze-practice", kind: "choice",
    q: "Die Kollegin, mit ___ ich das Büro teile, hat Urlaub.",
    options: ["die", "der", "denen"],
    answer: 1,
    explain: "Mit требует Dativ. Относительное местоимение относится к Kollegin, поэтому нужно der."
  });
  practice("konnektoren", {
    id: "de-g-konnektoren-practice", kind: "choice",
    q: "Entweder wir nehmen den Bus, ___ wir gehen zu Fuß.",
    options: ["noch", "sondern", "oder"],
    answer: 2,
    explain: "Entweder … oder связывает две альтернативы."
  });
  practice("konjunktiv2", {
    id: "de-g-konjunktiv2-practice", kind: "choice",
    q: "Wenn ich gestern früher losgegangen ___, hätte ich den Bus erreicht.",
    options: ["würde", "wäre", "hätte"],
    answer: 1,
    explain: "Нереализованное условие в прошлом требует Partizip II и формы wäre у losgehen."
  });
  practice("passiv", {
    id: "de-g-passiv-practice", kind: "choice",
    q: "Die Fenster sind gestern ausgetauscht ___.",
    options: ["geworden", "worden", "werden"],
    answer: 1,
    explain: "В Perfekt пассива у werden особая форма worden."
  });
  practice("adjektive", {
    id: "de-g-adjektive-practice", kind: "gap",
    q: "Wir suchen ein ___ Zimmer. (ruhig)",
    answer: "ruhiges",
    explain: "У ein в Akkusativ среднего рода нет окончания. Показатель -es получает прилагательное."
  });
  practice("kasus", {
    id: "de-g-kasus-practice", kind: "choice",
    q: "Sie hängt den Kalender an ___ Wand. (der/die/das)",
    options: ["die", "der", "dem"],
    answer: 0,
    explain: "Календарь перемещают на стену. An обозначает цель и требует Akkusativ."
  });
  practice("verben_praep", {
    id: "de-g-verben_praep-practice", kind: "choice",
    q: "___ wartest du? – Auf die Bestätigung.",
    options: ["Woran", "Wofür", "Worauf"],
    answer: 2,
    explain: "При вопросе о предмете в сочетании warten auf получается worauf."
  });
  practice("infinitiv", {
    id: "de-g-infinitiv-practice", kind: "gap",
    q: "Ich habe vergessen, das Licht ___. (ausmachen)",
    answer: "auszumachen",
    explain: "У отделяемого ausmachen частица zu встаёт между aus и machen."
  });

  pack.config.TOPICS.grammar.push({ id: "zeit-seit-vor", name: "Time with seit and vor · A2", group: "Grammar topics" });
  GT.registerGrammar({
    id: "zeit-seit-vor", level: "A2", title: "С какого момента и как давно",
    summary: "Seit связывает начало с настоящим, vor отсчитывает время назад.",
    explanation: "<p><b>Seit</b> отвечает на <em>seit wann?</em> и <em>wie lange schon?</em> Если ситуация продолжается, в немецком обычно используют Präsens. <em>Seit März wohne ich hier.</em></p><p><b>Vor</b> с промежутком времени указывает, когда произошло событие. Оба предлога требуют Dativ. Сравните <em>seit einem Monat</em> и <em>vor einem Monat</em>.</p>",
    examples: [
      { t: "Seit einer Woche arbeite ich im Laden.", ru: "Я уже неделю работаю в магазине." },
      { t: "Vor einer Woche habe ich den Vertrag unterschrieben.", ru: "Неделю назад я подписал договор." }
    ],
    drills: [
      {
        id: "de-g-zeit-seit-vor-dauer", kind: "choice",
        q: "Ich wohne ___ drei Jahren hier und möchte bleiben.",
        options: ["vor", "seit"],
        answer: 1,
        explain: "Я всё ещё здесь живу. Seit обозначает период до настоящего момента."
      },
      {
        id: "de-g-zeit-seit-vor-punkt", kind: "choice",
        q: "Ich bin ___ drei Jahren hierhergezogen.",
        options: ["vor", "seit"],
        answer: 0,
        explain: "Переезд — отдельное событие три года назад."
      },
      {
        id: "de-g-zeit-seit-vor-monat", kind: "gap",
        q: "Seit ___ Monat lerne ich Spanisch. (ein)",
        answer: "einem",
        explain: "Monat мужского рода. После seit нужен Dativ."
      },
      {
        id: "de-g-zeit-seit-vor-woche", kind: "gap",
        q: "Vor ___ Woche kam der Brief. (ein)",
        answer: "einer",
        explain: "Woche женского рода. Форма Dativ — einer Woche."
      }
    ]
  });

  pack.config.TOPICS.grammar.push({ id: "ob-oder-wann", name: "Embedded questions with ob and wann · B1", group: "Grammar topics" });
  GT.registerGrammar({
    id: "ob-oder-wann", level: "B1", title: "Косвенный вопрос с ob или wann",
    summary: "Сначала определите, нужен ли ответ «да/нет» или конкретное время.",
    explanation: "<p>Если прямой вопрос допускает ответ «да» или «нет», косвенный вопрос начинается с <b>ob</b>. Если спрашивают о времени, сохраните <b>wann</b>. В обоих случаях спрягаемый глагол переходит в конец придаточного.</p><p><em>Kommt sie? → Weißt du, ob sie kommt?</em> В вопросе <em>Wann kommt sie?</em> уже есть вопросительное слово.</p>",
    examples: [
      { t: "Ich weiß noch nicht, ob der Laden heute öffnet.", ru: "Я пока не знаю, откроется ли магазин сегодня." },
      { t: "Weißt du, wann der Laden öffnet? – Um neun.", ru: "Ты знаешь, во сколько откроется магазин? — В девять." }
    ],
    drills: [
      {
        id: "de-g-ob-oder-wann-ja", kind: "choice",
        q: "Weißt du, ___ Lea mitkommt? – Ja, sie kommt mit.",
        options: ["wann", "ob"],
        answer: 1,
        explain: "Ответ подтверждает сам факт. Вопрос вводится союзом ob."
      },
      {
        id: "de-g-ob-oder-wann-zeit", kind: "choice",
        q: "Sag mir bitte, ___ die Sitzung beginnt. – Um halb zehn.",
        options: ["ob", "wann"],
        answer: 1,
        explain: "Ответ — время начала. Здесь нужно wann."
      },
      {
        id: "de-g-ob-oder-wann-verb", kind: "gap",
        q: "Weißt du, wann der Zug ___? (abfahren)",
        answer: "abfährt",
        explain: "В косвенном вопросе отделяемая приставка остаётся с глаголом."
      },
      {
        id: "de-g-ob-oder-wann-ist", kind: "gap",
        q: "Sie fragt, ob das Zimmer frei ___. (sein)",
        answer: "ist",
        explain: "Подлежащее Zimmer в единственном числе. Ist закрывает придаточное."
      }
    ]
  });

  pack.config.TOPICS.grammar.push({ id: "vorvergangenheit", name: "Earlier past events · B1", group: "Grammar topics" });
  GT.registerGrammar({
    id: "vorvergangenheit", level: "B1", title: "Что произошло раньше · Plusquamperfekt",
    summary: "Выстройте последовательность двух событий в прошлом.",
    explanation: "<p>Plusquamperfekt переносит точку отсчёта в прошлое. Из двух событий более раннее можно обозначить сочетанием <b>hatte/war + Partizip II</b>. Вспомогательный глагол тот же, что и в Perfekt.</p><p><em>Als wir ankamen, hatte der Film schon begonnen.</em> Сначала начался фильм, потом пришли мы. В придаточном вспомогательный глагол стоит после причастия.</p>",
    examples: [
      { t: "Als ich anrief, war der Techniker schon gegangen.", ru: "Когда я позвонил, техник уже ушёл." },
      { t: "Nachdem Lea die Datei gespeichert hatte, schloss sie das Programm.", ru: "Сохранив файл, Леа закрыла программу." }
    ],
    drills: [
      {
        id: "de-g-vorvergangenheit-sein", kind: "choice",
        q: "Als wir den Bahnsteig erreichten, ___ der Zug schon abgefahren.",
        options: ["hatte", "war"],
        answer: 1,
        explain: "Abfahren образует Perfekt с sein, поэтому в Plusquamperfekt нужно war."
      },
      {
        id: "de-g-vorvergangenheit-haben", kind: "choice",
        q: "Als der Gast ankam, ___ wir schon gekocht.",
        options: ["waren", "hatten"],
        answer: 1,
        explain: "Kochen требует haben. Подлежащее wir даёт hatten."
      },
      {
        id: "de-g-vorvergangenheit-ende", kind: "choice",
        q: "Nachdem ich bezahlt ___, steckte ich die Karte ein.",
        options: ["hatte", "war"],
        answer: 0,
        explain: "Bezahlen требует haben. В придаточном hatte стоит после bezahlt."
      },
      {
        id: "de-g-vorvergangenheit-part", kind: "gap",
        q: "Als ich aufwachte, war die Sonne schon ___. (aufgehen)",
        answer: "aufgegangen",
        explain: "Восход произошёл раньше пробуждения. Причастие от aufgehen — aufgegangen."
      }
    ]
  });

})();

/* === Content expansion 2026-11-27 (+4 bilingual drills on 17 DE C1/B2/B1/A2 lessons) === */
(function () {
  var p = GT.packs.de || GT._target;
  if (!p || !p.grammar) return;

  var extras = {
    partizipattribut: [
      { id: 'de-g-x27-pa-1', kind: 'choice', q: 'Die gestern ___ E-Mail enthielt die finale Freigabe.', options: ['verschickt', 'verschickte', 'verschickende'], answer: 1, explain: { ru: 'Отправленное ранее письмо → Partizip II в атрибутивной форме (-te).', en: 'Already sent earlier → passive Partizip II attribute (-te).' } },
      { id: 'de-g-x27-pa-2', kind: 'choice', q: 'Der laut ___ Wecker weckte das ganze Zimmer.', options: ['klingelnde', 'geklingelte', 'klingelnd'], answer: 0, explain: { ru: 'Активное одновременное действие → Partizip I + окончание (-nde).', en: 'Active simultaneous action → Partizip I with adjective ending (-nde).' } },
      { id: 'de-g-x27-pa-3', kind: 'gap', q: 'Das bis Freitag ___ Formular liegt auf dem Schreibtisch. (einreichen, Partizip I mit zu)', answer: 'einzureichende', explain: { ru: 'zu + Partizip I = «который нужно подать» (отделяемая приставка: einzureichende).', en: 'zu + Partizip I = “to be submitted” (separable prefix: einzureichende).' } },
      { id: 'de-g-x27-pa-4', kind: 'reorder', q: { ru: 'Соберите словосочетание: «быстро растущий спрос».', en: 'Build: “the rapidly growing demand”.' }, tokens: ['die', 'rasch', 'steigende', 'Nachfrage'], answer: 'die rasch steigende Nachfrage', explain: { ru: 'Определение стоит между артиклем и существительным.', en: 'Modifiers sit between the article and the noun.' } }
    ],
    modalpartikeln: [
      { id: 'de-g-x27-mp-1', kind: 'choice', q: 'Du kannst das Fenster ___ aufmachen, hier ist es stickig. (дружеское разрешение)', options: ['ruhig', 'wohl', 'etwa'], answer: 0, explain: { ru: 'ruhig делает разрешение/приглашение тёплым и непринуждённым.', en: 'ruhig gives a warm, reassuring “feel free to”.' } },
      { id: 'de-g-x27-mp-2', kind: 'choice', q: 'Hast du ___ wieder den Schlüssel vergessen? (удивлённый вопрос)', options: ['etwa', 'halt', 'ja'], answer: 0, explain: { ru: 'etwa в вопросе выражает недоумение («неужели…?»).', en: 'etwa in yes/no questions signals disbelief (“surely not…?”).' } },
      { id: 'de-g-x27-mp-3', kind: 'gap', q: 'Das Leben ist ___ nicht immer einfach. (смирение с фактом)', answer: 'halt', explain: { ru: 'halt / eben отмечают неизбежность: «что ж поделать».', en: 'halt / eben mark an unchangeable fact (“just the way it is”).' } },
      { id: 'de-g-x27-mp-4', kind: 'choice', q: 'Was hat er ___ gesagt? Ich habe es nicht verstanden.', options: ['eigentlich', 'ruhig', 'doch mal'], answer: 0, explain: { ru: 'eigentlich в вопросе задаёт искренний интерес или смену темы («вообще / кстати»).', en: 'eigentlich softens a question with genuine curiosity (“actually”).' } }
    ],
    mittelfeld: [
      { id: 'de-g-x27-mf-1', kind: 'choice', q: 'Welche Reihenfolge ist neutral? (TeKaMoLo)', options: ['Wir fahren heute wegen des Streiks mit dem Rad ins Büro.', 'Wir fahren ins Büro heute mit dem Rad wegen des Streiks.', 'Wir fahren mit dem Rad wegen des Streiks heute ins Büro.'], answer: 0, explain: { ru: 'TeKaMoLo: Temporal (heute) → Kausal (wegen…) → Modal (mit…) → Lokal (ins Büro).', en: 'TeKaMoLo: Temporal → Causal → Modal → Local.' } },
      { id: 'de-g-x27-mf-2', kind: 'choice', q: 'Pronomenregel: Kann ich ___ bald zurückgeben?', options: ['es dir', 'dir es', 'es an dir'], answer: 0, explain: { ru: 'Два местоимения: Akkusativ (es) всегда перед Dativ (dir).', en: 'Two pronouns: accusative (es) comes before dative (dir).' } },
      { id: 'de-g-x27-mf-3', kind: 'reorder', q: { ru: 'Поставьте дополнения нейтрально: «Врач выписывает пациенту рецепт».', en: 'Order neutrally: “The doctor writes the patient a prescription.”' }, tokens: ['Der Arzt', 'stellt', 'dem Patienten', 'ein Rezept', 'aus.'], answer: 'Der Arzt stellt dem Patienten ein Rezept aus.', explain: { ru: 'Два существительных: Dativ (dem Patienten) перед Akkusativ (ein Rezept).', en: 'Two nouns: dative precedes accusative.' } },
      { id: 'de-g-x27-mf-4', kind: 'choice', q: 'Er hat ___ gestern auf der Konferenz vorgestellt.', options: ['ihn seiner Chefin', 'seiner Chefin ihn', 'sich ihr vor'], answer: 0, explain: { ru: 'Местоимение в аккузативе (ihn) идёт раньше существительного в дативе (seiner Chefin).', en: 'Accusative pronoun (ihn) precedes dative noun (seiner Chefin).' } }
    ],
    konnektoren_c1: [
      { id: 'de-g-x27-kc-1', kind: 'choice', q: '___ er viel Erfahrung mitbrachte, brauchte die Einarbeitung Zeit.', options: ['Obgleich', 'Deshalb', 'Indem'], answer: 0, explain: { ru: 'Obgleich (= obwohl, книжный C1) вводит уступку с глаголом в конце.', en: 'Obgleich (formal “although”) introduces a concessive subordinate clause.' } },
      { id: 'de-g-x27-kc-2', kind: 'choice', q: 'Man löst das Problem am besten, ___ man klare Zuständigkeiten festlegt.', options: ['indem', 'obschon', 'während'], answer: 0, explain: { ru: 'indem = «путём того, что / тем, что» (способ действия).', en: 'indem expresses method (“by doing X”).' } },
      { id: 'de-g-x27-kc-3', kind: 'gap', q: 'Der Plan ist riskant; ___ sind die Kosten kaum kalkulierbar. (к тому же, кроме того — союзное наречие)', answer: 'zudem', explain: { ru: 'zudem / außerdem (наречие-коннектор) добавляет ещё один аргумент и даёт инверсию.', en: 'zudem (“furthermore”) adds an argument with verb-second inversion.' } },
      { id: 'de-g-x27-kc-4', kind: 'choice', q: '___ die einen sparen wollen, fordern die anderen Investitionen.', options: ['Während', 'Infolgedessen', 'Sofern'], answer: 0, explain: { ru: 'Während сопоставляет противоположные позиции («в то время как»).', en: 'Während contrasts two opposing positions (“whereas”).' } }
    ],
    es_gebrauch: [
      { id: 'de-g-x27-es-1', kind: 'choice', q: 'Heute ___ auf der Autobahn zu langen Staus gekommen.', options: ['ist es', 'ist', 'es ist'], answer: 0, explain: { ru: 'kommen zu (+ Dat.) в безличной форме: es остаётся после глагола.', en: 'Impersonal es kommt zu keeps es even when not in position 1.' } },
      { id: 'de-g-x27-es-2', kind: 'choice', q: 'Dass Sie gekommen sind, freut ___ besonders.', options: ['mich', 'es mich', 'mich es'], answer: 0, explain: { ru: 'Придаточное на 1-м месте заменяет коррелят — лишнее es исчезает.', en: 'Fronting the clause removes the correlate es.' } },
      { id: 'de-g-x27-es-3', kind: 'gap', q: 'Mir geht ___ seit gestern wieder deutlich besser.', answer: 'es', explain: { ru: 'В обороте es geht jemandem gut слово es — обязательное безличное подлежащее.', en: 'In es geht jemandem gut, impersonal es cannot be omitted.' } },
      { id: 'de-g-x27-es-4', kind: 'choice', q: 'Auf dem Flur ___ zwei Bewerberinnen.', options: ['warten', 'wartet es', 'warten es'], answer: 0, explain: { ru: 'Заполнитель es исчезает, когда 1-е место занимает Auf dem Flur.', en: 'Placeholder es drops when Auf dem Flur occupies position 1.' } }
    ],
    konjunktiv1: [
      { id: 'de-g-x27-k1-1', kind: 'choice', q: 'Die Ministerin erklärte, die Lage ___ unter Kontrolle.', options: ['sei', 'ist gewesen', 'wäre sei'], answer: 0, explain: { ru: 'Косвенная речь для sein → Konjunktiv I: sei.', en: 'Indirect speech for sein uses Konjunktiv I: sei.' } },
      { id: 'de-g-x27-k1-2', kind: 'choice', q: 'Die Zeugen berichteten, sie ___ nichts Ungewöhnliches bemerkt.', options: ['hätten', 'haben', 'habt'], answer: 0, explain: { ru: 'Когда haben в 3-м л. мн. ч. совпадает с индикативом (sie haben), заменяем на Konjunktiv II (hätten).', en: 'Because 3rd plural haben equals indicative, replace it with Konjunktiv II (hätten).' } },
      { id: 'de-g-x27-k1-3', kind: 'gap', q: 'Der Sprecher betonte, es ___ keine Entlassungen geplant. (sein)', answer: 'seien', explain: { ru: 'Подлежащее множественного числа Entlassungen → seien.', en: 'Plural real subject Entlassungen requires seien.' } },
      { id: 'de-g-x27-k1-4', kind: 'choice', q: 'Er behauptet, er ___ den Vertrag bereits gestern verschickt.', options: ['habe', 'hättest', 'hatte'], answer: 0, explain: { ru: '3-е л. ед. ч. перфекта в косвенной речи → er habe … verschickt.', en: '3rd singular indirect past → er habe … verschickt.' } }
    ],
    passiversatz: [
      { id: 'de-g-x27-pe-1', kind: 'choice', q: 'Diese Datei ___ sich leider nicht mehr wiederherstellen.', options: ['lässt', 'kann', 'ist zu'], answer: 0, explain: { ru: 'sich lassen + Infinitiv = «может быть … / поддаётся …».', en: 'sich lassen + infinitive = “can be [verb]ed”.' } },
      { id: 'de-g-x27-pe-2', kind: 'choice', q: 'Der Bericht ist bis Montag unbedingt ___.', options: ['abzugeben', 'abgeben', 'abgegebbar'], answer: 0, explain: { ru: 'sein + zu + Infinitiv (долженствование или возможность): ist abzugeben.', en: 'sein + zu + infinitive expresses necessity: ist abzugeben.' } },
      { id: 'de-g-x27-pe-3', kind: 'gap', q: 'Leitungswasser ist in dieser Region problemlos trink___. (-bar)', answer: 'bar', explain: { ru: 'Суффикс -bar (= kann getrunken werden): trinkbar.', en: 'Suffix -bar (= can be drunk): trinkbar.' } },
      { id: 'de-g-x27-pe-4', kind: 'choice', q: 'Ihre Handschrift ist kaum ___. (= kann kaum gelesen werden)', options: ['lesbar / leserlich', 'zu gelesene', 'gelesen'], answer: 0, explain: { ru: 'Прилагательные на -bar/-lich часто заменяют пассив с können.', en: 'Adjectives in -bar/-lich serve as passive substitutes with können.' } }
    ],
    konnektoren_b2: [
      { id: 'de-g-x27-kb2-1', kind: 'choice', q: '___ er nicht nur Deutsch, sondern auch Spanisch spricht, findet er leicht Kunden.', options: ['Da', 'Obwohl', 'Trotzdem'], answer: 0, explain: { ru: 'Da — известная слушателю причина, часто в начале предложения.', en: 'Da introduces an already known or clear reason.' } },
      { id: 'de-g-x27-kb2-2', kind: 'choice', q: 'Das Hotel war teuer; ___ blieben wir eine Nacht länger.', options: ['dennoch', 'trotz', 'obwohl'], answer: 0, explain: { ru: 'dennoch (= trotzdem) — наречие с глаголом сразу после него.', en: 'dennoch (“nevertheless”) is an adverb causing verb-second inversion.' } },
      { id: 'de-g-x27-kb2-3', kind: 'gap', q: 'Sowohl die Kosten ___ auch der Zeitaufwand sind gesunken.', answer: 'als', explain: { ru: 'Двойной союз «как…, так и…» → sowohl … als auch.', en: 'Double conjunction “both … and …” → sowohl … als auch.' } },
      { id: 'de-g-x27-kb2-4', kind: 'choice', q: 'Entweder fahren wir mit der Bahn, ___ wir buchen ein Mietauto.', options: ['oder', 'noch', 'desto'], answer: 0, explain: { ru: 'entweder … oder — альтернативный выбор («либо…, либо…»).', en: 'entweder … oder marks an either/or choice.' } }
    ],
    vermutung: [
      { id: 'de-g-x27-ver-1', kind: 'choice', q: 'Er ___ wohl noch im Stau stehen.', options: ['wird', 'wurde', 'ist'], answer: 0, explain: { ru: 'Futur I (+ wohl) часто выражает предположение о настоящем.', en: 'Futur I (+ wohl) expresses present-time supposition.' } },
      { id: 'de-g-x27-ver-2', kind: 'choice', q: 'Das Paket ___ schon gestern angekommen sein.', options: ['dürfte', 'sollten', 'würde'], answer: 0, explain: { ru: 'Высокая вероятность в прошлом → dürfte … angekommen sein.', en: 'Likely past assumption → dürfte … angekommen sein.' } },
      { id: 'de-g-x27-ver-3', kind: 'gap', q: 'Sie hat wohl den Wecker nicht ___. (hören, Partizip II)', answer: 'gehört', explain: { ru: 'wohl с перфектом для вероятной причины в прошлом.', en: 'wohl with Perfekt for a likely past cause.' } },
      { id: 'de-g-x27-ver-4', kind: 'choice', q: 'Mit Sicherheit ___ die Zahlen noch korrigiert werden müssen.', options: ['werden', 'haben', 'sind'], answer: 0, explain: { ru: 'Предположение о будущем/необходимости → werden … müssen.', en: 'Future assumption with modal → werden … müssen.' } }
    ],
    nominalstil: [
      { id: 'de-g-x27-nom-1', kind: 'choice', q: 'Verbalsatz: „Weil es stark regnete…“ → Nominalsatz: „___ starken Regens…“', options: ['Wegen des', 'Trotz dem', 'Während den'], answer: 0, explain: { ru: 'weil → предлог wegen + Genitiv (des starken Regens).', en: 'weil converts to wegen + genitive (des starken Regens).' } },
      { id: 'de-g-x27-nom-2', kind: 'choice', q: '„Bevor Sie abreisen…“ → „Vor Ihrer ___…“', options: ['Abreise', 'abgereist', 'Abreisung'], answer: 0, explain: { ru: 'bevor + глагол → vor + существительное (die Abreise).', en: 'bevor + clause becomes vor + noun (Abreise).' } },
      { id: 'de-g-x27-nom-3', kind: 'gap', q: '„Wenn man den Preis prüft…“ → Bei ___ des Preises… (Prüfung)', answer: 'Prüfung', explain: { ru: 'wenn + verb → bei + существительное (Bei Prüfung des Preises).', en: 'wenn + verb → bei + noun (Bei Prüfung des Preises).' } },
      { id: 'de-g-x27-nom-4', kind: 'choice', q: '„Nachdem der Test abgeschlossen war…“ → „___ Abschluss des Tests…“', options: ['Nach', 'Seit', 'Vor'], answer: 0, explain: { ru: 'nachdem → предлог nach (+ Dativ).', en: 'nachdem transforms into nach (+ dative).' } }
    ],
    genitivpraep: [
      { id: 'de-g-x27-gp-1', kind: 'choice', q: '___ des schlechten Wetters fand das Konzert statt.', options: ['Trotz', 'Wegen', 'Dank'], answer: 0, explain: { ru: 'Уступка вопреки препятствию → Trotz + Genitiv.', en: 'Concession despite an obstacle → Trotz + genitive.' } },
      { id: 'de-g-x27-gp-2', kind: 'choice', q: 'Während ___ Urlaubs habe ich meine Mails kaum geprüft.', options: ['meines', 'meinem', 'meinen'], answer: 0, explain: { ru: 'während + Genitiv (муж./ср. род → meines Urlaubs).', en: 'während + genitive (meines Urlaubs).' } },
      { id: 'de-g-x27-gp-3', kind: 'gap', q: 'Aufgrund ___ Verzögerung verschieben wir den Termin. (die)', answer: 'der', explain: { ru: 'aufgrund + Genitiv женского рода → der Verzögerung.', en: 'aufgrund + feminine genitive → der Verzögerung.' } },
      { id: 'de-g-x27-gp-4', kind: 'choice', q: '___ einer teuren Reparatur kaufen wir lieber ein neues Gerät.', options: ['Statt', 'Dank', 'Infolge'], answer: 0, explain: { ru: '«Вместо» → (An)statt + Genitiv.', en: '“Instead of” → (An)statt + genitive.' } }
    ],
    konj2_vergangenheit: [
      { id: 'de-g-x27-k2v-1', kind: 'choice', q: 'Ich ___ das Hotel lieber früher gebucht.', options: ['hätte', 'wäre', 'würde'], answer: 0, explain: { ru: 'buchen образует перфект с haben → hätte … gebucht.', en: 'buchen uses haben in the perfect → hätte … gebucht.' } },
      { id: 'de-g-x27-k2v-2', kind: 'choice', q: 'Wenn sie rechtzeitig abgefahren ___, hätte sie den Zug noch erreicht.', options: ['wäre', 'hätte', 'würde'], answer: 0, explain: { ru: 'abfahren (движение) образует перфект с sein → wäre abgefahren.', en: 'abfahren uses sein → wäre abgefahren.' } },
      { id: 'de-g-x27-k2v-3', kind: 'gap', q: 'Ohne deine Hilfe ___ ich das nie geschafft. (haben, Konj. II)', answer: 'hätte', explain: { ru: 'schaffen с haben → hätte … geschafft.', en: 'schaffen takes haben → hätte … geschafft.' } },
      { id: 'de-g-x27-k2v-4', kind: 'choice', q: 'Das ___ eigentlich viel schneller gehen ___.', options: ['hätte / können', 'wäre / gekonnt', 'hätte / gekonnt'], answer: 0, explain: { ru: 'Модальный глагол в прошлом сослагательном: hätte + Infinitiv + Modal-Infinitiv (Ersatzinfinitiv).', en: 'Past Konjunktiv II with modal uses double infinitive: hätte + Infinitiv + können.' } }
    ],
    komparation: [
      { id: 'de-g-x27-komp-1', kind: 'choice', q: 'Der neue Bildschirm ist deutlich größer ___ der alte.', options: ['als', 'wie', 'so'], answer: 0, explain: { ru: 'После сравнительной степени (größer) всегда als.', en: 'Comparative adjectives always take als (not wie).' } },
      { id: 'de-g-x27-komp-2', kind: 'choice', q: 'Dieser Weg ist genauso lang ___ der andere.', options: ['wie', 'als', 'je'], answer: 0, explain: { ru: 'При равенстве (so / genauso …) используется wie.', en: 'Equal comparisons (genauso …) take wie.' } },
      { id: 'de-g-x27-komp-3', kind: 'gap', q: 'Je früher wir anfangen, ___ eher sind wir fertig.', answer: 'desto', explain: { ru: 'Парный союз «чем…, тем…» → je … desto (или umso).', en: 'Correlative comparison “the …, the …” → je … desto.' } },
      { id: 'de-g-x27-komp-4', kind: 'choice', q: 'Dieses Problem kommt häufiger vor, ___ wir dachten.', options: ['als', 'wie', 'denn'], answer: 0, explain: { ru: 'Сравнительная степень häufiger требует als.', en: 'Comparative häufiger pairs with als.' } }
    ],
    modalverben: [
      { id: 'de-g-x27-mv-1', kind: 'choice', q: 'Im Labor ___ man keine Speisen mitbringen (запрет).', options: ['darf', 'muss nicht', 'soll'], answer: 0, explain: { ru: 'Запрет («нельзя») — nicht dürfen; muss nicht = «не обязательно».', en: 'Prohibition (“must not”) is nicht dürfen; muss nicht = “need not”.' } },
      { id: 'de-g-x27-mv-2', kind: 'choice', q: 'Du ___ morgen nicht extra früh kommen; alles ist vorbereitet.', options: ['brauchst / musst', 'darfst', 'sollst'], answer: 0, explain: { ru: 'Отсутствие необходимости → nicht müssen или nicht brauchen zu.', en: 'Lack of necessity → nicht müssen / nicht brauchen zu.' } },
      { id: 'de-g-x27-mv-3', kind: 'gap', q: 'Mein Arzt meint, ich ___ mehr Wasser trinken. (рекомендация)', answer: 'soll', explain: { ru: 'Чужой совет/рекомендация передаётся через sollen.', en: 'Reported advice or recommendation uses sollen.' } },
      { id: 'de-g-x27-mv-4', kind: 'choice', q: 'Gestern ___ ich lange im Büro bleiben.', options: ['musste', 'muss', 'gemusst'], answer: 0, explain: { ru: 'В прошедшем времени для модальных глаголов нормален Präteritum (musste).', en: 'Modals prefer the simple past (Präteritum: musste) over Perfekt.' } }
    ],
    'zeit-seit-vor': [
      { id: 'de-g-x27-zsv-1', kind: 'choice', q: 'Wir wohnen ___ drei Jahren in Hamburg (и до сих пор живём).', options: ['seit', 'vor', 'für'], answer: 0, explain: { ru: 'Длится с прошлого до сих пор (Präsens) → seit.', en: 'Started in the past and still continuing → seit + present tense.' } },
      { id: 'de-g-x27-zsv-2', kind: 'choice', q: 'Ich bin ___ zwei Wochen aus dem Urlaub zurückgekehrt.', options: ['vor', 'seit', 'in'], answer: 0, explain: { ru: 'Точка в прошлом («две недели назад») → vor + Dativ.', en: 'Point in the past (“two weeks ago”) → vor + dative.' } },
      { id: 'de-g-x27-zsv-3', kind: 'gap', q: 'Das Projekt läuft ___ Anfang Januar und endet nächste Woche.', answer: 'seit', explain: { ru: 'С начальной точки в прошлом до настоящего момента → seit.', en: 'Continuous from a past start point until now → seit.' } },
      { id: 'de-g-x27-zsv-4', kind: 'choice', q: 'Wir bleiben ___ zehn Tage an der Ostsee (общая длительность поездки).', options: ['für', 'vor', 'seit'], answer: 0, explain: { ru: 'Планируемый/ограниченный срок → für (+ Akkusativ).', en: 'Planned or bounded duration → für + accusative.' } }
    ],
    'ob-oder-wann': [
      { id: 'de-g-x27-oow-1', kind: 'choice', q: 'Ich weiß noch nicht, ___ die Besprechung wirklich stattfindet.', options: ['ob', 'wenn', 'wann'], answer: 0, explain: { ru: 'Да/нет неопределённость («ли») в косвенном вопросе → ob.', en: 'Yes/no uncertainty (“whether”) in indirect questions → ob.' } },
      { id: 'de-g-x27-oow-2', kind: 'choice', q: 'Kannst du mir sagen, ___ der Zug ankommt? (точное время)', options: ['wann', 'ob', 'wenn'], answer: 0, explain: { ru: 'Вопрос о времени («когда») → wann.', en: 'Question about time (“when”) → wann.' } },
      { id: 'de-g-x27-oow-3', kind: 'gap', q: '___ das Wetter gut bleibt, essen wir draußen.', answer: 'Wenn', explain: { ru: 'Условие («если») вводит союз wenn.', en: 'Condition (“if/when”) is introduced by wenn.' } },
      { id: 'de-g-x27-oow-4', kind: 'choice', q: '___ ich Zeit habe, gehe ich abends laufen. (каждый раз, когда)', options: ['Immer wenn', 'Immer wann', 'Ob'], answer: 0, explain: { ru: 'Повторяющееся действие в настоящем/будущем → (immer) wenn, не wann.', en: 'Repeated actions in present/future take (immer) wenn, never wann.' } }
    ],
    vorvergangenheit: [
      { id: 'de-g-x27-vv-1', kind: 'choice', q: 'Nachdem er alle E-Mails beantwortet ___, schaltete er den Laptop aus.', options: ['hatte', 'war', 'hat'], answer: 0, explain: { ru: 'beantworten с haben; действие раньше главного в прошлом → Plusquamperfekt hatte.', en: 'beantworten takes haben; earlier past action → hatte.' } },
      { id: 'de-g-x27-vv-2', kind: 'choice', q: 'Als wir im Kino ankamen, ___ der Film schon vor zehn Minuten begonnen.', options: ['hatte', 'war', 'hat'], answer: 0, explain: { ru: 'beginnen образует перфект с haben → hatte begonnen.', en: 'beginnen forms its perfect with haben → hatte begonnen.' } },
      { id: 'de-g-x27-vv-3', kind: 'gap', q: 'Sie bemerkte erst zu Hause, dass sie den Schirm im Café vergessen ___.', answer: 'hatte', explain: { ru: 'Забыла зонт раньше, чем заметила дома → Plusquamperfekt hatte.', en: 'Forgetting happened before noticing → Plusquamperfekt hatte.' } },
      { id: 'de-g-x27-vv-4', kind: 'choice', q: 'Nachdem die Gäste nach Hause ___ waren, räumten wir die Küche auf.', options: ['gegangen', 'gehen', 'gingen'], answer: 0, explain: { ru: 'Plusquamperfekt с sein: Partizip II (gegangen) + waren.', en: 'Plusquamperfekt with sein: Partizip II (gegangen) + waren.' } }
    ]
  };

  Object.keys(extras).forEach(function (tid) {
    var lesson = p.grammar[tid];
    if (!lesson) return;
    extras[tid].forEach(function (d) {
      GT.registerDrill(d, 'grammar', tid);
      lesson.drills.push(d);
    });
  });
})();
