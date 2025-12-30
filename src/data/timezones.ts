import { TimezoneInfo } from '@/types/timezone';

export const timezones: TimezoneInfo[] = [
  // 中国（基准）
  {
    id: 'Asia/Shanghai',
    countryCode: 'CN',
    countryName: '中国',
    cityName: '北京/上海',
    utcOffset: 8,
    utcOffsetStr: 'UTC+8',
    region: '亚洲'
  },

  // 北美洲
  {
    id: 'America/New_York',
    countryCode: 'US',
    countryName: '美国',
    cityName: '纽约',
    utcOffset: -5,
    utcOffsetStr: 'UTC-5',
    region: '北美洲'
  },
  {
    id: 'America/Los_Angeles',
    countryCode: 'US',
    countryName: '美国',
    cityName: '洛杉矶',
    utcOffset: -8,
    utcOffsetStr: 'UTC-8',
    region: '北美洲'
  },
  {
    id: 'America/Chicago',
    countryCode: 'US',
    countryName: '美国',
    cityName: '芝加哥',
    utcOffset: -6,
    utcOffsetStr: 'UTC-6',
    region: '北美洲'
  },
  {
    id: 'America/Toronto',
    countryCode: 'CA',
    countryName: '加拿大',
    cityName: '多伦多',
    utcOffset: -5,
    utcOffsetStr: 'UTC-5',
    region: '北美洲'
  },
  {
    id: 'America/Vancouver',
    countryCode: 'CA',
    countryName: '加拿大',
    cityName: '温哥华',
    utcOffset: -8,
    utcOffsetStr: 'UTC-8',
    region: '北美洲'
  },
  {
    id: 'America/Mexico_City',
    countryCode: 'MX',
    countryName: '墨西哥',
    cityName: '墨西哥城',
    utcOffset: -6,
    utcOffsetStr: 'UTC-6',
    region: '北美洲'
  },

  // 欧洲
  {
    id: 'Europe/London',
    countryCode: 'GB',
    countryName: '英国',
    cityName: '伦敦',
    utcOffset: 0,
    utcOffsetStr: 'UTC+0',
    region: '欧洲'
  },
  {
    id: 'Europe/Paris',
    countryCode: 'FR',
    countryName: '法国',
    cityName: '巴黎',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '欧洲'
  },
  {
    id: 'Europe/Berlin',
    countryCode: 'DE',
    countryName: '德国',
    cityName: '柏林',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '欧洲'
  },
  {
    id: 'Europe/Rome',
    countryCode: 'IT',
    countryName: '意大利',
    cityName: '罗马',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '欧洲'
  },
  {
    id: 'Europe/Madrid',
    countryCode: 'ES',
    countryName: '西班牙',
    cityName: '马德里',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '欧洲'
  },
  {
    id: 'Europe/Amsterdam',
    countryCode: 'NL',
    countryName: '荷兰',
    cityName: '阿姆斯特丹',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '欧洲'
  },
  {
    id: 'Europe/Moscow',
    countryCode: 'RU',
    countryName: '俄罗斯',
    cityName: '莫斯科',
    utcOffset: 3,
    utcOffsetStr: 'UTC+3',
    region: '欧洲'
  },
  {
    id: 'Europe/Warsaw',
    countryCode: 'PL',
    countryName: '波兰',
    cityName: '华沙',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '欧洲'
  },

  // 亚洲
  {
    id: 'Asia/Tokyo',
    countryCode: 'JP',
    countryName: '日本',
    cityName: '东京',
    utcOffset: 9,
    utcOffsetStr: 'UTC+9',
    region: '亚洲'
  },
  {
    id: 'Asia/Seoul',
    countryCode: 'KR',
    countryName: '韩国',
    cityName: '首尔',
    utcOffset: 9,
    utcOffsetStr: 'UTC+9',
    region: '亚洲'
  },
  {
    id: 'Asia/Singapore',
    countryCode: 'SG',
    countryName: '新加坡',
    cityName: '新加坡',
    utcOffset: 8,
    utcOffsetStr: 'UTC+8',
    region: '亚洲'
  },
  {
    id: 'Asia/Hong_Kong',
    countryCode: 'HK',
    countryName: '中国香港',
    cityName: '香港',
    utcOffset: 8,
    utcOffsetStr: 'UTC+8',
    region: '亚洲'
  },
  {
    id: 'Asia/Taipei',
    countryCode: 'TW',
    countryName: '中国台湾',
    cityName: '台北',
    utcOffset: 8,
    utcOffsetStr: 'UTC+8',
    region: '亚洲'
  },
  {
    id: 'Asia/Bangkok',
    countryCode: 'TH',
    countryName: '泰国',
    cityName: '曼谷',
    utcOffset: 7,
    utcOffsetStr: 'UTC+7',
    region: '亚洲'
  },
  {
    id: 'Asia/Ho_Chi_Minh',
    countryCode: 'VN',
    countryName: '越南',
    cityName: '胡志明市',
    utcOffset: 7,
    utcOffsetStr: 'UTC+7',
    region: '亚洲'
  },
  {
    id: 'Asia/Jakarta',
    countryCode: 'ID',
    countryName: '印度尼西亚',
    cityName: '雅加达',
    utcOffset: 7,
    utcOffsetStr: 'UTC+7',
    region: '亚洲'
  },
  {
    id: 'Asia/Kuala_Lumpur',
    countryCode: 'MY',
    countryName: '马来西亚',
    cityName: '吉隆坡',
    utcOffset: 8,
    utcOffsetStr: 'UTC+8',
    region: '亚洲'
  },
  {
    id: 'Asia/Manila',
    countryCode: 'PH',
    countryName: '菲律宾',
    cityName: '马尼拉',
    utcOffset: 8,
    utcOffsetStr: 'UTC+8',
    region: '亚洲'
  },
  {
    id: 'Asia/Kolkata',
    countryCode: 'IN',
    countryName: '印度',
    cityName: '新德里',
    utcOffset: 5.5,
    utcOffsetStr: 'UTC+5:30',
    region: '亚洲'
  },

  // 中东
  {
    id: 'Asia/Dubai',
    countryCode: 'AE',
    countryName: '阿联酋',
    cityName: '迪拜',
    utcOffset: 4,
    utcOffsetStr: 'UTC+4',
    region: '中东'
  },
  {
    id: 'Asia/Riyadh',
    countryCode: 'SA',
    countryName: '沙特阿拉伯',
    cityName: '利雅得',
    utcOffset: 3,
    utcOffsetStr: 'UTC+3',
    region: '中东'
  },
  {
    id: 'Asia/Tehran',
    countryCode: 'IR',
    countryName: '伊朗',
    cityName: '德黑兰',
    utcOffset: 3.5,
    utcOffsetStr: 'UTC+3:30',
    region: '中东'
  },
  {
    id: 'Asia/Jerusalem',
    countryCode: 'IL',
    countryName: '以色列',
    cityName: '耶路撒冷',
    utcOffset: 2,
    utcOffsetStr: 'UTC+2',
    region: '中东'
  },
  {
    id: 'Europe/Istanbul',
    countryCode: 'TR',
    countryName: '土耳其',
    cityName: '伊斯坦布尔',
    utcOffset: 3,
    utcOffsetStr: 'UTC+3',
    region: '中东'
  },

  // 大洋洲
  {
    id: 'Australia/Sydney',
    countryCode: 'AU',
    countryName: '澳大利亚',
    cityName: '悉尼',
    utcOffset: 11,
    utcOffsetStr: 'UTC+11',
    region: '大洋洲'
  },
  {
    id: 'Australia/Melbourne',
    countryCode: 'AU',
    countryName: '澳大利亚',
    cityName: '墨尔本',
    utcOffset: 11,
    utcOffsetStr: 'UTC+11',
    region: '大洋洲'
  },
  {
    id: 'Pacific/Auckland',
    countryCode: 'NZ',
    countryName: '新西兰',
    cityName: '奥克兰',
    utcOffset: 13,
    utcOffsetStr: 'UTC+13',
    region: '大洋洲'
  },

  // 南美洲
  {
    id: 'America/Sao_Paulo',
    countryCode: 'BR',
    countryName: '巴西',
    cityName: '圣保罗',
    utcOffset: -3,
    utcOffsetStr: 'UTC-3',
    region: '南美洲'
  },
  {
    id: 'America/Buenos_Aires',
    countryCode: 'AR',
    countryName: '阿根廷',
    cityName: '布宜诺斯艾利斯',
    utcOffset: -3,
    utcOffsetStr: 'UTC-3',
    region: '南美洲'
  },
  {
    id: 'America/Santiago',
    countryCode: 'CL',
    countryName: '智利',
    cityName: '圣地亚哥',
    utcOffset: -3,
    utcOffsetStr: 'UTC-3',
    region: '南美洲'
  },
  {
    id: 'America/Lima',
    countryCode: 'PE',
    countryName: '秘鲁',
    cityName: '利马',
    utcOffset: -5,
    utcOffsetStr: 'UTC-5',
    region: '南美洲'
  },
  {
    id: 'America/Bogota',
    countryCode: 'CO',
    countryName: '哥伦比亚',
    cityName: '波哥大',
    utcOffset: -5,
    utcOffsetStr: 'UTC-5',
    region: '南美洲'
  },

  // 非洲 - 北非
  {
    id: 'Africa/Cairo',
    countryCode: 'EG',
    countryName: '埃及',
    cityName: '开罗',
    utcOffset: 2,
    utcOffsetStr: 'UTC+2',
    region: '非洲'
  },
  {
    id: 'Africa/Casablanca',
    countryCode: 'MA',
    countryName: '摩洛哥',
    cityName: '卡萨布兰卡',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '非洲'
  },
  {
    id: 'Africa/Algiers',
    countryCode: 'DZ',
    countryName: '阿尔及利亚',
    cityName: '阿尔及尔',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '非洲'
  },
  {
    id: 'Africa/Tunis',
    countryCode: 'TN',
    countryName: '突尼斯',
    cityName: '突尼斯城',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '非洲'
  },
  {
    id: 'Africa/Tripoli',
    countryCode: 'LY',
    countryName: '利比亚',
    cityName: '的黎波里',
    utcOffset: 2,
    utcOffsetStr: 'UTC+2',
    region: '非洲'
  },

  // 非洲 - 西非
  {
    id: 'Africa/Lagos',
    countryCode: 'NG',
    countryName: '尼日利亚',
    cityName: '拉各斯',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '非洲'
  },
  {
    id: 'Africa/Accra',
    countryCode: 'GH',
    countryName: '加纳',
    cityName: '阿克拉',
    utcOffset: 0,
    utcOffsetStr: 'UTC+0',
    region: '非洲'
  },
  {
    id: 'Africa/Abidjan',
    countryCode: 'CI',
    countryName: '科特迪瓦',
    cityName: '阿比让',
    utcOffset: 0,
    utcOffsetStr: 'UTC+0',
    region: '非洲'
  },
  {
    id: 'Africa/Dakar',
    countryCode: 'SN',
    countryName: '塞内加尔',
    cityName: '达喀尔',
    utcOffset: 0,
    utcOffsetStr: 'UTC+0',
    region: '非洲'
  },
  {
    id: 'Africa/Douala',
    countryCode: 'CM',
    countryName: '喀麦隆',
    cityName: '杜阿拉',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '非洲'
  },

  // 非洲 - 东非
  {
    id: 'Africa/Nairobi',
    countryCode: 'KE',
    countryName: '肯尼亚',
    cityName: '内罗毕',
    utcOffset: 3,
    utcOffsetStr: 'UTC+3',
    region: '非洲'
  },
  {
    id: 'Africa/Dar_es_Salaam',
    countryCode: 'TZ',
    countryName: '坦桑尼亚',
    cityName: '达累斯萨拉姆',
    utcOffset: 3,
    utcOffsetStr: 'UTC+3',
    region: '非洲'
  },
  {
    id: 'Africa/Addis_Ababa',
    countryCode: 'ET',
    countryName: '埃塞俄比亚',
    cityName: '亚的斯亚贝巴',
    utcOffset: 3,
    utcOffsetStr: 'UTC+3',
    region: '非洲'
  },
  {
    id: 'Africa/Kampala',
    countryCode: 'UG',
    countryName: '乌干达',
    cityName: '坎帕拉',
    utcOffset: 3,
    utcOffsetStr: 'UTC+3',
    region: '非洲'
  },
  {
    id: 'Africa/Kigali',
    countryCode: 'RW',
    countryName: '卢旺达',
    cityName: '基加利',
    utcOffset: 2,
    utcOffsetStr: 'UTC+2',
    region: '非洲'
  },

  // 非洲 - 南部非洲
  {
    id: 'Africa/Johannesburg',
    countryCode: 'ZA',
    countryName: '南非',
    cityName: '约翰内斯堡',
    utcOffset: 2,
    utcOffsetStr: 'UTC+2',
    region: '非洲'
  },
  {
    id: 'Africa/Luanda',
    countryCode: 'AO',
    countryName: '安哥拉',
    cityName: '罗安达',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '非洲'
  },
  {
    id: 'Africa/Kinshasa',
    countryCode: 'CD',
    countryName: '刚果（金）',
    cityName: '金沙萨',
    utcOffset: 1,
    utcOffsetStr: 'UTC+1',
    region: '非洲'
  },
  {
    id: 'Africa/Harare',
    countryCode: 'ZW',
    countryName: '津巴布韦',
    cityName: '哈拉雷',
    utcOffset: 2,
    utcOffsetStr: 'UTC+2',
    region: '非洲'
  },
  {
    id: 'Africa/Maputo',
    countryCode: 'MZ',
    countryName: '莫桑比克',
    cityName: '马普托',
    utcOffset: 2,
    utcOffsetStr: 'UTC+2',
    region: '非洲'
  },

  // 非洲 - 岛国
  {
    id: 'Indian/Mauritius',
    countryCode: 'MU',
    countryName: '毛里求斯',
    cityName: '路易港',
    utcOffset: 4,
    utcOffsetStr: 'UTC+4',
    region: '非洲'
  }
];

export const CHINA_TIMEZONE_ID = 'Asia/Shanghai';
export const CHINA_UTC_OFFSET = 8;

/**
 * Get timezone by ID
 */
export function getTimezoneById(id: string): TimezoneInfo | undefined {
  return timezones.find(tz => tz.id === id);
}

/**
 * Get all unique regions
 */
export function getRegions(): string[] {
  return Array.from(new Set(timezones.map(tz => tz.region)));
}

/**
 * Group timezones by region
 */
export function groupTimezonesByRegion(): Record<string, TimezoneInfo[]> {
  return timezones.reduce((groups, tz) => {
    if (!groups[tz.region]) {
      groups[tz.region] = [];
    }
    groups[tz.region].push(tz);
    return groups;
  }, {} as Record<string, TimezoneInfo[]>);
}
