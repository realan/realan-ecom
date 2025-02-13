import Link from "next/link";
import styled from "@mui/material/styles/styled";

// ICON COMPONENTS
import ChevronRight from "icons/ChevronRight";

// GLOBAL CUSTOM COMPONENTS
import IconComponent from "components/IconComponent";


// STYLED COMPONENT
export const Wrapper = styled("div")(({
  theme
}) => ({
  "& .category-dropdown-link": {
    height: 40,
    display: "flex",
    minWidth: "278px",
    cursor: "pointer",
    whiteSpace: "pre",
    padding: "0px 1rem",
    alignItems: "center",
    transition: "all 300ms ease-in-out",
    ".title": {
      flexGrow: 1,
      paddingLeft: "0.75rem"
    }
  },
  ":hover": {
    color: theme.palette.primary.main,
    background: theme.palette.action.hover,
    "& > .mega-menu": {
      display: "block"
    },
    "& > a .caret-icon": {
      color: theme.palette.primary.main
    }
  },
  ".mega-menu": {
    top: 0,
    zIndex: 99,
    left: "100%",
    right: "auto",
    display: "none",
    position: "absolute"
  },
  ".caret-icon": {
    fontSize: "1rem",
    color: theme.palette.grey[600],
    ":dir(rtl)": {
      rotate: "180deg"
    }
  }
}));


// =============================================================


// =============================================================

export default function CategoryListItem(props) {
  const {
    href,
    title,
    render,
    caret = true,
    icon
  } = props;
  return <Wrapper>
      <Link href={href}>
        <div className="category-dropdown-link">
          {icon && <IconComponent icon={icon} fontSize="small" color="inherit" />}
          <span className="title">{title}</span>
          {caret && <ChevronRight fontSize="small" className="caret-icon" />}
        </div>
      </Link>

      {render ? <div className="mega-menu">{render}</div> : null}
    </Wrapper>;
}