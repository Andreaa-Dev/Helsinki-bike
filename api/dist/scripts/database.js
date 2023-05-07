#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs = __importStar(require("node:fs"));
const sync_1 = require("csv-parse/sync");
const Journey_1 = __importDefault(require("../models/Journey"));
const journey_1 = __importDefault(require("../services/journey"));
let journeys = [];
fs.readFile("./journeys.csv", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    journeys = (0, sync_1.parse)(data, {
        columns: true,
        skip_empty_lines: true,
    });
});
journeys.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
    if (Number(item["Duration (sec.)"]) > 10 &&
        Number(item["Covered distance (m)"]) > 10) {
        const journey = new Journey_1.default({
            departure: item.Departure,
            return: item.Return,
            departureStationId: Number(item["Departure station id"]),
            departureStationName: item["Departure station name"],
            returnStationId: Number(item["Return station id"]),
            returnStationName: item["Return station name"],
            coveredDistance: Number(item["Covered distance (m)"]),
            duration: Number(item["Duration (sec.)"]),
        });
        try {
            yield journey_1.default.createJourney(journey);
        }
        catch (error) {
            console.log(error, "error");
        }
    }
}));
//# sourceMappingURL=database.js.map