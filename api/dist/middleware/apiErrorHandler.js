"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(error, req, res) {
    res.status(error.statusCode).json({
        status: "error",
        statusCode: error.statusCode,
        message: error.message,
    });
}
exports.default = default_1;
//# sourceMappingURL=apiErrorHandler.js.map