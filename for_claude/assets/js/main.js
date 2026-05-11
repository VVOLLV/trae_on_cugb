/* ============================================================
   main.js — Navigation & Mobile Menu
   ============================================================ */
(function () {
  var nav = document.getElementById('nav');
  var desktopLinks = document.querySelectorAll('#navLinks a');
  var mobileLinks = document.querySelectorAll('#navMobile a');
  var toggle = document.getElementById('navToggle');
  var mobilePanel = document.getElementById('navMobile');

  /* ---- Gather sections ---- */
  var sections = [];
  desktopLinks.forEach(function (a) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) sections.push(target);
  });

  /* ---- Scroll handler ---- */
  function onScroll() {
    var y = window.pageYOffset;

    // Nav background
    nav.classList.toggle('scrolled', y > 50);

    // Determine current section
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.getBoundingClientRect().top < window.innerHeight * 0.4) {
        current = sec;
      }
    });
    var id = current.getAttribute('id');

    // Update desktop + mobile active state
    function setActive(links) {
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }
    setActive(desktopLinks);
    setActive(mobileLinks);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu toggle ---- */
  toggle.addEventListener('click', function () {
    var open = mobilePanel.classList.toggle('open');
    toggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  /* ---- Close mobile menu on link click ---- */
  mobileLinks.forEach(function (a) {
    a.addEventListener('click', function () {
      mobilePanel.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();
