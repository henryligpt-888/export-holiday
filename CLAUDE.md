# CLAUDE.md - 国际节假日图鉴（外贸版）

## 项目概述

这是一个专为外贸从业者设计的 Next.js Web 应用，帮助他们跟踪全球主要节假日及其对外贸业务的影响。

### 核心价值
- **业务洞察**：每个节假日都包含对外贸业务的具体影响分析
- **行动建议**：提供可执行的外贸操作建议（如提前备货、避免发送开发信等）
- **文化沟通**：提供中英文祝福语模板，便于维护客户关系
- **智能筛选**：按年份、地区、类型快速查找相关节假日

---

## 项目结构

```
international-holiday-guide-(foreign-trade-edition)/
├── CLAUDE.md                    # 本文件 - Claude 协作指南
├── README.md                    # 用户使用文档
├── .env.local                   # 环境变量 (Gemini API Key)
├── .gitignore                   # Git 忽略配置
├── package.json                 # 项目依赖
├── tsconfig.json                # TypeScript 配置
├── tailwind.config.ts           # Tailwind CSS 配置
├── vite.config.ts               # Vite 构建配置
├── postcss.config.js            # PostCSS 配置
├── index.html                   # HTML 入口
├── index.tsx                    # React 入口
├── metadata.json                # AI Studio 元数据
├── .claude/                     # Claude 项目配置
└── src/
    ├── app/
    │   ├── layout.tsx           # Next.js 布局组件
    │   └── page.tsx             # 主页面 - 节假日列表和筛选逻辑
    ├── components/
    │   ├── Header.tsx           # 页面头部
    │   ├── Sidebar.tsx          # 左侧筛选面板
    │   ├── HolidayCard.tsx      # 节假日卡片组件
    │   ├── SearchBar.tsx        # 🆕 搜索框组件
    │   ├── FavoriteButton.tsx   # 🆕 收藏按钮
    │   ├── ExportMenu.tsx       # 🆕 导出菜单
    │   ├── ViewSwitcher.tsx     # 🆕 视图切换器
    │   └── Calendar/            # 🆕 日历视图组件
    │       ├── index.tsx        #     日历容器
    │       ├── MonthView.tsx    #     月历视图
    │       ├── YearView.tsx     #     年历视图
    │       ├── CalendarDay.tsx  #     日期格子
    │       └── CalendarHeader.tsx #   日历头部
    ├── hooks/
    │   ├── useHolidaySearch.ts  # 🆕 搜索 Hook
    │   └── useFavorites.ts      # 🆕 收藏 Hook
    ├── utils/
    │   ├── search.ts            # 🆕 搜索工具
    │   ├── storage.ts           # 🆕 本地存储工具
    │   ├── calendar.ts          # 🆕 日历工具
    │   └── export/              # 🆕 导出工具
    │       ├── pdf.ts           #     PDF 导出
    │       ├── excel.ts         #     Excel 导出
    │       └── ical.ts          #     iCal 导出
    ├── data/
    │   └── holidays.ts          # 节假日数据源（核心数据）
    └── types/
        └── index.ts             # TypeScript 类型定义
```

---

## 核心数据结构

### Holiday 类型 (src/types/index.ts)

```typescript
type Holiday = {
  id: string;
  date: string;              // 格式: YYYY-MM-DD
  year: string;
  country: string;           // 主要庆祝国家
  chineseName: string;       // 中文名称
  englishName: string;       // 英文名称
  region: Region;            // 所属地区
  type: HolidayType;         // 节日类型
  duration: string;          // 假期时长描述
  impact: string;            // 对外贸业务的影响
  suggestions: string[];     // 外贸从业者的行动建议
  greetingZh?: string;       // 中文祝福语
  greetingEn?: string;       // 英文祝福语
  avoidColdEmail: boolean;   // 是否应避免发送冷邮件
};
```

### 枚举类型

- **Region**: '北美洲' | '欧洲' | '亚洲' | '南美洲' | '大洋洲' | '非洲'
- **HolidayType**: '公共假日' | '宗教节日' | '商业敏感日期'

---

## 技术栈

