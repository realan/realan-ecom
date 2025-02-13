"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// MUI
import Grid from "@mui/material/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

// GLOBAL CUSTOM COMPONENTS
import { FormProvider, TextField } from "components/form-hook";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function PaymentForm({
  payment
}) {
  const initialValues = {
    exp: payment?.exp || "",
    cvc: payment?.cvc || "",
    card_no: payment?.card_no || "",
    name: payment?.payment_method || ""
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    cvc: yup.string().required("Card CVC is required"),
    card_no: yup.string().required("Card No is required"),
    exp: yup.string().required("Card expiry date is required")
  });
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema)
  });
  const {
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
          <TextField fullWidth name="card_no" label="Card Number" />
        </Grid>

        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <TextField fullWidth name="name" label="Name on Card" />
        </Grid>

        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <TextField fullWidth name="exp" label="Exp. Date" />
        </Grid>

        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <TextField fullWidth name="cvc" label="CVC" />
        </Grid>

        <Grid size={12}>
          <LoadingButton type="submit" variant="contained" color="primary" loading={isSubmitting}>
            Save Changes
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>;
}