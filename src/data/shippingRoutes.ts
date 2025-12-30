import { ShippingRoute, OriginPort, ShippingRegion } from '@/types/shipping';

export const ORIGIN_PORT: OriginPort = {
  name: '青岛港',
  nameEn: 'Qingdao Port',
  country: '中国',
  code: 'CNQIN'
};

export const shippingRoutes: ShippingRoute[] = [
  // 东亚
  {
    id: 'kr-bus',
    destinationPort: '釜山港',
    destinationPortEn: 'Busan',
    country: '韩国',
    countryCode: 'KR',
    region: '东亚',
    transitDays: 2,
    transitDaysRange: { min: 1, max: 3 },
    shippingLines: ['COSCO', 'Sinokor', 'KMTC', 'Heung-A']
  },
  {
    id: 'jp-tyo',
    destinationPort: '东京港',
    destinationPortEn: 'Tokyo',
    country: '日本',
    countryCode: 'JP',
    region: '东亚',
    transitDays: 3,
    transitDaysRange: { min: 2, max: 4 },
    shippingLines: ['COSCO', 'OOCL', 'Sinokor', 'ONE']
  },
  {
    id: 'jp-osa',
    destinationPort: '大阪港',
    destinationPortEn: 'Osaka',
    country: '日本',
    countryCode: 'JP',
    region: '东亚',
    transitDays: 4,
    transitDaysRange: { min: 3, max: 5 },
    shippingLines: ['COSCO', 'OOCL', 'Yang Ming']
  },

  // 东南亚
  {
    id: 'sg-sin',
    destinationPort: '新加坡港',
    destinationPortEn: 'Singapore',
    country: '新加坡',
    countryCode: 'SG',
    region: '东南亚',
    transitDays: 7,
    transitDaysRange: { min: 5, max: 9 },
    shippingLines: ['COSCO', 'OOCL', 'PIL', 'Yang Ming', 'Evergreen']
  },
  {
    id: 'my-pkg',
    destinationPort: '巴生港',
    destinationPortEn: 'Port Klang',
    country: '马来西亚',
    countryCode: 'MY',
    region: '东南亚',
    transitDays: 8,
    transitDaysRange: { min: 6, max: 10 },
    shippingLines: ['COSCO', 'Evergreen', 'Yang Ming']
  },
  {
    id: 'th-bkk',
    destinationPort: '林查班港',
    destinationPortEn: 'Laem Chabang',
    country: '泰国',
    countryCode: 'TH',
    region: '东南亚',
    transitDays: 10,
    transitDaysRange: { min: 8, max: 12 },
    shippingLines: ['COSCO', 'RCL', 'SITC', 'Evergreen']
  },
  {
    id: 'vn-hcm',
    destinationPort: '胡志明港',
    destinationPortEn: 'Ho Chi Minh (Cat Lai)',
    country: '越南',
    countryCode: 'VN',
    region: '东南亚',
    transitDays: 8,
    transitDaysRange: { min: 6, max: 10 },
    shippingLines: ['COSCO', 'SITC', 'Evergreen', 'OOCL']
  },
  {
    id: 'vn-hai',
    destinationPort: '海防港',
    destinationPortEn: 'Hai Phong',
    country: '越南',
    countryCode: 'VN',
    region: '东南亚',
    transitDays: 5,
    transitDaysRange: { min: 3, max: 6 },
    shippingLines: ['COSCO', 'SITC', 'Heung-A']
  },
  {
    id: 'id-jkt',
    destinationPort: '雅加达港',
    destinationPortEn: 'Jakarta (Tanjung Priok)',
    country: '印度尼西亚',
    countryCode: 'ID',
    region: '东南亚',
    transitDays: 12,
    transitDaysRange: { min: 10, max: 14 },
    shippingLines: ['COSCO', 'Evergreen', 'PIL']
  },
  {
    id: 'ph-mnl',
    destinationPort: '马尼拉港',
    destinationPortEn: 'Manila',
    country: '菲律宾',
    countryCode: 'PH',
    region: '东南亚',
    transitDays: 6,
    transitDaysRange: { min: 4, max: 8 },
    shippingLines: ['COSCO', 'Evergreen', 'Yang Ming']
  },

  // 北美洲
  {
    id: 'us-la',
    destinationPort: '洛杉矶港',
    destinationPortEn: 'Los Angeles',
    country: '美国',
    countryCode: 'US',
    region: '北美洲',
    transitDays: 14,
    transitDaysRange: { min: 12, max: 16 },
    shippingLines: ['COSCO', 'OOCL', 'Evergreen', 'Maersk', 'MSC']
  },
  {
    id: 'us-lb',
    destinationPort: '长滩港',
    destinationPortEn: 'Long Beach',
    country: '美国',
    countryCode: 'US',
    region: '北美洲',
    transitDays: 14,
    transitDaysRange: { min: 12, max: 16 },
    shippingLines: ['COSCO', 'OOCL', 'Evergreen', 'ONE']
  },
  {
    id: 'us-sea',
    destinationPort: '西雅图港',
    destinationPortEn: 'Seattle',
    country: '美国',
    countryCode: 'US',
    region: '北美洲',
    transitDays: 12,
    transitDaysRange: { min: 10, max: 14 },
    shippingLines: ['COSCO', 'OOCL', 'Yang Ming']
  },
  {
    id: 'us-ny',
    destinationPort: '纽约港',
    destinationPortEn: 'New York/New Jersey',
    country: '美国',
    countryCode: 'US',
    region: '北美洲',
    transitDays: 35,
    transitDaysRange: { min: 32, max: 40 },
    notes: '经巴拿马运河，旺季可能延长',
    shippingLines: ['Maersk', 'MSC', 'COSCO', 'CMA CGM']
  },
  {
    id: 'ca-van',
    destinationPort: '温哥华港',
    destinationPortEn: 'Vancouver',
    country: '加拿大',
    countryCode: 'CA',
    region: '北美洲',
    transitDays: 12,
    transitDaysRange: { min: 10, max: 14 },
    shippingLines: ['COSCO', 'Evergreen', 'Yang Ming', 'OOCL']
  },

  // 欧洲
  {
    id: 'nl-rtm',
    destinationPort: '鹿特丹港',
    destinationPortEn: 'Rotterdam',
    country: '荷兰',
    countryCode: 'NL',
    region: '欧洲',
    transitDays: 30,
    transitDaysRange: { min: 26, max: 33 },
    shippingLines: ['Maersk', 'MSC', 'COSCO', 'CMA CGM', 'Hapag-Lloyd']
  },
  {
    id: 'de-ham',
    destinationPort: '汉堡港',
    destinationPortEn: 'Hamburg',
    country: '德国',
    countryCode: 'DE',
    region: '欧洲',
    transitDays: 32,
    transitDaysRange: { min: 28, max: 35 },
    shippingLines: ['Hapag-Lloyd', 'Maersk', 'MSC', 'COSCO']
  },
  {
    id: 'be-ant',
    destinationPort: '安特卫普港',
    destinationPortEn: 'Antwerp',
    country: '比利时',
    countryCode: 'BE',
    region: '欧洲',
    transitDays: 30,
    transitDaysRange: { min: 27, max: 33 },
    shippingLines: ['Maersk', 'MSC', 'COSCO', 'CMA CGM']
  },
  {
    id: 'uk-fel',
    destinationPort: '费利克斯托港',
    destinationPortEn: 'Felixstowe',
    country: '英国',
    countryCode: 'GB',
    region: '欧洲',
    transitDays: 33,
    transitDaysRange: { min: 29, max: 36 },
    shippingLines: ['Maersk', 'COSCO', 'OOCL', 'Evergreen']
  },
  {
    id: 'fr-leh',
    destinationPort: '勒阿弗尔港',
    destinationPortEn: 'Le Havre',
    country: '法国',
    countryCode: 'FR',
    region: '欧洲',
    transitDays: 31,
    transitDaysRange: { min: 28, max: 34 },
    shippingLines: ['CMA CGM', 'Maersk', 'MSC', 'COSCO']
  },
  {
    id: 'es-bcn',
    destinationPort: '巴塞罗那港',
    destinationPortEn: 'Barcelona',
    country: '西班牙',
    countryCode: 'ES',
    region: '欧洲',
    transitDays: 28,
    transitDaysRange: { min: 25, max: 31 },
    shippingLines: ['MSC', 'Maersk', 'CMA CGM']
  },
  {
    id: 'it-gen',
    destinationPort: '热那亚港',
    destinationPortEn: 'Genoa',
    country: '意大利',
    countryCode: 'IT',
    region: '欧洲',
    transitDays: 27,
    transitDaysRange: { min: 24, max: 30 },
    shippingLines: ['MSC', 'Maersk', 'COSCO', 'Evergreen']
  },

  // 中东
  {
    id: 'ae-dxb',
    destinationPort: '杰贝阿里港',
    destinationPortEn: 'Jebel Ali (Dubai)',
    country: '阿联酋',
    countryCode: 'AE',
    region: '中东',
    transitDays: 18,
    transitDaysRange: { min: 15, max: 21 },
    shippingLines: ['COSCO', 'Maersk', 'MSC', 'OOCL', 'Evergreen']
  },
  {
    id: 'sa-jed',
    destinationPort: '吉达港',
    destinationPortEn: 'Jeddah',
    country: '沙特阿拉伯',
    countryCode: 'SA',
    region: '中东',
    transitDays: 22,
    transitDaysRange: { min: 19, max: 25 },
    shippingLines: ['COSCO', 'MSC', 'Evergreen', 'Maersk']
  },
  {
    id: 'sa-dmm',
    destinationPort: '达曼港',
    destinationPortEn: 'Dammam',
    country: '沙特阿拉伯',
    countryCode: 'SA',
    region: '中东',
    transitDays: 20,
    transitDaysRange: { min: 17, max: 23 },
    shippingLines: ['COSCO', 'MSC', 'OOCL']
  },
  {
    id: 'kw-kwi',
    destinationPort: '科威特港',
    destinationPortEn: 'Kuwait',
    country: '科威特',
    countryCode: 'KW',
    region: '中东',
    transitDays: 21,
    transitDaysRange: { min: 18, max: 24 },
    shippingLines: ['COSCO', 'MSC', 'Evergreen']
  },
  {
    id: 'tr-ist',
    destinationPort: '伊斯坦布尔港',
    destinationPortEn: 'Istanbul (Ambarli)',
    country: '土耳其',
    countryCode: 'TR',
    region: '中东',
    transitDays: 25,
    transitDaysRange: { min: 22, max: 28 },
    shippingLines: ['MSC', 'Maersk', 'COSCO', 'Turkon']
  },

  // 南亚
  {
    id: 'in-nhv',
    destinationPort: '那瓦舍瓦港',
    destinationPortEn: 'Nhava Sheva (Mumbai)',
    country: '印度',
    countryCode: 'IN',
    region: '中东',
    transitDays: 16,
    transitDaysRange: { min: 14, max: 19 },
    shippingLines: ['COSCO', 'Maersk', 'MSC', 'Evergreen']
  },
  {
    id: 'pk-khi',
    destinationPort: '卡拉奇港',
    destinationPortEn: 'Karachi',
    country: '巴基斯坦',
    countryCode: 'PK',
    region: '中东',
    transitDays: 18,
    transitDaysRange: { min: 15, max: 21 },
    shippingLines: ['COSCO', 'Maersk', 'PIL']
  },

  // 大洋洲
  {
    id: 'au-syd',
    destinationPort: '悉尼港',
    destinationPortEn: 'Sydney',
    country: '澳大利亚',
    countryCode: 'AU',
    region: '大洋洲',
    transitDays: 16,
    transitDaysRange: { min: 14, max: 18 },
    shippingLines: ['COSCO', 'OOCL', 'ANL', 'Maersk']
  },
  {
    id: 'au-mel',
    destinationPort: '墨尔本港',
    destinationPortEn: 'Melbourne',
    country: '澳大利亚',
    countryCode: 'AU',
    region: '大洋洲',
    transitDays: 18,
    transitDaysRange: { min: 15, max: 20 },
    shippingLines: ['COSCO', 'OOCL', 'ANL']
  },
  {
    id: 'nz-akl',
    destinationPort: '奥克兰港',
    destinationPortEn: 'Auckland',
    country: '新西兰',
    countryCode: 'NZ',
    region: '大洋洲',
    transitDays: 18,
    transitDaysRange: { min: 16, max: 21 },
    shippingLines: ['COSCO', 'ANL', 'Maersk']
  },

  // 南美洲
  {
    id: 'br-santos',
    destinationPort: '桑托斯港',
    destinationPortEn: 'Santos',
    country: '巴西',
    countryCode: 'BR',
    region: '南美洲',
    transitDays: 45,
    transitDaysRange: { min: 40, max: 50 },
    notes: '航程较长，建议提前规划',
    shippingLines: ['COSCO', 'Maersk', 'MSC', 'Evergreen']
  },
  {
    id: 'cl-val',
    destinationPort: '瓦尔帕莱索港',
    destinationPortEn: 'Valparaiso',
    country: '智利',
    countryCode: 'CL',
    region: '南美洲',
    transitDays: 35,
    transitDaysRange: { min: 32, max: 40 },
    shippingLines: ['COSCO', 'Evergreen', 'Hapag-Lloyd']
  },
  {
    id: 'co-ctg',
    destinationPort: '卡塔赫纳港',
    destinationPortEn: 'Cartagena',
    country: '哥伦比亚',
    countryCode: 'CO',
    region: '南美洲',
    transitDays: 38,
    transitDaysRange: { min: 35, max: 42 },
    shippingLines: ['COSCO', 'MSC', 'Evergreen']
  },
  {
    id: 'pe-cal',
    destinationPort: '卡亚俄港',
    destinationPortEn: 'Callao',
    country: '秘鲁',
    countryCode: 'PE',
    region: '南美洲',
    transitDays: 32,
    transitDaysRange: { min: 28, max: 36 },
    shippingLines: ['COSCO', 'Evergreen', 'MSC']
  },

  // 非洲
  {
    id: 'za-dbn',
    destinationPort: '德班港',
    destinationPortEn: 'Durban',
    country: '南非',
    countryCode: 'ZA',
    region: '非洲',
    transitDays: 28,
    transitDaysRange: { min: 25, max: 32 },
    shippingLines: ['COSCO', 'Maersk', 'MSC', 'PIL']
  },
  {
    id: 'eg-psd',
    destinationPort: '塞得港',
    destinationPortEn: 'Port Said',
    country: '埃及',
    countryCode: 'EG',
    region: '非洲',
    transitDays: 20,
    transitDaysRange: { min: 17, max: 23 },
    shippingLines: ['COSCO', 'MSC', 'Maersk', 'CMA CGM']
  },
  {
    id: 'ng-lag',
    destinationPort: '拉各斯港',
    destinationPortEn: 'Lagos (Apapa)',
    country: '尼日利亚',
    countryCode: 'NG',
    region: '非洲',
    transitDays: 35,
    transitDaysRange: { min: 32, max: 40 },
    notes: '港口拥堵风险，建议预留时间',
    shippingLines: ['COSCO', 'Maersk', 'MSC', 'PIL']
  },
  {
    id: 'ke-mom',
    destinationPort: '蒙巴萨港',
    destinationPortEn: 'Mombasa',
    country: '肯尼亚',
    countryCode: 'KE',
    region: '非洲',
    transitDays: 25,
    transitDaysRange: { min: 22, max: 28 },
    shippingLines: ['COSCO', 'Maersk', 'PIL']
  }
];

// Region colors for UI
export const regionColors: Record<ShippingRegion, string> = {
  '东亚': 'bg-indigo-500',
  '东南亚': 'bg-green-500',
  '北美洲': 'bg-blue-500',
  '欧洲': 'bg-purple-500',
  '中东': 'bg-amber-500',
  '大洋洲': 'bg-cyan-500',
  '南美洲': 'bg-red-500',
  '非洲': 'bg-orange-500'
};

// Region order for display
export const regionOrder: ShippingRegion[] = [
  '东亚',
  '东南亚',
  '北美洲',
  '欧洲',
  '中东',
  '大洋洲',
  '南美洲',
  '非洲'
];

/**
 * Group routes by region
 */
export function groupRoutesByRegion(): Record<ShippingRegion, ShippingRoute[]> {
  return shippingRoutes.reduce((groups, route) => {
    if (!groups[route.region]) {
      groups[route.region] = [];
    }
    groups[route.region].push(route);
    return groups;
  }, {} as Record<ShippingRegion, ShippingRoute[]>);
}

/**
 * Get all unique regions
 */
export function getRegions(): ShippingRegion[] {
  return regionOrder.filter(region =>
    shippingRoutes.some(route => route.region === region)
  );
}
