# Stanford 官网复刻 — 参考代码深度分析

> 来源：`reference/deepseel_coding/stanford-replica/`
> 文件数：3 个（index.html + css/style.css + js/main.js）
> 分析日期：2026-05-12

---

## 一、全局设计系统 (CSS Custom Properties)

### 1.1 颜色体系

```css
/* 品牌色 */
--stanford-red: #8C1515;        /* 主品牌色 — Cardinal Red */
--stanford-red-dark: #6B0F0F;   /* hover 加深 */
--stanford-red-light: #B93A3A;  /* Hero 渐变浅端 */

/* 中性色 */
--stanford-black: #2E2D29;      /* 正文黑色（非纯黑 #000，微暖） */
--stanford-gray-dark: #53565A;  /* 次要文字 */
--stanford-gray: #8C8C8C;       /* 弱文字/元数据 */
--stanford-gray-light: #D2D2D2; /* 边框/占位背景 */
--stanford-bg: #F4F4F4;         /* section 交替背景 */
--stanford-white: #FFFFFF;      /* 主背景/卡片背景 */

/* 多彩学校色 (7个学院各用一个) */
--color-teal: #00505C;
--color-gold: #C99E23;
--color-green: #175E3E;
--color-navy: #1A2B4C;
--color-purple: #52347C;
--color-coral: #D64B3E;
```

**设计要点**：
- 品牌色用作链接色、按钮色、Hero 背景色
- 正文用 `#2E2D29`（微暖黑），不是纯黑 `#000`——减少刺眼感
- 交替 section 背景：白色 ↔ `#F4F4F4`，形成视觉节奏

### 1.2 字体

```css
--font-sans: "Source Sans Pro", "Segoe UI", system-ui, -apple-system, sans-serif;
--font-serif: "Source Serif Pro", Georgia, "Times New Roman", serif;
```

- `html { font-size: 16px }` — 基准字号
- `line-height: 1.6` — 全局行高
- `-webkit-font-smoothing: antialiased` — Mac 字体平滑

### 1.3 间距系统（rem 单位）

| 变量 | 值 | 等效 px (16px基准) | 用途 |
|------|----|-------------------|------|
| `--space-xs` | 0.25rem | 4px | 极小间距 |
| `--space-sm` | 0.5rem | 8px | 导航项间距、标题下边距 |
| `--space-md` | 1rem | 16px | 卡片内边距、flex gap |
| `--space-lg` | 1.5rem | 24px | section 内边距、容器 padding |
| `--space-xl` | 2rem | 32px | 卡片 padding |
| `--space-2xl` | 3rem | 48px | 网格 gap、footer 间距 |
| `--space-3xl` | 4rem | 64px | footer 顶部 padding、admission gap |
| `--space-4xl` | 6rem | 96px | section 垂直 padding |

**9 级间距层级**，从 4px 到 96px 覆盖所有场景。

### 1.4 布局常量

```css
--max-width: 1200px;        /* 内容最大宽度 */
--nav-height: 68px;          /* 主导航条高度 */
--top-bar-height: 36px;     /* 顶栏高度 */
```

### 1.5 过渡时间

```css
--transition-fast: 0.15s ease;   /* hover 颜色、阴影变化 */
--transition: 0.3s ease;          /* 下拉菜单、导航展开 */
--transition-slow: 0.5s ease;    /* 页面级动画 */
```

---

## 二、Reset & 基础样式

```css
*, *::before, *::after {
  margin: 0; padding: 0; box-sizing: border-box;
}
html { font-size: 16px; scroll-behavior: smooth; }
body { font-family: var(--font-sans); color: var(--stanford-black);
       background: var(--stanford-white); line-height: 1.6; }
a { color: var(--stanford-red); text-decoration: none;
    transition: color var(--transition-fast); }
a:hover { color: var(--stanford-red-dark); text-decoration: underline; }
ul { list-style: none; }
```

**设计要点**：
- 全局 `scroll-behavior: smooth` — 所有锚点链接平滑滚动
- `<a>` 标签全局红色，hover 加深并出现下划线
- `box-sizing: border-box` 统一盒模型

