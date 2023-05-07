"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apiErrorHandler_1 = __importDefault(require("./middleware/apiErrorHandler"));
const journeys_1 = __importDefault(require("./routes/journeys"));
const stations_1 = __importDefault(require("./routes/stations"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/journeys", journeys_1.default);
app.use("/stations", stations_1.default);
app.use(apiErrorHandler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map