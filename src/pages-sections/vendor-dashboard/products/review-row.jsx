import Image from "next/image";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// MUI ICON COMPONENT
import Delete from "@mui/icons-material/Delete";

// GLOBAL CUSTOM COMPONENTS
import BazaarSwitch from "components/BazaarSwitch";
import FlexBox from "components/flex-box/flex-box";

// STYLED COMPONENTS
import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles";


// ========================================================================


// ========================================================================

export default function ReviewRow({
  review
}) {
  const {
    customer,
    product,
    comment,
    published,
    productImage
  } = review;
  const [productPublish, setProductPublish] = useState(published);
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar variant="rounded">
            <Image fill alt={product} src={productImage} sizes="(100%, 100%)" />
          </Avatar>

          <Typography variant="h6">{product}</Typography>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">{customer}</StyledTableCell>
      <StyledTableCell align="left">{comment}</StyledTableCell>

      <StyledTableCell align="left">
        <BazaarSwitch color="info" checked={productPublish} onChange={() => setProductPublish(state => !state)} />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
}