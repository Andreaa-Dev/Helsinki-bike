import { Router } from "express";

import {
  getJourneys,
  getJourneyByIdController,
  searchJourneys,
  createJourney,
} from "../controllers/journeys";
const router = Router();

router.post("/", createJourney);
router.get("/search", searchJourneys);
router.get("/", getJourneys);
router.get("/:id", getJourneyByIdController);

export default router;
