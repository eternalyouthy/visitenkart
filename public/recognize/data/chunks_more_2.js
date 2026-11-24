/* Chunks (Redemittel) · third batch: 13 frames (1 per function).
 * Checked against existing inventory for zero duplicates. Original examples (ru + en). */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function C(id, fn, topics, de, register, ru, en, examples, variations, note) {
    var o = { id: 'ch2-' + fn + '-' + id, topic: fn, topics: topics, de: de, register: register, ru: ru, en: en, examples: examples, variations: variations || [] };
    if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; }
    return o;
  }

  GT.register({ tab: 'chunks', items: [
    C('wenn-du-mich-fragst', 'opinion', ['everyday', 'people', 'society'], 'Wenn du mich fragst, [Verb] …', 'informal', 'если хочешь знать моё мнение … / по-моему …', 'if you ask me, …',
      [ex('[[Wenn du mich fragst]], sollten wir zuerst eine Testversion starten.', 'Если спросишь меня, нам стоит сначала запустить тестовую версию.', 'If you ask me, we should launch a test version first.')],
      ['Wenn Sie mich fragen, … (формально)'], ['После придаточного с wenn главное предложение начинается сразу со спрягаемого глагола.', 'After the wenn-clause, the main clause starts immediately with the conjugated verb.']),
    C('im-prinzip', 'agree', ['workcomm', 'everyday', 'society'], 'Im Prinzip hast du recht, aber [X].', 'neutral', 'в принципе ты прав(а), но [X]', 'in principle you’re right, but [X]',
      [ex('[[Im Prinzip hast du recht, aber]] dafür fehlt uns im Moment die Zeit.', 'В принципе ты прав, но на это у нас сейчас не хватает времени.', 'In principle you’re right, but we don’t have the time for that right now.')],
      ['Grundsätzlich stimme ich zu, aber …']),
    C('beispiel-erklaeren', 'clarify', ['work', 'authorities', 'workcomm'], 'Könnten Sie das an einem Beispiel erklären?', 'formal', 'не могли бы вы объяснить это на примере?', 'could you explain that with an example?',
      [ex('Die Regel klingt abstrakt — [[könnten Sie das an einem Beispiel erklären]]?', 'Правило звучит абстрактно — не могли бы вы объяснить его на примере?', 'The rule sounds abstract — could you explain it with an example?')]),
    C('bis-datum-pruefen', 'complain', ['authorities', 'home', 'food'], 'Ich bitte Sie, [X] bis [Datum] zu prüfen.', 'formal', 'прошу вас проверить [X] до [дата]', 'I ask you to check [X] by [date]',
      [ex('[[Ich bitte Sie]], die fehlerhafte Abrechnung [[bis]] nächsten Freitag [[zu prüfen]].', 'Прошу вас проверить ошибочный расчёт до следующей пятницы.', 'I ask you to review the incorrect statement by next Friday.')],
      ['Bitte prüfen Sie den Vorgang bis …'], ['Чёткая деловая формулировка для письменной жалобы или претензии.', 'A clear formal phrase for a written complaint or claim.']),
    C('tritt-immer-wieder-auf', 'problem', ['infra', 'dev', 'workcomm'], 'Seit [X] tritt das Problem immer wieder auf.', 'neutral', 'с [X] проблема возникает снова и снова', 'since [X] the problem keeps happening',
      [ex('[[Seit]] dem letzten Update [[tritt das Problem immer wieder auf]].', 'После последнего обновления эта проблема возникает снова и снова.', 'Since the last update the problem keeps recurring.')],
      ['Der Fehler tritt sporadisch auf.'], ['Глагол auftreten (возникать, проявляться) — отделяемый: tritt … auf.', 'auftreten (to occur) is separable: tritt … auf.']),
    C('nachmittag-moeglich', 'appointments', ['health', 'authorities', 'everyday'], 'Wäre auch ein Termin am Nachmittag möglich?', 'formal', 'возможен ли приём (встреча) во второй половине дня?', 'would an afternoon appointment also be possible?',
      [ex('Vormittags arbeite ich leider — [[wäre auch ein Termin am Nachmittag möglich]]?', 'До обеда я, к сожалению, работаю — возможна ли запись на вторую половину дня?', 'Unfortunately I work in the mornings — would an afternoon appointment also be possible?')]),
    C('ich-rufe-wegen-an', 'phone', ['authorities', 'health', 'workcomm'], 'Ich rufe wegen [Gen./Dat.] an.', 'neutral', 'я звоню по поводу […].', 'I’m calling about […].',
      [ex('Guten Tag, [[ich rufe wegen]] meines Termins am Donnerstag [[an]].', 'Здравствуйте, я звоню по поводу моей записи в четверг.', 'Hello, I’m calling about my appointment on Thursday.')],
      ['Ich rufe wegen der Rechnung an.'], ['По норме wegen + Genitiv (wegen meines Termins), в разговоре часто Dativ (wegen meinem Termin).', 'Formally wegen takes genitive (wegen meines Termins); in speech dative is common too.']),
    C('im-anhang-sende-ich', 'email', ['work', 'authorities', 'workcomm'], 'Im Anhang sende ich Ihnen [X].', 'formal', 'во вложении направляю вам [X]', 'please find [X] attached',
      [ex('[[Im Anhang sende ich Ihnen]] die unterschriebenen Unterlagen.', 'Во вложении направляю вам подписанные документы.', 'Please find the signed documents attached.')],
      ['Anbei erhalten Sie [X].'], ['В немецкой переписке фраза «Im Anhang…» ставится в самом начале или перед подписью.', 'Common in German emails right after the opening or before the sign-off.']),
    C('wie-laeuft-woche', 'smalltalk', ['workcomm', 'everyday'], 'Wie läuft die Woche bei dir?', 'informal', 'как у тебя проходит неделя?', 'how’s your week going?',
      [ex('Guten Morgen! [[Wie läuft die Woche bei dir]]? — Ziemlich voll, aber gut.', 'Доброе утро! Как проходит неделя? — Довольно плотно, но хорошо.', 'Morning! How’s your week going? — Pretty busy, but good.')],
      ['Wie läuft’s bei dir diese Woche?']),
    C('fast-fertig-heute', 'it_standup', ['workcomm', 'dev'], 'Ich bin mit [X] fast fertig, heute mache ich [Y].', 'neutral', 'я почти закончил(а) с [X], сегодня займусь [Y]', 'I’m almost done with [X]; today I’ll work on [Y]',
      [ex('[[Ich bin mit]] dem Review [[fast fertig, heute mache ich]] die Tests weiter.', 'Я почти закончил с ревью, сегодня продолжу тесты.', 'I’m almost done with the review; today I’ll continue with the tests.')]),
    C('auf-meinem-rechner', 'it_bug', ['dev', 'infra'], 'Auf meinem Rechner läuft es, aber [X] schlägt fehl.', 'neutral', 'у меня на компьютере всё работает, но [X] падает с ошибкой', 'it works on my machine, but [X] fails',
      [ex('[[Auf meinem Rechner läuft es, aber]] der Build auf dem Server [[schlägt fehl]].', 'У меня на машине всё работает, но сборка на сервере падает.', 'It works on my machine, but the build on the server fails.')],
      ['Lokal funktioniert es, aber …'], ['Глагол fehlschlagen (потерпеть неудачу, упасть) — отделяемый: schlägt … fehl.', 'fehlschlagen (to fail) is separable: schlägt … fehl.']),
    C('kurz-ueber-schauen', 'it_help', ['dev', 'workcomm'], 'Könntest du mir kurz über [X] schauen?', 'informal', 'мог(ла) бы ты быстро глянуть на [X]?', 'could you take a quick look at [X]?',
      [ex('[[Könntest du mir kurz über]] den Pull Request [[schauen]]?', 'Можешь быстро посмотреть мой пул-реквест?', 'Could you take a quick look at the pull request?')],
      ['Kannst du mal drüberschauen?']),
    C('thema-zurueckstellen', 'it_meeting', ['workcomm', 'dev'], 'Können wir das Thema kurz zurückstellen?', 'neutral', 'можем пока отложить эту тему?', 'can we park this topic for now?',
      [ex('Uns läuft die Zeit davon — [[können wir das Thema kurz zurückstellen]]?', 'У нас заканчивается время — можем пока отложить эту тему?', 'We’re running out of time — can we park this topic for now?')])
  ] });
})();
