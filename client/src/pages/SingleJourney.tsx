import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import Loading from "../components/loading/Loading";
import { AppDispatch, RootState } from "../redux/store";
import { fetchSingleJourneyData } from "../redux/thunk/journeys";

export default function SingleJourney() {
  const isLoading = useSelector(
    (state: RootState) => state.singleJourney.loading
  );
  const singleJourney = useSelector(
    (state: RootState) => state.singleJourney.singleJourney
  );
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSingleJourneyData(id as string));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading />;
  }
  if (!singleJourney) {
    return <p> Error ...</p>;
  }

  return (
    <div>
      SingleJourney
      <Typography>
        Covered distance: {singleJourney.coveredDistance} (m)
      </Typography>
      <Typography>
        Departure Station Name: {singleJourney.departureStationName}
      </Typography>
      <Typography>
        Return Station Name: {singleJourney.returnStationName}
      </Typography>
      <Typography>
        Departure date: {new Date(singleJourney.departure).toDateString()}
      </Typography>
      <Typography>
        Return date: {new Date(singleJourney.return).toDateString()}
      </Typography>
      <Link to="/journeys">
        <Button variant="outlined">Back to all journeys</Button>
      </Link>
    </div>
  );
}
