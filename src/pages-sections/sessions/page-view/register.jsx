"use client";

import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// GLOBAL CUSTOM COMPONENTS
import { Checkbox, TextField, FormProvider } from "components/form-hook";

// LOCAL CUSTOM COMPONENTS
import EyeToggleButton from "../components/eye-toggle-button";

// LOCAL CUSTOM HOOK
import Label from "../components/label";
import BoxLink from "../components/box-link";
import usePasswordVisible from "../use-password-visible";

// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";
export default function RegisterPageView() {
  const {
    visiblePassword,
    togglePasswordVisible
  } = usePasswordVisible();

  
// COMMON INPUT PROPS FOR TEXT FIELD
  const inputProps = {
    endAdornment: <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
  };

  
// REGISTER FORM FIELDS INITIAL VALUES
  const initialValues = {
    name: "",
    email: "",
    password: "",
    re_password: "",
    agreement: false
  };

  
// REGISTER FORM FIELD VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid Email Address").required("Email is required"),
    password: yup.string().required("Password is required"),
    re_password: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Please re-type password"),
    agreement: yup.bool().test("agreement", "You have to agree with our Terms and Conditions!", value => value === true).required("You have to agree with our Terms and Conditions!")
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
      <div className="mb-1">
        <Label>Full Name</Label>
        <TextField fullWidth name="name" size="small" placeholder="Ralph Awards" />
      </div>

      <div className="mb-1">
        <Label>Email or Phone Number</Label>
        <TextField fullWidth name="email" size="small" type="email" placeholder="exmple@mail.com" />
      </div>

      <div className="mb-1">
        <Label>Password</Label>
        <TextField fullWidth size="small" name="password" placeholder="*********" type={visiblePassword ? "text" : "password"} slotProps={{
        input: inputProps
      }} />
      </div>

      <div className="mb-1">
        <Label>Retype Password</Label>
        <TextField fullWidth size="small" name="re_password" placeholder="*********" type={visiblePassword ? "text" : "password"} slotProps={{
        input: inputProps
      }} />
      </div>

      <div className="agreement">
        <Checkbox name="agreement" size="small" color="secondary" label={<FlexBox flexWrap="wrap" alignItems="center" justifyContent="flex-start" gap={1}>
              <Box display={{
          sm: "inline-block",
          xs: "none"
        }}>By signing up, you agree to</Box>
              <Box display={{
          sm: "none",
          xs: "inline-block"
        }}>Accept Our</Box>
              <BoxLink title="Terms & Condition" href="/" />
            </FlexBox>} />
      </div>

      <LoadingButton fullWidth size="large" type="submit" color="primary" variant="contained" loading={isSubmitting}>
        Create an Account
      </LoadingButton>
    </FormProvider>;
}