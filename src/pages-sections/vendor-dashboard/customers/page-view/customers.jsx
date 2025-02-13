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
import SearchArea from "../../search-box";
import CustomerRow from "../customer-row";
import PageWrapper from "../../page-wrapper";

// TABLE HEAD COLUMN DATA
import { tableHeading } from "../table-heading";


// =============================================================================


// =============================================================================

export default function CustomersPageView({
  customers
}) {
  const {
    order,
    orderBy,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({
    listData: customers
  });
  return <PageWrapper title="Customers">
      <SearchArea buttonText="Add Customer" url="/admin/customers" searchPlaceholder="Search Customer..." />

      <Card>
        <OverlayScrollbar>
          <TableContainer sx={{
          minWidth: 900
        }}>
            <Table>
              <TableHeader order={order} orderBy={orderBy} heading={tableHeading} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map(customer => <CustomerRow customer={customer} key={customer.id} />)}
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