import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { SelectWrapperProps } from "../../../types/types.d";

export const SelectWrapper: React.FC<SelectWrapperProps> = ({ name, options, ...otherProps }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        setFieldValue(name, value);
    };

    const configSelect: React.ComponentProps<typeof TextField> = {
        ...field,
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth: true,
        onChange: handleChange,
    };

    if (meta && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <TextField {...configSelect}>
            {options &&
                Object.keys(options).map((item, pos) => (
                    <MenuItem key={pos} value={item}>
                        {options[item]}
                    </MenuItem>
                ))}
        </TextField>
    );
};
