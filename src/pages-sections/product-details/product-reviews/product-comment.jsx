import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";

// CUSTOM UTILS LIBRARY FUNCTION
import { getDateDifference } from "lib";


// ===========================================================


// ===========================================================

export default function ProductComment(props) {
  const {
    name,
    imgUrl,
    rating,
    date,
    comment
  } = props;
  return <Box mb={4} maxWidth={600}>
      <FlexBox alignItems="center" mb={2} gap={2}>
        <Avatar alt={name} src={imgUrl} sx={{
        width: 48,
        height: 48
      }} />

        <div>
          <Typography variant="h5" sx={{
          mb: 1
        }}>
            {name}
          </Typography>

          <FlexBox alignItems="center" gap={1.25}>
            <Rating size="small" value={rating} color="warn" readOnly />
            <Typography variant="h6">{rating}</Typography>
            <Typography component="span">{getDateDifference(date)}</Typography>
          </FlexBox>
        </div>
      </FlexBox>

      <Typography variant="body1" sx={{
      color: "grey.700"
    }}>
        {comment}
      </Typography>
    </Box>;
}