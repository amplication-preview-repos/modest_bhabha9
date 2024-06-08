import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const HoroscopeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
