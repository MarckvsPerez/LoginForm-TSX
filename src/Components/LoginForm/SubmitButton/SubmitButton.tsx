import React from "react";
import { useFormikContext } from "formik";
import { Button } from "@mui/material";
import { SubmitButtonProps } from "../../../types/types.d";

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };
  const condifgButton: React.ComponentProps<typeof Button> = {
    ...otherProps,
    color: "primary",
    variant: "contained",
    fullWidth: true,
    onClick: handleSubmit,
  };
  return <Button {...condifgButton}>{text}</Button>;
};
