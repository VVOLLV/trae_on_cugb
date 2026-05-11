/* ============================================================
   scroll.js — Intersection Observer
   Scroll-triggered reveal animations + timeline node activation.
   ============================================================ */
(function () {
  /* ---- Reveal animations ---- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        if (entry.target.classList.contains('stagger-children')) {
          entry.target.classList.add('reveal');
        }

        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-in, .fade-in, .stagger-children').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---- Timeline node activation ---- */
  var phaseIds = ['phase-01', 'phase-02', 'phase-03', 'phase-04'];
  var timelineNodes = document.querySelectorAll('.timeline-node');
  if (timelineNodes.length === 0) return;

  var timelineObserver = new IntersectionObserver(function () {
    phaseIds.forEach(function (pid, i) {
      var el = document.getElementById(pid);
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.6) {
        timelineNodes[i] && timelineNodes[i].classList.add('active');
      } else {
        timelineNodes[i] && timelineNodes[i].classList.remove('active');
      }
    });
  }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

  phaseIds.forEach(function (pid) {
    var el = document.getElementById(pid);
    if (el) timelineObserver.observe(el);
  });
})();