### 前端框架
- **Next.js 14.2.0** - React 框架，支持 SSR/SSG
- **React 18** - UI 库
- **TypeScript 5** - 类型安全

### 样式与 UI
- **Tailwind CSS 3.4** - 实用优先的 CSS 框架
- **Lucide React 0.370** - 图标库
- **clsx + tailwind-merge** - 动态类名工具

### 构建工具
- **Next.js 自带构建系统**
- **PostCSS** - CSS 处理
- **ESLint** - 代码规范

### 运行环境
- **Node.js** (推荐 v20+)
- **npm** 或 **yarn** 或 **pnpm**

---

## 开发指南

### 本地运行

1. **安装依赖**
   ```bash
   npm install
   ```

2. **配置环境变量**
   - 在 `.env.local` 中设置 `GEMINI_API_KEY`（如果需要 AI 功能）

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问应用**
   - 打开浏览器访问 `http://localhost:3000`

### 构建与部署

```bash
npm run build   # 生产构建
npm run start   # 启动生产服务器
```

---

## 主要功能实现

### 1. 节假日展示 (src/app/page.tsx)
- 使用 `useState` 管理筛选状态
- 使用 `useMemo` 优化节假日过滤性能
- 按日期升序排序展示节假日

### 2. 筛选功能 (Sidebar 组件)
- **年份筛选**: 2024, 2025, 2026
- **地区筛选**: 六大洲
- **类型筛选**: 公共假日、宗教节日、商业敏感日期
- 实时更新筛选结果数量

### 3. 节假日卡片 (HolidayCard 组件)
- 显示日期、国家、节日名称
- 展示假期时长和业务影响
- 提供外贸建议清单
- 显示中英文祝福语
- 标识是否适合发送开发信

### 4. 响应式设计
- 移动端友好
- Flexbox 和 Grid 布局
- Tailwind 响应式断点 (sm, md, lg)

---

## 数据维护指南

### 添加新节假日

编辑 `src/data/holidays.ts`，在 `holidays` 数组中添加新对象：

```typescript
{
  id: '8',  // 唯一 ID
  date: '2025-03-20',
  year: '2025',
  country: '印度',
  chineseName: '洒红节',
  englishName: 'Holi',
  region: '亚洲',
  type: '宗教节日',
  duration: '1-2天',
  impact: '印度工厂可能短暂停工，物流可能受影响。',
  suggestions: [
    '提前确认供应商放假安排',
    '避免节日期间催促订单'
  ],
  greetingZh: '祝您洒红节快乐，色彩缤纷！',
  greetingEn: 'Happy Holi! May your life be filled with colors of joy!',
  avoidColdEmail: true
}
```

### 外贸建议编写原则

1. **具体可执行** - 避免泛泛而谈，给出明确的时间节点和行动
2. **业务相关** - 聚焦于订单、物流、客户沟通等外贸核心场景
3. **文化敏感** - 尊重不同国家和宗教的文化习俗
4. **简洁明了** - 每条建议控制在 20 字以内

### 示例：好的建议 vs 坏的建议

**✅ 好的建议**
- "提前2-3周确认订单和发货计划"
- "避免在节前一周发送新的开发信"
- "节后复工可能延迟，预留生产缓冲期"

**❌ 坏的建议**
- "注意这个节日很重要"（太泛泛）
- "好好规划一下"（不具体）
- "做好准备工作"（缺乏可执行性）

---

## 设计规范

### 颜色系统
- **主色**: Slate 系列（专业、商务）
- **强调色**: Primary 系列（如蓝色/绿色，根据 Tailwind 配置）
- **状态色**:
  - 成功/可用: Green
  - 警告/避免: Amber/Red
  - 信息: Blue

### 组件设计原则
- **卡片式布局** - 信息分组清晰
- **边框和阴影** - 层次感明显
- **间距统一** - 使用 Tailwind spacing scale (4, 6, 8, 12, 16...)
- **图标辅助** - 使用 Lucide icons 提升视觉识别

---

## 功能规划与开发路线图

### 功能优先级矩阵

按 **影响力** vs **实现难度** 分类：

