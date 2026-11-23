/* RUSSIAN GRAMMAR — Verbs in -ся / -сь. */
GT.registerGrammar({
  id: 'reflexive',
  title: { en: "Verbs in -ся / -сь", de: "Verben auf -ся / -сь" },
  summary: { en: "Recognise reflexive, reciprocal and other meanings, and practise the two spellings.", de: "Erkenne reflexive, wechselseitige und andere Bedeutungen und übe die beiden Schreibweisen." },
  explanation: {
    en: "<p>Russian <b>-ся / -сь</b> is attached to a verb form. With some verbs the action is directed back at the subject (<em>мыть ребёнка → мыться</em>); with others it is reciprocal (<em>обниматься, встречаться с другом</em>).</p>" +
        "<p>It can also describe a change or a property with no agent named (<em>дверь открылась, дверь легко открывается</em>). Learn lexical verbs such as <em>бояться, смеяться</em> with their patterns. A German <i>sich</i> can be a useful comparison, and the Russian and German constructions often differ.</p>" +
        "<p>In ordinary finite forms, write <b>-ся</b> after a consonant or ь and <b>-сь</b> after a vowel: <em>моется, моюсь, мылся, мылась</em>. The infinitive has <b>-ться</b>: <em>мыться</em>. Third-person forms such as <em>моется</em> have <b>-тся</b>.</p>",
    de: "<p>Im Russischen wird <b>-ся / -сь</b> an die Verbform angehängt. Bei manchen Verben richtet sich die Handlung auf das Subjekt selbst (<em>мыть ребёнка → мыться</em>), bei anderen ist sie wechselseitig (<em>обниматься, встречаться с другом</em>).</p>" +
        "<p>Es kann auch eine Veränderung oder Eigenschaft ausdrücken, ohne einen Handelnden zu nennen (<em>дверь открылась, дверь легко открывается</em>). Lerne Verben wie <em>бояться, смеяться</em> mit ihren Konstruktionen. Das deutsche <i>sich</i> bietet einen Vergleich, die Konstruktionen unterscheiden sich aber häufig.</p>" +
        "<p>Bei gewöhnlichen finiten Formen steht <b>-ся</b> nach Konsonant oder ь und <b>-сь</b> nach Vokal: <em>моется, моюсь, мылся, мылась</em>. Im Infinitiv steht <b>-ться</b>: <em>мыться</em>. Formen der dritten Person wie <em>моется</em> enden auf <b>-тся</b>.</p>"
  },
  tables: [{
    caption: { en: "Common contrasts", de: "Häufige Kontraste" },
    head: { en: ["Construction","Russian form"], de: ["Konstruktion","Russische Form"] },
    deCols: [1],
    rows: {
      en: [
        ["Infinitive","одев+аться"],
        ["First person singular","я одев+аюсь"],
        ["Third person singular","он одев+ается"],
        ["Masculine past","он одев+ался"],
        ["Feminine past","он+а одев+алась"]
      ],
      de: [
        ["Infinitiv","одев+аться"],
        ["Erste Person Singular","я одев+аюсь"],
        ["Dritte Person Singular","он одев+ается"],
        ["Maskulinum Präteritum","он одев+ался"],
        ["Femininum Präteritum","он+а одев+алась"]
      ]
    }
  }],
  examples: [
    { t: "Ребёнок уж+е [[од+елся]].", en: "The child has already got dressed.", de: "Das Kind hat sich schon angezogen." },
    { t: "Мы [[встр+етились]] с друзь+ями п+осле раб+оты.", en: "We met up with friends after work.", de: "Wir haben uns nach der Arbeit mit Freunden getroffen." },
    { t: "Дв+ерь [[откр+ылась]].", en: "The door opened.", de: "Die Tür ging auf." }
  ],
  pitfalls: [
    { title: { en: "-тся and -ться", de: "-тся und -ться" },
      html: { en: "After <em>хочет</em> use an infinitive: <em>Он хочет учиться</em>. For a direct statement use a finite verb: <em>Он учится</em>.", de: "Nach <em>хочет</em> folgt ein Infinitiv: <em>Он хочет учиться</em>. Im einfachen Aussagesatz steht die finite Form: <em>Он учится</em>." } },
    { title: { en: "Learn the construction with the verb", de: "Lerne die Konstruktion zusammen mit dem Verb" },
      html: { en: "Compare <em>встретить друга</em> and <em>встретиться с другом</em>. The second construction uses с and the instrumental.", de: "Vergleiche <em>встретить друга</em> und <em>встретиться с другом</em>. Die zweite Konstruktion verwendet с und den Instrumental." } }
  ],
  drills: [
    {
      id: 'ru-g-reflexive-1', kind: 'choice', q: "Он х+очет ___ в университ+ете.",
      options: ["уч+иться","+учится"], answer: 0,
      explain: { en: "Хочет requires the infinitive ending in -ться.", de: "Nach хочет steht der Infinitiv auf -ться." }
    },
    {
      id: 'ru-g-reflexive-2', kind: 'choice', q: "Он сейч+ас ___ в университ+ете.",
      options: ["уч+иться","+учится"], answer: 1,
      explain: { en: "Use the finite third-person form -тся.", de: "Die finite Form der dritten Person endet auf -тся." }
    },
    {
      id: 'ru-g-reflexive-3', kind: 'choice', q: "Он+а уж+е од+ела___.",
      options: ["ся","сь"], answer: 1,
      explain: { en: "The past feminine form ends in a vowel before -сь.", de: "Das finite Präteritum Femininum endet vor -сь auf einen Vokal." }
    },
    {
      id: 'ru-g-reflexive-4', kind: 'choice', q: "Мы встр+етились ___ сос+едом.",
      options: ["с","к"], answer: 0,
      explain: { en: "встретиться с + instrumental.", de: "встретиться с + Instrumental." }
    },
    {
      id: 'ru-g-reflexive-5', kind: 'gap', q: "Я б+ыстро ___. (одев+аться)",
      answer: "одев+аюсь",
      hint: { en: "Use the present, first person singular.", de: "Verwende das Präsens in der ersten Person Singular." },
      explain: { en: "одеваю + сь → одеваюсь.", de: "одеваю + сь → одеваюсь." }
    },
    {
      id: 'ru-g-reflexive-6', kind: 'gap', q: "Он б+ыстро ___. (одев+аться)",
      answer: "одев+ается",
      hint: { en: "Use the present, third person singular.", de: "Verwende das Präsens in der dritten Person Singular." },
      explain: { en: "одевает + ся → одевается.", de: "одевает + ся → одевается." }
    },
    {
      id: 'ru-g-reflexive-7', kind: 'gap', q: "Дверь ___. (откр+ыться)",
      answer: "откр+ылась",
      hint: { en: "Use the feminine singular past.", de: "Verwende das Präteritum Femininum Singular." },
      explain: { en: "дверь is feminine, so use -лась.", de: "дверь ist feminin, daher steht hier -лась." }
    },
    {
      id: 'ru-g-reflexive-8', kind: 'gap', q: "П+ора ___ к экз+амену. (гот+овиться)",
      answer: "гот+овиться",
      hint: { en: "After пора use an infinitive.", de: "Nach пора steht der Infinitiv." },
      explain: { en: "Use готовиться with -ться.", de: "Setze готовиться mit -ться ein." }
    }
  ]
});
