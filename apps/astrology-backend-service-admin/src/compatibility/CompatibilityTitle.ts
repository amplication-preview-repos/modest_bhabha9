import { Compatibility as TCompatibility } from "../api/compatibility/Compatibility";

export const COMPATIBILITY_TITLE_FIELD = "sign1";

export const CompatibilityTitle = (record: TCompatibility): string => {
  return record.sign1?.toString() || String(record.id);
};