```
高影响 + 低难度（立即实施）：
✅ 搜索功能
✅ 收藏功能
✅ 数据增强（添加更多节假日）

高影响 + 中等难度（短期重点）：
⭐ 日历视图
⭐ 导出功能（PDF/Excel）
⭐ iCal 订阅

高影响 + 高难度（中长期规划）：
🚀 智能提醒系统
🚀 客户管理 CRM
🚀 AI 智能助手

低优先级（可选）：
- 社区功能（初期用户少）
- 多语言界面（目标用户主要是中文外贸人）
```

---

## 短期功能规划（v1.1 - v1.3）

### 1. 🔍 搜索功能 ⭐ 高优先级

#### 功能描述
全局搜索框，支持按节日名称（中/英文）、国家名称快速查找节假日。

#### 技术实现方案

**依赖安装**：
```bash
npm install fuse.js
```

**文件结构**：
```
src/
├── utils/
│   └── search.ts              # 搜索工具函数
├── components/
│   └── SearchBar.tsx          # 搜索框组件
└── hooks/
    └── useHolidaySearch.ts    # 搜索逻辑 Hook
```

**核心代码示例**：
```typescript
// src/utils/search.ts
import Fuse from 'fuse.js';
import { Holiday } from '@/types';

export function createSearchEngine(holidays: Holiday[]) {
  return new Fuse(holidays, {
    keys: [
      { name: 'chineseName', weight: 2 },
      { name: 'englishName', weight: 2 },
      { name: 'country', weight: 1.5 },
      { name: 'impact', weight: 0.5 }
    ],
    threshold: 0.3,
    includeScore: true
  });
}

// src/hooks/useHolidaySearch.ts
import { useState, useMemo } from 'react';
import { createSearchEngine } from '@/utils/search';

export function useHolidaySearch(holidays: Holiday[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const fuse = useMemo(() => createSearchEngine(holidays), [holidays]);

  const results = useMemo(() => {
    if (!searchQuery.trim()) return holidays;
    return fuse.search(searchQuery).map(result => result.item);
  }, [searchQuery, fuse, holidays]);

  return { searchQuery, setSearchQuery, results };
}
```

**UI/UX 设计**：
- 位置：Header 组件右侧
- 样式：带放大镜图标的输入框
- 交互：实时搜索（300ms 防抖）
- 特性：
  - 显示搜索结果数量
  - 支持清空按钮
  - 保存最近 5 条搜索历史（localStorage）
  - 搜索时 URL 同步 (?search=圣诞节)

**开发步骤**：
1. 安装 `fuse.js` 依赖
2. 创建 `src/utils/search.ts`
3. 创建 `src/hooks/useHolidaySearch.ts`
4. 创建 `src/components/SearchBar.tsx`
5. 在 `Header.tsx` 中集成搜索框
6. 在 `page.tsx` 中使用搜索 Hook
7. 添加 URL 同步逻辑

---

### 2. 📅 日历视图 ⭐ 高优先级

#### 功能描述
提供月历和年历两种可视化视图，直观展示节假日分布。

#### 技术实现方案

**依赖安装**：
```bash
npm install date-fns
```

**文件结构**：
```
src/
├── components/
│   ├── Calendar/
│   │   ├── index.tsx          # 日历容器组件
│   │   ├── MonthView.tsx      # 月历视图
│   │   ├── YearView.tsx       # 年历视图
│   │   ├── CalendarDay.tsx    # 单个日期格子
│   │   └── CalendarHeader.tsx # 日历头部（切换月份）
│   └── ViewSwitcher.tsx       # 视图切换按钮
└── utils/
    └── calendar.ts            # 日历工具函数
```

