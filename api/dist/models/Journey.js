"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.JourneySchema = new mongoose_1.default.Schema({
    departure: {
        type: Date,
    },
    return: {
        type: Date,
    },
    departureStationId: {
        type: Number,
    },
    departureStationName: {
        type: String,
    },
    returnStationId: {
        type: Number,
    },
    returnStationName: {
        type: String,
    },
    coveredDistance: {
        type: Number,
    },
    duration: {
        type: Number,
    },
});
exports.default = mongoose_1.default.model("Journey", exports.JourneySchema);
//# sourceMappingURL=Journey.js.map