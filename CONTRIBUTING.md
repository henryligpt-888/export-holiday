# 贡献指南

感谢你对「国际节假日图鉴（外贸版）」的关注！欢迎贡献新的节假日数据、功能改进或 Bug 修复。

---

## 🌟 如何贡献

### 1. 报告问题

如果你发现 Bug 或有功能建议：

1. 检查是否已有相关的 Issue
2. 创建新 Issue 时，请提供：
   - 清晰的问题描述
   - 重现步骤（如果是 Bug）
   - 预期行为 vs 实际行为
   - 截图（如果适用）
   - 浏览器和操作系统信息

### 2. 提交代码

#### 基本流程

1. **Fork 项目**
   ```bash
   # 在 GitHub 上点击 Fork 按钮
   ```

2. **克隆到本地**
   ```bash
   git clone https://github.com/你的用户名/international-holiday-guide-(foreign-trade-edition).git
   cd international-holiday-guide-(foreign-trade-edition)
   ```

3. **创建新分支**
   ```bash
   git checkout -b feature/你的功能名
   # 或
   git checkout -b fix/问题描述
   ```

4. **安装依赖**
   ```bash
   npm install
   ```

5. **进行修改并测试**
   ```bash
   npm run dev      # 本地测试
   npm run build    # 构建测试
   npm run lint     # 代码检查
   ```

6. **提交变更**
   ```bash
   git add .
   git commit -m "feat: 添加新功能描述"
   # 或
   git commit -m "fix: 修复某个问题"
   ```

7. **推送到你的 Fork**
   ```bash
   git push origin feature/你的功能名
   ```

8. **创建 Pull Request**
   - 在 GitHub 上打开 PR
   - 填写 PR 模板
   - 等待 Code Review

---

## 📝 代码规范

### Commit 消息规范

使用语义化提交消息：

```
<类型>: <简短描述>

[可选的详细描述]

[可选的脚注]
```

**类型**：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 重构（既不是新功能也不是修复）
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建工具或辅助工具的变动

**示例**：
```
feat: 添加节假日搜索功能

实现了按节日名称和国家的模糊搜索，
支持中英文搜索。

Closes #42
```

### TypeScript 规范

- 所有新代码必须使用 TypeScript
- 为所有函数提供明确的类型注解
- 避免使用 `any` 类型
- 使用接口 (interface) 定义对象结构

```typescript
// ✅ 好的示例
interface Holiday {
  id: string;
  date: string;
  // ...
}

function filterHolidays(holidays: Holiday[], year: string): Holiday[] {
  // ...
}

// ❌ 不好的示例
function filterHolidays(holidays: any, year: any) {
  // ...
}
```

### React 组件规范

- 使用函数组件 + Hooks
- 组件文件名使用 PascalCase (例如: `HolidayCard.tsx`)
- 使用 TypeScript 定义 Props 类型
- 提取可复用的逻辑到自定义 Hooks

```typescript
// ✅ 好的示例
interface HolidayCardProps {
  holiday: Holiday;
  onSelect?: (id: string) => void;
}

export default function HolidayCard({ holiday, onSelect }: HolidayCardProps) {
  // ...
}
```

### 样式规范

- 使用 Tailwind CSS 工具类
- 避免内联样式 (inline styles)
- 使用 `clsx` 或 `tailwind-merge` 处理动态类名
- 遵循现有的颜色和间距系统

```tsx
// ✅ 好的示例
<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
  {/* ... */}
</div>

// ❌ 避免
<div style={{ backgroundColor: 'white', borderRadius: '8px' }}>
  {/* ... */}
</div>
```

---

## 📅 添加新节假日

这是最常见的贡献类型！

### 步骤

1. **编辑数据文件**

   打开 [src/data/holidays.ts](./src/data/holidays.ts)

2. **添加新节假日对象**

   ```typescript
   {
     id: '8',  // 使用下一个可用的 ID
     date: '2025-04-XX',  // 格式: YYYY-MM-DD
     year: '2025',
     country: '印度',  // 主要庆祝国家
     chineseName: '洒红节',
     englishName: 'Holi',
     region: '亚洲',  // 必须是预定义的地区之一
     type: '宗教节日',  // 必须是预定义的类型之一
     duration: '1-2天',
     impact: '印度工厂可能短暂停工，物流可能受影响。',
     suggestions: [
       '提前确认供应商放假安排',
       '避免节日期间催促订单',
       '了解当地庆祝习俗'
     ],
     greetingZh: '祝您洒红节快乐，色彩缤纷！',
     greetingEn: 'Happy Holi! May your life be filled with colors!',
     avoidColdEmail: true  // 是否避免发送商务开发信
   }
   ```

