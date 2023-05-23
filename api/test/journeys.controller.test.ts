import { describe, expect, test } from "@jest/globals";
import supertest from "supertest";

import app from "../src/app";

describe("Journeys Controller", () => {
  test("should get journeys with pagination", async () => {
    // use supertest to call the endpoint /api/journeys
    // and check response status code and body
    const res = await supertest(app).get("/journeys?page=1&limit=2");
    expect(res.status).toBe(200);
    expect(res.body.journeys).toBeDefined();
    expect(res.body.totalJourneys).toBeDefined();
    expect(res.body.journeys.length).toBe(2);
  });
});
