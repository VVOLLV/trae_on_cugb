(function() {
  var container = document.getElementById('page-container');
  var mainLayer = document.getElementById('main-layer');
  var footerLayer = document.querySelector('.footer-layer');
  if (!container || !mainLayer || !footerLayer) return;

  var topBar = document.querySelector('.top-bar');
  var nav = document.querySelector('.nav');
  var topBarHeight = 36;
  if (window.innerWidth <= 767) topBarHeight = 0;

  var offset = 0;
  var footerHeight = 0;
  var ticking = false;
  var targetOffset = 0;
  var easing = 0.12;

  function updateTopBarHeight() {
    topBarHeight = window.innerWidth <= 767 ? 0 : 36;
  }

  function updateFooterHeight() {
    footerHeight = footerLayer.offsetHeight;
  }

  function getMaxScroll() {
    return Math.max(0, mainLayer.offsetHeight - (container.offsetHeight - footerHeight));
  }

  function clampOffset(val) {
    var max = getMaxScroll();
    return Math.max(0, Math.min(max, val));
  }

  function applyTransform() {
    mainLayer.style.transform = 'translateY(' + (-offset) + 'px)';
    if (topBar) {
      var hideAmount = Math.min(offset, topBarHeight);
      topBar.style.transform = 'translateY(' + (-hideAmount) + 'px)';
      topBar.style.marginBottom = '-' + hideAmount + 'px';
    }
    if (nav) {
      if (offset > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function() {
        offset += (targetOffset - offset) * easing;
        if (Math.abs(targetOffset - offset) < 0.5) {
          offset = targetOffset;
        }
        offset = clampOffset(offset);
        applyTransform();
        if (Math.abs(targetOffset - offset) > 0.5) {
          ticking = false;
          requestTick();
        }
      });
    }
  }

  function addOffset(delta) {
    targetOffset = clampOffset(targetOffset + delta);
    requestTick();
  }

  function isScrollableElement(el) {
    if (!el) return false;
    var style = window.getComputedStyle(el);
    var overflowY = style.overflowY;
    return (overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight;
  }

  function findScrollableParent(el) {
    while (el && el !== container && el !== document.body) {
      if (isScrollableElement(el)) return el;
      el = el.parentElement;
    }
    return null;
  }

  window.addEventListener('wheel', function(e) {
    var scrollableParent = findScrollableParent(e.target);
    if (scrollableParent) return;

    var maxScroll = getMaxScroll();
    var atTop = offset <= 0 && e.deltaY < 0;
    var atBottom = offset >= maxScroll && e.deltaY > 0;

    if (!atTop && !atBottom) {
      e.preventDefault();
      addOffset(e.deltaY);
    } else if (atBottom && e.deltaY > 0) {
      e.preventDefault();
    } else if (atTop && e.deltaY < 0) {
      e.preventDefault();
    }
  }, { passive: false });

  var lastTouchY = 0;

  window.addEventListener('touchstart', function(e) {
    if (e.touches.length === 1) {
      lastTouchY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', function(e) {
    var scrollableParent = findScrollableParent(e.target);
    if (scrollableParent) return;

    if (e.touches.length !== 1) return;

    var dy = lastTouchY - e.touches[0].clientY;
    lastTouchY = e.touches[0].clientY;

    var maxScroll = getMaxScroll();
    var atTop = offset <= 0 && dy < 0;
    var atBottom = offset >= maxScroll && dy > 0;

    if (!atTop && !atBottom) {
      e.preventDefault();
      addOffset(dy);
    } else if (atBottom && dy > 0) {
      e.preventDefault();
    } else if (atTop && dy < 0) {
      e.preventDefault();
    }
  }, { passive: false });

  window.addEventListener('resize', function() {
    updateTopBarHeight();
    updateFooterHeight();
    targetOffset = clampOffset(targetOffset);
    offset = targetOffset;
    applyTransform();
  });

  updateTopBarHeight();
  updateFooterHeight();

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      if (targetId === '#about') {
        targetOffset = getMaxScroll();
        requestTick();
        return;
      }

      if (!mainLayer.contains(target)) return;

      var targetTop = 0;
      var el = target;
      while (el && el !== mainLayer) {
        targetTop += el.offsetTop;
        el = el.offsetParent;
      }

      var navOffset = window.innerWidth <= 767 ? 52 : 92;
      targetOffset = clampOffset(targetTop - navOffset);
      requestTick();
    });
  });

  footerLayer.addEventListener('mousemove', function(e) {
    var rect = footerLayer.getBoundingClientRect();
    var x = ((e.clientX - rect.left) / rect.width) * 100;
    var y = ((e.clientY - rect.top) / rect.height) * 100;
    footerLayer.style.setProperty('--mouse-x', x + '%');
    footerLayer.style.setProperty('--mouse-y', y + '%');
  });

  footerLayer.addEventListener('mouseleave', function() {
    footerLayer.style.setProperty('--mouse-x', '50%');
    footerLayer.style.setProperty('--mouse-y', '50%');
  });

  window.togglePhase = function(el) {
    var item = el.closest('.timeline-item');
    var isExpanded = item.classList.contains('expanded');
    
    item.classList.toggle('expanded');
    
    if (isExpanded) {
      el.textContent = '展开详情 ▾';
    } else {
      el.textContent = '收起详情 ▴';
      
      var detail = item.querySelector('.timeline-detail');
      var target = document.getElementById(item.getAttribute('data-phase'));
      if (target && target !== null) {
        setTimeout(function() {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 350);
      }
    }
  };
})();