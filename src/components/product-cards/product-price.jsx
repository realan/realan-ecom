import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";

// CUSTOM UTILS LIBRARY FUNCTIONS
import { calculateDiscount, currency } from "lib";


// ==============================================================


// ==============================================================

export default function ProductPrice({
  discount,
  price
}) {
  return <FlexBox alignItems="center" gap={1} mt={0.5}>
      <Typography color="primary" sx={{
      fontWeight: 600
    }}>
        {calculateDiscount(price, discount)}
      </Typography>

      {discount ? <Box component="del" fontSize={12} fontWeight={500} color="grey.600">
          {currency(price)}
        </Box> : null}
    </FlexBox>;
}