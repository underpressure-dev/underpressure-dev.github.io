/* Live-Demo Kundenportal: Ordner pro Kunde, Upload, Freigabe-Links, Aktivität. Erfundene Beispieldaten. */
(function () {
  'use strict';
  var UP = window.UP, h = UP.h, lang = UP.lang;
  function t(de, en) { return lang === 'de' ? de : en; }
  var app = document.getElementById('app');
  var DAY = 86400000;
  var blobs = {};   // hochgeladene Dateien nur im Arbeitsspeicher dieser Sitzung

  function seed() {
    var now = Date.now();
    var custs = [{ id: 'c1', name: 'Beispiel Maschinenbau AG', contact: 'einkauf@beispiel-maschinenbau.example' },
      { id: 'c2', name: 'Demo Treuhand GmbH', contact: 'buero@demo-treuhand.example' }, { id: 'c3', name: 'Muster Bau AG', contact: 'projekte@muster-bau.example' }];
    function f(c, name, kb, by, daysAgo, text) { return { id: UP.uid(), cust: c, name: name, size: Math.round(kb * 1024), by: by, ts: now - daysAgo * DAY, text: text }; }
    var files = [
      f('c1', 'Offerte-2026-014.txt', 4.2, 'intern', 12, t('Offerte 2026-014 (Beispiel)\nPosition 1: Konstruktion Baugruppe\nPosition 2: Fertigungsunterlagen\nDies ist ein erfundenes Dokument für die Demo.', 'Quote 2026-014 (sample)\nItem 1: assembly design\nItem 2: manufacturing documents\nThis is a made-up document for the demo.')),
      f('c1', 'Messprotokoll-Maerz.csv', 12.8, 'kunde', 5, 'Datum;Messwert;Einheit\n2026-03-01;12.4;bar\n2026-03-02;12.6;bar\n2026-03-03;12.5;bar'),
      f('c1', 'Zeichnungsliste.txt', 2.1, 'intern', 2, 'Z-100 Gehaeuse\nZ-101 Deckel\nZ-102 Welle'),
      f('c2', 'Jahresabschluss-Entwurf.txt', 8.6, 'intern', 20, t('Entwurf Jahresabschluss (Beispiel, erfundene Zahlen)', 'Draft annual accounts (sample, made-up figures)')),
      f('c2', 'Belege-Q1.csv', 33.0, 'kunde', 9, 'Beleg;Betrag\nB-001;120.00\nB-002;89.50'),
      f('c3', 'Bauprogramm.txt', 5.5, 'intern', 30, t('Bauprogramm (Beispiel)\nWoche 1: Aushub\nWoche 2: Fundament', 'Construction schedule (sample)\nWeek 1: excavation\nWeek 2: foundation'))
    ];
    var links = [
      { id: UP.uid(), fileId: files[0].id, cust: 'c1', token: UP.token(), created: now - 3 * DAY, expires: now + 4 * DAY, pw: '', downloads: 1, revoked: false },
      { id: UP.uid(), fileId: files[3].id, cust: 'c2', token: UP.token(), created: now - 20 * DAY, expires: now - 13 * DAY, pw: 'demo', downloads: 2, revoked: false }
    ];
    var log = [
      { ts: now - 20 * DAY, cust: 'c2', who: t('Verwaltung', 'Administration'), action: 'up', detail: files[3].name },
      { ts: now - 12 * DAY, cust: 'c1', who: t('Verwaltung', 'Administration'), action: 'up', detail: files[0].name },
      { ts: now - 5 * DAY, cust: 'c1', who: 'Beispiel Maschinenbau AG', action: 'up', detail: files[1].name },
      { ts: now - 3 * DAY, cust: 'c1', who: t('Verwaltung', 'Administration'), action: 'link', detail: files[0].name },
      { ts: now - 1 * DAY, cust: 'c1', who: t('Extern (Link)', 'External (link)'), action: 'down', detail: files[0].name }
    ];
    return { custs: custs, files: files, links: links, log: log, viewer: 'intern' };
  }

  var st = UP.store('portal', seed, 2), D = st.data;
  var ui = { cust: null, msg: '', err: false, shown: null };
  UP.initTheme(app); app.classList.add('t-portal');
  if (UP.params.get('c')) ui.cust = UP.params.get('c');
  var ACT = { up: t('hat hochgeladen', 'uploaded'), down: t('hat heruntergeladen', 'downloaded'), link: t('hat einen Link erstellt für', 'created a link for'), revoke: t('hat einen Link widerrufen für', 'revoked a link for'), del: t('hat gelöscht', 'deleted') };

  function cust(id) { return D.custs.filter(function (c) { return c.id === id; })[0]; }
  function file(id) { return D.files.filter(function (f) { return f.id === id; })[0]; }
  function intern() { return D.viewer === 'intern'; }
  function who() { return intern() ? t('Verwaltung', 'Administration') : cust(D.viewer).name; }
  function logIt(c, w, action, detail) { D.log.unshift({ ts: Date.now(), cust: c, who: w, action: action, detail: detail }); D.log = D.log.slice(0, 150); }
  function lstate(l) { return l.revoked ? 'rev' : (Date.now() > l.expires ? 'exp' : 'ok'); }
  function lbadge(l) { var s = lstate(l); return h('span', { class: 'a-badge ' + (s === 'ok' ? 'ok' : 'no'), text: s === 'ok' ? t('aktiv', 'active') : s === 'exp' ? t('abgelaufen', 'expired') : t('widerrufen', 'revoked') }); }
  function shareUrl(l) { return window.location.href.split('#')[0] + '#/share/' + l.token; }
  function blobOf(f) { if (blobs[f.id]) return blobs[f.id]; if (typeof f.text === 'string') return new Blob([f.text], { type: 'text/plain;charset=utf-8' }); return null; }
  function ext(n) { var m = /\.([a-z0-9]{1,4})$/i.exec(n); return m ? m[1] : 'file'; }
  function say(m, err) { ui.msg = m; ui.err = !!err; }
  function msg() { return ui.msg ? h('p', { class: 'a-msg' + (ui.err ? ' err' : ''), role: 'status', text: ui.msg }) : null; }
  function card(l, v, cls) { return h('div', { class: 'a-card ' + (cls || '') }, h('div', { class: 'l', text: l }), h('div', { class: 'v', text: v })); }

  function header() {
    var sel = h('select', { 'aria-label': t('Ansicht als', 'View as'), onchange: function (ev) { D.viewer = ev.target.value; ui.cust = intern() ? null : D.viewer; ui.msg = ''; st.save(); window.location.hash = ''; render(); } },
      h('option', { value: 'intern', selected: intern(), text: t('Ansicht: Verwaltung', 'View: administration') }),
      D.custs.map(function (c) { return h('option', { value: c.id, selected: D.viewer === c.id, text: t('Ansicht: ', 'View: ') + c.name }); }));
    return h('header', { class: 'p-head' }, h('div', { class: 'p-head-inner' },
      h('div', { class: 'p-brand' }, h('b', { text: t('Kundenportal', 'Client portal') }), h('span', { text: 'Beispiel AG' })),
      h('div', { class: 'p-actions' }, sel, UP.themeButton(app, 'p-theme'))));
  }
  function hero(kicker, title, whoEls) { return h('div', { class: 'p-hero' }, h('div', { class: 'p-kicker', text: kicker }), h('h1', { text: title }), whoEls ? h('div', { class: 'p-who' }, whoEls) : null); }

  function download(f, w) {
    var b = blobOf(f);
    if (!b) { say(t('Der Inhalt dieser Datei ist in der Demo nur in der Sitzung des Hochladens verfügbar.', 'In the demo the content of this file is only available in the session it was uploaded in.'), true); render(); return; }
    logIt(f.cust, w, 'down', f.name); st.save(); UP.saveBlob(f.name, b); render();
  }
  function upload(c, fl) {
    if (!fl) return;
    var rec = { id: UP.uid(), cust: c.id, name: fl.name, size: fl.size, by: intern() ? 'intern' : 'kunde', ts: Date.now() };
    blobs[rec.id] = fl; D.files.push(rec); logIt(c.id, who(), 'up', fl.name); st.save(); say(t('Hochgeladen: ', 'Uploaded: ') + fl.name); render();
  }
  function linkDialog(f) {
    var days = h('select', null, [[1, t('1 Tag', '1 day')], [7, t('7 Tage', '7 days')], [30, t('30 Tage', '30 days')]].map(function (o, i) { return h('option', { value: o[0], selected: i === 1, text: o[1] }); }));
    var pw = h('input', { type: 'text', autocomplete: 'off', placeholder: t('optional', 'optional') });
    UP.dialog(app, t('Freigabe-Link erstellen', 'Create sharing link'), [h('p', { class: 'a-sub', text: f.name }),
      h('div', { class: 'a-form' }, h('label', { class: 'a-field' }, t('Gültigkeit', 'Validity'), days), h('label', { class: 'a-field' }, t('Passwort', 'Password'), pw))], function () {
      var l = { id: UP.uid(), fileId: f.id, cust: f.cust, token: UP.token(), created: Date.now(), expires: Date.now() + (+days.value) * DAY, pw: pw.value.trim(), downloads: 0, revoked: false };
      D.links.push(l); logIt(f.cust, who(), 'link', f.name); st.save(); ui.shown = l.id; say(t('Link erstellt. Du kannst ihn jetzt kopieren.', 'Link created. You can copy it now.')); render();
    }, t('Erstellen', 'Create'));
  }

  // ---------- Übersicht der Verwaltung
  function vOverview() {
    var active = D.links.filter(function (l) { return lstate(l) === 'ok'; }).length, dl = D.links.reduce(function (s, l) { return s + l.downloads; }, 0);
    var grid = h('div', { class: 'a-cust' }, D.custs.map(function (c) {
      var n = D.files.filter(function (f) { return f.cust === c.id; }).length, ln = D.links.filter(function (l) { return l.cust === c.id && lstate(l) === 'ok'; }).length;
      return h('button', { type: 'button', onclick: function () { ui.cust = c.id; ui.msg = ''; render(); } }, h('b', { text: c.name }), h('span', { text: n + ' ' + t('Dateien', 'files') + ' · ' + ln + ' ' + t('aktive Links', 'active links') }));
    }));
    var add = h('button', { type: 'button', class: 'a-btn p', onclick: function () {
      var name = h('input', { type: 'text' }), mail = h('input', { type: 'email', placeholder: 'name@firma.example' });
      UP.dialog(app, t('Neuer Kunde', 'New client'), h('div', { class: 'a-form' }, h('label', { class: 'a-field' }, t('Firma', 'Company'), name), h('label', { class: 'a-field' }, t('E-Mail', 'Email'), mail)), function () {
        if (!name.value.trim()) return false; D.custs.push({ id: UP.uid(), name: name.value.trim(), contact: mail.value.trim() || '-' }); st.save(); say(t('Kunde angelegt.', 'Client created.')); render();
      }, t('Anlegen', 'Create'));
    }, text: '+ ' + t('Kunde', 'Client') });
    return [hero(t('Verwaltung', 'Administration'), t('Kunden', 'Clients'), [h('span', { class: 'a-badge info', text: 'Administrator' }), h('span', { class: 'a-mono', text: 'verwaltung@beispiel-ag.example' })]),
      h('div', { class: 'a-main' }, msg(),
        h('div', { class: 'a-row' }, card(t('Kunden', 'Clients'), D.custs.length), card(t('Dateien', 'Files'), D.files.length), card(t('Aktive Links', 'Active links'), active, 'amber'), card(t('Abrufe über Links', 'Link downloads'), dl)),
        h('div', { class: 'a-h2' }, h('span', { text: t('Kundenordner', 'Client folders') }), add), grid,
        h('div', { class: 'a-panel', style: null }, h('h2', { text: t('Letzte Aktivität', 'Recent activity') }), logList(D.log.slice(0, 8), true)))];
  }
  function logList(items, withCust) {
    if (!items.length) return h('p', { class: 'a-sub', text: t('Noch keine Aktivität.', 'No activity yet.') });
    return h('ul', { class: 'a-hist' }, items.map(function (e) { return h('li', null, h('time', { text: UP.fmtDT(e.ts) + (withCust && cust(e.cust) ? ' · ' + cust(e.cust).name : '') }), h('strong', { text: e.who }), ' ' + ACT[e.action] + ' ', h('span', { class: 'a-mono', text: e.detail })); }));
  }

  // ---------- Kundenordner
  function vFolder(c) {
    var input = h('input', { type: 'file', class: 'sr', id: 'p-file', onchange: function (ev) { upload(c, ev.target.files && ev.target.files[0]); } });
    var drop = h('label', { class: 'a-drop', for: 'p-file', html: UP.ICON.upload }, h('span', null, h('b', { text: t('Datei auswählen', 'Choose a file') }), t(' oder hierher ziehen', ' or drag it here')), input);
    ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
    ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('over'); }); });
    drop.addEventListener('drop', function (e) { var fl = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; upload(c, fl); });
    var files = D.files.filter(function (f) { return f.cust === c.id; }).sort(function (a, b) { return b.ts - a.ts; });
    var list = files.length ? h('ul', { class: 'a-files' }, files.map(function (f) {
      var acts = [h('button', { type: 'button', class: 'a-btn s', onclick: function () { download(f, who()); }, text: t('Herunterladen', 'Download') })];
      if (intern()) acts.push(h('button', { type: 'button', class: 'a-btn s p', onclick: function () { linkDialog(f); }, text: t('Teilen', 'Share') }),
        h('button', { type: 'button', class: 'a-btn s d', 'aria-label': t('Löschen: ', 'Delete: ') + f.name, onclick: function () { if (!window.confirm(t('Datei löschen?', 'Delete file?'))) return; D.files = D.files.filter(function (x) { return x.id !== f.id; }); D.links.forEach(function (l) { if (l.fileId === f.id) l.revoked = true; }); logIt(c.id, who(), 'del', f.name); st.save(); render(); }, text: t('Löschen', 'Delete') }));
      return h('li', null, h('span', { class: 'a-fico', 'aria-hidden': 'true', text: ext(f.name) }), h('div', null, h('div', { class: 'a-fname', text: f.name }),
        h('div', { class: 'a-fmeta', text: UP.size(f.size) + ' · ' + UP.fmtDT(f.ts) + ' · ' + (f.by === 'intern' ? t('von Verwaltung', 'by administration') : t('vom Kunden', 'by client')) })), h('div', { class: 'a-factions' }, acts));
    })) : h('p', { class: 'a-empty', text: t('Noch keine Dateien in diesem Ordner.', 'No files in this folder yet.') });
    var right = [];
    if (intern()) {
      var links = D.links.filter(function (l) { return l.cust === c.id; }).sort(function (a, b) { return b.created - a.created; });
      right.push(h('div', { class: 'a-panel' }, h('h2', { text: t('Freigabe-Links', 'Sharing links') }), links.length ? h('ul', { class: 'a-files' }, links.map(function (l) {
        var f = file(l.fileId);
        return h('li', { class: 'col' }, h('div', { style: null }, h('div', { class: 'a-fname', text: f ? f.name : t('(gelöscht)', '(deleted)') }),
          h('div', { class: 'a-fmeta' }, lbadge(l), ' ' + t('bis ', 'until ') + UP.fmtDT(l.expires) + ' · ' + (l.pw ? t('mit Passwort', 'with password') : t('ohne Passwort', 'no password')) + ' · ' + l.downloads + ' ' + t('Abrufe', 'downloads')),
          ui.shown === l.id ? h('div', { class: 'a-copy' }, h('label', { class: 'sr', for: 'u-' + l.id, text: 'Link' }), h('input', { id: 'u-' + l.id, readonly: true, value: shareUrl(l), onfocus: function (e) { e.target.select(); } }),
            h('button', { type: 'button', class: 'a-btn s', onclick: function () { var inp = document.getElementById('u-' + l.id); inp.select(); try { navigator.clipboard.writeText(inp.value); say(t('Link kopiert.', 'Link copied.')); render(); } catch (e) { /* manuell kopieren */ } }, text: t('Kopieren', 'Copy') })) : null,
          h('div', { class: 'a-form', style: null }, h('button', { type: 'button', class: 'a-btn s', onclick: function () { ui.shown = ui.shown === l.id ? null : l.id; render(); }, text: ui.shown === l.id ? t('Link verbergen', 'Hide link') : t('Link anzeigen', 'Show link') }),
            h('button', { type: 'button', class: 'a-btn s', onclick: function () { window.location.hash = '#/share/' + l.token; }, text: t('Als Empfänger öffnen', 'Open as recipient') }),
            lstate(l) === 'ok' ? h('button', { type: 'button', class: 'a-btn s d', onclick: function () { l.revoked = true; logIt(c.id, who(), 'revoke', f ? f.name : ''); st.save(); render(); }, text: t('Widerrufen', 'Revoke') }) : null)));
      })) : h('p', { class: 'a-sub', text: t('Noch keine Links. Klick bei einer Datei auf «Teilen».', 'No links yet. Click "Share" on a file.') })));
    }
    right.push(h('div', { class: 'a-panel' }, h('h2', { text: t('Aktivität', 'Activity') }), logList(D.log.filter(function (e) { return e.cust === c.id; }).slice(0, 8), false)));
    var back = intern() ? h('button', { type: 'button', class: 'a-btn s', onclick: function () { ui.cust = null; ui.msg = ''; render(); }, text: '‹ ' + t('Alle Kunden', 'All clients') }) : null;
    return [hero(intern() ? t('Kundenordner', 'Client folder') : t('Kundenbereich', 'Client area'), c.name, [h('span', { class: 'a-badge info', text: intern() ? 'Administrator' : t('Kunde', 'Client') }), h('span', { class: 'a-mono', text: c.contact }), back]),
      h('div', { class: 'a-main' }, msg(), h('div', { class: 'a-grid2 l' }, h('div', null, h('div', { class: 'a-panel' }, h('h2', { text: t('Dateien', 'Files') + ' (' + files.length + ')' }), drop, list)), h('div', null, right)))];
  }

  // ---------- Seite hinter dem Freigabe-Link
  function vShare(token) {
    var l = D.links.filter(function (x) { return x.token === token; })[0];
    var box = h('div', { class: 'a-panel a-share' });
    var back = h('p', { class: 'a-sub' }, h('a', { href: '#', onclick: function (ev) { ev.preventDefault(); window.location.hash = ''; } , text: '‹ ' + t('Zurück zur Verwaltung (Demo)', 'Back to administration (demo)') }));
    var note = h('p', { class: 'a-msg', text: t('So sieht dein Gegenüber den Link: ohne Konto, ohne Anmeldung.', 'This is how your counterpart sees the link: no account, no sign-in.') });
    if (!l || l.revoked) { box.appendChild(h('h2', { text: t('Link ungültig', 'Invalid link') })); box.appendChild(h('p', { text: t('Dieser Freigabe-Link existiert nicht oder wurde widerrufen.', 'This sharing link does not exist or has been revoked.') })); }
    else if (Date.now() > l.expires) { box.appendChild(h('h2', { text: t('Link abgelaufen', 'Link expired') })); box.appendChild(h('p', { text: t('Dieser Link war gültig bis ', 'This link was valid until ') + UP.fmtDT(l.expires) + '.' })); }
    else {
      var f = file(l.fileId);
      var showFile = function () {
        UP.clear(box);
        box.appendChild(h('ul', { class: 'a-files' }, h('li', null, h('span', { class: 'a-fico', text: f ? ext(f.name) : '?' }), h('div', null, h('div', { class: 'a-fname', text: f ? f.name : '?' }), h('div', { class: 'a-fmeta', text: (f ? UP.size(f.size) : '') + ' · ' + t('gültig bis ', 'valid until ') + UP.fmtDT(l.expires) })))));
        box.appendChild(h('button', { type: 'button', class: 'a-btn p', onclick: function () { if (!f) return; var b = blobOf(f); if (!b) { box.appendChild(h('p', { class: 'a-msg err', text: t('Der Inhalt dieser Datei ist in der Demo nur in der Sitzung des Hochladens verfügbar.', 'In the demo the content of this file is only available in the session it was uploaded in.') })); return; } l.downloads++; logIt(f.cust, t('Extern (Link)', 'External (link)'), 'down', f.name); st.save(); UP.saveBlob(f.name, b); }, text: t('Datei herunterladen', 'Download file') }));
      };
      if (l.pw) {
        var pw = h('input', { type: 'password', autocomplete: 'off' }), err = h('p', { class: 'neg', role: 'alert' });
        box.appendChild(h('h2', { text: t('Geschützte Datei', 'Protected file') }));
        box.appendChild(h('form', { class: 'a-form', onsubmit: function (ev) { ev.preventDefault(); if (pw.value === l.pw) showFile(); else err.textContent = t('Falsches Passwort.', 'Wrong password.'); } },
          h('label', { class: 'a-field' }, t('Passwort', 'Password'), pw), h('button', { type: 'submit', class: 'a-btn p', text: t('Öffnen', 'Open') })));
        box.appendChild(err); box.appendChild(h('p', { class: 'a-sub', text: t('Demo-Hinweis: Das Passwort lautet «' + l.pw + '».', 'Demo hint: the password is "' + l.pw + '".') }));
      } else showFile();
    }
    return [hero(t('Freigabe', 'Shared file'), t('Eine Datei wurde mit dir geteilt', 'A file has been shared with you')), h('div', { class: 'a-main' }, note, msg(), box, back)];
  }

  function render() {
    var m = /^#\/share\/([0-9a-f]+)$/.exec(window.location.hash);
    if (!intern()) ui.cust = D.viewer;
    var body = m ? vShare(m[1]) : ui.cust ? vFolder(cust(ui.cust)) : vOverview();
    var path = m ? 's/' + m[1].slice(0, 8) + '…' : ui.cust ? 'ordner/' + ui.cust : 'verwaltung';
    UP.clear(app);
    app.appendChild(UP.chrome('portal.beispiel-ag.ch/' + path));
    app.appendChild(h('div', { class: 'app-shell' }, h('div', { class: 'app-bg', 'aria-hidden': 'true' }), m ? null : header(), body));
    ui.msg = '';
  }

  window.addEventListener('hashchange', render);
  UP.init(function () { st.reset(); window.location.hash = ''; window.location.reload(); });
  render();
})();
