"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceLogin = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../../databases"));
const serviceLogin = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await databases_1.default('users')
                .select()
                .where({ email: payload.email })
                .returning(['email', 'active']);
            if (checkUser.length < 1) {
                resolve({
                    status: 404,
                    message: 'user account is not exist, please register new account'
                });
            }
            else {
                if (checkUser[0].active === false) {
                    resolve({
                        status: 403,
                        message: 'account is not active, please resend new activation token'
                    });
                }
                else {
                    await databases_1.default('users')
                        .where({ userId: checkUser[0].userId })
                        .update({ firstLogin: new Date(), updatedAt: new Date() });
                    resolve({
                        status: 200,
                        message: 'login successfully',
                        data: checkUser
                    });
                }
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
exports.serviceLogin = serviceLogin;
//# sourceMappingURL=service.login.js.map