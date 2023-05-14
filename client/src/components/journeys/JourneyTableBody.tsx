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
      {journeys.slice(0, 10).map((journey: Journey) => {
        return (
          <TableRow key={uuidv4()}>
            <TableCell>{journey.coveredDistance}</TableCell>
            <TableCell>{new Date(journey.departure).toDateString()}</TableCell>
            <TableCell>{journey.departureStationId}</TableCell>
            <TableCell>{journey.departureStationName}</TableCell>
            <TableCell>{journey.duration}</TableCell>
            <TableCell>{new Date(journey.return).toDateString()}</TableCell>
            <TableCell>{journey.returnStationId}</TableCell>
            <TableCell>{journey.returnStationName}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
