import React from "react";
import { TablePagination } from "@mui/material";

import { Journey } from "../../types/type";

type JourneyProp = {
  journeys: Journey[];
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  page: number;
  rowsPerPage: number;
  totalRows: number;
};

export default function JourneyTablePagination({
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
  totalRows,
}: JourneyProp) {
  return (
    <TablePagination
      component="div"
      count={totalRows}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
