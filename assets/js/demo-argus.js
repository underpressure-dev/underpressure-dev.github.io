/* Live-Demo ARGUS: der digitale Mitarbeiter auf einem bestehenden ERP.
   Erfundene Musterfirma, simuliertes ERP, erfundene Zahlen. Alles läuft im Browser, nichts wird gesendet. */
(function () {
  'use strict';
  var UP = window.UP, h = UP.h, lang = UP.lang;
  function t(de, en) { return lang === 'de' ? de : en; }
  var app = document.getElementById('app');
  if (!app) return;
  var DAY = 86400000, MIN = 60000;
  var KAIROS_KEY = 'up-demo-kairos-inbox';
  var REDUCE = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SHOT = UP.params.has('shot');

  // Beispielansätze der Musterfirma (erfunden)
  var RATE = { matKg: { '1.4301': 6.4, S235: 1.6, AlMg3: 5.2 }, dens: { '1.4301': 7.9, S235: 7.85, AlMg3: 2.66 },
    laserMin: 2.4, bendMin: 1.8, deburrMin: 1.2, setupMin: 1.9, cutSpeed: 2.4, margin: 0.28, scrap: 0.2 };
  var PART = { nr: 'K-12', name: t('Konsole K-12', 'Bracket K-12'), mat: '1.4301', th: 3, l: 240, b: 120, holes: 4, bends: 2, qty: 120, weeks: 3 };
  var CUST = { nr: 'K-10233', name: 'Muster Anlagenbau GmbH', mail: 'einkauf@muster-anlagenbau.example', contact: 'R. Muster' };
  var VENDOR = 'Beispiel Stahlhandel AG';

  function calc(p) {
    var area = p.l * p.b / 1e6;
    var kg = area * (p.th / 1000) * RATE.dens[p.mat] * 1000;
    var mat = kg * (1 + RATE.scrap) * RATE.matKg[p.mat];
    var cutM = 2 * (p.l + p.b) / 1000 + p.holes * Math.PI * 0.009;
    var laser = cutM / RATE.cutSpeed * RATE.laserMin;
    var bend = p.bends * 0.4 * RATE.bendMin;
    var deburr = 0.5 * RATE.deburrMin;
    var setup = (15 + (p.bends ? 20 : 0)) * RATE.setupMin / p.qty;
    var cost = mat + laser + bend + deburr + setup;
    var unit = Math.round(cost * (1 + RATE.margin) * 20) / 20;
    return { kg: kg, mat: mat, laser: laser, bend: bend, deburr: deburr, setup: setup, cost: cost, unit: unit, total: unit * p.qty, cutM: cutM };
  }
  var C = calc(PART);

  var MODS = [
    ['eingang', t('Auftragseingang', 'Order intake'), t('Liest Anfragen und Bestellungen aus E-Mail und PDF und legt sie im ERP an.', 'Reads enquiries and orders from email and PDF and enters them in the ERP.')],
    ['offerte', t('Offerte und Kalkulation', 'Quote and calculation'), t('Rechnet nach Ihren Ansätzen, erstellt die Offerte, Ihr Team gibt frei.', 'Calculates with your rates, creates the quote, your team approves.')],
    ['avor', t('Arbeitsvorbereitung', 'Job preparation'), t('Arbeitsplan, Zeiten, Fertigungsauftrag und Laufkarte.', 'Work plan, times, production order and job card.')],
    ['einkauf', t('Einkauf und Material', 'Purchasing and material'), t('Reserviert Material, erkennt Bedarf und schlägt Bestellungen vor.', 'Reserves material, detects demand and proposes orders.')],
    ['werkstatt', t('Werkstatt-Tablet', 'Workshop tablet'), t('Auftrag, Schutzausrüstung und Zeiten an der Maschine, in der Sprache des Mitarbeiters.', 'Job, protective equipment and times at the machine, in the worker\'s language.')],
    ['cockpit', t('Chef-Cockpit', 'Management cockpit'), t('Auslastung, Trefferquote, Verzug und Nachkalkulation, immer aktuell.', 'Utilisation, hit rate, delays and post-calculation, always current.')],
    ['assistent', t('Assistent', 'Assistant'), t('Fragen in normaler Sprache an die Daten des Betriebs.', 'Questions in plain language to the company\'s data.')],
    ['plantafel', t('Plantafel', 'Planning board'), t('Feinplanung auf Maschinen und Personen, mit Prüfung von Reihenfolge, Material und Lieferterminen.', 'Detailed scheduling on machines and people, checking sequence, material and delivery dates.')],
    ['maschinen', t('Maschinen und OEE', 'Machines and OEE'), t('Live-Zustand, OEE, Stillstandsgründe und Wartung jeder Maschine.', 'Live state, OEE, downtime reasons and maintenance for every machine.')],
    ['personal', t('Personal und Einsatz', 'Staff and assignment'), t('Anwesenheit, Einsatz, Qualifikationen, Schichtplan, Ferien und Unterweisungen.', 'Attendance, assignment, skills, shift plan, holidays and safety instructions.')],
    ['lager', t('Lager und Versand', 'Stock and dispatch'), t('Bestand, Restbleche, Wareneingang mit Zeugnis und Versand mit Rechnung.', 'Stock, remnants, goods receipt with certificate and dispatch with invoice.')],
    ['qualitaet', t('Qualität', 'Quality'), t('Erstteilprüfung, Reklamationen nach 8D, Prüfmittel und Rückverfolgung.', 'First article inspection, 8D complaints, gauges and traceability.')]
  ];
  function modName(id) { return MODS.filter(function (m) { return m[0] === id; })[0][1]; }

  function seed() {
    var now = Date.now();
    return {
      mods: { eingang: true, offerte: true, avor: true, einkauf: true, werkstatt: true, cockpit: true, assistent: true, plantafel: true, maschinen: true, personal: true, lager: true, qualitaet: true },
      mode: 'api', paused: false, step: 0, manual: {}, taken: {}, fields: 0, saved: 0, done: {},
      seq: { va: 142, au: 388, fa: 1022, ek: 216 },
      erp: {
        quotes: [
          { nr: 'VA-26-0139', cust: 'Beispiel Maschinenbau AG', text: t('Halterung S235, 300 Stk.', 'Holder S235, 300 pcs'), amount: 8640, date: now - 9 * DAY, status: 'open' },
          { nr: 'VA-26-0140', cust: 'Demo Fördertechnik AG', text: t('Abdeckblech AlMg3, 60 Stk.', 'Cover sheet AlMg3, 60 pcs'), amount: 4210, date: now - 8 * DAY, status: 'open' },
          { nr: 'VA-26-0141', cust: 'Muster Bau AG', text: t('Geländerpfosten S235, 48 Stk.', 'Railing posts S235, 48 pcs'), amount: 6980, date: now - 4 * DAY, status: 'open' }
        ],
        orders: [
          { nr: 'AU-26-0385', cust: 'Muster Bau AG', text: t('Treppenwangen S235', 'Stair stringers S235'), amount: 12400, due: now + 5 * DAY, status: 'prod' },
          { nr: 'AU-26-0386', cust: 'Beispiel Maschinenbau AG', text: t('Gehäuseteile 1.4301', 'Housing parts 1.4301'), amount: 9350, due: now - 2 * DAY, status: 'prod' },
          { nr: 'AU-26-0387', cust: 'Demo Fördertechnik AG', text: t('Konsolen AlMg3', 'Brackets AlMg3'), amount: 3120, due: now + 12 * DAY, status: 'plan' }
        ],
        prod: [
          { nr: 'FA-26-1020', order: 'AU-26-0385', text: t('Laser, Abkanten, Schweissen', 'Laser, bending, welding'), status: 'run' },
          { nr: 'FA-26-1021', order: 'AU-26-0386', text: t('Laser, Abkanten', 'Laser, bending'), status: 'late' }
        ],
        purchase: [{ nr: 'EK-26-0215', vendor: VENDOR, text: t('Blech S235, 8 mm, 10 Tafeln', 'Sheet S235, 8 mm, 10 sheets'), status: 'ordered' }],
        items: [
          { nr: 'BL-14301-3', text: t('Blech 1.4301, 3 mm, 1500 × 3000', 'Sheet 1.4301, 3 mm, 1500 × 3000'), stock: 1, min: 3, res: 0, unit: t('Tafeln', 'sheets'), loc: 'A-01', price: 680, use: 0.6 },
          { nr: 'BL-S235-5', text: t('Blech S235, 5 mm, 1500 × 3000', 'Sheet S235, 5 mm, 1500 × 3000'), stock: 24, min: 10, res: 6, unit: t('Tafeln', 'sheets'), loc: 'A-04', price: 283, use: 2.1 },
          { nr: 'BL-S235-8', text: t('Blech S235, 8 mm, 1500 × 3000', 'Sheet S235, 8 mm, 1500 × 3000'), stock: 0, min: 4, res: 0, unit: t('Tafeln', 'sheets'), loc: 'A-05', price: 452, use: 0.8, ordered: 'EK-26-0215' },
          { nr: 'BL-ALMG3-2', text: t('Blech AlMg3, 2 mm, 1250 × 2500', 'Sheet AlMg3, 2 mm, 1250 × 2500'), stock: 14, min: 6, res: 2, unit: t('Tafeln', 'sheets'), loc: 'B-02', price: 86, use: 0.9 },
          { nr: 'RO-S235-40', text: t('Rohr 40 × 40 × 3 S235, 6 m', 'Tube 40 × 40 × 3 S235, 6 m'), stock: 38, min: 20, res: 12, unit: t('Stangen', 'bars'), loc: 'C-01', price: 38, use: 3 },
          { nr: 'NT-M8-A2', text: t('Sechskantschraube M8 × 20 A2', 'Hex bolt M8 × 20 A2'), stock: 850, min: 1000, res: 0, unit: t('Stk.', 'pcs'), loc: 'D-12', price: 0.18, use: 60 },
          { nr: 'PL-7016', text: t('Pulverlack RAL 7016 matt', 'Powder coating RAL 7016 matt'), stock: 42, min: 25, res: 8, unit: 'kg', loc: 'E-03', price: 14, use: 3.5 },
          { nr: 'SD-G3SI1-10', text: t('Schweissdraht G3Si1, 1.0 mm', 'Welding wire G3Si1, 1.0 mm'), stock: 4, min: 6, res: 0, unit: t('Spulen', 'reels'), loc: 'E-07', price: 46, use: 0.3 }
        ]
      },
      log: [
        { ts: now - 95 * MIN, text: t('Tagesbericht erstellt und an die Geschäftsleitung gesendet', 'Daily report created and sent to management'), way: 'api' },
        { ts: now - 70 * MIN, text: t('Offerte VA-26-0139 nachgefasst: Erinnerung an Beispiel Maschinenbau AG', 'Followed up quote VA-26-0139: reminder sent to Beispiel Maschinenbau AG'), way: 'api' },
        { ts: now - 40 * MIN, text: t('Auftrag AU-26-0386 ist im Verzug: Meldung an die Produktion', 'Order AU-26-0386 is late: alert sent to production'), way: 'read' }
      ],
      kpi: { hit: 38, laser: 72, bend: 64 },
      post: [
        { nr: 'AU-26-0379', text: t('Winkel S235', 'Angles S235'), soll: 14.5, ist: 13.8, db: 31 },
        { nr: 'AU-26-0381', text: t('Lochbleche 1.4301', 'Perforated sheets 1.4301'), soll: 22.0, ist: 26.5, db: 12 },
        { nr: 'AU-26-0383', text: t('Gehäusedeckel AlMg3', 'Housing covers AlMg3'), soll: 9.0, ist: 8.6, db: 29 }
      ],
      ops: window.ARGUS_OPS.seed(t)
    };
  }

  var st = UP.store('argus', seed, 2), D = st.data;
  if (!D.ops || Date.now() - D.ops.clock0 > 8 * 3600000) { D.ops = window.ARGUS_OPS.seed(t); st.save(); }
  var ui = { view: 'cockpit', erp: { flow: true, inbox: true }, busy: false, auto: false, sel: null, chat: [], tlang: 'pt', psa: {}, run: 0, doneShop: false, erpView: 'quotes', card: null, msg: '' };
  UP.initTheme(app); app.classList.add('t-argus');

  var STEPS = [
    { id: 'mail', mod: 'eingang', save: 2, title: t('E-Mail mit Zeichnung', 'Email with drawing'), what: t('Eine Anfrage kommt per E-Mail, mit Zeichnung als PDF.', 'An enquiry arrives by email, with the drawing as a PDF.') },
    { id: 'read', mod: 'eingang', save: 8, title: t('Lesen und verstehen', 'Read and understand'), what: t('ARGUS liest E-Mail und Zeichnung, findet den Kunden im ERP und prüft die Machbarkeit.', 'ARGUS reads the email and drawing, finds the customer in the ERP and checks feasibility.') },
    { id: 'calc', mod: 'offerte', save: 25, approve: true, title: t('Kalkulation', 'Calculation'), what: t('ARGUS rechnet nach den Ansätzen des Betriebs. Ihr Team gibt frei.', 'ARGUS calculates with the company\'s rates. Your team approves.') },
    { id: 'quote', mod: 'offerte', save: 6, title: t('Offerte im ERP', 'Quote in the ERP'), what: t('ARGUS legt das Verkaufsangebot im ERP an und sendet die Offerte.', 'ARGUS creates the sales quote in the ERP and sends it.') },
    { id: 'order', mod: 'eingang', save: 5, title: t('Bestellung', 'Order'), what: t('Der Kunde bestellt. ARGUS macht aus dem Angebot einen Auftrag.', 'The customer orders. ARGUS turns the quote into an order.') },
    { id: 'avor', mod: 'avor', save: 30, title: t('Arbeitsvorbereitung', 'Job preparation'), what: t('Arbeitsplan, Zeiten und Fertigungsauftrag, dazu die Laufkarte für die Werkstatt.', 'Work plan, times and production order, plus the job card for the workshop.') },
    { id: 'buy', mod: 'einkauf', save: 8, title: t('Material', 'Material'), what: t('ARGUS reserviert das Material und schlägt eine Bestellung vor.', 'ARGUS reserves the material and proposes an order.') },
    { id: 'shop', mod: 'werkstatt', save: 5, title: t('Werkstatt', 'Workshop'), what: t('Der Auftrag erscheint auf dem Tablet an der Maschine, in der Sprache des Mitarbeiters.', 'The job appears on the tablet at the machine, in the worker\'s language.') },
    { id: 'cockpit', mod: 'cockpit', save: 0, title: t('Cockpit', 'Cockpit'), what: t('Zahlen, Auslastung und Nachkalkulation sind sofort aktuell.', 'Figures, utilisation and post-calculation are up to date at once.') }
  ];

  // ---------------------------------------------------------------- Hilfen
  function log(text, way, ts) { D.log.push({ ts: ts || Date.now(), text: text, way: way }); if (D.log.length > 150) D.log.shift(); }
  function way() { return D.mode === 'ui' ? 'ui' : 'api'; }
  function nr(p, n) { return p + '-26-' + ('0000' + n).slice(-4); }
  function money(n) { return UP.chf(n); }
  function num(n, d) { return n.toFixed(d === undefined ? 2 : d); }
  var WAY = { api: t('Schnittstelle', 'Interface'), read: t('Lesen', 'Read'), ui: t('Bedienen', 'UI automation'), user: t('Freigabe', 'Approval'), manual: t('Manuell', 'Manual') };
  function wayBadge(w) { return h('span', { class: 'a-badge g-way-' + w, text: WAY[w] || w }); }
  function card(l, v, s, cls) { return h('div', { class: 'a-card ' + (cls || '') }, h('div', { class: 'l', text: l }), h('div', { class: 'v', text: v }), s ? h('div', { class: 's', text: s }) : null); }
  function dueTs() { return Date.now() + PART.weeks * 7 * DAY; }
  function kairosReqs() { try { var r = JSON.parse(window.localStorage.getItem(KAIROS_KEY) || '[]'); return Array.isArray(r) ? r : []; } catch (e) { return []; } }
  function lateOrders() { return D.erp.orders.filter(function (o) { return o.due < Date.now() && o.status !== 'done'; }); }
  function openQuotes() { return D.erp.quotes.filter(function (q) { return q.status === 'open'; }); }
  var QS = { open: t('Offen', 'Open'), won: t('Angenommen', 'Accepted') };
  var OS = { prod: t('In Fertigung', 'In production'), plan: t('Geplant', 'Planned'), done: t('Geliefert', 'Delivered') };
  var PS = { run: t('Läuft', 'Running'), late: t('Verzug', 'Late'), plan: t('Freigegeben', 'Released') };
  var ES = { ordered: t('Bestellt', 'Ordered'), draft: t('Entwurf', 'Draft'), received: t('Geliefert', 'Received') };

  // ---------------------------------------------------------------- ERP schreiben (mit Schreibanimation)
  function erpWrite(title, fields, view, instant, cb) {
    D.fields += fields.length; ui.erpView = view;
    if (instant) { ui.card = null; cb(); return; }
    ui.card = { title: title, fields: fields };
    render();
    var inputs = app.querySelectorAll('.g-card [data-f]');
    if (REDUCE || !inputs.length) {
      Array.prototype.forEach.call(inputs, function (el, i) { el.value = fields[i][1]; });
      window.setTimeout(function () { ui.card = null; cb(); }, 350);
      return;
    }
    var fi = 0, ci = 0;
    (function tick() {
      if (fi >= fields.length) { window.setTimeout(function () { ui.card = null; cb(); }, 450); return; }
      var el = inputs[fi], val = String(fields[fi][1]);
      el.parentNode.classList.add('g-active');
      ci++; el.value = val.slice(0, ci);
      if (ci >= val.length) { el.parentNode.classList.remove('g-active'); el.parentNode.classList.add('g-filled'); fi++; ci = 0; window.setTimeout(tick, 110); }
      else window.setTimeout(tick, 14);
    })();
  }

  // ---------------------------------------------------------------- Schritte
  function effect(s, done, instant) {
    var w = way();
    if (s.id === 'mail') {
      D.done.mail = true;
      log(t('Neue E-Mail von ', 'New email from ') + CUST.name + ': ' + t('Anfrage ', 'enquiry ') + PART.name + ', ' + t('Zeichnung Konsole_K12.pdf', 'drawing Konsole_K12.pdf'), 'read');
      done();
    } else if (s.id === 'read') {
      D.done.read = true;
      log(t('Zeichnung gelesen: ', 'Drawing read: ') + PART.mat + ', ' + PART.th + ' mm, ' + PART.l + ' × ' + PART.b + ' mm, ' + PART.bends + t(' Abkantungen, ', ' bends, ') + PART.qty + t(' Stk.', ' pcs'), 'read');
      log(t('Kunde im ERP gefunden: ', 'Customer found in the ERP: ') + CUST.nr + ' ' + CUST.name, w);
      done();
    } else if (s.id === 'calc') {
      D.done.calc = true;
      log(t('Kalkulation freigegeben', 'Calculation approved') + (ui.auto ? t(' (Demo: automatisch)', ' (demo: automatic)') : ''), 'user');
      done();
    } else if (s.id === 'quote') {
      var q = nr('VA', D.seq.va);
      erpWrite(t('Verkaufsangebot ', 'Sales quote ') + q, [
        [t('Nr.', 'No.'), q], [t('Kundennr.', 'Customer no.'), CUST.nr], [t('Kunde', 'Customer'), CUST.name],
        [t('Artikel', 'Item'), PART.name + ', ' + PART.mat + ', ' + PART.th + ' mm'], [t('Menge', 'Quantity'), String(PART.qty)],
        [t('Preis/Stk.', 'Unit price'), num(C.unit)], [t('Betrag', 'Amount'), num(C.total)], [t('Gültig bis', 'Valid until'), UP.fmtD(Date.now() + 30 * DAY)]
      ], 'quotes', instant, function () {
        D.erp.quotes.push({ nr: q, cust: CUST.name, text: PART.name + ', ' + PART.qty + t(' Stk.', ' pcs'), amount: C.total, date: Date.now(), status: 'open', fresh: true });
        D.seq.va++; D.done.quote = q;
        log(t('Verkaufsangebot ', 'Sales quote ') + q + t(' im ERP angelegt', ' created in the ERP'), w);
        log(t('Offerte als PDF gesendet an ', 'Quote sent as PDF to ') + CUST.mail + t('. Nachfassen geplant in 3 Tagen', '. Follow-up scheduled in 3 days'), 'api');
        done();
      });
    } else if (s.id === 'order') {
      var a = nr('AU', D.seq.au), qn = D.done.quote || nr('VA', D.seq.va - 1);
      log(t('Bestellung per E-Mail von ', 'Order by email from ') + CUST.name + t(' zu ', ' for ') + qn, 'read');
      erpWrite(t('Verkaufsauftrag ', 'Sales order ') + a, [
        [t('Nr.', 'No.'), a], [t('Aus Angebot', 'From quote'), qn], [t('Kunde', 'Customer'), CUST.name],
        [t('Menge', 'Quantity'), String(PART.qty)], [t('Betrag', 'Amount'), num(C.total)], [t('Liefertermin', 'Delivery date'), UP.fmtD(dueTs())]
      ], 'orders', instant, function () {
        D.erp.quotes.forEach(function (x) { if (x.nr === qn) { x.status = 'won'; x.fresh = false; } });
        D.erp.orders.push({ nr: a, cust: CUST.name, text: PART.name, amount: C.total, due: dueTs(), status: 'plan', fresh: true });
        D.seq.au++; D.done.order = a; D.kpi.hit = 41;
        log(t('Angebot ', 'Quote ') + qn + t(' in Auftrag ', ' converted to order ') + a + t(' umgewandelt, Auftragsbestätigung gesendet', ', order confirmation sent'), w);
        done();
      });
    } else if (s.id === 'avor') {
      var f = nr('FA', D.seq.fa), on = D.done.order || nr('AU', D.seq.au - 1);
      erpWrite(t('Fertigungsauftrag ', 'Production order ') + f, [
        [t('Nr.', 'No.'), f], [t('Auftrag', 'Order'), on], [t('Artikel', 'Item'), PART.name],
        [t('Menge', 'Quantity'), String(PART.qty)], [t('Arbeitsplan', 'Work plan'), t('Laser, Entgraten, Abkanten, Kontrolle', 'Laser, deburring, bending, inspection')],
        [t('Start', 'Start'), UP.fmtD(Date.now() + 2 * DAY)]
      ], 'prod', instant, function () {
        D.erp.prod.push({ nr: f, order: on, text: t('Laser, Entgraten, Abkanten, Kontrolle', 'Laser, deburring, bending, inspection'), status: 'plan', fresh: true });
        D.erp.orders.forEach(function (o) { if (o.nr === on) o.status = 'prod'; });
        D.seq.fa++; D.done.avor = f; D.kpi.laser = 81; D.kpi.bend = 70;
        log(t('Fertigungsauftrag ', 'Production order ') + f + t(' mit Arbeitsplan angelegt, Laufkarte erstellt', ' created with work plan, job card generated'), w);
        log(t('Schneidprogramm an Laser 1 übergeben (simuliert)', 'Cutting program handed to laser 1 (simulated)'), 'api');
        done();
      });
    } else if (s.id === 'buy') {
      var e = nr('EK', D.seq.ek), it = D.erp.items[0];
      it.res += 1;
      log(t('Material reserviert: 1 Tafel ', 'Material reserved: 1 sheet ') + it.nr + t('. Bestand danach unter Mindestbestand', '. Stock then below minimum'), w);
      erpWrite(t('Einkaufsbestellung ', 'Purchase order ') + e, [
        [t('Nr.', 'No.'), e], [t('Lieferant', 'Vendor'), VENDOR], [t('Artikel', 'Item'), it.nr],
        [t('Menge', 'Quantity'), t('5 Tafeln', '5 sheets')], [t('Status', 'Status'), t('Entwurf', 'Draft')]
      ], 'purchase', instant, function () {
        D.erp.purchase.push({ nr: e, vendor: VENDOR, text: it.text + t(', 5 Tafeln', ', 5 sheets'), status: 'draft', fresh: true });
        D.seq.ek++; D.done.buy = e; it.ordered = e;
        log(t('Bestellvorschlag ', 'Purchase proposal ') + e + t(' im ERP, wartet auf Freigabe durch den Einkauf', ' in the ERP, awaiting approval by purchasing'), w);
        done();
      });
    } else if (s.id === 'shop') {
      D.done.shop = true;
      log(t('Auftrag ', 'Job ') + (D.done.avor || '') + t(' an Werkstatt-Tablet Laser 1 gesendet, Sprache Portugiesisch', ' sent to workshop tablet laser 1, language Portuguese'), 'api');
      done();
    } else if (s.id === 'cockpit') {
      D.done.cockpit = true;
      log(t('Cockpit aktualisiert: Auslastung, Trefferquote, offene Offerten', 'Cockpit updated: utilisation, hit rate, open quotes'), 'read');
      done();
    }
  }

  function next() {
    if (ui.busy || D.paused || D.step >= STEPS.length) return;
    var s = STEPS[D.step];
    ui.sel = null;
    if (!D.mods[s.mod]) {
      D.manual[s.id] = true;
      log(t('Modul aus: «', 'Module off: «') + s.title + t('» erledigt Ihr Team wie bisher im ERP', '» is done by your team in the ERP as before'), 'manual');
      D.step++; st.save(); render(); autoNext(); return;
    }
    ui.busy = true; render();
    effect(s, function () { ui.busy = false; D.saved += s.save; D.step++; st.save(); render(); autoNext(); }, false);
  }
  function autoNext() {
    if (D.step >= STEPS.length) { ui.auto = false; return; }
    if (ui.auto && !D.paused) window.setTimeout(next, REDUCE ? 60 : 900);
  }
  function fastForward(n) {
    for (var i = 0; i < n && D.step < STEPS.length; i++) {
      var s = STEPS[D.step];
      if (!D.mods[s.mod]) { D.manual[s.id] = true; D.step++; continue; }
      effect(s, function () {}, true);
      ui.card = null; D.saved += s.save; D.step++;
    }
  }
  function restart() { var mods = D.mods, mode = D.mode; st.reset(); st = UP.store('argus', seed, 2); D = st.data; D.mods = mods; D.mode = mode; st.save(); ui.sel = null; ui.auto = false; ui.run = 0; ui.psa = {}; render(); }

  // ---------------------------------------------------------------- Zeichnung des Teils
  var SVGNS = 'http://www.w3.org/2000/svg';
  function svgEl(tag, a, parent) { var x = document.createElementNS(SVGNS, tag); Object.keys(a).forEach(function (k) { x.setAttribute(k, a[k]); }); if (parent) parent.appendChild(x); return x; }
  // Bemassung: Masshilfslinien mit Abstand zur Kante, Masslinien mit geschlossenen Pfeilen, Masszahl über der Masslinie
  function dims(s, x0, y0, w, hh, lw, lb, pre) {
    var y = y0 - 16, x = x0 + w + 16, a = 5, b = 1.6;
    svgEl('path', { d: 'M' + x0 + ' ' + (y0 - 2) + 'V' + (y - 3) + 'M' + (x0 + w) + ' ' + (y0 - 2) + 'V' + (y - 3) + 'M' + (x0 + w + 2) + ' ' + y0 + 'H' + (x + 3) + 'M' + (x0 + w + 2) + ' ' + (y0 + hh) + 'H' + (x + 3) +
      'M' + x0 + ' ' + y + 'H' + (x0 + w) + 'M' + x + ' ' + y0 + 'V' + (y0 + hh), class: pre + '-dim' }, s);
    svgEl('path', { d: 'M' + x0 + ' ' + y + 'l' + a + ' ' + (-b) + 'v' + (2 * b) + 'z' + 'M' + (x0 + w) + ' ' + y + 'l' + (-a) + ' ' + (-b) + 'v' + (2 * b) + 'z' +
      'M' + x + ' ' + y0 + 'l' + (-b) + ' ' + a + 'h' + (2 * b) + 'z' + 'M' + x + ' ' + (y0 + hh) + 'l' + (-b) + ' ' + (-a) + 'h' + (2 * b) + 'z', class: pre + '-arr' }, s);
    var tw = svgEl('text', { x: x0 + w / 2, y: y - 3, 'text-anchor': 'middle', class: pre + '-txt' }, s); tw.textContent = lw;
    var tb = svgEl('text', { x: x - 3, y: y0 + hh / 2, 'text-anchor': 'middle', class: pre + '-txt', transform: 'rotate(-90 ' + (x - 3) + ' ' + (y0 + hh / 2) + ')' }, s); tb.textContent = lb;
  }
  function drawing() {
    var s = svgEl('svg', { viewBox: '0 0 320 196', class: 'g-draw', role: 'img', 'aria-label': t('Zeichnung Konsole K-12, Abwicklung 240 × 120 mm mit zwei Biegelinien und vier Bohrungen Ø 9', 'Drawing bracket K-12, flat pattern 240 × 120 mm with two bend lines and four holes Ø 9') });
    svgEl('rect', { x: 30, y: 40, width: 240, height: 120, class: 'g-d-part' }, s);
    svgEl('path', { d: 'M110 40V160M190 40V160', class: 'g-d-bend' }, s);
    [[55, 70], [55, 130], [245, 70], [245, 130]].forEach(function (p) {
      svgEl('circle', { cx: p[0], cy: p[1], r: 4.5, class: 'g-d-part' }, s);
      svgEl('path', { d: 'M' + (p[0] - 8) + ' ' + p[1] + 'H' + (p[0] + 8) + 'M' + p[0] + ' ' + (p[1] - 8) + 'V' + (p[1] + 8), class: 'g-d-ctr' }, s);
    });
    dims(s, 30, 40, 240, 120, '240', '120', 'g-d');
    var c = svgEl('text', { x: 150, y: 184, 'text-anchor': 'middle', class: 'g-d-txt' }, s); c.textContent = '1.4301 · t = 3 · 4× Ø9 · ' + t('2 Biegungen 90°', '2 bends 90°');
    return s;
  }

  // ---------------------------------------------------------------- Ansichten: Ablauf
  function stepState(i) {
    var s = STEPS[i];
    if (i < D.step) return D.manual[s.id] ? 'manual' : 'done';
    if (i === D.step) return D.mods[s.mod] ? 'cur' : 'off';
    return D.mods[s.mod] ? 'todo' : 'off';
  }
  function vSteps() {
    return h('ol', { class: 'g-steps' }, STEPS.map(function (s, i) {
      var stt = stepState(i);
      var lbl = { done: t('erledigt', 'done'), manual: t('manuell', 'manual'), cur: t('als Nächstes', 'next'), off: t('Modul aus', 'module off'), todo: '' }[stt];
      return h('li', { class: 'g-step g-' + stt + (ui.sel === i ? ' g-sel' : '') },
        h('button', { type: 'button', disabled: i >= D.step, onclick: function () { ui.sel = i; render(); } },
          h('span', { class: 'g-dot', 'aria-hidden': 'true', text: stt === 'done' ? '✓' : String(i + 1) }),
          h('span', { class: 'g-st' }, h('b', { text: s.title }), lbl ? h('small', { text: lbl }) : null)));
    }));
  }
  function result(i) {
    var s = STEPS[i];
    if (D.manual[s.id]) return h('div', { class: 'a-empty', text: t('Dieses Modul ist ausgeschaltet. Ihr Team hat den Schritt wie bisher direkt im ERP erledigt.', 'This module is switched off. Your team did this step directly in the ERP as before.') });
    if (s.id === 'mail') return h('div', { class: 'g-mail' },
      h('div', { class: 'g-mail-h' }, h('div', null, h('b', { text: CUST.contact + ', ' + CUST.name }), h('div', { class: 'a-sub', text: CUST.mail })), h('span', { class: 'a-badge info', text: t('Neu', 'New') })),
      h('p', null, h('b', { text: t('Betreff: Anfrage Konsole K-12, 120 Stück', 'Subject: enquiry bracket K-12, 120 pieces') })),
      h('p', { text: t('Guten Tag, bitte offerieren Sie uns 120 Stück gemäss beiliegender Zeichnung, Edelstahl 1.4301, 3 mm. Liefertermin in drei Wochen. Freundliche Grüsse, R. Muster', 'Hello, please quote 120 pieces according to the enclosed drawing, stainless steel 1.4301, 3 mm. Delivery in three weeks. Kind regards, R. Muster') }),
      h('div', { class: 'g-att' }, h('span', { class: 'a-fico', text: 'PDF' }), h('span', null, 'Konsole_K12.pdf', h('br'), h('small', { class: 'a-sub', text: t('Zeichnung, 1 Seite', 'drawing, 1 page') }))),
      drawing());
    if (s.id === 'read') {
      var rows = [[t('Kunde', 'Customer'), CUST.name + ' (' + CUST.nr + ')', t('ERP', 'ERP')], [t('Teil', 'Part'), PART.name, t('Zeichnung', 'Drawing')], [t('Material', 'Material'), PART.mat, t('Zeichnung', 'Drawing')],
        [t('Dicke', 'Thickness'), PART.th + ' mm', t('Zeichnung', 'Drawing')], [t('Abmessungen', 'Dimensions'), PART.l + ' × ' + PART.b + ' mm', t('Zeichnung', 'Drawing')], [t('Abkantungen', 'Bends'), String(PART.bends), t('Zeichnung', 'Drawing')],
        [t('Menge', 'Quantity'), PART.qty + t(' Stk.', ' pcs'), t('E-Mail', 'Email')], [t('Wunschtermin', 'Requested date'), UP.fmtD(dueTs()), t('E-Mail', 'Email')]];
      return h('div', null,
        h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, h('th', { text: t('Feld', 'Field') }), h('th', { text: t('Erkannt', 'Recognised') }), h('th', { text: t('Quelle', 'Source') }))),
          h('tbody', null, rows.map(function (r) { return h('tr', null, h('td', { text: r[0] }), h('td', null, h('b', { text: r[1] })), h('td', { class: 'a-sub', text: r[2] })); })))),
        h('ul', { class: 'g-checks' }, [t('Kontur geschlossen, Teil schneidbar', 'Contour closed, part can be cut'), t('Biegungen auf der Abkantpresse machbar', 'Bends feasible on the press brake'), t('Kunde bekannt, Zahlungen pünktlich', 'Customer known, payments on time')].map(function (x) { return h('li', { text: x }); })));
    }
    if (s.id === 'calc') return vCalc(false);
    if (s.id === 'quote') return h('div', null, h('div', { class: 'a-row' }, card(t('Verkaufsangebot', 'Sales quote'), D.done.quote || '', t('im ERP angelegt', 'created in the ERP')), card(t('Betrag', 'Amount'), money(C.total), PART.qty + ' × ' + money(C.unit))),
      h('p', { class: 'g-note', text: t('Die Offerte ging als PDF an den Kunden. ARGUS fasst nach, wenn in 3 Tagen keine Antwort kommt.', 'The quote went to the customer as a PDF. ARGUS follows up if there is no answer within 3 days.') }));
    if (s.id === 'order') return h('div', null, h('div', { class: 'a-row' }, card(t('Auftrag', 'Order'), D.done.order || '', t('aus ', 'from ') + (D.done.quote || '')), card(t('Liefertermin', 'Delivery date'), UP.fmtD(dueTs()), t('Bestätigung gesendet', 'confirmation sent'))),
      h('p', { class: 'g-note', text: t('Niemand musste die Bestellung abtippen. Angebot und Auftrag sind im ERP verknüpft.', 'Nobody had to retype the order. Quote and order are linked in the ERP.') }));
    if (s.id === 'avor') {
      var ops = [['10', t('Laser schneiden', 'Laser cutting'), 'Laser 1', 15, C.laser / RATE.laserMin * 1.0], ['20', t('Entgraten', 'Deburring'), t('Entgratstation', 'Deburring station'), 0, 0.5], ['30', t('Abkanten', 'Bending'), t('Abkantpresse', 'Press brake'), 20, PART.bends * 0.4], ['40', t('Kontrolle', 'Inspection'), t('Qualität', 'Quality'), 5, 0.1]];
      var tot = 0;
      return h('div', null, h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, [t('Pos.', 'Pos.'), t('Arbeitsgang', 'Operation'), t('Arbeitsplatz', 'Work centre'), t('Rüsten min', 'Setup min'), t('min/Stk.', 'min/pc'), t('Total h', 'Total h')].map(function (x, i) { return h('th', { class: i > 2 ? 'r' : null, text: x }); }))),
        h('tbody', null, ops.map(function (o) { var hours = (o[3] + o[4] * PART.qty) / 60; tot += hours; return h('tr', null, h('td', { text: o[0] }), h('td', { text: o[1] }), h('td', { text: o[2] }), h('td', { class: 'r', text: String(o[3]) }), h('td', { class: 'r', text: num(o[4]) }), h('td', { class: 'r', text: num(hours, 1) })); }),
          h('tr', { class: 'g-tot' }, h('td', { colspan: '5', text: t('Total', 'Total') }), h('td', { class: 'r', text: num(tot, 1) + ' h' }))))),
        h('div', { class: 'g-chips' }, h('span', { class: 'a-tag', text: t('Laufkarte mit QR-Code', 'Job card with QR code') }), h('span', { class: 'a-tag', text: t('Schneidprogramm an Laser 1', 'Cutting program to laser 1') }), h('span', { class: 'a-tag', text: D.done.avor || '' })));
    }
    if (s.id === 'buy') {
      var it = D.erp.items[0], ek = D.erp.purchase.filter(function (p) { return p.nr === D.done.buy; })[0];
      return h('div', null, h('div', { class: 'a-row' }, card(t('Bedarf', 'Demand'), t('1 Tafel', '1 sheet'), it.nr), card(t('Bestand frei', 'Free stock'), String(it.stock - it.res), t('Mindestbestand ', 'minimum ') + it.min, 'warn'), card(t('Vorschlag', 'Proposal'), t('5 Tafeln', '5 sheets'), VENDOR)),
        ek && ek.status === 'draft' ? h('div', { class: 'g-approve' }, h('span', { text: t('Bestellung ', 'Order ') + ek.nr + t(' wartet auf Ihre Freigabe.', ' is waiting for your approval.') }),
          h('button', { type: 'button', class: 'a-btn p s', onclick: function () { ek.status = 'ordered'; ek.fresh = false; log(t('Bestellung ', 'Order ') + ek.nr + t(' freigegeben und an ', ' approved and sent to ') + VENDOR + t(' gesendet', ''), 'user'); st.save(); render(); }, text: t('Freigeben', 'Approve') }))
          : h('p', { class: 'g-note', text: t('Bestellung freigegeben und an den Lieferanten gesendet.', 'Order approved and sent to the vendor.') }));
    }
    if (s.id === 'shop') return h('div', null, h('p', { class: 'g-note', text: t('João an Laser 1 sieht den Auftrag auf seinem Tablet, auf Portugiesisch, mit Bildern statt viel Text. Starten kann er erst, wenn die Schutzausrüstung bestätigt ist.', 'João at laser 1 sees the job on his tablet, in Portuguese, with pictures instead of lots of text. He can only start once the protective equipment is confirmed.') }),
      h('button', { type: 'button', class: 'a-btn p', onclick: function () { go('shop'); }, text: t('Werkstatt-Tablet ansehen', 'Open workshop tablet') }));
    if (s.id === 'cockpit') return vSummary();
    return null;
  }
  function vCalc(pending) {
    var rows = [[t('Material inkl. Verschnitt', 'Material incl. scrap'), C.mat, num(C.kg * (1 + RATE.scrap)) + ' kg × ' + num(RATE.matKg[PART.mat]) + ' CHF/kg'],
      [t('Laser', 'Laser'), C.laser, num(C.cutM) + ' m ' + t('Schnitt', 'cut')], [t('Abkanten', 'Bending'), C.bend, PART.bends + t(' Biegungen', ' bends')], [t('Entgraten', 'Deburring'), C.deburr, ''],
      [t('Rüsten anteilig', 'Setup share'), C.setup, t('35 min auf ', '35 min over ') + PART.qty + t(' Stk.', ' pcs')]];
    return h('div', null,
      h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, h('th', { text: t('Position pro Stück', 'Item per piece') }), h('th', { class: 'g-basis', text: t('Grundlage', 'Basis') }), h('th', { class: 'r', text: 'CHF' }))),
        h('tbody', null, rows.map(function (r) { return h('tr', null, h('td', { text: r[0] }), h('td', { class: 'a-sub g-basis', text: r[2] }), h('td', { class: 'r', text: num(r[1]) })); }),
          h('tr', null, h('td', { text: t('Selbstkosten', 'Cost') }), h('td', { class: 'g-basis' }), h('td', { class: 'r', text: num(C.cost) })),
          h('tr', null, h('td', { text: t('Marge', 'Margin') }), h('td', { class: 'a-sub g-basis', text: Math.round(RATE.margin * 100) + ' %' }), h('td', { class: 'r', text: num(C.unit - C.cost) })),
          h('tr', { class: 'g-tot' }, h('td', { text: t('Preis pro Stück', 'Price per piece') }), h('td', { class: 'g-basis' }), h('td', { class: 'r', text: num(C.unit) })),
          h('tr', { class: 'g-tot' }, h('td', { text: t('Total ', 'Total ') + PART.qty + t(' Stk.', ' pcs') }), h('td', { class: 'g-basis' }), h('td', { class: 'r', text: num(C.total) }))))),
      h('p', { class: 'g-note', text: t('Ansätze und Preise sind Beispielwerte der Musterfirma. In Ihrem Betrieb rechnet ARGUS mit Ihren Ansätzen.', 'Rates and prices are sample values of the model company. In your business ARGUS calculates with your rates.') }),
      pending ? h('div', { class: 'g-approve' }, h('span', { text: t('Kalkulation prüfen und freigeben. Erst dann geht die Offerte raus.', 'Check and approve the calculation. Only then does the quote go out.') }),
        h('button', { type: 'button', class: 'a-btn p', disabled: ui.busy || D.paused, onclick: next, text: t('Freigeben', 'Approve') })) : null);
  }
  function vSummary() {
    var did = STEPS.filter(function (s) { return !D.manual[s.id]; }).length, man = STEPS.length - did;
    return h('div', null,
      h('div', { class: 'a-row' }, card(t('Schritte durch ARGUS', 'Steps by ARGUS'), did + ' / ' + STEPS.length, man ? man + t(' manuell', ' manual') : t('alles automatisch', 'all automatic')),
        card(t('Felder im ERP ausgefüllt', 'ERP fields filled in'), String(D.fields), t('ohne Abtippen', 'without retyping')),
        card(t('Zeit gespart', 'Time saved'), UP.hm(D.saved) + ' h', t('Beispielwerte', 'sample values'), 'amber')),
      h('p', { class: 'g-note', text: t('Von der E-Mail bis zum Tablet an der Maschine, ohne dass jemand eine Zahl abtippen musste. Ihr Team hat nur geprüft und freigegeben.', 'From the email to the tablet at the machine, without anyone retyping a single figure. Your team only checked and approved.') }),
      h('button', { type: 'button', class: 'a-btn', onclick: function () { go('cockpit'); }, text: t('Zum Cockpit', 'Open cockpit') }));
  }
  function vFlow() {
    var finished = D.step >= STEPS.length;
    var cur = STEPS[D.step];
    var showIdx = ui.sel !== null ? ui.sel : (D.step > 0 ? D.step - 1 : null);
    var detail;
    if (ui.sel === null && cur && cur.approve && D.mods[cur.mod] && !ui.busy) detail = h('div', null, h('h3', { class: 'g-dh', text: t('Vorschlag: Kalkulation', 'Proposal: calculation') }), vCalc(true));
    else if (showIdx !== null) detail = h('div', null, h('h3', { class: 'g-dh', text: (showIdx + 1) + '. ' + STEPS[showIdx].title }), result(showIdx));
    else detail = h('div', { class: 'g-intro' },
      h('h3', { text: t('So arbeitet ARGUS', 'How ARGUS works') }),
      h('p', { text: t('Verfolgen Sie eine echte Anfrage durch den Betrieb der Beispiel Metall AG. ARGUS liest, rechnet, trägt ins ERP ein und schickt den Auftrag in die Werkstatt. Ihr Team prüft und gibt frei.', 'Follow a real enquiry through Beispiel Metall AG. ARGUS reads, calculates, enters it into the ERP and sends the job to the workshop. Your team checks and approves.') }),
      h('p', { class: 'a-sub', text: t('Rechts sehen Sie das ERP, wie es heute ist. Beobachten Sie, wie ARGUS es bedient.', 'On the right you see the ERP as it is today. Watch how ARGUS operates it.') }));
    var ctrl = h('div', { class: 'g-ctrl' },
      finished ? h('button', { type: 'button', class: 'a-btn p', onclick: restart, text: t('Neu starten', 'Start again') })
        : cur && cur.approve && D.mods[cur.mod] ? (ui.sel === null ? null : h('button', { type: 'button', class: 'a-btn p', onclick: function () { ui.sel = null; render(); }, text: t('Zur Freigabe', 'Go to approval') }))
          : h('button', { type: 'button', class: 'a-btn p', disabled: ui.busy || D.paused, onclick: next, text: ui.busy ? t('ARGUS arbeitet …', 'ARGUS is working …') : (D.step === 0 ? t('Anfrage starten', 'Start enquiry') : t('Nächster Schritt: ', 'Next step: ') + cur.title) }),
      !finished ? h('button', { type: 'button', class: 'a-btn', disabled: ui.busy || D.paused || ui.auto, onclick: function () { ui.auto = true; next(); }, text: t('Alles abspielen', 'Play all') }) : null,
      D.step > 0 && !finished ? h('button', { type: 'button', class: 'a-btn s', disabled: ui.busy, onclick: restart, text: t('Von vorne', 'Restart') }) : null);
    return h('div', { class: 'g-flow' }, h('div', { class: 'g-flow-l' }, vSteps()), h('div', { class: 'g-flow-r' }, ctrl, h('div', { class: 'a-panel g-detail' }, detail)));
  }

  // ---------------------------------------------------------------- Cockpit
  function vCockpit() {
    var late = lateOrders(), oq = openQuotes(), oqSum = oq.reduce(function (a, q) { return a + q.amount; }, 0);
    var top = h('div', null, D.step === 0 ? h('div', { class: 'g-start' }, h('div', null, h('b', { text: t('Erleben Sie ARGUS bei der Arbeit', 'See ARGUS at work') }), h('p', { text: t('Verfolgen Sie eine Anfrage von der E-Mail bis zur Maschine, Schritt für Schritt.', 'Follow an enquiry from the email to the machine, step by step.') })), h('button', { type: 'button', class: 'a-btn p', onclick: function () { go('flow'); }, text: t('Auftragsablauf starten', 'Start the order process') })) : null, OPS.cockpitTop(), h('h2', { class: 'a-h2', text: t('Verkauf und Zahlen', 'Sales and figures') }));
    var weeks = [[t('Diese Woche', 'This week'), D.kpi.laser, D.kpi.bend], [t('Nächste Woche', 'Next week'), 64, 58], [t('In 2 Wochen', 'In 2 weeks'), 48, 41], [t('In 3 Wochen', 'In 3 weeks'), 30, 22]];
    function bar(v, cls) { return h('div', { class: 'g-bar' }, h('div', { class: 'g-track' }, h('span', { class: cls, 'data-w': String(v) })), h('b', { text: v + ' %' })); }
    return h('div', null, top,
      h('div', { class: 'a-row' }, card(t('Offene Offerten', 'Open quotes'), String(oq.length), money(oqSum)), card(t('Trefferquote', 'Hit rate'), D.kpi.hit + ' %', t('letzte 90 Tage', 'last 90 days')),
        card(t('Auslastung Laser', 'Laser utilisation'), D.kpi.laser + ' %', t('diese Woche', 'this week')), card(t('Aufträge im Verzug', 'Late orders'), String(late.length), late.length ? late.map(function (o) { return o.nr; }).join(', ') : t('keine', 'none'), late.length ? 'warn' : ''),
        card(t('Zeit gespart heute', 'Time saved today'), UP.hm(D.saved + 45) + ' h', t('Beispielwerte', 'sample values'), 'amber')),
      h('div', { class: 'a-grid2' },
        h('div', { class: 'a-panel' }, h('h3', { text: t('Auslastung nach Woche', 'Utilisation by week') }),
          h('table', { class: 'g-cap' }, h('thead', null, h('tr', null, h('th', { text: t('Woche', 'Week') }), h('th', { text: t('Laser', 'Laser') }), h('th', { text: t('Abkanten', 'Bending') }))),
            h('tbody', null, weeks.map(function (w) { return h('tr', null, h('td', { text: w[0] }), h('td', null, bar(w[1], 'g-b1')), h('td', null, bar(w[2], 'g-b2'))); })))),
        h('div', { class: 'a-panel' }, h('h3', { text: t('Nachkalkulation', 'Post-calculation') }),
          h('table', null, h('thead', null, h('tr', null, h('th', { text: t('Auftrag', 'Order') }), h('th', { class: 'r', text: t('Soll h', 'Target h') }), h('th', { class: 'r', text: t('Ist h', 'Actual h') }), h('th', { class: 'r', text: t('DB', 'Margin') }))),
            h('tbody', null, D.post.map(function (p) { var bad = p.ist > p.soll * 1.1; return h('tr', null, h('td', null, h('b', { text: p.nr }), h('div', { class: 'a-sub', text: p.text })), h('td', { class: 'r', text: num(p.soll, 1) }), h('td', { class: 'r' + (bad ? ' neg' : ' pos'), text: num(p.ist, 1) }), h('td', { class: 'r', text: p.db + ' %' })); }))),
          h('p', { class: 'g-note', text: t('AU-26-0381 lag 20 % über dem Soll. ARGUS schlägt vor, den Ansatz für Lochbleche zu prüfen.', 'AU-26-0381 was 20% over target. ARGUS suggests reviewing the rate for perforated sheets.') }))));
  }

  // ---------------------------------------------------------------- Eingang (E-Mail und KAIROS)
  function vInbox() {
    var items = [];
    kairosReqs().slice().reverse().forEach(function (r) { items.push({ k: true, r: r }); });
    if (D.done.order) items.push({ m: t('Bestellung zu ', 'Order for ') + (D.done.quote || ''), from: CUST.name, st: t('verarbeitet', 'processed') });
    if (D.done.mail) items.push({ m: t('Anfrage Konsole K-12, 120 Stück', 'Enquiry bracket K-12, 120 pieces'), from: CUST.name, st: D.done.read ? t('verarbeitet', 'processed') : t('neu', 'new') });
    items.push({ m: t('Lieferavis Blech S235', 'Delivery notice sheet S235'), from: VENDOR, st: t('verarbeitet', 'processed') });
    items.push({ m: t('Rückfrage Termin AU-26-0386', 'Query delivery date AU-26-0386'), from: 'Beispiel Maschinenbau AG', st: t('beantwortet', 'answered') });
    return h('div', null,
      h('p', { class: 'a-sub', text: t('ARGUS liest das gemeinsame Postfach und die Anfragen aus KAIROS. Was erkannt wird, landet direkt im richtigen Ablauf.', 'ARGUS reads the shared inbox and the enquiries from KAIROS. Whatever it recognises goes straight into the right process.') }),
      ui.msg ? h('p', { class: 'a-msg', role: 'status', text: ui.msg }) : null,
      h('ul', { class: 'a-files g-inbox' }, items.map(function (x) {
        if (x.k) {
          var r = x.r, taken = D.taken[r.id];
          return h('li', null, h('span', { class: 'a-fico g-k', text: 'KAI' }),
            h('div', null, h('div', { class: 'a-fname', text: (r.firm || r.name) + ': ' + r.partName + ', ' + r.qty + t(' Stk.', ' pcs') }), h('div', { class: 'a-fmeta', text: t('Sofortpreis aus KAIROS, ', 'Instant price from KAIROS, ') + UP.fmtDT(r.ts) + ' · ' + money(r.total) })),
            h('div', { class: 'a-factions' }, taken ? h('span', { class: 'a-badge ok', text: taken }) : h('button', { type: 'button', class: 'a-btn p s', disabled: ui.busy || D.paused, onclick: function () { takeKairos(r); }, text: t('Offerte erstellen', 'Create quote') })));
        }
        return h('li', null, h('span', { class: 'a-fico', text: 'MAIL' }), h('div', null, h('div', { class: 'a-fname', text: x.m }), h('div', { class: 'a-fmeta', text: x.from })), h('div', { class: 'a-factions' }, h('span', { class: 'a-badge grey', text: x.st })));
      })),
      kairosReqs().length ? null : h('p', { class: 'g-note' }, t('Noch keine Anfrage aus KAIROS. Probieren Sie den Sofortpreis in der ', 'No enquiry from KAIROS yet. Try the instant price in the '), h('a', { href: lang === 'de' ? '/demos/kairos.html' : '/en/demos/kairos.html', text: t('KAIROS-Demo', 'KAIROS demo') }), t(' aus. Die Anfrage erscheint dann hier.', '. The enquiry then appears here.')));
  }
  function takeKairos(r) {
    if (!D.mods.offerte) { ui.msg = t('Das Modul Offerte ist ausgeschaltet. Ihr Team erstellt die Offerte wie bisher im ERP.', 'The quote module is switched off. Your team creates the quote in the ERP as before.'); render(); return; }
    var q = nr('VA', D.seq.va); ui.busy = true;
    erpWrite(t('Verkaufsangebot ', 'Sales quote ') + q, [[t('Nr.', 'No.'), q], [t('Kunde', 'Customer'), r.firm || r.name], [t('Artikel', 'Item'), r.partName + ', ' + r.mat + ', ' + r.th + ' mm'], [t('Menge', 'Quantity'), String(r.qty)], [t('Betrag', 'Amount'), num(r.total)]], 'quotes', false, function () {
      D.erp.quotes.push({ nr: q, cust: r.firm || r.name, text: r.partName + ', ' + r.qty + t(' Stk.', ' pcs'), amount: r.total, date: Date.now(), status: 'open', fresh: true });
      D.seq.va++; D.taken[r.id] = q; ui.busy = false;
      log(t('Anfrage aus KAIROS übernommen: Verkaufsangebot ', 'Enquiry from KAIROS taken over: sales quote ') + q, way());
      ui.msg = t('Verkaufsangebot ', 'Sales quote ') + q + t(' aus der KAIROS-Anfrage erstellt.', ' created from the KAIROS enquiry.');
      st.save(); render();
    });
  }

  // ---------------------------------------------------------------- Werkstatt-Tablet
  var TL = {
    de: { next: 'Nächster Auftrag', psa: 'Schutzausrüstung bestätigen', glasses: 'Schutzbrille', gloves: 'Handschuhe', ear: 'Gehörschutz', start: 'Auftrag starten', running: 'Läuft', done: 'Fertig melden', qty: 'Menge', mat: 'Material', steps: 'Arbeitsschritte', first: 'Zuerst die ganze Schutzausrüstung bestätigen', thanks: 'Gut gemacht. Zeit erfasst.', s: ['Laser schneiden', 'Entgraten', 'Abkanten', 'Kontrolle'] },
    pt: { next: 'Próximo trabalho', psa: 'Confirmar equipamento de proteção', glasses: 'Óculos de proteção', gloves: 'Luvas', ear: 'Proteção auditiva', start: 'Iniciar trabalho', running: 'Em curso', done: 'Concluído', qty: 'Quantidade', mat: 'Material', steps: 'Passos', first: 'Confirme primeiro todo o equipamento de proteção', thanks: 'Bom trabalho. Tempo registado.', s: ['Cortar a laser', 'Rebarbar', 'Dobrar', 'Controlo'] },
    it: { next: 'Prossimo lavoro', psa: 'Confermare i dispositivi di protezione', glasses: 'Occhiali di protezione', gloves: 'Guanti', ear: 'Protezione dell\'udito', start: 'Avvia lavoro', running: 'In corso', done: 'Segnala completato', qty: 'Quantità', mat: 'Materiale', steps: 'Fasi', first: 'Conferma prima tutti i dispositivi di protezione', thanks: 'Ben fatto. Tempo registrato.', s: ['Taglio laser', 'Sbavatura', 'Piegatura', 'Controllo'] },
    es: { next: 'Próximo trabajo', psa: 'Confirmar el equipo de protección', glasses: 'Gafas de protección', gloves: 'Guantes', ear: 'Protección auditiva', start: 'Iniciar trabajo', running: 'En curso', done: 'Marcar como terminado', qty: 'Cantidad', mat: 'Material', steps: 'Pasos', first: 'Confirme primero todo el equipo de protección', thanks: 'Buen trabajo. Tiempo registrado.', s: ['Corte láser', 'Desbarbado', 'Plegado', 'Control'] },
    en: { next: 'Next job', psa: 'Confirm protective equipment', glasses: 'Safety glasses', gloves: 'Gloves', ear: 'Hearing protection', start: 'Start job', running: 'Running', done: 'Report done', qty: 'Quantity', mat: 'Material', steps: 'Steps', first: 'Confirm all protective equipment first', thanks: 'Well done. Time recorded.', s: ['Laser cutting', 'Deburring', 'Bending', 'Inspection'] }
  };
  var PSA_ICON = {
    glasses: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M4 22h40"/><path d="M6 22c0 8 3 12 9 12s8-4 9-8c1 4 3 8 9 8s9-4 9-12"/></svg>',
    gloves: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 44V24l-5-6a3 3 0 0 1 5-3l3 4V8a3 3 0 0 1 6 0v10V6a3 3 0 0 1 6 0v12V9a3 3 0 0 1 6 0v19c0 8-4 16-12 16z"/></svg>',
    ear: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M10 28a14 14 0 0 1 28 0"/><rect x="5" y="26" width="9" height="14" rx="3"/><rect x="34" y="26" width="9" height="14" rx="3"/></svg>'
  };
  function vShop() {
    var L = TL[ui.tlang], ours = !!(D.done.shop && D.done.avor);
    var job = ours ? { nr: D.done.avor, part: PART.name, mat: PART.mat + ' · ' + PART.th + ' mm', qty: PART.qty } : { nr: 'FA-26-1020', part: t('Treppenwange', 'Stair stringer'), mat: 'S235 · 5 mm', qty: 16 };
    var all = ['glasses', 'gloves', 'ear'].every(function (k) { return ui.psa[k]; });
    var running = ui.run > 0;
    var timer = h('b', { class: 'g-timer', id: 'g-timer', text: running ? UP.hhmm(Math.floor((Date.now() - ui.run) / 60000)) + ':' + UP.pad(Math.floor((Date.now() - ui.run) / 1000) % 60) : '00:00:00' });
    var langs = [['pt', 'Português'], ['it', 'Italiano'], ['es', 'Español'], ['de', 'Deutsch'], ['en', 'English']];
    return h('div', { class: 'g-tab-wrap' },
      h('div', { class: 'g-tablet' },
        h('div', { class: 'g-tb-top' }, h('span', null, h('b', { text: 'João Silva' }), ' · Laser 1'), h('select', { 'aria-label': t('Sprache', 'Language'), onchange: function (ev) { ui.tlang = ev.target.value; render(); } }, langs.map(function (l) { return h('option', { value: l[0], selected: ui.tlang === l[0], text: l[1] }); }))),
        h('div', { class: 'g-tb-body' },
          h('p', { class: 'a-kicker', text: L.next }),
          h('h3', { text: job.nr + ' · ' + job.part }),
          h('div', { class: 'g-tb-meta' }, h('span', null, L.mat + ': ', h('b', { text: job.mat })), h('span', null, L.qty + ': ', h('b', { text: String(job.qty) }))),
          ours ? drawing() : null,
          h('p', { class: 'a-kicker', text: L.steps }),
          h('ol', { class: 'g-tb-steps' }, L.s.map(function (x) { return h('li', { text: x }); })),
          h('p', { class: 'a-kicker', text: L.psa }),
          h('div', { class: 'g-psa' }, ['glasses', 'gloves', 'ear'].map(function (k) {
            return h('button', { type: 'button', class: 'g-psa-b', 'aria-pressed': ui.psa[k] ? 'true' : 'false', disabled: running, onclick: function () { ui.psa[k] = !ui.psa[k]; render(); } }, h('span', { class: 'g-psa-i', html: PSA_ICON[k] }), h('span', { text: L[k] }));
          })),
          !all && !running ? h('p', { class: 'g-warn', text: L.first }) : null,
          ui.doneShop ? h('p', { class: 'a-msg', text: L.thanks }) : null,
          h('div', { class: 'g-tb-act' }, running ? [h('span', { class: 'a-badge ok', text: L.running }), timer, h('button', { type: 'button', class: 'a-btn p', onclick: function () { var min = Math.max(1, Math.round((Date.now() - ui.run) / 60000)); ui.run = 0; ui.doneShop = true; ui.psa = {}; log(t('Werkstatt: ', 'Workshop: ') + job.nr + t(' fertig gemeldet von João Silva, Zeit erfasst', ' reported done by João Silva, time recorded') + ' (' + min + ' min)', 'api'); st.save(); render(); }, text: L.done })]
            : h('button', { type: 'button', class: 'a-btn p g-big', disabled: !all, onclick: function () { ui.run = Date.now(); ui.doneShop = false; log(t('Werkstatt: ', 'Workshop: ') + job.nr + t(' gestartet, Schutzausrüstung bestätigt', ' started, protective equipment confirmed'), 'api'); st.save(); render(); }, text: L.start })))),
      h('div', { class: 'g-tab-side' },
        h('h3', { text: t('Das Werkstatt-Tablet', 'The workshop tablet') }),
        h('ul', { class: 'g-checks' }, [t('Läuft lokal im Betrieb, ohne externen Server.', 'Runs locally in the business, without an external server.'), t('Jeder Mitarbeiter in seiner Sprache.', 'Every worker in his own language.'), t('Starten erst mit bestätigter Schutzausrüstung.', 'Start only with confirmed protective equipment.'), t('Zeiten pro Auftrag fliessen in die Nachkalkulation.', 'Times per job flow into the post-calculation.')].map(function (x) { return h('li', { text: x }); })),
        ours ? null : h('p', { class: 'g-note', text: t('Spielen Sie den Ablauf bis zum Schritt «Werkstatt» ab. Dann erscheint hier der neue Auftrag.', 'Play the process up to the step «Workshop». The new job then appears here.') })));
  }

  // ---------------------------------------------------------------- Assistent
  function answer(q) {
    var s = q.toLowerCase(), oa = OPS.answer(q);
    if (oa) return oa;
    if (/verzug|spät|late|overdue|delay/.test(s)) { var l = lateOrders(); return l.length ? t('Im Verzug ist ', 'Late: ') + l.map(function (o) { return o.nr + ' (' + o.cust + ', ' + t('fällig ', 'due ') + UP.fmtD(o.due) + ')'; }).join(', ') + t('. Ich habe die Produktion bereits informiert.', '. I have already informed production.') : t('Kein Auftrag ist im Verzug.', 'No order is late.'); }
    if (/offert|angebot|quote/.test(s)) { var o = openQuotes(); return o.length + t(' Offerten sind offen, zusammen ', ' quotes are open, totalling ') + money(o.reduce(function (a, x) { return a + x.amount; }, 0)) + ': ' + o.map(function (x) { return x.nr + ' ' + x.cust; }).join(', ') + t('. Wo nach 3 Tagen keine Antwort kommt, fasse ich nach.', '. Where there is no reply after 3 days, I follow up.'); }
    if (/auslast|kapazit|utili|capacity|laser/.test(s)) return t('Diese Woche ist der Laser zu ', 'This week the laser is at ') + D.kpi.laser + t(' % ausgelastet, das Abkanten zu ', '% and bending at ') + D.kpi.bend + t(' %. Nächste Woche hat es noch Platz für etwa 2 Aufträge dieser Grösse.', '%. Next week there is still room for about 2 orders of this size.');
    if (/material|blech|lager|stock|sheet/.test(s)) { var low = D.erp.items.filter(function (i) { return i.stock - i.res < i.min; }); return low.length ? t('Unter Mindestbestand: ', 'Below minimum stock: ') + low.map(function (i) { return i.nr + ' (' + t('frei ', 'free ') + (i.stock - i.res) + ', min. ' + i.min + ')'; }).join(', ') + '.' : t('Alle Bleche liegen über dem Mindestbestand.', 'All sheets are above minimum stock.'); }
    if (/heute|erledigt|today|done|gemacht/.test(s)) { var today = D.log.filter(function (e) { return Date.now() - e.ts < DAY; }).length; return t('Heute habe ich ', 'Today I have done ') + today + t(' Aktionen erledigt und ', ' actions and filled in ') + D.fields + t(' Felder im ERP ausgefüllt. Details stehen im Protokoll.', ' fields in the ERP. Details are in the log.'); }
    if (/nachkalk|marge|db|margin|post/.test(s)) return t('Bei AU-26-0381 lagen wir 20 % über dem Soll, der Deckungsbeitrag fiel auf 12 %. Ich empfehle, den Ansatz für Lochbleche zu prüfen.', 'For AU-26-0381 we were 20% over target, the margin fell to 12%. I recommend reviewing the rate for perforated sheets.');
    return t('In dieser Demo beantworte ich Fragen zu Verzug, Offerten, Auslastung, Material, Nachkalkulation und zu dem, was heute erledigt wurde. In Ihrem Betrieb frage ich Ihre echten Daten ab.', 'In this demo I answer questions about delays, quotes, utilisation, material, post-calculation and what was done today. In your business I query your real data.');
  }
  function ask(q) { if (!q) return; ui.chat.push({ me: true, text: q }); ui.chat.push({ me: false, text: answer(q) }); render(); var c = app.querySelector('.g-chat'); if (c) c.scrollTop = c.scrollHeight; }
  function vAssist() {
    if (!D.mods.assistent) return h('div', { class: 'a-empty', text: t('Das Modul Assistent ist ausgeschaltet.', 'The assistant module is switched off.') });
    var chips = [t('Welche Aufträge sind im Verzug?', 'Which orders are late?'), t('Welche Maschine steht?', 'Which machine is down?'), t('Wer ist heute da?', 'Who is here today?'), t('Wie viel Kapazität ist frei?', 'How much capacity is free?'), t('Welches Material wird knapp?', 'Which material is running low?'), t('Gibt es Qualitätsprobleme?', 'Are there quality problems?'), t('Was hast du heute erledigt?', 'What have you done today?')];
    var inp = h('input', { type: 'text', 'aria-label': t('Frage an ARGUS', 'Question to ARGUS'), placeholder: t('Fragen Sie ARGUS …', 'Ask ARGUS …') });
    return h('div', { class: 'g-assist' },
      h('div', { class: 'g-chat', 'aria-live': 'polite' }, ui.chat.length ? ui.chat.map(function (m) { return h('div', { class: 'g-msg' + (m.me ? ' g-me' : '') }, h('span', { class: 'g-who', text: m.me ? t('Sie', 'You') : 'ARGUS' }), h('p', { text: m.text })); })
        : h('p', { class: 'a-sub', text: t('Fragen Sie in normaler Sprache. Zum Beispiel:', 'Ask in plain language. For example:') })),
      h('div', { class: 'g-chips' }, chips.map(function (c) { return h('button', { type: 'button', class: 'a-btn s', onclick: function () { ask(c); }, text: c }); })),
      h('form', { class: 'g-ask', onsubmit: function (ev) { ev.preventDefault(); ask(inp.value.trim()); } }, inp, h('button', { type: 'submit', class: 'a-btn p', text: t('Fragen', 'Ask') })),
      h('p', { class: 'g-note', text: t('In der Demo antwortet ARGUS aus den Beispieldaten dieser Seite.', 'In the demo ARGUS answers from the sample data on this page.') }));
  }

  // ---------------------------------------------------------------- Module
  function vMods() {
    return h('div', null,
      h('p', { class: 'a-sub', text: t('Aktivieren Sie nur, was Ihr Betrieb braucht. Ausgeschaltete Schritte erledigt Ihr Team wie bisher im ERP. Spielen Sie den Ablauf danach nochmals ab.', 'Activate only what your business needs. Switched-off steps are done by your team in the ERP as before. Then play the process again.') }),
      h('ul', { class: 'g-mods' }, MODS.map(function (m) {
        var on = D.mods[m[0]];
        return h('li', null, h('div', null, h('b', { text: m[1] }), h('p', { class: 'a-sub', text: m[2] })),
          h('button', { type: 'button', role: 'switch', class: 'g-switch', 'aria-checked': on ? 'true' : 'false', 'aria-label': m[1], onclick: function () { D.mods[m[0]] = !on; log(t('Modul «', 'Module «') + m[1] + (on ? t('» ausgeschaltet', '» switched off') : t('» aktiviert', '» activated')), 'user'); st.save(); render(); } }, h('span')));
      })),
      h('div', { class: 'a-panel' }, h('h3', { text: t('Weg ans ERP', 'Route to the ERP') }),
        h('div', { class: 'g-radio' }, [['api', t('Offizielle Schnittstelle (empfohlen)', 'Official interface (recommended)'), t('Web-Services, REST oder OData. Der sauberste und stabilste Weg.', 'Web services, REST or OData. The cleanest and most stable route.')],
          ['ui', t('Bedienen wie ein Mensch (Rückfallebene)', 'Operate like a person (fallback)'), t('Wo es keine Schnittstelle gibt, bedient ARGUS die Oberfläche des ERP, mit Protokoll jeder Aktion.', 'Where there is no interface, ARGUS operates the ERP\'s user interface, logging every action.')]].map(function (o) {
          return h('label', { class: 'g-opt' }, h('input', { type: 'radio', name: 'g-mode', value: o[0], checked: D.mode === o[0], onchange: function () { D.mode = o[0]; log(t('Weg ans ERP: ', 'Route to the ERP: ') + o[1], 'user'); st.save(); render(); } }), h('span', null, h('b', { text: o[1] }), h('small', { text: o[2] })));
        })),
        h('p', { class: 'g-note', text: t('In die Datenbank des ERP schreibt ARGUS nie direkt.', 'ARGUS never writes directly into the ERP database.') })));
  }

  // ---------------------------------------------------------------- Protokoll
  function vLog() {
    var rows = D.log.slice().sort(function (a, b) { return b.ts - a.ts; });
    return h('div', null, h('p', { class: 'a-sub', text: t('Jede Aktion von ARGUS ist nachvollziehbar: wann, was und auf welchem Weg.', 'Every action by ARGUS is traceable: when, what and by which route.') }),
      h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, h('th', { text: t('Zeit', 'Time') }), h('th', { text: t('Aktion', 'Action') }), h('th', { text: t('Weg', 'Route') }))),
        h('tbody', null, rows.map(function (e) { return h('tr', null, h('td', { class: 'a-mono', text: UP.fmtDT(e.ts) }), h('td', { class: 'wrap', text: e.text }), h('td', null, wayBadge(e.way))); })))));
  }

  // ---------------------------------------------------------------- ERP (simuliert, Darstellung wie ältere ERP-Oberflächen)
  function vErp() {
    var tabs = [['quotes', t('Verkaufsangebote', 'Sales quotes')], ['orders', t('Verkaufsaufträge', 'Sales orders')], ['prod', t('Fertigungsaufträge', 'Production orders')], ['purchase', t('Einkauf', 'Purchasing')], ['items', t('Artikel', 'Items')]];
    var body;
    if (ui.card) {
      body = h('div', { class: 'g-card' + (D.mode === 'ui' ? ' g-ui' : '') }, h('div', { class: 'g-card-h', text: ui.card.title }),
        h('div', { class: 'g-form' }, ui.card.fields.map(function (f, i) { return h('label', { class: 'g-fld' }, h('span', { text: f[0] }), h('input', { type: 'text', readonly: 'readonly', 'data-f': String(i), tabindex: '-1' }), h('i', { class: 'g-cursor', 'aria-hidden': 'true' })); })));
    } else {
      var v = ui.erpView, list = D.erp[v], cols;
      if (v === 'quotes') cols = [[t('Nr.', 'No.'), 'nr'], [t('Kunde', 'Customer'), 'cust'], [t('Beschreibung', 'Description'), 'text'], [t('Betrag', 'Amount'), 'amount'], [t('Status', 'Status'), 'status']];
      else if (v === 'orders') cols = [[t('Nr.', 'No.'), 'nr'], [t('Kunde', 'Customer'), 'cust'], [t('Beschreibung', 'Description'), 'text'], [t('Termin', 'Due'), 'due'], [t('Status', 'Status'), 'status']];
      else if (v === 'prod') cols = [[t('Nr.', 'No.'), 'nr'], [t('Auftrag', 'Order'), 'order'], [t('Arbeitsplan', 'Work plan'), 'text'], [t('Status', 'Status'), 'status']];
      else if (v === 'purchase') cols = [[t('Nr.', 'No.'), 'nr'], [t('Lieferant', 'Vendor'), 'vendor'], [t('Beschreibung', 'Description'), 'text'], [t('Status', 'Status'), 'status']];
      else cols = [[t('Nr.', 'No.'), 'nr'], [t('Beschreibung', 'Description'), 'text'], [t('Bestand', 'Stock'), 'stock'], [t('Reserviert', 'Reserved'), 'res'], [t('Min.', 'Min.'), 'min']];
      function cell(r, k) {
        if (k === 'amount') return num(r[k]);
        if (k === 'due') return UP.fmtD(r[k]);
        if (k === 'status') return (v === 'quotes' ? QS : v === 'orders' ? OS : v === 'prod' ? PS : ES)[r[k]] || r[k];
        return String(r[k]);
      }
      body = h('div', { class: 'g-erp-tw' }, h('table', null, h('thead', null, h('tr', null, cols.map(function (c) { return h('th', { text: c[0] }); }))),
        h('tbody', null, list.slice().reverse().map(function (r) { return h('tr', { class: r.fresh ? 'g-new' : null }, cols.map(function (c) { return h('td', { class: c[1] === 'amount' || c[1] === 'stock' || c[1] === 'res' || c[1] === 'min' ? 'r' : null, text: cell(r, c[1]) }); })); }))));
    }
    var status = D.paused ? t('ARGUS pausiert. Ihr Team arbeitet direkt im ERP.', 'ARGUS paused. Your team works directly in the ERP.')
      : ui.card ? (D.mode === 'ui' ? t('ARGUS bedient die Oberfläche …', 'ARGUS is operating the interface …') : t('ARGUS schreibt über die Schnittstelle …', 'ARGUS is writing via the interface …'))
        : (D.mode === 'ui' ? t('Verbunden: ARGUS bedient die Oberfläche', 'Connected: ARGUS operates the interface') : t('Verbunden: ARGUS über Web-Services', 'Connected: ARGUS via web services'));
    return h('aside', { class: 'g-erp', 'aria-label': t('ERP der Musterfirma (simuliert)', 'ERP of the model company (simulated)') },
      h('div', { class: 'g-erp-title' }, h('span', { text: t('ERP · Beispiel Metall AG', 'ERP · Beispiel Metall AG') }), h('small', { text: t('wie heute, simuliert', 'as today, simulated') })),
      h('div', { class: 'g-erp-menu' }, ['Datei', 'Bearbeiten', 'Ansicht', 'Extras', '?'].map(function (x) { return h('span', { text: lang === 'de' ? x : ({ Datei: 'File', Bearbeiten: 'Edit', Ansicht: 'View', Extras: 'Tools', '?': '?' })[x] }); })),
      h('div', { class: 'g-erp-tabs', role: 'tablist', 'aria-label': t('ERP-Bereiche', 'ERP areas') }, tabs.map(function (tb) { return h('button', { type: 'button', role: 'tab', 'aria-selected': !ui.card && ui.erpView === tb[0] ? 'true' : 'false', disabled: !!ui.card, onclick: function () { ui.erpView = tb[0]; render(); }, text: tb[1] }); })),
      h('div', { class: 'g-erp-body' }, body),
      h('div', { class: 'g-erp-status' + (D.paused ? ' g-off' : ui.card ? ' g-busy' : '') }, h('i', { 'aria-hidden': 'true' }), status));
  }

  // ---------------------------------------------------------------- Betrieb: Plantafel, Maschinen, Personal, Lager, Qualität
  var OPS = window.ARGUS_OPS.create({ h: h, t: t, UP: UP, ui: ui, D: function () { return D; }, save: function () { st.save(); }, log: log, render: function () { render(); }, way: way, CUST: CUST, PART: PART, VENDOR: VENDOR });

  // ---------------------------------------------------------------- Gerüst
  var NAV = [
    [t('Übersicht', 'Overview'), [['cockpit', 'Cockpit', 'cockpit']]],
    [t('Verkauf und Büro', 'Sales and office'), [['flow', t('Auftragsablauf', 'Order process'), null], ['inbox', t('Eingang', 'Inbox'), 'eingang']]],
    [t('Produktion', 'Production'), [['plan', t('Plantafel', 'Planning board'), 'plantafel'], ['machines', t('Maschinen', 'Machines'), 'maschinen'], ['shop', t('Werkstatt-Tablet', 'Workshop tablet'), 'werkstatt']]],
    [t('Betrieb', 'Operations'), [['people', t('Personal', 'Staff'), 'personal'], ['stock', t('Lager und Versand', 'Stock and dispatch'), 'lager'], ['quality', t('Qualität', 'Quality'), 'qualitaet']]],
    ['ARGUS', [['assist', t('Assistent', 'Assistant'), 'assistent'], ['mods', t('Module', 'Modules'), null], ['log', t('Protokoll', 'Log'), null]]]
  ];
  var PATHS = { flow: 'ablauf', cockpit: 'cockpit', inbox: 'eingang', shop: 'werkstatt', assist: 'assistent', mods: 'module', log: 'protokoll', plan: 'plantafel', machines: 'maschinen', people: 'personal', stock: 'lager', quality: 'qualitaet' };
  var TITLES = { flow: t('Vom ersten Mail bis zur Maschine', 'From the first email to the machine'), cockpit: t('Betrieb auf einen Blick', 'The business at a glance'), inbox: t('Eingang', 'Inbox'), shop: t('Werkstatt-Tablet', 'Workshop tablet'), assist: t('Assistent', 'Assistant'), mods: t('Module', 'Modules'), log: t('Protokoll', 'Log'), plan: t('Plantafel', 'Planning board'), machines: t('Maschinen und OEE', 'Machines and OEE'), people: t('Personal und Einsatz', 'Staff and assignment'), stock: t('Lager und Versand', 'Stock and dispatch'), quality: t('Qualität', 'Quality') };
  function go(v) { ui.view = v; ui.msg = ''; render(); var m = app.querySelector('.g-body'); if (m && m.getBoundingClientRect().top < 0) m.scrollIntoView({ block: 'start' }); }
  function modOf(v) { var r = null; NAV.forEach(function (g) { g[1].forEach(function (n) { if (n[0] === v) r = n[2]; }); }); return r; }
  function off(name) { return h('div', { class: 'a-empty', text: t('Das Modul «', 'The module «') + name + t('» ist ausgeschaltet. Sie können es unter «Module» aktivieren.', '» is switched off. You can activate it under «Modules».') }); }
  function render() {
    OPS.sync();
    var kill = h('button', { type: 'button', class: 'g-kill' + (D.paused ? ' on' : ''), 'aria-pressed': D.paused ? 'true' : 'false', disabled: ui.busy, onclick: function () { D.paused = !D.paused; ui.auto = false; log(D.paused ? t('Notfallschalter: ARGUS pausiert', 'Emergency switch: ARGUS paused') : t('ARGUS wieder gestartet', 'ARGUS restarted'), 'user'); st.save(); render(); } },
      h('i', { 'aria-hidden': 'true' }), D.paused ? t('ARGUS starten', 'Start ARGUS') : t('Notfallschalter', 'Emergency switch'));
    var right = [kill, UP.themeButton(app, 'a-icon-btn')];
    var badge = OPS.badges(), kq = kairosReqs().filter(function (r) { return !D.taken[r.id]; }).length;
    badge.inbox = kq;
    var side = h('nav', { class: 'g-side', 'aria-label': t('Bereiche von ARGUS', 'ARGUS areas') }, NAV.map(function (g) {
      return h('div', { class: 'g-side-g' }, h('h2', { text: g[0] }), g[1].map(function (n) {
        var cnt = badge[n[0]] || 0, isOff = n[2] && D.mods[n[2]] === false;
        return h('button', { type: 'button', 'aria-current': ui.view === n[0] ? 'page' : null, class: isOff ? 'off' : null, onclick: function () { go(n[0]); } }, h('span', { text: n[1] }), cnt ? h('span', { class: 'g-n', 'aria-label': cnt + t(' offen', ' open'), text: String(cnt) }) : null);
      }));
    }));
    var view, mod = modOf(ui.view);
    if (D.paused) view = h('div', { class: 'g-paused' }, h('h2', { text: t('ARGUS ist pausiert.', 'ARGUS is paused.') }),
      h('p', { text: t('Nichts geht verloren. Ihr ERP läuft weiter wie bisher, Ihr Team arbeitet direkt darin. Sobald ARGUS wieder läuft, macht es dort weiter, wo es aufgehört hat.', 'Nothing is lost. Your ERP keeps running as before, your team works in it directly. As soon as ARGUS runs again, it continues where it left off.') }),
      h('button', { type: 'button', class: 'a-btn p', onclick: function () { D.paused = false; log(t('ARGUS wieder gestartet', 'ARGUS restarted'), 'user'); st.save(); render(); }, text: t('ARGUS wieder starten', 'Restart ARGUS') }));
    else if (mod && D.mods[mod] === false) view = off(modName(mod));
    else view = ui.view === 'flow' ? vFlow() : ui.view === 'cockpit' ? vCockpit() : ui.view === 'inbox' ? vInbox() : ui.view === 'shop' ? vShop() : ui.view === 'assist' ? vAssist() : ui.view === 'mods' ? vMods() : ui.view === 'log' ? vLog() : OPS.views[ui.view]();
    var erpOn = !!ui.erp[ui.view] && !D.paused;
    var main = h('main', { class: 'a-main g-main' },
      h('div', { class: 'g-head' }, h('div', null, h('h1', { text: D.paused ? 'ARGUS' : TITLES[ui.view] }), h('p', { class: 'a-sub', text: t('Musterfirma Beispiel Metall AG · erfundene Daten · ERP simuliert', 'Model company Beispiel Metall AG · made-up data · ERP simulated') })),
        h('div', { class: 'g-head-r' }, h('span', { class: 'a-badge ' + (D.paused ? 'no' : 'ok'), text: D.paused ? t('pausiert', 'paused') : (D.mode === 'ui' ? t('aktiv · bedient Oberfläche', 'active · UI automation') : t('aktiv · Schnittstelle', 'active · interface')) }),
          D.paused ? null : h('button', { type: 'button', class: 'a-btn s', 'aria-pressed': erpOn ? 'true' : 'false', onclick: function () { ui.erp[ui.view] = !erpOn; render(); }, text: erpOn ? t('ERP ausblenden', 'Hide ERP') : t('ERP einblenden', 'Show ERP') }))),
      h('div', { class: 'g-grid' + (erpOn ? ' with-erp' : '') }, h('div', { class: 'g-argus' }, view), erpOn ? vErp() : null));
    var bg = h('div', { class: 'app-bg', 'aria-hidden': 'true' }); bg.appendChild(UP.traces('pcb'));
    UP.clear(app);
    app.appendChild(UP.chrome('argus.beispiel-metall.ch/' + PATHS[ui.view]));
    app.appendChild(h('div', { class: 'app-shell' }, bg, UP.topbar({ logo: 'A', brand: 'ARGUS', sub: 'Beispiel Metall AG', nav: [], cur: ui.view, onNav: go, right: right }), h('div', { class: 'g-body' }, side, main)));
    app.querySelectorAll('[data-w]').forEach(function (el) { el.style.width = el.getAttribute('data-w') + '%'; });
    OPS.post(app);
  }

  // Live-Werte (Maschinen, Cockpit) regelmässig auffrischen, aber nie während einer Eingabe oder beim Ziehen
  window.setInterval(function () {
    if (SHOT || ui.drag || ui.busy || D.paused) return;
    if (ui.view !== 'machines' && ui.view !== 'cockpit') return;
    var a = document.activeElement;
    if (a && app.contains(a) && /INPUT|SELECT|TEXTAREA/.test(a.tagName)) return;
    var key = a && app.contains(a) ? (a.getAttribute('aria-label') || a.textContent) : null;
    var y = window.scrollY; render(); window.scrollTo(0, y);
    if (key) { var same = Array.prototype.filter.call(app.querySelectorAll('button'), function (x) { return (x.getAttribute('aria-label') || x.textContent) === key; })[0]; if (same) same.focus({ preventScroll: true }); }
  }, 5000);

  // Laufende Uhr auf dem Tablet, ohne die ganze Ansicht neu zu zeichnen
  window.setInterval(function () { if (ui.run > 0 && ui.view === 'shop') { var el = document.getElementById('g-timer'); if (el) { var s = Math.floor((Date.now() - ui.run) / 1000); el.textContent = UP.pad(Math.floor(s / 3600)) + ':' + UP.pad(Math.floor(s / 60) % 60) + ':' + UP.pad(s % 60); } } }, 1000);

  // Bildschirmfoto-Modus: ?shot&step=4&view=flow
  if (SHOT) { var n = parseInt(UP.params.get('step') || '0', 10); if (n > 0) fastForward(n); if (UP.params.get('view')) ui.view = UP.params.get('view'); if (UP.params.get('sel')) ui.sel = parseInt(UP.params.get('sel'), 10); if (UP.params.get('msel')) ui.msel = UP.params.get('msel'); if (UP.params.get('tab')) { ui.ptab = ui.stab = ui.qtab = UP.params.get('tab'); } }
  if (UP.params.get('view') && !SHOT) ui.view = UP.params.get('view');
  render();
  UP.init(function () { st.reset(); window.location.reload(); });
})();
