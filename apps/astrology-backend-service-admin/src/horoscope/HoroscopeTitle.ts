import { Horoscope as THoroscope } from "../api/horoscope/Horoscope";

export const HOROSCOPE_TITLE_FIELD = "id";

export const HoroscopeTitle = (record: THoroscope): string => {
  return record.id?.toString() || String(record.id);
};
