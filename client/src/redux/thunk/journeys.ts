import { journeysActions } from "../slices/journeys";
import { AppDispatch } from "../store";

const url = "https://localhost:8000/journeys";

export function fetchProductData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const journeysData = await response.json();
    dispatch(journeysActions.getJourneyData(journeysData));
  };
}
