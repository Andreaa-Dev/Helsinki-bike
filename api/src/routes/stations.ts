import { Router } from "express";

import {
  getStations,
  getStationById,
  countJourneysEndingAtStation,
  countJourneysStartingFromStation,
  createStation,
} from "../controllers/stations";

const router = Router();

router.post("/", createStation);
router.get("/", getStations);
router.get("/:id", getStationById);
router.get("/journeys-from/:id", countJourneysStartingFromStation);
router.get("/journeys-end/:id", countJourneysEndingAtStation);

export default router;
