import { Router } from "express";

import { getJourneys, getJourneyByIdController } from "../controllers/journeys";
const router = Router();

router.get("/", getJourneys);
router.get("/:id", getJourneyByIdController);

export default router;
