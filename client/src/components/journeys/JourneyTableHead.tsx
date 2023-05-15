import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

export default function JourneyTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Covered Distance (km)</TableCell>
        {/* <TableCell>Departure </TableCell> */}
        <TableCell>Departure Station </TableCell>
        <TableCell>Duration (minutes)</TableCell>
        {/* <TableCell>Return</TableCell> */}
        <TableCell> Return Station </TableCell>
      </TableRow>
    </TableHead>
  );
}
