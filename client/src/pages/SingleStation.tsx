import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import Loading from "../components/loading/Loading";
import {
  fetchSingleStationData,
  getEndingJourneyNum,
  getStartingJourneyNum,
} from "../redux/thunk/stations";
import { AppDispatch, RootState } from "../redux/store";

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
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSingleStationData(id as string));
  }, [dispatch, id]);

  useEffect(() => {
    if (singleStation) {
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
      <Typography> Station name: {singleStation.name}</Typography>
      <Typography> Address: {singleStation.address}</Typography>
      <Typography>
        Total number of journeys starting from the station:
        <b> {startingJourneyNumber}</b>
      </Typography>
      <Typography>
        Total number of journeys ending at the station:
        <b> {endingJourneyNumber}</b>
      </Typography>
      <Link to="/stations">
        <Button variant="outlined">Back to all stations</Button>
      </Link>
    </div>
  );
}
