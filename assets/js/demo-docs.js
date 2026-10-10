/* Demo Dokumentenlenkung: Freigabe-Workflow, Versionen, QM-Handbuch, Auditbericht. Erfundene Beispieldaten. */
(function () {
  'use strict';
  var UP = window.UP, h = UP.h, lang = UP.lang;
  function t(de, en) { return lang === 'de' ? de : en; }
  var app = document.getElementById('app');
  var DAY = 86400000;
  var ST = { draft: t('Entwurf', 'Draft'), review: t('In Prüfung', 'In review'), approval: t('Zur Freigabe', 'For approval'), released: t('Freigegeben', 'Released'), superseded: t('Ersetzt', 'Superseded') };
  var TYPES = [['vf', t('Verfahren', 'Procedure')], ['wa', t('Arbeitsanweisung', 'Work instruction')], ['fo', t('Formular', 'Form')]];

  function seed() {
    var now = Date.now();
    var people = [
      { id: 'p1', name: 'Eva Ersteller', role: 'author' }, { id: 'p2', name: 'Paul Prüfer', role: 'reviewer' }, { id: 'p3', name: 'Frida Freigabe', role: 'approver' }
    ];
    var mand = [{ id: 'm1', name: 'Beispiel Metallbau AG' }, { id: 'm2', name: 'Demo Logistik GmbH' }];
    function ver(v, daysAgo, status, text, by) { return { v: v, ts: now - daysAgo * DAY, author: by || 'Eva Ersteller', status: status, text: text, comment: '' }; }
    var docs = [];
    function doc(m, nr, title, type, owner, review, versions) { docs.push({ id: UP.uid(), mand: m, nr: nr, title: title, type: type, owner: owner, reviewDue: now + review * DAY, versions: versions }); }
    var txt = {
      dok: t('Zweck\nDieses Verfahren regelt, wie Dokumente erstellt, geprüft, freigegeben und geändert werden.\n\nGeltungsbereich\nAlle Dokumente des Managementsystems.\n\nAblauf\n1. Der Ersteller erstellt oder ändert das Dokument als Entwurf.\n2. Der Prüfer prüft Inhalt und Form.\n3. Der Freigeber setzt die Version in Kraft.\n4. Die bisherige Version gilt als ersetzt.', 'Purpose\nThis procedure governs how documents are created, reviewed, approved and changed.\n\nScope\nAll documents of the management system.\n\nProcess\n1. The author creates or changes the document as a draft.\n2. The reviewer checks content and form.\n3. The approver puts the version into force.\n4. The previous version is marked as superseded.'),
      aud: t('Zweck\nInterne Audits prüfen, ob das Managementsystem wirksam ist.\n\nAblauf\nDer Auditplan wird jährlich erstellt. Abweichungen werden mit Massnahmen und Fristen erfasst.', 'Purpose\nInternal audits check whether the management system is effective.\n\nProcess\nThe audit plan is created annually. Deviations are recorded with actions and deadlines.'),
      bes: t('Zweck\nLieferanten werden nach Qualität, Termin und Preis bewertet.\n\nAblauf\nNeue Lieferanten werden vor der ersten Bestellung beurteilt. Die Beurteilung wird jährlich überprüft.', 'Purpose\nSuppliers are rated on quality, delivery time and price.\n\nProcess\nNew suppliers are assessed before the first order. The assessment is reviewed annually.'),
      kor: t('Zweck\nFehler und Beanstandungen werden erfasst und dauerhaft behoben.\n\nAblauf\nErfassen, Ursache klären, Massnahme festlegen, Wirksamkeit prüfen.', 'Purpose\nErrors and complaints are recorded and resolved permanently.\n\nProcess\nRecord, find the cause, define an action, check effectiveness.'),
      sch: t('Zweck\nSchweissarbeiten werden nach einheitlichen Vorgaben ausgeführt.\n\nVorgaben\nSchweisser sind qualifiziert. Prüfungen werden dokumentiert.', 'Purpose\nWelding work is carried out to uniform specifications.\n\nSpecifications\nWelders are qualified. Inspections are documented.')
    };
    doc('m1', 'VF-001', t('Lenkung von Dokumenten', 'Control of documents'), 'vf', 'Eva Ersteller', 120, [ver(1, 400, 'superseded', txt.dok), ver(2, 90, 'released', txt.dok + t('\n\nÄnderung in Version 2: Prüffrist auf 12 Monate festgelegt.', '\n\nChange in version 2: review period set to 12 months.'))]);
    doc('m1', 'VF-002', t('Interne Audits', 'Internal audits'), 'vf', 'Eva Ersteller', -10, [ver(1, 500, 'released', txt.aud)]);
    doc('m1', 'VF-003', t('Beschaffung und Lieferantenbewertung', 'Procurement and supplier rating'), 'vf', 'Paul Prüfer', 200, [ver(1, 200, 'released', txt.bes), ver(2, 3, 'review', txt.bes + t('\n\nNeu: Bewertung mit Punkteschema.', '\n\nNew: rating with a points scheme.'))]);
    doc('m1', 'WA-010', t('Schweissarbeiten', 'Welding work'), 'wa', 'Eva Ersteller', 60, [ver(1, 5, 'draft', txt.sch)]);
    doc('m1', 'FO-020', t('Formular Korrekturmassnahme', 'Corrective action form'), 'fo', 'Paul Prüfer', 300, [ver(1, 100, 'released', txt.kor), ver(2, 2, 'approval', txt.kor + t('\n\nNeu: Feld «Wirksamkeitsprüfung».', '\n\nNew: field "effectiveness check".'))]);
    doc('m2', 'VF-001', t('Lenkung von Dokumenten', 'Control of documents'), 'vf', 'Eva Ersteller', 150, [ver(1, 60, 'released', txt.dok)]);
    doc('m2', 'VF-004', t('Korrekturmassnahmen', 'Corrective actions'), 'vf', 'Paul Prüfer', 20, [ver(1, 300, 'released', txt.kor)]);
    doc('m2', 'WA-005', t('Lieferantenbewertung', 'Supplier rating'), 'wa', 'Eva Ersteller', -30, [ver(1, 420, 'released', txt.bes)]);
    return { people: people, mand: mand, docs: docs, viewer: 'p1' };
  }

  var st = UP.store('docs', seed), D = st.data;
  var ui = { mand: 'm1', tab: 'docs', doc: null, msg: '' };

  function person() { return D.people.filter(function (p) { return p.id === D.viewer; })[0]; }
  function mand() { return D.mand.filter(function (m) { return m.id === ui.mand; })[0]; }
  function typeLabel(k) { return TYPES.filter(function (x) { return x[0] === k; })[0][1]; }
  function last(d) { return d.versions[d.versions.length - 1]; }
  function released(d) { var r = d.versions.filter(function (v) { return v.status === 'released'; }); return r.length ? r[r.length - 1] : null; }
  function badge(s) { return h('span', { class: 'badge ' + (s === 'released' ? 'ok' : s === 'superseded' ? '' : s === 'draft' ? 'info' : 'wait'), text: ST[s] }); }
  function say(m) { ui.msg = m; }
  function mdocs() { return D.docs.filter(function (d) { return d.mand === ui.mand; }).sort(function (a, b) { return a.nr < b.nr ? -1 : 1; }); }
  function overdue(d) { return d.reviewDue < Date.now(); }

  function barView() {
    var vs = h('select', { id: 'viewer', onchange: function (ev) { D.viewer = ev.target.value; st.save(); render(); } }, D.people.map(function (p) { return h('option', { value: p.id, selected: p.id === D.viewer, text: p.name + ' (' + roleLabel(p.role) + ')' }); }));
    var ms = h('select', { id: 'mand', onchange: function (ev) { ui.mand = ev.target.value; ui.doc = null; render(); } }, D.mand.map(function (m) { return h('option', { value: m.id, selected: m.id === ui.mand, text: m.name }); }));
    return h('div', { class: 'bar' }, h('label', null, t('Ansicht als', 'View as'), vs), h('label', null, t('Mandant', 'Client'), ms));
  }
  function roleLabel(r) { return r === 'author' ? t('Ersteller', 'Author') : r === 'reviewer' ? t('Prüfer', 'Reviewer') : t('Freigeber', 'Approver'); }

  function listView() {
    var rows = mdocs().map(function (d) {
      var l = last(d), r = released(d);
      return h('tr', { class: ui.doc === d.id ? 'sel' : '' }, h('th', { scope: 'row', text: d.nr }), h('td', null, h('a', { href: '#', onclick: function (ev) { ev.preventDefault(); ui.doc = d.id; ui.msg = ''; render(); window.scrollTo({ top: 0 }); }, text: d.title })), h('td', { text: typeLabel(d.type) }),
        h('td', { class: 'num', text: 'V' + l.v }), h('td', null, badge(l.status)), h('td', { class: 'num', text: r ? 'V' + r.v : '–' }));
    });
    var newBtn = person().role === 'author' ? h('button', { type: 'button', class: 'primary', onclick: newDocDialog, text: t('Neues Dokument', 'New document') }) : null;
    return [h('div', { class: 'formrow' }, newBtn), h('div', { class: 'tablewrap' }, h('table', null, h('caption', { text: t('Dokumente ', 'Documents ') + mand().name }), h('thead', null, h('tr', null, [t('Nr.', 'No.'), t('Titel', 'Title'), t('Art', 'Type'), t('Aktuell', 'Latest'), t('Status', 'Status'), t('In Kraft', 'In force')].map(function (x, i) { return h('th', { scope: 'col', class: i > 2 && i !== 4 ? 'num' : '', text: x }); }))), h('tbody', null, rows)))];
  }

  function docView(d) {
    var l = last(d), p = person(), kids = [];
    kids.push(h('p', null, h('a', { href: '#', onclick: function (ev) { ev.preventDefault(); ui.doc = null; render(); }, text: '‹ ' + t('Zurück zur Liste', 'Back to list') })));
    kids.push(h('h3', { text: d.nr + ' · ' + d.title }));
    kids.push(h('p', { class: 'muted', text: typeLabel(d.type) + ' · ' + t('Verantwortlich: ', 'Owner: ') + d.owner + ' · ' + t('Prüfung fällig: ', 'Review due: ') + UP.fmtDT(d.reviewDue).slice(0, 10) + (overdue(d) ? ' (' + t('überfällig', 'overdue') + ')' : '') }));
    kids.push(h('p', { class: 'msg', role: 'status', hidden: ui.msg ? null : true, text: ui.msg }));
    var actions = [];
    function act(label, cls, fn) { actions.push(h('button', { type: 'button', class: cls || '', onclick: function () { fn(); st.save(); render(); }, text: label }), ' '); }
    if (p.role === 'author' && l.status === 'draft') act(t('Zur Prüfung geben', 'Submit for review'), 'primary', function () { l.status = 'review'; l.comment = ''; say(t('Zur Prüfung übergeben.', 'Submitted for review.')); });
    if (p.role === 'author' && (l.status === 'released') ) act(t('Neue Version erstellen', 'Create new version'), 'primary', function () { d.versions.push({ v: l.v + 1, ts: Date.now(), author: p.name, status: 'draft', text: l.text, comment: '' }); say(t('Neuer Entwurf erstellt.', 'New draft created.')); });
    if (p.role === 'reviewer' && l.status === 'review') {
      act(t('Prüfung bestanden, zur Freigabe', 'Review passed, send for approval'), 'primary', function () { l.status = 'approval'; say(t('An die Freigabe übergeben.', 'Passed on for approval.')); });
      act(t('Zurückweisen', 'Reject'), 'danger', function () { var c = window.prompt(t('Kommentar zur Zurückweisung:', 'Comment for rejection:'), ''); l.status = 'draft'; l.comment = c || t('Zurückgewiesen.', 'Rejected.'); say(t('Zurück an den Ersteller.', 'Returned to the author.')); });
    }
    if (p.role === 'approver' && l.status === 'approval') {
      act(t('Freigeben (in Kraft setzen)', 'Approve (put into force)'), 'primary', function () { d.versions.forEach(function (v) { if (v.status === 'released') v.status = 'superseded'; }); l.status = 'released'; l.ts = Date.now(); d.reviewDue = Date.now() + 365 * DAY; say(t('Version in Kraft gesetzt. Die bisherige Version gilt als ersetzt.', 'Version put into force. The previous version is marked as superseded.')); });
      act(t('Zurückweisen', 'Reject'), 'danger', function () { var c = window.prompt(t('Kommentar zur Zurückweisung:', 'Comment for rejection:'), ''); l.status = 'draft'; l.comment = c || t('Zurückgewiesen.', 'Rejected.'); say(t('Zurück an den Ersteller.', 'Returned to the author.')); });
    }
    if (!actions.length) actions.push(h('span', { class: 'muted', text: t('Für diese Rolle gibt es bei diesem Stand keine Aktion. Wechsle oben die Ansicht.', 'There is no action for this role at this stage. Change the view above.') }));
    kids.push(h('div', { class: 'formrow' }, actions));
    if (l.comment) kids.push(h('p', { class: 'msg' }, h('strong', { text: t('Kommentar: ', 'Comment: ') }), l.comment));
    kids.push(h('p', null, badge(l.status), ' ', h('span', { class: 'muted', text: 'V' + l.v + ' · ' + l.author + ' · ' + UP.fmtDT(l.ts) })));
    if (p.role === 'author' && l.status === 'draft') {
      var ta = h('textarea', { id: 'doc-text', 'aria-label': t('Dokumenttext', 'Document text'), rows: 12 }, l.text);
      ta.value = l.text;
      kids.push(ta);
      kids.push(h('div', { class: 'formrow' }, h('button', { type: 'button', onclick: function () { l.text = ta.value; st.save(); say(t('Entwurf gespeichert.', 'Draft saved.')); render(); }, text: t('Entwurf speichern', 'Save draft') })));
    } else kids.push(h('div', { class: 'doc-text', text: l.text }));
    var rows = d.versions.slice().reverse().map(function (v) { return h('tr', null, h('td', { class: 'num', text: 'V' + v.v }), h('td', null, badge(v.status)), h('td', { text: v.author }), h('td', { text: UP.fmtDT(v.ts) })); });
    kids.push(h('div', { class: 'tablewrap' }, h('table', null, h('caption', { text: t('Versionen', 'Versions') }), h('thead', null, h('tr', null, [t('Version', 'Version'), t('Status', 'Status'), t('Von', 'By'), t('Datum', 'Date')].map(function (x, i) { return h('th', { scope: 'col', class: i === 0 ? 'num' : '', text: x }); }))), h('tbody', null, rows))));
    return kids;
  }

  function newDocDialog() {
    var dlg = h('dialog', { 'aria-labelledby': 'dlg-h' });
    var title = h('input', { type: 'text', id: 'nd-title', required: true }), type = h('select', { id: 'nd-type' }, TYPES.map(function (x) { return h('option', { value: x[0], text: x[1] }); }));
    function close() { dlg.close(); document.body.removeChild(dlg); }
    dlg.appendChild(h('h3', { id: 'dlg-h', text: t('Neues Dokument', 'New document') }));
    dlg.appendChild(h('form', { method: 'dialog', onsubmit: function (ev) {
      ev.preventDefault();
      var pre = type.value.toUpperCase(), n = D.docs.filter(function (d) { return d.mand === ui.mand; }).length + 100;
      var d = { id: UP.uid(), mand: ui.mand, nr: pre + '-' + n, title: title.value, type: type.value, owner: person().name, reviewDue: Date.now() + 365 * DAY, versions: [{ v: 1, ts: Date.now(), author: person().name, status: 'draft', text: t('Zweck\n\nAblauf\n', 'Purpose\n\nProcess\n'), comment: '' }] };
      D.docs.push(d); st.save(); ui.doc = d.id; close(); render();
    } }, h('div', { class: 'formrow' }, h('label', { for: 'nd-title' }, t('Titel', 'Title'), title), h('label', { for: 'nd-type' }, t('Art', 'Type'), type)),
      h('div', { class: 'formrow' }, h('button', { type: 'submit', class: 'primary', text: t('Erstellen', 'Create') }), h('button', { type: 'button', onclick: close, text: t('Abbrechen', 'Cancel') }))));
    document.body.appendChild(dlg); if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); title.focus();
  }

  function handbookView() {
    var rel = mdocs().map(function (d) { return { d: d, v: released(d) }; }).filter(function (x) { return x.v; });
    var toc = h('ol', { class: 'toc' }, rel.map(function (x, i) { return h('li', null, h('a', { href: '#hb-' + i, text: x.d.nr + ' ' + x.d.title })); }));
    var chapters = rel.map(function (x, i) { return h('section', { id: 'hb-' + i, class: 'chapter' }, h('h2', { text: (i + 1) + ' ' + x.d.title }), h('p', { class: 'meta', text: x.d.nr + ' · ' + t('Version ', 'Version ') + x.v.v + ' · ' + t('in Kraft seit ', 'in force since ') + UP.fmtDT(x.v.ts).slice(0, 10) }), h('div', { class: 'doc-text', text: x.v.text })); });
    return [h('div', { class: 'formrow no-print' }, h('button', { type: 'button', class: 'primary', onclick: function () { window.print(); }, text: t('Handbuch drucken', 'Print manual') })),
      h('div', { class: 'handbook' }, h('h2', { text: t('QM-Handbuch ', 'Quality manual ') + mand().name }), h('p', { class: 'meta', text: t('Es erscheinen nur freigegebene Versionen. Stand: ', 'Only released versions appear. As of: ') + UP.fmtDT(Date.now()) }), h('h3', { text: t('Inhalt', 'Contents') }), toc, chapters)];
  }

  function auditView() {
    var ds = mdocs(), cnt = function (s) { return ds.filter(function (d) { return last(d).status === s; }).length; };
    var ov = ds.filter(overdue);
    function k(l, v, c) { return h('div', { class: 'kpi' }, h('span', { text: l }), h('strong', { class: c || '', text: v })); }
    var rows = ds.map(function (d) { var l = last(d), r = released(d); return h('tr', null, h('th', { scope: 'row', text: d.nr }), h('td', { text: d.title }), h('td', null, badge(l.status)), h('td', { class: 'num', text: r ? 'V' + r.v : '–' }), h('td', { text: UP.fmtDT(d.reviewDue).slice(0, 10) }), h('td', null, overdue(d) ? h('span', { class: 'badge no', text: t('überfällig', 'overdue') }) : h('span', { class: 'badge ok', text: 'OK' }))); });
    var csvRows = [[t('Nr.', 'No.'), t('Titel', 'Title'), t('Status', 'Status'), t('In Kraft', 'In force'), t('Prüfung fällig', 'Review due'), t('Überfällig', 'Overdue')]].concat(ds.map(function (d) { var l = last(d), r = released(d); return [d.nr, d.title, ST[l.status], r ? 'V' + r.v : '', UP.fmtDT(d.reviewDue).slice(0, 10), overdue(d) ? t('ja', 'yes') : t('nein', 'no')]; }));
    return [h('div', { class: 'formrow no-print' }, h('button', { type: 'button', class: 'primary', onclick: function () { window.print(); }, text: t('Bericht drucken', 'Print report') }), h('button', { type: 'button', onclick: function () { UP.download('auditbericht-' + mand().id + '.csv', UP.csv(csvRows), 'text/csv;charset=utf-8'); }, text: t('Als CSV exportieren', 'Export as CSV') })),
      h('h2', { text: t('Auditbericht ', 'Audit report ') + mand().name }), h('p', { class: 'muted', text: t('Stand ', 'As of ') + UP.fmtDT(Date.now()) }),
      h('div', { class: 'kpis' }, k(t('Dokumente', 'Documents'), ds.length), k(t('Freigegeben', 'Released'), cnt('released')), k(t('In Bearbeitung', 'In progress'), cnt('draft') + cnt('review') + cnt('approval')), k(t('Prüfung überfällig', 'Review overdue'), ov.length, ov.length ? 'neg' : 'pos')),
      h('div', { class: 'tablewrap' }, h('table', null, h('caption', { text: t('Dokumentenstand', 'Document status') }), h('thead', null, h('tr', null, [t('Nr.', 'No.'), t('Titel', 'Title'), t('Status', 'Status'), t('In Kraft', 'In force'), t('Prüfung fällig', 'Review due'), t('Beurteilung', 'Assessment')].map(function (x, i) { return h('th', { scope: 'col', class: i === 3 ? 'num' : '', text: x }); }))), h('tbody', null, rows)))];
  }

  function render() {
    var tabs = [['docs', t('Dokumente', 'Documents')], ['hb', t('QM-Handbuch', 'Quality manual')], ['audit', t('Auditbericht', 'Audit report')]];
    var sub = h('div', { class: 'subtabs', role: 'tablist' }, tabs.map(function (x) { return h('button', { type: 'button', role: 'tab', 'aria-selected': ui.tab === x[0] ? 'true' : 'false', onclick: function () { ui.tab = x[0]; ui.msg = ''; render(); }, text: x[1] }); }));
    var body;
    if (ui.tab === 'docs') { var d = ui.doc && D.docs.filter(function (x) { return x.id === ui.doc; })[0]; body = d ? docView(d) : listView(); } else body = ui.tab === 'hb' ? handbookView() : auditView();
    var fid = document.activeElement && document.activeElement.id;
    UP.clear(app); app.appendChild(barView()); app.appendChild(sub); body.forEach(function (n) { if (n) app.appendChild(n); });
    ui.msg = '';
    if (fid) { var el = document.getElementById(fid); if (el && el.tagName === 'SELECT') el.focus(); }
  }

  UP.init(function () { st.reset(); window.location.reload(); });
  render();
})();
