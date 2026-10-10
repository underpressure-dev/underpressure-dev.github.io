/* Demo Zeiterfassung: Arbeitszeit, Gleitzeit, Ferien, Spesen. Erfundene Beispieldaten. */
(function () {
  'use strict';
  var UP = window.UP, h = UP.h, lang = UP.lang;
  function t(de, en) { return lang === 'de' ? de : en; }
  var app = document.getElementById('app');
  var TARGET = 504;            // 8.4 h pro Arbeitstag in Minuten
  var ENTITLEMENT = 25;        // Ferientage pro Jahr
  var PROJECTS = ['Projekt Alpha', 'Projekt Beta', 'Intern', 'Support'];
  var CATS = [['reise', t('Reise', 'Travel')], ['essen', t('Verpflegung', 'Meals')], ['hotel', t('Übernachtung', 'Accommodation')], ['material', t('Material', 'Material')], ['sonst', t('Sonstiges', 'Other')]];
  var ABS = [['ferien', t('Ferien', 'Holiday')], ['krank', t('Krankheit', 'Sick leave')], ['weiter', t('Weiterbildung', 'Training')]];

  function seed() {
    var today = new Date(), rnd = UP.rng(42);
    var users = [{ id: 'anna', name: 'Anna Beispiel', role: 'user' }, { id: 'ben', name: 'Ben Muster', role: 'user' }, { id: 'leitung', name: t('Leitung (Demo)', 'Management (demo)'), role: 'admin' }];
    var entries = [], start = new Date(today.getFullYear(), today.getMonth() - 2, 1);
    ['anna', 'ben'].forEach(function (u) {
      for (var d = new Date(start.getTime()); d < today; d = UP.addDays(d, 1)) {
        var wd = d.getDay(); if (wd === 0 || wd === 6) continue;
        if (u === 'ben' && rnd() < 0.08) continue;
        var from = 7 * 60 + 30 + Math.floor(rnd() * 4) * 15, worked = TARGET + Math.round((rnd() - 0.45) * 8) * 15, pause = 45 + (rnd() < 0.3 ? 15 : 0);
        var to = from + worked + pause;
        entries.push({ id: UP.uid(), user: u, date: UP.iso(d), from: UP.hm(from).replace(/^(\d):/, '0$1:'), to: UP.hm(to), pause: pause, project: PROJECTS[Math.floor(rnd() * PROJECTS.length)], note: '' });
      }
    });
    var m = today.getMonth(), y = today.getFullYear();
    var absences = [
      { id: UP.uid(), user: 'anna', type: 'ferien', from: UP.iso(new Date(y, m - 1, 12)), to: UP.iso(new Date(y, m - 1, 14)), status: 'ok' },
      { id: UP.uid(), user: 'anna', type: 'ferien', from: UP.iso(new Date(y, m + 1, 2)), to: UP.iso(new Date(y, m + 1, 6)), status: 'wait' },
      { id: UP.uid(), user: 'ben', type: 'ferien', from: UP.iso(new Date(y, m + 1, 16)), to: UP.iso(new Date(y, m + 1, 17)), status: 'wait' }
    ];
    var expenses = [
      { id: UP.uid(), user: 'anna', date: UP.iso(new Date(y, m, 2 > today.getDate() ? 1 : 2)), cat: 'reise', amount: 48.6, note: t('Bahn Luzern, Kundentermin', 'Train to client meeting'), status: 'ok' },
      { id: UP.uid(), user: 'ben', date: UP.iso(new Date(y, m, 1)), cat: 'material', amount: 129.9, note: t('Messgerät', 'Measuring device'), status: 'wait' }
    ];
    return { users: users, entries: entries, absences: absences, expenses: expenses, viewer: 'anna' };
  }

  var st = UP.store('time', seed), D = st.data;
  var now = new Date();
  var ui = { tab: 'time', month: now.getFullYear() + '-' + UP.pad(now.getMonth() + 1), subject: 'anna', msg: '' };

  function user(id) { return D.users.filter(function (u) { return u.id === id; })[0]; }
  function viewer() { return user(D.viewer); }
  function subject() { return viewer().role === 'admin' ? user(ui.subject) : viewer(); }
  function isWeekday(d) { var w = d.getDay(); return w !== 0 && w !== 6; }
  function mins(e) { return Math.max(0, UP.toMin(e.to) - UP.toMin(e.from) - (+e.pause || 0)); }
  function credited(u, ds) { return D.absences.some(function (a) { return a.user === u && a.status === 'ok' && a.from <= ds && ds <= a.to; }); }
  function worked(u, ds) { return D.entries.filter(function (e) { return e.user === u && e.date === ds; }).reduce(function (s, e) { return s + mins(e); }, 0); }
  function target(u, ds) { var d = UP.parse(ds); return isWeekday(d) && !credited(u, ds) ? TARGET : 0; }
  function monthDays(m) { var p = m.split('-'), y = +p[0], mo = +p[1] - 1, out = []; for (var d = new Date(y, mo, 1); d.getMonth() === mo; d = UP.addDays(d, 1)) out.push(UP.iso(d)); return out; }
  function monthTotals(u, m) { var ist = 0, soll = 0; var todayS = UP.iso(new Date()); monthDays(m).forEach(function (ds) { var w = worked(u, ds); ist += w; if (ds < todayS || w > 0) soll += target(u, ds); }); return { ist: ist, soll: soll }; }
  function saldo(u) {
    var es = D.entries.filter(function (e) { return e.user === u; }).map(function (e) { return e.date; }).sort();
    if (!es.length) return 0;
    var todayS = UP.iso(new Date()), s = 0;
    for (var d = UP.parse(es[0]); UP.iso(d) <= todayS; d = UP.addDays(d, 1)) { var ds = UP.iso(d), w = worked(u, ds); if (ds < todayS || w > 0) s += w - target(u, ds); }
    return s;
  }
  function workdays(from, to) { var n = 0; for (var d = UP.parse(from); UP.iso(d) <= to; d = UP.addDays(d, 1)) if (isWeekday(d)) n++; return n; }
  function holidayStats(u, year) {
    var taken = 0, req = 0;
    D.absences.forEach(function (a) { if (a.user !== u || a.type !== 'ferien' || a.from.slice(0, 4) !== String(year)) return; var n = workdays(a.from, a.to); if (a.status === 'ok') taken += n; else if (a.status === 'wait') req += n; });
    return { taken: taken, req: req, rest: ENTITLEMENT - taken };
  }
  var dayNames = lang === 'de' ? ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var statusBadge = function (s) { return h('span', { class: 'badge ' + (s === 'ok' ? 'ok' : s === 'no' ? 'no' : 'wait'), text: s === 'ok' ? t('genehmigt', 'approved') : s === 'no' ? t('abgelehnt', 'rejected') : t('beantragt', 'requested') }); };
  function monthLabel(m) { var p = m.split('-'); var names = lang === 'de' ? ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'] : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; return names[+p[1] - 1] + ' ' + p[0]; }
  function shiftMonth(delta) { var p = ui.month.split('-'), d = new Date(+p[0], +p[1] - 1 + delta, 1); ui.month = d.getFullYear() + '-' + UP.pad(d.getMonth() + 1); render(); }
  function say(m) { ui.msg = m; }
  function field(label, input) { return h('label', null, label, input); }

  // ---------- Ansichten
  function barView() {
    var vsel = h('select', { id: 'viewer', onchange: function (ev) { D.viewer = ev.target.value; if (viewer().role === 'admin' && !ui.subject) ui.subject = 'anna'; st.save(); render(); } },
      D.users.map(function (u) { return h('option', { value: u.id, selected: u.id === D.viewer, text: u.name + (u.role === 'admin' ? '' : '') }); }));
    var kids = [field(t('Ansicht als', 'View as'), vsel)];
    if (viewer().role === 'admin') {
      kids.push(field(t('Mitarbeitende', 'Employee'), h('select', { id: 'subject', onchange: function (ev) { ui.subject = ev.target.value; render(); } },
        D.users.filter(function (u) { return u.role === 'user'; }).map(function (u) { return h('option', { value: u.id, selected: u.id === ui.subject, text: u.name }); }))));
    }
    kids.push(h('div', { class: 'formrow' }, h('button', { type: 'button', onclick: function () { shiftMonth(-1); }, 'aria-label': t('Vorheriger Monat', 'Previous month'), text: '‹' }),
      h('strong', { 'aria-live': 'polite', text: monthLabel(ui.month) }), h('button', { type: 'button', onclick: function () { shiftMonth(1); }, 'aria-label': t('Nächster Monat', 'Next month'), text: '›' })));
    return h('div', { class: 'bar' }, kids);
  }

  function kpis(u) {
    var m = monthTotals(u.id, ui.month), s = saldo(u.id), hs = holidayStats(u.id, +ui.month.slice(0, 4));
    function k(l, v, cls) { return h('div', { class: 'kpi' }, h('span', { text: l }), h('strong', { class: cls || '', text: v })); }
    return h('div', { class: 'kpis' }, k(t('Ist (Monat)', 'Actual (month)'), UP.hm(m.ist) + ' h'), k(t('Soll (Monat)', 'Target (month)'), UP.hm(m.soll) + ' h'),
      k(t('Differenz (Monat)', 'Difference (month)'), UP.hm(m.ist - m.soll) + ' h', m.ist - m.soll >= 0 ? 'pos' : 'neg'),
      k(t('Gleitzeitsaldo', 'Flextime balance'), UP.hm(s) + ' h', s >= 0 ? 'pos' : 'neg'), k(t('Ferien-Rest', 'Holidays left'), hs.rest + ' ' + t('Tage', 'days')));
  }

  function timeView(u) {
    var todayS = UP.iso(new Date());
    var f = { date: todayS, from: '08:00', to: '17:00', pause: '45', project: PROJECTS[0], note: '' };
    var inputs = {
      date: h('input', { type: 'date', value: f.date, required: true }), from: h('input', { type: 'time', value: f.from, required: true }), to: h('input', { type: 'time', value: f.to, required: true }),
      pause: h('input', { type: 'number', min: '0', max: '240', step: '5', value: f.pause, style: null }), project: h('select', null, PROJECTS.map(function (p) { return h('option', { value: p, text: p }); })),
      note: h('input', { type: 'text', placeholder: t('optional', 'optional') })
    };
    var msg = h('p', { class: 'msg', role: 'status', hidden: ui.msg ? null : true, text: ui.msg });
    var form = h('form', { class: 'formrow', onsubmit: function (ev) {
      ev.preventDefault();
      var v = { date: inputs.date.value, from: inputs.from.value, to: inputs.to.value, pause: +inputs.pause.value || 0 };
      if (UP.toMin(v.to) <= UP.toMin(v.from)) { say(t('Die Endzeit muss nach der Startzeit liegen.', 'The end time must be after the start time.')); render(); return; }
      D.entries.push({ id: UP.uid(), user: u.id, date: v.date, from: v.from, to: v.to, pause: v.pause, project: inputs.project.value, note: inputs.note.value });
      st.save(); say(t('Eintrag gespeichert.', 'Entry saved.')); ui.month = v.date.slice(0, 7); render();
    } }, field(t('Datum', 'Date'), inputs.date), field(t('Von', 'From'), inputs.from), field(t('Bis', 'To'), inputs.to), field(t('Pause (min)', 'Break (min)'), inputs.pause), field(t('Projekt', 'Project'), inputs.project), field(t('Notiz', 'Note'), inputs.note), h('button', { type: 'submit', class: 'primary', text: t('Eintrag hinzufügen', 'Add entry') }));
    var canEdit = viewer().role === 'admin' || viewer().id === u.id;
    var rows = monthDays(ui.month).map(function (ds) {
      var d = UP.parse(ds), we = !isWeekday(d), w = worked(u.id, ds), tg = target(u.id, ds), cr = credited(u.id, ds);
      var es = D.entries.filter(function (e) { return e.user === u.id && e.date === ds; }).sort(function (a, b) { return a.from < b.from ? -1 : 1; });
      var cell = h('td', null, es.map(function (e) { return h('div', null, e.from + '–' + e.to + ' (' + t('Pause', 'break') + ' ' + e.pause + ' min), ' + e.project + (e.note ? ' · ' + e.note : '') + ' ',
        canEdit ? h('button', { type: 'button', class: 'small danger', 'aria-label': t('Eintrag löschen', 'Delete entry') + ' ' + UP.fmtDate(ds), onclick: function () { D.entries = D.entries.filter(function (x) { return x.id !== e.id; }); st.save(); render(); }, text: '×' }) : null); }),
        cr ? h('span', { class: 'badge info', text: t('Absenz', 'Absence') }) : null);
      var diff = (ds < todayS || w > 0) ? w - tg : 0;
      return h('tr', { class: we ? 'we' : (ds === todayS ? 'sel' : '') }, h('td', { text: UP.fmtDate(ds) }), h('td', { text: dayNames[d.getDay()] }), cell,
        h('td', { class: 'num', text: w ? UP.hm(w) : '' }), h('td', { class: 'num', text: tg ? UP.hm(tg) : '' }), h('td', { class: 'num ' + (diff < 0 ? 'neg' : diff > 0 ? 'pos' : ''), text: diff ? UP.hm(diff) : '' }));
    });
    var tbl = h('div', { class: 'tablewrap' }, h('table', null, h('caption', { text: t('Monatsblatt', 'Month sheet') + ' ' + monthLabel(ui.month) + ' · ' + u.name }),
      h('thead', null, h('tr', null, [t('Datum', 'Date'), t('Tag', 'Day'), t('Einträge', 'Entries'), t('Ist', 'Actual'), t('Soll', 'Target'), t('Diff', 'Diff')].map(function (x, i) { return h('th', { scope: 'col', class: i > 2 ? 'num' : '', text: x }); }))), h('tbody', null, rows)));
    return [canEdit ? form : null, msg, tbl];
  }

  function absView(u) {
    var y = +ui.month.slice(0, 4), hs = holidayStats(u.id, y);
    var from = h('input', { type: 'date', value: UP.iso(UP.addDays(new Date(), 14)), required: true }), to = h('input', { type: 'date', value: UP.iso(UP.addDays(new Date(), 16)), required: true });
    var type = h('select', null, ABS.map(function (a) { return h('option', { value: a[0], text: a[1] }); }));
    var isAdmin = viewer().role === 'admin';
    var form = h('form', { class: 'formrow', onsubmit: function (ev) { ev.preventDefault(); if (to.value < from.value) { say(t('Das Ende liegt vor dem Beginn.', 'The end is before the start.')); render(); return; }
      D.absences.push({ id: UP.uid(), user: u.id, type: type.value, from: from.value, to: to.value, status: 'wait' }); st.save(); say(t('Antrag gesendet. Die Leitung genehmigt ihn.', 'Request sent. Management will approve it.')); render(); } },
      field(t('Art', 'Type'), type), field(t('Von', 'From'), from), field(t('Bis', 'To'), to), h('button', { type: 'submit', class: 'primary', text: t('Beantragen', 'Request') }));
    var list = D.absences.filter(function (a) { return a.user === u.id; }).sort(function (a, b) { return a.from < b.from ? 1 : -1; });
    var rows = list.map(function (a) {
      var typeLabel = ABS.filter(function (x) { return x[0] === a.type; })[0][1];
      var actions = [];
      if (isAdmin && a.status === 'wait') actions.push(h('button', { type: 'button', class: 'small primary', onclick: function () { a.status = 'ok'; st.save(); render(); }, text: t('Genehmigen', 'Approve') }), ' ', h('button', { type: 'button', class: 'small danger', onclick: function () { a.status = 'no'; st.save(); render(); }, text: t('Ablehnen', 'Reject') }));
      if (a.status === 'wait' && (!isAdmin || true)) actions.push(' ', h('button', { type: 'button', class: 'small', onclick: function () { D.absences = D.absences.filter(function (x) { return x.id !== a.id; }); st.save(); render(); }, text: t('Zurückziehen', 'Withdraw') }));
      return h('tr', null, h('td', { text: typeLabel }), h('td', { text: UP.fmtDate(a.from) + ' – ' + UP.fmtDate(a.to) }), h('td', { class: 'num', text: workdays(a.from, a.to) }), h('td', null, statusBadge(a.status)), h('td', null, actions));
    });
    var k = function (l, v) { return h('div', { class: 'kpi' }, h('span', { text: l }), h('strong', { text: v })); };
    return [h('div', { class: 'kpis' }, k(t('Anspruch ' + y, 'Entitlement ' + y), ENTITLEMENT), k(t('Bezogen', 'Taken'), hs.taken), k(t('Beantragt', 'Requested'), hs.req), k(t('Rest', 'Remaining'), hs.rest)),
      form, h('p', { class: 'msg', role: 'status', hidden: ui.msg ? null : true, text: ui.msg }),
      h('div', { class: 'tablewrap' }, h('table', null, h('caption', { text: t('Absenzen', 'Absences') + ' · ' + u.name }), h('thead', null, h('tr', null, [t('Art', 'Type'), t('Zeitraum', 'Period'), t('Arbeitstage', 'Working days'), t('Status', 'Status'), ''].map(function (x, i) { return h('th', { scope: 'col', class: i === 2 ? 'num' : '', text: x }); }))), h('tbody', null, rows.length ? rows : h('tr', null, h('td', { colspan: 5, text: t('Keine Einträge.', 'No entries.') })))))];
  }

  function expView(u) {
    var isAdmin = viewer().role === 'admin';
    var date = h('input', { type: 'date', value: UP.iso(new Date()), required: true }), cat = h('select', null, CATS.map(function (c) { return h('option', { value: c[0], text: c[1] }); }));
    var amount = h('input', { type: 'number', min: '0.05', step: '0.05', required: true, placeholder: '0.00' }), note = h('input', { type: 'text', placeholder: t('Zweck', 'Purpose'), required: true });
    var form = h('form', { class: 'formrow', onsubmit: function (ev) { ev.preventDefault(); D.expenses.push({ id: UP.uid(), user: u.id, date: date.value, cat: cat.value, amount: +amount.value, note: note.value, status: 'wait' }); st.save(); say(t('Spesen erfasst.', 'Expense recorded.')); render(); } },
      field(t('Datum', 'Date'), date), field(t('Kategorie', 'Category'), cat), field(t('Betrag (CHF)', 'Amount (CHF)'), amount), field(t('Zweck', 'Purpose'), note), h('button', { type: 'submit', class: 'primary', text: t('Erfassen', 'Record') }));
    var list = D.expenses.filter(function (e) { return e.user === u.id; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var sumOk = list.filter(function (e) { return e.status === 'ok'; }).reduce(function (s, e) { return s + e.amount; }, 0), sumOpen = list.filter(function (e) { return e.status === 'wait'; }).reduce(function (s, e) { return s + e.amount; }, 0);
    var rows = list.map(function (e) {
      var actions = [];
      if (isAdmin && e.status === 'wait') actions.push(h('button', { type: 'button', class: 'small primary', onclick: function () { e.status = 'ok'; st.save(); render(); }, text: t('Genehmigen', 'Approve') }), ' ', h('button', { type: 'button', class: 'small danger', onclick: function () { e.status = 'no'; st.save(); render(); }, text: t('Ablehnen', 'Reject') }));
      if (e.status === 'wait') actions.push(' ', h('button', { type: 'button', class: 'small', onclick: function () { D.expenses = D.expenses.filter(function (x) { return x.id !== e.id; }); st.save(); render(); }, text: t('Löschen', 'Delete') }));
      return h('tr', null, h('td', { text: UP.fmtDate(e.date) }), h('td', { text: CATS.filter(function (c) { return c[0] === e.cat; })[0][1] }), h('td', { text: e.note }), h('td', { class: 'num', text: UP.chf(e.amount) }), h('td', null, statusBadge(e.status)), h('td', null, actions));
    });
    var k = function (l, v) { return h('div', { class: 'kpi' }, h('span', { text: l }), h('strong', { text: v })); };
    return [h('div', { class: 'kpis' }, k(t('Genehmigt', 'Approved'), UP.chf(sumOk)), k(t('Offen', 'Open'), UP.chf(sumOpen))), form,
      h('p', { class: 'msg', role: 'status', hidden: ui.msg ? null : true, text: ui.msg }),
      h('div', { class: 'tablewrap' }, h('table', null, h('caption', { text: t('Spesen', 'Expenses') + ' · ' + u.name }), h('thead', null, h('tr', null, [t('Datum', 'Date'), t('Kategorie', 'Category'), t('Zweck', 'Purpose'), t('Betrag', 'Amount'), t('Status', 'Status'), ''].map(function (x, i) { return h('th', { scope: 'col', class: i === 3 ? 'num' : '', text: x }); }))), h('tbody', null, rows.length ? rows : h('tr', null, h('td', { colspan: 6, text: t('Keine Einträge.', 'No entries.') })))))];
  }

  function exportRows(users) {
    var rows = [[t('Mitarbeitende', 'Employee'), t('Datum', 'Date'), t('Tag', 'Day'), t('Von', 'From'), t('Bis', 'To'), t('Pause (min)', 'Break (min)'), t('Projekt', 'Project'), t('Ist (h)', 'Actual (h)'), t('Soll (h)', 'Target (h)')]];
    users.forEach(function (u) {
      monthDays(ui.month).forEach(function (ds) {
        var es = D.entries.filter(function (e) { return e.user === u.id && e.date === ds; }), tg = target(u.id, ds), d = UP.parse(ds);
        if (!es.length && !tg) return;
        if (!es.length) rows.push([u.name, UP.fmtDate(ds), dayNames[d.getDay()], '', '', '', t('Absenz', 'Absence'), '0.00', (tg / 60).toFixed(2)]);
        es.forEach(function (e, i) { rows.push([u.name, UP.fmtDate(ds), dayNames[d.getDay()], e.from, e.to, e.pause, e.project, (mins(e) / 60).toFixed(2).replace('.', ','), i === 0 ? (tg / 60).toFixed(2).replace('.', ',') : '']); });
      });
    });
    return rows;
  }

  function reportView(u) {
    var isAdmin = viewer().role === 'admin', us = isAdmin ? D.users.filter(function (x) { return x.role === 'user'; }) : [u];
    var y = +ui.month.slice(0, 4);
    var rows = us.map(function (x) {
      var m = monthTotals(x.id, ui.month), hs = holidayStats(x.id, y), sp = D.expenses.filter(function (e) { return e.user === x.id && e.status === 'ok' && e.date.slice(0, 7) === ui.month; }).reduce(function (s, e) { return s + e.amount; }, 0);
      return h('tr', null, h('th', { scope: 'row', text: x.name }), h('td', { class: 'num', text: UP.hm(m.ist) }), h('td', { class: 'num', text: UP.hm(m.soll) }), h('td', { class: 'num ' + (m.ist - m.soll < 0 ? 'neg' : 'pos'), text: UP.hm(m.ist - m.soll) }), h('td', { class: 'num', text: UP.hm(saldo(x.id)) }), h('td', { class: 'num', text: hs.rest }), h('td', { class: 'num', text: UP.chf(sp) }));
    });
    var name = function (s) { return 'zeiterfassung-' + s + '-' + ui.month + '.csv'; };
    return [h('div', { class: 'formrow no-print' },
      h('button', { type: 'button', class: 'primary', onclick: function () { UP.download(name(u.id), UP.csv(exportRows([u])), 'text/csv;charset=utf-8'); }, text: t('Monat als CSV für Excel', 'Month as CSV for Excel') + ' (' + u.name + ')' }),
      isAdmin ? h('button', { type: 'button', onclick: function () { UP.download(name('alle'), UP.csv(exportRows(us)), 'text/csv;charset=utf-8'); }, text: t('Alle Mitarbeitenden als CSV', 'All employees as CSV') }) : null,
      h('button', { type: 'button', onclick: function () { window.print(); }, text: t('Drucken', 'Print') })),
      h('div', { class: 'tablewrap' }, h('table', null, h('caption', { text: t('Auswertung', 'Report') + ' ' + monthLabel(ui.month) }), h('thead', null, h('tr', null, [t('Mitarbeitende', 'Employee'), t('Ist', 'Actual'), t('Soll', 'Target'), t('Diff', 'Diff'), t('Gleitzeit', 'Flextime'), t('Ferien-Rest', 'Holidays left'), t('Spesen genehmigt', 'Expenses approved')].map(function (x, i) { return h('th', { scope: 'col', class: i ? 'num' : '', text: x }); }))), h('tbody', null, rows))),
      h('p', { class: 'muted' }, t('Die CSV-Datei öffnet Excel direkt (Semikolon, UTF-8). In einer echten Lösung entspricht das Layout deinem bisherigen Excel-Format.', 'Excel opens the CSV file directly (semicolon, UTF-8). In a real solution the layout matches your existing Excel format.'))];
  }

  function render() {
    var u = subject(), tabs = [['time', t('Zeiten', 'Time')], ['abs', t('Ferien und Absenzen', 'Holidays and absences')], ['exp', t('Spesen', 'Expenses')], ['rep', t('Auswertung und Export', 'Report and export')]];
    var body = ui.tab === 'time' ? timeView(u) : ui.tab === 'abs' ? absView(u) : ui.tab === 'exp' ? expView(u) : reportView(u);
    var sub = h('div', { class: 'subtabs', role: 'tablist' }, tabs.map(function (x) { return h('button', { type: 'button', role: 'tab', 'aria-selected': ui.tab === x[0] ? 'true' : 'false', onclick: function () { ui.tab = x[0]; ui.msg = ''; render(); }, text: x[1] }); }));
    var focusId = document.activeElement && document.activeElement.id;
    UP.clear(app); app.appendChild(barView()); app.appendChild(kpis(u)); app.appendChild(sub); [].concat(body).forEach(function (n) { if (n) app.appendChild(n); });
    ui.msg = '';
    if (focusId) { var f = document.getElementById(focusId); if (f) f.focus(); }
  }

  UP.init(function () { st.reset(); window.location.reload(); });
  render();
})();
