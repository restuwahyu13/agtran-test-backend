"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceResultUser = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../../databases"));
const serviceResultUser = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await databases_1.default('users').select().where({ userId: payload.id }).returning('*');
            if (checkUser.length < 1) {
                resolve({
                    status: 404,
                    message: `user account is not exist for this userId ${payload.id}`
                });
            }
            else {
                resolve({
                    status: 200,
                    message: `user account already exist for this userId ${payload.id}`,
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
exports.serviceResultUser = serviceResultUser;
//# sourceMappingURL=service.result.js.map