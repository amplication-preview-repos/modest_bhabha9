import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const HoroscopeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="dailyPrediction" multiline source="dailyPrediction" />
        <TextInput
          label="monthlyPrediction"
          multiline
          source="monthlyPrediction"
        />
        <SelectInput
          source="sign"
          label="sign"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="weeklyPrediction"
          multiline
          source="weeklyPrediction"
        />
        <TextInput
          label="yearlyPrediction"
          multiline
          source="yearlyPrediction"
        />
      </SimpleForm>
    </Create>
  );
};
