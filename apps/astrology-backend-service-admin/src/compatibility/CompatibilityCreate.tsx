import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CompatibilityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="sign1" source="sign1" />
        <TextInput label="sign2" source="sign2" />
      </SimpleForm>
    </Create>
  );
};
