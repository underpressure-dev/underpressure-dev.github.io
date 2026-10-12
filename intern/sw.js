/* Service Worker für den geschützten Bereich: entschlüsselt Dateien unter /intern/app/ im Browser.
   Die Schlüssel liegen nicht auslesbar in IndexedDB und laufen nach einigen Stunden ab. */
'use strict';
var BASE = '/intern/', APP = '/intern/app/';

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

function db() {
  return new Promise(function (res, rej) {
    var r = indexedDB.open('up-intern', 1);
    r.onupgradeneeded = function () { r.result.createObjectStore('keys'); };
    r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); };
  });
}
function getKeys() {
  return db().then(function (d) { return new Promise(function (res) { var g = d.transaction('keys').objectStore('keys').get('k'); g.onsuccess = function () { res(g.result || null); }; g.onerror = function () { res(null); }; }); });
}
function clearKeys() {
  return db().then(function (d) { return new Promise(function (res) { var t = d.transaction('keys', 'readwrite'); t.objectStore('keys').delete('k'); t.oncomplete = res; t.onerror = res; }); });
}
function hex(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join(''); }

var SEC = {
  'Content-Security-Policy': "default-src 'self'; img-src 'self' blob: data:; style-src 'self'; script-src 'self'; object-src 'self'; frame-ancestors 'self'; base-uri 'none'; form-action 'none'",
  'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow'
};

function toLogin(url, req) {
  if (req.mode === 'navigate') return Response.redirect(BASE + '?next=' + encodeURIComponent(url.pathname + url.search + url.hash), 302);
  return new Response('Nicht angemeldet', { status: 401 });
}

function load(keys, rel) {
  var enc = new TextEncoder();
  return crypto.subtle.sign('HMAC', keys.mac, enc.encode(rel)).then(function (sig) {
    return fetch(BASE + 'd/' + hex(sig).slice(0, 32) + '.bin', { cache: 'no-cache' });
  }).then(function (r) {
    if (!r.ok) return null;
    return r.arrayBuffer().then(function (buf) {
      return crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(buf, 0, 12) }, keys.aes, new Uint8Array(buf, 12)).then(function (plain) {
        var dv = new DataView(plain), n = dv.getUint16(0);
        return { type: new TextDecoder().decode(new Uint8Array(plain, 2, n)), body: plain.slice(2 + n) };
      });
    });
  });
}

function serve(url, req) {
  return getKeys().then(function (keys) {
    if (!keys || keys.exp < Date.now()) return clearKeys().then(function () { return toLogin(url, req); });
    var rel = decodeURIComponent(url.pathname.slice(APP.length));
    if (rel === '' || rel.slice(-1) === '/') rel += 'index.html';
    return load(keys, rel).then(function (f) {
      if (f) return new Response(f.body, { status: 200, headers: Object.assign({ 'Content-Type': f.type }, SEC) });
      if (!/\.[a-z0-9]{1,5}$/i.test(rel)) {
        return load(keys, rel + '/index.html').then(function (g) { return g ? Response.redirect(url.pathname + '/', 301) : notFound(); });
      }
      return notFound();
    });
  }).catch(function () {
    // Entschlüsselung fehlgeschlagen: Schlüssel veraltet (neu verschlüsselt) oder Daten beschädigt
    return clearKeys().then(function () { return toLogin(url, req); });
  });
}
function notFound() {
  return new Response('<!doctype html><meta charset="utf-8"><title>Nicht gefunden</title><p>Diese Seite gibt es im geschützten Bereich nicht. <a href="/intern/app/">Zur Übersicht</a></p>', { status: 404, headers: Object.assign({ 'Content-Type': 'text/html; charset=utf-8' }, SEC) });
}

self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin || url.pathname.indexOf(APP) !== 0 || e.request.method !== 'GET') return;
  e.respondWith(serve(url, e.request));
});
