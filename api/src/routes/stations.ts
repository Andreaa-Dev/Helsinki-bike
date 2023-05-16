import { Router } from "express";

import {
  getStations,
  getStationById,
  countJourneysEndingAtStation,
  countJourneysStartingFromStation,
} from "../controllers/stations";

const router = Router();

router.get("/", getStations);
router.get("/:id", getStationById);
router.get("/journeys-from/:id", countJourneysStartingFromStation);
router.get("/journeys-end/:id", countJourneysEndingAtStation);

export default router;
