"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const controllers_1 = require("../controllers");
const util_validator_1 = require("../utils/util.validator");
const middleware_auth_1 = require("../middlewares/middleware.auth");
const router = express_1.default.Router();
router.get('/users/profile/:id', [middleware_auth_1.authJwt(), ...util_validator_1.idValidator()], controllers_1.controller.resultUserController);
router.delete('/users/profile/:id', [middleware_auth_1.authJwt(), ...util_validator_1.idValidator()], controllers_1.controller.deleteUserController);
router.put('/users/profile/:id', [middleware_auth_1.authJwt(), ...util_validator_1.idValidator(), ...util_validator_1.registerValidator()]);
exports.default = router;
//# sourceMappingURL=route.profile.js.map