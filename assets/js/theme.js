const ThemeManager = {
  STORAGE_KEY: 'trae-theme',
  
  themes: {
    dark: {
      '--bg-primary': '#000000',
      '--bg-card': '#0A0A0A',
      '--bg-secondary': '#121212',
      '--border-color': '#1F1F1F',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#9CA3AF',
      '--text-muted': '#4B5563'
    },
    light: {
      '--bg-primary': '#FFFFFF',
      '--bg-card': '#F5F5F5',
      '--bg-secondary': '#EBEBEB',
      '--border-color': '#E5E5E5',
      '--text-primary': '#1A1A1A',
      '--text-secondary': '#666666',
      '--text-muted': '#999999'
    }
  },
  
  init() {
    const savedTheme = localStorage.getItem(this.STORAGE_KEY) || 'dark';
    this.setTheme(savedTheme);
    this.bindEvents();
  },
  
  setTheme(theme) {
    const root = document.documentElement;
    const themeVars = this.themes[theme];
    
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    root.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    
    this.updateButton(theme);
    
    document.body.classList.add('theme-transition');
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 300);
  },
  
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  },
  
  updateButton(theme) {
    const btn = document.querySelector('[data-action="theme-toggle"]');
    if (btn) {
      btn.setAttribute('data-theme', theme);
      const isZh = document.documentElement.getAttribute('data-lang') !== 'en';
      btn.setAttribute('aria-label', isZh 
        ? (theme === 'dark' ? '切换到浅色模式' : '切换到深色模式')
        : (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
      );
    }
  },
  
  bindEvents() {
    const btn = document.querySelector('[data-action="theme-toggle"]');
    if (btn) {
      btn.addEventListener('click', () => this.toggle());
    }
  }
};

document.addEventListener('DOMContentLoaded', () => ThemeManager.init());