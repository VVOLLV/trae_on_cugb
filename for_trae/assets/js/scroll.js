document.addEventListener('DOMContentLoaded', function() {
  // ========================================
  // Scroll-triggered animations
  // ========================================
  var animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
  
  var animObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(function(el) { animObserver.observe(el); });

  // ========================================
  // Navigation active state — scroll-based
  // ========================================
  var navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  var dropdownTrigger = document.querySelector('.dropdown-trigger');
  var sections = [];

  // Collect sections with their IDs and vertical positions
  var allSections = document.querySelectorAll('section[id]');
  allSections.forEach(function(s) {
    sections.push({
      id: s.getAttribute('id'),
      el: s
    });
  });

  // Sections that belong to the timeline dropdown
  var dropdownSectionIds = ['swimlane', 'phase01', 'phase02', 'phase03'];

  function getSectionTop(el) {
    // Get the element's position relative to the viewport
    var rect = el.getBoundingClientRect();
    return rect.top;
  }

  function updateActiveNav() {
    var viewportHeight = window.innerHeight;
    var triggerPoint = viewportHeight * 0.28; // 28% from top
    var currentSection = null;

    // Find the section closest to the trigger point from above
    for (var i = 0; i < sections.length; i++) {
      var top = getSectionTop(sections[i].el);
      if (top <= triggerPoint) {
        currentSection = sections[i].id;
      }
    }

    if (!currentSection) {
      // Near the very top — highlight first section
      currentSection = sections[0] ? sections[0].id : null;
    }

    // Update nav links
    navLinks.forEach(function(link) {
      link.classList.remove('active');
      var href = link.getAttribute('href');
      if (href === '#' + currentSection) {
        link.classList.add('active');
      }
    });

    // Highlight dropdown trigger if any dropdown section is active
    if (dropdownTrigger) {
      if (currentSection && dropdownSectionIds.indexOf(currentSection) >= 0) {
        dropdownTrigger.classList.add('active');
      } else {
        dropdownTrigger.classList.remove('active');
      }
    }
  }

  // Listen to both scroll and custom reveal updates
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // Also poll during reveal animation (since it uses translateY)
  var revealPoll = null;
  var mainLayer = document.getElementById('main-layer');
  if (mainLayer) {
    // Use MutationObserver to detect transform changes
    var transformObserver = new MutationObserver(function() {
      // Debounce
      if (revealPoll) clearTimeout(revealPoll);
      revealPoll = setTimeout(updateActiveNav, 50);
    });
    transformObserver.observe(mainLayer, { attributes: true, attributeFilter: ['style'] });
    
    // Also poll via requestAnimationFrame during scrolling
    var ticking = false;
    function pollLoop() {
      updateActiveNav();
      ticking = false;
    }
    var origRAF = window.requestAnimationFrame;
    // Simpler approach: just run on scroll + interval
    setInterval(function() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(function() {
          updateActiveNav();
          ticking = false;
        });
      }
    }, 200);
  }

  // Initial call
  setTimeout(updateActiveNav, 300);
});
