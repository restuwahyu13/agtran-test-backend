"use strict";
exports.__esModule = true;
exports.authJwt = void 0;
var util_jwt_1 = require("../utils/util.jwt");
var authJwt = function () { return function (req, res, next) {
    var tokenHeader = req.headers.authorization;
    if (tokenHeader) {
        var decodedToken = util_jwt_1.verifySignAccessToken()(tokenHeader.split('Bearer ')[1]);
        if (decodedToken) {
            req.user = decodedToken;
            next();
        }
        else {
            return res.status(401).json({
                method: req.method,
                statusCode: 401,
                message: 'unautorization, access token expired or not valid'
            });
        }
    }
    else {
        return res.status(401).json({
            method: req.method,
            statusCode: 401,
            message: 'unautorization, access token is required'
        });
    }
}; };
exports.authJwt = authJwt;
