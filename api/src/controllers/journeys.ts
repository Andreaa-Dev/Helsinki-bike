import { Request, Response, NextFunction } from "express";

import { BadRequestError } from "../helper/apiError";
import JourneyServices from "../services/journey";
import Journey from "../models/Journey";

export const createJourney = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newJourney = new Journey({
    departure: req.body.departure,
    return: req.body.return,
    departureStationId: req.body.departureStationId,
    departureStationName: req.body.departureStationName,
    returnStationId: req.body.returnStationId,
    returnStationName: req.body.returnStationName,
    coveredDistance: req.body.coveredDistance,
    duration: req.body.duration,
  });
  try {
    res.json(await JourneyServices.createJourney(newJourney));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const getJourneys = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page = Number(req.query.page as string) || 1;
  const limit = Number(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;
  try {
    res.json(await JourneyServices.findJourneys(skip, limit));
  } catch (error) {
    console.log(error);
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const getJourneyByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await JourneyServices.findJourneyById(req.params.id));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const searchJourneys = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = Number(req.query.page as string) || 1;
    const limit = Number(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    res.json(
      await JourneyServices.searchJourneys(
        req.query.search as string,
        skip,
        limit
      )
    );
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
