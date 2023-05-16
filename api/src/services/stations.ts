import { NotFoundError } from "../helper/apiError";
import Station, { StationDocument } from "../models/Station";
import Journey from "../models/Journey";

const createStation = async (
  station: StationDocument
): Promise<StationDocument> => {
  return await station.save();
};

const findStations = async (
  skip: number,
  limit: number
): Promise<{ stations: StationDocument[]; totalPages: number }> => {
  const stations = await Station.find().skip(skip).limit(limit);
  const totalPages = await Station.countDocuments();
  return {
    stations,
    totalPages,
  };
};

const findStationById = async (stationId: string): Promise<StationDocument> => {
  const foundStation = await Station.findById(stationId);

  if (!foundStation) {
    throw new NotFoundError(`Station ${stationId} not found`);
  }
  return foundStation;
};

const countJourneysStartingFromStation = async (
  stationId: string
): Promise<number> => {
  return await Journey.countDocuments({
    departureStationId: stationId,
  });
};

const countJourneysEndingAtStation = async (
  stationId: string
): Promise<number> => {
  return await Journey.countDocuments({
    returnStationId: stationId,
  });
};

export default {
  createStation,
  findStations,
  findStationById,
  countJourneysEndingAtStation,
  countJourneysStartingFromStation,
};
