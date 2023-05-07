import { Router } from "express";

import {
  getAllJourneysController,
  getJourneyByIdController,
} from "../controllers/journeys";
const router = Router();

router.get("/", getAllJourneysController);
router.get("/:id", getJourneyByIdController);

export default router;
