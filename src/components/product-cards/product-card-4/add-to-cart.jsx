"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// MUI ICON COMPONENTS
import LoadingButton from "@mui/lab/LoadingButton";
import Add from "@mui/icons-material/Add";

// GLOBAL CUSTOM HOOKS
import useCart from "hooks/useCart";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function AddToCart({
  product
}) {
  const {
    id,
    title,
    price,
    thumbnail,
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
  return <LoadingButton color="primary" variant="outlined" loading={isLoading} onClick={handleAddToCart} sx={{
    padding: "3px",
    alignSelf: "self-end"
  }}>
      <Add fontSize="small" />
    </LoadingButton>;
}