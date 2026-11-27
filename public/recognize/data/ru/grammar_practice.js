/* Additional practice for existing lessons, followed by new lessons. */
(function () {
  'use strict';
  var pack = GT._target;
  function practice(topic, drill) {
    GT.registerDrill(drill, 'grammar', topic);
    pack.grammar[topic].drills.push(drill);
  }

  practice("aspect", {
    id: "ru-g-aspect-practice", kind: "choice",
    q: "Что ты д+елал весь в+ечер? — Я ___ отчёт.",
    options: ["напис+ал", "пис+ал"],
    answer: 1,
    explain: "The question asks how the evening was spent. The imperfective пис+ал presents writing as an activity."
  });
  practice("cases", {
    id: "ru-g-cases-practice", kind: "gap",
    q: "Я полож+ила бил+еты в ___. (с+умка)",
    answer: "с+умку",
    explain: "The bag is the destination. В takes the accusative с+умку."
  });
  practice("motion", {
    id: "ru-g-motion-practice", kind: "choice",
    q: "Я сейч+ас в авт+обусе и ___ дом+ой.",
    options: ["хож+у", "+езжу", "+еду"],
    answer: 2,
    explain: "The speaker is travelling towards a single destination by vehicle. Use +еду."
  });
  practice("genitive", {
    id: "ru-g-genitive-practice", kind: "gap",
    q: "До ___ ост+алось пять мин+ут. (ур+ок)",
    answer: "ур+ока",
    explain: "До takes the genitive. The stress stays on the stem in ур+ока."
  });
  practice("dative", {
    id: "ru-g-dative-practice", kind: "gap",
    q: "___ х+олодно. (сестр+а)",
    answer: "Сестр+е",
    explain: "The person who feels cold is in the dative."
  });
  practice("instrumental", {
    id: "ru-g-instrumental-practice", kind: "gap",
    q: "Мы откр+ыли дверь ___. (ключ)",
    answer: "ключ+ом",
    explain: "The key is the tool. Use the instrumental without a preposition."
  });
  practice("adjectives", {
    id: "ru-g-adjectives-practice", kind: "gap",
    q: "Мы куп+или ___ ч+ашку. (б+елый)",
    answer: "б+елую",
    explain: "Ч+ашку is feminine accusative singular. The adjective takes -ую."
  });
  practice("reflexive", {
    id: "ru-g-reflexive-practice", kind: "gap",
    q: "В семь час+ов магаз+ин ___. (закрыв+аться)",
    answer: "закрыв+ается",
    explain: "The shop closes. The third-person singular has -ется."
  });

  pack.config.TOPICS.grammar.push({ id: "budushchee", name: "Two ways to form the future · A2", group: "Grammar topics" });
  GT.registerGrammar({
    id: "budushchee", level: "A2", title: "Two ways to form the future",
    summary: "Choose a future form for an activity or a completed task.",
    explanation: "<p>For an imperfective activity, conjugate <b>быть</b> and keep the infinitive. <em>З+автра я б+уду чит+ать.</em> For a perfective event, use the conjugated verb on its own. <em>З+автра я прочит+аю стать+ю.</em></p><p>Number and person appear on the auxiliary or on the perfective verb. Compare <em>мы б+удем чит+ать</em> and <em>мы прочит+аем</em>.</p>",
    examples: [
      { t: "Мы б+удем кр+асить ст+ены весь день.", en: "We'll spend the whole day painting the walls." },
      { t: "К п+ятнице мы покр+асим к+ухню.", en: "We'll finish painting the kitchen by Friday." }
    ],
    drills: [
      {
        id: "ru-g-budushchee-aux", kind: "choice",
        q: "В субб+оту мы ___ собир+ать м+ебель.",
        options: ["б+удет", "б+удем", "б+уду"],
        answer: 1,
        explain: "Мы takes б+удем. The activity stays in the infinitive."
      },
      {
        id: "ru-g-budushchee-inf", kind: "gap",
        q: "Весь в+ечер я б+уду ___ отчёт. (пис+ать)",
        answer: "пис+ать",
        explain: "The auxiliary already carries person and tense. Keep the imperfective infinitive."
      },
      {
        id: "ru-g-budushchee-pf", kind: "gap",
        q: "До об+еда я ___ отв+ет. (напис+ать)",
        answer: "напиш+у",
        explain: "The intended result is a completed reply. The perfective first-person future is напиш+у."
      },
      {
        id: "ru-g-budushchee-plural", kind: "gap",
        q: "З+автра вы ___ свой зак+аз. (получ+ить)",
        answer: "пол+учите",
        explain: "Получ+ить is perfective. Its future with вы is пол+учите."
      }
    ]
  });

  pack.config.TOPICS.grammar.push({ id: "svoi-ili-ego", name: "Whose is it? Свой and его · B1", group: "Grammar topics" });
  GT.registerGrammar({
    id: "svoi-ili-ego", level: "B1", title: "Possession with свой, его and её",
    summary: "Follow the grammatical subject to identify the owner.",
    explanation: "<p><b>Свой</b> links a possession back to the subject of its clause. It agrees with the thing possessed in gender, number and case. <em>Л+ена берёт сво+ю с+умку.</em> Here the bag belongs to Lena.</p><p><b>Ег+о</b> and <b>её</b> used as possessives stay unchanged. With a third-person subject, they can point to somebody else. Name both people when the context might be unclear.</p>",
    examples: [
      { t: "+Анна взял+а свой зонт.", en: "Anna took her own umbrella." },
      { t: "У М+аши есть зонт. +Анна взял+а её зонт.", en: "Masha has an umbrella. Anna took Masha's umbrella." }
    ],
    drills: [
      {
        id: "ru-g-svoi-ili-ego-own", kind: "choice",
        q: "Н+ина взял+а ___ п+аспорт. П+аспорт принадлеж+ит Н+ине.",
        options: ["свой", "сво+я", "сво+ю"],
        answer: 0,
        explain: "Nina owns the passport and is the subject. П+аспорт is masculine and inanimate."
      },
      {
        id: "ru-g-svoi-ili-ego-other", kind: "choice",
        q: "У +Оли есть маш+ина. Брат м+оет ___ маш+ину. Маш+ина принадлеж+ит +Оле.",
        options: ["сво+ю", "её", "ег+о"],
        answer: 1,
        explain: "The brother is the subject but Olya owns the car. Use её."
      },
      {
        id: "ru-g-svoi-ili-ego-case", kind: "gap",
        q: "В+иктор помог+ает ___ сестр+е. (свой)",
        answer: "сво+ей",
        explain: "Помог+ать takes the dative. Feminine singular gives сво+ей."
      },
      {
        id: "ru-g-svoi-ili-ego-plural", kind: "gap",
        q: "Н+ина нашл+а ___ ключ+и. (свой)",
        answer: "сво+и",
        explain: "An inanimate accusative plural takes сво+и, matching ключ+и."
      }
    ]
  });

  pack.config.TOPICS.grammar.push({ id: "uslovie-by", name: "Imagined conditions with бы · B2", group: "Grammar topics" });
  GT.registerGrammar({
    id: "uslovie-by", level: "B2", title: "Imagined conditions with бы",
    summary: "Combine a past-form verb with бы to imagine a different situation.",
    explanation: "<p><b>+Если бы</b> introduces an imagined condition. The result clause normally has its own <b>бы</b>. The verb has past-form agreement in both clauses. <em>+Если бы у мен+я б+ыло вр+емя, я бы ост+алась.</em></p><p>The verb form alone does not date the imagined event. A time expression can place it in the present or the past. The particle <em>бы</em> stays the same with singular and plural subjects.</p>",
    examples: [
      { t: "+Если бы магаз+ин был откр+ыт, мы бы куп+или хлеб.", en: "If the shop were open, we would buy bread." },
      { t: "+Если бы мы вчер+а в+ышли р+аньше, мы бы усп+ели на п+оезд.", en: "If we'd left earlier yesterday, we'd have caught the train." }
    ],
    drills: [
      {
        id: "ru-g-uslovie-by-particle", kind: "choice",
        q: "+Если ___ шёл дождь, мы бы ост+ались д+ома.",
        options: ["ли", "же", "бы"],
        answer: 2,
        explain: "Бы marks the rain as an imagined condition."
      },
      {
        id: "ru-g-uslovie-by-fem", kind: "gap",
        q: "+Если бы М+аша жил+а бл+иже, он+а бы ч+аще к нам ___. (заход+ить)",
        answer: "заход+ила",
        explain: "The past-form verb agrees with feminine singular он+а."
      },
      {
        id: "ru-g-uslovie-by-neuter", kind: "gap",
        q: "+Если бы у нас ___ вр+емя, мы бы зашл+и в муз+ей. (быть)",
        answer: "б+ыло",
        explain: "Вр+емя is neuter singular, so use б+ыло."
      },
      {
        id: "ru-g-uslovie-by-plural", kind: "gap",
        q: "Мы бы ___ на п+оезд, +если бы в+ышли р+аньше. (усп+еть)",
        answer: "усп+ели",
        explain: "Мы requires a plural verb in -ли. The particle бы stays unchanged."
      }
    ]
  });

})();

