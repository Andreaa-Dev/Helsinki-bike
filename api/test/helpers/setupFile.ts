import mongoose from "mongoose";
import { beforeAll, afterAll } from "@jest/globals";

beforeAll(async () => {
  await mongoose.connect(process.env["MONGO_URI"] as string);
});

afterAll(async () => {
  await mongoose.disconnect();
});
