import Express, { Request, Response } from "express";
import cors from "cors";

import apiErrorHandler from "./middleware/apiErrorHandler";
import journeyRouter from "./routes/journeys";
import stationRouter from "./routes/stations";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/journeys", journeyRouter);
app.use("/stations", stationRouter);
app.use("/heath", (req: Request, res: Response) => res.status(200));

app.use(apiErrorHandler);

export default app;
