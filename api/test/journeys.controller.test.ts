import { beforeEach, describe, expect, it } from "@jest/globals";
import supertest from "supertest";
import mongoose from "mongoose";

import app, { redisClient } from "../src/app";
import JourneyModel, { Journey } from "../src/models/Journey";

export const journey1 = {
  departure: new Date(),
  return: new Date(),
  departureStationId: 1,
  departureStationName: "test1",
  returnStationId: 2,
  returnStationName: "test1",
  coveredDistance: 1,
  duration: 1,
};

export const journey2 = {
  departure: new Date(),
  return: new Date(),
  departureStationId: 1,
  departureStationName: "test2",
  returnStationId: 2,
  returnStationName: "test2",
  coveredDistance: 1,
  duration: 1,
};

export const createJourney = async (journey: Journey) => {
  return await JourneyModel.create(journey);
};

describe("Journeys Controller", () => {
  beforeEach(async () => {
    await mongoose.connection.dropDatabase();
    await redisClient.FLUSHALL();
  });

  it("should get journeys with pagination", async () => {
    await createJourney(journey1);
    await createJourney(journey2);

    const res = await supertest(app).get("/journeys?page=1&limit=1");
    expect(res.status).toBe(200);
    expect(res.body.totalJourneys).toBe(2);
    expect(res.body.journeys.length).toBe(1);
  });

  it("should get journey by id", async () => {
    const journey = await createJourney(journey1);
    const res = await supertest(app).get(`/journeys/${journey._id}`);
    expect(res.status).toBe(200);
    expect(res.body.departureStationName).toBe(journey.departureStationName);
  });

  it("should create journey", async () => {
    const res = await supertest(app).post("/journeys").send(journey1);
    expect(res.body.departureStationName).toBe(journey1.departureStationName);
    expect(res.body.returnStationName).toBe(journey1.returnStationName);
    expect(res.body._id).toBeDefined();
  });

  it("should search journey", async () => {
    await createJourney(journey1);
    await createJourney(journey2);
    await JourneyModel.ensureIndexes();

    const res = await supertest(app).get("/journeys/search?search=test2");

    expect(res.status).toBe(200);
    expect(res.body.length).toEqual(1);
    expect(res.body[0].returnStationName).toBe(journey2.returnStationName);
    expect(res.body[0]._id).toBeDefined();
  });
});
