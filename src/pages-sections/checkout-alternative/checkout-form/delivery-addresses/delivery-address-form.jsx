import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// MUI
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";

// LOCAL CUSTOM COMPONENTS
import { FormProvider, TextField } from "components/form-hook";

// CUSTOM DATA MODEL

const validationSchema = yup.object({
  street2: yup.string(),
  name: yup.string().required("Name is required"),
  street1: yup.string().required("Street is required"),
  phone: yup.string().required("Phone is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  zip: yup.string().required("Zip is required")
});


// ==================================================================


// ==================================================================

export default function DeliveryAddressForm({
  deliveryAddress,
  handleCloseModal
}) {
  const initialValues = useMemo(() => ({
    name: deliveryAddress?.name || "",
    phone: deliveryAddress?.phone || "",
    zip: deliveryAddress?.zip || "",
    city: deliveryAddress?.city || "",
    state: deliveryAddress?.state || "",
    country: deliveryAddress?.country || "",
    street1: deliveryAddress?.street1 || "",
    street2: deliveryAddress?.street2 || ""
  }), [deliveryAddress]);
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema)
  });
  const {
    reset,
    handleSubmit
  } = methods;
  const handleSubmitForm = handleSubmit(values => {
    console.log(values);
    handleCloseModal();
    reset();
  });
  return <Dialog open onClose={handleCloseModal}>
      <DialogContent>
        <Typography variant="h5" sx={{
        mb: 4
      }}>
          Add New Address Information
        </Typography>

        <FormProvider methods={methods} onSubmit={handleSubmitForm}>
          <Grid container spacing={3}>
            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="name" label="Enter Your Name" />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="street1" label="Street line 1" />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="street2" label="Address line 2" />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="phone" label="Enter Your Phone" />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="city" label="City" />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="state" label="State" />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="zip" label="Zip" />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="country" label="Country" />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <Button color="primary" variant="contained" type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </DialogContent>
    </Dialog>;
}