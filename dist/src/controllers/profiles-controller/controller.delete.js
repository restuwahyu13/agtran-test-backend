"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = void 0;
const util_validator_1 = require("../../utils/util.validator");
const service_delete_1 = require("../../services/profiles-service/service.delete");
const deleteUserController = async (req, res) => {
    const errors = util_validator_1.expressValidator(req);
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            errors
        });
    }
    else {
        const { status, message } = await service_delete_1.serviceDeleteUser({ id: req.params.id });
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
exports.deleteUserController = deleteUserController;
//# sourceMappingURL=controller.delete.js.map