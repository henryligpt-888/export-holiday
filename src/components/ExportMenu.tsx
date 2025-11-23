import React, { useState } from 'react';
import { Download, FileText, FileSpreadsheet, Calendar, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { Holiday } from '@/types';
import { exportToPDF, exportDetailedPDF } from '@/utils/export/pdf';
import { exportToExcel, exportSimpleExcel } from '@/utils/export/excel';
import { exportToICal, exportImportantICal } from '@/utils/export/ical';

interface ExportMenuProps {
  holidays: Holiday[];
}

const ExportMenu: React.FC<ExportMenuProps> = ({ holidays }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async (exportFn: () => void, formatName: string) => {
    try {
      setIsExporting(true);
      setIsOpen(false);

      // 添加延迟以显示加载状态
      await new Promise(resolve => setTimeout(resolve, 300));

      exportFn();

      // 显示成功消息（可选）
      console.log(`${formatName} 导出成功！`);
    } catch (error) {
      console.error('导出失败:', error);
      alert(`导出 ${formatName} 失败，请稍后重试`);
    } finally {
      setIsExporting(false);
    }
  };

  const exportOptions = [
    {
      icon: <FileText size={18} />,
      label: 'PDF 格式（概览版）',
      description: '适合打印和快速查看',
      action: () => handleExport(() => exportToPDF(holidays), 'PDF'),
      color: 'text-red-600'
    },
    {
      icon: <FileText size={18} />,
      label: 'PDF 格式（详细版）',
      description: '包含建议和祝福语',
      action: () => handleExport(() => exportDetailedPDF(holidays), 'PDF详细版'),
      color: 'text-red-600'
    },
    {
      icon: <FileSpreadsheet size={18} />,
      label: 'Excel 格式（完整版）',
      description: '可编辑，含统计数据',
      action: () => handleExport(() => exportToExcel(holidays), 'Excel'),
      color: 'text-green-600'
    },
    {
      icon: <FileSpreadsheet size={18} />,
      label: 'Excel 格式（简化版）',
      description: '仅基础信息',
      action: () => handleExport(() => exportSimpleExcel(holidays), 'Excel简化版'),
      color: 'text-green-600'
    },
    {
      icon: <Calendar size={18} />,
      label: 'iCal 日历（全部）',
      description: '导入到 Google/Outlook 日历',
      action: () => handleExport(() => exportToICal(holidays), 'iCal'),
      color: 'text-blue-600'
    },
    {
      icon: <Calendar size={18} />,
      label: 'iCal 日历（重要节日）',
      description: '仅包含需避免开发信的节日',
      action: () => handleExport(() => exportImportantICal(holidays), 'iCal重要节日'),
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="relative">
      {/* 导出按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isExporting || holidays.length === 0}
        className={clsx(
          'flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm',
          isExporting
            ? 'bg-slate-400 cursor-not-allowed'
            : holidays.length === 0
            ? 'bg-slate-300 cursor-not-allowed text-slate-500'
            : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-md hover:scale-105'
        )}
      >
        <Download size={18} />
        <span>{isExporting ? '导出中...' : '导出数据'}</span>
        <ChevronDown
          size={16}
          className={clsx(
            'transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* 下拉菜单 */}
      {isOpen && !isExporting && (
        <>
          {/* 遮罩层 */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* 菜单内容 */}
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 z-20 overflow-hidden animate-in slide-in-from-top-2 duration-200">
            {/* 菜单头部 */}
            <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm">
                选择导出格式
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                共 {holidays.length} 个节假日
              </p>
            </div>

            {/* 导出选项列表 */}
            <div className="max-h-96 overflow-y-auto">
              {exportOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={option.action}
                  className="w-full px-4 py-3 flex items-start gap-3 hover:bg-blue-50 transition-colors text-left border-b border-slate-100 last:border-b-0"
                >
                  <div className={clsx('mt-0.5', option.color)}>
                    {option.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-900 text-sm">
                      {option.label}
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      {option.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* 菜单底部提示 */}
            <div className="px-4 py-2 bg-slate-50 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center">
                💡 提示：iCal 文件可导入日历应用并设置提醒
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExportMenu;