**核心代码示例**：
```typescript
// src/utils/calendar.ts
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from 'date-fns';
import { Holiday } from '@/types';

export function getMonthDays(year: number, month: number) {
  const start = startOfMonth(new Date(year, month));
  const end = endOfMonth(new Date(year, month));
  return eachDayOfInterval({ start, end });
}

export function getHolidaysForDate(date: Date, holidays: Holiday[]) {
  const dateStr = format(date, 'yyyy-MM-dd');
  return holidays.filter(h => h.date === dateStr);
}

// src/components/Calendar/MonthView.tsx
export default function MonthView({
  year,
  month,
  holidays
}: {
  year: number;
  month: number;
  holidays: Holiday[];
}) {
  const days = getMonthDays(year, month);

  return (
    <div className="grid grid-cols-7 gap-2">
      {/* 星期标题 */}
      {['日', '一', '二', '三', '四', '五', '六'].map(day => (
        <div key={day} className="text-center font-medium text-slate-600">
          {day}
        </div>
      ))}

      {/* 日期格子 */}
      {days.map(date => {
        const dayHolidays = getHolidaysForDate(date, holidays);
        return (
          <CalendarDay
            key={date.toString()}
            date={date}
            holidays={dayHolidays}
          />
        );
      })}
    </div>
  );
}
```

**UI/UX 设计**：
- **月历视图**：
  - 7x5 或 7x6 网格布局
  - 每个日期格子：显示日期数字 + 小圆点（有节假日时）
  - 悬停效果：显示节日名称 Tooltip
  - 点击效果：展开节日详情卡片

- **年历视图**：
  - 3x4 网格（12 个月）
  - 每月缩略日历
  - 节假日用彩色标记

- **视图切换**：
  - 顶部三个按钮：[列表] [月历] [年历]
  - 图标 + 文字

**颜色编码**：
```typescript
const holidayTypeColors = {
  '公共假日': 'bg-blue-500',
  '宗教节日': 'bg-purple-500',
  '商业敏感日期': 'bg-amber-500'
};
```

**开发步骤**：
1. 安装 `date-fns` 依赖
2. 创建 `src/utils/calendar.ts`
3. 创建日历组件文件夹
4. 实现 `MonthView` 组件
5. 实现 `YearView` 组件
6. 实现 `ViewSwitcher` 组件
7. 在 `page.tsx` 中集成视图切换逻辑

---

### 3. 📤 导出功能 ⭐ 高优先级

#### 功能描述
支持将节假日数据导出为 PDF、Excel、iCal 三种格式。

#### 技术实现方案

**依赖安装**：
```bash
npm install jspdf jspdf-autotable xlsx ics
npm install --save-dev @types/jspdf @types/xlsx
```

**文件结构**：
```
src/
├── utils/
│   └── export/
│       ├── pdf.ts             # PDF 导出
│       ├── excel.ts           # Excel 导出
│       └── ical.ts            # iCal 导出
└── components/
    └── ExportMenu.tsx         # 导出下拉菜单
```

**核心代码示例**：

**PDF 导出**：
```typescript
// src/utils/export/pdf.ts
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Holiday } from '@/types';

export function exportToPDF(holidays: Holiday[], filename = 'holidays.pdf') {
  const doc = new jsPDF();

  // 添加中文字体支持（可选）
  doc.setFont('helvetica');

  // 标题
  doc.setFontSize(18);
  doc.text('国际节假日图鉴（外贸版）', 14, 20);

  // 生成时间
  doc.setFontSize(10);
  doc.text(`生成时间: ${new Date().toLocaleDateString('zh-CN')}`, 14, 28);

  // 表格数据
  const tableData = holidays.map(h => [
    h.date,
    h.chineseName,
    h.country,
    h.region,
    h.type,
    h.duration,
    h.avoidColdEmail ? '是' : '否'
  ]);

  autoTable(doc, {
    head: [['日期', '节日', '国家', '地区', '类型', '时长', '避免开发信']],
    body: tableData,
    startY: 35,
    styles: { fontSize: 9 },
    headStyles: { fillColor: [71, 85, 105] }
  });

  doc.save(filename);
}
```

**Excel 导出**：
```typescript
// src/utils/export/excel.ts
import * as XLSX from 'xlsx';
import { Holiday } from '@/types';

export function exportToExcel(holidays: Holiday[], filename = 'holidays.xlsx') {
  const worksheetData = [
    // 表头
    ['日期', '中文名称', '英文名称', '国家', '地区', '类型', '时长', '影响', '建议', '避免开发信'],
    // 数据行
    ...holidays.map(h => [
      h.date,
      h.chineseName,
      h.englishName,
      h.country,
      h.region,
      h.type,
      h.duration,
      h.impact,
      h.suggestions.join('; '),
      h.avoidColdEmail ? '是' : '否'
    ])
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '节假日');

  XLSX.writeFile(workbook, filename);
}
```

