import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../helper/apiError";
import JourneyServices from "../services/journey";

export const getAllJourneysController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await JourneyServices.findAllJourneys);
  } catch (error) {
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
