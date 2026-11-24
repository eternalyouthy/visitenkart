/* Curated list of elementary / obvious words and transparent IT cognates for the "Hide basics" toggle (English pack).
 * A1–A2 entries are also hidden automatically by isBasicItem(). */
(function () {
  'use strict';
  var p = GT._target || GT.packs.en;
  if (!p) return;
  var IDS = [
    // Professional · Security (obvious basics & transparent IT cognates)
    'en:privacy:n:main', 'en:verify:v:main', 'en:access:n:main', 'en:permission:n:main',
    'en:account:n:main', 'en:incident:n:main', 'en:security:n:main', 'en:protect:v:main',
    'en:authentication:n:main', 'en:authorization:n:main', 'en:multi-factor-authentication:n:main',
    'en:security-architecture:n:main', 'en:encryption:n:main', 'en:phishing:n:main',
    'en:access-control:n:main', 'en:it2:malware', 'en:it2:security-policy', 'en:it2:patch',
    'en:it2:two-factor-auth', 'en:it2:ransomware', 'en:it3:token',
    // Professional · Work, Dev, Infra, Design, AI/Data, Product, Clients, Presentations, Business, Career
    'en:task:n:main', 'en:deadline:n:main', 'en:priority:n:main', 'en:feedback:n:main',
    'en:issue:n:main', 'en:progress:n:main', 'en:confirm:v:main', 'en:request:n:main',
    'en:colleague:n:main', 'en:customer:n:main', 'en:contract:n:main', 'en:budget:n:main',
    'en:schedule:n:main', 'en:agenda:n:main', 'en:it2:status-update', 'en:it2:blocker',
    'en:it2:out-of-office', 'en:it2:client', 'en:it2:mentor', 'en:it2:networking',
    'en:it2:part-time', 'en:it2:hybrid-work', 'en:it3:job-description', 'en:it4:cover-letter',
    'en:it4:mailing-list', 'en:it4:forward', 'en:attachment:n:main', 'en:overtime:n:main',
    'en:developer:n:main', 'en:development:n:main', 'en:application:n:software', 'en:requirement:n:main',
    'en:bug:n:main', 'en:feature:n:main', 'en:branch:n:main', 'en:commit:n:main',
    'en:merge:v:main', 'en:build:n:main', 'en:refactor:v:main', 'en:debugging:n:main',
    'en:source-code:n:main', 'en:code-review:n:main', 'en:pull-request:n:main', 'en:staging:n:main',
    'en:it2:version-control', 'en:it2:bug-fix', 'en:it2:refactoring', 'en:it3:automation',
    'en:it4:error-message', 'en:it4:config-file', 'en:it4:hotfix', 'en:it4:compile',
    'en:network:n:main', 'en:device:n:main', 'en:backup:n:main', 'en:update:n:main',
    'en:server:n:main', 'en:firewall:n:main', 'en:virtual-machine:n:main', 'en:cloud-service:n:main',
    'en:router:n:main', 'en:ip-address:n:main', 'en:certificate:n:main', 'en:storage:n:main',
    'en:monitoring:n:main', 'en:it2:disk-space', 'en:it3:cache', 'en:it3:cluster',
    'en:connection:n:main', 'en:connect:v:main', 'en:disconnect:v:main', 'en:reconnect:v:main',
    'en:pro3:typography', 'en:pro3:colour-palette', 'en:pro3:wireframe', 'en:pro3:prototype',
    'en:pro3:sketch', 'en:pro3:intuitive', 'en:it4:user-interface', 'en:it4:mockup',
    'en:it4:design-system', 'en:it4:responsive-design',
    'en:pro3:language-model', 'en:pro3:dataset', 'en:pro3:metric', 'en:pro3:training-data',
    'en:pro3:prompt-engineering', 'en:pro3:train', 'en:it4:anonymise', 'en:it4:classify',
    'en:pro3:target-audience', 'en:pro3:prioritisation', 'en:it4:roadmap', 'en:it4:backlog',
    'en:it4:retrospective', 'en:it4:minimum-viable-product', 'en:it4:user-story',
    'en:pro3:briefing', 'en:pro3:bill', 'en:pro3:transparent',
    'en:pro3:slide-deck', 'en:pro3:bullet-point', 'en:pro3:time-slot', 'en:pro3:summarise',
    'en:it4:eye-contact', 'en:it4:qa-session',
    'en:salary:n:main', 'en:employee:n:main', 'en:employer:n:main', 'en:employment:n:main',
    'en:unemployed:adj:main', 'en:management:n:main', 'en:qualification:n:main', 'en:flexible:adj:main',
    // Words (obvious B1 basics & internationalisms)
    'en:appointment:n:main', 'en:opportunity:n:main', 'en:experience:n:main', 'en:advice:n:main',
    'en:purpose:n:main', 'en:advantage:n:main', 'en:disadvantage:n:main', 'en:challenge:n:main',
    'en:solution:n:main', 'en:suggestion:n:main', 'en:choice:n:main', 'en:behaviour:n:main',
    'en:confidence:n:main', 'en:available:adj:main', 'en:avoid:v:main', 'en:alternative:n:main',
    'en:friendship:n:main', 'en:trust:v:main', 'en:relationship:n:main', 'en:respect:v:main',
    'en:respect:n:noun', 'en:support:n:help', 'en:more:generous',
    'en:ingredient:n:main', 'en:portion:n:main', 'en:discount:n:main', 'en:refund:n:main',
    'en:symptom:n:main', 'en:treatment:n:main', 'en:infection:n:main', 'en:insurance:n:main',
    'en:signature:n:main', 'en:audience:n:main', 'en:entertainment:n:main', 'en:creative:adj:main',
    'en:community:n:main', 'en:environment:n:main', 'en:education:n:main', 'en:educational:adj:main',
    'en:organization:n:main', 'en:policy:n:main', 'en:responsibility:n:main', 'en:responsible:adj:main',
    'en:stress:n:main', 'en:burnout:n:main', 'en:inflation:n:main', 'en:consumer:n:main',
    'en:production:n:main', 'en:agreement:n:main', 'en:disagreement:n:main', 'en:independent:adj:main',
    'en:decision:n:main', 'en:communicate:v:main', 'en:communication:n:main', 'en:inform:v:main',
    'en:success:n:main', 'en:successfully:adv:main', 'en:expression:n:main', 'en:define:v:main',
    'en:definition:n:main', 'en:explanation:n:main', 'en:compare:v:main', 'en:comparison:n:main',
    'en:possibility:n:main', 'en:regularly:adv:main', 'en:reaction:n:main', 'en:active:adj:main',
    'en:formal:adj:main', 'en:informal:adj:main', 'en:format:n:main', 'en:format:v:arrange',
    'en:more:argument', 'en:more:registration', 'en:more:citizen', 'en:more:government',
    'en:more:election', 'en:more:vote', 'en:more:volunteer', 'en:more:climate-change',
    'en:more:pollution', 'en:more:recycle',
    'en:more2:hiking', 'en:more2:join', 'en:more2:tax', 'en:more2:savings', 'en:more2:competition',
    'en:more2:lonely', 'en:more2:upload', 'en:more2:settings', 'en:more2:law', 'en:more2:protest',
    'en:more2:human-rights', 'en:more2:minister', 'en:more2:opinion', 'en:more2:work-life-balance',
    'en:m3:urgent', 'en:m3:patient', 'en:m3:fever', 'en:m3:pharmacy', 'en:m3:cv',
    'en:m3:working-hours', 'en:m3:punctual', 'en:m3:teamwork', 'en:m3:visa', 'en:m3:check-in',
    'en:m3:pension', 'en:m3:algorithm', 'en:m3:green-energy', 'en:m3:solar-panel',
    'en:m3:profit', 'en:m3:immigration', 'en:m3:compromise', 'en:m3:degree'
  ];
  IDS.forEach(function (id) {
    if (p.byId[id]) p.byId[id].basic = true;
    else p.loadErrors.push('data/en/basics.js: unknown id ' + id);
  });
})();
