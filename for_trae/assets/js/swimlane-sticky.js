(function() {
  var mainLayer = document.getElementById('main-layer');
  var swimlane = document.getElementById('swimlane');
  if (!mainLayer || !swimlane) return;

  // ---- Build sticky header clone ----
  var sticky = document.createElement('div');
  sticky.className = 'swimlane-sticky-head';
  document.body.appendChild(sticky);

  var corner = document.createElement('div');
  corner.className = 'sticky-corner';
  corner.setAttribute('data-i18n', 'swimlane_role');
  corner.textContent = '角色';
  sticky.appendChild(corner);

  var phases = swimlane.querySelectorAll('.swimlane-phase');
  phases.forEach(function(ph) {
    var clone = document.createElement('div');
    clone.className = 'sticky-phase';
    clone.innerHTML = ph.innerHTML;
    sticky.appendChild(clone);
  });

  // ---- Visibility: getBoundingClientRect-based (reliable with transforms) ----
  var ticking = false;

  function update() {
    var nav = document.querySelector('.nav');
    var navBottom = nav ? nav.getBoundingClientRect().bottom : 92;

    var grid = swimlane.querySelector('.swimlane-grid');
    if (!grid) return;
    var firstPhase = grid.querySelector('.swimlane-phase');
    if (!firstPhase) return;

    var phaseRect = firstPhase.getBoundingClientRect();
    var swimRect = swimlane.getBoundingClientRect();

    // Show when: original phase headers are ABOVE nav bar
    // AND swimlane section is still partially BELOW nav bar
    var headersAboveNav = phaseRect.bottom < navBottom;
    var swimStillVisible = swimRect.bottom > navBottom;

    var shouldShow = headersAboveNav && swimStillVisible;

    if (shouldShow) {
      sticky.classList.add('visible');
    } else {
      sticky.classList.remove('visible');
    }

    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  var observer = new MutationObserver(function() { requestUpdate(); });
  observer.observe(mainLayer, { attributes: true, attributeFilter: ['style'] });
  window.addEventListener('wheel', function() { requestUpdate(); }, { passive: true });
  window.addEventListener('touchmove', function() { requestUpdate(); }, { passive: true });
  window.addEventListener('resize', function() { requestUpdate(); });
  requestUpdate();
})();
