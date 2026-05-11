# TRAE on Campus @ 中国地质大学（北京）— 开发规划文档

> 基于PRD的规划确认记录，作为开发阶段的上游输入。

---

## 1. 项目概况

| 项目 | 内容 |
|------|------|
| **活动名称** | TRAE on Campus — AI Coding Meetup |
| **日期** | 2026年5月10日 14:00 - 16:30（入场 13:30） |
| **地点** | 北京嘉里中心 · 星巴克甄选 |
| **性质** | 单日 Meetup（非长期项目） |
| **参与规模** | 约 50 人 |
| **发起角色** | TRAE 校园大使 |
| **交付物** | 静态单页叙事回顾网站（分文件结构） |

---

## 2. 设计方向

### 2.1 视觉风格：TRAE 官方风格

- **关键词**：现代、科技感、专业、简约
- **底色**：纯黑 `#000000`，营造专业科技氛围
- **强调色**：TRAE 绿 `#22C55E`，官方品牌色
- **辅助色**：暖米色 `#E8D5B7`，用于文字点缀和装饰
- **整体调性**：简约现代，与 TRAE 官网保持一致

### 2.2 配色方案

| 用途 | 色值 | 说明 |
|------|------|------|
| 主背景 | `#000000` | 纯黑 |
| 卡片底色 | `#0A0A0A` | 微亮于背景 |
| 二级底色 | `#121212` | 悬浮/高亮区域 |
| 分割线 | `#1F1F1F` | 低对比度分隔 |
| **主强调色** | **`#22C55E`** | **TRAE 绿 — 官方品牌色** |
| 强调色（淡） | `rgba(34, 197, 94, 0.12)` | 背景高亮 |
| 强调色（辉光） | `rgba(34, 197, 94, 0.35)` | 光晕效果 |
| 暖米色 | `#E8D5B7` | 辅助装饰 |
| 主文字 | `#FFFFFF` | 高对比度正文 |
| 次文字 | `#9CA3AF` | 说明/注释 |
| 弱文字 | `#4B5563` | 时间戳/标签 |
| 成功 | `#22C55E` | 复盘「做对了」 |
| 错误 | `#EF4444` | 复盘「做错了」 |

### 2.3 字体方案

#### 字体选择

| 用途 | 字体 | 权重 | 说明 |
|------|------|------|------|
| 英文标题 | Inter | 600-700 | 现代简洁，TRAE 官网同款 |
| 中文正文 | PingFang SC / Microsoft YaHei | 400-500 | 系统原生字体，清晰易读 |
| 英文正文 | Inter | 400-500 | 中性百搭 |
| 数据/标签 | JetBrains Mono | 400-600 | 等宽字体，代码感 |

#### 字号规范

| 变量 | 值 | 用途 |
|------|------|------|
| `--text-h1` | `clamp(28px, 5vw, 72px)` | 大标题 |
| `--text-h2` | `clamp(22px, 3vw, 40px)` | 章节标题 |
| `--text-h3` | `clamp(18px, 2vw, 28px)` | 卡片标题 |
| `--text-body` | `clamp(14px, 1vw + 10px, 17px)` | 正文 |
| `--text-small` | `clamp(12px, 0.8vw + 8px, 14px)` | 辅助文字 |

