import Link from "next/link";

// LOCAL CUSTOM COMPONENT
import ListItem from "./components/list-item";
import NavAccordion from "./components/nav-accordion";

// STYLED COMPONENT
import { NavbarRoot } from "./styles";

// CUSTOM DATA MODEL


// =================================================================


// =================================================================

export default function HealthBeautySideNav({
  navigation
}) {
  return <NavbarRoot>
      <div className="title">
        <h4>Categories</h4>
      </div>

      {navigation.map((item, ind) => {
      if (item.child) return <NavAccordion item={item} key={ind} />;
      return <Link key={ind} href={item.href}>
            <ListItem item={item} />
          </Link>;
    })}
    </NavbarRoot>;
}