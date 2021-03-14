"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetController = void 0;
const services_1 = require("../../services");
const util_encrypt_1 = require("../../utils/util.encrypt");
const util_jwt_1 = require("../../utils/util.jwt");
const util_validator_1 = require("../../utils/util.validator");
const resetController = async (req, res) => {
    const errors = util_validator_1.expressValidator(req);
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            errors
        });
    }
    else {
        const activationToken = util_jwt_1.verifySignAccessToken()(req.params.token);
        if (!activationToken) {
            return res.status(401).json({
                method: req.method,
                status: res.statusCode,
                message: 'activation token is not valid or expired, please forgot password again'
            });
        }
        else {
            const { status, message } = await services_1.service.serviceReset({
                id: activationToken.id,
                password: util_encrypt_1.hashPassword(req.body.password)
            });
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
exports.resetController = resetController;
//# sourceMappingURL=controller.reset.js.map