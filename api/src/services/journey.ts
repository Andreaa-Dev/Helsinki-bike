import { NotFoundError } from "../helper/apiError";
import Journey, { JourneyDocument } from "../models/Journey";

const createJourney = async (
  journey: JourneyDocument
): Promise<JourneyDocument> => {
  return await journey.save();
};

const findJourneys = async (
  skip: number,
  limit: number
): Promise<{ journeys: JourneyDocument[]; totalPages: number }> => {
  const journeys = await Journey.find().skip(skip).limit(limit);
  const totalPages = await Journey.countDocuments();
  return {
    journeys,
    totalPages,
  };
};

const findJourneyById = async (journeyId: string): Promise<JourneyDocument> => {
  const foundJourney = await Journey.findById(journeyId);

  if (!foundJourney) {
    throw new NotFoundError(`Journey ${journeyId} not found`);
  }
  return foundJourney;
};

export default { createJourney, findJourneys, findJourneyById };
