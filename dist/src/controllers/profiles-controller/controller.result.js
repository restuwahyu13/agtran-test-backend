"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultUserController = void 0;
const services_1 = require("../../services");
const util_validator_1 = require("../../utils/util.validator");
const resultUserController = async (req, res) => {
    const errors = util_validator_1.expressValidator(req);
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            errors
        });
    }
    else {
        const { status, message, data } = await services_1.service.serviceResultUser({ id: req.params.id });
        if (status >= 400) {
            return res.status(status).json({
                method: req.method,
                staus: res.statusCode,
                message
            });
        }
        else {
            return res.status(status).json({
                method: req.method,
                staus: res.statusCode,
                message,
                user: data
            });
        }
    }
};
exports.resultUserController = resultUserController;
//# sourceMappingURL=controller.result.js.map