"use client";

import React, { useState, useEffect } from 'react';
import { Clock, Sun } from 'lucide-react';
import { getTimeNowInTimezone } from '@/utils/timezone';
import { CHINA_TIMEZONE_ID, getTimezoneById } from '@/data/timezones';
import { clsx } from 'clsx';

interface TimeInfo {
  hour: number;
  minute: number;
  second: number;
  isDST: boolean;
  year: number;
  month: number;
  day: number;
  weekday: string;
}

interface LiveClockDisplayProps {
  comparisonTimezoneId?: string;
  showSeconds?: boolean;
  showDate?: boolean;
  className?: string;
}

export default function LiveClockDisplay({
  comparisonTimezoneId,
  showSeconds = true,
  showDate = false,
  className
}: LiveClockDisplayProps) {
  const [beijingTime, setBeijingTime] = useState<TimeInfo>({ hour: 0, minute: 0, second: 0, isDST: false, year: 2025, month: 1, day: 1, weekday: '' });
  const [comparisonTime, setComparisonTime] = useState<TimeInfo>({ hour: 0, minute: 0, second: 0, isDST: false, year: 2025, month: 1, day: 1, weekday: '' });

  const comparisonTz = comparisonTimezoneId ? getTimezoneById(comparisonTimezoneId) : null;

  useEffect(() => {
    const updateTime = () => {
      setBeijingTime(getTimeNowInTimezone(CHINA_TIMEZONE_ID));
      if (comparisonTz) {
        setComparisonTime(getTimeNowInTimezone(comparisonTz.id));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [comparisonTz]);

  const formatWithSeconds = (h: number, m: number, s: number) => {
    return showSeconds
      ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
      : `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  };

  return (
    <div className={clsx('flex items-center gap-4', className)}>
      {/* Beijing Time */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
        <Clock size={16} className="text-blue-600" />
        <div>
          <p className="text-xs text-slate-500">北京时间</p>
          <p className="text-lg font-bold font-mono text-blue-700">
            {formatWithSeconds(beijingTime.hour, beijingTime.minute, beijingTime.second)}
          </p>
          {showDate && (
            <p className="text-xs text-slate-500">
              {beijingTime.month}月{beijingTime.day}日 {beijingTime.weekday}
            </p>
          )}
        </div>
      </div>

      {/* Comparison Time */}
      {comparisonTz && (
        <>
          <span className="text-slate-400">vs</span>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <span className="text-lg">{getFlagEmoji(comparisonTz.countryCode)}</span>
            <div>
              <div className="flex items-center gap-1">
                <p className="text-xs text-slate-500">{comparisonTz.cityName}</p>
                {comparisonTime.isDST && (
                  <span className="flex items-center gap-0.5 text-xs text-amber-600" title="夏令时">
                    <Sun size={10} />
                  </span>
                )}
              </div>
              <p className="text-lg font-bold font-mono text-purple-700">
                {formatWithSeconds(comparisonTime.hour, comparisonTime.minute, comparisonTime.second)}
              </p>
              {showDate && (
                <p className="text-xs text-slate-500">
                  {comparisonTime.month}月{comparisonTime.day}日 {comparisonTime.weekday}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
