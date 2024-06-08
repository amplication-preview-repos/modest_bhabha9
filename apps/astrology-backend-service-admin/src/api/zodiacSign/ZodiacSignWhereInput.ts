import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ZodiacSignWhereInput = {
  dateRange?: StringNullableFilter;
  element?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  quality?: "Option1";
};
