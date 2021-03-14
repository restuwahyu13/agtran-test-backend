"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeMiddleware = void 0;
const tslib_1 = require("tslib");
const route_auth_1 = tslib_1.__importDefault(require("../routes/route.auth"));
const route_profile_1 = tslib_1.__importDefault(require("../routes/route.profile"));
const routeMiddleware = (app) => {
    app.use('/api/v1', route_auth_1.default);
    app.use('/api/v1', route_profile_1.default);
};
exports.routeMiddleware = routeMiddleware;
//# sourceMappingURL=middleware.route.js.map