#### CDN 引入

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
```

> 中文使用系统原生字体（PingFang SC / Microsoft YaHei），无需 CDN 引入。

#### 设计原则

1. **简洁现代**：使用 Inter 作为主要无衬线字体，与 TRAE 官网保持一致
2. **系统字体优先**：中文使用系统原生字体（PingFang SC / Microsoft YaHei），保证加载速度和渲染效果
3. **等宽字体**：数据和代码相关内容使用 JetBrains Mono，保持专业性
4. **响应式字号**：使用 `clamp()` 实现流体字号，适配各种屏幕尺寸
5. **字体加粗**：导航栏等重要文字使用 600 字重，增强层次感

### 2.4 明确排除

- ❌ 蓝紫色渐变
- ❌ 泛滥的发光效果
- ❌ "AI 生成感"的视觉套路（粒子背景、霓虹光效等）
- ❌ 过于冰冷的纯科技风

---

## 3. 信息架构（最终确认）

```
Section 0 · Hero        — 封面（活动名 + 核心数字 + CTA）
Section 1 · Overview    — 一句话概述 + 时间轴
Section 2 · Phase 01    — 申请期
Section 3 · Phase 02    — 策划期
Section 4 · Phase 03    — 落地期
Section 5 · Phase 04    — 复盘期
Section 6 · Highlights  — 精选照片（可选）
Section 7 · About       — 活动信息 + TRAE 品牌 + 版权
```

### 各 Section 内容要点

#### Section 0 · Hero 封面
- 大标题：`TRAE on Campus`
- 副标题：`A Story in Three Months`（保留原 PRD 文案）
- 学校名：`@ 中国地质大学（北京）`
- 核心数字横幅（5 个）：
  - `1` 场活动
  - `50+` 参与者
  - `3h` 沉浸体验（13:30 - 16:30）
  - `5` 个环节（签到/分享/Q&A/Workshop/茶歇）
  - `50` 天筹备（从申请到落地）
- CTA：`↓ 开始阅读`
- 背景：纯黑 + 微妙绿色光晕渐变

#### Section 1 · Overview 项目概述
- 一句话活动定义：`TRAE on Campus 是一场面向高校开发者的 AI Coding Meetup，通过主题分享与动手 Workshop 让参与者零距离体验 AI 原生开发。`
- 角色说明：TRAE 校园大使
- 活动背景：字节跳动 TRAE 品牌发起的高校巡回计划，中国地质大学（北京）站由校园大使从 0 到 1 独立推进
- 场地：北京嘉里中心 · 星巴克甄选（非校园场地，提升活动质感）
- 横向时间轴（四个阶段节点）

#### Section 2 · Phase 01 — 申请期
- 时间标签：`2026 年 1-2 月`
- 叙事段落：
- 关键决策卡片（高亮）：
  - **成为校园大使**：主动申请 TRAE on Campus 校园大使，获得品牌授权与资源支持
  - **确定活动定位**：选择 AI Coding Meetup 形式，聚焦动手实践而非宣讲
  - **合作邀请函**：制作并向校方提交《TRAE on Campus @ 中国地质大学 合作邀请函》，打通校方审批
- 可选：申请材料截图占位、合作邀请函截图

#### Section 3 · Phase 02 — 策划期
- 时间标签：`2026 年 3-4 月`
- 方案迭代卡片（Before → After）：
  - **Before**：模糊的「AI 分享会」→ **After**：结构化的「主题分享 + Q&A + Workshop + 茶歇」四段式
  - **Before**：校内教室 → **After**：嘉里中心星巴克甄选（提升品牌调性）
  - **Before**：讲师制 → **After**：校园大使亲自主持 + TRAE 官方远程支持
- 团队分工：校园大使统筹全流程（场地、物料、宣传、主持、现场控场）
- 物料产出：
  - 《TRAE on Campus @ 中国地质大学 合作邀请函》（PDF）
  - 线上宣传物料 × 3（PNG 海报）
  - 主持手卡（PDF，含 12 个环节 + Plan B 备用方案）
  - TRAE 模版.pptx / PPT模板.pptx
- 可选：策划文档截图占位、宣传物料展示

#### Section 4 · Phase 03 — 落地期
- 时间标签：`2026 年 5 月 10 日`
- 场地：北京嘉里中心 · 星巴克甄选
- 当日 Run of Show（完整 & Plan B 双轨制）：

| 时间 | 环节 | 内容 |
|------|------|------|
| 13:30-14:00 | 签到 & 准备 | 签到入场、连接 WiFi、安装 TRAE IDE、自由交流 |
| 14:00-14:10 | 开场 | 活动定位介绍，TRAE Chatbot 快速演示 |
| 14:10-14:40 | 主题分享 | "Ship faster with TRAE" AI Coding 主题演讲 |
| 14:40-15:00 | Q&A · 第一轮 | 围绕 TRAE 使用体验 & AI Coding 趋势讨论 |
| 15:00-15:30 | Workshop | TRAE IDE 动手实践：STEP1 环境配置 → STEP2 TRAE 体验 → STEP3 Coding Battle → STEP4 GitHub 提交 |
| 15:30-15:50 | Q&A + SOLO | 第二轮答疑 + TRAE SOLO 产品介绍 |
| 15:50-16:10 | Coffee Break | 自由交流、茶歇、社群互动 |
| 16:10-16:30 | 收尾 | 活动总结、合影、后续社群运营安排 |

- 备用方案（Plan B）：HDMI 连接故障预案、环节时长弹性调整、Workshop 难度按参与者水平浮动
- 现场数据展示（待用户补充实际数字）
- 参与者反馈引用 → `[待填写：1-3 条参与者原话]`

#### Section 5 · Phase 04 — 复盘期
- 时间标签：`2026 年 5 月 11 日起`
- 三栏卡片：✅ 做对了 / ❌ 做错了 / 🔁 改进方向
  - ✅ **做对了**（待用户补充，建议 3-5 条）：
    - `[待填写]`
  - ❌ **做错了**（待用户补充，建议 3-5 条）：
    - `[待填写]`
  - 🔁 **改进方向**（待用户补充，建议 3-5 条）：
    - `[待填写]`
- 量化成果汇总（待用户补充）：
  - 实际到场人数：`[待填写]`
  - Workshop 完成率：`[待填写]`
  - 社群新增：`[待填写]`
- 个人成长感悟（100-200 字）→ `[待填写]`

#### Section 6 · Highlights（可选）
- 精选照片网格（3-6 张占位）
- 金句摘录

#### Section 7 · About
- 活动基本信息：
  - 活动名称：TRAE on Campus — AI Coding Meetup
  - 日期：2026 年 5 月 10 日
  - 地点：北京嘉里中心 · 星巴克甄选
  - 主题：Ship faster with TRAE
- TRAE 品牌信息：字节跳动旗下 AI 原生 IDE，集成 Chatbot 与智能 Coding Agent
- 特别鸣谢：TRAE 官方团队支持 + 校园大使独立推进
- 版权声明：© 2026 TRAE on Campus @ CUGB
- **不需要**个人信息/联系方式

---

## 4. 交互与动效（完整方案）

| 动效 | 触发方式 | 实现方案 | 优先级 |
|------|----------|----------|--------|
| Hero 数字滚动 | 页面加载 | CountUp.js（CDN） | P0 |
| 卡片从下滑入 | 进入视口 | Intersection Observer + CSS transform | P0 |
| 图片淡入 | 进入视口 | Intersection Observer + CSS opacity | P0 |
| 章节导航高亮 | 滚动位置 | Intersection Observer | P0 |
| 导航栏背景加深 | 滚动距离 > 50px | scroll 事件 + class toggle | P1 |
| 时间轴节点激活 | 对应章节进入视口 | Intersection Observer | P1 |
| 移动端汉堡菜单 | 点击触发 | JS toggle class | P1 |

### 导航设计
- 顶部固定导航，磨砂玻璃效果（backdrop-filter: blur + saturate）
- 导航项：`概述 · 时间线（下拉）· 复盘 · 关于`
- 时间线下拉菜单：申请期、策划期、落地期
- 导航链接居中显示，字体 600 字重
- 移动端：汉堡菜单
- 当前章节高亮
- 滚动时背景加深

#### 导航样式规范

| 属性 | 默认状态 | 滚动后 |
|------|----------|--------|
| 背景色 | `rgba(0,0,0,0.6)` | `rgba(0,0,0,0.75)` |
| 模糊 | `blur(20px) saturate(180%)` | `blur(20px) saturate(180%)` |
| 边框 | `rgba(255,255,255,0.08)` | `rgba(255,255,255,0.1)` |

#### 导航栏扩展功能

**1. 主题切换**
- 位置：导航栏右上角
- 按钮：太阳/月亮图标切换
- 功能：深色模式 ↔ 浅色模式
- 实现：`assets/js/theme.js`
- 样式：`assets/css/icons.css`
- 持久化：localStorage 保存用户偏好

**2. 中英文切换**
- 位置：导航栏右上角（主题切换左侧）
- 按钮：EN/ZH 文字显示
- 功能：中文 ↔ English
- 实现：`assets/js/i18n.js`
- 支持：`data-i18n` 属性标记需要翻译的文本
- 持久化：localStorage 保存语言偏好

**主题配色方案**

| 主题 | 变量 | 深色模式 | 浅色模式 |
|------|------|----------|----------|
| 主背景 | `--bg-primary` | `#000000` | `#FFFFFF` |
| 卡片背景 | `--bg-card` | `#0A0A0A` | `#F5F5F5` |
| 二级背景 | `--bg-secondary` | `#121212` | `#EBEBEB` |
| 边框色 | `--border-color` | `#1F1F1F` | `#E5E5E5` |
| 主文字 | `--text-primary` | `#FFFFFF` | `#1A1A1A` |
| 次文字 | `--text-secondary` | `#9CA3AF` | `#666666` |
| 弱文字 | `--text-muted` | `#4B5563` | `#999999` |

