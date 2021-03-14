"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceForgot = void 0;
const tslib_1 = require("tslib");
const uuid_1 = require("uuid");
const databases_1 = tslib_1.__importDefault(require("../../databases"));
const serviceForgot = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await databases_1.default('users').select().where({ email: payload.email }).returning('email');
            if (checkUser.length < 1) {
                resolve({
                    status: 404,
                    message: `forgot password failed, user account for this email ${payload.email} is not exist`
                });
            }
            else {
                await databases_1.default('users').where({ userId: checkUser[0].userId }).update({ password: uuid_1.v4(), updatedAt: new Date() });
                resolve({
                    status: 200,
                    message: `forgot password successfully please check your email reset password ${payload.email}`,
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
exports.serviceForgot = serviceForgot;
//# sourceMappingURL=service.forgot.js.map