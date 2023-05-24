export type Journey = {
  _id: string;
  departure: Date;
  return: Date;
  departureStationId: number;
  departureStationName: string;
  returnStationId: number;
  returnStationName: string;
  coveredDistance: number;
  duration: number;
};

export type Station = {
  _id: string;
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
