import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HoroscopeWhereInput = {
  dailyPrediction?: StringNullableFilter;
  id?: StringFilter;
  monthlyPrediction?: StringNullableFilter;
  sign?: "Option1";
  weeklyPrediction?: StringNullableFilter;
  yearlyPrediction?: StringNullableFilter;
};
