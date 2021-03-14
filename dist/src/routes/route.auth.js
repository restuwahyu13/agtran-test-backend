"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const controllers_1 = require("../controllers");
const util_validator_1 = require("../utils/util.validator");
const router = express_1.default.Router();
router.post('/users/auth/register', [...util_validator_1.registerValidator()], controllers_1.controller.registerController);
router.post('/users/auth/login', [...util_validator_1.loginValidator()], controllers_1.controller.loginController);
router.get('/users/auth/activation/:token', [...util_validator_1.tokenValidator()], controllers_1.controller.activationController);
router.post('/users/auth/forgot-password', [...util_validator_1.emailValidator()], controllers_1.controller.forgotController);
router.post('/users/auth/resend-token', [...util_validator_1.emailValidator()], controllers_1.controller.resendController);
router.post('/users/auth/reset-password/:token', [...util_validator_1.tokenValidator(), ...util_validator_1.passwordValidator()], controllers_1.controller.resetController);
router.post('/users/auth/refresh-token', [...util_validator_1.tokenValidatorJwt()], controllers_1.controller.refreshTokenController);
exports.default = router;
//# sourceMappingURL=route.auth.js.map