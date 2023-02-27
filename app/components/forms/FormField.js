import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput {...otherProps} onChangeText={handleChange(name)} onBlur={() => setFieldTouched(name)} width={width} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
