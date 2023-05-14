import { journeysActions } from "../slices/journeys";
import { AppDispatch } from "../store";

export function fetchJourneyData(page: number, limit: number) {
  const url = `http://localhost:8000/journeys?page=${page}&limit=${limit}`;

  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const journeysData = await response.json();
    dispatch(journeysActions.getJourneyData(journeysData));
  };
}
