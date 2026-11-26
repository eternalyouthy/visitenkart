/* ENGLISH Professional · Service, Business & Operations tracks (9 topics × 10 new B2–C2 cards = 90 new + 7 reused memberships).
 * Checked against full English pack inventory for zero duplicates. Original examples and bilingual notes (ru + de). */
(function () {
  'use strict';
  var P = GT._target || GT.packs.en;
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, note) {
    var have = P.items.filter(function (x) { return x.t === t; })[0];
    if (have) return { _member: have.id };
    return {
      id: 'en:pro6:' + id, pos: pos, t: t, level: level,
      ru: ru, de: de, examples: [e], learnable: true,
      note: note ? { ru: note[0], de: note[1] } : null
    };
  }
  function reg(topic, items) {
    items.forEach(function (x) { if (x && x._member) GT.addMember(x._member, 'it', topic); });
    GT.register({ tab: 'it', topic: topic, items: items.filter(function (x) { return x && !x._member; }) });
  }

  /* ── 01 · Hotels & Front Desk (10 new) ──────────────────────────────────── */
  reg('svc_hotel', [
    W('overbooking', 'noun', 'overbooking', 'B2', 'сверхбронирование, овербукинг', 'die Überbuchung',
      ex('Because of sudden [[overbooking]], we arranged a room at our partner hotel next door.', 'Из-за внезапного овербукинга мы организовали для гостя номер в соседнем партнёрском отеле.', 'Wegen einer unerwarteten Überbuchung organisierten wir ein Zimmer in unserem Partnerhotel nebenan.'),
      ['Бывает в отелях и на авиарейсах; при этом гостю положена равноценная замена (walk a guest) или апгрейд.', 'Kommt in Hotellerie und Luftfahrt vor; Gast erhält meist ein Upgrade oder gleichwertiges Ersatzhotel.']),
    W('occupancy-rate', 'noun', 'occupancy rate', 'C1', 'уровень загрузки (заполняемости номеров)', 'die Auslastungsquote, die Belegungsrate',
      ex('Our weekend [[occupancy rate]] climbed past ninety-two per cent during the trade fair.', 'Заполняемость в выходные во время выставки превысила девяносто два процента.', 'Unsere Auslastungsquote stieg am Messewochenende auf über zweiundneunzig Prozent.'),
      ['Ключевой показатель отеля наряду с ADR (средним тарифом) и RevPAR.', 'Zentrale Kennzahl der Hotellerie neben ADR (Durchschnittspreis) und RevPAR.']),
    W('pre-authorisation', 'noun', 'pre-authorisation', 'C1', 'предавторизация (временная блокировка залога на карте)', 'die Vorautorisierung (Kartenblockierung)',
      ex('The front desk places a refundable [[pre-authorisation]] on your card at check-in for incidentals.', 'На стойке регистрации при заезде на карте временно блокируют возвратный депозит на случай доп. услуг.', 'Beim Check-in nimmt die Rezeption eine erstattungsfähige Vorautorisierung für Nebenleistungen vor.'),
      ['Деньги не списываются окончательно, а временно замораживаются (hold on the card). BE: -isation, AE: -ization.', 'Betrag wird nur geblockt, nicht sofort abgebucht; BE -isation, AE -ization.']),
    W('complimentary-upgrade', 'noun', 'complimentary upgrade', 'B2', 'бесплатное повышение категории номера / обслуживания', 'das kostenlose Upgrade',
      ex('To apologise for the maintenance noise, we offered the couple a [[complimentary upgrade]] to a suite.', 'Чтобы извиниться за шум от ремонта, мы предложили паре бесплатный апгрейд до люкса.', 'Als Entschuldigung für den Baulärm boten wir dem Paar ein kostenloses Upgrade auf eine Suite an.'),
      ['В сервисе complimentary всегда означает «бесплатно за счёт заведения» (не путать с complementary — дополняющий!).', 'Complimentary = kostenlos vom Haus (nicht verwechseln mit complementary = sich ergänzend).']),
    W('no-show', 'noun', 'no-show', 'B2', 'неявка гостя по подтверждённой брони', 'das Nichterscheinen (No-Show)',
      ex('Bookings not cancelled by six p.m. incur a first-night [[no-show]] fee.', 'Бронирования, не отменённые до шести вечера, облагаются штрафом за неявку в размере первой ночи.', 'Buchungen, die nicht bis achtzehn Uhr storniert werden, ziehen eine No-Show-Gebühr für die erste Nacht nach sich.'),
      ['Термин отелей, ресторанов и авиакомпаний для клиента, который не приехал и не отменил бронь.', 'Gängig in Hotellerie, Gastronomie und Luftfahrt für unentschuldigt ausbleibende Gäste.']),
    W('housekeeping', 'noun', 'housekeeping', 'B2', 'служба уборки и обслуживания номеров (хаускипинг)', 'die Zimmerreinigung, das Housekeeping',
      ex('Please notify [[housekeeping]] right away that suite 402 is ready for deep cleaning.', 'Пожалуйста, сразу передайте службе хаускипинга, что номер 402 свободен для генеральной уборки.', 'Bitte geben Sie dem Housekeeping sofort Bescheid, dass Suite 402 für die Grundreinigung frei ist.'),
      ['Неисчисляемое существительное; подразделение отеля, отвечающее за номера, бельё и чистоту.', 'Unzählbares Nomen; bezeichnet die gesamte Etagen- und Reinigungsabteilung eines Hotels.']),
    W('concierge', 'noun', 'concierge', 'B2', 'консьерж (служба помощи гостям с билетами, трансфером и бронями)', 'der Concierge, der Empfangsdienst',
      ex('Ask the [[concierge]] to arrange an early airport transfer and last-minute theatre tickets.', 'Попросите консьержа организовать ранний трансфер в аэропорт и билеты в театр на сегодня.', 'Bitten Sie den Concierge, einen frühen Flughafentransfer und kurzfristige Theaterkarten zu besorgen.'),
      ['Французское заимствование: отвечает за внешние запросы гостей (рестораны, экскурсии, транспорт).', 'Französisches Lehnwort für Gästeservice rund um Restauranttipps, Tickets und Transfers.']),
    W('walk-in-guest', 'noun', 'walk-in guest', 'C1', 'гость без предварительной брони («с улицы»)', 'der Walk-in-Gast (ohne Voranmeldung)',
      ex('Keep two standard rooms unallocated for late-evening [[walk-in guests]].', 'Оставьте два стандартных номера в запасе для поздних гостей без предварительной брони.', 'Halten Sie zwei Standardzimmer für späte Walk-in-Gäste frei.'),
      ['В ресторанах и салонах также просто walk-ins («посетители без записи»).', 'In Restaurants und Salons oft verkürzt zu walk-ins (Gäste ohne Reservierung).']),
    W('late-checkout', 'noun', 'late checkout', 'B2', 'поздний выезд (после стандартного расчётного часа)', 'der späte Check-out',
      ex('Loyalty members receive complimentary [[late checkout]] until two p.m. subject to availability.', 'Участники программы лояльности получают бесплатный поздний выезд до двух часов дня при наличии номеров.', 'Treuekunden erhalten nach Verfügbarkeit einen kostenlosen späten Check-out bis vierzehn Uhr.'),
      ['Обязательная формула в отеле — subject to availability («при наличии возможности/мест»).', 'Typische Hotelformulierung: late checkout subject to availability.']),
    W('shift-handover', 'noun', 'shift handover', 'B2', 'передача смены', 'die Schichtübergabe',
      ex('Log any unresolved guest complaints during the night-to-morning [[shift handover]].', 'Вносите все нерешённые жалобы гостей в журнал при передаче смены от ночного администратора утреннему.', 'Vermerken Sie alle offenen Gästebeschwerden bei der Schichtübergabe von der Nacht- zur Frühschicht.'),
      ['Универсальный термин не только в отелях, но и в больницах, колл-центрах и на производстве.', 'Gilt branchenübergreifend von Hotellerie über Klinik bis Callcenter; AE oft handoff.'])
  ]);

  /* ── 02 · Gastronomy & Catering (10 new) ────────────────────────────────── */
  reg('svc_gastro', [
    W('cross-contamination', 'noun', 'cross-contamination', 'C1', 'перекрёстное загрязнение (перенос аллергенов или бактерий)', 'die Kreuzkontamination',
      ex('Use dedicated colour-coded cutting boards to prevent [[cross-contamination]] with nuts or raw meat.', 'Используйте отдельные цветные разделочные доски во избежание перекрёстного контакта с орехами или сырым мясом.', 'Verwenden Sie farblich getrennte Schneidebretter, um Kreuzkontamination durch Nüsse oder rohes Fleisch zu vermeiden.'),
      ['Критичный термин пищевой безопасности (HACCP) при работе с аллергенами и сырыми продуктами.', 'Zentraler Begriff der Lebensmittelhygiene (HACCP) bei Allergenen und Rohware.']),
    W('dietary-requirement', 'noun', 'dietary requirement', 'B2', 'особое требование к питанию (аллергии, халяль, веганство)', 'die Ernährungsbesonderheit, die diätetische Vorgabe',
      ex('Always confirm every guest’s [[dietary requirements]] before finalising a banquet menu.', 'Всегда уточняйте особые требования гостей к питанию до утверждения банкетного меню.', 'Bestätigen Sie stets alle diätetischen Vorgaben der Gäste, bevor das Bankettmenü festgelegt wird.'),
      ['В США также очень часто dietary restriction; в отелях и кейтеринге — dietary requirements.', 'In den USA oft dietary restriction; im Hotel- und Eventbereich meist Plural requirements.']),
    W('food-hygiene', 'noun', 'food hygiene', 'B2', 'пищевая гигиена, санитарные нормы на кухне', 'die Lebensmittelhygiene',
      ex('Strict [[food hygiene]] logs require recording fridge temperatures twice every shift.', 'Строгий контроль пищевой гигиены требует фиксировать температуру холодильников дважды за смену.', 'Strenge Lebensmittelhygiene verlangt die zweimalige Temperaturkontrolle der Kühlung pro Schicht.'),
      ['В UK рестораны получают официальный рейтинг Food Hygiene Rating на витрине.', 'Im britischen Gastgewerbe hängt das amtliche Food Hygiene Rating oft sichtbar im Fenster.']),
    W('table-turnover', 'noun', 'table turnover', 'C1', 'оборачиваемость столиков в зале', 'die Tischauslastung, die Gästeumschlagsrate',
      ex('Pre-ordering drinks speeds up [[table turnover]] without rushing diners out the door.', 'Предзаказ напитков ускоряет оборачиваемость столиков, не создавая у гостей ощущения спешки.', 'Die Vorbestellung von Getränken beschleunigt den Tischwechsel, ohne Gäste zur Eile zu drängen.'),
      ['Также говорят turn tables («быстро обслужить и подготовить стол к следующей посадке»).', 'Dazu gehöriges Verb im Service: turn tables (Tische zügig neu besetzen).']),
    W('allergen-notice', 'noun', 'allergen notice', 'B2', 'уведомление об аллергенах (в меню или буфете)', 'der Allergenhinweis',
      ex('Updated regulations require a clear [[allergen notice]] beside every buffet dish.', 'Обновлённые нормы требуют чёткого указания аллергенов рядом с каждым блюдом шведского стола.', 'Aktuelle Vorschriften verlangen einen klaren Allergenhinweis neben jedem Büfettgericht.'),
      ['Содержит перечень обязательных аллергенов (глютен, орехи, моллюски, молочные продукты и др.).', 'Kennzeichnet deklarationspflichtige Allergene wie Gluten, Schalenfrüchte oder Laktose.']),
    W('service-charge', 'noun', 'service charge', 'B2', 'сервисный сбор (плата за обслуживание в счёте)', 'die Servicegebühr, das Bedienungsgeld',
      ex('A discretionary twelve-per-cent [[service charge]] is added to parties of six or more.', 'К счёту компаний от шести человек добавляется необязательный сервисный сбор двенадцать процентов.', 'Bei Gruppen ab sechs Personen wird eine optionale Servicegebühr von zwölf Prozent hinzugerechnet.'),
      ['В отличие от добровольных чаевых (tip), сервисный сбор заранее включается в счёт.', 'Im Unterschied zum freiwilligen Trinkgeld (tip) wird eine service charge vorab auf der Rechnung ausgewiesen.']),
    W('kitchen-brigade', 'noun', 'kitchen brigade', 'C1', 'кухонная бригада (иерархия поваров на кухне)', 'die Küchenbrigade',
      ex('During Friday service, the [[kitchen brigade]] relies on crisp calls between grill and pass.', 'В пятничную посадку кухонная бригада держится на чёткой перекличке между грилем и раздачей.', 'Beim Freitagsservice verlässt sich die Küchenbrigade auf klare Ansagen zwischen Grill und Pass.'),
      ['Происходит от классической французской системы brigade de cuisine (шеф, су-шеф, повара станций).', 'Geht auf die klassische französische Küchenorganisation nach Escoffier zurück.']),
    W('portion-control', 'noun', 'portion control', 'C1', 'контроль размера порций и закладки продуктов', 'die Portionskontrolle',
      ex('Consistent [[portion control]] keeps plate presentation uniform and protects food margins.', 'Точный контроль порций сохраняет единую подачу и защищает маржинальность кухни.', 'Konsequente Portionskontrolle sorgt für gleichbleibendes Anrichten und sichert die Marge.'),
      ['Включает точное взвешивание гарниров, соусов и белков по технологическим картам.', 'Stützt sich auf Rezepturvorgaben (Standardrezepturen) gegen Schwund und Überportionierung.']),
    W('perishable', 'adj', 'perishable', 'C1', 'скоропортящийся (о продуктах или товарах)', 'leicht verderblich',
      ex('Store [[perishable]] dairy and shellfish on the lowest chilled shelves before opening.', 'Храните скоропортящиеся молочные продукты и моллюсков на нижних полках холодильника до открытия.', 'Lagern Sie leicht verderbliche Milchprodukte und Schalentiere vor Öffnung ganz unten in der Kühlung.'),
      ['Как существительное во мн. ч. perishables означает скоропортящиеся товары.', 'Als Pluralnomen (perishables) auch allgemein für verderbliche Frischeware gebraucht.']),
    W('comp', 'verb', 'comp', 'C1', 'исключить позицию из счёта за счёт заведения', 'aufs Haus geben, aus Kulanz stornieren',
      ex('The floor manager decided to [[comp]] their desserts after the main course arrived cold.', 'Администратор зала решил убрать десерты из счёта за счёт заведения после того, как горячее подали холодным.', 'Der Restaurantleiter entschied, die Desserts aufs Haus zu geben, nachdem das Hauptgericht kalt kam.'),
      ['Сокращение от complimentary (профессиональный сленг HoReCa): comp a meal / drink.', 'Kurzform für complimentary im Gastgewerbe-Jargon: comp a round / dish.'])
  ]);

  /* ── 03 · Retail, Sales & Customer Support (10 new) ─────────────────────── */
  reg('svc_retail', [
    W('stocktake', 'noun', 'stocktake', 'C1', 'инвентаризация товара на складе и в торговом зале', 'die Inventur, die Bestandsaufnahme',
      ex('The flagship store closes early on Sunday for its quarterly [[stocktake]].', 'Флагманский магазин закрывается раньше в воскресенье для квартальной инвентаризации.', 'Die Hauptfiliale schließt am Sonntag früher für die vierteljährliche Inventur.'),
      ['Британский термин (также stocktaking); в США чаще говорят inventory count.', 'BE: stocktake / stocktaking; AE: physical inventory count.']),
    W('goodwill-gesture', 'noun', 'goodwill gesture', 'C1', 'жест доброй воли, компенсация без признания вины', 'die Kulanzleistung, die Kulanzregelung',
      ex('As a [[goodwill gesture]], support issued a thirty-euro voucher despite the lapsed warranty.', 'В качестве жеста доброй воли поддержка выдала ваучер на тридцать евро несмотря на истёкшую гарантию.', 'Aus Kulanz stellte der Support trotz abgelaufener Garantie einen Dreißig-Euro-Gutschein aus.'),
      ['Полное соответствие немецкому Kulanz: клиент получает уступку для сохранения лояльности.', 'Entspricht genau dem deutschen Begriff Kulanz — Entgegenkommen ohne Rechtspflicht.']),
    W('credit-note', 'noun', 'credit note', 'C1', 'кредит-нота, возвратный чек / зачётная квитанция', 'die Gutschrift, die Stornorechnung',
      ex('Instead of a cash payout, B2B buyers usually receive a [[credit note]] against future orders.', 'Вместо выплаты наличными корпоративные покупатели обычно получают кредит-ноту в счёт следующих заказов.', 'Statt einer Barauszahlung erhalten Geschäftskunden meist eine Gutschrift für künftige Bestellungen.'),
      ['Бухгалтерский и розничный документ, уменьшающий сумму прежнего счёта.', 'Buchungsbeleg zur Korrektur einer Rechnung oder Erstattung bei Rückgabe.']),
    W('de-escalation', 'noun', 'de-escalation', 'C1', 'деэскалация конфликта, снятие напряжения в диалоге', 'die Deeskalation',
      ex('Frontline staff train in verbal [[de-escalation]] to calm furious shoppers without arguing.', 'Сотрудников первой линии обучают вербальной деэскалации, чтобы успокаивать разгневанных покупателей без спора.', 'Mitarbeitende im Kundenkontakt trainieren verbale Deeskalation, um wütende Kunden ohne Streit zu beruhigen.'),
      ['Глагол — de-escalate a dispute / heated situation.', 'Verb: de-escalate (eine angespannte Situation beruhigen).']),
    W('shrinkage', 'noun', 'shrinkage', 'C2', 'товарные потери, усушка, недостача (из-за краж, боя, ошибок)', 'der Schwund (Warenverlust)',
      ex('Electronic tags cut store [[shrinkage]] by nearly a third within six months.', 'Электронные метки сократили товарные потери магазина почти на треть за полгода.', 'Elektronische Etiketten senkten den Warenschwund in der Filiale binnen sechs Monaten um fast ein Drittel.'),
      ['Официальный розничный термин для разницы между учётным и фактическим остатком товара.', 'Handelsfachbegriff für die Differenz zwischen Buch- und Ist-Bestand (Diebstahl, Bruch, Fehler).']),
    W('backorder', 'noun', 'backorder', 'C1', 'отложенный заказ (ожидание отсутствующего на складе товара)', 'der Rückstand (Bestellung auf Nachlieferung)',
      ex('That winter coat is currently on [[backorder]] and should ship in two weeks.', 'Это зимнее пальто сейчас в отложенном заказе и должно уйти в доставку через две недели.', 'Dieser Wintermantel ist derzeit im Rückstand und soll in zwei Wochen versandt werden.'),
      ['Устойчивый предлог — on backorder; глагол — backorder an item.', 'Steht meist mit on: an item is on backorder (nicht vorrätig, aber nachbestellt).']),
    W('warranty-claim', 'noun', 'warranty claim', 'B2', 'гарантийная претензия, обращение по гарантии', 'der Gewährleistungsanspruch, der Garantiefall',
      ex('Keep the serial number ready when submitting a [[warranty claim]] at the service desk.', 'Подготовьте серийный номер при подаче гарантийного обращения на стойке сервиса.', 'Halten Sie die Seriennummer bereit, wenn Sie am Serviceschalter einen Garantiefall melden.'),
      ['Одобрить / отклонить заявку — honour (approve) / reject a warranty claim.', 'Typisch: submit / process / reject a warranty claim.']),
    W('service-level-agreement', 'noun', 'service-level agreement', 'C1', 'соглашение об уровне обслуживания (SLA)', 'die Dienstleistungsvereinbarung (SLA)',
      ex('Our enterprise support contract promises a four-hour response under the [[service-level agreement]].', 'Наш корпоративный договор поддержки обещает ответ за четыре часа согласно SLA.', 'Unser Enterprise-Vertrag sichert laut Service-Level-Agreement eine Reaktionszeit von vier Stunden zu.'),
      ['Почти всегда сокращается в устной речи до SLA (/ˌes.elˈeɪ/).', 'Im Berufsalltag fast immer als SLA abgekürzt (vereinbarte Reaktions- und Lösungszeiten).']),
    W('upselling', 'noun', 'upselling', 'B2', 'допродажа более дорогой версии или доп. опции (апселл)', 'das Upselling (Verkauf höherwertiger Varianten)',
      ex('Helpful [[upselling]] means recommending extended protection when it genuinely saves money.', 'Уместный апселл — это предложение расширенной защиты, когда это действительно выгодно клиенту.', 'Sinnvolles Upselling empfiehlt eine Zusatzleistung nur dann, wenn sie dem Kunden echten Mehrwert bietet.'),
      ['В отличие от cross-selling (сопутствующий товар), upselling переводит клиента на более старший вариант.', 'Im Unterschied zum Cross-Selling (Ergänzungsprodukt) zielt Upselling auf eine höherwertige Ausführung.']),
    W('reconcile-the-till', 'verb', 'reconcile the till', 'C1', 'свести кассу, сверить наличные и чеки в конце смены', 'die Kasse abrechnen, den Kassensturz machen',
      ex('Cashiers stay ten minutes after closing to [[reconcile the till]] against card receipts.', 'Кассиры задерживаются на десять минут после закрытия, чтобы сверить кассу с терминальными чеками.', 'Kassierkräfte bleiben nach Ladenschluss zehn Minuten, um die Kasse gegen die Kartenbelege abzurechnen.'),
      ['Till — британское слово для кассового ящика; в США чаще говорят reconcile the cash register / close out the drawer.', 'Till ist britisches Englisch für Kassenlade (AE: reconcile the cash register / drawer).'])
  ]);

  /* ── 04 · Accounting & Finance (10 new + 2 reused) ──────────────────────── */
  GT.addMember('en:it4:cash-flow', 'it', 'fin_accounting');
  GT.addMember('en:it4:overhead', 'it', 'fin_accounting');
  reg('fin_accounting', [
    W('balance-sheet', 'noun', 'balance sheet', 'C1', 'бухгалтерский баланс (отчёт об активах и пассивах)', 'die Bilanz',
      ex('Strong cash reserves and low debt keep the company’s [[balance sheet]] healthy.', 'Крупные денежные резервы и низкий долг поддерживают баланс компании в здоровом состоянии.', 'Hohe Liquiditätsreserven und geringe Schulden halten die Bilanz des Unternehmens gesund.'),
      ['Отражает состояние на конкретную дату (активы = обязательства + капитал), в отличие от отчёта о прибылях (P&L).', 'Stichtagsbezogene Gegenüberstellung von Aktiva und Passiva (im Unterschied zur GuV / P&L).']),
    W('accounts-payable', 'noun', 'accounts payable', 'C1', 'кредиторская задолженность (счета к оплате поставщикам)', 'die Verbindlichkeiten (aus Lieferungen und Leistungen)',
      ex('Check [[accounts payable]] first thing Monday so early-payment discounts are not missed.', 'Проверьте кредиторскую задолженность в понедельник утром, чтобы не упустить скидки за быструю оплату.', 'Prüfen Sie am Montag zuerst die Verbindlichkeiten, damit keine Skontofristen verfallen.'),
      ['Сокращается до AP; обозначает как долги поставщикам, так и сам отдел расчётов с ними.', 'Abgekürzt AP; bezeichnet sowohl offene Lieferantenrechnungen als auch die Kreditorenbuchhaltung.']),
    W('accounts-receivable', 'noun', 'accounts receivable', 'C1', 'дебиторская задолженность (ожидаемые платежи от клиентов)', 'die Forderungen (aus Lieferungen und Leistungen)',
      ex('Chasing invoices past sixty days keeps [[accounts receivable]] under control.', 'Работа со счетами старше шестидесяти дней удерживает дебиторскую задолженность под контролем.', 'Das Nachfassen bei überfälligen Rechnungen ab sechzig Tagen hält die Forderungen im Griff.'),
      ['Сокращается до AR; деньги, которые ещё должны поступить компании от покупателей.', 'Abgekürzt AR; offene Kundenrechnungen und die Debitorenbuchhaltung.']),
    W('depreciation', 'noun', 'depreciation', 'C1', 'амортизация основных средств; обесценение', 'die Abschreibung (auf Anlagevermögen)',
      ex('Server racks lose book value each year through straight-line [[depreciation]].', 'Серверные стойки ежегодно теряют балансовую стоимость за счёт линейной амортизации.', 'Serverschränke verlieren durch lineare Abschreibung jährlich an Buchwert.'),
      ['Для нематериальных активов (патентов, лицензий ПО) в англоязычном учёте используют термин amortisation.', 'Für immaterielle Werte wie Patente oder Software nutzt das Englische stattdessen amortisation.']),
    W('accrual', 'noun', 'accrual', 'C2', 'начисление (метод начисления, резерв будущих расходов/доходов)', 'die Periodenabgrenzung, die Rückstellung',
      ex('Under [[accrual]] accounting, bonuses are booked in the quarter staff earned them, not when paid.', 'По методу начислений премии проводятся в том квартале, когда их заработали, а не в день выплаты.', 'Nach der Periodenabgrenzung werden Boni im verdienten Quartal verbucht, nicht erst bei Auszahlung.'),
      ['Антоним — cash accounting (кассовый метод). На практике часто: monthly accruals.', 'Gegenteil: cash basis accounting (Einnahmen-Überschuss-Prinzip).']),
    W('liquidity', 'noun', 'liquidity', 'C1', 'ликвидность, доступность денежных средств для срочных выплат', 'die Liquidität',
      ex('A profitable firm can still collapse overnight if a sudden freeze hits its [[liquidity]].', 'Даже прибыльная компания может рухнуть в одночасье, если внезапно пострадает её ликвидность.', 'Ein profitables Unternehmen kann trotzdem scheitern, wenn plötzlich seine Liquidität austrocknet.'),
      ['Показывает способность быстро превратить активы в деньги без потери цены; прил. — liquid.', 'Fähigkeit, fällige Verbindlichkeiten jederzeit bedienen zu können; Adjektiv: liquid.']),
    W('solvency', 'noun', 'solvency', 'C2', 'платёжеспособность в долгосрочном периоде', 'die Solvenz, die langfristige Zahlungsfähigkeit',
      ex('Regulators stress-tested regional banks for [[solvency]] under severe recession scenarios.', 'Регуляторы провели стресс-тесты региональных банков на платёжеспособность при жёсткой рецессии.', 'Aufsichtsbehörden unterzogen Regionalbanken einem Stresstest für ihre Solvenz in einer schweren Rezession.'),
      ['Liquidity — деньги прямо сейчас; solvency — превышение активов над обязательствами в долгую.', 'Liquidity = kurzfristige Zahlungsfähigkeit; solvency = langfristige Deckung aller Schulden.']),
    W('audit-trail', 'noun', 'audit trail', 'C1', 'аудиторский след (цепочка подтверждений каждой операции)', 'der Prüfpfad, das lückenlose Änderungsprotokoll',
      ex('Approval timestamps create a clean [[audit trail]] for external financial reviewers.', 'Временные метки согласований формируют прозрачный аудиторский след для внешних ревизоров.', 'Zeitstempel bei Freigaben schaffen einen sauberen Prüfpfad für externe Wirtschaftsprüfer.'),
      ['Используется как в бухгалтерии и банковском деле, так и в IT-системах контроля.', 'Gilt in Rechnungswesen, Bankwesen und revisionssicheren IT-Systemen.']),
    W('value-added-tax', 'noun', 'value-added tax', 'B2', 'налог на добавленную стоимость (НДС)', 'die Mehrwertsteuer, die Umsatzsteuer',
      ex('Business-to-business quotes normally list net prices before [[value-added tax]].', 'В коммерческих предложениях для компаний обычно указывают нетто-цены без НДС.', 'Angebote im B2B-Bereich nennen meist Nettopreise zuzüglich Umsatzsteuer.'),
      ['Практически всегда сокращается до VAT (/væt/ или /ˌviː.eɪˈtiː/). В США аналогом выступает sales tax.', 'Meist als VAT abgekürzt (entspricht dt. MwSt./USt.); in den USA gibt es stattdessen die sales tax.']),
    W('write-off', 'phrasal verb', 'write off', 'C1', 'списать (безнадёжный долг или актив как убыток)', 'abschreiben, ausbuchen (uneinbringliche Forderung)',
      ex('After the customer entered liquidation, finance had to [[write off]] the unpaid invoice.', 'После начала ликвидации клиента бухгалтерии пришлось списать неоплаченный счёт.', 'Nachdem der Kunde in Liquidation ging, musste die Buchhaltung die offene Rechnung ausbuchen.'),
      ['Разделяемый фразовый глагол (write a bad debt off). Существительное с дефисом — write-off.', 'Trennbares Phrasal Verb; zusammengesetztes Nomen mit Bindestrich: a write-off (die Abschreibung).'])
  ]);

  /* ── 05 · Sales, Marketing & PR (10 new) ────────────────────────────────── */
  reg('fin_marketing', [
    W('lead-generation', 'noun', 'lead generation', 'B2', 'лидогенерация, привлечение потенциальных клиентов', 'die Lead-Generierung, die Neukundengewinnung',
      ex('Hosting practical security webinars became our strongest [[lead generation]] channel.', 'Проведение практических вебинаров по безопасности стало нашим сильнейшим каналом лидогенерации.', 'Praxisnahe Sicherheits-Webinare wurden unser stärkster Kanal zur Lead-Generierung.'),
      ['В маркетинге часто сокращают до lead gen; квалифицированные лиды — MQL и SQL.', 'Oft kurz lead gen; Leads werden weiter unterteilt in MQL (Marketing) und SQL (Vertrieb).']),
    W('sales-funnel', 'noun', 'sales funnel', 'B2', 'воронка продаж', 'der Verkaufstrichter (Sales Funnel)',
      ex('Too many prospects drop out halfway down the [[sales funnel]] before booking a demo.', 'Слишком много потенциальных клиентов отсеиваются на середине воронки продаж до записи на демо.', 'Zu viele Interessenten springen mitten im Sales Funnel ab, bevor sie eine Demo buchen.'),
      ['Этапы: awareness → consideration → decision / purchase; синоним — sales pipeline.', 'Stufen von Aufmerksamkeit bis Abschluss; verwandter Begriff im B2B: sales pipeline.']),
    W('press-release', 'noun', 'press release', 'B2', 'официальный пресс-релиз', 'die Pressemitteilung',
      ex('Legal reviewed the [[press release]] word by word before distributing it to journalists.', 'Юристы проверили пресс-релиз слово в слово перед рассылкой журналистам.', 'Die Rechtsabteilung prüfte die Pressemitteilung Wort für Wort vor dem Versand an die Medien.'),
      ['Глагол — issue / put out a press release; нередко под эмбарго до указанного часа.', 'Kollokation: issue / release a press statement; oft mit Sperrfrist (embargo) versehen.']),
    W('crisis-communication', 'noun', 'crisis communication', 'C1', 'антикризисные коммуникации', 'die Krisenkommunikation',
      ex('Speed, transparency and clear ownership define effective [[crisis communication]].', 'Скорость, прозрачность и ясная ответственность определяют успех антикризисных коммуникаций.', 'Tempo, Transparenz und klare Zuständigkeiten prägen wirksame Krisenkommunikation.'),
      ['Включает шаблоны заявлений, работу с прессой и координацию поддержки клиентов.', 'Umfasst Sofortstatements, Medienarbeit und abgestimmte Antworten im Kundenservice.']),
    W('brand-positioning', 'noun', 'brand positioning', 'C1', 'позиционирование бренда на рынке', 'die Markenpositionierung',
      ex('Shifting from budget tools to enterprise compliance sharpened our [[brand positioning]].', 'Переход от недорогих утилит к корпоративному комплаенсу сделал позиционирование бренда чётче.', 'Der Wechsel von günstigen Tools zu Enterprise-Compliance schärfte unsere Markenpositionierung.'),
      ['Отвечает на вопрос, какую уникальную нишу бренд занимает в сознании целевого клиента.', 'Beschreibt die gezielte Abgrenzung und Wahrnehmung einer Marke im Wettbewerbsumfeld.']),
    W('market-share', 'noun', 'market share', 'B2', 'доля рынка', 'der Marktanteil',
      ex('Local payment methods helped the platform double its [[market share]] within two years.', 'Локальные способы оплаты помогли платформе удвоить долю рынка за два года.', 'Lokale Zahlungsarten halfen der Plattform, ihren Marktanteil binnen zwei Jahren zu verdoppeln.'),
      ['Глаголы: gain / capture / hold / lose market share.', 'Feste Verben: gain / win / defend / lose market share.']),
    W('cold-outreach', 'noun', 'cold outreach', 'C1', 'холодный контакт (письма или звонки незнакомым клиентам)', 'die Kaltakquise',
      ex('Tailoring the first two sentences makes [[cold outreach]] far less likely to be ignored.', 'Персонализация первых двух фраз резко снижает риск того, что холодное обращение проигнорируют.', 'Eine individuelle Ansprache in den ersten beiden Sätzen verhindert, dass Kaltakquise ignoriert wird.'),
      ['Общий термин для cold email и cold calling без предварительной рекомендации.', 'Oberbegriff für unaufgeforderte Erstansprache per E-Mail, Nachricht oder Anruf.']),
    W('attribution', 'noun', 'attribution', 'C2', 'атрибуция (оценка вклада каналов в конверсию)', 'die Attribution, die Kanalzuordnung',
      ex('With multi-touch [[attribution]], newsletters got fair credit alongside paid search.', 'С многоканальной атрибуцией рассылки получили заслуженную оценку наравне с платной рекламой.', 'Mit Multi-Touch-Attribution bekamen Newsletter neben bezahlter Suche endlich gerechte Zurechnung.'),
      ['Маркетинговая аналитика: first-touch vs last-touch vs multi-touch attribution.', 'Analytics-Begriff: Zuordnung eines Abschlusses zu den beteiligten Kontaktpunkten.']),
    W('endorsement', 'noun', 'endorsement', 'C1', 'публичное одобрение, рекомендация (партнёром или звездой)', 'die Empfehlung, die Werbepartnerschaft',
      ex('An independent [[endorsement]] from industry engineers carries more weight than ad copy.', 'Независимая рекомендация профильных инженеров весит больше любого рекламного текста.', 'Eine unabhängige Empfehlung von Fachexperten wiegt schwerer als jeder Werbetext.'),
      ['Глагол — endorse a product/candidate; в соцсетях требует маркировки рекламы при оплате.', 'Verb: endorse (befürworten/werben); bezahlte Kooperationen unterliegen Kennzeichnungspflichten.']),
    W('rebrand', 'verb', 'rebrand', 'C1', 'провести ребрендинг, сменить образ и позиционирование', 'ein Rebranding durchführen, neu positionieren',
      ex('After expanding beyond payroll, the startup decided to [[rebrand]] under a broader name.', 'Выйдя за рамки расчёта зарплат, стартап решил провести ребрендинг под более широким именем.', 'Nach der Expansion über Lohnabrechnung hinaus beschloss das Start-up, die Marke umzubenennen.'),
      ['Может быть и переходным (rebrand the suite), и непереходным; существительное — rebranding / a rebrand.', 'Transitiv wie intransitiv nutzbar; Nomen: rebranding oder a rebrand.'])
  ]);

  /* ── 06 · HR & Recruiting (10 new + 2 reused) ───────────────────────────── */
  GT.addMember('en:it3:staff-turnover', 'it', 'fin_hr');
  GT.addMember('en:it3:employee-retention', 'it', 'fin_hr');
  reg('fin_hr', [
    W('talent-acquisition', 'noun', 'talent acquisition', 'C1', 'привлечение талантов, стратегический рекрутинг', 'die Personalbeschaffung, das Talent Acquisition',
      ex('Whereas routine hiring fills vacancies fast, [[talent acquisition]] plans pipelines months ahead.', 'Если обычный найм быстро закрывает вакансии, то стратегия привлечения талантов строит воронку на месяцы вперёд.', 'Während reguläres Recruiting offene Stellen füllt, baut Talent Acquisition langfristige Bewerberpipelines auf.'),
      ['Более стратегическое понятие, чем базовый recruiting; отдельный фокус на редких специалистах.', 'Strategischer Ansatz für langfristige Gewinnung gefragter Fachkräfte.']),
    W('candidate-screening', 'noun', 'candidate screening', 'B2', 'первичный отбор / скрининг кандидатов', 'die Vorauswahl von Bewerbenden',
      ex('Structured [[candidate screening]] checks essential criteria fairly before technical interviews.', 'Структурированный скрининг беспристрастно проверяет базовые требования до технического собеседования.', 'Ein strukturiertes Vorauswahlverfahren prüft Kernkriterien fair vor dem Fachgespräch.'),
      ['Глагол — screen applicants / CVs (отсеивать резюме на старте).', 'Verb: screen applicants / screen out unsuitable CVs.']),
    W('employer-branding', 'noun', 'employer branding', 'C1', 'развитие бренда работодателя', 'das Employer Branding (Arbeitgebermarke)',
      ex('Open engineering blogs did more for our [[employer branding]] than glossy career flyers.', 'Открытые инженерные блоги сделали для бренда работодателя больше, чем глянцевые брошюры.', 'Offene Technikblogs taten mehr für unsere Arbeitgebermarke als Hochglanzbroschüren.'),
      ['Как кандидаты и действующие сотрудники воспринимают компанию как место работы.', 'Positionierung des Unternehmens als attraktiver Arbeitgeber auf dem Arbeitsmarkt.']),
    W('succession-planning', 'noun', 'succession planning', 'C1', 'планирование преемственности (кадрового резерва)', 'die Nachfolgeplanung',
      ex('Strong [[succession planning]] prevents chaos when a key director retires or changes roles.', 'Сильное планирование преемственности спасает от хаоса при выходе ключевого директора на пенсию или переходе.', 'Gute Nachfolgeplanung verhindert Chaos, wenn eine Schlüsselkraft in den Ruhestand geht.'),
      ['Обязательный процесс HR для управленческих и уникальных технических должностей.', 'Zentraler HR-Prozess zur Absicherung von Führungs- und Schlüsselpositionen.']),
    W('attrition-rate', 'noun', 'attrition rate', 'C2', 'коэффициент естественного оттока (убыли) кадров', 'die Fluktuationsrate (natürlicher Abgang)',
      ex('An unusually high [[attrition rate]] among mid-level nurses pointed to unsustainable shifts.', 'Аномально высокий отток медсестёр среднего звена указал на непосильные смены.', 'Eine ungewöhnlich hohe Fluktuationsrate bei erfahrenen Pflegekräften verwies auf untragbare Schichten.'),
      ['Natural attrition — уход сотрудников (по собственному желанию, на пенсию) без принудительных увольнений.', 'Unterscheidung: attrition beschreibt meist das Ausscheiden durch Kündigung oder Rente ohne Neubesetzung.']),
    W('compensation-package', 'noun', 'compensation package', 'C1', 'совокупный пакет вознаграждения (оклад + бонусы + бенефиты)', 'das Vergütungspaket',
      ex('Beyond base pay, the [[compensation package]] includes pension matching and extra annual leave.', 'Помимо базового оклада, пакет вознаграждения включает пенсионные софинансирования и доп. отпуск.', 'Neben dem Grundgehalt umfasst das Vergütungspaket betriebliche Altersvorsorge und Zusatzurlaub.'),
      ['Синоним в бизнес-среде — total rewards / remuneration package.', 'Umfasst Festgehalt, variable Boni, Aktienoptionen und Nebenleistungen (Benefits).']),
    W('exit-interview', 'noun', 'exit interview', 'B2', 'выходное интервью с увольняющимся сотрудником', 'das Austrittsgespräch (Exit-Interview)',
      ex('Candid feedback in an [[exit interview]] often exposes management gaps nobody mentioned earlier.', 'Откровенный отзыв на выходном интервью часто вскрывает огрехи управления, о которых раньше молчали.', 'Offenes Feedback im Austrittsgespräch deckt oft Führungsmängel auf, die zuvor verschwiegen wurden.'),
      ['Проводится HR в последние дни работы, чтобы понять реальные причины ухода.', 'Geführt von HR kurz vor dem Ausscheiden, um ehrliche Gründe zu ermitteln.']),
    W('headhunt', 'verb', 'headhunt', 'C1', 'переманивать ценного специалиста напрямую (хедхантинг)', 'abwerben, gezielt direkt ansprechen',
      ex('Competitors tried to [[headhunt]] our lead cryptographer right after the paper was published.', 'Конкуренты попытались переманить нашего ведущего криптографа сразу после публикации статьи.', 'Wettbewerber versuchten, unseren leitenden Kryptografen direkt nach der Publikation abzuwerben.'),
      ['Рекрутинговое агентство топ-уровня называют executive search firm или headhunter.', 'Substantiv für den Personalberater: headhunter / executive recruiter.']),
    W('shortlist', 'verb', 'shortlist', 'B2', 'включить в финальный список кандидатов (шорт-лист)', 'in die engere Auswahl nehmen',
      ex('Out of ninety applicants, the hiring panel [[shortlisted]] four people for final rounds.', 'Из девяноста откликнувшихся комиссия отобрала в финал четырёх кандидатов.', 'Von neunzig Bewerbenden nahm das Gremium vier Personen in die engere Auswahl.'),
      ['Работает и как глагол (be shortlisted), и как существительное (make the shortlist).', 'Als Verb wie als Nomen (on the shortlist) gebräuchlich.']),
    W('absenteeism', 'noun', 'absenteeism', 'C2', 'хронические прогулы и невыходы на работу', 'die hohe Fehlzeitenquote, der Absentismus',
      ex('Unaddressed burnout often shows up first as rising Monday [[absenteeism]].', 'Нерешённое выгорание часто впервые проявляется в виде роста неявок по понедельникам.', 'Unbehandeltes Burn-out zeigt sich oft zuerst in steigenden Fehlzeiten am Montag.'),
      ['Имеет оттенок систематических или необоснованных отсутствий в коллективе.', 'Meint ein auffälliges Muster häufiger — oft belastungsbedingter — Abwesenheiten.'])
  ]);

  /* ── 07 · Healthcare & Clinical Work (10 new) ───────────────────────────── */
  reg('med_clinical', [
    W('triage', 'noun', 'triage', 'C1', 'медицинская сортировка (определение срочности помощи)', 'die Triage, die Ersteinschätzung nach Dringlichkeit',
      ex('During [[triage]], patients with chest pain are prioritised ahead of minor sprains.', 'На этапе сортировки пациенты с болью в груди принимаются раньше, чем при лёгких растяжениях.', 'Bei der Triage werden Patienten mit Brustschmerzen vor leichten Verstauchungen behandelt.'),
      ['От французского trier («сортировать»); используется и в ИТ-поддержке для разбора инцидентов.', 'Von frz. trier („auslesen“); im weiteren Sinn auch für Priorisierung von Bugs/Supportfällen.']),
    W('patient-history', 'noun', 'patient history', 'B2', 'анамнез, история болезни и перенесённых заболеваний', 'die Anamnese, die Krankengeschichte',
      ex('Taking an accurate [[patient history]] prevents dangerous drug interactions on admission.', 'Тщательный сбор анамнеза предотвращает опасное взаимодействие лекарств при поступлении.', 'Eine gründliche Anamnese verhindert gefährliche Wechselwirkungen bei der Aufnahme.'),
      ['Медицинский термин — anamnesis / take a medical history (собрать анамнез).', 'Verb: take a patient’s medical history (Anamnese erheben).']),
    W('ward-round', 'noun', 'ward round', 'C1', 'врачебный обход палат в стационаре', 'die Visite (im Krankenhaus)',
      ex('On the morning [[ward round]], consultants review lab trends with junior doctors and nurses.', 'На утреннем обходе старшие врачи вместе с ординаторами и медсёстрами разбирают динамику анализов.', 'Bei der morgendlichen Visite besprechen Oberärzte Laborwerte gemeinsam mit Assistenzärzten und Pflege.'),
      ['Британский термин (ward round); в США обычно говорят hospital rounds / doing rounds.', 'BE: ward round; AE: hospital rounds (Visite machen = do / make rounds).']),
    W('discharge-summary', 'noun', 'discharge summary', 'C1', 'выписной эпикриз (итоговая выписка при выписке из больницы)', 'der Entlassungsbrief, der Arztbrief',
      ex('Give a copy of the [[discharge summary]] to your family doctor for ongoing monitoring.', 'Передайте копию выписного эпикриза семейному врачу для дальнейшего наблюдения.', 'Geben Sie eine Kopie des Entlassungsbriefs Ihrer Hausärztin zur Weiterbehandlung.'),
      ['Содержит диагноз, проведённое лечение, список лекарств и рекомендации; discharge — выписка.', 'Enthält Diagnose, Therapie, Medikationsplan und Empfehlungen nach stationärem Aufenthalt.']),
    W('informed-consent', 'noun', 'informed consent', 'C1', 'информированное добровольное согласие пациента', 'die informierte Einwilligung',
      ex('Before anaesthesia, the surgeon must obtain signed [[informed consent]] explaining all risks.', 'Перед наркозом хирург обязан получить подписанное информированное согласие с разъяснением всех рисков.', 'Vor der Narkose muss der Chirurg eine informierte Einwilligung nach Risikoaufklärung einholen.'),
      ['Означает, что пациент не просто подписал бумагу, но и понял суть, альтернативы и риски.', 'Betont die verständliche ärztliche Aufklärung vor rechtswirksamer Zustimmung.']),
    W('contraindication', 'noun', 'contraindication', 'C2', 'медицинское противопоказание', 'die Gegenanzeige, die Kontraindikation',
      ex('Severe kidney impairment is an absolute [[contraindication]] for this anti-inflammatory drug.', 'Тяжёлая почечная недостаточность — абсолютное противопоказание к этому противовоспалительному препарату.', 'Eine schwere Niereninsuffizienz ist eine absolute Kontraindikation für dieses Entzündungsmittel.'),
      ['Прилагательное — contraindicated («противопоказан»); различают absolute и relative contraindication.', 'Adjektiv: contraindicated; man unterscheidet absolute und relative Kontraindikationen.']),
    W('dosage', 'noun', 'dosage', 'B2', 'дозировка, схема приёма лекарства', 'die Dosierung',
      ex('Paediatric [[dosage]] is calculated precisely by body weight rather than age alone.', 'Детская дозировка рассчитывается точно по массе тела, а не только по возрасту.', 'Die Dosierung bei Kindern wird exakt nach Körpergewicht statt nur nach Alter berechnet.'),
      ['В отличие от dose (одна разовая доза), dosage — установленная дозировка/курс.', 'Unterschied: dose = Einzeldosis, dosage = festgelegte Dosierung über den Zeitraum.']),
    W('medical-confidentiality', 'noun', 'medical confidentiality', 'C1', 'врачебная тайна', 'die ärztliche Schweigepflicht',
      ex('Clinicians are bound by [[medical confidentiality]] unless a court orders disclosure.', 'Медицинские работники связаны врачебной тайной, кроме случаев прямого предписания суда.', 'Ärzte unterliegen der ärztlichen Schweigepflicht, sofern kein gerichtlicher Beschluss vorliegt.'),
      ['Также говорят doctor-patient confidentiality; нарушение влечёт дисциплинарную и уголовную ответственность.', 'Auch doctor-patient confidentiality genannt; strafrechtlich und standesrechtlich geschützt.']),
    W('vital-signs', 'noun', 'vital signs', 'B2', 'жизненно важные показатели (пульс, давление, температура, дыхание)', 'die Vitalzeichen (Pl.)',
      ex('Nurses check post-op [[vital signs]] every thirty minutes throughout the evening.', 'Медсёстры проверяют послеоперационные жизненно важные показатели каждые тридцать минут весь вечер.', 'Pflegekräfte kontrollieren nach der OP den ganzen Abend alle dreißig Minuten die Vitalzeichen.'),
      ['Почти всегда во мн. ч.; в разговорной речи медиков сокращается до vitals.', 'Fast immer im Plural; im Klinikjargon oft verkürzt zu vitals.']),
    W('administer', 'verb', 'administer', 'C1', 'вводить лекарство; оказывать медицинскую помощь', 'verabreichen (Medikamente), durchführen',
      ex('Only trained staff may [[administer]] intravenous antibiotics in the recovery unit.', 'Только обученный персонал имеет право вводить антибиотики внутривенно в палате пробуждения.', 'Nur geschultes Fachpersonal darf im Aufwachraum intravenöse Antibiotika verabreichen.'),
      ['В медицине означает не «управлять», а именно давать/вводить препарат (administer a dose/vaccine).', 'Im klinischen Kontext nicht „verwalten“, sondern Arznei oder Impfungen verabreichen.'])
  ]);

  /* ── 08 · Logistics & Supply Chain (10 new + 2 reused) ──────────────────── */
  GT.addMember('en:it4:supply-chain', 'it', 'ops_logistics');
  GT.addMember('en:it3:procurement', 'it', 'ops_logistics');
  reg('ops_logistics', [
    W('bill-of-lading', 'noun', 'bill of lading', 'C2', 'коносамент (транспортная накладная на груз)', 'der Frachtbrief, das Konnossement',
      ex('Customs refused release because the [[bill of lading]] listed the wrong container weight.', 'Таможня отказала в выпуске груза, так как в коносаменте был указан неверный вес контейнера.', 'Der Zoll verweigerte die Freigabe, weil im Konnossement ein falsches Containergewicht stand.'),
      ['Во мн. ч. bills of lading (сокращённо B/L); ключевой товарораспорядительный документ при морских перевозках.', 'Plural: bills of lading (Abk. B/L); zentrales Warenbegleit- und Traditionspapier im Seeverkehr.']),
    W('customs-clearance', 'noun', 'customs clearance', 'C1', 'таможенная очистка / растаможка груза', 'die Zollabfertigung',
      ex('Incomplete HS codes delayed [[customs clearance]] at Rotterdam by three full days.', 'Неполные коды ТН ВЭД задержали таможенную очистку в Роттердаме на целых три дня.', 'Unvollständige Zolltarifnummern verzögerten die Zollabfertigung in Rotterdam um drei volle Tage.'),
      ['Clear customs — пройти таможню; документы ведёт таможенный брокер (customs broker).', 'Verbale Wendung: clear customs (durch den Zoll gehen).']),
    W('freight-forwarder', 'noun', 'freight forwarder', 'C1', 'экспедитор, транспортно-экспедиторская компания', 'der Spediteur, die Spedition',
      ex('Our [[freight forwarder]] consolidated pallets from three factories into one sea container.', 'Наш экспедитор объединил палеты с трёх фабрик в один морской контейнер.', 'Unser Spediteur fasste Paletten aus drei Werken zu einem Seecontainer zusammen.'),
      ['Не сам перевозчик-водитель, а организатор мультимодальной доставки, фрахта и документов.', 'Organisiert Transportkette, Frachtraum und Papiere, oft ohne eigene Lkw oder Schiffe.']),
    W('order-picking', 'noun', 'order picking', 'C1', 'подбор / комплектация заказов на складе', 'die Kommissionierung',
      ex('Voice-guided [[order picking]] reduced misshipped items across our regional warehouse.', 'Голосовая комплектация заказов снизила число ошибок отгрузки на нашем региональном складе.', 'Sprachgestützte Kommissionierung reduzierte Fehlversendungen im Regionallager.'),
      ['Сотрудника комплектации называют order picker; зона сбора — picking zone.', 'Die Tätigkeit des Zusammenstellens einzelner Kundenaufträge im Lager (Picker).']),
    W('cold-chain', 'noun', 'cold chain', 'C1', 'холодовая цепь (непрерывный температурный режим доставки)', 'die Kühlkette',
      ex('Data loggers proved the [[cold chain]] never exceeded four degrees from factory to clinic.', 'Датчики подтвердили, что холодовая цепь от завода до клиники не поднималась выше четырёх градусов.', 'Datenlogger belegten, dass die Kühlkette vom Werk bis zur Klinik nie über vier Grad lag.'),
      ['Критично для вакцин, биопрепаратов и свежих продуктов.', 'Unverzichtbar für Impfstoffe, Biologika und Frischelebensmittel.']),
    W('lead-time', 'noun', 'lead time', 'C1', 'срок выполнения заказа / поставки (от заявки до получения)', 'die Durchlaufzeit, die Lieferzeit',
      ex('Semiconductor shortages stretched component [[lead times]] from four weeks to six months.', 'Дефицит полупроводников растянул сроки поставки комплектующих с четырёх недель до шести месяцев.', 'Halbleiterengpässe dehnten die Lieferzeiten für Bauteile von vier Wochen auf sechs Monate aus.'),
      ['Полное время цикла, в отличие от транзитного времени в пути (transit time).', 'Gesamtdauer von Bestellung bis Anlieferung (länger als reine Fahrzeit / transit time).']),
    W('consignment', 'noun', 'consignment', 'C2', 'партия отправленного груза; консигнация', 'die Sendung, die Warenpartie; die Konsignation',
      ex('Each pallet in the [[consignment]] carries a barcoded packing slip for swift intake.', 'Каждая палета в партии груза снабжена упаковочным листом со штрихкодом для быстрой приёмки.', 'Jede Palette der Warenpartie trägt einen Packzettel mit Barcode für die schnelle Annahme.'),
      ['На складе также on consignment (на консигнации: оплата поставщику лишь после продажи).', 'Bedeutet sowohl Warensendung als auch Kommissionsgeschäft (goods on consignment).']),
    W('last-mile-delivery', 'noun', 'last-mile delivery', 'C1', 'доставка «последней мили» (финальный отрезок до получателя)', 'die Zustellung auf der letzten Meile',
      ex('Dense city traffic makes [[last-mile delivery]] the most expensive leg of e-commerce shipping.', 'Плотный городской трафик делает доставку последней мили самым дорогим этапом интернет-торговли.', 'Dichter Stadtverkehr macht die letzte Meile zum teuersten Abschnitt des Onlinehandels.'),
      ['От локального сортировочного хаба до двери клиента.', 'Vom lokalen Verteilzentrum direkt bis zur Haustür des Empfängers.']),
    W('inventory-turnover', 'noun', 'inventory turnover', 'C1', 'оборачиваемость товарных запасов', 'der Lagerumschlag',
      ex('Higher [[inventory turnover]] frees up warehouse space and prevents cash being tied in unsold stock.', 'Более высокая оборачиваемость запасов освобождает склад и не замораживает деньги в неликвиде.', 'Ein höherer Lagerumschlag spart Lagerfläche und bindet weniger Kapital in unverkaufter Ware.'),
      ['Показывает, сколько раз средний запас продаётся и обновляется за период.', 'Misst, wie oft der durchschnittliche Lagerbestand innerhalb eines Zeitraums verkauft wird.']),
    W('dispatch', 'verb', 'dispatch', 'C1', 'отправлять, отгружать, направлять (груз или бригаду)', 'versenden, abfertigen, entsenden',
      ex('Orders placed before three p.m. are packed and [[dispatched]] the same afternoon.', 'Заказы, оформленные до трёх часов дня, упаковываются и отгружаются в тот же день.', 'Bestellungen vor fünfzehn Uhr werden noch am selben Nachmittag verpackt und versendet.'),
      ['Встречается и написание despatch; как существительное означает диспетчерскую или дату отгрузки.', 'Nebenform despatch; als Nomen auch Versandabteilung oder Auslieferung.'])
  ]);

  /* ── 09 · Engineering, Construction & Trades (10 new + 1 reused) ─────────── */
  GT.addMember('en:it3:tender', 'it', 'ops_trades');
  reg('ops_trades', [
    W('blueprint', 'noun', 'blueprint', 'B2', 'технический чертёж, детальный план (тж. перен.)', 'der Bauplan, die Blaupause',
      ex('Check the structural [[blueprint]] before drilling near any embedded steel conduit.', 'Сверьтесь с конструктивным чертежом, прежде чем сверлить рядом со встроенными кабель-каналами.', 'Prüfen Sie den Bauplan, bevor Sie in der Nähe verdeckter Stahlrohre bohren.'),
      ['Происходит от синек светокопирования; также переносное «детальная схема/модель».', 'Ursprünglich blaue Lichtpause; heute allgemein Konstruktionszeichnung oder Vorlage.']),
    W('commissioning', 'noun', 'commissioning', 'C2', 'ввод объекта / оборудования в эксплуатацию и пусконаладка', 'die Inbetriebnahme',
      ex('Final [[commissioning]] of the ventilation plant runs two weeks of pressure and airflow tests.', 'Пусконаладка вентиляционной установки включает две недели испытаний давления и воздушного потока.', 'Die Inbetriebnahme der Lüftungsanlage umfasst zwei Wochen Druck- und Strömungstests.'),
      ['В инженерии — не «комиссия», а пуск и приёмочные тесты перед передачей заказчику.', 'Technisch die systematische Prüfung und Freigabe vor dem Regelbetrieb (commission = in Betrieb nehmen).']),
    W('site-safety', 'noun', 'site safety', 'B2', 'техника безопасности на строительной / промышленной площадке', 'die Arbeitssicherheit auf der Baustelle',
      ex('Every contractor completes a [[site safety]] briefing before receiving a gate pass.', 'Каждый подрядчик проходит инструктаж по технике безопасности на объекте до получения пропуска.', 'Jede Subfirma absolviert eine Sicherheitsunterweisung auf der Baustelle, bevor sie Zutritt erhält.'),
      ['В Великобритании также H&S (Health and Safety); на стройке требует СИЗ (PPE — personal protective equipment).', 'Umfasst Schutzhelme, PSA (PPE) und tägliche Sicherheitsunterweisungen auf Baustellen.']),
    W('defect-liability', 'noun', 'defect liability', 'C2', 'гарантийная ответственность подрядчика за строительные дефекты', 'die Mängelhaftung, die Gewährleistungsfrist am Bau',
      ex('Under the [[defect liability]] period, builders must fix hairline cracks at zero cost to the owner.', 'В период гарантии за дефекты подрядчик обязан бесплатно устранять усадочные трещины.', 'Während der Mängelhaftungsfrist muss das Bauunternehmen Setzungsrisse kostenlos beheben.'),
      ['В строительных контрактах длится обычно от одного года до пяти лет после акта приёмки.', 'Im Bauvertrag festgelegter Zeitraum nach Abnahme, in dem Mängel nachzubessern sind.']),
    W('preventive-maintenance', 'noun', 'preventive maintenance', 'C1', 'планово-предупредительное обслуживание (ППР)', 'die vorbeugende Wartung',
      ex('Scheduled [[preventive maintenance]] on lifts costs far less than emergency call-outs.', 'Плановое профилактическое обслуживание лифтов обходится гораздо дешевле аварийных выездов.', 'Planmäßige vorbeugende Wartung von Aufzügen ist deutlich günstiger als Notfalleinsätze.'),
      ['Противопоставляется reactive / breakdown maintenance (аварийному ремонту после поломки).', 'Gegenstück zur reaktiven Instandsetzung erst nach dem Ausfall.']),
    W('load-bearing', 'adj', 'load-bearing', 'C1', 'несущий (о стене, балке, конструкции)', 'tragend (Bauwesen)',
      ex('Never alter a [[load-bearing]] wall without calculations signed by a structural engineer.', 'Никогда не меняйте несущую стену без расчётов, подписанных инженером-конструктором.', 'Verändern Sie niemals eine tragende Wand ohne Statikberechnung eines Bauingenieurs.'),
      ['Синтаксически стоит перед существительным (a load-bearing beam) и пишется через дефис.', 'Steht meist attributiv mit Bindestrich (load-bearing wall = tragende Wand).']),
    W('tolerance', 'noun', 'tolerance', 'C1', 'технический допуск (допустимое отклонение размера)', 'die Toleranz, das zulässige Abmaß',
      ex('Turbine blades are machined to a [[tolerance]] of less than two hundredths of a millimetre.', 'Лопатки турбин обрабатываются с допуском менее двух сотых миллиметра.', 'Turbinenschaufeln werden mit einer Toleranz von unter zwei Hundertstel Millimetern gefertigt.'),
      ['Технический смысл: within tolerance — «в пределах допуска», tight tolerances — «жёсткие допуски».', 'Technisch: within tolerance (im Toleranzbereich), tight tolerances (enge Fertigungstoleranzen).']),
    W('retrofit', 'verb', 'retrofit', 'C1', 'модернизировать (оснастить действующий объект новой технологией)', 'nachrüsten, modernisieren (Bestandsbau)',
      ex('The municipality plans to [[retrofit]] older schools with heat pumps and solar glazing.', 'Муниципалитет планирует дооснастить старые школы тепловыми насосами и солнцезащитными стёклами.', 'Die Stadt plant, ältere Schulen mit Wärmepumpen und Sonnenschutzverglasung nachzurüsten.'),
      ['Глагол удваивает t: retrofitted, retrofitting; часто используется также как существительное a retrofit.', 'Verdoppelt im Präteritum/Partizip das t (retrofitted); auch als Nomen: a deep energy retrofit.']),
    W('sign-off-inspection', 'noun', 'sign-off inspection', 'C1', 'итоговая техническая приёмка (с подписанием акта)', 'die Bauabnahme, die Endabnahme',
      ex('Before the [[sign-off inspection]], walk the corridor with the snag list and test every valve.', 'Перед приёмочной инспекцией пройдите по коридору со списком недоделок и проверьте каждый клапан.', 'Gehen Sie vor der Endabnahme die Mängelliste durch und prüfen Sie jedes Ventil.'),
      ['От результата зависит окончательный расчёт и начало срока гарантийной ответственности.', 'Mit der erfolgreichen Abnahme beginnen Zahlungsfälligkeit und Gewährleistungsfrist.']),
    W('schematic', 'noun', 'schematic', 'C1', 'принципиальная схема (электрическая, гидравлическая, монтажная)', 'der Schaltplan, das Prinzipschema',
      ex('Technicians traced the faulty relay back to pin 7 on the wiring [[schematic]].', 'Техники отследили неисправное реле до седьмого контакта по монтажной схеме.', 'Techniker verfolgten das defekte Relais bis zu Pin 7 im Schaltplan zurück.'),
      ['В отличие от геометрического blueprint, schematic показывает именно функциональные связи и цепи.', 'Zeigt anders als ein Grundriss keine Maße, sondern logische und elektrische Verbindungen.'])
  ]);
})();

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.register({
  "tab": "it",
  "topic": "ops_logistics",
  "items": [
    {
      "id": "en:telc26:versand",
      "t": "dispatch",
      "pos": "noun",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 25,
          "headword": "Versand",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "отправка",
      "de": "der Versand",
      "examples": [
        {
          "t": "After inspection, the goods are ready for [[dispatch]].",
          "de": "Nach der Prüfung ist die Ware für den Versand bereit.",
          "ru": "После проверки товар готов к отправке.",
          "sense": {
            "ru": "отправка",
            "de": "der Versand"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    }
  ]
});
