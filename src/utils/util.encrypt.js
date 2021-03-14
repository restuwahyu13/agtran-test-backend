"use strict";
exports.__esModule = true;
exports.verifyPassword = exports.hashPassword = void 0;
var bcryptjs_1 = require("bcryptjs");
var hashPassword = function (password) {
    return bcryptjs_1["default"].hashSync(password);
};
exports.hashPassword = hashPassword;
var verifyPassword = function (password, hashPassword) {
    return new Promise(function (resolve, reject) {
        bcryptjs_1["default"].compare(password, hashPassword, function (error, success) {
            resolve(success);
            reject(error);
        });
    });
};
exports.verifyPassword = verifyPassword;
