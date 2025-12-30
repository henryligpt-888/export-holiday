import { CHINA_TIMEZONE_ID } from '@/data/timezones';
import { MeetingSlot, TimezoneInfo } from '@/types/timezone';

/**
 * Get timezone offset in minutes for a specific date and timezone
 * This correctly handles DST by using the Intl API
 */
function getTimezoneOffsetMinutes(date: Date, timezoneId: string): number {
  const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
  const tzDate = new Date(date.toLocaleString('en-US', { timeZone: timezoneId }));
  return (tzDate.getTime() - utcDate.getTime()) / 60000;
}

/**
 * Check if daylight saving time is in effect for a given timezone
 */
export function isDaylightSavingTime(date: Date, timezoneId: string): boolean {
  const january = new Date(date.getFullYear(), 0, 1);
  const july = new Date(date.getFullYear(), 6, 1);

  const januaryOffset = getTimezoneOffsetMinutes(january, timezoneId);
  const julyOffset = getTimezoneOffsetMinutes(july, timezoneId);
  const currentOffset = getTimezoneOffsetMinutes(date, timezoneId);

  // DST is in effect if current offset equals the larger offset
  const standardOffset = Math.min(januaryOffset, julyOffset);
  return currentOffset > standardOffset;
}

/**
 * Get current time in a specific timezone using IANA timezone ID
 * Properly handles DST automatically
 */
export function getCurrentTimeInTimezone(timezoneId: string): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  isDST: boolean;
  weekday: string;
} {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat('zh-CN', {
    timeZone: timezoneId,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'short',
    hour12: false
  });

  const parts = formatter.formatToParts(now);
  let hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0');
  if (hour === 24) hour = 0;

  return {
    year: parseInt(parts.find(p => p.type === 'year')?.value || '2025'),
    month: parseInt(parts.find(p => p.type === 'month')?.value || '1'),
    day: parseInt(parts.find(p => p.type === 'day')?.value || '1'),
    hour,
    minute: parseInt(parts.find(p => p.type === 'minute')?.value || '0'),
    second: parseInt(parts.find(p => p.type === 'second')?.value || '0'),
    weekday: parts.find(p => p.type === 'weekday')?.value || '',
    isDST: isDaylightSavingTime(now, timezoneId)
  };
}

/**
 * Convert time between timezones with full DST support
 * Takes a source date, hour, minute and converts to target timezone
 */
export function convertTimezoneWithDST(
  sourceDate: Date,
  hour: number,
  minute: number,
  fromTimezoneId: string,
  toTimezoneId: string
): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  weekday: string;
  isDST: boolean;
  dayDiff: number;
} {
  // Create a date object representing the source time
  const year = sourceDate.getFullYear();
  const month = sourceDate.getMonth();
  const day = sourceDate.getDate();

  // Create date in UTC first
  const utcDate = new Date(Date.UTC(year, month, day, hour, minute, 0));

  // Get offset of source timezone
  const sourceOffset = getTimezoneOffsetMinutes(utcDate, fromTimezoneId);

  // Adjust to actual UTC time
  const actualUtcTime = utcDate.getTime() - sourceOffset * 60000;
  const actualUtcDate = new Date(actualUtcTime);

  // Format in target timezone
  const formatter = new Intl.DateTimeFormat('zh-CN', {
    timeZone: toTimezoneId,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hour12: false
  });

  const parts = formatter.formatToParts(actualUtcDate);
  const targetYear = parseInt(parts.find(p => p.type === 'year')?.value || '2025');
  const targetMonth = parseInt(parts.find(p => p.type === 'month')?.value || '1');
  const targetDay = parseInt(parts.find(p => p.type === 'day')?.value || '1');
  let targetHour = parseInt(parts.find(p => p.type === 'hour')?.value || '0');
  const targetMinute = parseInt(parts.find(p => p.type === 'minute')?.value || '0');
  const targetWeekday = parts.find(p => p.type === 'weekday')?.value || '';

  if (targetHour === 24) targetHour = 0;

  // Calculate day difference
  const sourceDateOnly = new Date(year, month, day);
  const targetDateOnly = new Date(targetYear, targetMonth - 1, targetDay);
  const dayDiff = Math.round((targetDateOnly.getTime() - sourceDateOnly.getTime()) / (1000 * 60 * 60 * 24));

  return {
    year: targetYear,
    month: targetMonth,
    day: targetDay,
    hour: targetHour,
    minute: targetMinute,
    weekday: targetWeekday,
    isDST: isDaylightSavingTime(actualUtcDate, toTimezoneId),
    dayDiff
  };
}

