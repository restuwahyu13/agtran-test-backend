"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceReset = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../../databases"));
const serviceReset = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const updateNewPassword = await databases_1.default('users')
                .where({ userId: payload.id })
                .update({ password: payload.password, updatedAt: new Date() });
            if (updateNewPassword < 1) {
                resolve({
                    status: 403,
                    message: 'change new password failed, please try again'
                });
            }
            else {
                resolve({
                    status: 200,
                    message: 'change new password successfully, please login now'
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
exports.serviceReset = serviceReset;
//# sourceMappingURL=service.reset.js.map