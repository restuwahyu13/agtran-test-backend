"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
const tslib_1 = require("tslib");
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const hashPassword = (password) => {
    return bcryptjs_1.default.hashSync(password);
};
exports.hashPassword = hashPassword;
const verifyPassword = (password, hashPassword) => {
    return new Promise((resolve, reject) => {
        bcryptjs_1.default.compare(password, hashPassword, (error, success) => {
            resolve(success);
            reject(error);
        });
    });
};
exports.verifyPassword = verifyPassword;
//# sourceMappingURL=util.encrypt.js.map