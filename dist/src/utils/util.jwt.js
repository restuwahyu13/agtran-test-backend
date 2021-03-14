"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signRefreshToken = exports.verifySignAccessToken = exports.signAccessToken = void 0;
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const signAccessToken = () => (req, payload, options) => {
    try {
        if (!payload) {
            return null;
        }
        else {
            const accessToken = jsonwebtoken_1.default.sign({ ...payload }, process.env.ACCESS_TOKEN_SECRET, { ...options });
            const refreshToken = jsonwebtoken_1.default.sign({ ...payload }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '90d' });
            return { accessToken, refreshToken };
        }
    }
    catch (err) { }
};
exports.signAccessToken = signAccessToken;
const verifySignAccessToken = () => (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return decoded;
    }
    catch (err) { }
};
exports.verifySignAccessToken = verifySignAccessToken;
const signRefreshToken = () => (token) => {
    try {
        const { id, email } = jsonwebtoken_1.default.verify(token, process.env.REFRESH_TOKEN_SECRET);
        const accessToken = jsonwebtoken_1.default.sign({ userId: id, email: email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '90d'
        });
        const encodedAccessToken = accessToken;
        return encodedAccessToken;
    }
    catch (err) { }
};
exports.signRefreshToken = signRefreshToken;
//# sourceMappingURL=util.jwt.js.map