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
var middleware_auth_1 = require("../middlewares/middleware.auth");
var router = express_1["default"].Router();
router.get('/users/profile/:id', __spreadArray([middleware_auth_1.authJwt()], util_validator_1.idValidator()), controllers_1.controller.resultUserController);
router["delete"]('/users/profile/:id', __spreadArray([middleware_auth_1.authJwt()], util_validator_1.idValidator()), controllers_1.controller.deleteUserController);
router.put('/users/profile/:id', __spreadArray(__spreadArray([middleware_auth_1.authJwt()], util_validator_1.idValidator()), util_validator_1.registerValidator()));
exports["default"] = router;
