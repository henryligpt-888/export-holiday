# 🌍 国际节假日图鉴（外贸版）

<div align="center">

**专为外贸从业者打造的全球节假日智能指南**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

[在线体验](https://ai.studio/apps/drive/1xtj18pLwAD3AF4yO9MgMD4Qa-cj2CNq-) · [快速开始](#快速开始) · [功能特性](#功能特性)

</div>

---

## 💡 项目简介

在外贸业务中，了解客户所在国家的节假日至关重要。这个工具帮助你：

- 📅 **跟踪全球节假日** - 覆盖北美、欧洲、亚洲等主要外贸市场
- 💼 **获取业务建议** - 每个节日都有专门的外贸操作指南
- ✉️ **客户关系维护** - 提供中英文祝福语模板
- 🚫 **避免商务失礼** - 明确标识是否适合发送开发信
- 🔍 **智能筛选** - 按年份、地区、类型快速查找

---

## ✨ 功能特性

### 1. 全面的节假日信息

每个节假日包含：
- 📆 日期、国家、假期时长
- 🌏 中英文名称
- 📊 对外贸业务的具体影响分析
- 💡 可执行的外贸操作建议
- 🎉 中英文祝福语模板

### 2. 强大的筛选功能

- **年份筛选**: 2024 - 2026
- **地区筛选**: 北美洲、欧洲、亚洲、南美洲、非洲、大洋洲
- **类型筛选**: 公共假日、宗教节日、商业敏感日期

### 3. 外贸专业视角

专门针对外贸场景提供：
- 订单确认时间建议
- 物流发货规划提醒
- 客户沟通时机指导
- 文化敏感性提示

---

## 🚀 快速开始

### 前置要求

- **Node.js** 20.0 或更高版本
- **npm**, **yarn** 或 **pnpm** 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd international-holiday-guide-(foreign-trade-edition)
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境变量**（可选）
   ```bash
   cp .env.example .env.local
   # 编辑 .env.local，填入你的 Gemini API Key（如需 AI 功能）
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **访问应用**

   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

---

## 📦 可用脚本

```bash
npm run dev      # 启动开发服务器（端口 3000）
npm run build    # 构建生产版本
npm run start    # 启动生产服务器
npm run lint     # 运行 ESLint 代码检查
```

---

## 🗂️ 项目结构

```
src/
├── app/              # Next.js 应用目录
│   ├── layout.tsx    # 根布局
│   └── page.tsx      # 主页面
├── components/       # React 组件
│   ├── Header.tsx    # 页面头部
│   ├── Sidebar.tsx   # 筛选侧边栏
│   └── HolidayCard.tsx  # 节假日卡片
├── data/             # 数据文件
│   └── holidays.ts   # 节假日数据源
└── types/            # TypeScript 类型定义
    └── index.ts
```

---

## 📚 使用示例

### 场景 1: 圣诞节前准备

> **目标**: 了解欧美圣诞节对外贸业务的影响

1. 筛选"2024年"+"欧洲"+"公共假日"
2. 找到"圣诞节"（12月25日）
3. 查看业务影响和建议：
   - ✅ 提前2-3周确认订单和发货计划
   - ✅ 避免在节前一周发送新的开发信
   - ✅ 发送节日贺卡维护客情

### 场景 2: 中东客户斋月沟通

> **目标**: 合理安排与中东客户的会议时间

1. 筛选"2024年"+"亚洲"+"宗教节日"
2. 找到"斋月"（约3月10日开始）
3. 注意事项：
   - 🚫 避免在白天邀请客户共进午餐
   - ✅ 会议安排在上午较好
   - ⚠️ 物流清关效率可能会降低

---

## 🌟 典型节假日覆盖

- 🎄 **圣诞节** (Christmas) - 欧美
- 🧧 **春节** (Chinese New Year) - 中国/东南亚
- 🦃 **感恩节** (Thanksgiving) - 美国
- 🌙 **斋月** (Ramadan) - 中东/穆斯林国家
- 🎆 **独立日** (Independence Day) - 美国
- 🌍 **劳动节** (Labor Day) - 全球多国
- 🎊 **元旦** (New Year's Day) - 全球

---

## 🛠️ 技术栈

- **框架**: [Next.js 14](https://nextjs.org/) + React 18
- **语言**: [TypeScript 5](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **图标**: [Lucide React](https://lucide.dev/)
- **部署**: 可部署至 Vercel、Netlify 等平台

---

## 📖 开发文档

查看 [CLAUDE.md](./CLAUDE.md) 获取详细的开发文档，包括：
- 完整的项目架构说明
- 数据结构和类型定义
- 添加新节假日的指南
- 外贸建议编写规范
- 故障排查指南

---

## 🤝 贡献指南

欢迎贡献新的节假日数据或功能！

### 添加新节假日

编辑 `src/data/holidays.ts`，参考现有格式添加：

```typescript
{
  id: 'unique-id',
  date: '2025-XX-XX',
  country: '国家名称',
  chineseName: '节日中文名',
  englishName: 'Holiday English Name',
  region: '所属地区',
  type: '节日类型',
  impact: '对外贸的影响...',
  suggestions: ['建议1', '建议2'],
  greetingZh: '中文祝福语',
  greetingEn: 'English Greeting',
  avoidColdEmail: true/false
}
```

---

## 📄 许可证

本项目仅供学习和个人使用。

---

## 🔗 相关链接

- [在 AI Studio 中查看](https://ai.studio/apps/drive/1xtj18pLwAD3AF4yO9MgMD4Qa-cj2CNq-)
- [Next.js 官方文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

---

<div align="center">

**为全球贸易赋能 | Empowering Global Trade**

Made with ❤️ for foreign trade professionals

</div>
