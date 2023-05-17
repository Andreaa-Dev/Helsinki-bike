import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { AppDispatch, RootState } from "../../../redux/store";
import Loading from "../../loading/Loading";
import {
  fetchSingleStationData,
  getStartingJourneyNum,
  getEndingJourneyNum,
} from "../../../redux/thunk/stations";

export default function SingleStation() {
  const isLoading = useSelector(
    (state: RootState) => state.singleStation.loading
  );
  const singleStation = useSelector(
    (state: RootState) => state.singleStation.singleStation
  );
  const startingJourneyNumber = useSelector(
    (state: RootState) => state.singleStation.startingJourneyNumber
  );
  const endingJourneyNumber = useSelector(
    (state: RootState) => state.singleStation.endingJourneyNumber
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (singleStation) {
      dispatch(fetchSingleStationData(singleStation._id));
      dispatch(getStartingJourneyNum(singleStation.id));
      dispatch(getEndingJourneyNum(singleStation.id));
    }
  }, [dispatch, singleStation]);

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
      <p>
        Total number of journeys starting from the station:
        <b>{startingJourneyNumber}</b>
      </p>
      <p>
        Total number of journeys ending at the station:
        <b> {endingJourneyNumber}</b>
      </p>
      <Link to="/stations">
        <Button variant="outlined">Back to all stations</Button>
      </Link>
    </div>
  );
}
