"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiError_1 = require("../helper/apiError");
const Journey_1 = __importDefault(require("../models/Journey"));
const createJourney = (journey) => __awaiter(void 0, void 0, void 0, function* () {
    return yield journey.save();
});
const findAllJourneys = () => __awaiter(void 0, void 0, void 0, function* () {
    return Journey_1.default.find().sort({ departure: 1 });
});
const findJourneyById = (journeyId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundJourney = yield Journey_1.default.findById(journeyId);
    if (!foundJourney) {
        throw new apiError_1.NotFoundError(`Product ${journeyId} not found`);
    }
    return foundJourney;
});
exports.default = { createJourney, findAllJourneys, findJourneyById };
//# sourceMappingURL=journey.js.map