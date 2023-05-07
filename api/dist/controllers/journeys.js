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
exports.getJourneyByIdController = exports.getAllJourneysController = void 0;
const apiError_1 = require("../helper/apiError");
const journey_1 = __importDefault(require("../services/journey"));
const getAllJourneysController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield journey_1.default.findAllJourneys);
    }
    catch (error) {
        if (error instanceof Error && error.name == "ValidationError") {
            next(new apiError_1.BadRequestError("Invalid Request", error));
        }
        else {
            next(error);
        }
    }
});
exports.getAllJourneysController = getAllJourneysController;
const getJourneyByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield journey_1.default.findJourneyById(req.params.id));
    }
    catch (error) {
        if (error instanceof Error && error.name == "ValidationError") {
            next(new apiError_1.BadRequestError("Invalid Request", error));
        }
        else {
            next(error);
        }
    }
});
exports.getJourneyByIdController = getJourneyByIdController;
//# sourceMappingURL=journeys.js.map