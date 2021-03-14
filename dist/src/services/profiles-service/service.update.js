"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceUpdateUser = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../../databases"));
const serviceUpdateUser = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await databases_1.default('users').select().where({ userId: payload.id }).returning('*');
            if (checkUser.length < 1) {
                resolve({
                    status: 404,
                    message: `user account is not exist for this id ${payload.id}`
                });
            }
            else {
                const updateUseAccount = await databases_1.default('users').where({ userId: checkUser[0].userId }).update({
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    password: payload.password,
                    birdDate: payload.birdDate,
                    icNumber: payload.icNumber,
                    updatedAt: new Date()
                });
                if (updateUseAccount < 1) {
                    resolve({
                        status: 403,
                        message: `updated user account for this userId ${payload.id} failed`
                    });
                }
                else {
                    resolve({
                        status: 200,
                        message: `updated user account for this userId ${payload.id} successfully`
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
exports.serviceUpdateUser = serviceUpdateUser;
//# sourceMappingURL=service.update.js.map