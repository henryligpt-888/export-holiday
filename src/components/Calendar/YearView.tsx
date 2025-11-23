import React from 'react';
import { Holiday } from '@/types';
import { getMonthDays, getHolidaysForDate, getMonthName, getMonthlyHolidayCounts } from '@/utils/calendar';
import { clsx } from 'clsx';

interface YearViewProps {
  year: number;
  holidays: Holiday[];
  onMonthClick: (month: number) => void;
}

const YearView: React.FC<YearViewProps> = ({ year, holidays, onMonthClick }) => {
  const monthlyHolidayCounts = getMonthlyHolidayCounts(holidays, year);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      {/* 年份标题 */}
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
        {year}年 节假日总览
      </h2>

      {/* 12个月网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 12 }, (_, monthIndex) => {
          const days = getMonthDays(year, monthIndex);
          const holidayCount = monthlyHolidayCounts[monthIndex];

          return (
            <div
              key={monthIndex}
              onClick={() => onMonthClick(monthIndex)}
              className="bg-slate-50 rounded-lg p-4 hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer border border-slate-200 hover:border-blue-300"
            >
              {/* 月份标题 */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-900">
                  {getMonthName(monthIndex)}
                </h3>
                {holidayCount > 0 && (
                  <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                    {holidayCount}
                  </span>
                )}
              </div>

              {/* 迷你日历 */}
              <div className="grid grid-cols-7 gap-1">
                {/* 星期标题 */}
                {['日', '一', '二', '三', '四', '五', '六'].map(day => (
                  <div
                    key={day}
                    className="text-center text-[10px] text-slate-400 font-medium"
                  >
                    {day}
                  </div>
                ))}

                {/* 日期格子 */}
                {days.map(date => {
                  const dayHolidays = getHolidaysForDate(date, holidays);
                  const hasHoliday = dayHolidays.length > 0;
                  const isCurrentMonth = date.getMonth() === monthIndex;

                  return (
                    <div
                      key={date.toString()}
                      className={clsx(
                        'aspect-square flex items-center justify-center text-[10px] rounded',
                        isCurrentMonth ? 'text-slate-700' : 'text-slate-300',
                        hasHoliday && isCurrentMonth && 'bg-blue-500 text-white font-bold'
                      )}
                    >
                      {date.getDate()}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 图例 */}
      <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-500" />
          <span className="text-sm text-slate-600">有节假日</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-slate-200" />
          <span className="text-sm text-slate-600">无节假日</span>
        </div>
      </div>
    </div>
  );
};

export default YearView;
