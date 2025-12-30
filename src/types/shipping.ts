export type ShippingRegion =
  | '北美洲'
  | '欧洲'
  | '东南亚'
  | '中东'
  | '非洲'
  | '大洋洲'
  | '南美洲'
  | '东亚';

export type ShippingRoute = {
  id: string;
  destinationPort: string;      // Port name in Chinese
  destinationPortEn: string;    // Port name in English
  country: string;              // Country name
  countryCode: string;          // ISO country code
  region: ShippingRegion;
  transitDays: number;          // Average transit days from Qingdao
  transitDaysRange?: {          // Optional range
    min: number;
    max: number;
  };
  notes?: string;               // Special notes (seasonal delays, etc.)
  shippingLines?: string[];     // Common shipping lines for this route
};

export type OriginPort = {
  name: string;
  nameEn: string;
  country: string;
  code: string;
};
