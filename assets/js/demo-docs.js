/* Live-Demo Dokumentenlenkung: Dashboard, Freigabe-Workflow, Versionen, QM-Handbuch, Auditbericht. Erfundene Beispieldaten. */
(function () {
  'use strict';
  var UP = window.UP, h = UP.h, lang = UP.lang;
  function t(de, en) { return lang === 'de' ? de : en; }
  var app = document.getElementById('app');
  var DAY = 86400000;
  var ST = { draft: t('Entwurf', 'Draft'), review: t('In Prüfung', 'In review'), approval: t('Zur Freigabe', 'For approval'), released: t('Freigegeben', 'Released'), superseded: t('Ersetzt', 'Superseded') };
  var STC = { draft: '#8a94a3', review: '#ffb020', approval: '#e07b00', released: '#1a7f37' };
  var TYPES = [['vf', t('Verfahren', 'Procedure')], ['wa', t('Arbeitsanweisung', 'Work instruction')], ['fo', t('Formular', 'Form')]];

  function seed() {
    var now = Date.now();
    var people = [{ id: 'p1', name: 'Eva Ersteller', role: 'author' }, { id: 'p2', name: 'Paul Prüfer', role: 'reviewer' }, { id: 'p3', name: 'Frida Freigabe', role: 'approver' }];
    var mand = [{ id: 'm1', name: 'Beispiel Metallbau AG' }, { id: 'm2', name: 'Demo Logistik GmbH' }];
    var tx = {
      dok: t('1 Zweck\nDieses Verfahren regelt, wie Dokumente erstellt, geprüft, freigegeben und geändert werden.\n\n2 Geltungsbereich\nAlle Dokumente des Managementsystems.\n\n3 Ablauf\n3.1 Der Ersteller erstellt oder ändert das Dokument als Entwurf.\n3.2 Der Prüfer prüft Inhalt und Form.\n3.3 Der Freigeber setzt die Version in Kraft.\n3.4 Die bisherige Version gilt als ersetzt.\n\n4 Prüffrist\nJedes Dokument wird mindestens alle 12 Monate geprüft.', '1 Purpose\nThis procedure governs how documents are created, reviewed, approved and changed.\n\n2 Scope\nAll documents of the management system.\n\n3 Process\n3.1 The author creates or changes the document as a draft.\n3.2 The reviewer checks content and form.\n3.3 The approver puts the version into force.\n3.4 The previous version is marked as superseded.\n\n4 Review period\nEach document is reviewed at least every 12 months.'),
      aud: t('1 Zweck\nInterne Audits prüfen, ob das Managementsystem wirksam ist.\n\n2 Ablauf\nDer Auditplan wird jährlich erstellt. Abweichungen werden mit Massnahmen und Fristen erfasst.', '1 Purpose\nInternal audits check whether the management system is effective.\n\n2 Process\nThe audit plan is created annually. Deviations are recorded with actions and deadlines.'),
      bes: t('1 Zweck\nLieferanten werden nach Qualität, Termin und Preis bewertet.\n\n2 Ablauf\nNeue Lieferanten werden vor der ersten Bestellung beurteilt.\nDie Beurteilung wird jährlich überprüft.', '1 Purpose\nSuppliers are rated on quality, delivery time and price.\n\n2 Process\nNew suppliers are assessed before the first order.\nThe assessment is reviewed annually.'),
      kor: t('1 Zweck\nFehler und Beanstandungen werden erfasst und dauerhaft behoben.\n\n2 Ablauf\nErfassen, Ursache klären, Massnahme festlegen, Wirksamkeit prüfen.', '1 Purpose\nErrors and complaints are recorded and resolved permanently.\n\n2 Process\nRecord, find the cause, define an action, check effectiveness.'),
      sch: t('1 Zweck\nSchweissarbeiten werden nach einheitlichen Vorgaben ausgeführt.\n\n2 Vorgaben\nSchweisser sind qualifiziert.\nPrüfungen werden dokumentiert.', '1 Purpose\nWelding work is carried out to uniform specifications.\n\n2 Specifications\nWelders are qualified.\nInspections are documented.')
    };
    function v(n, daysAgo, status, text, by) { return { v: n, ts: now - daysAgo * DAY, author: by || 'Eva Ersteller', status: status, text: text, comment: '' }; }
    function hist(daysAgo, who, what) { return { ts: now - daysAgo * DAY, who: who, what: what }; }
    var docs = [];
    function doc(m, nr, title, type, owner, review, versions, history) { docs.push({ id: UP.uid(), mand: m, nr: nr, title: title, type: type, owner: owner, reviewDue: now + review * DAY, versions: versions, history: history || [] }); }
    var cr = t('erstellt', 'created'), sub = t('zur Prüfung gegeben', 'submitted for review'), rev = t('Prüfung bestanden', 'review passed'), rel = t('freigegeben', 'released');
    doc('m1', 'VF-001', t('Lenkung von Dokumenten', 'Control of documents'), 'vf', 'Eva Ersteller', 120,
      [v(1, 400, 'superseded', tx.dok.replace(t('alle 12 Monate', 'every 12 months'), t('alle 24 Monate', 'every 24 months'))), v(2, 90, 'released', tx.dok)],
      [hist(400, 'Eva Ersteller', 'V1 ' + cr), hist(398, 'Frida Freigabe', 'V1 ' + rel), hist(95, 'Eva Ersteller', 'V2 ' + cr), hist(92, 'Paul Prüfer', 'V2 ' + rev), hist(90, 'Frida Freigabe', 'V2 ' + rel)]);
    doc('m1', 'VF-002', t('Interne Audits', 'Internal audits'), 'vf', 'Eva Ersteller', -10, [v(1, 500, 'released', tx.aud)], [hist(500, 'Frida Freigabe', 'V1 ' + rel)]);
    doc('m1', 'VF-003', t('Beschaffung und Lieferantenbewertung', 'Procurement and supplier rating'), 'vf', 'Paul Prüfer', 200,
      [v(1, 200, 'released', tx.bes), v(2, 3, 'review', tx.bes + t('\n\n3 Bewertung\nPunkteschema von 1 bis 5 pro Kriterium.', '\n\n3 Rating\nPoints scheme from 1 to 5 per criterion.'))],
      [hist(200, 'Frida Freigabe', 'V1 ' + rel), hist(3, 'Eva Ersteller', 'V2 ' + sub)]);
    doc('m1', 'WA-010', t('Schweissarbeiten', 'Welding work'), 'wa', 'Eva Ersteller', 60, [v(1, 5, 'draft', tx.sch)], [hist(5, 'Eva Ersteller', 'V1 ' + cr)]);
    doc('m1', 'FO-020', t('Formular Korrekturmassnahme', 'Corrective action form'), 'fo', 'Paul Prüfer', 300,
      [v(1, 100, 'released', tx.kor), v(2, 2, 'approval', tx.kor + t('\n\n3 Neu\nFeld «Wirksamkeitsprüfung».', '\n\n3 New\nField "effectiveness check".'))],
      [hist(100, 'Frida Freigabe', 'V1 ' + rel), hist(4, 'Eva Ersteller', 'V2 ' + sub), hist(2, 'Paul Prüfer', 'V2 ' + rev)]);
    doc('m1', 'WA-011', t('Wareneingangsprüfung', 'Incoming goods inspection'), 'wa', 'Eva Ersteller', 25, [v(1, 340, 'released', tx.bes)], [hist(340, 'Frida Freigabe', 'V1 ' + rel)]);
    doc('m2', 'VF-001', t('Lenkung von Dokumenten', 'Control of documents'), 'vf', 'Eva Ersteller', 150, [v(1, 60, 'released', tx.dok)], [hist(60, 'Frida Freigabe', 'V1 ' + rel)]);
    doc('m2', 'VF-004', t('Korrekturmassnahmen', 'Corrective actions'), 'vf', 'Paul Prüfer', 20, [v(1, 300, 'released', tx.kor)], [hist(300, 'Frida Freigabe', 'V1 ' + rel)]);
    doc('m2', 'WA-005', t('Lieferantenbewertung', 'Supplier rating'), 'wa', 'Eva Ersteller', -30, [v(1, 420, 'released', tx.bes)], [hist(420, 'Frida Freigabe', 'V1 ' + rel)]);
    return { people: people, mand: mand, docs: docs, viewer: 'p1', mandant: 'm1' };
  }

  var st = UP.store('docs', seed, 2), D = st.data;
  var ui = { view: 'dash', filter: 'all', q: '', open: null, dtab: 'text', msg: '', err: false };
  UP.initTheme(app); app.classList.add('t-docs');
  if (UP.params.get('v')) ui.view = UP.params.get('v');
  if (UP.params.get('as')) D.viewer = UP.params.get('as');
  if (UP.params.get('doc')) { var pre = D.docs.filter(function (d) { return d.mand === D.mandant && d.nr === UP.params.get('doc'); })[0]; if (pre) { ui.open = pre.id; ui.dtab = UP.params.get('tab') || 'text'; } }

  function me() { return D.people.filter(function (p) { return p.id === D.viewer; })[0]; }
  function mand() { return D.mand.filter(function (m) { return m.id === D.mandant; })[0]; }
  function typeL(k) { return TYPES.filter(function (x) { return x[0] === k; })[0][1]; }
  function last(d) { return d.versions[d.versions.length - 1]; }
  function rel(d) { var r = d.versions.filter(function (v) { return v.status === 'released'; }); return r.length ? r[r.length - 1] : null; }
  function docs() { return D.docs.filter(function (d) { return d.mand === D.mandant; }).sort(function (a, b) { return a.nr < b.nr ? -1 : 1; }); }
  function overdue(d) { return d.reviewDue < Date.now(); }
  function roleL(r) { return r === 'author' ? t('Ersteller', 'Author') : r === 'reviewer' ? t('Prüfer', 'Reviewer') : t('Freigeber', 'Approver'); }
  function isTask(d) { var s = last(d).status, r = me().role; return (r === 'author' && s === 'draft') || (r === 'reviewer' && s === 'review') || (r === 'approver' && s === 'approval'); }
  function badge(s) { var cls = s === 'released' ? 'ok' : s === 'superseded' ? 'grey' : s === 'draft' ? 'grey' : 'wait'; return h('span', { class: 'a-badge ' + cls, text: ST[s] }); }
  function card(l, v, s, cls) { return h('div', { class: 'a-card ' + (cls || '') }, h('div', { class: 'l', text: l }), h('div', { class: 'v', text: v }), s ? h('div', { class: 's', text: s }) : null); }
  function say(m, err) { ui.msg = m; ui.err = !!err; }
  function msg() { return ui.msg ? h('p', { class: 'a-msg' + (ui.err ? ' err' : ''), role: 'status', text: ui.msg }) : null; }
  function open(d) { ui.open = d.id; ui.dtab = 'text'; render(); }
  function addHist(d, what) { d.history.push({ ts: Date.now(), who: me().name, what: what }); }

  // ---------- Dashboard
  function vDash() {
    var ds = docs(), cnt = function (s) { return ds.filter(function (d) { return last(d).status === s; }).length; };
    var tasks = ds.filter(isTask), due = ds.filter(function (d) { return d.reviewDue < Date.now() + 60 * DAY; }).sort(function (a, b) { return a.reviewDue - b.reviewDue; });
    var dist = h('div', { class: 'a-dist', role: 'img', 'aria-label': t('Verteilung nach Status', 'Distribution by status') }, ['released', 'approval', 'review', 'draft'].map(function (s) { return h('span', { 'data-c': STC[s], 'data-w': Math.round(cnt(s) / Math.max(1, ds.length) * 100) }); }));
    var legend = h('div', { class: 'a-legend' }, ['released', 'approval', 'review', 'draft'].map(function (s) { return h('span', null, h('i', { 'data-c': STC[s] }), ST[s] + ' ' + cnt(s)); }));
    var recent = [];
    ds.forEach(function (d) { d.history.forEach(function (x) { recent.push({ d: d, x: x }); }); });
    recent.sort(function (a, b) { return b.x.ts - a.x.ts; });
    var taskHint = me().role === 'author' ? t('Entwürfe zum Bearbeiten', 'Drafts to work on') : me().role === 'reviewer' ? t('Dokumente zur Prüfung', 'Documents to review') : t('Dokumente zur Freigabe', 'Documents to approve');
    return [h('h1', { text: t('Guten Tag, ', 'Hello, ') + me().name.split(' ')[0] }), h('p', { class: 'a-sub', text: roleL(me().role) + ' · ' + mand().name }), ui.open ? null : msg(),
      h('div', { class: 'a-row' }, card(t('Dokumente', 'Documents'), ds.length), card(t('Freigegeben', 'Released'), cnt('released')), card(t('In Bearbeitung', 'In progress'), cnt('draft') + cnt('review') + cnt('approval'), null, 'amber'),
        card(t('Prüfung überfällig', 'Review overdue'), ds.filter(overdue).length, null, ds.filter(overdue).length ? 'warn' : '')),
      h('div', { class: 'a-grid2' },
        h('div', { class: 'a-panel' }, h('h2', { text: t('Meine Aufgaben', 'My tasks') + ' (' + tasks.length + ')' }), h('p', { class: 'a-sub', text: taskHint }),
          tasks.length ? h('ul', { class: 'a-tasks' }, tasks.map(function (d) { return h('li', null, badge(last(d).status), h('button', { type: 'button', onclick: function () { open(d); }, text: d.nr + ' ' + d.title }), h('span', { class: 'a-sub', text: 'V' + last(d).v })); }))
            : h('p', { class: 'a-empty', text: t('Keine offenen Aufgaben für diese Rolle. Wechsle oben rechts die Person.', 'No open tasks for this role. Switch the person at the top right.') })),
        h('div', { class: 'a-panel' }, h('h2', { text: t('Status', 'Status') }), dist, legend,
          h('h2', { text: t('Prüfungen fällig (60 Tage)', 'Reviews due (60 days)'), style: null }),
          due.length ? h('ul', { class: 'a-tasks' }, due.map(function (d) { return h('li', null, h('span', { class: 'a-badge ' + (overdue(d) ? 'no' : 'wait'), text: UP.fmtD(d.reviewDue) }), h('button', { type: 'button', onclick: function () { open(d); }, text: d.nr + ' ' + d.title })); })) : h('p', { class: 'a-sub', text: t('Keine.', 'None.') }))),
      h('div', { class: 'a-panel' }, h('h2', { text: t('Letzte Änderungen', 'Recent changes') }), h('ul', { class: 'a-hist' }, recent.slice(0, 6).map(function (r) { return h('li', null, h('time', { text: UP.fmtDT(r.x.ts) }), h('strong', { text: r.x.who }), ' · ' + r.d.nr + ' ' + r.d.title + ': ' + r.x.what); })))];
  }

  // ---------- Dokumentliste
  function vDocs() {
    var ds = docs(), q = ui.q.toLowerCase();
    var filters = [['all', t('Alle', 'All'), function () { return true; }], ['mine', t('Meine Aufgaben', 'My tasks'), isTask], ['draft', ST.draft, function (d) { return last(d).status === 'draft'; }],
      ['review', ST.review, function (d) { return last(d).status === 'review'; }], ['approval', ST.approval, function (d) { return last(d).status === 'approval'; }], ['released', ST.released, function (d) { return last(d).status === 'released'; }],
      ['due', t('Überfällig', 'Overdue'), overdue]];
    var fn = filters.filter(function (f) { return f[0] === ui.filter; })[0][2];
    var shown = ds.filter(fn).filter(function (d) { return !q || (d.nr + ' ' + d.title + ' ' + last(d).text).toLowerCase().indexOf(q) >= 0; });
    var search = h('input', { type: 'search', id: 'd-search', value: ui.q, placeholder: t('Suche in Titel und Inhalt', 'Search title and content'), 'aria-label': t('Suche', 'Search'), oninput: function (ev) { ui.q = ev.target.value; render(); var s = document.getElementById('d-search'); s.focus(); s.setSelectionRange(s.value.length, s.value.length); } });
    var bar = h('div', { class: 'a-filters' }, filters.map(function (f) { return h('button', { type: 'button', 'aria-pressed': ui.filter === f[0] ? 'true' : 'false', onclick: function () { ui.filter = f[0]; render(); } }, f[1], h('span', { class: 'c', text: String(ds.filter(f[2]).length) })); }), search);
    var rows = shown.map(function (d) {
      var l = last(d), r = rel(d);
      return h('tr', { class: 'click', tabindex: '0', onclick: function () { open(d); }, onkeydown: function (ev) { if (ev.key === 'Enter') open(d); } },
        h('td', { class: 'a-mono', text: d.nr }), h('td', { class: 'wrap' }, h('strong', { text: d.title })), h('td', { text: typeL(d.type) }), h('td', { class: 'r', text: 'V' + l.v }), h('td', null, badge(l.status)),
        h('td', { class: 'r', text: r ? 'V' + r.v : '–' }), h('td', null, h('span', { class: overdue(d) ? 'neg' : '', text: UP.fmtD(d.reviewDue) })), h('td', { text: d.owner }));
    });
    var newBtn = me().role === 'author' ? h('button', { type: 'button', class: 'a-btn p', onclick: newDoc, text: '+ ' + t('Neues Dokument', 'New document') }) : null;
    return [h('div', { class: 'a-h2' }, h('h1', { text: t('Dokumente', 'Documents') }), newBtn), h('p', { class: 'a-sub', text: mand().name }), ui.open ? null : msg(), bar,
      h('div', { class: 'a-tw' }, h('table', null, h('caption', { class: 'sr', text: t('Dokumente', 'Documents') }),
        h('thead', null, h('tr', null, [t('Nr.', 'No.'), t('Titel', 'Title'), t('Art', 'Type'), t('Aktuell', 'Latest'), 'Status', t('In Kraft', 'In force'), t('Prüfung', 'Review'), t('Verantwortlich', 'Owner')].map(function (x, i) { return h('th', { scope: 'col', class: i === 3 || i === 5 ? 'r' : '', text: x }); }))),
        h('tbody', null, rows.length ? rows : h('tr', null, h('td', { colspan: 8, text: t('Keine Dokumente für diesen Filter.', 'No documents for this filter.') })))))];
  }
  function newDoc() {
    var title = h('input', { type: 'text' }), type = h('select', null, TYPES.map(function (x) { return h('option', { value: x[0], text: x[1] }); }));
    UP.dialog(app, t('Neues Dokument', 'New document'), h('div', { class: 'a-form' }, h('label', { class: 'a-field' }, t('Titel', 'Title'), title), h('label', { class: 'a-field' }, t('Art', 'Type'), type)), function () {
      if (!title.value.trim()) return false;
      var n = 100 + D.docs.filter(function (d) { return d.mand === D.mandant && d.type === type.value; }).length;
      var d = { id: UP.uid(), mand: D.mandant, nr: type.value.toUpperCase() + '-' + n, title: title.value.trim(), type: type.value, owner: me().name, reviewDue: Date.now() + 365 * DAY,
        versions: [{ v: 1, ts: Date.now(), author: me().name, status: 'draft', text: t('1 Zweck\n\n2 Geltungsbereich\n\n3 Ablauf\n', '1 Purpose\n\n2 Scope\n\n3 Process\n'), comment: '' }], history: [] };
      addHist(d, 'V1 ' + t('erstellt', 'created')); D.docs.push(d); st.save(); ui.view = 'docs'; ui.open = d.id; ui.dtab = 'text'; render();
    }, t('Anlegen', 'Create'));
  }

  // ---------- Schublade mit Dokumentdetails
  function diff(a, b) {
    var A = a.split('\n'), B = b.split('\n'), n = A.length, m = B.length, L = [];
    for (var i = 0; i <= n; i++) { L.push(new Array(m + 1).fill(0)); }
    for (i = n - 1; i >= 0; i--) for (var j = m - 1; j >= 0; j--) L[i][j] = A[i] === B[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    var out = [], x = 0, y = 0;
    while (x < n && y < m) { if (A[x] === B[y]) { out.push(h('div', { text: A[x] || ' ' })); x++; y++; } else if (L[x + 1][y] >= L[x][y + 1]) { out.push(h('div', null, h('del', { text: A[x] || ' ' }))); x++; } else { out.push(h('div', null, h('ins', { text: B[y] || ' ' }))); y++; } }
    while (x < n) { out.push(h('div', null, h('del', { text: A[x] || ' ' }))); x++; }
    while (y < m) { out.push(h('div', null, h('ins', { text: B[y] || ' ' }))); y++; }
    return h('div', { class: 'a-doc a-diff' }, out);
  }
  function drawer(d) {
    var l = last(d), p = me(), acts = [];
    function act(label, cls, fn) { acts.push(h('button', { type: 'button', class: 'a-btn ' + (cls || ''), onclick: function () { fn(); st.save(); render(); }, text: label })); }
    function reject() { var c = window.prompt(t('Kommentar zur Zurückweisung:', 'Comment for rejection:'), ''); if (c === null) return false; l.status = 'draft'; l.comment = c || t('Zurückgewiesen.', 'Rejected.'); addHist(d, 'V' + l.v + ' ' + t('zurückgewiesen', 'rejected') + (c ? ': ' + c : '')); say(t('Zurück an den Ersteller.', 'Returned to the author.')); }
    if (p.role === 'author' && l.status === 'draft') act(t('Zur Prüfung geben', 'Submit for review'), 'p', function () { var ta = document.getElementById('doc-text'); if (ta) l.text = ta.value; l.status = 'review'; l.comment = ''; addHist(d, 'V' + l.v + ' ' + t('zur Prüfung gegeben', 'submitted for review')); say(t('Zur Prüfung übergeben.', 'Submitted for review.')); });
    if (p.role === 'author' && l.status === 'released') act(t('Neue Version erstellen', 'Create new version'), 'p', function () { d.versions.push({ v: l.v + 1, ts: Date.now(), author: p.name, status: 'draft', text: l.text, comment: '' }); addHist(d, 'V' + (l.v + 1) + ' ' + t('als Entwurf erstellt', 'created as draft')); say(t('Neuer Entwurf erstellt.', 'New draft created.')); });
    if (p.role === 'reviewer' && l.status === 'review') { act(t('Prüfung bestanden', 'Review passed'), 'p', function () { l.status = 'approval'; addHist(d, 'V' + l.v + ' ' + t('Prüfung bestanden', 'review passed')); say(t('An die Freigabe übergeben.', 'Passed on for approval.')); }); act(t('Zurückweisen', 'Reject'), 'd', reject); }
    if (p.role === 'approver' && l.status === 'approval') { act(t('Freigeben', 'Approve'), 'p', function () { d.versions.forEach(function (v) { if (v.status === 'released') v.status = 'superseded'; }); l.status = 'released'; l.ts = Date.now(); d.reviewDue = Date.now() + 365 * DAY; addHist(d, 'V' + l.v + ' ' + t('freigegeben', 'released')); say(t('Version in Kraft gesetzt.', 'Version put into force.')); }); act(t('Zurückweisen', 'Reject'), 'd', reject); }
    if (!acts.length) acts.push(h('span', { class: 'a-sub', text: t('Keine Aktion für ', 'No action for ') + roleL(p.role) + t(' bei diesem Stand.', ' at this stage.') }));
    var tabs = [['text', t('Inhalt', 'Content')], ['versions', t('Versionen', 'Versions') + ' (' + d.versions.length + ')'], ['history', t('Verlauf', 'History')]];
    var body;
    if (ui.dtab === 'text') {
      body = [l.comment ? h('p', { class: 'a-msg err' }, h('strong', { text: t('Kommentar: ', 'Comment: ') }), l.comment) : null];
      if (p.role === 'author' && l.status === 'draft') {
        var ta = h('textarea', { id: 'doc-text', 'aria-label': t('Dokumenttext', 'Document text') }); ta.value = l.text;
        body.push(ta, h('div', { class: 'a-form' }, h('button', { type: 'button', class: 'a-btn', onclick: function () { l.text = ta.value; addHist(d, 'V' + l.v + ' ' + t('bearbeitet', 'edited')); st.save(); say(t('Entwurf gespeichert.', 'Draft saved.')); render(); }, text: t('Entwurf speichern', 'Save draft') })));
      } else body.push(h('div', { class: 'a-doc', text: l.text }));
    } else if (ui.dtab === 'versions') {
      var prev = d.versions.length > 1 ? d.versions[d.versions.length - 2] : null;
      body = [h('div', { class: 'a-tw' }, h('table', null, h('thead', null, h('tr', null, ['Version', 'Status', t('Von', 'By'), t('Datum', 'Date')].map(function (x) { return h('th', { scope: 'col', text: x }); }))),
        h('tbody', null, d.versions.slice().reverse().map(function (v) { return h('tr', null, h('td', { text: 'V' + v.v }), h('td', null, badge(v.status)), h('td', { text: v.author }), h('td', { text: UP.fmtDT(v.ts) })); })))),
        prev ? h('h3', { class: 'a-h2', text: t('Änderungen V', 'Changes V') + prev.v + ' → V' + l.v }) : null, prev ? diff(prev.text, l.text) : null];
    } else {
      body = [h('ul', { class: 'a-hist' }, d.history.slice().reverse().map(function (x) { return h('li', null, h('time', { text: UP.fmtDT(x.ts) }), h('strong', { text: x.who }), ' · ' + x.what); }))];
    }
    function close() { ui.open = null; render(); }
    var dr = h('aside', { class: 'a-drawer', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'dr-title', tabindex: '-1', onkeydown: function (ev) { if (ev.key === 'Escape') close(); } },
      h('div', { class: 'a-drawer-head' }, h('div', null, h('div', { class: 'a-kicker', text: d.nr + ' · ' + typeL(d.type) }), h('h2', { id: 'dr-title', text: d.title }),
        h('div', { class: 'a-meta' }, badge(l.status), h('span', { class: 'a-sub', text: 'V' + l.v + ' · ' + t('Prüfung bis ', 'review by ') + UP.fmtD(d.reviewDue) }))),
        h('button', { type: 'button', class: 'a-x', 'aria-label': t('Schliessen', 'Close'), onclick: close, text: '×' })),
      h('div', { class: 'a-drawer-acts' }, acts),
      h('div', { class: 'a-drawer-tabs', role: 'tablist' }, tabs.map(function (x) { return h('button', { type: 'button', role: 'tab', 'aria-selected': ui.dtab === x[0] ? 'true' : 'false', onclick: function () { ui.dtab = x[0]; render(); }, text: x[1] }); })),
      h('div', { class: 'a-drawer-body' }, msg(), body));
    return [h('div', { class: 'a-drawer-bg', onclick: close }), dr];
  }

  // ---------- Handbuch und Auditbericht
  function vHb() {
    var r = docs().map(function (d) { return { d: d, v: rel(d) }; }).filter(function (x) { return x.v; });
    return [h('div', { class: 'a-h2' }, h('h1', { text: t('QM-Handbuch', 'Quality manual') }), h('button', { type: 'button', class: 'a-btn a-noprint', onclick: function () { window.print(); }, text: t('Drucken', 'Print') })),
      h('p', { class: 'a-sub', text: mand().name + ' · ' + t('nur freigegebene Versionen, Stand ', 'released versions only, as of ') + UP.fmtDT(Date.now()) }),
      h('div', { class: 'a-panel a-hb' }, h('h3', { text: t('Inhalt', 'Contents') }), h('ol', { class: 'a-toc' }, r.map(function (x, i) { return h('li', null, h('a', { href: '#hb-' + i, text: x.d.nr + ' ' + x.d.title })); })),
        r.map(function (x, i) { return h('section', { id: 'hb-' + i }, h('h2', { text: (i + 1) + ' ' + x.d.title }), h('p', { class: 'meta', text: x.d.nr + ' · V' + x.v.v + ' · ' + t('in Kraft seit ', 'in force since ') + UP.fmtD(x.v.ts) }), h('div', { class: 'a-doc', text: x.v.text })); }))];
  }
  function vAudit() {
    var ds = docs(), ov = ds.filter(overdue), cnt = function (s) { return ds.filter(function (d) { return last(d).status === s; }).length; };
    var csvRows = [[t('Nr.', 'No.'), t('Titel', 'Title'), 'Status', t('In Kraft', 'In force'), t('Prüfung fällig', 'Review due'), t('Überfällig', 'Overdue')]].concat(ds.map(function (d) { var r = rel(d); return [d.nr, d.title, ST[last(d).status], r ? 'V' + r.v : '', UP.fmtD(d.reviewDue), overdue(d) ? t('ja', 'yes') : t('nein', 'no')]; }));
    return [h('div', { class: 'a-h2' }, h('h1', { text: t('Auditbericht', 'Audit report') }), h('div', { class: 'a-form a-noprint' },
        h('button', { type: 'button', class: 'a-btn p', onclick: function () { UP.download('auditbericht-' + D.mandant + '.csv', UP.csv(csvRows), 'text/csv;charset=utf-8'); }, text: t('CSV exportieren', 'Export CSV') }),
        h('button', { type: 'button', class: 'a-btn', onclick: function () { window.print(); }, text: t('Drucken', 'Print') }))),
      h('p', { class: 'a-sub', text: mand().name + ' · ' + t('Stand ', 'As of ') + UP.fmtDT(Date.now()) }),
      h('div', { class: 'a-row' }, card(t('Dokumente', 'Documents'), ds.length), card(t('Freigegeben', 'Released'), cnt('released')), card(t('In Bearbeitung', 'In progress'), cnt('draft') + cnt('review') + cnt('approval'), null, 'amber'), card(t('Prüfung überfällig', 'Review overdue'), ov.length, null, ov.length ? 'warn' : '')),
      h('div', { class: 'a-tw' }, h('table', null, h('caption', { class: 'sr', text: t('Dokumentenstand', 'Document status') }),
        h('thead', null, h('tr', null, [t('Nr.', 'No.'), t('Titel', 'Title'), 'Status', t('In Kraft', 'In force'), t('Prüfung fällig', 'Review due'), t('Beurteilung', 'Assessment')].map(function (x) { return h('th', { scope: 'col', text: x }); }))),
        h('tbody', null, ds.map(function (d) { var r = rel(d); return h('tr', null, h('td', { class: 'a-mono', text: d.nr }), h('td', { class: 'wrap', text: d.title }), h('td', null, badge(last(d).status)), h('td', { text: r ? 'V' + r.v : '–' }), h('td', { text: UP.fmtD(d.reviewDue) }), h('td', null, overdue(d) ? h('span', { class: 'a-badge no', text: t('überfällig', 'overdue') }) : h('span', { class: 'a-badge ok', text: 'OK' }))); }))))];
  }

  function render() {
    var nav = [['dash', 'Dashboard'], ['docs', t('Dokumente', 'Documents')], ['hb', t('Handbuch', 'Manual')], ['audit', t('Auditbericht', 'Audit report')]];
    var paths = { dash: 'dashboard', docs: 'dokumente', hb: 'handbuch', audit: 'audit' };
    var ms = h('select', { 'aria-label': t('Mandant', 'Client'), onchange: function (ev) { D.mandant = ev.target.value; ui.open = null; st.save(); render(); } }, D.mand.map(function (m) { return h('option', { value: m.id, selected: m.id === D.mandant, text: m.name }); }));
    var ps = h('select', { 'aria-label': t('Angemeldet als', 'Signed in as'), onchange: function (ev) { D.viewer = ev.target.value; st.save(); ui.msg = ''; render(); } }, D.people.map(function (p) { return h('option', { value: p.id, selected: p.id === D.viewer, text: p.name + ' (' + roleL(p.role) + ')' }); }));
    var body = ui.view === 'dash' ? vDash() : ui.view === 'docs' ? vDocs() : ui.view === 'hb' ? vHb() : vAudit();
    var openDoc = ui.open && D.docs.filter(function (d) { return d.id === ui.open; })[0];
    var bg = h('div', { class: 'app-bg', 'aria-hidden': 'true' }); bg.appendChild(UP.traces('blueprint'));
    var shell = h('div', { class: 'app-shell' }, bg, UP.topbar({ logo: 'D', brand: t('Dokumentenlenkung', 'Document control'), sub: mand().name, nav: nav, cur: ui.view, onNav: function (v) { ui.view = v; ui.open = null; ui.msg = ''; render(); },
      right: [ms, ps, UP.themeButton(app, 'a-icon-btn'), h('span', { class: 'a-avatar', 'aria-hidden': 'true', text: UP.initials(me().name) })] }), h('main', { class: 'a-main' }, body));
    if (openDoc) drawer(openDoc).forEach(function (n) { shell.appendChild(n); });
    var focusId = document.activeElement && document.activeElement.id;
    UP.clear(app);
    app.appendChild(UP.chrome('qm.beispiel-ag.ch/' + paths[ui.view] + (openDoc ? '/' + openDoc.nr.toLowerCase() : '')));
    app.appendChild(shell);
    app.querySelectorAll('[data-c]').forEach(function (el) { el.style.background = el.getAttribute('data-c'); });
    app.querySelectorAll('[data-w]').forEach(function (el) { el.style.width = el.getAttribute('data-w') + '%'; });
    if (openDoc) { var dr = app.querySelector('.a-drawer'); if (dr && !(focusId && document.getElementById(focusId))) dr.focus(); }
    if (focusId === 'd-search') { var s = document.getElementById('d-search'); if (s) s.focus(); }
    ui.msg = '';
  }

  UP.init(function () { st.reset(); window.location.reload(); });
  render();
})();