**iCal 导出**：
```typescript
// src/utils/export/ical.ts
import { createEvents, EventAttributes } from 'ics';
import { Holiday } from '@/types';

export function exportToICal(holidays: Holiday[], filename = 'holidays.ics') {
  const events: EventAttributes[] = holidays.map(h => {
    const [year, month, day] = h.date.split('-').map(Number);

    return {
      start: [year, month, day],
      duration: { days: 1 },
      title: `${h.chineseName} (${h.englishName})`,
      description: `${h.impact}\n\n建议：\n${h.suggestions.join('\n')}`,
      location: h.country,
      status: 'CONFIRMED',
      categories: [h.type],
      alarms: [
        { action: 'display', trigger: { weeks: 2, before: true } }
      ]
    };
  });

  const { error, value } = createEvents(events);

  if (error) {
    console.error(error);
    return;
  }

  // 下载文件
  const blob = new Blob([value!], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
```

**UI 组件**：
```typescript
// src/components/ExportMenu.tsx
import { Download } from 'lucide-react';
import { exportToPDF, exportToExcel, exportToICal } from '@/utils/export';

export default function ExportMenu({ holidays }: { holidays: Holiday[] }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg">
        <Download size={20} />
        导出
      </button>

      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100">
        <button onClick={() => exportToPDF(holidays)} className="block w-full text-left px-4 py-2 hover:bg-slate-50">
          导出为 PDF
        </button>
        <button onClick={() => exportToExcel(holidays)} className="block w-full text-left px-4 py-2 hover:bg-slate-50">
          导出为 Excel
        </button>
        <button onClick={() => exportToICal(holidays)} className="block w-full text-left px-4 py-2 hover:bg-slate-50">
          导出为日历 (iCal)
        </button>
      </div>
    </div>
  );
}
```

**开发步骤**：
1. 安装导出相关依赖
2. 创建三个导出工具函数
3. 创建 `ExportMenu` 组件
4. 在 `Header` 或 `page.tsx` 中集成导出按钮
5. 测试各种导出格式

---

### 4. ⭐ 收藏功能

#### 功能描述
允许用户标记常用节假日，快速访问收藏列表。

#### 技术实现方案

**文件结构**：
```
src/
├── hooks/
│   └── useFavorites.ts        # 收藏逻辑 Hook
├── components/
│   └── FavoriteButton.tsx     # 收藏按钮
└── utils/
    └── storage.ts             # localStorage 工具
```

**核心代码示例**：
```typescript
// src/utils/storage.ts
export const storage = {
  getFavorites(): string[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('holiday_favorites');
    return data ? JSON.parse(data) : [];
  },

  setFavorites(ids: string[]) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('holiday_favorites', JSON.stringify(ids));
  },

  toggleFavorite(id: string) {
    const favorites = this.getFavorites();
    const newFavorites = favorites.includes(id)
      ? favorites.filter(fid => fid !== id)
      : [...favorites, id];
    this.setFavorites(newFavorites);
    return newFavorites;
  }
};

// src/hooks/useFavorites.ts
import { useState, useEffect } from 'react';
import { storage } from '@/utils/storage';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(storage.getFavorites());
  }, []);

  const toggleFavorite = (id: string) => {
    const newFavorites = storage.toggleFavorite(id);
    setFavorites(newFavorites);
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite };
}

// src/components/FavoriteButton.tsx
import { Heart } from 'lucide-react';

export default function FavoriteButton({
  holidayId,
  isFavorite,
  onToggle
}: {
  holidayId: string;
  isFavorite: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onToggle(holidayId)}
      className={`p-2 rounded-full transition-colors ${
        isFavorite
          ? 'bg-red-50 text-red-500'
          : 'bg-slate-50 text-slate-400 hover:text-red-500'
      }`}
      aria-label={isFavorite ? '取消收藏' : '收藏'}
    >
      <Heart
        size={20}
        fill={isFavorite ? 'currentColor' : 'none'}
      />
    </button>
  );
}
```

