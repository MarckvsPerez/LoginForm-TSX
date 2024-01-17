import * as Yup from 'yup';

 const LoginFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email.')
        .required('Required'),
    phone: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    addressLine1: Yup.string()
        .required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string()
        .required('Required'),
    state: Yup.string()
        .required('Required'),
    country: Yup.string()
        .required('Required'),
    arrivealDate: Yup.date()
        .required('Required'),
    departureDate: Yup.date()
        .required('Required'),
    message: Yup.string(),
    termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.'),
});

 const LoginFormInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    arrivealDate: '',
    departureDate: '',
    message: '',
    termsOfService: false
};

export { LoginFormSchema, LoginFormInitialValues };