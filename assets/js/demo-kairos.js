/* Live-Demo KAIROS: die Kundenmaschine. Findet Kunden, wird gefunden, antwortet sofort und fasst nach.
   Erfundene Musterfirma, erfundene Firmen und Zahlen. Alles läuft im Browser, nichts wird gesendet. */
(function () {
  'use strict';
  var UP = window.UP, h = UP.h, lang = UP.lang;
  function t(de, en) { return lang === 'de' ? de : en; }
  var app = document.getElementById('app');
  if (!app) return;
  var DAY = 86400000, HOUR = 3600000, MIN = 60000;
  var ARGUS_KEY = 'up-demo-kairos-inbox';
  var ARGUS_URL = lang === 'de' ? '/demos/argus.html' : '/en/demos/argus.html';
  var REDUCE = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SHOT = UP.params.has('shot');
  var FIRM = 'Beispiel Metall AG', SITE = 'beispiel-metall.ch';

  // ---------------------------------------------------------------- Sofortpreis (Beispielansätze der Musterfirma)
  var MAT = {
    S235: { n: t('Stahl S235', 'Steel S235'), dens: 7.85, kg: 1.6, speed: 14 },
    '1.4301': { n: t('Edelstahl 1.4301', 'Stainless steel 1.4301'), dens: 7.9, kg: 6.4, speed: 11 },
    AlMg3: { n: t('Aluminium AlMg3', 'Aluminium AlMg3'), dens: 2.66, kg: 5.2, speed: 16 }
  };
  var TYPES = { plate: [t('Zuschnitt', 'Flat part'), 0], angle: [t('Winkel', 'Angle'), 1], channel: [t('Konsole, U-Form', 'Bracket, U shape'), 2] };
  var THK = [1, 1.5, 2, 3, 4, 5, 6, 8, 10];
  function price(c, qty) {
    var q = qty || c.qty, m = MAT[c.mat], bends = TYPES[c.type][1];
    var area = c.l * c.b / 1e6, kg = area * c.th / 1000 * m.dens * 1000;
    var mat = kg * 1.2 * m.kg;
    var cutM = 2 * (c.l + c.b) / 1000 + c.holes * Math.PI * 0.012;
    var laser = cutM / Math.max(0.6, m.speed / c.th) * 2.4 + 0.15;
    var bend = bends * 0.5 * 1.8;
    var deburr = 0.6 + area * 4;
    var coat = c.surf === 'powder' ? Math.max(1.2, area * 2 * 32) : 0;
    var setup = (15 + (bends ? 20 : 0) + (c.surf === 'powder' ? 40 : 0)) * 1.9 / q;
    var unit = Math.round((mat + laser + bend + deburr + coat + setup) * 1.28 * (c.express ? 1.25 : 1) * 20) / 20;
    return { unit: unit, total: unit * q, kg: kg, mat: mat, work: laser + bend + deburr, coat: coat, setup: setup, days: c.express ? 5 : 10 };
  }
  function partName(c) { return TYPES[c.type][0]; }

  // ---------------------------------------------------------------- Zielfirmen (erfunden)
  var SRC = { job: t('Stelleninserat', 'Job ad'), build: t('Baugesuche, Amtsblatt', 'Building applications, gazette'), hr: t('Handelsregister, SHAB', 'Commercial register, SHAB'), web: t('Firmenwebsite', 'Company website'), news: t('Medienmitteilung', 'Press release') };
  function lead(id, firm, place, km, branche, emp, f, sig, need, hook, offer) { return { id: id, firm: firm, place: place, km: km, branche: branche, emp: emp, f: f, sig: sig, need: need, hook: hook, offer: offer }; }
  var LEADS = [
    lead('l1', 'Muster Fassaden AG', 'Sursee', 21, t('Fassadenbau', 'Facade construction'), 45, [95, 90, 95, 85],
      [['job', t('Sucht zwei Metallbauer/innen EFZ, Inserat seit 6 Wochen online', 'Looking for two metalworkers, ad online for 6 weeks'), 3], ['build', t('Baugesuch: Erweiterung der Werkhalle um 1\'200 m²', 'Building application: workshop extension of 1,200 m²'), 12], ['web', t('Referenzen mit Fassadenhaltern aus Edelstahl', 'References with stainless steel facade brackets'), 30]],
      t('Laser- und Kantteile aus 1.4301 für Fassadenhalter, Serien von 50 bis 500 Stück', 'Laser and bent parts in 1.4301 for facade brackets, series of 50 to 500 pieces'),
      t('Ihr Stelleninserat für Metallbauer ist seit einigen Wochen online, und die neue Werkhalle zeigt: Bei Ihnen wächst einiges.', 'Your job ad for metalworkers has been online for a few weeks, and the new workshop shows that a lot is growing at your company.'),
      t('Wir lasern und kanten Edelstahlteile in Serie und können Ihre Werkstatt bei Fassadenhaltern und Konsolen entlasten, ohne dass Sie dafür zusätzliches Personal brauchen.', 'We laser-cut and bend stainless steel parts in series and can relieve your workshop on facade brackets and consoles, without you needing extra staff.')),
    lead('l2', 'Beispiel Lifttechnik GmbH', 'Cham', 34, t('Aufzugsbau', 'Lift construction'), 80, [85, 80, 90, 80],
      [['news', t('Grossauftrag für 40 Aufzüge in einer Überbauung', 'Major order for 40 lifts in a housing development'), 5], ['web', t('Kabinenverkleidungen aus Edelstahl, Fertigung teilweise ausgelagert', 'Stainless steel cabin panels, production partly outsourced'), 20]],
      t('Kabinenverkleidungen und Kleinteile aus 1.4301, geschliffen', 'Cabin panels and small parts in 1.4301, ground finish'),
      t('Gratulation zum Auftrag für die 40 Aufzüge, über den Sie kürzlich berichtet haben.', 'Congratulations on the order for the 40 lifts you recently announced.'),
      t('Für Kabinenverkleidungen und Blechteile aus Edelstahl bieten wir kurze Lieferzeiten und gleichbleibende Qualität, auch bei grösseren Serien.', 'For cabin panels and stainless steel sheet parts we offer short delivery times and consistent quality, even for larger series.')),
    lead('l3', 'Demo Agrartechnik AG', 'Willisau', 38, t('Landmaschinen', 'Agricultural machinery'), 30, [70, 75, 70, 65],
      [['hr', t('Neue Geschäftsführung eingetragen', 'New management registered'), 9], ['job', t('Sucht Einkäufer/in', 'Looking for a purchaser'), 15]],
      t('Schutzbleche und Halter aus S235, pulverbeschichtet', 'Guards and holders in S235, powder-coated'),
      t('Wir haben gesehen, dass Sie den Einkauf neu besetzen.', 'We noticed that you are filling your purchasing position.'),
      t('Falls Sie dabei Ihre Lieferanten für Blechteile neu ordnen: Wir liefern Laser-, Kant- und Schweissteile aus Stahl, mit Sofortpreis online und festen Lieferterminen.', 'If you are reorganising your sheet metal suppliers: we deliver laser-cut, bent and welded steel parts, with an instant online price and fixed delivery dates.')),
    lead('l4', 'Muster Gastrotechnik AG', 'Baar', 36, t('Grossküchen', 'Commercial kitchens'), 60, [80, 75, 80, 75],
      [['job', t('Sucht Fachperson für die Abkantpresse', 'Looking for a press brake operator'), 4], ['web', t('Grossküchen nach Mass aus Edelstahl', 'Custom commercial kitchens in stainless steel'), 40]],
      t('Abdeckungen und Kantteile aus 1.4301, 1 bis 2 mm', 'Covers and bent parts in 1.4301, 1 to 2 mm'),
      t('Ihr Inserat für eine Fachperson an der Abkantpresse ist uns aufgefallen.', 'Your ad for a press brake operator caught our attention.'),
      t('Bis die Stelle besetzt ist, übernehmen wir Kantteile aus Edelstahl für Sie, kurzfristig und in Ihrer Qualität.', 'Until the position is filled, we can take over stainless steel bent parts for you, at short notice and in your quality.')),
    lead('l5', 'Beispiel Solar AG', 'Root', 12, t('Solarmontage', 'Solar installation'), 25, [60, 85, 55, 55],
      [['hr', t('Kapitalerhöhung eingetragen', 'Capital increase registered'), 18], ['web', t('Montagesysteme für Flachdächer', 'Mounting systems for flat roofs'), 60]],
      t('Halter aus AlMg3, 3 mm, Serien ab 500 Stück', 'Holders in AlMg3, 3 mm, series from 500 pieces'),
      t('Montagesysteme für Flachdächer brauchen viele gleiche Halter, und genau das ist unsere Stärke.', 'Mounting systems for flat roofs need many identical holders, and that is exactly our strength.'),
      t('Wir fertigen Halter und Profile aus Aluminium und Stahl in Serie, auch kurzfristig für die Hochsaison.', 'We make holders and profiles in aluminium and steel in series, also at short notice for the high season.')),
    lead('l6', 'Muster Maschinenbau AG', 'Hochdorf', 19, t('Maschinenbau', 'Mechanical engineering'), 120, [90, 80, 85, 90],
      [['news', t('Ausbau der Produktion angekündigt', 'Expansion of production announced'), 2], ['job', t('Sucht Disponent/in Beschaffung', 'Looking for a procurement planner'), 7]],
      t('Maschinenverkleidungen und Laserteile aus S235 und 1.4301', 'Machine panels and laser parts in S235 and 1.4301'),
      t('Sie bauen Ihre Produktion aus, Gratulation.', 'You are expanding your production, congratulations.'),
      t('Mehr Produktion heisst mehr Blechteile. Wir liefern Laser- und Kantteile nach Zeichnung, mit Preis in Sekunden und festen Terminen.', 'More production means more sheet metal parts. We deliver laser-cut and bent parts to drawing, with a price in seconds and fixed dates.')),
    lead('l7', 'Muster Metallbau GmbH', 'Stans', 24, t('Metallbau', 'Metal construction'), 15, [90, 70, 80, 60],
      [['web', t('Keine eigene Laseranlage, Laserteile werden zugekauft', 'No laser of their own, laser parts are bought in'), 25], ['job', t('Sucht Metallbauer/in EFZ', 'Looking for a metalworker'), 6]],
      t('Laserteile aus S235 für Geländer und Treppen', 'Laser parts in S235 for railings and stairs'),
      t('Als Metallbauer ohne eigene Laseranlage kaufen Sie Laserteile zu. Dabei können wir helfen.', 'As a metal builder without your own laser, you buy in laser parts. We can help with that.'),
      t('Sie laden die Zeichnung hoch, sehen sofort den Preis und erhalten die Teile entgratet, auf Wunsch gekantet.', 'You upload the drawing, see the price at once and receive the parts deburred, bent if required.')),
    lead('l8', 'Demo Wohnbau AG', 'Emmen', 9, t('Generalunternehmer', 'General contractor'), 70, [55, 90, 60, 70],
      [['build', t('Baugesuch: Überbauung mit 64 Wohnungen', 'Building application: development with 64 flats'), 8]],
      t('Geländerteile und Abdeckbleche für die Überbauung', 'Railing parts and cover sheets for the development'),
      t('Ihre Überbauung mit 64 Wohnungen braucht Geländer, Abdeckungen und viele gleiche Blechteile.', 'Your development with 64 flats needs railings, covers and many identical sheet metal parts.'),
      t('Wir liefern solche Teile direkt an Ihren Metallbauer oder an Sie, nach Plan und termingerecht.', 'We deliver such parts directly to your metal builder or to you, to plan and on schedule.'))
  ];
  function L(id) { return LEADS.filter(function (x) { return x.id === id; })[0]; }
  function score(l) { var f = l.f; return Math.round(f[0] * 0.35 + f[1] * 0.15 + f[2] * 0.35 + f[3] * 0.15); }
  function mailFor(l) {
    return t('Betreff: Blechteile für ' + l.firm + '\n\nGuten Tag\n\n' + l.hook + ' ' + l.offer + '\n\nWir liefern Laser- und Kantteile ab 1 Stück, aus Stahl, Edelstahl und Aluminium. Den Preis für Ihr Teil sehen Sie online in Sekunden: ' + SITE + '/sofortpreis\n\nPasst ein kurzes Telefonat nächste Woche? Oder antworten Sie einfach auf diese Nachricht.\n\nFreundliche Grüsse\nVerkauf, ' + FIRM + '\n\nSie möchten keine Nachrichten von uns? Eine kurze Antwort genügt.',
      'Subject: Sheet metal parts for ' + l.firm + '\n\nHello\n\n' + l.hook + ' ' + l.offer + '\n\nWe deliver laser-cut and bent parts from 1 piece, in steel, stainless steel and aluminium. You can see the price for your part online in seconds: ' + SITE + '/sofortpreis\n\nWould a short call next week suit you? Or simply reply to this message.\n\nKind regards\nSales, ' + FIRM + '\n\nDon\'t want messages from us? A short reply is enough.');
  }
  function whyFor(l) {
    return t('KAIROS hat ' + l.sig.length + (l.sig.length > 1 ? ' Signale' : ' Signal') + ' gefunden, die auf Bedarf hindeuten. ' + l.firm + ' passt zu Ihren Leistungen (' + l.branche + '), liegt ' + l.km + ' km entfernt und hat rund ' + l.emp + ' Mitarbeitende. Vermuteter Bedarf: ' + l.need + '.',
      'KAIROS found ' + l.sig.length + (l.sig.length > 1 ? ' signals' : ' signal') + ' that point to demand. ' + l.firm + ' fits your services (' + l.branche + '), is ' + l.km + ' km away and has around ' + l.emp + ' employees. Likely need: ' + l.need + '.');
  }

  // ---------------------------------------------------------------- Ausgangszustand
  function seed() {
    var now = Date.now();
    return {
      leads: [{ id: 'l1', stage: 'new', found: now - 3 * HOUR }, { id: 'l2', stage: 'sent', found: now - 4 * DAY, sentAt: now - 2 * DAY }, { id: 'l3', stage: 'new', found: now - 9 * HOUR },
        { id: 'l4', stage: 'draft', found: now - 26 * HOUR }, { id: 'l5', stage: 'new', found: now - 2 * DAY }],
      reserve: ['l6', 'l7', 'l8'],
      inbox: [
        { id: 'e1', nr: 'AN-26-0054', src: 'web', firm: 'Beispiel Maschinenbau AG', subj: t('Sofortpreis: Lasche S235, 5 mm, 200 Stk.', 'Instant price: tab S235, 5 mm, 200 pcs'), text: t('Anfrage über den Sofortpreis auf der Website. Lasche aus S235, 5 mm, 180 × 60 mm, 2 Löcher, 200 Stück, roh.', 'Enquiry via the instant price on the website. Tab in S235, 5 mm, 180 × 60 mm, 2 holes, 200 pieces, raw.'), ts: now - 26 * HOUR, part: { partName: t('Lasche', 'Tab'), mat: 'S235', th: 5, qty: 200, total: 1630 }, status: 'argus', resp: 1, line: 0 },
        { id: 'e2', nr: 'AN-26-0055', src: 'mail', firm: 'Muster Bau AG', subj: t('Geländerpfosten wie letztes Jahr', 'Railing posts like last year'), text: t('Guten Tag, wir brauchen wieder Geländerpfosten wie im letzten Herbst, diesmal 60 Stück. Können Sie bis Ende Monat liefern? Freundliche Grüsse, Bauleitung Muster Bau AG', 'Hello, we need railing posts again like last autumn, 60 pieces this time. Can you deliver by the end of the month? Kind regards, site management Muster Bau AG'), ts: now - 3 * HOUR, part: { partName: t('Geländerpfosten', 'Railing post'), mat: 'S235', th: 6, qty: 60, total: 8720 }, status: 'answered', resp: 2, line: 1 },
        { id: 'e3', nr: 'AN-26-0056', src: 'phone', firm: 'Demo Fördertechnik AG', subj: t('Telefonnotiz: Abdeckbleche AlMg3, eilt', 'Phone note: cover sheets AlMg3, urgent'), text: t('Der Kunde ruft an: braucht 25 Abdeckbleche aus AlMg3, 2 mm, gleiche Zeichnung wie Auftrag AU-26-0387. Liefertermin so schnell wie möglich.', 'The customer calls: needs 25 cover sheets in AlMg3, 2 mm, same drawing as order AU-26-0387. Delivery as soon as possible.'), ts: now - 40 * MIN, part: { partName: t('Abdeckblech', 'Cover sheet'), mat: 'AlMg3', th: 2, qty: 25, total: 1180 }, status: 'new', resp: 0, line: 2 }
      ],
      nr: 57,
      quotes: [
        { nr: 'VA-26-0139', cust: 'Beispiel Maschinenbau AG', text: t('Halterung S235, 300 Stk.', 'Holder S235, 300 pcs'), amount: 8640, sent: now - 9 * DAY, done: 2, chance: 55 },
        { nr: 'VA-26-0140', cust: 'Demo Fördertechnik AG', text: t('Abdeckblech AlMg3, 60 Stk.', 'Cover sheet AlMg3, 60 pcs'), amount: 4210, sent: now - 8 * DAY, done: 1, chance: 60 },
        { nr: 'VA-26-0141', cust: 'Muster Bau AG', text: t('Geländerpfosten S235, 48 Stk.', 'Railing posts S235, 48 pcs'), amount: 6980, sent: now - 4 * DAY, done: 0, chance: 70 }
      ],
      sleep: [
        { id: 's1', cust: 'Muster Treppenbau AG', months: 14, last: t('Treppenwangen S235', 'Stair stringers S235'), idea: t('Bestellte jeweils im Herbst. Kurze Nachricht mit Hinweis auf den Sofortpreis.', 'Ordered every autumn. Short message pointing to the instant price.'), status: 'open' },
        { id: 's2', cust: 'Beispiel Apparatebau AG', months: 11, last: t('Gehäuseteile 1.4301', 'Housing parts 1.4301'), idea: t('Bestellmengen sanken vor dem Ende um 40 %. Persönlicher Anruf empfohlen, nicht nur eine E-Mail.', 'Order quantities fell by 40% before stopping. A personal call is recommended, not just an email.'), status: 'open' }
      ],
      pages: [
        { slug: 'laserschneiden-luzern', title: t('Laserschneiden in Luzern', 'Laser cutting in Lucerne'), status: 'online' },
        { slug: 'edelstahl-abkanten', title: t('Edelstahl abkanten', 'Bending stainless steel'), status: 'online' },
        { slug: 'blechbearbeitung-zentralschweiz', title: t('Blechbearbeitung Zentralschweiz', 'Sheet metal work in central Switzerland'), status: 'online' },
        { slug: 'laserteile-online-bestellen', title: t('Laserteile online bestellen', 'Order laser parts online'), status: 'online' },
        { slug: 'pulverbeschichten-zug', title: t('Pulverbeschichten in Zug', 'Powder coating in Zug'), status: 'review' }
      ],
      fixed: false,
      tenders: [
        { id: 't1', who: t('Gemeinde Musterwil', 'Municipality of Musterwil'), title: t('Geländer und Handläufe, Schulhaus Mattenhof', 'Railings and handrails, Mattenhof school'), place: t('Kanton Luzern', 'Canton of Lucerne'), due: now + 12 * DAY, match: 91, vol: t('CHF 80\'000 bis 120\'000', 'CHF 80,000 to 120,000'), status: 'new' },
        { id: 't2', who: t('Tiefbauamt Kanton Beispiel', 'Civil engineering office, canton Beispiel'), title: t('Abdeckungen und Gitterroste, Rahmenvertrag 3 Jahre', 'Covers and gratings, 3-year framework contract'), place: t('Zentralschweiz', 'Central Switzerland'), due: now + 20 * DAY, match: 78, vol: t('CHF 150\'000 bis 250\'000', 'CHF 150,000 to 250,000'), status: 'new' },
        { id: 't3', who: 'Beispiel Verkehrsbetriebe AG', title: t('Edelstahlverkleidungen für 14 Haltestellen', 'Stainless steel cladding for 14 stops'), place: t('Kanton Zug', 'Canton of Zug'), due: now + 6 * DAY, match: 64, vol: t('CHF 40\'000 bis 60\'000', 'CHF 40,000 to 60,000'), status: 'new' },
        { id: 't4', who: t('Spital Musterstadt', 'Musterstadt hospital'), title: t('Einbauten aus Edelstahl mit Montage vor Ort', 'Stainless steel fittings with on-site installation'), place: t('Kanton Aargau', 'Canton of Aargau'), due: now + 15 * DAY, match: 38, vol: t('CHF 200\'000 bis 300\'000', 'CHF 200,000 to 300,000'), status: 'new' }
      ],
      orders: [
        { nr: 'AU-26-0388', text: t('Konsole K-12, 1.4301, 3 mm', 'Bracket K-12, 1.4301, 3 mm'), qty: 120, step: 2, due: now + 19 * DAY, docs: [t('Auftragsbestätigung', 'Order confirmation'), t('Zeichnung K-12, Index B', 'Drawing K-12, revision B')] },
        { nr: 'AU-26-0371', text: t('Abdeckblech AlMg3, 2 mm', 'Cover sheet AlMg3, 2 mm'), qty: 40, step: 6, due: now - 12 * DAY, docs: [t('Auftragsbestätigung', 'Order confirmation'), t('Lieferschein', 'Delivery note'), t('Werkstoffzeugnis 3.1 nach EN 10204', 'Inspection certificate 3.1 to EN 10204'), t('Rechnung', 'Invoice')] }
      ],
      reorders: 0,
      log: [
        { ts: now - 8 * HOUR, k: 'radar', text: t('Radar: 6 Quellen geprüft, 2 neue Zielfirmen gefunden', 'Radar: 6 sources checked, 2 new target companies found') },
        { ts: now - 6 * HOUR, k: 'seo', text: t('SEO: «Laserschneiden in Luzern» steigt auf Platz 3', 'SEO: «Laser cutting in Lucerne» rises to position 3') },
        { ts: now - 4 * HOUR, k: 'tender', text: t('Ausschreibung gefunden: Geländer Schulhaus Mattenhof, Passung 91 %', 'Tender found: railings Mattenhof school, match 91%') },
        { ts: now - 3 * HOUR + 2 * MIN, k: 'mail', text: t('Anfrage AN-26-0055 nach 2 Minuten beantwortet', 'Enquiry AN-26-0055 answered after 2 minutes') },
        { ts: now - 90 * MIN, k: 'follow', text: t('Offerte VA-26-0140 nachgefasst: Erinnerung gesendet', 'Quote VA-26-0140 followed up: reminder sent') }
      ]
    };
  }

  var st = UP.store('kairos', seed, 1), D = st.data;
  var ui = { view: 'cockpit', sel: {}, filter: 'all', scan: null, typing: null, toast: null, cfg: { type: 'channel', mat: '1.4301', th: 3, l: 240, b: 120, holes: 4, qty: 120, surf: 'raw', express: false }, sent: null, chat: [], gen: { svc: 0, mat: 1, reg: 0 }, draft: null, fu: null };
  UP.initTheme(app); app.classList.add('t-kairos');

  // ---------------------------------------------------------------- Hilfen
  function log(k, text) { D.log.push({ ts: Date.now(), k: k, text: text }); if (D.log.length > 120) D.log.shift(); }
  function save() { st.save(); }
  function money(n) { return UP.chf(n); }
  function chf0(n) { return 'CHF ' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\''); }
  function ago(ts) {
    var d = Date.now() - ts;
    if (d < 2 * MIN) return t('gerade eben', 'just now');
    if (d < HOUR) return t('vor ' + Math.round(d / MIN) + ' Min.', Math.round(d / MIN) + ' min ago');
    if (d < DAY) return t('vor ' + Math.round(d / HOUR) + ' Std.', Math.round(d / HOUR) + ' h ago');
    var n = Math.round(d / DAY); return t('vor ' + n + (n === 1 ? ' Tag' : ' Tagen'), n + (n === 1 ? ' day ago' : ' days ago'));
  }
  function days(n) { return t(n + (n === 1 ? ' Tag' : ' Tagen'), n + (n === 1 ? ' day' : ' days')); }
  function card(l, v, s, cls) { return h('div', { class: 'a-card ' + (cls || '') }, h('div', { class: 'l', text: l }), h('div', { class: 'v', text: v }), s ? h('div', { class: 's', text: s }) : null); }
  function go(v, sel) { ui.view = v; if (sel) ui.sel[v] = sel; ui.toast = null; ui.typing = null; ui.scanDone = undefined; ui.reMsg = null; render(); var m = app.querySelector('.a-main'); if (m && m.getBoundingClientRect().top < 0) m.scrollIntoView({ block: 'start' }); }
  function pushArgus(o) {
    if (SHOT) return;
    try { var a = JSON.parse(window.localStorage.getItem(ARGUS_KEY) || '[]'); if (!Array.isArray(a)) a = []; a.push(o); window.localStorage.setItem(ARGUS_KEY, JSON.stringify(a)); } catch (e) { /* ignorieren */ }
  }
  function bars(rows) {
    return h('div', { class: 'k-bars' }, rows.map(function (r) { return h('div', { class: 'k-barrow' }, h('span', { text: r[0] }), h('div', { class: 'k-bar' }, h('i', { 'data-w': String(r[1]) })), h('b', { text: r[2] || String(r[1]) })); }));
  }
  function scoreBadge(n) { return h('span', { class: 'k-score ' + (n >= 80 ? 'hi' : n >= 65 ? 'mid' : 'lo'), 'aria-label': t('Passung ', 'Match ') + n + ' %', text: String(n) }); }
  function aiLabel(text) { return h('p', { class: 'k-ai' }, h('span', { class: 'k-ai-i', 'aria-hidden': 'true', html: SPARK }), text); }
  var SPARK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>';

  // Schreibmaschine für KI-Texte: übersteht ein neues Zeichnen der Ansicht
  function typed(key, text, cls) {
    var on = ui.typing && ui.typing.key === key;
    if (on && ui.typing.think) return h('div', { class: (cls || 'k-text') + ' k-think', 'aria-live': 'polite' }, h('span', { class: 'k-dots', 'aria-hidden': 'true' }, h('i'), h('i'), h('i')), t('KAIROS denkt …', 'KAIROS is thinking …'));
    return h('div', { class: (cls || 'k-text') + (on ? ' k-typing' : ''), 'data-typing': on ? key : null, text: on ? text.slice(0, ui.typing.pos) : text });
  }
  function startType(key, text) {
    if (REDUCE || SHOT) { ui.typing = null; render(); return; }
    var tok = {}; ui.typing = { key: key, pos: 0, text: text, think: true, tok: tok }; render();
    window.setTimeout(function () {
      if (!ui.typing || ui.typing.tok !== tok) return;
      ui.typing.think = false; render();
      (function tick() {
        if (!ui.typing || ui.typing.tok !== tok) return;
        ui.typing.pos += 4;
        var el = app.querySelector('[data-typing="' + key + '"]');
        if (ui.typing.pos >= text.length) { ui.typing = null; render(); return; }
        if (el) el.textContent = text.slice(0, ui.typing.pos);
        window.setTimeout(tick, 12);
      })();
    }, 650);
  }
  function busy(key) { return ui.typing && ui.typing.key === key; }

  // ---------------------------------------------------------------- Cockpit
  var CHANNELS = [[t('Google, eigene Seiten', 'Google, own pages'), 22, 6, 41800], [t('Sofortpreis', 'Instant price'), 31, 9, 28600], [t('Radar, Erstkontakt', 'Radar, first contact'), 7, 2, 23400],
    [t('Ausschreibungen', 'Tenders'), 2, 1, 96000], [t('Nachfassen, Reaktivierung', 'Follow-up, reactivation'), 9, 4, 31900], [t('Empfehlung', 'Referral'), 5, 2, 18700]];
  function todo() {
    var out = [];
    var drafts = D.leads.filter(function (x) { return x.stage === 'draft'; });
    if (drafts.length) out.push([t(drafts.length + (drafts.length > 1 ? ' Erstkontakte warten' : ' Erstkontakt wartet') + ' auf Ihre Freigabe', drafts.length + ' first contact' + (drafts.length > 1 ? 's await' : ' awaits') + ' your approval'), 'radar', drafts[0].id]);
    var replies = D.leads.filter(function (x) { return x.stage === 'reply'; });
    if (replies.length) out.push([t(replies.length + ' Antwort' + (replies.length > 1 ? 'en' : '') + ' auf Erstkontakte', replies.length + ' repl' + (replies.length > 1 ? 'ies' : 'y') + ' to first contacts'), 'inbox', null]);
    var neu = D.inbox.filter(function (x) { return x.status === 'new'; });
    if (neu.length) out.push([t(neu.length + (neu.length > 1 ? ' neue Anfragen' : ' neue Anfrage'), neu.length + ' new enquir' + (neu.length > 1 ? 'ies' : 'y')), 'inbox', neu[0].id]);
    var rev = D.pages.filter(function (x) { return x.status === 'review'; });
    if (rev.length) out.push([t(rev.length + (rev.length > 1 ? ' Seiten warten' : ' Seite wartet') + ' auf Prüfung', rev.length + ' page' + (rev.length > 1 ? 's await' : ' awaits') + ' review'), 'seo', null]);
    D.tenders.filter(function (x) { return x.status === 'new' && x.match >= 60 && x.due - Date.now() < 14 * DAY; }).forEach(function (x) { out.push([t('Ausschreibung: Frist in ' + days(Math.ceil((x.due - Date.now()) / DAY)) + ', ' + x.title, 'Tender: deadline in ' + days(Math.ceil((x.due - Date.now()) / DAY)) + ', ' + x.title), 'tenders', x.id]); });
    var due = D.quotes.filter(function (q) { return nextStep(q); });
    if (due.length) out.push([t(due.length + ' Offerten zum Nachfassen', due.length + ' quotes to follow up'), 'follow', null]);
    return out;
  }
  function vCockpit() {
    var open = D.quotes.reduce(function (a, q) { return a + q.amount; }, 0);
    var tasks = todo();
    var recent = D.log.slice().sort(function (a, b) { return b.ts - a.ts; }).slice(0, 8);
    var KL = { radar: 'Radar', seo: 'SEO', tender: t('Ausschr.', 'Tender'), mail: t('Anfrage', 'Enquiry'), follow: t('Nachfassen', 'Follow-up'), web: t('Website', 'Website'), portal: t('Portal', 'Portal') };
    var sum = CHANNELS.reduce(function (a, c) { return [a[0] + c[1], a[1] + c[2], a[2] + c[3]]; }, [0, 0, 0]);
    return h('div', null,
      h('div', { class: 'a-row' }, card(t('Zielfirmen im Radar', 'Targets in radar'), String(D.leads.length), t('Passung ab 60 %', 'match from 60%')), card(t('Anfragen diesen Monat', 'Enquiries this month'), String(25 + D.inbox.length), t('Beispielwerte', 'sample values')),
        card(t('Antwortzeit', 'Response time'), '2 min', t('rund um die Uhr', 'around the clock'), 'amber'), card(t('Offerten offen', 'Open quotes'), String(D.quotes.length), chf0(open)), card(t('Sichtbarkeit', 'Visibility'), '68', t('vor dem Start: 12', 'before start: 12'))),
      h('div', { class: 'a-grid2 l' },
        h('div', { class: 'a-panel' }, h('h3', { text: t('Wartet auf Sie', 'Waiting for you') }),
          tasks.length ? h('ul', { class: 'k-todo' }, tasks.map(function (x) { return h('li', null, h('button', { type: 'button', onclick: function () { go(x[1], x[2]); } }, h('span', { text: x[0] }), h('i', { 'aria-hidden': 'true', text: '›' }))); }))
            : h('p', { class: 'a-sub', text: t('Alles erledigt. KAIROS arbeitet weiter und meldet sich, wenn Sie gebraucht werden.', 'All done. KAIROS keeps working and tells you when you are needed.') }),
          h('p', { class: 'k-note', text: t('KAIROS bereitet vor, Ihr Team entscheidet. Nichts geht ohne Freigabe an Kunden.', 'KAIROS prepares, your team decides. Nothing goes to customers without approval.') })),
        h('div', { class: 'a-panel' }, h('h3', { text: t('Heute von KAIROS erledigt', 'Done by KAIROS today') }),
          h('ul', { class: 'k-feed' }, recent.map(function (e) { return h('li', null, h('span', { class: 'a-tag', text: KL[e.k] || e.k }), h('span', { text: e.text }), h('time', { text: ago(e.ts) })); })))),
      h('div', { class: 'a-panel' }, h('h3', { text: t('Woher die Aufträge kommen', 'Where orders come from') }), h('p', { class: 'a-sub', text: t('Letzte 90 Tage, Beispielwerte der Musterfirma.', 'Last 90 days, sample values of the model company.') }),
        h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, h('th', { text: t('Kanal', 'Channel') }), h('th', { class: 'r', text: t('Anfragen', 'Enquiries') }), h('th', { class: 'r', text: t('Aufträge', 'Orders') }), h('th', { class: 'r', text: t('Umsatz', 'Revenue') }), h('th', { text: t('Anteil', 'Share') }))),
          h('tbody', null, CHANNELS.map(function (c) { var p = Math.round(c[3] / sum[2] * 100); return h('tr', null, h('td', { text: c[0] }), h('td', { class: 'r', text: String(c[1]) }), h('td', { class: 'r', text: String(c[2]) }), h('td', { class: 'r', text: chf0(c[3]) }), h('td', null, h('div', { class: 'k-bar s' }, h('i', { 'data-w': String(p) })))); }),
            h('tr', { class: 'k-tot' }, h('td', { text: t('Total', 'Total') }), h('td', { class: 'r', text: String(sum[0]) }), h('td', { class: 'r', text: String(sum[1]) }), h('td', { class: 'r', text: chf0(sum[2]) }), h('td'))))),
        h('p', { class: 'k-note', text: t('Früher kamen fast alle Aufträge über Empfehlungen. Mit KAIROS kommen sie aus sechs Kanälen.', 'Before, almost all orders came through referrals. With KAIROS they come from six channels.') })));
  }

  // ---------------------------------------------------------------- Radar: Kunden finden
  var SOURCES = [[t('Handelsregister, SHAB', 'Commercial register, SHAB'), 214], [t('Stelleninserate auf Firmenwebsites', 'Job ads on company websites'), 1380], [t('Baugesuche, Amtsblätter', 'Building applications, gazettes'), 96], [t('Firmenwebsites', 'Company websites'), 2410], [t('Medienmitteilungen', 'Press releases'), 158], [t('Branchenverzeichnisse', 'Industry directories'), 640]];
  var STAGE = { new: [t('Neu', 'New'), 'info'], draft: [t('Entwurf', 'Draft'), 'wait'], sent: [t('Kontaktiert', 'Contacted'), 'grey'], reply: [t('Im Gespräch', 'In talks'), 'ok'] };
  function runScan() {
    if (ui.scan) return;
    ui.scan = { i: 0 }; render();
    var step = REDUCE ? 60 : 520;
    (function tick() {
      if (!ui.scan) return;
      ui.scan.i++;
      if (ui.scan.i > SOURCES.length) {
        var found = D.reserve.splice(0, 2);
        found.forEach(function (id) { D.leads.unshift({ id: id, stage: 'new', found: Date.now(), fresh: true }); });
        log('radar', found.length ? t('Radar: ' + SOURCES.length + ' Quellen geprüft, ' + found.length + ' neue Zielfirmen: ' + found.map(function (id) { return L(id).firm; }).join(', '), 'Radar: ' + SOURCES.length + ' sources checked, ' + found.length + ' new targets: ' + found.map(function (id) { return L(id).firm; }).join(', '))
          : t('Radar: ' + SOURCES.length + ' Quellen geprüft, keine neuen Zielfirmen', 'Radar: ' + SOURCES.length + ' sources checked, no new targets'));
        ui.scan = null; ui.scanDone = found.length; if (found.length) ui.sel.radar = found[0]; save(); render(); return;
      }
      render(); window.setTimeout(tick, step);
    })();
  }
  function vRadar() {
    var counts = { all: D.leads.length, new: 0, draft: 0, sent: 0, reply: 0 };
    D.leads.forEach(function (x) { counts[x.stage]++; });
    var list = D.leads.filter(function (x) { return ui.filter === 'all' || x.stage === ui.filter; }).slice().sort(function (a, b) { return score(L(b.id)) - score(L(a.id)); });
    var selId = ui.sel.radar && D.leads.some(function (x) { return x.id === ui.sel.radar; }) ? ui.sel.radar : (list[0] && list[0].id);
    var filters = h('div', { class: 'a-filters' }, [['all', t('Alle', 'All')], ['new', STAGE.new[0]], ['draft', STAGE.draft[0]], ['sent', STAGE.sent[0]], ['reply', STAGE.reply[0]]].map(function (f) {
      return h('button', { type: 'button', 'aria-pressed': ui.filter === f[0] ? 'true' : 'false', onclick: function () { ui.filter = f[0]; render(); } }, f[1], h('span', { class: 'c', text: String(counts[f[0]]) }));
    }), h('button', { type: 'button', class: 'a-btn p k-scan-b', disabled: !!ui.scan || !!ui.typing, onclick: runScan, text: ui.scan ? t('Radar sucht …', 'Radar is searching …') : t('Radar jetzt starten', 'Run radar now') }));
    var scan = ui.scan ? h('div', { class: 'a-panel k-scan', 'aria-live': 'polite' }, h('h3', { text: t('Radar prüft öffentliche Quellen', 'Radar is checking public sources') }),
      h('ul', null, SOURCES.map(function (s, i) { var stt = i < ui.scan.i - 1 ? 'done' : i === ui.scan.i - 1 ? 'run' : 'wait'; return h('li', { class: 'k-src ' + stt }, h('i', { 'aria-hidden': 'true' }), h('span', { text: s[0] }), h('b', { text: stt === 'done' ? t(s[1].toLocaleString('de-CH') + ' Einträge geprüft', s[1].toLocaleString('en') + ' entries checked') : stt === 'run' ? t('prüft …', 'checking …') : '' })); })))
      : ui.scanDone !== undefined ? h('p', { class: 'a-msg', role: 'status', text: ui.scanDone ? t(ui.scanDone + ' neue Zielfirmen gefunden und bewertet.', ui.scanDone + ' new target companies found and scored.') : t('Keine neuen Zielfirmen. Das Radar sucht täglich weiter.', 'No new targets. The radar keeps searching daily.') }) : null;
    var items = h('ul', { class: 'k-list' }, list.map(function (x) {
      var l = L(x.id), s = STAGE[x.stage];
      return h('li', null, h('button', { type: 'button', 'aria-current': x.id === selId ? 'true' : null, onclick: function () { ui.sel.radar = x.id; ui.typing = null; ui.scanDone = undefined; x.fresh = false; render(); focusDetail(); } },
        scoreBadge(score(l)),
        h('span', { class: 'k-li-b' }, h('b', { text: l.firm }), h('small', { text: l.branche + ' · ' + l.place + ' · ' + l.km + ' km' }), h('span', { class: 'k-sigs' }, l.sig.map(function (sg) { return h('span', { class: 'a-tag', text: SRC[sg[0]] }); }))),
        h('span', { class: 'k-li-r' }, x.fresh ? h('span', { class: 'a-badge info', text: t('neu gefunden', 'just found') }) : null, h('span', { class: 'a-badge ' + s[1], text: s[0] }))));
    }));
    if (!list.length) items = h('div', { class: 'a-empty', text: t('Keine Zielfirmen in diesem Filter.', 'No targets in this filter.') });
    var sel = D.leads.filter(function (x) { return x.id === selId; })[0];
    return h('div', null,
      h('p', { class: 'a-sub', text: t('Das Radar durchsucht täglich öffentliche Quellen nach Firmen, die Ihre Leistungen brauchen könnten, und bewertet jede Firma. Gefunden werden Signale wie offene Stellen, Bauvorhaben oder neue Aufträge.', 'Every day the radar searches public sources for companies that could need your services and scores each one. It looks for signals such as open positions, building projects or new orders.') }),
      filters, scan,
      h('div', { class: 'k-split' }, h('div', null, items), h('div', { id: 'k-detail' }, sel ? leadDetail(sel) : null)),
      h('p', { class: 'k-note', text: t('Kein Massenversand: Jede Nachricht ist einzeln geschrieben und von Ihrem Team freigegeben. Firmen mit Werbeverbot und Abmeldungen schliesst KAIROS aus. In der Demo sind alle Firmen erfunden.', 'No mass mailing: every message is written individually and approved by your team. KAIROS excludes companies with an advertising ban and unsubscribes. In the demo all companies are made up.') }));
  }
  function focusDetail() { if (window.innerWidth < 900) { var d = document.getElementById('k-detail') || document.getElementById('k-detail2'); if (d) d.scrollIntoView({ block: 'start', behavior: REDUCE ? 'auto' : 'smooth' }); } }
  function leadDetail(x) {
    var l = L(x.id), key = 'lead-' + x.id, mail = mailFor(l), s = score(l);
    var act;
    if (x.stage === 'new') act = h('div', { class: 'k-acts' }, h('button', { type: 'button', class: 'a-btn p', disabled: !!ui.typing, onclick: function () { x.stage = 'draft'; save(); startType(key, mail); }, text: t('Erstkontakt entwerfen', 'Draft first contact') }), h('button', { type: 'button', class: 'a-btn', onclick: function () { D.leads = D.leads.filter(function (y) { return y !== x; }); log('radar', t('Zielfirma ausgeblendet: ', 'Target hidden: ') + l.firm); ui.sel.radar = null; save(); render(); }, text: t('Passt nicht', 'Not a fit') }));
    else if (x.stage === 'draft') act = h('div', null, h('p', { class: 'a-kicker', text: t('Entwurf Erstkontakt', 'Draft first contact') }), typed(key, mail, 'k-mail'),
      busy(key) ? null : h('div', { class: 'k-acts' }, h('button', { type: 'button', class: 'a-btn p', onclick: function () { x.stage = 'sent'; x.sentAt = Date.now(); x.replyAt = Date.now() + (SHOT ? 0 : 7000); log('radar', t('Erstkontakt an ', 'First contact sent to ') + l.firm + t(' gesendet, nach Freigabe', ' after approval')); save(); render(); }, text: t('Freigeben und senden', 'Approve and send') }),
        h('button', { type: 'button', class: 'a-btn', onclick: function () { x.stage = 'new'; save(); render(); }, text: t('Verwerfen', 'Discard') })));
    else if (x.stage === 'sent') act = h('div', null, h('p', { class: 'a-msg', text: t('Gesendet ' + ago(x.sentAt) + '. Kommt keine Antwort, fasst KAIROS nach 5 Tagen einmal nach und hört dann auf.', 'Sent ' + ago(x.sentAt) + '. If there is no answer, KAIROS follows up once after 5 days and then stops.') }),
      x.replyAt ? h('p', { class: 'k-note', text: t('Demo: Die Antwort der Firma wird in wenigen Sekunden simuliert.', 'Demo: the company\'s reply is simulated in a few seconds.') }) : null);
    else act = h('div', null, h('p', { class: 'a-msg', text: t('Die Firma hat geantwortet und will eine Offerte. Die Anfrage liegt im Eingang.', 'The company replied and wants a quote. The enquiry is in the inbox.') }), h('button', { type: 'button', class: 'a-btn p', onclick: function () { go('inbox', x.inq); }, text: t('Zur Anfrage', 'Open enquiry') }));
    return h('div', { class: 'a-panel k-detail' },
      h('div', { class: 'k-dh' }, scoreBadge(s), h('div', null, h('h3', { text: l.firm }), h('p', { class: 'a-sub', text: l.branche + ' · ' + l.place + ' · ' + t('rund ', 'about ') + l.emp + t(' Mitarbeitende', ' employees') }))),
      aiLabel(t('Einschätzung von KAIROS', 'KAIROS assessment')), h('p', { class: 'k-why', text: whyFor(l) }),
      h('h4', { text: t('Signale', 'Signals') }),
      h('ul', { class: 'k-signals' }, l.sig.map(function (sg) { return h('li', null, h('span', { class: 'a-tag', text: SRC[sg[0]] }), h('span', { text: sg[1] }), h('time', { text: t('vor ' + days(sg[2]), days(sg[2]) + ' ago') })); })),
      h('h4', { text: t('Bewertung', 'Score') }),
      bars([[t('Passung Branche', 'Industry fit'), l.f[0]], [t('Distanz', 'Distance'), l.f[1], l.km + ' km'], [t('Stärke der Signale', 'Signal strength'), l.f[2]], [t('Grösse', 'Size'), l.f[3]]]),
      act);
  }

  // ---------------------------------------------------------------- SEO und Sichtbarkeit
  var VIS = [12, 13, 12, 14, 19, 26, 34, 41, 47, 55, 61, 68];
  var KW = [[t('laserschneiden luzern', 'laser cutting lucerne'), 320, 28, 3], [t('blechbearbeitung zentralschweiz', 'sheet metal central switzerland'), 210, null, 2], [t('edelstahl abkanten', 'bending stainless steel'), 590, 41, 7],
    [t('laserteile online bestellen', 'order laser parts online'), 170, null, 5], [t('lohnfertigung blech', 'contract sheet metal work'), 260, 33, 9], [t('geländer edelstahl nach mass', 'custom stainless railings'), 140, null, 4]];
  var SVC = [[t('Laserschneiden', 'Laser cutting'), 'laserschneiden'], [t('Abkanten', 'Bending'), 'abkanten'], [t('Schweissen', 'Welding'), 'schweissen'], [t('Pulverbeschichten', 'Powder coating'), 'pulverbeschichten']];
  var GMAT = [[t('Stahl', 'steel'), 'stahl'], [t('Edelstahl', 'stainless steel'), 'edelstahl'], [t('Aluminium', 'aluminium'), 'aluminium']];
  var REG = [[t('Luzern', 'Lucerne'), 'luzern'], [t('Zug', 'Zug'), 'zug'], [t('Schwyz', 'Schwyz'), 'schwyz'], [t('Aargau', 'Aargau'), 'aargau']];
  function chart() {
    var S = 'http://www.w3.org/2000/svg', W = 560, H = 190, P = 28, max = 80;
    function el(tag, a, p) { var x = document.createElementNS(S, tag); Object.keys(a).forEach(function (k) { x.setAttribute(k, a[k]); }); if (p) p.appendChild(x); return x; }
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'k-chart', role: 'img', 'aria-label': t('Sichtbarkeit der letzten 12 Monate, von 12 auf 68, Beispielwerte', 'Visibility over the last 12 months, from 12 to 68, sample values') });
    var xs = function (i) { return P + i * (W - 2 * P) / (VIS.length - 1); }, ys = function (v) { return H - P - v / max * (H - 2 * P); };
    [0, 20, 40, 60, 80].forEach(function (v) { el('path', { d: 'M' + P + ' ' + ys(v) + 'H' + (W - P), class: 'k-grid' }, svg); var tx = el('text', { x: 4, y: ys(v) + 4, class: 'k-ax' }, svg); tx.textContent = v; });
    var pts = VIS.map(function (v, i) { return xs(i) + ',' + ys(v); }).join(' ');
    el('polygon', { points: xs(0) + ',' + ys(0) + ' ' + pts + ' ' + xs(VIS.length - 1) + ',' + ys(0), class: 'k-area' }, svg);
    el('polyline', { points: pts, class: 'k-line' }, svg);
    el('path', { d: 'M' + xs(3) + ' ' + P + 'V' + (H - P), class: 'k-mark' }, svg);
    var mt = el('text', { x: xs(3) + 6, y: P + 10, class: 'k-ax k-mt' }, svg); mt.textContent = t('Start KAIROS', 'KAIROS start');
    var mo = new Date().getMonth();
    VIS.forEach(function (v, i) { if (i % 2 === 1 || i === VIS.length - 1) { var tx = el('text', { x: xs(i), y: H - 8, 'text-anchor': 'middle', class: 'k-ax' }, svg); tx.textContent = UP.MONTHS[(mo - (VIS.length - 1 - i) + 24) % 12].slice(0, 3); } });
    el('circle', { cx: xs(VIS.length - 1), cy: ys(VIS[VIS.length - 1]), r: 4, class: 'k-dot' }, svg);
    return svg;
  }
  function genPage() {
    var g = ui.gen, s = SVC[g.svc], m = GMAT[g.mat], r = REG[g.reg];
    var title = s[0] + ' ' + t('von ', 'of ') + m[0] + t(' in ', ' in ') + r[0];
    if (lang === 'de') title = s[0] + ' ' + m[0] + ' in ' + r[0];
    var slug = s[1] + '-' + m[1] + '-' + r[1];
    var desc = t(s[0] + ' von ' + m[0] + ' für Betriebe in ' + r[0] + ': Preis online in Sekunden, ab 1 Stück, nach Ihrer Zeichnung. Lieferung ab 5 Arbeitstagen.', s[0] + ' of ' + m[0] + ' for businesses in ' + r[0] + ': price online in seconds, from 1 piece, to your drawing. Delivery from 5 working days.');
    var intro = t('Sie suchen einen Partner für ' + s[0] + ' von ' + m[0] + ' in der Region ' + r[0] + '? ' + FIRM + ' fertigt nach Ihrer Zeichnung, ab einem Stück bis zur Serie. Laden Sie Ihre Zeichnung hoch und sehen Sie den Preis sofort. Die Lieferung erfolgt mit eigenem Fahrzeug in der ganzen Region ' + r[0] + '.',
      'Looking for a partner for ' + s[0].toLowerCase() + ' of ' + m[0] + ' in the ' + r[0] + ' region? ' + FIRM + ' manufactures to your drawing, from a single piece to series production. Upload your drawing and see the price at once. We deliver with our own vehicle throughout the ' + r[0] + ' region.');
    var ld = '{\n  "@context": "https://schema.org",\n  "@type": "Service",\n  "name": "' + title + '",\n  "provider": { "@type": "LocalBusiness", "name": "' + FIRM + '" },\n  "areaServed": "' + r[0] + '",\n  "url": "https://' + SITE + '/' + slug + '"\n}';
    return { title: title, slug: slug, desc: desc, intro: intro, ld: ld };
  }
  var FIXTEXT = t('Zwei Seiten haben fast denselben Titel. Vorschlag: «Laserschneiden in Luzern» bleibt. «Laserschneiden Luzern Edelstahl» wird zu «Edelstahl lasern in Luzern, ab 1 Stück».', 'Two pages have almost the same title. Proposal: «Laser cutting in Lucerne» stays. «Laser cutting Lucerne stainless» becomes «Laser-cut stainless steel in Lucerne, from 1 piece».');
  function vSeo() {
    var g = genPage();
    function sel(label, arr, k) { return h('label', { class: 'a-field' }, label, h('select', { onchange: function (ev) { ui.gen[k] = +ev.target.value; ui.draft = null; ui.typing = null; render(); } }, arr.map(function (x, i) { return h('option', { value: String(i), selected: ui.gen[k] === i, text: x[0] }); }))); }
    var exists = D.pages.some(function (p) { return p.slug === g.slug; });
    var draftOn = ui.draft === g.slug;
    var checks = [[t('Ladezeit unter 1 Sekunde', 'Load time under 1 second'), '0.7 s', true], [t('Für Handy optimiert', 'Optimised for mobile'), '100', true], [t('Strukturierte Daten auf allen Seiten', 'Structured data on all pages'), 'Schema.org', true],
      [t('Bilder als WebP, mit Alternativtext', 'Images as WebP, with alt text'), '48/48', true], [t('Barrierefreiheit nach WCAG 2.1 AA', 'Accessibility to WCAG 2.1 AA'), 'AA', true], [t('Google-Unternehmensprofil vollständig', 'Google Business Profile complete'), '100 %', true],
      [t('Seitentitel eindeutig', 'Page titles unique'), D.fixed ? t('alle eindeutig', 'all unique') : t('2 zu ähnlich', '2 too similar'), D.fixed]];
    return h('div', null,
      h('p', { class: 'a-sub', text: t('KAIROS sorgt dafür, dass Sie gefunden werden: bei Google, auf Karten und in den Antworten von KI-Assistenten. Technisch sauber, mit echten Inhalten und einer Seite für jede Leistung und Region.', 'KAIROS makes sure you are found: on Google, on maps and in the answers of AI assistants. Technically clean, with real content and a page for every service and region.') }),
      h('div', { class: 'a-row' }, card(t('Sichtbarkeit', 'Visibility'), '68', t('vor dem Start: 12', 'before start: 12')), card(t('Begriffe in den Top 10', 'Terms in top 10'), '23', t('vor dem Start: 2', 'before start: 2')),
        card(t('Besuche pro Monat', 'Visits per month'), '1\'940', t('vor dem Start: 310', 'before start: 310')), card(t('Anfragen über Google', 'Enquiries via Google'), '22', t('letzte 90 Tage', 'last 90 days'), 'amber')),
      h('div', { class: 'a-grid2' },
        h('div', { class: 'a-panel' }, h('h3', { text: t('Sichtbarkeit bei Google', 'Visibility on Google') }), chart(), h('p', { class: 'k-note', text: t('Sichtbarkeitsindex, Beispielwerte der Musterfirma.', 'Visibility index, sample values of the model company.') })),
        h('div', { class: 'a-panel' }, h('h3', { text: t('Suchbegriffe', 'Search terms') }),
          h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, h('th', { text: t('Begriff', 'Term') }), h('th', { class: 'r', text: t('Suchen/Monat', 'Searches/month') }), h('th', { class: 'r', text: t('Vorher', 'Before') }), h('th', { class: 'r', text: t('Jetzt', 'Now') }))),
            h('tbody', null, KW.map(function (k) { return h('tr', null, h('td', { text: k[0] }), h('td', { class: 'r', text: String(k[1]) }), h('td', { class: 'r a-sub', text: k[2] ? String(k[2]) : t('nicht da', 'none') }), h('td', { class: 'r' }, h('b', { class: 'pos', text: String(k[3]) }))); })))),
          h('p', { class: 'k-note', text: t('Positionen und Suchvolumen sind Beispielwerte.', 'Positions and search volumes are sample values.') }))),
      h('div', { class: 'a-panel' }, h('h3', { text: t('Seiten-Generator: eine Seite für jede Leistung und Region', 'Page generator: one page for every service and region') }),
        h('div', { class: 'a-form' }, sel(t('Leistung', 'Service'), SVC, 'svc'), sel(t('Material', 'Material'), GMAT, 'mat'), sel(t('Region', 'Region'), REG, 'reg'),
          h('button', { type: 'button', class: 'a-btn p', disabled: !!ui.typing || exists, onclick: function () { ui.draft = g.slug; startType('page', g.intro); }, text: exists ? t('Seite gibt es schon', 'Page exists') : t('Seite entwerfen', 'Draft page') })),
        draftOn ? h('div', { class: 'k-page' },
          h('div', { class: 'k-serp' }, h('cite', { text: SITE + ' › ' + g.slug }), h('b', { text: g.title + ' | ' + FIRM }), h('p', { text: g.desc })),
          h('h4', { text: 'H1: ' + g.title }), typed('page', g.intro, 'k-text'),
          busy('page') ? null : h('div', null,
            h('ul', { class: 'k-outline' }, [t('Möglichkeiten: Materialien, Dicken, Formate', 'Capabilities: materials, thicknesses, formats'), t('Sofortpreis direkt auf der Seite', 'Instant price right on the page'), t('Referenzen aus der Region ' + REG[ui.gen.reg][0] + ', nur mit Freigabe der Kunden', 'References from the ' + REG[ui.gen.reg][0] + ' region, only with customer approval'), t('Häufige Fragen, als strukturierte Daten', 'Frequently asked questions, as structured data'), t('Kontakt, Anfahrt, Öffnungszeiten', 'Contact, directions, opening hours')].map(function (x) { return h('li', { text: x }); })),
            h('details', { class: 'k-code' }, h('summary', { text: t('Strukturierte Daten (JSON-LD)', 'Structured data (JSON-LD)') }), h('pre', { text: g.ld })),
            h('div', { class: 'k-acts' }, h('button', { type: 'button', class: 'a-btn p', onclick: function () { D.pages.push({ slug: g.slug, title: g.title, status: 'review' }); ui.draft = null; log('seo', t('Seite entworfen: «', 'Page drafted: «') + g.title + t('», wartet auf Prüfung', '», awaiting review')); save(); render(); }, text: t('Zur Prüfung geben', 'Submit for review') })),
            h('p', { class: 'k-note', text: t('Jede Seite prüft Ihr Team vor der Veröffentlichung. Keine Textwüsten, keine erfundenen Angaben.', 'Your team checks every page before publication. No walls of text, no invented claims.') }))) : null,
        h('h4', { text: t('Seiten', 'Pages') }),
        h('ul', { class: 'a-files k-pages' }, D.pages.slice().reverse().map(function (p) {
          return h('li', null, h('span', { class: 'a-fico', text: 'WEB' }), h('div', null, h('div', { class: 'a-fname', text: p.title }), h('div', { class: 'a-fmeta', text: SITE + '/' + p.slug })),
            h('div', { class: 'a-factions' }, p.status === 'online' ? h('span', { class: 'a-badge ok', text: 'online' }) : [h('span', { class: 'a-badge wait', text: t('Prüfung', 'Review') }), h('button', { type: 'button', class: 'a-btn s p', onclick: function () { p.status = 'online'; log('seo', t('Seite veröffentlicht: «', 'Page published: «') + p.title + '»'); save(); render(); }, text: t('Freigeben', 'Approve') })]));
        }))),
      h('div', { class: 'a-grid2' },
        h('div', { class: 'a-panel' }, h('h3', { text: t('Technik-Check', 'Technical check') }),
          h('ul', { class: 'k-checks' }, checks.map(function (c) { return h('li', { class: c[2] ? 'ok' : 'warn' }, h('i', { 'aria-hidden': 'true' }), h('span', { text: c[0] }), h('b', { text: c[1] })); })),
          D.fixed ? null : ui.fixOn ? h('div', null, typed('fix', FIXTEXT, 'k-text'), busy('fix') ? null : h('div', { class: 'k-acts' }, h('button', { type: 'button', class: 'a-btn p', onclick: function () { D.fixed = true; ui.fixOn = false; log('seo', t('Seitentitel angepasst: alle Titel eindeutig', 'Page titles adjusted: all titles unique')); save(); render(); }, text: t('Übernehmen', 'Apply') })))
            : h('div', { class: 'k-acts' }, h('button', { type: 'button', class: 'a-btn', disabled: !!ui.typing, onclick: function () { ui.fixOn = true; startType('fix', FIXTEXT); }, text: t('Beheben', 'Fix') }))),
        h('div', { class: 'a-panel' }, h('h3', { text: t('Gefunden in KI-Antworten', 'Found in AI answers') }),
          h('div', { class: 'k-q' }, h('span', { class: 'a-kicker', text: t('Frage an einen KI-Assistenten', 'Question to an AI assistant') }), h('p', { text: t('«Wer lasert Edelstahl in der Zentralschweiz und liefert innert einer Woche?»', '«Who laser-cuts stainless steel in central Switzerland and delivers within a week?»') })),
          h('p', { text: t('Immer mehr Einkäufer fragen zuerst eine KI. Damit Ihre Firma in der Antwort vorkommt, bereitet KAIROS Ihre Inhalte dafür auf:', 'More and more buyers ask an AI first. To make sure your company appears in the answer, KAIROS prepares your content for it:') }),
          h('ul', { class: 'k-checks' }, [t('Klare Fakten: Materialien, Dicken, Mengen, Lieferzeit', 'Clear facts: materials, thicknesses, quantities, delivery time'), t('Antworten auf echte Kundenfragen', 'Answers to real customer questions'), t('Gleiche Angaben in allen Verzeichnissen', 'Consistent details in all directories'), t('Referenzen mit konkreten Zahlen', 'References with concrete figures')].map(function (x) { return h('li', { class: 'ok' }, h('i', { 'aria-hidden': 'true' }), h('span', { text: x })); })),
          h('p', { class: 'k-note', text: t('KAIROS prüft jeden Monat, ob und wie Ihre Firma in KI-Antworten genannt wird.', 'Every month KAIROS checks whether and how your company is named in AI answers.') }))));
  }

  // ---------------------------------------------------------------- Website der Musterfirma mit Sofortpreis
  function sketch(c) {
    var S = 'http://www.w3.org/2000/svg', bends = TYPES[c.type][1];
    function el(tag, a, p) { var x = document.createElementNS(S, tag); Object.keys(a).forEach(function (k) { x.setAttribute(k, a[k]); }); if (p) p.appendChild(x); return x; }
    var svg = el('svg', { viewBox: '0 0 320 220', class: 'k-sketch', role: 'img', 'aria-label': t('Skizze: ', 'Sketch: ') + partName(c) + ', ' + c.l + ' × ' + c.b + ' mm, ' + c.holes + t(' Löcher, ', ' holes, ') + bends + t(' Biegungen', ' bends') });
    var k = Math.min(240 / c.l, 120 / c.b), w = c.l * k, hh = c.b * k, x0 = 24 + (240 - w) / 2, y0 = 50 + (120 - hh) / 2;
    el('rect', { x: x0, y: y0, width: w, height: hh, class: 'k-sk-part' }, svg);
    var ml = el('text', { x: 24, y: 14, class: 'k-sk-t' }, svg); ml.textContent = t('Abwicklung', 'Flat pattern') + ' · ' + c.mat + ' · t = ' + c.th;
    var bx = bends === 1 ? [x0 + w / 2] : bends === 2 ? [x0 + w / 3, x0 + 2 * w / 3] : [];
    bx.forEach(function (x) { el('path', { d: 'M' + x + ' ' + y0 + 'V' + (y0 + hh), class: 'k-sk-bend' }, svg); });
    var n = Math.min(c.holes, 24), r = Math.max(1.8, Math.min(6, 6 * k));
    for (var i = 0; i < n; i++) {
      var side = i % 2, col = Math.floor(i / 2), cols = Math.ceil(n / 2);
      var fx = bends === 2 && cols === 2 ? [1 / 6, 5 / 6][col] : bends === 1 && cols === 2 ? [0.25, 0.75][col] : (col + 0.5) / cols;
      [1 / 3, 2 / 3, 0.5].forEach(function (b, bi) { var on = bends === 2 ? bi < 2 : bends === 1 ? bi === 2 : false; if (on && Math.abs(fx - b) < 0.06) fx = b + (fx < b ? -0.06 : 0.06); });
      var cx = x0 + w * fx, cy = n === 1 ? y0 + hh / 2 : side ? y0 + hh * 0.75 : y0 + hh * 0.25;
      el('circle', { cx: cx, cy: cy, r: r, class: 'k-sk-hole' }, svg);
      if (n <= 12) el('path', { d: 'M' + (cx - r - 3) + ' ' + cy + 'H' + (cx + r + 3) + 'M' + cx + ' ' + (cy - r - 3) + 'V' + (cy + r + 3), class: 'k-sk-ctr' }, svg);
    }
    var y = y0 - 14, x = x0 + w + 14, a = 5, bb = 1.6;
    el('path', { d: 'M' + x0 + ' ' + (y0 - 2) + 'V' + (y - 3) + 'M' + (x0 + w) + ' ' + (y0 - 2) + 'V' + (y - 3) + 'M' + (x0 + w + 2) + ' ' + y0 + 'H' + (x + 3) + 'M' + (x0 + w + 2) + ' ' + (y0 + hh) + 'H' + (x + 3) + 'M' + x0 + ' ' + y + 'H' + (x0 + w) + 'M' + x + ' ' + y0 + 'V' + (y0 + hh), class: 'k-sk-dim' }, svg);
    el('path', { d: 'M' + x0 + ' ' + y + 'l' + a + ' ' + (-bb) + 'v' + (2 * bb) + 'z' + 'M' + (x0 + w) + ' ' + y + 'l' + (-a) + ' ' + (-bb) + 'v' + (2 * bb) + 'z' + 'M' + x + ' ' + y0 + 'l' + (-bb) + ' ' + a + 'h' + (2 * bb) + 'z' + 'M' + x + ' ' + (y0 + hh) + 'l' + (-bb) + ' ' + (-a) + 'h' + (2 * bb) + 'z', class: 'k-sk-arr' }, svg);
    var tl = el('text', { x: x0 + w / 2, y: y - 3, 'text-anchor': 'middle', class: 'k-sk-t' }, svg); tl.textContent = c.l;
    var tb = el('text', { x: x - 3, y: y0 + hh / 2, 'text-anchor': 'middle', class: 'k-sk-t', transform: 'rotate(-90 ' + (x - 3) + ' ' + (y0 + hh / 2) + ')' }, svg); tb.textContent = c.b;
    // Profil von der Seite
    var py = 208, pts = bends === 0 ? 'M100 ' + py + 'H220' : bends === 1 ? 'M120 ' + (py - 26) + 'V' + py + 'H200' : 'M120 ' + (py - 26) + 'V' + py + 'H200V' + (py - 26);
    el('path', { d: pts, class: 'k-sk-prof' }, svg);
    var tp = el('text', { x: 236, y: py - 4, class: 'k-sk-t' }, svg); tp.textContent = t('Profil', 'Profile');
    return svg;
  }
  function quoteBox(c) {
    var p = price(c);
    var tiers = [10, 50, 100, 500].map(function (q) { return [q, price(c, q).unit]; });
    return h('div', { class: 'k-quote' },
      h('div', { class: 'k-price' }, h('span', { text: t('Preis pro Stück', 'Price per piece') }), h('b', { text: money(p.unit) }), h('small', { text: t('Total ', 'Total ') + c.qty + t(' Stk.: ', ' pcs: ') + money(p.total) + t(', exkl. MwSt.', ', excl. VAT') })),
      h('ul', { class: 'k-breakdown' }, [[t('Material', 'Material'), p.mat], [t('Laser, Biegen, Entgraten', 'Laser, bending, deburring'), p.work], c.surf === 'powder' ? [t('Pulverbeschichtung', 'Powder coating'), p.coat] : null, [t('Einrichten, anteilig', 'Setup, share'), p.setup]].filter(Boolean).map(function (r) { return h('li', null, h('span', { text: r[0] }), h('span', { text: money(r[1] * 1.28 * (c.express ? 1.25 : 1)) })); })),
      h('p', { class: 'k-del', text: t('Lieferung in ' + p.days + ' Arbeitstagen · Gewicht ' + (p.kg * c.qty).toFixed(1) + ' kg', 'Delivery in ' + p.days + ' working days · weight ' + (p.kg * c.qty).toFixed(1) + ' kg') }),
      h('table', { class: 'k-tiers' }, h('caption', { text: t('Mengenstaffel', 'Quantity breaks') }), h('tbody', null, tiers.map(function (x) { return h('tr', { class: x[0] === c.qty ? 'on' : null }, h('td', { text: x[0] + t(' Stk.', ' pcs') }), h('td', { class: 'r', text: money(x[1]) })); }))),
      h('p', { class: 'k-note', text: t('Beispielpreise der Musterfirma. In Ihrem Betrieb rechnet KAIROS mit Ihren Ansätzen.', 'Sample prices of the model company. In your business KAIROS calculates with your rates.') }));
  }
  function updateQuote() {
    var q = app.querySelector('#k-quote'), s = app.querySelector('#k-sk');
    if (q) { UP.clear(q).appendChild(quoteBox(ui.cfg)); }
    if (s) { UP.clear(s).appendChild(sketch(ui.cfg)); }
  }
  var BOT = [[t('Welche Materialien?', 'Which materials?'), t('Stahl S235, Edelstahl 1.4301 und Aluminium AlMg3, von 1 bis 10 mm Dicke.', 'Steel S235, stainless steel 1.4301 and aluminium AlMg3, from 1 to 10 mm thick.')],
    [t('Wie schnell liefern Sie?', 'How fast do you deliver?'), t('Standard in 10 Arbeitstagen, mit Express in 5. Den Termin sehen Sie direkt beim Preis.', 'Standard in 10 working days, express in 5. You see the date right next to the price.')],
    [t('Ab welcher Menge?', 'From what quantity?'), t('Ab 1 Stück. Ab 50 Stück sinkt der Preis pro Stück deutlich, siehe Mengenstaffel.', 'From 1 piece. From 50 pieces the price per piece drops markedly, see the quantity breaks.')],
    [t('Kann ich eine Zeichnung senden?', 'Can I send a drawing?'), t('Ja, als DXF, STEP oder PDF. In der echten Lösung liest KAIROS die Zeichnung und rechnet den Preis direkt.', 'Yes, as DXF, STEP or PDF. In the real solution KAIROS reads the drawing and calculates the price directly.')]];
  function vWeb() {
    var c = ui.cfg;
    function num(label, k, min, max, step) {
      return h('label', { class: 'a-field' }, label, h('input', { type: 'number', inputmode: 'numeric', min: String(min), max: String(max), step: String(step || 1), value: String(c[k]),
        oninput: function (ev) { var v = parseFloat(ev.target.value); if (isNaN(v)) return; v = Math.max(min, Math.min(max, v)); c[k] = v; updateQuote(); },
        onchange: function (ev) { var v = parseFloat(ev.target.value); if (isNaN(v)) v = min; v = Math.max(min, Math.min(max, v)); c[k] = v; ev.target.value = String(v); updateQuote(); } }));
    }
    function choice(label, k, opts) {
      return h('fieldset', { class: 'k-choice' }, h('legend', { text: label }), opts.map(function (o) {
        return h('label', null, h('input', { type: 'radio', name: 'k-' + k, value: o[0], checked: String(c[k]) === String(o[0]), onchange: function () { c[k] = o[0]; updateQuote(); } }), h('span', { text: o[1] }));
      }));
    }
    var form;
    if (ui.sent) form = h('div', { class: 'k-sent', role: 'status' }, h('h3', { text: t('Danke, Ihre Anfrage ist eingegangen.', 'Thank you, your enquiry has arrived.') }),
      h('p', { text: t('Anfrage ' + ui.sent.nr + ' über ' + money(ui.sent.total) + '. Sie erhalten die verbindliche Offerte noch heute. Eine Bestätigung ist unterwegs.', 'Enquiry ' + ui.sent.nr + ' for ' + money(ui.sent.total) + '. You will receive the binding quote today. A confirmation is on its way.') }),
      h('div', { class: 'k-acts' }, h('button', { type: 'button', class: 'a-btn p', onclick: function () { go('inbox', ui.sent.id); }, text: t('In KAIROS ansehen', 'View in KAIROS') }), h('a', { class: 'a-btn', href: ARGUS_URL + '?view=inbox', text: t('In ARGUS weiterverfolgen', 'Follow up in ARGUS') }), h('button', { type: 'button', class: 'a-btn', onclick: function () { ui.sent = null; render(); }, text: t('Neue Anfrage', 'New enquiry') })));
    else {
      var fFirm = h('input', { type: 'text', value: 'Beispiel Kunde AG', autocomplete: 'off', required: 'required' }), fName = h('input', { type: 'text', value: t('Muster', 'Muster'), autocomplete: 'off' }), fNote = h('input', { type: 'text', placeholder: t('optional', 'optional'), autocomplete: 'off' });
      form = h('form', { class: 'k-req', onsubmit: function (ev) {
        ev.preventDefault();
        var p = price(c), nr = 'AN-26-' + ('0000' + D.nr).slice(-4), id = 'w' + UP.uid();
        D.nr++;
        var e = { id: id, nr: nr, src: 'web', firm: fFirm.value.trim() || 'Beispiel Kunde AG', subj: t('Sofortpreis: ', 'Instant price: ') + partName(c) + ' ' + c.mat + ', ' + c.th + ' mm, ' + c.qty + t(' Stk.', ' pcs'),
          text: t('Anfrage über den Sofortpreis. ', 'Enquiry via the instant price. ') + partName(c) + ', ' + MAT[c.mat].n + ', ' + c.th + ' mm, ' + c.l + ' × ' + c.b + ' mm, ' + c.holes + t(' Löcher, ', ' holes, ') + c.qty + t(' Stück', ' pieces') + (c.surf === 'powder' ? t(', pulverbeschichtet', ', powder-coated') : '') + (c.express ? t(', Express', ', express') : '') + (fNote.value.trim() ? '. ' + fNote.value.trim() : '') + '.',
          ts: Date.now(), part: { partName: partName(c), mat: c.mat, th: c.th, qty: c.qty, total: p.total }, status: 'argus', resp: 0, line: 3, contact: fName.value.trim() };
        D.inbox.push(e);
        pushArgus({ id: id, ts: e.ts, firm: e.firm, name: e.contact, partName: e.part.partName, mat: c.mat, th: c.th, qty: c.qty, total: p.total });
        log('web', t('Sofortpreis-Anfrage ' + nr + ' von ' + e.firm + ' über ' + money(p.total) + ': sofort bestätigt und an ARGUS übergeben', 'Instant price enquiry ' + nr + ' from ' + e.firm + ' for ' + money(p.total) + ': confirmed at once and handed to ARGUS'));
        ui.sent = { id: id, nr: nr, total: p.total }; save(); render();
      } },
        h('h3', { text: t('Anfrage senden', 'Send enquiry') }),
        h('div', { class: 'k-req-f' }, h('label', { class: 'a-field' }, t('Firma', 'Company'), fFirm), h('label', { class: 'a-field' }, t('Name', 'Name'), fName), h('label', { class: 'a-field k-wide' }, t('Bemerkung', 'Note'), fNote)),
        h('button', { type: 'submit', class: 'a-btn p', text: t('Anfrage zum Sofortpreis senden', 'Send enquiry at instant price') }),
        h('p', { class: 'k-note', text: t('Demo: Die Anfrage bleibt in Ihrem Browser und erscheint im KAIROS-Eingang und in der ARGUS-Demo.', 'Demo: the enquiry stays in your browser and appears in the KAIROS inbox and in the ARGUS demo.') }));
    }
    return h('div', { class: 'k-site' },
      h('div', { class: 'k-site-bar', text: t('So sieht Ihr Kunde die Website. Probieren Sie den Sofortpreis aus.', 'This is how your customer sees the website. Try the instant price.') }),
      h('div', { class: 'k-site-head' }, h('b', { text: FIRM }), h('span', { class: 'k-site-nav', 'aria-hidden': 'true' }, h('span', { text: t('Leistungen', 'Services') }), h('span', { text: t('Sofortpreis', 'Instant price') }), h('span', { text: t('Referenzen', 'References') }), h('span', { text: t('Kontakt', 'Contact') }))),
      h('div', { class: 'k-hero' }, h('p', { class: 'a-kicker', text: t('Laser · Abkanten · Pulverbeschichten', 'Laser · bending · powder coating') }), h('h2', { text: t('Blechteile aus der Zentralschweiz. Ihr Preis in Sekunden.', 'Sheet metal parts from central Switzerland. Your price in seconds.') }), h('p', { text: t('Ab 1 Stück, nach Ihrer Zeichnung. Wählen Sie Teil, Material und Menge, der Preis rechnet sich live.', 'From 1 piece, to your drawing. Choose part, material and quantity, the price calculates live.') })),
      h('div', { class: 'k-conf' },
        h('div', { class: 'k-conf-in' },
          choice(t('Teil', 'Part'), 'type', Object.keys(TYPES).map(function (k) { return [k, TYPES[k][0]]; })),
          choice(t('Material', 'Material'), 'mat', Object.keys(MAT).map(function (k) { return [k, MAT[k].n]; })),
          h('div', { class: 'k-grid3' },
            h('label', { class: 'a-field' }, t('Dicke', 'Thickness'), h('select', { onchange: function (ev) { c.th = parseFloat(ev.target.value); updateQuote(); } }, THK.map(function (x) { return h('option', { value: String(x), selected: c.th === x, text: x + ' mm' }); }))),
            num(t('Länge mm', 'Length mm'), 'l', 20, 3000), num(t('Breite mm', 'Width mm'), 'b', 20, 1500), num(t('Löcher', 'Holes'), 'holes', 0, 40), num(t('Menge', 'Quantity'), 'qty', 1, 5000)),
          choice(t('Oberfläche', 'Surface'), 'surf', [['raw', t('Roh, entgratet', 'Raw, deburred')], ['powder', t('Pulverbeschichtet', 'Powder-coated')]]),
          h('label', { class: 'k-check' }, h('input', { type: 'checkbox', checked: c.express, onchange: function (ev) { c.express = ev.target.checked; updateQuote(); } }), h('span', { text: t('Express, Lieferung in 5 Arbeitstagen', 'Express, delivery in 5 working days') })),
          h('div', { class: 'k-upl' }, h('span', { class: 'a-fico', text: 'DXF' }), h('span', null, h('b', { text: t('Zeichnung hochladen', 'Upload drawing') }), h('br'), h('small', { text: t('DXF, STEP oder PDF. KAIROS erkennt Kontur, Löcher und Biegungen.', 'DXF, STEP or PDF. KAIROS recognises contour, holes and bends.') })),
            h('button', { type: 'button', class: 'a-btn s', onclick: function () { ui.cfg = { type: 'channel', mat: '1.4301', th: 3, l: 240, b: 120, holes: 4, qty: 120, surf: 'raw', express: false }; ui.recog = true; render(); }, text: t('Beispielzeichnung verwenden', 'Use sample drawing') })),
          ui.recog ? h('p', { class: 'a-msg', text: t('Erkannt aus Konsole_K12.dxf: Edelstahl 1.4301, 3 mm, 240 × 120 mm, 4 Löcher, 2 Biegungen. In der Demo ist die Zeichnung vorgegeben.', 'Recognised from Konsole_K12.dxf: stainless steel 1.4301, 3 mm, 240 × 120 mm, 4 holes, 2 bends. In the demo the drawing is predefined.') }) : null),
        h('div', { class: 'k-conf-out' }, h('div', { id: 'k-sk', class: 'k-sk-wrap' }, sketch(c)), h('div', { id: 'k-quote' }, quoteBox(c)))),
      h('div', { class: 'k-site-low' }, form,
        h('div', { class: 'k-bot' }, h('h3', null, h('span', { class: 'k-ai-i', 'aria-hidden': 'true', html: SPARK }), t('Fragen? Der Assistent antwortet sofort.', 'Questions? The assistant answers at once.')),
          h('div', { class: 'k-bot-log', 'aria-live': 'polite' }, ui.chat.map(function (m) { return h('p', { class: m.me ? 'me' : null, text: m.text }); })),
          h('div', { class: 'g-chips k-chips' }, BOT.map(function (b) { return h('button', { type: 'button', class: 'a-btn s', onclick: function () { ui.chat = ui.chat.concat([{ me: true, text: b[0] }, { me: false, text: b[1] }]).slice(-6); render(); }, text: b[0] }); })),
          h('p', { class: 'k-note', text: t('Antwortet aus den Angaben der Musterfirma. Was es nicht weiss, gibt es an Ihr Team weiter.', 'Answers from the model company\'s details. What it does not know, it passes on to your team.') }))));
  }

  // ---------------------------------------------------------------- Anfragen
  var SRCL = { web: [t('Sofortpreis', 'Instant price'), 'WEB'], mail: [t('E-Mail', 'Email'), 'MAIL'], phone: [t('Telefon', 'Phone'), 'TEL'], radar: [t('Radar', 'Radar'), 'RAD'], portal: [t('Kundenportal', 'Portal'), 'PORT'] };
  var IST = { new: [t('Neu', 'New'), 'info'], answered: [t('Beantwortet', 'Answered'), 'wait'], argus: [t('An ARGUS übergeben', 'Handed to ARGUS'), 'ok'] };
  function replyFor(e) {
    var lines = [t('Ihr Sofortpreis ist bestätigt. Unser Team prüft die Angaben und sendet Ihnen die verbindliche Offerte noch heute.', 'Your instant price is confirmed. Our team checks the details and sends you the binding quote today.'),
      t('Die Geländerpfosten wie im letzten Herbst liefern wir gerne wieder. Für 60 Stück erhalten Sie die Offerte heute noch. Ende Monat ist laut unserer Planung machbar.', 'We are happy to deliver the railing posts again like last autumn. You will receive the quote for 60 pieces today. According to our planning the end of the month is feasible.'),
      t('Die Abdeckbleche fertigen wir nach der Zeichnung aus Auftrag AU-26-0387. Sie erhalten die Offerte innert einer Stunde, Lieferung in 5 Arbeitstagen ist möglich.', 'We will make the cover sheets to the drawing from order AU-26-0387. You will receive the quote within an hour, delivery in 5 working days is possible.'),
      t('Danke für Ihre Anfrage über den Sofortpreis. Die Angaben sind vollständig. Die verbindliche Offerte folgt noch heute.', 'Thank you for your enquiry via the instant price. The details are complete. The binding quote follows today.'),
      t('Gerne erstellen wir Ihnen eine Offerte. Senden Sie uns die Zeichnungen, oder nutzen Sie direkt den Sofortpreis: ' + SITE + '/sofortpreis', 'We are happy to prepare a quote. Send us the drawings, or use the instant price directly: ' + SITE + '/sofortpreis'),
      t('Gerne fertigen wir die Teile nochmals wie beim letzten Auftrag. Die Offerte erhalten Sie noch heute.', 'We are happy to make the parts again as in the last order. You will receive the quote today.')];
    return t('Guten Tag\n\nVielen Dank für Ihre Anfrage ' + e.nr + '. ', 'Hello\n\nThank you for your enquiry ' + e.nr + '. ') + lines[e.line] + t('\n\nFreundliche Grüsse\nVerkauf, ', '\n\nKind regards\nSales, ') + FIRM;
  }
  function vInbox() {
    var list = D.inbox.slice().sort(function (a, b) { return b.ts - a.ts; });
    var selId = ui.sel.inbox && D.inbox.some(function (x) { return x.id === ui.sel.inbox; }) ? ui.sel.inbox : (list[0] && list[0].id);
    var e = D.inbox.filter(function (x) { return x.id === selId; })[0];
    return h('div', null,
      h('p', { class: 'a-sub', text: t('Alle Anfragen an einem Ort: Website, E-Mail, Telefon, Radar und Kundenportal. KAIROS bestätigt sofort, bewertet jede Anfrage und gibt sie an ARGUS weiter.', 'All enquiries in one place: website, email, phone, radar and customer portal. KAIROS confirms at once, assesses each enquiry and hands it to ARGUS.') }),
      h('div', { class: 'k-split' },
        h('ul', { class: 'k-list' }, list.map(function (x) {
          var s = IST[x.status];
          return h('li', null, h('button', { type: 'button', 'aria-current': x.id === selId ? 'true' : null, onclick: function () { ui.sel.inbox = x.id; ui.typing = null; render(); focusDetail(); } },
            h('span', { class: 'a-fico', text: SRCL[x.src][1] }),
            h('span', { class: 'k-li-b' }, h('b', { text: x.firm }), h('small', { text: x.subj }), h('small', { class: 'a-sub', text: x.nr + ' · ' + ago(x.ts) })),
            h('span', { class: 'k-li-r' }, h('span', { class: 'a-badge ' + s[1], text: s[0] }))));
        })),
        h('div', { id: 'k-detail2' }, e ? inqDetail(e) : null)),
      h('p', { class: 'k-note', text: t('Antwortzeit heute im Schnitt 2 Minuten, auch nachts und am Wochenende. Preise und Termine bestätigt Ihr Team.', 'Average response time today 2 minutes, also at night and at weekends. Your team confirms prices and dates.') }));
  }
  function inqDetail(e) {
    var key = 'inq-' + e.id, reply = replyFor(e), p = e.part;
    var known = ['Beispiel Maschinenbau AG', 'Muster Bau AG', 'Demo Fördertechnik AG', 'Muster Anlagenbau GmbH'].indexOf(e.firm) >= 0;
    var urgent = /eilt|urgent|schnell|soon/i.test(e.text + e.subj);
    var assess = [[t('Machbarkeit', 'Feasibility'), p.th <= 10 ? t('Machbar, Material und Dicke im Bereich der Anlagen', 'Feasible, material and thickness within machine range') : t('Prüfen', 'Check')],
      [t('Kunde', 'Customer'), known ? t('Bestehender Kunde, zahlt pünktlich', 'Existing customer, pays on time') : t('Neukunde, Bonität vor Auftrag prüfen', 'New customer, check credit before order')],
      [t('Dringlichkeit', 'Urgency'), urgent ? t('Hoch', 'High') : t('Normal', 'Normal')], [t('Geschätzter Wert', 'Estimated value'), chf0(p.total)]];
    var acts = [];
    if (e.status === 'new' && !e.drafted) acts.push(h('button', { type: 'button', class: 'a-btn p', disabled: !!ui.typing, onclick: function () { e.drafted = true; save(); startType(key, reply); }, text: t('Antwort entwerfen', 'Draft reply') }));
    if (e.status === 'new' && e.drafted && !busy(key)) acts.push(h('button', { type: 'button', class: 'a-btn p', onclick: function () { e.status = 'answered'; e.resp = Math.max(1, Math.round((Date.now() - e.ts) / MIN)); log('mail', t('Anfrage ' + e.nr + ' beantwortet', 'Enquiry ' + e.nr + ' answered')); save(); render(); }, text: t('Antwort senden', 'Send reply') }));
    if (e.status !== 'argus' && !busy(key)) acts.push(h('button', { type: 'button', class: 'a-btn', onclick: function () { e.status = 'argus'; pushArgus({ id: e.id, ts: Date.now(), firm: e.firm, name: '', partName: p.partName, mat: p.mat, th: p.th, qty: p.qty, total: p.total }); log('mail', t('Anfrage ' + e.nr + ' an ARGUS übergeben: Offerte wird vorbereitet', 'Enquiry ' + e.nr + ' handed to ARGUS: quote is being prepared')); save(); render(); }, text: t('An ARGUS übergeben', 'Hand to ARGUS') }));
    if (e.status === 'argus') acts.push(h('a', { class: 'a-btn', href: ARGUS_URL + '?view=inbox', text: t('In ARGUS öffnen', 'Open in ARGUS') }));
    return h('div', { class: 'a-panel k-detail' },
      h('div', { class: 'k-dh' }, h('span', { class: 'a-fico', text: SRCL[e.src][1] }), h('div', null, h('h3', { text: e.subj }), h('p', { class: 'a-sub', text: e.firm + ' · ' + SRCL[e.src][0] + ' · ' + UP.fmtDT(e.ts) }))),
      h('blockquote', { class: 'k-msg', text: e.text }),
      aiLabel(t('Einschätzung von KAIROS', 'KAIROS assessment')),
      h('dl', { class: 'k-dl' }, assess.map(function (a) { return h('div', null, h('dt', { text: a[0] }), h('dd', { text: a[1] })); })),
      h('div', { class: 'g-chips' }, [p.partName, MAT[p.mat] ? MAT[p.mat].n : p.mat, p.th + ' mm', p.qty + t(' Stk.', ' pcs')].map(function (x) { return h('span', { class: 'a-tag', text: x }); })),
      e.status === 'answered' || e.drafted || (e.status === 'argus' && e.src !== 'radar') ? h('div', null, h('p', { class: 'a-kicker', text: e.status === 'new' ? t('Entwurf Antwort', 'Draft reply') : t('Antwort, gesendet nach ', 'Reply, sent after ') + (e.resp || 1) + ' min' }), typed(key, reply, 'k-mail')) : null,
      acts.length ? h('div', { class: 'k-acts' }, acts) : null);
  }

  // ---------------------------------------------------------------- Nachfassen
  var SEQ = [[3, t('Erinnerung per E-Mail', 'Reminder by email')], [7, t('Anruf durch den Verkauf', 'Call by sales')], [14, t('Letzte Nachricht mit Alternative', 'Last message with alternative')]];
  function nextStep(q) { var s = SEQ[q.done]; return s && (Date.now() - q.sent) / DAY >= s[0] ? s : null; }
  function fuText(q) {
    var s = SEQ[q.done];
    if (q.done === 1) return t('Aufgabe für den Verkauf: ' + q.cust + ' anrufen.\n\nGesprächsleitfaden von KAIROS:\n1. Ist die Offerte ' + q.nr + ' angekommen und verständlich?\n2. Passt der Termin? Wir könnten auch in Teillieferungen liefern.\n3. Gibt es einen Punkt, der noch fehlt?\n\nHinweis: Der Kunde hat die Offerte zweimal geöffnet, zuletzt vor 2 Tagen.', 'Task for sales: call ' + q.cust + '.\n\nCall guide from KAIROS:\n1. Did quote ' + q.nr + ' arrive and is it clear?\n2. Does the date suit? We could also deliver in partial shipments.\n3. Is anything still missing?\n\nNote: the customer opened the quote twice, last 2 days ago.');
    return t('Guten Tag\n\n' + (q.done === 0 ? 'Kurze Nachfrage zu unserer Offerte ' + q.nr + ' (' + q.text + '). Haben Sie noch Fragen dazu? Wir halten den Liefertermin gerne für Sie frei.' : 'Zu unserer Offerte ' + q.nr + ' haben wir noch nichts gehört. Falls der Preis das Thema ist: Bei einer Losgrösse von 500 Stück sinkt der Stückpreis um rund 12 %. Sollen wir das so offerieren?') + '\n\nFreundliche Grüsse\nVerkauf, ' + FIRM,
      'Hello\n\n' + (q.done === 0 ? 'A short follow-up on our quote ' + q.nr + ' (' + q.text + '). Do you have any questions? We are happy to keep the delivery date free for you.' : 'We have not heard back about our quote ' + q.nr + '. If price is the issue: with a batch size of 500 pieces the unit price drops by around 12%. Shall we quote that?') + '\n\nKind regards\nSales, ' + FIRM);
  }
  function vFollow() {
    var fq = ui.fu ? D.quotes.filter(function (q) { return q.nr === ui.fu; })[0] : null;
    return h('div', null,
      h('p', { class: 'a-sub', text: t('Die meisten Offerten gehen nicht verloren, weil der Preis nicht stimmt, sondern weil niemand nachfragt. KAIROS fasst nach, zur richtigen Zeit und im richtigen Ton.', 'Most quotes are not lost because the price is wrong, but because nobody follows up. KAIROS follows up at the right time and in the right tone.') }),
      h('div', { class: 'a-panel' }, h('h3', { text: t('Offene Offerten', 'Open quotes') }),
        h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, h('th', { text: t('Offerte', 'Quote') }), h('th', { class: 'r', text: t('Betrag', 'Amount') }), h('th', { text: t('Gesendet', 'Sent') }), h('th', { text: t('Ablauf', 'Sequence') }), h('th', { class: 'r', text: t('Chance', 'Chance') }), h('th', { text: '' }))),
          h('tbody', null, D.quotes.map(function (q) {
            var nx = nextStep(q);
            return h('tr', { class: ui.fu === q.nr ? 'k-on' : null }, h('td', null, h('b', { text: q.nr }), h('div', { class: 'a-sub', text: q.cust })), h('td', { class: 'r', text: chf0(q.amount) }), h('td', { text: ago(q.sent) }),
              h('td', null, h('span', { class: 'k-seq' }, SEQ.map(function (s, i) { return h('i', { class: i < q.done ? 'done' : (nx && i === q.done) ? 'due' : null, title: t('Tag ', 'Day ') + s[0] + ': ' + s[1], text: 'T' + s[0] }); }))),
              h('td', { class: 'r', text: q.chance + ' %' }),
              h('td', null, nx ? h('button', { type: 'button', class: 'a-btn s p', disabled: !!ui.typing, onclick: function () { ui.fu = q.nr; startType('fu-' + q.nr, fuText(q)); }, text: t('Jetzt nachfassen', 'Follow up now') }) : h('span', { class: 'a-sub', text: q.done >= SEQ.length ? t('abgeschlossen', 'complete') : t('nächster Schritt ', 'next step ') + t('an Tag ', 'on day ') + SEQ[q.done][0] })));
          })))),
        fq ? h('div', { class: 'k-fu' }, h('p', { class: 'a-kicker', text: SEQ[fq.done] ? SEQ[fq.done][1] + ' · ' + fq.nr : fq.nr }), typed('fu-' + fq.nr, fuText(fq), 'k-mail'),
          busy('fu-' + fq.nr) ? null : h('div', { class: 'k-acts' }, h('button', { type: 'button', class: 'a-btn p', onclick: function () { var s = SEQ[fq.done]; log('follow', t('Offerte ' + fq.nr + ' nachgefasst: ' + s[1], 'Quote ' + fq.nr + ' followed up: ' + s[1])); fq.done++; fq.chance = Math.min(85, fq.chance + 6); ui.fu = null; save(); render(); }, text: fq.done === 1 ? t('Als erledigt melden', 'Mark as done') : t('Freigeben und senden', 'Approve and send') }), h('button', { type: 'button', class: 'a-btn', onclick: function () { ui.fu = null; render(); }, text: t('Abbrechen', 'Cancel') }))) : null),
      h('div', { class: 'a-grid2' },
        h('div', { class: 'a-panel' }, h('h3', { text: t('Schlafende Kunden wecken', 'Wake up dormant customers') }),
          h('ul', { class: 'k-sleep' }, D.sleep.map(function (s) {
            return h('li', null, h('div', null, h('b', { text: s.cust }), h('div', { class: 'a-sub', text: t('Letzter Auftrag vor ' + s.months + ' Monaten: ', 'Last order ' + s.months + ' months ago: ') + s.last })), aiLabel(s.idea),
              s.status === 'open' ? h('button', { type: 'button', class: 'a-btn s', onclick: function () { s.status = 'done'; log('follow', t('Reaktivierung vorbereitet: ', 'Reactivation prepared: ') + s.cust); save(); render(); }, text: s.id === 's2' ? t('Anruf einplanen', 'Schedule call') : t('Nachricht vorbereiten', 'Prepare message') }) : h('span', { class: 'a-badge ok', text: t('vorbereitet', 'prepared') }));
          }))),
        h('div', { class: 'a-panel' }, h('h3', { text: t('Bewertungen', 'Reviews') }),
          h('div', { class: 'a-row' }, card(t('Google-Bewertung', 'Google rating'), '4.8', t('von 5, 31 Bewertungen', 'of 5, 31 reviews')), card(t('Seit Start', 'Since start'), '+19', t('neue Bewertungen', 'new reviews'))),
          h('p', { text: t('Nach jeder Lieferung bittet KAIROS jeden Kunden um eine Bewertung, mit einem direkten Link. Antworten auf Bewertungen schlägt KAIROS vor, Ihr Team gibt sie frei.', 'After every delivery KAIROS asks every customer for a review, with a direct link. KAIROS suggests replies to reviews, your team approves them.') }),
          h('p', { class: 'k-note', text: t('Beispielwerte der Musterfirma.', 'Sample values of the model company.') }))));
  }

  // ---------------------------------------------------------------- Ausschreibungen
  var TST = { new: [t('Neu', 'New'), 'info'], prep: [t('In Vorbereitung', 'In preparation'), 'wait'], skip: [t('Nicht teilnehmen', 'Not bidding'), 'grey'] };
  function tenderSum(x) {
    if (x.id === 't1') return t('Umfang: rund 180 m Geländer und 60 m Handläufe aus Edelstahl, geschliffen, inklusive Montage durch einen Partner. Eignung: drei vergleichbare Objekte in den letzten fünf Jahren. Zuschlag: Preis 60 %, Qualität und Referenzen 30 %, Termin 10 %. Passt gut zu Ihren Leistungen. Für die Montage braucht es einen Partner.', 'Scope: about 180 m of railings and 60 m of handrails in stainless steel, ground finish, including installation by a partner. Suitability: three comparable projects in the last five years. Award: price 60%, quality and references 30%, schedule 10%. A good fit for your services. Installation needs a partner.');
    if (x.id === 't2') return t('Umfang: Abdeckungen und Gitterroste aus Stahl, verzinkt, Abrufe über drei Jahre. Eignung: Zertifikat für Schweissarbeiten, Lieferung innert 10 Arbeitstagen. Zuschlag: Preis 70 %, Termin 30 %. Ein Rahmenvertrag bringt planbare Auslastung.', 'Scope: steel covers and gratings, galvanised, call-offs over three years. Suitability: welding certificate, delivery within 10 working days. Award: price 70%, schedule 30%. A framework contract brings predictable utilisation.');
    if (x.id === 't3') return t('Umfang: Verkleidungen aus Edelstahl für 14 Haltestellen, Lieferung in zwei Etappen. Frist ist kurz. Passt technisch, aber die Kapazität im Dezember ist laut ARGUS knapp.', 'Scope: stainless steel cladding for 14 stops, delivery in two stages. The deadline is short. Technically a fit, but capacity in December is tight according to ARGUS.');
    return t('Umfang: Einbauten aus Edelstahl mit Montage vor Ort und Wartung über fünf Jahre. Montage und Wartung bieten Sie nicht an. KAIROS empfiehlt, nicht teilzunehmen.', 'Scope: stainless steel fittings with on-site installation and five years of maintenance. You do not offer installation and maintenance. KAIROS recommends not bidding.');
  }
  function vTenders() {
    var list = D.tenders.slice().sort(function (a, b) { return b.match - a.match; });
    var selId = ui.sel.tenders || list[0].id, x = D.tenders.filter(function (y) { return y.id === selId; })[0];
    var miss = x.id === 't1' ? [t('Referenzliste mit drei Objekten', 'Reference list with three projects'), t('Montagepartner mit Bestätigung', 'Installation partner with confirmation'), t('Betreibungsregisterauszug, nicht älter als 3 Monate', 'Debt collection register extract, not older than 3 months'), t('Preisblatt nach Vorlage', 'Price sheet as per template')]
      : [t('Selbstdeklaration des Anbieters', 'Bidder self-declaration'), t('Nachweis Schweisszertifikat', 'Proof of welding certificate'), t('Preisblatt nach Vorlage', 'Price sheet as per template')];
    return h('div', null,
      h('p', { class: 'a-sub', text: t('Öffentliche Aufträge sind gross und planbar. KAIROS liest jeden Tag die neuen Ausschreibungen, prüft die Passung und fasst die Unterlagen zusammen.', 'Public contracts are large and predictable. Every day KAIROS reads the new tenders, checks the fit and summarises the documents.') }),
      h('div', { class: 'k-split' },
        h('ul', { class: 'k-list' }, list.map(function (y) {
          var dl = Math.ceil((y.due - Date.now()) / DAY);
          return h('li', null, h('button', { type: 'button', 'aria-current': y.id === selId ? 'true' : null, onclick: function () { ui.sel.tenders = y.id; render(); focusDetail(); } }, scoreBadge(y.match),
            h('span', { class: 'k-li-b' }, h('b', { text: y.title }), h('small', { text: y.who + ' · ' + y.place }), h('small', { class: dl <= 7 ? 'neg' : 'a-sub', text: t('Frist in ', 'Deadline in ') + days(dl) })),
            h('span', { class: 'k-li-r' }, h('span', { class: 'a-badge ' + TST[y.status][1], text: TST[y.status][0] }))));
        })),
        h('div', { id: 'k-detail' }, h('div', { class: 'a-panel k-detail' },
          h('div', { class: 'k-dh' }, scoreBadge(x.match), h('div', null, h('h3', { text: x.title }), h('p', { class: 'a-sub', text: x.who + ' · ' + x.place + ' · ' + t('Eingabe bis ', 'Submission by ') + UP.fmtD(x.due) }))),
          h('dl', { class: 'k-dl' }, h('div', null, h('dt', { text: t('Volumen geschätzt', 'Estimated volume') }), h('dd', { text: x.vol })), h('div', null, h('dt', { text: t('Passung', 'Match') }), h('dd', { text: x.match + ' %' }))),
          aiLabel(t('Zusammenfassung der Unterlagen', 'Summary of the documents')), h('p', { class: 'k-why', text: tenderSum(x) }),
          x.status === 'prep' ? h('div', null, h('h4', { text: t('Checkliste für die Eingabe', 'Checklist for the submission') }), h('ul', { class: 'k-checks' }, miss.map(function (m, i) { return h('li', { class: i === 0 ? 'ok' : 'warn' }, h('i', { 'aria-hidden': 'true' }), h('span', { text: m }), h('b', { text: i === 0 ? t('aus ARGUS übernommen', 'taken from ARGUS') : t('offen', 'open') })); })),
            h('p', { class: 'k-note', text: t('Die Kalkulation für das Preisblatt rechnet ARGUS mit Ihren Ansätzen.', 'ARGUS calculates the price sheet with your rates.') }))
            : x.status === 'new' ? h('div', { class: 'k-acts' }, h('button', { type: 'button', class: 'a-btn p', onclick: function () { x.status = 'prep'; log('tender', t('Eingabe vorbereitet: ', 'Submission prepared: ') + x.title); save(); render(); }, text: t('Eingabe vorbereiten', 'Prepare submission') }), h('button', { type: 'button', class: 'a-btn', onclick: function () { x.status = 'skip'; log('tender', t('Nicht teilnehmen: ', 'Not bidding: ') + x.title); save(); render(); }, text: t('Nicht teilnehmen', 'Do not bid') }))
              : h('p', { class: 'a-sub', text: t('Sie nehmen an dieser Ausschreibung nicht teil.', 'You are not bidding for this tender.') })))),
      h('p', { class: 'k-note', text: t('In der echten Lösung liest KAIROS die Ausschreibungen auf simap.ch und weiteren Plattformen. Hier sind alle Ausschreibungen erfunden.', 'In the real solution KAIROS reads the tenders on simap.ch and other platforms. Here all tenders are made up.') }));
  }

  // ---------------------------------------------------------------- Kundenportal
  var OSTEPS = [t('Bestellt', 'Ordered'), t('Geplant', 'Planned'), t('Laser', 'Laser'), t('Abkanten', 'Bending'), t('Kontrolle', 'Inspection'), t('Versandbereit', 'Ready to ship'), t('Geliefert', 'Delivered')];
  function vPortal() {
    return h('div', { class: 'k-portal' },
      h('div', { class: 'k-site-bar', text: t('So sieht Ihr Kunde das Kundenportal.', 'This is how your customer sees the customer portal.') }),
      h('div', { class: 'k-dh k-ph' }, h('span', { class: 'a-avatar', text: 'MA' }), h('div', null, h('h3', { text: 'Muster Anlagenbau GmbH' }), h('p', { class: 'a-sub', text: t('Kundenportal von ', 'Customer portal of ') + FIRM }))),
      ui.reMsg ? h('p', { class: 'a-msg', role: 'status', text: ui.reMsg }) : null,
      D.orders.map(function (o) {
        var done = o.step >= OSTEPS.length - 1;
        return h('div', { class: 'a-panel' },
          h('div', { class: 'k-oh' }, h('div', null, h('b', { text: o.nr + ' · ' + o.text }), h('div', { class: 'a-sub', text: o.qty + t(' Stk. · ', ' pcs · ') + (done ? t('geliefert am ', 'delivered on ') : t('Liefertermin ', 'delivery date ')) + UP.fmtD(o.due) })),
            done ? h('button', { type: 'button', class: 'a-btn p', onclick: function () {
              var nr = 'AN-26-' + ('0000' + D.nr).slice(-4), id = 'p' + UP.uid(); D.nr++; D.reorders++;
              D.inbox.push({ id: id, nr: nr, src: 'portal', firm: 'Muster Anlagenbau GmbH', subj: t('Nachbestellung: ', 'Reorder: ') + o.text + ', ' + o.qty + t(' Stk.', ' pcs'), text: t('Nachbestellung über das Kundenportal, gleiche Ausführung wie ', 'Reorder via the customer portal, same design as ') + o.nr + '.', ts: Date.now(), part: { partName: t('Abdeckblech', 'Cover sheet'), mat: 'AlMg3', th: 2, qty: o.qty, total: 1890 }, status: 'new', resp: 0, line: 5 });
              log('portal', t('Nachbestellung ' + nr + ' über das Kundenportal: ', 'Reorder ' + nr + ' via the customer portal: ') + o.text);
              ui.reMsg = t('Nachbestellung ' + nr + ' ist eingegangen. Sie erhalten die Bestätigung in Kürze.', 'Reorder ' + nr + ' has arrived. You will receive the confirmation shortly.'); save(); render();
            }, text: t('Nachbestellen', 'Reorder') }) : h('span', { class: 'a-badge wait', text: OSTEPS[o.step] })),
          h('ol', { class: 'k-track', 'aria-label': t('Auftragsstatus', 'Order status') }, OSTEPS.map(function (s, i) { return h('li', { class: i < o.step || (done && i === o.step) ? 'done' : i === o.step ? 'cur' : null, 'aria-current': i === o.step && !done ? 'step' : null }, h('i', { 'aria-hidden': 'true' }), h('span', { text: s })); })),
          h('ul', { class: 'a-files' }, o.docs.map(function (d) { return h('li', null, h('span', { class: 'a-fico', text: 'PDF' }), h('div', null, h('div', { class: 'a-fname', text: d }), h('div', { class: 'a-fmeta', text: o.nr })), h('div', { class: 'a-factions' }, h('span', { class: 'a-badge grey', text: t('Beispiel', 'Sample') }))); })));
      }),
      h('p', { class: 'k-note', text: t('Der Status kommt direkt aus ARGUS. Ihr Kunde muss nicht mehr anrufen, um zu fragen, wo sein Auftrag steht.', 'The status comes straight from ARGUS. Your customer no longer has to call to ask where the order stands.') }));
  }

  // ---------------------------------------------------------------- Gerüst
  function render() {
    var nav = [['cockpit', 'Cockpit'], ['radar', t('Radar', 'Radar')], ['seo', 'SEO'], ['web', t('Website', 'Website')], ['inbox', t('Anfragen', 'Enquiries')], ['follow', t('Nachfassen', 'Follow-up')], ['tenders', t('Ausschreibungen', 'Tenders')], ['portal', t('Kundenportal', 'Portal')]];
    var urls = { cockpit: 'kairos.' + SITE + '/cockpit', radar: 'kairos.' + SITE + '/radar', seo: 'kairos.' + SITE + '/seo', web: SITE + '/sofortpreis', inbox: 'kairos.' + SITE + '/anfragen', follow: 'kairos.' + SITE + '/nachfassen', tenders: 'kairos.' + SITE + '/ausschreibungen', portal: 'portal.' + SITE };
    var titles = { cockpit: t('Die Kundenmaschine', 'The customer machine'), radar: t('Radar: neue Kunden finden', 'Radar: find new customers'), seo: t('Gefunden werden', 'Get found'), web: t('Website mit Sofortpreis', 'Website with instant price'), inbox: t('Anfragen', 'Enquiries'), follow: t('Nachfassen', 'Follow-up'), tenders: t('Öffentliche Ausschreibungen', 'Public tenders'), portal: t('Kundenportal', 'Customer portal') };
    var nNew = D.inbox.filter(function (x) { return x.status === 'new'; }).length;
    var view = ui.view === 'cockpit' ? vCockpit() : ui.view === 'radar' ? vRadar() : ui.view === 'seo' ? vSeo() : ui.view === 'web' ? vWeb() : ui.view === 'inbox' ? vInbox() : ui.view === 'follow' ? vFollow() : ui.view === 'tenders' ? vTenders() : vPortal();
    var main = h('main', { class: 'a-main k-main' },
      ui.toast ? h('div', { class: 'k-toast', role: 'status' }, h('span', { text: ui.toast.text }), h('button', { type: 'button', class: 'a-btn s p', onclick: function () { var x = ui.toast; go(x.view, x.sel); }, text: t('Ansehen', 'View') }), h('button', { type: 'button', class: 'a-x', 'aria-label': t('Schliessen', 'Close'), onclick: function () { ui.toast = null; render(); }, text: '×' })) : null,
      h('div', { class: 'g-head' }, h('div', null, h('h1', { text: titles[ui.view] }), h('p', { class: 'a-sub', text: t('Musterfirma Beispiel Metall AG · erfundene Firmen und Zahlen', 'Model company Beispiel Metall AG · made-up companies and figures') })),
        h('span', { class: 'a-badge ok k-live' }, h('i', { 'aria-hidden': 'true' }), t('läuft', 'running'))),
      view);
    var bg = h('div', { class: 'app-bg', 'aria-hidden': 'true' }); bg.appendChild(UP.traces('pcb'));
    var right = [nNew ? h('span', { class: 'k-badge-n', 'aria-label': nNew + t(' neue Anfragen', ' new enquiries'), text: String(nNew) }) : null, UP.themeButton(app, 'a-icon-btn')];
    UP.clear(app);
    app.appendChild(UP.chrome(urls[ui.view]));
    app.appendChild(h('div', { class: 'app-shell' }, bg, UP.topbar({ logo: 'K', brand: 'KAIROS', sub: 'Beispiel Metall AG', nav: nav, cur: ui.view, onNav: function (v) { go(v); }, right: right }), main));
    app.querySelectorAll('[data-w]').forEach(function (el) { el.style.width = el.getAttribute('data-w') + '%'; });
  }

  // Antworten auf Erstkontakte (in der Demo simuliert)
  window.setInterval(function () {
    var changed = false;
    D.leads.forEach(function (x) {
      if (x.stage === 'sent' && x.replyAt && Date.now() >= x.replyAt) {
        var l = L(x.id), nr = 'AN-26-' + ('0000' + D.nr).slice(-4), id = 'r' + x.id;
        D.nr++; x.stage = 'reply'; x.inq = id;
        D.inbox.push({ id: id, nr: nr, src: 'radar', firm: l.firm, subj: t('Antwort auf Erstkontakt: Bedarf vorhanden', 'Reply to first contact: there is demand'),
          text: t('Guten Tag, danke für Ihre Nachricht, sie kommt zur richtigen Zeit. Wir haben Bedarf: ' + l.need + '. Bitte senden Sie uns eine Offerte, die Zeichnungen folgen. Freundliche Grüsse, Einkauf ' + l.firm, 'Hello, thank you for your message, it comes at the right time. We have a need: ' + l.need + '. Please send us a quote, drawings to follow. Kind regards, purchasing ' + l.firm),
          ts: Date.now(), part: { partName: t('Teile nach Zeichnung', 'Parts to drawing'), mat: '1.4301', th: 2, qty: 200, total: 9800 }, status: 'new', resp: 0, line: 4 });
        log('radar', t('Antwort von ' + l.firm + ': Bedarf vorhanden, Anfrage ' + nr + ' erstellt', 'Reply from ' + l.firm + ': there is demand, enquiry ' + nr + ' created'));
        ui.toast = { text: t('Neue Antwort von ' + l.firm + ': Sie wollen eine Offerte.', 'New reply from ' + l.firm + ': they want a quote.'), view: 'inbox', sel: id };
        changed = true;
      }
    });
    if (!changed) return;
    save();
    var a = document.activeElement;
    if (ui.typing || (a && app.contains(a) && /INPUT|SELECT|TEXTAREA/.test(a.tagName))) return;
    render();
  }, 1000);

  // Bildschirmfoto und Direktlinks: ?view=radar&sel=l1
  var pv = UP.params.get('view');
  if (pv && ['cockpit', 'radar', 'seo', 'web', 'inbox', 'follow', 'tenders', 'portal'].indexOf(pv) >= 0) { ui.view = pv; if (UP.params.get('sel')) ui.sel[pv] = UP.params.get('sel'); }
  if (SHOT && UP.params.get('draft')) { ui.draft = genPage().slug; }
  render();
  UP.init(function () { st.reset(); try { window.localStorage.removeItem(ARGUS_KEY); } catch (e) { /* ignorieren */ } window.location.reload(); });
})();
