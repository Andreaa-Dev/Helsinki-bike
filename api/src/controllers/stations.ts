import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../helper/apiError";
import StationServices from "../services/stations";

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
    res.json(
      await StationServices.countJourneysStartingFromStation(req.params.id)
    );
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
    res.json(await StationServices.countJourneysEndingAtStation(req.params.id));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
