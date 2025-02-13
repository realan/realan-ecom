import ShopLayout3 from "components/layouts/shop-layout-3";

// API FUNCTIONS
import api from "utils/__api__/layout";
export default async function Layout({
  children
}) {
  const data = await api.getLayoutData();
  return <ShopLayout3 centeredNavigation showMobileMenu={false} data={data}>
      {children}
    </ShopLayout3>;
}