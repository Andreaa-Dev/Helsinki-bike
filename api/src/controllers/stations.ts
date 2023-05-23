import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../helper/apiError";
import StationServices from "../services/stations";
import Station from "../models/Station";

export const createStation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newStation = new Station({
    fid: req.body.fid,
    id: req.body.id,
    nimi: req.body.nimi,
    namn: req.body.namn,
    name: req.body.name,
    osoite: req.body.osoite,
    address: req.body.address,
    kaupunki: req.body.kaupunki,
    stad: req.body.stad,
    operaattor: req.body.operaattor,
    kapasiteet: req.body.kapasiteet,
    x: req.body.x,
    y: req.body.y,
  });

  try {
    res.json(await StationServices.createStation(newStation));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const getStations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  try {
    res.json(await StationServices.findStations(skip, limit));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const getStationById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await StationServices.findStationById(req.params.id));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const countJourneysStartingFromStation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({
      journeys: await StationServices.countJourneysStartingFromStation(
        req.params.id
      ),
    });
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const countJourneysEndingAtStation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({
      journeys: await StationServices.countJourneysEndingAtStation(
        req.params.id
      ),
    });
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
