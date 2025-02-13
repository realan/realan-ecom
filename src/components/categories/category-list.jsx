"use client";

import styled from "@mui/material/styles/styled";

// LOCAL CUSTOM COMPONENTS
import MegaMenu1 from "./components/mega-menu/mega-menu-1";
import MegaMenu2 from "./components/mega-menu/mega-menu-2";
import CategoryListItem from "./components/category-list-item";

// CUSTOM DATA MODEL


// STYLED COMPONENT
export const StyledRoot = styled("div", {
  shouldForwardProp: prop => prop !== "position"
})(({
  theme,
  position
}) => ({
  left: 0,
  zIndex: 98,
  right: "auto",
  borderRadius: 8,
  padding: "0.5rem 0px",
  transformOrigin: "top",
  boxShadow: theme.shadows[5],
  position: position || "unset",
  backgroundColor: theme.palette.background.paper,
  top: position === "absolute" ? "calc(100% + 0.7rem)" : "0.5rem"
}));


// ==============================================================


// ==============================================================

export default function CategoryList({
  categories,
  position = "absolute"
}) {
  return <StyledRoot position={position}>
      {categories.map(item => {
      const {
        href,
        title,
        children,
        component,
        icon,
        offer
      } = item;
      const MegaMenu = component === "Grid" ? MegaMenu1 : MegaMenu2;
      return <CategoryListItem key={title} href={href} icon={icon} title={title} caret={!!children} render={component ? <MegaMenu data={children} banner={offer} /> : null} />;
    })}
    </StyledRoot>;
}