/* === Content expansion 2026-11-27 (+4 bilingual drills on all 13 existing RU C1 & thin lessons) === */
(function () {
  var p = GT.packs.ru || GT._target;
  if (!p || !p.grammar) return;

  var extras = {
    word_order: [
      { id: 'ru-g-x27-wo-1', kind: 'choice', q: { en: 'Question: «Где лежит папка?» (new info = location)', de: 'Frage: „Wo liegt der Ordner?“ (neu = Ort)' }, options: ['П+апка леж+ит на п+олке.', 'На п+олке леж+ит п+апка.', 'Лежит п+апка на п+олке.'], answer: 0, explain: { en: 'Known folder (theme) first → new location (rheme) at the end.', de: 'Bekannter Ordner zuerst → neuer Ort am Ende.' } },
      { id: 'ru-g-x27-wo-2', kind: 'choice', q: { en: 'Question: «Кто написал этот отчёт?» (new info = author)', de: 'Frage: „Wer hat diesen Bericht geschrieben?“ (neu = Autor)' }, options: ['+Этот отчёт напис+ала Мар+ина.', 'Мар+ина напис+ала этот отчёт.', 'Напис+ала Мар+ина этот отчёт.'], answer: 0, explain: { en: 'Known report at the start; the new answer (Марина) goes to the end.', de: 'Bekannter Bericht vorne; die neue Antwort (Марина) steht am Ende.' } },
      { id: 'ru-g-x27-wo-3', kind: 'choice', q: { en: 'Which sounds neutral for “It’s already midnight / night fell”?', de: 'Was klingt neutral für „Es wurde Nacht“?' }, options: ['Наступ+ила ночь.', 'Ночь наступ+ила.', 'Наступила ли ночь.'], answer: 0, explain: { en: 'Introducing a new event as a whole places verb before subject.', de: 'Bei ganz neuen Ereignissen steht das Verb oft vor dem Subjekt.' } },
      { id: 'ru-g-x27-wo-4', kind: 'choice', q: { en: 'Context: «Сколько человек пришло на курс?» (new info = exact count)', de: 'Kontext: „Wie viele kamen?“ (genaue Zahl = neu)' }, options: ['На курс пришл+о дв+адцать челов+ек.', 'Дв+адцать челов+ек на курс пришло.', 'Пришл+о на курс.'], answer: 0, explain: { en: 'The requested number stands at the end as the rheme.', de: 'Die erfragte Zahl steht als Rhema am Satzende.' } }
    ],
    aspect_infinitive: [
      { id: 'ru-g-x27-ai-1', kind: 'choice', q: 'Я реш+ил к+аждое +утро ___ по два километра.', options: ['б+егать', 'пробеж+ать', 'побеж+ать раз'], answer: 0, explain: { en: 'Repeated habit (каждое утро) → imperfective бегать.', de: 'Wiederholte Gewohnheit → Imperfektiv бегать.' } },
      { id: 'ru-g-x27-ai-2', kind: 'choice', q: 'После отпуска нам н+ужно ___ все заявки до вторника.', options: ['обраб+отать', 'обраб+атывать всегда', 'обраб+атывая'], answer: 0, explain: { en: 'Single completed deadline goal (до вторника) → perfective обработать.', de: 'Einmaliges Ergebnis bis Termin → Perfektiv обработать.' } },
      { id: 'ru-g-x27-ai-3', kind: 'gap', q: 'Она начал+а ___ к выступлению ещё в сентябре. (гот+овиться — всегда несов. после начать)', answer: 'гот+овиться', explain: { en: 'Phase verbs (начать/продолжить/закончить) take imperfective infinitives only.', de: 'Phasenverben (начать…) nehmen nur den imperfektiven Infinitiv.' } },
      { id: 'ru-g-x27-ai-4', kind: 'choice', q: 'Здесь нельз+я ___ без сменной +обуви (общее правило).', options: ['вход+ить', 'войт+и раз', 'прийт+и'], answer: 0, explain: { en: 'General rule/prohibition → нельзя + imperfective (входить).', de: 'Allgemeines Verbot → нельзя + Imperfektiv (входить).' } }
    ],
    government: [
      { id: 'ru-g-x27-gov-1', kind: 'choice', q: 'Наши колл+еги п+олностью согл+асны ___ предлож+ением.', options: ['с этим', 'этим', 'на это'], answer: 0, explain: { en: 'согласиться с + Instrumental → с этим предложением.', de: 'согласиться с + Instrumental → с этим предложением.' } },
      { id: 'ru-g-x27-gov-2', kind: 'choice', q: 'Мы не завис+им ___ вн+ешних пост+авок.', options: ['от', 'из', 'на'], answer: 0, explain: { en: 'зависеть от + Genitive.', de: 'зависеть от + Genitiv.' } },
      { id: 'ru-g-x27-gov-3', kind: 'gap', q: 'Журнал+исты обрат+или вним+ание ___ дет+али отчёта. (предлог)', answer: 'на', explain: { en: 'обратить внимание на + Accusative.', de: 'обратить внимание на + Akkusativ.' } },
      { id: 'ru-g-x27-gov-4', kind: 'choice', q: 'П+еред отъ+ездом нужно попрощ+аться ___ сос+едями.', options: ['с', 'к', 'от'], answer: 0, explain: { en: 'попрощаться с + Instrumental.', de: 'попрощаться с + Instrumental.' } }
    ],
    numerals_case: [
      { id: 'ru-g-x27-nc-1', kind: 'choice', q: 'В к+омнате остав+алось т+олько два ___. (стул)', options: ['ст+ула', 'ст+ульев', 'стул'], answer: 0, explain: { en: '2, 3, 4 take Genitive singular → два стула.', de: '2, 3, 4 stehen mit Genitiv Singular → два стула.' } },
      { id: 'ru-g-x27-nc-2', kind: 'choice', q: 'На к+урсе уч+ится двадцать шесть ___. (студ+ент)', options: ['студ+ентов', 'студ+ента', 'студ+ент'], answer: 0, explain: { en: '26 ends in 6 → Genitive plural студентов.', de: '26 endet auf 6 → Genitiv Plural студентов.' } },
      { id: 'ru-g-x27-nc-3', kind: 'gap', q: 'Цена поднял+ась на сорок одн+у ___. (тысяча)', answer: 'т+ысячу', explain: { en: 'Ending in 1 agrees with feminine noun in Accusative: сорок одну тысячу.', de: 'Auf 1 endend kongruiert im Akkusativ feminin: сорок одну тысячу.' } },
      { id: 'ru-g-x27-nc-4', kind: 'choice', q: 'П+оезд придет через пять ___. (мин+ута)', options: ['мин+ут', 'мин+уты', 'мин+уту'], answer: 0, explain: { en: '5 uses Genitive plural минут (zero ending).', de: '5 verlangt Genitiv Plural минут.' } }
    ],
    impersonal: [
      { id: 'ru-g-x27-imp-1', kind: 'choice', q: '___ не х+очется уход+ить так р+ано.', options: ['Мне', 'Я', 'Мен+я'], answer: 0, explain: { en: 'Impersonal desire/feeling uses Dative experiencer: Мне хочется.', de: 'Unpersönliches Empfinden steht mit Dativ: Мне хочется.' } },
      { id: 'ru-g-x27-imp-2', kind: 'choice', q: 'В+ечером на +улице быстро ___. (похолод+ать, прош. вр.)', options: ['похолод+ало', 'похолод+ал', 'похолод+али'], answer: 0, explain: { en: 'Impersonal past verbs always take neuter singular -о.', de: 'Unpersönliches Präteritum endet immer auf sächliches -о.' } },
      { id: 'ru-g-x27-imp-3', kind: 'gap', q: '___ нельзя наруш+ать тишин+у в библиот+еке. (отриц. мест. кт+о, дат. п.)', answer: 'Ником+у', explain: { en: 'Impersonal нельзя + Dative experiencer → Никому.', de: 'Unpersönliches нельзя + Dativ → Никому.' } },
      { id: 'ru-g-x27-imp-4', kind: 'choice', q: 'У меня не хват+ило ___ всё дочит+ать.', options: ['терп+ения', 'терп+ение', 'терп+ению'], answer: 0, explain: { en: 'хватать / не хватить takes Genitive → терпения.', de: 'хватать verlangt Genitiv → терпения.' } }
    ],
    passive_ru: [
      { id: 'ru-g-x27-pas-1', kind: 'choice', q: 'Н+овые ст+анции метр+о сейчас активно ___. (процесс)', options: ['стр+оятся', 'постр+оены', 'постр+оились'], answer: 0, explain: { en: 'Ongoing passive process → imperfective -ся (строятся).', de: 'Laufender Vorgang → imperfektives Passiv (строятся).' } },
      { id: 'ru-g-x27-pas-2', kind: 'choice', q: 'Стать+я нап+исана ___ из нашего университ+ета. (проф+ессор)', options: ['проф+ессором', 'от проф+ессора', 'проф+ессору'], answer: 0, explain: { en: 'Agent in passive goes in Instrumental with no preposition.', de: 'Der Handelnde im Passiv steht präpositionslos im Instrumental.' } },
      { id: 'ru-g-x27-pas-3', kind: 'gap', q: 'Вс+е окн+а в здании уже ___ к зим+е. (закр+ыть — кр. прич. мн. ч.)', answer: 'закр+ыты', explain: { en: 'Plural completed result → short passive participle закрыты.', de: 'Abgeschlossener Zustand Plural → Kurzpartizip закрыты.' } },
      { id: 'ru-g-x27-pas-4', kind: 'choice', q: { en: 'Natural everyday speech for “My laptop was fixed”:', de: 'Alltäglich natürlich für „Mein Laptop wurde repariert“:' }, options: ['Мне почин+или ноутб+ук.', 'Ноутбук был почин+ен от мастеров.', 'Ноутбук почин+ился мной.'], answer: 0, explain: { en: 'Everyday speech prefers indefinite-personal 3rd plural (починили).', de: 'Alltagsrussisch bevorzugt die unbestimmt-persönliche 3. Plural (починили).' } }
    ],
    budushchee: [
      { id: 'ru-g-x27-bud-1', kind: 'choice', q: 'Завтра +утром я ___ звонить кли+енту (процесс/намерение, несов.).', options: ['б+уду', 'ст+ану быть', 'есть'], answer: 0, explain: { en: 'Compound future = быть in future + imperfective infinitive (буду звонить).', de: 'Zusammengesetzte Zukunft = буду + imperfektiver Infinitiv.' } },
      { id: 'ru-g-x27-bud-2', kind: 'choice', q: 'Через нед+елю мы ___ все докум+енты (сов. вид: сд+ать).', options: ['сдад+им', 'б+удем сд+ать', 'сдаём'], answer: 0, explain: { en: 'Perfective simple future never adds буду → сдадим.', de: 'Perfektives Futur braucht kein буду → einfach сдадим.' } },
      { id: 'ru-g-x27-bud-3', kind: 'gap', q: 'Когда ты ___ (при+ехать), позвон+и мне с вокзала.', answer: 'при+едешь', explain: { en: 'Perfective приехать in future 2nd singular → приедешь.', de: 'Perfektives Futur 2. Singular → приедешь.' } },
      { id: 'ru-g-x27-bud-4', kind: 'choice', q: 'Весь июль он+и ___ на море (отдых+ать).', options: ['б+удут отдых+ать', 'отдохн+ут месяц', 'б+удут отдохн+уть'], answer: 0, explain: { en: 'Continuous span (весь июль) → future imperfective будут отдыхать.', de: 'Längere Dauer (весь июль) → буду + Imperfektiv.' } }
    ],
    kotoryj: [
      { id: 'ru-g-x27-kot-1', kind: 'choice', q: 'Вот кн+ига, ___ я давно ищу.', options: ['кот+орую', 'кот+орая', 'кот+орой'], answer: 0, explain: { en: 'Object of ищу (feminine Accusative) → которую.', de: 'Objekt zu ищу (Akkusativ feminin) → которую.' } },
      { id: 'ru-g-x27-kot-2', kind: 'choice', q: 'Это мой колл+ега, с ___ мы пили к+офе.', options: ['кот+орым', 'кот+орый', 'кот+орого'], answer: 0, explain: { en: 'с governs Instrumental → с которым.', de: 'с verlangt Instrumental → с которым.' } },
      { id: 'ru-g-x27-kot-3', kind: 'gap', q: 'Мы зашли в каф+е, в ___ было +очень уютно. (Предл. п., ср. р.)', answer: 'кот+ором', explain: { en: 'Neuter Prepositional after в → в котором.', de: 'Neutrum Präpositiv nach в → в котором.' } },
      { id: 'ru-g-x27-kot-4', kind: 'choice', q: 'Вот друзья, от ___ я узнал эту новость.', options: ['кот+орых', 'кот+орым', 'кот+орыми'], answer: 0, explain: { en: 'от governs Genitive plural → которых.', de: 'от verlangt Genitiv Plural → которых.' } }
    ],
    'svoi-ili-ego': [
      { id: 'ru-g-x27-sv-1', kind: 'choice', q: 'Иван заб+ыл ___ телефон дома.', options: ['свой', 'ег+о', 'себ+я'], answer: 0, explain: { en: 'Owner = 3rd person subject (Иван) → свой.', de: 'Besitzer = Subjekt (Иван) → свой.' } },
      { id: 'ru-g-x27-sv-2', kind: 'choice', q: 'Анна взяла ___ зонт (зонт подруги).', options: ['её', 'свой', 'себ+е'], answer: 0, explain: { en: 'Umbrella belongs to someone else, not Anna → её.', de: 'Der Schirm gehört jemand anderem → её.' } },
      { id: 'ru-g-x27-sv-3', kind: 'gap', q: '___ к+ошка любит спать на балконе (1-е лицо: «моя» в роли подлежащего).', answer: 'Мо+я', explain: { en: 'свой cannot be the nominative subject itself → Моя кошка.', de: 'свой steht nie im Nominativ des Subjekts → Моя кошка.' } },
      { id: 'ru-g-x27-sv-4', kind: 'choice', q: 'Колл+еги приглас+или нас в ___ новый +офис (офис коллег).', options: ['свой', 'их', 'него'], answer: 0, explain: { en: 'Owner = subject коллеги (3rd plural) → свой.', de: 'Besitzer = Subjekt коллеги → свой.' } }
    ],
    participles: [
      { id: 'ru-g-x27-pt-1', kind: 'choice', q: 'Люди, ___ в пр+игороде, часто +ездят на электричке.', options: ['жив+ущие', 'жив+ые', 'пож+итые'], answer: 0, explain: { en: 'Active present participle plural (жить) → живущие.', de: 'Aktives Präsenspartizip Plural → живущие.' } },
      { id: 'ru-g-x27-pt-2', kind: 'choice', q: 'Мы проверили список, ___ администратором.', options: ['сост+авленный', 'составл+яя', 'составля+ющий'], answer: 0, explain: { en: 'Completed passive participle (masculine список) → составленный.', de: 'Passives Partizip Vergangenheit zu список → составленный.' } },
      { id: 'ru-g-x27-pt-3', kind: 'gap', q: 'Она подошла к столу, ___ перед окном. (стоять, действ. прич. наст. вр., Дат. п.)', answer: 'сто+ящему', explain: { en: 'к + Dative neuter (столу — муж. р.!): к столу, стоящему…', de: 'Dativ maskulin nach к: к столу, стоящему…' } },
      { id: 'ru-g-x27-pt-4', kind: 'choice', q: 'Студент, ___ на все вопр+осы, получил зачёт.', options: ['отв+етивший', 'отв+еченный', 'отвеч+ая'], answer: 0, explain: { en: 'Active past participle → ответивший.', de: 'Aktives Partizip Vergangenheit → ответивший.' } }
    ],
    gerunds: [
      { id: 'ru-g-x27-ger-1', kind: 'choice', q: '___ домой, я куп+ил свежий хлеб (одновременное действие по дороге).', options: ['Возвращ+аясь', 'Верн+увшись', 'Возвращённый'], answer: 0, explain: { en: 'Simultaneous ongoing action → imperfective деепричастие возвращаясь.', de: 'Gleichzeitige Handlung unterwegs → imperfektives Деепричастие возвращаясь.' } },
      { id: 'ru-g-x27-ger-2', kind: 'choice', q: '___ из отпуска, он ср+азу разобр+ал п+очту (сначала вернулся).', options: ['Верн+увшись', 'Возвращ+аясь', 'Верн+утый'], answer: 0, explain: { en: 'Completed prior action → perfective вернувшись.', de: 'Abgeschlossene Vorhandlung → perfektives Деепричастие вернувшись.' } },
      { id: 'ru-g-x27-ger-3', kind: 'gap', q: 'Мы сид+ели в каф+е, ___ о будущем про+екте. (говор+ить, дееприч.)', answer: 'говор+я', explain: { en: 'Simultaneous imperfective adverbial participle → говоря.', de: 'Gleichzeitiges Деепричастие von говорить → говоря.' } },
      { id: 'ru-g-x27-ger-4', kind: 'choice', q: '___ письмо, не заб+удь прикреп+ить файл (сначала написав).', options: ['Напис+ав', 'П+иша', 'Нап+исанный'], answer: 0, explain: { en: 'After finishing writing → perfective написав.', de: 'Nach dem Schreiben → perfektives Деепричастие написав.' } }
    ],
    chtoby: [
      { id: 'ru-g-x27-ch-1', kind: 'choice', q: 'Я позвонил, чт+обы ___ время встречи.', options: ['уточн+ить', 'уточн+ю', 'уточн+ял если'], answer: 0, explain: { en: 'Same subject (“I called / I clarify”) → чтобы + infinitive.', de: 'Gleiches Subjekt → чтобы + Infinitiv.' } },
      { id: 'ru-g-x27-ch-2', kind: 'choice', q: 'Дир+ектор х+очет, чт+обы вся ком+анда ___ к пятнице.', options: ['усп+ела', 'усп+еет', 'усп+еть'], answer: 0, explain: { en: 'Different subject (директор vs. команда) → чтобы + past-form verb (успела).', de: 'Verschiedene Subjekte → чтобы + Präteritumsform (успела).' } },
      { id: 'ru-g-x27-ch-3', kind: 'gap', q: 'Оставь номер, чт+обы курь+ер мог ___. (позвон+ить)', answer: 'позвон+ить', explain: { en: 'мог takes infinitive (позвонить), while мог itself is past-form after чтобы.', de: 'мог (Präteritumsform nach чтобы) verlangt den Infinitiv позвонить.' } },
      { id: 'ru-g-x27-ch-4', kind: 'choice', q: 'Сомнев+аюсь, ___ он успеет на восьмичасов+ой п+оезд.', options: ['что', 'чт+обы', 'кто'], answer: 0, explain: { en: 'Positive statement/expectation without wish uses что (not чтобы); doubt with negation uses чтобы only after не думаю, что/чтобы.', de: 'Aussage/Erwartung ohne Wunsch nutzt что.' } }
    ],
    'uslovie-by': [
      { id: 'ru-g-x27-ub-1', kind: 'choice', q: 'Если бы мы вылетели +утром, то уже ___ на месте.', options: ['были бы', 'будем', 'есть бы'], answer: 0, explain: { en: 'Result clause repeats бы + past-form verb (были бы).', de: 'Auch der Folgesatz braucht бы + Präteritumsform (были бы).' } },
      { id: 'ru-g-x27-ub-2', kind: 'choice', q: 'Без вашей поддержки я ___ не справилась.', options: ['бы', 'ли', 'же'], answer: 0, explain: { en: 'Unreal condition implied by без + Gen. still takes бы + past-form.', de: 'Implizite Bedingung (без…) steht ebenso mit бы.' } },
      { id: 'ru-g-x27-ub-3', kind: 'gap', q: 'На твоём месте я бы ___ ещё од+ин вариант. (пров+ерить)', answer: 'пров+ерил', explain: { en: 'Unreal advice with я бы + past-form (проверил / проверила).', de: 'Ratschlag mit я бы + Präteritumsform (проверил).' } },
      { id: 'ru-g-x27-ub-4', kind: 'choice', q: 'Хот+елось ___ верить, что всё пройдёт гладко.', options: ['бы', 'б+ыло', '+если'], answer: 0, explain: { en: 'Softened wish: Хотелось бы + infinitive.', de: 'Höflicher Wunsch: Хотелось бы + Infinitiv.' } }
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
