"use client";

import React, { useState, useMemo } from 'react';
import { CalendarClock, Plus, X, Check, AlertTriangle } from 'lucide-react';
import { timezones, getTimezoneById, CHINA_TIMEZONE_ID } from '@/data/timezones';
import { findMeetingSlots, formatTime } from '@/utils/timezone';
import { TimezoneInfo, MeetingSlot } from '@/types/timezone';
import TimezoneSelector from './TimezoneSelector';
import { clsx } from 'clsx';

export default function MeetingAssistant() {
  const [selectedTimezoneIds, setSelectedTimezoneIds] = useState<string[]>([
    CHINA_TIMEZONE_ID,
    'America/New_York'
  ]);
  const [newTimezone, setNewTimezone] = useState('');

  const selectedTimezones = useMemo(() => {
    return selectedTimezoneIds
      .map(id => getTimezoneById(id))
      .filter((tz): tz is TimezoneInfo => tz !== undefined);
  }, [selectedTimezoneIds]);

  const meetingSlots = useMemo(() => {
    if (selectedTimezones.length < 2) return [];
    return findMeetingSlots(selectedTimezones, 9, 18).slice(0, 12);
  }, [selectedTimezones]);

  const addTimezone = () => {
    if (newTimezone && !selectedTimezoneIds.includes(newTimezone)) {
      setSelectedTimezoneIds([...selectedTimezoneIds, newTimezone]);
      setNewTimezone('');
    }
  };

  const removeTimezone = (id: string) => {
    if (selectedTimezoneIds.length > 2) {
      setSelectedTimezoneIds(selectedTimezoneIds.filter(tzId => tzId !== id));
    }
  };

  const availableTimezones = timezones.filter(
    tz => !selectedTimezoneIds.includes(tz.id)
  );

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-tech border border-blue-100/50 p-6">
      <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        <CalendarClock size={20} className="text-blue-600" />
        会议助手
        <span className="text-xs font-normal text-slate-500">找出各方都合适的会议时间</span>
      </h2>

      {/* Selected Timezones */}
      <div className="space-y-3 mb-6">
        <label className="text-sm font-semibold text-slate-600">参会方时区</label>
        <div className="flex flex-wrap gap-2">
          {selectedTimezones.map(tz => (
            <div
              key={tz.id}
              className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-200"
            >
              <span className="text-lg">{getFlagEmoji(tz.countryCode)}</span>
              <span className="font-medium text-slate-700">
                {tz.countryName} - {tz.cityName}
              </span>
              <span className="text-xs text-slate-500">{tz.utcOffsetStr}</span>
              {selectedTimezoneIds.length > 2 && (
                <button
                  onClick={() => removeTimezone(tz.id)}
                  className="p-1 hover:bg-red-100 rounded-full transition-colors"
                >
                  <X size={14} className="text-red-500" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add New Timezone */}
        {availableTimezones.length > 0 && (
          <div className="flex gap-2">
            <div className="flex-1">
              <TimezoneSelector
                value={newTimezone}
                onChange={setNewTimezone}
                placeholder="添加参会方..."
              />
            </div>
            <button
              onClick={addTimezone}
              disabled={!newTimezone}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-tech transition-all"
            >
              <Plus size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Meeting Slots Table */}
      {selectedTimezones.length >= 2 && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-3 py-3 text-left text-sm font-semibold text-slate-600">
                  北京时间
                </th>
                {selectedTimezones.map(tz => (
                  <th key={tz.id} className="px-3 py-3 text-left text-sm font-semibold text-slate-600">
                    <div className="flex items-center gap-1">
                      <span>{getFlagEmoji(tz.countryCode)}</span>
                      <span>{tz.cityName}</span>
                    </div>
                  </th>
                ))}
                <th className="px-3 py-3 text-right text-sm font-semibold text-slate-600">
                  适合度
                </th>
              </tr>
            </thead>
            <tbody>
              {meetingSlots.map((slot, idx) => (
                <tr
                  key={slot.hour}
                  className={clsx(
                    'border-b border-slate-100 transition-colors',
                    slot.score === 100 && 'bg-green-50',
                    slot.score >= 50 && slot.score < 100 && 'bg-amber-50/50',
                    idx < 3 && 'font-medium'
                  )}
                >
                  <td className="px-3 py-3">
                    <span className="font-mono font-bold text-blue-700">
                      {formatTime(slot.hour)}
                    </span>
                  </td>
                  {slot.localTimes.map(lt => (
                    <td key={lt.timezoneId} className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <span className={clsx(
                          'font-mono',
                          lt.isWorkingHour ? 'text-green-700' : 'text-slate-400'
                        )}>
                          {lt.displayTime}
                        </span>
                        {lt.isWorkingHour ? (
                          <Check size={14} className="text-green-500" />
                        ) : (
                          <AlertTriangle size={14} className="text-amber-400" />
                        )}
                      </div>
                    </td>
                  ))}
                  <td className="px-3 py-3 text-right">
                    <span className={clsx(
                      'px-2 py-1 rounded-full text-xs font-bold',
                      slot.score === 100 && 'bg-green-100 text-green-700',
                      slot.score >= 50 && slot.score < 100 && 'bg-amber-100 text-amber-700',
                      slot.score < 50 && 'bg-slate-100 text-slate-500'
                    )}>
                      {slot.score}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <Check size={12} className="text-green-500" />
          <span>工作时间 (9:00-18:00)</span>
        </div>
        <div className="flex items-center gap-1">
          <AlertTriangle size={12} className="text-amber-400" />
          <span>非工作时间</span>
        </div>
      </div>
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
