import mongoose, { Document } from "mongoose";

export type Station = {
  fid: number;
  id: number;
  nimi: string;
  namn: string;
  name: string;
  osoite: string;
  address: string;
  kaupunki: string;
  stad: string;
  operaattor: string;
  kapasiteet: number;
  x: number;
  y: number;
};
export type StationDocument = Document & Station;
export const StationSchema = new mongoose.Schema({
  fid: {
    type: Number,
  },

  id: {
    type: Number,
  },
  nimi: {
    type: String,
  },
  namn: {
    type: String,
  },
  name: {
    type: String,
  },
  osoite: {
    type: String,
  },
  address: {
    type: String,
  },
  kaupunki: {
    type: String,
  },
  stad: {
    type: String,
  },
  operaattor: {
    type: String,
  },
  kapasiteet: {
    type: Number,
  },
  x: {
    type: Number,
  },
  y: {
    type: Number,
  },
});

export default mongoose.model<StationDocument>("Station", StationSchema);
