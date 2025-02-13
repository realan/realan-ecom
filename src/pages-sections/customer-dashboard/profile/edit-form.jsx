"use client";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// MUI
import Grid from "@mui/material/Grid2";
import MuiTextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// GLOBAL CUSTOM COMPONENTS
import { FormProvider, TextField } from "components/form-hook";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function ProfileEditForm({
  user
}) {
  const initialValues = {
    email: user.email || "",
    contact: user.phone || "",
    lastName: user.name.lastName || "",
    firstName: user.name.firstName || "",
    birthOfDate: new Date(user.dateOfBirth) || new Date()
  };
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    contact: yup.string().required("Contact is required"),
    birthOfDate: yup.date().required("Birth date is required")
  });
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema)
  });
  const {
    control,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = methods;

  
// FORM SUBMIT HANDLER
  const handleSubmitForm = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
  });
  return <FormProvider methods={methods} onSubmit={handleSubmitForm}>
      <Grid container spacing={3}>
        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <TextField fullWidth name="firstName" label="First Name" />
        </Grid>

        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <TextField fullWidth name="lastName" label="Last Name" />
        </Grid>

        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <TextField fullWidth name="email" type="email" label="Email" />
        </Grid>

        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <TextField fullWidth label="Phone" name="contact" />
        </Grid>

        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <Controller name="birthOfDate" control={control} render={({
          field,
          fieldState: {
            error
          }
        }) => <DatePicker {...field} label="Birth Date" slots={{
          textField: MuiTextField
        }} slotProps={{
          textField: {
            sx: {
              mb: 1
            },
            size: "small",
            fullWidth: true,
            error: Boolean(error),
            helperText: error?.message || ""
          }
        }} />} />
        </Grid>

        <Grid size={12}>
          <LoadingButton type="submit" variant="contained" color="primary" loading={isSubmitting}>
            Save Changes
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>;
}