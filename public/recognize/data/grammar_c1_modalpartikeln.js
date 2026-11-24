/* German GRAMMAR · C1 · Modal particles (doch, ja, eben, halt, mal, wohl, schon, denn, eigentlich).
 * Explanations ru + en inline, original examples. */
GT.registerGrammar({
  id: 'modalpartikeln',
  level: 'C1',
  title: { ru: 'Модальные частицы: doch, ja, mal, eben, halt…', en: 'Modal particles: doch, ja, mal, eben, halt…' },
  summary: {
    ru: 'Маленькие безударные слова, которые передают тон: удивление, мягкость, нетерпение, общее знание.',
    en: 'Small unstressed words that carry tone: surprise, softness, impatience, shared knowledge.'
  },
  explanation: {
    ru: '<p>Модальные частицы не меняют факт, а показывают <b>отношение говорящего</b> и делают речь живой. Без них немецкий звучит резко или «как из учебника». Они безударны и стоят в середине предложения — обычно после глагола и местоимений, но перед новой информацией.</p>' +
      '<ul>' +
      '<li><b>ja</b> — «как известно, ты же знаешь»: <em>Das ist <b>ja</b> klar.</em> С ударением в восклицании — удивление: <em>Du bist <b>ja</b> schon da!</em></li>' +
      '<li><b>doch</b> — напоминание, возражение, настойчивая просьба: <em>Das habe ich dir <b>doch</b> gesagt!</em> <em>Komm <b>doch</b> mit!</em> (ну пойдём же)</li>' +
      '<li><b>mal</b> — смягчает просьбу: <em>Kannst du <b>mal</b> kurz kommen?</em> <b>doch mal</b> — дружеский совет: <em>Frag <b>doch mal</b> Anna.</em></li>' +
      '<li><b>eben / halt</b> — «ну так уж есть, ничего не поделаешь» (halt — южнее, разговорнее): <em>Das ist <b>eben</b> so.</em></li>' +
      '<li><b>denn</b> — в вопросах: интерес или удивление: <em>Was ist <b>denn</b> los?</em></li>' +
      '<li><b>wohl</b> — предположение: <em>Er ist <b>wohl</b> krank.</em> (наверное)</li>' +
      '<li><b>schon</b> — успокоение, уступка: <em>Das klappt <b>schon</b>.</em> (всё получится) <em>Das ist <b>schon</b> richtig, aber…</em> (так-то оно так, но…)</li>' +
      '<li><b>eigentlich</b> — в вопросе смягчает смену темы: <em>Wie spät ist es <b>eigentlich</b>?</em></li>' +
      '</ul>' +
      '<p>Порядок при сочетании: <b>ja → denn → doch → eben/halt → wohl → mal</b> (<em>Komm doch mal vorbei!</em>).</p>',
    en: '<p>Modal particles don’t change the facts; they show the <b>speaker’s attitude</b> and make speech sound natural. Without them German sounds blunt or bookish. They are unstressed and sit in the middle of the clause — usually after the verb and pronouns, before new information. English often uses intonation, tags or words like “just”, “after all”, “then” instead.</p>' +
      '<ul>' +
      '<li><b>ja</b> — “as we both know”: <em>Das ist <b>ja</b> klar.</em> In an exclamation — surprise: <em>Du bist <b>ja</b> schon da!</em> (Oh, you’re here already!)</li>' +
      '<li><b>doch</b> — reminder, contradiction, urging: <em>Das habe ich dir <b>doch</b> gesagt!</em> (I told you, didn’t I?) <em>Komm <b>doch</b> mit!</em> (Why don’t you come along?)</li>' +
      '<li><b>mal</b> — softens a request (≈ “just”): <em>Kannst du <b>mal</b> kurz kommen?</em> <b>doch mal</b> — friendly advice: <em>Frag <b>doch mal</b> Anna.</em></li>' +
      '<li><b>eben / halt</b> — “that’s just the way it is” (halt is more colloquial, southern): <em>Das ist <b>eben</b> so.</em></li>' +
      '<li><b>denn</b> — in questions: interest or surprise: <em>Was ist <b>denn</b> los?</em> (What’s wrong, then?)</li>' +
      '<li><b>wohl</b> — assumption: <em>Er ist <b>wohl</b> krank.</em> (He’s probably ill.)</li>' +
      '<li><b>schon</b> — reassurance, concession: <em>Das klappt <b>schon</b>.</em> (It’ll work out.) <em>Das ist <b>schon</b> richtig, aber…</em> (That’s true enough, but…)</li>' +
      '<li><b>eigentlich</b> — softens a question that changes topic (≈ “by the way”): <em>Wie spät ist es <b>eigentlich</b>?</em></li>' +
      '</ul>' +
      '<p>Order when combined: <b>ja → denn → doch → eben/halt → wohl → mal</b> (<em>Komm doch mal vorbei!</em>).</p>'
  },
  tables: [
    {
      caption: { ru: 'Частица и тон', en: 'Particle and tone' },
      head: { ru: ['Частица', 'Тон', 'Пример'], en: ['Particle', 'Tone', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['ja', 'общеизвестно / удивление', 'Das weißt du ja.'],
          ['doch', 'напоминание / «ну же»', 'Setz dich doch!'],
          ['mal', 'мягкая просьба', 'Schau mal!'],
          ['eben / halt', 'так уж есть', 'Dann nehmen wir halt den Bus.'],
          ['denn', 'интерес в вопросе', 'Wo warst du denn?'],
          ['wohl', 'предположение', 'Sie hat es wohl vergessen.'],
          ['schon', 'успокоение / уступка', 'Keine Sorge, das wird schon.'],
          ['eigentlich', 'кстати, вообще-то', 'Was machst du eigentlich beruflich?']
        ],
        en: [
          ['ja', 'shared knowledge / surprise', 'Das weißt du ja.'],
          ['doch', 'reminder / urging', 'Setz dich doch!'],
          ['mal', 'soft request', 'Schau mal!'],
          ['eben / halt', 'that’s how it is', 'Dann nehmen wir halt den Bus.'],
          ['denn', 'interest in a question', 'Wo warst du denn?'],
          ['wohl', 'assumption', 'Sie hat es wohl vergessen.'],
          ['schon', 'reassurance / concession', 'Keine Sorge, das wird schon.'],
          ['eigentlich', 'by the way, actually', 'Was machst du eigentlich beruflich?']
        ]
      }
    }
  ],
  examples: [
    { de: 'Du hast [[ja]] schon wieder ein neues Handy!', ru: 'Да у тебя опять новый телефон!', en: 'Oh, you’ve got a new phone again!' },
    { de: 'Ruf mich [[doch mal]] an, wenn du Zeit hast.', ru: 'Позвони мне как-нибудь, когда будет время.', en: 'Give me a call sometime when you’re free.' },
    { de: 'Was machst du [[denn]] hier?', ru: 'А ты что здесь делаешь?', en: 'What are you doing here, then?' },
    { de: 'Der Zug ist weg. Dann warten wir [[halt]] auf den nächsten.', ru: 'Поезд ушёл. Ну что ж, подождём следующего.', en: 'The train’s gone. Well, we’ll just wait for the next one.' },
    { de: 'Keine Panik, du schaffst das [[schon]].', ru: 'Без паники, ты справишься.', en: 'Don’t panic, you’ll manage.' },
    { de: 'Wo wohnst du [[eigentlich]]?', ru: 'А где ты, кстати, живёшь?', en: 'Where do you live, by the way?' }
  ],
  pitfalls: [
    {
      title: { ru: 'Частица ≠ слово-двойник', en: 'Particle ≠ its look-alike' },
      html: {
        ru: '<em>doch</em> как ответ «нет, да!» на отрицательный вопрос (<em>Kommst du nicht? — Doch!</em>) и <em>schon</em> «уже» — это другие функции. Частица безударна и не отвечает на вопрос «когда?».',
        en: '<em>doch</em> as the answer “yes, I do!” to a negative question (<em>Kommst du nicht? — Doch!</em>) and <em>schon</em> meaning “already” are different uses. The particle is unstressed and doesn’t answer “when?”.'
      }
    },
    {
      title: { ru: 'Не в начале предложения', en: 'Not in first position' },
      html: {
        ru: '<span class="wrong">Mal kannst du kommen?</span> → <span class="right">Kannst du mal kommen?</span> Частицы стоят в середине, не на первом месте.',
        en: '<span class="wrong">Mal kannst du kommen?</span> → <span class="right">Kannst du mal kommen?</span> Particles go in the middle field, never in position 1.'
      }
    },
    {
      title: { ru: 'Тон может стать грубым', en: 'Tone can turn rude' },
      html: {
        ru: '<em>Mach doch!</em> с раздражённой интонацией = «да делай что хочешь!». В письмах начальству частицы <em>halt, eben</em> звучат небрежно.',
        en: '<em>Mach doch!</em> said with irritation means “go on then, do what you like!”. In emails to your boss, <em>halt, eben</em> sound sloppy.'
      }
    }
  ],
  drills: [
    {
      id: 'g-mp-d1', kind: 'choice',
      q: 'Was ist ___ passiert? Du siehst so traurig aus.',
      options: ['denn', 'halt', 'mal'],
      answer: 0,
      explain: { ru: 'В вопросе с интересом → denn.', en: 'Interested question → denn.' }
    },
    {
      id: 'g-mp-d2', kind: 'choice',
      q: 'Das habe ich dir ___ schon dreimal erklärt!',
      options: ['doch', 'mal', 'denn'],
      answer: 0,
      explain: { ru: 'Упрёк-напоминание → doch.', en: 'Reproachful reminder → doch.' }
    },
    {
      id: 'g-mp-d3', kind: 'choice',
      q: 'Kannst du mir ___ kurz helfen?',
      options: ['mal', 'ja', 'wohl'],
      answer: 0,
      explain: { ru: 'Смягчённая просьба → mal.', en: 'Softened request → mal.' }
    },
    {
      id: 'g-mp-d4', kind: 'choice',
      q: 'Der Laden hat schon zu. Dann kaufen wir das ___ morgen.',
      options: ['halt', 'denn', 'ja'],
      answer: 0,
      explain: { ru: '«Ну что ж, ничего не поделаешь» → halt / eben.', en: '“Oh well, nothing we can do” → halt / eben.' }
    },
    {
      id: 'g-mp-d5', kind: 'choice',
      q: 'Er geht nicht ans Telefon. Er ist ___ schon im Bett.',
      options: ['wohl', 'mal', 'doch mal'],
      answer: 0,
      explain: { ru: 'Предположение → wohl.', en: 'Assumption → wohl.' }
    },
    {
      id: 'g-mp-d6', kind: 'reorder',
      q: { ru: 'Соберите дружеское приглашение. «Заходи как-нибудь!»', en: 'Build the friendly invitation. “Why don’t you drop by sometime!”' },
      tokens: ['Komm', 'doch', 'mal', 'vorbei!'],
      answer: 'Komm doch mal vorbei!',
      explain: { ru: 'Порядок частиц: doch → mal.', en: 'Particle order: doch → mal.' }
    }
  ]
});
