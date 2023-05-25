import mongoose from "mongoose";
import dotenv from "dotenv";
import { createClient } from "redis";

import app from "./app";

export const client = createClient({
  url: process.env.REDIS_URI,
});

const connectRedis = async () => {
  await client.connect();
  client.on("error", (err) => console.error("Redis Client Error", err));
};

dotenv.config();

const port = 8000;
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error: Error) => {
    console.log("MongoDB connection error." + error);
    process.exit(1);
  });

connectRedis();
