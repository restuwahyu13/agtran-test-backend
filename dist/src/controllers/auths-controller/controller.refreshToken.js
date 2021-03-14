"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenController = void 0;
const util_jwt_1 = require("../../utils/util.jwt");
const util_validator_1 = require("../../utils/util.validator");
const refreshTokenController = (req, res) => {
    const errors = util_validator_1.expressValidator(req);
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: 400,
            errors
        });
    }
    else {
        const newAccessToken = util_jwt_1.signRefreshToken()(req.body.refreshToken);
        if (!newAccessToken) {
            return res.status(401).json({
                method: req.method,
                status: 401,
                message: 'activation token is not valid or expired'
            });
        }
        else {
            return res.status(200).json({
                method: req.method,
                status: res.statusCode,
                accessToken: newAccessToken
            });
        }
    }
};
exports.refreshTokenController = refreshTokenController;
//# sourceMappingURL=controller.refreshToken.js.map