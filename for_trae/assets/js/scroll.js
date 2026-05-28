document.addEventListener('DOMContentLoaded', function() {
  var animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');

  var animObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  animatedElements.forEach(function(el) { animObserver.observe(el); });

  var navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  var dropdownTrigger = document.querySelector('.dropdown-trigger');
  var sections = [];
  var allSections = document.querySelectorAll('section[id]');
  var lastKnownSection = null;

  allSections.forEach(function(s) {
    sections.push({
      id: s.getAttribute('id'),
      el: s
    });
  });

  var dropdownSectionIds = ['swimlane', 'phase01', 'phase02', 'phase03'];

  function getSectionTop(el) {
    var rect = el.getBoundingClientRect();
    return rect.top;
  }

  function updateActiveNav() {
    var viewportHeight = window.innerHeight;
    var triggerPoint = viewportHeight * 0.28;
    var currentSection = null;

    for (var i = 0; i < sections.length; i++) {
      var top = getSectionTop(sections[i].el);
      if (top <= triggerPoint) {
        currentSection = sections[i].id;
      }
    }

    if (!currentSection && sections[0]) {
      currentSection = sections[0].id;
    }

    if (currentSection !== lastKnownSection) {
      lastKnownSection = currentSection;

      navLinks.forEach(function(link) {
        link.classList.remove('active');
        var href = link.getAttribute('href');
        if (href === '#' + currentSection) {
          link.classList.add('active');
        }
      });

      if (dropdownTrigger) {
        if (currentSection && dropdownSectionIds.indexOf(currentSection) >= 0) {
          dropdownTrigger.classList.add('active');
        } else {
          dropdownTrigger.classList.remove('active');
        }
      }
    }
  }

  var scrollTicking = false;
  window.addEventListener('scroll', function() {
    if (!scrollTicking) {
      window.requestAnimationFrame(function() {
        updateActiveNav();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  var mainLayer = document.getElementById('main-layer');
  if (mainLayer) {
    var transformThrottle = null;
    var observer = new MutationObserver(function() {
      if (transformThrottle) clearTimeout(transformThrottle);
      transformThrottle = setTimeout(updateActiveNav, 100);
    });
    observer.observe(mainLayer, { attributes: true, attributeFilter: ['style'] });
  }

  setTimeout(updateActiveNav, 300);
});
