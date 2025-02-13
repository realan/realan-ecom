"use client";

import { memo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// CUSTOM GLOBAL COMPONENTS
import IconComponent from "components/IconComponent";

// CATEGORY TYPESCRIPT INTERFACE


// STYLED COMPONENTS
import { SaleNavItem } from "./styles";


// ==========================================================================


// ==========================================================================

export default memo(function SalesNavbar({
  categories,
  path
}) {
  const params = useParams();
  return <Box bgcolor="background.paper">
      <Container>
        <Box height="5rem" display="flex" justifyContent="center">
          {categories.map(item => {
          const selected = item.slug === params.slug ? 1 : 0;
          return <Link href={`${path}/${item.slug}`} key={item.id} scroll={false}>
                <SaleNavItem selected={selected}>
                  <IconComponent icon={item.icon} className="icon" />
                  <p>{item.name}</p>
                </SaleNavItem>
              </Link>;
        })}
        </Box>
      </Container>
    </Box>;
});