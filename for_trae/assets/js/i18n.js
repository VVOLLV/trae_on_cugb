const I18n = {
  STORAGE_KEY: 'trae-lang',
  
  translations: {
    zh: {
      // Navigation
      overview: '概述',
      timeline: '时间线',
      highlights: '精彩瞬间',
      about: '关于',
      nav_phases: '活动阶段',
      nav_flow: '精选内容',

      // Hero
      startReading: '开始阅读',
      scroll: 'Scroll',
      event_count: '场活动',
      participants: '+ 参与者',
      hours: '小时体验',
      sessions: '个环节',
      days: '个月筹备',

      // Overview
      overview_title: '项目概述',
      overview_subtitle: '一场从零到一的 AI Coding 实践',
      overview_tag: 'Overview',
      overview_body: '在人工智能重塑未来的浪潮中，<strong>TRAE</strong> 致力于通过 AI 的能力帮助全球开发者提升研发效能，加速软件创新。<br><br><strong>TRAE on Campus</strong> 是字节跳动 TRAE 品牌发起的高校巡回计划，不止是高校资源的集合，更是与广大学子共同成长的创新沃土。计划包含 Hackathon、Workshop、Meetup 等多种活动形式，通过技术交流、产品分享、实战开发让高校开发者零距离体验 AI 原生开发。<br><br>本次中国地质大学（北京）站以 <strong>AI Coding Meetup</strong> 形式举办，场地选在北京嘉里中心·星巴克甄选。',
      phase_label: 'Phase',
      date_format: '年',
      location: '北京嘉里中心·星巴克甄选',

      // Swimlane — headers
      swimlane_tag: 'Division of Work',
      swimlane_title: 'TRAE 团队 × 校园大使',
      swimlane_desc: '从申请到落地，两个角色如何分工协作推进一场 50 人的 AI Coding Meetup',

      // Swimlane — 垂直时间轴节点（TRAE）
      v_trae_1_title: '发布校园大使招募计划',
      v_trae_1_desc: '发布 TRAE on Campus 计划招募信息，已形成完整 SOP',
      v_trae_2_title: '安排线上面试',
      v_trae_2_desc: '15:30-16:00 飞书视频会议',
      v_trae_3_title: '面试通过',
      v_trae_3_desc: '发送品牌资料包 + SOP + 策划模板',
      v_trae_5_title: '视频会议1：方案框架对齐',
      v_trae_5_desc: '11:00-11:30 飞书视频会议',
      v_trae_6_title: '微信异步沟通',
      v_trae_6_desc: '方案细节修改、进度同步',
      v_trae_8_title: '启动对公对接流程',
      v_trae_8_desc: '联系校友与社会合作处、党委/校长办公室',
      v_trae_9_title: '提供主持词参考',
      v_trae_9_desc: '主持词参考 + Minimax coding plan',
      v_trae_10_title: '视频会议2：活动流程确认',
      v_trae_10_desc: '14:00-14:30 飞书视频会议',
      v_trae_11_title: '视频会议3：细节补充',
      v_trae_11_desc: '14:30-15:00 飞书视频会议',
      v_trae_12_title: '提供人证画报制作工具',
      v_trae_12_desc: '像素风头像生成工具',
      v_trae_13_title: '现场协助',
      v_trae_13_desc: 'Expert + 运营支持，提供星巴克茶歇 + 打车报销',
      v_trae_14_title: 'Workshop 技术支持',
      v_trae_14_desc: '协助参与者完成环境配置与 Coding Battle',

      // Swimlane — 垂直时间轴节点（校园大使）
      v_amb_1_title: '开始准备 & 提交报名',
      v_amb_1_desc: '准备个人简历与活动提案，2月底填写提交报名表',
      v_amb_2_title: '准备面试内容',
      v_amb_2_desc: '准备自我介绍、活动提案讲解、Q&A 应答',
      v_amb_3_title: '确认合作意向',
      v_amb_3_desc: '接收资料包，确认合作，开始方案设计',
      v_amb_4_title: '提交活动方案初稿',
      v_amb_4_desc: '设计活动流程、场地需求、宣传计划',
      v_amb_5_title: '方案框架讨论',
      v_amb_5_desc: '确认活动定位、目标人群、核心环节',
      v_amb_6_title: '对接校内多部门',
      v_amb_6_desc: '党委宣传部、人工智能学院、地信学院、教务处',
      v_amb_7_title: '核心卡点',
      v_amb_7_desc: '校内部门推诿，要求字节官方对公对接（需带公章正式文件）',
      v_amb_8_title: '继续沟通指导教师',
      v_amb_8_desc: '本科毕设导师支持，将组织研究生参与',
      v_amb_9_title: '调整方案，准备活动预热',
      v_amb_9_desc: '完善活动方案，准备宣传物料',
      v_amb_10_title: '确认主持词',
      v_amb_10_desc: '准备产品介绍部分',
      v_amb_11_title: '确认细节',
      v_amb_11_desc: '嘉宾、茶饮、投屏、插排等细节',
      v_amb_12_title: '制作活动宣传物料',
      v_amb_12_desc: '宣传海报、活动推文、报名表',
      v_amb_13_title: '现场主持 + 控场',
      v_amb_13_desc: '全程主持 2.5h 活动，把握节奏与氛围',
      v_amb_14_title: '教学带练 + 活动记录',
      v_amb_14_desc: '带领参与者完成静态个人网站制作，拍摄活动照片',

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
      highlights: 'Highlights',
      about: 'About',
      nav_phases: 'Phases',
      nav_flow: 'Highlights',

      // Hero
      startReading: 'Start Reading',
      scroll: 'Scroll',
      event_count: ' Event',
      participants: '+ Participants',
      hours: ' Hours',
      sessions: ' Sessions',
      days: ' Months Prep',

      // Overview
      overview_title: 'Project Overview',
      overview_subtitle: 'A Journey from Zero to One in AI Coding',
      overview_tag: 'Overview',
      overview_body: 'In the wave of AI reshaping the future, <strong>TRAE</strong> is committed to helping developers worldwide enhance R&D efficiency and accelerate software innovation through AI capabilities.<br><br><strong>TRAE on Campus</strong> is a university tour program initiated by ByteDance\'s TRAE brand. It is not just a collection of university resources, but an innovative fertile ground for mutual growth with students. The program includes various formats such as Hackathon, Workshop, and Meetup, enabling university developers to experience AI-native development through technical exchanges, product sharing, and hands-on development.<br><br>The China University of Geosciences (Beijing) edition was held as an <strong>AI Coding Meetup</strong> at Beijing Kerry Center · Starbucks Reserve.',
      phase_label: 'Phase',
      date_format: '',
      location: 'Beijing Kerry Center · Starbucks Reserve',

      // Swimlane — headers
      swimlane_tag: 'Division of Work',
      swimlane_title: 'TRAE Team × Campus Ambassador',
      swimlane_desc: 'How two roles collaborated to run a 50-person AI Coding Meetup, from application to execution',

      // Swimlane — Vertical Timeline Nodes (TRAE)
      v_trae_1_title: 'Released Campus Ambassador Recruitment',
      v_trae_1_desc: 'Released TRAE on Campus program recruitment, complete SOP ready',
      v_trae_2_title: 'Scheduled Online Interview',
      v_trae_2_desc: '15:30-16:00 Lark Video Meeting',
      v_trae_3_title: 'Interview Passed',
      v_trae_3_desc: 'Sent brand package + SOP + planning template',
      v_trae_5_title: 'Video Meeting 1: Plan Alignment',
      v_trae_5_desc: '11:00-11:30 Lark Video Meeting',
      v_trae_6_title: 'WeChat Async Communication',
      v_trae_6_desc: 'Plan detail revisions, progress sync',
      v_trae_8_title: 'Initiated Official Partnership Process',
      v_trae_8_desc: 'Contacted Alumni & Social Cooperation Office, Party/President Office',
      v_trae_9_title: 'Provided Host Script Reference',
      v_trae_9_desc: 'Host script reference + Minimax coding plan',
      v_trae_10_title: 'Video Meeting 2: Flow Confirmation',
      v_trae_10_desc: '14:00-14:30 Lark Video Meeting',
      v_trae_11_title: 'Video Meeting 3: Detail Supplement',
      v_trae_11_desc: '14:30-15:00 Lark Video Meeting',
      v_trae_12_title: 'Provided Portrait Poster Tool',
      v_trae_12_desc: 'Pixel-style avatar generator',
      v_trae_13_title: 'On-site Support',
      v_trae_13_desc: 'Expert + Ops support, Starbucks coffee + ride reimbursement',
      v_trae_14_title: 'Workshop Tech Support',
      v_trae_14_desc: 'Assisted participants with env setup & Coding Battle',

      // Swimlane — Vertical Timeline Nodes (Ambassador)
      v_amb_1_title: 'Started Prep & Submitted Application',
      v_amb_1_desc: 'Prepared resume & event proposal, submitted end of February',
      v_amb_2_title: 'Prepared Interview Content',
      v_amb_2_desc: 'Prepared self-intro, proposal presentation, Q&A responses',
      v_amb_3_title: 'Confirmed Collaboration Intent',
      v_amb_3_desc: 'Received package, confirmed collaboration, started planning',
      v_amb_4_title: 'Submitted Event Plan Draft',
      v_amb_4_desc: 'Designed event flow, venue needs, promotion plan',
      v_amb_5_title: 'Plan Framework Discussion',
      v_amb_5_desc: 'Confirmed event positioning, target audience, core segments',
      v_amb_6_title: 'Liaised with Multiple University Depts',
      v_amb_6_desc: 'Party Publicity Office, AI School, Geo-info School, Academic Affairs',
      v_amb_7_title: 'Core Blocker',
      v_amb_7_desc: 'University depts passed the buck, required ByteDance official partnership (stamped document needed)',
      v_amb_8_title: 'Continued Advisor Communication',
      v_amb_8_desc: 'Undergrad thesis advisor supported, will organize grad students',
      v_amb_9_title: 'Adjusted Plan, Prepared Event Warm-up',
      v_amb_9_desc: 'Refined event plan, prepared promotional materials',
      v_amb_10_title: 'Confirmed Host Script',
      v_amb_10_desc: 'Prepared product intro section',
      v_amb_11_title: 'Confirmed Details',
      v_amb_11_desc: 'Guests, refreshments, projector, power strips, etc.',
      v_amb_12_title: 'Created Event Promotional Materials',
      v_amb_12_desc: 'Promo posters, event announcement, registration form',
      v_amb_13_title: 'Live Hosting + Stage Control',
      v_amb_13_desc: 'Hosted full 2.5h event, managed pacing & atmosphere',
      v_amb_14_title: 'Teaching + Event Documentation',
      v_amb_14_desc: 'Led participants through static website build, captured photos',

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
