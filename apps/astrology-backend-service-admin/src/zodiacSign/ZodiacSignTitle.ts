import { ZodiacSign as TZodiacSign } from "../api/zodiacSign/ZodiacSign";

export const ZODIACSIGN_TITLE_FIELD = "name";

export const ZodiacSignTitle = (record: TZodiacSign): string => {
  return record.name?.toString() || String(record.id);
};
