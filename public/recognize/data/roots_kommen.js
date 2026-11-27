/* ROOT: kommen. Learning content in Russian. Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, meaningType, why. */
GT.registerRoot({
  id: 'kommen', verb: 'kommen', ru: 'приходить, прибывать',
  words: [
    {
      id: 'r-kommen-kommen', base: true, pos: 'verb',
      de: 'kommen', forms: { praes: 'kommt', praet: 'kam', perf: 'ist gekommen' }, gov: 'aus / zu / nach / in',
      ru: 'приходить, приезжать; происходить (родом из)',
      examples: [
        { sense: 'приходить, приезжать', de: 'Ich [[komme]] heute zehn Minuten später ins Büro.', ru: 'Я сегодня приду в офис на десять минут позже.' },
        { sense: 'происходить откуда-то / быть следствием', de: 'Der verdächtige Traffic [[kommt]] aus einem externen Rechenzentrum.', ru: 'Подозрительный трафик идёт из внешнего дата-центра.' }
      ],
      morph: 'komm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'kommen значит «приходить/приезжать», «быть родом из» (aus + Dat.), а также входит в ключевые обороты: auf eine Idee kommen («придумать»), zu spät kommen («опоздать»).',
      meaningExamples: [{ de: 'Wann kommst du an?', ru: 'Когда ты приезжаешь?' }, { de: 'Wie bist du darauf gekommen?', ru: 'Как ты до этого додумался?' }],
      note: 'Сильный глагол с sein: kam, ist gekommen. «Auf etw. kommen» — догадаться, вспомнить («Ich komme gerade nicht auf den Namen»).',
      why: {
        confidence: 'high',
        root: 'kommen',
        text: 'Состав: корневой сильный глагол komm- + -en.\nПроисхождение: общегерманский глагол (др.-в.-нем. queman «приходить», родственно английскому come), восходящий к и.-е. корню *gʷem- («шагать, приходить»).\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. kommen',
        evidence: 'Др.-в.-нем. queman < герм. *kweman- < и.-е. *gʷem- «приходить».'
      }
    },
    {
      id: 'r-kommen-ankommen', prefix: 'an', sep: 'trennbar', stress: 'ánkommen', pos: 'verb',
      alsoIn: [['words', 'travel']], // Wortliste p. 18
      core: true, transparency: 'transparent',
      de: 'ankommen', forms: { praes: 'kommt an', praet: 'kam an', perf: 'ist angekommen' }, gov: 'in + Dat. / auf + Akk. (es kommt an auf)',
      ru: 'прибывать, приходить (о поезде, письме); (es kommt an auf) зависеть от',
      parallel: 'ПРИбывать',
      drill: { ru: 'прибывать (о поезде, письме)', de: 'pünktlich ___kommen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'an- здесь обозначает достижение точки, прибытие к месту назначения.' },
      examples: [
        { sense: 'прибывать, доходить (о поезде, письме)', de: 'Ist meine E-Mail bei dir [[angekommen]]?', ru: 'Моё письмо до тебя дошло?' },
        { sense: 'зависеть от (es kommt auf + Akk. an)', de: 'Bei einem Incident [[kommt]] es auf jede Minute [[an]].', ru: 'При инциденте важна каждая минута (всё зависит от каждой минуты).' }
      ],
      morph: 'an-komm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Личное ankommen значит «прибывать, доходить» (поезд, посылка, письмо), а безличное es kommt auf + Akk. an — «это зависит от / решается этим».',
      meaningExamples: [{ de: 'Der Zug kommt um 9 Uhr an.', ru: 'Поезд прибывает в 9 часов.' }, { de: 'Es kommt auf die Details an.', ru: 'Всё зависит от деталей.' }],
      note: 'Всегда с sein: ist angekommen. Также разговорно: «Der Vorschlag kam gut an» — предложение хорошо приняли (зашло).',
      why: {
        confidence: 'high',
        root: 'kommen',
        text: 'Состав: отделяемая приставка an- («к, до точки») + kommen («приходить»).\nПроисхождение: буквально «прийти к цели»; безличное значение «зависеть от чего-то» развилось в XVII–XVIII вв. («дело упирается в это»).\nПрозрачность: прозрачно в основном значении прибытия.',
        source: 'DWDS (Pfeifer), s.v. ankommen',
        evidence: 'an- + kommen («дойти до цели»); безличное «зависеть от» закрепилось в XVII–XVIII вв.'
      }
    },
    {
      id: 'r-kommen-bekommen', prefix: 'be', sep: 'untrennbar', stress: 'bekómmen', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'bekommen', forms: { praes: 'bekommt', praet: 'bekam', perf: 'hat bekommen' }, gov: '+ Akk.',
      ru: 'получать (письмо, зарплату, ответ, болезнь)',
      examples: [
        { de: 'Hast du gestern schon eine Rückmeldung vom Arzt [[bekommen]]?', ru: 'Ты вчера уже получил ответ от врача?' },
        { de: 'Nach dem Update [[bekommen]] viele Nutzer eine Fehlermeldung.', ru: 'После обновления многие пользователи получают сообщение об ошибке.' }
      ],
      morph: 'be-komm-en',
      note: 'Внимание: вспомогательный глагол — HABEN (hat bekommen), хотя kommen идёт с sein! Ложный друг с английским: bekommen ≠ become («становиться» — это werden)!',
      why: {
        confidence: 'high',
        root: 'kommen',
        text: 'Состав: неотделяемая приставка be- + kommen.\nПроисхождение: в др.-в.-нем. biqueman значило «прийти к чему-то, наткнуться, достичь», откуда развилось «получить в руки» (в английском become пошло в другую сторону — «стать»).\nПрозрачность: непрозрачное — из современного «приходить» значение «получать» не выводится.',
        source: 'DWDS (Pfeifer), s.v. bekommen',
        evidence: 'Др.-в.-нем. biqueman («прийти к, обрести») → «получить»; вспомогательный глагол haben.'
      }
    },
    {
      id: 'r-kommen-mitkommen', prefix: 'mit', sep: 'trennbar', stress: 'mítkommen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'mitkommen', forms: { praes: 'kommt mit', praet: 'kam mit', perf: 'ist mitgekommen' },
      ru: 'пойти/поехать вместе; успевать (за объяснением, темпом)',
      parallel: 'идти ВМЕСТЕ / поспевать',
      drill: { ru: 'пойти вместе (на обед)', de: 'zum Mittagessen ___kommen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'mit- здесь выражает совместное действие — «пойти вместе с кем-то».' },
      examples: [
        { sense: 'пойти вместе', de: 'Wir gehen kurz Kaffee holen — [[kommst]] du [[mit]]?', ru: 'Мы сейчас сходим за кофе — пойдёшь с нами?' },
        { sense: 'успевать за мыслью, темпом', de: 'Moment, das war zu schnell — ich [[komme]] gerade nicht [[mit]].', ru: 'Подожди, это было слишком быстро — я сейчас не успеваю за мыслью.' }
      ],
      morph: 'mit-komm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'mitkommen значит и «пойти/поехать вместе с кем-то», и «успевать следить за ходом объяснения или темпом работы».',
      meaningExamples: [{ de: 'Kommst du heute Abend mit?', ru: 'Пойдёшь сегодня вечером с нами?' }, { de: 'Im Kurs komme ich gut mit.', ru: 'На курсе я хорошо поспеваю.' }],
      note: 'Всегда с sein: ist mitgekommen. Фраза «Ich komme nicht mehr mit» очень естественна, когда собеседник объясняет слишком быстро.'
    },
    {
      id: 'r-kommen-vorkommen', prefix: 'vor', sep: 'trennbar', stress: 'vórkommen', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'vorkommen', forms: { praes: 'kommt vor', praet: 'kam vor', perf: 'ist vorgekommen' }, gov: '(jdm. Dat. + Adj.)',
      ru: 'встречаться, случаться; (jdm. vorkommen) казаться кому-то',
      examples: [
        { sense: 'случаться, встречаться', de: 'Solche Fehlalarme [[kommen]] nach einem Update leider öfter [[vor]].', ru: 'Такие ложные срабатывания после обновления, к сожалению, случаются часто.' },
        { sense: 'казаться (Dat. + Adj.)', de: 'Die E-Mail [[kommt]] mir irgendwie seltsam [[vor]].', ru: 'Это письмо кажется мне каким-то странным.' }
      ],
      morph: 'vor-komm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'vorkommen имеет два частых значения: «встречаться, происходить» («Das kommt oft vor») и «казаться кому-то» с Dativ («Das kommt mir komisch vor»).',
      meaningExamples: [{ de: 'So etwas kommt selten vor.', ru: 'Такое случается редко.' }, { de: 'Die Zahl kommt mir zu hoch vor.', ru: 'Эта цифра кажется мне завышенной.' }],
      note: 'Оба значения идут с sein: ist vorgekommen. «Das kommt schon mal vor» — «ну, бывает».'
    },
    {
      id: 'r-kommen-weiterkommen', prefix: 'weiter', sep: 'trennbar', stress: 'wéiterkommen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'weiterkommen', forms: { praes: 'kommt weiter', praet: 'kam weiter', perf: 'ist weitergekommen' }, gov: 'bei / mit + Dat.',
      ru: 'продвигаться дальше (в задаче, карьере); (nicht weiterkommen) застрять',
      parallel: 'продвигаться ДАЛЬШЕ',
      examples: [
        { de: 'Ich [[komme]] bei diesem Ticket einfach nicht [[weiter]].', ru: 'Я никак не могу сдвинуться с мёртвой точки с этим тикетом.' },
        { de: 'Mit deinem Tipp bin ich sofort [[weitergekommen]], danke!', ru: 'С твоей подсказкой я сразу продвинулся дальше, спасибо!' }
      ],
      morph: 'weiter-komm-en',
      note: 'Одна из самых нужных фраз в IT и офисе: «Ich komme bei [X] nicht weiter» — «я застрял на [X]». Перфект с sein.'
    },
    {
      id: 'r-kommen-zurueckkommen', prefix: 'zurück', sep: 'trennbar', stress: 'zurǘckkommen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'zurückkommen', forms: { praes: 'kommt zurück', praet: 'kam zurück', perf: 'ist zurückgekommen' }, gov: 'aus / von + Dat. · auf + Akk.',
      ru: 'возвращаться; (auf + Akk.) вернуться к теме/предложению',
      parallel: 'возвращаться ОБРАТНО',
      examples: [
        { sense: 'возвращаться физически', de: 'Wann [[kommst]] du aus dem Urlaub [[zurück]]?', ru: 'Когда ты возвращаешься из отпуска?' },
        { sense: 'вернуться к вопросу/предложению (auf + Akk.)', de: 'Ich [[komme]] nächste Woche noch einmal auf Ihren Vorschlag [[zurück]].', ru: 'На следующей неделе я ещё раз вернусь к вашему предложению.' }
      ],
      morph: 'zurück-komm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'zurückkommen значит «возвращаться физически» и деловое «вернуться к вопросу / предложению позже» (auf + Akk. zurückkommen).',
      meaningExamples: [{ de: 'Er kommt morgen zurück.', ru: 'Он возвращается завтра.' }, { de: 'auf ein Thema zurückkommen', ru: 'вернуться к теме' }],
      note: 'Золотая деловая фраза: «Darf ich auf diesen Punkt kurz zurückkommen?» — «Могу я ненадолго вернуться к этому пункту?».'
    },
    {
      id: 'r-kommen-klarkommen', prefix: 'klar', sep: 'trennbar', stress: 'klárkommen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'klarkommen', forms: { praes: 'kommt klar', praet: 'kam klar', perf: 'ist klargekommen' }, gov: 'mit + Dat.',
      ru: 'справляться (с задачей, инструментом); ладить (с человеком)',
      examples: [
        { sense: 'справляться с инструментом / задачей', de: '[[Kommst]] du mit dem neuen SIEM-System schon gut [[klar]]?', ru: 'Ты уже хорошо справляешься с новой SIEM-системой?' },
        { sense: 'ладить с человеком', de: 'Mit meinen neuen Kollegen [[komme]] ich super [[klar]].', ru: 'Со своими новыми коллегами я отлично лажу.' }
      ],
      morph: 'klar-komm-en',
      meaningType: 'colloquial',
      meaningExplanation: 'Очень частотный разговорно-нейтральный глагол («справляться с чем-то» или «ладить с кем-то», всегда mit + Dat.); более официальный синоним — zurechtkommen.',
      meaningExamples: [{ de: 'Kommst du allein klar?', ru: 'Ты сам справишься?' }, { de: 'Wir kommen gut miteinander klar.', ru: 'Мы хорошо ладим друг с другом.' }],
      note: 'Пишется слитно (klarkommen, klargekommen). Всегда с sein и предлогом mit + Dat.'
    },
    {
      id: 'r-kommen-auskommen', prefix: 'aus', sep: 'trennbar', stress: 'áuskommen', pos: 'verb',
      transparency: 'figurative',
      de: 'auskommen', forms: { praes: 'kommt aus', praet: 'kam aus', perf: 'ist ausgekommen' }, gov: 'mit + Dat. / ohne + Akk.',
      ru: 'обходиться (чем-то / без чего-то); уживаться, ладить (с кем-то)',
      drill: { ru: 'обходиться без (кого-то/чего-то)', de: 'ohne Backup ___kommen' },
      examples: [
        { sense: 'обходиться (бюджетом / без чего-то)', de: 'Wir müssen diesen Monat mit weniger Budget [[auskommen]].', ru: 'В этом месяце нам придётся обойтись меньшим бюджетом.' },
        { sense: 'уживаться, ладить', de: 'Die beiden Teams [[kommen]] sehr gut miteinander [[aus]].', ru: 'Обе команды отлично ладят друг с другом.' }
      ],
      morph: 'aus-komm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'auskommen значит «обходиться имеющимся / обходиться без» (mit/ohne) и «ладить, уживаться с людьми» (gut miteinander auskommen).',
      meaningExamples: [{ de: 'ohne Kaffee auskommen', ru: 'обходиться без кофе' }, { de: 'gut mit dem Chef auskommen', ru: 'хорошо ладить с начальником' }],
      note: 'Всегда с sein: ist ausgekommen.'
    },
    {
      id: 'r-kommen-durchkommen', prefix: 'durch', sep: 'trennbar', stress: 'dúrchkommen', pos: 'verb',
      transparency: 'transparent',
      de: 'durchkommen', forms: { praes: 'kommt durch', praet: 'kam durch', perf: 'ist durchgekommen' }, gov: 'bei + Dat.',
      ru: 'пройти, пробиться (трафик, транспорт); дозвониться; сдать (экзамен)',
      parallel: 'ПРОйти / ПРОбиться',
      drill: { ru: 'пройти сквозь (файрвол); дозвониться', de: 'durch die Firewall ___kommen' },
      prefixDrill: { ex: 0, meaning: 1, explain: 'durch- здесь обозначает движение сквозь преграду — трафик «проходит через» файрвол.' },
      examples: [
        { sense: 'пройти сквозь преграду / сеть', de: 'Der Traffic [[kommt]] nicht [[durch]], die Firewall blockiert ihn.', ru: 'Трафик не проходит — его блокирует файрвол.' },
        { sense: 'дозвониться', de: 'Bei der Arztpraxis [[komme]] ich telefonisch einfach nicht [[durch]].', ru: 'До врачебного кабинета я по телефону вообще не могу дозвониться.' }
      ],
      morph: 'durch-komm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'durchkommen значит «пройти сквозь преграду/трафик», «дозвониться по занятой линии» и разговорное «пройти экзамен / выкарабкаться».',
      meaningExamples: [{ de: 'Der Verkehr kommt nicht durch.', ru: 'Транспорт не проходит.' }, { de: 'telefonisch nicht durchkommen', ru: 'не дозвониться' }],
      note: 'Всегда с sein: ist durchgekommen.'
    },
    {
      id: 'r-kommen-reinkommen', prefix: 'rein', sep: 'trennbar', stress: 'réinkommen', pos: 'verb',
      transparency: 'transparent',
      de: 'reinkommen', forms: { praes: 'kommt rein', praet: 'kam rein', perf: 'ist reingekommen' },
      ru: 'войти внутрь; поступить (о тикете, алерте, деньгах)',
      parallel: 'ВОйти внутрь',
      examples: [
        { sense: 'войти внутрь', de: '[[Komm]] ruhig [[rein]], die Tür ist offen!', ru: 'Заходи спокойно, дверь открыта!' },
        { sense: 'поступить (о тикете, сообщении)', de: 'Gerade ist ein kritisches Ticket [[reingekommen]].', ru: 'Только что пришёл критический тикет.' }
      ],
      morph: 'rein-komm-en',
      meaningType: 'colloquial',
      meaningExplanation: 'Живая разговорная форма от hereinkommen / hineinkommen: повсеместно звучит в офисе и SOC («Es sind 50 Alerts reingekommen»).',
      meaningExamples: [{ de: 'Komm kurz rein!', ru: 'Зайди на минутку!' }, { de: 'Es kommt gerade ein Anruf rein.', ru: 'Сейчас поступает звонок.' }],
      note: 'В официальных текстах пишут hereinkommen / eingehen («es sind Meldungen eingegangen»).'
    },
    {
      id: 'r-kommen-ankunft', pos: 'noun',
      de: 'Ankunft', article: 'die', plural: 'die Ankünfte',
      transparency: 'transparent',
      ru: 'прибытие, приезд, прилёт',
      examples: [
        { de: 'Die [[Ankunft]] des ICE aus Frankfurt verzögert sich um 15 Minuten.', ru: 'Прибытие поезда ICE из Франкфурта задерживается на 15 минут.' }
      ],
      morph: 'An-kunft',
      note: 'Табло на вокзалах и в аэропортах: «Ankunft» (прибытие) vs «Abfahrt / Abflug» (отправление / вылет). Исторически от ankommen (с чередованием основы kunft).',
      why: {
        confidence: 'high',
        root: 'kommen',
        text: 'Состав: An- + основа -kunft (от глагола kommen).\nПроисхождение: др.-в.-нем. kumft — древнее отглагольное имя от queman («приходить»); тот же элемент -kunft входит в Auskunft («справка»), Zukunft («будущее») и Herkunft («происхождение»).\nПрозрачность: связка -kunft ↔ kommen помогает запомнить целую группу B1-слов.',
        source: 'DWDS (Pfeifer), s.v. Ankunft / kommen',
        evidence: 'Др.-в.-нем. anacumft (от kommen); серия слов на -kunft (Ankunft, Zukunft, Auskunft, Herkunft).'
      }
    },
    {
      id: 'r-kommen-auskunft', pos: 'noun',
      de: 'Auskunft', article: 'die', plural: 'die Auskünfte',
      transparency: 'opaque',
      ru: 'справка, информация; справочное бюро',
      examples: [
        { de: 'Können Sie mir bitte eine kurze [[Auskunft]] zu meinem Antrag geben?', ru: 'Не могли бы вы дать мне короткую справку по моему заявлению?' }
      ],
      morph: 'Aus-kunft',
      note: '«Auskunft geben / erteilen» — дать справку/информацию. По DSGVO «das Auskunftsrecht» — право запросить у компании, какие данные о вас хранятся.'
    },
    {
      id: 'r-kommen-zukunft', pos: 'noun',
      de: 'Zukunft', article: 'die',
      transparency: 'figurative',
      ru: 'будущее',
      examples: [
        { de: 'In [[Zukunft]] sollten wir alle Zugänge automatisch überprüfen.', ru: 'В будущем нам стоит проверять все доступы автоматически.' }
      ],
      morph: 'Zu-kunft',
      note: 'Обычно без мн. ч. «In Zukunft» — в будущем; «zukünftig» — будущий. Буквально «то, что приходит к нам» (zu + kommen).',
      why: {
        confidence: 'high',
        root: 'kommen',
        text: 'Состав: zu- («к») + -kunft (от kommen «приходить»).\nПроисхождение: др.-в.-нем. zuokumft буквально значило «приход, наступление» (ср. лат. adventus) и закрепилось для обозначения грядущего времени — «будущее».\nПрозрачность: образ «того, что грядёт к нам».',
        source: 'DWDS (Pfeifer), s.v. Zukunft',
        evidence: 'Др.-в.-нем. zuokumft «приход, пришествие» (zu- + -kunft от kommen) → «будущее».'
      }
    },
    {
      id: 'r-kommen-einkommen', pos: 'noun',
      de: 'Einkommen', article: 'das', plural: 'die Einkommen',
      transparency: 'transparent',
      ru: 'доход, заработок',
      examples: [
        { de: 'Für die Wohnung braucht man einen Nachweis über das monatliche [[Einkommen]].', ru: 'Для квартиры нужна справка о ежемесячном доходе.' }
      ],
      morph: 'Ein-komm-en',
      note: 'Субстантивированный инфинитив от einkommen («поступать внутрь» → «поступающий доход»), поэтому всегда среднего рода (das). «Die Einkommensteuer» — подоходный налог.'
    }
  ]
});
