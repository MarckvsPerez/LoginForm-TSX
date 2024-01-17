import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

export function Textfield({ name, label, ...otherProps }: TextFieldProps & { name: string; label?: string }) {
    const [field, meta] = useField(name);

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined' as const,
        error: false as boolean,
        helperText: "" as string,
    };

    if (meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <TextField
            {...configTextfield}
            label={label}
        />
    );
}
