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
