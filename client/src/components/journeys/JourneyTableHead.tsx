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
import { journeysActions } from "../../redux/slices/journeys";
import { Journey } from "../../types/type";

export default function JourneyTableHead() {
  const dispatch = useDispatch();
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  function sortHandler(sortDirection: SortDirection, field: keyof Journey) {
    setSortDirection(sortDirection);
    dispatch(journeysActions.sortJourney({ sortDirection, field }));
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell sortDirection={sortDirection}>
          <TableSortLabel
            direction={sortDirection ? sortDirection : undefined}
            onClick={() =>
              sortHandler(
                sortDirection === "desc" ? "asc" : "desc",
                "coveredDistance"
              )
            }
          >
            <Box component="span" sx={visuallyHidden}>
              {sortDirection === "desc"
                ? "sorted descending"
                : "sorted ascending"}
            </Box>
          </TableSortLabel>
          Covered Distance (km)
        </TableCell>

        <TableCell>Departure Station </TableCell>
        <TableCell>Duration (minutes)</TableCell>
        <TableCell> Return Station </TableCell>
      </TableRow>
    </TableHead>
  );
}
