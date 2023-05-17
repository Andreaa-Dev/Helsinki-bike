import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { RootState } from "../../../redux/store";
import Loading from "../../loading/Loading";

export default function SingleStation() {
  const singleStation = useSelector(
    (state: RootState) => state.singleStation.singleStation
  );

  const startingJourneyNumber = useSelector(
    (state: RootState) => state.singleStation.startingJourneyNumber
  );

  const isLoading = useSelector(
    (state: RootState) => state.singleStation.loading
  );
  if (isLoading) {
    return <Loading />;
  }
  if (!singleStation) {
    return <p> Error ...</p>;
  }
  return (
    <div>
      SingleStation
      <p> Station name: {singleStation.name}</p>
      <p> Address: {singleStation.address}</p>
      <p> City: {singleStation.kaupunki}</p>
      <p>
        Total number of journeys starting from the station:
        <b>{startingJourneyNumber}</b>
      </p>
      <p>Total number of journeys ending at the station:</p>
      <Link to="/stations">
        <Button variant="outlined">Back to all stations</Button>
      </Link>
    </div>
  );
}
