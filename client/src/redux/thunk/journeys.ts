import { journeysActions } from "../slices/journeys";
import { AppDispatch } from "../store";

const url = "http://localhost:8000/journeys?page=1&limit=10";

export function fetchJourneyData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const journeysData = await response.json();
    dispatch(journeysActions.getJourneyData(journeysData));
  };
}
