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

// LOCAL CUSTOM COMPONENTS
import PayoutRow from "../payout-row";
import PageWrapper from "../../page-wrapper";
import { tableHeading } from "../table-heading";

// DATA TYPES


// =============================================================================


// =============================================================================

export default function VendorPayoutsPageView({
  payouts
}) {
  const {
    order,
    orderBy,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({
    listData: payouts,
    defaultSort: "no"
  });
  return <PageWrapper title="Payouts">
      <Card>
        <OverlayScrollbar>
          <TableContainer sx={{
          minWidth: 600
        }}>
            <Table>
              <TableHeader order={order} orderBy={orderBy} heading={tableHeading} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((payout, index) => <PayoutRow payout={payout} key={index} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </OverlayScrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(payouts.length / rowsPerPage)} />
        </Stack>
      </Card>
    </PageWrapper>;
}