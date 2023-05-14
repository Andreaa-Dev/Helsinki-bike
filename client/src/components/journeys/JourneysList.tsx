import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper, TableContainer, Table } from "@mui/material";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchJourneyData } from "../../redux/thunk/journeys";
import JourneyTableHead from "./JourneyTableHead";
import JourneyTableBody from "./JourneyTableBody";
import JourneyTablePagination from "./JourneyTablePagination";

export default function JourneysList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const journeys = useSelector((state: RootState) => state.journeys.journeys);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchJourneyData());
  }, [dispatch]);
  console.log(journeys, "data");

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <JourneyTableHead />
          <JourneyTableBody journeys={journeys} />
        </Table>
      </TableContainer>
      <JourneyTablePagination
        journeys={journeys}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </Paper>
  );
}
