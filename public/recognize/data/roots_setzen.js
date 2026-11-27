/* ROOT: setzen. Learning content in Russian. */
GT.registerRoot({
  id: 'setzen', verb: 'setzen', ru: 'сажать; ставить; (sich) садиться',
  words: [
    {
      id: 'r-setzen-setzen', base: true, pos: 'verb',
      de: 'setzen', forms: { praes: 'setzt', praet: 'setzte', perf: 'hat gesetzt' }, gov: '+ Akk.; sich setzen',
      ru: '(sich setzen) садиться; делать ставку на (auf + Akk.); ставить, помещать (цель, границу, предмет)',
      examples: [
        { sense: 'садиться (sich setzen)', de: 'Bitte [[setzen]] Sie sich, der Arzt kommt gleich.', ru: 'Пожалуйста, садитесь, врач сейчас придёт.' },
        { sense: 'делать ставку на (auf + Akk.)', de: 'Unsere Firma [[setzt]] voll auf Zero-Trust-Sicherheit.', ru: 'Наша компания делает полную ставку на безопасность Zero Trust.' }
      ],
      morph: 'setz-en',
      meaningType: 'polysemous',
      meaningExplanation: 'sich setzen значит «садиться», setzen auf + Akk. — «делать ставку на что-то, полагаться на», а с прямым объектом — «ставить, помещать, устанавливать» (ein Ziel / eine Grenze setzen).',
      meaningExamples: [{ de: 'Setzen Sie sich bitte.', ru: 'Присаживайтесь, пожалуйста.' }, { de: 'Wir setzen auf Zero Trust.', ru: 'Мы делаем ставку на Zero Trust.' }],
      note: 'Слабый глагол (в отличие от сильного sitzen — сидеть). Куда? → Akkusativ: «Ich setze mich auf den Stuhl». Устойчиво: «ein Ziel setzen» (поставить цель), «etw. aufs Spiel setzen» (рисковать чем-то).',
      why: {
        confidence: 'high',
        root: 'setzen',
        text: 'Состав: корневой глагол setz- + -en.\nПроисхождение: древневерхненемецкое setzen — каузативный глагол к sitzen («заставить сидеть», т. е. «посадить»). Индоевропейский корень *sed- родственен русским «сидеть» и «сажать».\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. setzen; Vasmer: сидеть / сажать',
        evidence: 'Др.-в.-нем. setzen < герм. *satjaną (каузатив к sitzen) < и.-е. *sed- (родственно рус. «сажать / сидеть»).'
      }
    },
    {
      id: 'r-setzen-einsetzen', prefix: 'ein', sep: 'trennbar', stress: 'éinsetzen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'einsetzen', forms: { praes: 'setzt ein', praet: 'setzte ein', perf: 'hat eingesetzt' }, gov: '+ Akk.; sich für + Akk.',
      ru: 'использовать, применять; вставлять; (sich einsetzen für) выступать за, вкладываться',
      prefixDrill: { ex: 1, meaning: 1, explain: 'ein- здесь означает «встраивание, установка внутрь» — вставить новую батарею.' },
      examples: [
        { sense: 'использовать, применять (инструмент, метод)', de: 'Für die Analyse [[setzen]] wir ein neues SIEM-Tool [[ein]].', ru: 'Для анализа мы применяем новый SIEM-инструмент.' },
        { sense: 'вставлять (деталь, линзы)', de: 'Der Techniker hat eine neue Batterie [[eingesetzt]].', ru: 'Техник вставил новую батарею.' },
        { sense: 'выступать за, добиваться (sich für + Akk.)', de: 'Der Betriebsrat [[setzt]] sich für bessere Arbeitszeiten [[ein]].', ru: 'Производственный совет выступает за лучший график работы.' }
      ],
      morph: 'ein-setz-en',
      meaningType: 'polysemous',
      meaningExplanation: 'einsetzen имеет три частых значения: «применять инструмент/метод», «вставлять деталь» и sich einsetzen für — «выступать за, добиваться».',
      meaningExamples: [{ de: 'ein neues SIEM einsetzen', ru: 'внедрить и использовать новый SIEM' }, { de: 'neue Batterien einsetzen', ru: 'вставить новые батарейки' }, { de: 'sich für das Team einsetzen', ru: 'вступаться за команду' }],
      note: 'В IT и деловой речи «einsetzen» часто звучит точнее, чем просто «benutzen»: «Welche Tools setzt ihr ein?» Существительное: der Einsatz.'
    },
    {
      id: 'r-setzen-umsetzen', prefix: 'um', sep: 'trennbar', stress: 'úmsetzen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'umsetzen', forms: { praes: 'setzt um', praet: 'setzte um', perf: 'hat umgesetzt' }, gov: '+ Akk.',
      ru: 'реализовать, внедрять (меры, план); пересаживать',
      prefixDrill: { ex: 1, meaning: 0, explain: 'ударная отделяемая um- здесь означает «смена, пересадка» — пересесть на другие места.' },
      examples: [
        { sense: 'реализовать, внедрить (меры, проект)', de: 'Wir müssen die neuen BSI-Vorgaben bis Ende des Jahres [[umsetzen]].', ru: 'Нам нужно внедрить новые требования BSI до конца года.' },
        { sense: 'пересаживать (человека, растение)', de: 'Im Kino mussten wir uns wegen der kaputten Sitze [[umsetzen]].', ru: 'В кино нам пришлось пересесть из-за сломанных кресел.' }
      ],
      morph: 'um-setz-en',
      meaningType: 'polysemous',
      meaningExplanation: 'В работе и IT umsetzen почти всегда значит «реализовать, внедрить (план, меры)», но также сохраняет буквальное значение «пересадить».',
      meaningExamples: [{ de: 'Sicherheitsmaßnahmen umsetzen', ru: 'внедрить меры безопасности' }, { de: 'eine Pflanze in einen größeren Topf umsetzen', ru: 'пересадить растение в горшок побольше' }],
      note: 'Ключевой офисный глагол: «eine Idee / eine Maßnahme / ein Projekt umsetzen» (не путать с «realisieren», которое часто значит «осознать»). Существительное: die Umsetzung.'
    },
    {
      id: 'r-setzen-uebersetzen', prefix: 'über', sep: 'untrennbar', stress: 'übersétzen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'übersetzen', forms: { praes: 'übersetzt', praet: 'übersetzte', perf: 'hat übersetzt' }, gov: '+ Akk.; aus + Dat. in + Akk.',
      ru: 'переводить (с одного языка на другой)',
      parallel: 'ПЕРЕводить',
      prefixDrill: { ex: 0, meaning: 0, explain: 'неотделяемая über- здесь означает «перенос на другую сторону» — перевести текст на другой язык (рус. пере-водить).' },
      examples: [
        { de: 'Kannst du diesen Absatz kurz ins Deutsche [[übersetzen]]?', ru: 'Можешь коротко перевести этот абзац на немецкий?' },
        { de: 'Die Anleitung wurde automatisch [[übersetzt]] und klingt etwas seltsam.', ru: 'Инструкция была переведена автоматически и звучит немного странно.' }
      ],
      morph: 'über-setz-en',
      note: 'Неотделяемый (ударение на -setz-): übersetzte, hat übersetzt (без ge-). Отделяемая пара ǘbersetzen — «переправлять через реку» (см. пары ниже).',
      why: {
        confidence: 'high',
        root: 'setzen',
        text: 'Состав: неотделяемая приставка über- («через») + setzen («переносить, ставить»).\nПроисхождение: в XVI–XVII вв. закрепилось в значении «перенести текст на другой язык» (часто сопоставляют с латинским trānsferre / trādūcere). Русское «пере-водить» использует близкий пространственный образ.\nПрозрачность: переносная — образ переноса «через» границу языка хорошо виден.',
        source: 'DWDS (Pfeifer), s.v. übersetzen',
        evidence: 'Неотделяемое übersetzen «переводить на другой язык» закрепилось в XVI–XVII вв. (перенос из «переправлять на другую сторону»).'
      }
    },
    {
      id: 'r-setzen-fortsetzen', prefix: 'fort', sep: 'trennbar', stress: 'fórtsetzen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'fortsetzen', forms: { praes: 'setzt fort', praet: 'setzte fort', perf: 'hat fortgesetzt' }, gov: '+ Akk.',
      ru: 'продолжать (дело, лечение, встречу)',
      examples: [
        { de: 'Nach der Pause [[setzen]] wir das Meeting [[fort]].', ru: 'После перерыва мы продолжим встречу.' },
        { de: 'Die Behandlung muss noch zwei Wochen [[fortgesetzt]] werden.', ru: 'Лечение нужно продолжать ещё две недели.' }
      ],
      morph: 'fort-setz-en',
      note: 'Более официальный синоним «weitermachen». Существительное: die Fortsetzung — продолжение («Fortsetzung folgt» — продолжение следует).'
    },
    {
      id: 'r-setzen-durchsetzen', prefix: 'durch', sep: 'trennbar', stress: 'dúrchsetzen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'durchsetzen', forms: { praes: 'setzt durch', praet: 'setzte durch', perf: 'hat durchgesetzt' }, gov: '+ Akk.; sich gegen + Akk.',
      ru: 'добиться проведения, отстоять (решение); (sich durchsetzen) утвердиться, победить',
      prefixDrill: { ex: 0, meaning: 0, explain: 'durch- (отделяемая) означает «провести до конца, добиться реализации» — утвердить правило 2FA.' },
      examples: [
        { sense: 'провести, отстоять (решение, правило)', de: 'Die IT-Sicherheit konnte die 2FA-Pflicht im Unternehmen [[durchsetzen]].', ru: 'Отделу ИБ удалось добиться обязательной 2FA в компании.' },
        { sense: 'утвердиться, прижиться (sich durchsetzen)', de: 'Homeoffice hat sich in vielen Branchen [[durchgesetzt]].', ru: 'Удалёнка прижилась во многих отраслях.' }
      ],
      morph: 'durch-setz-en',
      meaningType: 'figurative',
      meaningExplanation: 'Образ «провести насквозь через сопротивление» (durch + setzen): используется для отстаивания решения/правила и утверждения на рынке (sich durchsetzen).',
      meaningExamples: [{ de: 'strenge Passwortregeln durchsetzen', ru: 'добиться соблюдения строгих правил паролей' }, { de: '2FA hat sich überall durchgesetzt.', ru: '2FA утвердилась повсеместно.' }],
      note: '«Sich gegen jdn. durchsetzen» — настоять на своём в споре с кем-то. «Die Durchsetzung» — проведение в жизнь, обеспечение соблюдения.'
    },
    {
      id: 'r-setzen-ersetzen', prefix: 'er', sep: 'untrennbar', stress: 'ersétzen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'ersetzen', forms: { praes: 'ersetzt', praet: 'ersetzte', perf: 'hat ersetzt' }, gov: '+ Akk.; durch + Akk.',
      ru: 'заменять; возмещать (ущерб, расходы)',
      prefixDrill: { ex: 0, meaning: 1, explain: 'er- здесь выражает замену/результат — «заменить старые файрволы новым решением».' },
      examples: [
        { sense: 'заменять (durch + Akk.)', de: 'Wir [[ersetzen]] die alten Firewalls durch ein modernes System.', ru: 'Мы заменяем старые файрволы на современную систему.' },
        { sense: 'возмещать (ущерб, расходы)', de: 'Die Versicherung [[ersetzt]] den gesamten Schaden.', ru: 'Страховая возмещает весь ущерб.' }
      ],
      morph: 'er-setz-en',
      meaningType: 'polysemous',
      meaningExplanation: 'ersetzen значит и «заменять одно другим» (durch + Akk.), и «возмещать ущерб или расходы».',
      meaningExamples: [{ de: 'das alte Passwort ersetzen', ru: 'заменить старый пароль' }, { de: 'Die Versicherung ersetzt den Schaden.', ru: 'Страховка возместит ущерб.' }],
      note: 'Неотделяемый: hat ersetzt. «Der Ersatz» — замена («Ersatzteile» — запчасти, «Schadensersatz» — возмещение ущерба).'
    },
    {
      id: 'r-setzen-besetzen', prefix: 'be', sep: 'untrennbar', stress: 'besétzen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'besetzen', forms: { praes: 'besetzt', praet: 'besetzte', perf: 'hat besetzt' }, gov: '+ Akk.',
      ru: 'занимать (место, должность); (besetzt) занято (место, телефон)',
      prefixDrill: { ex: 0, meaning: 1, explain: 'be- здесь обозначает заполнение места/позиции — «занять вакансию».' },
      examples: [
        { sense: 'закрывать / занимать должность', de: 'Die Stelle im SOC ist noch nicht [[besetzt]].', ru: 'Вакансия в SOC ещё не закрыта.' },
        { sense: 'занять место (в транспорте, зале)', de: 'Entschuldigung, ist dieser Platz noch frei oder schon [[besetzt]]?', ru: 'Извините, это место ещё свободно или уже занято?' }
      ],
      morph: 'be-setz-en',
      meaningType: 'polysemous',
      meaningExplanation: 'besetzen значит «занимать место» (в зале, транспорте; причастие besetzt — «занято») и «закрывать вакансию / занимать должность».',
      meaningExamples: [{ de: 'Ist dieser Platz noch frei oder besetzt?', ru: 'Это место свободно или занято?' }, { de: 'eine offene Stelle neu besetzen', ru: 'закрыть открытую вакансию' }],
      note: '«Es ist besetzt» — линия занята (по телефону) или туалет/место занято. «Eine Stelle neu besetzen» — снова закрыть вакансию.'
    },
    {
      id: 'r-setzen-aufsetzen', prefix: 'auf', sep: 'trennbar', stress: 'áufsetzen', pos: 'verb',
      transparency: 'figurative',
      de: 'aufsetzen', forms: { praes: 'setzt auf', praet: 'setzte auf', perf: 'hat aufgesetzt' }, gov: '+ Akk.',
      ru: 'надевать (очки, шапку); составлять (договор, письмо); (IT) переустанавливать (систему)',
      prefixDrill: { ex: 0, meaning: 2, explain: 'auf- здесь означает «на поверхность, сверху» — надеть очки или шапку сверху.' },
      examples: [
        { sense: 'надевать (очки, шапку)', de: 'Ohne Brille sehe ich nichts, ich muss sie kurz [[aufsetzen]].', ru: 'Без очков ничего не вижу, надо их быстро надеть.' },
        { sense: 'составлять (договор, документ)', de: 'Die Rechtsabteilung [[setzt]] gerade den neuen Vertrag [[auf]].', ru: 'Юридический отдел сейчас составляет новый договор.' },
        { sense: 'разворачивать / переустанавливать систему (IT)', de: 'Nach dem Vorfall mussten wir den Server komplett neu [[aufsetzen]].', ru: 'После инцидента нам пришлось полностью переустановить сервер.' }
      ],
      morph: 'auf-setz-en',
      meaningType: 'polysemous',
      meaningExplanation: 'aufsetzen значит «надевать очки/шапку», «составлять документ/договор» и в IT — «разворачивать или переустанавливать систему с нуля».',
      meaningExamples: [{ de: 'die Brille aufsetzen', ru: 'надеть очки' }, { de: 'einen Vertrag aufsetzen', ru: 'составить договор' }, { de: 'den Server neu aufsetzen', ru: 'переустановить сервер с нуля (IT)' }],
      note: 'В IT «einen Rechner / Server neu aufsetzen» — переустановить ОС с нуля. Также «Wasser aufsetzen» — поставить воду (на плиту).'
    },
    {
      id: 'r-setzen-ansetzen', prefix: 'an', sep: 'trennbar', stress: 'ánsetzen', pos: 'verb',
      transparency: 'figurative',
      de: 'ansetzen', forms: { praes: 'setzt an', praet: 'setzte an', perf: 'hat angesetzt' }, gov: '+ Akk.',
      ru: 'назначать (встречу, срок); начинать, приступать',
      examples: [
        { sense: 'назначать (встречу, совещание)', de: 'Für morgen früh hat der Teamleiter ein kurzes Meeting [[angesetzt]].', ru: 'На завтрашнее утро тимлид назначил короткую встречу.' },
        { sense: 'закладывать (время, сумму)', de: 'Für den Test sollten wir mindestens zwei Tage [[ansetzen]].', ru: 'На тестирование стоит заложить минимум два дня.' }
      ],
      morph: 'an-setz-en',
      note: 'Очень частое офисное выражение: «einen Termin / ein Gespräch ansetzen» — назначить встречу.'
    },
    {
      id: 'r-setzen-versetzen', prefix: 'ver', sep: 'untrennbar', stress: 'versétzen', pos: 'verb',
      transparency: 'figurative',
      de: 'versetzen', forms: { praes: 'versetzt', praet: 'versetzte', perf: 'hat versetzt' }, gov: '+ Akk.',
      ru: 'переводить (сотрудника, в другой класс); (разг.) не прийти на встречу, «кинуть»; (sich in jds. Lage versetzen) поставить себя на чьё-то место; переставлять',
      parallel: 'ПЕРЕводить (в другой отдел)',
      prefixDrill: { ex: 0, meaning: 4, explain: 'ver- здесь означает «перемещение в другое место» — перевести сотрудника в другой филиал.' },
      examples: [
        { sense: 'переводить (сотрудника в другой отдел/город)', de: 'Er wurde letztes Jahr in die Filiale nach München [[versetzt]].', ru: 'В прошлом году его перевели в филиал в Мюнхене.' },
        { sense: 'не прийти на встречу, «кинуть» (разг.)', de: 'Er hat mich gestern Abend einfach [[versetzt]] und nicht mal abgesagt.', ru: 'Вчера вечером он просто не пришёл на встречу и даже не отменил.' },
        { sense: 'поставить себя на место (sich in + Akk.)', de: '[[Versetz]] dich mal in meine Lage!', ru: 'Поставь-ка себя на моё место!' }
      ],
      morph: 'ver-setz-en',
      meaningType: 'polysemous',
      meaningExplanation: 'versetzen значит «переводить сотрудника в другой отдел», разговорное «не прийти на встречу (кинуть)» и sich in jdn. versetzen — «поставить себя на место другого».',
      meaningExamples: [{ de: 'in eine andere Abteilung versetzt werden', ru: 'быть переведённым в другой отдел' }, { de: 'Er hat mich gestern versetzt.', ru: 'Он вчера не пришёл на встречу со мной (разг.).' }],
      note: 'Неотделяемый: hat versetzt. «Sich in jds. Lage versetzen» — войти в чьё-то положение.'
    },
    {
      id: 'r-setzen-absetzen', prefix: 'ab', sep: 'trennbar', stress: 'ábsetzen', pos: 'verb',
      transparency: 'figurative',
      de: 'absetzen', forms: { praes: 'setzt ab', praet: 'setzte ab', perf: 'hat abgesetzt' }, gov: '+ Akk.',
      ru: 'снимать (очки, шапку); списывать с налогов; отменять (лекарство)',
      prefixDrill: { ex: 0, meaning: 1, explain: 'ab- здесь означает «вниз, с поверхности» — снять очки (антоним aufsetzen).' },
      examples: [
        { sense: 'снимать (очки, головной убор)', de: 'Er hat die Brille [[abgesetzt]] und sich die Augen gerieben.', ru: 'Он снял очки и потёр глаза.' },
        { sense: 'списывать с налогов (von der Steuer)', de: 'Den neuen Schreibtisch fürs Homeoffice kann ich von der Steuer [[absetzen]].', ru: 'Новый письменный стол для хоумофиса я могу списать с налогов.' },
        { sense: 'отменять (лекарство)', de: 'Bitte [[setzen]] Sie das Antibiotikum nicht ohne Arzt [[ab]].', ru: 'Пожалуйста, не отменяйте антибиотик без врача.' }
      ],
      morph: 'ab-setz-en',
      meaningType: 'polysemous',
      meaningExplanation: 'У absetzen три самостоятельных значения: «снимать очки/шапку», «списывать с налогов» (von der Steuer) и «отменять приём лекарства».',
      meaningExamples: [{ de: 'das Headset absetzen', ru: 'снять гарнитуру' }, { de: 'den Laptop von der Steuer absetzen', ru: 'списать ноутбук с налогов' }, { de: 'ein Medikament absetzen', ru: 'отменить лекарство' }],
      note: 'В Германии «von der Steuer absetzen» (списать в налоговой декларации) — одно из самых нужных бытовых выражений.'
    },
    {
      id: 'r-setzen-satz', pos: 'noun',
      de: 'Satz', article: 'der', plural: 'die Sätze',
      ru: 'предложение (в языке); набор, комплект; ставка (процентная)',
      examples: [
        { sense: 'предложение (в тексте)', de: 'Diesen [[Satz]] verstehe ich nicht ganz.', ru: 'Это предложение я не совсем понимаю.' },
        { sense: 'набор, комплект', de: 'Für das Auto brauche ich einen neuen [[Satz]] Winterreifen.', ru: 'Для машины мне нужен новый комплект зимней резины.' }
      ],
      morph: 'Satz',
      meaningType: 'polysemous',
      meaningExplanation: 'der Satz имеет три разных словарных значения: грамматическое «предложение», «набор/комплект» (напр. ключей) и «процентная ставка».',
      meaningExamples: [{ de: 'ein kurzer Satz auf Deutsch', ru: 'короткое предложение на немецком' }, { de: 'ein neuer Satz Schlüssel', ru: 'новый комплект ключей' }],
      note: 'Сюда же: «der Datensatz» — запись в базе данных, датасет; «der Absatz» — абзац; «der Gegensatz» — противоположность.'
    },
    {
      id: 'r-setzen-einsatz', pos: 'noun', transparency: 'figurative',
      de: 'Einsatz', article: 'der', plural: 'die Einsätze',
      ru: 'применение, использование; выезд (полиции, пожарных); самоотдача',
      examples: [
        { sense: 'применение, эксплуатация', de: 'Das neue Monitoring-System ist seit Januar im [[Einsatz]].', ru: 'Новая система мониторинга используется с января.' },
        { sense: 'выезд на вызов (экстренных служб)', de: 'Die Feuerwehr war die ganze Nacht im [[Einsatz]].', ru: 'Пожарные всю ночь были на выездах.' }
      ],
      morph: 'Ein-satz',
      meaningType: 'polysemous',
      meaningExplanation: 'der Einsatz обозначает «применение/эксплуатацию» (im Einsatz sein), «выезд экстренных служб» и «личную самоотдачу».',
      meaningExamples: [{ de: 'Das Tool ist seit einem Jahr im Einsatz.', ru: 'Инструмент используется уже год.' }, { de: 'ein Einsatz der Feuerwehr', ru: 'выезд пожарных' }],
      note: 'Очень частое сочетание: «im Einsatz sein» — быть в работе / в эксплуатации.'
    },
    {
      id: 'r-setzen-umsetzung', pos: 'noun', transparency: 'figurative',
      de: 'Umsetzung', article: 'die', plural: 'die Umsetzungen',
      ru: 'реализация, внедрение',
      examples: [
        { de: 'Die [[Umsetzung]] der neuen Sicherheitsrichtlinie dauert drei Monate.', ru: 'Внедрение новой политики безопасности займёт три месяца.' },
        { de: 'Der Plan ist gut, aber bei der [[Umsetzung]] fehlen uns Ressourcen.', ru: 'План хороший, но на реализацию нам не хватает ресурсов.' }
      ],
      morph: 'Um-setz-ung',
      note: 'Стандартное слово в рабочих проектах и аудитах: «in der Umsetzung sein» — находиться на этапе реализации.'
    },
    {
      id: 'r-setzen-gesetz', pos: 'noun', transparency: 'opaque',
      de: 'Gesetz', article: 'das', plural: 'die Gesetze',
      ru: 'закон',
      examples: [
        { de: 'Das neue [[Gesetz]] zur Cybersicherheit tritt im Herbst in Kraft.', ru: 'Новый закон о кибербезопасности вступает в силу осенью.' },
        { de: 'Nach deutschem [[Gesetz]] müssen Datenpannen gemeldet werden.', ru: 'По немецкому закону об утечках данных нужно сообщать.' }
      ],
      morph: 'Ge-setz',
      note: '«Ein Gesetz tritt in Kraft» — закон вступает в силу; «gegen das Gesetz verstoßen» — нарушить закон. «Gesetzlich versichert» — с государственной страховкой.',
      why: {
        confidence: 'high',
        root: 'setzen',
        text: 'Состав: приставка Ge- + основа глагола setzen.\nПроисхождение: средневерхненемецкое gesetze — буквально «установленное, положенное» (от setzen «ставить, устанавливать»). Похожая внутренняя форма у русского «постановление» (от «ставить»).\nПрозрачность: непрозрачное — современное setzen не подсказывает значение «закон», хотя исторически это прямое производное.',
        source: 'DWDS (Pfeifer), s.v. Gesetz',
        evidence: 'Ср.-в.-нем. gesetze «установленное, предписание», отглагольное образование от setzen.'
      }
    }
  ],
  pairs: [
    {
      a: { stress: 'ǘbersetzen', sep: 'trennbar', ru: 'переправлять(ся) на другой берег', ex: { de: 'Die Fähre [[setzt]] jede halbe Stunde auf die Insel [[über]].', ru: 'Паром переправляется на остров каждые полчаса.' } },
      b: { stress: 'übersétzen', sep: 'untrennbar', ru: 'переводить на другой язык', ex: { de: 'Ich habe die E-Mail ins Englische [[übersetzt]].', ru: 'Я перевёл письмо на английский.' } }
    }
  ]
});
