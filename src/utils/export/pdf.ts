import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Holiday } from '@/types';

/**
 * 导出节假日数据为 PDF 文件
 * @param holidays 节假日数据数组
 * @param filename 文件名（默认：国际节假日图鉴.pdf）
 */
export function exportToPDF(holidays: Holiday[], filename = '国际节假日图鉴-2026.pdf') {
  // 创建 PDF 文档（A4 尺寸）
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // 设置字体（使用 Arial Unicode MS 支持中文）
  doc.setFont('helvetica');

  // 添加标题
  doc.setFontSize(20);
  doc.setTextColor(30, 58, 138); // 蓝色
  doc.text('国际节假日图鉴（外贸版）', 105, 20, { align: 'center' });

  // 添加副标题
  doc.setFontSize(12);
  doc.setTextColor(100, 116, 139); // 灰色
  doc.text('2026年全球节假日指南', 105, 28, { align: 'center' });

  // 添加生成时间
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184);
  const now = new Date().toLocaleString('zh-CN');
  doc.text(`生成时间: ${now}`, 105, 34, { align: 'center' });

  // 添加统计信息
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text(`共 ${holidays.length} 个节假日`, 14, 42);

  // 准备表格数据
  const tableData = holidays.map(h => [
    h.date,
    h.chineseName,
    h.country,
    h.region,
    h.type,
    h.duration,
    h.avoidColdEmail ? '是' : '否'
  ]);

  // 生成表格
  autoTable(doc, {
    head: [['日期', '节日', '国家', '地区', '类型', '时长', '避免开发信']],
    body: tableData,
    startY: 48,
    styles: {
      font: 'helvetica',
      fontSize: 8,
      cellPadding: 2,
      lineColor: [226, 232, 240],
      lineWidth: 0.1
    },
    headStyles: {
      fillColor: [59, 130, 246], // 蓝色
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      halign: 'center'
    },
    bodyStyles: {
      textColor: [51, 65, 85]
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252]
    },
    columnStyles: {
      0: { cellWidth: 22, halign: 'center' }, // 日期
      1: { cellWidth: 35 }, // 节日
      2: { cellWidth: 28 }, // 国家
      3: { cellWidth: 18, halign: 'center' }, // 地区
      4: { cellWidth: 24, halign: 'center' }, // 类型
      5: { cellWidth: 20, halign: 'center' }, // 时长
      6: { cellWidth: 18, halign: 'center' } // 避免开发信
    },
    margin: { top: 48, left: 14, right: 14 },
    didDrawPage: (data) => {
      // 添加页脚
      const pageCount = doc.getNumberOfPages();
      const pageNumber = data.pageNumber;

      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(
        `第 ${pageNumber} 页 / 共 ${pageCount} 页`,
        105,
        doc.internal.pageSize.height - 10,
        { align: 'center' }
      );
    }
  });

  // 保存 PDF
  doc.save(filename);
}

/**
 * 导出详细版 PDF（包含建议和祝福语）
 */
export function exportDetailedPDF(holidays: Holiday[], filename = '国际节假日图鉴-详细版-2026.pdf') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  let yPos = 20;

  // 标题
  doc.setFontSize(18);
  doc.setTextColor(30, 58, 138);
  doc.text('国际节假日图鉴（外贸版）', 105, yPos, { align: 'center' });
  yPos += 10;

  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text('详细版 - 含建议与祝福语', 105, yPos, { align: 'center' });
  yPos += 15;

  // 遍历每个节假日
  holidays.forEach((holiday, index) => {
    // 检查是否需要新页面
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    // 节日标题
    doc.setFontSize(12);
    doc.setTextColor(30, 58, 138);
    doc.text(`${index + 1}. ${holiday.chineseName} (${holiday.englishName})`, 14, yPos);
    yPos += 8;

    // 基础信息
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text(`日期: ${holiday.date}  |  国家: ${holiday.country}  |  地区: ${holiday.region}`, 14, yPos);
    yPos += 6;
    doc.text(`类型: ${holiday.type}  |  时长: ${holiday.duration}`, 14, yPos);
    yPos += 8;

    // 业务影响
    doc.setFontSize(9);
    doc.setTextColor(234, 88, 12); // 橙色
    doc.text('业务影响:', 14, yPos);
    yPos += 5;
    doc.setTextColor(71, 85, 105);
    const impactLines = doc.splitTextToSize(holiday.impact, 180);
    doc.text(impactLines, 14, yPos);
    yPos += impactLines.length * 5 + 5;

    // 分隔线
    doc.setDrawColor(226, 232, 240);
    doc.line(14, yPos, 196, yPos);
    yPos += 10;
  });

  // 保存
  doc.save(filename);
}
