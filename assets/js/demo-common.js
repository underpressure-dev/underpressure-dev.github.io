/* Gemeinsame Hilfen für die Demos. Alles läuft im Browser, nichts wird gesendet. */
(function () {
  'use strict';
  var lang = (document.documentElement.lang || 'de').slice(0, 2) === 'en' ? 'en' : 'de';
  var mem = {};

  function lsGet(k) { try { var v = window.localStorage.getItem(k); return v === null ? (k in mem ? mem[k] : null) : v; } catch (e) { return k in mem ? mem[k] : null; } }
  function lsSet(k, v) { mem[k] = v; try { window.localStorage.setItem(k, v); } catch (e) { /* Speicher gesperrt: nur Arbeitsspeicher */ } }
  function lsDel(k) { delete mem[k]; try { window.localStorage.removeItem(k); } catch (e) { /* ignorieren */ } }

  // Persistenter Speicher mit Ausgangsdaten
  function store(key, seed) {
    var k = 'up-demo:' + key;
    var state;
    try { var raw = lsGet(k); state = raw ? JSON.parse(raw) : null; } catch (e) { state = null; }
    if (!state) { state = seed(); lsSet(k, JSON.stringify(state)); }
    return {
      data: state,
      save: function () { lsSet(k, JSON.stringify(state)); },
      reset: function () { lsDel(k); }
    };
  }

  // Kleiner DOM-Baukasten
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (a) {
      var v = attrs[a];
      if (v === null || v === undefined || v === false) return;
      if (a === 'class') el.className = v;
      else if (a === 'text') el.textContent = v;
      else if (a.slice(0, 2) === 'on') el.addEventListener(a.slice(2), v);
      else if (a === 'value') el.value = v;
      else if (a === 'checked' || a === 'selected' || a === 'disabled') { if (v) el[a] = true; }
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
  function hm(min) { var s = min < 0 ? '-' : ''; min = Math.abs(Math.round(min)); return s + Math.floor(min / 60) + ':' + pad(min % 60); }
  function toMin(t) { var p = t.split(':'); return +p[0] * 60 + +p[1]; }
  function chf(n) { return 'CHF ' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "'"); }
  function size(b) { return b < 1024 ? b + ' B' : b < 1048576 ? (b / 1024).toFixed(1) + ' KB' : (b / 1048576).toFixed(1) + ' MB'; }
  function uid() { return Math.random().toString(36).slice(2, 10); }
  function token() { var a = new Uint8Array(12); (window.crypto || window.msCrypto).getRandomValues(a); return Array.prototype.map.call(a, function (x) { return ('0' + x.toString(16)).slice(-2); }).join(''); }

  // Deterministischer Zufall für Beispieldaten
  function rng(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

  function download(name, text, mime) {
    var blob = new Blob([text], { type: mime || 'text/plain;charset=utf-8' });
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

  // Tabs Demo / Handbuch und Reset-Knopf
  function init(resetFn) {
    var tabs = [['tab-demo', 'panel-demo'], ['tab-man', 'panel-man']];
    tabs.forEach(function (pair) {
      var b = document.getElementById(pair[0]);
      if (!b) return;
      b.addEventListener('click', function () { select(pair[0]); });
      b.addEventListener('keydown', function (ev) {
        if (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') { var other = pair[0] === 'tab-demo' ? 'tab-man' : 'tab-demo'; select(other); document.getElementById(other).focus(); }
      });
    });
    function select(id) {
      tabs.forEach(function (pair) {
        var on = pair[0] === id, b = document.getElementById(pair[0]), p = document.getElementById(pair[1]);
        b.setAttribute('aria-selected', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1; p.hidden = !on;
      });
    }
    var r = document.getElementById('demo-reset');
    if (r) r.addEventListener('click', function () { if (window.confirm(lang === 'de' ? 'Demo auf den Ausgangszustand zurücksetzen?' : 'Reset the demo to its initial state?')) { resetFn(); } });
  }

  window.UP = { lang: lang, t: function (d) { return d[lang]; }, store: store, h: h, clear: clear, iso: iso, parse: parse, addDays: addDays, fmtDate: fmtDate, fmtDT: fmtDT, hm: hm, toMin: toMin, chf: chf, size: size, uid: uid, token: token, rng: rng, download: download, csv: csv, init: init, pad: pad };
})();
