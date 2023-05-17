import React from "react";
import { Link } from "react-router-dom";
import { TableBody, TableRow, TableCell } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { Station } from "../../../types/type";

type Prop = {
  stations: Station[];
};

export default function StationTableBody({ stations }: Prop) {
  return (
    <TableBody>
      {stations.map((station: Station) => {
        return (
          <TableRow key={station.id}>
            <TableCell>{station.name}</TableCell>
            <TableCell>{station.address}</TableCell>
            <TableCell>{station.kaupunki}</TableCell>
            <TableCell>{station.kapasiteet}</TableCell>
            <TableCell>
              <Link to={`/stations/${station._id}`}>
                <NavigateNextIcon />
              </Link>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
