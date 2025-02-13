"use client";

import Badge from "@mui/material/Badge";

// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";

// GLOBAL CUSTOM COMPONENT
import IconComponent from "components/IconComponent";

// STYLED COMPONENTS
import { StyledNavLink, Wrapper } from "./styles";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function MobileNavigationBar({
  navigation
}) {
  const {
    state
  } = useCart();
  return <Wrapper>
      {navigation.map(({
      icon,
      href,
      title,
      badge
    }) => <StyledNavLink href={href} key={title}>
          {badge ? <Badge badgeContent={state.cart.length} color="primary">
              <IconComponent icon={icon} fontSize="small" className="icon" />
            </Badge> : <IconComponent icon={icon} fontSize="small" className="icon" />}

          {title}
        </StyledNavLink>)}
    </Wrapper>;
}