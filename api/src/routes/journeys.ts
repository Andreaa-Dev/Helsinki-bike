import { Router } from "express";

import {
  getJourneys,
  getJourneyByIdController,
  searchJourneys,
  createJourney,
} from "../controllers/journeys";
import { cacheHandler } from "../middleware/cacheHandler";

const router = Router();

router.post("/", createJourney);
router.get("/search", cacheHandler, searchJourneys);
router.get("/", cacheHandler, getJourneys);
router.get("/:id", getJourneyByIdController);

export default router;
