import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper, TableContainer, Table } from "@mui/material";

import { AppDispatch, RootState } from "../redux/store";
import { fetchJourneyData } from "../redux/thunk/journeys";
import JourneyTableHead from "../components/journeys/JourneyTableHead";
import JourneyTableBody from "../components/journeys/JourneyTableBody";
import JourneyTablePagination from "../components/journeys/JourneyTablePagination";
import SearchForm from "../components/searchJourney/SearchForm";
import Loading from "../components/loading/Loading";

export default function JourneysList() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const isLoading = useSelector((state: RootState) => state.journeys.loading);
  const journeys = useSelector((state: RootState) => state.journeys.journeys);
  const searchJourneys = useSelector(
    (state: RootState) => state.journeys.searchJourneys
  );
  const totalRows = useSelector((state: RootState) => state.journeys.totalRows);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchJourneyData(page, rowsPerPage));
  }, [dispatch, page, rowsPerPage]);

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

  if (isLoading) {
    return <Loading />;
  }

  const renderJourneys = searchJourneys.length > 0 ? searchJourneys : journeys;

  return (
    <div>
      <SearchForm page={page} rowsPerPage={rowsPerPage} />
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <JourneyTableHead />
            <JourneyTableBody journeys={renderJourneys} />
          </Table>
        </TableContainer>
        <JourneyTablePagination
          journeys={renderJourneys}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          totalRows={totalRows}
        />
      </Paper>
    </div>
  );
}
