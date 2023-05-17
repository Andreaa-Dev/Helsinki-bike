import React from "react";
import { TablePagination } from "@mui/material";

type Prop = {
  totalRows: number;
  page: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  rowsPerPage: number;
};
export default function StationTablePagination({
  totalRows,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPage,
}: Prop) {
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
