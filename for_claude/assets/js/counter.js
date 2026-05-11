/* ============================================================
   counter.js — Hero Number Count-Up Animation
   Depends on: CountUp.js (CDN, loaded in <head>)
   ============================================================ */
(function () {
  var fired = false;
  var statsEl = document.getElementById('heroStats');
  if (!statsEl) return;

  function startCountUp() {
    if (fired) return;
    fired = true;

    statsEl.querySelectorAll('.hero-stat-number').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      if (typeof countUp !== 'undefined') {
        var instance = new countUp.CountUp(el, target, {
          duration: 2,
          enableScrollSpy: false
        });
        if (!instance.error) {
          instance.start();
          return;
        }
      }
      el.textContent = target;
    });

    statsEl.classList.add('reveal');
  }

  // Trigger via Intersection Observer
  var obs = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) startCountUp();
  }, { threshold: 0.5 });
  obs.observe(statsEl);

  // Fallback
  setTimeout(startCountUp, 600);
})();
