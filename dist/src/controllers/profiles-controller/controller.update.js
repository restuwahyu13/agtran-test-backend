"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = void 0;
const util_validator_1 = require("../../utils/util.validator");
const services_1 = require("../../services");
const util_encrypt_1 = require("../../utils/util.encrypt");
const updateUserController = async (req, res) => {
    const errors = util_validator_1.expressValidator(req);
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            errors
        });
    }
    else {
        const { firstName, lastName, email, password, birdDate, icNumber } = req.body;
        const { status, message } = await services_1.service.serviceUpdateUser({
            id: req.params.id,
            firstName,
            lastName,
            email,
            password: util_encrypt_1.hashPassword(password),
            birdDate,
            icNumber
        });
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
                message
            });
        }
    }
};
exports.updateUserController = updateUserController;
//# sourceMappingURL=controller.update.js.map