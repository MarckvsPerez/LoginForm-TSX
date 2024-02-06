import { styled, Typography, Grid, Paper } from "@mui/material";
import { useFormik, Form, FormikProvider } from "formik";
import { LoginFormSchema, LoginFormInitialValues } from "./LoginFormSchema";
import { LoginFormValues } from "../../types/types.d";
import { Textfield } from "./Textfield/Textfield";
import { SelectWrapper } from "./Select/Select";
import countries from "../../data/countries.json";
import { DataTimePicker } from "./DataTimePicker/DataTimePicker";
import { CheckboxComponent } from "./CheckboxComponent/CheckboxComponent";
import { SubmitButton } from "./SubmitButton/SubmitButton";

const FormWrapper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const estiloPaper = {
  padding: 2,
};

export function LoginForm() {
  const formik = useFormik({
    initialValues: LoginFormInitialValues,
    validationSchema: LoginFormSchema,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values: LoginFormValues) {
    console.log(values);
  }

  return (
    <Paper sx={estiloPaper}>
      <FormikProvider value={formik}>
        <FormWrapper>
          <Form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">Your details</Typography>
              </Grid>

              <Grid item xs={6}>
                <Textfield name="firstName" label="First Name" />
              </Grid>
              <Grid item xs={6}>
                <Textfield name="lastName" label="lastName" />
              </Grid>
              <Grid item xs={12}>
                <Textfield name="phone" label="phone" />
              </Grid>
              <Grid item xs={12}>
                <Textfield name="email" label="email" />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h5">Address</Typography>
              </Grid>

              <Grid item xs={12}>
                <Textfield name="addressLine1" label="Address Line 1" />
              </Grid>

              <Grid item xs={12}>
                <Textfield name="addressLine2" label="Address Line 2" />
              </Grid>

              <Grid item xs={6}>
                <Textfield name="city" label="City" />
              </Grid>

              <Grid item xs={6}>
                <Textfield name="state" label="State" />
              </Grid>

              <Grid item xs={12}>
                <SelectWrapper
                  name="country"
                  label="country"
                  options={countries}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h5"> Booking information</Typography>
              </Grid>

              <Grid item xs={6}>
                <DataTimePicker name="arrivealDate" label="arrivealDate" />
              </Grid>

              <Grid item xs={6}>
                <DataTimePicker name="departureDate" label="departureDate" />
              </Grid>

              <Grid item xs={12}>
                <Textfield  name="message" label="Message" multiline={true} rows={4}/>
              </Grid>

              <Grid item xs={12}>
                <CheckboxComponent  name="termsOfService" label="I agree" legend="termsOfService" />
              </Grid>

              <Grid item xs={12}>
                <SubmitButton text={"Enviar"}/>
              </Grid>
            </Grid>
          </Form>
        </FormWrapper>
      </FormikProvider>
    </Paper>
  );
}