3. **数据质量检查清单**

   - [ ] 日期格式正确 (YYYY-MM-DD)
   - [ ] `region` 值在预定义列表中
   - [ ] `type` 值在预定义列表中
   - [ ] `impact` 描述清晰且与外贸相关
   - [ ] `suggestions` 具体可执行（见下方指南）
   - [ ] 中英文祝福语得体且文化适当
   - [ ] `avoidColdEmail` 值合理

### 外贸建议编写指南

**原则**：
- ✅ 具体、可执行
- ✅ 与外贸业务直接相关
- ✅ 尊重文化差异
- ✅ 简洁明了（每条 ≤ 20 字）

**示例**：

```typescript
// ✅ 优秀的建议
suggestions: [
  '提前2-3周确认订单和发货计划',
  '避免在节前一周发送新的开发信',
  '发送节日贺卡维护客情',
  '预留节后生产缓冲期（2-3天）'
]

// ❌ 不好的建议
suggestions: [
  '注意这个节日很重要',  // 太泛泛
  '做好准备',  // 不具体
  '小心处理',  // 缺乏可执行性
  '这是他们的重要节日，需要尊重客户的文化习俗并提前做好各种准备工作'  // 太长
]
```

### 祝福语编写指南

**原则**：
- 文化适当，不冒犯
- 简洁真诚
- 适合商务场合
- 中英文对应

**示例**：

```typescript
// ✅ 商务场合适用
greetingZh: '祝您和家人圣诞快乐，新年吉祥！'
greetingEn: 'Wishing you and your family a Merry Christmas and a Happy New Year!'

// ❌ 避免过于随意
greetingZh: '圣诞嗨皮！🎅🎄'  // 太随意，不适合商务
```

---

## 🐛 修复 Bug

### 报告 Bug

提供以下信息：

1. **Bug 描述** - 清晰简洁
2. **重现步骤**
   - 步骤 1
   - 步骤 2
   - ...
3. **预期行为** - 应该发生什么
4. **实际行为** - 实际发生了什么
5. **截图** - 如果适用
6. **环境信息**
   - 浏览器：Chrome 120.0
   - 操作系统：Windows 11
   - Node 版本：20.10.0

### 修复 Bug

1. 创建 Issue（如果不存在）
2. 创建 `fix/` 分支
3. 编写修复代码
4. 添加测试（如果适用）
5. 提交 PR，关联 Issue

---

## 🎨 改进 UI/UX

欢迎改进用户界面和体验！

### 设计原则

- **简洁** - 避免过度设计
- **一致** - 遵循现有设计系统
- **响应式** - 确保移动端适配
- **可访问性** - 支持键盘导航和屏幕阅读器

### 提交 UI 改进时

- 提供截图或 GIF 演示
- 说明改进的理由
- 确保在不同设备上测试

---

## 🧪 测试

虽然当前版本暂无自动化测试，但欢迎贡献测试代码！

### 手动测试清单

在提交 PR 前，请确保：

- [ ] 在 Chrome 和 Firefox 中测试
- [ ] 在移动设备或模拟器中测试
- [ ] 测试所有筛选组合
- [ ] 检查无控制台错误
- [ ] 运行 `npm run build` 成功

---

## 📖 改进文档

文档改进同样重要！

可以改进的文档：
- README.md - 用户使用文档
- CLAUDE.md - 开发者文档
- CONTRIBUTING.md - 本文件
- 代码注释

---

## ✅ Pull Request 检查清单

提交 PR 前，请确认：

- [ ] 代码符合项目规范
- [ ] 提交消息遵循语义化规范
- [ ] 手动测试通过
- [ ] `npm run build` 成功
- [ ] `npm run lint` 无错误
- [ ] 文档已更新（如果需要）
- [ ] PR 描述清晰完整

---

## 🤔 需要帮助？

- 查看 [CLAUDE.md](./CLAUDE.md) 了解项目架构
- 查看 [README.md](./README.md) 了解基本使用
- 查看现有 Issues 和 PRs
- 创建讨论 (Discussion) 提问

---

## 📜 行为准则

### 我们的承诺

- 尊重所有贡献者
- 欢迎不同观点和经验
- 接受建设性批评
- 关注对社区最有利的事情

### 不可接受的行为

- 使用性暗示的语言或图像
- 人身攻击或侮辱性评论
- 骚扰行为（公开或私下）
- 未经许可发布他人的私人信息

---

## 🎉 感谢贡献！

每一个贡献都让这个项目变得更好。

无论是：
- 🐛 报告一个小 Bug
- 📝 修正一个错别字
- 📅 添加一个新节假日
- ✨ 实现一个新功能

我们都非常感激！

---

**Happy Contributing! 🚀**
