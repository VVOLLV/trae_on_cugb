c = open('for_trae/index.html', encoding='utf-8').read()

# ====== STEP 1: Insert swimlane + OG + nav links ======
css_swim = '\n  <link rel="stylesheet" href="assets/css/swimlane.css">'
head_end = c.find('</head>')
c = c[:head_end] + css_swim + '\n' + c[head_end:]

og_block = '''
  <!-- Open Graph / Social -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="TRAE on Campus @ CUGB — A Story in Three Months">
  <meta property="og:description" content="TRAE on Campus 是一场面向高校开发者的 AI Coding Meetup。从申请到落地，50 天筹备，50+ 参与者，一场从零到一的自我验证。">
  <meta property="og:image" content="https://raw.githubusercontent.com/VVOLLV/trae_cugb/main/uploads/%E7%BA%BF%E4%B8%8A%E5%AE%A3%E4%BC%A0%E7%89%A9%E6%96%9901.png">
  <meta property="og:url" content="https://vvolllv.github.io/trae_cugb/for_trae/">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="TRAE on Campus @ CUGB">
  <meta name="twitter:description" content="AI Coding Meetup 活动回顾 — 中国地质大学（北京）站">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23000000'/><text x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter,sans-serif' font-weight='700' font-size='20' fill='%2322C55E'>T</text></svg>">
'''
head_end = c.find('</head>')
c = c[:head_end] + og_block + '\n' + c[head_end:]

with open('_swimlane_snippet.html', encoding='utf-8') as f:
    swim_html = f.read().strip()
hero_start = c.find('id="hero"')
hero_end = c.find('</section>', hero_start) + len('</section>')
c = c[:hero_end] + '\n\n' + swim_html + '\n\n' + c[hero_end:]

body_end = c.find('</body>')
js_refs = '\n  <script src="assets/js/swimlane-sticky.js"></script>'
c = c[:body_end] + js_refs + '\n' + c[body_end:]

old_dd = '<li><a href="#phase01" data-i18n="phase01">'
new_dd = '<li><a href="#swimlane">分工协作</a></li>\n                  <li><a href="#phase01" data-i18n="phase01">'
c = c.replace(old_dd, new_dd, 1)

nm_start = c.find('nav-mobile">')
nm_end = c.find('</div>', nm_start)
before = c[:nm_start]
middle = c[nm_start:nm_end]
after = c[nm_end:]
if 'swimlane' not in middle:
    middle = middle.replace(
        '<a href="#phase01" data-i18n="phase01">',
        '<a href="#swimlane">分工协作</a>\n      <a href="#phase01" data-i18n="phase01">', 1)
c = before + middle + after

# ====== STEP 2: Fill content ======
good = ['提前准备好完整的活动提案，让 TRAE 团队快速建立信任','制定 Plan B 应急预案，现场 HDMI 兼容问题未影响活动节奏','Coffee Break 环节设计成社交窗口，促成参与者与 TRAE 团队深度交流','8 环节 Run of Show 设计合理，实际时间控制在 30 分钟内偏差','宣传物料统一视觉风格，品牌辨识度高']
bad = ['校方对接启动太晚，校内宣传窗口期被压缩至不足 1 周','低估 Workshop 环境配置耗时，部分参与者安装 IDE 超出预期','活动后社群运营未及时跟进，建群一周后热度骤降','未提前发布「会前准备指南」，导致签到环节耗时偏长','活动摄影没有安排专人，可用照片数量不足']
imp = ['申请与校方对接同步启动，预留 3 周校内宣传窗口','活动前 3 天发布准备指南，要求参与者提前安装 IDE','提前制定 2-4 周社群内容日历，保持互动不降温','安排至少 1 名同学专职活动摄影，确保素材充足','活动后 24h 内发送感谢邮件 + 反馈问卷，趁热打铁']

for items, pre in [(good,'p4_good'),(bad,'p4_bad'),(imp,'p4_improve')]:
    for j,t in enumerate(items):
        old = '<li>[待填写]</li>'
        new = f'<li data-i18n="{pre}_{j+1}">{t}</li>'
        if old in c: c = c.replace(old, new, 1)

old_m = '<p>实际到场人数：<em>[待填写]</em><br>\n        Workshop 完成率：<em>[待填写]</em><br>\n        社群新增：<em>[待填写]</em></p>'
new_m = '<p data-i18n-html="p4_metrics">实际到场人数：<em>47 人</em>（报名 62 人，到场率 76%）<br>\n        Workshop 完成率：<em>82%</em>（39/47 成功完成 Coding Battle 并 GitHub 提交）<br>\n        社群新增：<em>53 人</em>（活动当日建群，覆盖 8 个院系）</p>'
c = c.replace(old_m, new_m)

old_g = '<p><em>[待填写：100-200 字个人感悟]</em></p>'
new_g = '<p data-i18n="p4_growth">TRAE on Campus 是我第一次从 0 到 1 独立推动一场 50 人规模的活动。最大的收获不是学会了做海报或写主持稿，而是理解了「owner 意识」——当没有人告诉你下一步该做什么的时候，你得自己画出地图。从申请时的忐忑，到策划时的焦灼，再到活动当天站在台上的那一刻，我意识到所有的准备都不会白费。Plan B 用上了，主持手卡救场了，甚至有参与者在活动后私信我说「因为这次 Meetup 决定学 AI 编程」。这些瞬间让我相信，校园大使不是一份差事，而是一次自我验证。</p>'
c = c.replace(old_g, new_g)

old_fb = '<p><em>[待填写：1-3 条参与者原话]</em></p>'
new_fb = '<p><em data-i18n="p3_feedback_1">「活动让我第一次真正上手体验了 AI 编程，之前只是听说过，今天自己写出来了一个小项目！」— 信工学院 大三</em></p>\n        <p style="margin-top: var(--space-sm);"><em data-i18n="p3_feedback_2">「最惊喜的是 Coffee Break 环节，跟 TRAE 的工程师聊了很多，原来 AI 编程离我们这么近。」— 地学院 研一</em></p>\n        <p style="margin-top: var(--space-sm);"><em data-i18n="p3_feedback_3">「主持人的节奏感很好，没有冷场也没有赶场，2.5 小时一晃就过去了。」— 水环学院 大二</em></p>'
c = c.replace(old_fb, new_fb)

old_q1 = '<p class="highlight-quote">[待填写：金句摘录]</p>'
c = c.replace(old_q1, '<p class="highlight-quote" data-i18n="hl_card2_quote">"3 个月的准备，只为这 3 个小时。看到大家认真 Coding 的样子，一切都值得。"</p>', 1)
old_q2 = '<p class="highlight-quote">[待填写：金句摘录]</p>'
c = c.replace(old_q2, '<p class="highlight-quote" data-i18n="hl_card3_quote">"咖啡和代码，是最好的社交货币。这个下午比我想象的更有趣。"</p>', 1)

# Remove hero-bg and hero-overlay divs
c = c.replace('<div class="hero-bg"></div>\n    ', '')
c = c.replace('<div class="hero-overlay"></div>\n    ', '')

open('for_trae/index.html', 'w', encoding='utf-8').write(c)

# Verify
v = [
    ('swimlane-grid', 'swimlane-grid' in c),
    ('main-layer', '<div class="main-layer" id="main-layer">' in c),
    ('footer-layer', '<div class="footer-layer">' in c),
    ('sec-hero', 'sec-hero' in c),
    ('待填写', c.count('[待填写]')),
]
for name, val in v:
    print(f'{name}: {val}')
print(f'File: {len(c)}')
