import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TableBody, TableRow, TableCell } from "@mui/material";

import { Journey } from "../../types/type";

type JourneyProp = {
  journeys: Journey[];
};

export default function JourneyTableBody({ journeys }: JourneyProp) {
  return (
    <TableBody>
      {journeys.map((journey: Journey) => {
        return (
          <TableRow key={uuidv4()}>
            <TableCell>{Math.round(journey.coveredDistance / 1000)}</TableCell>
            {/* <TableCell>{new Date(journey.departure).toDateString()}</TableCell> */}
            <TableCell>{journey.departureStationName}</TableCell>
            <TableCell>{Math.round(journey.duration / 60)}</TableCell>
            {/* <TableCell>{new Date(journey.return).toDateString()}</TableCell> */}
            <TableCell>{journey.returnStationName}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