---

## 5. 技术方案

| 层级 | 选型 | 理由 |
|------|------|------|
| 结构 | HTML5 语义化 | SEO、无障碍 |
| 样式 | 原生 CSS（Variables + Flexbox/Grid） | 零依赖 |
| 脚本 | 原生 JS（ES6+） | 无需构建 |
| 数字动效 | CountUp.js（CDN） | Hero 数字滚动 |
| 字体 | Google Fonts CDN | Syne + Inter + Noto Sans SC + JetBrains Mono |
| 图片 | 占位符（灰色 div + 尺寸标注） | 后续替换 |
| 部署 | **GitHub Pages**（首选） | 免费、HTTPS、支持自定义域名 |
| 字体 | Google Fonts CDN | Syne + Inter + Noto Sans SC + JetBrains Mono |
| 图片 | 占位符（灰色 div + 尺寸标注） | 后续替换 |

> ⚠️ **CDN 锁定**：CountUp.js 和 Google Fonts 均通过 CDN 引入，国内访问可能存在延迟。后续如有需要，可改为本地托管字体和 JS 依赖（见 Section 11 二次开发预留）。

### 部署方案：GitHub Pages

| 配置项 | 说明 |
|--------|------|
| 仓库名 | `trae-on-campus-cugb` |
| 部署分支 | `gh-pages` 或 `main:/docs` |
| 访问地址 | `https://<username>.github.io/trae-on-campus-cugb/` |
| 自定义域名 | 可选，通过 CNAME 记录指向 |
| HTTPS | GitHub Pages 自动提供 |
| 构建步骤 | 无需构建，静态文件直推 |

