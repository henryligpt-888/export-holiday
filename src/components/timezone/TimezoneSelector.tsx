"use client";

import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, MapPin } from 'lucide-react';
import { timezones, groupTimezonesByRegion, getTimezoneById } from '@/data/timezones';
import { TimezoneInfo } from '@/types/timezone';
import { clsx } from 'clsx';

interface TimezoneSelectorProps {
  value: string;
  onChange: (timezoneId: string) => void;
  placeholder?: string;
  className?: string;
}

export default function TimezoneSelector({
  value,
  onChange,
  placeholder = '选择时区',
  className
}: TimezoneSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const selectedTimezone = useMemo(() => getTimezoneById(value), [value]);

  const groupedTimezones = useMemo(() => groupTimezonesByRegion(), []);

  const filteredGroups = useMemo(() => {
    if (!search.trim()) return groupedTimezones;

    const query = search.toLowerCase();
    const filtered: Record<string, TimezoneInfo[]> = {};

    Object.entries(groupedTimezones).forEach(([region, tzList]) => {
      const matches = tzList.filter(tz =>
        tz.countryName.toLowerCase().includes(query) ||
        tz.cityName.toLowerCase().includes(query) ||
        tz.utcOffsetStr.toLowerCase().includes(query)
      );
      if (matches.length > 0) {
        filtered[region] = matches;
      }
    });

    return filtered;
  }, [groupedTimezones, search]);

  const handleSelect = (tz: TimezoneInfo) => {
    onChange(tz.id);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <div className={clsx('relative', className)}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
      >
        {selectedTimezone ? (
          <div className="flex items-center gap-2 text-left">
            <MapPin size={16} className="text-blue-500 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-800">
                {selectedTimezone.countryName} - {selectedTimezone.cityName}
              </span>
              <span className="text-xs text-slate-500 ml-2">
                {selectedTimezone.utcOffsetStr}
              </span>
            </div>
          </div>
        ) : (
          <span className="text-slate-400">{placeholder}</span>
        )}
        <ChevronDown
          size={18}
          className={clsx(
            'text-slate-400 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[110]"
            onClick={() => {
              setIsOpen(false);
              setSearch('');
            }}
          />

          {/* Dropdown Content */}
          <div className="absolute z-[120] top-full left-0 right-0 mt-2 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden max-h-80 flex flex-col">
            {/* Search Input */}
            <div className="p-3 border-b border-slate-100 sticky top-0 bg-white">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="搜索国家或城市..."
                  className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  autoFocus
                />
              </div>
            </div>

            {/* Options List */}
            <div className="overflow-y-auto flex-1">
              {Object.entries(filteredGroups).map(([region, tzList]) => (
                <div key={region}>
                  <div className="px-4 py-2 text-xs font-bold text-slate-500 bg-slate-50 sticky top-0">
                    {region}
                  </div>
                  {tzList.map(tz => (
                    <button
                      key={tz.id}
                      type="button"
                      onClick={() => handleSelect(tz)}
                      className={clsx(
                        'w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-blue-50 transition-colors',
                        value === tz.id && 'bg-blue-50'
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getFlagEmoji(tz.countryCode)}</span>
                        <div>
                          <span className="font-medium text-slate-800">
                            {tz.countryName}
                          </span>
                          <span className="text-slate-500 ml-1">
                            - {tz.cityName}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {tz.utcOffsetStr}
                      </span>
                    </button>
                  ))}
                </div>
              ))}

              {Object.keys(filteredGroups).length === 0 && (
                <div className="p-8 text-center text-slate-500">
                  未找到匹配的时区
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Helper function to get flag emoji from country code
function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
