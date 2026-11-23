GT.register({ tab: 'it', topic: 'dev', items: [
{
  id: 'it-dev-deployen', pos: 'verb',
  de: 'deployen', forms: { praes: 'deployt', praet: 'deployte', perf: 'hat deployt' }, gov: '+ Akk.',
  ru: 'деплоить, развёртывать',
  usage: { says: 'english', note: 'Разработчики говорят «deployen» и «das Deployment». В официальных документах — «bereitstellen» или «ausrollen» (выкатывать); «live gehen» — запуститься.' },
  examples: [
    { de: 'Wir [[deployen]] erst nach dem Code-Review.', ru: 'Мы деплоим только после код-ревью.' },
    { de: 'Die neue Version ist seit heute Morgen [[deployt]].', ru: 'Новая версия задеплоена с сегодняшнего утра.' }
  ],
  morph: 'deploy-en',
  family: ['das Deployment', 'ausrollen', 'bereitstellen', 'live gehen'],
  note: 'Английские глаголы получают немецкие окончания: ich deploye, er deployt, hat deployt. Так же: «committen» (hat committet), «pushen» (hat gepusht), «mergen» (hat gemergt).',
  why: {
    confidence: 'high',
    text: 'Состав: английский глагол deploy + немецкое инфинитивное окончание -en.\nПроисхождение: английское deploy заимствовано из французского déployer («развёртывать» — сначала о войсках, от латинского displicāre «разворачивать»). В IT закрепилось для развёртывания приложений; русское «развёртывать» передаёт ту же метафору.\nПрозрачность: заимствованный IT-термин.',
    source: 'OED / Wiktionary, s.v. deploy',
    evidence: 'Англ. deploy < фр. déployer < лат. displicāre «разворачивать»; в немецком оформлено суффиксом -en.'
  },
  ru_link: null
},
{
  id: 'it-dev-anforderung', pos: 'noun',
  de: 'Anforderung', article: 'die', plural: 'die Anforderungen',
  ru: 'требование',
  usage: { says: 'german', note: '«Anforderungen» — норма (также «die Anforderungsanalyse»). «Requirements» слышно в международных командах.' },
  examples: [
    { de: 'Die [[Anforderungen]] haben sich im Sprint schon wieder geändert.', ru: 'Требования в спринте опять поменялись.' },
    { de: 'Das System erfüllt noch nicht alle [[Anforderungen]] an den Datenschutz.', ru: 'Система пока не соответствует всем требованиям по защите данных.' }
  ],
  morph: 'An-forder-ung', root: 'fordern',
  parts: [['An-', 'к, направленность'], ['forder', 'основа fordern — требовать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['fordern', 'die Forderung', 'anfordern', 'überfordern', 'die Herausforderung'],
  note: '«Anforderungen erfüllen» — соответствовать требованиям; «Anforderungen an + Akk.». Глагол «anfordern» — запросить («Zugriff anfordern»). «Die Herausforderung» — вызов (сложная задача); «überfordert sein» — не справляться, быть перегруженным.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола anfordern (an- + fordern) + суффикс -ung.\nПроисхождение: глагол fordern («требовать») исторически связан с vorder («передний») — «вызывать вперёд, требовать». Приставочное anfordern («запрашивать, требовать») дало отглагольное существительное Anforderung.\nПрозрачность: прозрачная — корень fordern сразу узнаётся.',
    source: 'DWDS (Pfeifer), s.v. fordern / anfordern',
    evidence: 'Отглагольное существительное от anfordern (an- + fordern «требовать», исторически к vorder).'
  },
  ru_link: null
},
{
  id: 'it-dev-commit', pos: 'noun',
  de: 'Commit', article: 'der', plural: 'die Commits',
  ru: 'коммит',
  usage: { says: 'english', note: 'Лексика Git остаётся английской: der Commit, der Branch, der Merge-Request / Pull-Request, committen, pushen, mergen.' },
  examples: [
    { de: 'Mit dem letzten [[Commit]] ist der Build kaputtgegangen.', ru: 'После последнего коммита сборка сломалась.' },
    { de: 'Hast du die Änderungen schon [[committet]]?', ru: 'Ты уже закоммитил изменения?' }
  ],
  morph: 'Commit',
  family: ['committen', 'der Branch', 'pushen', 'mergen', 'der Build'],
  note: 'Perfekt: «hat committet» (два t). «Der Build ist rot / kaputt» — сборка падает.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование из английского.\nПроисхождение: английский глагол commit восходит к латинскому committere («соединять; вверять, поручать»). В базах данных и системах контроля версий commit закрепилось за фиксацией изменений.\nПрозрачность: непроизводный IT-англицизм.',
    source: 'OED / Wiktionary, s.v. commit',
    evidence: 'Англ. commit < лат. committere «вверять, поручать»; термин фиксации транзакций и версий в IT.'
  },
  ru_link: null
}
]});
