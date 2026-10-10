/* Gemeinsame Bausteine der Live-Demos. Alles läuft im Browser, nichts wird gesendet. */
(function () {
  'use strict';
  var lang = (document.documentElement.lang || 'de').slice(0, 2) === 'en' ? 'en' : 'de';
  var params = new URLSearchParams(window.location.search);
  if (params.has('shot')) document.documentElement.classList.add('shot');
  var mem = {};
  var SVGNS = 'http://www.w3.org/2000/svg';

  function lsGet(k) { try { var v = window.localStorage.getItem(k); return v === null ? (k in mem ? mem[k] : null) : v; } catch (e) { return k in mem ? mem[k] : null; } }
  function lsSet(k, v) { mem[k] = v; try { window.localStorage.setItem(k, v); } catch (e) { /* nur Arbeitsspeicher */ } }
  function lsDel(k) { delete mem[k]; try { window.localStorage.removeItem(k); } catch (e) { /* ignorieren */ } }

  function store(key, seed, version) {
    var k = 'up-demo2:' + key + ':' + (version || 1), state;
    if (params.has('shot')) { var fresh = seed(); return { data: fresh, save: function () {}, reset: function () {} }; }
    try { var raw = lsGet(k); state = raw ? JSON.parse(raw) : null; } catch (e) { state = null; }
    if (!state) { state = seed(); lsSet(k, JSON.stringify(state)); }
    return { data: state, save: function () { lsSet(k, JSON.stringify(state)); }, reset: function () { lsDel(k); } };
  }

  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (a) {
      var v = attrs[a];
      if (v === null || v === undefined || v === false) return;
      if (a === 'class') el.className = v;
      else if (a === 'text') el.textContent = v;
      else if (a === 'html') el.innerHTML = v; // nur für eigene, statische SVG-Symbole
      else if (a.slice(0, 2) === 'on') el.addEventListener(a.slice(2), v);
      else if (a === 'value') el.value = v;
      else if (a === 'checked' || a === 'selected' || a === 'disabled' || a === 'hidden') { if (v) el[a] = true; }
      else el.setAttribute(a, v === true ? '' : v);
    });
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, c) {
    if (c === null || c === undefined || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { append(el, x); }); return; }
    el.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
  }
  function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function iso(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parse(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function addDays(d, n) { var x = new Date(d.getTime()); x.setDate(x.getDate() + n); return x; }
  function fmtDate(s) { var p = s.split('-'); return p[2] + '.' + p[1] + '.' + p[0]; }
  function fmtDT(ts) { var d = new Date(ts); return pad(d.getDate()) + '.' + pad(d.getMonth() + 1) + '.' + d.getFullYear() + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()); }
  function fmtD(ts) { var d = new Date(ts); return pad(d.getDate()) + '.' + pad(d.getMonth() + 1) + '.' + d.getFullYear(); }
  function hm(min) { var s = min < 0 ? '-' : ''; min = Math.abs(Math.round(min)); return s + Math.floor(min / 60) + ':' + pad(min % 60); }
  function hhmm(min) { return pad(Math.floor(min / 60)) + ':' + pad(min % 60); }
  function toMin(t) { var p = t.split(':'); return +p[0] * 60 + +p[1]; }
  function chf(n) { return 'CHF ' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "'"); }
  function size(b) { return b < 1024 ? b + ' B' : b < 1048576 ? (b / 1024).toFixed(1) + ' KB' : (b / 1048576).toFixed(1) + ' MB'; }
  function uid() { return Math.random().toString(36).slice(2, 10); }
  function token() { var a = new Uint8Array(12); window.crypto.getRandomValues(a); return Array.prototype.map.call(a, function (x) { return ('0' + x.toString(16)).slice(-2); }).join(''); }
  function rng(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  function initials(n) { return n.split(/\s+/).map(function (x) { return x.charAt(0); }).join('').slice(0, 2).toUpperCase(); }
  var MONTHS = lang === 'de' ? ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'] : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var DAYS = lang === 'de' ? ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  function download(name, text, mime) {
    var blob = new Blob([text], { type: mime || 'text/plain;charset=utf-8' });
    saveBlob(name, blob);
  }
  function saveBlob(name, blob) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click();
    window.setTimeout(function () { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 500);
  }
  function csv(rows) {
    return '﻿' + rows.map(function (r) {
      return r.map(function (c) { c = String(c === null || c === undefined ? '' : c); return /[;"\n]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c; }).join(';');
    }).join('\r\n');
  }

  // Symbole (eigene, statische SVG-Pfade)
  var ICON = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/></svg>'
  };

  // Hintergrund: Leiterbahnen (Zeiterfassung) oder technische Zeichnung (Dokumentenlenkung)
  function traces(kind) {
    var svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('viewBox', '0 0 1200 700'); svg.setAttribute('preserveAspectRatio', 'xMidYMid slice'); svg.setAttribute('aria-hidden', 'true');
    function el(t, a) { var x = document.createElementNS(SVGNS, t); Object.keys(a).forEach(function (k) { x.setAttribute(k, a[k]); }); svg.appendChild(x); return x; }
    var r = rng(kind === 'pcb' ? 11 : 23);
    if (kind === 'pcb') {
      for (var i = 0; i < 26; i++) {
        var x = Math.round(r() * 1200), y = Math.round(r() * 700), d = 'M' + x + ' ' + y, n = 2 + Math.floor(r() * 3);
        for (var k = 0; k < n; k++) {
          var len = 40 + Math.round(r() * 160), dir = Math.floor(r() * 4);
          if (dir === 0) x += len; else if (dir === 1) x -= len; else if (dir === 2) y += len; else y -= len;
          var dg = Math.round(r() * 30) + 10; d += ' L' + x + ' ' + y; if (r() < 0.5) { x += dg; y += (r() < 0.5 ? dg : -dg); d += ' L' + x + ' ' + y; }
        }
        el('path', { d: d, class: 'tr' }); el('circle', { cx: x, cy: y, r: 4, class: 'via' });
      }
    } else {
      // Bemassung, Rahmen und Hilfslinien wie auf einer Zeichnung
      el('rect', { x: 40, y: 40, width: 1120, height: 620, class: 'bp' });
      el('rect', { x: 860, y: 560, width: 300, height: 100, class: 'bp' });
      el('path', { d: 'M860 593H1160M1010 560V660', class: 'bp' });
      for (var j = 0; j < 6; j++) {
        var cx = 150 + r() * 650, cy = 140 + r() * 380, rr = 30 + r() * 90;
        el('circle', { cx: cx, cy: cy, r: rr, class: 'bp' });
        el('path', { d: 'M' + (cx - rr - 14) + ' ' + cy + 'H' + (cx + rr + 14) + 'M' + cx + ' ' + (cy - rr - 14) + 'V' + (cy + rr + 14), class: 'bp', 'stroke-dasharray': '12 4 2 4' });
        var t = el('text', { x: cx + rr + 8, y: cy - rr / 2, class: 'bpt' }); t.textContent = 'Ø' + Math.round(rr * 2 / 4);
      }
      el('path', { d: 'M80 610H520M80 600V620M520 600V620', class: 'bp' });
      var tt = el('text', { x: 280, y: 600, class: 'bpt' }); tt.textContent = '440';
    }
    return svg;
  }

  // Fenster mit Adresszeile, Kopfleiste und Inhalt
  var THEME_KEY = 'up-demo-theme';
  function initTheme(frame) {
    var t = params.get('theme') || lsGet(THEME_KEY);
    if (!t) t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    frame.setAttribute('data-theme', t);
  }
  function themeButton(frame, cls) {
    var dark = frame.getAttribute('data-theme') === 'dark';
    return h('button', { type: 'button', class: cls, 'aria-label': dark ? (lang === 'de' ? 'Helles Design' : 'Light theme') : (lang === 'de' ? 'Dunkles Design' : 'Dark theme'), html: dark ? ICON.sun : ICON.moon,
      onclick: function () { var n = frame.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; frame.setAttribute('data-theme', n); lsSet(THEME_KEY, n); var b = this; b.innerHTML = n === 'dark' ? ICON.sun : ICON.moon; b.setAttribute('aria-label', n === 'dark' ? (lang === 'de' ? 'Helles Design' : 'Light theme') : (lang === 'de' ? 'Dunkles Design' : 'Dark theme')); } });
  }
  function chrome(url) {
    var u = h('span', { class: 'win-url' }, h('b', { text: 'https://' }), url);
    return h('div', { class: 'win-chrome', 'aria-hidden': 'true' }, h('span', { class: 'win-dots' }, h('i'), h('i'), h('i')), u);
  }
  // nav: [[id, label]], cur: id, onNav(id), right: [elements]
  function topbar(opts) {
    var nav = h('nav', { class: 'a-nav', 'aria-label': opts.navLabel || (lang === 'de' ? 'App-Navigation' : 'App navigation') }, opts.nav.map(function (n) {
      return h('button', { type: 'button', 'aria-current': n[0] === opts.cur ? 'page' : null, onclick: function () { opts.onNav(n[0]); }, text: n[1] });
    }));
    return h('header', { class: 'a-top' }, h('div', { class: 'a-top-inner' },
      h('span', { class: 'a-brand' }, h('span', { class: 'a-logo', 'aria-hidden': 'true', text: opts.logo }), h('span', null, opts.brand, opts.sub ? h('small', { text: ' ' + opts.sub }) : null)),
      nav, h('div', { class: 'a-user' }, opts.right || [])));
  }
  function dialog(frame, title, body, onOk, okLabel) {
    var dlg = h('dialog', { class: 'a-dlg', 'aria-labelledby': 'dlg-title' });
    function close() { dlg.close(); if (dlg.parentNode) dlg.parentNode.removeChild(dlg); }
    var form = h('form', { method: 'dialog', onsubmit: function (ev) { ev.preventDefault(); if (onOk() !== false) close(); } },
      body, h('div', { class: 'a-form', style: null }, h('button', { type: 'submit', class: 'a-btn p', text: okLabel || (lang === 'de' ? 'Speichern' : 'Save') }), h('button', { type: 'button', class: 'a-btn', onclick: close, text: lang === 'de' ? 'Abbrechen' : 'Cancel' })));
    dlg.appendChild(h('h3', { id: 'dlg-title', text: title })); dlg.appendChild(form);
    dlg.addEventListener('cancel', function () { window.setTimeout(function () { if (dlg.parentNode) dlg.parentNode.removeChild(dlg); }, 0); });
    frame.appendChild(dlg);
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    var first = dlg.querySelector('input, select, textarea'); if (first) first.focus();
    return dlg;
  }

  // Tabs Demo / Handbuch und Reset-Knopf der Seite
  function init(resetFn) {
    var tabs = [['tab-demo', 'panel-demo'], ['tab-man', 'panel-man']];
    function select(id) {
      tabs.forEach(function (p) { var on = p[0] === id, b = document.getElementById(p[0]), pn = document.getElementById(p[1]); b.setAttribute('aria-selected', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1; pn.hidden = !on; });
    }
    tabs.forEach(function (p) {
      var b = document.getElementById(p[0]); if (!b) return;
      b.addEventListener('click', function () { select(p[0]); });
      b.addEventListener('keydown', function (ev) { if (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') { var o = p[0] === 'tab-demo' ? 'tab-man' : 'tab-demo'; select(o); document.getElementById(o).focus(); } });
    });
    var r = document.getElementById('demo-reset');
    if (r) r.addEventListener('click', function () { if (window.confirm(lang === 'de' ? 'Demo auf den Ausgangszustand zurücksetzen?' : 'Reset the demo to its initial state?')) resetFn(); });
  }

  window.UP = { lang: lang, params: params, store: store, h: h, clear: clear, iso: iso, parse: parse, addDays: addDays, fmtDate: fmtDate, fmtDT: fmtDT, fmtD: fmtD, hm: hm, hhmm: hhmm, toMin: toMin,
    chf: chf, size: size, uid: uid, token: token, rng: rng, initials: initials, MONTHS: MONTHS, DAYS: DAYS, download: download, saveBlob: saveBlob, csv: csv, ICON: ICON,
    traces: traces, initTheme: initTheme, themeButton: themeButton, chrome: chrome, topbar: topbar, dialog: dialog, init: init, pad: pad };
})();
