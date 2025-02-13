"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// MUI
import LoadingButton from "@mui/lab/LoadingButton";

// LOCAL CUSTOM HOOKS
import useCart from "hooks/useCart";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function AddToCart({
  product
}) {
  const {
    id,
    slug,
    title,
    thumbnail,
    price
  } = product;
  const {
    dispatch
  } = useCart();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          id,
          slug,
          price,
          title,
          thumbnail,
          qty: 1
        }
      });
      router.push("/mini-cart", {
        scroll: false
      });
      setIsLoading(false);
    }, 500);
  };
  return <LoadingButton fullWidth color="dark" disableElevation variant="contained" loading={isLoading} onClick={handleCart}>
      Add To Cart
    </LoadingButton>;
}