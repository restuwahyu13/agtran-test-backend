"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authJwt = void 0;
const util_jwt_1 = require("../utils/util.jwt");
const authJwt = () => (req, res, next) => {
    const tokenHeader = req.headers.authorization;
    if (tokenHeader) {
        const decodedToken = util_jwt_1.verifySignAccessToken()(tokenHeader.split('Bearer ')[1]);
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
};
exports.authJwt = authJwt;
//# sourceMappingURL=middleware.auth.js.map