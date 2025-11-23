import { startOfMonth, endOfMonth, eachDayOfInterval, format, startOfWeek, endOfWeek, isSameMonth, isSameDay } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { Holiday } from '@/types';

/**
 * 获取某月的所有日期（包含前后填充的日期以填满日历网格）
 */
export function getMonthDays(year: number, month: number) {
  const monthStart = startOfMonth(new Date(year, month));
  const monthEnd = endOfMonth(new Date(year, month));

  // 获取包含周末填充的完整日历网格
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 }); // 周日开始
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
}

/**
 * 获取某天的所有节假日
 */
export function getHolidaysForDate(date: Date, holidays: Holiday[]): Holiday[] {
  const dateStr = format(date, 'yyyy-MM-dd');
  return holidays.filter(h => h.date === dateStr);
}

/**
 * 检查日期是否属于当前月份
 */
export function isDateInMonth(date: Date, month: number): boolean {
  return isSameMonth(date, new Date(2026, month));
}

/**
 * 检查两个日期是否是同一天
 */
export function isSameDayAs(date1: Date, date2: Date): boolean {
  return isSameDay(date1, date2);
}

/**
 * 格式化日期为显示文本
 */
export function formatDate(date: Date, formatStr: string = 'yyyy-MM-dd'): string {
  return format(date, formatStr, { locale: zhCN });
}

/**
 * 获取月份名称
 */
export function getMonthName(month: number): string {
  const monthNames = [
    '一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'
  ];
  return monthNames[month];
}

/**
 * 获取星期名称
 */
export function getWeekdayNames(): string[] {
  return ['日', '一', '二', '三', '四', '五', '六'];
}

/**
 * 根据节日类型获取颜色
 */
export function getHolidayColor(type: string): string {
  const colorMap: Record<string, string> = {
    '公共假日': 'bg-blue-500',
    '宗教节日': 'bg-purple-500',
    '商业敏感日期': 'bg-amber-500'
  };
  return colorMap[type] || 'bg-gray-500';
}

/**
 * 统计每个月的节假日数量
 */
export function getMonthlyHolidayCounts(holidays: Holiday[], year: number): number[] {
  const counts = new Array(12).fill(0);

  holidays.forEach(holiday => {
    const date = new Date(holiday.date);
    if (date.getFullYear() === year) {
      counts[date.getMonth()]++;
    }
  });

  return counts;
}
