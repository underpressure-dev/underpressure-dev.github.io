/* Dekorative Extras. Die Seite funktioniert vollständig ohne dieses Skript. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Einblenden beim Scrollen
  var items = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
  // Absicherung: Inhalte nie dauerhaft versteckt lassen
  window.setTimeout(function () {
    items.forEach(function (el) { el.classList.add('in'); });
  }, 4000);

  // Höhenanzeige: Scrollposition als Meter (0 bis 10'000), nur Dekoration
  var out = document.getElementById('alt-value');
  if (out) {
    var ticking = false;
    var fmt = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "'"); };
    var update = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      out.textContent = fmt(Math.round(p * 100) * 100);
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }
})();
