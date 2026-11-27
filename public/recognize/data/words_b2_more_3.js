/* German B2 discussion and everyday vocabulary. */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function W(id, o, note) {
    o.id = 'b2-m3-' + id;
    o.level = 'b2';
    if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; }
    return o;
  }
  function N(id, article, de, plural, ru, en, e, note) {
    return W(id, { pos: 'noun', de: de, article: article, plural: plural || undefined, ru: ru, en: en, examples: [e] }, note);
  }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('b2_psyche', [
    N('selbstachtung', 'die', 'Selbstachtung', '', 'самоуважение', 'self-respect',
      ex('Ein klares Nein kann helfen, die eigene [[Selbstachtung]] zu bewahren.', 'Чёткое «нет» может помочь сохранить самоуважение.', 'A clear “no” can help you keep your self-respect.')),
    N('rueckhalt', 'der', 'Rückhalt', '', 'поддержка, опора', 'backing, support',
      ex('Der [[Rückhalt]] ihrer Freunde half ihr durch die schwierigen Wochen.', 'Поддержка друзей помогла ей пережить те трудные недели.', 'Her friends’ support helped her through those difficult weeks.')),
    N('selbstbild', 'das', 'Selbstbild', 'die Selbstbilder', 'представление о себе', 'self-image',
      ex('Der berufliche Neuanfang veränderte ihr [[Selbstbild]] stärker, als sie erwartet hatte.', 'Смена профессии изменила её представление о себе сильнее, чем она ожидала.', 'Changing careers altered her self-image more than she had expected.')),
    N('erwartungsdruck', 'der', 'Erwartungsdruck', '', 'давление ожиданий', 'pressure to meet expectations',
      ex('Vor großen Wettbewerben spürte sie den [[Erwartungsdruck]] besonders deutlich.', 'Перед крупными соревнованиями она особенно остро ощущала давление ожиданий.', 'Before major competitions, she felt the pressure to meet expectations particularly strongly.')),
    N('verunsicherung', 'die', 'Verunsicherung', '', 'неуверенность', 'loss of confidence',
      ex('Die widersprüchlichen Rückmeldungen lösten bei den neuen Mitarbeitern [[Verunsicherung]] aus.', 'Противоречивые отзывы вызвали у новых сотрудников неуверенность в себе.', 'The conflicting feedback caused a loss of confidence among the new employees.'))
  ]);

  reg('b2_medien', [
    N('gegendarstellung', 'die', 'Gegendarstellung', 'die Gegendarstellungen', 'опровержение (по требованию затронутой стороны)', 'counterstatement, right of reply',
      ex('Die Redaktion veröffentlichte am nächsten Tag eine [[Gegendarstellung]] der Betroffenen.', 'На следующий день редакция опубликовала опровержение пострадавшей стороны.', 'The following day, the editors published a counterstatement from those affected.')),
    N('quellenangabe', 'die', 'Quellenangabe', 'die Quellenangaben', 'ссылка на источник', 'source reference',
      ex('Ohne [[Quellenangabe]] lässt sich die Zahl im Beitrag schwer überprüfen.', 'Без ссылки на источник цифру в статье трудно проверить.', 'Without a source reference, the figure in the article is difficult to verify.')),
    N('leserschaft', 'die', 'Leserschaft', '', 'читательская аудитория', 'readership',
      ex('Die Redaktion wollte mehr über die Erwartungen ihrer [[Leserschaft]] erfahren.', 'Редакция хотела лучше понять ожидания своей читательской аудитории.', 'The editors wanted to learn more about what their readership expected.')),
    N('bildunterschrift', 'die', 'Bildunterschrift', 'die Bildunterschriften', 'подпись к фотографии', 'caption',
      ex('Erst die [[Bildunterschrift]] erklärte, wann und wo das Foto entstanden war.', 'Только подпись к фотографии поясняла, где и когда сделали снимок.', 'Only the caption explained when and where the photograph had been taken.')),
    N('sendezeit', 'die', 'Sendezeit', 'die Sendezeiten', 'эфирное время', 'airtime',
      ex('Für die Wahldebatte stellte der Sender zusätzliche [[Sendezeit]] zur Verfügung.', 'Для предвыборных дебатов телеканал выделил дополнительное эфирное время.', 'The broadcaster made extra airtime available for the election debate.'))
  ]);

  reg('b2_umwelt', [
    N('bodenqualitaet', 'die', 'Bodenqualität', '', 'качество почвы', 'soil quality',
      ex('Auf diesen Feldern hat sich die [[Bodenqualität]] in zehn Jahren verbessert.', 'За десять лет качество почвы на этих полях улучшилось.', 'The soil quality in these fields has improved over the past decade.')),
    N('mehrwegsystem', 'das', 'Mehrwegsystem', 'die Mehrwegsysteme', 'система повторного использования', 'reuse scheme',
      ex('Drei Cafés testen gemeinsam ein [[Mehrwegsystem]] für ihre Kaffeebecher.', 'Три кафе тестируют общую систему повторного использования стаканчиков для кофе.', 'Three cafés are testing a shared reuse scheme for their coffee cups.')),
    N('verschwendung', 'die', 'Verschwendung', '', 'расточительство, напрасная трата', 'waste, wastefulness',
      ex('Kleinere Portionen könnten die [[Verschwendung]] von Lebensmitteln in der Kantine verringern.', 'Порции поменьше могли бы сократить потери продуктов в столовой.', 'Smaller portions could reduce food waste in the canteen.')),
    N('lebensraum', 'der', 'Lebensraum', 'die Lebensräume', 'среда обитания', 'habitat',
      ex('Die neue Straße würde den [[Lebensraum]] vieler Tiere zerschneiden.', 'Новая дорога разрезала бы среду обитания многих животных.', 'The new road would cut through the habitat of many animals.')),
    N('duerre', 'die', 'Dürre', 'die Dürren', 'засуха', 'drought',
      ex('Nach Monaten der [[Dürre]] führte der Fluss kaum noch Wasser.', 'После нескольких месяцев засухи в реке почти не осталось воды.', 'After months of drought, there was hardly any water left in the river.'))
  ]);

  reg('b2_wirtschaft', [
    N('preisvergleich', 'der', 'Preisvergleich', 'die Preisvergleiche', 'сравнение цен', 'price comparison',
      ex('Ein genauer [[Preisvergleich]] lohnt sich besonders bei langfristigen Verträgen.', 'При заключении долгосрочных договоров особенно полезно тщательное сравнение цен.', 'A careful price comparison is especially worthwhile with long-term contracts.')),
    N('absatz', 'der', 'Absatz', '', 'сбыт, объём продаж', 'sales',
      ex('Trotz niedrigerer Preise ging der [[Absatz]] im letzten Quartal zurück.', 'Несмотря на снижение цен, сбыт в последнем квартале упал.', 'Despite lower prices, sales fell in the last quarter.'),
      ['В значении «сбыт» обычно без мн. ч. Другие значения: «абзац» (die Absätze) и «каблук».', 'In the sense “sales” usually singular. Other meanings: “paragraph” (pl. die Absätze) and “heel”.']),
    N('preisschwankung', 'die', 'Preisschwankung', 'die Preisschwankungen', 'колебание цен', 'price fluctuation',
      ex('Jede größere [[Preisschwankung]] wirkt sich auf die Planung kleiner Betriebe aus.', 'Любое значительное колебание цен влияет на планы небольших предприятий.', 'Any major price fluctuation affects the way small businesses plan ahead.')),
    N('ruecklage', 'die', 'Rücklage', 'die Rücklagen', 'денежный резерв', 'financial reserve',
      ex('Für unerwartete Reparaturen braucht unser Betrieb eine größere [[Rücklage]].', 'Для неожиданного ремонта нашему предприятию нужен больший денежный резерв.', 'Our business needs a larger financial reserve for unexpected repairs.')),
    N('umsatzrueckgang', 'der', 'Umsatzrückgang', 'die Umsatzrückgänge', 'снижение выручки', 'drop in turnover',
      ex('Der [[Umsatzrückgang]] im Winter zwang das Geschäft zu kürzeren Öffnungszeiten.', 'Зимнее снижение выручки заставило магазин сократить часы работы.', 'The winter drop in turnover forced the shop to shorten its opening hours.'))
  ]);

  reg('b2_gesellschaft', [
    N('wahlkreis', 'der', 'Wahlkreis', 'die Wahlkreise', 'избирательный округ', 'constituency',
      ex('Mehrere Kandidatinnen aus unserem [[Wahlkreis]] stellten sich gestern den Fragen der Jugendlichen.', 'Вчера несколько кандидаток из нашего избирательного округа ответили на вопросы молодёжи.', 'Several candidates from our constituency answered young people’s questions yesterday.')),
    N('stimmzettel', 'der', 'Stimmzettel', 'die Stimmzettel', 'избирательный бюллетень', 'ballot paper',
      ex('Auf dem [[Stimmzettel]] standen diesmal mehr Namen als bei der letzten Wahl.', 'В избирательном бюллетене оказалось больше имён, чем на прошлых выборах.', 'There were more names on the ballot paper than at the previous election.')),
    N('sitzverteilung', 'die', 'Sitzverteilung', 'die Sitzverteilungen', 'распределение мест', 'allocation of seats',
      ex('Das vorläufige Ergebnis änderte die [[Sitzverteilung]] im Gemeinderat nur geringfügig.', 'Предварительный результат лишь незначительно изменил распределение мест в совете.', 'The provisional result changed the allocation of seats on the council only slightly.')),
    N('wahlversprechen', 'das', 'Wahlversprechen', 'die Wahlversprechen', 'предвыборное обещание', 'election pledge',
      ex('Viele erinnerten den Bürgermeister an sein [[Wahlversprechen]] zum öffentlichen Nahverkehr.', 'Многие жители напомнили мэру о его предвыборном обещании насчёт транспорта.', 'Many residents reminded the mayor of his election pledge on public transport.')),
    N('buergerbefragung', 'die', 'Bürgerbefragung', 'die Bürgerbefragungen', 'опрос жителей', 'residents’ survey',
      ex('Eine [[Bürgerbefragung]] soll zeigen, welche Busverbindungen im Viertel besonders fehlen.', 'Опрос жителей должен показать, каких автобусных маршрутов особенно не хватает району.', 'A residents’ survey is meant to show which bus connections the neighbourhood is missing most.'))
  ]);

  reg('b2_bildung', [
    N('wissensluecke', 'die', 'Wissenslücke', 'die Wissenslücken', 'пробел в знаниях', 'knowledge gap',
      ex('Beim Erklären der Aufgabe bemerkte ich eine eigene [[Wissenslücke]].', 'Объясняя задание, я заметил у себя пробел в знаниях.', 'While explaining the task, I noticed a knowledge gap of my own.')),
    N('wahlfach', 'das', 'Wahlfach', 'die Wahlfächer', 'предмет по выбору', 'optional subject',
      ex('Ab dem zweiten Semester können Studierende Fotografie als [[Wahlfach]] belegen.', 'Со второго семестра студенты могут изучать фотографию как предмет по выбору.', 'From the second semester, students can take photography as an optional subject.')),
    N('anwesenheitspflicht', 'die', 'Anwesenheitspflicht', '', 'обязательное посещение', 'compulsory attendance',
      ex('In diesem praktischen Kurs gilt [[Anwesenheitspflicht]] für alle Teilnehmenden.', 'В этом практическом курсе для всех участников предусмотрено обязательное посещение.', 'This practical course requires compulsory attendance from everyone who enrols.')),
    N('pruefungsordnung', 'die', 'Prüfungsordnung', 'die Prüfungsordnungen', 'правила проведения экзаменов', 'examination regulations',
      ex('In der [[Prüfungsordnung]] steht, wie oft eine Prüfung wiederholt werden darf.', 'В правилах проведения экзаменов указано, сколько раз допускается пересдача.', 'The examination regulations explain how often students may resit an exam.')),
    N('pflichtmodul', 'das', 'Pflichtmodul', 'die Pflichtmodule', 'обязательный модуль', 'compulsory module',
      ex('Dieses [[Pflichtmodul]] müssen alle Studierenden vor dem ersten Praktikum abschließen.', 'Все студенты должны завершить этот обязательный модуль до первой практики.', 'All students must complete this compulsory module before their first placement.'))
  ]);

  reg('b2_wohnen', [
    N('staffelmiete', 'die', 'Staffelmiete', 'die Staffelmieten', 'ступенчатая арендная плата', 'stepped rent',
      ex('Bei der [[Staffelmiete]] stehen die späteren Erhöhungen bereits im Vertrag.', 'При ступенчатой арендной плате будущие повышения уже прописаны в договоре.', 'With stepped rent, future increases are already written into the contract.')),
    N('uebergabeprotokoll', 'das', 'Übergabeprotokoll', 'die Übergabeprotokolle', 'акт приёма-передачи', 'handover report',
      ex('Die Kratzer im Parkett wurden vor dem Einzug im [[Übergabeprotokoll]] festgehalten.', 'Перед въездом царапины на паркете зафиксировали в акте приёма-передачи.', 'The scratches on the parquet floor were recorded in the handover report before the move.')),
    N('leerstand', 'der', 'Leerstand', '', 'пустующее жильё, простой помещений', 'vacancy, empty properties',
      ex('Trotz hoher Nachfrage gibt es in der Innenstadt noch immer [[Leerstand]].', 'Несмотря на высокий спрос, в центре всё ещё пустуют квартиры.', 'Despite high demand, there are still empty properties in the city centre.')),
    N('mietrueckstand', 'der', 'Mietrückstand', 'die Mietrückstände', 'задолженность по аренде', 'rent arrears',
      ex('Wegen eines Bankfehlers entstand ein [[Mietrückstand]], den wir sofort ausglichen.', 'Из-за ошибки банка возникла задолженность по аренде, которую мы сразу погасили.', 'A banking error left us in rent arrears, which we settled immediately.')),
    N('hausverwaltung', 'die', 'Hausverwaltung', 'die Hausverwaltungen', 'управляющая организация', 'property management company',
      ex('Die [[Hausverwaltung]] informiert alle Parteien schriftlich über den geplanten Heizungstausch.', 'Управляющая организация письменно сообщает жильцам о плановой замене отопления.', 'The property management company is writing to all tenants about the planned heating replacement.'))
  ]);

  reg('b2_beziehungen', [
    N('aussprache', 'die', 'Aussprache', 'die Aussprachen', 'откровенный разговор, выяснение отношений', 'heart-to-heart, talk to clear the air',
      ex('Nach einer langen [[Aussprache]] verstanden beide besser, was den anderen verletzt hatte.', 'После долгого откровенного разговора оба лучше поняли, что задело другого.', 'After a long heart-to-heart, both understood better what had hurt the other.'),
      ['Не путать с Aussprache «произношение». Здесь — разговор, чтобы прояснить конфликт: sich aussprechen.', 'Not to be confused with Aussprache “pronunciation”. Here: a talk to clear the air (sich aussprechen).']),
    N('wertschaetzung', 'die', 'Wertschätzung', '', 'признание, уважительное отношение', 'appreciation, esteem',
      ex('Für sie zeigt sich [[Wertschätzung]] vor allem darin, dass jemand aufmerksam zuhört.', 'Для неё уважительное отношение проявляется прежде всего в умении внимательно слушать.', 'For her, appreciation shows above all when someone listens carefully.')),
    N('kraenkung', 'die', 'Kränkung', 'die Kränkungen', 'обида, оскорбление', 'slight, hurt feelings',
      ex('Erst später begriff er, welche [[Kränkung]] seine Bemerkung für sie gewesen war.', 'Лишь позже он понял, какую обиду нанесли ей его слова.', 'Only later did he realise how much his remark had hurt her.')),
    N('versoehnung', 'die', 'Versöhnung', 'die Versöhnungen', 'примирение', 'reconciliation',
      ex('Der erste Schritt zur [[Versöhnung]] war eine kurze handgeschriebene Nachricht.', 'Первым шагом к примирению стала короткая записка, написанная от руки.', 'The first step towards reconciliation was a short handwritten note.')),
    N('gespraechsbereitschaft', 'die', 'Gesprächsbereitschaft', '', 'готовность к диалогу', 'willingness to talk',
      ex('Seine ruhige Antwort zeigte zum ersten Mal echte [[Gesprächsbereitschaft]].', 'Его спокойный ответ впервые показал искреннюю готовность к диалогу.', 'For the first time, his calm reply showed real willingness to talk.'))
  ]);

  reg('b2_wissenschaft', [
    N('messung', 'die', 'Messung', 'die Messungen', 'измерение', 'measurement',
      ex('Die zweite [[Messung]] ergab trotz gleicher Bedingungen einen etwas höheren Wert.', 'При тех же условиях второе измерение дало чуть более высокое значение.', 'Despite identical conditions, the second measurement gave a slightly higher value.')),
    N('fehlerquelle', 'die', 'Fehlerquelle', 'die Fehlerquellen', 'источник ошибки', 'source of error',
      ex('Ein schlecht eingestellter Sensor erwies sich als wichtigste [[Fehlerquelle]].', 'Основным источником ошибки оказался плохо настроенный датчик.', 'A poorly adjusted sensor proved to be the main source of error.')),
    N('vergleichsgruppe', 'die', 'Vergleichsgruppe', 'die Vergleichsgruppen', 'группа сравнения', 'comparison group',
      ex('Die [[Vergleichsgruppe]] bearbeitete dieselben Aufgaben ohne Hilfe der neuen Software.', 'Группа сравнения выполняла те же задания без новой программы.', 'The comparison group completed the same tasks without using the new software.')),
    N('versuchsaufbau', 'der', 'Versuchsaufbau', 'die Versuchsaufbauten', 'схема эксперимента', 'experimental setup',
      ex('Die Zeichnung zeigt den [[Versuchsaufbau]] vor dem ersten Durchlauf im Labor.', 'Рисунок показывает схему эксперимента перед первым запуском в лаборатории.', 'The diagram shows the experimental setup before the first laboratory run.')),
    N('messreihe', 'die', 'Messreihe', 'die Messreihen', 'серия измерений', 'series of measurements',
      ex('Eine längere [[Messreihe]] könnte zeigen, ob der Unterschied bestehen bleibt.', 'Более длительная серия измерений поможет понять, сохраняется ли различие.', 'A longer series of measurements could show whether the difference persists.'))
  ]);

  reg('b2_recht', [
    N('geltungsbereich', 'der', 'Geltungsbereich', 'die Geltungsbereiche', 'сфера применения', 'scope of application',
      ex('Der erste Absatz beschreibt den räumlichen [[Geltungsbereich]] der neuen Regelung.', 'Первый абзац описывает территориальную сферу применения нового правила.', 'The first paragraph describes the geographical scope of application of the new rule.')),
    N('rechtsgrundlage', 'die', 'Rechtsgrundlage', 'die Rechtsgrundlagen', 'правовое основание', 'legal basis',
      ex('Das Schreiben nennt die genaue [[Rechtsgrundlage]] für die Entscheidung des Amtes.', 'В письме указано точное правовое основание для решения ведомства.', 'The letter states the precise legal basis for the authority’s decision.')),
    N('einspruchsfrist', 'die', 'Einspruchsfrist', 'die Einspruchsfristen', 'срок подачи возражений', 'deadline for objections',
      ex('Den letzten Tag der [[Einspruchsfrist]] trug sie sofort in ihren Kalender ein.', 'Она сразу отметила в календаре последний день срока подачи возражений.', 'She immediately put the last day of the objection period in her diary.')),
    N('anhoerung', 'die', 'Anhörung', 'die Anhörungen', 'слушание', 'hearing',
      ex('Bei der [[Anhörung]] konnte sie ihre Sicht der Ereignisse ausführlich schildern.', 'На слушании она смогла подробно изложить свою версию событий.', 'At the hearing, she could give a full account of how she saw events.')),
    N('rechtsanspruch', 'der', 'Rechtsanspruch', 'die Rechtsansprüche', 'законное право (на что-л.)', 'legal entitlement',
      ex('Die Beratungsstelle prüft, ob in diesem Fall ein [[Rechtsanspruch]] besteht.', 'Консультационный центр проверяет, есть ли в этом случае право, закреплённое законом.', 'The advice centre is checking whether a legal entitlement exists in this case.'),
      ['Управление: Rechtsanspruch auf + Akk. — einen Rechtsanspruch auf einen Kitaplatz haben.', 'Pattern: Rechtsanspruch auf + Akk. — einen Rechtsanspruch auf einen Kitaplatz haben (a legal entitlement to a nursery place).'])
  ]);

  reg('b2_gesundheit', [
    N('nachsorge', 'die', 'Nachsorge', '', 'последующее наблюдение', 'follow-up care',
      ex('Nach der Behandlung vereinbarte die Klinik mehrere Termine zur [[Nachsorge]].', 'После лечения клиника назначила несколько визитов для последующего наблюдения.', 'After the treatment, the clinic arranged several appointments for follow-up care.')),
    N('pflegebedarf', 'der', 'Pflegebedarf', '', 'потребность в уходе', 'care needs',
      ex('Beim Hausbesuch wurde der aktuelle [[Pflegebedarf]] meines Großvaters besprochen.', 'Во время визита на дом обсуждали дедушкину потребность в уходе.', 'My grandfather’s current care needs were discussed during the home visit.')),
    N('zweitmeinung', 'die', 'Zweitmeinung', 'die Zweitmeinungen', 'второе мнение', 'second opinion',
      ex('Vor der Entscheidung über den Eingriff wollte sie eine [[Zweitmeinung]] einholen.', 'Прежде чем решиться на операцию, она захотела получить второе мнение.', 'She wanted a second opinion before deciding whether to have the procedure.')),
    N('therapieplatz', 'der', 'Therapieplatz', 'die Therapieplätze', 'место на терапию (у психотерапевта)', 'therapy place',
      ex('Nach mehreren Anrufen fand sie einen freien [[Therapieplatz]] in einer Gruppe.', 'После нескольких звонков она нашла свободное место в терапевтической группе.', 'After several calls, she found a place in a therapy group.')),
    N('versorgungsangebot', 'das', 'Versorgungsangebot', 'die Versorgungsangebote', 'медицинские и социальные услуги', 'care provision',
      ex('Der Bericht vergleicht das [[Versorgungsangebot]] für ältere Menschen in drei Regionen.', 'Отчёт сравнивает медицинские и социальные услуги для пожилых людей в трёх регионах.', 'The report compares care provision for older people across three regions.'))
  ]);

  reg('b2_reisen', [
    N('ersatzverkehr', 'der', 'Ersatzverkehr', '', 'замещающий транспорт (автобусы вместо поезда)', 'rail replacement service',
      ex('Während der Bauarbeiten verbindet ein [[Ersatzverkehr]] die beiden Bahnhöfe.', 'Во время ремонта между вокзалами ходит заменяющий транспорт.', 'During the works, a replacement service connects the two stations.')),
    N('teilstrecke', 'die', 'Teilstrecke', 'die Teilstrecken', 'участок пути', 'leg of the journey',
      ex('Für die letzte [[Teilstrecke]] mussten wir ein eigenes Ticket kaufen.', 'На последний участок пути нам пришлось купить отдельный билет.', 'We needed a separate ticket for the final leg of the journey.')),
    N('umbuchungsgebuehr', 'die', 'Umbuchungsgebühr', 'die Umbuchungsgebühren', 'сбор за перебронирование', 'rebooking fee',
      ex('Die [[Umbuchungsgebühr]] fiel höher aus als der Preisunterschied zwischen den Flügen.', 'Сбор за перебронирование оказался выше разницы в цене между рейсами.', 'The rebooking fee was higher than the price difference between the flights.')),
    N('reiseabbruch', 'der', 'Reiseabbruch', 'die Reiseabbrüche', 'досрочное прекращение поездки', 'cutting a trip short',
      ex('Den [[Reiseabbruch]] meldeten wir der Versicherung noch am selben Abend.', 'О досрочном прекращении поездки мы сообщили страховщику в тот же вечер.', 'We notified the insurer that evening about cutting our trip short.')),
    N('gepaeckaufbewahrung', 'die', 'Gepäckaufbewahrung', 'die Gepäckaufbewahrungen', 'камера хранения', 'left luggage facility',
      ex('Bis zur Abfahrt ließen wir unsere schweren Taschen in der [[Gepäckaufbewahrung]].', 'До отправления мы оставили тяжёлые сумки в камере хранения.', 'We left our heavy bags at the left luggage facility until departure.'))
  ]);

  reg('b2_kultur', [
    N('besetzung', 'die', 'Besetzung', 'die Besetzungen', 'актёрский состав', 'cast',
      ex('Die neue [[Besetzung]] gab dem bekannten Stück eine überraschend leichte Note.', 'Новый актёрский состав придал знакомой пьесе неожиданную лёгкость.', 'The new cast gave the familiar play a surprisingly light touch.')),
    N('buehnenbild', 'das', 'Bühnenbild', 'die Bühnenbilder', 'декорации', 'stage set',
      ex('Das schlichte [[Bühnenbild]] bestand nur aus drei beweglichen Wänden.', 'Простые декорации состояли всего из трёх подвижных стен.', 'The simple stage set consisted of just three movable walls.')),
    N('lesung', 'die', 'Lesung', 'die Lesungen', 'литературные чтения', 'public reading',
      ex('Nach der [[Lesung]] beantwortete die Autorin Fragen zu ihrem neuen Roman.', 'После литературных чтений писательница ответила на вопросы о новом романе.', 'After the public reading, the author answered questions about her new novel.')),
    N('leihgabe', 'die', 'Leihgabe', 'die Leihgaben', 'временно предоставленный экспонат', 'loaned exhibit',
      ex('Das Porträt bleibt als [[Leihgabe]] bis zum Frühjahr im Stadtmuseum.', 'Портрет останется в городском музее до весны как временно предоставленный экспонат.', 'The portrait will remain at the town museum as a loaned exhibit until spring.')),
    N('spielzeit', 'die', 'Spielzeit', 'die Spielzeiten', 'театральный сезон', 'theatre season',
      ex('In der kommenden [[Spielzeit]] zeigt das Theater erstmals zwei Stücke junger Autorinnen.', 'В следующем театральном сезоне театр впервые покажет две пьесы молодых писательниц.', 'Next season, the theatre will stage two plays by young women writers for the first time.'))
  ]);

  reg('b2_wirtschaft', [
    // telc, Einfach besser! 500, S. 22
    W('wettbewerbsfaehig', { pos: 'adj', de: 'wettbewerbsfähig', ru: 'конкурентоспособный', en: 'competitive',
      examples: [ex('Auch kleinere Anbieter bleiben durch persönliche Beratung und kurze Lieferzeiten [[wettbewerbsfähig]].', 'Даже небольшие поставщики остаются конкурентоспособными благодаря консультациям и быстрой доставке.', 'Even small suppliers remain competitive by offering personal advice and short delivery times.')] }),
    // telc, Einfach besser! 500, S. 19
    W('familienfreundlich', { pos: 'adj', de: 'familienfreundlich', ru: 'удобный для семей', en: 'family-friendly',
      examples: [ex('Viele Gäste finden das Hotel wegen der flexiblen Essenszeiten besonders [[familienfreundlich]].', 'Многие гости считают отель особенно удобным для семей благодаря гибкому времени питания.', 'Many guests find the hotel particularly family-friendly because of its flexible mealtimes.')] }),
    // telc, Einfach besser! 500, S. 36
    W('einbehalten', { pos: 'verb', de: 'einbehalten', forms: { praes: 'behält ein', praet: 'behielt ein', perf: 'hat einbehalten' }, ru: 'удержать', en: 'retain',
      examples: [ex('Der Anbieter darf laut Vertrag einen Teil der Anzahlung [[einbehalten]].', 'По условиям договора поставщик может удержать часть предоплаты.', 'Under the contract, the supplier may retain part of the deposit.')] }),
    // telc, Einfach besser! 500, S. 24
    N('eilzuschlag', 'der', 'Eilzuschlag', 'die Eilzuschläge', 'доплата за срочность', 'express delivery surcharge',
      ex('Erst auf der Rechnung bemerkte sie den [[Eilzuschlag]] für die Lieferung.', 'Только в счёте она заметила доплату за срочность доставки.', 'She only noticed the express delivery surcharge when she saw the invoice.')),
    // telc, Einfach besser! 500, S. 11
    N('preisnachlass', 'der', 'Preisnachlass', 'die Preisnachlässe', 'снижение цены', 'price reduction',
      ex('Wegen der beschädigten Verpackung bot uns der Händler einen [[Preisnachlass]] an.', 'Из-за повреждённой упаковки продавец предложил нам снижение цены.', 'The retailer offered us a price reduction because the packaging was damaged.')),
    // telc, Einfach besser! 500, S. 13
    N('grosshandel', 'der', 'Großhandel', '', 'оптовая торговля', 'wholesale trade',
      ex('Kleine Geschäfte kaufen ihre Ware meist im [[Großhandel]] ein.', 'Небольшие магазины обычно закупают товар у оптовиков.', 'Small shops usually buy their goods from wholesalers.')),
    // telc, Einfach besser! 500, S. 32
    N('jahresbilanz', 'die', 'Jahresbilanz', 'die Jahresbilanzen', 'годовой баланс', 'annual balance sheet',
      ex('Laut [[Jahresbilanz]] besitzt die Genossenschaft inzwischen deutlich mehr eigene Gebäude.', 'Согласно годовому балансу, теперь кооперативу принадлежит заметно больше зданий.', 'According to its annual balance sheet, the cooperative now owns considerably more buildings.')),
    // telc, Einfach besser! 500, S. 26
    N('versandhandel', 'der', 'Versandhandel', '', 'дистанционная торговля (с доставкой)', 'mail order, distance selling',
      ex('Im [[Versandhandel]] erreichen auch kleine Verlage Leser außerhalb der großen Städte.', 'Благодаря дистанционной торговле небольшие издательства находят читателей за пределами крупных городов.', 'Through mail order, even small publishers reach readers outside the major cities.'))
  ]);

  reg('b2_bildung', [
    // telc, Einfach besser! 500, S. 15
    W('absolvieren', { pos: 'verb', de: 'absolvieren', forms: { praes: 'absolviert', praet: 'absolvierte', perf: 'hat absolviert' }, ru: 'пройти', en: 'complete',
      examples: [ex('Vor der Abschlussprüfung müssen alle Teilnehmenden ein Praktikum in einem Betrieb [[absolvieren]].', 'Перед выпускным экзаменом все участники должны пройти практику на предприятии.', 'Before the final exam, all participants must complete a placement with a company.')] }),
    // telc, Einfach besser! 500, S. 3
    N('fachschule', 'die', 'Fachschule', 'die Fachschulen', 'профессиональное училище', 'vocational college',
      ex('An der [[Fachschule]] vertiefte sie ihre Kenntnisse aus der ersten Ausbildung.', 'В профессиональном училище она углубила знания, полученные во время первого обучения.', 'At vocational college, she built on the knowledge gained during her initial training.')),
    // telc, Einfach besser! 500, S. 6
    N('zugangsvoraussetzung', 'die', 'Zugangsvoraussetzung', 'die Zugangsvoraussetzungen', 'требование к поступлению', 'admission requirement',
      ex('Zwei Jahre Berufserfahrung sind eine [[Zugangsvoraussetzung]] für diesen berufsbegleitenden Kurs.', 'Два года стажа — обязательное условие для поступления на этот курс без отрыва от работы.', 'Two years of work experience is an admission requirement for this part-time course.')),
    // telc, Einfach besser! 500, S. 6
    N('bewerbungstraining', 'das', 'Bewerbungstraining', 'die Bewerbungstrainings', 'тренинг по поиску работы', 'job application workshop',
      ex('Beim [[Bewerbungstraining]] übten wir, Lücken im Lebenslauf verständlich zu erklären.', 'На тренинге по поиску работы мы учились понятно объяснять пробелы в резюме.', 'At the job application workshop, we practised explaining gaps in our CVs clearly.')),
    // telc, Einfach besser! 500, S. 3
    N('meisterpruefung', 'die', 'Meisterprüfung', 'die Meisterprüfungen', 'экзамен на звание мастера', 'master craftsperson examination',
      ex('Für die praktische [[Meisterprüfung]] entwarf sie ein Möbelstück mit mehreren beweglichen Teilen.', 'Для практического экзамена на звание мастера она спроектировала предмет мебели с несколькими подвижными деталями.', 'For the practical master craftsperson examination, she designed furniture with several moving parts.'))
  ]);

  reg('b2_beziehungen', [
    // telc, Einfach besser! 500, S. 15
    W('respektlos', { pos: 'adj', de: 'respektlos', ru: 'неуважительный', en: 'disrespectful',
      examples: [ex('Viele empfanden seinen Ton als [[respektlos]], obwohl seine Kritik sachlich begründet war.', 'Многим его тон показался неуважительным, хотя критика была обоснованной.', 'Many found his tone disrespectful, even though his criticism was justified.')] }),
    // telc, Einfach besser! 500, S. 14
    W('duzen', { pos: 'verb', de: 'duzen', forms: { praes: 'duzt', praet: 'duzte', perf: 'hat geduzt' }, ru: 'обращаться на «ты»', en: 'address someone informally (with “du”)',
      examples: [ex('Im Chor [[duzen]] wir auch die Mitglieder, die erst seit gestern dabei sind.', 'В хоре мы на «ты» даже с теми, кто пришёл только вчера.', 'In our choir, we say “du” even to members who only joined yesterday.')] }),
    // telc, Einfach besser! 500, S. 14
    W('siezen', { pos: 'verb', de: 'siezen', forms: { praes: 'siezt', praet: 'siezte', perf: 'hat gesiezt' }, ru: 'обращаться на «вы»', en: 'address someone formally (with “Sie”)',
      examples: [ex('Auch nach vielen Jahren [[siezen]] sich unsere beiden Nachbarn noch immer.', 'Даже спустя много лет наши соседи обращаются друг к другу на «вы».', 'Even after many years, our two neighbours still say “Sie” to each other.')] }),
    // telc, Einfach besser! 500, S. 16
    W('beeindrucken', { pos: 'verb', de: 'beeindrucken', forms: { praes: 'beeindruckt', praet: 'beeindruckte', perf: 'hat beeindruckt' }, ru: 'впечатлить', en: 'impress',
      examples: [ex('Mit ehrlichen Antworten konnte sie selbst ihre kritischsten Zuhörer [[beeindrucken]].', 'Искренними ответами она смогла впечатлить даже самых критичных слушателей.', 'Her honest answers managed to impress even the most critical listeners.')] }),
    // telc, Einfach besser! 500, S. 28
    N('streitgespraech', 'das', 'Streitgespräch', 'die Streitgespräche', 'спор, дискуссия', 'debate, argument',
      ex('Aus der kurzen Nachfrage entwickelte sich ein [[Streitgespräch]] über gegenseitigen Respekt.', 'Короткий уточняющий вопрос перерос в спор о взаимном уважении.', 'The brief follow-up question turned into a debate about mutual respect.'))
  ]);

  reg('b2_medien', [
    // telc, Einfach besser! 500, S. 31
    W('nachvollziehen', { pos: 'verb', de: 'nachvollziehen', forms: { praes: 'vollzieht nach', praet: 'vollzog nach', perf: 'hat nachvollzogen' }, ru: 'понять (логику), проследить', en: 'follow, understand (the reasoning)',
      examples: [ex('Dank der Grafik können Leser die Argumentation im Artikel leichter [[nachvollziehen]].', 'Схема помогает читателям легче проследить ход мысли автора статьи.', 'The diagram helps readers follow the reasoning in the article more easily.')] }),
    // telc, Einfach besser! 500, S. 33
    W('herunterladen', { pos: 'verb', de: 'herunterladen', forms: { praes: 'lädt herunter', praet: 'lud herunter', perf: 'hat heruntergeladen' }, ru: 'скачать', en: 'download',
      examples: [ex('Wer den Bericht [[herunterladen]] möchte, findet den Link unter der Grafik.', 'Те, кто хочет скачать отчёт, найдут ссылку под диаграммой.', 'Readers who want to download the report will find the link below the chart.')] }),
    // telc, Einfach besser! 500, S. 33
    W('navigieren', { pos: 'verb', de: 'navigieren', forms: { praes: 'navigiert', praet: 'navigierte', perf: 'hat navigiert' }, ru: 'ориентироваться', en: 'navigate',
      examples: [ex('Mit den Pfeiltasten können Sie bequem durch das digitale Archiv [[navigieren]].', 'Клавиши со стрелками помогают ориентироваться в цифровом архиве.', 'You can use the arrow keys to navigate the digital archive.')] }),
    // telc, Einfach besser! 500, S. 30
    N('ankuendigung', 'die', 'Ankündigung', 'die Ankündigungen', 'анонс, объявление', 'announcement',
      ex('Die [[Ankündigung]] der neuen Sendereihe erschien zuerst im Newsletter des Museums.', 'Анонс нового цикла передач впервые появился в рассылке музея.', 'The announcement of the new series first appeared in the museum newsletter.')),
    // telc, Einfach besser! 500, S. 30
    N('rueckblick', 'der', 'Rückblick', 'die Rückblicke', 'ретроспектива', 'retrospective',
      ex('Unser [[Rückblick]] zeigt, wie sich die Berichterstattung über das Viertel verändert hat.', 'Наша ретроспектива показывает, как менялось освещение жизни района в прессе.', 'Our retrospective shows how reporting on the neighbourhood has changed over time.'))
  ]);

  reg('b2_recht', [
    // telc, Einfach besser! 500, S. 9
    N('verschwiegenheitspflicht', 'die', 'Verschwiegenheitspflicht', 'die Verschwiegenheitspflichten', 'обязанность сохранять конфиденциальность', 'duty of confidentiality',
      ex('Vor dem ersten Gespräch erklärte die Beraterin, was ihre [[Verschwiegenheitspflicht]] umfasst.', 'Перед первой встречей консультант объяснила, какие сведения она обязана держать в тайне.', 'Before the first meeting, the adviser explained what her duty of confidentiality covered.')),
    // telc, Einfach besser! 500, S. 34
    N('ausnahmegenehmigung', 'die', 'Ausnahmegenehmigung', 'die Ausnahmegenehmigungen', 'специальное разрешение', 'special permit',
      ex('Ohne [[Ausnahmegenehmigung]] dürfen Lieferwagen den Marktplatz während des Festes nicht befahren.', 'Во время праздника фургонам нельзя въезжать на площадь без специального разрешения.', 'Without a special permit, delivery vans cannot enter the market square during the festival.')),
    // telc, Einfach besser! 500, S. 35
    N('werkvertrag', 'der', 'Werkvertrag', 'die Werkverträge', 'договор подряда', 'contract for work',
      ex('Im [[Werkvertrag]] steht genau, welches Ergebnis die Schreinerei liefern soll.', 'В договоре подряда точно описан результат, который должна предоставить столярная мастерская.', 'The contract for work states exactly what the joinery must deliver.'))
  ]);

  reg('b2_gesundheit', [
    // telc, Einfach besser! 500, S. 13
    N('notdienst', 'der', 'Notdienst', 'die Notdienste', 'дежурная служба', 'out-of-hours service',
      ex('Auf der Praxistür stand die aktuelle Telefonnummer des zahnärztlichen [[Notdienstes]].', 'На двери кабинета был указан телефон дежурной стоматологической службы.', 'The current number for the dental out-of-hours service was on the surgery door.')),
    // telc, Einfach besser! 500, S. 12
    N('betaeubungsspritze', 'die', 'Betäubungsspritze', 'die Betäubungsspritzen', 'обезболивающий укол', 'anaesthetic injection',
      ex('Vor der Behandlung erklärte der Zahnarzt, weshalb er eine [[Betäubungsspritze]] empfahl.', 'Перед лечением стоматолог объяснил, почему рекомендует сделать обезболивающий укол.', 'Before treatment, the dentist explained why he recommended an anaesthetic injection.'))
  ]);

  reg('b2_reisen', [
    // telc, Einfach besser! 500, S. 20
    N('parkmoeglichkeit', 'die', 'Parkmöglichkeit', 'die Parkmöglichkeiten', 'вариант парковки', 'parking option',
      ex('Die nächste kostenlose [[Parkmöglichkeit]] liegt zehn Gehminuten vom Tagungshotel entfernt.', 'Ближайший бесплатный вариант парковки находится в десяти минутах ходьбы от отеля.', 'The nearest free parking option is a ten-minute walk from the conference hotel.')),
    // telc, Einfach besser! 500, S. 20
    N('tagungshotel', 'das', 'Tagungshotel', 'die Tagungshotels', 'конгресс-отель', 'conference hotel',
      ex('Das [[Tagungshotel]] schickt allen Gästen eine Wegbeschreibung vom Bahnhof zur Rezeption.', 'Конгресс-отель присылает всем гостям схему пути от вокзала до стойки регистрации.', 'The conference hotel sends all guests directions from the station to reception.'))
  ]);

  reg('b2_wissenschaft', [
    // telc, Einfach besser! 500, S. 22
    W('innovativ', { pos: 'adj', de: 'innovativ', ru: 'инновационный', en: 'innovative',
      examples: [ex('An diesem Gerät ist vor allem die einfache Steuerung mit Gesten [[innovativ]].', 'Самое инновационное в этом устройстве — простое управление жестами.', 'The most innovative feature of this device is its simple gesture control.')] })
  ]);

  reg('b2_bildung', [
    // telc, Einfach besser! 500, S. 2
    N('berufsabschluss', 'der', 'Berufsabschluss', 'die Berufsabschlüsse', 'профессиональная квалификация', 'vocational qualification',
      ex('Für diese Stelle zählt ein anerkannter [[Berufsabschluss]] mehr als die Abschlussnote.', 'Для этой вакансии признанная профессиональная квалификация важнее итоговой оценки.', 'For this position, a recognised vocational qualification matters more than the final grade.')),
    // telc, Einfach besser! 500, S. 3
    N('berufspraktikum', 'das', 'Berufspraktikum', 'die Berufspraktika', 'производственная практика', 'work placement',
      ex('Während ihres [[Berufspraktikums]] durfte sie zum ersten Mal selbst Kunden beraten.', 'Во время производственной практики она впервые самостоятельно консультировала клиентов.', 'During her work placement, she advised customers independently for the first time.')),
    // telc, Einfach besser! 500, S. 5
    N('lehrgang', 'der', 'Lehrgang', 'die Lehrgänge', 'учебный курс', 'training course',
      ex('Der [[Lehrgang]] endet mit einer praktischen Aufgabe in unserer eigenen Werkstatt.', 'Учебный курс завершается практическим заданием в нашей собственной мастерской.', 'The training course ends with a practical task in our own workshop.')),
    // telc, Einfach besser! 500, S. 5
    N('fachwortschatz', 'der', 'Fachwortschatz', '', 'профессиональная лексика', 'specialist vocabulary',
      ex('Für das Praktikum wiederholt sie den [[Fachwortschatz]] rund um elektrische Anlagen.', 'Перед практикой она повторяет профессиональную лексику, связанную с электроустановками.', 'For her placement, she is revising the specialist vocabulary for electrical installations.')),
    // telc, Einfach besser! 500, S. 7
    N('spezialisierung', 'die', 'Spezialisierung', 'die Spezialisierungen', 'специализация', 'specialisation',
      ex('Erst nach dem zweiten Semester entschied sie sich für eine [[Spezialisierung]].', 'Только после второго семестра она выбрала себе специализацию.', 'She only chose a specialisation after completing her second semester.')),
    // telc, Einfach besser! 500, S. 1
    W('handwerklich', { pos: 'adj', de: 'handwerklich', ru: 'ремесленный, связанный с ручным трудом', en: 'manual, craft',
      examples: [ex('In diesem Kurs verbinden wir [[handwerkliche]] Fähigkeiten mit digitalen Entwurfstechniken.', 'На этом курсе мы сочетаем ремесленные навыки с цифровыми методами проектирования.', 'In this course, we combine manual skills with digital design techniques.')] })
  ]);

  reg('b2_wirtschaft', [
    // telc, Einfach besser! 500, S. 1
    N('familienbetrieb', 'der', 'Familienbetrieb', 'die Familienbetriebe', 'семейное предприятие', 'family-run business',
      ex('Der kleine [[Familienbetrieb]] bildet seit drei Generationen Lehrlinge aus der Region aus.', 'Уже три поколения семейное предприятие готовит учеников из своего региона.', 'The small family-run business has trained local apprentices for three generations.')),
    // telc, Einfach besser! 500, S. 35
    N('zeitarbeit', 'die', 'Zeitarbeit', '', 'работа через агентство', 'agency work',
      ex('Durch [[Zeitarbeit]] lernte er mehrere Betriebe kennen, bevor er eine feste Stelle annahm.', 'Благодаря работе через агентство он поработал в разных фирмах до перехода на постоянную работу.', 'Through agency work, he got to know several companies before accepting a permanent job.')),
    // telc, Einfach besser! 500, S. 36
    N('belegschaft', 'die', 'Belegschaft', 'die Belegschaften', 'трудовой коллектив', 'workforce',
      ex('Die gesamte [[Belegschaft]] durfte bei der Planung der neuen Pausenzeiten mitreden.', 'Весь трудовой коллектив мог высказаться при обсуждении нового расписания перерывов.', 'The entire workforce had a say in planning the new break times.')),
    // telc, Einfach besser! 500, S. 9
    N('verguetung', 'die', 'Vergütung', 'die Vergütungen', 'вознаграждение', 'remuneration',
      ex('Vor Beginn des Auftrags vereinbarten beide Seiten eine feste [[Vergütung]].', 'До начала работы обе стороны согласовали фиксированное вознаграждение за заказ.', 'Before work began, both parties agreed on a fixed amount of remuneration.')),
    // telc, Einfach besser! 500, S. 11
    N('mengenrabatt', 'der', 'Mengenrabatt', 'die Mengenrabatte', 'скидка за объём', 'bulk discount',
      ex('Ab fünfzig Exemplaren gewährt die Druckerei unserem Verein einen [[Mengenrabatt]].', 'Типография даёт нашему клубу скидку за объём при заказе от пятидесяти экземпляров.', 'The printer gives our club a bulk discount on orders of fifty copies or more.')),
    // telc, Einfach besser! 500, S. 24
    N('gesamtpreis', 'der', 'Gesamtpreis', 'die Gesamtpreise', 'итоговая стоимость', 'total price',
      ex('Im [[Gesamtpreis]] für die Lieferung ist der Aufbau der Möbel bereits enthalten.', 'В итоговую стоимость доставки уже входит сборка всей мебели.', 'The total price for delivery already includes assembling the furniture.')),
    // telc, Einfach besser! 500, S. 26
    N('zahlungsempfaenger', 'der', 'Zahlungsempfänger', 'die Zahlungsempfänger', 'получатель платежа', 'payee',
      ex('Prüfen Sie bitte, ob der [[Zahlungsempfänger]] mit dem Namen auf der Rechnung übereinstimmt.', 'Проверьте, пожалуйста, совпадает ли имя получателя платежа с именем в счёте.', 'Please check whether the payee matches the name on the invoice.')),
    // telc, Einfach besser! 500, S. 26
    N('bestellnummer', 'die', 'Bestellnummer', 'die Bestellnummern', 'номер заказа', 'order reference',
      ex('Mit Ihrer [[Bestellnummer]] finde ich das fehlende Paket schneller im System.', 'По вашему номеру заказа я быстрее найду пропавшую посылку в системе.', 'I can find the missing parcel faster if you give me your order reference.')),
    // telc, Einfach besser! 500, S. 25
    W('zukunftsorientiert', { pos: 'adj', de: 'zukunftsorientiert', ru: 'ориентированный на будущее', en: 'forward-looking',
      examples: [ex('Der Stadtrat hält das neue Verkehrskonzept wegen der geplanten Radwege für [[zukunftsorientiert]].', 'Городской совет считает транспортный план перспективным благодаря проекту велодорожек.', 'The council considers the new transport plan forward-looking because of its proposed cycle paths.')] })
  ]);

  reg('b2_gesellschaft', [
    // telc, Einfach besser! 500, S. 1
    N('hilfsorganisation', 'die', 'Hilfsorganisation', 'die Hilfsorganisationen', 'гуманитарная организация', 'aid organisation',
      ex('Eine örtliche [[Hilfsorganisation]] verteilt nach dem Hochwasser warme Mahlzeiten an betroffene Familien.', 'После наводнения местная гуманитарная организация раздаёт горячие обеды пострадавшим семьям.', 'After the floods, a local aid organisation is distributing hot meals to affected families.')),
    // telc, Einfach besser! 500, S. 19
    N('betreuungsangebot', 'das', 'Betreuungsangebot', 'die Betreuungsangebote', 'услуги по присмотру за детьми', 'childcare provision',
      ex('Viele Eltern wünschen sich ein bezahlbares [[Betreuungsangebot]] während der Schulferien.', 'Многие родители хотят, чтобы на каникулах были доступны недорогие услуги по присмотру за детьми.', 'Many parents would like affordable childcare provision during the school holidays.')),
    // telc, Einfach besser! 500, S. 36
    N('arbeitslosenversicherung', 'die', 'Arbeitslosenversicherung', 'die Arbeitslosenversicherungen', 'страхование от безработицы', 'unemployment insurance',
      ex('Im Kurs verglichen wir die [[Arbeitslosenversicherung]] in mehreren europäischen Ländern.', 'На занятии мы сравнивали страхование от безработицы в нескольких европейских странах.', 'In class, we compared unemployment insurance systems in several European countries.')),
    // telc, Einfach besser! 500, S. 36
    N('pflegeversicherung', 'die', 'Pflegeversicherung', 'die Pflegeversicherungen', 'страхование на случай потребности в уходе', 'long-term care insurance',
      ex('Eine Mitarbeiterin erklärte im Kurs den Unterschied zwischen Krankenversicherung und [[Pflegeversicherung]].', 'На курсе консультант объяснила разницу между медицинской страховкой и страхованием на случай потребности в уходе.', 'An adviser explained the difference between health insurance and long-term care insurance during the course.'))
  ]);

  reg('b2_gesundheit', [
    // telc, Einfach besser! 500, S. 33
    N('arbeitsunfaehigkeit', 'die', 'Arbeitsunfähigkeit', '', 'нетрудоспособность', 'incapacity for work',
      ex('Die Ärztin besprach mit ihm die voraussichtliche Dauer seiner [[Arbeitsunfähigkeit]].', 'Врач обсудила с ним, сколько предположительно продлится его нетрудоспособность.', 'The doctor discussed with him how long his incapacity for work was likely to last.')),
    // telc, Einfach besser! 500, S. 33
    N('platzwunde', 'die', 'Platzwunde', 'die Platzwunden', 'рваная рана', 'laceration',
      ex('Nach dem Sturz ließ sie die [[Platzwunde]] an der Stirn untersuchen.', 'После падения она попросила врача осмотреть рваную рану на лбу.', 'After the fall, she had the laceration on her forehead examined.')),
    // telc, Einfach besser! 500, S. 33
    N('gehoerschutz', 'der', 'Gehörschutz', '', 'защита слуха', 'hearing protection',
      ex('Beim Rundgang erklärte uns die Technikerin, wo wir [[Gehörschutz]] tragen müssen.', 'Во время экскурсии специалист объяснила, где нам нужна защита слуха.', 'During the tour, the technician explained where we needed to wear hearing protection.'))
  ]);

  reg('b2_reisen', [
    // telc, Einfach besser! 500, S. 19
    N('flugverbindung', 'die', 'Flugverbindung', 'die Flugverbindungen', 'авиасообщение', 'flight connection',
      ex('Seit März gibt es wieder eine direkte [[Flugverbindung]] zwischen den beiden Städten.', 'С марта между двумя городами снова есть прямое авиасообщение.', 'There has been a direct flight connection between the two cities again since March.')),
    // telc, Einfach besser! 500, S. 19
    N('fahrgemeinschaft', 'die', 'Fahrgemeinschaft', 'die Fahrgemeinschaften', 'совместные поездки на одной машине', 'carpool',
      ex('Für die tägliche Strecke zur Fachschule gründeten drei Nachbarn eine [[Fahrgemeinschaft]].', 'Трое соседей организовали совместные поездки на ежедневные занятия в училище.', 'Three neighbours formed a carpool for their daily journey to vocational college.')),
    // telc, Einfach besser! 500, S. 16
    W('reibungslos', { pos: 'adv', de: 'reibungslos', ru: 'без заминок', en: 'smoothly',
      examples: [ex('Dank der klaren Beschilderung verlief der Umstieg am neuen Flughafen völlig [[reibungslos]].', 'Благодаря понятным указателям пересадка в новом аэропорту прошла без заминок.', 'Thanks to the clear signs, our transfer at the new airport went smoothly.')] })
  ]);

  reg('b2_medien', [
    // telc, Einfach besser! 500, S. 32
    N('ausblick', 'der', 'Ausblick', 'die Ausblicke', 'обзор перспектив', 'outlook',
      ex('Der Bericht endet mit einem [[Ausblick]] auf die kommenden zwölf Monate.', 'Отчёт завершается обзором перспектив на ближайшие двенадцать месяцев.', 'The report ends with an outlook for the next twelve months.')),
    // telc, Einfach besser! 500, S. 32
    N('prognose', 'die', 'Prognose', 'die Prognosen', 'прогноз', 'forecast',
      ex('Die Zeitung verglich die frühere [[Prognose]] mit den inzwischen veröffentlichten Zahlen.', 'Газета сравнила прежний прогноз с цифрами, опубликованными с тех пор.', 'The newspaper compared the earlier forecast with the figures released since then.')),
    // telc, Einfach besser! 500, S. 21
    N('datenblatt', 'das', 'Datenblatt', 'die Datenblätter', 'техническое описание', 'data sheet',
      ex('Im [[Datenblatt]] der Kamera steht, welche Speicherkarten mit ihr funktionieren.', 'В техническом описании камеры указано, какие карты памяти ей подходят.', 'The camera’s data sheet lists the memory cards that work with it.'))
  ]);

  reg('b2_kultur', [
    // telc, Einfach besser! 500, S. 22
    W('einzigartig', { pos: 'adj', de: 'einzigartig', ru: 'уникальный', en: 'unique',
      examples: [ex('Die ungewöhnliche Verbindung von Tanz und Zeichensprache macht diese Aufführung [[einzigartig]].', 'Необычное сочетание танца и жестового языка делает этот спектакль уникальным.', 'The unusual combination of dance and sign language makes this performance unique.')] })
  ]);
})();

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.register({
  "tab": "words",
  "topic": "b2_bildung",
  "items": [
    {
      "id": "telc26-zulassung",
      "t": "Zulassung",
      "pos": "noun",
      "article": "die",
      "plural": "die Zulassungen",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 5,
          "headword": "Zulassung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Zulassung",
      "ru": "допуск к обучению",
      "en": "admission",
      "examples": [
        {
          "t": "Die [[Zulassung]] zum Lehrgang wurde schriftlich bestätigt.",
          "en": "Admission to the training course was confirmed in writing.",
          "ru": "Допуск к обучению на курсе подтвердили письменно.",
          "de": "Die [[Zulassung]] zum Lehrgang wurde schriftlich bestätigt.",
          "sense": {
            "ru": "допуск к обучению",
            "en": "admission"
          }
        }
      ]
    },
    {
      "id": "telc26-lernbereit",
      "t": "lernbereit",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 4,
          "headword": "lernbereit",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "lernbereit",
      "ru": "готовый учиться",
      "en": "willing to learn",
      "examples": [
        {
          "t": "Wir suchen Menschen, die neugierig und [[lernbereit]] sind.",
          "en": "We are looking for people who are curious and willing to learn.",
          "ru": "Мы ищем людей, которые любознательны и готовы учиться.",
          "de": "Wir suchen Menschen, die neugierig und [[lernbereit]] sind.",
          "sense": {
            "ru": "готовый учиться",
            "en": "willing to learn"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_psyche",
  "items": [
    {
      "id": "telc26-belastbar",
      "t": "belastbar",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 4,
          "headword": "belastbar",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "belastbar",
      "ru": "стрессоустойчивый",
      "en": "resilient",
      "examples": [
        {
          "t": "Auch in hektischen Phasen bleibt sie [[belastbar]].",
          "en": "She remains resilient even during hectic periods.",
          "ru": "Даже в напряжённые периоды она остаётся стрессоустойчивой.",
          "de": "Auch in hektischen Phasen bleibt sie [[belastbar]].",
          "sense": {
            "ru": "стрессоустойчивый",
            "en": "resilient"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_beziehungen",
  "items": [
    {
      "id": "telc26-angemessen",
      "t": "angemessen",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 15,
          "headword": "angemessen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "angemessen",
      "ru": "уместный",
      "en": "appropriate",
      "examples": [
        {
          "t": "In dieser Situation ist eine ruhige Antwort [[angemessen]].",
          "en": "In this situation, a calm reply is appropriate.",
          "ru": "В этой ситуации спокойный ответ уместен.",
          "de": "In dieser Situation ist eine ruhige Antwort [[angemessen]].",
          "sense": {
            "ru": "уместный",
            "en": "appropriate"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_wissenschaft",
  "items": [
    {
      "id": "telc26-verallgemeinern",
      "t": "verallgemeinern",
      "pos": "verb",
      "forms": {
        "praes": "verallgemeinert",
        "praet": "verallgemeinerte",
        "perf": "hat verallgemeinert"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 28,
          "headword": "verallgemeinern",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "verallgemeinern",
      "ru": "обобщать",
      "en": "generalise",
      "examples": [
        {
          "t": "Wir sollten einzelne Erfahrungen nicht sofort [[verallgemeinern]].",
          "en": "We should not immediately generalise from individual experiences.",
          "ru": "Не стоит сразу обобщать отдельные случаи.",
          "de": "Wir sollten einzelne Erfahrungen nicht sofort [[verallgemeinern]].",
          "sense": {
            "ru": "обобщать",
            "en": "generalise"
          }
        }
      ]
    }
  ]
});

/* === Content expansion 2026-11-27 (DE B2 words + C1 Evidence & Nuance) === */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function N(id, article, de, plural, ru, en, e, lvl) {
    return { id: (lvl === 'C1' ? 'c1-x27-' : 'b2-x27-') + id, pos: 'noun', level: lvl || 'B2', de: de, article: article, plural: plural || undefined, ru: ru, en: en, examples: [e] };
  }
  function V(id, de, forms, ru, en, e, lvl) {
    return { id: (lvl === 'C1' ? 'c1-x27-' : 'b2-x27-') + id, pos: 'verb', level: lvl || 'B2', de: de, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, ru: ru, en: en, examples: [e] };
  }
  function A(id, pos, de, ru, en, e, lvl) {
    return { id: (lvl === 'C1' ? 'c1-x27-' : 'b2-x27-') + id, pos: pos, level: lvl || 'B2', de: de, ru: ru, en: en, examples: [e] };
  }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('b2_psyche', [
    N('herausforderung', 'die', 'Herausforderung', 'die Herausforderungen', 'вызов, сложная задача', 'challenge',
      ex('Der Wechsel in eine neue Abteilung war eine große [[Herausforderung]] für ihn.', 'Переход в новый отдел стал для него большим вызовом.', 'Moving to a new department was a major challenge for him.')),
    A('selbstbewusst', 'adj', 'selbstbewusst', 'уверенный в себе', 'self-confident, self-assured',
      ex('Nach dem Training trat sie im Gespräch deutlich [[selbstbewusster]] auf.', 'После тренинга она держалась в разговоре заметно увереннее.', 'After the coaching session, she came across as much more self-confident in interviews.')),
    A('empathisch', 'adj', 'empathisch', 'эмпатичный, чуткий', 'empathetic',
      ex('Gerade in Konfliktsituationen hilft eine [[empathische]] Haltung weiter.', 'Именно в конфликтных ситуациях очень помогает эмпатичный подход.', 'Especially in conflict situations, an empathetic attitude helps move things forward.')),
    A('verstaendnisvoll', 'adj', 'verständnisvoll', 'понимающий, участливый', 'understanding, sympathetic',
      ex('Meine Kollegin reagierte sehr [[verständnisvoll]], als ich den Termin verschieben musste.', 'Моя коллега отнеслась с большим пониманием, когда мне пришлось перенести встречу.', 'My colleague was very understanding when I had to postpone the appointment.')),
    A('aufgeschlossen', 'adj', 'aufgeschlossen', 'открытый новому, восприимчивый', 'open-minded',
      ex('Ein [[aufgeschlossenes]] Team probiert neue Arbeitsmethoden leichter aus.', 'Открытая новому команда охотнее пробует новые методы работы.', 'An open-minded team tries out new working methods more readily.'))
  ]);

  reg('b2_medien', [
    N('kurznachricht', 'die', 'Kurznachricht', 'die Kurznachrichten', 'короткое сообщение, месседж', 'short message, text',
      ex('Sie schickte mir eine kurze [[Kurznachricht]], dass sich der Zug verspätet.', 'Она прислала мне короткое сообщение, что поезд задерживается.', 'She sent me a short message saying that the train was delayed.')),
    N('neuigkeit', 'die', 'Neuigkeit', 'die Neuigkeiten', 'новость, свежее известие', 'piece of news',
      ex('Im wöchentlichen Newsletter stehen alle wichtigen [[Neuigkeiten]] aus dem Betrieb.', 'В еженедельной рассылке собраны все важные новости компании.', 'The weekly newsletter contains all the important news from the company.')),
    V('recherchieren', 'recherchieren', ['recherchiert', 'recherchierte', 'hat recherchiert'], 'искать и проверять информацию, исследовать', 'to research, investigate',
      ex('Vor dem Artikel musste der Journalist drei Tage lang gründlich [[recherchieren]].', 'Перед написанием статьи журналисту пришлось три дня тщательно проверять факты.', 'Before writing the article, the journalist had to do thorough research for three days.')),
    V('abonnieren', 'abonnieren', ['abonniert', 'abonnierte', 'hat abonniert'], 'подписываться (на рассылку, канал, газету)', 'to subscribe to',
      ex('Viele Leser haben den kostenlosen Podcast des Magazins [[abonniert]].', 'Многие читатели подписались на бесплатный подкаст журнала.', 'Many readers have subscribed to the magazine’s free podcast.')),
    V('aeussern', 'äußern', ['äußert', 'äußerte', 'hat geäußert'], 'высказывать, выражать (мнение, критику)', 'to express, voice',
      ex('Im Gespräch konnte jeder seine Bedenken offen [[äußern]].', 'В разговоре каждый мог открыто высказать свои сомнения.', 'During the discussion, everyone was able to voice their concerns openly.'))
  ]);

  reg('b2_umwelt', [
    V('entsorgen', 'entsorgen', ['entsorgt', 'entsorgte', 'hat entsorgt'], 'утилизировать, выбрасывать по правилам', 'to dispose of',
      ex('Alte Batterien darf man nicht im Hausmüll [[entsorgen]].', 'Старые батарейки нельзя выбрасывать вместе с обычным мусором.', 'Old batteries must not be disposed of in household waste.')),
    V('verbrauchen', 'verbrauchen', ['verbraucht', 'verbrauchte', 'hat verbraucht'], 'потреблять, расходовать', 'to consume, use up',
      ex('Moderne Heizungen [[verbrauchen]] deutlich weniger Energie als ältere Modelle.', 'Современные системы отопления потребляют заметно меньше энергии, чем старые модели.', 'Modern heating systems consume significantly less energy than older models.')),
    V('gefaehrden', 'gefährden', ['gefährdet', 'gefährdete', 'hat gefährdet'], 'подвергать опасности, ставить под угрозу', 'to endanger, put at risk',
      ex('Illegale Abwässer [[gefährden]] die Qualität des Grundwassers.', 'Незаконные стоки ставят под угрозу качество грунтовых вод.', 'Illegal wastewater endangers groundwater quality.')),
    A('nachhaltig', 'adj', 'nachhaltig', 'устойчивый, экологичный, долгосрочный', 'sustainable',
      ex('Die Stadt setzt auf [[nachhaltige]] Konzepte für den öffentlichen Nahverkehr.', 'Город делает ставку на устойчивые решения для общественного транспорта.', 'The city relies on sustainable concepts for local public transport.'))
  ]);

  reg('b2_wirtschaft', [
    N('konkurrenz', 'die', 'Konkurrenz', '', 'конкуренция; конкуренты', 'competition',
      ex('Durch neue Online-Anbieter ist die [[Konkurrenz]] im Einzelhandel stark gewachsen.', 'Из-за новых онлайн-продавцов конкуренция в розничной торговле сильно выросла.', 'Competition in retail has grown sharply due to new online providers.')),
    N('dienstleistung', 'die', 'Dienstleistung', 'die Dienstleistungen', 'услуга, сервис', 'service',
      ex('Neben dem Verkauf bietet die Firma auch persönliche [[Dienstleistungen]] vor Ort an.', 'Помимо продажи, компания также предлагает персональные услуги на месте.', 'Alongside sales, the company also offers personal on-site services.')),
    N('bestand', 'der', 'Bestand', 'die Bestände', 'запас на складе, наличие; фонд', 'stock, inventory',
      ex('Jeden Freitag prüfen wir den aktuellen [[Bestand]] im Lager.', 'Каждую пятницу мы проверяем текущий остаток на складе.', 'Every Friday we check the current stock in the warehouse.')),
    A('verfuegbar', 'adj', 'verfügbar', 'доступный, имеющийся в наличии', 'available',
      ex('Dieses Ersatzteil ist leider erst ab nächster Woche wieder [[verfügbar]].', 'Эта запчасть, к сожалению, снова будет доступна только со следующей недели.', 'This spare part will unfortunately not be available again until next week.')),
    A('erhaeltlich', 'adj', 'erhältlich', 'имеющийся в продаже, доступный для покупки', 'available (to buy)',
      ex('Das Lehrbuch ist sowohl gedruckt als auch digital [[erhältlich]].', 'Учебник доступен как в печатном, так и в цифровом виде.', 'The textbook is available both in print and digitally.'))
  ]);

  reg('b2_gesellschaft', [
    A('gerecht', 'adj', 'gerecht', 'справедливый', 'fair, just',
      ex('Im Team legen wir großen Wert auf eine [[gerechte]] Verteilung der Aufgaben.', 'В команде мы придаём большое значение справедливому распределению задач.', 'In the team, we attach great importance to a fair distribution of tasks.')),
    A('ungerecht', 'adj', 'ungerecht', 'несправедливый', 'unfair, unjust',
      ex('Viele Beschäftigte fanden die plötzliche Kürzung ohne Erklärung [[ungerecht]].', 'Многие сотрудники посчитали внезапное сокращение без объяснений несправедливым.', 'Many employees felt the sudden cut without explanation was unfair.')),
    A('verantwortungsbewusst', 'adj', 'verantwortungsbewusst', 'ответственный, сознательный', 'responsible, conscientious',
      ex('Ein [[verantwortungsbewusster]] Umgang mit Daten gehört heute zum Alltag.', 'Ответственное обращение с данными сегодня стало частью повседневной работы.', 'Responsible handling of data is part of everyday life today.')),
    A('kooperativ', 'adj', 'kooperativ', 'готовый к сотрудничеству, кооперативный', 'cooperative',
      ex('Dank einer [[kooperativen]] Leitung fanden beide Abteilungen schnell eine Lösung.', 'Благодаря готовности руководства к сотрудничеству оба отдела быстро нашли решение.', 'Thanks to a cooperative leadership style, both departments quickly found a solution.')),
    A('ehrenamtlich', 'adj', 'ehrenamtlich', 'добровольческий, на общественных началах', 'voluntary, honorary',
      ex('Sie engagiert sich am Wochenende [[ehrenamtlich]] in einem Nachbarschaftsprojekt.', 'По выходным она работает на общественных началах в соседском проекте.', 'She volunteers at weekends in a neighbourhood project.'))
  ]);

  reg('b2_bildung', [
    N('allgemeinbildung', 'die', 'Allgemeinbildung', '', 'общее образование, кругозор', 'general education',
      ex('Eine breite [[Allgemeinbildung]] hilft dabei, komplexe Themen schneller einzuordnen.', 'Широкий кругозор помогает быстрее ориентироваться в сложных темах.', 'A broad general education helps you put complex topics into context more quickly.')),
    N('qualifikation', 'die', 'Qualifikation', 'die Qualifikationen', 'квалификация', 'qualification',
      ex('Für diese Stelle braucht man eine anerkannte fachliche [[Qualifikation]].', 'Для этой должности требуется признанная профессиональная квалификация.', 'For this position you need a recognised professional qualification.')),
    N('fertigkeit', 'die', 'Fertigkeit', 'die Fertigkeiten', 'навык, умение', 'skill, proficiency',
      ex('Im Praxiskurs trainieren die Teilnehmenden handwerkliche [[Fertigkeiten]].', 'На практическом курсе участники отрабатывают прикладные навыки.', 'In the practical course, participants train hands-on skills.')),
    N('kompetenz', 'die', 'Kompetenz', 'die Kompetenzen', 'компетенция', 'competence',
      ex('Neben Fachwissen spielt auch soziale [[Kompetenz]] eine zentrale Rolle.', 'Помимо профессиональных знаний, ключевую роль играет и социальная компетенция.', 'Alongside specialist knowledge, social competence also plays a central role.')),
    N('lernbereitschaft', 'die', 'Lernbereitschaft', '', 'готовность учиться', 'willingness to learn',
      ex('Gerade bei Quereinsteigern zählt vor allem hohe [[Lernbereitschaft]].', 'Особенно при смене профессии важнее всего высокая готовность учиться.', 'Especially for career changers, a strong willingness to learn counts above all.')),
    V('beibringen', 'beibringen', ['bringt bei', 'brachte bei', 'hat beigebracht'], 'научить (кого-то чему-то)', 'to teach (someone something)',
      ex('Mein Ausbilder hat mir im ersten Jahr alle wichtigen Handgriffe [[beigebracht]].', 'Мой наставник в первый год научил меня всем основным приёмам.', 'My trainer taught me all the key techniques in the first year.'))
  ]);

  reg('b2_wohnen', [
    N('renovierung', 'die', 'Renovierung', 'die Renovierungen', 'ремонт, обновление помещения', 'renovation',
      ex('Vor dem Einzug ist eine kleine [[Renovierung]] im Flur geplant.', 'Перед заселением в коридоре запланирован небольшой ремонт.', 'Before moving in, a small renovation is planned in the hallway.')),
    N('tiefgarage', 'die', 'Tiefgarage', 'die Tiefgaragen', 'подземный гараж, паркинг', 'underground car park',
      ex('Zur Wohnung gehört auch ein fester Stellplatz in der [[Tiefgarage]].', 'К квартире также относится закреплённое место в подземном паркинге.', 'The flat also comes with a dedicated parking space in the underground car park.')),
    V('vermieten', 'vermieten', ['vermietet', 'vermietete', 'hat vermietet'], 'сдавать внаём, в аренду', 'to rent out, let',
      ex('Die Eigentümer möchten die Dachwohnung ab Oktober unmöbliert [[vermieten]].', 'Владельцы хотят сдавать мансардную квартиру без мебели с октября.', 'The owners want to rent out the attic flat unfurnished from October.'))
  ]);

  reg('b2_beziehungen', [
    N('koerperhaltung', 'die', 'Körperhaltung', 'die Körperhaltungen', 'осанка, поза', 'posture',
      ex('Eine offene [[Körperhaltung]] signalisiert im Gespräch echtes Interesse.', 'Открытая поза в разговоре говорит об искреннем интересе.', 'An open posture signals genuine interest during a conversation.')),
    N('kompromissbereitschaft', 'die', 'Kompromissbereitschaft', '', 'готовность к компромиссу', 'willingness to compromise',
      ex('Ohne gegenseitige [[Kompromissbereitschaft]] lässt sich der Streit im Team kaum lösen.', 'Без взаимной готовности к компромиссу спор в команде вряд ли удастся решить.', 'Without mutual willingness to compromise, the dispute in the team can hardly be resolved.')),
    V('wiedergutmachen', 'wiedergutmachen', ['macht wieder gut', 'machte wieder gut', 'hat wiedergutgemacht'], 'загладить (вину), компенсировать', 'to make up for',
      ex('Mit einer ehrlichen Entschuldigung lässt sich ein Missverständnis oft [[wiedergutmachen]].', 'Искренним извинением часто можно загладить недоразумение.', 'An honest apology can often make up for a misunderstanding.')),
    V('bedauern', 'bedauern', ['bedauert', 'bedauerte', 'hat bedauert'], 'сожалеть (о чём-то)', 'to regret',
      ex('Wir [[bedauern]] die lange Verzögerung und bitten um Ihr Verständnis.', 'Мы сожалеем о долгой задержке и просим отнестись с пониманием.', 'We regret the long delay and ask for your understanding.'))
  ]);

  reg('b2_wissenschaft', [
    N('vermutung', 'die', 'Vermutung', 'die Vermutungen', 'предположение, догадка', 'assumption, supposition',
      ex('Die erste [[Vermutung]] bestätigte sich nach Auswertung der Messdaten nicht.', 'Первое предположение не подтвердилось после анализа данных измерений.', 'The initial assumption was not confirmed after evaluating the measurement data.')),
    N('einschaetzung', 'die', 'Einschätzung', 'die Einschätzungen', 'оценка, суждение', 'assessment, estimate',
      ex('Nach unserer [[Einschätzung]] dauert die technische Prüfung etwa drei Wochen.', 'По нашей оценке, техническая проверка займёт около трёх недель.', 'In our assessment, the technical inspection will take about three weeks.')),
    V('kombinieren', 'kombinieren', ['kombiniert', 'kombinierte', 'hat kombiniert'], 'комбинировать, сочетать', 'to combine',
      ex('Die Studie [[kombiniert]] Umfragedaten mit praktischen Beobachtungen im Alltag.', 'Исследование сочетает данные опросов с практическими наблюдениями в повседневной жизни.', 'The study combines survey data with practical everyday observations.')),
    V('optimieren', 'optimieren', ['optimiert', 'optimierte', 'hat optimiert'], 'оптимизировать', 'to optimise',
      ex('Mit der neuen Software ließ sich der Energieverbrauch spürbar [[optimieren]].', 'С новым программным обеспечением удалось заметно оптимизировать расход энергии.', 'With the new software, energy consumption could be noticeably optimised.')),
    V('vermuten', 'vermuten', ['vermutet', 'vermutete', 'hat vermutet'], 'предполагать, подозревать', 'to suspect, assume',
      ex('Die Forschenden [[vermuten]], dass mehrere Faktoren zusammenwirken.', 'Исследователи предполагают, что здесь действуют сразу несколько факторов.', 'The researchers suspect that several factors interact here.'))
  ]);

  reg('b2_recht', [
    N('regelung', 'die', 'Regelung', 'die Regelungen', 'правило, регламент, урегулирование', 'regulation, arrangement',
      ex('Ab Januar gilt eine neue gesetzliche [[Regelung]] für befristete Verträge.', 'С января действует новое законодательное правило для срочных договоров.', 'From January, a new legal regulation applies to fixed-term contracts.')),
    V('verstossen', 'verstoßen', ['verstößt', 'verstieß', 'hat verstoßen'], 'нарушать (правило, закон — gegen + Akk.)', 'to violate, infringe',
      ex('Wer gegen Sicherheitsvorschriften [[verstößt]], riskiert eine Abmahnung.', 'Тот, кто нарушает правила безопасности, рискует получить выговор.', 'Anyone who violates safety regulations risks a formal warning.')),
    V('missachten', 'missachten', ['missachtet', 'missachtete', 'hat missachtet'], 'игнорировать, пренебрегать (указанием, запретом)', 'to disregard, ignore',
      ex('Der Fahrer hatte das deutliche Parkverbot einfach [[missachtet]].', 'Водитель просто проигнорировал явный запрет на парковку.', 'The driver had simply disregarded the clear no-parking sign.')),
    A('verpflichtend', 'adj', 'verpflichtend', 'обязательный', 'mandatory, compulsory',
      ex('Die jährliche Sicherheitsschulung ist für alle Mitarbeitenden [[verpflichtend]].', 'Ежегодный инструктаж по безопасности обязателен для всех сотрудников.', 'The annual safety training is mandatory for all employees.')),
    A('freiwillig', 'adj', 'freiwillig', 'добровольный', 'voluntary',
      ex('Die Teilnahme an der Befragung ist vollkommen [[freiwillig]] und anonym.', 'Участие в опросе полностью добровольно и анонимно.', 'Participation in the survey is completely voluntary and anonymous.'))
  ]);

  reg('b2_gesundheit', [
    N('vorsorge', 'die', 'Vorsorge', '', 'профилактика; забота на будущее (пенсионная и т. п.)', 'preventive care; provision',
      ex('Regelmäßige [[Vorsorge]] hilft dabei, Krankheiten früh zu erkennen.', 'Регулярная профилактика помогает выявлять заболевания на ранней стадии.', 'Regular preventive care helps detect illnesses early.')),
    N('pflegeheim', 'das', 'Pflegeheim', 'die Pflegeheime', 'дом престарелых / ухода за больными', 'nursing home, care home',
      ex('Seine Großmutter fühlt sich in dem kleinen [[Pflegeheim]] gut betreut.', 'Его бабушка чувствует, что за ней хорошо ухаживают в этом небольшом доме престарелых.', 'His grandmother feels well cared for in the small care home.')),
    A('einfuehlsam', 'adj', 'einfühlsam', 'чуткий, деликатный', 'empathetic, sensitive',
      ex('Eine [[einfühlsame]] Ärztin nimmt sich Zeit für die Sorgen ihrer Patientinnen.', 'Чуткий врач находит время для тревог своих пациентов.', 'An empathetic doctor takes time for her patients’ worries.'))
  ]);

  reg('b2_reisen', [
    N('reisedauer', 'die', 'Reisedauer', '', 'длительность поездки', 'travel duration',
      ex('Durch die neue Schnellstrecke verkürzt sich die [[Reisedauer]] um eine halbe Stunde.', 'Благодаря новой скоростной линии время в пути сокращается на полчаса.', 'The new high-speed route shortens the travel duration by half an hour.')),
    N('sicherheitskontrolle', 'die', 'Sicherheitskontrolle', 'die Sicherheitskontrollen', 'досмотр, контроль безопасности', 'security check',
      ex('An der [[Sicherheitskontrolle]] müssen Flüssigkeiten separat vorgezeigt werden.', 'На контроле безопасности жидкости нужно предъявлять отдельно.', 'At the security check, liquids must be presented separately.')),
    V('ausweichen', 'ausweichen', ['weicht aus', 'wich aus', 'ist ausgewichen'], 'уклоняться, сворачивать (чтобы избежать столкновения); объезжать', 'to dodge, swerve, avoid',
      ex('Der Radfahrer konnte dem plötzlich öffnenden Auto gerade noch [[ausweichen]].', 'Велосипедист в последний момент успел увернуться от внезапно открывшейся двери машины.', 'The cyclist just managed to swerve past the suddenly opening car door.')),
    A('voraussichtlich', 'adj', 'voraussichtlich', 'предположительно, по предварительным данным', 'expected, likely',
      ex('Der Zug erreicht den Hauptbahnhof [[voraussichtlich]] mit zehn Minuten Verspätung.', 'Поезд, по предварительным данным, прибудет на главный вокзал с опозданием на десять минут.', 'The train is expected to reach the central station ten minutes late.'))
  ]);

  reg('b2_kultur', [
    N('wandel', 'der', 'Wandel', '', 'перемены, трансформация', 'change, transformation',
      ex('Das kulturelle Leben der Stadt befindet sich in einem ständigen [[Wandel]].', 'Культурная жизнь города находится в постоянном изменении.', 'The cultural life of the city is undergoing constant change.')),
    A('traditionsreich', 'adj', 'traditionsreich', 'с богатыми традициями', 'rich in tradition',
      ex('Das [[traditionsreiche]] Theater feiert in diesem Herbst sein hundertjähriges Bestehen.', 'Театр с богатыми традициями этой осенью отмечает своё столетие.', 'The theatre, rich in tradition, is celebrating its centenary this autumn.')),
    A('vielfaeltig', 'adj', 'vielfältig', 'многообразный, разнообразный', 'diverse, varied',
      ex('Das Festival bietet ein [[vielfältiges]] Programm aus Film, Musik und Lesungen.', 'Фестиваль предлагает разнообразную программу из кино, музыки и чтений.', 'The festival offers a varied programme of film, music and readings.')),
    A('umfangreich', 'adj', 'umfangreich', 'обширный, объёмный', 'extensive, comprehensive',
      ex('Die Ausstellung zeigt eine [[umfangreiche]] Sammlung früher Fotografien.', 'Выставка представляет обширную коллекцию ранних фотографий.', 'The exhibition shows an extensive collection of early photographs.'))
  ]);

  // C1 Evidence & Nuance topic + 18 C1 words
  GT.packs.de.config.TOPICS.words.push({
    id: 'c1_argumentation',
    name: 'Evidence & Nuance',
    level: 'c1',
    group: 'C1 topics',
    desc: 'Precision, argumentation, hedging, nuance and critical evaluation.',
    scenario: 'дискуссия в аналитическом подкасте: мы разбираем спорное исследование, оцениваем аргументы, оговорки и контраргументы. Ты — ведущий.'
  });

  reg('c1_argumentation', [
    N('tragweite', 'die', 'Tragweite', '', 'масштаб последствий, значимость', 'scope, far-reaching implications',
      ex('Viele erkannten die volle [[Tragweite]] dieser Entscheidung erst Monate später.', 'Многие осознали весь масштаб последствий этого решения лишь спустя месяцы.', 'Many people only recognised the full implications of this decision months later.'), 'C1'),
    N('vorbehalt', 'der', 'Vorbehalt', 'die Vorbehalte', 'оговорка, сомнение (unter Vorbehalt — с оговоркой)', 'reservation, caveat',
      ex('Er stimmte dem Plan nur unter dem [[Vorbehalt]] zu, dass das Budget geprüft wird.', 'Он согласился с планом лишь с оговоркой, что бюджет будет проверен.', 'He agreed to the plan only with the reservation that the budget be reviewed.'), 'C1'),
    N('plausibilitaet', 'die', 'Plausibilität', '', 'правдоподобие, убедительность', 'plausibility',
      ex('Die Gutachterin prüfte zunächst die [[Plausibilität]] der vorgelegten Zahlen.', 'Эксперт сначала проверила правдоподобие представленных цифр.', 'The reviewer first checked the plausibility of the figures submitted.'), 'C1'),
    N('trugschluss', 'der', 'Trugschluss', 'die Trugschlüsse', 'ложное умозаключение, заблуждение', 'fallacy, false conclusion',
      ex('Aus einer bloßen Korrelation auf eine Ursache zu schließen, ist ein häufiger [[Trugschluss]].', 'Делать вывод о причине из одной лишь корреляции — распространённое заблуждение.', 'Inferring causation from mere correlation is a common fallacy.'), 'C1'),
    N('kausalitaet', 'die', 'Kausalität', '', 'причинно-следственная связь', 'causality, causation',
      ex('Zwischen beiden Ereignissen lässt sich bisher keine direkte [[Kausalität]] belegen.', 'Между этими двумя событиями пока не удаётся доказать прямую причинно-следственную связь.', 'So far, no direct causality can be proven between the two events.'), 'C1'),
    N('diskrepanz', 'die', 'Diskrepanz', 'die Diskrepanzen', 'расхождение, несоответствие', 'discrepancy',
      ex('Zwischen den beiden Berichten gibt es eine auffällige [[Diskrepanz]] bei den Kosten.', 'Между двумя отчётами есть заметное расхождение в расходах.', 'There is a striking discrepancy in costs between the two reports.'), 'C1'),
    N('spielraum', 'der', 'Spielraum', 'die Spielräume', 'пространство для манёвра, свобода действий', 'room for manoeuvre, scope',
      ex('Bei den Verhandlungen blieb am Ende kaum noch finanzieller [[Spielraum]].', 'На переговорах в итоге почти не осталось финансового пространства для манёвра.', 'In the negotiations, there was hardly any financial room for manoeuvre left in the end.'), 'C1'),
    N('abwaegung', 'die', 'Abwägung', 'die Abwägungen', 'взвешивание (аргументов, интересов)', 'weighing up, balancing',
      ex('Nach sorgfältiger [[Abwägung]] aller Risiken lehnte der Vorstand das Projekt ab.', 'После тщательного взвешивания всех рисков правление отклонило проект.', 'After carefully weighing up all risks, the board rejected the project.'), 'C1'),
    N('schlussfolgerung', 'die', 'Schlussfolgerung', 'die Schlussfolgerungen', 'вывод, умозаключение', 'conclusion, inference',
      ex('Diese [[Schlussfolgerung]] geht deutlich über das hinaus, was die Daten hergeben.', 'Этот вывод явно выходит за пределы того, что позволяют сказать данные.', 'This conclusion goes well beyond what the data support.'), 'C1'),
    N('praemisse', 'die', 'Prämisse', 'die Prämissen', 'предпосылка, посылка (в аргументе)', 'premise',
      ex('Wenn die Grundannahme nicht stimmt, fällt die gesamte [[Prämisse]] in sich zusammen.', 'Если исходное допущение неверно, рушится вся посылка.', 'If the basic assumption is wrong, the entire premise collapses.'), 'C1'),
    A('stichhaltig', 'adj', 'stichhaltig', 'веский, обоснованный, выдерживающий проверку', 'sound, valid, cogent',
      ex('Für diese weitreichende Behauptung fehlt bislang ein [[stichhaltiger]] Beleg.', 'Для столь далеко идущего утверждения пока не хватает веского доказательства.', 'So far, there is no sound evidence for this far-reaching claim.'), 'C1'),
    A('differenziert', 'adj', 'differenziert', 'взвешенный, нюансированный, дифференцированный', 'nuanced, differentiated',
      ex('Das Thema verlangt eine [[differenzierte]] Betrachtung statt schneller Parolen.', 'Эта тема требует взвешенного рассмотрения вместо скорых лозунгов.', 'The topic calls for a nuanced view instead of quick slogans.'), 'C1'),
    A('ambivalent', 'adj', 'ambivalent', 'двойственный, амбивалентный', 'ambivalent',
      ex('Viele Beschäftigte stehen der neuen KI-Lösung eher [[ambivalent]] gegenüber.', 'Многие сотрудники относятся к новому ИИ-решению довольно двойственно.', 'Many employees feel rather ambivalent about the new AI solution.'), 'C1'),
    A('unabdingbar', 'adj', 'unabdingbar', 'непременный, абсолютно необходимый', 'indispensable, essential',
      ex('Transparente Kriterien sind für das Vertrauen der Öffentlichkeit [[unabdingbar]].', 'Прозрачные критерии абсолютно необходимы для доверия общества.', 'Transparent criteria are indispensable for public trust.'), 'C1'),
    A('einleuchtend', 'adj', 'einleuchtend', 'убедительный, ясный, понятный', 'plausible, convincing',
      ex('Ihre Erklärung für den Rückgang der Zahlen klingt durchaus [[einleuchtend]].', 'Её объяснение снижения показателей звучит вполне убедительно.', 'Her explanation for the drop in numbers sounds quite convincing.'), 'C1'),
    V('relativieren', 'relativieren', ['relativiert', 'relativierte', 'hat relativiert'], 'смягчать категоричность, рассматривать относительно', 'to put into perspective, qualify',
      ex('Der Sprecher versuchte, die scharfe Kritik am Bericht etwas zu [[relativieren]].', 'Представитель попытался немного смягчить острую критику отчёта.', 'The spokesperson tried to put the sharp criticism of the report into perspective.'), 'C1'),
    V('untermauern', 'untermauern', ['untermauert', 'untermauerte', 'hat untermauert'], 'подкреплять (доводами, фактами)', 'to substantiate, back up',
      ex('Die Autorin [[untermauert]] ihre These mit mehreren unabhängigen Langzeitstudien.', 'Автор подкрепляет свой тезис несколькими независимыми долгосрочными исследованиями.', 'The author substantiates her thesis with several independent long-term studies.'), 'C1'),
    V('hinterfragen', 'hinterfragen', ['hinterfragt', 'hinterfragte', 'hat hinterfragt'], 'подвергать критическому разбору, ставить под вопрос', 'to question critically',
      ex('Wissenschaft lebt davon, eigene Annahmen immer wieder kritisch zu [[hinterfragen]].', 'Наука живёт тем, что снова и снова критически перепроверяет собственные допущения.', 'Science thrives on repeatedly questioning its own assumptions critically.'), 'C1')
  ]);
})();

/* === Content expansion Wave 2 (2026-11-27): +22 DE C1 argumentation words === */
(function () {
  'use strict';
  function ex(t, ru, en) { return { t: t, de: t, ru: ru, en: en }; }
  function N(id, article, t, plural, ru, en, e) {
    var o = { id: 'c1-w2-' + id, pos: 'noun', article: article, t: t, de: t, ru: ru, en: en, level: 'C1', examples: [e] };
    if (plural) o.plural = plural;
    return o;
  }
  function V(id, t, forms, ru, en, e) {
    return { id: 'c1-w2-' + id, pos: 'verb', t: t, de: t, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, ru: ru, en: en, level: 'C1', examples: [e] };
  }
  function A(id, pos, t, ru, en, e) {
    return { id: 'c1-w2-' + id, pos: pos, t: t, de: t, ru: ru, en: en, level: 'C1', examples: [e] };
  }

  GT.register({ tab: 'words', topic: 'c1_argumentation', items: [
    N('einwand', 'das', 'Gegenargument', 'die Gegenargumente', 'контраргумент, встречный довод', 'counterargument',
      ex('Ihr [[Gegenargument]] gegen den Zeitplan trifft genau den wunden Punkt.', 'Ваш контраргумент против графика бьёт точно в слабое место.', 'Your counterargument against the schedule hits the exact weak spot.')),
    N('umkehrung', 'die', 'Umkehrschluss', '', 'обратный вывод, вывод от противного', 'converse inference',
      ex('Aus der Absage folgt im [[Umkehrschluss]] aber noch keine Zustimmung für B.', 'Из отказа ещё не следует обратный вывод о согласии на вариант B.', 'Conversely, the refusal still does not imply approval of option B.')),
    N('kernpunkt', 'der', 'Kernpunkt', 'die Kernpunkte', 'ключевой пункт, суть вопроса', 'crux, core point',
      ex('Der [[Kernpunkt]] der Debatte liegt in der langfristigen Finanzierung.', 'Ключевой пункт дебатов заключается в долгосрочном финансировании.', 'The core point of the debate lies in long-term funding.')),
    N('wesenszug', 'der', 'Grundsatzfrage', 'die Grundsatzfragen', 'принципиальный вопрос', 'matter of principle',
      ex('Bei der Datensicherheit geht es um eine [[Grundsatzfrage]], nicht um Details.', 'В вопросе защиты данных речь идёт о принципиальном вопросе, а не о деталях.', 'Data security is a matter of principle rather than minor detail.')),
    N('nebenwirkung', 'die', 'Kehrseite', 'die Kehrseiten', 'обратная сторона (медали)', 'flip side, downside',
      ex('Jede schnelle Automatisierung hat als [[Kehrseite]] neue Abhängigkeiten.', 'У любой быстрой автоматизации есть обратная сторона — новые зависимости.', 'Every rapid automation has new dependencies as its flip side.')),
    N('gegenposition', 'die', 'Gegenposition', 'die Gegenpositionen', 'противоположная позиция', 'opposing stance',
      ex('In einem fairen Gutachten wird auch die [[Gegenposition]] sachlich dargestellt.', 'В объективном заключении противоположная позиция тоже излагается по делу.', 'In a fair review, the opposing stance is also presented objectively.')),
    N('fehlschluss', 'der', 'Fehlschluss', 'die Fehlschlüsse', 'ложное умозаключение', 'false inference',
      ex('Aus zwei Zufällen eine Regel abzuleiten ist ein methodischer [[Fehlschluss]].', 'Выводить правило из двух случайностей — методологический просчёт.', 'Deriving a rule from two coincidences is a methodological false inference.')),
    N('ausgangslage', 'die', 'Ausgangslage', 'die Ausgangslagen', 'исходная ситуация / положение дел', 'starting position, baseline',
      ex('Ohne klare Analyse der [[Ausgangslage]] bleibt jede Reform Stückwerk.', 'Без чёткого анализа исходной ситуации любая реформа остаётся фрагментарной.', 'Without a clear baseline analysis, every reform remains piecemeal.')),
    N('spannungsfeld', 'das', 'Spannungsfeld', 'die Spannungsfelder', 'поле противоречий, конфликт интересов/целей', 'area of tension',
      ex('Datenschutz bewegt sich im [[Spannungsfeld]] zwischen Transparenz und Kontrolle.', 'Защита данных находится в поле противоречия между прозрачностью и контролем.', 'Data protection operates in an area of tension between transparency and control.')),
    N('leitgedanke', 'der', 'Leitgedanke', 'die Leitgedanken', 'руководящая идея, основной принцип', 'guiding principle',
      ex('Verhältnismäßigkeit ist der zentrale [[Leitgedanke]] dieses Entwurfs.', 'Соразмерность — центральная идея этого проекта.', 'Proportionality is the central guiding principle of this draft.')),
    V('abwaegen', 'aufzeigen', ['zeigt auf', 'zeigte auf', 'hat aufgezeigt'], 'наглядно показывать, выявлять (проблемы, пути)', 'to point out, demonstrate',
      ex('Das Gutachten kann Chancen und Risiken klar [[aufzeigen]].', 'Экспертиза может наглядно показать шансы и риски.', 'The assessment can clearly point out opportunities and risks.')),
    V('entkraeften-w2', 'unterscheiden', ['unterscheidet', 'unterschied', 'hat unterschieden'], 'различать, проводить границу между', 'to distinguish, differentiate',
      ex('Transparente Messwerte helfen, Zufall und Ursache sauber zu [[unterscheiden]].', 'Прозрачные замеры помогают чётко отличать случайность от причины.', 'Transparent metrics help clearly distinguish coincidence from cause.')),
    V('pauschalisieren', 'pauschalisieren', ['pauschalisiert', 'pauschalisierte', 'hat pauschalisiert'], 'обобщать огульно / чересчур упрощать', 'to overgeneralise',
      ex('Man darf einzelne Ausfälle nicht [[pauschalisieren]] und auf alle übertragen.', 'Нельзя огульно обобщать единичные сбои и переносить их на всех.', 'One must not overgeneralise isolated failures to everyone.')),
    V('differenzieren', 'differenzieren', ['differenziert', 'differenzierte', 'hat differenziert'], 'разграничивать, подходить дифференцированно', 'to differentiate, distinguish',
      ex('Bei der Ursachenforschung muss man zwischen Symptomen und Auslösern [[differenzieren]].', 'При поиске причин нужно разграничивать симптомы и первоисточники.', 'When investigating causes, one has to differentiate between symptoms and triggers.')),
    V('hervorheben', 'herausstellen', ['stellt heraus', 'stellte heraus', 'hat herausgestellt'], 'выделять, особо подчёркивать', 'to highlight, emphasise',
      ex('Im Schlussbericht sollte man den praktischen Nutzen klar [[herausstellen]].', 'В итоговом отчёте следует чётко выделить практическую пользу.', 'In the final report, one should clearly highlight the practical benefit.')),
    V('einraeumen', 'einräumen', ['räumt ein', 'räumte ein', 'hat eingeräumt'], 'признавать (упущение, факт); предоставлять', 'to concede, admit',
      ex('Die Leitung [[räumte]] offen [[ein]], dass die Umstellung zu kurzfristig war.', 'Руководство открыто признало, что переход был слишком поспешным.', 'Management openly conceded that the transition was too abrupt.')),
    A('plausibel', 'adj', 'plausibel', 'правдоподобный, логически убедительный', 'plausible',
      ex('Nach Prüfung aller Rechnungen erscheint diese Erklärung durchaus [[plausibel]].', 'После проверки всех счетов это объяснение выглядит вполне правдоподобным.', 'After checking all invoices, this explanation seems quite plausible.')),
    A('triftig', 'adj', 'triftig', 'веский, уважительный (о причине)', 'valid, compelling (reason)',
      ex('Ohne einen [[triftigen]] Grund lässt sich der Vertrag nicht vorzeitig lösen.', 'Без веской причины расторгнуть договор досрочно нельзя.', 'Without a compelling reason, the contract cannot be terminated early.')),
    A('fragwuerdig', 'adj', 'fragwürdig', 'сомнительный, спорный', 'questionable, dubious',
      ex('Statistiken ohne Quellenangabe wirken methodisch äußerst [[fragwürdig]].', 'Статистика без указания источников методологически крайне сомнительна.', 'Statistics without cited sources appear methodologically highly questionable.')),
    A('schluessig', 'adj', 'schlüssig', 'последовательный, логически стройный', 'coherent, consistent',
      ex('Die Argumentationskette ist von Anfang bis Ende [[schlüssig]] aufgebaut.', 'Цепочка аргументов выстроена стройно от начала до конца.', 'The line of reasoning is structured coherently from start to finish.')),
    A('maßgeblich', 'adj', 'maßgeblich', 'определяющий, решающий', 'decisive, authoritative',
      ex('Für die Entscheidung war vor allem das Gutachten der Fachabteilung [[maßgeblich]].', 'Решающим для решения стало прежде всего заключение профильного отдела.', 'The specialist department’s report was decisive for the outcome.')),
    A('vorlaeufig', 'adj', 'vorläufig', 'предварительный, временный', 'provisional, preliminary',
      ex('Alle Zahlen gelten ausdrücklich als [[vorläufig]] bis zum Jahresabschluss.', 'Все цифры явно считаются предварительными до годового закрытия.', 'All figures are expressly preliminary until year-end closing.'))
  ] });
})();
