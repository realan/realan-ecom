import Link from "next/link";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";

// CUSTOM UTILS LIBRARY FUNCTIONS
import { calculateDiscount, currency } from "lib";

// STYLED COMPONENTS
import { ItemCard, Price } from "./styles";


// =======================================================


// =======================================================

export default function FrequentlyProductCard(props) {
  const {
    imgUrl = "/assets/images/products/Rectangle 116.png",
    price,
    title,
    slug
  } = props;
  return <Link href={`/products/${slug}`}>
      <ItemCard>
        <HoverBox mb={1.5} borderRadius="8px">
          <LazyImage alt={title} width={500} height={500} src={imgUrl} />
        </HoverBox>

        <Typography noWrap variant="body1" sx={{
        mb: 0.5
      }}>
          {title}
        </Typography>

        <Price>
          <Typography variant="h6" color="primary">
            {currency(price)}
          </Typography>
          <del>{calculateDiscount(price, 35)}</del>
        </Price>
      </ItemCard>
    </Link>;
}