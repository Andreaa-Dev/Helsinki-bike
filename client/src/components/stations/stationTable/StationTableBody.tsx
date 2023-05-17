import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TableBody, TableRow, TableCell, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { Station } from "../../../types/type";
import { AppDispatch } from "../../../redux/store";
import { fetchSingleStationData } from "../../../redux/thunk/stations";

type Prop = {
  stations: Station[];
};

export default function StationTableBody({ stations }: Prop) {
  const dispatch = useDispatch<AppDispatch>();

  function fetchSingleStation(singleStationId: string) {
    dispatch(fetchSingleStationData(singleStationId));
  }
  return (
    <TableBody>
      {stations.map((station: Station) => {
        return (
          <TableRow key={station.id}>
            <TableCell>{station.name}</TableCell>
            <TableCell>{station.address}</TableCell>
            <TableCell>No.journeys starting</TableCell>
            <TableCell>{station._id}</TableCell>
            <TableCell>
              <Link to={`/stations/${station._id}`}>
                <Button onClick={() => fetchSingleStation(station._id)}>
                  <NavigateNextIcon />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
