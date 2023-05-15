import { Router } from "express";

import {
  getJourneys,
  getJourneyByIdController,
  searchJourneys,
} from "../controllers/journeys";
const router = Router();

router.get("/search", searchJourneys);
router.get("/", getJourneys);
router.get("/:id", getJourneyByIdController);

export default router;