### 基准设备与断点策略

| 断点 | 覆盖设备 | 字号基准 | 布局 |
|------|----------|----------|------|
| 320px - 767px | 手机竖屏 | 14px | 单列、全宽卡片、汉堡菜单 |
| 768px - 1023px | 平板 / 手机横屏 | 15px | 双列、导航栏展开 |
| 1024px - 1439px | 笔记本 / 小桌面 | 16px | 多列、侧边留白 |
| 1440px - 1920px | 大桌面 | 17px | 中央栏最大宽度 `max-width: 1200px` |

- 使用 `clamp()` 实现流体字号，避免每个断点单独设置
- 图片使用 `srcset` + `sizes` 按断点加载不同尺寸
- 移动端优先（Mobile First）的 CSS 编写顺序

### 性能目标
- LCP < 2.5s
- 图片懒加载
- 无 jQuery、无 Bootstrap
- 首屏资源 < 500KB（不含图片）
- 字体预加载（`<link rel="preload">`）减少 CLS

---

## 6. 文件结构

```
trae-on-campus-cugb/
├── index.html                  # 主页面
├── assets/
│   ├── css/
│   │   ├── variables.css       # CSS 变量
│   │   ├── animations.css      # 动效关键帧
│   │   ├── base.css           # 重置样式 + 通用选择器
│   │   ├── navigation.css      # 导航栏 + 下拉菜单
│   │   ├── hero.css            # Hero 区域
│   │   ├── timeline.css        # 时间轴
│   │   ├── phase.css           # 阶段样式
│   │   ├── components.css      # 卡片、迭代、物料组件
│   │   ├── table.css           # Run of Show 表格
│   │   ├── reflection.css      # 复盘三栏卡片
│   │   ├── about.css           # 关于 + 页脚
│   │   ├── icons.css           # 导航栏图标按钮
│   │   └── responsive.css      # 响应式媒体查询
│   └── js/
│       ├── main.js            # 导航交互、汉堡菜单
│       ├── counter.js         # 数字 count-up
│       ├── scroll.js          # 章节高亮、懒加载
│       ├── theme.js           # 主题切换（深色/浅色）
│       └── i18n.js            # 中英文国际化
└── README.md
```

