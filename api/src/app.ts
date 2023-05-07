import Express from "express";
import cors from "cors";

import apiErrorHandler from "./middleware/apiErrorHandler";
import journeyRouter from "./routes/journey";
const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/journeys", journeyRouter);

app.use(apiErrorHandler);

export default app;