**UI/UX 设计**：
- 收藏按钮：每个 `HolidayCard` 右上角
- 收藏筛选：Sidebar 添加"仅显示收藏"开关
- 收藏页面（可选）：独立的 `/favorites` 路由

**开发步骤**：
1. 创建 `src/utils/storage.ts`
2. 创建 `src/hooks/useFavorites.ts`
3. 创建 `src/components/FavoriteButton.tsx`
4. 在 `HolidayCard.tsx` 中集成收藏按钮
5. 在 `Sidebar.tsx` 添加"仅显示收藏"筛选
6. 在 `page.tsx` 中集成收藏筛选逻辑

---

### 5. 📊 数据增强

#### 功能描述
扩充节假日数据库，从当前 7 个增加到 50+ 个节假日。

#### 数据收集来源
- 外贸常见目标国家：美国、英国、德国、法国、日本、韩国、印度、巴西、墨西哥等
- 重要节日类型：
  - 国家法定假日
  - 重要宗教节日（圣诞、复活节、开斋节等）
  - 商业节日（黑五、网一、双十一等）
  - 展会时间（广交会、CES、MWC 等）

#### 新增节假日示例

**日本节假日**：
```typescript
{
  id: '8',
  date: '2025-01-13',
  year: '2025',
  country: '日本',
  chineseName: '成人节',
  englishName: 'Coming of Age Day',
  region: '亚洲',
  type: '公共假日',
  duration: '1天',
  impact: '日本企业放假，订单确认和发货可能延迟。',
  suggestions: [
    '提前1周确认订单状态',
    '避免节日当天联系客户'
  ],
  greetingZh: '祝贺成人节，前程似锦！',
  greetingEn: 'Happy Coming of Age Day!',
  avoidColdEmail: true
}
```

**商业节日**：
```typescript
{
  id: '9',
  date: '2024-11-29',
  year: '2024',
  country: '美国/全球',
  chineseName: '黑色星期五',
  englishName: 'Black Friday',
  region: '北美洲',
  type: '商业敏感日期',
  duration: '1-3天',
  impact: '零售业销售旺季，物流高峰期，补货需求激增。',
  suggestions: [
    '提前2个月备货，尤其是零售类客户',
    '关注客户促销计划和补货需求',
    '物流时效可能延长，预留缓冲期'
  ],
  greetingZh: '祝您黑五大卖！',
  greetingEn: 'Wishing you a successful Black Friday!',
  avoidColdEmail: false // 适合跟进订单
}
```

#### 农历节日自动计算

对于春节、中秋节等农历节日，需要动态计算日期：

```typescript
// src/utils/lunar.ts (使用第三方库)
import { Lunar } from 'lunar-javascript';

export function getChineseNewYear(year: number): string {
  const lunar = Lunar.fromYmd(year, 1, 1);
  const solar = lunar.getSolar();
  return `${solar.getYear()}-${String(solar.getMonth()).padStart(2, '0')}-${String(solar.getDay()).padStart(2, '0')}`;
}
```

#### 开发步骤
1. 研究目标国家的主要节假日
2. 按优先级逐步添加数据到 `src/data/holidays.ts`
3. 确保每个节假日符合数据质量标准
4. 添加农历计算工具（如需要）
5. 更新文档说明覆盖的国家和节日

---

## 中期功能规划（v1.5 - v2.0）

### 6. 🔔 智能提醒系统

**技术要点**：
- 浏览器通知 API
- 后端定时任务（需要服务器）
- 邮件服务集成（Resend、SendGrid）

**数据结构**：
```typescript
type Reminder = {
  id: string;
  userId: string;
  holidayId: string;
  remindDaysBefore: number;  // 提前几天提醒
  enabled: boolean;
  channels: ('browser' | 'email' | 'wechat')[];
};
```

---

### 7. 👥 客户管理功能

**技术要点**：
- 需要后端数据库
- 客户信息 CRUD
- 客户-节假日自动关联

