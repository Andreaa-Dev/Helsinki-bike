import Express, { Request, Response } from "express";
import cors from "cors";
import { createClient } from "redis";

import apiErrorHandler from "./middleware/apiErrorHandler";
import journeyRouter from "./routes/journeys";
import stationRouter from "./routes/stations";

export const redisClient = createClient({ url: process.env.REDIS_URI });
const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/journeys", journeyRouter);
app.use("/stations", stationRouter);
app.use("/", (req: Request, res: Response) => res.status(200).send());

app.use(apiErrorHandler);

export default app;
