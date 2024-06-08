import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompatibilityWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  sign1?: StringNullableFilter;
  sign2?: StringNullableFilter;
};
