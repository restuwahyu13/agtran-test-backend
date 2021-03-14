"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.signRefreshToken = exports.verifySignAccessToken = exports.signAccessToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var signAccessToken = function () { return function (req, payload, options) {
    try {
        if (!payload) {
            return null;
        }
        else {
            var accessToken = jsonwebtoken_1["default"].sign(__assign({}, payload), process.env.ACCESS_TOKEN_SECRET, __assign({}, options));
            var refreshToken = jsonwebtoken_1["default"].sign(__assign({}, payload), process.env.REFRESH_TOKEN_SECRET, { expiresIn: '90d' });
            return { accessToken: accessToken, refreshToken: refreshToken };
        }
    }
    catch (err) { }
}; };
exports.signAccessToken = signAccessToken;
var verifySignAccessToken = function () { return function (token) {
    try {
        var decoded = jsonwebtoken_1["default"].verify(token, process.env.ACCESS_TOKEN_SECRET);
        return decoded;
    }
    catch (err) { }
}; };
exports.verifySignAccessToken = verifySignAccessToken;
var signRefreshToken = function () { return function (token) {
    try {
        var _a = jsonwebtoken_1["default"].verify(token, process.env.REFRESH_TOKEN_SECRET), id = _a.id, email = _a.email;
        var accessToken = jsonwebtoken_1["default"].sign({ userId: id, email: email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '90d'
        });
        var encodedAccessToken = accessToken;
        return encodedAccessToken;
    }
    catch (err) { }
}; };
exports.signRefreshToken = signRefreshToken;
