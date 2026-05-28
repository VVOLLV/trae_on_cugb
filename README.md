# TRAE on Campus @ 中国地质大学（北京）

> 🌟 **网站已上线**: [https://VVOLLV.github.io/trae_cugb/](https://VVOLLV.github.io/trae_cugb/)

TRAE on Campus AI Coding Meetup 活动回顾网站

---

## ⚠️ 分支说明

| 分支 | 说明 |
|------|------|
| **`final`** | 🎉 **最终发布分支** - 网站正式版本，稳定可用 |
| `refactor/i18n-nav-cleanup` | 功能开发分支 |

> **推荐**: 如需部署，请使用 `final` 分支。

---

## 📁 项目结构

```
trae_cugb/
|-- for_trae/                      # TRAE 官网风格网站（主站）⭐
|   |-- index.html                  # 主页面
|   |-- assets/
|       |-- css/                    # 样式文件（模块化设计）
|       |   |-- variables.css       # CSS 变量（颜色、字体、间距）
|       |   |-- base.css            # 基础样式与全局重置
|       |   |-- animations.css      # 动画关键帧定义
|       |   |-- navigation.css      # 导航栏
|       |   |-- hero.css           # 首屏区域样式
|       |   |-- timeline.css        # 时间线组件样式
|       |   |-- phase.css           # 阶段标题样式
|       |   |-- components.css      # 通用卡片组件
|       |   |-- table.css           # 活动流程表格样式
|       |   |-- reflection.css      # 回顾与反思区域
|       |   |-- reveal.css          # Footer 揭开效果
|       |   |-- about.css           # 关于区域与页脚样式
|       |   |-- icons.css           # 图标按钮样式
|       |   |-- swimlane.css        # 泳道图
|       |   |-- responsive.css      # 响应式适配
|       |-- js/                     # JavaScript 脚本
|           |-- reveal.js            # Footer 揭开效果
|           |-- main.js             # 导航交互
|           |-- counter.js          # 数字滚动动画
|           |-- scroll.js           # 滚动动画
|           |-- theme.js            # 深色/浅色主题切换
|           |-- i18n.js             # 中英文国际化支持
|
|-- uploads/                        # 静态资源（本地存储）
|-- PLANNING.md                     # 项目规划文档
|-- TRAE_on_Campus_CUGB.md         # 活动需求文档
|-- .gitignore                      # Git 忽略规则
|-- README.md                       # 项目说明文件
```

---

## ✨ 功能特性

### 主要功能

| 功能 | 说明 |
|------|------|
| 🌐 **双语支持** | 简体中文 / English 一键切换 |
| 🌓 **主题切换** | 深色模式（默认）/ 浅色模式 |
| 📱 **响应式布局** | 适配桌面端、平板、手机（4级断点） |
| 🎬 **滚动动画** | Intersection Observer 实现元素渐入效果 |
| 🔢 **数字滚动** | 关键数据展示数字递增动画 |
| 🔍 **泳道图** | 麦肯锡咨询风格 · 角色×时间分工协作 |
| 📋 **时间线** | 申请→策划→落地→复盘完整历程 |
| 📸 **精彩瞬间** | 活动精选照片展示 |
| 🔄 **Footer 揭开** | 页面滚动揭开底部信息 |

### 性能优化

| 优化项 | 说明 |
|--------|------|
| RAF 动画 | requestAnimationFrame 丝滑滚动 |
| GPU 加速 | transform: translateZ(0) |
| 懒加载 | 图片 loading="lazy" |
| 触摸惯性 | 移动端滑动带惯性效果 |
| 节流防抖 | scroll 事件优化 |

---

## 🚀 快速开始

### 本地预览

```bash
# 进入 for_trae 目录
cd for_trae

# Python 3 启动服务器
python -m http.server 8080

# 或使用 npx
npx serve

# 浏览器访问
http://localhost:8080/
```

---

## 🌐 部署

### GitHub Pages

1. 进入仓库 **Settings** → **Pages**
2. Source 选择 `final` 分支
3. 保存后访问：`https://你的用户名.github.io/trae_cugb/`

---

## 🛠️ 技术栈

- **HTML5** + **CSS3** + **Vanilla JavaScript**
- CSS Variables（主题系统）
- 模块化 CSS（16个样式文件）
- 无框架依赖，纯原生实现
- 浏览器需支持 CSS 变量和 Intersection Observer API

---

## 📝 内容模块

### 页面结构

1. **Hero** - 活动概览与核心数据
2. **分工协作** - 泳道图展示 TRAE运营 × 校园大使
3. **时间线** - 四阶段完整历程
   - 申请期
   - 策划期（Workshop → Meetup 转型）
   - 落地期（5月10日活动当天）
   - 复盘期（经验沉淀）
4. **精彩瞬间** - 活动精选照片
5. **Footer** - 活动信息与版权

---

## 📄 许可证

MIT License

---

*Built with ❤️ for TRAE on Campus @ CUGB*
