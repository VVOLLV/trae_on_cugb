# TRAE on Campus @ 中国地质大学（北京）

TRAE on Campus AI Coding Meetup 活动回顾网站

## 项目结构

```
trae_cugb/
|-- .claude/                      # Claude IDE 配置目录
|   |-- settings.local.json        # 本地设置
|
|-- for_trae/                      # TRAE 官网风格网站（主站）
|   |-- index.html                  # 主页面
|   |-- assets/
|       |-- css/                    # 样式文件（模块化设计）
|       |   |-- variables.css       # CSS 变量（颜色、字体、间距）
|       |   |-- base.css            # 基础样式与全局重置
|       |   |-- animations.css      # 动画关键帧定义
|       |   |-- navigation.css      # 导航栏（Top Bar、多栏下拉、底部短线 hover）
|       |   |-- hero.css           # 首屏区域样式
|       |   |-- timeline.css        # 时间线组件样式
|       |   |-- phase.css           # 阶段标题样式
|       |   |-- components.css      # 通用卡片、迭代版本、交付物等组件
|       |   |-- table.css           # 活动流程表格样式
|       |   |-- reflection.css      # 回顾与反思区域（响应式三栏布局）
|       |   |-- reveal.css          # Footer 揭开效果（两层叠放滚动裁切）|
|       |   |-- about.css           # 关于区域与页脚样式
|       |   |-- icons.css           # 主题切换、语言切换按钮样式
|       |   |-- swimlane.css        # 泳道图（双角色 × 三阶段分工协作）
|       |   |-- responsive.css      # 响应式适配（移动端断点）
|       |-- js/                     # JavaScript 脚本
|           |-- reveal.js            # Footer 揭开效果（wheel/touch/锚点/缓动）|
|           |-- main.js             # 导航交互、滚动监听
|           |-- counter.js          # 数字滚动动画
|           |-- scroll.js           # 视差滚动与元素进入动画
|           |-- swimlane-sticky.js  # 泳道图标题栏悬浮固定
|           |-- theme.js            # 深色/浅色主题切换
|           |-- i18n.js             # 中英文国际化支持
|
|-- for_claude/                     # Claude 官方风格网站（备用站）
|   |-- index.html                  # 主页面
|   |-- for_code.html               # 代码页面
|   |-- assets/
|       |-- css/
|       |   |-- variables.css       # CSS 变量
|       |   |-- style.css          # 主样式文件
|       |   |-- animations.css     # 动画
|       |   |-- responsive.css     # 响应式
|       |-- js/
|           |-- main.js            # 主脚本
|           |-- counter.js         # 数字动画
|           |-- scroll.js          # 滚动效果
|
|-- reference/                       # 参考网站来源
|   |-- deepseel_coding/            # 参考网站项目
|       |-- PLAN.md                 # 参考网站设计计划
|       |-- stanford-replica/       # Stanford 风格参考站
|
|-- uploads/                        # 静态资源（PPT、PDF、图片等）
|   |-- TRAE on Campus PPT 模版/   # 活动 PPT 模板
|   |-- TRAE SOLO国内版介绍.pptx   # 产品介绍
|   |-- TRAE+on+Campus+@...pdf     # 合作邀请函
|   |-- TRAE_主持手卡.pdf          # 主持人手卡
|   |-- 线上宣传物料*.png          # 宣传图片
|
|-- PLANNING.md                     # 项目规划文档
|-- TRAE_on_Campus_CUGB.md         # 活动需求文档
|-- .gitignore                      # Git 忽略规则
|-- README.md                       # 项目说明文件
```

## 功能特性

### for_trae/ 主站

| 功能 | 说明 |
|------|------|
| 双语支持 | 支持简体中文 / English，一键切换 |
| 主题切换 | 深色模式（默认）/ 浅色模式 |
| 双层导航 | Top Bar + Main Navigation 结构，参考 Stanford 风格 |
| 响应式布局 | 适配桌面端、平板、手机 |
| 滚动动画 | Intersection Observer 实现元素渐入效果 |
| 数字滚动 | 关键数据展示数字递增动画 |
| **Footer 揭开** | **页面主内容向上滚动，逐层揭开底部关于信息 + 版权** |
| 导航交互 | Top Bar 辅助导航、多栏下拉菜单、底部短线 hover 动画、滚动阴影 |
| **泳道图** | **双角色 × 三阶段分工协作图，直观展示 TRAE 官方 vs 校园大使工作** |
| **悬浮标题栏** | **泳道图表头滚动出视野后固定吸附在导航栏下方** |
| **滚动驱动导航高亮** | **滚动时自动高亮当前所在区域的导航项，下拉触发器联动** |

