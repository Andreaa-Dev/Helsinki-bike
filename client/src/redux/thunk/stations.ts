import { singleStationActions } from "../slices/singleStation";
import { stationsActions } from "../slices/stations";
import { AppDispatch } from "../store";

export function fetchStationData(page: number, limit: number) {
  const stationsUrl = `http://localhost:8000/stations?page=${page}&limit=${limit}`;

  return async (dispatch: AppDispatch) => {
    const response = await fetch(stationsUrl);
    const stationsData = await response.json();
    dispatch(stationsActions.getStationData(stationsData));
  };
}

export function fetchSingleStationData(stationId: string) {
  const url = `http://localhost:8000/stations/${stationId}`;

  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const singleStationData = await response.json();
    dispatch(singleStationActions.getSingleStationData(singleStationData));
  };
}
