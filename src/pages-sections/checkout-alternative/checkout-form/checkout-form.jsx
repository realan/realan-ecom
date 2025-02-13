"use client";

import Card from "@mui/material/Card";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// GLOBAL CUSTOM COMPONENTS
import { FormProvider } from "components/form-hook";

// LOCAL CUSTOM COMPONENTS
import Heading from "./heading";
import DeliveryDate from "./delivery-date";
import DeliveryAddresses from "./delivery-addresses";
import Voucher from "./payments/voucher";
import CardList from "./payments/card-list";
import PaymentForm from "./payments/payment-form";

// TYPES

const validationSchema = yup.object().shape({
  card: yup.string(),
  voucher: yup.string(),
  saveCard: yup.boolean(),
  date: yup.string().required("Delivery date is required"),
  time: yup.string().required("Delivery time is required"),
  address: yup.string().required("Delivery address is required"),
  cardHolderName: yup.string().when("card", {
    is: val => !val,
    then: Schema => Schema.required("Name is required")
  }),
  cardNo: yup.string().when("card", {
    is: val => !val,
    then: Schema => Schema.required("Card No is required")
  }),
  cardExpiry: yup.string().when("card", {
    is: val => !val,
    then: Schema => Schema.required("Expiry is required")
  }),
  cardCVC: yup.string().when("card", {
    is: val => !val,
    then: Schema => Schema.required("CVC is required")
  })
});


// ==============================================================


// ==============================================================

export default function CheckoutForm({
  cards,
  deliveryAddresses,
  deliveryTimes
}) {
  const initialValues = {
    card: "",
    date: "",
    time: "",
    address: "",
    voucher: "",
    cardNo: "",
    cardCVC: "",
    cardExpiry: "",
    cardHolderName: "",
    saveCard: false
  };
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema)
  });
  const {
    watch,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = methods;
  const handleSubmitForm = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
    
// router.push("/payment");
  });
  return <FormProvider methods={methods} onSubmit={handleSubmitForm}>
      <DeliveryDate deliveryTimes={deliveryTimes} />

      <DeliveryAddresses deliveryAddresses={deliveryAddresses} />

      <Card sx={{
      p: 3,
      mb: 3
    }}>
        <Heading number={3} title="Payment Details" />

        {/* CREDIT CARD FORM */}
        {!watch("card") && <PaymentForm />}

        {/* SAVED CREDIT CARD LIST */}
        <CardList cards={cards} />

        {/* COUPON/VOUCHER APPLY FORM */}
        <Voucher />

        <LoadingButton size="large" type="submit" color="primary" variant="contained" loading={isSubmitting}>
          Place Order
        </LoadingButton>
      </Card>
    </FormProvider>;
}