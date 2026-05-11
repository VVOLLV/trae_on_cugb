document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animationObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => {
    animationObserver.observe(el);
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentSection = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
          }
        });
        
        const timelineNodes = entry.target.querySelectorAll('.timeline-node');
        timelineNodes.forEach(node => {
          node.classList.add('active');
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  });
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});
