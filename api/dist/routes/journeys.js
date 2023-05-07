"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const journeys_1 = require("../controllers/journeys");
const router = (0, express_1.Router)();
router.get("/", journeys_1.getAllJourneysController);
router.get("/:id", journeys_1.getJourneyByIdController);
exports.default = router;
//# sourceMappingURL=journeys.js.map