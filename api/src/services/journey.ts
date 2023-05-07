import { NotFoundError } from "../helper/apiError";
import Journey, { JourneyDocument } from "../models/Journey";

const findAllJourneys = async (): Promise<JourneyDocument[]> => {
  return Journey.find().sort({ departure: 1 });
};

const findJourneyById = async (journeyId: string): Promise<JourneyDocument> => {
  const foundJourney = await Journey.findById(journeyId);

  if (!foundJourney) {
    throw new NotFoundError(`Product ${journeyId} not found`);
  }
  return foundJourney;
};

export default { findAllJourneys, findJourneyById };
