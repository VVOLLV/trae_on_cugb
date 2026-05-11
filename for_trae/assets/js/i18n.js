const I18n = {
  STORAGE_KEY: 'trae-lang',
  
  translations: {
    zh: {
      overview: '概述',
      timeline: '时间线',
      reflection: '复盘',
      about: '关于',
      phase01: '申请期',
      phase02: '策划期',
      phase03: '落地期',
      phase04: '复盘期',
      overview_title: '项目概述',
      overview_subtitle: '一场从零到一的 AI Coding 实践',
      startReading: '开始阅读',
      scroll: 'Scroll',
      event_count: '场活动',
      participants: '+ 参与者',
      hours: '小时体验',
      sessions: '个环节',
      days: '天筹备',
      phase_label: 'Phase',
      date_format: '年',
      location: '北京嘉里中心·星巴克甄选',
      highlights_title: '精选瞬间',
      highlights_subtitle: '那些值得被定格的画面',
      about_title: '关于活动',
      credits_title: '特别鸣谢',
      footer_text: '© 2026 TRAE on Campus @ CUGB'
    },
    en: {
      overview: 'Overview',
      timeline: 'Timeline',
      reflection: 'Review',
      about: 'About',
      phase01: 'Application',
      phase02: 'Planning',
      phase03: 'Execution',
      phase04: 'Review',
      overview_title: 'Project Overview',
      overview_subtitle: 'A Journey from Zero to One in AI Coding',
      startReading: 'Start Reading',
      scroll: 'Scroll',
      event_count: ' Events',
      participants: '+ Participants',
      hours: ' Hours',
      sessions: ' Sessions',
      days: ' Days Prep',
      phase_label: 'Phase',
      date_format: '',
      location: 'Beijing Kerry Center · Starbucks Reserve',
      highlights_title: 'Highlights',
      highlights_subtitle: 'Moments Worth Capturing',
      about_title: 'About',
      credits_title: 'Credits',
      footer_text: '© 2026 TRAE on Campus @ CUGB'
    }
  },
  
  init() {
    const savedLang = localStorage.getItem(this.STORAGE_KEY) || 'zh';
    this.setLang(savedLang);
    this.bindEvents();
  },
  
  setLang(lang) {
    const translations = this.translations[lang];
    const root = document.documentElement;
    
    root.setAttribute('data-lang', lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[key]) {
        el.placeholder = translations[key];
      }
    });
    
    this.updateButton(lang);
    
    document.documentElement.lang = lang;
  },
  
  toggle() {
    const current = document.documentElement.getAttribute('data-lang');
    const next = current === 'zh' ? 'en' : 'zh';
    this.setLang(next);
  },
  
  updateButton(lang) {
    const btn = document.querySelector('[data-action="lang-toggle"]');
    if (btn) {
      btn.setAttribute('data-lang', lang);
      btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
      
      const textEl = btn.querySelector('.lang-text');
      if (textEl) {
        textEl.textContent = lang.toUpperCase();
      }
    }
  },
  
  bindEvents() {
    const btn = document.querySelector('[data-action="lang-toggle"]');
    if (btn) {
      btn.addEventListener('click', () => this.toggle());
    }
  }
};

document.addEventListener('DOMContentLoaded', () => I18n.init());