### 通用组件类

```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.section { padding: 96px 0; }                           /* section 上下留白 */
.section-title { font-size: 2rem; font-weight: 700; margin-bottom: 8px; }
.section-subtitle { font-size: 1.125rem; color: 次灰; max-width: 680px; }
.more-link { font-weight: 600; color: red; margin-top: 24px; }
```

**关键信息**：
- 每个 section 上下 96px（6rem）留白
- 章节标题统一 2rem（32px）黑体 700
- 副标题带 `max-width: 680px` 限制阅读宽度
- `more-link` 作为区块底部查看更多链接，红色 600 字重

### 按钮系统

| 类 | 样式 | hover |
|----|------|-------|
| `.btn` | `padding: 0.8rem 2rem; font-size: 1rem; font-weight: 600; border-radius: 4px; border: 2px solid transparent` | — |
| `.btn-primary` | 红底白字 | 深红底白字 |
| `.btn-outline` | 透明底 + 红色边框 + 红字 | 红色填满 + 白字 |

### 占位图

```css
.placeholder-img { background: linear-gradient(135deg, #D2D2D2, #F4F4F4);
                   border-radius: 6px; min-height: 200px; }
.placeholder-img.tall { min-height: 320px; }
.placeholder-img.large { min-height: 400px; }
```

- 三种高度：200px(默认) / 320px / 400px
- 对角渐变模拟真实图片占位

---

## 三、Top Bar（顶部工具栏）

### 3.1 定位策略
```css
.top-bar {
  background: var(--stanford-black);   /* 深色背景 */
  color: var(--stanford-white);
  font-size: 0.8rem;
  height: var(--top-bar-height);        /* 36px */
  overflow: hidden;
}
```

**关键：Top Bar 无任何定位属性**，它是普通文档流元素。页面滚动时它会自然滚出视野。

### 3.2 内部布局
```css
.top-bar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
```

使用 `.container` + `.top-bar-inner` 双类模式：container 提供 max-width 和 padding，top-bar-inner 提供 flex 布局。两个类职责分离。

### 3.3 子元素
| 元素 | 类 | 样式 |
|------|----|------|
| 品牌名 | `.top-logo` | 白色，700 字重，0.85rem，letter-spacing 0.5px |
| 辅助导航 | `.utility-nav` | flex，gap 16px |
| 辅助链接 | `.utility-nav ul a` | 浅灰色，0.8rem |
| 搜索按钮 | `.search-toggle` | 无背景无边框，白色，1rem |

**hover 效果**：Top Bar 链接从浅灰 → 白色

---

## 四、Main Navigation（主导航栏）

### 4.1 定位策略（核心）
```css
.main-header {
  background: var(--stanford-white);
  border-bottom: 1px solid var(--stanford-gray-light);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: var(--nav-height);      /* 68px */
}
```

**`position: sticky; top: 0;`** — 这是整个导航系统的核心。页面加载时它在 Top Bar 下方，当用户向下滚动过 Top Bar 后，它吸附在浏览器窗口顶部。

### 4.2 内部布局
```css
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
```

### 4.3 品牌 LOGO（双层设计）
```css
.brand {
  display: flex; flex-direction: column; line-height: 1.1;
  color: var(--stanford-red); font-weight: 700;
}
.brand-block { font-size: 1.5rem; letter-spacing: -0.5px; }      /* "Stanford" */
.brand-sub { font-size: 0.7rem; letter-spacing: 2px;
             text-transform: uppercase; }                         /* "UNIVERSITY" */
```

上下两行排列：上大下小，上为主名，下为大写小字副标题。

### 4.4 导航链接列表
```css
.nav-list { display: flex; gap: 8px; }
.nav-item { position: relative; }

.nav-link {
  display: block;
  padding: 8px 12px;
  color: var(--stanford-black);
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 4px;
  transition: background 0.15s ease, color 0.15s ease;
}
.nav-link:hover {
  background: var(--stanford-bg);     /* 浅灰背景高亮 */
  color: var(--stanford-red);         /* 文字变红 */
  text-decoration: none;               /* 不显示下划线 */
}
```

