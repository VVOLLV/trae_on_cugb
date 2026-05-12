# 斯坦福大学官网复刻计划

## 一、项目概览

复刻斯坦福大学官网首页 (stanford.edu)，使用纯 HTML/CSS/JS 实现，单页应用。

### 设计参考
- 主色：Cardinal Red `#8C1515`
- 辅色：深灰 `#2E2D29`、浅灰 `#F4F4F4`
- 字体：系统字体栈（近似 Source Sans Pro / Stanford's fonts）
- 风格：学术、简洁、大气、响应式

---

## 二、技术选型

- HTML5 语义化标签
- CSS3（Grid + Flexbox + 媒体查询响应式）
- 原生 JavaScript（导航交互、轮播等）

---

## 三、文件结构

```
stanford-replica/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式
├── js/
│   └── main.js         # 交互脚本
└── assets/             # 图片占位目录
```

---

## 四、页面结构（从上到下）

### 4.1 顶栏 (Top Bar)
- Stanford 大学 Logo
- 搜索按钮
- 二级导航：News / Events / Academics 等

### 4.2 主导航 (Main Nav)
- 导航项：Academics / Admission / Research / Campus Life / About
- 每个导航项有下拉菜单（悬停展开）
- 移动端汉堡菜单

### 4.3 英雄区 (Hero Section)
- 全宽大图背景（placeholder + 渐变遮罩）
- 主标题：A purposeful university
- 副标题说明文字
- CTA 按钮

### 4.5 新闻区块 (News & Stories)
- 左侧大卡片（头图 + 标题 + 摘要）
- 右侧小卡片列表（标题 + 日期）
- "More news" 链接

### 4.6 事件区块 (Upcoming Events)
- 事件卡片网格（日期、标题、地点）
- "More events" 链接

### 4.7 学术区块 (Academics)
- 7 个学院的网格展示
- 每个学院：图标/图片 + 名称 + 简介

### 4.8 研究区块 (Research & Impact)
- 左侧大图文卡片
- 右侧统计数字展示

### 4.9 录取区块 (Admission)
- 全宽背景
- 左文右图布局

### 4.10 页脚 (Footer)
- 多列链接
- 社交媒体图标
- 版权信息

---

## 五、实施步骤

### Phase 1：项目骨架搭建
- [ ] 创建目录结构
- [ ] 搭建 HTML 骨架（所有语义化模块占位）
- [ ] 创建 CSS 文件并定义全局变量（颜色、字体、间距）
- [ ] 创建 JS 文件并挂载

### Phase 2：导航系统
- [ ] Top Bar 样式实现
- [ ] Main Nav 样式 + 下拉菜单
- [ ] 移动端汉堡菜单逻辑

### Phase 3：核心区块
- [ ] Hero Section 实现
- [ ] News & Stories 区块
- [ ] Upcoming Events 区块
- [ ] Academics 学院网格
- [ ] Research & Impact 区块
- [ ] Admission 区块

### Phase 4：页脚 + 收尾
- [ ] Footer 多列链接
- [ ] 响应式调试（平板 + 手机）
- [ ] 页面滚动动画与交互细节

---

## 六、验收标准

- [ ] 桌面端视觉与斯坦福官网高度相似
- [ ] 所有导航悬停/下拉交互正常
- [ ] 移动端汉堡菜单可用
- [ ] 平板（768px）布局不塌陷
- [ ] 手机（480px）布局可用
- [ ] 页面无控制台错误
- [ ] 可直接双击 index.html 打开浏览
