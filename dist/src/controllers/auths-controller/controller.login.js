"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const services_1 = require("../../services");
const util_validator_1 = require("../../utils/util.validator");
const util_encrypt_1 = require("../../utils/util.encrypt");
const util_jwt_1 = require("../../utils/util.jwt");
const loginController = async (req, res, next) => {
    const errors = util_validator_1.expressValidator(req);
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            errors
        });
    }
    else {
        const { status, message, data } = await services_1.service.serviceLogin({ email: req.body.email });
        if (status >= 400) {
            return res.status(status).json({
                method: req.method,
                status: res.statusCode,
                message
            });
        }
        else {
            util_encrypt_1.verifyPassword(req.body.password, data[0].password)
                .then((success) => {
                if (!success) {
                    return res.status(400).json({
                        method: req.method,
                        status: res.statusCode,
                        message: 'username/password is wrong'
                    });
                }
                else {
                    const accessToken = util_jwt_1.signAccessToken()(req, { id: data[0].userId, email: data[0].email }, { expiresIn: '1d' });
                    req.session['sessionRefreshToken'] = accessToken.refreshToken;
                    return res.status(status).json({
                        method: req.method,
                        status,
                        message,
                        ...accessToken
                    });
                }
            })
                .catch((err) => {
                return res.status(500).json({
                    method: req.method,
                    status: res.statusCode,
                    message: `Verify Password Error ${err}`
                });
            });
        }
    }
};
exports.loginController = loginController;
//# sourceMappingURL=controller.login.js.map