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
