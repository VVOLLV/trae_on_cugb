document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

  navToggle.addEventListener('click', function() {
    navMobile.classList.toggle('active');
    this.classList.toggle('active');
  });

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navMobile.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMobile.classList.contains('active')) {
      navMobile.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
});
