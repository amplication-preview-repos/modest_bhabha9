import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const HoroscopeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dailyPrediction" source="dailyPrediction" />
        <TextField label="ID" source="id" />
        <TextField label="monthlyPrediction" source="monthlyPrediction" />
        <TextField label="sign" source="sign" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weeklyPrediction" source="weeklyPrediction" />
        <TextField label="yearlyPrediction" source="yearlyPrediction" />
      </SimpleShowLayout>
    </Show>
  );
};