**数据结构**：
```typescript
type Customer = {
  id: string;
  userId: string;
  name: string;
  email: string;
  country: string;
  industry?: string;
  notes?: string;
  lastContactDate?: string;
};
```

---

### 8. 🏭 行业定制化

**实现方式**：
- 在 Holiday 类型中添加 `industries?: string[]` 字段
- 用户选择所属行业后，优先展示相关节假日
- 提供行业专属的外贸建议

---

### 9. 📊 数据统计与分析

**功能点**：
- 节假日密集度热力图（按月统计）
- 不同地区对比分析
- 个人使用报告（查看最多的国家、导出次数等）

**技术栈**：
- Chart.js 或 Recharts（图表库）
- 数据聚合逻辑

---

## 长期愿景（v2.0+）

### 10. 🤖 AI 智能助手

基于 Gemini API 的智能功能：

**功能点**：
- 智能问答（"明年春节前应该什么时候下单？"）
- 个性化建议生成
- 邮件内容优化
- 多语言翻译

**技术实现**：
```typescript
// src/services/ai.ts
export async function askAI(question: string, context: Holiday[]) {
  const response = await fetch('/api/ai/chat', {
    method: 'POST',
    body: JSON.stringify({ question, context })
  });
  return response.json();
}
```

---

### 11. 📱 移动应用（PWA）

**技术方案**：
- Progressive Web App
- Service Worker（离线访问）
- Web Push Notifications
- 添加到主屏幕

**配置文件**：
```json
// public/manifest.json
{
  "name": "国际节假日图鉴",
  "short_name": "节假日图鉴",
  "description": "外贸从业者的节假日智能指南",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

### 12. 🌐 社区与内容生态

- 用户贡献内容（UGC）
- 节假日案例分享
- 外贸经验交流
- 评论与互动

---

## 技术架构升级建议

### 当前架构（v1.0）
```
纯前端 Next.js 应用
├── 静态数据（holidays.ts）
├── 客户端状态管理（useState/useMemo）
└── localStorage（收藏功能）
```

### 升级架构（v1.5+）

**后端服务需求**：
- 用户认证（登录/注册）
- 数据持久化（收藏、客户信息）
- 邮件提醒服务
- AI API 调用封装

**技术选型建议**：

**方案 1：Supabase（推荐，快速开发）**
```
优点：
✅ 自带数据库（PostgreSQL）
✅ 内置用户认证
✅ 实时订阅
✅ 免费额度充足
✅ 与 Next.js 完美集成

缺点：
❌ 依赖第三方服务
```

**方案 2：Next.js API Routes + Prisma**
```
优点：
✅ 完全自主控制
✅ 与 Next.js 原生集成
✅ TypeScript 支持好

缺点：
❌ 需要自建数据库
❌ 开发周期较长
```

**方案 3：Firebase**
```
优点：
✅ 全套 BaaS 服务
✅ 实时数据库
✅ 云函数支持

缺点：
❌ 国内访问不稳定
❌ 定价模型复杂
```

### 数据库设计（参考）

```sql
-- 用户表
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100),
  industry VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

-- 客户表
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255),
  country VARCHAR(50),
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 收藏表
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  holiday_id VARCHAR(50) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, holiday_id)
);

-- 提醒表
CREATE TABLE reminders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  holiday_id VARCHAR(50) NOT NULL,
  remind_days_before INT DEFAULT 7,
  enabled BOOLEAN DEFAULT TRUE,
  channels JSONB,  -- ['email', 'browser']
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 开发路线图

### Q1 2025（v1.1 - v1.2）
- ✅ 搜索功能
- ✅ 收藏功能
- ✅ 增加节假日数据至 30+
- ✅ PDF/Excel 导出

**预计工作量**：2-3 周

---

### Q2 2025（v1.3 - v1.5）
- 📅 日历视图（月历 + 年历）
- 📅 iCal 订阅
- 📅 用户系统（后端）
- 📅 浏览器通知

**预计工作量**：4-6 周

---

### Q3 2025（v1.6 - v1.8）
- 🔔 邮件提醒系统
- 🔔 客户管理功能
- 🔔 行业定制化
- 🔔 数据统计面板

