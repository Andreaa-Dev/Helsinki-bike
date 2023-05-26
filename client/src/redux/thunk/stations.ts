import { backendUrl } from "./journeys";
import { singleStationActions } from "../slices/singleStation";
import { stationsActions } from "../slices/stations";
import { AppDispatch } from "../store";

export function fetchStationData(page: number, limit: number) {
  const stationsUrl = `${backendUrl}/stations?page=${page}&limit=${limit}`;

  return async (dispatch: AppDispatch) => {
    const response = await fetch(stationsUrl);
    const stationsData = await response.json();
    dispatch(stationsActions.getStationData(stationsData));
  };
}

export function fetchSingleStationData(stationId: string) {
  const url = `${backendUrl}/stations/${stationId}`;

  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const singleStationData = await response.json();
    dispatch(singleStationActions.getSingleStationData(singleStationData));
  };
}

export function getStartingJourneyNum(stationId: number) {
  const url = `${backendUrl}/stations/journeys-from/${stationId}`;

  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const startingJourneyNum = await response.json();
    dispatch(
      singleStationActions.getStartingJourneyNum(startingJourneyNum.journeys)
    );
  };
}

export function getEndingJourneyNum(stationId: number) {
  const url = `${backendUrl}/stations/journeys-end/${stationId}`;

  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const endingJourneyNum = await response.json();
    dispatch(
      singleStationActions.getEndingJourneyNum(endingJourneyNum.journeys)
    );
  };
}
