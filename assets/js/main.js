/* Dekorative und unterstützende Funktionen. Die Seite funktioniert vollständig ohne dieses Skript. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var de = (root.lang || 'de').slice(0, 2) === 'de';
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "'"); }

  // Einblenden beim Scrollen
  var items = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }
  window.setTimeout(function () { items.forEach(function (el) { el.classList.add('in'); }); }, 4000);

  // Fortschrittsbalken und Höhenanzeige (dekorativ)
  var bar = document.querySelector('.progress');
  var out = document.getElementById('alt-value');
  var ticking = false;
  function update() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (bar) bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    if (out) out.textContent = fmt(Math.round(p * 100) * 100);
    ticking = false;
  }
  if (bar || out) { window.addEventListener('scroll', function () { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }, { passive: true }); update(); }

  // Zähler
  var counters = document.querySelectorAll('[data-count]');
  function runCounter(el) {
    var end = +el.getAttribute('data-count'), suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = end + suffix; return; }
    var t0 = null, dur = 1200;
    function step(ts) { if (!t0) t0 = ts; var p = Math.min(1, (ts - t0) / dur); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix; if (p < 1) window.requestAnimationFrame(step); }
    window.requestAnimationFrame(step);
  }
  if (counters.length && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { runCounter(e.target); co.unobserve(e.target); } }); }, { threshold: 0.6 });
    counters.forEach(function (c) { c.textContent = '0' + (c.getAttribute('data-suffix') || ''); co.observe(c); });
  }

  // Fähigkeiten-Explorer
  document.querySelectorAll('.explorer').forEach(function (ex) {
    var tabs = ex.querySelectorAll('[role="tab"]'), panels = ex.querySelectorAll('[role="tabpanel"]');
    function select(i, focus) {
      tabs.forEach(function (t, k) { var on = k === i; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; panels[k].hidden = !on; });
      if (focus) tabs[i].focus();
      if (history.replaceState) history.replaceState(null, '', '#' + panels[i].id.replace('p-', ''));
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(i, false); });
      t.addEventListener('keydown', function (ev) {
        var n = tabs.length;
        if (ev.key === 'ArrowDown' || ev.key === 'ArrowRight') { ev.preventDefault(); select((i + 1) % n, true); }
        if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') { ev.preventDefault(); select((i + n - 1) % n, true); }
      });
    });
    var h = window.location.hash.replace('#', ''), start = 0;
    panels.forEach(function (p, k) { if (p.id === 'p-' + h) start = k; });
    select(start, false);
    if (start === 0) { try { history.replaceState(null, '', window.location.pathname + window.location.search); } catch (e) { /* ignorieren */ } }
  });

  // Galerie: Lightbox
  var gal = document.querySelectorAll('.gallery button[data-full]');
  if (gal.length && typeof HTMLDialogElement === 'function') {
    var dlg = document.createElement('dialog'); dlg.className = 'lightbox'; dlg.setAttribute('aria-label', de ? 'Bildansicht' : 'Image view');
    var big = document.createElement('img'), close = document.createElement('button'); close.type = 'button'; close.textContent = de ? 'Schliessen' : 'Close';
    dlg.appendChild(big); dlg.appendChild(close); document.body.appendChild(dlg);
    close.addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    gal.forEach(function (b) { b.addEventListener('click', function () { big.src = b.getAttribute('data-full'); big.alt = b.getAttribute('data-alt') || ''; dlg.showModal(); }); });
  }

  // Projektbrief: baut eine E-Mail im eigenen Mailprogramm, sendet selbst nichts
  var brief = document.getElementById('brief');
  if (brief) {
    brief.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var f = brief.elements, kinds = [];
      brief.querySelectorAll('input[name="art"]:checked').forEach(function (c) { kinds.push(c.value); });
      var L = de ? { n: 'Name', f: 'Firma', a: 'Art des Projekts', w: 'Worum geht es', b: 'Bis wann', s: 'Bestehendes', subj: 'Anfrage Projekt' } : { n: 'Name', f: 'Company', a: 'Type of project', w: 'What it is about', b: 'By when', s: 'Existing setup', subj: 'Project enquiry' };
      var body = [L.n + ': ' + f.name.value, L.f + ': ' + f.firma.value, L.a + ': ' + kinds.join(', '), L.b + ': ' + f.frist.value, '', L.w + ':', f.text.value, '', L.s + ':', f.bestand.value].join('\n');
      window.location.href = 'mailto:' + brief.getAttribute('data-to') + '?subject=' + encodeURIComponent(L.subj + (f.firma.value ? ' ' + f.firma.value : '')) + '&body=' + encodeURIComponent(body);
    });
  }
})();