**hover 效果**：链接文字变红 + 浅灰背景高亮（不是底部短线！这是参考项目的原始行为）。

### 4.5 下拉菜单（核心交互）

```css
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--stanford-white);
  border: 1px solid var(--stanford-gray-light);
  border-radius: 6px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  min-width: 480px;
  padding: 24px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all 0.3s ease;
  z-index: 999;
}

.nav-item:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```

**下拉动画详解**：
- 默认：`opacity: 0; visibility: hidden; translateY(8px)` — 不可见且下移 8px
- hover 触发：`opacity: 1; visibility: visible; translateY(0)` — 淡入 + 从下往上滑入
- 过渡 0.3s ease，同时作用于三个属性
- **大阴影** `0 12px 40px rgba(0,0,0,0.12)` 营造浮层感

### 4.6 多栏下拉布局
```css
.dropdown-inner { display: flex; gap: 48px; }

.dropdown-col h4 {
  font-size: 0.75rem;          /* 12px */
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--stanford-gray);
  margin-bottom: 8px;
}

.dropdown-col ul li { margin-bottom: 0.3rem; }

.dropdown-col ul a {
  color: var(--stanford-black);
  font-size: 0.9rem;
  padding: 4px 0;
  display: block;
}

.dropdown-col ul a:hover {
  color: var(--stanford-red);
  text-decoration: none;
}
```

**设计要点**：
- 下拉宽度 >= 480px 保证多栏不拥挤
- 栏间距 48px
- 分类标题：12px 大写 灰色
- 链接：14.4px 黑色，hover 变红无下划线
- 链接 `padding: 4px 0` — 仅垂直内边距，无水平内边距

### 4.7 汉堡菜单
```css
.hamburger {
  display: none;             /* 桌面端隐藏 */
  flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.hamburger span {
  display: block; width: 24px; height: 2px;
  background: var(--stanford-black);
  border-radius: 2px; transition: all 0.15s ease;
}

/* 激活态 X 动画 */
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
```

X 形变逻辑：
- 上条：下移 7px + 旋转 45°
- 中条：隐藏
- 下条：上移 7px + 旋转 -45°
- 三条宽度 24px、高度 2px、圆角 2px

---

## 五、页面 Section 逐块分析

### 5.1 Hero Section

```css
.hero {
  position: relative;
  min-height: 560px;
  display: flex; align-items: center;
  overflow: hidden;
}
```

**三层背景叠层**（从下到上）：
1. `.hero-bg` — 红色对角线渐变 + SVG 图案纹理
2. `.hero-overlay` — 黑色渐变遮罩（上浅下深）
3. `.hero-content` — 实际文字内容

```css
.hero-content h1 {
  font-size: 3rem;           /* 48px — 超大标题 */
  font-weight: 800;
  line-height: 1.15;
  max-width: 700px;
  letter-spacing: -0.5px;    /* 标题收紧字距 */
}

.hero-desc {
  font-size: 1.15rem;        /* 18.4px — 比正文大 */
  line-height: 1.8;           /* 高行高增加可读性 */
  max-width: 720px;
  opacity: 0.92;
}

.hero-actions .btn-primary {
  background: var(--stanford-white);  /* 白色按钮 */
  color: var(--stanford-red);
  border-color: var(--stanford-white);
}
.hero-actions .btn-primary:hover {
  background: var(--stanford-bg);     /* hover 变浅灰 */
}
```

**设计要点**：
- Hero 标题 800 字重，比页面其他标题（700）更重
- 描述文字 `opacity: 0.92` 轻微降低对比度
- CTA 按钮反色设计：白底红字（在红背景上）

### 5.2 News & Stories

**布局**：`grid-template-columns: 1.5fr 1fr` — 左侧 60%，右侧 40%
- 左：一张大图 + 标签 + 标题 + 摘要（feature 文章）
- 右：3 条小卡片 + "More news →" 链接

