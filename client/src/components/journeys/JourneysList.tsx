import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchJourneyData } from "../../redux/thunk/journeys";

export default function JourneysList() {
  const journeys = useSelector((state: RootState) => state.journeys.journeys);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchJourneyData());
  }, [dispatch]);

  console.log(journeys, "data");

  return <div>JourneysList</div>;
}
