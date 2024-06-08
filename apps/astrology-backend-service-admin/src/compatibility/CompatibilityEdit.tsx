import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CompatibilityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="sign1" source="sign1" />
        <TextInput label="sign2" source="sign2" />
      </SimpleForm>
    </Edit>
  );
};