/**
 * Convert customer time to Beijing time (with DST support)
 */
export function toBeijingTime(
  sourceDate: Date,
  hour: number,
  minute: number,
  customerTimezoneId: string
) {
  return convertTimezoneWithDST(sourceDate, hour, minute, customerTimezoneId, CHINA_TIMEZONE_ID);
}

/**
 * Convert Beijing time to customer time (with DST support)
 */
export function fromBeijingTime(
  sourceDate: Date,
  hour: number,
  minute: number,
  customerTimezoneId: string
) {
  return convertTimezoneWithDST(sourceDate, hour, minute, CHINA_TIMEZONE_ID, customerTimezoneId);
}

/**
 * Format time with day difference indicator
 */
export function formatTimeWithDay(
  hour: number,
  minute: number,
  dayDiff: number
): string {
  const timeStr = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  if (dayDiff === 1) return `${timeStr} (+1天)`;
  if (dayDiff === -1) return `${timeStr} (-1天)`;
  if (dayDiff > 1) return `${timeStr} (+${dayDiff}天)`;
  if (dayDiff < -1) return `${timeStr} (${dayDiff}天)`;
  return timeStr;
}

/**
 * Format full date time
 */
export function formatFullDateTime(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  weekday?: string
): string {
  const dateStr = `${year}年${month}月${day}日`;
  const timeStr = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  return weekday ? `${dateStr} ${weekday} ${timeStr}` : `${dateStr} ${timeStr}`;
}

/**
 * Format hour and minute to HH:MM
 */
export function formatTime(hour: number, minute: number = 0): string {
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

/**
 * Check if an hour is within working hours (9-18)
 */
export function isWorkingHour(hour: number, start: number = 9, end: number = 18): boolean {
  return hour >= start && hour < end;
}

/**
 * Find suitable meeting times for multiple timezones
 */
export function findMeetingSlots(
  selectedTimezones: TimezoneInfo[],
  workingHourStart: number = 9,
  workingHourEnd: number = 18
): MeetingSlot[] {
  const slots: MeetingSlot[] = [];
  const today = new Date();

  // Check each hour in Beijing time
  for (let beijingHour = 0; beijingHour < 24; beijingHour++) {
    const localTimes = selectedTimezones.map(tz => {
      const converted = fromBeijingTime(today, beijingHour, 0, tz.id);
      const localHour = converted.hour;
      const isWorking = isWorkingHour(localHour, workingHourStart, workingHourEnd);

      return {
        timezoneId: tz.id,
        countryName: tz.countryName,
        cityName: tz.cityName,
        localHour,
        isWorkingHour: isWorking,
        displayTime: formatTime(localHour, converted.minute)
      };
    });

    const workingCount = localTimes.filter(t => t.isWorkingHour).length;
    const score = Math.round((workingCount / selectedTimezones.length) * 100);

    slots.push({
      hour: beijingHour,
      localTimes,
      score
    });
  }

  // Sort by score (best meeting times first)
  return slots.sort((a, b) => b.score - a.score);
}

/**
 * Get current Beijing time
 */
export function getBeijingTimeNow() {
  return getCurrentTimeInTimezone(CHINA_TIMEZONE_ID);
}

/**
 * Get current time in a timezone by ID
 */
export function getTimeNowInTimezone(timezoneId: string) {
  return getCurrentTimeInTimezone(timezoneId);
}
