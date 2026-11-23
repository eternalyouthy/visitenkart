/* German B2 vocabulary · second batch for the B2 discussion themes (4 per theme). Original examples and translations. */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function W(o, note) { o.level = 'b2'; if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; } return o; }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('b2_psyche', [
    W({ id: 'b2-psyche-achtsamkeit', pos: 'noun', de: 'Achtsamkeit', article: 'die', ru: 'осознанность, внимательность к себе', en: 'mindfulness',
      examples: [ex('Ein paar Minuten [[Achtsamkeit]] am Morgen helfen mir, ruhiger in den Tag zu starten.', 'Несколько минут осознанности утром помогают мне спокойнее начать день.', 'A few minutes of mindfulness in the morning help me start the day more calmly.')] }),
    W({ id: 'b2-psyche-burnout', pos: 'noun', de: 'Burn-out', article: 'das', plural: 'die Burn-outs', ru: 'выгорание', en: 'burnout',
      examples: [ex('Nach Monaten mit Überstunden bekam er ein [[Burn-out]].', 'После нескольких месяцев переработок у него случилось выгорание.', 'After months of overtime, he burned out.')] },
      ['Пишется и Burnout, и Burn-out. Глагол: ausgebrannt sein — быть выгоревшим.', 'Spelled Burnout or Burn-out. Related: ausgebrannt sein — to be burned out.']),
    W({ id: 'b2-psyche-ausgeglichen', pos: 'adj', de: 'ausgeglichen', ru: 'уравновешенный, спокойный', en: 'balanced, even-tempered',
      examples: [ex('Seit ich regelmäßig Sport mache, bin ich viel [[ausgeglichener]].', 'С тех пор как я регулярно занимаюсь спортом, я стал гораздо уравновешеннее.', 'Since I started exercising regularly, I’ve been much more balanced.')] }),
    W({ id: 'b2-psyche-auszeit', pos: 'noun', de: 'Auszeit', article: 'die', plural: 'die Auszeiten', ru: 'перерыв, передышка (время для себя)', en: 'time out, break',
      examples: [ex('Nach dem Projekt nehme ich mir eine kurze [[Auszeit]].', 'После проекта я возьму короткую передышку.', 'After the project I’m going to take a short break.')] },
      ['Устойчиво: sich eine Auszeit nehmen.', 'Set phrase: sich eine Auszeit nehmen.'])
  ]);

  reg('b2_umwelt', [
    W({ id: 'b2-umwelt-klimawandel', pos: 'noun', de: 'Klimawandel', article: 'der', ru: 'изменение климата', en: 'climate change',
      examples: [ex('Der [[Klimawandel]] führt auch in Mitteleuropa zu längeren Hitzeperioden.', 'Изменение климата и в Центральной Европе приводит к более долгим периодам жары.', 'Climate change is leading to longer heatwaves in Central Europe too.')] }),
    W({ id: 'b2-umwelt-muelltrennung', pos: 'noun', de: 'Mülltrennung', article: 'die', ru: 'раздельный сбор мусора', en: 'waste separation, recycling',
      examples: [ex('In unserem Haus klappt die [[Mülltrennung]] leider nicht besonders gut.', 'В нашем доме раздельный сбор мусора, к сожалению, работает не очень.', 'Unfortunately, waste separation doesn’t work very well in our building.')] },
      ['В Германии: Gelber Sack / Gelbe Tonne — упаковка, Biotonne — органика, Altpapier — бумага.', 'In Germany: Gelber Sack / Gelbe Tonne for packaging, Biotonne for organic waste, Altpapier for paper.']),
    W({ id: 'b2-umwelt-erneuerbar', pos: 'adj', de: 'erneuerbar', ru: 'возобновляемый', en: 'renewable',
      examples: [ex('Mehr als die Hälfte des Stroms stammt inzwischen aus [[erneuerbaren]] Energien.', 'Больше половины электроэнергии уже производится из возобновляемых источников.', 'More than half of the electricity now comes from renewable energy.')] }),
    W({ id: 'b2-umwelt-artenvielfalt', pos: 'noun', de: 'Artenvielfalt', article: 'die', ru: 'биоразнообразие', en: 'biodiversity',
      examples: [ex('Blühwiesen in der Stadt fördern die [[Artenvielfalt]].', 'Цветущие луга в городе поддерживают биоразнообразие.', 'Wildflower meadows in the city promote biodiversity.')] })
  ]);

  reg('b2_wirtschaft', [
    W({ id: 'b2-wirtschaft-verbraucher', pos: 'noun', de: 'Verbraucher', article: 'der', plural: 'die Verbraucher', ru: 'потребитель', en: 'consumer',
      examples: [ex('[[Verbraucher]] können online gekaufte Waren innerhalb von 14 Tagen zurückgeben.', 'Потребители могут вернуть товар, купленный онлайн, в течение 14 дней.', 'Consumers can return goods bought online within 14 days.')] },
      ['Verbraucherschutz — защита прав потребителей; Verbraucherzentrale — бюро консультаций для потребителей.', 'Verbraucherschutz — consumer protection; Verbraucherzentrale — consumer advice centre.']),
    W({ id: 'b2-wirtschaft-inflation', pos: 'noun', de: 'Inflation', article: 'die', ru: 'инфляция', en: 'inflation',
      examples: [ex('Wegen der hohen [[Inflation]] reicht das Gehalt am Monatsende kaum noch.', 'Из-за высокой инфляции зарплаты к концу месяца едва хватает.', 'Because of high inflation, the salary barely lasts until the end of the month.')] }),
    W({ id: 'b2-wirtschaft-ratenzahlung', pos: 'noun', de: 'Ratenzahlung', article: 'die', plural: 'die Ratenzahlungen', ru: 'оплата в рассрочку', en: 'payment in instalments',
      examples: [ex('Das Sofa haben wir auf [[Ratenzahlung]] gekauft.', 'Диван мы купили в рассрочку.', 'We bought the sofa in instalments.')] }),
    W({ id: 'b2-wirtschaft-gewaehrleistung', pos: 'noun', de: 'Gewährleistung', article: 'die', ru: 'законная гарантия (ответственность продавца за брак)', en: 'statutory warranty',
      examples: [ex('Innerhalb der [[Gewährleistung]] muss der Händler das Gerät reparieren.', 'В рамках законной гарантии продавец обязан отремонтировать устройство.', 'Under the statutory warranty, the retailer has to repair the device.')] },
      ['Gewährleistung — по закону, два года, отвечает продавец. Garantie — добровольно, от производителя.', 'Gewährleistung is the legal two-year liability of the seller. Garantie is a voluntary manufacturer’s guarantee.'])
  ]);

  reg('b2_gesellschaft', [
    W({ id: 'b2-gesellschaft-integration', pos: 'noun', de: 'Integration', article: 'die', ru: 'интеграция', en: 'integration',
      examples: [ex('Sprachkurse sind ein wichtiger Schritt zur [[Integration]].', 'Языковые курсы — важный шаг к интеграции.', 'Language courses are an important step towards integration.')] }),
    W({ id: 'b2-gesellschaft-vorurteil', pos: 'noun', de: 'Vorurteil', article: 'das', plural: 'die Vorurteile', ru: 'предрассудок, предубеждение', en: 'prejudice',
      examples: [ex('Persönliche Begegnungen helfen, [[Vorurteile]] abzubauen.', 'Личные встречи помогают преодолеть предрассудки.', 'Meeting people in person helps break down prejudice.')] },
      ['Vor-urteil — буквально «пред-суждение», как русское «пред-убеждение».', 'Vor-urteil — literally “pre-judgement”, like English prejudice.']),
    W({ id: 'b2-gesellschaft-vielfalt', pos: 'noun', de: 'Vielfalt', article: 'die', ru: 'разнообразие', en: 'diversity, variety',
      examples: [ex('Die kulturelle [[Vielfalt]] macht das Viertel lebendig.', 'Культурное разнообразие делает район живым.', 'Cultural diversity makes the neighbourhood lively.')] }),
    W({ id: 'b2-gesellschaft-wahlbeteiligung', pos: 'noun', de: 'Wahlbeteiligung', article: 'die', ru: 'явка на выборах', en: 'voter turnout',
      examples: [ex('Die [[Wahlbeteiligung]] lag dieses Mal bei 76 Prozent.', 'Явка на этот раз составила 76 процентов.', 'Voter turnout was 76 per cent this time.')] })
  ]);

  reg('b2_bildung', [
    W({ id: 'b2-bildung-stipendium', pos: 'noun', de: 'Stipendium', article: 'das', plural: 'die Stipendien', ru: 'стипендия, грант на учёбу', en: 'scholarship, grant',
      examples: [ex('Mit dem [[Stipendium]] kann sie ein Jahr im Ausland studieren.', 'Благодаря стипендии она может год учиться за границей.', 'The scholarship allows her to study abroad for a year.')] }),
    W({ id: 'b2-bildung-praktikum', pos: 'noun', de: 'Praktikum', article: 'das', plural: 'die Praktika', ru: 'стажировка, практика', en: 'internship, work placement',
      examples: [ex('Im Sommer mache ich ein [[Praktikum]] bei einer Agentur.', 'Летом я прохожу стажировку в агентстве.', 'This summer I’m doing an internship at an agency.')] },
      ['Мн. ч. die Praktika. Человек — der Praktikant / die Praktikantin.', 'Plural: die Praktika. The person is der Praktikant / die Praktikantin.']),
    W({ id: 'b2-bildung-berufsbegleitend', pos: 'adj', de: 'berufsbegleitend', ru: 'без отрыва от работы', en: 'part-time alongside work',
      examples: [ex('Er macht seinen Master [[berufsbegleitend]] am Wochenende.', 'Он получает магистра без отрыва от работы, по выходным.', 'He’s doing his master’s part-time at weekends alongside his job.')] }),
    W({ id: 'b2-bildung-fernstudium', pos: 'noun', de: 'Fernstudium', article: 'das', ru: 'заочное (дистанционное) обучение', en: 'distance learning',
      examples: [ex('Ein [[Fernstudium]] verlangt viel Selbstdisziplin.', 'Дистанционное обучение требует большой самодисциплины.', 'Distance learning requires a lot of self-discipline.')] })
  ]);
})();
