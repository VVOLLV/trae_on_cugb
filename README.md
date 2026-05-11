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
|       |   |-- navigation.css      # 导航栏（含下拉菜单、磨砂玻璃效果）
|       |   |-- hero.css           # 首屏区域样式
|       |   |-- timeline.css        # 时间线组件样式
|       |   |-- phase.css           # 阶段标题样式
|       |   |-- components.css      # 通用卡片、迭代版本、交付物等组件
|       |   |-- table.css           # 活动流程表格样式
|       |   |-- reflection.css      # 回顾与反思区域（响应式三栏布局）
|       |   |-- about.css           # 关于区域与页脚样式
|       |   |-- icons.css           # 主题切换、语言切换按钮样式
|       |   |-- responsive.css      # 响应式适配（移动端断点）
|       |-- js/                     # JavaScript 脚本
|           |-- main.js             # 导航交互、滚动监听
|           |-- counter.js          # 数字滚动动画
|           |-- scroll.js           # 视差滚动与元素进入动画
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
| 响应式布局 | 适配桌面端、平板、手机 |
| 滚动动画 | Intersection Observer 实现元素渐入效果 |
| 数字滚动 | 关键数据展示数字递增动画 |
| 导航交互 | 下拉菜单、磨砂玻璃效果、滚动后背景变化 |

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

## 相关文档

- [PLANNING.md](PLANNING.md) - 项目规划与开发记录
- [TRAE_on_Campus_CUGB.md](TRAE_on_Campus_CUGB.md) - 活动需求与执行记录