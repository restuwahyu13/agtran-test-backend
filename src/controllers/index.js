"use strict";
exports.__esModule = true;
exports.controller = void 0;
var controller_register_1 = require("./auths-controller/controller.register");
var controller_login_1 = require("./auths-controller/controller.login");
var controller_activation_1 = require("./auths-controller/controller.activation");
var controller_forgot_1 = require("./auths-controller/controller.forgot");
var controller_resend_1 = require("./auths-controller/controller.resend");
var controller_reset_1 = require("./auths-controller/controller.reset");
var controller_refreshToken_1 = require("./auths-controller/controller.refreshToken");
var controller_result_1 = require("./profiles-controller/controller.result");
var controller_delete_1 = require("./profiles-controller/controller.delete");
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
