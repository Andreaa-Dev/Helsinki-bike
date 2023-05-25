import { Router } from "express";

import {
  getStations,
  getStationById,
  countJourneysEndingAtStation,
  countJourneysStartingFromStation,
  createStation,
} from "../controllers/stations";
import { cacheHandler } from "../middleware/cacheHandler";

const router = Router();

router.post("/", createStation);
router.get("/", cacheHandler, getStations);
router.get("/:id", cacheHandler, getStationById);
router.get("/journeys-from/:id", countJourneysStartingFromStation);
router.get("/journeys-end/:id", countJourneysEndingAtStation);

export default router;
