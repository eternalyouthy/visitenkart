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

  pack.config.TOPICS.grammar.push({ id: "vorvergangenheit", name: "Earlier past events · B2", group: "Grammar topics" });
  GT.registerGrammar({
    id: "vorvergangenheit", level: "B2", title: "Что произошло раньше · Plusquamperfekt",
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
