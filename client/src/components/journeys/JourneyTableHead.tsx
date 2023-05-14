import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

export default function JourneyTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Covered Distance</TableCell>
        <TableCell>Departure</TableCell>
        <TableCell>Departure Station Id</TableCell>
        <TableCell>Departure Station Name</TableCell>
        <TableCell>Duration</TableCell>
        <TableCell>Return</TableCell>
        <TableCell> Return Station Id</TableCell>
        <TableCell> Return Station Name</TableCell>
      </TableRow>
    </TableHead>
  );
}
