# TRAE on Campus @ 中国地质大学（北京）

> 🌟 **线上地址**: [https://VVOLLV.github.io/trae_cugb/](https://VVOLLV.github.io/trae_cugb/)

TRAE on Campus AI Coding Meetup 活动回顾网站。纯静态单页面，完整记录从申请、策划到落地、复盘的全程。

---

## ⚠️ 分支说明

| 分支 | 说明 |
|------|------|
| **`final`** | 正式发布分支，稳定可用 |
| `refactor/i18n-nav-cleanup` | 功能开发分支 |

---

## 🎪 活动信息

| 项目 | 详情 |
|------|------|
| **活动名称** | TRAE on Campus @ 中国地质大学（北京） |
| **活动主题** | Ship faster with TRAE |
| **活动日期** | 2026 年 5 月 10 日 |
| **活动地点** | 北京嘉里中心 · 星巴克甄选 |
| **参与规模** | 50 人到场 · 80 人报名 |
| **筹备周期** | 3 个月（2026.02 – 2026.05） |

### 活动阶段

| 阶段 | 时间 | 内容 |
|------|------|------|
| **申请期** | 2026.01-02 | 提交报名表，通过面试成为校园大使 |
| **策划期** | 2026.03-04 | 从校内 Workshop 调整为校外 Meetup，完成策划案迭代 |
| **落地期** | 2026.05.10 | 北京嘉里中心星巴克甄选，3 小时 AI Coding Meetup |
| **复盘期** | 2026.05.11 | 沉淀经验教训，为下一站做准备 |

---

## 📁 项目结构

```
trae_cugb/
├── .gitignore
├── README.md
└── for_trae/                          # 网站源码
    ├── index.html                     # 主页面（497 行，单页应用）
    └── assets/
        ├── css/                       # 样式（15 个，模块化拆分）
        │   ├── variables.css          # CSS 变量：颜色、字体、间距、泳道图背景色
        │   ├── base.css               # 全局重置、容器、滚动条、选中样式
        │   ├── animations.css         # 渐入/滑入/缩放动画 + stagger 延迟 + keyframes
        │   ├── navigation.css         # 顶栏 + 吸顶导航 + 语言/主题切换按钮
        │   ├── hero.css               # 首屏 Hero 区域（纯黑底 + 绿色光晕）
        │   ├── swimlane.css           # 麦肯锡风格泳道图（双角色 × 时间线表格）
        │   ├── timeline.css           # 纵向时间线 + 可展开详情
        │   ├── phase.css              # 阶段标题 + 叙事块样式
        │   ├── table.css              # 活动当天流程表（RODS 表格）
        │   ├── components.css         # 决策卡片、精选瞬间卡片、交付物、总览介绍
        │   ├── reflection.css         # 复盘三列网格（做对了/待改进/改进方向）
        │   ├── reveal.css             # Footer 揭开效果（双层页面容器）
        │   ├── about.css              # Footer 活动卡片 + 鸣谢
        │   ├── icons.css              # 导航栏图标按钮
        │   └── responsive.css         # 响应式适配（1024/767/480/360 四级断点 + 横屏 + 安全区 + 打印）
        ├── js/                        # 脚本（6 个，按职责拆分）
        │   ├── main.js                # 泳道图异步按钮交互
        │   ├── reveal.js              # 页面滚动容器 + Footer 揭开效果 + RAF 缓动动画 + 锚点导航
        │   ├── counter.js             # Hero 数字递增动画（IntersectionObserver 触发）
        │   ├── theme.js               # 深色/浅色主题管理器（CSS 变量注入 + localStorage）
        │   ├── i18n.js                # 中英文国际化（140+ 翻译键，localStorage 持久化）
        │   └── scroll.js              # IntersectionObserver 滚动渐入 + 导航高亮跟踪
        └── images/                    # 图片资源（3 张）
            ├── scene-detail.jpg       # 活动现场
            ├── scene-handbook.jpg     # 筹备日常
            └── scene-venue.jpg        # 场地细节
```

---

## 🏗️ 页面结构

| 模块 | 说明 |
|------|------|
| **Top Bar** | 顶部信息栏，展示 TRAE 官网链接（trae.cn / trae.ai） |
| **Navigation** | 吸顶导航栏，含 Logo、页面锚点链接、中英切换、主题切换 |
| **Hero** | 活动信息概览：日期标徽、标题、描述、场地信息（悬停展示）、4 项统计数据（动态计数） |
| **Swimlane** | 麦肯锡咨询风格泳道图，展示 TRAE 运营 × 校园大使 从 2025.09 到 2026.05.10 的完整协作时间线，含同步沟通 / 异步跟进 / 独立任务三种行类型 |
| **Timeline** | 四阶段纵向时间线（申请→策划→落地→复盘），每阶段点击展开查看详情 |
| **Event Schedule** | 活动当天流程表，9 个环节（13:30 – 16:40） |
| **Reflection** | 复盘三列网格：做对了 / 待改进 / 改进方向 + 个人成长感悟 |
| **Highlights** | 3 张精选瞬间卡片，图片悬停缩放效果 |
| **Footer** | 两层揭开效果 —— 上层主内容向上滚动露出底层活动信息（第一期回顾 + 第二期预告） |

---

## ✨ 功能特性

| 特性 | 实现方式 |
|------|----------|
| 🌐 **中英双语** | `i18n.js`，140+ 翻译键，`data-i18n` 属性驱动，localStorage 记忆语言偏好 |
| 🌓 **主题切换** | `theme.js`，通过 JS 修改 CSS 变量实现深色/浅色切换，带过渡动画 |
| 🔄 **Footer 揭开** | `reveal.js`，双层布局 + 自定义滚动容器，RAF 缓动动画替代原生滚动 |
| 🎬 **滚动渐入** | `scroll.js`，IntersectionObserver 触发 CSS 类，支持 fade/slide/scale + stagger 延迟 |
| 🔢 **数字计数** | `counter.js`，IntersectionObserver 触发，RAF 驱动 easeOut 缓动递增动画 |
| 📱 **响应式** | 4 级断点（1024/767/480/360）+ 横屏 + iPhone 安全区 + 打印样式 |
| 🔍 **泳道图** | 纯 HTML 表格实现，异步行可点击展开，同步/异步行颜色区分，移动端卡片化布局 |
| 📋 **时间线展开** | 点击展开/收起，展开时自动滚动定位 |
| 🔗 **OG 分享** | Open Graph + Twitter Card，分享时显示标题/描述/缩略图 |

---

## 🎨 设计系统

| 分类 | 值 |
|------|-----|
| **主色调** | `#22C55E`（绿色） — 按钮、链接、强调色 |
| **辅助色** | `#60A5FA`（蓝色）— 校园大使泳道；`#E8D5B7`（暖米色）— 点缀 |
| **状态色** | `#22C55E`（成功）、`#EF4444`（错误）、`#F59E0B`（改进） |
| **字体** | Inter（标题/正文）+ JetBrains Mono（代码/等宽）+ PingFang SC / Microsoft YaHei（中文回退） |
| **默认主题** | 深色模式（`#000000` 背景 + `#FFFFFF` 文字） |

---

## 🚀 本地运行

```bash
cd for_trae
python -m http.server 8080
# 浏览器访问 http://localhost:8080/
```

也可用任意静态文件服务器：

```bash
npx serve for_trae
```

---

## 🌐 部署

GitHub Pages，Source 选择 `final` 分支，根目录 `/` 或 `/docs`。

---

## 🛠️ 技术栈

- **HTML5** — 语义化标签，`data-*` 属性驱动国际化
- **CSS3** — CSS Variables 主题系统、Grid/Flexbox 布局、自定义动画
- **Vanilla JavaScript (ES6+)** — 零框架依赖，纯原生实现
- **Google Fonts** — Inter + JetBrains Mono（`preconnect` 预连接优化）
- **APIs** — IntersectionObserver、requestAnimationFrame、localStorage、MutationObserver

---

## 🌟 量化成果

- 🎯 **到场率**：62.5%（80 人报名，50 人到场）
- ⭐ **满意度**：95% 参与者表示满意
- 📈 **影响力**：覆盖校内 3 个院系

---

## 🙏 特别鸣谢

- **TRAE 运营团队** — 品牌授权、技术支持、场地协调
- **中国地质大学（北京）** — 场地支持与学生组织协作
- **校园大使（Quankun）** — 活动策划、执行与复盘
- **所有参与者** — 共同创造精彩体验

---

## 📄 许可证

MIT License
