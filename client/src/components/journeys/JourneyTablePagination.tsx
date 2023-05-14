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
};

export default function JourneyTablePagination({
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
}: JourneyProp) {
  return (
    <TablePagination
      component="div"
      count={10}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
