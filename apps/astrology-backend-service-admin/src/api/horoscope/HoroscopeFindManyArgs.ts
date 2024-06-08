import { HoroscopeWhereInput } from "./HoroscopeWhereInput";
import { HoroscopeOrderByInput } from "./HoroscopeOrderByInput";

export type HoroscopeFindManyArgs = {
  where?: HoroscopeWhereInput;
  orderBy?: Array<HoroscopeOrderByInput>;
  skip?: number;
  take?: number;
};
