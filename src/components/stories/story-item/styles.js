"use client";

import styled from "@mui/material/styles/styled";
export const StyledRoot = styled("div")(({
  theme
}) => ({
  outline: 0,
  display: "flex",
  borderRadius: 12,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  ":hover::after": {
    opacity: 1
  },
  "::after": {
    inset: 0,
    opacity: 0,
    content: "''",
    position: "absolute",
    backgroundColor: theme.palette.action.focus,
    transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)"
  }
}));