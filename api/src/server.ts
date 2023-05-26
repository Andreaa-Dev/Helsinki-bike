import mongoose from "mongoose";
import dotenv from "dotenv";

import app, { redisClient } from "./app";

const connectRedis = async () => {
  await redisClient.connect();
  redisClient.on("error", (err) => console.error("Redis Client Error", err));
};

dotenv.config();

const port = 8000;
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(async () => {
    await connectRedis();
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error: Error) => {
    console.log("MongoDB connection error." + error);
    process.exit(1);
  });
