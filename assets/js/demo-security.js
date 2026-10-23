/* Sicherheitscheck (Live-Demo): prüft die eingegebene Domain über den Prüfdienst (Cloudflare Worker, betrieben von der
   Alta Engineering AG). Geprüft wird nur Öffentliches: Startseite, DNS, security.txt. Beim Öffnen zeigt die Seite als
   Beispiel den gespeicherten Bericht für underpressure.ch (demo-security-data.js).
   Alle Texte aus der Antwort werden mit textContent eingesetzt, nie als HTML. */
(function () {
  'use strict';
  var UP = window.UP, frame = document.getElementById('app');
  if (!UP || !frame || !window.UP_SEC_REPORT) return;
  var de = UP.lang === 'de';
  var API = 'https://alta-kundenportal.alta-engineering.workers.dev/api/request-access/security-check';
  var D = window.UP_SEC_REPORT[de ? 'de' : 'en'];  // aktueller Bericht, zu Beginn das Beispiel
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function L(a, b) { return de ? a : b; }

  var STEPS = de
    ? ['Verbindung und Zertifikat prüfen', 'Sicherheits-Header der Startseite lesen', 'E-Mail-Absicherung (SPF, DMARC, DKIM) abfragen', 'Fremdanbieter und Datenschutz-Hinweise suchen', 'Namensdienst (DNSSEC, CAA) prüfen', 'Note berechnen']
    : ['Check connection and certificate', 'Read the security headers of the home page', 'Query email protection (SPF, DMARC, DKIM)', 'Look for third parties and privacy notices', 'Check the name service (DNSSEC, CAA)', 'Calculate the grade'];
  var SEV = de ? { high: 'Hoch', medium: 'Mittel', low: 'Niedrig', info: 'Info', ok: 'In Ordnung' } : { high: 'High', medium: 'Medium', low: 'Low', info: 'Info', ok: 'OK' };
  var SEV_ORDER = { high: 0, medium: 1, low: 2, info: 3, ok: 4 };
  var VERDICT = de ? {
    A: ['Sehr gut abgesichert', 'Die wichtigsten Schutzmassnahmen sind vorhanden. Es bleiben höchstens Feinheiten.'],
    B: ['Solide Basis, einzelne Lücken', 'Das Wesentliche stimmt. Mit wenigen Anpassungen erreichen Sie die Bestnote.'],
    C: ['Durchschnittlich, mit klarem Handlungsbedarf', 'Es fehlen mehrere Standard-Schutzmassnahmen. Die meisten lassen sich in einem Nachmittag nachrüsten.'],
    D: ['Deutliche Schwächen', 'Mehrere wichtige Schutzmassnahmen fehlen. Angreifer hätten leichtes Spiel mit Standardmethoden.'],
    E: ['Erhebliche Schwächen', 'Die Seite ist in zentralen Punkten ungeschützt. Wir empfehlen, zeitnah zu handeln.'],
    F: ['Kritisch', 'Grundlegende Schutzmassnahmen fehlen oder sind fehlerhaft. Bitte dringend handeln.']
  } : {
    A: ['Very well protected', 'The most important safeguards are in place. At most, details remain.'],
    B: ['Solid basis, some gaps', 'The essentials are right. A few adjustments get you the top grade.'],
    C: ['Average, with clear need for action', 'Several standard safeguards are missing. Most can be added in an afternoon.'],
    D: ['Clear weaknesses', 'Several important safeguards are missing. Attackers would have an easy time with standard methods.'],
    E: ['Considerable weaknesses', 'The site is unprotected in central points. We recommend acting soon.'],
    F: ['Critical', 'Basic safeguards are missing or faulty. Please act urgently.']
  };

  function tone(g) { return g === 'A' || g === 'B' ? 'ok' : g === 'C' ? 'low' : g === 'D' ? 'medium' : 'high'; }

  function render(d, animate) {
    $('scDomainOut').textContent = d.domain;
    $('scGrade').textContent = d.grade;
    $('scRing').setAttribute('data-tone', tone(d.grade));
    $('scVerdict').textContent = VERDICT[d.grade][0];
    var when = new Date(d.checkedAt).toLocaleString(de ? 'de-CH' : 'en-GB', { dateStyle: 'medium', timeStyle: 'short' });
    $('scSummary').textContent = VERDICT[d.grade][1] + ' ' + L('Punktzahl: ', 'Score: ') + d.score + L(' von 100. Geprüft am ', ' of 100. Checked on ') + when + '.';
    var fg = $('scRingFg'), C = 2 * Math.PI * 52;
    var off = (C * (1 - d.score / 100)).toFixed(1);
    fg.style.strokeDasharray = C.toFixed(1);
    fg.style.strokeDashoffset = animate ? C.toFixed(1) : off;
    if (animate) setTimeout(function () { fg.style.strokeDashoffset = off; }, 60);

    var counts = $('scCounts'); clear(counts);
    ['high', 'medium', 'low', 'info', 'ok'].forEach(function (k) {
      if (!d.counts[k]) return;
      var chip = el('span', 'sc-chip sev-' + k);
      chip.appendChild(el('b', '', String(d.counts[k])));
      chip.appendChild(document.createTextNode(' ' + SEV[k]));
      counts.appendChild(chip);
    });

    var cats = $('scCats'); clear(cats);
    d.categories.forEach(function (c) {
      var card = el('div', 'sc-cat' + (c.applicable ? '' : ' na'));
      card.appendChild(el('div', 'sc-cat-t', c.title));
      var bar = el('div', 'sc-bar');
      var fill = el('span', 'sc-fill tone-' + (c.score >= 90 ? 'ok' : c.score >= 70 ? 'low' : c.score >= 50 ? 'medium' : 'high'));
      var w = c.applicable ? c.score + '%' : '0%';
      fill.style.width = animate ? '0%' : w;
      bar.appendChild(fill);
      card.appendChild(bar);
      card.appendChild(el('div', 'sc-cat-v', c.applicable ? c.score + ' / 100' : L('nicht zutreffend', 'not applicable')));
      cats.appendChild(card);
      if (animate) setTimeout(function () { fill.style.width = w; }, 60);
    });
    renderList();
    var lim = $('scLimits'); clear(lim);
    lim.appendChild(el('h4', '', L('Was dieser Check nicht leistet', 'What this check does not cover')));
    var ul = el('ul');
    (d.limitations || (d.meta && d.meta.limitations) || []).forEach(function (t) { ul.appendChild(el('li', '', t)); });
    var src = $('scSource');
    src.textContent = d.example ? L('Beispiel: unsere eigene Website. Geben Sie oben eine andere Domain ein, um sie live zu prüfen.', 'Example: our own website. Enter another domain above to check it live.')
      : '';
    src.hidden = !src.textContent;
    lim.appendChild(ul);
  }

  function renderList() {
    var titles = {}; D.categories.forEach(function (c) { titles[c.id] = c.title; });
    var showAll = $('scAll').checked, list = $('scList'); clear(list);
    var items = D.findings.slice().sort(function (a, b) { return SEV_ORDER[a.sev] - SEV_ORDER[b.sev]; });
    var shown = 0;
    items.forEach(function (f, idx) {
      if (!showAll && f.sev === 'ok') return;
      shown++;
      var det = el('details', 'sc-f sev-' + f.sev);
      if (idx === 0 && f.sev !== 'ok' && f.sev !== 'info') det.open = true;
      var sum = el('summary');
      sum.appendChild(el('span', 'sc-badge', SEV[f.sev]));
      sum.appendChild(el('span', 'sc-f-title', f.title));
      sum.appendChild(el('span', 'sc-f-cat', titles[f.cat] || ''));
      det.appendChild(sum);
      var body = el('div', 'sc-f-body');
      body.appendChild(el('p', '', f.detail));
      if (f.fix) { var fix = el('p', 'sc-fix'); fix.appendChild(el('b', '', L('So beheben Sie es: ', 'How to fix it: '))); fix.appendChild(document.createTextNode(f.fix)); body.appendChild(fix); }
      if (f.snippet) {
        var wrap = el('div', 'sc-code'); wrap.appendChild(el('pre', '', f.snippet));
        var cp = el('button', 'sc-copy', L('Kopieren', 'Copy')); cp.type = 'button';
        cp.addEventListener('click', function () {
          if (navigator.clipboard) navigator.clipboard.writeText(f.snippet).then(function () { cp.textContent = L('Kopiert', 'Copied'); setTimeout(function () { cp.textContent = L('Kopieren', 'Copy'); }, 1500); });
        });
        wrap.appendChild(cp); body.appendChild(wrap);
      }
      det.appendChild(body);
      list.appendChild(det);
    });
    if (!shown) list.appendChild(el('p', 'sc-empty', L('Keine offenen Punkte.', 'No open points.')));
  }

  function setError(msg) { var x = $('scErr'); x.textContent = msg || ''; x.hidden = !msg; }

  async function run(domain) {
    var btn = $('scGo'), progress = $('scProgress'), steps = $('scSteps'), result = $('scResult');
    setError('');
    btn.disabled = true; result.hidden = true; progress.hidden = false; clear(steps);
    var items = STEPS.map(function (t) { var li = el('li', '', t); steps.appendChild(li); return li; });
    var fetched = fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ domain: domain, website: $('scWebsite').value, lang: de ? 'de' : 'en' }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, status: r.status, json: j }; }); });
    try {
      for (var i = 0; i < items.length; i++) {
        items[i].className = 'run';
        await sleep(i === items.length - 1 ? 250 : 420);
        if (i === items.length - 2) await fetched.catch(function () {});
        items[i].className = 'done';
      }
      var res = await fetched;
      if (!res.ok || !res.json || !res.json.grade) {
        var known = {
          400: L('Bitte geben Sie eine gültige Domain ein, zum Beispiel ihre-firma.ch.', 'Please enter a valid domain, for example your-company.ch.'),
          429: L('Zu viele Prüfungen in kurzer Zeit. Bitte versuchen Sie es in einer Stunde erneut.', 'Too many checks in a short time. Please try again in an hour.'),
          502: L('Die Prüfung konnte nicht abgeschlossen werden. Bitte versuchen Sie es später erneut.', 'The check could not be completed. Please try again later.')
        };
        throw new Error(known[res.status] || L('Die Prüfung ist fehlgeschlagen.', 'The check failed.'));
      }
      D = res.json;
      $('scAll').checked = false;
      progress.hidden = true; result.hidden = false;
      render(D, true);
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (e) {
      progress.hidden = true; result.hidden = false;
      var m = e && e.message;
      setError(m && !/Failed to fetch|NetworkError|Load failed/i.test(m) ? m : L('Der Prüfdienst ist gerade nicht erreichbar. Bitte versuchen Sie es in einer Minute erneut.', 'The check service is not reachable right now. Please try again in a minute.'));
    } finally {
      btn.disabled = false;
    }
  }

  UP.initTheme(frame);
  $('scBar').appendChild(UP.themeButton(frame, 'a-btn sc-theme'));
  UP.init(function () { setError(''); $('scAll').checked = false; $('scDomain').value = ''; D = window.UP_SEC_REPORT[de ? 'de' : 'en']; render(D, true); });
  $('scForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = $('scDomain').value.trim();
    if (!v) { setError(L('Bitte geben Sie eine Domain ein, zum Beispiel ihre-firma.ch.', 'Please enter a domain, for example your-company.ch.')); $('scDomain').focus(); return; }
    run(v);
  });
  $('scAll').addEventListener('change', renderList);
  $('scPrint').addEventListener('click', function () { window.print(); });
  render(D);
})();
