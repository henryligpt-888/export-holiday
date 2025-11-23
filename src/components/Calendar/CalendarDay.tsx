import React, { useState } from 'react';
import { Holiday } from '@/types';
import { getHolidayColor } from '@/utils/calendar';
import { clsx } from 'clsx';

interface CalendarDayProps {
  date: Date;
  holidays: Holiday[];
  isCurrentMonth: boolean;
  isToday?: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  date,
  holidays,
  isCurrentMonth,
  isToday = false
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const dayNumber = date.getDate();
  const hasHolidays = holidays.length > 0;

  return (
    <div
      className={clsx(
        'relative min-h-[80px] p-2 border border-slate-200 rounded-lg transition-all',
        isCurrentMonth ? 'bg-white' : 'bg-slate-50',
        hasHolidays && 'hover:shadow-md cursor-pointer',
        isToday && 'ring-2 ring-blue-500'
      )}
      onMouseEnter={() => hasHolidays && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* 日期数字 */}
      <div
        className={clsx(
          'text-sm font-semibold mb-1',
          isCurrentMonth ? 'text-slate-700' : 'text-slate-400',
          isToday && 'text-blue-600'
        )}
      >
        {dayNumber}
      </div>

      {/* 节假日指示器 */}
      {hasHolidays && (
        <div className="space-y-1">
          {holidays.slice(0, 2).map((holiday, index) => (
            <div
              key={holiday.id}
              className={clsx(
                'w-full h-1 rounded-full',
                getHolidayColor(holiday.type)
              )}
            />
          ))}
          {holidays.length > 2 && (
            <div className="text-xs text-slate-500 text-center">
              +{holidays.length - 2}
            </div>
          )}
        </div>
      )}

      {/* Tooltip */}
      {showTooltip && hasHolidays && (
        <div className="absolute z-10 top-full left-0 mt-2 w-64 p-3 bg-white rounded-lg shadow-xl border border-slate-200">
          <div className="space-y-2">
            {holidays.map(holiday => (
              <div key={holiday.id} className="text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className={clsx(
                      'w-2 h-2 rounded-full flex-shrink-0',
                      getHolidayColor(holiday.type)
                    )}
                  />
                  <span className="font-semibold text-slate-900">
                    {holiday.chineseName}
                  </span>
                </div>
                <div className="ml-4 text-slate-600 text-xs">
                  {holiday.country}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
