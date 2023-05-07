"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.StationSchema = new mongoose_1.default.Schema({
    id: {
        type: Number,
    },
    nimi: {
        type: String,
    },
    namn: {
        type: String,
    },
    name: {
        type: String,
    },
    osoite: {
        type: String,
    },
    address: {
        type: String,
    },
    kaupunki: {
        type: String,
    },
    stad: {
        type: String,
    },
    operaattor: {
        type: String,
    },
    kapasiteet: {
        type: Number,
    },
    x: {
        type: Number,
    },
    y: {
        type: Number,
    },
});
exports.default = mongoose_1.default.model("Station", exports.StationSchema);
//# sourceMappingURL=Station.js.map