import { createEvents, EventAttributes, DateArray } from 'ics';
import { Holiday } from '@/types';

/**
 * 导出节假日为 iCal 日历文件（.ics）
 * 可导入到 Google Calendar、Outlook、Apple Calendar 等日历应用
 *
 * @param holidays 节假日数据数组
 * @param filename 文件名（默认：国际节假日-2026.ics）
 */
export function exportToICal(holidays: Holiday[], filename = '国际节假日-2026.ics') {
  // 转换节假日数据为 ICS 事件格式
  const events: EventAttributes[] = holidays.map(holiday => {
    // 解析日期 (YYYY-MM-DD)
    const [year, month, day] = holiday.date.split('-').map(Number);
    const dateArray: DateArray = [year, month, day];

    // 创建事件描述
    const description = [
      `【业务影响】`,
      holiday.impact,
      '',
      `【行动建议】`,
      ...holiday.suggestions.map((s, i) => `${i + 1}. ${s}`),
      '',
      `【祝福语】`,
      holiday.greetingZh ? `中文：${holiday.greetingZh}` : '',
      holiday.greetingEn ? `英文：${holiday.greetingEn}` : '',
      '',
      `国家：${holiday.country}`,
      `地区：${holiday.region}`,
      `类型：${holiday.type}`,
      `时长：${holiday.duration}`,
      holiday.avoidColdEmail ? `⚠️ 建议避免发送冷邮件/开发信` : ''
    ].filter(Boolean).join('\n');

    // 创建事件
    const event: EventAttributes = {
      start: dateArray,
      startInputType: 'local',
      duration: { days: 1 },
      title: `${holiday.chineseName} (${holiday.country})`,
      description: description,
      location: holiday.country,
      status: 'CONFIRMED',
      busyStatus: 'FREE',
      categories: [holiday.type, holiday.region],
      // 设置提醒
      alarms: [
        {
          action: 'display',
          description: `即将到来：${holiday.chineseName}`,
          trigger: { weeks: 2, before: true } // 提前2周提醒
        },
        {
          action: 'display',
          description: `本周提醒：${holiday.chineseName}`,
          trigger: { days: 7, before: true } // 提前1周提醒
        },
        {
          action: 'display',
          description: `明日提醒：${holiday.chineseName}`,
          trigger: { days: 1, before: true } // 提前1天提醒
        }
      ],
      // 设置全天事件
      startOutputType: 'local',
      // 添加 URL（可选）
      url: `https://example.com/holidays/${holiday.id}`
    };

    return event;
  });

  // 生成 ICS 文件内容
  const { error, value } = createEvents(events);

  if (error) {
    console.error('生成 iCal 文件失败:', error);
    alert('导出失败，请稍后重试');
    return;
  }

  if (!value) {
    alert('导出失败：未生成内容');
    return;
  }

  // 下载文件
  downloadICS(value, filename);
}

/**
 * 导出为 iCal 文件（仅重要节假日）
 * 筛选出标记为"避免开发信"的重要节假日
 */
export function exportImportantICal(holidays: Holiday[], filename = '重要节假日-2026.ics') {
  const importantHolidays = holidays.filter(h => h.avoidColdEmail);
  exportToICal(importantHolidays, filename);
}

/**
 * 按地区导出 iCal 文件
 */
export function exportICalByRegion(holidays: Holiday[], region: string, filename?: string) {
  const regionHolidays = holidays.filter(h => h.region === region);
  const defaultFilename = `${region}-节假日-2026.ics`;
  exportToICal(regionHolidays, filename || defaultFilename);
}

/**
 * 按国家导出 iCal 文件
 */
export function exportICalByCountry(holidays: Holiday[], country: string, filename?: string) {
  const countryHolidays = holidays.filter(h => h.country.includes(country));
  const defaultFilename = `${country}-节假日-2026.ics`;
  exportToICal(countryHolidays, filename || defaultFilename);
}

/**
 * 下载 ICS 文件的辅助函数
 */
function downloadICS(content: string, filename: string) {
  // 创建 Blob
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });

  // 创建下载链接
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;

  // 触发下载
  document.body.appendChild(link);
  link.click();

  // 清理
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * 生成日历订阅 URL（需要后端支持）
 * 这个功能需要将 ICS 文件托管在服务器上，并返回 webcal:// URL
 */
export function generateCalendarSubscriptionURL(holidays: Holiday[]): string {
  // TODO: 实现后端 API 托管 ICS 文件
  // 返回格式: webcal://example.com/api/calendar/2026.ics
  return 'webcal://example.com/api/calendar/2026.ics';
}
