import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { TableBody, TableRow, TableCell } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { Journey } from "../../types/type";

type JourneyProp = {
  journeys: Journey[];
};

function convertDistance(distance: number) {
  // convert from m to km
  return Math.ceil((distance * 10) / 1000) / 10;
}

function convertDuration(duration: number) {
  // convert from second to minute
  return Math.ceil((duration * 10) / 60) / 10;
}

export default function JourneyTableBody({ journeys }: JourneyProp) {
  return (
    <TableBody>
      {journeys.map((journey: Journey) => {
        return (
          <TableRow key={uuidv4()}>
            <TableCell>{convertDistance(journey.coveredDistance)}</TableCell>
            <TableCell>{journey.departureStationName}</TableCell>
            <TableCell>{convertDuration(journey.duration)}</TableCell>
            <TableCell>{journey.returnStationName}</TableCell>
            <TableCell>
              <Link to={`/journeys/${journey._id}`}>
                <NavigateNextIcon />
              </Link>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
