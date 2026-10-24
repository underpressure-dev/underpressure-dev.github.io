/* Demo "Zeichnung zu Offerte": Datei waehlen, an den Werkzeug-Server senden, Ergebnis zeigen.
   Die Datei wird nur zur Auswertung gesendet. Alle Textwerte aus der Antwort werden mit textContent eingesetzt. */
(function () {
  'use strict';
  var UP = window.UP, frame = document.getElementById('app');
  if (!UP || !frame) return;
  var de = UP.lang === 'de';
  function L(a, b) { return de ? a : b; }
  var API = frame.getAttribute('data-api');
  var contact = de ? '/kontakt.html' : '/en/contact.html';
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  var ALLOWED = { 'image/png': 1, 'image/jpeg': 1, 'image/webp': 1, 'image/gif': 1, 'application/pdf': 1 };
  var MAX_FILE = 6 * 1024 * 1024;

  function setError(msg) { var x = $('dwErr'); x.textContent = msg || ''; x.hidden = !msg; }
  function busy(on) { $('dwProg').hidden = !on; if (on) { $('dwResult').hidden = true; setError(''); } }

  function mediaType(file) {
    if (ALLOWED[file.type]) return file.type;
    if (/\.pdf$/i.test(file.name)) return 'application/pdf';
    if (/\.png$/i.test(file.name)) return 'image/png';
    if (/\.jpe?g$/i.test(file.name)) return 'image/jpeg';
    if (/\.webp$/i.test(file.name)) return 'image/webp';
    return null;
  }
  function readBase64(file) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onload = function () { var s = String(r.result); var i = s.indexOf(','); res(i >= 0 ? s.slice(i + 1) : s); };
      r.onerror = function () { rej(new Error('read')); };
      r.readAsDataURL(file);
    });
  }

  function list(parent, label, items) {
    if (!items || !items.length) return;
    parent.appendChild(el('dt', null, label));
    var dd = el('dd'); var ul = el('ul', 'dw-list');
    items.forEach(function (x) { ul.appendChild(el('li', null, String(x))); });
    dd.appendChild(ul); parent.appendChild(dd);
  }
  function row(parent, label, value) {
    if (value == null || value === '') return;
    parent.appendChild(el('dt', null, label));
    parent.appendChild(el('dd', null, String(value)));
  }

  function render(r, exampleImg) {
    var box = $('dwResult'); clear(box); box.hidden = false;
    if (exampleImg) {
      box.appendChild(el('div', 'dw-exnote', L('Beispiel: eine bereits ausgewertete Zeichnung. Laden Sie oben Ihre eigene hoch für eine echte Auswertung.', 'Example: a drawing that was already analysed. Upload your own above for a real analysis.')));
      var fig = el('figure', 'dw-shot'); var im = el('img'); im.src = exampleImg; im.alt = L('Beispiel-Zeichnung', 'Example drawing'); im.loading = 'lazy'; fig.appendChild(im); box.appendChild(fig);
    }
    if (!r.lesbar) {
      box.appendChild(el('div', 'dw-note', L('Das Bild konnte nicht als technische Zeichnung gelesen werden.', 'The image could not be read as a technical drawing.')));
      if (r.hinweis) box.appendChild(el('p', 'dw-hint', r.hinweis));
      box.appendChild(ctaRow());
      return;
    }
    var head = el('div', 'dw-head');
    head.appendChild(el('h3', null, r.teil || L('Werkstück', 'Part')));
    if (r.komplexitaet) head.appendChild(el('span', 'dw-badge k-' + r.komplexitaet, L('Komplexität: ', 'Complexity: ') + r.komplexitaet));
    box.appendChild(head);

    if (r.richtwert_chf && typeof r.richtwert_chf.von === 'number') {
      var pr = el('div', 'dw-price');
      var v = Math.round(r.richtwert_chf.von), b = Math.round(r.richtwert_chf.bis);
      pr.appendChild(el('strong', null, 'CHF ' + v.toLocaleString(de ? 'de-CH' : 'en-GB') + ' – ' + b.toLocaleString(de ? 'de-CH' : 'en-GB')));
      pr.appendChild(el('span', null, L('Richtwert pro Stück', 'ballpark per piece')));
      box.appendChild(pr);
    }
    box.appendChild(el('div', 'dw-banner', L('Richtwert, keine Offerte. Beruht auf der KI-Lesung und einfachen Annahmen.', 'Ballpark, not a quote. Based on the AI reading and simple assumptions.')));

    var dl = el('dl', 'dw-dl');
    row(dl, L('Material', 'Material'), r.material);
    row(dl, L('Abmessungen', 'Dimensions'), r.abmessungen);
    row(dl, L('Menge', 'Quantity'), r.menge);
    list(dl, L('Verfahren', 'Processes'), r.verfahren);
    row(dl, L('Oberfläche', 'Surface finish'), r.oberflaeche);
    list(dl, L('Toleranzen', 'Tolerances'), r.toleranzen);
    list(dl, L('Besonderheiten', 'Features'), r.besonderheiten);
    box.appendChild(dl);

    if (r.rueckfragen && r.rueckfragen.length) {
      box.appendChild(el('h4', 'dw-h4', L('Rückfragen eines Kalkulators', 'Questions a calculator would ask')));
      var ulq = el('ul', 'dw-list q'); r.rueckfragen.forEach(function (x) { ulq.appendChild(el('li', null, x)); }); box.appendChild(ulq);
    }
    if (r.annahmen && r.annahmen.length) {
      box.appendChild(el('h4', 'dw-h4', L('Annahmen für den Richtwert', 'Assumptions for the ballpark')));
      var ula = el('ul', 'dw-list muted'); r.annahmen.forEach(function (x) { ula.appendChild(el('li', null, x)); }); box.appendChild(ula);
    }
    box.appendChild(ctaRow());
  }
  function ctaRow() {
    var row = el('div', 'dw-cta');
    var a = el('a', 'a-btn p', L('Verbindliche Offerte anfragen', 'Request a binding quote')); a.href = contact;
    var again = el('button', 'a-btn', L('Andere Zeichnung', 'Another drawing')); again.type = 'button';
    again.addEventListener('click', reset);
    row.appendChild(a); row.appendChild(again);
    return row;
  }

  async function send(file) {
    var media = mediaType(file);
    if (!media) { setError(L('Dieser Dateityp wird nicht unterstützt. Bitte PNG, JPG, WebP oder PDF.', 'This file type is not supported. Please use PNG, JPG, WebP or PDF.')); return; }
    if (file.size > MAX_FILE) { setError(L('Die Datei ist zu gross (höchstens 6 MB).', 'The file is too large (6 MB maximum).')); return; }
    $('dwLabel').textContent = file.name;
    busy(true);
    var b64;
    try { b64 = await readBase64(file); } catch (e) { busy(false); setError(L('Die Datei konnte nicht gelesen werden.', 'The file could not be read.')); return; }
    var res;
    try {
      res = await fetch(API + '/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ image: b64, media_type: media, lang: de ? 'de' : 'en', website: $('dwWebsite').value }) });
    } catch (e) { busy(false); setError(L('Der Server ist gerade nicht erreichbar. Bitte in einer Minute erneut versuchen.', 'The server is not reachable right now. Please try again in a minute.')); return; }
    var j = await res.json().catch(function () { return {}; });
    busy(false);
    if (!res.ok || !j.result) {
      var m = {
        nokey: L('Dieses Werkzeug ist noch nicht freigeschaltet.', 'This tool is not enabled yet.'),
        media: L('Dieser Dateityp wird nicht unterstützt.', 'This file type is not supported.'),
        size: L('Die Datei ist zu gross.', 'The file is too large.'),
        limit: L('Zu viele Auswertungen in kurzer Zeit. Bitte in einer Stunde erneut versuchen.', 'Too many analyses in a short time. Please try again in an hour.'),
        busy: L('Gerade sehr gefragt. Bitte in einer Minute erneut versuchen.', 'Very busy right now. Please try again in a minute.'),
        refused: L('Diese Datei konnte nicht ausgewertet werden.', 'This file could not be analysed.'),
        parse: L('Die Antwort war unerwartet. Bitte erneut versuchen.', 'The response was unexpected. Please try again.')
      };
      setError(m[j.error] || L('Die Auswertung ist fehlgeschlagen.', 'The analysis failed.'));
      return;
    }
    render(j.result);
  }

  function reset() {
    $('dwResult').hidden = true; clear($('dwResult')); setError(''); $('dwFile').value = '';
    $('dwLabel').textContent = L('Zeichnung hierher ziehen oder wählen', 'Drag a drawing here or choose one');
    var line = $('dwExampleLine'); if (line) line.hidden = false;
  }

  // Beispiel: eine Zeichnung, die das Modell bereits ausgewertet hat (echtes Ergebnis, kein neuer Aufruf).
  function example() {
    return {
      lesbar: true, teil: 'Halteblech HB-204', material: 'S235JR', abmessungen: '120 × 80 × 3 mm, 2× Bohrung Ø12', menge: L('100 Stk', '100 pcs'),
      verfahren: [L('Laserschneiden', 'Laser cutting'), L('Reiben der Bohrungen Ø12 H8', 'Reaming the Ø12 H8 bores'), L('Entgraten', 'Deburring'), L('Feuerverzinken (extern)', 'Hot-dip galvanizing (external)')],
      toleranzen: [L('Allgemeintoleranz ±0.2 mm', 'General tolerance ±0.2 mm'), 'Ø12 H8'],
      oberflaeche: L('feuerverzinkt', 'hot-dip galvanized'),
      besonderheiten: [
        L('Passung H8 und Feuerverzinkung widersprechen sich: die Zinkschicht (50–100 µm) überschreitet das H8-Toleranzfeld (27 µm) deutlich.', 'The H8 fit and hot-dip galvanizing contradict each other: the zinc layer (50–100 µm) clearly exceeds the H8 tolerance band (27 µm).'),
        L('Für H8 ist Reiben nötig, mit dem Laser allein nicht erreichbar.', 'H8 requires reaming, not achievable with the laser alone.'),
        L('Keine Angabe zu Kantenradien, Massstab oder Revision.', 'No details on edge radii, scale or revision.')],
      rueckfragen: [
        L('Die Lage der Bohrungen ist nicht bemasst. Bitte Abstände zu den Kanten und den Lochabstand angeben.', 'The bore positions are not dimensioned. Please give the distances to the edges and between the holes.'),
        L('Gilt H8 für den Endzustand nach dem Verzinken?', 'Does H8 apply to the final state after galvanizing?'),
        L('Wird ein Materialzeugnis (z. B. 3.1 nach EN 10204) benötigt?', 'Is a material certificate (e.g. 3.1 per EN 10204) required?')],
      annahmen: [
        L('Material ab Lager (Blech S235JR, 3 mm).', 'Material from stock (sheet S235JR, 3 mm).'),
        L('Bohrungen mit Untermass gelasert und nach dem Verzinken auf Ø12 H8 aufgerieben.', 'Bores lasered undersize and reamed to Ø12 H8 after galvanizing.'),
        L('Ein Los zu 100 Stück ohne Erstmusterprüfbericht.', 'A single batch of 100 pieces without a first article inspection report.')],
      komplexitaet: L('mittel', 'medium'), richtwert_chf: { von: 6, bis: 15 },
      hinweis: L('Beispiel, keine Offerte. Grösster Preistreiber ist die Klärung H8 gegen Feuerverzinkung.', 'Example, not a quote. The biggest price driver is resolving H8 versus hot-dip galvanizing.')
    };
  }
  function showExample() {
    setError(''); var line = $('dwExampleLine'); if (line) line.hidden = true;
    $('dwLabel').textContent = L('Beispiel-Zeichnung', 'Example drawing');
    render(example(), '/assets/img/beispiel-zeichnung.webp');
  }

  var drop = $('dwDrop');
  $('dwFile').addEventListener('change', function (e) { var f = e.target.files[0]; if (f) send(f); });
  drop.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); $('dwFile').click(); } });
  ['dragenter', 'dragover'].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
  ['dragleave', 'drop'].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.remove('over'); }); });
  drop.addEventListener('drop', function (e) { var f = e.dataTransfer && e.dataTransfer.files[0]; if (f) send(f); });
  $('dwForm').addEventListener('submit', function (e) { e.preventDefault(); });

  var exBtn = $('dwExample'); if (exBtn) exBtn.addEventListener('click', showExample);
  UP.initTheme(frame);
  $('dwBar').appendChild(UP.themeButton(frame, 'a-btn sc-theme'));
  UP.init(reset);

  // Vorschaubild (?shot): das Beispiel zeigen, ohne Netz.
  if (UP.params && UP.params.has('shot')) showExample();
})();
