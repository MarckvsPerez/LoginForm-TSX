import React from "react";
import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormControl,
  Checkbox,
} from "@mui/material";
import { CheckboxProps } from "../../../types/types.d";
import { useField, useFormikContext } from "formik";

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  name,
  label,
  legend,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };
  

  const cofigCheckbox = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };
  
  const configFormControl = {
    error: meta.touched && !!meta.error,
  }
  return (
    <FormControl {...configFormControl} >
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox {...cofigCheckbox }/>} label={label} />
      </FormGroup>
    </FormControl>
  );
};
