"use strict";
exports.__esModule = true;
exports.service = void 0;
var service_register_1 = require("./auths-service/service.register");
var service_login_1 = require("./auths-service/service.login");
var service_activation_1 = require("./auths-service/service.activation");
var service_forgot_1 = require("./auths-service/service.forgot");
var service_resend_1 = require("./auths-service/service.resend");
var service_reset_1 = require("./auths-service/service.reset");
var service_result_1 = require("./profiles-service/service.result");
var service_delete_1 = require("./profiles-service/service.delete");
var service_update_1 = require("./profiles-service/service.update");
exports.service = {
    serviceRegister: service_register_1.serviceRegister,
    serviceLogin: service_login_1.serviceLogin,
    serviceActivation: service_activation_1.serviceActivation,
    serviceForgot: service_forgot_1.serviceForgot,
    serviceResend: service_resend_1.serviceResend,
    serviceReset: service_reset_1.serviceReset,
    serviceResultUser: service_result_1.serviceResultUser,
    serviceDeleteUser: service_delete_1.serviceDeleteUser,
    serviceUpdateUser: service_update_1.serviceUpdateUser
};
