import { memo } from "react";
import { useRouter, usePathname } from "next/navigation";

// MUI
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";

// CUSTOM GLOBAL COMPONENTS
import FlexBetween from "components/flex-box/flex-between";

// CUSTOM UTILITY FUNCTION
import { renderProductCount } from "lib";


// ==============================================================


// ==============================================================

export default memo(function ProductPagination({
  page,
  perPage,
  totalProducts
}) {
  const router = useRouter();
  const pathname = usePathname();
  const handleChangePage = (_, page) => {
    const searchParams = new URLSearchParams();
    if (page === 1) searchParams.delete("page");else searchParams.set("page", page.toString());
    router.push(`${pathname}?${searchParams.toString()}`);
  };
  return <FlexBetween flexWrap="wrap" my={8}>
      <Typography component="span">{renderProductCount(page, perPage, totalProducts)}</Typography>

      <Pagination page={page} color="primary" variant="outlined" onChange={handleChangePage} count={Math.ceil(totalProducts / perPage)} />
    </FlexBetween>;
});