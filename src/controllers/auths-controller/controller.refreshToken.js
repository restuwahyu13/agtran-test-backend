"use strict";
exports.__esModule = true;
exports.refreshTokenController = void 0;
var util_jwt_1 = require("../../utils/util.jwt");
var util_validator_1 = require("../../utils/util.validator");
var refreshTokenController = function (req, res) {
    var errors = util_validator_1.expressValidator(req);
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: 400,
            errors: errors
        });
    }
    else {
        var newAccessToken = util_jwt_1.signRefreshToken()(req.body.refreshToken);
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
