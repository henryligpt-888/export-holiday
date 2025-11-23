import React from 'react';
import { Holiday } from '@/types';
import CalendarDay from './CalendarDay';
import { getMonthDays, getHolidaysForDate, isDateInMonth, isSameDayAs, getWeekdayNames, getMonthName } from '@/utils/calendar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthViewProps {
  year: number;
  month: number; // 0-11
  holidays: Holiday[];
  onMonthChange: (month: number) => void;
}

const MonthView: React.FC<MonthViewProps> = ({
  year,
  month,
  holidays,
  onMonthChange
}) => {
  const days = getMonthDays(year, month);
  const weekdays = getWeekdayNames();
  const today = new Date();

  const handlePrevMonth = () => {
    onMonthChange(month === 0 ? 11 : month - 1);
  };

  const handleNextMonth = () => {
    onMonthChange(month === 11 ? 0 : month + 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      {/* 月份导航 */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="上一月"
        >
          <ChevronLeft size={24} className="text-slate-600" />
        </button>

        <h2 className="text-2xl font-bold text-slate-900">
          {year}年 {getMonthName(month)}
        </h2>

        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="下一月"
        >
          <ChevronRight size={24} className="text-slate-600" />
        </button>
      </div>

      {/* 星期标题 */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekdays.map((day, index) => (
          <div
            key={day}
            className={`text-center text-sm font-semibold py-2 ${
              index === 0 || index === 6 ? 'text-red-500' : 'text-slate-600'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* 日期网格 */}
      <div className="grid grid-cols-7 gap-2">
        {days.map(date => {
          const dayHolidays = getHolidaysForDate(date, holidays);
          const isCurrentMonth = isDateInMonth(date, month);
          const isToday = isSameDayAs(date, today);

          return (
            <CalendarDay
              key={date.toString()}
              date={date}
              holidays={dayHolidays}
              isCurrentMonth={isCurrentMonth}
              isToday={isToday}
            />
          );
        })}
      </div>

      {/* 图例 */}
      <div className="flex items-center gap-6 mt-6 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-sm text-slate-600">公共假日</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span className="text-sm text-slate-600">宗教节日</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="text-sm text-slate-600">商业敏感日期</span>
        </div>
      </div>
    </div>
  );
};

export default MonthView;
