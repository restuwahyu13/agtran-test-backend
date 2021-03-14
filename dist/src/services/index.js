"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const service_register_1 = require("./auths-service/service.register");
const service_login_1 = require("./auths-service/service.login");
const service_activation_1 = require("./auths-service/service.activation");
const service_forgot_1 = require("./auths-service/service.forgot");
const service_resend_1 = require("./auths-service/service.resend");
const service_reset_1 = require("./auths-service/service.reset");
const service_result_1 = require("./profiles-service/service.result");
const service_delete_1 = require("./profiles-service/service.delete");
const service_update_1 = require("./profiles-service/service.update");
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
//# sourceMappingURL=index.js.map