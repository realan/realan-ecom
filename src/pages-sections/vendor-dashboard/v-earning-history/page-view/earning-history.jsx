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
import { tableHeading } from "../table-heading";
import VendorEarningRow from "../v-earning-row";
import PageWrapper from "../../page-wrapper";

// CUSTOM DATA MODEL


// =============================================================================


// =============================================================================

export default function EarningHistoryPageView({
  earnings
}) {
  const {
    order,
    orderBy,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({
    listData: earnings,
    defaultSort: "no"
  });
  return <PageWrapper title="Earning History">
      <Card>
        <OverlayScrollbar>
          <TableContainer sx={{
          minWidth: 1100
        }}>
            <Table>
              <TableHeader order={order} orderBy={orderBy} heading={tableHeading} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((item, index) => <VendorEarningRow row={item} key={index} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </OverlayScrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(earnings.length / rowsPerPage)} />
        </Stack>
      </Card>
    </PageWrapper>;
}