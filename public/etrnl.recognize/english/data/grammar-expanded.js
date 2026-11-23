/* Original teaching material. Source bands and editorial study targets are separate. */
(function (E) {
  'use strict';
  const BC = 'https://learnenglish.britishcouncil.org/free-resources/grammar/';
  const sources = {
    perfect: 'english-grammar-reference/present-perfect',
    conditionals: 'b1-b2/conditionals-zero-first-second',
    passive: 'b1-b2/passives', modals: 'b1-b2/modals-permission-obligation',
    patterns: 'english-grammar-reference/verbs-followed-ing-form',
    relative: 'b1-b2/relative-clauses-defining-relative-clauses',
    deduction: 'b1-b2/modals-deductions-about-past'
  };
  const production = {
    perfect: ['Впишите Present Perfect от update: I ___ the server, so it is ready now.', 'have updated', 'Present Perfect: have + past participle. Результат актуален сейчас.'],
    conditionals: ['Впишите результат Second Conditional от test: If we had more time, we ___ another option.', 'would test', 'Гипотетический результат: would + инфинитив.'],
    passive: ['Поставьте disable в Past Simple Passive: The account ___ yesterday.', 'was disabled', 'Единственное число и прошлое время: was + disabled.'],
    modals: ['Впишите четыре слова со значением «не обязан»: You ___ attend this optional meeting. Используйте have, без сокращения.', 'do not have to', 'Do not have to — отсутствие обязанности; must not — запрет.'],
    patterns: ['Впишите форму open после avoid: Please avoid ___ untrusted attachments.', 'opening', 'Avoid требует дополнения в форме -ing.'],
    relative: ['Вставьте относительное местоимение принадлежности: The colleague ___ laptop was stolen has reported it.', 'whose', 'Whose связывает коллегу с принадлежащим ему ноутбуком.'],
    deduction: ['Выразите неуверенное предположение о прошлом через might + stop: The service ___ during the update.', 'might have stopped', 'Might have + past participle относится к возможному событию в прошлом.'],
    hedging: ['Вставьте suggest в Present Simple: The evidence ___ that the account may be compromised.', 'suggests', 'Evidence — неисчисляемое существительное с формой глагола единственного числа. Suggests не утверждает доказанность.']
  };
  E.grammar.forEach(g => {
    const key = g.id.split(':')[1];
    g.source = key === 'hedging' ? 'https://www.phrasebank.manchester.ac.uk/using-cautious-language/' : BC + sources[key];
    const [question, answer, explain] = production[key];
    g.production = { question, answer, explain };
  });
  const rows = [
    {
      id: 'perfect-continuous', label: 'Present perfect: result & duration', level: 'B1', source: 'b1-b2/present-perfect-simple-continuous',
      ru: 'Present Perfect Simple подчёркивает результат или количество: have checked five files. Continuous — процесс или длительность: have been checking files for an hour. Процесс может продолжаться или только что закончиться. Глаголы состояния вроде know обычно не используют в Continuous.',
      example: 'I have been checking the logs for an hour, and I am still not finished.', translation: 'Я проверяю журналы уже час и всё ещё не закончил.',
      question: 'Which form emphasises an ongoing activity lasting an hour?', options: ['have been checking', 'checked yesterday', 'will check'], answer: 'have been checking', explain: 'Have been + -ing связывает начавшийся ранее процесс с настоящим.',
      production: { question: 'Используйте Present Perfect Continuous от check: I ___ the logs for an hour and I am still working.', answer: 'have been checking', explain: 'Have been checking подчёркивает длительность продолжающейся работы.' }
    },
    {
      id: 'past-perfect', label: 'Past perfect: before a past point', level: 'B1', source: 'b1-b2/past-perfect',
      ru: 'Past Perfect: had + past participle. Он показывает событие раньше другой точки в прошлом. Это не просто «очень давнее прошлое». Когда порядок и так очевиден из before/after, Past Simple тоже часто возможен; выбор зависит от того, на чём мы делаем акцент.',
      example: 'The meeting had already ended when I arrived.', translation: 'Когда я пришёл, встреча уже закончилась.',
      question: 'Which event happened first: The meeting had ended when I arrived?', options: ['The meeting ended.', 'I arrived.', 'They happened simultaneously.'], answer: 'The meeting ended.', explain: 'Had ended относит завершение встречи к моменту до моего прихода.',
      production: { question: 'Поставьте leave в Past Perfect: When I reached the platform, the train ___.', answer: 'had left', explain: 'Had + left: поезд ушёл раньше другого события в прошлом.' }
    },
    {
      id: 'future-perfect', label: 'Future continuous & future perfect', level: 'B2', source: 'b1-b2/future-continuous-future-perfect',
      ru: 'Will be + -ing показывает процесс в определённый будущий момент. Will have + past participle смотрит назад из будущей точки на завершённый результат. By Friday — крайний момент завершения, а не длительность действия.',
      example: 'By Friday, we will have tested every backup.', translation: 'К пятнице мы проверим все резервные копии.',
      question: 'At ten tomorrow, I ___ the new system. The session runs from nine to eleven.', options: ['will be testing', 'have tested yesterday', 'had test'], answer: 'will be testing', explain: 'В десять процесс тестирования будет идти: will be + testing.',
      production: { question: 'Используйте Future Perfect от finish: By Friday, we ___ the review.', answer: 'will have finished', explain: 'Will have + finished выражает завершение к будущему сроку.' }
    },
    {
      id: 'third-conditional', label: 'Third & mixed conditionals', level: 'B2', source: 'b1-b2/conditionals-third-mixed',
      ru: 'Third Conditional меняет воображаемое прошлое: if + had done, would have done. Mixed Conditional может связывать прошлое условие с нынешним результатом: If I had saved the key, I would have access now. Сначала определите время условия и результата, затем выбирайте формы.',
      example: 'If we had kept a backup, we would have recovered the files.', translation: 'Если бы мы сохранили резервную копию, то восстановили бы файлы.',
      question: 'If I had accepted that job, I ___ in Berlin now.', options: ['would be living', 'would have lived yesterday', 'will living'], answer: 'would be living', explain: 'Условие относится к прошлому, а воображаемый результат — к настоящему: mixed conditional.',
      production: { question: 'Впишите результат Third Conditional от recover: If we had kept a backup, we ___ the files.', answer: 'would have recovered', explain: 'Альтернативный прошлый результат: would have + past participle.' }
    },
    {
      id: 'wish', label: 'Wish, if only & regrets', level: 'B2', source: 'b1-b2/wishes-wish-if-only',
      ru: 'Wish + Past Simple описывает желаемое отличие от настоящего; wish + Past Perfect — сожаление о прошлом. Wish + would часто выражает недовольство повторяющимся поведением или желание изменения. Wish не заменяет hope для обычного ожидания будущего.',
      example: 'I wish I had checked the address before sending the message.', translation: 'Жаль, что я не проверил адрес перед отправкой сообщения.',
      question: 'Which sentence expresses regret about a completed past action?', options: ['I wish I had checked it.', 'I hope it works tomorrow.', 'I wish I knew the answer now.'], answer: 'I wish I had checked it.', explain: 'Had checked после wish задаёт альтернативу прошлому.',
      production: { question: 'Используйте Past Perfect от check: I wish I ___ the address before sending the message.', answer: 'had checked', explain: 'Wish + had checked выражает сожаление о невыполненной проверке.' }
    },
    {
      id: 'reported-statements', label: 'Reported statements & backshift', level: 'B1', source: 'english-grammar-reference/reported-speech',
      ru: 'В косвенной речи после said/told формы часто сдвигаются назад: am → was, have done → had done, will → would. Местоимения и указатели времени меняют по реальной ситуации. Если сообщение всё ещё верно, сдвиг не всегда обязателен. Say something; tell someone something.',
      example: 'Mia said that she was waiting for a reply.', translation: 'Мия сказала, что ждёт ответа.',
      question: 'Choose the correct reporting pattern.', options: ['Mia told me that she was ready.', 'Mia told that she was ready.', 'Mia said me that she was ready.'], answer: 'Mia told me that she was ready.', explain: 'Tell требует адресата, say не принимает me без to.',
      production: { question: 'Передайте с backshift: Mia said, “I am waiting.” → Mia said that she ___. Впишите только форму глагола.', answer: 'was waiting', explain: 'При указанном в задании сдвиге am waiting превращается в was waiting.' }
    },
    {
      id: 'reported-questions', label: 'Reported questions', level: 'B2', source: 'b1-b2/reported-speech-questions',
      ru: 'Косвенный вопрос имеет порядок слов утверждения: asked where I lived, без did I live. Для yes/no-вопроса нужны if/whether. Ask someone to do обычно передаёт просьбу, а не вопрос о факте.',
      example: 'She asked whether I had received the invitation.', translation: 'Она спросила, получил ли я приглашение.',
      question: 'Which reported question has the correct word order?', options: ['He asked where I worked.', 'He asked where did I work.', 'He asked where worked I.'], answer: 'He asked where I worked.', explain: 'В придаточном нет вопросительной инверсии или вспомогательного did.',
      production: { question: 'Дополните косвенный вопрос со сдвигом времени: “Where do you work?” → She asked where I ___. Используйте work.', answer: 'worked', explain: 'Порядок I worked; do исчезает, а при backshift work становится worked.' }
    },
    {
      id: 'relative-nondefining', label: 'Non-defining relative clauses', level: 'B2', source: 'https://learnenglish.britishcouncil.org/comment/142589',
      ru: 'Неограничительное придаточное добавляет информацию об уже определённом объекте и отделяется запятыми. Используются who, which, whose и относительные наречия, но не that. Местоимение здесь не опускают; which может также комментировать целую предыдущую ситуацию.',
      example: 'My laptop, which I bought last year, needs a new battery.', translation: 'Моему ноутбуку, который я купил в прошлом году, нужна новая батарея.',
      question: 'My laptop, ___ I bought last year, needs a new battery.', options: ['which', 'that', 'what'], answer: 'which', explain: 'Добавочная информация между запятыми требует which; that здесь не подходит.',
      production: { question: 'Впишите относительное местоимение: Nora, ___ works in support, will call you.', answer: 'who', explain: 'Речь о человеке, а придаточное добавочное; who нельзя заменить на that.' }
    },
    {
      id: 'deduction-present', label: 'Present deductions: must, might, can’t', level: 'B1', source: 'b1-b2/modals-deductions-about-present',
      ru: 'Must + инфинитив может передавать уверенный вывод, might/may/could — возможность, cannot — уверенный отрицательный вывод. Must not обычно означает запрет, поэтому для вывода «это не может быть» нужен cannot, а не must not.',
      example: 'That cannot be the correct address: this building has no offices.', translation: 'Это не может быть правильным адресом: в этом здании нет офисов.',
      question: 'Which phrase expresses a strong negative deduction?', options: ['cannot be', 'must not enter', 'might be'], answer: 'cannot be', explain: 'Cannot be исключает возможность; must not enter запрещает действие.',
      production: { question: 'Используйте must + be для уверенного вывода: Her coat is here, so she ___ nearby.', answer: 'must be', explain: 'Must be здесь вывод по признаку, а не обязанность находиться рядом.' }
    },
    {
      id: 'past-ability', label: 'Could, was able to & managed to', level: 'B1', source: 'b1-b2/past-ability',
      ru: 'Could обычно описывает общую прошлую способность. Для единичного успешно выполненного действия чаще нужны was/were able to или managed to. Managed to подчёркивает трудность. В отрицании couldn’t подходит и для разовой неудачи; с восприятием could также возможен в конкретной ситуации.',
      example: 'After several attempts, we managed to restore the connection.', translation: 'После нескольких попыток нам удалось восстановить соединение.',
      question: 'Which form emphasises a successful result achieved with difficulty?', options: ['managed to restore', 'could generally restore', 'used to restore'], answer: 'managed to restore', explain: 'Managed to показывает конкретный достигнутый результат вопреки трудности.',
      production: { question: 'Дополните через manage в Past Simple, включая to: After several attempts, we ___ restore the connection.', answer: 'managed to', explain: 'Модель managed to + инфинитив; restore уже дано после пропуска.' }
    },
    {
      id: 'used-to', label: 'Used to, be used to & get used to', level: 'B1', source: 'b1-b2-grammar/different-uses-of-used-to',
      ru: 'Used to + инфинитив описывает прежнее состояние или привычку, которые изменились. Be used to + существительное/-ing — быть привычным к чему-то. Get used to — привыкать. В последних двух моделях to — предлог, поэтому после него working, а не work.',
      example: 'I am getting used to working with a new team.', translation: 'Я привыкаю работать с новой командой.',
      question: 'Which phrase means «мне привычно работать ночью»?', options: ['I am used to working at night.', 'I used to work at night.', 'I am used to work at night.'], answer: 'I am used to working at night.', explain: 'Be used to working описывает привычность сейчас; used to work — прежнюю привычку.',
      production: { question: 'Впишите форму work: I am getting used to ___ with a new team.', answer: 'working', explain: 'После предлога to в get used to стоит -ing.' }
    },
    {
      id: 'articles', label: 'Articles: introducing & identifying', level: 'A2', source: 'a1-a2-grammar/articles-a-an-the',
      ru: 'A/an вводит один неопределённый предмет; the указывает на предмет, который собеседник может определить. A/an выбирают по звуку: a user, an hour. У неисчисляемых и множественных существительных при общем значении часто нулевой артикль. Это основа, а не весь набор правил артикля.',
      example: 'I received a message. The message contained a meeting link.', translation: 'Я получил сообщение. В нём была ссылка на встречу.',
      question: 'Choose the article based on pronunciation: ___ hour.', options: ['an', 'a', 'many'], answer: 'an', explain: 'Hour начинается с гласного звука: an hour.',
      production: { question: 'Впишите a, an или the: I bought a router yesterday. ___ router is still in its box.', answer: 'the', explain: 'При втором упоминании предмет уже определён первым предложением.' }
    },
    {
      id: 'quantifiers', label: 'Few, little, a few & a little', level: 'B1', source: 'english-grammar-reference/quantifiers',
      ru: 'Few/a few сочетаются с исчисляемым множественным числом; little/a little — с неисчисляемым. Без a смысл обычно отрицательный: почти нет. С a — некоторое количество есть. Many относится к исчисляемым, much — к неисчисляемым; a lot of возможно с обоими типами.',
      example: 'We have a little time, so we can check one more file.', translation: 'У нас есть немного времени, так что можно проверить ещё один файл.',
      question: 'Which phrase means «немного времени есть»?', options: ['a little time', 'few time', 'a few time'], answer: 'a little time', explain: 'Time здесь неисчисляемое; a little подчёркивает наличие некоторого количества.',
      production: { question: 'Вставьте a few или a little: We still have ___ questions to discuss.', answer: 'a few', explain: 'Questions — исчисляемое существительное во множественном числе.' }
    },
    {
      id: 'ed-ing', label: 'Interested & interesting', level: 'A2', source: 'a1-a2/adjectives-ending-ed-ing',
      ru: 'У многих пар прилагательных на -ed/-ing первая форма описывает испытываемое чувство, вторая — то, что его вызывает: interested in an interesting topic. Правило относится к таким парам, а не ко всем словам на -ed или -ing. Человек тоже может быть interesting.',
      example: 'The talk was interesting, and I was interested in the examples.', translation: 'Доклад был интересным, и примеры меня заинтересовали.',
      question: 'The instructions confused me. I felt ___.', options: ['confused', 'confusing', 'confuse'], answer: 'confused', explain: 'Испытываемое чувство — confused; вызывающие его инструкции — confusing.',
      production: { question: 'Используйте подходящую форму interest: The topic kept my attention; it was ___.', answer: 'interesting', explain: 'Тема вызывает интерес, поэтому interesting.' }
    },
    {
      id: 'contrast', label: 'Although, despite & in spite of', level: 'B2', source: 'b1-b2/contrasting-ideas-although-despite-others',
      ru: 'Although/even though вводят придаточное с подлежащим и сказуемым. Despite/in spite of обычно стоят перед существительным или -ing. Для полного придаточного после них используют the fact that. Despite не требует of; в in spite of это обязательная часть.',
      example: 'Despite the delay, we finished the review on time.', translation: 'Несмотря на задержку, мы завершили проверку вовремя.',
      question: 'Choose the grammatically complete contrast.', options: ['Although it was late, we continued.', 'Despite it was late, we continued.', 'Despite of the hour, we continued.'], answer: 'Although it was late, we continued.', explain: 'Although вводит it was late; после despite нужен объект или the fact that + придаточное.',
      production: { question: 'Вставьте although или despite: ___ the delay, we finished on time.', answer: 'despite', explain: 'После пропуска существительная группа the delay, поэтому despite.' }
    },
    {
      id: 'zero-conditional', label: 'Zero conditional: general consequences', level: 'B1', source: 'b1-b2/conditionals-zero-first-second',
      ru: 'Zero Conditional обычно соединяет if/when + Present Simple с Present Simple и описывает общую закономерность. First Conditional чаще относится к конкретной будущей возможности. Это учебные модели: реальные условные предложения допускают и другие сочетания времён в зависимости от смысла.',
      example: 'If a password expires, the system asks the user to change it.', translation: 'Если срок действия пароля истекает, система просит пользователя сменить его.',
      question: 'Choose the general rule, rather than a prediction about one future event.', options: ['If a password expires, the system asks for a new one.', 'If it expires tomorrow, I will change it.', 'If it had expired, I would have changed it.'], answer: 'If a password expires, the system asks for a new one.', explain: 'Present Simple в обеих частях описывает повторяющееся общее поведение.',
      production: { question: 'Используйте Present Simple от ask: If a password expires, the system ___ the user to change it.', answer: 'asks', explain: 'Общее правило; system требует окончания -s.' }
    }
  ];
  rows.forEach(g => { g.id = 'grammar:' + g.id; if (!g.source.startsWith('https://')) g.source = BC + g.source; E.grammar.push(g); });
  E.grammar.forEach(g => {
    g.levelScope = 'editorial-study-target';
    g.sourceBand = g.source.includes('/b1-b2') ? 'B1–B2' : g.source.includes('/a1-a2') ? 'A1–A2' : 'Reference; no exact CEFR claim';
    g.checked = '2026-11-23';
  });
})(ETEnglish);
