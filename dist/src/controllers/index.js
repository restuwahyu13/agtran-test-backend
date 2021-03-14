"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const controller_register_1 = require("./auths-controller/controller.register");
const controller_login_1 = require("./auths-controller/controller.login");
const controller_activation_1 = require("./auths-controller/controller.activation");
const controller_forgot_1 = require("./auths-controller/controller.forgot");
const controller_resend_1 = require("./auths-controller/controller.resend");
const controller_reset_1 = require("./auths-controller/controller.reset");
const controller_refreshToken_1 = require("./auths-controller/controller.refreshToken");
const controller_result_1 = require("./profiles-controller/controller.result");
const controller_delete_1 = require("./profiles-controller/controller.delete");
exports.controller = {
    registerController: controller_register_1.registerController,
    loginController: controller_login_1.loginController,
    activationController: controller_activation_1.activationController,
    forgotController: controller_forgot_1.forgotController,
    resendController: controller_resend_1.resendController,
    resetController: controller_reset_1.resetController,
    refreshTokenController: controller_refreshToken_1.refreshTokenController,
    resultUserController: controller_result_1.resultUserController,
    deleteUserController: controller_delete_1.deleteUserController
};
//# sourceMappingURL=index.js.map