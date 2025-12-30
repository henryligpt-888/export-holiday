export type TimezoneInfo = {
  id: string;               // IANA timezone (e.g., "America/New_York")
  countryCode: string;      // ISO country code (e.g., "US")
  countryName: string;      // Country name in Chinese
  cityName: string;         // City name in Chinese
  utcOffset: number;        // Offset in hours (e.g., -5)
  utcOffsetStr: string;     // Display string (e.g., "UTC-5")
  region: string;           // Continent/region in Chinese
};

export type SavedCustomer = {
  id: string;
  name: string;             // Customer/company name
  timezoneId: string;       // Reference to TimezoneInfo.id
  country: string;          // Country name
  notes?: string;           // Optional notes
  createdAt: string;        // ISO date string
};

export type MeetingSlot = {
  hour: number;             // Hour in UTC (0-23)
  localTimes: {
    timezoneId: string;
    countryName: string;
    cityName: string;
    localHour: number;
    isWorkingHour: boolean; // 9-18 local time
    displayTime: string;    // e.g., "09:00"
  }[];
  score: number;            // How suitable (all working hours = 100)
};
