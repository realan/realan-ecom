"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import FilterList from "@mui/icons-material/FilterList";

// GLOBAL CUSTOM COMPONENTS
import SideNav from "components/side-nav";
import ProductFilters from "components/products-view/filters";
import ProductsGridView from "components/products-view/products-grid-view";

// LOCAL CUSTOM COMPONENTS
import ShopIntroCard from "../shop-intro-card";

// CUSTOM DATA MODEL


// ============================================================


// ============================================================

export default function ShopDetailsPageView({
  shop,
  filters
}) {
  return <Container className="mt-2 mb-3">
      {/* SHOP INTRODUCTION AREA */}
      <ShopIntroCard shop={shop} />

      <Grid container spacing={3}>
        {/* SIDEBAR AREA */}
        <Grid size={{
        md: 3,
        xs: 12
      }} sx={{
        display: {
          md: "block",
          xs: "none"
        }
      }}>
          <Card className="p-2">
            <ProductFilters filters={filters} />
          </Card>
        </Grid>

        <Grid size={{
        md: 9,
        xs: 12
      }}>
          {/* SMALL DEVICE SIDEBAR AREA */}
          <Box display={{
          md: "none",
          xs: "block"
        }}>
            <SideNav position="left" handler={close => <IconButton onClick={close} sx={{
            float: "right"
          }}>
                  <FilterList fontSize="small" />
                </IconButton>}>
              <Box px={3} py={2}>
                <ProductFilters filters={filters} />
              </Box>
            </SideNav>
          </Box>

          {/* PRODUCT LIST AREA */}
          <ProductsGridView products={shop.products} />
        </Grid>
      </Grid>
    </Container>;
}