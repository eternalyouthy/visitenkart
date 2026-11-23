/* Composed conversational patterns; lesson bands are not phrase-level CEFR labels. */
(function (E) {
  'use strict';
  const sources = {
    agree: 'https://learnenglish.britishcouncil.org/free-resources/speaking/b1/agreeing-disagreeing',
    request: 'https://dictionary.cambridge.org/grammar/british-grammar/would',
    phone: 'https://learnenglish.britishcouncil.org/comment/220523',
    email: 'https://learnenglish.britishcouncil.org/comment/218544',
    attached: 'https://dictionary.cambridge.org/dictionary/english/attach',
    forward: 'https://dictionary.cambridge.org/us/grammar/british-grammar/look-forward-to',
    conversation: 'https://learnenglish.britishcouncil.org/free-resources/speaking/b1',
    problem: 'https://learnenglish.britishcouncil.org/free-resources/speaking/b2',
    point: 'https://dictionary.cambridge.org/dictionary/english/point',
    mean: 'https://dictionary.cambridge.org/dictionary/english/mean',
    block: 'https://dictionary.cambridge.org/dictionary/english/block',
    reproduce: 'https://dictionary.cambridge.org/dictionary/english/reproduce',
    expected: 'https://dictionary.cambridge.org/dictionary/english/expected',
    tradeoff: 'https://dictionary.cambridge.org/dictionary/english/tradeoff',
    put: 'https://dictionary.cambridge.org/dictionary/english/put-through',
    hand: 'https://dictionary.cambridge.org/dictionary/english/give-a-hand',
    walk: 'https://dictionary.cambridge.org/dictionary/english/walk-through',
    make: 'https://dictionary.cambridge.org/dictionary/english/make-it',
    complaint: 'https://dictionary.cambridge.org/dictionary/english/complaint'
  };
  const rows = `
I agree up to a point|частично согласен|[[I agree up to a point]], but the costs still worry me.|Я частично согласен, но стоимость меня всё ещё беспокоит.|Признаёт часть довода; затем уместно уточнить границу согласия.|agree
I am not sure I agree|не уверен, что согласен|[[I am not sure I agree]] with that conclusion.|Не уверен, что согласен с этим выводом.|Мягкое несогласие: менее резко, чем You are wrong.|agree
that is a fair point|это справедливое замечание|[[That is a fair point]]; we should check the figures again.|Это справедливое замечание; нужно ещё раз проверить цифры.|Признание разумности довода не означает полного согласия.|point
could you repeat that|не могли бы вы повторить|[[Could you repeat that]], please? The connection is poor.|Повторите, пожалуйста. Плохая связь.|Вежливая просьба повторить уже сказанное.|request
what do you mean by|что вы подразумеваете под|[[What do you mean by]] a temporary solution?|Что вы подразумеваете под временным решением?|После by идёт уточняемое слово или выражение.|mean
if I understand correctly|если я правильно понимаю|[[If I understand correctly]], the deadline has not changed.|Если я правильно понимаю, срок не изменился.|Проверка своего понимания перед дальнейшим выводом.|conversation
I would like to make a complaint|я хотел бы подать жалобу|[[I would like to make a complaint]] about the delivery.|Я хотел бы подать жалобу на доставку.|Make a complaint about; конкретизируйте проблему после about.|complaint
I would like a refund|я хотел бы вернуть деньги|[[I would like a refund]] for the damaged item.|Я хотел бы вернуть деньги за повреждённый товар.|Вежливая просьба о возврате, без утверждения юридического права на него.|request
could you look into this|не могли бы вы разобраться в этом|[[Could you look into this]] and let me know what happened?|Не могли бы вы разобраться в этом и сообщить, что произошло?|Look into: изучить вопрос, а не просто посмотреть на вещь.|problem
this is not what I ordered|это не то, что я заказывал|[[This is not what I ordered]]; I asked for the smaller model.|Это не то, что я заказывал: я просил модель поменьше.|Спокойно обозначает несоответствие заказу.|complaint
it does not seem to work|похоже, это не работает|[[It does not seem to work]] when I connect it to my laptop.|Похоже, это не работает при подключении к моему ноутбуку.|Seem to смягчает вывод; затем опишите наблюдаемое поведение.|problem
the problem started when|проблема началась, когда|[[The problem started when]] I installed the update.|Проблема началась, когда я установил обновление.|Последовательность событий сама по себе не доказывает причину.|problem
I get an error message|появляется сообщение об ошибке|[[I get an error message]] whenever I try to sign in.|При каждой попытке входа появляется сообщение об ошибке.|Укажите текст ошибки и действие, которое к ней приводит.|problem
I would like to book an appointment|я хотел бы записаться на приём|[[I would like to book an appointment]] for next week.|Я хотел бы записаться на приём на следующей неделе.|Book an appointment; подходит для врача или другой службы.|request
could we reschedule|не могли бы мы перенести|[[Could we reschedule]] our meeting for Thursday?|Не могли бы мы перенести встречу на четверг?|Reschedule something for a new date/time.|request
does Tuesday work for you|вам подходит вторник|[[Does Tuesday work for you]], or would Friday be better?|Вам подходит вторник или лучше пятница?|Work for someone здесь значит подходить по обстоятельствам.|conversation
I am afraid I cannot make it|к сожалению, я не смогу прийти|[[I am afraid I cannot make it]] to the meeting tomorrow.|К сожалению, завтра я не смогу прийти на встречу.|I am afraid вводит неприятную новость; make it — суметь прийти.|make
could you put me through|не могли бы вы соединить меня|[[Could you put me through]] to technical support?|Не могли бы вы соединить меня с технической поддержкой?|Put someone through to a person/department: соединить по телефону.|put
who is calling please|скажите, пожалуйста, кто звонит|[[Who is calling please]]? I will check whether she is available.|Скажите, пожалуйста, кто звонит? Я проверю, может ли она поговорить.|Нейтральный вопрос о личности звонящего.|phone
could I leave a message|могу я оставить сообщение|[[Could I leave a message]] for the account manager?|Могу я оставить сообщение менеджеру по работе с клиентами?|Leave a message for someone; сообщите имя и обратный номер.|phone
I will call you back|я вам перезвоню|[[I will call you back]] after I check the booking.|Я вам перезвоню после проверки бронирования.|Call someone back; местоимение стоит между call и back.|phone
I am writing to enquire about|пишу, чтобы узнать о|[[I am writing to enquire about]] the training course.|Пишу, чтобы узнать об учебном курсе.|Формальное начало письма; enquire/inquire — варианты написания.|email
please find attached|во вложении вы найдёте|[[Please find attached]] the revised schedule.|Во вложении вы найдёте пересмотренное расписание.|Формальная формула письма; менее формально: I have attached...|attached
I look forward to hearing from you|буду рад получить ваш ответ|[[I look forward to hearing from you]] after you review the proposal.|Буду рад получить ваш ответ после рассмотрения предложения.|После предлога to нужна форма hearing; hear from — получить весточку.|forward
how was your weekend|как прошли выходные|[[How was your weekend]]? Did you manage to get some rest?|Как прошли выходные? Удалось отдохнуть?|Открывает дружеский разговор о завершившихся выходных.|conversation
have you been here before|вы уже бывали здесь|[[Have you been here before]], or is this your first visit?|Вы уже бывали здесь или это ваш первый визит?|Present Perfect спрашивает об опыте до настоящего момента.|conversation
what have you been working on|над чем вы работали в последнее время|[[What have you been working on]] since we last spoke?|Над чем вы работали с нашего последнего разговора?|Present Perfect Continuous фокусируется на процессе за период.|conversation
I am currently working on|сейчас я работаю над|[[I am currently working on]] the access review.|Сейчас я работаю над проверкой прав доступа.|Work on a task/project; не work at a task в этой модели.|problem
I am blocked by|мне мешает продолжить|[[I am blocked by]] a missing approval from the service owner.|Мне мешает продолжить отсутствие согласования владельца сервиса.|В рабочем отчёте называет конкретное препятствие; затем нужен план снятия блокировки.|block
the next step is|следующий шаг —|[[The next step is]] to test the change in a separate environment.|Следующий шаг — проверить изменение в отдельной среде.|The next step is to + инфинитив; обозначает план действия.|problem
I can reproduce the issue|я могу воспроизвести проблему|[[I can reproduce the issue]] on a clean installation.|Я могу воспроизвести проблему на чистой установке.|Reproduce an issue: повторить условия, при которых возникает ошибка.|reproduce
the expected behaviour is|ожидаемое поведение —|[[The expected behaviour is]] that the session ends after sign-out.|Ожидается, что после выхода сеанс завершится.|Отделяйте ожидаемый результат от реально наблюдаемого.|expected
this only happens when|это происходит только когда|[[This only happens when]] two sessions are open at the same time.|Это происходит только при двух одновременно открытых сеансах.|Ограничивает описание условиями воспроизведения.|problem
could you give me a hand|не могли бы вы помочь|[[Could you give me a hand]] with this configuration?|Не могли бы вы помочь с этой настройкой?|Give someone a hand with something; разговорная просьба о помощи.|hand
could you walk me through|не могли бы вы объяснить мне по шагам|[[Could you walk me through]] the recovery procedure?|Не могли бы вы по шагам объяснить мне процедуру восстановления?|Walk someone through a process; адресат между walk и through.|walk
I have already tried|я уже пробовал|[[I have already tried]] restarting the service.|Я уже пробовал перезапускать сервис.|Try doing описывает опробованный способ; сообщите и его результат.|problem
could we consider an alternative|не могли бы мы рассмотреть другой вариант|[[Could we consider an alternative]] before making the final decision?|Не могли бы мы рассмотреть другой вариант перед окончательным решением?|Вежливое предложение обсудить ещё один вариант.|request
what trade-offs are we making|какие компромиссы мы принимаем|[[What trade-offs are we making]] if we choose the cheaper option?|На какие компромиссы мы идём, выбирая более дешёвый вариант?|Trade-off — выигрыш в одном свойстве ценой другого; назовите обе стороны.|tradeoff
`;
  rows.trim().split('\n').forEach(line => {
    const [headword, ru, en, translation, usage, source] = line.split('|');
    E.addTopicEntry([headword, 'chunk', '', ru, en, translation, usage], 'chunks', sources[source], true);
  });
})(ETEnglish);