**预计工作量**：6-8 周

---

### Q4 2025（v2.0）
- 🤖 AI 智能助手
- 🤖 移动应用（PWA）
- 🤖 社区功能（可选）

**预计工作量**：8-12 周

---

## 短期开发优先级建议

**第一阶段（立即开始）**：
1. 搜索功能（2-3 天）
2. 收藏功能（1-2 天）
3. 数据增强（3-5 天，分批添加）

**第二阶段（1-2 周后）**：
4. 导出功能（3-4 天）
5. 日历视图（5-7 天）

**评估点**：
- 完成第一阶段后，收集用户反馈
- 根据反馈调整第二阶段优先级
- 决定是否需要后端服务（v1.5）

---

## 安全与隐私

### 环境变量管理
- **敏感信息**（如 API Keys）必须存储在 `.env.local`
- `.env.local` 已加入 `.gitignore`，不会被提交到 Git
- 绝不在代码中硬编码任何密钥或密码

### 数据隐私
- 当前版本无用户数据收集
- 所有数据都是静态的节假日信息
- 如未来添加用户功能，需遵守 GDPR/CCPA 等隐私法规

---

## Git 工作流

### 分支策略
- `main` - 生产稳定版本
- `develop` - 开发主分支
- `feature/xxx` - 新功能开发
- `fix/xxx` - Bug 修复

### 提交规范
使用语义化提交消息：

```
feat: 添加黑色星期五节日数据
fix: 修复筛选逻辑导致的空白页面
docs: 更新 README 中的安装步骤
style: 优化节假日卡片的阴影效果
refactor: 重构筛选组件的状态管理
```

### 禁止提交的内容
- ❌ `.env.local` 文件
- ❌ `node_modules/` 目录
- ❌ `.next/` 或其他构建产物
- ❌ 任何包含真实 API Key 的文件

---

## 故障排查

### 常见问题

**Q: npm run dev 失败**
```bash
# 清除缓存并重新安装
rm -rf node_modules .next
npm install
npm run dev
```

**Q: Tailwind 样式不生效**
- 检查 `tailwind.config.ts` 中的 `content` 路径是否正确
- 确保 `postcss.config.js` 已配置 `tailwindcss`

**Q: TypeScript 类型错误**
- 运行 `npm run build` 查看详细错误
- 检查 `src/types/index.ts` 类型定义是否最新

**Q: 筛选功能不工作**
- 检查 `src/data/holidays.ts` 中的数据格式
- 确保 `region` 和 `type` 字段与枚举值匹配

---

## AI Studio 集成

此项目可在 Google AI Studio 中运行：
- **AI Studio URL**: https://ai.studio/apps/drive/1xtj18pLwAD3AF4yO9MgMD4Qa-cj2CNq-
- **API Key**: 在 `.env.local` 中配置 `GEMINI_API_KEY`

---

## Claude 协作须知

### 代码修改原则
1. **保持一致性** - 遵循现有代码风格和命名规范
2. **类型安全** - 所有新代码必须有完整的 TypeScript 类型
3. **可维护性** - 优先简洁清晰的代码，避免过度工程化
4. **外贸专业性** - 确保建议和内容符合外贸场景实际

### 添加新功能时
- 先在此文档中更新"未来功能规划"
- 在相应组件文件顶部添加注释说明功能
- 更新 `README.md` 的用户使用指南
- 确保响应式设计适配移动端

### 修改节假日数据时
- 验证日期格式 (YYYY-MM-DD)
- 确保 `region` 和 `type` 值在枚举范围内
- 检查 `suggestions` 是否遵循编写原则
- 确保中英文祝福语得体且文化适当

---

## 联系与支持

- **AI Studio 项目**: https://ai.studio/apps/drive/1xtj18pLwAD3AF4yO9MgMD4Qa-cj2CNq-
- **项目作者**: Henry
- **问题反馈**: 通过 GitHub Issues 或项目协作工具

---

**最后更新**: 2024-11-23
**文档版本**: v1.1.0 - 添加短期功能规划详情
