/* Chunks (Redemittel) · second batch: 25 frames for the thinner functions. topic = function id;
 * topics = situations for the filter. [X] = variable slot; [[…]] marks the chunk in an example.
 * ru inline, English gloss / examples / notes inline. Original examples. */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function C(id, fn, topics, de, register, ru, en, examples, variations, note) {
    var o = { id: 'ch-' + fn + '-' + id, topic: fn, topics: topics, de: de, register: register, ru: ru, en: en, examples: examples, variations: variations || [] };
    if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; }
    return o;
  }

  GT.register({ tab: 'chunks', items: [
    // Giving your opinion
    C('ich-finde', 'opinion', ['everyday', 'society', 'workcomm'], 'Ich finde, dass [X].', 'neutral', 'Я считаю / мне кажется, что [X].', 'I think that [X].',
      [ex('[[Ich finde, dass]] der Kurs zu schnell ist.', 'Мне кажется, курс идёт слишком быстро.', 'I think the course is too fast.')],
      ['Ich finde [X] gut / schlecht.', 'Ich glaube, dass …'], ['Самый частый способ высказать мнение. После dass глагол в конце.', 'The most common way to give an opinion. After dass the verb goes to the end.']),
    C('aus-meiner-sicht', 'opinion', ['work', 'society', 'workcomm'], 'Aus meiner Sicht [Verb] …', 'neutral', 'С моей точки зрения …', 'From my point of view …',
      [ex('[[Aus meiner Sicht]] ist das Risiko zu hoch.', 'С моей точки зрения, риск слишком высок.', 'From my point of view, the risk is too high.')],
      ['Aus meiner Perspektive …', 'Meines Erachtens … (формально)'], ['Как Meiner Meinung nach: глагол сразу на втором месте.', 'Like Meiner Meinung nach: the verb comes straight after, in position two.']),
    // Agreeing & disagreeing
    C('stimme-zu', 'agree', ['everyday', 'workcomm', 'society'], 'Da stimme ich dir / Ihnen zu.', 'neutral', 'Тут я с тобой / с вами согласен.', 'I agree with you there.',
      [ex('Wir brauchen mehr Personal. — [[Da stimme ich Ihnen zu]].', 'Нам нужно больше персонала. — Тут я с вами согласен.', 'We need more staff. — I agree with you there.')],
      ['Ich stimme dir völlig zu.'], ['zustimmen + Dativ: ich stimme dir (не dich) zu.', 'zustimmen takes the dative: ich stimme dir (not dich) zu.']),
    C('sehe-genauso', 'agree', ['everyday', 'workcomm'], 'Das sehe ich genauso.', 'neutral', 'Я думаю так же.', 'I see it the same way.',
      [ex('Der Termin ist zu knapp. — [[Das sehe ich genauso]].', 'Срок слишком сжатый. — Я думаю так же.', 'The deadline is too tight. — I see it the same way.')],
      ['Sehe ich auch so.', 'Ganz meine Meinung.']),
    // Asking for clarification
    C('wiederholen', 'clarify', ['everyday', 'authorities', 'workcomm'], 'Könnten Sie das bitte wiederholen?', 'formal', 'Не могли бы вы повторить?', 'Could you repeat that, please?',
      [ex('Entschuldigung, [[könnten Sie das bitte wiederholen]]? Die Verbindung war schlecht.', 'Простите, не могли бы вы повторить? Связь была плохая.', 'Sorry, could you repeat that, please? The line was bad.')],
      ['Könnten Sie etwas langsamer sprechen?', 'Noch einmal, bitte.']),
    // Complaining
    C('nicht-in-ordnung', 'complain', ['home', 'food', 'everyday'], 'Ich finde es nicht in Ordnung, dass [X].', 'neutral', 'Я считаю недопустимым, что [X].', 'I don’t think it’s acceptable that [X].',
      [ex('[[Ich finde es nicht in Ordnung, dass]] die Heizung seit zwei Wochen nicht geht.', 'Я считаю недопустимым, что отопление не работает уже две недели.', 'I don’t think it’s acceptable that the heating hasn’t worked for two weeks.')],
      ['Das ist nicht in Ordnung!'], ['Твёрдо, но вежливо — хороший тон для жалобы.', 'Firm but polite — the right tone for a complaint.']),
    C('erwarte', 'complain', ['home', 'authorities', 'food'], 'Ich erwarte, dass [X] bis [Datum] [Verb].', 'formal', 'Я рассчитываю, что [X] до [даты] …', 'I expect [X] to … by [date].',
      [ex('[[Ich erwarte, dass]] der Schaden bis Freitag repariert wird.', 'Я рассчитываю, что повреждение устранят до пятницы.', 'I expect the damage to be repaired by Friday.')],
      ['Bitte sorgen Sie dafür, dass …'], ['Требование со сроком — стандарт в письменной жалобе (Beschwerdebrief).', 'A demand with a deadline is standard in a written complaint (Beschwerdebrief).']),
    C('geld-zurueck', 'complain', ['food'], 'Ich hätte gern mein Geld zurück.', 'neutral', 'Я хотел(а) бы вернуть деньги.', 'I’d like a refund.',
      [ex('Die Jacke hat schon nach einer Woche ein Loch. [[Ich hätte gern mein Geld zurück]].', 'У куртки уже через неделю дыра. Я хотел бы вернуть деньги.', 'The jacket has a hole after only a week. I’d like a refund.')],
      ['Kann ich das umtauschen?'], ['Umtauschen — обменять на другой товар; das Geld zurückbekommen — получить деньги назад.', 'Umtauschen — exchange for another item; das Geld zurückbekommen — get the money back.']),
    // Describing a problem
    C('kaputt-gegangen', 'problem', ['home', 'food', 'everyday'], '[X] ist kaputtgegangen.', 'informal', '[X] сломался / сломалось.', '[X] has broken.',
      [ex('Unsere Waschmaschine [[ist]] gestern [[kaputtgegangen]].', 'Наша стиральная машина вчера сломалась.', 'Our washing machine broke yesterday.')],
      ['[X] ist kaputt.', '[X] geht nicht mehr.'], ['kaputtgehen — с sein: ist kaputtgegangen.', 'kaputtgehen takes sein: ist kaputtgegangen.']),
    // Appointments
    C('frueher', 'appointments', ['health', 'authorities'], 'Ginge es auch etwas früher?', 'formal', 'А можно немного пораньше?', 'Would a slightly earlier time be possible?',
      [ex('Der nächste Termin ist in drei Wochen? [[Ginge es auch etwas früher]]?', 'Следующая запись через три недели? А пораньше нельзя?', 'The next appointment is in three weeks? Would anything earlier be possible?')],
      ['Haben Sie vielleicht noch etwas früher frei?', 'Ginge es auch später?'], ['Ginge — Konjunktiv II от gehen: вежливая просьба.', 'Ginge is Konjunktiv II of gehen: a polite request.']),
    // Phone calls
    C('nachricht', 'phone', ['work', 'authorities', 'workcomm'], 'Kann ich eine Nachricht hinterlassen?', 'neutral', 'Можно оставить сообщение?', 'Can I leave a message?',
      [ex('Herr Braun ist nicht da? [[Kann ich eine Nachricht hinterlassen]]?', 'Господина Брауна нет? Можно оставить сообщение?', 'Mr Braun isn’t in? Can I leave a message?')],
      ['Könnten Sie ihm / ihr etwas ausrichten?']),
    C('erreichbar', 'phone', ['work', 'workcomm'], 'Wann ist [X] wieder erreichbar?', 'neutral', 'Когда [X] снова будет на связи?', 'When will [X] be available again?',
      [ex('[[Wann ist]] Frau Keller [[wieder erreichbar]]?', 'Когда госпожа Келлер снова будет на связи?', 'When will Ms Keller be available again?')],
      ['Ab wann ist [X] wieder im Büro?'], ['erreichbar — «досягаем, на связи»; nicht erreichbar — «недоступен».', 'erreichbar — reachable, available; nicht erreichbar — unavailable.']),
    // Formal emails
    C('danke-antwort', 'email', ['work', 'authorities', 'workcomm'], 'Vielen Dank für Ihre schnelle Antwort.', 'formal', 'Большое спасибо за быстрый ответ.', 'Thank you for your quick reply.',
      [ex('[[Vielen Dank für Ihre schnelle Antwort]]. Der Termin passt mir gut.', 'Большое спасибо за быстрый ответ. Время мне подходит.', 'Thank you for your quick reply. The appointment suits me well.')],
      ['Vielen Dank für Ihre Nachricht.']),
    C('anbei', 'email', ['work', 'authorities', 'workcomm'], 'Anbei sende ich Ihnen [X].', 'formal', 'Во вложении направляю вам [X].', 'Please find [X] attached.',
      [ex('[[Anbei sende ich Ihnen]] meinen Lebenslauf und meine Zeugnisse.', 'Во вложении направляю вам резюме и рабочие отзывы.', 'Please find my CV and references attached.')],
      ['Im Anhang finden Sie …'], ['Anbei = «при сем, во вложении». Глагол сразу после него: Anbei sende ich …', 'Anbei means “enclosed, attached”. The verb follows at once: Anbei sende ich …']),
    C('mfg', 'email', ['work', 'authorities', 'workcomm'], 'Mit freundlichen Grüßen', 'formal', 'С уважением (подпись в письме)', 'Kind regards / Yours sincerely',
      [ex('[[Mit freundlichen Grüßen]]\nAnna Schmidt', 'С уважением,\nАнна Шмидт', 'Kind regards,\nAnna Schmidt')],
      ['Viele Grüße (менее формально)', 'Beste Grüße'], ['После формулы запятая НЕ ставится — в отличие от русского и английского.', 'No comma after the closing formula — unlike in English.']),
    // Small talk
    C('wie-laeufts', 'smalltalk', ['everyday', 'people', 'workcomm'], 'Wie läuft’s (bei dir)?', 'informal', 'Как дела? Как оно?', 'How’s it going?',
      [ex('Hey Tom, [[wie läuft’s]] im neuen Job?', 'Привет, Том, как дела на новой работе?', 'Hi Tom, how’s it going in the new job?')],
      ['Wie geht’s?', 'Alles gut bei dir?']),
    C('wochenende-vor', 'smalltalk', ['everyday', 'leisure'], 'Hast du am Wochenende schon was vor?', 'informal', 'У тебя уже есть планы на выходные?', 'Have you got any plans for the weekend?',
      [ex('[[Hast du am Wochenende schon was vor]]? Wir wollen grillen.', 'У тебя есть планы на выходные? Мы собираемся на шашлыки.', 'Any plans for the weekend? We’re going to have a barbecue.')],
      ['Was machst du am Wochenende?'], ['etwas vorhaben — «иметь планы». Was = разг. etwas.', 'etwas vorhaben — to have plans. Was is colloquial for etwas.']),
    C('wetter', 'smalltalk', ['everyday'], 'Was für ein Wetter heute!', 'informal', 'Ну и погода сегодня!', 'What weather today!',
      [ex('[[Was für ein Wetter heute]]! Endlich Sonne.', 'Ну и погода сегодня! Наконец-то солнце.', 'What weather today! Sun at last.')],
      ['Schönes Wetter heute, oder?', 'Schon wieder Regen …']),
    // IT · Stand-up
    C('blockiert', 'it_standup', ['workcomm', 'dev'], 'Ich hänge bei [X] fest, weil [Y].', 'informal', 'Я застрял на [X], потому что [Y].', 'I’m stuck on [X] because [Y].',
      [ex('[[Ich hänge bei]] dem Login-Bug [[fest]], weil ich keinen Zugriff auf die Logs habe.', 'Я застрял на баге с логином, потому что у меня нет доступа к логам.', 'I’m stuck on the login bug because I don’t have access to the logs.')],
      ['Ich bin bei [X] blockiert.'], ['festhängen — отделяемый: ich hänge … fest.', 'festhängen is separable: ich hänge … fest.']),
    C('fast-fertig', 'it_standup', ['workcomm', 'dev'], 'Mit [X] bin ich fast fertig.', 'neutral', 'С [X] я почти закончил.', 'I’m almost done with [X].',
      [ex('[[Mit]] dem Ticket [[bin ich fast fertig]], fehlen nur noch die Tests.', 'С тикетом я почти закончил, остались только тесты.', 'I’m almost done with the ticket, only the tests are missing.')],
      ['[X] ist so gut wie fertig.']),
    // IT · Explaining a bug
    C('tritt-auf', 'it_bug', ['dev', 'workcomm'], 'Der Fehler tritt nur auf, wenn [X].', 'neutral', 'Ошибка возникает, только когда [X].', 'The bug only occurs when [X].',
      [ex('[[Der Fehler tritt nur auf, wenn]] man sich mit dem Handy anmeldet.', 'Ошибка возникает, только когда входишь с телефона.', 'The bug only occurs when you log in on a phone.')],
      ['Das passiert nur, wenn …'], ['auftreten (trat auf, ist aufgetreten) — «возникать» об ошибках.', 'auftreten (trat auf, ist aufgetreten) — “to occur”, used for errors.']),
    C('reproduzieren', 'it_bug', ['dev', 'workcomm'], 'Ich kann den Fehler (nicht) reproduzieren.', 'neutral', 'Я (не) могу воспроизвести ошибку.', 'I can(’t) reproduce the bug.',
      [ex('Auf meinem Rechner [[kann ich den Fehler nicht reproduzieren]].', 'На моём компьютере я не могу воспроизвести ошибку.', 'I can’t reproduce the bug on my machine.')],
      ['Lässt sich der Fehler reproduzieren?']),
    // IT · Asking for help
    C('drueberschauen', 'it_help', ['dev', 'workcomm'], 'Könntest du mal kurz drüberschauen?', 'informal', 'Можешь быстренько глянуть?', 'Could you have a quick look?',
      [ex('Ich habe den Pull Request fertig. [[Könntest du mal kurz drüberschauen]]?', 'Я закончил пул-реквест. Можешь быстренько глянуть?', 'I’ve finished the pull request. Could you have a quick look?')],
      ['Kannst du mal einen Blick drauf werfen?']),
    // IT · Meetings
    C('verstehe-punkt', 'it_meeting', ['workcomm', 'dev'], 'Ich verstehe den Punkt, aber [X].', 'neutral', 'Я понимаю этот довод, но [X].', 'I take the point, but [X].',
      [ex('[[Ich verstehe den Punkt, aber]] die Migration kostet uns mindestens zwei Sprints.', 'Я понимаю этот довод, но миграция обойдётся нам минимум в два спринта.', 'I take the point, but the migration will cost us at least two sprints.')],
      ['Das ist ein guter Punkt, allerdings …']),
    C('offline', 'it_meeting', ['workcomm'], 'Lass uns das nach dem Meeting klären.', 'neutral', 'Давай обсудим это после встречи.', 'Let’s sort that out after the meeting.',
      [ex('Das führt jetzt zu weit — [[lass uns das nach dem Meeting klären]].', 'Это сейчас уведёт нас в сторону — давай обсудим после встречи.', 'That’s going too far now — let’s sort it out after the meeting.')],
      ['Lass uns das offline besprechen. (жаргон)', 'Können wir das separat besprechen?'])
  ] });
})();
