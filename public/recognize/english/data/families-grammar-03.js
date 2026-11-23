/* Five modern teaching families and six grammar lessons. No existing IDs change. */
(function (E) {
  'use strict';
  const addedFamilies = [];
  function family(id, ru, related, categories, note, text) {
    const f = E.family({ id, label: id.toUpperCase(), ru, related, categories, note }, text);
    f.entryIds.forEach(entryId => {
      const w = E.entries[entryId], target = w.cefr.level;
      w.courseLevel = target;
      w.cefr = { level: null, status: 'unrated', scope: null, source: null, ratings: [], conflict: false };
      w.audit = { meaning: 'editorial-reviewed', example: 'editorial-reviewed', morphology: 'editorial-reviewed',
        evidence: 'Авторское учебное семейство с разбором современной формы. Словарная CEFR-метка не подтверждалась; ссылка предназначена для поиска.' };
      if (w.morphology.parentId) w.morphology.relation = 'derivation';
    });
    addedFamilies.push(f);
    return f;
  }
  family('observe', 'наблюдать, замечать', ['inform', 'evaluate', 'predict'], ['everyday', 'it'],
    'Observe может обозначать наблюдение, замечание или соблюдение правила. Здесь выбрано наблюдение. Observant — внимательный к деталям; observable — доступный наблюдению. Эти прилагательные не взаимозаменяемы.', `
observe|v|B2|наблюдать|We will [[observe]] how users complete the task.|Мы будем наблюдать, как пользователи выполняют задачу.|observe||Observe something or observe how something happens; не обязательно вмешиваться в процесс.
observer|n|B1|наблюдатель|An independent [[observer]] attended the meeting.|На встрече присутствовал независимый наблюдатель.|observ- + -er|observe|Конечное e основы заменяется суффиксом -er; observer — тот, кто наблюдает.
observation|n|B2|наблюдение; замеченный факт|Her [[observation]] helped us find the problem.|Её наблюдение помогло нам найти проблему.|observ- + -ation|observe|Конечное e отпадает; make an observation. Наблюдение само по себе не доказывает причину.
observable|adj|B2|наблюдаемый; доступный наблюдению|There was no [[observable]] change in the service's behaviour.|В поведении сервиса не было наблюдаемых изменений.|observ- + -able|observe|Observe → observable: то, что можно наблюдать; не характеристика внимательности человека.
unobservable|adj|B2|не поддающийся наблюдению|The internal state remained [[unobservable]] from outside the process.|Внутреннее состояние оставалось недоступным наблюдению извне процесса.|un- + observable|observable|Un- отрицает observable. Не означает, что состояние не существует.
observant|adj|B2|наблюдательный; внимательный к деталям|An [[observant]] colleague noticed the incorrect date.|Наблюдательный коллега заметил неверную дату.|observ- + -ant|observe|Observant описывает человека, замечающего детали; не observed и не observable.
`);
  family('compare', 'сравнивать', ['differ', 'evaluate', 'value'], ['everyday', 'workplace'],
    'Compare → comparison включает закреплённую замену окончания: это учебная связь, а не продуктивное правило для любого глагола. Comparative — сравнительный; comparable — сопоставимый. Comparatively означает «относительно», а не обязательно действие сравнения.', `
compare|v|B1|сравнивать|Let's [[compare]] the two offers before deciding.|Давай сравним два предложения, прежде чем решать.|compare||Compare A with B или compare A to B; в этом примере анализируются сходства и различия.
comparison|n|B1|сравнение|The report includes a [[comparison]] of the available options.|Отчёт включает сравнение доступных вариантов.|compar- + -ison|compare|A comparison of A and B; compare → comparison — закреплённая модель этого слова.
comparable|adj|B2|сопоставимый|The two services have [[comparable]] prices.|У двух сервисов сопоставимые цены.|compar- + -able|compare|Comparable to/with: достаточно сходный для содержательного сравнения; не обязательно одинаковый.
incomparable|adj|B2|несравненный; не имеющий равных|The guide described the view as [[incomparable]].|Гид назвал вид несравненным.|in- + comparable|comparable|В оценочной речи часто значит exceptionally good, а не техническую невозможность сравнения.|figurative
comparative|adj|B2|сравнительный|We carried out a [[comparative]] analysis of the results.|Мы провели сравнительный анализ результатов.|compar- + -ative|compare|Comparative analysis сравнивает несколько объектов; не то же самое, что comparable analysis.
comparatively|adv|B2|сравнительно; относительно|The second option is [[comparatively]] inexpensive.|Второй вариант сравнительно недорогой.|comparative + -ly|comparative|Comparatively указывает на оценку относительно других вариантов, даже если они не названы.
`);
  family('predict', 'предсказывать, прогнозировать', ['observe', 'possible', 'evaluate'], ['everyday', 'it'],
    'Prediction — прогноз, не обещание. Predictable и unpredictable описывают возможность предсказать результат; они не утверждают, что результат хороший или плохой. В predictably и unpredictably окончание -able меняется на -ably.', `
predict|v|B1|предсказывать; прогнозировать|It's difficult to [[predict]] how long the repair will take.|Трудно предсказать, сколько продлится ремонт.|predict||Predict an outcome; predict that something will happen. Не синоним guarantee.
prediction|n|B1|прогноз; предсказание|The final result was close to our [[prediction]].|Итоговый результат был близок к нашему прогнозу.|predict + -ion|predict|Make a prediction about something; прогноз может оказаться ошибочным.
predictable|adj|B2|предсказуемый|The service needs [[predictable]] response times.|Сервису нужно предсказуемое время ответа.|predict + -able|predict|То, чего можно обоснованно ожидать; в техническом контексте часто желательное свойство.
unpredictable|adj|B2|непредсказуемый|Demand can be [[unpredictable]] during the holiday season.|Спрос может быть непредсказуемым в праздничный период.|un- + predictable|predictable|Un- отрицает predictable; unpredictable не означает автоматически random в строгом смысле.
predictably|adv|B2|предсказуемо; как и ожидалось|The old device behaved [[predictably]] during the test.|Во время проверки старое устройство вело себя предсказуемо.|predictab- + -ly|predictable|Predictable → predictably: -le меняется на -ly; описывает поведение или ожидаемость события.
unpredictably|adv|B2|непредсказуемо|The connection dropped [[unpredictably]] throughout the day.|Соединение непредсказуемо обрывалось в течение дня.|unpredictab- + -ly|unpredictable|Unpredictable → unpredictably; наречие относится к действию, не заменяет прилагательное после be.
`);
  family('maintain', 'поддерживать в рабочем состоянии', ['manage', 'support', 'use'], ['it', 'workplace'],
    'Maintain → maintenance требует изменения основы maintain → mainten-. Maintenance не образуется простым присоединением -ance к неизменному maintain. В IT maintainer — человек, сопровождающий проект; это не обязательно его первоначальный автор.', `
maintain|v|B2|поддерживать в рабочем состоянии; сопровождать|A small team will [[maintain]] the internal tool.|Небольшая команда будет сопровождать внутренний инструмент.|maintain||Maintain a system or codebase; здесь не значение «утверждать свою позицию».
maintenance|n|B2|техническое обслуживание; сопровождение|The service will be unavailable during scheduled [[maintenance]].|Во время планового обслуживания сервис будет недоступен.|mainten- + -ance|maintain|Изменяется основа; обычно неисчисляемое. Scheduled maintenance — плановое обслуживание.
maintainer|n|B2|сопровождающий проекта|The [[maintainer]] reviewed the proposed fix.|Сопровождающий проекта проверил предложенное исправление.|maintain + -er|maintain|Тот, кто поддерживает проект или компонент; a project maintainer.
maintainable|adj|B2|удобный для сопровождения|Clear naming helps keep the code [[maintainable]].|Понятные имена помогают сохранять код удобным для сопровождения.|maintain + -able|maintain|В этом контексте код удобно понимать и изменять; не обещание отсутствия ошибок.
unmaintainable|adj|B2|непригодный для нормального сопровождения|The undocumented script had become [[unmaintainable]].|Скрипт без документации стал непригодным для нормального сопровождения.|un- + maintainable|maintainable|Отрицательная оценка возможности сопровождения; не обязательно буквальная невозможность изменить файл.
`);
  family('adapt', 'приспосабливать, адаптировать', ['develop', 'differ', 'prepare'], ['everyday', 'workplace'],
    'Adapt to a situation — приспосабливаться к ситуации; adapt something for a purpose — переделывать что-то под задачу. Adaptable описывает способность адаптироваться, adaptive — характер механизма или подхода. Это разные акценты.', `
adapt|v|B2|адаптироваться; приспосабливать|It takes time to [[adapt]] to a new working environment.|Нужно время, чтобы адаптироваться к новой рабочей среде.|adapt||Adapt to something; adapt a plan for a new situation. Не путайте с adopt — принять или перенять.
adaptation|n|B2|адаптация; приспособление|The plan needs some [[adaptation]] for a smaller team.|План нужно немного адаптировать для меньшей команды.|adapt + -ation|adapt|Adaptation to new conditions; также экранизация или иная переработка произведения, отдельное значение.
adaptable|adj|B2|способный приспосабливаться|We're looking for an [[adaptable]] approach that works with different tools.|Мы ищем гибкий подход, работающий с разными инструментами.|adapt + -able|adapt|Adaptable to different conditions; способность изменяться под условия.
adaptability|n|B2|адаптивность; способность приспосабливаться|The role requires [[adaptability]] and clear communication.|Эта роль требует способности приспосабливаться и ясно общаться.|adaptabil- + -ity|adaptable|При -ity меняется окончание -able → -ability; обычно неисчисляемое качество.
adaptive|adj|B2|адаптивный; меняющийся в ответ на условия|The application uses an [[adaptive]] layout for smaller screens.|Приложение использует адаптивную компоновку для небольших экранов.|adapt + -ive|adapt|Adaptive layout or behaviour изменяется в ответ на условия; не универсальный синоним adaptable.
`);
  E.batches.push({ id: 'families-03', families: addedFamilies.length, status: 'editorial-draft' });

  const attach = (key, families) => {
    const topic = E.topicByKey(key);
    topic.entryIds = [...new Set([...topic.entryIds, ...families.flatMap(id => E.families.find(f => f.id === id).entryIds)])];
  };
  attach('words:everyday', ['compare', 'predict']);
  attach('words:education', ['observe', 'adapt']);
  attach('professional:dev', ['maintain']);
  attach('professional:infra', ['observe', 'maintain']);
  attach('professional:work', ['adapt']);
  attach('professional:business', ['compare', 'predict']);

  const grammar = [
    {
      id: 'grammar:polite-indirect', label: 'Polite indirect questions', level: 'B1',
      source: 'https://downloads.bbc.co.uk/worldservice/learningenglish/grammarchallenge/pdfs/gc_36_indirect_questions_explanation.pdf',
      ru: 'После Could you tell me или Do you know во встроенном вопросе используется порядок утверждения: where the station is. Инверсия остаётся только во внешней вопросительной части. Для вопроса без вопросительного слова подходят if или whether: Do you know if it is open? Это не обязательно пересказ чужой речи.',
      example: 'Could you tell me where the nearest pharmacy is?', translation: 'Не могли бы вы подсказать, где ближайшая аптека?',
      question: 'Complete the polite question: Could you tell me ___?', options: ['where the station is', 'where is the station', 'where does the station is'], answer: 'where the station is', explain: 'Внутри вопроса порядок утверждения: the station + is; дополнительное do не нужно.',
      production: { question: 'Вставьте придаточную часть из Where is the nearest pharmacy?: Could you tell me ___?', answer: 'where the nearest pharmacy is', explain: 'Встроенный вопрос: where + подлежащее + is; внешнее Could you уже задаёт вопросительную форму.' }
    },
    {
      id: 'grammar:future-time-clauses', label: 'Future time clauses: when & as soon as', level: 'B1',
      source: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/verbs-time-clauses-if-clauses',
      ru: 'В придаточных времени после when, after, before, until и as soon as будущее обычно выражают настоящей формой: I will call when I arrive. Для завершённости перед следующим действием возможно when I have finished. Правило относится к придаточным времени: во встроенном вопросе I do not know when he will arrive возможен will.',
      example: 'I will send the file as soon as I receive your confirmation.', translation: 'Я отправлю файл, как только получу ваше подтверждение.',
      question: 'Choose the usual future-time form: I will call you when I ___ home.', options: ['get', 'will get', 'would get', 'got yesterday'], answer: 'get', explain: 'When вводит время будущего звонка; после него обычно Present Simple, хотя событие ещё не произошло.',
      production: { question: 'Поставьте receive в Present Simple: I will reply as soon as I ___ the report.', answer: 'receive', explain: 'После as soon as в придаточном времени достаточно receive; will остаётся в главной части.' }
    },
    {
      id: 'grammar:causative-have', label: 'Have something done', level: 'B2',
      source: 'https://dictionary.cambridge.org/grammar/british-grammar/have-something-',
      ru: 'Have + объект + past participle: I had my laptop repaired означает, что ремонт выполнил кто-то другой по моей организации или заказу. Время выражает have: have, had, will have. Та же форма может описывать неприятность, которую человек не заказывал: have something stolen; смысл определяется контекстом.',
      example: 'We had the office locks replaced after the move.', translation: 'После переезда нам заменили замки в офисе.',
      question: 'Which sentence normally means someone else repaired my laptop for me?', options: ['I had my laptop repaired.', 'I repaired my laptop myself.', 'I had repaired my laptop myself.'], answer: 'I had my laptop repaired.', explain: 'Объект my laptop стоит между had и repaired; это модель have something done, а не Past Perfect.',
      production: { question: 'Впишите have / my laptop / repair в Past Simple, ремонт выполнил мастер: I ___ yesterday.', answer: 'had my laptop repaired', explain: 'Had задаёт прошлое время, my laptop — объект, repaired — past participle действия, выполненного другим человеком.' }
    },
    {
      id: 'grammar:so-such', label: 'So & such: degree and noun phrases', level: 'B1',
      source: 'https://dictionary.cambridge.org/grammar/british-grammar/such-or-so',
      ru: 'So усиливает прилагательное или наречие: so clear, so quickly. Such относится к именной группе: such a clear explanation, such useful advice. Перед исчисляемым существительным в единственном числе нужен a/an. В обеих моделях можно добавить следствие через that: so clear that everyone understood.',
      example: 'It was such a useful explanation that I wrote it down.', translation: 'Объяснение было настолько полезным, что я его записал.',
      question: 'Complete the sentence: It was ___ useful suggestion.', options: ['such a', 'so', 'such', 'so a'], answer: 'such a', explain: 'Suggestion — исчисляемое существительное в единственном числе; нужна группа such + a + adjective + noun.',
      production: { question: 'Вставьте so или such: The instructions were ___ clear that nobody needed help.', answer: 'so', explain: 'После пропуска непосредственно прилагательное clear без существительного: so clear.' }
    },
    {
      id: 'grammar:preposition-ing', label: 'Prepositions followed by -ing', level: 'B1',
      source: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/ing-forms',
      ru: 'Когда после предлога нужен глагол, обычная форма — -ing: before leaving, without checking, interested in learning. В look forward to и be used to слово to — предлог, поэтому после него тоже возможна форма -ing. Это отличается от инфинитивного to в want to learn.',
      example: 'Please check the address before sending the parcel.', translation: 'Пожалуйста, проверьте адрес перед отправкой посылки.',
      question: 'Complete the phrase: Thank you for ___ me.', options: ['helping', 'help', 'to help', 'helped'], answer: 'helping', explain: 'После предлога for нужен глагол в форме -ing: for helping.',
      production: { question: 'Вставьте форму meet: I look forward to ___ the team.', answer: 'meeting', explain: 'To входит в сочетание look forward to как предлог; дальше meeting, не meet.' }
    },
    {
      id: 'grammar:modified-comparatives', label: 'Modifying comparisons', level: 'B2',
      source: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modifying-comparatives',
      ru: 'Much, far и a lot усиливают сравнительную степень: much cheaper, far more reliable. A little и slightly показывают небольшую разницу. Не добавляйте very прямо к сравнительной форме и не удваивайте её: much easier, не more easier. Для равенства используют as + обычное прилагательное + as.',
      example: 'The new connection is much more reliable than the old one.', translation: 'Новое соединение намного надёжнее старого.',
      question: 'Choose the correct comparison.', options: ['This route is much shorter.', 'This route is very shorter.', 'This route is more shorter.'], answer: 'This route is much shorter.', explain: 'Much усиливает сравнительную степень shorter; very и дополнительное more здесь не подходят.',
      production: { question: 'Используйте much и сравнительную степень reliable: This option is ___ than the previous one.', answer: 'much more reliable', explain: 'Reliable образует сравнение через more; much усиливает эту сравнительную форму.' }
    }
  ];
  grammar.forEach(g => {
    g.levelScope = 'editorial-study-target';
    g.sourceBand = 'Reference; no exact CEFR claim';
    g.sourceReview = 'Reference excerpts consulted; original examples and exercises';
    E.grammar.push(g);
  });
})(ETEnglish);
