import mongoose, { Document } from "mongoose";

export type JourneyDocument = Document & {
  departure: Date;
  return: Date;
  departureStationId: number;
  departureStationName: string;
  returnStationId: number;
  returnStationName: string;
  coveredDistance: number;
  duration: number;
};

export const JourneySchema = new mongoose.Schema({
  departure: {
    type: Date,
  },
  return: {
    type: Date,
  },
  departureStationId: {
    type: Number,
  },
  departureStationName: {
    type: String,
  },
  returnStationId: {
    type: Number,
  },
  returnStationName: {
    type: String,
  },
  coveredDistance: {
    type: Number,
  },
  duration: {
    type: Number,
  },
});
JourneySchema.index({
  departureStationName: "text",
  returnStationName: "text",
});
export default mongoose.model<JourneyDocument>("Journey", JourneySchema);
