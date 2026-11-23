/* ROOT: schlagen. Learning content in Russian. Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, meaningType, why. */
GT.registerRoot({
  id: 'schlagen', verb: 'schlagen', ru: 'бить, ударять',
  words: [
    {
      id: 'r-schlagen-schlagen', base: true, pos: 'verb',
      de: 'schlagen', forms: { praes: 'schlägt', praet: 'schlug', perf: 'hat geschlagen' }, gov: '+ Akk.',
      ru: 'бить, ударять; побеждать (в игре); биться (о сердце)',
      examples: [
        { sense: 'биться (о сердце)', de: 'Vor dem Gespräch hat mein Herz ganz schnell [[geschlagen]].', ru: 'Перед собеседованием у меня очень быстро билось сердце.' },
        { sense: 'побеждать / обыгрывать', de: 'Unsere Mannschaft hat den Favoriten 2:1 [[geschlagen]].', ru: 'Наша команда обыграла фаворита 2:1.' }
      ],
      morph: 'schlag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'schlagen значит «бить, ударять», «биться» (о сердце/часах) и «побеждать соперника» (в спорте или конкуренции).',
      meaningExamples: [{ de: 'Alarm schlagen', ru: 'бить тревогу' }, { de: 'Mein Herz schlägt schneller.', ru: 'Моё сердце бьётся быстрее.' }],
      note: 'Сильный глагол с умлаутом a→ä: du schlägst, er schlägt; schlug, hat geschlagen. Устойчивое: «Alarm schlagen» — бить тревогу.',
      why: {
        confidence: 'high',
        root: 'schlagen',
        text: 'Состав: корневой сильный глагол schlag- + -en.\nПроисхождение: общегерманский глагол (др.-в.-нем. slahan «бить, ударять», родственно английскому slay). От него образованы важнейшие B1-слова вроде vorschlagen («предлагать»), Ratschlag («совет») и fehlschlagen («провалиться, не удаться»).\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. schlagen',
        evidence: 'Др.-в.-нем. slahan < герм. *slahan- «бить, ударять».'
      }
    },
    {
      id: 'r-schlagen-vorschlagen', prefix: 'vor', sep: 'trennbar', stress: 'vórschlagen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'vorschlagen', forms: { praes: 'schlägt vor', praet: 'schlug vor', perf: 'hat vorgeschlagen' }, gov: '(jdm. Dat.) etw. (Akk.)',
      ru: 'предлагать (идею, дату, решение)',
      parallel: 'ПРЕДлагать',
      drill: { ru: 'предлагать (решение, время встречи)', de: 'einen Termin ___schlagen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'vor- означает «вынести перед всеми, предъявить» — предложить решение команде.' },
      examples: [
        { de: 'Ich [[schlage]] [[vor]], dass wir den Server erst am Sonntag patchen.', ru: 'Я предлагаю пропатчить сервер только в воскресенье.' },
        { de: 'Kannst du einen anderen Termin für das Meeting [[vorschlagen]]?', ru: 'Можешь предложить другое время для встречи?' }
      ],
      morph: 'vor-schlag-en',
      note: 'Главный глагол для деловых встреч и экзамена B1! Существительное: «der Vorschlag» (мн. ч. die Vorschläge). «Ich schlage vor, dass …» или «Ich schlage vor, … zu + Inf.».',
      why: {
        confidence: 'high',
        root: 'schlagen',
        text: 'Состав: отделяемая приставка vor- («вперёд, перед кем-то») + schlagen («ударять, бросать»).\nПроисхождение: в XV–XVI вв. развилось значение «выдвинуть на рассмотрение» (сначала в праве и собраниях — «выставить кандидата/вариант перед собранием»).\nПрозрачность: переносная — в современном языке запоминается вместе с der Vorschlag.',
        source: 'DWDS (Pfeifer), s.v. vorschlagen',
        evidence: 'С XV–XVI вв. — «выдвинуть на обсуждение, предложить» (vor- + schlagen).'
      }
    },
    {
      id: 'r-schlagen-nachschlagen', prefix: 'nach', sep: 'trennbar', stress: 'náchschlagen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'nachschlagen', forms: { praes: 'schlägt nach', praet: 'schlug nach', perf: 'hat nachgeschlagen' }, gov: 'etw. (Akk.) in + Dat.',
      ru: 'искать, смотреть в справочнике / словаре / документации',
      drill: { ru: 'посмотреть слово в словаре / справочнике', de: 'ein Wort im Wörterbuch ___schlagen' },
      prefixDrill: { ex: 0, meaning: 1, explain: 'nach- здесь означает «проверить, уточнить» — заглянуть в документацию или словарь.' },
      examples: [
        { de: 'Den genauen Fehlercode muss ich kurz in der Dokumentation [[nachschlagen]].', ru: 'Точный код ошибки мне нужно быстро посмотреть в документации.' },
        { de: 'Wenn ich ein Wort nicht kenne, [[schlage]] ich es sofort [[nach]].', ru: 'Если я не знаю слова, я сразу смотрю его в словаре.' }
      ],
      morph: 'nach-schlag-en',
      note: 'Буквально «полистать страницы назад/вслед» (от нажимать/перелистывать книгу). Синоним в живой речи: «nachschauen / googeln».'
    },
    {
      id: 'r-schlagen-aufschlagen', prefix: 'auf', sep: 'trennbar', stress: 'áufschlagen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'aufschlagen', forms: { praes: 'schlägt auf', praet: 'schlug auf', perf: 'hat / ist aufgeschlagen' }, gov: '+ Akk.',
      ru: 'открывать (книгу, страницу); разбивать (палатку, яйцо); (с sein) удариться при падении',
      parallel: 'ОТкрыть (книгу) / РАЗбить',
      prefixDrill: { ex: 0, meaning: 1, explain: 'auf- здесь означает «открывание» — открыть книгу или файл на нужной странице.' },
      examples: [
        { sense: 'открывать книгу / страницу', de: 'Bitte [[schlagen]] Sie das Buch auf Seite 42 [[auf]].', ru: 'Откройте, пожалуйста, книгу на странице 42.' },
        { sense: 'подавать (в теннисе) / разбивать (палатку)', de: 'Wir haben unser Zelt direkt am See [[aufgeschlagen]].', ru: 'Мы разбили палатку прямо у озера.' }
      ],
      morph: 'auf-schlag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'aufschlagen значит «открыть книгу на странице», «разбить палатку/лагерь», «разбить яйцо», «подавать в теннисе», а с sein — «удариться о землю при падении».',
      meaningExamples: [{ de: 'ein Buch aufschlagen', ru: 'открыть книгу' }, { de: 'die Augen aufschlagen', ru: 'открыть глаза' }],
      note: 'Переходное значение (книга, палатка) — с haben; падение на поверхность — с sein.'
    },
    {
      id: 'r-schlagen-zuschlagen', prefix: 'zu', sep: 'trennbar', stress: 'zúschlagen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'zuschlagen', forms: { praes: 'schlägt zu', praet: 'schlug zu', perf: 'hat zugeschlagen' },
      ru: 'захлопнуть (дверь, книгу); нанести удар (об атаке); (разг.) быстро купить выгодное предложение',
      drill: { ru: 'захлопнуть дверь; нанести удар (об атаке)', de: 'die Tür ___schlagen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'zu- здесь означает резкое закрывание — захлопнуть дверь или ноутбук.' },
      examples: [
        { sense: 'захлопнуть (дверь, книгу)', de: 'Der Wind hat die Tür laut [[zugeschlagen]].', ru: 'Ветер громко захлопнул дверь.' },
        { sense: 'ударить, атаковать', de: 'Die Ransomware-Gruppe hat am Wochenende wieder [[zugeschlagen]].', ru: 'Группировка вымогателей на выходных снова нанесла удар.' },
        { sense: 'ухватить выгодную сделку (разг.)', de: 'Bei dem Rabatt musste ich sofort [[zuschlagen]].', ru: 'При такой скидке я просто обязан был сразу купить.' }
      ],
      morph: 'zu-schlag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'zuschlagen значит «захлопнуть» (дверь, крышку ноутбука), «ударить / совершить атаку» (о преступниках, хакерах) и разговорное «быстро ухватить выгодное предложение».',
      meaningExamples: [{ de: 'den Laptop zuschlagen', ru: 'захлопнуть ноутбук' }, { de: 'Bei einem guten Angebot zuschlagen', ru: 'сразу взять выгодное предложение' }],
      note: 'Очень часто в заголовках немецких новостей о кибератаках: «Erpresser schlagen erneut zu».'
    },
    {
      id: 'r-schlagen-abschlagen', prefix: 'ab', sep: 'trennbar', stress: 'ábschlagen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'abschlagen', forms: { praes: 'schlägt ab', praet: 'schlug ab', perf: 'hat abgeschlagen' }, gov: '(jdm. Dat.) etw. (Akk.)',
      ru: 'отклонять, отказывать (в просьбе, предложении); отбивать, откалывать',
      parallel: 'ОТбить / ОТказать',
      prefixDrill: { ex: 0, meaning: 0, explain: 'ab- здесь означает «прочь, в сторону» — отклонить, отвергнуть просьбу.' },
      examples: [
        { sense: 'отклонять просьбу / предложение', de: 'Diese Bitte kann ich dir leider nicht [[abschlagen]].', ru: 'В этой просьбе я тебе, к сожалению, отказать не могу.' },
        { sense: 'отбить / отколоть', de: 'Ein Stück Putz ist von der Wand [[abgeschlagen]] worden.', ru: 'Кусок штукатурки отбили от стены.' }
      ],
      morph: 'ab-schlag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'abschlagen — это и буквальное «отбить, отколоть», и деловое/книжное «отклонить просьбу или предложение» (чаще с отрицанием: nicht abschlagen können).',
      meaningExamples: [{ de: 'ein Angebot abschlagen', ru: 'отклонить предложение' }, { de: 'jdm. keinen Wunsch abschlagen', ru: 'ни в чём не отказывать' }],
      note: 'В обычной речи для «отказать/отклонить» чаще звучит «ablehnen».'
    },
    {
      id: 'r-schlagen-einschlagen', prefix: 'ein', sep: 'trennbar', stress: 'éinschlagen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'einschlagen', forms: { praes: 'schlägt ein', praet: 'schlug ein', perf: 'hat / ist eingeschlagen' }, gov: '+ Akk.',
      ru: 'выбрать (путь, карьеру); вбить (гвоздь), разбить (стекло); ударить (о молнии)',
      examples: [
        { sense: 'выбрать путь, направление', de: 'Nach dem Studium hat sie eine Laufbahn in der IT [[eingeschlagen]].', ru: 'После учёбы она выбрала карьерный путь в IT.' },
        { sense: 'ударить (о молнии, с sein) / разбить стекло (с haben)', de: 'Gestern Nacht ist der Blitz in den Baum [[eingeschlagen]].', ru: 'Прошлой ночью молния ударила в дерево.' }
      ],
      morph: 'ein-schlag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'einschlagen значит «выбрать путь/карьеру» (einen Weg / eine Laufbahn einschlagen), «разбить окно / вбить гвоздь» и «ударить» (о молнии).',
      meaningExamples: [{ de: 'eine neue Richtung einschlagen', ru: 'выбрать новое направление' }, { de: 'eine Scheibe einschlagen', ru: 'разбить стекло' }],
      note: 'Устойчивое B2-сочетание: «eine berufliche Laufbahn einschlagen» — пойти по карьерному пути.'
    },
    {
      id: 'r-schlagen-fehlschlagen', prefix: 'fehl', sep: 'trennbar', stress: 'féhlschlagen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'fehlschlagen', forms: { praes: 'schlägt fehl', praet: 'schlug fehl', perf: 'ist fehlgeschlagen' },
      ru: 'не удаться, завершиться ошибкой, провалиться (о входе, обновлении, попытке)',
      examples: [
        { de: 'In den Logs sieht man über 500 [[fehlgeschlagene]] Anmeldeversuche.', ru: 'В логах видно более 500 неудачных попыток входа.' },
        { de: 'Das Backup ist gestern Nacht leider [[fehlgeschlagen]].', ru: 'Бэкап прошлой ночью, к сожалению, завершился ошибкой.' }
      ],
      morph: 'fehl-schlag-en',
      note: 'Крайне частотное IT-слово! Перфект с sein: ist fehlgeschlagen. Причастие как прилагательное: «fehlgeschlagene Anmeldung» (Failed Login).'
    },
    {
      id: 'r-schlagen-umschlagen', prefix: 'um', sep: 'trennbar', stress: 'úmschlagen', pos: 'verb',
      transparency: 'figurative',
      de: 'umschlagen', forms: { praes: 'schlägt um', praet: 'schlug um', perf: 'ist / hat umgeschlagen' }, gov: 'in + Akk.',
      ru: 'резко перемениться (о погоде, настроении); перевернуть (страницу, воротник)',
      parallel: 'ПЕРЕмениться / ПЕРЕвернуть',
      prefixDrill: { ex: 0, meaning: 2, explain: 'Отделяемая um- здесь обозначает резкий переворот, смену направления — погода резко переменилась.' },
      examples: [
        { sense: 'резко перемениться (с sein)', de: 'Das Wetter ist innerhalb einer Stunde komplett [[umgeschlagen]].', ru: 'Погода в течение часа полностью переменилась.' },
        { sense: 'перевернуть (с haben)', de: 'Sie [[schlug]] die Seite [[um]] und las weiter.', ru: 'Она перевернула страницу и продолжила читать.' }
      ],
      morph: 'um-schlag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'С sein глагол umschlagen значит «резко перемениться» (погода, настроение — in + Akk.), а с haben — «перевернуть страницу / подвернуть рукав».',
      meaningExamples: [{ de: 'Die Stimmung schlägt um.', ru: 'Настроение резко меняется.' }, { de: 'die Ärmel umschlagen', ru: 'подвернуть рукава' }],
      note: 'Родственное существительное: «der Umschlag» — конверт (и обложка книги, и компресс!).'
    },
    {
      id: 'r-schlagen-ueberschlagen', prefix: 'über', sep: 'untrennbar', stress: 'überschlágen', pos: 'verb',
      transparency: 'figurative',
      de: 'überschlagen', forms: { praes: 'überschlägt', praet: 'überschlug', perf: 'hat überschlagen' }, gov: '+ Akk.',
      ru: 'прикинуть примерно (сумму, время); пропустить (страницу); (sich überschlagen) перевернуться (о машине)',
      examples: [
        { sense: 'примерно прикинуть (затраты, время)', de: 'Ich habe die Kosten für die neuen Lizenzen grob [[überschlagen]].', ru: 'Я примерно прикинул стоимость новых лицензий.' },
        { sense: 'перевернуться (sich überschlagen)', de: 'Bei dem Unfall hat sich das Auto [[überschlagen]].', ru: 'При аварии машина перевернулась.' }
      ],
      morph: 'über-schlag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Неотделяемое überschlagen значит «примерно прикинуть в уме» (затраты, время), «пропустить страницу», а возвратное sich überschlagen — «перевернуться» (об авто) или «поступать лавиной» (о новостях).',
      meaningExamples: [{ de: 'die Ausgaben kurz überschlagen', ru: 'наскоро прикинуть расходы' }, { de: 'Die Ereignisse überschlagen sich.', ru: 'События сменяют друг друга лавиной.' }],
      note: 'Неотделяемый: hat überschlagen (без ge-).'
    },
    {
      id: 'r-schlagen-vorschlag', pos: 'noun',
      de: 'Vorschlag', article: 'der', plural: 'die Vorschläge',
      transparency: 'figurative',
      ru: 'предложение (идея, вариант)',
      examples: [
        { de: 'Hast du einen besseren [[Vorschlag]], wie wir das Problem lösen können?', ru: 'У тебя есть предложение получше, как мы можем решить эту проблему?' }
      ],
      morph: 'Vor-schlag',
      note: 'Умлаут во мн. ч.: die Vorschläge. «Einen Vorschlag machen» — внести предложение; «einen Vorschlag annehmen / ablehnen» — принять / отклонить.'
    },
    {
      id: 'r-schlagen-ratschlag', pos: 'noun',
      de: 'Ratschlag', article: 'der', plural: 'die Ratschläge',
      transparency: 'figurative',
      ru: 'совет, рекомендация',
      examples: [
        { de: 'Danke für deinen [[Ratschlag]], das hat mir wirklich weitergeholfen.', ru: 'Спасибо за твой совет, это мне правда помогло.' }
      ],
      morph: 'Rat-schlag',
      note: 'Сложение Rat («совет») + Schlag. Используется особенно во множественном числе («gute Ratschläge geben»), так как «der Rat» во мн. ч. означает уже «советники/советы-органы» (Betriebsräte).'
    },
    {
      id: 'r-schlagen-umschlag', pos: 'noun',
      de: 'Umschlag', article: 'der', plural: 'die Umschläge',
      transparency: 'figurative',
      ru: 'конверт; обложка; компресс',
      examples: [
        { sense: 'почтовый конверт', de: 'Auf dem [[Umschlag]] steht „Vertraulich“.', ru: 'На конверте написано «Конфиденциально».' },
        { sense: 'компресс (мед.)', de: 'Bei Fieber hilft manchmal ein kalter [[Umschlag]].', ru: 'При температуре иногда помогает холодный компресс.' }
      ],
      morph: 'Um-schlag',
      meaningType: 'polysemous',
      meaningExplanation: 'der Umschlag — это «почтовый конверт» (Briefumschlag), «обложка книги» и медицинский «компресс» (буквально то, чем «оборачивают» вокруг).',
      meaningExamples: [{ de: 'den Brief in einen Umschlag stecken', ru: 'положить письмо в конверт' }, { de: 'einen kalten Umschlag machen', ru: 'сделать холодный компресс' }],
      note: 'Полная форма для конверта — «der Briefumschlag».'
    },
    {
      id: 'r-schlagen-anschlag', pos: 'noun',
      de: 'Anschlag', article: 'der', plural: 'die Anschläge',
      transparency: 'figurative',
      ru: 'теракт, покушение; объявление (на доске); нажатие клавиши',
      examples: [
        { de: 'In den Nachrichten wurde über einen [[Cyberanschlag]] auf ein Krankenhaus berichtet.', ru: 'В новостях сообщили о кибератаке (покушении) на больницу.' }
      ],
      morph: 'An-schlag',
      meaningType: 'polysemous',
      meaningExplanation: 'В новостях der Anschlag обычно значит «теракт, покушение», в офисе/доме — «объявление на доске» (Anschlagbrett), а при печати — «нажатие клавиши» (Anschläge pro Minute).',
      meaningExamples: [{ de: 'ein Anschlag auf die Infrastruktur', ru: 'атака/теракт на инфраструктуру' }, { de: '300 Anschläge pro Minute tippen', ru: 'печатать 300 знаков в минуту' }],
      note: 'В кибербезопасности для обычных атак чаще говорят «Angriff», а «Anschlag» — для тяжёлых диверсий.'
    }
  ]
});
