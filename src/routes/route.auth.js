"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var util_validator_1 = require("../utils/util.validator");
var router = express_1["default"].Router();
router.post('/users/auth/register', __spreadArray([], util_validator_1.registerValidator()), controllers_1.controller.registerController);
router.post('/users/auth/login', __spreadArray([], util_validator_1.loginValidator()), controllers_1.controller.loginController);
router.get('/users/auth/activation/:token', __spreadArray([], util_validator_1.tokenValidator()), controllers_1.controller.activationController);
router.post('/users/auth/forgot-password', __spreadArray([], util_validator_1.emailValidator()), controllers_1.controller.forgotController);
router.post('/users/auth/resend-token', __spreadArray([], util_validator_1.emailValidator()), controllers_1.controller.resendController);
router.post('/users/auth/reset-password/:token', __spreadArray(__spreadArray([], util_validator_1.tokenValidator()), util_validator_1.passwordValidator()), controllers_1.controller.resetController);
router.post('/users/auth/refresh-token', __spreadArray([], util_validator_1.tokenValidatorJwt()), controllers_1.controller.refreshTokenController);
exports["default"] = router;
