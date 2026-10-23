/* Demo "Angriffsfläche": Domain eingeben, passiv aus öffentlichen Quellen die sichtbare Angriffsfläche zeigen.
   Details erst nach DNS-Nachweis. Alle Werte aus der Antwort werden mit textContent eingesetzt. */
(function () {
  'use strict';
  var UP = window.UP, frame = document.getElementById('app');
  if (!UP || !frame) return;
  var de = UP.lang === 'de';
  function L(a, b) { return de ? a : b; }
  var API = frame.getAttribute('data-api');
  var pentest = de ? '/pentesting.html' : '/en/pentesting.html';
  var last = null;
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function yn(v) { return v ? L('ja', 'yes') : L('nein', 'no'); }
  function setError(m) { var x = $('exErr'); x.textContent = m || ''; x.hidden = !m; }
  function busy(on) { $('exProg').hidden = !on; if (on) { $('exResult').hidden = true; setError(''); } }

  var SIGNAL = de ? {
    dev: 'Entwicklung', test: 'Test', testing: 'Test', staging: 'Vorabsystem', stage: 'Vorabsystem', uat: 'Abnahme', qa: 'Test', demo: 'Demo', beta: 'Beta',
    old: 'alt', alt: 'alt', legacy: 'alt', backup: 'Sicherung', bak: 'Sicherung', intern: 'intern', internal: 'intern', vpn: 'Fernzugang', remote: 'Fernzugang',
    admin: 'Verwaltung', portal: 'Portal', git: 'Code', gitlab: 'Code', jenkins: 'Build', ci: 'Build', jira: 'Projekt', confluence: 'Wiki', grafana: 'Monitoring', kibana: 'Monitoring',
    phpmyadmin: 'Datenbank', pma: 'Datenbank', db: 'Datenbank', sql: 'Datenbank', mysql: 'Datenbank', mail: 'E-Mail', smtp: 'E-Mail', imap: 'E-Mail', webmail: 'E-Mail', owa: 'E-Mail',
    autodiscover: 'E-Mail', ftp: 'Dateien', sftp: 'Dateien', ssh: 'Fernzugang', rdp: 'Fernzugang', cpanel: 'Verwaltung', plesk: 'Verwaltung', dashboard: 'Dashboard', monitor: 'Monitoring', status: 'Status', api: 'Schnittstelle', preprod: 'Vorabsystem', sandbox: 'Testumgebung'
  } : {};
  function signalLabel(sig) { return de ? (SIGNAL[sig] || sig) : sig; }

  function run(domain, verify) {
    busy(true);
    fetch(API + '/api/exposure', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ domain: domain, verify: !!verify, lang: de ? 'de' : 'en', website: $('exWebsite').value }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, status: r.status, j: j }; }); })
      .then(function (res) {
        busy(false);
        if (!res.ok || !res.j.domain) {
          var m = { domain: L('Bitte geben Sie eine gültige Domain ein, zum Beispiel ihre-firma.ch.', 'Please enter a valid domain, for example your-company.ch.'),
            limit: L('Zu viele Abfragen in kurzer Zeit. Bitte in einer Stunde erneut versuchen.', 'Too many queries in a short time. Please try again in an hour.') };
          setError(m[res.j.error] || L('Die Abfrage ist fehlgeschlagen.', 'The query failed.'));
          return;
        }
        last = res.j;
        render(res.j);
      })
      .catch(function () { busy(false); setError(L('Der Server ist gerade nicht erreichbar. Bitte in einer Minute erneut versuchen.', 'The server is not reachable right now. Please try again in a minute.')); });
  }

  function card(title, value, tone) { var c = el('div', 'ex-stat' + (tone ? ' ' + tone : '')); c.appendChild(el('div', 'ex-stat-v', value)); c.appendChild(el('div', 'ex-stat-t', title)); return c; }

  function render(d) {
    var box = $('exResult'); clear(box); box.hidden = false;
    box.appendChild(el('div', 'ex-domain', d.domain));

    var stats = el('div', 'ex-stats');
    if (d.ctOk) {
      stats.appendChild(card(L('Subdomains in Zertifikatsregistern', 'subdomains in certificate logs'), String(d.subdomainCount)));
      stats.appendChild(card(L('davon auffällig', 'of them conspicuous'), String(d.flaggedCount), d.flaggedCount ? 'warn' : 'ok'));
    } else {
      stats.appendChild(card(L('Zertifikatsregister', 'certificate logs'), L('nicht erreichbar', 'unavailable'), 'warn'));
    }
    stats.appendChild(card(L('E-Mail-Schutz (SPF)', 'email protection (SPF)'), yn(d.apex.spf), d.apex.spf ? 'ok' : 'warn'));
    stats.appendChild(card('DMARC', yn(d.apex.dmarc), d.apex.dmarc ? 'ok' : 'warn'));
    box.appendChild(stats);

    var apex = el('div', 'ex-apex');
    apex.appendChild(el('h4', null, L('Startseite', 'Home page')));
    var dl = el('dl', 'ex-dl');
    dl.appendChild(el('dt', null, 'HTTPS')); dl.appendChild(el('dd', null, yn(d.apex.https)));
    dl.appendChild(el('dt', null, L('http leitet auf https um', 'http redirects to https'))); dl.appendChild(el('dd', null, yn(d.apex.redirectsToHttps)));
    if (d.apex.software && d.apex.software.length) { dl.appendChild(el('dt', null, L('Erkannte Software', 'Detected software'))); dl.appendChild(el('dd', null, d.apex.software.join(', '))); }
    apex.appendChild(dl);
    box.appendChild(apex);

    if (!d.ctOk) box.appendChild(el('p', 'ex-hint', L('Das öffentliche Zertifikatsregister (crt.sh) war gerade nicht erreichbar. Startseite und E-Mail-Schutz oben stimmen trotzdem. Bitte später erneut versuchen.', 'The public certificate log (crt.sh) was not reachable just now. The home page and email protection above are still valid. Please try again later.')));

    if (d.verified && d.hosts) {
      box.appendChild(el('h4', 'ex-h4', L('Gefundene Hostnamen', 'Hostnames found')));
      var ul = el('ul', 'ex-hosts');
      d.hosts.forEach(function (h) {
        var li = el('li');
        li.appendChild(el('span', 'ex-host', h.host));
        if (h.signal) li.appendChild(el('span', 'ex-tag warn', signalLabel(h.signal)));
        if (h.live === true) li.appendChild(el('span', 'ex-tag live', L('erreichbar', 'reachable')));
        else if (h.live === false) li.appendChild(el('span', 'ex-tag', L('kein DNS', 'no DNS')));
        ul.appendChild(li);
      });
      box.appendChild(ul);
      if (d.truncated) box.appendChild(el('p', 'ex-hint', L('Nur die ersten ' + d.resolvedUpTo + ' Namen wurden auf Erreichbarkeit geprüft.', 'Only the first ' + d.resolvedUpTo + ' names were checked for reachability.')));
    } else if (d.ctOk) {
      var vb = el('div', 'ex-verify');
      vb.appendChild(el('h4', null, L('Hostnamen sehen: Domain nachweisen', 'See the hostnames: prove the domain')));
      vb.appendChild(el('p', null, L('Die Liste der Subdomains zeigen wir nur dem Inhaber. Legen Sie dazu diesen DNS-Eintrag an:', 'We show the list of subdomains only to the owner. Add this DNS record:')));
      var pre = el('div', 'ex-rec');
      pre.appendChild(rec(L('Name', 'Name'), d.verify.name));
      pre.appendChild(rec(L('Typ', 'Type'), d.verify.type));
      pre.appendChild(rec(L('Wert', 'Value'), d.verify.value, true));
      vb.appendChild(pre);
      var btn = el('button', 'a-btn p', L('Eintrag gesetzt – Details zeigen', 'Record set – show details')); btn.type = 'button';
      btn.addEventListener('click', function () { run(d.domain, true); });
      if (last && last.triedVerify) vb.appendChild(el('p', 'ex-hint warn', L('Der Eintrag wurde noch nicht gefunden. DNS-Änderungen brauchen manchmal einige Minuten.', 'The record was not found yet. DNS changes sometimes take a few minutes.')));
      vb.appendChild(btn);
      box.appendChild(vb);
    }

    var cta = el('div', 'ex-ctab');
    cta.appendChild(el('p', null, L('Das ist die Sicht von aussen. Was wirklich erreichbar und verwundbar ist, zeigt ein Pentest.', 'That is the view from outside. What is really reachable and vulnerable is shown by a pentest.')));
    var a = el('a', 'a-btn p', L('Zum Pentesting', 'About pentesting')); a.href = pentest; cta.appendChild(a);
    box.appendChild(cta);
  }
  function rec(k, v, copy) {
    var r = el('div', 'ex-rec-row');
    r.appendChild(el('span', 'ex-rec-k', k));
    r.appendChild(el('code', 'ex-rec-v', v));
    if (copy) { var b = el('button', 'ex-copy', L('Kopieren', 'Copy')); b.type = 'button'; b.addEventListener('click', function () { if (navigator.clipboard) navigator.clipboard.writeText(v).then(function () { b.textContent = L('Kopiert', 'Copied'); setTimeout(function () { b.textContent = L('Kopieren', 'Copy'); }, 1500); }); }); r.appendChild(b); }
    return r;
  }

  $('exForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = $('exDomain').value.trim();
    if (!v) { setError(L('Bitte geben Sie eine Domain ein.', 'Please enter a domain.')); return; }
    run(v, false);
  });
  function reset() { $('exResult').hidden = true; clear($('exResult')); setError(''); $('exDomain').value = ''; last = null; }
  UP.initTheme(frame);
  $('exBar').appendChild(UP.themeButton(frame, 'a-btn sc-theme'));
  UP.init(reset);

  // Fuer das Vorschaubild (?shot): eine Beispiel-Zusammenfassung zeigen, ohne Netz.
  if (UP.params && UP.params.has('shot')) {
    $('exDomain').value = 'beispiel-firma.ch';
    render({
      domain: 'beispiel-firma.ch', ctOk: true, subdomainCount: 14, flaggedCount: 3,
      apex: { https: true, redirectsToHttps: true, software: ['nginx'], spf: true, dmarc: false },
      verify: { name: 'beispiel-firma.ch', type: 'TXT', value: 'underpressure-check=4fa4b71e7728d18f3f619f4c' }, verified: false
    });
  }
})();
