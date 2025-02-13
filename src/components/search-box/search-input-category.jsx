"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// LOCAL CUSTOM COMPONENTS
import CategoryDropdown from "./category-dropdown";

// CUSTOM ICON COMPONENT
import Search from "icons/Search";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function SearchInputWithCategory({
  categories
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  if (!categories || !categories.length) return null;
  const handleEnter = event => {
    if (event.key === "Enter" && search) {
      const params = new URLSearchParams(searchParams);
      params.set("q", search);
      router.push(`/products/search?${params.toString()}`);
      setSearch("");
    }
  };
  const INPUT_PROPS = {
    sx: {
      border: 0,
      height: 46,
      padding: 0,
      borderRadius: 2,
      overflow: "hidden",
      backgroundColor: "grey.200",
      "& .MuiOutlinedInput-notchedOutline": {
        border: 1,
        borderColor: "grey.300"
      }
    },
    startAdornment: <Box mr={2} px={2} display="grid" alignItems="center" justifyContent="center" borderRight="1px solid" borderColor="grey.400">
        <Search sx={{
        fontSize: 17,
        color: "grey.600"
      }} />
      </Box>,
    endAdornment: <CategoryDropdown categories={categories} />
  };
  return <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto">
      <TextField fullWidth variant="outlined" placeholder="Searching for..." onKeyDown={handleEnter} onChange={e => setSearch(e.target.value)} InputProps={INPUT_PROPS} />
    </Box>;
}