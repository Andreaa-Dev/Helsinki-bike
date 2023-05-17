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

export default function StationTableHead() {
  const dispatch = useDispatch();
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  function sortHandler(sortDirection: SortDirection, field: keyof Station) {
    setSortDirection(sortDirection);
    // dispatch(journeysActions.sortJourney({ sortDirection, field }));
  }
  return (
    <TableHead>
      <TableRow>
        <TableCell sortDirection={sortDirection}>
          <TableSortLabel
            // active={orderBy === "covered distance"}
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
        <TableCell>Journeys starting</TableCell>
        <TableCell> Journeys ending </TableCell>
        <TableCell>More detail </TableCell>
      </TableRow>
    </TableHead>
  );
}
