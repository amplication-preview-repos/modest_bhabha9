import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HoroscopeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Horoscopes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="dailyPrediction" source="dailyPrediction" />
        <TextField label="ID" source="id" />
        <TextField label="monthlyPrediction" source="monthlyPrediction" />
        <TextField label="sign" source="sign" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weeklyPrediction" source="weeklyPrediction" />
        <TextField label="yearlyPrediction" source="yearlyPrediction" />
      </Datagrid>
    </List>
  );
};
