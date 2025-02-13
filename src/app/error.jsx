"use client";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";


// STYLED COMPONENT
const StyledRoot = styled("div")(({
  theme
}) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .MuiCard-root": {
    textAlign: "center",
    padding: "2rem"
  },
  "& .MuiTypography-root": {
    marginBottom: "1rem"
  }
}));


// ==============================================================


// ==============================================================

export default function Error({
  error,
  reset
}) {
  console.log(error, error.message);
  return <StyledRoot>
      <Card>
        <Typography variant="h1">Something went wrong!</Typography>
        <Button color="error" variant="contained" onClick={() => reset()}>
          Try again
        </Button>
      </Card>
    </StyledRoot>;
}