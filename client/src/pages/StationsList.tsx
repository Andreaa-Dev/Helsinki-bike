import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper, TableContainer, Table, Typography } from "@mui/material";

import { AppDispatch, RootState } from "../redux/store";
import { fetchStationData } from "../redux/thunk/stations";
import StationTableHead from "../components/stations/stationTable/StationTableHead";
import StationTableBody from "../components/stations/stationTable/StationTableBody";
import StationTablePagination from "../components/stations/stationTable/StationTablePagination";

export default function StationsList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const dispatch = useDispatch<AppDispatch>();
  const stations = useSelector((state: RootState) => state.stations.stations);
  const totalRows = useSelector((state: RootState) => state.stations.totalRows);

  useEffect(() => {
    dispatch(fetchStationData(page, rowsPerPage));
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

  return (
    <div>
      <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
        Stations List
      </Typography>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <StationTableHead />
            <StationTableBody stations={stations} />
          </Table>
        </TableContainer>
        <StationTablePagination
          totalRows={totalRows}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
        />
      </Paper>
    </div>
  );
}
