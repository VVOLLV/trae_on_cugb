const I18n = {
  STORAGE_KEY: 'trae-lang',
  
  translations: {
    zh: {
      // Navigation
      nav_swimlane: '分工协作',
      nav_timeline: '时间线',
      highlights: '精彩瞬间',
      top_logo: 'TRAE on Campus @中国地质大学（北京）',

      // Hero
      startReading: '开始阅读',
      event_count: '场活动',
      participants: '+ 参与者',
      hours: '小时体验',
      days: '个月筹备',
      hero_university: '@中国地质大学（北京）',
      hero_desc: 'TRAE on Campus 是字节跳动旗下 AI 编程产品——TRAE发起的校园计划，校园大使与 TRAE 运营团队对接，策划落地Hakthon、Workshop、Meetup等系列活动，通过主题分享与动手实践让参与者零距离体验 AI 原生开发。',
      hero_venue: '本次中国地质大学（北京）站以 AI Coding Meetup 形式举办',

      // Timeline section
      timeline_tag: 'Timeline',
      timeline_title: '时间线',
      timeline_subtitle: '从申请到落地，三个月的完整活动历程',

      // Timeline phases
      phase_apply: '申请',
      phase_apply_desc: '成为校园大使，获得品牌授权与资源支持',
      phase_plan: '策划',
      phase_plan_desc: '从模糊想法到完整执行方案的迭代',
      phase_land: '落地',
      phase_land_desc: '北京嘉里中心·星巴克甄选，50 名参与者到场',
      phase_reflect: '复盘',
      phase_reflect_desc: '沉淀经验，为下一站做准备',

      // Timeline detail content
      phase_apply_detail_title: '故事的开始',
      phase_apply_detail_body: '偶然在社交平台看到了 TRAE on Campus 在其他高校举办活动，当时我就在想：我可不可以在我们学校举办这种活动呢？于是去搜集更多关于 TRAE on Campus 的信息，找到报名表，填写并提交报名表。三周后，获得面试邀请，参加面试，面试通过。',
      phase_plan_detail_title: '策划历程',
      phase_plan_detail_body: '最初方案是在校内举办 Workshop，但场地和活动审批始终无法推进，项目一度卡住。与 TRAE 运营沟通后，运营团队协助锁定了校外场地，活动形式也从 Workshop 调整为更灵活的 Meetup——这一调整反而让后续的筹备路径清晰了很多。',
      phase_land_detail_title: '活动当天',
      phase_land_detail_body: '5月10日下午，50位参与者在嘉里中心·星巴克甄选齐聚。李骁老师与橘子老师分别带来主题分享，校园大使现场带领实操教学，三个小时里大家从听到做，亲身感受了 AI 辅助编程的体验。',

      // RODS table
      rods_col_time: '时间',
      rods_col_session: '环节',
      rods_col_content: '内容',
      rods_r1_s: '签到暖场', rods_r1_d: '签到入场、自由交流',
      rods_r2_s: '开场介绍', rods_r2_d: '活动定位介绍',
      rods_r3_s: '主题分享', rods_r3_d: '李骁老师分享',
      rods_r4_d: '第一轮答疑',
      rods_r5_s: '主题分享', rods_r5_d: '橘子老师分享',
      rods_r6_d: '第二轮答疑',
      rods_r7_d: '自由交流分享',
      rods_r8_s: '实操教学', rods_r8_d: '校园大使实操教学',
      rods_r9_s: '合影留念', rods_r9_d: '活动总结、合影',

      // Swimlane — headers
      swimlane_tag: 'Division of Work',
      swimlane_title: 'TRAE 运营 × 校园大使',
      swimlane_desc: '从申请到落地，两个角色如何分工协作推进一场 50 人的 AI Coding Meetup',
      swimlane_col_time: '时间',
      swimlane_col_trae: 'TRAE 运营',
      swimlane_col_trae_sub: '品牌 & 产品支持',
      swimlane_col_amb: '校园大使',
      swimlane_col_amb_sub: '策划 & 执行负责人',

      // Swimlane — TRAE运营
      v_trae_1: '发布 TRAE on Campus 招募计划',
      v_trae_2: '同步沟通①：面试 & 确认合作意向',
      v_trae_3: '微信异步跟进',
      v_trae_4: '同步沟通②：确认策划案细节',
      v_trae_5: '微信异步跟进',
      v_trae_6: '确认校外举办方案',
      v_trae_7: '微信异步跟进',
      v_trae_8: '同步沟通③：确认活动流程',
      v_trae_9: '活动成功举办',

      // Swimlane — 校园大使
      v_amb_1: '获取招募信息，提交报名表',
      v_amb_3: '完成初版策划书',
      v_amb_5: '推进校内场地审批，遇阻',
      v_amb_7: '启动线上宣传',
      v_amb_8: '北京嘉里中心星巴克甄选场地踩点',

      // Phase 04 — 做对了
      reflection_good_title: '做对了',
      p4_good_1: '提前梳理流程并同步 TRAE 运营，活动前对齐让协作更顺畅',
      p4_good_2: '准备应急策略。网络波动时切换为抽奖互动，避免冷场',
      p4_good_3: '提前到场完成布置，物料设备在参与者到达前就位',

      // Phase 04 — 待改进
      reflection_bad_title: '待改进',
      p4_bad_1: '场地踩点未测试屏幕实际效果，现场显示质量不佳',
      p4_bad_2: '未安排专人摄影，可用照片数量不足且质量欠佳',

      // Phase 04 — 改进方向
      reflection_improve_title: '改进方向',
      p4_improve_1: '踩点时逐一测试关键设备（屏幕、接口、音响），形成清单',
      p4_improve_2: '邀请同学专职负责活动摄影，确保各环节素材充足',

      // Phase 04 — 成长感悟
      reflection_growth_title: '个人成长感悟',
      p4_growth: '一是想象和现实总有差距，不必追求完美，先把能用的资源用起来；二是品牌方比谁都希望活动办好，主动沟通比闷头做事效率高很多。现场体会到一个人兼顾主持、控场、设备的局限，下次再做会尽早组建小团队分工协作。',

      // Highlights
      highlights_tag: 'Highlights',
      highlights_title: '精选瞬间',
      highlights_subtitle: '那些值得被定格的画面',
      hl_card1_title: '活动现场',
      hl_card1_quote: '嘉里中心·星巴克甄选，50 位参与者齐聚一堂',
      hl_card2_title: '筹备日常',
      hl_card2_quote: '学校教室内，分发线下宣传物料',
      hl_card3_title: '场地细节',
      hl_card3_quote: '星巴克 × TRAE SOLO',

      // About / Footer
      about_title: '关于活动',
      credits_title: '特别鸣谢',
      footer_text: '© 2026 TRAE on Campus @ CUGB',
      footer_title: 'TRAE on Campus @中国地质大学（北京）',
      event_badge_1: '第一期',
      event_badge_2: '第二期',
      event_name: 'AI Coding Meetup',
      event_date: '📅 2026年5月10日',
      event_attendance: '👥 50人到场 · 80人报名',
      event_location: '📍 北京嘉里中心·星巴克甄选',
      event_upcoming: '正在筹备中',
      footer_copyright: 'TRAE on Campus @中国地质大学（北京）by Quankun',
      about_brand_desc: 'TRAE on Campus — AI Coding Meetup',
      about_brand_sub: '一场让高校开发者零距离体验 AI 原生开发的活动',
      about_date_label: '活动日期',
      about_location_label: '活动地点',
      about_theme_label: '活动主题',
      about_scale_label: '活动规模',
      about_date_val: '2026 年 5 月 10 日',
      about_theme_val: 'Ship faster with TRAE',
      about_scale_val: '50+ 人',
      about_credits: '感谢 TRAE 运营团队的大力支持，以及所有参与者的热情投入。本次活动由 TRAE 校园大使独立推进完成。',
    },

    en: {
      // Navigation
      nav_swimlane: 'Division of Work',
      nav_timeline: 'Timeline',
      highlights: 'Highlights',
      top_logo: 'TRAE on Campus @China University of Geosciences (Beijing)',

      // Hero
      startReading: 'Start Reading',
      event_count: ' Event',
      participants: '+ Participants',
      hours: ' Hours',
      days: ' Months Prep',
      hero_university: '@China University of Geosciences (Beijing)',
      hero_desc: 'TRAE on Campus is ByteDance\'s AI coding product - a campus initiative launched by TRAE. Campus Ambassadors collaborate with the TRAE operations team to organize events including Hackathons, Workshops, and Meetups, allowing participants to experience AI-native development through presentations and hands-on practice.',
      hero_venue: 'This stop at China University of Geosciences (Beijing) was held as an AI Coding Meetup',

      // Timeline section
      timeline_tag: 'Timeline',
      timeline_title: 'Timeline',
      timeline_subtitle: 'A three-month journey from application to execution',

      // Timeline phases
      phase_apply: 'Application',
      phase_apply_desc: 'Became a Campus Ambassador, received brand authorization and resource support',
      phase_plan: 'Planning',
      phase_plan_desc: 'From a vague idea to a complete execution plan',
      phase_land: 'Execution',
      phase_land_desc: 'Beijing Kerry Center · Starbucks Reserve, 50 participants attended',
      phase_reflect: 'Reflection',
      phase_reflect_desc: 'Consolidating experience, preparing for the next stop',

      // Timeline detail content
      phase_apply_detail_title: 'How It All Started',
      phase_apply_detail_body: 'I stumbled upon TRAE on Campus events at other universities on social media, and immediately thought: could I host something like this at our school? I researched more about the program, found the application form, filled it out, and submitted it. Three weeks later, I received an interview invitation, aced the interview, and got accepted.',
      phase_plan_detail_title: 'The Planning Journey',
      phase_plan_detail_body: 'The initial plan was to host a Workshop on campus, but venue and event approvals stalled for weeks, putting the project at a standstill. After discussing with the TRAE Ops team, they helped secure an off-campus venue. We pivoted from Workshop to a more flexible Meetup format — a change that actually clarified the entire preparation path.',
      phase_land_detail_title: 'Event Day',
      phase_land_detail_body: 'On the afternoon of May 10, 50 participants gathered at Kerry Center · Starbucks Reserve. Teacher Li Xiao and Teacher Orange delivered themed presentations, while the Campus Ambassador led a hands-on coding workshop. Over three hours, everyone transitioned from passive listening to active coding, experiencing AI-assisted programming first-hand.',

      // RODS table
      rods_col_time: 'Time',
      rods_col_session: 'Session',
      rods_col_content: 'Details',
      rods_r1_s: 'Check-in & Networking', rods_r1_d: 'Registration and casual networking',
      rods_r2_s: 'Opening', rods_r2_d: 'Event positioning introduction',
      rods_r3_s: 'Keynote', rods_r3_d: 'Talk by Teacher Li Xiao',
      rods_r4_d: 'Q&A Round 1',
      rods_r5_s: 'Keynote', rods_r5_d: 'Talk by Teacher Orange',
      rods_r6_d: 'Q&A Round 2',
      rods_r7_d: 'Networking & exchange',
      rods_r8_s: 'Hands-on Workshop', rods_r8_d: 'Live workshop led by the Campus Ambassador',
      rods_r9_s: 'Group Photo', rods_r9_d: 'Event wrap-up and group photo',

      // Swimlane — headers
      swimlane_tag: 'Division of Work',
      swimlane_title: 'TRAE Ops × Campus Ambassador',
      swimlane_desc: 'How two roles collaborated to run a 50-person AI Coding Meetup, from application to execution',
      swimlane_col_time: 'Time',
      swimlane_col_trae: 'TRAE Ops',
      swimlane_col_trae_sub: 'Brand & Product Support',
      swimlane_col_amb: 'Campus Ambassador',
      swimlane_col_amb_sub: 'Planning & Execution Lead',

      // Swimlane — TRAE Ops
      v_trae_1: 'Released TRAE on Campus Recruitment',
      v_trae_2: 'Sync ①: Interview & Confirmed Partnership',
      v_trae_3: 'WeChat Async Follow-up',
      v_trae_4: 'Sync ②: Confirmed Plan Details',
      v_trae_5: 'WeChat Async Follow-up',
      v_trae_6: 'Confirmed Off-campus Venue Plan',
      v_trae_7: 'WeChat Async Follow-up',
      v_trae_8: 'Sync ③: Confirmed Event Flow',
      v_trae_9: 'Event Successfully Held',

      // Swimlane — Campus Ambassador
      v_amb_1: 'Received Recruitment Info, Submitted Application',
      v_amb_3: 'Completed Initial Plan; Confirmed Club Hosting Requirements',
      v_amb_5: 'Pushed On-campus Venue Approval, Blocked',
      v_amb_7: 'Launched Online Promotion',
      v_amb_8: 'Beijing Kerry Center Starbucks Reserve Site Visit',

      // Phase 04 — What Went Well
      reflection_good_title: 'What Went Well',
      p4_good_1: 'Aligned with TRAE Ops on the process ahead of time for smoother collaboration',
      p4_good_2: 'Prepared contingency strategies. Switched to a lucky draw when network fluctuated, avoiding dead air',
      p4_good_3: 'Arrived early for setup, ensuring all materials and equipment were ready before attendees arrived',

      // Phase 04 — What Went Wrong
      reflection_bad_title: 'What Went Wrong',
      p4_bad_1: 'Did not test the actual screen display during the site visit, resulting in poor on-site display quality',
      p4_bad_2: 'No dedicated photographer was assigned, resulting in insufficient and low-quality photos',

      // Phase 04 — Improvements
      reflection_improve_title: 'Improvements',
      p4_improve_1: 'Test key equipment (screen, ports, audio) one by one during site visits, creating a checklist',
      p4_improve_2: 'Invite a classmate to be the dedicated event photographer to ensure sufficient material coverage',

      // Phase 04 — Growth
      reflection_growth_title: 'Personal Growth Reflection',
      p4_growth: 'First, imagination and reality always differ - no need to pursue perfection, just use available resources; second, the brand wants the event to succeed more than anyone, and proactive communication is far more efficient than working alone. Experiencing the limits of handling hosting, crowd control, and equipment alone, next time I will assemble a small team early for better division of labor.',

      // Highlights
      highlights_tag: 'Highlights',
      highlights_title: 'Highlights',
      highlights_subtitle: 'Moments Worth Capturing',
      hl_card1_title: 'The Event Scene',
      hl_card1_quote: 'Kerry Center · Starbucks Reserve, 50 participants gathered together',
      hl_card2_title: 'Behind the Scenes',
      hl_card2_quote: 'Distributing offline promotional materials in the classroom',
      hl_card3_title: 'Venue Details',
      hl_card3_quote: 'Starbucks × TRAE SOLO',

      // About / Footer
      about_title: 'About',
      credits_title: 'Credits',
      footer_text: '© 2026 TRAE on Campus @ CUGB',
      footer_title: 'TRAE on Campus @China University of Geosciences (Beijing)',
      event_badge_1: 'Phase 1',
      event_badge_2: 'Phase 2',
      event_name: 'AI Coding Meetup',
      event_date: '📅 May 10, 2026',
      event_attendance: '👥 50 attendees · 80 registered',
      event_location: '📍 Beijing Kerry Center · Starbucks Reserve',
      event_upcoming: 'In preparation',
      footer_copyright: 'TRAE on Campus @China University of Geosciences (Beijing) by Quankun',
      about_brand_desc: 'TRAE on Campus — AI Coding Meetup',
      about_brand_sub: 'An event that brings AI-native development within reach for university developers',
      about_date_label: 'Date',
      about_location_label: 'Location',
      about_theme_label: 'Theme',
      about_scale_label: 'Scale',
      about_date_val: 'May 10, 2026',
      about_theme_val: 'Ship faster with TRAE',
      about_scale_val: '50+ attendees',
      about_credits: 'Special thanks to the TRAE team for their tremendous support, and to all participants for their enthusiasm. This event was independently driven by the TRAE Campus Ambassador.',
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
    
    // Plain text: data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });

    // Rich HTML: data-i18n-html → innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[key]) {
        el.innerHTML = translations[key];
      }
    });
    
    // Placeholder
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
