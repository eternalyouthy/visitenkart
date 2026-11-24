/* DE translations for the additional RU grammar lessons and drills. */
(function () {
  'use strict';
  function translate(id, fields, examples) {
    var page = GT._target.grammar[id];
    page.i18n = page.i18n || {};
    page.i18n.de = fields;
    examples.forEach(function (translation, i) { page.examples[i].de = translation; });
  }

  translate("budushchee", {
    title: "Zwei Formen für die Zukunft",
    summary: "Wähle die Zukunftsform für eine Tätigkeit oder deren Abschluss.",
    explanation: "<p>Für eine imperfektive Tätigkeit konjugiert man <b>быть</b> und lässt den Infinitiv stehen. <em>З+автра я б+уду чит+ать.</em> Für ein perfektives Ereignis steht die konjugierte Verbform allein. <em>З+автра я прочит+аю стать+ю.</em></p><p>Person und Numerus stehen am Hilfsverb oder am perfektiven Verb. Vergleiche <em>мы б+удем чит+ать</em> und <em>мы прочит+аем</em>.</p>"
  }, ["Wir werden den ganzen Tag die Wände streichen.","Bis Freitag werden wir die Küche fertig gestrichen haben."]);
  translate("svoi-ili-ego", {
    title: "Besitz mit свой, его und её",
    summary: "Bestimme zuerst das Subjekt und dann den Besitzer.",
    explanation: "<p><b>Свой</b> verweist auf das Subjekt desselben Teilsatzes. Genus, Numerus und Kasus richten sich nach dem Besitzgegenstand. <em>Л+ена берёт сво+ю с+умку.</em> Die Tasche gehört Lena.</p><p>Die Possessivformen <b>ег+о</b> und <b>её</b> bleiben unverändert. Bei einem Subjekt in der dritten Person können sie auf jemand anderen verweisen. Der Zusammenhang bestimmt, wer gemeint ist.</p>"
  }, ["Anna nahm ihren eigenen Schirm mit.","Mascha hat einen Schirm. Anna nahm Maschas Schirm mit."]);
  translate("uslovie-by", {
    title: "Gedachte Bedingungen mit бы",
    summary: "Verbinde eine Vergangenheitsform mit бы, um eine andere Situation zu beschreiben.",
    explanation: "<p><b>+Если бы</b> leitet eine gedachte Bedingung ein. Der Folgesatz hat gewöhnlich ein eigenes <b>бы</b>. In beiden Teilsätzen richtet sich die Verbform wie im Präteritum nach dem Subjekt. <em>+Если бы у мен+я б+ыло вр+емя, я бы ост+алась.</em></p><p>Den Zeitpunkt der gedachten Situation zeigt der Kontext an. Die Partikel <em>бы</em> bleibt bei Singular und Plural gleich.</p>"
  }, ["Wenn der Laden offen wäre, würden wir Brot kaufen.","Wenn wir gestern früher losgegangen wären, hätten wir den Zug erreicht."]);

  GT.localize('de', {
    "ru-g-aspect-practice": { explain: "Gefragt wird nach der Beschäftigung während des Abends. Das imperfektive пис+ал bezeichnet die Tätigkeit." },
    "ru-g-cases-practice": { explain: "Die Tasche ist das Ziel. Nach в steht der Akkusativ с+умку." },
    "ru-g-motion-practice": { explain: "Die Person ist gerade mit einem Fahrzeug zu einem Ziel unterwegs. Dafür steht +еду." },
    "ru-g-genitive-practice": { explain: "До verlangt den Genitiv. In ур+ока bleibt die Betonung auf dem Stamm." },
    "ru-g-dative-practice": { explain: "Die Person, der kalt ist, steht im Dativ." },
    "ru-g-instrumental-practice": { explain: "Der Schlüssel ist das Werkzeug. Dafür steht der Instrumental ohne Präposition." },
    "ru-g-adjectives-practice": { explain: "Ч+ашку ist Femininum im Akkusativ Singular. Das Adjektiv erhält -ую." },
    "ru-g-reflexive-practice": { explain: "Der Laden schließt. Die dritte Person Singular endet hier auf -ется." },
    "ru-g-budushchee-aux": { explain: "Zu мы gehört б+удем. Die Tätigkeit steht im Infinitiv." },
    "ru-g-budushchee-inf": { explain: "Das Hilfsverb trägt Person und Tempus. Der imperfektive Infinitiv bleibt stehen." },
    "ru-g-budushchee-pf": { explain: "Das Ziel ist eine fertige Antwort. Die erste Person Futur des perfektiven Verbs lautet напиш+у." },
    "ru-g-budushchee-plural": { explain: "Получ+ить ist perfektiv. Die Zukunftsform zu вы lautet пол+учите." },
    "ru-g-svoi-ili-ego-own": { explain: "Nina ist Subjekt und Besitzerin. П+аспорт ist maskulin und unbelebt." },
    "ru-g-svoi-ili-ego-other": { explain: "Der Bruder ist das Subjekt, Olja die Besitzerin. Dafür steht её." },
    "ru-g-svoi-ili-ego-case": { explain: "Помог+ать verlangt den Dativ. Im Femininum Singular steht сво+ей." },
    "ru-g-svoi-ili-ego-plural": { explain: "Im unbelebten Akkusativ Plural steht passend zu ключ+и die Form сво+и." },
    "ru-g-uslovie-by-particle": { explain: "Бы kennzeichnet den Regen als gedachte Bedingung." },
    "ru-g-uslovie-by-fem": { explain: "Die Vergangenheitsform richtet sich nach dem femininen Singular он+а." },
    "ru-g-uslovie-by-neuter": { explain: "Вр+емя ist Neutrum Singular, daher steht б+ыло." },
    "ru-g-uslovie-by-plural": { explain: "Мы verlangt die Pluralform auf -ли. Die Partikel бы bleibt unverändert." }
  });
})();
