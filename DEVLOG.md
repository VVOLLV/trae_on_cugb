# 开发日志

## 2026-05-12 (下午)

### 完成事项

#### Footer 揭开效果（重点特性）
- 采用**两层叠放滚切**结构：
  - `page-container`（`overflow: hidden`）
  - `footer-layer`（`absolute, bottom: 0, z-index: 1`）— 静止的 Footer
  - `main-layer`（`absolute, top: 0, z-index: 2, translateY`）— 可滚动揭开
- **CSS**：`reveal.css` — 容器裁切、两层定位、圆角揭开、响应式
- **JS**：`reveal.js` — 轮子与触屏事件拦截、RAF + lerp (0.12) 缓动、子元素 scrollable 自动放行、锚点导航
- `about` 区域从主内容中移出，放置到 `footer-layer` 中
- `main.js` 删除锚点滚动逻辑（由 reveal.js 接管）

#### 新增文件

| 文件 | 说明 |
|------|------|
| `assets/css/reveal.css` | Footer 揭开效果样式 |
| `assets/js/reveal.js` | Footer 揭开交互逻辑 |

#### 涉及文件

| 文件 | 变更类型 |
|------|----------|
| `for_trae/index.html` | 修改 — page-container 包裹 + footer-layer + CSS/JS 引入 |
| `for_trae/assets/css/reveal.css` | 新增 |
| `for_trae/assets/css/about.css` | 修改 — 移除 `.sec-about` / `.footer` |
| `for_trae/assets/js/reveal.js` | 新增 |
| `for_trae/assets/js/main.js` | 修改 — 移除锚点滚动逻辑 |
| `README.md` | 修改 — Footer 揭开章节 + 文件结构 |
| `PLANNING.md` | 修改 — Footer 揭开章节 + v1.7 |
| `DEVLOG.md` | 修改 — 本日志 |

## 2026-05-12 (上午)

### 完成事项

#### 1. 导航栏重构：双层导航结构
- 新增 **Top Bar**（普通文档流，深色背景）：左侧 `TRAE on Campus @中国地质大学（北京）`，右侧辅助链接
- **Main Navigation** 改为 `position: sticky; top: 0`，滚动过 Top Bar 后吸附
- 导航栏去掉磨砂玻璃效果，改为纯色背景
- 滚动时出现 `box-shadow` 阴影（10px 阈值）

#### 2. 导航 hover 动效改为底部短线
- 去掉所有背景高亮（`background: var(--accent-light)` → `transparent`）
- 改用 `::after` 伪元素实现底部绿色短线，hover 时 `scaleX(0→1)` 从中心展开
- `.dropdown-trigger` 用 `:not()` 排除，避免与三角箭头冲突

#### 3. 时间线下拉改为多栏布局
- 参考 `reference/` 中 Stanford 风格实现
- 三栏结构：活动阶段 / 关键交付物 / 活动流程
- 下拉面板 `min-width: 520px`，`display: flex` 分栏
- 下拉出场动画：`translateY(8px) → 0` + `opacity` 渐变

#### 4. 汉堡菜单动画
- 点击变形为 X 图标（`translateY + rotate` 动画）
- 按钮 span 加 `border-radius: 2px`
- 新增 Escape 键关闭移动菜单

#### 5. Hero 页面重构
- 参考 Stanford 风格重写 Hero CSS：三层背景叠层（渐变 + SVG 纹理 + 遮罩）
- `min-height: 420px`，hero-content padding 96px

#### 6. 参考网站引入
- 新建 `reference/deepseel_coding/stanford-replica/` 目录
- 存放 Stanford 风格参考站源码

#### 7. 文档更新
- README.md：更新项目结构、功能特性、导航描述
- PLANNING.md：更新导航设计章节、交互动效表格、文件结构
- 版本号从 v1.5 → v1.6

### 涉及文件

| 文件 | 变更类型 |
|------|----------|
| `for_trae/index.html` | 修改 — Top Bar + 多栏下拉 HTML |
| `for_trae/assets/css/variables.css` | 修改 — 新增 `--top-bar-height` |
| `for_trae/assets/css/navigation.css` | 修改 — 全面重构导航样式 |
| `for_trae/assets/css/hero.css` | 修改 — 恢复原始 padding |
| `for_trae/assets/js/main.js` | 修改 — scrollIntoView、Escape 键、passive scroll |
| `README.md` | 修改 — 项目结构/功能/导航描述 |
| `PLANNING.md` | 修改 — 导航设计/动效/文件结构 |
| `DEVLOG.md` | 新增 — 本日志 |
| `reference/` | 新增 — 参考网站目录 |

## 2026-05-11

### 完成事项

#### 1. Git 仓库初始化与推送
- 在 `d:\claude_coding\trae_cugb` 目录初始化 Git 仓库
- 添加远程仓库 origin: `https://github.com/VVOLLV/trae_cugb.git`
- 创建 `.gitignore` 文件，排除大文件和系统文件
- 首次提交推送成功

#### 2. 大文件处理
- 发现 `uploads/` 目录包含超过 GitHub 限制的大文件（PPT、PDF 等，最大 121MB）
- 使用 `git filter-branch` 重写历史，移除大文件引用
- 执行 `git gc --prune=now --aggressive` 清理本地仓库
- 强制推送清理后的仓库至 GitHub
- 最终仓库大小约 50KB，包含 42 个文件

#### 3. README.md 文档编写
- 创建完整的项目说明文档
- 包含项目树状结构图
- 添加功能特性表格
- 说明技术栈、快速开始指南
- 添加主题配置和国际化使用说明
- 提交并推送至 GitHub

### 项目结构

```
trae_cugb/
|-- for_trae/              # TRAE 风格主站
|   |-- assets/css/         # 12 个模块化 CSS 文件
|   |-- assets/js/          # 5 个 JavaScript 文件（含主题切换、i18n）
|
|-- for_claude/            # Claude 风格备用站
|
|-- uploads/               # 大文件目录（未纳入 Git 追踪）
|
|-- PLANNING.md            # 项目规划
|-- TRAE_on_Campus_CUGB.md # 活动需求
|-- README.md              # 项目说明（新增）
```

### 技术要点

| 功能 | 实现方式 |
|------|----------|
| 主题切换 | CSS Variables + theme.js |
| 国际化 | data-i18n 属性 + i18n.js |
| 滚动动画 | Intersection Observer API |
| 响应式 | CSS Modules + media queries |
| 双层导航 | Top Bar 文档流 + Nav sticky |
| hover 动效 | ::after 伪元素 scaleX 动画 |

### 待处理

- [ ] 考虑使用 GitHub Release 分享 uploads/ 目录中的大文件
- [ ] 如有需要，可配置 Git LFS 存储大文件
- [ ] 补充更多国际化文本翻译

### 备注

- 本地开发服务器运行于端口 8080
- 远程仓库: https://github.com/VVOLLV/trae_cugb