import { journeysActions } from "../slices/journeys";
import { singleJourneyActions } from "../slices/singleJourney";
import { AppDispatch } from "../store";

export const backendUrl = process.env.REACT_APP_BACKEND_URL;

export function fetchJourneyData(page: number, limit: number) {
  const url = `${backendUrl}/journeys?page=${page}&limit=${limit}`;

  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const journeysData = await response.json();
    dispatch(journeysActions.getJourneyData(journeysData));
  };
}

export function fetchSingleJourneyData(journeyId: string) {
  const url = `${backendUrl}/journeys/${journeyId}`;

  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const singleJourneyData = await response.json();
    dispatch(singleJourneyActions.getSingleJourneyData(singleJourneyData));
  };
}