### for_claude/ 备用站

备用的 Claude 官方风格展示页面，结构相对简单。

## 技术栈

- HTML5 + CSS3 + Vanilla JavaScript
- CSS Variables（主题系统）
- CSS Modules（模块化样式管理）
- 无框架依赖，纯原生实现

## 快速开始

### 本地预览

```bash
# 进入项目目录
cd trae_cugb

# 启动本地服务器（任选其一）

# Python 3
python -m http.server 8080

# Node.js (需要 npx)
npx serve

# 打开浏览器访问
http://localhost:8080/for_trae/
```

### 文件访问说明

- 主站入口：`for_trae/index.html`
- 备用站入口：`for_claude/index.html`

## 主题配置

主题配置位于 `for_trae/assets/css/variables.css`，主要变量：

```css
/* 主色调 */
--color-primary: #22C55E;        /* TRAE 官方绿色 */

/* 背景色 */
--bg-primary: #000000;           /* 深色模式 */
--bg-card: #0A0A0A;              /* 卡片背景 */

/* 文字色 */
--text-primary: #FFFFFF;
--text-secondary: #A1A1AA;
```

## 国际化

语言文件位于 `for_trae/assets/js/i18n.js`，通过 `data-i18n` 属性关联。

```html
<h1 data-i18n="hero.title">TRAE on Campus</h1>
```

## 注意事项

1. **uploads/** 目录包含大文件（PPT、PDF 等），未纳入 Git 追踪
2. 建议使用 Python 3.x 或 Node.js 环境运行本地服务器
3. 浏览器需支持 CSS 变量和 Intersection Observer API

## Footer 揭开效果（重点特性）

页面采用**两层叠放滚切**的 Footer 揭开效果：

```
page-container (overflow: hidden, 100vh)
├── footer-layer (absolute, bottom: 0, z-index: 1)
│   └── 活动信息 + 版权信息（静止在底部）
└── main-layer (absolute, top: 0, z-index: 2, translateY)
    └── 所有页面内容（随滚动上移）
```

### 交互行为

| 操作 | 效果 |
|------|------|
| 向下滚轮 / 触摸滑动 | 主内容 `translateY` 上移，底部 Footer 逐层揭开 |
| 点击导航"关于" | 缓动滚动到最大值，完全展示 Footer |
| 点击其他锚点 | 计算目标在主内容层中的位置，lerp 缓动到达 |
| 滚动到边界 | 自动停止，不回弹 |
| 主内容内部有 overflow:scroll 的区域 | 自动放行，不拦截 |

### 技术要点

| 技术 | 说明 |
|------|------|
| **两层叠放** | footer-layer (z-index: 1) + main-layer (z-index: 2) |
| **GPU 加速** | `will-change: transform` on main-layer |
| **RAF 缓动** | `requestAnimationFrame` + lerp 插值（easing 0.12），丝滑滚动 |
| **滚轮/触屏** | 监听 `wheel` + `touchstart/touchmove`（passive: false） |
| **子元素放行** | `findScrollableParent()` 检测 overflow: auto/scroll 的祖先，避免拦截 |
| **锚点导航** | 拦截 `a[href^="#"]`，用 `offsetTop` 计算目标位置 |
| **圆角揭开** | `main-layer` 底部 `border-radius: 0 0 20px 20px`，视觉柔和 |

### 相关文件

| 文件 | 职责 |
|------|------|
| `assets/css/reveal.css` | 容器裁切、两层定位、Footer 样式、响应式 |
| `assets/js/reveal.js` | wheel/touch 滚动、RAF 缓动、锚点导航、子元素放行 |

## 相关文档

- [PLANNING.md](PLANNING.md) - 项目规划与开发记录
- [TRAE_on_Campus_CUGB.md](TRAE_on_Campus_CUGB.md) - 活动需求与执行记录