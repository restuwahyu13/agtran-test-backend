"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activationController = void 0;
const services_1 = require("../../services");
const util_jwt_1 = require("../../utils/util.jwt");
const util_validator_1 = require("../../utils/util.validator");
const activationController = async (req, res) => {
    const errors = util_validator_1.expressValidator(req);
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: 400,
            errors
        });
    }
    else {
        const activationToken = util_jwt_1.verifySignAccessToken()(req.params.token);
        if (!activationToken) {
            return res.status(401).json({
                method: req.method,
                status: 401,
                message: 'activation token is not valid or expired, please resend new token'
            });
        }
        else {
            const { status, message } = await services_1.service.serviceActivation({ ...activationToken });
            if (status >= 400) {
                return res.status(status).json({
                    method: req.method,
                    status: res.statusCode,
                    message
                });
            }
            else {
                return res.status(status).json({
                    method: req.method,
                    status: res.statusCode,
                    message
                });
            }
        }
    }
};
exports.activationController = activationController;
//# sourceMappingURL=controller.activation.js.map