---

## 7. 占位规范

### 文字占位
- 格式：`[待填写：具体描述]`
- 示例：`[待填写：申请期叙述，200-400字]`

### 图片占位
- 灰色区块 + 居中尺寸标注
- 格式：`占位图 · 宽×高 · 描述`
- 示例：`占位图 · 1200×600 · 活动现场全景`

---

## 8. 待补充内容清单

> 开发前/开发后需要填充的内容，标记 ⬜ 表示待办。

### 数据类
- ✅ Hero 区域核心数字（已填充 5 个，基于主持手卡和实际流程）
- ⬜ 实际到场人数（签到表统计）
- ⬜ 覆盖专业/院系数
- ⬜ Workshop 完成率 / 提交人数
- ⬜ 满意度 / NPS 分数

### 文字类
- ✅ Overview 一句话活动定义（已填充）
- ✅ Phase 01 申请期关键决策（已填充，基于合作邀请函 + 物料）
- ✅ Phase 02 策划期方案迭代说明（已填充，基于主持手卡推断）
- ✅ Phase 03 落地期 Run of Show（已填充，完整 8 环节 + Plan B）
- ⬜ Phase 01 申请期叙事段落（200-400 字，需用户个人回忆）
- ⬜ Phase 02 策划期叙事段落 + 团队分工细节（需用户补充）
- ⬜ Phase 03 落地期关键时刻描述（需用户补充现场故事）
- ⬜ Phase 04 复盘三问（做对/做错/改进，各 3-5 条，需用户反思）
- ⬜ 个人成长感悟（100-200 字，需用户本人撰写）
- ⬜ 参与者反馈引用（1-3 条，需收集）

### 图片类
- ⬜ 现场照片（建议 10-20 张）
- ⬜ 团队合照
- ⬜ 活动物料/海报
- ⬜ 策划文档截图（可打码）

### 品牌类
- ⬜ TRAE 官方 Logo（SVG）
- ✅ TRAE 品牌色值确认（当前使用 TRAE 绿 `#22C55E` 方案）

---

## 9. 验收标准

- [ ] 移动端响应式（320px - 1920px）
- [ ] 深色模式正常显示
- [ ] Hero 数字动效正常触发
- [ ] 章节导航高亮随滚动更新
- [ ] 所有图片懒加载
- [ ] 汉堡菜单在移动端正常工作
- [ ] 无控制台报错
- [ ] 可在 GitHub Pages 正常部署
- [ ] GitHub Pages 链接可通过微信/浏览器直接打开

---

## 10. 响应式适配清单

### 导航
- 桌面端（≥768px）：顶部固定导航栏，当前章节高亮
- 移动端（<768px）：汉堡菜单，点击展开下拉，默认只显示当前章节名
- 导航栏滚动行为：向下滚动后背景加深

