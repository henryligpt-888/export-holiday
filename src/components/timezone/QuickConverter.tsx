"use client";

import React, { useState, useMemo } from 'react';
import { ArrowRightLeft, Clock, ArrowRight, Calendar, Sun } from 'lucide-react';
import { getTimezoneById } from '@/data/timezones';
import { toBeijingTime, fromBeijingTime, formatFullDateTime, isDaylightSavingTime } from '@/utils/timezone';
import TimezoneSelector from './TimezoneSelector';
import { clsx } from 'clsx';

export default function QuickConverter() {
  const [selectedTimezone, setSelectedTimezone] = useState('America/New_York');
  const [direction, setDirection] = useState<'toChina' | 'fromChina'>('toChina');
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [hour, setHour] = useState(10);
  const [minute, setMinute] = useState(0);

  const timezone = useMemo(() => getTimezoneById(selectedTimezone), [selectedTimezone]);

  const sourceDate = useMemo(() => new Date(selectedDate), [selectedDate]);

  const convertedTime = useMemo(() => {
    if (!timezone) return null;

    if (direction === 'toChina') {
      return toBeijingTime(sourceDate, hour, minute, timezone.id);
    } else {
      return fromBeijingTime(sourceDate, hour, minute, timezone.id);
    }
  }, [hour, minute, timezone, direction, sourceDate]);

  // Check if source timezone has DST in effect
  const sourceDST = useMemo(() => {
    if (direction === 'toChina' && timezone) {
      return isDaylightSavingTime(sourceDate, timezone.id);
    }
    return false;
  }, [direction, timezone, sourceDate]);

  const toggleDirection = () => {
    setDirection(prev => prev === 'toChina' ? 'fromChina' : 'toChina');
  };

  // Format source date for display
  const sourceDateDisplay = useMemo(() => {
    const date = new Date(selectedDate);
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${weekdays[date.getDay()]}`;
  }, [selectedDate]);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-tech border border-blue-100/50 p-6">
      <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Clock size={20} className="text-blue-600" />
        快速时区转换
        <span className="text-xs font-normal text-slate-500">（自动处理夏令时）</span>
      </h2>

      <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-start">
        {/* From Section */}
        <div className="space-y-4">
          <label className="text-sm font-semibold text-slate-600 block">
            {direction === 'toChina' ? '客户时区' : '北京时间'}
          </label>

          {direction === 'toChina' ? (
            <div className="space-y-2">
              <TimezoneSelector
                value={selectedTimezone}
                onChange={setSelectedTimezone}
              />
              {timezone && sourceDST && (
                <div className="flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">
                  <Sun size={12} />
                  当前为夏令时 (DST)
                </div>
              )}
            </div>
          ) : (
            <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇨🇳</span>
                <div>
                  <span className="font-bold text-blue-700">中国 - 北京时间</span>
                  <span className="text-xs text-blue-500 block">UTC+8（无夏令时）</span>
                </div>
              </div>
            </div>
          )}

          {/* Date Input */}
          <div>
            <label className="text-xs text-slate-500 mb-1 block flex items-center gap-1">
              <Calendar size={12} />
              选择日期
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          {/* Time Input */}
          <div>
            <label className="text-xs text-slate-500 mb-1 block">选择时间</label>
            <div className="flex items-center gap-2">
              <select
                value={hour}
                onChange={e => setHour(Number(e.target.value))}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-xl font-mono font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>{String(i).padStart(2, '0')}</option>
                ))}
              </select>
              <span className="text-3xl text-slate-300 font-bold">:</span>
              <select
                value={minute}
                onChange={e => setMinute(Number(e.target.value))}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-xl font-mono font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              >
                {[0, 15, 30, 45].map(m => (
                  <option key={m} value={m}>{String(m).padStart(2, '0')}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Arrow Toggle */}
        <div className="flex justify-center items-center md:pt-16">
          <button
            onClick={toggleDirection}
            className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-tech hover:shadow-tech-lg transition-all hover:scale-110 active:scale-95"
            title="切换转换方向"
          >
            <ArrowRightLeft size={24} />
          </button>
        </div>

        {/* To Section */}
        <div className="space-y-4">
          <label className="text-sm font-semibold text-slate-600 block">
            {direction === 'toChina' ? '北京时间' : '客户时区'}
          </label>

          {direction === 'fromChina' ? (
            <div className="space-y-2">
              <TimezoneSelector
                value={selectedTimezone}
                onChange={setSelectedTimezone}
              />
              {timezone && convertedTime?.isDST && (
                <div className="flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">
                  <Sun size={12} />
                  当前为夏令时 (DST)
                </div>
              )}
            </div>
          ) : (
            <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇨🇳</span>
                <div>
                  <span className="font-bold text-blue-700">中国 - 北京时间</span>
                  <span className="text-xs text-blue-500 block">UTC+8（无夏令时）</span>
                </div>
              </div>
            </div>
          )}

          {/* Result Display */}
          {convertedTime && (
            <div className="px-4 py-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <p className="text-xs text-slate-500 mb-2">转换结果</p>
              <p className="text-2xl font-bold font-mono text-green-700 mb-1">
                {String(convertedTime.hour).padStart(2, '0')}:{String(convertedTime.minute).padStart(2, '0')}
              </p>
              <p className="text-sm text-green-600">
                {convertedTime.year}年{convertedTime.month}月{convertedTime.day}日 {convertedTime.weekday}
              </p>
              {convertedTime.dayDiff !== 0 && (
                <p className="text-xs text-amber-600 mt-1">
                  {convertedTime.dayDiff > 0 ? `+${convertedTime.dayDiff}天` : `${convertedTime.dayDiff}天`}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {timezone && convertedTime && (
        <div className="mt-6 pt-6 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="text-center">
                <p className="text-xs text-slate-500 mb-1">
                  {direction === 'toChina' ? timezone.countryName : '中国'}
                </p>
                <p className="font-bold text-slate-800">
                  {sourceDateDisplay}
                </p>
                <p className="text-lg font-mono font-bold text-slate-700">
                  {String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')}
                </p>
              </div>
              <ArrowRight size={20} className="text-blue-500 mx-4" />
              <div className="text-center">
                <p className="text-xs text-slate-500 mb-1">
                  {direction === 'toChina' ? '中国' : timezone.countryName}
                </p>
                <p className="font-bold text-blue-700">
                  {convertedTime.year}年{convertedTime.month}月{convertedTime.day}日 {convertedTime.weekday}
                </p>
                <p className="text-lg font-mono font-bold text-blue-700">
                  {String(convertedTime.hour).padStart(2, '0')}:{String(convertedTime.minute).padStart(2, '0')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
