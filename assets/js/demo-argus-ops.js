/* ARGUS im Betrieb: Plantafel, Maschinen, Personal, Lager und Versand, Qualität.
   Wird von demo-argus.js eingebunden. Erfundene Musterfirma, erfundene Personen und Zahlen. Alles läuft im Browser. */
(function () {
  'use strict';
  var DAY = 86400000, HOURS = 50, DAYH = 10, START = 210, END = 600;

  function seg(list) { var out = [], m = 0; list.forEach(function (x) { out.push([x[0], m, m + x[1], x[2] || null]); m += x[1]; }); return out; }

  // ---------------------------------------------------------------- Ausgangszustand
  function seed(t) {
    var now = Date.now();
    return {
      clock0: now,
      machines: [
        { id: 'L1', name: 'Laser 1', grp: 'L', model: t('Faserlaser 6 kW · 3000 × 1500 mm', 'Fibre laser 6 kW · 3000 × 1500 mm'), conn: 'opc', state: 'run', reason: null, job: 'FA-26-1020', who: 'p1', parts0: 146, runStart: now, cycle: 24, P: 0.91, Q: 0.993, kwh: 162, hist: seg([['setup', 20], ['run', 95], ['idle', 12, 'crane'], ['run', 58], ['setup', 10]]), since: 195 },
        { id: 'L2', name: 'Laser 2', grp: 'L', model: t('Faserlaser 4 kW · 3000 × 1500 mm', 'Fibre laser 4 kW · 3000 × 1500 mm'), conn: 'opc', state: 'setup', reason: null, job: 'FA-26-1021', who: 'p2', parts0: 61, runStart: now, cycle: 30, P: 0.86, Q: 0.985, kwh: 118, hist: seg([['setup', 25], ['run', 70], ['idle', 46, 'prog'], ['run', 49]]), since: 190 },
        { id: 'B1', name: t('Abkantpresse 1', 'Press brake 1'), grp: 'B', model: '170 t · 3100 mm', conn: 'opc', state: 'run', reason: null, job: 'FA-26-1018', who: 'p3', parts0: 212, runStart: now, cycle: 35, P: 0.88, Q: 0.985, kwh: 41, hist: seg([['setup', 30], ['run', 80], ['idle', 15, 'crane'], ['run', 60]]), since: 185 },
        { id: 'B2', name: t('Abkantpresse 2', 'Press brake 2'), grp: 'B', model: '100 t · 2000 mm', conn: 'sig', state: 'idle', reason: 'mat', job: 'FA-26-1015', who: 'p6', parts0: 64, runStart: now, cycle: 40, P: 0.84, Q: 0.99, kwh: 19, hist: seg([['run', 75], ['setup', 25], ['run', 40]]), since: 140 },
        { id: 'ENT', name: t('Entgratmaschine', 'Deburring machine'), grp: 'E', model: t('Schleifband 1100 mm', 'Abrasive belt 1100 mm'), conn: 'sig', state: 'down', reason: 'belt', job: 'FA-26-1017', who: 'p5', parts0: 95, runStart: now, cycle: 15, P: 0.9, Q: 1, kwh: 22, hist: seg([['run', 120], ['idle', 20, 'staff'], ['run', 56]]), since: 196 },
        { id: 'SW', name: t('Schweissplatz 1', 'Welding bay 1'), grp: 'S', model: 'MIG/MAG · WIG', conn: 'tab', state: 'run', reason: null, job: 'FA-26-1014', who: 'p4', parts0: 18, runStart: now, cycle: 900, P: 0.95, Q: 0.98, kwh: 27, hist: seg([['run', 100], ['setup', 15], ['run', 85]]), since: 200 }
      ],
      maint: [
        { id: 'w4', m: 'ENT', task: t('Schleifband wechseln und Bandspannung prüfen', 'Replace abrasive belt and check belt tension'), every: t('bei Störung', 'on fault'), due: 0, done: false },
        { id: 'w5', m: 'B2', task: t('Sicherheitslichtvorhang prüfen', 'Check safety light curtain'), every: t('monatlich', 'monthly'), due: -2, done: false },
        { id: 'w1', m: 'L1', task: t('Schutzglas und Linse reinigen', 'Clean protective glass and lens'), every: t('alle 40 Betriebsstunden', 'every 40 operating hours'), due: 0.3, done: false },
        { id: 'w2', m: 'B1', task: t('Hydrauliköl und Filter prüfen', 'Check hydraulic oil and filter'), every: t('alle 500 Betriebsstunden', 'every 500 operating hours'), due: 3, done: false },
        { id: 'w3', m: 'L2', task: t('Jahreswartung durch den Hersteller', 'Annual service by the manufacturer'), every: t('jährlich', 'yearly'), due: 26, done: false }
      ],
      people: [
        { id: 'p1', name: 'João Silva', role: t('Laserbediener', 'Laser operator'), sk: { L: 3, E: 2, B: 1, S: 0, Q: 1, F: 0 }, st: 'in', since: 418, flex: 754, plan: ['F', 'F', 'F', 'F', 'F'] },
        { id: 'p2', name: 'Ana Ribeiro', role: t('Laserbedienerin', 'Laser operator'), sk: { L: 2, E: 2, B: 1, S: 0, Q: 1, F: 0 }, st: 'in', since: 422, flex: 125, plan: ['F', 'F', 'F', 'U', 'U'] },
        { id: 'p3', name: 'Marco Bernasconi', role: t('Abkanter', 'Press brake operator'), sk: { L: 1, E: 1, B: 3, S: 0, Q: 2, F: 2 }, st: 'in', since: 405, flex: 1810, plan: ['F', 'F', 'F', 'F', 'F'] },
        { id: 'p4', name: 'Luca Moretti', role: t('Schweisser', 'Welder'), sk: { L: 0, E: 1, B: 1, S: 3, Q: 1, F: 2 }, st: 'in', since: 415, flex: -95, cert: 23, plan: ['F', 'F', 'F', 'F', 'F'] },
        { id: 'p5', name: 'Carlos Ruiz', role: t('Mitarbeiter Produktion', 'Production worker'), sk: { L: 1, E: 3, B: 2, S: 0, Q: 1, F: 2 }, st: 'in', since: 420, flex: 340, plan: ['F', 'F', 'F', 'F', 'F'] },
        { id: 'p6', name: 'Daniel Meier', role: t('Werkstattleiter', 'Workshop manager'), lead: true, sk: { L: 2, E: 2, B: 2, S: 1, Q: 3, F: 2 }, st: 'in', since: 390, flex: 2210, plan: ['F', 'F', 'F', 'F', 'F'] },
        { id: 'p7', name: 'Sandra Kälin', role: t('Arbeitsvorbereitung', 'Job preparation'), office: true, sk: { L: 0, E: 0, B: 0, S: 0, Q: 2, F: 0 }, st: 'pause', since: 450, flex: 480, plan: ['F', 'F', 'F', 'F', 'F'] },
        { id: 'p8', name: 'Peter Huber', role: t('Lager und Versand', 'Stores and dispatch'), sk: { L: 0, E: 0, B: 0, S: 0, Q: 1, F: 3 }, st: 'abs', abs: 'U', flex: 0, plan: ['U', 'U', 'F', 'F', 'F'] },
        { id: 'p9', name: 'Tim Arnold', role: t('Lernender Metallbauer, 2. Lehrjahr', 'Apprentice metalworker, 2nd year'), sk: { L: 1, E: 1, B: 1, S: 1, Q: 0, F: 0 }, st: 'abs', abs: 'S', flex: 0, plan: ['S', 'F', 'F', 'S', 'F'] }
      ],
      leave: { pid: 'p3', from: 2, to: 4, status: 'open' },
      training: [
        { id: 'u1', title: t('Lasersicherheit', 'Laser safety'), every: t('jährlich', 'yearly'), who: ['p1', 'p2', 'p3', 'p5', 'p6', 'p9'], due: { p9: -3, p5: 12 }, planned: false },
        { id: 'u2', title: t('Abkantpresse sicher bedienen', 'Operating the press brake safely'), every: t('jährlich', 'yearly'), who: ['p3', 'p4', 'p5', 'p6', 'p9'], due: { p4: 20 }, planned: false },
        { id: 'u3', title: t('Stapler fahren und Lasten sichern', 'Forklift driving and securing loads'), every: t('alle 2 Jahre', 'every 2 years'), who: ['p3', 'p4', 'p5', 'p6', 'p8'], due: {}, planned: false },
        { id: 'u4', title: t('Erste Hilfe und Notfallorganisation', 'First aid and emergency organisation'), every: t('alle 2 Jahre', 'every 2 years'), who: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'], due: { p7: 30 }, planned: false }
      ],
      trained: {},
      fas: {
        'FA-26-1014': { au: 'AU-26-0382', cust: 'Muster Bau AG', text: t('Rahmen S235, geschweisst', 'Frames S235, welded'), due: 20, c: 0 },
        'FA-26-1015': { au: 'AU-26-0380', cust: 'Muster Bau AG', text: t('Bodenplatten S235, 8 mm', 'Base plates S235, 8 mm'), due: 40, c: 1, mat: 'BL-S235-8', ops: [['L', 3], ['B', 2]] },
        'FA-26-1016': { au: 'AU-26-0384', cust: 'Beispiel Maschinenbau AG', text: t('Halter 1.4301, 3 mm, 80 Stk.', 'Holders 1.4301, 3 mm, 80 pcs'), due: 30, c: 2, ops: [['L', 1.5], ['E', 1], ['B', 2]] },
        'FA-26-1017': { au: 'AU-26-0383', cust: 'Demo Fördertechnik AG', text: t('Gehäusedeckel AlMg3', 'Housing covers AlMg3'), due: 20, c: 3 },
        'FA-26-1018': { au: 'AU-26-0384', cust: 'Beispiel Maschinenbau AG', text: t('Winkel S235', 'Angles S235'), due: 30, c: 2 },
        'FA-26-1019': { au: 'AU-26-0387', cust: 'Demo Fördertechnik AG', text: t('Konsolen AlMg3', 'Brackets AlMg3'), due: 120, c: 4 },
        'FA-26-1020': { au: 'AU-26-0385', cust: 'Muster Bau AG', text: t('Treppenwangen S235', 'Stair stringers S235'), due: 50, c: 5 },
        'FA-26-1021': { au: 'AU-26-0386', cust: 'Beispiel Maschinenbau AG', text: t('Gehäuseteile 1.4301', 'Housing parts 1.4301'), due: -20, c: 6 },
        'FA-26-1008': { au: 'AU-26-0371', cust: 'Demo Fördertechnik AG', text: t('Kantteile AlMg3', 'Bent parts AlMg3'), due: 60, c: 4 },
        'FA-26-1009': { au: 'AU-26-0376', cust: 'Beispiel Maschinenbau AG', text: t('Lochbleche 1.4301', 'Perforated sheets 1.4301'), due: 25, c: 1 },
        'FA-26-1010': { au: 'AU-26-0377', cust: 'Muster Bau AG', text: t('Geländerpfosten S235', 'Railing posts S235'), due: 35, c: 3 },
        'FA-26-1011': { au: 'AU-26-0378', cust: 'Demo Fördertechnik AG', text: t('Abdeckbleche AlMg3', 'Cover sheets AlMg3'), due: 30, c: 0 },
        'FA-26-1012': { au: 'AU-26-0374', cust: 'Beispiel Apparatebau AG', text: t('Gehäuse 1.4301, geschweisst', 'Housings 1.4301, welded'), due: 45, c: 6 },
        'FA-26-1013': { au: 'AU-26-0375', cust: 'Muster Bau AG', text: t('Konsolen S235', 'Brackets S235'), due: 48, c: 5 }
      },
      plan: {
        blocks: [
          { id: 'b1', fa: 'FA-26-1014', op: 'S', m: 'SW', s: 0, d: 6, st: 'run' },
          { id: 'b2', fa: 'FA-26-1018', op: 'B', m: 'B1', s: 1.5, d: 3, st: 'run' },
          { id: 'b3', fa: 'FA-26-1020', op: 'L', m: 'L1', s: 2, d: 3, st: 'run' },
          { id: 'b4', fa: 'FA-26-1021', op: 'L', m: 'L2', s: 3, d: 2.5, st: 'run' },
          { id: 'b5', fa: 'FA-26-1017', op: 'E', m: 'ENT', s: 3, d: 2, st: 'run' },
          { id: 'b6', fa: 'FA-26-1020', op: 'B', m: 'B1', s: 5.5, d: 3, st: 'plan' },
          { id: 'b7', fa: 'FA-26-1021', op: 'B', m: 'B2', s: 6, d: 3, st: 'plan' },
          { id: 'b8', fa: 'FA-26-1020', op: 'S', m: 'SW', s: 10, d: 6, st: 'plan' },
          { id: 'b9', fa: 'FA-26-1019', op: 'L', m: 'L2', s: 11, d: 2, st: 'plan' },
          { id: 'b10', fa: 'FA-26-1019', op: 'B', m: 'B2', s: 22, d: 2, st: 'plan' },
          { id: 'b11', fa: 'FA-26-1009', op: 'L', m: 'L1', s: 5.5, d: 3.5, st: 'plan' },
          { id: 'b12', fa: 'FA-26-1009', op: 'E', m: 'ENT', s: 9.5, d: 1.5, st: 'plan' },
          { id: 'b13', fa: 'FA-26-1009', op: 'B', m: 'B2', s: 11.5, d: 2.5, st: 'plan' },
          { id: 'b14', fa: 'FA-26-1010', op: 'L', m: 'L2', s: 5.5, d: 3, st: 'plan' },
          { id: 'b15', fa: 'FA-26-1010', op: 'B', m: 'B1', s: 9, d: 3, st: 'plan' },
          { id: 'b16', fa: 'FA-26-1010', op: 'S', m: 'SW', s: 16, d: 6, st: 'plan' },
          { id: 'b17', fa: 'FA-26-1011', op: 'L', m: 'L1', s: 10, d: 3, st: 'plan' },
          { id: 'b18', fa: 'FA-26-1011', op: 'E', m: 'ENT', s: 13.5, d: 1.5, st: 'plan' },
          { id: 'b19', fa: 'FA-26-1011', op: 'B', m: 'B1', s: 15.5, d: 2.5, st: 'plan' },
          { id: 'b20', fa: 'FA-26-1012', op: 'L', m: 'L2', s: 13.5, d: 3.5, st: 'plan' },
          { id: 'b21', fa: 'FA-26-1012', op: 'E', m: 'ENT', s: 17.5, d: 1.5, st: 'plan' },
          { id: 'b22', fa: 'FA-26-1012', op: 'B', m: 'B2', s: 19.5, d: 2.5, st: 'plan' },
          { id: 'b23', fa: 'FA-26-1012', op: 'S', m: 'SW', s: 23, d: 5, st: 'plan' },
          { id: 'b24', fa: 'FA-26-1013', op: 'L', m: 'L1', s: 20, d: 3, st: 'plan' },
          { id: 'b25', fa: 'FA-26-1013', op: 'B', m: 'B1', s: 22, d: 2, st: 'plan' },
          { id: 'b26', fa: 'FA-26-1008', op: 'L', m: 'L2', s: 25, d: 3, st: 'plan' },
          { id: 'b27', fa: 'FA-26-1008', op: 'B', m: 'B2', s: 28.5, d: 2.5, st: 'plan' }
        ],
        queue: ['FA-26-1015', 'FA-26-1016']
      },
      rest: [
        { id: 'R-0412', mat: '1.4301', th: 3, l: 900, b: 620, loc: t('Restregal 2', 'Remnant rack 2'), age: 12, res: null },
        { id: 'R-0398', mat: 'S235', th: 5, l: 1400, b: 450, loc: t('Restregal 1', 'Remnant rack 1'), age: 30, res: null },
        { id: 'R-0421', mat: 'AlMg3', th: 2, l: 700, b: 500, loc: t('Restregal 3', 'Remnant rack 3'), age: 4, res: null },
        { id: 'R-0377', mat: '1.4301', th: 2, l: 1100, b: 300, loc: t('Restregal 2', 'Remnant rack 2'), age: 61, res: null }
      ],
      newRest: false,
      ship: [
        { ls: 'LS-26-0711', au: 'AU-26-0383', cust: 'Demo Fördertechnik AG', text: t('Gehäusedeckel AlMg3, 40 Stk.', 'Housing covers AlMg3, 40 pcs'), kg: 52, st: 'ready' },
        { ls: 'LS-26-0712', au: 'AU-26-0379', cust: 'Beispiel Maschinenbau AG', text: t('Winkel S235, 300 Stk.', 'Angles S235, 300 pcs'), kg: 410, st: 'pick' }
      ],
      fai: { fa: 'FA-26-1020', m: 'L1', who: 'p1', status: 'open', feats: [[t('Länge', 'Length'), 1240, -0.5, 0.5, 1240.2, 'mm'], [t('Breite', 'Width'), 280, -0.3, 0.3, 279.9, 'mm'], [t('Lochabstand A', 'Hole distance A'), 25, -0.2, 0.2, 25.31, 'mm'], [t('Bohrung Ø', 'Hole Ø'), 11, 0, 0.2, 11.08, 'mm']] },
      rk: [
        { nr: 'RK-26-007', cust: 'Muster Bau AG', au: 'AU-26-0372', part: t('Geländerpfosten S235', 'Railing posts S235'), issue: t('Kantwinkel bei 6 von 48 Pfosten ausser Toleranz', 'Bend angle out of tolerance on 6 of 48 posts'), cause: t('Oberwerkzeug verschlissen', 'Upper tool worn'), step: 6, owner: 'p6' },
        { nr: 'RK-26-008', cust: 'Beispiel Maschinenbau AG', au: 'AU-26-0379', part: t('Winkel S235', 'Angles S235'), issue: t('Kratzer auf der Sichtseite', 'Scratches on the visible side'), cause: t('in Abklärung', 'under investigation'), step: 3, owner: 'p3' }
      ],
      gauges: [
        { id: 'MS-04', name: t('Messschieber 150 mm', 'Calliper 150 mm'), due: 4 },
        { id: 'WM-02', name: t('Digitaler Winkelmesser', 'Digital protractor'), due: 92 },
        { id: 'LG-11', name: t('Lehrdorn Ø 11 H11', 'Plug gauge Ø 11 H11'), due: -1 }
      ]
    };
  }

  // ---------------------------------------------------------------- Ansichten
  function create(c) {
    var h = c.h, t = c.t, UP = c.UP, ui = c.ui;
    function D() { return c.D(); }
    function O() { return c.D().ops; }
    function P() { return O().plan; }
    function save() { c.save(); }
    function log(text, way) { c.log(text, way || 'api'); }
    var REDUCE = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function clock() { return Math.max(START, Math.min(END, START + (Date.now() - O().clock0) / 60000)); }
    function nowH() { return clock() / 60; }
    function hhmm(min) { return UP.hhmm(420 + Math.round(min)); }
    function pct(x) { return Math.round(x * 100) + ' %'; }
    function chf0(n) { return 'CHF ' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\''); }
    function card(l, v, s, cls) { return h('div', { class: 'a-card ' + (cls || '') }, h('div', { class: 'l', text: l }), h('div', { class: 'v', text: v }), s ? h('div', { class: 's', text: s }) : null); }
    function tabs(key, list) {
      return h('div', { class: 'g-tabs', role: 'tablist' }, list.map(function (x) {
        return h('button', { type: 'button', role: 'tab', 'aria-selected': ui[key] === x[0] ? 'true' : 'false', onclick: function () { ui[key] = x[0]; c.render(); } }, x[1], x[2] ? h('span', { class: 'g-tab-n', text: String(x[2]) }) : null);
      }));
    }
    function hint(text, acts) { return h('div', { class: 'g-hint' }, h('span', { class: 'g-hint-i', 'aria-hidden': 'true', text: 'A' }), h('div', null, h('p', { text: text }), acts ? h('div', { class: 'g-hint-a' }, acts) : null)); }
    function workdays() {
      var d = new Date(); d.setHours(0, 0, 0, 0);
      var out = [];
      while (out.length < 5) { if (d.getDay() !== 0 && d.getDay() !== 6) out.push(new Date(d.getTime())); d.setDate(d.getDate() + 1); }
      return out;
    }
    var WD = workdays();
    function dayName(i) { return UP.DAYS[WD[i].getDay()]; }
    function at(x) {
      if (x < 0) return t('überfällig', 'overdue');
      var d = Math.floor(x / DAYH + 1e-9), m = Math.round((x - d * DAYH) * 60);
      if (d >= 5) return t('nach Fr', 'later');
      return dayName(d) + ' ' + UP.hhmm(420 + m);
    }
    function dur(x) { var m = Math.round(x * 60); return Math.floor(m / 60) + ':' + UP.pad(m % 60) + ' h'; }

    var MST = { run: t('Läuft', 'Running'), setup: t('Rüsten', 'Setup'), idle: t('Steht', 'Idle'), down: t('Störung', 'Fault'), maint: t('Wartung', 'Maintenance') };
    var REASON = { mat: t('Material fehlt', 'Material missing'), crane: t('Warten auf Kran', 'Waiting for crane'), prog: t('Programm fehlt', 'Program missing'), staff: t('Kein Personal', 'No staff'), qual: t('Qualität klären', 'Quality check'), belt: t('Schleifband gerissen', 'Abrasive belt torn'), other: t('Sonstige Störung', 'Other fault') };
    var CONN = { opc: 'OPC UA', sig: t('Signal-Nachrüstung', 'Signal retrofit'), tab: t('Tablet-Erfassung', 'Tablet entry') };
    var SK = [['L', t('Laser', 'Laser')], ['B', t('Abkanten', 'Bending')], ['E', t('Entgraten', 'Deburring')], ['S', t('Schweissen', 'Welding')], ['Q', t('Prüfen', 'Inspection')], ['F', t('Stapler', 'Forklift')]];
    var OPN = { L: t('Laser', 'Laser'), B: t('Abkanten', 'Bending'), E: t('Entgraten', 'Deburring'), S: t('Schweissen', 'Welding') };
    var LV = [t('nicht geschult', 'not trained'), t('mit Begleitung', 'with supervision'), t('selbständig', 'independent'), t('Experte, bildet aus', 'expert, trains others')];
    var CODE = { F: t('Arbeit', 'Work'), U: t('Ferien', 'Holiday'), S: t('Schule', 'School'), A: t('Absenz', 'Absence') };
    var SEQ = ['L', 'E', 'B', 'S'];

    function mach(id) { return O().machines.filter(function (m) { return m.id === id; })[0]; }
    function person(id) { return O().people.filter(function (p) { return p.id === id; })[0]; }
    function item(nr) { return D().erp.items.filter(function (i) { return i.nr === nr; })[0]; }
    function fa(id) { return O().fas[id]; }

    // ---------------------------------------------------------------- Maschinen: Zustand und Kennzahlen
    function segs(m) { return m.hist.concat([[m.state, m.since, Math.max(m.since, clock()), m.reason]]); }
    function stateMin(m, s) { return segs(m).reduce(function (a, x) { return a + (x[0] === s ? Math.max(0, x[2] - x[1]) : 0); }, 0); }
    function oee(m) { var A = stateMin(m, 'run') / clock(); return { A: A, P: m.P, Q: m.Q, v: A * m.P * m.Q }; }
    function parts(m) { return m.parts0 + (m.state === 'run' ? Math.max(0, Math.floor((Date.now() - m.runStart) / 1000 / m.cycle)) : 0); }
    function setState(m, s, reason) {
      var cl = clock();
      if (m.state === 'run') m.parts0 = parts(m);
      m.hist.push([m.state, m.since, cl, m.reason]);
      m.state = s; m.reason = reason || null; m.since = cl;
      if (s === 'run') m.runStart = Date.now();
    }
    function avgOee() { var ms = O().machines.filter(function (m) { return m.conn !== 'tab'; }); return ms.reduce(function (a, m) { return a + oee(m).v; }, 0) / ms.length; }
    function losses() {
      var out = {};
      O().machines.forEach(function (m) { segs(m).forEach(function (x) { if (x[0] === 'run') return; var k = x[0] === 'setup' ? 'setup' : x[0] === 'down' ? 'down' : (x[3] || 'other'); out[k] = (out[k] || 0) + Math.max(0, x[2] - x[1]); }); });
      return Object.keys(out).map(function (k) { return [k, out[k]]; }).sort(function (a, b) { return b[1] - a[1]; });
    }
    var LOSS = { setup: t('Rüsten', 'Setup'), down: t('Störung', 'Fault'), mat: REASON.mat, crane: REASON.crane, prog: REASON.prog, staff: REASON.staff, qual: REASON.qual, other: t('Sonstiges', 'Other') };

    // ---------------------------------------------------------------- Personal: Einsatz pro Tag
    var ORDER = ['L1', 'B1', 'SW', 'ENT', 'L2', 'B2'];
    function assign(day, plans) {
      var used = {}, out = {};
      ORDER.forEach(function (mid) {
        var g = mach(mid).grp, best = null, bs = -1e9;
        O().people.forEach(function (p) {
          var code = (plans && plans[p.id] ? plans[p.id] : p.plan)[day];
          if (used[p.id] || code !== 'F') return;
          var lv = p.sk[g] || 0;
          if (lv < 2) return;
          var tot = Object.keys(p.sk).reduce(function (a, k) { return a + p.sk[k]; }, 0);
          var sc = lv * 10 - tot - (p.lead ? 6 : 0);
          if (sc > bs) { bs = sc; best = p; }
        });
        if (best) used[best.id] = true;
        out[mid] = best ? best.id : null;
      });
      return out;
    }

    // ---------------------------------------------------------------- Plantafel: Prüfungen und Einplanung
    function sync() {
      var d = D();
      if (d.done && d.done.avor && !O().fas[d.done.avor]) {
        O().fas[d.done.avor] = { au: d.done.order || '', cust: c.CUST.name, text: c.PART.name + ', ' + c.PART.qty + t(' Stk.', ' pcs'), due: 150, c: 7, ops: [['L', 1], ['E', 1], ['B', 1.5]], fromFlow: true };
        P().queue.push(d.done.avor);
        log(t('Fertigungsauftrag ', 'Production order ') + d.done.avor + t(' liegt im Vorrat der Plantafel', ' is in the planning queue'), 'api');
      }
    }
    function blocksOf(id) { return P().blocks.filter(function (b) { return b.fa === id; }); }
    function bySeq(a, b) { return SEQ.indexOf(a.op) - SEQ.indexOf(b.op); }
    function issues() {
      var out = { overlap: {}, seq: {}, staff: {}, down: {}, late: {} };
      O().machines.forEach(function (m) {
        var bs = P().blocks.filter(function (b) { return b.m === m.id; }).sort(function (a, b) { return a.s - b.s; });
        for (var i = 1; i < bs.length; i++) if (bs[i].s < bs[i - 1].s + bs[i - 1].d - 1e-6) { out.overlap[bs[i].id] = true; out.overlap[bs[i - 1].id] = true; }
        if (m.state === 'down') bs.forEach(function (b) { if (b.s < DAYH * (Math.floor(nowH() / DAYH) + 1)) out.down[b.id] = true; });
      });
      Object.keys(O().fas).forEach(function (id) {
        var bs = blocksOf(id).sort(bySeq);
        for (var i = 1; i < bs.length; i++) if (bs[i].s < bs[i - 1].s + bs[i - 1].d - 1e-6) out.seq[bs[i].id] = true;
        if (bs.length) { var end = Math.max.apply(null, bs.map(function (b) { return b.s + b.d; })); if (end > fa(id).due) out.late[id] = end - fa(id).due; }
      });
      var asg = [0, 1, 2, 3, 4].map(function (d) { return assign(d); });
      P().blocks.forEach(function (b) {
        for (var d = Math.max(1, Math.floor(b.s / DAYH)); d <= Math.floor((b.s + b.d - 0.01) / DAYH) && d < 5; d++) if (!asg[d][b.m]) out.staff[b.id] = d;
      });
      out.conflicts = Object.keys(out.overlap).length + Object.keys(out.seq).length;
      return out;
    }
    function matReady(id) {
      var f = fa(id);
      if (!f.mat) return 0;
      var it = item(f.mat);
      if (it && it.stock - it.res > 0) return 0;
      return it && it.ordered ? DAYH : null;
    }
    function freeSlot(mid, from, d) {
      var s = from, m = mach(mid);
      if (m.state === 'down') s = Math.max(s, DAYH * (Math.floor(nowH() / DAYH) + 1));
      var bs = P().blocks.filter(function (b) { return b.m === mid; }).sort(function (a, b) { return a.s - b.s; });
      for (var i = 0; i < bs.length; i++) { if (s + d <= bs[i].s + 1e-6) break; if (bs[i].s + bs[i].d > s) s = bs[i].s + bs[i].d; }
      return s;
    }
    function planFA(id) {
      var f = fa(id), mr = matReady(id);
      if (mr === null) return null;
      var prev = Math.max(Math.ceil(nowH() * 2) / 2, mr), placed = [];
      f.ops.forEach(function (op) {
        var best = null;
        O().machines.filter(function (m) { return m.grp === op[0]; }).forEach(function (m) { var s = freeSlot(m.id, prev, op[1]); if (!best || s < best.s) best = { m: m.id, s: s }; });
        var b = { id: 'b' + UP.uid(), fa: id, op: op[0], m: best.m, s: best.s, d: op[1], st: 'plan', fresh: true };
        P().blocks.push(b); placed.push(b); prev = best.s + op[1];
      });
      P().queue = P().queue.filter(function (x) { return x !== id; });
      var end = prev, ok = end <= f.due;
      log(id + t(' eingeplant: ', ' scheduled: ') + placed.map(function (b) { return mach(b.m).name + ' ' + at(b.s); }).join(', ') + t('. Ende ', '. Finish ') + at(end) + (ok ? t(', Liefertermin eingehalten', ', delivery date kept') : t(', Liefertermin gefährdet', ', delivery date at risk')), 'api');
      return placed;
    }
    function resolve() {
      var moved = 0;
      for (var it = 0; it < 8; it++) {
        var changed = false;
        Object.keys(O().fas).forEach(function (id) {
          var bs = blocksOf(id).sort(bySeq);
          for (var i = 1; i < bs.length; i++) { var min = bs[i - 1].s + bs[i - 1].d; if (bs[i].st === 'plan' && bs[i].s < min - 1e-6) { bs[i].s = min; changed = true; moved++; } }
        });
        O().machines.forEach(function (m) {
          var bs = P().blocks.filter(function (b) { return b.m === m.id; }).sort(function (a, b) { return a.s - b.s; });
          var nd = DAYH * (Math.floor(nowH() / DAYH) + 1);
          bs.forEach(function (b) { if (m.state === 'down' && b.st === 'plan' && b.s < nd) { b.s = nd; changed = true; moved++; } });
          bs.sort(function (a, b) { return a.s - b.s; });
          for (var i = 1; i < bs.length; i++) { var end = bs[i - 1].s + bs[i - 1].d; if (bs[i].st === 'plan' && bs[i].s < end - 1e-6) { bs[i].s = end; changed = true; moved++; } }
        });
        if (!changed) break;
      }
      return moved;
    }
    function onDown(ev, b) {
      if (b.st !== 'plan' || (ev.button && ev.button > 0)) return;
      var el = ev.currentTarget, track = el.parentNode, W = track.getBoundingClientRect().width, pxh = W / HOURS, x0 = ev.clientX, y0 = ev.clientY, moved = false;
      try { el.setPointerCapture(ev.pointerId); } catch (e) { /* ignorieren */ }
      ui.drag = true;
      function mv(e) { var dx = e.clientX - x0, dy = e.clientY - y0; if (Math.abs(dx) + Math.abs(dy) > 5) moved = true; if (moved) { el.classList.add('g-dragging'); el.style.transform = 'translate(' + dx + 'px,' + dy + 'px)'; } }
      function up(e) {
        el.removeEventListener('pointermove', mv); el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up);
        ui.drag = false;
        if (!moved) { ui.psel = b.id; c.render(); return; }
        ev.preventDefault();
        el.style.pointerEvents = 'none';
        var under = document.elementFromPoint(e.clientX, e.clientY), row = under && under.closest ? under.closest('[data-row]') : null;
        var ns = Math.round((b.s + (e.clientX - x0) / pxh) * 2) / 2;
        ns = Math.max(Math.ceil(nowH() * 2) / 2, Math.min(HOURS - b.d, ns));
        ui.pmsg = '';
        if (row && row.getAttribute('data-row') !== b.m) {
          var nm = row.getAttribute('data-row');
          if (mach(nm).grp === b.op) b.m = nm;
          else ui.pmsg = OPN[b.op] + t(' ist auf ', ' is not possible on ') + mach(nm).name + t(' nicht möglich.', '.');
        }
        b.s = ns; ui.psel = b.id; b.fresh = false;
        log(t('Plantafel: ', 'Planning board: ') + b.fa + ' ' + OPN[b.op] + t(' verschoben auf ', ' moved to ') + mach(b.m).name + ', ' + at(b.s), 'user');
        save(); c.render();
      }
      el.addEventListener('pointermove', mv); el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    }
    function freeCap(g) {
      var ms = O().machines.filter(function (m) { return m.grp === g; });
      var used = P().blocks.filter(function (b) { return mach(b.m).grp === g; }).reduce(function (a, b) { return a + Math.max(0, Math.min(HOURS, b.s + b.d) - Math.max(DAYH, b.s)); }, 0);
      return ms.length * (HOURS - DAYH) - used;
    }

    function vPlan() {
      sync();
      var iss = issues(), nh = nowH(), asg = [0, 1, 2, 3, 4].map(function (d) { return assign(d); });
      var sel = P().blocks.filter(function (b) { return b.id === ui.psel; })[0];
      var warn = [];
      if (iss.conflicts) warn.push(hint(t(iss.conflicts + (iss.conflicts === 1 ? ' Konflikt' : ' Konflikte') + ': Arbeitsgänge überschneiden sich oder liegen in der falschen Reihenfolge.', iss.conflicts + (iss.conflicts === 1 ? ' conflict' : ' conflicts') + ': operations overlap or are in the wrong order.'), [h('button', { type: 'button', class: 'a-btn s p', onclick: function () { var n = resolve(); log(t('Plantafel: Konflikte gelöst, ', 'Planning board: conflicts resolved, ') + n + t(' Arbeitsgänge verschoben', ' operations moved'), 'api'); save(); c.render(); }, text: t('Konflikte lösen', 'Resolve conflicts') })]));
      Object.keys(iss.late).forEach(function (id) { warn.push(hint(id + ' (' + fa(id).au + ', ' + fa(id).cust + t(') endet nach dem Liefertermin. ', ') finishes after the delivery date. ') + (fa(id).due < 0 ? t('Der Auftrag ist bereits überfällig. Der Kunde wurde über den neuen Termin informiert.', 'The order is already overdue. The customer has been told the new date.') : t('Verzug: ', 'Delay: ') + dur(iss.late[id]) + '.'))); });
      var staffed = {}; Object.keys(iss.staff).forEach(function (bid) { var b = P().blocks.filter(function (x) { return x.id === bid; })[0]; staffed[b.m + iss.staff[bid]] = [b.m, iss.staff[bid]]; });
      Object.keys(staffed).forEach(function (k) { var x = staffed[k]; warn.push(hint(mach(x[0]).name + t(' hat am ', ' has no qualified person on ') + dayName(x[1]) + t(' keine qualifizierte Person, ist aber verplant.', ', but work is planned.'), [h('button', { type: 'button', class: 'a-btn s', onclick: function () { ui.view = 'people'; ui.ptab = 'shifts'; c.render(); }, text: t('Zum Schichtplan', 'Open shift plan') })])); });
      var nd = Object.keys(iss.down).filter(function (bid) { return P().blocks.some(function (b) { return b.id === bid && b.st === 'plan'; }); }).length;
      if (nd) warn.push(hint(t('Entgratmaschine gestört: ', 'Deburring machine faulty: ') + nd + (nd === 1 ? t(' geplanter Arbeitsgang betroffen. «Konflikte lösen» verschiebt ihn auf morgen früh.', ' planned operation affected. «Resolve conflicts» moves it to tomorrow morning.') : t(' geplante Arbeitsgänge betroffen. «Konflikte lösen» verschiebt sie auf morgen früh.', ' planned operations affected. «Resolve conflicts» moves them to tomorrow morning.')), [h('button', { type: 'button', class: 'a-btn s', onclick: function () { ui.view = 'machines'; ui.msel = 'ENT'; c.render(); }, text: t('Zur Maschine', 'Open machine') })]));
      var queue = P().queue.map(function (id) {
        var f = fa(id), mr = matReady(id);
        return h('div', { class: 'g-q g-c' + f.c },
          h('div', { class: 'g-q-h' }, h('b', { text: id }), f.fromFlow ? h('span', { class: 'a-badge info', text: t('neu aus dem Ablauf', 'new from the process') }) : null),
          h('p', { text: f.text + ' · ' + f.cust }),
          h('div', { class: 'g-chips' }, f.ops.map(function (o) { return h('span', { class: 'a-tag', text: OPN[o[0]] + ' ' + dur(o[1]) }); })),
          h('p', { class: 'a-sub', text: t('Liefertermin ', 'Delivery ') + at(f.due) + (mr === null ? t(' · Material fehlt, nicht bestellt', ' · material missing, not ordered') : mr > 0 ? t(' · Material kommt morgen', ' · material arrives tomorrow') : '') }),
          h('button', { type: 'button', class: 'a-btn s p', disabled: mr === null, onclick: function () { planFA(id); save(); c.render(); }, text: t('Einplanen', 'Schedule') }));
      });
      var head = h('div', { class: 'g-pt-row g-pt-head' }, h('div', { class: 'g-pt-lab' }, h('small', { text: t('Maschine', 'Machine') })),
        h('div', { class: 'g-pt-days' }, WD.map(function (d) { return h('div', null, h('b', { text: UP.DAYS[d.getDay()] + ' ' + UP.pad(d.getDate()) + '.' + UP.pad(d.getMonth() + 1) + '.' }), h('small', { text: '07 · 12 · 17' })); })));
      var rows = O().machines.map(function (m) {
        var bs = P().blocks.filter(function (b) { return b.m === m.id; });
        var load = bs.reduce(function (a, b) { return a + Math.max(0, Math.min(HOURS, b.s + b.d) - Math.max(nh, b.s)); }, 0) / (HOURS - nh);
        return h('div', { class: 'g-pt-row', 'data-row': m.id },
          h('div', { class: 'g-pt-lab' }, h('b', { text: m.name }), h('small', { text: pct(load) + t(' verplant', ' planned') }), m.state === 'down' ? h('span', { class: 'a-badge no', text: MST.down }) : null),
          h('div', { class: 'g-pt-track' },
            [0, 1, 2, 3, 4].map(function (d) { var pid = d === 0 ? m.who : asg[d][m.id], p = pid && person(pid); return h('span', { class: 'g-pt-who' + (p ? '' : ' none'), 'data-l': String(d * 20), title: p ? p.name : '', text: p ? UP.initials(p.name) : t('unbesetzt', 'unstaffed') }); }),
            bs.map(function (b) {
              var f = fa(b.fa), bad = iss.overlap[b.id] || iss.seq[b.id], warnB = iss.staff[b.id] !== undefined || iss.down[b.id] || iss.late[b.fa];
              return h('button', { type: 'button', class: 'g-pb g-c' + f.c + (b.st === 'run' ? ' run' : ' plan') + (bad ? ' bad' : warnB ? ' warn' : '') + (ui.psel === b.id ? ' sel' : '') + (b.fresh ? ' fresh' : ''),
                'data-l': String(b.s / HOURS * 100), 'data-w': String(b.d / HOURS * 100), 'aria-label': b.fa + ', ' + OPN[b.op] + ', ' + mach(b.m).name + ', ' + at(b.s) + t(' bis ', ' to ') + at(b.s + b.d),
                onpointerdown: function (ev) { onDown(ev, b); }, onkeydown: function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); ui.psel = b.id; c.render(); } } },
                h('span', { text: b.fa.slice(6) }), h('span', { text: OPN[b.op] }));
            }),
            h('i', { class: 'g-pt-now', 'data-l': String(nh / HOURS * 100), 'aria-hidden': 'true' })));
      });
      var detail = null;
      if (sel) {
        var sf = fa(sel.fa), grpM = O().machines.filter(function (m) { return m.grp === sel.op; });
        var pid = Math.floor(sel.s / DAYH) === 0 ? mach(sel.m).who : (asg[Math.floor(sel.s / DAYH)] || {})[sel.m];
        detail = h('div', { class: 'a-panel g-pd' },
          h('div', { class: 'g-pd-h' }, h('div', null, h('h3', { text: sel.fa + ' · ' + OPN[sel.op] }), h('p', { class: 'a-sub', text: sf.text + ' · ' + sf.au + ' · ' + sf.cust })), h('button', { type: 'button', class: 'a-x', 'aria-label': t('Schliessen', 'Close'), onclick: function () { ui.psel = null; c.render(); }, text: '×' })),
          h('dl', { class: 'g-dl' },
            [[t('Maschine', 'Machine'), mach(sel.m).name], [t('Beginn', 'Start'), at(sel.s)], [t('Ende', 'End'), at(sel.s + sel.d)], [t('Dauer', 'Duration'), dur(sel.d)], [t('Person', 'Person'), pid ? person(pid).name : t('unbesetzt', 'unstaffed')], [t('Liefertermin', 'Delivery date'), at(sf.due)]].map(function (r) { return h('div', null, h('dt', { text: r[0] }), h('dd', { text: r[1] })); })),
          ui.pmsg ? h('p', { class: 'a-msg err', text: ui.pmsg }) : null,
          sel.st === 'run' ? h('p', { class: 'g-note', text: t('Dieser Arbeitsgang läuft bereits und ist fixiert.', 'This operation is already running and is fixed.') })
            : h('div', { class: 'g-pd-a' },
              h('button', { type: 'button', class: 'a-btn s', onclick: function () { sel.s = Math.max(Math.ceil(nowH() * 2) / 2, sel.s - 1); save(); c.render(); }, text: t('1 h früher', '1 h earlier') }),
              h('button', { type: 'button', class: 'a-btn s', onclick: function () { sel.s = Math.min(HOURS - sel.d, sel.s + 1); save(); c.render(); }, text: t('1 h später', '1 h later') }),
              grpM.length > 1 ? h('label', { class: 'a-field g-inl' }, t('Maschine', 'Machine'), h('select', { onchange: function (ev) { sel.m = ev.target.value; log(t('Plantafel: ', 'Planning board: ') + sel.fa + t(' auf ', ' moved to ') + mach(sel.m).name + t(' verschoben', ''), 'user'); save(); c.render(); } }, grpM.map(function (m) { return h('option', { value: m.id, selected: m.id === sel.m, text: m.name }); }))) : null,
              h('button', { type: 'button', class: 'a-btn s d', onclick: function () { P().blocks = P().blocks.filter(function (b) { return !(b.fa === sel.fa && b.st === 'plan'); }); if (sf.ops && P().queue.indexOf(sel.fa) < 0) P().queue.push(sel.fa); ui.psel = null; save(); c.render(); }, text: t('Ausplanen', 'Unschedule') })));
      }
      var dues = Object.keys(O().fas).filter(function (id) { return blocksOf(id).length; }).map(function (id) {
        var bs = blocksOf(id), end = Math.max.apply(null, bs.map(function (b) { return b.s + b.d; })), f = fa(id), ok = end <= f.due;
        return h('tr', null, h('td', null, h('b', { text: id }), h('div', { class: 'a-sub', text: f.text })), h('td', { text: f.cust }), h('td', { text: at(end) }), h('td', { text: at(f.due) }), h('td', null, h('span', { class: 'a-badge ' + (ok ? 'ok' : 'no'), text: ok ? t('Puffer ', 'Buffer ') + dur(f.due - end) : t('Verzug', 'Late') })));
      });
      return h('div', null,
        h('p', { class: 'a-sub', text: t('Alle Fertigungsaufträge auf den Maschinen der nächsten fünf Arbeitstage. Ziehen Sie einen Arbeitsgang mit der Maus, oder wählen Sie ihn an und verschieben Sie ihn mit den Knöpfen. ARGUS prüft Reihenfolge, Überschneidungen, Personal, Material und Liefertermine.', 'All production orders on the machines over the next five working days. Drag an operation with the mouse, or select it and move it with the buttons. ARGUS checks sequence, overlaps, staff, material and delivery dates.') }),
        queue.length ? h('div', { class: 'g-qwrap' }, h('div', { class: 'g-qhead' }, h('h3', { text: t('Vorrat: noch nicht eingeplant', 'Queue: not yet scheduled') }), h('button', { type: 'button', class: 'a-btn s', onclick: function () { var ids = P().queue.slice(); ids.forEach(function (id) { planFA(id); }); save(); c.render(); }, text: t('Alle automatisch einplanen', 'Schedule all automatically') })), h('div', { class: 'g-qs' }, queue)) : null,
        warn.length ? h('div', { class: 'g-hints' }, warn) : h('div', { class: 'g-hints' }, hint(t('Keine Konflikte. Alle Arbeitsgänge sind besetzt und in der richtigen Reihenfolge.', 'No conflicts. All operations are staffed and in the right order.'))),
        h('div', { class: 'g-pt-scroll' }, h('div', { class: 'g-pt' }, head, rows)),
        h('div', { class: 'g-legend' }, h('span', null, h('i', { class: 'lg-run' }), t('läuft', 'running')), h('span', null, h('i', { class: 'lg-plan' }), t('geplant', 'planned')), h('span', null, h('i', { class: 'lg-bad' }), t('Konflikt', 'conflict')), h('span', null, h('i', { class: 'lg-warn' }), t('Hinweis', 'warning')), h('span', null, h('i', { class: 'lg-now' }), t('jetzt', 'now'))),
        detail,
        h('div', { class: 'a-grid2' },
          h('div', { class: 'a-panel' }, h('h3', { text: t('Liefertermine', 'Delivery dates') }), h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, [t('Auftrag', 'Order'), t('Kunde', 'Customer'), t('Fertig', 'Finished'), t('Termin', 'Due'), t('Status', 'Status')].map(function (x) { return h('th', { text: x }); }))), h('tbody', null, dues)))),
          h('div', { class: 'a-panel' }, h('h3', { text: t('Freie Kapazität ab morgen', 'Free capacity from tomorrow') }),
            h('ul', { class: 'g-cap2' }, SEQ.map(function (g) { var ms = O().machines.filter(function (m) { return m.grp === g; }), tot = ms.length * (HOURS - DAYH), fr = freeCap(g); return h('li', null, h('span', { text: OPN[g] }), h('div', { class: 'g-track' }, h('span', { class: 'g-b1', 'data-w': String(Math.round((1 - fr / tot) * 100)) })), h('b', { text: dur(fr) + t(' frei', ' free') })); })),
            h('p', { class: 'g-note', text: t('KAIROS nutzt diese freie Kapazität für Sofortpreise und Liefertermine auf der Website. So verspricht der Verkauf nur, was die Werkstatt auch schafft.', 'KAIROS uses this free capacity for instant prices and delivery dates on the website. So sales only promises what the workshop can deliver.') }))));
    }

    // ---------------------------------------------------------------- Maschinen
    function timeline(m, big) {
      var cl = clock();
      return h('div', { class: 'g-tl' + (big ? ' big' : ''), role: 'img', 'aria-label': t('Zeitstrahl ', 'Timeline ') + m.name + t(' heute', ' today') },
        segs(m).map(function (x) { return h('i', { class: 's-' + x[0], 'data-l': String(x[1] / END * 100), 'data-w': String(Math.max(0, Math.min(x[2], cl) - x[1]) / END * 100), title: MST[x[0]] + ' ' + hhmm(x[1]) + t(' bis ', ' to ') + hhmm(x[2]) + (x[3] ? ', ' + REASON[x[3]] : '') }); }),
        h('b', { class: 'g-tl-now', 'data-l': String(cl / END * 100) }));
    }
    function machineCard(m) {
      var o = oee(m), p = m.who && person(m.who), f = m.job && fa(m.job);
      return h('button', { type: 'button', class: 'g-mc s-' + m.state + (ui.msel === m.id ? ' sel' : ''), 'aria-pressed': ui.msel === m.id ? 'true' : 'false', onclick: function () { ui.msel = ui.msel === m.id ? null : m.id; c.render(); } },
        h('div', { class: 'g-mc-h' }, h('div', null, h('b', { text: m.name }), h('small', { text: m.model })), h('span', { class: 'g-ms s-' + m.state }, h('i', { 'aria-hidden': 'true' }), MST[m.state])),
        h('div', { class: 'g-mc-m' },
          h('div', { class: 'g-oee' }, h('span', { text: m.conn === 'tab' ? t('Auslastung', 'Utilisation') : 'OEE' }), h('b', { text: pct(m.conn === 'tab' ? o.A : o.v) })),
          h('div', { class: 'g-mc-k' }, h('span', null, t('Teile heute ', 'Parts today '), h('b', { text: String(parts(m)) })), h('span', null, t('seit ', 'since '), h('b', { text: hhmm(m.since) }), m.reason ? ' · ' + REASON[m.reason] : ''))),
        timeline(m),
        h('div', { class: 'g-mc-f' }, h('span', { text: f ? m.job + ' · ' + f.text : t('kein Auftrag', 'no job') }), h('span', { text: p ? p.name : '' }), h('span', { class: 'a-tag', text: CONN[m.conn] })));
    }
    function machineDetail(m) {
      var o = oee(m), tot = clock(), rows = ['run', 'setup', 'idle', 'down'].map(function (s) { return [MST[s], stateMin(m, s)]; });
      var acts = [];
      if (m.state === 'down') {
        acts.push(h('button', { type: 'button', class: 'a-btn s', disabled: !!m.tech, onclick: function () { m.tech = true; log(t('Störung ', 'Fault on ') + m.name + t(': Instandhaltung informiert, Ersatzband ist am Lager', ': maintenance informed, spare belt is in stock'), 'api'); save(); c.render(); }, text: m.tech ? t('Technik informiert', 'Maintenance informed') : t('Instandhaltung informieren', 'Inform maintenance') }));
        acts.push(h('button', { type: 'button', class: 'a-btn s p', onclick: function () { setState(m, 'run'); O().maint.forEach(function (w) { if (w.m === m.id && w.due === 0) w.done = true; }); log(m.name + t(': Störung behoben, Maschine läuft wieder', ': fault fixed, machine running again'), 'user'); save(); c.render(); }, text: t('Störung behoben', 'Fault fixed') }));
      } else if (m.state === 'setup') acts.push(h('button', { type: 'button', class: 'a-btn s p', onclick: function () { setState(m, 'run'); log(m.name + t(': Rüsten beendet', ': setup finished'), 'api'); save(); c.render(); }, text: t('Rüsten beendet', 'Setup finished') }));
      else if (m.state === 'idle') acts.push(h('button', { type: 'button', class: 'a-btn s p', onclick: function () { setState(m, 'run'); log(m.name + t(': Arbeit aufgenommen', ': work resumed'), 'user'); save(); c.render(); }, text: t('Arbeit aufnehmen', 'Resume work') }));
      else acts.push(h('label', { class: 'a-field g-inl' }, t('Stillstand melden', 'Report stop'), h('select', { onchange: function (ev) { if (!ev.target.value) return; var r = ev.target.value; setState(m, r === 'other' ? 'down' : 'idle', r); log(m.name + t(' steht: ', ' stopped: ') + REASON[r], 'user'); save(); c.render(); } }, h('option', { value: '', text: t('Grund wählen', 'Choose reason') }), ['mat', 'crane', 'prog', 'staff', 'qual', 'other'].map(function (r) { return h('option', { value: r, text: REASON[r] }); }))));
      return h('div', { class: 'a-panel g-md' },
        h('div', { class: 'g-pd-h' }, h('div', null, h('h3', { text: m.name + ' · ' + MST[m.state] + (m.reason ? ': ' + REASON[m.reason] : '') }), h('p', { class: 'a-sub', text: m.model + ' · ' + t('Daten über ', 'data via ') + CONN[m.conn] })), h('button', { type: 'button', class: 'a-x', 'aria-label': t('Schliessen', 'Close'), onclick: function () { ui.msel = null; c.render(); }, text: '×' })),
        timeline(m, true),
        h('div', { class: 'g-tl-ax', 'aria-hidden': 'true' }, [0, 2, 4, 6, 8, 10].map(function (x) { return h('span', { 'data-l': String(x * 10), text: UP.pad(7 + x) + ':00' }); })),
        h('div', { class: 'a-row g-mt' }, card('OEE', m.conn === 'tab' ? '–' : pct(o.v), m.conn === 'tab' ? t('Handarbeitsplatz', 'manual workstation') : t('Verfügbarkeit × Leistung × Qualität', 'availability × performance × quality')), card(t('Verfügbarkeit', 'Availability'), pct(o.A)), card(t('Leistung', 'Performance'), pct(o.P)), card(t('Qualität', 'Quality'), pct(o.Q)), card(t('Energie heute', 'Energy today'), m.kwh + ' kWh')),
        h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, h('th', { text: t('Zustand', 'State') }), h('th', { class: 'r', text: t('Zeit heute', 'Time today') }), h('th', { class: 'r', text: t('Anteil', 'Share') }))),
          h('tbody', null, rows.map(function (r) { return h('tr', null, h('td', { text: r[0] }), h('td', { class: 'r', text: UP.hm(r[1]) + ' h' }), h('td', { class: 'r', text: pct(r[1] / tot) })); })))),
        h('div', { class: 'g-pd-a g-mt' }, acts),
        m.state === 'down' ? hint(t('Die Arbeitsgänge auf dieser Maschine sind in der Plantafel markiert. ARGUS schlägt vor, sie auf morgen früh zu verschieben, falls die Störung länger als eine Stunde dauert.', 'The operations on this machine are marked on the planning board. ARGUS suggests moving them to tomorrow morning if the fault lasts longer than an hour.'), [h('button', { type: 'button', class: 'a-btn s', onclick: function () { ui.view = 'plan'; c.render(); }, text: t('Zur Plantafel', 'Open planning board') })]) : null);
    }
    function vMachines() {
      var ms = O().machines, run = ms.filter(function (m) { return m.state === 'run'; }).length, down = ms.filter(function (m) { return m.state === 'down'; }).length;
      var ls = losses(), lmax = ls.length ? ls[0][1] : 1, sel = ui.msel && mach(ui.msel);
      var maint = O().maint.filter(function (w) { return !w.done; }).sort(function (a, b) { return a.due - b.due; });
      return h('div', null,
        h('p', { class: 'a-sub', text: t('Jede Maschine live: läuft, rüstet, steht oder hat eine Störung. Neuere Maschinen liefern ihre Daten über OPC UA, ältere über ein kleines Nachrüstmodul am Signal der Maschinenleuchte, Handarbeitsplätze über das Tablet.', 'Every machine live: running, setting up, idle or faulty. Newer machines send their data via OPC UA, older ones via a small retrofit module on the machine signal light, manual workstations via the tablet.') }),
        h('div', { class: 'a-row' }, card(t('OEE gesamt heute', 'Overall OEE today'), pct(avgOee()), t('Weltklasse liegt bei rund 85 %', 'world class is around 85%')), card(t('In Betrieb', 'Running'), run + ' / ' + ms.length, t('Werkstattzeit ', 'shop time ') + hhmm(clock())), card(t('Störungen', 'Faults'), String(down), down ? t('Entgratmaschine', 'Deburring machine') : t('keine', 'none'), down ? 'warn' : ''), card(t('Teile heute', 'Parts today'), String(ms.reduce(function (a, m) { return a + parts(m); }, 0))), card(t('Energie heute', 'Energy today'), ms.reduce(function (a, m) { return a + m.kwh; }, 0) + ' kWh', '', 'amber')),
        h('div', { class: 'g-mgrid' }, ms.map(machineCard)),
        sel ? machineDetail(sel) : null,
        h('div', { class: 'a-grid2' },
          h('div', { class: 'a-panel' }, h('h3', { text: t('Wo die Zeit heute verloren geht', 'Where time is lost today') }),
            h('ul', { class: 'g-cap2' }, ls.map(function (x) { return h('li', null, h('span', { text: LOSS[x[0]] || x[0] }), h('div', { class: 'g-track' }, h('span', { class: x[0] === 'down' ? 'g-bn' : 'g-b2', 'data-w': String(Math.round(x[1] / lmax * 100)) })), h('b', { text: UP.hm(x[1]) + ' h' })); })),
            hint(t('Rüsten kostet heute am meisten Zeit. Vorschlag: Aufträge mit gleichem Material und gleicher Blechdicke auf Laser 2 zusammenlegen. ARGUS kann die Plantafel danach sortieren.', 'Setup costs the most time today. Suggestion: group orders with the same material and sheet thickness on laser 2. ARGUS can sort the planning board accordingly.'))),
          h('div', { class: 'a-panel' }, h('h3', { text: t('Wartung und Prüfungen', 'Maintenance and inspections') }),
            h('ul', { class: 'g-wl' }, maint.map(function (w) {
              var lvl = w.due < 0 ? 'no' : w.due < 1 ? 'wait' : 'grey';
              var when = w.due < 0 ? t('überfällig seit ' + (-w.due) + ' Tagen', 'overdue by ' + (-w.due) + ' days') : w.due === 0 ? t('jetzt', 'now') : w.due < 1 ? t('in ' + Math.round(w.due * 20) + ' Betriebsstunden', 'in ' + Math.round(w.due * 20) + ' operating hours') : t('in ' + w.due + ' Tagen', 'in ' + w.due + ' days');
              return h('li', null, h('div', null, h('b', { text: mach(w.m).name + ': ' + w.task }), h('div', { class: 'a-sub', text: w.every })), h('span', { class: 'a-badge ' + lvl, text: when }), h('button', { type: 'button', class: 'a-btn s', onclick: function () { w.done = true; log(t('Wartung erledigt: ', 'Maintenance done: ') + mach(w.m).name + ', ' + w.task, 'user'); save(); c.render(); }, text: t('Erledigt', 'Done') }));
            })),
            maint.length ? null : h('p', { class: 'a-sub', text: t('Alles erledigt.', 'All done.') }))),
        h('p', { class: 'g-note', text: t('Zustände, Zähler und Energie sind in der Demo simuliert. Die Werkstattzeit beginnt beim Öffnen der Demo um 10:30.', 'States, counters and energy are simulated in the demo. Shop time starts at 10:30 when you open the demo.') }));
    }

    // ---------------------------------------------------------------- Personal
    function lvBar(lv, label) { return h('span', { class: 'g-lv l' + lv, title: label + ': ' + LV[lv], 'aria-label': label + ': ' + LV[lv] }, h('i'), h('i'), h('i')); }
    function leaveImpact(lv) {
      var plans = {}; O().people.forEach(function (p) { plans[p.id] = p.plan.slice(); });
      for (var d = lv.from; d <= lv.to; d++) plans[lv.pid][d] = 'U';
      var gaps = [];
      for (var d2 = lv.from; d2 <= lv.to; d2++) {
        var a = assign(d2, plans), base = assign(d2);
        Object.keys(a).forEach(function (mid) {
          if (a[mid] || !base[mid]) return;
          var n = P().blocks.filter(function (b) { return b.m === mid && Math.floor(b.s / DAYH) <= d2 && Math.floor((b.s + b.d - 0.01) / DAYH) >= d2; }).length;
          gaps.push([mid, d2, n]);
        });
      }
      return gaps;
    }
    function vPeople() {
      ui.ptab = ui.ptab || 'today';
      var ps = O().people, here = ps.filter(function (p) { return p.st === 'in' || p.st === 'pause'; }).length;
      var dueTr = 0; O().training.forEach(function (u) { if (!u.planned) Object.keys(u.due).forEach(function (k) { if (u.due[k] <= 14) dueTr++; }); });
      var lv = O().leave;
      var body;
      if (ui.ptab === 'today') {
        body = h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, [t('Person', 'Person'), t('Status', 'Status'), t('Einsatz', 'Assignment'), t('Heute', 'Today'), t('Gleitzeit', 'Flextime')].map(function (x, i) { return h('th', { class: i > 2 ? 'r' : null, text: x }); }))),
          h('tbody', null, ps.map(function (p) {
            var m = O().machines.filter(function (x) { return x.who === p.id; })[0];
            var stt = p.st === 'in' ? [t('Anwesend seit ', 'Present since ') + UP.hhmm(p.since), 'ok'] : p.st === 'pause' ? [t('Pause', 'Break'), 'wait'] : [CODE[p.abs] || CODE.A, 'grey'];
            var worked = p.st === 'abs' ? 0 : Math.max(0, 420 + clock() - p.since - 15);
            var opts = O().machines.filter(function (x) { return (p.sk[x.grp] || 0) >= 2; });
            return h('tr', null,
              h('td', null, h('span', { class: 'g-pp' }, h('span', { class: 'a-avatar', text: UP.initials(p.name) }), h('span', null, h('b', { text: p.name }), h('small', { class: 'a-sub', text: p.role })))),
              h('td', null, h('span', { class: 'a-badge ' + stt[1], text: stt[0] })),
              h('td', null, p.st === 'abs' || p.office ? h('span', { class: 'a-sub', text: p.office ? t('Büro', 'Office') : '' }) : h('select', { 'aria-label': t('Einsatz von ', 'Assignment of ') + p.name, onchange: function (ev) {
                var v = ev.target.value; O().machines.forEach(function (x) { if (x.who === p.id) x.who = null; });
                if (v) { var mm = mach(v); mm.who = p.id; log(t('Einsatz geändert: ', 'Assignment changed: ') + p.name + t(' an ', ' to ') + mm.name, 'user'); } else log(t('Einsatz aufgehoben: ', 'Assignment removed: ') + p.name, 'user');
                save(); c.render();
              } }, h('option', { value: '', text: t('kein Maschineneinsatz', 'no machine') }), opts.map(function (x) { return h('option', { value: x.id, selected: m && m.id === x.id, text: x.name + (x.who && x.who !== p.id ? t(' (besetzt)', ' (taken)') : '') }); }))),
              h('td', { class: 'r', text: p.st === 'abs' ? '' : UP.hm(worked) + ' h' }),
              h('td', { class: 'r ' + (p.flex < 0 ? 'neg' : ''), text: p.st === 'abs' && !p.flex ? '' : (p.flex >= 0 ? '+' : '') + UP.hm(p.flex) }));
          }))));
        body = h('div', null, body, h('p', { class: 'g-note', text: t('Zur Auswahl stehen nur Maschinen, für die die Person geschult ist. Grund einer Absenz sehen nur berechtigte Personen.', 'Only machines the person is trained for can be chosen. The reason for an absence is visible to authorised people only.') }));
      } else if (ui.ptab === 'skills') {
        var risks = SK.filter(function (s) { return ps.filter(function (p) { return (p.sk[s[0]] || 0) >= 2; }).length <= 1; });
        body = h('div', null,
          h('div', { class: 'a-tw' }, h('table', { class: 'g-mx' }, h('thead', null, h('tr', null, h('th', { text: t('Person', 'Person') }), SK.map(function (s) { return h('th', { text: s[1] }); }))),
            h('tbody', null, ps.map(function (p) { return h('tr', null, h('td', null, h('b', { text: p.name }), h('div', { class: 'a-sub', text: p.role })), SK.map(function (s) { var l = p.sk[s[0]] || 0; return h('td', null, lvBar(l, s[1]), s[0] === 'S' && p.cert ? h('span', { class: 'a-badge wait g-cert', text: t('Zertifikat: ' + p.cert + ' Tage', 'certificate: ' + p.cert + ' days') }) : null); })); })))),
          h('div', { class: 'g-legend' }, [1, 2, 3].map(function (l) { return h('span', null, lvBar(l, ''), LV[l]); })),
          h('div', { class: 'g-hints' },
            risks.map(function (s) {
              var cand = ps.filter(function (p) { return (p.sk[s[0]] || 0) === 1; })[0], done = O().trained[s[0]];
              var who = ps.filter(function (p) { return (p.sk[s[0]] || 0) >= 2; }).map(function (p) { return p.name; }).join(', ') || t('niemand', 'nobody');
              return hint(s[1] + t(' hängt an einer Person: ', ' depends on one person: ') + who + '.' + (cand ? t(' Vorschlag: ' + cand.name + ' weiter schulen.', ' Suggestion: train ' + cand.name + ' further.') : ''), cand ? [h('button', { type: 'button', class: 'a-btn s', disabled: !!done, onclick: function () { O().trained[s[0]] = cand.id; log(t('Schulung geplant: ', 'Training planned: ') + cand.name + ', ' + s[1], 'user'); save(); c.render(); }, text: done ? t('Schulung geplant', 'Training planned') : t('Schulung planen', 'Plan training') })] : null);
            }),
            ps.filter(function (p) { return p.cert; }).map(function (p) { return hint(t('Das Schweisszertifikat von ' + p.name + ' muss in ' + p.cert + ' Tagen bestätigt werden. ARGUS erinnert die Werkstattleitung 14 Tage vorher noch einmal.', p.name + '\'s welding certificate must be confirmed within ' + p.cert + ' days. ARGUS reminds the workshop manager again 14 days beforehand.')); })));
      } else if (ui.ptab === 'shifts') {
        var asgs = [0, 1, 2, 3, 4].map(function (d) { return assign(d); });
        var gaps = lv.status === 'open' ? leaveImpact(lv) : [];
        body = h('div', null,
          h('div', { class: 'a-tw' }, h('table', { class: 'g-sh' }, h('thead', null, h('tr', null, h('th', { text: t('Person', 'Person') }), WD.map(function (d) { return h('th', { text: UP.DAYS[d.getDay()] + ' ' + UP.pad(d.getDate()) + '.' }); }))),
            h('tbody', null, ps.map(function (p) { return h('tr', null, h('td', null, h('b', { text: p.name })), p.plan.map(function (code, d) { var pend = lv.status === 'open' && lv.pid === p.id && d >= lv.from && d <= lv.to; return h('td', null, h('span', { class: 'g-code c-' + code + (pend ? ' pend' : ''), text: pend ? t('Antrag', 'Request') : CODE[code] })); })); }),
              h('tr', { class: 'g-cov' }, h('td', { text: t('Maschinen unbesetzt', 'Machines unstaffed') }), asgs.map(function (a) { var miss = Object.keys(a).filter(function (k) { return !a[k]; }); return h('td', null, miss.length ? h('span', { class: 'a-badge no', text: miss.map(function (k) { return mach(k).name; }).join(', ') }) : h('span', { class: 'a-badge ok', text: t('alle besetzt', 'all staffed') })); }))))),
          lv.status === 'open' ? h('div', { class: 'a-panel g-mt' }, h('h3', { text: t('Ferienantrag', 'Holiday request') }),
            h('p', null, h('b', { text: person(lv.pid).name }), t(' möchte Ferien von ', ' requests holiday from ') + dayName(lv.from) + ' ' + UP.pad(WD[lv.from].getDate()) + '.' + UP.pad(WD[lv.from].getMonth() + 1) + '.' + t(' bis ', ' to ') + dayName(lv.to) + ' ' + UP.pad(WD[lv.to].getDate()) + '.' + UP.pad(WD[lv.to].getMonth() + 1) + '.'),
            hint(gaps.length ? t('Wenn der Antrag genehmigt wird, sind diese Maschinen ohne qualifizierte Person: ', 'If approved, these machines will have no qualified person: ') + gaps.map(function (g) { return mach(g[0]).name + ' ' + dayName(g[1]) + (g[2] ? t(' (' + g[2] + (g[2] === 1 ? ' Arbeitsgang' : ' Arbeitsgänge') + ' geplant)', ' (' + g[2] + ' operation' + (g[2] === 1 ? '' : 's') + ' planned)') : ''); }).join(', ') + t('. Vorschlag: genehmigen und die Arbeitsgänge auf die andere Abkantpresse legen, oder die Ferien eine Woche später.', '. Suggestion: approve and move the operations to the other press brake, or take the holiday a week later.') : t('Keine Engpässe. Der Antrag kann genehmigt werden.', 'No bottlenecks. The request can be approved.')),
            h('div', { class: 'g-pd-a' },
              h('button', { type: 'button', class: 'a-btn p s', onclick: function () { for (var d = lv.from; d <= lv.to; d++) person(lv.pid).plan[d] = 'U'; lv.status = 'ok'; log(t('Ferien genehmigt: ', 'Holiday approved: ') + person(lv.pid).name, 'user'); save(); c.render(); }, text: t('Genehmigen', 'Approve') }),
              h('button', { type: 'button', class: 'a-btn s', onclick: function () { lv.status = 'no'; log(t('Ferienantrag zurückgestellt: ', 'Holiday request deferred: ') + person(lv.pid).name + t(', Vorschlag eine Woche später gesendet', ', suggestion for a week later sent'), 'user'); save(); c.render(); }, text: t('Eine Woche später vorschlagen', 'Suggest a week later') })))
            : h('p', { class: 'a-msg', text: lv.status === 'ok' ? t('Ferien genehmigt. Die Plantafel zeigt die Folgen.', 'Holiday approved. The planning board shows the consequences.') : t('Antrag zurückgestellt, Vorschlag gesendet.', 'Request deferred, suggestion sent.') }));
      } else {
        body = h('div', null,
          h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, [t('Unterweisung', 'Instruction'), t('Intervall', 'Interval'), t('Erledigt', 'Done'), t('Fällig', 'Due'), ''].map(function (x) { return h('th', { text: x }); }))),
            h('tbody', null, O().training.map(function (u) {
              var due = Object.keys(u.due).filter(function (k) { return u.due[k] <= 30; });
              return h('tr', null, h('td', null, h('b', { text: u.title })), h('td', { text: u.every }), h('td', { text: (u.who.length - due.length) + ' / ' + u.who.length }),
                h('td', { class: 'wrap' }, due.length ? due.map(function (k) { return h('span', { class: 'a-badge ' + (u.due[k] < 0 ? 'no' : 'wait'), text: person(k).name + ': ' + (u.due[k] < 0 ? t('überfällig', 'overdue') : t('in ' + u.due[k] + ' Tagen', 'in ' + u.due[k] + ' days')) }); }) : h('span', { class: 'a-badge ok', text: t('alle aktuell', 'all current') })),
                h('td', null, due.length ? h('button', { type: 'button', class: 'a-btn s', disabled: u.planned, onclick: function () { u.planned = true; log(t('Unterweisung geplant: ', 'Instruction scheduled: ') + u.title + ', ' + due.map(function (k) { return person(k).name; }).join(', '), 'user'); save(); c.render(); }, text: u.planned ? t('geplant', 'scheduled') : t('Termin planen', 'Schedule') }) : null));
            })))),
          h('p', { class: 'g-note', text: t('Die Schutzausrüstung bestätigt jede Person vor jedem Auftrag am Werkstatt-Tablet. Unterweisungen und Bestätigungen sind für Kontrollen jederzeit belegbar.', 'Everyone confirms protective equipment before every job on the workshop tablet. Instructions and confirmations can be shown at any inspection.') }));
      }
      return h('div', null,
        h('p', { class: 'a-sub', text: t('Wer ist da, wer arbeitet wo, wer kann was, und wo wird es eng. ARGUS plant das Personal zusammen mit den Maschinen und warnt, bevor eine Maschine ohne qualifizierte Person dasteht.', 'Who is here, who works where, who can do what, and where it gets tight. ARGUS plans people together with machines and warns before a machine is left without a qualified person.') }),
        h('div', { class: 'a-row' }, card(t('Anwesend', 'Present'), here + ' / ' + ps.length, t('Werkstattzeit ', 'shop time ') + hhmm(clock())), card(t('Maschinen besetzt', 'Machines staffed'), O().machines.filter(function (m) { return m.who; }).length + ' / ' + O().machines.length), card(t('Ferienanträge offen', 'Open holiday requests'), lv.status === 'open' ? '1' : '0', '', lv.status === 'open' ? 'amber' : ''), card(t('Unterweisungen fällig', 'Instructions due'), String(dueTr), t('in den nächsten 14 Tagen', 'within 14 days'), dueTr ? 'warn' : '')),
        tabs('ptab', [['today', t('Heute', 'Today')], ['skills', t('Qualifikationen', 'Skills')], ['shifts', t('Schichtplan und Ferien', 'Shifts and holidays'), lv.status === 'open' ? 1 : 0], ['safety', t('Arbeitssicherheit', 'Safety'), dueTr]]),
        body,
        h('div', { class: 'g-legal' }, h('b', { text: t('Datenschutz und Arbeitsrecht', 'Data protection and labour law') }), h('p', { text: t('Erfasst werden Arbeitszeit, Einsätze, Qualifikationen und Unterweisungen. ARGUS überwacht kein Verhalten: kein GPS, keine Kameras auf Personen, keine Tastatur- oder Bildschirmüberwachung und keine Ranglisten einzelner Personen. Leistung wird pro Auftrag, Maschine und Team ausgewertet.', 'Working time, assignments, skills and instructions are recorded. ARGUS does not monitor behaviour: no GPS, no cameras on people, no keyboard or screen monitoring and no rankings of individuals. Performance is evaluated per order, machine and team.') })));
    }

    // ---------------------------------------------------------------- Lager und Versand
    var DENS = { '1.4301': 7.9, S235: 7.85, AlMg3: 2.66 }, KGP = { '1.4301': 6.4, S235: 1.6, AlMg3: 5.2 };
    function restParts() {
      var out = [{ fa: 'FA-26-1016', name: t('Halter', 'Holder'), mat: '1.4301', th: 3, l: 160, b: 80, qty: 80 }, { fa: 'FA-26-1019', name: t('Konsole', 'Bracket'), mat: 'AlMg3', th: 2, l: 180, b: 90, qty: 60 }, { fa: 'FA-26-1021', name: t('Gehäuseteil', 'Housing part'), mat: '1.4301', th: 2, l: 320, b: 140, qty: 40 }];
      if (D().done && D().done.avor) out.unshift({ fa: D().done.avor, name: c.PART.name, mat: c.PART.mat, th: c.PART.th, l: c.PART.l, b: c.PART.b, qty: c.PART.qty });
      return out;
    }
    function fits(r, p) { var g = 10; return Math.max(Math.floor(r.l / (p.l + g)) * Math.floor(r.b / (p.b + g)), Math.floor(r.l / (p.b + g)) * Math.floor(r.b / (p.l + g))); }
    function partMat(p) { return p.l * p.b / 1e6 * p.th / 1000 * DENS[p.mat] * 1000 * 1.2 * KGP[p.mat]; }
    function vStock() {
      ui.stab = ui.stab || 'stock';
      var items = D().erp.items, value = items.reduce(function (a, i) { return a + i.stock * (i.price || 0); }, 0);
      var low = items.filter(function (i) { return i.stock - i.res < i.min; }), lowOpen = low.filter(function (i) { return !i.ordered; });
      var incoming = D().erp.purchase.filter(function (p) { return p.status === 'ordered' || p.status === 'draft'; });
      var body;
      if (ui.stab === 'stock') {
        body = h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, [t('Artikel', 'Item'), t('Platz', 'Location'), t('Bestand', 'Stock'), t('Reserviert', 'Reserved'), t('Frei', 'Free'), t('Min.', 'Min.'), t('Reichweite', 'Coverage'), t('Status', 'Status')].map(function (x, i) { return h('th', { class: i >= 2 && i <= 6 ? 'r' : null, text: x }); }))),
          h('tbody', null, items.map(function (i) {
            var free = i.stock - i.res, days = i.use ? free / i.use : 99, under = free < i.min;
            return h('tr', null, h('td', null, h('b', { text: i.nr }), h('div', { class: 'a-sub', text: i.text })), h('td', { class: 'a-mono', text: i.loc || '' }), h('td', { class: 'r', text: i.stock + ' ' + (i.unit || '') }), h('td', { class: 'r', text: String(i.res) }), h('td', { class: 'r' + (under ? ' neg' : ''), text: String(free) }), h('td', { class: 'r', text: String(i.min) }), h('td', { class: 'r', text: days >= 99 ? '' : (days < 1 ? t('unter 1 Tag', 'under 1 day') : Math.round(days) + t(' Tage', ' days')) }),
              h('td', null, !under ? h('span', { class: 'a-badge ok', text: 'OK' }) : i.ordered ? h('span', { class: 'a-badge wait', text: t('bestellt ', 'ordered ') + i.ordered }) : h('button', { type: 'button', class: 'a-btn s p', onclick: function () {
                var e = 'EK-26-' + ('0000' + D().seq.ek).slice(-4), qty = Math.max(i.min * 2 - free, i.min);
                D().erp.purchase.push({ nr: e, vendor: c.VENDOR, text: i.text + ', ' + qty + ' ' + (i.unit || ''), status: 'draft', fresh: true }); D().seq.ek++; i.ordered = e;
                log(t('Bestellvorschlag ', 'Purchase proposal ') + e + t(' im ERP angelegt: ', ' created in the ERP: ') + i.text + ', ' + qty + ' ' + (i.unit || '') + t(', wartet auf Freigabe', ', awaiting approval'), c.way());
                save(); c.render();
              }, text: t('Bestellvorschlag', 'Propose order') })));
          }))));
      } else if (ui.stab === 'rest') {
        var parts = restParts();
        body = h('div', null,
          h('p', { class: 'a-sub', text: t('Jedes Restblech hat eine Nummer und einen Platz. ARGUS prüft bei jedem neuen Auftrag, ob ein Restblech reicht, bevor eine neue Tafel angeschnitten wird.', 'Every remnant has a number and a location. For every new order ARGUS checks whether a remnant is enough before a new sheet is cut.') }),
          O().newRest ? null : h('div', { class: 'g-hints' }, hint(t('Laser 1 meldet aus dem Schachtelprogramm ein neues Restblech: 1.4301, 3 mm, 640 × 480 mm.', 'Laser 1 reports a new remnant from the nesting program: 1.4301, 3 mm, 640 × 480 mm.'), [h('button', { type: 'button', class: 'a-btn s p', onclick: function () { O().rest.unshift({ id: 'R-0425', mat: '1.4301', th: 3, l: 640, b: 480, loc: t('Restregal 2', 'Remnant rack 2'), age: 0, res: null, fresh: true }); O().newRest = true; log(t('Restblech R-0425 vom Laser 1 übernommen, Etikett gedruckt, Platz Restregal 2', 'Remnant R-0425 taken over from laser 1, label printed, location remnant rack 2'), 'api'); save(); c.render(); }, text: t('Übernehmen und Etikett drucken', 'Take over and print label') })])),
          h('div', { class: 'g-rgrid' }, O().rest.map(function (r) {
            var match = parts.filter(function (p) { return p.mat === r.mat && p.th === r.th && fits(r, p) > 0; }).map(function (p) { var n = Math.min(fits(r, p), p.qty); return { p: p, n: n, save: n * partMat(p) }; }).sort(function (a, b) { return b.save - a.save; })[0];
            var k = Math.min(120 / r.l, 70 / r.b);
            return h('div', { class: 'g-rc' + (r.fresh ? ' fresh' : '') },
              h('div', { class: 'g-rc-h' }, h('b', { text: r.id }), h('span', { class: 'a-sub', text: r.loc })),
              h('div', { class: 'g-rc-v' }, h('i', { class: 'g-rc-sheet', 'data-wpx': String(Math.round(r.l * k)), 'data-hpx': String(Math.round(r.b * k)) }), h('span', { text: r.mat + ' · ' + r.th + ' mm · ' + r.l + ' × ' + r.b })),
              h('p', { class: 'a-sub', text: t('Liegt seit ', 'In stock for ') + r.age + t(' Tagen', ' days') }),
              r.res ? h('span', { class: 'a-badge ok', text: t('reserviert für ', 'reserved for ') + r.res })
                : match ? h('div', null, h('p', { class: 'g-rc-m', text: t('Reicht für ' + match.n + ' × ' + match.p.name + ' (' + match.p.fa + '), spart ' + chf0(match.save) + ' Material', 'Enough for ' + match.n + ' × ' + match.p.name + ' (' + match.p.fa + '), saves ' + chf0(match.save) + ' material') }), h('button', { type: 'button', class: 'a-btn s', onclick: function () { r.res = match.p.fa; log(t('Restblech ', 'Remnant ') + r.id + t(' für ', ' reserved for ') + match.p.fa + t(' reserviert, spart ', ', saves ') + chf0(match.save) + t(' Material', ' material'), 'api'); save(); c.render(); }, text: t('Reservieren', 'Reserve') }))
                  : h('p', { class: 'a-sub', text: t('Passt zu keinem offenen Auftrag', 'Fits no open order') }));
          })));
      } else if (ui.stab === 'in') {
        body = h('div', null, incoming.length ? h('ul', { class: 'a-files' }, incoming.map(function (p) {
          return h('li', null, h('span', { class: 'a-fico', text: 'EK' }), h('div', null, h('div', { class: 'a-fname', text: p.nr + ' · ' + p.text }), h('div', { class: 'a-fmeta', text: p.vendor + ' · ' + (p.status === 'draft' ? t('Entwurf im ERP, wartet auf Freigabe', 'draft in the ERP, awaiting approval') : t('bestellt, Lieferung morgen', 'ordered, delivery tomorrow')) })),
            h('div', { class: 'a-factions' }, p.status === 'draft' ? h('button', { type: 'button', class: 'a-btn s', onclick: function () { p.status = 'ordered'; p.fresh = false; log(t('Bestellung ', 'Order ') + p.nr + t(' freigegeben und gesendet', ' approved and sent'), 'user'); save(); c.render(); }, text: t('Freigeben', 'Approve') })
              : h('button', { type: 'button', class: 'a-btn s p', onclick: function () {
                p.status = 'received';
                var it = D().erp.items.filter(function (i) { return i.ordered === p.nr; })[0];
                if (it) { var n = parseInt((p.text.match(/(\d+) (Tafeln|sheets|Spulen|reels|Stk\.|pcs|kg|Stangen|bars)/) || [])[1] || '10', 10); it.stock += n; it.ordered = null; }
                log(t('Wareneingang gebucht: ', 'Goods received: ') + p.nr + (it ? ', ' + it.nr + t(', Zeugnis 3.1 abgelegt, Lagerplatz ', ', certificate 3.1 filed, location ') + it.loc : ''), c.way());
                if (it && it.nr === 'BL-S235-8') log(t('Material für FA-26-1015 ist da. Der Auftrag kann eingeplant werden.', 'Material for FA-26-1015 has arrived. The order can be scheduled.'), 'api');
                save(); c.render();
              }, text: t('Wareneingang buchen', 'Book goods receipt') })));
        })) : h('div', { class: 'a-empty', text: t('Keine offenen Lieferungen.', 'No open deliveries.') }),
          h('p', { class: 'g-note', text: t('Beim Wareneingang legt ARGUS das Werkstoffzeugnis zur Charge ab. So ist jedes Teil bis zum Rohmaterial rückverfolgbar.', 'At goods receipt ARGUS files the material certificate with the batch. So every part can be traced back to the raw material.') }));
      } else {
        body = h('div', null, h('ul', { class: 'a-files' }, O().ship.map(function (s) {
          var stt = { pick: [t('wird gerüstet', 'being picked'), 'wait'], ready: [t('versandbereit', 'ready to ship'), 'info'], sent: [t('versendet', 'shipped'), 'ok'] }[s.st];
          return h('li', null, h('span', { class: 'a-fico', text: 'LS' }), h('div', null, h('div', { class: 'a-fname', text: s.ls + ' · ' + s.cust }), h('div', { class: 'a-fmeta', text: s.text + ' · ' + s.au + ' · ' + s.kg + ' kg' })),
            h('div', { class: 'a-factions' }, h('span', { class: 'a-badge ' + stt[1], text: stt[0] }),
              s.st === 'pick' ? h('button', { type: 'button', class: 'a-btn s', onclick: function () { s.st = 'ready'; log(s.ls + t(' gerüstet, Lieferschein gedruckt', ' picked, delivery note printed'), 'user'); save(); c.render(); }, text: t('Gerüstet', 'Picked') }) : null,
              s.st === 'ready' ? h('button', { type: 'button', class: 'a-btn s p', onclick: function () { s.st = 'sent'; log(s.ls + t(' versendet. Kundenportal aktualisiert, Rechnung im ERP vorbereitet, wartet auf Freigabe', ' shipped. Customer portal updated, invoice prepared in the ERP, awaiting approval'), c.way()); save(); c.render(); }, text: t('Versendet melden', 'Report shipped') }) : null));
        })), h('p', { class: 'g-note', text: t('Mit dem Versand aktualisiert ARGUS den Status im Kundenportal und bereitet die Rechnung im ERP vor. Die Buchhaltung gibt sie frei.', 'On dispatch ARGUS updates the status in the customer portal and prepares the invoice in the ERP. Accounting approves it.') }));
      }
      return h('div', null,
        h('p', { class: 'a-sub', text: t('Bestand, Restbleche, Wareneingang und Versand an einem Ort. Die Zahlen kommen aus dem ERP und bleiben dort führend.', 'Stock, remnants, goods receipt and dispatch in one place. The figures come from the ERP, which stays the master.') }),
        h('div', { class: 'a-row' }, card(t('Lagerwert', 'Stock value'), chf0(value), t('Einstandspreise, Beispielwerte', 'cost prices, sample values')), card(t('Unter Minimum', 'Below minimum'), String(low.length), lowOpen.length ? lowOpen.length + t(' ohne Bestellung', ' without order') : t('alle bestellt', 'all ordered'), lowOpen.length ? 'warn' : ''), card(t('Lieferungen erwartet', 'Deliveries expected'), String(incoming.length)), card(t('Restbleche', 'Remnants'), String(O().rest.length), O().rest.filter(function (r) { return r.res; }).length + t(' reserviert', ' reserved'), 'amber')),
        tabs('stab', [['stock', t('Bestand', 'Stock'), lowOpen.length], ['rest', t('Restbleche', 'Remnants')], ['in', t('Wareneingang', 'Goods receipt'), incoming.length], ['out', t('Versand', 'Dispatch')]]),
        body);
    }

    // ---------------------------------------------------------------- Qualität
    var DSTEP = [t('Team bilden', 'Form team'), t('Problem beschreiben', 'Describe problem'), t('Sofortmassnahme', 'Containment'), t('Ursache finden', 'Root cause'), t('Massnahme festlegen', 'Define action'), t('Massnahme umsetzen', 'Implement action'), t('Wiederholung verhindern', 'Prevent recurrence'), t('Abschluss', 'Close')];
    function featOk(f) { return f[4] >= f[1] + f[2] - 1e-9 && f[4] <= f[1] + f[3] + 1e-9; }
    function faiNok() { return O().fai.status !== 'ok' && O().fai.feats.some(function (f) { return !featOk(f); }); }
    function faiUpdate() {
      var fai = O().fai, nok = fai.feats.filter(function (f) { return !featOk(f); });
      fai.feats.forEach(function (f, i) { var el = document.getElementById('g-fai-r' + i); if (el) { el.textContent = featOk(f) ? t('i. O.', 'OK') : t('n. i. O.', 'NOK'); el.className = 'a-badge ' + (featOk(f) ? 'ok' : 'no'); } });
      var b = document.getElementById('g-fai-ok'); if (b) b.disabled = nok.length > 0;
    }
    function vQuality() {
      ui.qtab = ui.qtab || 'fai';
      var fai = O().fai, nok = fai.feats.filter(function (f) { return !featOk(f); }), body;
      if (ui.qtab === 'fai') {
        var l1 = mach(fai.m);
        body = h('div', null,
          h('div', { class: 'a-panel' },
            h('div', { class: 'g-pd-h' }, h('div', null, h('h3', { text: t('Erstteilprüfung ', 'First article inspection ') + fai.fa }), h('p', { class: 'a-sub', text: fa(fai.fa).text + ' · ' + l1.name + ' · ' + person(fai.who).name })), h('span', { class: 'a-badge ' + (fai.status === 'ok' ? 'ok' : fai.status === 'hold' ? 'no' : 'wait'), text: fai.status === 'ok' ? t('freigegeben', 'released') : fai.status === 'hold' ? t('Serie angehalten', 'series on hold') : t('offen', 'open') })),
            h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, [t('Merkmal', 'Feature'), t('Soll', 'Nominal'), t('Toleranz', 'Tolerance'), t('Ist', 'Actual'), t('Ergebnis', 'Result')].map(function (x) { return h('th', { text: x }); }))),
              h('tbody', null, fai.feats.map(function (f, i) {
                return h('tr', null, h('td', { text: f[0] }), h('td', { class: 'a-mono', text: f[1] + ' ' + f[5] }), h('td', { class: 'a-mono', text: (f[2] < 0 ? f[2] : '+' + f[2]) + ' / +' + f[3] }),
                  h('td', null, h('input', { type: 'number', step: '0.01', class: 'g-num', 'aria-label': t('Istwert ', 'Actual value ') + f[0], value: String(f[4]), disabled: fai.status === 'ok', oninput: function (ev) { var v = parseFloat(ev.target.value); if (!isNaN(v)) { f[4] = v; save(); faiUpdate(); } }, onchange: function () { c.render(); } })),
                  h('td', null, h('span', { id: 'g-fai-r' + i, class: 'a-badge ' + (featOk(f) ? 'ok' : 'no'), text: featOk(f) ? t('i. O.', 'OK') : t('n. i. O.', 'NOK') })));
              })))),
            nok.length && fai.status !== 'ok' ? hint(nok.map(function (f) { return f[0]; }).join(', ') + t(' liegt ausserhalb der Toleranz. Mögliche Ursachen: Werkstücklage, Nullpunkt im Programm oder Wärmeverzug. Vorschlag: Serie anhalten, Programm prüfen und ein zweites Teil messen.', ' is out of tolerance. Possible causes: workpiece position, program zero point or thermal distortion. Suggestion: stop the series, check the program and measure a second part.'),
              fai.status === 'hold' ? null : [h('button', { type: 'button', class: 'a-btn s d', onclick: function () { fai.status = 'hold'; if (l1.state === 'run') setState(l1, 'idle', 'qual'); log(t('Erstteil ', 'First article ') + fai.fa + t(' ausser Toleranz: ', ' out of tolerance: ') + l1.name + t(' angehalten, Arbeitsvorbereitung informiert', ' stopped, job preparation informed'), 'api'); save(); c.render(); }, text: t('Serie anhalten und AVOR informieren', 'Stop series and inform job preparation') })]) : null,
            h('div', { class: 'g-pd-a g-mt' }, fai.status === 'ok' ? h('p', { class: 'a-msg', text: t('Erstteil freigegeben. Die Serie läuft.', 'First article released. The series is running.') })
              : h('button', { type: 'button', id: 'g-fai-ok', class: 'a-btn p', disabled: nok.length > 0, onclick: function () { fai.status = 'ok'; if (l1.state === 'idle' && l1.reason === 'qual') setState(l1, 'run'); log(t('Erstteil ', 'First article ') + fai.fa + t(' geprüft und freigegeben, Messwerte abgelegt', ' inspected and released, measurements filed'), 'user'); save(); c.render(); }, text: t('Erstteil freigeben', 'Release first article') }),
              fai.status !== 'ok' && nok.length ? h('span', { class: 'a-sub', text: t('Korrigieren Sie den Istwert nach der Nachmessung, zum Beispiel auf 25.05.', 'Correct the actual value after re-measuring, for example to 25.05.') }) : null)),
          h('div', { class: 'a-panel' }, h('h3', { text: t('Prüfmittel', 'Gauges') }), h('ul', { class: 'g-wl' }, O().gauges.map(function (g) { return h('li', null, h('div', null, h('b', { text: g.id + ' · ' + g.name })), h('span', { class: 'a-badge ' + (g.due < 0 ? 'no' : g.due < 14 ? 'wait' : 'ok'), text: g.due < 0 ? t('Kalibrierung überfällig', 'calibration overdue') : t('Kalibrierung in ' + g.due + ' Tagen', 'calibration in ' + g.due + ' days') })); }))));
      } else if (ui.qtab === 'rk') {
        body = h('div', null, O().rk.map(function (r) {
          return h('div', { class: 'a-panel' },
            h('div', { class: 'g-pd-h' }, h('div', null, h('h3', { text: r.nr + ' · ' + r.cust }), h('p', { class: 'a-sub', text: r.part + ' · ' + r.au + ' · ' + t('verantwortlich ', 'owner ') + person(r.owner).name })), h('span', { class: 'a-badge ' + (r.step >= 8 ? 'ok' : 'wait'), text: r.step >= 8 ? t('abgeschlossen', 'closed') : 'D' + r.step + t(' von 8', ' of 8') })),
            h('dl', { class: 'g-dl' }, h('div', null, h('dt', { text: t('Problem', 'Problem') }), h('dd', { text: r.issue })), h('div', null, h('dt', { text: t('Ursache', 'Cause') }), h('dd', { text: r.cause }))),
            h('ol', { class: 'g-8d' }, DSTEP.map(function (s, i) { return h('li', { class: i + 1 < r.step ? 'done' : i + 1 === r.step ? 'cur' : null }, h('i', { text: 'D' + (i + 1) }), h('span', { text: s })); })),
            r.step < 8 ? h('div', { class: 'g-pd-a' }, h('button', { type: 'button', class: 'a-btn s', onclick: function () { r.step++; if (r.step === 4 && r.cause === t('in Abklärung', 'under investigation')) r.cause = t('Teile beim Stapeln ohne Zwischenlage', 'parts stacked without separators'); log(r.nr + ': D' + (r.step - 1) + t(' abgeschlossen', ' completed'), 'user'); save(); c.render(); }, text: t('Schritt D' + r.step + ' abschliessen', 'Complete step D' + r.step) })) : null);
        }), h('p', { class: 'g-note', text: t('Der 8D-Bericht für den Kunden entsteht aus diesen Schritten automatisch.', 'The 8D report for the customer is created from these steps automatically.') }));
      } else {
        ui.trace = ui.trace || 'FA-26-1020';
        var chains = {
          'FA-26-1020': [[t('Auftrag', 'Order'), 'AU-26-0385 · Muster Bau AG'], [t('Material', 'Material'), t('Blech S235, 5 mm · Charge 24-88172 · Werkstoffzeugnis 3.1 nach EN 10204 · Beispiel Stahlhandel AG', 'Sheet S235, 5 mm · batch 24-88172 · inspection certificate 3.1 to EN 10204 · Beispiel Stahlhandel AG')], [t('Laser', 'Laser'), t('Laser 1 · João Silva · heute ab 09:00', 'Laser 1 · João Silva · today from 09:00')], [t('Erstteilprüfung', 'First article inspection'), O().fai.status === 'ok' ? t('freigegeben', 'released') : t('offen', 'open')], [t('Abkanten', 'Bending'), t('Abkantpresse 1 · geplant', 'Press brake 1 · planned')], [t('Schweissen', 'Welding'), t('Schweissplatz 1 · Luca Moretti · Schweisserzertifikat nach EN ISO 9606-1', 'Welding bay 1 · Luca Moretti · welder certificate to EN ISO 9606-1')], [t('Lieferung', 'Delivery'), t('offen', 'open')]],
          'FA-26-1017': [[t('Auftrag', 'Order'), 'AU-26-0383 · Demo Fördertechnik AG'], [t('Material', 'Material'), t('Blech AlMg3, 2 mm · Charge 24-77310 · Werkstoffzeugnis 3.1 nach EN 10204', 'Sheet AlMg3, 2 mm · batch 24-77310 · inspection certificate 3.1 to EN 10204')], [t('Laser', 'Laser'), t('Laser 2 · Ana Ribeiro · gestern', 'Laser 2 · Ana Ribeiro · yesterday')], [t('Entgraten', 'Deburring'), t('Entgratmaschine · Carlos Ruiz · heute', 'Deburring machine · Carlos Ruiz · today')], [t('Prüfung', 'Inspection'), t('Stichprobe i. O.', 'sample OK')], [t('Lieferung', 'Delivery'), 'LS-26-0711']]
        };
        body = h('div', { class: 'a-panel' },
          h('label', { class: 'a-field g-inl' }, t('Fertigungsauftrag', 'Production order'), h('select', { onchange: function (ev) { ui.trace = ev.target.value; c.render(); } }, Object.keys(chains).map(function (k) { return h('option', { value: k, selected: ui.trace === k, text: k + ' · ' + fa(k).text }); }))),
          h('ol', { class: 'g-chain' }, chains[ui.trace].map(function (x) { return h('li', null, h('b', { text: x[0] }), h('span', { text: x[1] })); })),
          h('p', { class: 'g-note', text: t('Bei einer Reklamation sehen Sie in Sekunden, welche Charge, welche Maschine und welche Person beteiligt waren, und welche anderen Aufträge dieselbe Charge enthalten.', 'In case of a complaint you see within seconds which batch, machine and person were involved, and which other orders contain the same batch.') }));
      }
      var openRk = O().rk.filter(function (r) { return r.step < 8; }).length;
      return h('div', null,
        h('p', { class: 'a-sub', text: t('Prüfen, dokumentieren, rückverfolgen. Messwerte, Reklamationen und Zeugnisse hängen direkt am Auftrag.', 'Inspect, document, trace. Measurements, complaints and certificates are attached directly to the order.') }),
        h('div', { class: 'a-row' }, card(t('Ausschussquote', 'Scrap rate'), '1.4 %', t('letzte 30 Tage, Beispielwert', 'last 30 days, sample value')), card(t('Erstteilprüfungen', 'First article inspections'), fai.status === 'ok' ? '3 / 3' : '2 / 3', t('heute', 'today')), card(t('Reklamationen offen', 'Open complaints'), String(openRk), '', openRk ? 'amber' : ''), card(t('Prüfmittel fällig', 'Gauges due'), String(O().gauges.filter(function (g) { return g.due < 14; }).length), '', 'warn')),
        tabs('qtab', [['fai', t('Erstteilprüfung', 'First article'), faiNok() ? 1 : 0], ['rk', t('Reklamationen', 'Complaints'), openRk], ['trace', t('Rückverfolgung', 'Traceability')]]),
        body);
    }

    // ---------------------------------------------------------------- Cockpit, Hinweise, Assistent
    function alerts() {
      var out = [];
      O().machines.forEach(function (m) { if (m.state === 'down') out.push(['no', m.name + t(' gestört seit ', ' faulty since ') + hhmm(m.since) + ': ' + REASON[m.reason], 'machines', m.id]); });
      O().machines.forEach(function (m) { if (m.state !== 'idle' || m.reason !== 'mat') return; var it = item('BL-S235-8'); if (it && it.stock - it.res > 0) out.push(['info', m.name + t(': Material ist eingetroffen, die Maschine kann weiterarbeiten.', ': material has arrived, the machine can resume.'), 'machines', m.id]); else out.push(['wait', m.name + t(' wartet auf Material. Blech S235, 8 mm kommt morgen.', ' is waiting for material. Sheet S235, 8 mm arrives tomorrow.'), 'stock', null]); });
      if (faiNok()) out.push(['no', t('Erstteil ', 'First article ') + O().fai.fa + t(': ein Mass ausser Toleranz', ': a dimension out of tolerance'), 'quality', null]);
      var iss = issues();
      if (iss.conflicts) out.push(['wait', iss.conflicts + (iss.conflicts === 1 ? t(' Konflikt in der Plantafel', ' conflict on the planning board') : t(' Konflikte in der Plantafel', ' conflicts on the planning board')), 'plan', null]);
      if (P().queue.length) out.push(['info', P().queue.length + (P().queue.length === 1 ? t(' Fertigungsauftrag noch nicht eingeplant', ' production order not yet scheduled') : t(' Fertigungsaufträge noch nicht eingeplant', ' production orders not yet scheduled')), 'plan', null]);
      if (O().leave.status === 'open') out.push(['info', t('Ferienantrag von ', 'Holiday request from ') + person(O().leave.pid).name + t(' wartet', ' is waiting'), 'people', 'shifts']);
      O().maint.forEach(function (w) { if (!w.done && w.due < 0) out.push(['no', mach(w.m).name + ': ' + w.task + t(' überfällig', ' overdue'), 'machines', w.m]); });
      return out;
    }
    function cockpitTop() {
      var ms = O().machines, al = alerts(), here = O().people.filter(function (p) { return p.st !== 'abs'; }).length;
      var low = D().erp.items.filter(function (i) { return i.stock - i.res < i.min && !i.ordered; }).length;
      return h('div', null,
        h('div', { class: 'a-row' }, card(t('OEE heute', 'OEE today'), pct(avgOee()), t('alle Maschinen', 'all machines')), card(t('Maschinen in Betrieb', 'Machines running'), ms.filter(function (m) { return m.state === 'run'; }).length + ' / ' + ms.length, t('Werkstattzeit ', 'shop time ') + hhmm(clock())), card(t('Anwesend', 'Present'), here + ' / ' + O().people.length), card(t('Lager unter Minimum', 'Stock below minimum'), String(low), low ? t('ohne Bestellung', 'without order') : t('alles bestellt', 'all ordered'), low ? 'warn' : '')),
        h('div', { class: 'a-panel' }, h('h3', { text: t('ARGUS sieht gerade', 'ARGUS currently sees') }),
          al.length ? h('ul', { class: 'g-alerts' }, al.map(function (a) { return h('li', null, h('button', { type: 'button', onclick: function () { ui.view = a[2]; if (a[2] === 'machines') ui.msel = a[3]; if (a[2] === 'people' && a[3]) ui.ptab = a[3]; c.render(); } }, h('i', { class: 'g-al-' + a[0], 'aria-hidden': 'true' }), h('span', { text: a[1] }), h('b', { 'aria-hidden': 'true', text: '›' }))); }))
            : h('p', { class: 'a-sub', text: t('Alles im grünen Bereich.', 'Everything is fine.') })));
    }
    function answer(q) {
      var s = q.toLowerCase();
      if (/maschin|steht|störung|oee|machine|fault|down/.test(s)) return O().machines.map(function (m) { return m.name + ': ' + MST[m.state] + (m.reason ? ' (' + REASON[m.reason] + ')' : ''); }).join(', ') + t('. OEE heute ', '. OEE today ') + pct(avgOee()) + '.';
      if (/wer |anwesend|personal|da\b|who|present|staff/.test(s)) { var ab = O().people.filter(function (p) { return p.st === 'abs'; }); return t('Anwesend sind ', 'Present: ') + O().people.filter(function (p) { return p.st !== 'abs'; }).length + t(' von ', ' of ') + O().people.length + t(' Personen. Abwesend: ', ' people. Absent: ') + ab.map(function (p) { return p.name + ' (' + CODE[p.abs] + ')'; }).join(', ') + '.'; }
      if (/restblech|remnant/.test(s)) return t('Restblech R-0412 reicht für Teile aus FA-26-1016. Details unter Lager, Restbleche.', 'Remnant R-0412 is enough for parts from FA-26-1016. Details under stock, remnants.');
      if (/qualit|reklam|toleranz|complaint/.test(s)) return t('Offene Reklamationen: ', 'Open complaints: ') + O().rk.filter(function (r) { return r.step < 8; }).map(function (r) { return r.nr + ' ' + r.cust; }).join(', ') + (faiNok() ? t('. Beim Erstteil FA-26-1020 liegt ein Mass ausser Toleranz.', '. On first article FA-26-1020 one dimension is out of tolerance.') : '.');
      if (/plan|termin|kapazit|frei/.test(s)) return t('Freie Kapazität ab morgen: ', 'Free capacity from tomorrow: ') + SEQ.map(function (g) { return OPN[g] + ' ' + dur(freeCap(g)); }).join(', ') + '.';
      return null;
    }
    function badges() {
      var iss = issues();
      return { machines: O().machines.filter(function (m) { return m.state === 'down'; }).length, plan: iss.conflicts + P().queue.length, people: O().leave.status === 'open' ? 1 : 0, quality: faiNok() ? 1 : 0, stock: D().erp.items.filter(function (i) { return i.stock - i.res < i.min && !i.ordered; }).length };
    }
    function post(root) {
      root.querySelectorAll('[data-l]').forEach(function (el) { el.style.left = el.getAttribute('data-l') + '%'; });
      root.querySelectorAll('[data-wpx]').forEach(function (el) { el.style.width = el.getAttribute('data-wpx') + 'px'; el.style.height = el.getAttribute('data-hpx') + 'px'; });
      if (!REDUCE) root.querySelectorAll('.g-pb.fresh').forEach(function (el) { window.setTimeout(function () { el.classList.remove('fresh'); }, 1600); });
      P().blocks.forEach(function (b) { b.fresh = false; });
    }

    return { views: { plan: vPlan, machines: vMachines, people: vPeople, stock: vStock, quality: vQuality }, cockpitTop: cockpitTop, answer: answer, badges: badges, post: post, sync: sync };
  }

  window.ARGUS_OPS = { seed: seed, create: create };
})();
