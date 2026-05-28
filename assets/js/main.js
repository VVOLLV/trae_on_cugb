document.addEventListener('DOMContentLoaded', function() {
  /* 异步跟进可切换组件 */
  document.querySelectorAll('.mck-async-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('expanded');
      var isExpanded = this.classList.contains('expanded');
      this.setAttribute('aria-expanded', String(isExpanded));
    });

    toggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
});
