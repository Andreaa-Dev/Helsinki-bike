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
): Promise<{ journeys: JourneyDocument[]; totalJourneys: number }> => {
  const journeys = await Journey.find().skip(skip).limit(limit);
  const totalJourneys = await Journey.countDocuments();
  return {
    journeys,
    totalJourneys,
  };
};

const findJourneyById = async (journeyId: string): Promise<JourneyDocument> => {
  const foundJourney = await Journey.findById(journeyId);

  if (!foundJourney) {
    throw new NotFoundError(`Journey ${journeyId} not found`);
  }
  return foundJourney;
};

const searchJourneys = async (
  text: string,
  skip: number,
  limit: number
): Promise<JourneyDocument[]> => {
  return await Journey.find({
    $text: { $search: text },
  })
    .skip(skip)
    .limit(limit);
};
export default { createJourney, findJourneys, findJourneyById, searchJourneys };
