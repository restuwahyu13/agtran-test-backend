"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceDeleteUser = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../../databases"));
const serviceDeleteUser = (payload) => {
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
                const deleteUser = await databases_1.default('users').where({ userId: payload.id }).delete();
                if (deleteUser < 1) {
                    resolve({
                        status: 403,
                        message: `deleted user account for this userId ${payload.id} failed`
                    });
                }
                else {
                    resolve({
                        status: 200,
                        message: `deleted user account for this userId ${payload.id} successfully`
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
exports.serviceDeleteUser = serviceDeleteUser;
//# sourceMappingURL=service.delete.js.map