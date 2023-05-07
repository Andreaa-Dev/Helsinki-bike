"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
const port = 8000;
mongoose_1.default.set("strictQuery", false);
mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then(() => {
    app_1.default.listen(port, () => console.log(`Server running on port ${port}`));
})
    .catch((error) => {
    console.log("MongoDB connection error." + error);
    process.exit(1);
});
//# sourceMappingURL=server.js.map