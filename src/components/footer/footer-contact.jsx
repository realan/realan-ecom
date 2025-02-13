import { Fragment } from "react";
import Typography from "@mui/material/Typography";

// STYLED COMPONENTS
import { Heading } from "./styles";


// ==============================================================


// ==============================================================

export default function FooterContact({
  email,
  phone,
  address,
  color = "grey.500"
}) {
  return <Fragment>
      <Heading>Contact Us</Heading>

      <Typography variant="body1" sx={{
      color,
      py: 0.6
    }}>
        {address}
      </Typography>

      <Typography variant="body1" sx={{
      color,
      py: 0.6
    }}>
        Email: {email}
      </Typography>

      <Typography variant="body1" sx={{
      color,
      py: 0.6,
      mb: 2
    }}>
        Phone: {phone}
      </Typography>
    </Fragment>;
}