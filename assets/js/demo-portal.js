/* Demo Kundenportal: Dateiaustausch, Freigabe-Links, Aktivitätsprotokoll. Erfundene Beispieldaten. */
(function () {
  'use strict';
  var UP = window.UP, h = UP.h, lang = UP.lang;
  function t(de, en) { return lang === 'de' ? de : en; }
  var app = document.getElementById('app');
  var DAY = 86400000;
  var blobs = {};   // hochgeladene Dateien: nur Arbeitsspeicher dieser Sitzung

  function seed() {
    var now = Date.now();
    var custs = [{ id: 'c1', name: 'Beispiel Maschinenbau AG' }, { id: 'c2', name: 'Demo Treuhand GmbH' }, { id: 'c3', name: 'Muster Bau AG' }];
    function f(c, name, kb, by, daysAgo, text) { return { id: UP.uid(), cust: c, name: name, size: Math.round(kb * 1024), by: by, ts: now - daysAgo * DAY, text: text }; }
    var files = [
      f('c1', 'Offerte-2026-014.txt', 4.2, 'intern', 12, 'Offerte 2026-014 (Beispieltext)\nPositionen: Beispielposition 1, Beispielposition 2.\nDies ist ein erfundenes Dokument für die Demo.'),
      f('c1', 'Messprotokoll-Maerz.csv', 12.8, 'kunde', 5, 'Datum;Messwert;Einheit\n2026-03-01;12.4;bar\n2026-03-02;12.6;bar\n2026-03-03;12.5;bar'),
      f('c1', 'Zeichnungsliste.txt', 2.1, 'intern', 2, 'Zeichnungsliste (Beispiel)\nZ-100 Gehäuse\nZ-101 Deckel\nZ-102 Welle'),
      f('c2', 'Jahresabschluss-Entwurf.txt', 8.6, 'intern', 20, 'Entwurf Jahresabschluss (Beispieltext, erfundene Zahlen)'),
      f('c2', 'Belege-Q1.csv', 33.0, 'kunde', 9, 'Beleg;Betrag\nB-001;120.00\nB-002;89.50'),
      f('c3', 'Bauprogramm.txt', 5.5, 'intern', 30, 'Bauprogramm (Beispieltext)\nWoche 1: Aushub\nWoche 2: Fundament')
    ];
    var links = [
      { id: UP.uid(), fileId: files[0].id, cust: 'c1', token: UP.token(), created: now - 3 * DAY, expires: now + 4 * DAY, pw: '', downloads: 1, revoked: false },
      { id: UP.uid(), fileId: files[3].id, cust: 'c2', token: UP.token(), created: now - 20 * DAY, expires: now - 13 * DAY, pw: 'demo', downloads: 2, revoked: false }
    ];
    var log = [
      { ts: now - 20 * DAY, who: 'Intern', action: t('Hochgeladen', 'Uploaded'), detail: files[3].name }, { ts: now - 12 * DAY, who: 'Intern', action: t('Hochgeladen', 'Uploaded'), detail: files[0].name },
      { ts: now - 5 * DAY, who: 'Beispiel Maschinenbau AG', action: t('Hochgeladen', 'Uploaded'), detail: files[1].name }, { ts: now - 3 * DAY, who: 'Intern', action: t('Link erstellt', 'Link created'), detail: files[0].name }
    ];
    return { custs: custs, files: files, links: links, log: log, viewer: 'intern' };
  }

  var st = UP.store('portal', seed), D = st.data;
  var ui = { cust: 'c1', tab: 'files', msg: '', shown: null };

  function cust(id) { return D.custs.filter(function (c) { return c.id === id; })[0]; }
  function file(id) { return D.files.filter(function (f) { return f.id === id; })[0]; }
  function isIntern() { return D.viewer === 'intern'; }
  function logIt(who, action, detail) { D.log.unshift({ ts: Date.now(), who: who, action: action, detail: detail }); D.log = D.log.slice(0, 100); }
  function who() { return isIntern() ? 'Intern' : cust(D.viewer).name; }
  function state(l) { return l.revoked ? 'no' : (Date.now() > l.expires ? 'exp' : 'ok'); }
  function stateBadge(l) { var s = state(l); return h('span', { class: 'badge ' + (s === 'ok' ? 'ok' : 'no'), text: s === 'ok' ? t('aktiv', 'active') : s === 'exp' ? t('abgelaufen', 'expired') : t('widerrufen', 'revoked') }); }
  function say(m) { ui.msg = m; }
  function shareUrl(l) { return window.location.href.split('#')[0] + '#/share/' + l.token; }

  function getBlob(f) {
    if (blobs[f.id]) return blobs[f.id];
    if (typeof f.text === 'string') return new Blob([f.text], { type: 'text/plain;charset=utf-8' });
    return null;
  }
  function saveBlob(f, blob) {
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = f.name; document.body.appendChild(a); a.click();
    window.setTimeout(function () { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 500);
  }

  // ---------- Freigabe-Seite (ohne Anmeldung)
  function shareView(token) {
    var l = D.links.filter(function (x) { return x.token === token; })[0];
    var box = h('div', { class: 'two-narrow' });
    var back = h('p', null, h('a', { href: '#', onclick: function (ev) { ev.preventDefault(); window.location.hash = ''; render(); }, text: t('Zurück zur Verwaltung (Demo)', 'Back to administration (demo)') }));
    UP.clear(app);
    app.appendChild(h('div', { class: 'msg' }, t('Dies ist die Seite, die dein Gegenüber über den Freigabe-Link sieht. Keine Anmeldung nötig.', 'This is the page your counterpart sees via the sharing link. No sign-in needed.')));
    app.appendChild(box);
    if (!l || l.revoked) { box.appendChild(h('h3', { text: t('Link ungültig', 'Invalid link') })); box.appendChild(h('p', { text: t('Dieser Freigabe-Link existiert nicht oder wurde widerrufen.', 'This sharing link does not exist or has been revoked.') })); box.appendChild(back); return; }
    if (Date.now() > l.expires) { box.appendChild(h('h3', { text: t('Link abgelaufen', 'Link expired') })); box.appendChild(h('p', { text: t('Die Gültigkeit dieses Links ist am ', 'This link expired on ') + UP.fmtDT(l.expires) + t(' abgelaufen.', '.') })); box.appendChild(back); return; }
    var f = file(l.fileId);
    function content() {
      UP.clear(box);
      box.appendChild(h('h3', { text: f ? f.name : '?' }));
      box.appendChild(h('p', { class: 'muted', text: (f ? UP.size(f.size) : '') + ' · ' + t('gültig bis ', 'valid until ') + UP.fmtDT(l.expires) }));
      box.appendChild(h('button', { type: 'button', class: 'primary', onclick: function () {
        var b = f && getBlob(f);
        if (!b) { box.appendChild(h('p', { class: 'msg', text: t('Der Inhalt dieser Datei ist in der Demo nur in der Sitzung des Hochladens verfügbar.', 'In the demo the content of this file is only available in the session it was uploaded in.') })); return; }
        l.downloads++; logIt(t('Extern (Link)', 'External (link)'), t('Heruntergeladen', 'Downloaded'), f.name); st.save(); saveBlob(f, b);
      }, text: t('Datei herunterladen', 'Download file') }));
      box.appendChild(back);
    }
    if (l.pw) {
      var pw = h('input', { type: 'password', id: 'share-pw', autocomplete: 'off' }), err = h('p', { class: 'neg', role: 'alert' });
      box.appendChild(h('h3', { text: t('Geschützte Datei', 'Protected file') }));
      box.appendChild(h('form', { class: 'formrow', onsubmit: function (ev) { ev.preventDefault(); if (pw.value === l.pw) content(); else { err.textContent = t('Falsches Passwort.', 'Wrong password.'); } } },
        h('label', null, t('Passwort', 'Password'), pw), h('button', { type: 'submit', class: 'primary', text: t('Öffnen', 'Open') })));
      box.appendChild(err); box.appendChild(h('p', { class: 'muted', text: t('Demo-Hinweis: Das Passwort dieses Links lautet «' + l.pw + '».', 'Demo hint: the password of this link is "' + l.pw + '".') })); box.appendChild(back);
    } else content();
  }

  // ---------- Verwaltung
  function barView() {
    var sel = h('select', { id: 'viewer', onchange: function (ev) { D.viewer = ev.target.value; if (!isIntern()) ui.cust = D.viewer; ui.tab = 'files'; st.save(); render(); } },
      h('option', { value: 'intern', selected: isIntern(), text: t('Intern (Verwaltung)', 'Internal (administration)') }),
      D.custs.map(function (c) { return h('option', { value: c.id, selected: D.viewer === c.id, text: t('Kunde: ', 'Client: ') + c.name }); }));
    return h('div', { class: 'bar' }, h('label', null, t('Ansicht als', 'View as'), sel));
  }

  function filesView() {
    var c = cust(ui.cust);
    var up = h('input', { type: 'file', id: 'upload', onchange: function (ev) {
      var fl = ev.target.files && ev.target.files[0]; if (!fl) return;
      var rec = { id: UP.uid(), cust: c.id, name: fl.name, size: fl.size, by: isIntern() ? 'intern' : 'kunde', ts: Date.now() };
      blobs[rec.id] = fl; D.files.push(rec); logIt(who(), t('Hochgeladen', 'Uploaded'), fl.name); st.save(); say(t('Datei hochgeladen.', 'File uploaded.')); render();
    } });
    var list = D.files.filter(function (f) { return f.cust === c.id; }).sort(function (a, b) { return b.ts - a.ts; });
    var rows = list.map(function (f) {
      var acts = [h('button', { type: 'button', class: 'small', onclick: function () {
        var b = getBlob(f); if (!b) { say(t('Der Inhalt ist nur in der Sitzung des Hochladens verfügbar.', 'The content is only available in the session it was uploaded in.')); render(); return; }
        logIt(who(), t('Heruntergeladen', 'Downloaded'), f.name); st.save(); saveBlob(f, b);
      }, text: t('Herunterladen', 'Download') })];
      if (isIntern()) acts.push(' ', h('button', { type: 'button', class: 'small primary', onclick: function () { openLinkDialog(f); }, text: t('Freigabe-Link', 'Sharing link') }));
      return h('tr', null, h('th', { scope: 'row', text: f.name }), h('td', { class: 'num', text: UP.size(f.size) }), h('td', { text: UP.fmtDT(f.ts) }), h('td', null, h('span', { class: 'badge ' + (f.by === 'intern' ? 'info' : ''), text: f.by === 'intern' ? t('Intern', 'Internal') : t('Kunde', 'Client') })), h('td', null, acts));
    });
    return [h('div', { class: 'formrow' }, h('label', { for: 'upload' }, t('Datei in diesen Ordner hochladen', 'Upload a file to this folder'), up)),
      h('p', { class: 'msg', role: 'status', hidden: ui.msg ? null : true, text: ui.msg }),
      h('div', { class: 'tablewrap' }, h('table', null, h('caption', { text: t('Ordner ', 'Folder ') + c.name }), h('thead', null, h('tr', null, [t('Datei', 'File'), t('Grösse', 'Size'), t('Datum', 'Date'), t('Von', 'From'), ''].map(function (x, i) { return h('th', { scope: 'col', class: i === 1 ? 'num' : '', text: x }); }))), h('tbody', null, rows.length ? rows : h('tr', null, h('td', { colspan: 5, text: t('Noch keine Dateien.', 'No files yet.') })))))];
  }

  function linksView() {
    var list = D.links.filter(function (l) { return l.cust === ui.cust; }).sort(function (a, b) { return b.created - a.created; });
    var rows = list.map(function (l) {
      var f = file(l.fileId);
      var acts = [h('button', { type: 'button', class: 'small', onclick: function () { ui.shown = l.id; render(); }, text: t('Link anzeigen', 'Show link') }), ' ',
        h('button', { type: 'button', class: 'small', onclick: function () { window.location.hash = '#/share/' + l.token; render(); }, text: t('Als Empfänger öffnen', 'Open as recipient') })];
      if (!l.revoked) acts.push(' ', h('button', { type: 'button', class: 'small danger', onclick: function () { l.revoked = true; logIt('Intern', t('Link widerrufen', 'Link revoked'), f ? f.name : ''); st.save(); render(); }, text: t('Widerrufen', 'Revoke') }));
      var cells = [h('th', { scope: 'row', text: f ? f.name : '?' }), h('td', { text: UP.fmtDT(l.created) }), h('td', { text: UP.fmtDT(l.expires) }), h('td', { text: l.pw ? t('ja', 'yes') : t('nein', 'no') }), h('td', { class: 'num', text: l.downloads }), h('td', null, stateBadge(l)), h('td', null, acts)];
      var out = [h('tr', null, cells)];
      if (ui.shown === l.id) out.push(h('tr', null, h('td', { colspan: 7 }, h('label', { class: 'sr', for: 'url-' + l.id }, t('Link', 'Link')), h('input', { id: 'url-' + l.id, class: 'mono', readonly: true, value: shareUrl(l), style: null, size: 70, onfocus: function (e) { e.target.select(); } }))));
      return out;
    });
    return [h('div', { class: 'tablewrap' }, h('table', null, h('caption', { text: t('Freigabe-Links ', 'Sharing links ') + cust(ui.cust).name }), h('thead', null, h('tr', null, [t('Datei', 'File'), t('Erstellt', 'Created'), t('Gültig bis', 'Valid until'), t('Passwort', 'Password'), t('Abrufe', 'Downloads'), t('Status', 'Status'), ''].map(function (x, i) { return h('th', { scope: 'col', class: i === 4 ? 'num' : '', text: x }); }))), h('tbody', null, rows.length ? rows : h('tr', null, h('td', { colspan: 7, text: t('Noch keine Links. Erstelle einen bei einer Datei.', 'No links yet. Create one on a file.') }))))),
      h('p', { class: 'muted', text: t('Der Link ist die Adresse einer Seite. Wer sie kennt und, falls gesetzt, das Passwort, kann die Datei herunterladen, bis der Link abläuft oder du ihn widerrufst.', 'The link is the address of a page. Anyone who knows it and, if set, the password can download the file until the link expires or you revoke it.') })];
  }

  function logView() {
    var rows = D.log.slice(0, 40).map(function (e) { return h('tr', null, h('td', { text: UP.fmtDT(e.ts) }), h('td', { text: e.who }), h('td', { text: e.action }), h('td', { text: e.detail })); });
    return [h('div', { class: 'tablewrap' }, h('table', null, h('caption', { text: t('Aktivität (letzte 40)', 'Activity (latest 40)') }), h('thead', null, h('tr', null, [t('Zeit', 'Time'), t('Wer', 'Who'), t('Aktion', 'Action'), t('Datei', 'File')].map(function (x) { return h('th', { scope: 'col', text: x }); }))), h('tbody', null, rows)))];
  }

  function openLinkDialog(f) {
    var dlg = h('dialog', { 'aria-labelledby': 'dlg-h' });
    var days = h('select', { id: 'dlg-days' }, [[1, t('1 Tag', '1 day')], [7, t('7 Tage', '7 days')], [30, t('30 Tage', '30 days')]].map(function (o, i) { return h('option', { value: o[0], selected: i === 1, text: o[1] }); }));
    var pw = h('input', { type: 'text', id: 'dlg-pw', autocomplete: 'off', placeholder: t('optional', 'optional') });
    dlg.appendChild(h('h3', { id: 'dlg-h', text: t('Freigabe-Link erstellen', 'Create sharing link') }));
    dlg.appendChild(h('p', { class: 'muted', text: f.name }));
    dlg.appendChild(h('form', { method: 'dialog', onsubmit: function (ev) {
      ev.preventDefault();
      var l = { id: UP.uid(), fileId: f.id, cust: f.cust, token: UP.token(), created: Date.now(), expires: Date.now() + (+days.value) * DAY, pw: pw.value.trim(), downloads: 0, revoked: false };
      D.links.push(l); logIt('Intern', t('Link erstellt', 'Link created'), f.name); st.save(); ui.tab = 'links'; ui.shown = l.id; dlg.close(); document.body.removeChild(dlg); render();
    } }, h('div', { class: 'formrow' }, h('label', { for: 'dlg-days' }, t('Gültigkeit', 'Validity'), days), h('label', { for: 'dlg-pw' }, t('Passwort (optional)', 'Password (optional)'), pw)),
      h('div', { class: 'formrow' }, h('button', { type: 'submit', class: 'primary', text: t('Erstellen', 'Create') }), h('button', { type: 'button', onclick: function () { dlg.close(); document.body.removeChild(dlg); }, text: t('Abbrechen', 'Cancel') }))));
    document.body.appendChild(dlg);
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    days.focus();
  }

  function render() {
    var m = /^#\/share\/([0-9a-f]+)$/.exec(window.location.hash);
    if (m) { shareView(m[1]); return; }
    if (!isIntern()) ui.cust = D.viewer;
    var left = isIntern() ? h('ul', { class: 'list', 'aria-label': t('Kunden', 'Clients') }, D.custs.map(function (c) {
      return h('li', null, h('button', { type: 'button', 'aria-current': c.id === ui.cust ? 'true' : 'false', onclick: function () { ui.cust = c.id; ui.msg = ''; ui.shown = null; render(); }, text: c.name }));
    })) : null;
    var tabs = isIntern() ? [['files', t('Dateien', 'Files')], ['links', t('Freigabe-Links', 'Sharing links')], ['log', t('Aktivität', 'Activity')]] : [['files', t('Dateien', 'Files')]];
    if (tabs.every(function (x) { return x[0] !== ui.tab; })) ui.tab = 'files';
    var sub = h('div', { class: 'subtabs', role: 'tablist' }, tabs.map(function (x) { return h('button', { type: 'button', role: 'tab', 'aria-selected': ui.tab === x[0] ? 'true' : 'false', onclick: function () { ui.tab = x[0]; ui.msg = ''; render(); }, text: x[1] }); }));
    var body = ui.tab === 'files' ? filesView() : ui.tab === 'links' ? linksView() : logView();
    var main = h('div', null, tabs.length > 1 ? sub : null, body);
    var fid = document.activeElement && document.activeElement.id;
    UP.clear(app); app.appendChild(barView());
    app.appendChild(left ? h('div', { class: 'two' }, left, main) : main);
    ui.msg = '';
    if (fid) { var el = document.getElementById(fid); if (el && el.tagName !== 'INPUT') el.focus(); }
  }

  window.addEventListener('hashchange', render);
  UP.init(function () { st.reset(); window.location.hash = ''; window.location.reload(); });
  render();
})();