```css
/* 左侧 feature */
.news-feature h3 { font-size: 1.5rem; font-weight: 700; line-height: 1.3; }

/* 右侧 mini card */
.news-mini { display: flex; gap: 16px; }
.news-mini .news-img { width: 120px; min-height: 80px; flex-shrink: 0; }
.news-mini .news-body h4 { font-size: 0.95rem; font-weight: 600; line-height: 1.4; }
.news-mini time { font-size: 0.8rem; color: var(--stanford-gray); }

/* 标签 */
.news-tag { font-size: 0.75rem; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.8px; color: red; }
```

**设计要点**：
- `.news-tag` 用在文章标签上，12px 大写 红色 700 字重
- mini 文章时间使用 `<time>` 语义化标签

### 5.3 Upcoming Events

```css
.events-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }

.event-card {
  background: white; border-radius: 8px; padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex; gap: 16px;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.event-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}

.event-date { display: flex; flex-direction: column; align-items: center;
              min-width: 48px; color: red; font-weight: 700; }
.event-month { font-size: 0.7rem; letter-spacing: 0.8px; }
.event-day { font-size: 1.8rem; line-height: 1; }
```

**卡片 hover 动画**：
- 阴影从 `2px/12px/0.06` → `6px/24px/0.12`
- 卡片上浮 2px（`translateY(-2px)`）
- 这个模式可作为通用卡片 hover 动画参考

### 5.4 Academics（7 学院网格）

```css
.schools-grid { grid-template-columns: repeat(4, 1fr); }

.school-card {
  background: var(--stanford-bg);
  border-radius: 8px; padding: 32px;
  text-align: center;
  display: block;                /* 整个卡片是可点击的 <a> */
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.school-card:hover {
  transform: translateY(-4px);    /* 上浮 4px */
  box-shadow: 0 8px 28px rgba(0,0,0,0.12);
}

.school-icon {
  width: 48px; height: 4px;      /* 装饰色条 */
  border-radius: 2px;
  margin: 0 auto 16px;
  background: var(--stanford-red);
}
```

**设计要点**：
- 整个卡片是 `<a>` 标签，可点击跳转
- 每个卡片顶部有彩色横条（`.school-icon`），7 个颜色分别对应 7 个学院
- hover 上浮 4px（比 event-card 的 2px 更明显）

### 5.5 Research & Impact

```css
.research-grid { grid-template-columns: 1.3fr 1fr; gap: 48px; }

.stats-column { grid-template-columns: 1fr 1fr; gap: 16px; }

.stat-card { background: white; border-radius: 8px; padding: 24px;
             text-align: center; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }

.stat-number { font-size: 2rem; font-weight: 800; color: red;
               line-height: 1.2; margin-bottom: 0.3rem; }
.stat-label { font-size: 0.8rem; color: var(--stanford-gray-dark); line-height: 1.4; }
```

**设计要点**：
- 左侧大块文章（56.5% 宽度）+ 右侧 2x2 统计卡片网格
- 统计数字超大（32px）800 字重 红色，视觉冲击力强
- 统计标签小字灰色

### 5.6 Admission

```css
.admission-grid { grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }

.admission-content h2 { font-size: 2rem; font-weight: 700; }
.admission-content p { font-size: 1.05rem; line-height: 1.8; }
.admission-links { display: flex; flex-wrap: wrap; gap: 16px; }
```

**设计要点**：
- 左右各半，左文右图
- 按钮组用 `flex-wrap: wrap` + outline 风格按钮
- `align-items: center` 垂直居中

### 5.7 Footer

```css
.site-footer { background: var(--stanford-black); color: white;
               padding: 64px 0 0; }

.footer-grid {
  grid-template-columns: repeat(4, 1fr); gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.12);
}

.footer-bottom .container {
  display: flex; align-items: center;
  justify-content: space-between; flex-wrap: wrap; gap: 16px;
}
```

