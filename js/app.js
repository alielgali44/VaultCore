/* ════════════════════════════════════════
   js/app.js — Vault Core shared scripts
   Theme toggle + Scroll-reveal.
   Loaded with defer on every page.
   NOTE: Anti-flash stays inline in <head>
         because external scripts run late.
════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── THEME ────────────────────────── */
  var html   = document.documentElement;
  var toggle = document.getElementById('themeToggle');

  var sunIcon  = '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var moonIcon = '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem('vc-theme', t);
    if (toggle) {
      toggle.innerHTML = t === 'dark'
        ? sunIcon  + ' Light'
        : moonIcon + ' Dark';
    }
  }

  if (toggle) {
    /* Set initial icon state (theme already applied by anti-flash script) */
    toggle.innerHTML = html.getAttribute('data-theme') === 'dark'
      ? sunIcon  + ' Light'
      : moonIcon + ' Dark';

    toggle.addEventListener('click', function () {
      applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ── SCROLL REVEAL ───────────────── */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    io.observe(el);
  });

}());
