import { SortOrder } from "../../util/SortOrder";

export type HoroscopeOrderByInput = {
  createdAt?: SortOrder;
  dailyPrediction?: SortOrder;
  id?: SortOrder;
  monthlyPrediction?: SortOrder;
  sign?: SortOrder;
  updatedAt?: SortOrder;
  weeklyPrediction?: SortOrder;
  yearlyPrediction?: SortOrder;
};
