/* ─────────────────────────────────────────────
   LEEDEAR — main.js
   ───────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Active nav link ─────────────────────── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
  document.querySelectorAll('.mobile-nav__item').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Scroll-aware nav opacity ────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.style.background = 'rgba(250,249,248,0.92)';
      } else {
        nav.style.background = 'rgba(250,249,248,0.70)';
      }
    }, { passive: true });
  }

  /* ── Intersection observer fade-ups ─────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    io.observe(el);
  });

})();
