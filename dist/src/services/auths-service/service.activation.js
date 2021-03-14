"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceActivation = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../../databases"));
const serviceActivation = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await databases_1.default('users').select().where({ email: payload.email }).returning('email');
            if (checkUser[0].active === true) {
                resolve({
                    status: 200,
                    message: 'user account hash been active, please login now'
                });
            }
            else {
                const updateUserActive = await databases_1.default('users')
                    .where({ userId: checkUser[0].userId })
                    .update({ active: true, updatedAt: new Date() });
                if (updateUserActive < 1) {
                    resolve({
                        status: 403,
                        message: `activation account failed for this ${checkUser[0].email}`
                    });
                }
                else {
                    resolve({
                        status: 200,
                        message: `activation account successfully for this email ${checkUser[0].email}`
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
exports.serviceActivation = serviceActivation;
//# sourceMappingURL=service.activation.js.map