import React, { useState } from "react";
import {
  Box,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  SortDirection,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useDispatch } from "react-redux";

import { Station } from "../../../types/type";
import { stationsActions } from "../../../redux/slices/stations";

export default function StationTableHead() {
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const dispatch = useDispatch();
  function sortHandler(sortDirection: SortDirection, field: keyof Station) {
    setSortDirection(sortDirection);
    dispatch(stationsActions.sortStation({ sortDirection, field }));
  }
  return (
    <TableHead>
      <TableRow>
        <TableCell sortDirection={sortDirection}>
          <TableSortLabel
            direction={sortDirection ? sortDirection : undefined}
            onClick={() =>
              sortHandler(sortDirection === "desc" ? "asc" : "desc", "name")
            }
          >
            <Box component="span" sx={visuallyHidden}>
              {sortDirection === "desc"
                ? "sorted descending"
                : "sorted ascending"}
            </Box>
          </TableSortLabel>
          Name
        </TableCell>
        <TableCell>Address </TableCell>
        <TableCell>City</TableCell>
        <TableCell> Capacity </TableCell>
        <TableCell>More detail </TableCell>
      </TableRow>
    </TableHead>
  );
}
