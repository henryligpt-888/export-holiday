import * as XLSX from 'xlsx';
import { Holiday } from '@/types';

/**
 * 导出节假日数据为 Excel 文件
 * @param holidays 节假日数据数组
 * @param filename 文件名（默认：国际节假日图鉴.xlsx）
 */
export function exportToExcel(holidays: Holiday[], filename = '国际节假日图鉴-2026.xlsx') {
  // 创建工作簿
  const workbook = XLSX.utils.book_new();

  // ========== 工作表1: 节假日概览 ==========
  const overviewData = [
    // 标题行
    ['国际节假日图鉴（外贸版）- 2026年'],
    [`生成时间：${new Date().toLocaleString('zh-CN')}`],
    [`共 ${holidays.length} 个节假日`],
    [], // 空行
    // 表头
    ['日期', '中文名称', '英文名称', '国家', '地区', '类型', '时长', '避免开发信'],
    // 数据行
    ...holidays.map(h => [
      h.date,
      h.chineseName,
      h.englishName,
      h.country,
      h.region,
      h.type,
      h.duration,
      h.avoidColdEmail ? '是' : '否'
    ])
  ];

  const overviewSheet = XLSX.utils.aoa_to_sheet(overviewData);

  // 设置列宽
  overviewSheet['!cols'] = [
    { wch: 12 },  // 日期
    { wch: 20 },  // 中文名称
    { wch: 30 },  // 英文名称
    { wch: 15 },  // 国家
    { wch: 10 },  // 地区
    { wch: 15 },  // 类型
    { wch: 15 },  // 时长
    { wch: 12 }   // 避免开发信
  ];

  // 合并标题单元格
  overviewSheet['!merges'] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 7 } }, // 标题行
    { s: { r: 1, c: 0 }, e: { r: 1, c: 7 } }, // 生成时间
    { s: { r: 2, c: 0 }, e: { r: 2, c: 7 } }  // 总数
  ];

  XLSX.utils.book_append_sheet(workbook, overviewSheet, '节假日概览');

  // ========== 工作表2: 详细信息 ==========
  const detailData = [
    // 表头
    ['日期', '中文名称', '英文名称', '国家', '地区', '类型', '时长', '业务影响', '行动建议', '中文祝福语', '英文祝福语', '避免开发信'],
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
      h.suggestions.join('\n'),
      h.greetingZh || '',
      h.greetingEn || '',
      h.avoidColdEmail ? '是' : '否'
    ])
  ];

  const detailSheet = XLSX.utils.aoa_to_sheet(detailData);

  // 设置列宽
  detailSheet['!cols'] = [
    { wch: 12 },  // 日期
    { wch: 20 },  // 中文名称
    { wch: 30 },  // 英文名称
    { wch: 15 },  // 国家
    { wch: 10 },  // 地区
    { wch: 15 },  // 类型
    { wch: 15 },  // 时长
    { wch: 40 },  // 业务影响
    { wch: 50 },  // 行动建议
    { wch: 30 },  // 中文祝福语
    { wch: 40 },  // 英文祝福语
    { wch: 12 }   // 避免开发信
  ];

  XLSX.utils.book_append_sheet(workbook, detailSheet, '详细信息');

  // ========== 工作表3: 按地区统计 ==========
  const regionStats: Record<string, number> = {};
  holidays.forEach(h => {
    regionStats[h.region] = (regionStats[h.region] || 0) + 1;
  });

  const statsData = [
    ['地区统计'],
    [],
    ['地区', '节假日数量'],
    ...Object.entries(regionStats).map(([region, count]) => [region, count])
  ];

  const statsSheet = XLSX.utils.aoa_to_sheet(statsData);
  statsSheet['!cols'] = [{ wch: 15 }, { wch: 15 }];
  statsSheet['!merges'] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }
  ];

  XLSX.utils.book_append_sheet(workbook, statsSheet, '地区统计');

  // ========== 工作表4: 按类型统计 ==========
  const typeStats: Record<string, number> = {};
  holidays.forEach(h => {
    typeStats[h.type] = (typeStats[h.type] || 0) + 1;
  });

  const typeStatsData = [
    ['类型统计'],
    [],
    ['类型', '节假日数量'],
    ...Object.entries(typeStats).map(([type, count]) => [type, count])
  ];

  const typeStatsSheet = XLSX.utils.aoa_to_sheet(typeStatsData);
  typeStatsSheet['!cols'] = [{ wch: 20 }, { wch: 15 }];
  typeStatsSheet['!merges'] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }
  ];

  XLSX.utils.book_append_sheet(workbook, typeStatsSheet, '类型统计');

  // 写入文件
  XLSX.writeFile(workbook, filename);
}

/**
 * 导出简化版 Excel（仅基础信息）
 */
export function exportSimpleExcel(holidays: Holiday[], filename = '国际节假日-简化版-2026.xlsx') {
  const worksheetData = [
    // 表头
    ['日期', '节日', '国家', '地区', '类型', '时长', '避免开发信'],
    // 数据行
    ...holidays.map(h => [
      h.date,
      h.chineseName,
      h.country,
      h.region,
      h.type,
      h.duration,
      h.avoidColdEmail ? '是' : '否'
    ])
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  worksheet['!cols'] = [
    { wch: 12 },
    { wch: 25 },
    { wch: 15 },
    { wch: 10 },
    { wch: 15 },
    { wch: 15 },
    { wch: 12 }
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '节假日');

  XLSX.writeFile(workbook, filename);
}
