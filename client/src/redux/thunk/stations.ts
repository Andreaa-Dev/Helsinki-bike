import { stationsActions } from "../slices/stations";
import { AppDispatch } from "../store";

export function fetchStationData(page: number, limit: number) {
  const url = `http://localhost:8000/stations?page=${page}&limit=${limit}`;

  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const stationsData = await response.json();
    dispatch(stationsActions.getStationData(stationsData));
  };
}
