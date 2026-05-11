document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  navToggle.addEventListener('click', function() {
    navMobile.classList.toggle('active');
    this.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMobile.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = nav.offsetHeight;
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
