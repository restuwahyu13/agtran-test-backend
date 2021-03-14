"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceResend = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../../databases"));
const serviceResend = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await databases_1.default('users').select().where({ email: payload.email }).returning('email');
            if (checkUser.length < 1) {
                resolve({
                    status: 404,
                    message: `resend new activation token failed, user account for this email ${payload.email} is not exist`
                });
            }
            else {
                resolve({
                    status: 200,
                    message: `resend new activation token successfully please check your email ${payload.email}`,
                    data: checkUser
                });
            }
        }
        catch (error) {
            resolve({
                status: 500,
                message: `internal server error: ${error}`
            });
        }
    });
};
exports.serviceResend = serviceResend;
//# sourceMappingURL=service.resend.js.map