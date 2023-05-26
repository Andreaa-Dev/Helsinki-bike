import { describe, beforeEach, expect, it } from "@jest/globals";
import supertest from "supertest";
import mongoose from "mongoose";

import app, { redisClient } from "../src/app";
import { createJourney } from "./journeys.controller.test";
import StationModel, { Station } from "../src/models/Station";

export const station1 = {
  fid: 1,
  id: 1,
  nimi: "test1",
  namn: "test1",
  name: "test1",
  osoite: "test1",
  address: "test1",
  kaupunki: "test1",
  stad: "test1",
  operaattor: "test1",
  kapasiteet: 1,
  x: 1,
  y: 1,
};

export const station2 = {
  fid: 2,
  id: 2,
  nimi: "test2",
  namn: "test2",
  name: "test2",
  osoite: "test2",
  address: "test2",
  kaupunki: "test2",
  stad: "test2",
  operaattor: "test2",
  kapasiteet: 2,
  x: 2,
  y: 2,
};

export const createStation = async (station: Station) => {
  return await StationModel.create(station);
};

describe("Stations Controller", () => {
  beforeEach(async () => {
    await mongoose.connection.dropDatabase();
    await redisClient.FLUSHALL();
  });

  it("should get stations with pagination", async () => {
    await createStation(station1);
    await createStation(station2);

    const res = await supertest(app).get("/stations?page=1&limit=1");
    expect(res.status).toBe(200);
    expect(res.body.totalStations).toBe(2);
    expect(res.body.stations.length).toBe(1);
  });

  it("should get station by id", async () => {
    const station = await createStation(station1);
    const res = await supertest(app).get(`/stations/${station._id}`);
    expect(res.status).toBe(200);
    expect(res.body.fid).toBe(station.fid);
  });

  it("should create station", async () => {
    const res = await supertest(app).post("/stations").send(station1);
    expect(res.status).toBe(200);
    expect(res.body.fid).toBe(station1.fid);
    expect(res.body.name).toBe(station1.name);
    expect(res.body._id).toBeDefined();
  });

  it("should get number of journeys starting from station id", async () => {
    const station = await createStation(station1);
    await createJourney({
      departure: new Date(),
      return: new Date(),
      departureStationId: station.id,
      departureStationName: "test1",
      returnStationId: 2,
      returnStationName: "test1",
      coveredDistance: 1,
      duration: 1,
    });
    const res = await supertest(app).get(
      `/stations/journeys-from/${station.id}`
    );

    expect(res.status).toBe(200);
    expect(res.body.journeys).toEqual(1);
  });

  it("should get number of journeys ending at station id", async () => {
    const station = await createStation(station1);
    await createJourney({
      departure: new Date(),
      return: new Date(),
      departureStationId: 1,
      departureStationName: "test1",
      returnStationId: station.id,
      returnStationName: "test1",
      coveredDistance: 1,
      duration: 1,
    });
    const res = await supertest(app).get(
      `/stations/journeys-end/${station.id}`
    );

    expect(res.status).toBe(200);
    expect(res.body.journeys).toEqual(1);
  });
});
