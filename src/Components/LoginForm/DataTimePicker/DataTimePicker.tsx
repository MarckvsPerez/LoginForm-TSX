import React from "react";
import { TextField } from "@mui/material";
import { DataTimePickerProps } from "../../../types/types.d";
import { useField } from "formik";

export const DataTimePicker: React.FC<DataTimePickerProps> = ({
  name,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const configDataTimePicker: React.ComponentProps<typeof TextField> = {
    ...field,
    ...otherProps,
    type: "date",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
    error: meta.touched && !!meta.error,
    helperText: meta.touched && meta.error,
  };

  return <TextField {...configDataTimePicker} />;
};
