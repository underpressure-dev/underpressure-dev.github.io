/* Live-Demo Zeiterfassung: Arbeitszeit, Projekte, Gleitzeit, Ferien, Spesen. Erfundene Beispieldaten. */
(function () {
  'use strict';
  var UP = window.UP, h = UP.h, lang = UP.lang;
  function t(de, en) { return lang === 'de' ? de : en; }
  var app = document.getElementById('app');
  var TARGET = 504, ENTITLEMENT = 25;
  var CATS = [['reise', t('Reise', 'Travel')], ['essen', t('Verpflegung', 'Meals')], ['hotel', t('Übernachtung', 'Accommodation')], ['material', t('Material', 'Material')], ['sonst', t('Sonstiges', 'Other')]];
  var ABS = [['ferien', t('Ferien', 'Holiday')], ['krank', t('Krankheit', 'Sick leave')], ['weiter', t('Weiterbildung', 'Training')], ['militaer', t('Militär / Zivilschutz', 'Military service')]];

  function seed() {
    var today = new Date(), rnd = UP.rng(42);
    var projects = [{ id: 'p1', name: 'Projekt Alpha', color: '#1f4e8c', active: true }, { id: 'p2', name: 'Projekt Beta', color: '#2e8b57', active: true },
      { id: 'p3', name: t('Intern', 'Internal'), color: '#8a5a00', active: true }, { id: 'p4', name: 'Support', color: '#7b3fa0', active: true }];
    var users = [{ id: 'anna', name: 'Anna Beispiel', role: 'user', pensum: 100 }, { id: 'ben', name: 'Ben Muster', role: 'user', pensum: 100 },
      { id: 'chiara', name: 'Chiara Demo', role: 'user', pensum: 100 }, { id: 'leitung', name: t('Lea Leitung', 'Lea Lead'), role: 'admin', pensum: 100 }];
    var entries = [], start = new Date(today.getFullYear(), today.getMonth() - 2, 1);
    ['anna', 'ben', 'chiara'].forEach(function (u, ui) {
      for (var d = new Date(start.getTime()); UP.iso(d) < UP.iso(today); d = UP.addDays(d, 1)) {
        var wd = d.getDay(); if (wd === 0 || wd === 6) continue;
        if (ui > 0 && rnd() < 0.03 * ui) continue;
        var s1 = 7 * 60 + 15 + Math.floor(rnd() * 5) * 15, e1 = 12 * 60 + Math.floor(rnd() * 3) * 15;
        var s2 = e1 + 45 + Math.floor(rnd() * 2) * 15, e2 = s2 + (TARGET - (e1 - s1)) + Math.round((rnd() - 0.38) * 6) * 15;
        var pa = projects[Math.floor(rnd() * 4)].id, pb = rnd() < 0.6 ? pa : projects[Math.floor(rnd() * 4)].id;
        entries.push({ id: UP.uid(), user: u, date: UP.iso(d), from: UP.hhmm(s1), to: UP.hhmm(e1), project: pa, note: '' });
        entries.push({ id: UP.uid(), user: u, date: UP.iso(d), from: UP.hhmm(s2), to: UP.hhmm(e2), project: pb, note: rnd() < 0.12 ? t('Kundentermin', 'Client meeting') : '' });
      }
    });
    var y = today.getFullYear(), m = today.getMonth();
    var absences = [
      { id: UP.uid(), user: 'anna', type: 'ferien', from: UP.iso(new Date(y, m - 1, 8)), to: UP.iso(new Date(y, m - 1, 12)), status: 'ok' },
      { id: UP.uid(), user: 'anna', type: 'ferien', from: UP.iso(new Date(y, m + 1, 2)), to: UP.iso(new Date(y, m + 1, 6)), status: 'wait' },
      { id: UP.uid(), user: 'ben', type: 'ferien', from: UP.iso(new Date(y, m + 1, 16)), to: UP.iso(new Date(y, m + 1, 20)), status: 'wait' },
      { id: UP.uid(), user: 'chiara', type: 'weiter', from: UP.iso(new Date(y, m - 1, 22)), to: UP.iso(new Date(y, m - 1, 23)), status: 'ok' }
    ];
    entries = entries.filter(function (e) { return !absences.some(function (a) { return a.status === 'ok' && a.user === e.user && a.from <= e.date && e.date <= a.to; }); });
    var expenses = [
      { id: UP.uid(), user: 'anna', date: UP.iso(new Date(y, m, 1)), cat: 'reise', amount: 48.6, note: t('Bahn zum Kundentermin', 'Train to client meeting'), status: 'ok' },
      { id: UP.uid(), user: 'ben', date: UP.iso(new Date(y, m, 1)), cat: 'material', amount: 129.9, note: t('Messgerät', 'Measuring device'), status: 'wait' },
      { id: UP.uid(), user: 'chiara', date: UP.iso(new Date(y, m - 1, 14)), cat: 'hotel', amount: 164, note: t('Übernachtung Montage', 'Hotel for installation'), status: 'ok' }
    ];
    return { users: users, projects: projects, entries: entries, absences: absences, expenses: expenses, viewer: 'anna' };
  }

  var st = UP.store('time', seed, 3), D = st.data;
  var now = new Date();
  var ui = { view: 'home', month: now.getFullYear() + '-' + UP.pad(now.getMonth() + 1), subject: 'anna', date: UP.iso(now), msg: '', err: false };
  UP.initTheme(app); app.classList.add('t-time');
  if (UP.params.get('v')) ui.view = UP.params.get('v');

  function user(id) { return D.users.filter(function (u) { return u.id === id; })[0]; }
  function proj(id) { return D.projects.filter(function (p) { return p.id === id; })[0] || { name: '?', color: '#888' }; }
  function me() { return user(D.viewer); }
  function admin() { return me().role === 'admin'; }
  function subject() { return admin() ? user(ui.subject) : me(); }
  function isWd(d) { var w = d.getDay(); return w !== 0 && w !== 6; }
  function mins(e) { return Math.max(0, UP.toMin(e.to) - UP.toMin(e.from)); }
  function absOn(u, ds) { return D.absences.filter(function (a) { return a.user === u && a.status === 'ok' && a.from <= ds && ds <= a.to; })[0]; }
  function dayEntries(u, ds) { return D.entries.filter(function (e) { return e.user === u && e.date === ds; }).sort(function (a, b) { return a.from < b.from ? -1 : 1; }); }
  function worked(u, ds) { return dayEntries(u, ds).reduce(function (s, e) { return s + mins(e); }, 0); }
  function target(u, ds) { return isWd(UP.parse(ds)) && !absOn(u, ds) ? TARGET : 0; }
  function todayS() { return UP.iso(new Date()); }
  function days(m) { var p = m.split('-'), y = +p[0], mo = +p[1] - 1, out = []; for (var d = new Date(y, mo, 1); d.getMonth() === mo; d = UP.addDays(d, 1)) out.push(UP.iso(d)); return out; }
  function totals(u, m) { var ist = 0, soll = 0, ts = todayS(); days(m).forEach(function (ds) { var w = worked(u, ds); ist += w; if (ds < ts || w > 0) soll += target(u, ds); }); return { ist: ist, soll: soll }; }
  function saldo(u) {
    var es = D.entries.filter(function (e) { return e.user === u; }).map(function (e) { return e.date; }).sort();
    if (!es.length) return 0;
    var ts = todayS(), s = 0;
    for (var d = UP.parse(es[0]); UP.iso(d) <= ts; d = UP.addDays(d, 1)) { var ds = UP.iso(d), w = worked(u, ds); if (ds < ts || w > 0) s += w - target(u, ds); }
    return s;
  }
  function workdays(a, b) { var n = 0; for (var d = UP.parse(a); UP.iso(d) <= b; d = UP.addDays(d, 1)) if (isWd(d)) n++; return n; }
  function hol(u, year) {
    var taken = 0, req = 0;
    D.absences.forEach(function (a) { if (a.user !== u || a.type !== 'ferien' || a.from.slice(0, 4) !== String(year)) return; var n = workdays(a.from, a.to); if (a.status === 'ok') taken += n; else if (a.status === 'wait') req += n; });
    return { taken: taken, req: req, rest: ENTITLEMENT - taken };
  }
  function monthLabel(m) { var p = m.split('-'); return UP.MONTHS[+p[1] - 1] + ' ' + p[0]; }
  function shift(delta) { var p = ui.month.split('-'), d = new Date(+p[0], +p[1] - 1 + delta, 1); ui.month = d.getFullYear() + '-' + UP.pad(d.getMonth() + 1); render(); }
  function badge(s) { return h('span', { class: 'a-badge ' + (s === 'ok' ? 'ok' : s === 'no' ? 'no' : 'wait'), text: s === 'ok' ? t('genehmigt', 'approved') : s === 'no' ? t('abgelehnt', 'rejected') : t('beantragt', 'requested') }); }
  function card(l, v, s, cls) { return h('div', { class: 'a-card ' + (cls || '') }, h('div', { class: 'l', text: l }), h('div', { class: 'v', text: v }), s ? h('div', { class: 's', text: s }) : null); }
  function field(l, input) { return h('label', { class: 'a-field' }, l, input); }
  function say(m, err) { ui.msg = m; ui.err = !!err; }
  function msg() { return ui.msg ? h('p', { class: 'a-msg' + (ui.err ? ' err' : ''), role: 'status', text: ui.msg }) : null; }
  function monthNav() {
    return h('div', { class: 'a-form a-noprint' }, h('button', { type: 'button', class: 'a-btn s', 'aria-label': t('Vorheriger Monat', 'Previous month'), onclick: function () { shift(-1); }, text: '‹' }),
      h('strong', { 'aria-live': 'polite', text: monthLabel(ui.month) }), h('button', { type: 'button', class: 'a-btn s', 'aria-label': t('Nächster Monat', 'Next month'), onclick: function () { shift(1); }, text: '›' }));
  }
  function go(view, extra) { ui.view = view; if (extra) Object.keys(extra).forEach(function (k) { ui[k] = extra[k]; }); render(); }

  // ---------- Übersicht
  function vHome(u) {
    var m = totals(u.id, ui.month), s = saldo(u.id), hs = hol(u.id, +ui.month.slice(0, 4)), ts = todayS();
    var rows = days(ui.month).map(function (ds) {
      var d = UP.parse(ds), es = dayEntries(u.id, ds), w = worked(u.id, ds), tg = target(u.id, ds), a = absOn(u.id, ds), diff = (ds < ts || w > 0) ? w - tg : 0;
      var byP = {}; es.forEach(function (e) { byP[e.project] = (byP[e.project] || 0) + mins(e); });
      var tags = Object.keys(byP).map(function (p) { return h('span', { class: 'a-tag' }, h('i', { 'aria-hidden': 'true', 'data-c': proj(p).color }), proj(p).name + ' ' + UP.hm(byP[p])); });
      if (a) tags.push(h('span', { class: 'a-badge info', text: ABS.filter(function (x) { return x[0] === a.type; })[0][1] }));
      var note = es.map(function (e) { return e.note; }).filter(Boolean).join(', ');
      var cls = (!isWd(d) ? 'we ' : '') + (a ? 'fe ' : '') + (ds === ts ? 'today ' : '') + 'click';
      return h('tr', { class: cls, tabindex: '0', onclick: function () { go('entry', { date: ds }); }, onkeydown: function (ev) { if (ev.key === 'Enter') go('entry', { date: ds }); } },
        h('td', { text: UP.fmtDate(ds) }), h('td', { text: UP.DAYS[d.getDay()] }), h('td', { class: 'wrap' }, tags), h('td', { class: 'wrap', text: note }),
        h('td', { class: 'r', text: w ? UP.hm(w) : '' }), h('td', { class: 'r', text: tg ? UP.hm(tg) : '' }), h('td', { class: 'r ' + (diff < 0 ? 'neg' : diff > 0 ? 'pos' : ''), text: diff ? UP.hm(diff) : '' }));
    });
    return [h('h1', { text: (admin() ? u.name : t('Guten Tag, ', 'Hello, ') + u.name.split(' ')[0]) }), h('p', { class: 'a-sub', text: t('Monatsübersicht ', 'Monthly overview ') + monthLabel(ui.month) + ' · ' + t('Pensum ', 'Workload ') + u.pensum + ' %' }),
      h('div', { class: 'a-row' }, card(t('Ist (Monat)', 'Actual (month)'), UP.hm(m.ist) + ' h'), card(t('Soll (Monat)', 'Target (month)'), UP.hm(m.soll) + ' h'),
        card(t('Differenz', 'Difference'), UP.hm(m.ist - m.soll) + ' h', null, m.ist - m.soll < 0 ? 'warn' : ''), card(t('Gleitzeitsaldo', 'Flextime balance'), UP.hm(s) + ' h', t('seit erstem Eintrag', 'since first entry'), s < 0 ? 'warn' : ''),
        card(t('Ferien-Rest', 'Holidays left'), hs.rest + ' ' + t('Tage', 'days'), hs.req ? hs.req + t(' Tage beantragt', ' days requested') : t('von ', 'of ') + ENTITLEMENT, 'amber')),
      h('div', { class: 'a-h2' }, h('span', { text: t('Monatsblatt', 'Month sheet') }), monthNav()),
      h('div', { class: 'a-tw' }, h('table', null, h('caption', { class: 'sr', text: t('Monatsblatt ', 'Month sheet ') + monthLabel(ui.month) }),
        h('thead', null, h('tr', null, [t('Datum', 'Date'), t('Tag', 'Day'), t('Buchungen', 'Bookings'), t('Kommentar', 'Comment'), t('Ist', 'Actual'), t('Soll', 'Target'), 'Diff'].map(function (x, i) { return h('th', { scope: 'col', class: i > 3 ? 'r' : '', text: x }); }))),
        h('tbody', null, rows))),
      h('p', { class: 'a-sub', style: null, text: t('Tipp: Klick auf einen Tag öffnet die Erfassung.', 'Tip: click a day to open time entry.') })];
  }

  // ---------- Erfassen
  function vEntry(u) {
    var ds = ui.date, existing = dayEntries(u.id, ds);
    var blocks = existing.length ? existing.map(function (e) { return { from: e.from, to: e.to, project: e.project }; }) : [{ from: '08:00', to: '12:00', project: D.projects[0].id }, { from: '13:00', to: '17:24', project: D.projects[0].id }];
    var note = existing.map(function (e) { return e.note; }).filter(Boolean)[0] || '';
    var wrap = h('div', { class: 'a-entry' });
    var totalEl = h('b'), list = h('div');
    function recalc() { var s = 0; blocks.forEach(function (b) { if (b.from && b.to) s += Math.max(0, UP.toMin(b.to) - UP.toMin(b.from)); }); totalEl.textContent = UP.hm(s) + ' h'; }
    function drawBlocks() {
      UP.clear(list);
      blocks.forEach(function (b, i) {
        var f = h('input', { type: 'time', value: b.from, oninput: function (ev) { b.from = ev.target.value; recalc(); } });
        var tt = h('input', { type: 'time', value: b.to, oninput: function (ev) { b.to = ev.target.value; recalc(); } });
        var ps = h('select', { onchange: function (ev) { b.project = ev.target.value; } }, D.projects.filter(function (p) { return p.active || p.id === b.project; }).map(function (p) { return h('option', { value: p.id, selected: p.id === b.project, text: p.name }); }));
        list.appendChild(h('div', { class: 'a-block' }, field(t('Von', 'From'), f), field(t('Bis', 'To'), tt), field(t('Projekt', 'Project'), ps),
          h('button', { type: 'button', class: 'a-btn s d', 'aria-label': t('Zeitblock entfernen', 'Remove time block'), onclick: function () { blocks.splice(i, 1); drawBlocks(); recalc(); }, text: t('Entfernen', 'Remove') })));
      });
    }
    var dateIn = h('input', { type: 'date', value: ds, onchange: function (ev) { if (ev.target.value) go('entry', { date: ev.target.value }); } });
    var yest = UP.iso(UP.addDays(new Date(), -1));
    var pills = h('div', { class: 'a-pills', role: 'group', 'aria-label': t('Schnellwahl', 'Quick select') },
      h('button', { type: 'button', 'aria-pressed': ds === todayS() ? 'true' : 'false', onclick: function () { go('entry', { date: todayS() }); }, text: t('Heute', 'Today') }),
      h('button', { type: 'button', 'aria-pressed': ds === yest ? 'true' : 'false', onclick: function () { go('entry', { date: yest }); }, text: t('Gestern', 'Yesterday') }));
    var noteIn = h('input', { type: 'text', value: note, placeholder: t('optional, zum Beispiel Kundentermin', 'optional, for example client meeting'), style: null });
    noteIn.size = 40;
    var a = absOn(u.id, ds);
    wrap.appendChild(h('div', { class: 'a-entry-sec' }, h('h3', { text: t('Tag', 'Day') }), h('div', { class: 'a-form' }, field(t('Datum', 'Date'), dateIn), pills,
      h('span', { class: 'a-sub', style: null, text: UP.DAYS[UP.parse(ds).getDay()] + ', ' + UP.fmtDate(ds) + (a ? ' · ' + t('Absenz eingetragen', 'Absence recorded') : '') }))));
    wrap.appendChild(h('div', { class: 'a-entry-sec' }, h('h3', { text: t('Zeitblöcke', 'Time blocks') }), list,
      h('button', { type: 'button', class: 'a-btn s', onclick: function () { var last = blocks[blocks.length - 1]; blocks.push({ from: last ? last.to : '08:00', to: '', project: last ? last.project : D.projects[0].id }); drawBlocks(); recalc(); }, text: '+ ' + t('Zeitblock', 'Time block') })));
    wrap.appendChild(h('div', { class: 'a-entry-sec' }, h('h3', { text: t('Kommentar', 'Comment') }), noteIn));
    wrap.appendChild(h('div', { class: 'a-entry-foot' }, h('span', { class: 'a-total' }, t('Total ', 'Total '), totalEl, ' · ' + t('Soll ', 'Target ') + UP.hm(target(u.id, ds)) + ' h'),
      h('div', { class: 'a-form' }, existing.length ? h('button', { type: 'button', class: 'a-btn d', onclick: function () { D.entries = D.entries.filter(function (e) { return !(e.user === u.id && e.date === ds); }); st.save(); say(t('Tag geleert.', 'Day cleared.')); render(); }, text: t('Tag leeren', 'Clear day') }) : null,
        h('button', { type: 'button', class: 'a-btn p', onclick: function () {
          var valid = blocks.filter(function (b) { return b.from && b.to; });
          if (valid.some(function (b) { return UP.toMin(b.to) <= UP.toMin(b.from); })) { say(t('Bei einem Zeitblock liegt «Bis» vor «Von».', 'In one time block "to" is before "from".'), true); render(); return; }
          D.entries = D.entries.filter(function (e) { return !(e.user === u.id && e.date === ds); });
          valid.forEach(function (b, i) { D.entries.push({ id: UP.uid(), user: u.id, date: ds, from: b.from, to: b.to, project: b.project, note: i === valid.length - 1 ? noteIn.value : '' }); });
          st.save(); say(t('Gespeichert: ', 'Saved: ') + UP.fmtDate(ds) + ', ' + UP.hm(worked(u.id, ds)) + ' h'); ui.month = ds.slice(0, 7); render();
        }, text: t('Speichern', 'Save') }))));
    drawBlocks(); recalc();
    return [h('h1', { text: t('Zeit erfassen', 'Record time') }), h('p', { class: 'a-sub', text: u.name }), msg(), wrap];
  }

  // ---------- Kalender
  function vCal(u) {
    var p = ui.month.split('-'), first = new Date(+p[0], +p[1] - 1, 1), lead = (first.getDay() + 6) % 7, ts = todayS();
    var head = (lang === 'de' ? ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']).map(function (x) { return h('div', { class: 'h', text: x }); });
    var cells = []; for (var i = 0; i < lead; i++) cells.push(h('div', { class: 'a-day out', 'aria-hidden': 'true' }));
    days(ui.month).forEach(function (ds) {
      var d = UP.parse(ds), w = worked(u.id, ds), a = absOn(u.id, ds);
      var pend = D.absences.filter(function (x) { return x.user === u.id && x.status === 'wait' && x.from <= ds && ds <= x.to; })[0];
      cells.push(h('button', { type: 'button', class: 'a-day' + (!isWd(d) ? ' we' : '') + (a ? ' fe' : '') + (ds === ts ? ' today' : ''), onclick: function () { go('entry', { date: ds }); }, 'aria-label': UP.fmtDate(ds) + (w ? ', ' + UP.hm(w) + ' h' : '') },
        h('span', { class: 'n', text: d.getDate() }), w ? h('span', { class: 'hrs', text: UP.hm(w) + ' h' }) : null,
        a ? h('span', { class: 'a-badge info', text: ABS.filter(function (x) { return x[0] === a.type; })[0][1] }) : null,
        pend ? h('span', { class: 'a-badge wait', text: t('beantragt', 'requested') }) : null));
    });
    return [h('h1', { text: t('Kalender', 'Calendar') }), h('p', { class: 'a-sub', text: u.name }), h('div', { class: 'a-h2' }, h('span', { text: monthLabel(ui.month) }), monthNav()),
      h('div', { class: 'a-cal' }, head, cells),
      h('div', { class: 'a-legend' }, h('span', null, h('i', { class: 'lg-fe' }), t('Ferien / Absenz', 'Holiday / absence')), h('span', null, h('i', { class: 'lg-we' }), t('Wochenende', 'Weekend')), h('span', null, h('i', { class: 'lg-today' }), t('Heute', 'Today')))];
  }

  // ---------- Ferien und Absenzen
  function vAbs(u) {
    var y = +ui.month.slice(0, 4), hs = hol(u.id, y);
    var from = h('input', { type: 'date', value: UP.iso(UP.addDays(new Date(), 21)) }), to = h('input', { type: 'date', value: UP.iso(UP.addDays(new Date(), 25)) });
    var type = h('select', null, ABS.map(function (a) { return h('option', { value: a[0], text: a[1] }); }));
    var form = h('form', { class: 'a-form', onsubmit: function (ev) { ev.preventDefault(); if (!from.value || !to.value || to.value < from.value) { say(t('Bitte einen gültigen Zeitraum wählen.', 'Please choose a valid period.'), true); render(); return; }
      D.absences.push({ id: UP.uid(), user: u.id, type: type.value, from: from.value, to: to.value, status: admin() ? 'ok' : 'wait' }); st.save(); say(admin() ? t('Eingetragen.', 'Recorded.') : t('Antrag gesendet. Die Leitung entscheidet.', 'Request sent. Management decides.')); render(); } },
      field(t('Art', 'Type'), type), field(t('Von', 'From'), from), field(t('Bis', 'To'), to), h('button', { type: 'submit', class: 'a-btn p', text: admin() ? t('Eintragen', 'Record') : t('Beantragen', 'Request') }));
    var pend = admin() ? D.absences.filter(function (a) { return a.status === 'wait'; }) : [];
    var list = D.absences.filter(function (a) { return a.user === u.id; }).sort(function (a, b) { return a.from < b.from ? 1 : -1; });
    function row(a, showName) {
      var acts = [];
      if (admin() && a.status === 'wait') acts.push(h('button', { type: 'button', class: 'a-btn s p', onclick: function () { a.status = 'ok'; D.entries = D.entries.filter(function (e) { return !(e.user === a.user && a.from <= e.date && e.date <= a.to); }); st.save(); say(t('Genehmigt.', 'Approved.')); render(); }, text: t('Genehmigen', 'Approve') }), ' ',
        h('button', { type: 'button', class: 'a-btn s d', onclick: function () { a.status = 'no'; st.save(); render(); }, text: t('Ablehnen', 'Reject') }));
      if (!admin() && a.status === 'wait') acts.push(h('button', { type: 'button', class: 'a-btn s', onclick: function () { D.absences = D.absences.filter(function (x) { return x.id !== a.id; }); st.save(); render(); }, text: t('Zurückziehen', 'Withdraw') }));
      return h('tr', null, showName ? h('td', { text: user(a.user).name }) : null, h('td', { text: ABS.filter(function (x) { return x[0] === a.type; })[0][1] }), h('td', { text: UP.fmtDate(a.from) + ' – ' + UP.fmtDate(a.to) }), h('td', { class: 'r', text: workdays(a.from, a.to) }), h('td', null, badge(a.status)), h('td', null, acts));
    }
    function table(rows, cap, showName) {
      return h('div', { class: 'a-tw' }, h('table', null, h('caption', { class: 'sr', text: cap }), h('thead', null, h('tr', null, (showName ? [t('Person', 'Person')] : []).concat([t('Art', 'Type'), t('Zeitraum', 'Period'), t('Arbeitstage', 'Working days'), 'Status', '']).map(function (x) { return h('th', { scope: 'col', text: x }); }))),
        h('tbody', null, rows.length ? rows : h('tr', null, h('td', { colspan: 6, text: t('Keine Einträge.', 'No entries.') })))));
    }
    return [h('h1', { text: t('Ferien und Absenzen', 'Holidays and absences') }), h('p', { class: 'a-sub', text: u.name + ' · ' + y }),
      h('div', { class: 'a-row' }, card(t('Anspruch', 'Entitlement'), ENTITLEMENT + ' ' + t('Tage', 'days')), card(t('Bezogen', 'Taken'), hs.taken + ' ' + t('Tage', 'days')), card(t('Beantragt', 'Requested'), hs.req + ' ' + t('Tage', 'days'), null, hs.req ? 'amber' : ''), card(t('Rest', 'Remaining'), hs.rest + ' ' + t('Tage', 'days'))),
      admin() && pend.length ? h('div', { class: 'a-panel' }, h('h2', { text: t('Offene Anträge im Team', 'Open requests in the team') + ' (' + pend.length + ')' }), table(pend.map(function (a) { return row(a, true); }), t('Offene Anträge', 'Open requests'), true)) : null,
      h('div', { class: 'a-panel' }, h('h2', { text: admin() ? t('Absenz eintragen für ', 'Record absence for ') + u.name : t('Neuer Antrag', 'New request') }), msg(), form),
      h('div', { class: 'a-h2' }, h('span', { text: t('Verlauf', 'History') })), table(list.map(function (a) { return row(a, false); }), t('Absenzen', 'Absences'), false)];
  }

  // ---------- Spesen
  function vExp(u) {
    var date = h('input', { type: 'date', value: todayS() }), cat = h('select', null, CATS.map(function (c) { return h('option', { value: c[0], text: c[1] }); }));
    var amount = h('input', { type: 'number', min: '0.05', step: '0.05', placeholder: '0.00' }), note = h('input', { type: 'text', placeholder: t('Zweck', 'Purpose') });
    var form = h('form', { class: 'a-form', onsubmit: function (ev) { ev.preventDefault(); if (!(+amount.value > 0) || !note.value.trim()) { say(t('Bitte Betrag und Zweck angeben.', 'Please enter amount and purpose.'), true); render(); return; }
      D.expenses.push({ id: UP.uid(), user: u.id, date: date.value, cat: cat.value, amount: +amount.value, note: note.value.trim(), status: 'wait' }); st.save(); say(t('Spesen erfasst.', 'Expense recorded.')); render(); } },
      field(t('Datum', 'Date'), date), field(t('Kategorie', 'Category'), cat), field(t('Betrag (CHF)', 'Amount (CHF)'), amount), field(t('Zweck', 'Purpose'), note), h('button', { type: 'submit', class: 'a-btn p', text: t('Erfassen', 'Record') }));
    var list = D.expenses.filter(function (e) { return admin() ? true : e.user === u.id; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var ok = list.filter(function (e) { return e.status === 'ok'; }).reduce(function (s, e) { return s + e.amount; }, 0), open = list.filter(function (e) { return e.status === 'wait'; }).reduce(function (s, e) { return s + e.amount; }, 0);
    var rows = list.map(function (e) {
      var acts = [];
      if (admin() && e.status === 'wait') acts.push(h('button', { type: 'button', class: 'a-btn s p', onclick: function () { e.status = 'ok'; st.save(); render(); }, text: t('Genehmigen', 'Approve') }), ' ', h('button', { type: 'button', class: 'a-btn s d', onclick: function () { e.status = 'no'; st.save(); render(); }, text: t('Ablehnen', 'Reject') }));
      else if (e.status === 'wait' && e.user === D.viewer) acts.push(h('button', { type: 'button', class: 'a-btn s', onclick: function () { D.expenses = D.expenses.filter(function (x) { return x.id !== e.id; }); st.save(); render(); }, text: t('Löschen', 'Delete') }));
      return h('tr', null, admin() ? h('td', { text: user(e.user).name }) : null, h('td', { text: UP.fmtDate(e.date) }), h('td', { text: CATS.filter(function (c) { return c[0] === e.cat; })[0][1] }), h('td', { class: 'wrap', text: e.note }), h('td', { class: 'r', text: UP.chf(e.amount) }), h('td', null, badge(e.status)), h('td', null, acts));
    });
    return [h('h1', { text: t('Spesen', 'Expenses') }), h('p', { class: 'a-sub', text: admin() ? t('Alle Mitarbeitenden', 'All employees') : u.name }),
      h('div', { class: 'a-row' }, card(t('Genehmigt', 'Approved'), UP.chf(ok)), card(t('Offen', 'Open'), UP.chf(open), null, open ? 'amber' : '')),
      h('div', { class: 'a-panel' }, h('h2', { text: t('Neue Spesen', 'New expense') + (admin() ? ' · ' + u.name : '') }), msg(), form),
      h('div', { class: 'a-tw' }, h('table', null, h('caption', { class: 'sr', text: t('Spesen', 'Expenses') }), h('thead', null, h('tr', null, (admin() ? [t('Person', 'Person')] : []).concat([t('Datum', 'Date'), t('Kategorie', 'Category'), t('Zweck', 'Purpose'), t('Betrag', 'Amount'), 'Status', '']).map(function (x) { return h('th', { scope: 'col', class: x === t('Betrag', 'Amount') ? 'r' : '', text: x }); }))),
        h('tbody', null, rows.length ? rows : h('tr', null, h('td', { colspan: 7, text: t('Keine Einträge.', 'No entries.') })))))];
  }

  // ---------- Projekte
  function vProj() {
    var sums = {}, max = 1;
    D.entries.forEach(function (e) { if (e.date.slice(0, 7) === ui.month && (admin() || e.user === D.viewer)) sums[e.project] = (sums[e.project] || 0) + mins(e); });
    Object.keys(sums).forEach(function (k) { if (sums[k] > max) max = sums[k]; });
    var cards = D.projects.map(function (p) {
      var s = sums[p.id] || 0;
      return h('div', { class: 'a-proj' + (p.active ? '' : ' off') }, h('div', { class: 'a-proj-ico', style: null, 'data-c': p.color, text: p.name.charAt(0) }),
        h('div', { style: null }, h('b', { text: p.name }), h('span', { class: 's', text: UP.hm(s) + ' h ' + t('im ', 'in ') + monthLabel(ui.month) + (p.active ? '' : ' · ' + t('inaktiv', 'inactive')) }),
          h('div', { class: 'a-bar', 'aria-hidden': 'true' }, h('span', { 'data-w': Math.round(s / max * 100) })),
          admin() ? h('div', { class: 'a-form', style: null }, h('button', { type: 'button', class: 'a-btn s', onclick: function () { p.active = !p.active; st.save(); render(); }, text: p.active ? t('Deaktivieren', 'Deactivate') : t('Aktivieren', 'Activate') })) : null));
    });
    var add = admin() ? h('button', { type: 'button', class: 'a-btn p', onclick: function () {
      var name = h('input', { type: 'text', required: true });
      UP.dialog(app, t('Neues Projekt', 'New project'), field(t('Name', 'Name'), name), function () { if (!name.value.trim()) return false; var cols = ['#1f4e8c', '#2e8b57', '#8a5a00', '#7b3fa0', '#b23a2f', '#00708a']; D.projects.push({ id: UP.uid(), name: name.value.trim(), color: cols[D.projects.length % cols.length], active: true }); st.save(); render(); });
    }, text: '+ ' + t('Projekt', 'Project') }) : null;
    return [h('h1', { text: t('Projekte', 'Projects') }), h('p', { class: 'a-sub', text: (admin() ? t('Stunden des Teams', 'Team hours') : t('Deine Stunden', 'Your hours')) + ' · ' + monthLabel(ui.month) }),
      h('div', { class: 'a-h2' }, monthNav(), add), h('div', { class: 'a-projects' }, cards)];
  }

  // ---------- Team und Export (Leitung)
  function exportRows(us) {
    var rows = [[t('Mitarbeitende', 'Employee'), t('Datum', 'Date'), t('Tag', 'Day'), t('Von', 'From'), t('Bis', 'To'), t('Projekt', 'Project'), t('Kommentar', 'Comment'), t('Stunden', 'Hours'), t('Soll', 'Target')]];
    us.forEach(function (u) {
      days(ui.month).forEach(function (ds) {
        var es = dayEntries(u.id, ds), tg = target(u.id, ds), d = UP.parse(ds), a = absOn(u.id, ds);
        if (!es.length && !tg && !a) return;
        if (!es.length) rows.push([u.name, UP.fmtDate(ds), UP.DAYS[d.getDay()], '', '', a ? ABS.filter(function (x) { return x[0] === a.type; })[0][1] : '', '', '0,00', (tg / 60).toFixed(2).replace('.', ',')]);
        es.forEach(function (e, i) { rows.push([u.name, UP.fmtDate(ds), UP.DAYS[d.getDay()], e.from, e.to, proj(e.project).name, e.note, (mins(e) / 60).toFixed(2).replace('.', ','), i === 0 ? (tg / 60).toFixed(2).replace('.', ',') : '']); });
      });
    });
    return rows;
  }
  function vTeam() {
    var us = D.users.filter(function (x) { return x.role === 'user'; }), y = +ui.month.slice(0, 4);
    var rows = us.map(function (x) {
      var m = totals(x.id, ui.month), s = saldo(x.id), hs = hol(x.id, y), pend = D.absences.filter(function (a) { return a.user === x.id && a.status === 'wait'; }).length + D.expenses.filter(function (e) { return e.user === x.id && e.status === 'wait'; }).length;
      return h('tr', { class: 'click', tabindex: '0', onclick: function () { go('home', { subject: x.id }); }, onkeydown: function (ev) { if (ev.key === 'Enter') go('home', { subject: x.id }); } },
        h('td', null, h('span', { class: 'a-form', style: null }, h('span', { class: 'a-avatar', text: UP.initials(x.name) }), x.name)), h('td', { class: 'r', text: UP.hm(m.ist) }), h('td', { class: 'r', text: UP.hm(m.soll) }),
        h('td', { class: 'r ' + (m.ist - m.soll < 0 ? 'neg' : 'pos'), text: UP.hm(m.ist - m.soll) }), h('td', { class: 'r ' + (s < 0 ? 'neg' : 'pos'), text: UP.hm(s) }), h('td', { class: 'r', text: hs.rest }),
        h('td', null, pend ? h('span', { class: 'a-badge wait', text: pend + ' ' + t('offen', 'open') }) : h('span', { class: 'a-badge ok', text: 'OK' })));
    });
    var name = function (s) { return 'zeiterfassung-' + s + '-' + ui.month + '.csv'; };
    return [h('h1', { text: t('Team', 'Team') }), h('p', { class: 'a-sub', text: t('Übersicht und Export ', 'Overview and export ') + monthLabel(ui.month) }),
      h('div', { class: 'a-h2' }, monthNav(), h('div', { class: 'a-form a-noprint' },
        h('button', { type: 'button', class: 'a-btn p', onclick: function () { UP.download(name('team'), UP.csv(exportRows(us)), 'text/csv;charset=utf-8'); }, text: t('Export für Excel', 'Export for Excel') }),
        h('button', { type: 'button', class: 'a-btn', onclick: function () { window.print(); }, text: t('Drucken', 'Print') }))),
      h('div', { class: 'a-tw' }, h('table', null, h('caption', { class: 'sr', text: t('Team-Übersicht', 'Team overview') }),
        h('thead', null, h('tr', null, [t('Mitarbeitende', 'Employee'), t('Ist', 'Actual'), t('Soll', 'Target'), 'Diff', t('Gleitzeit', 'Flextime'), t('Ferien-Rest', 'Holidays left'), t('Anträge', 'Requests')].map(function (x, i) { return h('th', { scope: 'col', class: i && i < 6 ? 'r' : '', text: x }); }))),
        h('tbody', null, rows))),
      h('p', { class: 'a-sub', style: null, text: t('Der Export ist eine CSV-Datei, die Excel direkt öffnet. In einer echten Lösung entspricht das Layout deinem bisherigen Excel-Format. Klick auf eine Person öffnet ihr Monatsblatt.', 'The export is a CSV file that Excel opens directly. In a real solution the layout matches your existing Excel format. Click a person to open their month sheet.') })];
  }

  function render() {
    if (!admin() && (ui.view === 'team')) ui.view = 'home';
    var u = subject();
    var nav = [['home', t('Übersicht', 'Overview')], ['entry', t('Erfassen', 'Record')], ['cal', t('Kalender', 'Calendar')], ['abs', t('Ferien', 'Holidays')], ['exp', t('Spesen', 'Expenses')], ['proj', t('Projekte', 'Projects')]];
    if (admin()) nav.push(['team', t('Team', 'Team')]);
    var paths = { home: 'uebersicht', entry: 'erfassen', cal: 'kalender', abs: 'ferien', exp: 'spesen', proj: 'projekte', team: 'team' };
    var who = h('select', { 'aria-label': t('Angemeldet als', 'Signed in as'), onchange: function (ev) { D.viewer = ev.target.value; st.save(); ui.msg = ''; render(); } }, D.users.map(function (x) { return h('option', { value: x.id, selected: x.id === D.viewer, text: x.name + (x.role === 'admin' ? ' (' + t('Leitung', 'Lead') + ')' : '') }); }));
    var right = [who];
    if (admin()) right.unshift(h('select', { 'aria-label': t('Mitarbeitende anzeigen', 'Show employee'), onchange: function (ev) { ui.subject = ev.target.value; render(); } }, D.users.filter(function (x) { return x.role === 'user'; }).map(function (x) { return h('option', { value: x.id, selected: x.id === ui.subject, text: t('Ansicht: ', 'View: ') + x.name }); })));
    right.push(UP.themeButton(app, 'a-icon-btn'), h('span', { class: 'a-avatar', 'aria-hidden': 'true', text: UP.initials(me().name) }));
    var body = ui.view === 'home' ? vHome(u) : ui.view === 'entry' ? vEntry(u) : ui.view === 'cal' ? vCal(u) : ui.view === 'abs' ? vAbs(u) : ui.view === 'exp' ? vExp(u) : ui.view === 'proj' ? vProj() : vTeam();
    var bg = h('div', { class: 'app-bg', 'aria-hidden': 'true' }); bg.appendChild(UP.traces('pcb'));
    var main = h('main', { class: 'a-main' }, body);
    UP.clear(app);
    app.appendChild(UP.chrome('zeit.beispiel-ag.ch/' + paths[ui.view]));
    app.appendChild(h('div', { class: 'app-shell' }, bg, UP.topbar({ logo: 'Z', brand: t('Zeiterfassung', 'Time tracking'), sub: 'Beispiel AG', nav: nav, cur: ui.view, onNav: function (v) { ui.msg = ''; go(v); }, right: right }), main));
    // Farben aus Daten (keine Inline-Styles wegen CSP): per CSSOM setzen
    app.querySelectorAll('[data-c]').forEach(function (el) { el.style.background = el.getAttribute('data-c'); });
    app.querySelectorAll('[data-w]').forEach(function (el) { el.style.width = el.getAttribute('data-w') + '%'; });
    ui.msg = '';
  }

  UP.init(function () { st.reset(); window.location.reload(); });
  render();
})();
