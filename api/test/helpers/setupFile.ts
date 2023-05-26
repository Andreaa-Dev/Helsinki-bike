import mongoose from "mongoose";
import { beforeAll, afterAll } from "@jest/globals";

import { redisClient } from "../../src/app";

beforeAll(async () => {
  await mongoose.connect(process.env["MONGO_URI"] as string);
  await redisClient.connect();
});

afterAll(async () => {
  await mongoose.disconnect();
  await redisClient.disconnect();
});