**页脚层级**：
1. `.footer-grid` — 4 列链接（Schools / Academics / Resources / Connect）
2. 分隔线 `border-bottom`
3. `.footer-bottom` — 社交媒体图标（圆形边框）+ 版权 + 法律链接

**页脚链接**：
- 列标题：12px 大写 灰色，letter-spacing 1.2px
- 链接：14.4px 浅灰，hover 变白
- 分隔线透明度 0.12

**社交图标 hover**：圆形边框 → 红色填充

---

## 六、响应式设计（3 个断点）

### 6.1 平板 ≤1024px
- `--space-4xl`: 96px → 64px（压缩 section 间距）
- News `/` Research `/` Admission：双列 → 单列
- Events：4列 → 2列
- Schools：4列 → 3列
- Footer：4列 → 2列

### 6.2 手机 ≤768px

**Top Bar**：
```css
.top-bar { height: auto; padding: 8px 0; }
.top-bar-inner { flex-direction: column; gap: 8px; }
.utility-nav ul { flex-wrap: wrap; justify-content: center; gap: 8px; }
```

**导航变为侧滑菜单**：
```css
.hamburger { display: flex; }                    /* 显示汉堡按钮 */

.main-nav {
  position: fixed;
  top: var(--top-bar-height);                    /* 从 Top Bar 下方开始 */
  left: 0; right: 0; bottom: 0;                  /* 全屏 */
  background: var(--stanford-white);
  flex-direction: column; padding: 32px;
  transform: translateX(100%);                   /* 隐藏在右侧 */
  transition: transform 0.3s ease;
  overflow-y: auto;                              /* 内容多时可滚动 */
}
.main-nav.active { transform: translateX(0); }  /* 滑入 */

.nav-list { flex-direction: column; gap: 0; }
.nav-link { padding: 12px; font-size: 1.1rem;    /* 加大触控区域 */
            border-bottom: 1px solid var(--stanford-bg); }
```

**移动端下拉**：
```css
.dropdown {
  position: static;             /* 取消绝对定位 */
  opacity: 1; visibility: visible;
  transform: none; box-shadow: none;
  border: none; min-width: unset;
  padding: 0 16px 16px;
  display: none;                /* 默认隐藏 */
}
.nav-item.active .dropdown { display: block; }   /* 点击展开 */
.dropdown-inner { flex-direction: column; gap: 16px; }
```

**其他调整**：
- Hero 标题 48px → 32px，高度 560px → 420px
- Events / Stats / Footer → 单列
- Schools：2 列

### 6.3 小手机 ≤480px
- Schools：单列
- Admission 按钮：纵向排列、文本居中

---

## 七、JavaScript 交互逻辑（逐函数分析）

### 7.1 汉堡菜单（Mobile Hamburger）
```js
hamburger.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('active');
  hamburger.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isOpen);   // 无障碍属性
});

// 点击导航链接后关闭菜单（仅移动端）
mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      mainNav.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
```

### 7.2 移动端下拉切换
```js
// 桌面端：hover 展开（CSS `:hover`）
// 移动端：点击展开（JS toggle）
document.querySelectorAll('.has-dropdown').forEach(item => {
  item.querySelector('.nav-link').addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();          // 阻止链接跳转
      item.classList.toggle('active');
    }
  });
});
```

### 7.3 滚动阴影（Header Shadow on Scroll）
```js
window.addEventListener('scroll', () => {
  if (scrollY > 10) {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
}, { passive: true });            // 性能优化：passive 监听器
```

**触发条件**：滚动 > 10px（非 0，避免误触发）
**实现方式**：直接操作 `element.style`（非 class toggle），因为阴影值是固定的

### 7.4 平滑滚动
```js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;        // 跳过 hash 空链接
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
```

使用原生 `scrollIntoView`，不做手动 offset 计算。

