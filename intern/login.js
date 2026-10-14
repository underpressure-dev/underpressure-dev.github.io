/* Anmeldung für den geschützten Bereich. Das Passwort verlässt den Browser nie. */
(function () {
  'use strict';
  var BASE = '/intern/', HOURS = 8;
  var form = document.getElementById('login'), pw = document.getElementById('pw'), msg = document.getElementById('msg');
  var btn = document.getElementById('go'), state = document.getElementById('state');
  var params = new URLSearchParams(window.location.search);

  function say(t, err) { msg.textContent = t; msg.className = 'msg' + (err ? ' err' : ''); msg.hidden = !t; }
  function db() {
    return new Promise(function (res, rej) {
      var r = indexedDB.open('up-intern', 1);
      r.onupgradeneeded = function () { r.result.createObjectStore('keys'); };
      r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); };
    });
  }
  function put(v) { return db().then(function (d) { return new Promise(function (res, rej) { var t = d.transaction('keys', 'readwrite'); t.objectStore('keys').put(v, 'k'); t.oncomplete = res; t.onerror = function () { rej(t.error); }; }); }); }
  function get() { return db().then(function (d) { return new Promise(function (res) { var g = d.transaction('keys').objectStore('keys').get('k'); g.onsuccess = function () { res(g.result || null); }; g.onerror = function () { res(null); }; }); }); }
  function del() { return db().then(function (d) { return new Promise(function (res) { var t = d.transaction('keys', 'readwrite'); t.objectStore('keys').delete('k'); t.oncomplete = res; t.onerror = res; }); }); }
  function b64(s) { var b = atob(s), a = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; }
  function target() { var n = params.get('next') || ''; return n.indexOf('/intern/app/') === 0 ? n : '/intern/app/'; }

  if (!('serviceWorker' in navigator) || !window.crypto || !window.crypto.subtle || !window.indexedDB) {
    form.hidden = true;
    say('Dieser Browser unterstützt den geschützten Bereich nicht. Bitte ein aktuelles Chrome, Edge, Safari oder Firefox in einem normalen (nicht privaten) Fenster verwenden.', true);
    return;
  }

  function showState() {
    get().then(function (k) {
      if (k && k.exp > Date.now()) {
        var d = new Date(k.exp);
        state.hidden = false;
        document.getElementById('until').textContent = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
      } else state.hidden = true;
    });
  }

  if (params.has('logout')) { del().then(function () { say('Sie sind abgemeldet.'); showState(); history.replaceState(null, '', BASE); }); }
  else showState();
  document.getElementById('logout').addEventListener('click', function () { del().then(function () { say('Sie sind abgemeldet.'); showState(); }); });
  document.getElementById('open').addEventListener('click', function () { navigator.serviceWorker.register(BASE + 'sw.js', { scope: BASE }).then(function () { return navigator.serviceWorker.ready; }).then(function () { window.location.href = target(); }); });

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!pw.value) { say('Bitte das Passwort eingeben.', true); pw.focus(); return; }
    btn.disabled = true; say('Prüfe Passwort …');
    var enc = new TextEncoder(), password = pw.value.normalize('NFC');
    // Jede Fassung (Tresor) hat ein eigenes Salz. Das Passwort wird gegen jede geprüft, nur die passende öffnet sich.
    function tryVault(v) {
      return crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']).then(function (base) {
        return crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: b64(v.salt), iterations: v.iter }, base, 512);
      }).then(function (bits) {
        return Promise.all([
          crypto.subtle.importKey('raw', bits.slice(0, 32), { name: 'AES-GCM' }, false, ['decrypt']),
          crypto.subtle.importKey('raw', bits.slice(32, 64), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
        ]);
      }).then(function (keys) {
        return fetch(BASE + v.dir + '/check.bin', { cache: 'no-cache' }).then(function (r) { return r.arrayBuffer(); }).then(function (buf) {
          return crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(buf, 0, 12) }, keys[0], new Uint8Array(buf, 12));
        }).then(function () { return { aes: keys[0], mac: keys[1], dir: v.dir }; });
      });
    }
    fetch(BASE + 'config.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (c) {
      var vaults = c.v === 2 ? c.vaults.map(function (v) { return { salt: v.salt, dir: v.dir, iter: c.iter }; }) : [{ salt: c.salt, dir: 'd', iter: c.iter }];
      return vaults.reduce(function (p, v) { return p.catch(function () { return tryVault(v); }); }, Promise.reject(new Error('start')));
    }).then(function (k) {
      pw.value = '';
      return put({ aes: k.aes, mac: k.mac, dir: k.dir, exp: Date.now() + HOURS * 3600000 });
    }).then(function () {
      return navigator.serviceWorker.register(BASE + 'sw.js', { scope: BASE });
    }).then(function () { return navigator.serviceWorker.ready; }).then(function () {
      say('Angemeldet. Einen Moment …');
      window.location.href = target();
    }).catch(function () {
      btn.disabled = false;
      say('Das Passwort stimmt nicht.', true);
      pw.select();
    });
  });
})();