### 布局
| Section | 桌面端 | 移动端 |
|---------|--------|--------|
| Hero | 居中大标题 + 横向数字横幅 | 标题缩放，数字2列折行 |
| Overview | 时间轴横向展开 | 时间轴纵向排列 |
| Phase 01-04 | 图文双栏交错（左图右文/左文右图） | 单列，图在上文在下 |
| 复盘三栏 | 三列并排（✅做对 / ❌做错 / 🔁改进） | 单列堆叠 |
| Highlights | 3-6 列网格 | 2 列网格 |
| About | 居中单列 | 居中单列 |

### 字体缩放策略
```css
/* 通过 clamp() 实现 320px→1920px 线性缩放 */
--text-body: clamp(14px, 1vw + 10px, 17px);
--text-h1: clamp(28px, 5vw, 72px);
--text-h2: clamp(22px, 3vw, 40px);
```

### 触摸优化（移动端）
- 点击区域最小 44×44px（符合 iOS 人机界面指南）
- 卡片 hover 效果在触摸设备降级处理（`@media (hover: hover)`）
- 图片懒加载阈值提前（移动端提前 200px 开始加载）

---

## 11. 二次开发预留

> 当前 v1 为纯静态网站。以下设计决策为后期可能的框架迁移/功能追加预留空间。

### 11.1 模块解耦策略

当前 JS 已按职责拆分为独立文件：
```
js/
├── main.js      # 导航、汉堡菜单（UI 交互）
├── counter.js   # 数字动效（依赖 CountUp.js）
└── scroll.js    # 滚动观察（Intersection Observer）
```

**约束**：各模块仅通过 DOM 属性（`data-*`）和 CSS 类名通信，不直接互相调用函数。迁移到 React/Vue/Astro 时，每个 JS 模块可独立替换为对应组件。

### 11.2 CSS 隔离基座

- 所有 CSS 变量集中在 `variables.css`，后续引入 Tailwind/Stitches 时只需重新映射变量值
- 每个 Section 使用独立类命名空间（如 `.sec-hero`、`.sec-overview`），避免全局样式污染
- 动画样式独立为 `animations.css`，可整体替换为 Framer Motion / CSS-in-JS

### 11.3 内容与结构分离

当前为纯 HTML 内联内容。若后续需要 CMS 或 Markdown 驱动：
- 每个 Section 的 HTML 结构保持纯净，不含业务逻辑
- 文字内容已用 `[待填写]` 占位，后续可直接替换为模板变量（如 `{{ content.phase01 }}`）
- 图片路径统一在 HTML 中硬编码，后续可替换为 JS 动态注入

### 11.4 可能的技术升级路径

| 场景 | 推荐方案 | 迁移成本 |
|------|----------|----------|
| 想加后台管理（CMS） | Strapi / Decap CMS + 11ty | 低 — 内容与结构已分离 |
| 想改框架（更现代） | Astro（静态模式） | 中 — HTML 可直接迁移，补 `.astro` 模板即可 |
| 想加动态功能（报名/评论） | Next.js / Nuxt | 高 — 需加入 SSR 和 API 路由 |
| 想本地托管依赖 | 下载 CountUp.js + 字体到 `/vendor` | 低 — 改路径即可 |
| 想转为 PWA | 添加 manifest.json + Service Worker | 低 — 结构无需改动 |

### 11.5 目录预留

```
trae-on-campus-cugb/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── img/
│   └── vendor/          # ← 预留：本地第三方依赖（未来迁移 CDN → 本地）
├── _components/         # ← 预留：未来拆分出的 HTML 片段/组件
├── .github/
│   └── workflows/
│       └── deploy.yml   # ← 预留：GitHub Actions 自动部署
├── CNAME                # ← 预留：自定义域名
└── README.md
```

---

*规划版本：v1.5 · 更新时间：2026-05-11 · 新增主题切换、中英文切换、CSS模块化拆分*
