"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRegister = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../../databases"));
const serviceRegister = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await databases_1.default('users').select().where({ email: payload.email }).returning('email');
            if (checkUser.length > 0) {
                resolve({
                    status: 409,
                    message: `register new account failed email already taken ${payload.email}, please try again`
                });
            }
            else {
                const addNewUser = await databases_1.default('users')
                    .insert({
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    password: payload.password,
                    birdDate: new Date(payload.birdDate),
                    icNumber: payload.icNumber,
                    createdAt: new Date()
                })
                    .returning('*');
                if (!addNewUser) {
                    resolve({
                        status: 403,
                        message: 'register new account failed, please try again'
                    });
                }
                else {
                    resolve({
                        status: 201,
                        message: `register new account successfully, please check your email ${payload.email}`,
                        data: addNewUser
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
exports.serviceRegister = serviceRegister;
//# sourceMappingURL=service.register.js.map