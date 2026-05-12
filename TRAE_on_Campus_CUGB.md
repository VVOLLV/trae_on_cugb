# TRAE on Campus @ 中国地质大学（北京） AI Coding Meetup

## 基本信息

- **主办方**：TRAE
- **学校**：中国地质大学（北京）
- **活动类型**：AI Coding Meetup
- **活动日期**：2026年5月10日 14:00-16:00（实际入场 13:30，结束 16:30）
- **地点**：北京嘉里中心 · 星巴克甄选
- **规模**：约 50 人
- **关联品牌**：字节跳动 TRAE 
- **角色**：TRAE 校园大使

## 活动 Run of Show

| 时间          | 环节            | 内容                                                                                          |
| ----------- | ------------- | ------------------------------------------------------------------------------------------- |
| 13:30-14:00 | 签到 & 准备       | 签到、连接 WiFi、安装 TRAE IDE、自由交流                                                                 |
| 14:00-14:10 | 开场            | 活动介绍：TRAE on Campus AI Coding Meetup，TRAE chatbot 简介                                        |
| 14:10-14:40 | 主题分享          | AI Coding 主题演讲："Ship faster with TRAE"，TRAE 功能演示                                            |
| 14:40-15:00 | Q\&A          | 两轮观众问答，围绕 TRAE 使用和 AI Coding                                                                |
| 15:00-15:30 | Workshop      | TRAE IDE 动手实践（5-10 分钟一步）：STEP1 环境配置 → STEP2 TRAE 体验 → STEP3 Coding Battle → STEP4 GitHub 提交 |
| 15:30-15:50 | Q\&A + Plan B | 补充答疑，TRAE SOLO 介绍，Coffee Break 准备                                                           |
| 15:50-16:10 | Coffee Break  | 自由交流、茶歇                                                                                     |
| 16:10-16:30 | 收尾            | 活动总结、合影、后续安排                                                                                |

### Plan B（备用方案）

- HDMI 连接备用、场地/座位调整
- Q\&A 环节弹性延长或缩短
- Workshop 环节根据参与者水平灵活调整难度

## 活动关键元素

- **核心主题**："Ship faster with TRAE" — AI 赋能编程效率
- **动手环节**：TRAE IDE 现场安装 + Coding Battle + GitHub 提交
- **品牌露出**：TRAE Chatbot、TRAE IDE、TRAE SOLO
- **物料**：主持手卡、线上宣传物料（3 张海报）、合作邀请函、PPT 模版

## 交付目标

构建一个静态单页叙事回顾网站，部署到 GitHub Pages 供远程访问。

- **设计方向**：TRAE 官方风格（纯黑 + TRAE 绿 + 暖米色）
- **技术栈**：纯 HTML/CSS/JS + CountUp.js CDN
- **适配**：手机（320px） → 桌面（1920px）全响应式
- **预留**：CSS 变量隔离、JS 模块解耦、vendor 目录、组件目录、GitHub Actions

## 物料清单

| 物料           | 文件名                                    | 用途          |
| ------------ | -------------------------------------- | ----------- |
| 主持手卡         | `TRAE_主持手卡.pdf`                        | 现场主持流程脚本    |
| 合作邀请函        | `TRAE+on+Campus+@中国地质大学+合作邀请函+(1).pdf` | 校方/合作方邀请    |
| 宣传海报 01      | `线上宣传物料01.png`                         | 线上推广        |
| 宣传海报 02      | `线上宣传物料02.png`                         | 线上推广        |
| 宣传海报 03      | `线上宣传物料03.png`                         | 线上推广        |
| TRAE 模版      | `TRAE 模版.pptx`                         | 现场演示 PPT 模版 |
| PPT 模版       | `PPT模板.pptx`                           | 品牌标准模版      |
| TRAE SOLO 介绍 | `TRAE SOLO国内版介绍.pptx`                  | 产品介绍资料      |

## 会议记录

### 2026-05-11 · 项目启动

- 确认规划文档 PLANNING.md 内容
- 明确部署目标为 GitHub Pages（链接直接可访问）
- 明确需要二次开发预留（可能接入特殊技术架构）
- 明确需要完整的 PC + 手机端响应式适配
- 更新 PLANNING.md → v1.1
  - 新增 Section 10：响应式适配清单（断点策略、布局对照、字体缩放、触摸优化）
  - 新增 Section 11：二次开发预留（模块解耦、CSS 隔离、内容分离、升级路径、目录预留）
  - 强化 Section 5：部署方案确定为 GitHub Pages，新增 CDN 依赖备注
  - 增强 Section 9：验收标准新增 GitHub Pages 链接可访问性检查

### 2026-05-11 · 配色方案更新

- 基于 TRAE 官网截图更新配色方案
- 主强调色从琥珀金 `#F5A623` 更新为 TRAE 绿 `#22C55E`
- 背景色从深夜黑 `#0D0F14` 更新为纯黑 `#000000`
- 整体风格调整为 TRAE 官方风格
- 更新 PLANNING.md → v1.3
- 更新网站 CSS 变量和样式文件

### 2026-05-11 · 内容更新

- 更新 Hero 区域核心数字：「4个月筹备」→「50天筹备」
- 更新 PLANNING.md 文档中的对应数据
- 更新 TRAE\_on\_Campus\_CUGB.md 会议记录

### 2026-05-11 · 导航栏功能扩展

- 新增主题切换按钮（深色/浅色模式）
- 新增中英文切换功能
- CSS 文件模块化拆分（11个文件）
- 实现 localStorage 持久化用户偏好
- 更新 PLANNING.md → v1.5
- 新增文件：
  - `assets/css/icons.css` - 图标按钮样式
  - `assets/js/theme.js` - 主题切换
  - `assets/js/i18n.js` - 中英文国际化
- 新增 `data-i18n` 属性支持页面文本翻译

