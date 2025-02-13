"use client";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

// GLOBAL CUSTOM COMPONENTS
import OverlayScrollbar from "components/overlay-scrollbar";
import { TableHeader, TablePagination } from "components/data-table";

// GLOBAL CUSTOM HOOK
import useMuiTable from "hooks/useMuiTable";

// LOCAL CUSTOM COMPONENT
import BrandRow from "../brand-row";
import SearchArea from "../../search-box";
import PageWrapper from "../../page-wrapper";

// CUSTOM DATA MODEL


// TABLE HEAD COLUMN DATA
import { tableHeading } from "../table-heading";


// =============================================================================


// =============================================================================

export default function BrandsPageView({
  brands
}) {
  
// RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID
  const filteredBrands = brands.map(item => ({
    id: item.id,
    slug: item.slug,
    name: item.name,
    logo: item.image,
    featured: item.featured
  }));
  const {
    order,
    orderBy,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({
    listData: filteredBrands,
    defaultSort: "name"
  });
  return <PageWrapper title="Product Brands">
      <SearchArea buttonText="Add Brand" url="/admin/brands/create" searchPlaceholder="Search Brand..." />

      <Card>
        <OverlayScrollbar>
          <TableContainer sx={{
          minWidth: 600
        }}>
            <Table>
              <TableHeader order={order} orderBy={orderBy} heading={tableHeading} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map(brand => <BrandRow key={brand.id} brand={brand} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </OverlayScrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(filteredList.length / rowsPerPage)} />
        </Stack>
      </Card>
    </PageWrapper>;
}