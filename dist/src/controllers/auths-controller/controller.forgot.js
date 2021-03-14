"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotController = void 0;
const tslib_1 = require("tslib");
const mail_1 = tslib_1.__importDefault(require("@sendgrid/mail"));
const services_1 = require("../../services");
const util_jwt_1 = require("../../utils/util.jwt");
const util_validator_1 = require("../../utils/util.validator");
const template_reset_1 = require("../../templates/template.reset");
const forgotController = async (req, res) => {
    const errors = util_validator_1.expressValidator(req);
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            errors
        });
    }
    else {
        const { status, message, data } = await services_1.service.serviceForgot({ email: req.body.email });
        if (status >= 400) {
            return res.status(status).json({
                method: req.method,
                status: res.statusCode,
                message
            });
        }
        else {
            const { accessToken } = util_jwt_1.signAccessToken()(req, { id: data[0].userId, email: data[0].email }, { expiresIn: '5m' });
            const template = template_reset_1.tempMailReset(data[0].email, accessToken);
            mail_1.default.setApiKey(process.env.SG_API_KEY);
            const sgResponse = await mail_1.default.send(template);
            if (!sgResponse) {
                return res.status(500).json({
                    method: req.method,
                    status: res.statusCode,
                    message: 'Server error failed to sending email activation'
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
exports.forgotController = forgotController;
//# sourceMappingURL=controller.forgot.js.map