### 7.5 Intersection Observer（页面渐入动画）
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);    // 只触发一次
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});
```

**动画逻辑**：
- 初始状态：`opacity: 0; translateY(20px)` — 隐藏且下移 20px
- 进入视口（threshold 0.1 = 10%）：`opacity: 1; translateY(0)` — 淡入 + 上滑归位
- `unobserve` 确保动画只播放一次
- Hero 区域始终可见（不挂 observer）

### 7.6 Escape 键关闭菜单
```js
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (mainNav && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }
});
```

---

## 八、交互动画速查表

| 动画 | 触发方式 | CSS/JS | 属性 | 时长 |
|------|----------|--------|------|------|
| 链接颜色 | hover | CSS | `color` | 0.15s |
| 链接下划线 | hover | CSS | `text-decoration` | — |
| 导航项背景高亮 | hover | CSS | `background + color` | 0.15s |
| 下拉菜单展开 | hover | CSS | `opacity + visibility + translateY(8→0)` | 0.3s |
| 下拉菜单收起 | 鼠标移出 | CSS | 同上反向 | 0.3s |
| 汉堡 → X 形变 | 点击 | CSS `.active` | `translateY + rotate + opacity` | 0.15s |
| 移动端导航侧滑 | 点击 | CSS `translateX` | `translateX(100%→0)` | 0.3s |
| 滚动阴影 | scroll > 10px | JS `style.boxShadow` | `box-shadow` | 浏览器默认 |
| 锚点平滑滚动 | 点击 | JS `scrollIntoView` | `behavior: smooth` | 浏览器默认 |
| Section 渐入 | IntersectionObserver | JS + CSS | `opacity + translateY(20→0)` | 0.6s |
| 卡片 hover 浮起 | hover | CSS | `translateY(-2px) + box-shadow` | 0.15s |
| 学院卡片 hover | hover | CSS | `translateY(-4px) + box-shadow` | 0.15s |
| 按钮 hover | hover | CSS | `background + border-color` | 0.15s |
| 社交图标 hover | hover | CSS | `background + border-color` | 0.15s |

---

## 九、CSS 层级与命名规范

### 9.1 命名风格
- **kebab-case**：所有类名用小写 + 连字符
- **语义化前缀**：`nav-`、`event-`、`school-`、`news-`、`footer-` 等
- **BEM 变体**：`hero-content` / `hero-bg` / `hero-overlay`（Block-Element 模式）

### 9.2 CSS 组织
- CSS Variables 全在最顶端 `:root`
- Reset 紧跟其后
- 全局组件（container / section / btn / placeholder-img）在 Reset 之后
- 页面块按 HTML 出现顺序排列（Top Bar → Nav → Hero → News → Events → Schools → Research → Admission → Footer）
- 响应式 @media 统一放在文件末尾

### 9.3 特异性控制
- 不超过 2 级选择器（如 `.news-feature h3`）
- 嵌套最多一层（如 `.dropdown-col ul a`）
- hover 用 `:hover` 伪类，不做 `.is-hovered` 类切换
- 移动端用 `.active` 类管理展开/收起状态

---

## 十、可复用的设计模式总结

| 模式 | 结构 | 适用于 |
|------|------|--------|
| 双层导航 | Top Bar (普通流) + Main Nav (sticky) | 有二级辅助链接的网站 |
| 下拉多栏 | `.dropdown > .dropdown-inner > .dropdown-col` | 内容分组的下拉菜单 |
| 卡片网格 | `display: grid; grid-template-columns: repeat(n, 1fr)` | 学院/事件/产品展示 |
| 左右分栏 | `grid-template-columns: 1.5fr 1fr` | 大图+侧边栏、文字+图片 |
| 交替背景 | 白色 ↔ 浅灰 section 轮换 | 长页面视觉节奏 |
| 卡片 hover | `translateY(-2/4px) + box-shadow 增强` | 可点击卡片 |
| 页面渐入 | IntersectionObserver + opacity/translateY | 长页面滚动体验 |
| 汉堡菜单 | 三线 `span` + `.active` 变形 | 移动端导航 |
| 占位图 | 渐变色 `div` + 多级 min-height | 开发阶段占位 |
| 统计数字 | 大号红色 800 字重数字 + 小字灰标签 | 数据展示 |

---

*文档版本：v1.0 · 分析日期：2026-05-12*
