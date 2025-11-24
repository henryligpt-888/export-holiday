export type HolidayType = '公共假日' | '宗教节日' | '商业敏感日期';
export type Region = '北美洲' | '欧洲' | '亚洲' | '南美洲' | '大洋洲' | '非洲';

export type Holiday = {
  id: string;
  date: string; // Format: YYYY-MM-DD
  year: string;
  country: string;
  chineseName: string;
  englishName: string;
  region: Region;
  type: HolidayType;
  duration: string;
  impact: string; // Foreign trade impact
  suggestions: string[]; // Actionable advice
  greetingZh?: string;
  greetingEn?: string;
  avoidColdEmail: boolean;
  aliases?: string[]; // Search aliases (e.g., "黑五" for "黑色星期五")
};

export type FilterState = {
  year: string;
  region: string;
  type: string;
};