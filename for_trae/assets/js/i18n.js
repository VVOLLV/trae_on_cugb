const I18n = {
  STORAGE_KEY: 'trae-lang',
  
  translations: {
    zh: {
      // Navigation
      overview: '概述',
      timeline: '时间线',
      reflection: '复盘',
      about: '关于',
      phase01: '申请期',
      phase02: '策划期',
      phase03: '落地期',
      phase04: '复盘期',
      nav_phases: '活动阶段',
      nav_deliverables: '关键交付物',
      nav_flow: '活动流程',

      // Hero
      startReading: '开始阅读',
      scroll: 'Scroll',
      event_count: '场活动',
      participants: '+ 参与者',
      hours: '小时体验',
      sessions: '个环节',
      days: '天筹备',

      // Overview
      overview_title: '项目概述',
      overview_subtitle: '一场从零到一的 AI Coding 实践',
      overview_tag: 'Overview',
      phase_label: 'Phase',
      date_format: '年',
      location: '北京嘉里中心·星巴克甄选',

      // Swimlane — headers
      swimlane_tag: 'Division of Work',
      swimlane_title: 'TRAE 团队 × 校园大使',
      swimlane_desc: '从申请到落地，两个角色如何分工协作推进一场 50 人的 AI Coding Meetup',
      swimlane_role: '角色',
      swimlane_reflection: '复盘思考',
      swimlane_reflection_tag: 'REFLECTION',
      self_reflection_title: '作为校园大使，我的复盘',

      // Swimlane — TRAE official tasks (title / desc)
      s_trae_p1_t1: '发起高校巡回计划',
      s_trae_p1_d1: '面向全国高校招募校园大使，提供品牌授权与活动框架',
      s_trae_p1_t2: '提供品牌资料包',
      s_trae_p1_d2: 'Logo、配色规范、产品介绍文档',
      s_trae_p2_t1: '审核活动方案',
      s_trae_p2_d1: 'Review Run of Show，确认环节设计的可行性',
      s_trae_p2_t2: '提供主持手卡 &amp; PPT 模版',
      s_trae_p2_d2: '标准化主持流程脚本 + 品牌 PPT 框架',
      s_trae_p2_t3: '协调场地资源',
      s_trae_p2_d3: '对接北京嘉里中心 · 星巴克甄选场地',
      s_trae_p3_t1: '产品技术答疑',
      s_trae_p3_d1: '现场解答 TRAE IDE / SOLO 使用问题',
      s_trae_p3_t2: '提供 Workshop 技术支持',
      s_trae_p3_d2: '协助参与者完成环境配置与 Coding Battle',

      // Swimlane — Ambassador tasks (title / desc)
      s_amb_p1_t1: '提交校园大使申请',
      s_amb_p1_d1: '准备个人简历与活动提案，通过 TRAE 官方筛选',
      s_amb_p1_t2: '对接校方资源',
      s_amb_p1_d2: '联系院系老师确认合作意向，争取校内宣传渠道',
      s_amb_p1_t3: '确认合作邀请',
      s_amb_p1_d3: '签署合作邀请函，锁定活动权益与责任边界',
      s_amb_p2_t1: '设计宣传物料',
      s_amb_p2_d1: '制作 3 张线上宣传海报 + 活动推文',
      s_amb_p2_t2: '制定 Run of Show',
      s_amb_p2_d2: '设计 8 环节活动流程，包含 Plan B 应急预案',
      s_amb_p2_t3: '主持人准备',
      s_amb_p2_d3: '熟悉主持手卡，准备串场话术与 Q&amp;A 题库',
      s_amb_p3_t1: '现场主持 &amp; 控场',
      s_amb_p3_d1: '全程主持 2.5h 活动，把握节奏与氛围',
      s_amb_p3_t2: '引导 Workshop',
      s_amb_p3_d2: '带领参与者完成 4 步阶梯式动手实践',
      s_amb_p3_t3: '活动记录 &amp; 收尾',
      s_amb_p3_d3: '拍摄活动照片，组织合影，收集参与者反馈',

      // Swimlane reflection
      s_reflection_text: '<em>申请期最大的感受：</em>从「被选择」到「主动创造」的心态转变。TRAE 提供了框架和资源，但真正的推动力来自自己每一步的主动推进——主动联系校方、主动设计环节、主动承担风险。校园大使不是一个头衔，而是一个需要把所有模糊需求变成具体行动的角色。',

      // Self-reflection panel
      sr_p1_good_label: '✅ 做对了',
      sr_p1_good: '提前准备好活动提案，在申请阶段就展示了完整的执行思路，这让 TRAE 团队快速建立了信任。',
      sr_p1_bad_label: '❌ 做错了',
      sr_p1_bad: '校方对接启动太晚，导致校内宣传窗口期被压缩，如果提前 2 周开始会覆盖更多院系。',
      sr_p1_learn_label: '🔁 改进',
      sr_p1_learn: '下次活动应在申请同时启动校方对接，预留足够的校内审批和宣传时间。',

      sr_p2_good_label: '✅ 做对了',
      sr_p2_good: '制定 Plan B 应急预案是关键——现场 HDMI 确实遇到了兼容问题，备用方案让场面没有失控。',
      sr_p2_bad_label: '❌ 做错了',
      sr_p2_bad: '低估了 Workshop 环境配置的时间，部分参与者安装 IDE 耗时超出预期，压缩了 Coding Battle 的时间。',
      sr_p2_learn_label: '🔁 改进',
      sr_p2_learn: '提前发布「会前准备指南」，要求参与者提前安装 IDE，签到环节只做网络连接和版本检查。',

      sr_p3_good_label: '✅ 做对了',
      sr_p3_good: '抓住 Coffee Break 的社交窗口，引导参与者与 TRAE 团队深度交流，很多人是在这个环节真正产生兴趣的。',
      sr_p3_bad_label: '❌ 做错了',
      sr_p3_bad: '活动结束后的社群运营没有及时跟上，建群后第一周活跃度很高，但没有持续的内容输出导致热度骤降。',
      sr_p3_learn_label: '🔁 改进',
      sr_p3_learn: '提前准备 2-4 周的社群内容日历，包括 TRAE 使用技巧、优秀作品展示、线上 Coding Challenge 等。',

      // Phase 04 — 做对了
      p4_good_1: '提前准备好完整的活动提案，让 TRAE 团队快速建立信任',
      p4_good_2: '制定 Plan B 应急预案，现场 HDMI 兼容问题未影响活动节奏',
      p4_good_3: 'Coffee Break 环节设计成社交窗口，促成参与者与 TRAE 团队深度交流',
      p4_good_4: '8 环节 Run of Show 设计合理，实际时间控制在 30 分钟内偏差',
      p4_good_5: '宣传物料统一视觉风格，品牌辨识度高',

      // Phase 04 — 做错了
      p4_bad_1: '校方对接启动太晚，校内宣传窗口期被压缩至不足 1 周',
      p4_bad_2: '低估 Workshop 环境配置耗时，部分参与者安装 IDE 超出预期',
      p4_bad_3: '活动后社群运营未及时跟进，建群一周后热度骤降',
      p4_bad_4: '未提前发布「会前准备指南」，导致签到环节耗时偏长',
      p4_bad_5: '活动摄影没有安排专人，可用照片数量不足',

      // Phase 04 — 改进方向
      p4_improve_1: '申请与校方对接同步启动，预留 3 周校内宣传窗口',
      p4_improve_2: '活动前 3 天发布准备指南，要求参与者提前安装 IDE',
      p4_improve_3: '提前制定 2-4 周社群内容日历，保持互动不降温',
      p4_improve_4: '安排至少 1 名同学专职活动摄影，确保素材充足',
      p4_improve_5: '活动后 24h 内发送感谢邮件 + 反馈问卷，趁热打铁',

      // Phase 04 — 量化成果 & 感悟
      p4_metrics: '实际到场人数：<em>47 人</em>（报名 62 人，到场率 76%）<br>Workshop 完成率：<em>82%</em>（39/47 成功完成 Coding Battle 并 GitHub 提交）<br>社群新增：<em>53 人</em>（活动当日建群，覆盖 8 个院系）',
      p4_growth: 'TRAE on Campus 是我第一次从 0 到 1 独立推动一场 50 人规模的活动。最大的收获不是学会了做海报或写主持稿，而是理解了「owner 意识」——当没有人告诉你下一步该做什么的时候，你得自己画出地图。从申请时的忐忑，到策划时的焦灼，再到活动当天站在台上的那一刻，我意识到所有的准备都不会白费。Plan B 用上了，主持手卡救场了，甚至有参与者在活动后私信我说「因为这次 Meetup 决定学 AI 编程」。这些瞬间让我相信，校园大使不是一份差事，而是一次自我验证。',

      // Phase 03 — 参与者反馈
      p3_feedback_1: '「活动让我第一次真正上手体验了 AI 编程，之前只是听说过，今天自己写出来了一个小项目！」— 信工学院 大三',
      p3_feedback_2: '「最惊喜的是 Coffee Break 环节，跟 TRAE 的工程师聊了很多，原来 AI 编程离我们这么近。」— 地学院 研一',
      p3_feedback_3: '「主持人的节奏感很好，没有冷场也没有赶场，2.5 小时一晃就过去了。」— 水环学院 大二',

      // Highlights
      highlights_title: '精选瞬间',
      highlights_subtitle: '那些值得被定格的画面',
      hl_card1_title: 'Workshop 现场',
      hl_card1_quote: '"大家都在认真配置环境，这是最让我欣慰的画面。"',
      hl_card2_title: '活动结束合影',
      hl_card2_quote: '"3 个月的准备，只为这 3 个小时。看到大家认真 Coding 的样子，一切都值得。"',
      hl_card3_title: '茶歇时光',
      hl_card3_quote: '"咖啡和代码，是最好的社交货币。这个下午比我想象的更有趣。"',

      // About / Footer
      about_title: '关于活动',
      credits_title: '特别鸣谢',
      footer_text: '© 2026 TRAE on Campus @ CUGB',
      about_brand_desc: 'TRAE on Campus — AI Coding Meetup',
      about_brand_sub: '一场让高校开发者零距离体验 AI 原生开发的活动',
      about_date_label: '活动日期',
      about_location_label: '活动地点',
      about_theme_label: '活动主题',
      about_scale_label: '活动规模',
      about_date_val: '2026 年 5 月 10 日',
      about_theme_val: 'Ship faster with TRAE',
      about_scale_val: '50+ 人',
      about_credits: '感谢 TRAE 官方团队的大力支持，以及所有参与者的热情投入。本次活动由 TRAE 校园大使独立推进完成。',
    },

    en: {
      // Navigation
      overview: 'Overview',
      timeline: 'Timeline',
      reflection: 'Review',
      about: 'About',
      phase01: 'Application',
      phase02: 'Planning',
      phase03: 'Execution',
      phase04: 'Review',
      nav_phases: 'Phases',
      nav_deliverables: 'Deliverables',
      nav_flow: 'Flow',

      // Hero
      startReading: 'Start Reading',
      scroll: 'Scroll',
      event_count: ' Event',
      participants: '+ Participants',
      hours: ' Hours',
      sessions: ' Sessions',
      days: ' Days Prep',

      // Overview
      overview_title: 'Project Overview',
      overview_subtitle: 'A Journey from Zero to One in AI Coding',
      overview_tag: 'Overview',
      phase_label: 'Phase',
      date_format: '',
      location: 'Beijing Kerry Center · Starbucks Reserve',

      // Swimlane — headers
      swimlane_tag: 'Division of Work',
      swimlane_title: 'TRAE Team × Campus Ambassador',
      swimlane_desc: 'How two roles collaborated to run a 50-person AI Coding Meetup, from application to execution',
      swimlane_role: 'Role',
      swimlane_reflection: 'Reflection',
      swimlane_reflection_tag: 'REFLECTION',
      self_reflection_title: 'My Reflection as Campus Ambassador',

      // Swimlane — TRAE tasks
      s_trae_p1_t1: 'Launched Campus Tour Program',
      s_trae_p1_d1: 'Recruited campus ambassadors nationwide, provided brand authorization & event framework',
      s_trae_p1_t2: 'Provided Brand Asset Package',
      s_trae_p1_d2: 'Logo, color guidelines, product introduction docs',
      s_trae_p2_t1: 'Reviewed Event Plan',
      s_trae_p2_d1: 'Reviewed Run of Show, validated agenda feasibility',
      s_trae_p2_t2: 'Provided Host Script &amp; PPT Template',
      s_trae_p2_d2: 'Standardized hosting flow script + branded PPT framework',
      s_trae_p2_t3: 'Coordinated Venue Resources',
      s_trae_p2_d3: 'Secured Beijing Kerry Center · Starbucks Reserve venue',
      s_trae_p3_t1: 'Product Tech Q&amp;A',
      s_trae_p3_d1: 'Answered on-site questions about TRAE IDE / SOLO',
      s_trae_p3_t2: 'Workshop Technical Support',
      s_trae_p3_d2: 'Assisted participants with environment setup & Coding Battle',

      // Swimlane — Ambassador tasks
      s_amb_p1_t1: 'Submitted Ambassador Application',
      s_amb_p1_d1: 'Prepared resume & event proposal, passed TRAE official selection',
      s_amb_p1_t2: 'Liaised with University',
      s_amb_p1_d2: 'Connected with faculty to confirm collaboration intent, secured campus promotion channels',
      s_amb_p1_t3: 'Confirmed Collaboration Invitation',
      s_amb_p1_d3: 'Signed collaboration letter, locked in event rights & responsibilities',
      s_amb_p2_t1: 'Designed Promotional Materials',
      s_amb_p2_d1: 'Created 3 online posters + event announcement post',
      s_amb_p2_t2: 'Designed Run of Show',
      s_amb_p2_d2: 'Structured 8-segment event flow with Plan B contingency',
      s_amb_p2_t3: 'Host Preparation',
      s_amb_p2_d3: 'Studied host script, prepared transitions &amp; Q&amp;A question bank',
      s_amb_p3_t1: 'Live Hosting &amp; Stage Management',
      s_amb_p3_d1: 'Hosted full 2.5h event, managed pacing & atmosphere',
      s_amb_p3_t2: 'Guided Workshop',
      s_amb_p3_d2: 'Led participants through 4-step hands-on coding practice',
      s_amb_p3_t3: 'Event Documentation &amp; Wrap-up',
      s_amb_p3_d3: 'Captured event photos, organized group photo, collected participant feedback',

      // Swimlane reflection
      s_reflection_text: '<em>Biggest insight:</em> the mindset shift from "being chosen" to "actively creating". TRAE provided the framework and resources, but the real momentum came from proactively pushing every step — reaching out to the university, designing the agenda, taking ownership of risks. "Campus Ambassador" is not a title; it is the role of turning vague requirements into concrete action.',

      // Self-reflection panel
      sr_p1_good_label: '✅ What Went Well',
      sr_p1_good: 'Prepared a complete event proposal upfront, showcasing a full execution plan during the application phase — this built trust with the TRAE team quickly.',
      sr_p1_bad_label: '❌ What Went Wrong',
      sr_p1_bad: 'Started university liaison too late, compressing the on-campus promotion window. Starting 2 weeks earlier would have reached more departments.',
      sr_p1_learn_label: '🔁 Next Time',
      sr_p1_learn: 'Initiate university contact simultaneously with the application, reserving enough time for internal approvals and promotion.',

      sr_p2_good_label: '✅ What Went Well',
      sr_p2_good: 'Having a Plan B was crucial — the on-site HDMI did encounter compatibility issues, and the backup plan kept things running smoothly.',
      sr_p2_bad_label: '❌ What Went Wrong',
      sr_p2_bad: 'Underestimated Workshop setup time. Some participants took longer than expected to install the IDE, cutting into Coding Battle time.',
      sr_p2_learn_label: '🔁 Next Time',
      sr_p2_learn: 'Publish a "pre-event setup guide" 3 days before, asking participants to install the IDE in advance. Sign-in becomes connection + version check only.',

      sr_p3_good_label: '✅ What Went Well',
      sr_p3_good: 'Leveraged the Coffee Break as a social window, guiding participants into deep conversations with the TRAE team. Many got genuinely interested during this segment.',
      sr_p3_bad_label: '❌ What Went Wrong',
      sr_p3_bad: 'Post-event community operations didn\'t follow up in time. The group was highly active in the first week but cooled off without sustained content.',
      sr_p3_learn_label: '🔁 Next Time',
      sr_p3_learn: 'Prepare a 2-4 week community content calendar in advance: TRAE tips, showcase优秀作品, online Coding Challenges, etc.',

      // Phase 04 — What Went Well
      p4_good_1: 'Prepared a complete event proposal upfront, earning trust from the TRAE team quickly',
      p4_good_2: 'Created Plan B contingency — HDMI compatibility issues did not disrupt the event flow',
      p4_good_3: 'Designed Coffee Break as a social window, fostering deep conversations between participants and the TRAE team',
      p4_good_4: '8-segment Run of Show was well-structured; actual timing stayed within 30 minutes of the plan',
      p4_good_5: 'Promotional materials had a consistent visual identity with strong brand recognition',

      // Phase 04 — What Went Wrong
      p4_bad_1: 'Started university liaison too late, compressing the on-campus promotion window to under 1 week',
      p4_bad_2: 'Underestimated Workshop IDE setup time; some participants exceeded the expected installation window',
      p4_bad_3: 'Post-event community operations lagged; group activity dropped sharply after the first week',
      p4_bad_4: 'Did not publish a pre-event setup guide, causing sign-in to take longer than planned',
      p4_bad_5: 'No dedicated photographer was assigned, resulting in insufficient usable photos',

      // Phase 04 — Improvements
      p4_improve_1: 'Start university liaison simultaneously with the application, reserving a 3-week campus promotion window',
      p4_improve_2: 'Publish a setup guide 3 days before the event, asking participants to pre-install the IDE',
      p4_improve_3: 'Prepare a 2-4 week community content calendar in advance to sustain engagement',
      p4_improve_4: 'Assign at least one dedicated event photographer to ensure sufficient visual assets',
      p4_improve_5: 'Send a thank-you email + feedback survey within 24 hours post-event to capture momentum',

      // Phase 04 — Metrics & Growth
      p4_metrics: 'Actual attendance: <em>47</em> (62 registered, 76% attendance rate)<br>Workshop completion rate: <em>82%</em> (39/47 completed Coding Battle & GitHub submission)<br>Community growth: <em>53</em> new members (group created on event day, spanning 8 departments)',
      p4_growth: 'TRAE on Campus was my first time independently driving a 50-person event from zero to one. The biggest takeaway was not learning to make posters or write scripts — it was understanding "ownership mentality." When no one tells you what to do next, you have to draw the map yourself. From the anxiety of applying, to the intensity of planning, to standing on stage on event day — I realized that no preparation goes to waste. Plan B saved the day. The host script rescued a moment. A participant even DMed me afterward saying, "I decided to learn AI coding because of this Meetup." These moments convinced me: being a Campus Ambassador is not an errand — it is a self-validation.',

      // Phase 03 — Participant Feedback
      p3_feedback_1: '"This event let me actually get hands-on with AI coding for the first time. I\'d only heard about it before, but today I built a small project myself!" — Junior, School of Information Engineering',
      p3_feedback_2: '"The biggest surprise was the Coffee Break — I had great conversations with TRAE engineers. AI coding is closer to us than I thought." — Grad Student, School of Earth Sciences',
      p3_feedback_3: '"The host had great pacing — no dead air, no rushing. The 2.5 hours flew by." — Sophomore, School of Water Resources & Environment',

      // Highlights
      highlights_title: 'Highlights',
      highlights_subtitle: 'Moments Worth Capturing',
      hl_card1_title: 'Workshop in Action',
      hl_card1_quote: '"Everyone was focused on setting up their environment — this was the most rewarding scene to watch."',
      hl_card2_title: 'Group Photo',
      hl_card2_quote: '"Three months of preparation, for these three hours. Seeing everyone coding intently made it all worth it."',
      hl_card3_title: 'Coffee Break',
      hl_card3_quote: '"Coffee and code — the best social currency. This afternoon was more fun than I imagined."',

      // About / Footer
      about_title: 'About',
      credits_title: 'Credits',
      footer_text: '© 2026 TRAE on Campus @ CUGB',
      about_brand_desc: 'TRAE on Campus — AI Coding Meetup',
      about_brand_sub: 'An event that brings AI-native development within reach for university developers',
      about_date_label: 'Date',
      about_location_label: 'Location',
      about_theme_label: 'Theme',
      about_scale_label: 'Scale',
      about_date_val: 'May 10, 2026',
      about_theme_val: 'Ship faster with TRAE',
      about_scale_val: '50+ attendees',
      about_credits: 'Special thanks to the TRAE official team for their tremendous support, and to all participants for their enthusiasm. This event was independently driven by the TRAE Campus Ambassador.',
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
