import Typography from "@mui/material/Typography";
import FlexBetween from "components/flex-box/flex-between";

// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";


// ==============================================================


// ==============================================================

export default function PaymentItem({
  title,
  amount
}) {
  return <FlexBetween mb={1}>
      <Typography variant="body1" sx={{
      color: "grey.600"
    }}>
        {title}
      </Typography>

      <Typography variant="h6">{amount ? currency(amount) : "-"}</Typography>
    </FlexBetween>;
}