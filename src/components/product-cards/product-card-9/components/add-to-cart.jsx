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

export default function AddToCartButton({
  product
}) {
  const {
    thumbnail,
    title,
    price,
    id,
    slug
  } = product;
  const {
    dispatch
  } = useCart();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const handleAddToCart = () => {
    setLoading(true);
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
      setLoading(false);
    }, 500);
  };
  return <LoadingButton color="primary" loading={isLoading} variant="contained" sx={{
    padding: 0.5,
    minHeight: 0
  }} onClick={handleAddToCart}>
      <Add fontSize="small" />
    </LoadingButton>;
}