import { SalesTwoPageView } from "pages-sections/sales/page-view";

// SALES API FUNCTIONS
import api from "utils/__api__/sales";

// CUSTOM TYPES

export const metadata = {
  title: "Sales 2 - Bazaar Next.js E-commerce Template",
  description: "Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store",
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};


// ==============================================================


// ==============================================================

export default async function SalesWithCategoryPage({
  params,
  searchParams
}) {
  const {
    slug
  } = await params;
  const {
    page
  } = await searchParams;
  const currentPage = +page || 1;
  const data = await api.getProducts(currentPage, slug);
  if (!data) {
    return <div>Failed to load</div>;
  }
  if (!data.products) {
    return <div>No products found</div>;
  }
  return <SalesTwoPageView page={currentPage} products={data.products} pageSize={data.pageSize} totalProducts={data.totalProducts} />;
}