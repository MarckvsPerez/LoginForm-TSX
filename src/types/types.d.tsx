export interface LoginFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    arrivealDate: string;
    departureDate: string;
    message: string;
    termsOfService: boolean;
}

export interface SelectWrapperProps {
    name: string;
    label: string;
    options: { [key: string]: string };
}

export interface DataTimePickerProps {
    name: string;
    label: string;
}

export interface CheckboxProps {
    name: string;
    label: string;
    legend: string
}

export interface SubmitButtonProps {
    text: string;
}