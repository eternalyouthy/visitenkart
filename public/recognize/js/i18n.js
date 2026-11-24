/* Language metadata + learning-hint templates per KNOWN language.
 * The interface (buttons, tabs, labels) stays English. Everything here is learning content
 * (hints, prompts, explanations) and therefore follows the "I know" language.
 * To add a language: add it to GT.LANGS, add a GT.HINTS entry, create a pack (see README.md). */
(function () {
  'use strict';

  GT.LANGS = {
    ru: {
      code: 'ru', name: 'Russian', native: 'Русский', short: 'RU', brand: 'RUSSIAN',
      speech: 'ru-RU', voiceLang: /^ru([-_]|$)/i, voiceRegion: /ru[-_]RU/i,
      testPhrase: 'Здра́вствуйте! Я отвеча́ю за информацио́нную безопа́сность.',
      // names of the learned language as used inside templates of each known language
      nameIn: { en: 'Russian', de: 'Russisch' }, adjIn: { ru: 'русский', en: 'Russian', de: 'Russisch' }
    },
    en: {
      code: 'en', name: 'English', native: 'English', short: 'EN', brand: 'ENGLISH',
      speech: 'en-GB', voiceLang: /^en([-_]|$)/i, voiceRegion: /en[-_](GB|US)/i,
      testPhrase: 'Good morning! I am responsible for information security.',
      nameIn: { ru: 'английский', de: 'Englisch' }, adjIn: { ru: 'английский', en: 'English', de: 'Englisch' }
    },
    de: {
      code: 'de', name: 'German', native: 'Deutsch', short: 'DE', brand: 'DEUTSCH',
      speech: 'de-DE', voiceLang: /^de([-_]|$)/i, voiceRegion: /de[-_]DE/i,
      testPhrase: 'die Sprechstunde. Guten Tag! Ich bin für die IT-Sicherheit zuständig.',
      nameIn: { ru: 'немецкий', en: 'German' }, adjIn: { ru: 'немецкий', en: 'German', de: 'Deutsch' }
    }
  };
  GT.KNOW_ORDER = ['ru', 'en', 'de'];
  GT.LEARN_ORDER = ['de', 'en', 'ru'];

  /* Learning hints, written in the KNOWN language. {L} = learned language name in that language. */
  GT.HINTS = {
    ru: {
      pickMeaning: 'Выберите точное значение выделенного слова/выражения:',
      restoreWord: 'Восстановите слово или выражение по контексту ({L} язык).',
      fillGrammar: 'Заполните пропуск правильной грамматической формой.',
      prefixQ: 'Какое значение приставки «{P}» работает в этом предложении?',
      particleQ: 'Какое значение частицы «{P}» работает в этом предложении?',
      allMeanings: 'Все значения:',
      opaque: 'Слово «{W}» («{M}») нельзя напрямую вывести из базового слова «{B}» («{BM}»). Запоминайте его как самостоятельное значение.',
      opaqueGeneric: 'Современное значение слова «{W}» разошлось с базовым значением корня — запоминайте его отдельно.',
      register: {
        formal: 'Формально: вежливая форма, учреждения, письма, незнакомые люди.',
        neutral: 'Нейтрально: подходит почти везде — на работе и в быту.',
        informal: 'Неформально: с друзьями и близкими коллегами.',
        literary: 'Книжно-выразительно: родом из классики, но понятно носителям в живой речи, эссе и разговоре — главное, без пафоса.',
        ironic: 'Иронично: литературная формула с тонкой усмешкой — уместна в умном разговоре, статье или дружеском споре.',
        elevated: 'Возвышенно-образно: сильная литературная метафора для точных описаний, писем и глубоких разговоров.'
      },
      studio: {
        mixed: 'Смешанный режим: чередует узнавание в контексте ({LS} → {KS}) и активное воспроизведение (перевод, пропуск, словообразование). Оценка сразу сохраняется в FSRS-5.',
        recognition: 'Направление {LS} → {KS}: вы видите предложение в контексте и выбираете точное значение.',
        translation: 'Направление {KS} → {LS}: по значению (и подсказке части речи) вспоминаете и вводите слово или фразу.',
        derivative: 'Словообразование: даётся базовое слово семейства и контекст — нужно образовать правильное производное слово.',
        cloze: 'Контекстный пропуск (Cloze): восстановите нужное слово или выражение в правильной форме прямо внутри предложения.',
        affix: 'Тренировка приставок и суффиксов: значения в контексте, род и часть речи по суффиксу.',
        grammar: 'Грамматические задания из всех доступных тем (выбор формы и заполнение пропусков с объяснением).'
      },
      missing: 'Перевод ещё не готов — показан оригинал.',
      prompt: {
        intro: 'Давай потренируем разговорный {ADJ} язык. Обо мне: я живу в Германии, работаю в IT аналитиком SOC и общаюсь не только с технарями, но и с коллегами из других отделов. Читаю и понимаю на слух лучше, чем говорю; активный словарный запас слабее.',
        topic: 'Тема: ', scenario: 'Сценарий: ', scenarioDefault: 'реалистичная бытовая ситуация, в которой эти слова нужны естественным образом. Роль выбери сам.',
        words: 'Слова, которые я только что выучил(а):', chunks: 'Фразы, которые я хочу использовать:', rules: 'Правила:',
        r1: '1. Разыграй со мной этот сценарий. Говори со мной ТОЛЬКО на языке, который я учу ({LN}), и оставайся в роли. Начни с одной короткой реплики.',
        r2: '2. Заставляй меня активно использовать слова и фразы из списка: создавай ситуации и задавай вопросы, где они нужны. Сам(а) их все не используй. Если я какие-то избегаю — мягко подталкивай к ним.',
        r3: '3. Твой язык — уровня {LVL}: короткие предложения, частотная лексика, без редких идиом. Говори естественно, как носитель.',
        r4: '4. НЕ перебивай и не исправляй меня посреди фразы. Сначала ответь в роли. Потом, в КОНЦЕ каждого обмена репликами, добавь короткий блок «Korrektur:» — максимум 3 главные ошибки: мой вариант → правильный вариант + короткое объяснение ПО-РУССКИ. Если ошибок нет, напиши «Korrektur: ✓».',
        r5: '5. Примерно через 10 обменов заверши сцену и скажи по-русски, какие слова и фразы я использовал(а) правильно, а какие избегал(а) или употребил(а) с ошибками.',
        start: 'Начинай. Сама ролевая игра — только на изучаемом языке.'
      }
    },
    en: {
      pickMeaning: 'Choose the exact meaning of the highlighted word or phrase:',
      restoreWord: 'Restore the {L} word or phrase from the context.',
      fillGrammar: 'Fill the gap with the correct grammatical form.',
      prefixQ: 'Which meaning of the prefix “{P}” is at work in this sentence?',
      particleQ: 'Which meaning of the particle “{P}” is at work in this sentence?',
      allMeanings: 'All meanings:',
      opaque: 'The word “{W}” (“{M}”) cannot be derived directly from the base word “{B}” (“{BM}”). Learn it as a meaning of its own.',
      opaqueGeneric: 'The modern meaning of “{W}” has drifted away from the root — learn it separately.',
      register: {
        formal: 'Formal: polite address, offices, letters, people you don’t know.',
        neutral: 'Neutral: fits almost everywhere — at work and in everyday life.',
        informal: 'Informal: with friends and close colleagues.',
        literary: 'Literary & expressive: born in classic literature, still understood by native speakers in essays and conversation — best used lightly, without melodrama.',
        ironic: 'Ironic: a literary turn of phrase with dry wit — natural in sharp conversation, essays or friendly debate.',
        elevated: 'Elevated & vivid: a strong literary image suited to precise descriptions, letters and thoughtful conversation.'
      },
      studio: {
        mixed: 'Mixed mode: alternates recognition in context ({LS} → {KS}) and active recall (translation, cloze, word formation). Ratings go straight into FSRS-5.',
        recognition: 'Direction {LS} → {KS}: you see a sentence in context and pick the exact meaning.',
        translation: 'Direction {KS} → {LS}: from the meaning (and a part-of-speech hint) recall and type the word or phrase.',
        derivative: 'Word formation: you get the base word of a family plus a context and form the correct derivative.',
        cloze: 'Cloze: restore the word or phrase in the correct form inside the sentence.',
        affix: 'Prefixes and suffixes: meanings in context, gender and part of speech from the suffix.',
        grammar: 'Grammar tasks from every available topic (choose the form or fill the gap, with an explanation).'
      },
      missing: 'Translation not available yet — showing the original.',
      prompt: {
        intro: 'Let’s practise spoken {ADJ}. About me: I live in Germany, work in IT as a SOC analyst and talk not only to techies but also to colleagues from other departments. I read and understand better than I speak; my active vocabulary is weaker.',
        topic: 'Topic: ', scenario: 'Scenario: ', scenarioDefault: 'a realistic everyday situation in which these words come up naturally. Choose the roles yourself.',
        words: 'Words I have just learned:', chunks: 'Phrases I want to use:', rules: 'Rules:',
        r1: '1. Play this scenario with me. Speak to me ONLY in the language I am learning ({LN}) and stay in your role. Start with one short line.',
        r2: '2. Make me actively use the words and phrases from the list: create situations and ask questions where they are needed. Don’t use them all yourself. If I avoid some, nudge me gently towards them.',
        r3: '3. Keep your language at {LVL} level: short sentences, frequent vocabulary, no rare idioms. Speak naturally, like a native speaker.',
        r4: '4. Do NOT interrupt or correct me mid-sentence. First answer in your role. Then, at the END of each exchange, add a short “Correction:” block — at most 3 main mistakes: my version → correct version + a short explanation IN ENGLISH. If there are no mistakes, write “Correction: ✓”.',
        r5: '5. After about 10 exchanges, end the scene and tell me in English which words and phrases I used correctly and which I avoided or used with mistakes.',
        start: 'Go ahead. The role-play itself only in the language I am learning.'
      }
    },
    de: {
      pickMeaning: 'Wähle die genaue Bedeutung des markierten Wortes oder Ausdrucks:',
      restoreWord: 'Ergänze das Wort oder den Ausdruck ({L}) aus dem Kontext.',
      fillGrammar: 'Fülle die Lücke mit der richtigen grammatischen Form.',
      prefixQ: 'Welche Bedeutung des Präfixes „{P}“ wirkt in diesem Satz?',
      particleQ: 'Welche Bedeutung der Partikel „{P}“ wirkt in diesem Satz?',
      allMeanings: 'Alle Bedeutungen:',
      opaque: 'Das Wort „{W}“ („{M}“) lässt sich nicht direkt aus dem Grundwort „{B}“ („{BM}“) ableiten. Lerne es als eigene Bedeutung.',
      opaqueGeneric: 'Die heutige Bedeutung von „{W}“ hat sich von der Wurzel entfernt — lerne sie separat.',
      register: {
        formal: 'Formell: höfliche Anrede, Behörden, Briefe, fremde Menschen.',
        neutral: 'Neutral: passt fast überall — bei der Arbeit und im Alltag.',
        informal: 'Informell: mit Freunden und vertrauten Kollegen.',
        literary: 'Literarisch-ausdrucksstark: stammt aus der Klassik, ist Muttersprachlern aber heute noch vertraut — am besten ohne Pathos verwendet.',
        ironic: 'Ironisch: eine literarische Wendung mit trockenem Witz — passt in kluge Gespräche, Essays oder Debatten.',
        elevated: 'Gehoben & bildhaft: eine prägnante literarische Metapher für genaue Beschreibungen, Briefe und tiefere Gespräche.'
      },
      studio: {
        mixed: 'Gemischter Modus: wechselt zwischen Wiedererkennen im Kontext ({LS} → {KS}) und aktivem Abrufen (Übersetzung, Lückentext, Wortbildung). Die Bewertung geht direkt in FSRS-5.',
        recognition: 'Richtung {LS} → {KS}: Du siehst einen Satz im Kontext und wählst die genaue Bedeutung.',
        translation: 'Richtung {KS} → {LS}: Aus der Bedeutung (und einem Wortart-Hinweis) das Wort oder den Ausdruck abrufen und eintippen.',
        derivative: 'Wortbildung: Du bekommst das Grundwort einer Familie und einen Kontext und bildest die richtige Ableitung.',
        cloze: 'Lückentext: Ergänze das Wort oder den Ausdruck in der richtigen Form direkt im Satz.',
        affix: 'Präfixe und Suffixe: Bedeutungen im Kontext, Genus und Wortart nach dem Suffix.',
        grammar: 'Grammatikaufgaben aus allen verfügbaren Themen (Form wählen oder Lücke füllen, mit Erklärung).'
      },
      missing: 'Übersetzung noch nicht vorhanden — Original wird angezeigt.',
      prompt: {
        intro: 'Lass uns gesprochenes {ADJ} üben. Über mich: Ich lebe in Deutschland, arbeite in der IT als SOC-Analyst und spreche nicht nur mit Technikern, sondern auch mit Kollegen aus anderen Abteilungen. Ich lese und verstehe besser, als ich spreche; mein aktiver Wortschatz ist schwächer.',
        topic: 'Thema: ', scenario: 'Szenario: ', scenarioDefault: 'eine realistische Alltagssituation, in der diese Wörter natürlich vorkommen. Wähle die Rollen selbst.',
        words: 'Wörter, die ich gerade gelernt habe:', chunks: 'Wendungen, die ich benutzen möchte:', rules: 'Regeln:',
        r1: '1. Spiel dieses Szenario mit mir. Sprich mit mir NUR in der Sprache, die ich lerne ({LN}), und bleib in deiner Rolle. Beginne mit einem kurzen Satz.',
        r2: '2. Bring mich dazu, die Wörter und Wendungen aus der Liste aktiv zu benutzen: Schaffe Situationen und stelle Fragen, in denen sie nötig sind. Benutze sie nicht alle selbst. Wenn ich manche vermeide, schubse mich sanft dorthin.',
        r3: '3. Dein Sprachniveau ist {LVL}: kurze Sätze, häufiger Wortschatz, keine seltenen Redewendungen. Sprich natürlich wie ein Muttersprachler.',
        r4: '4. Unterbrich und korrigiere mich NICHT mitten im Satz. Antworte zuerst in deiner Rolle. Füge dann AM ENDE jedes Austauschs einen kurzen Block „Korrektur:“ hinzu — höchstens 3 Hauptfehler: meine Version → richtige Version + kurze Erklärung AUF DEUTSCH. Wenn es keine Fehler gibt, schreib „Korrektur: ✓“.',
        r5: '5. Beende die Szene nach etwa 10 Wechseln und sag mir auf Deutsch, welche Wörter und Wendungen ich richtig benutzt und welche ich vermieden oder falsch verwendet habe.',
        start: 'Fang an. Das Rollenspiel selbst nur in der Sprache, die ich lerne.'
      }
    }
  };

  /** Hint text in the known language with placeholders filled. */
  GT.hint = function (path, vars) {
    var src = GT.HINTS[GT.know] || GT.HINTS.ru;
    var v = path.split('.').reduce(function (o, k) { return o && o[k]; }, src);
    if (v == null) v = path.split('.').reduce(function (o, k) { return o && o[k]; }, GT.HINTS.en);
    if (typeof v !== 'string') return v;
    var L = GT.LANGS[GT.learn], K = GT.LANGS[GT.know];
    var base = { L: (L.nameIn && L.nameIn[GT.know]) || L.name, LS: L.short, KS: K.short, LN: L.native, ADJ: (L.adjIn && L.adjIn[GT.know]) || L.name };
    vars = Object.assign(base, vars || {});
    return v.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
  };
})();
