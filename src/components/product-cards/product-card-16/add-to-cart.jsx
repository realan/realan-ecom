"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// MUI
import Add from "@mui/icons-material/Add";
import LoadingButton from "@mui/lab/LoadingButton";

// GLOBAL CUSTOM HOOKS
import useCart from "hooks/useCart";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function AddToCart({
  product
}) {
  const {
    slug,
    title,
    thumbnail,
    price,
    id
  } = product;
  const {
    dispatch
  } = useCart();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleAddToCart = () => {
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
    }, 1000);
  };
  return <LoadingButton color="primary" variant="outlined" loading={isLoading} onClick={handleAddToCart} sx={{
    padding: "3px"
  }}>
      <Add fontSize="small" />
    </LoadingButton>;
}