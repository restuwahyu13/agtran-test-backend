"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const middleware_route_1 = require("./middlewares/middleware.route");
const middleware_plugin_1 = require("./middlewares/middleware.plugin");
const app = express_1.default();
middleware_plugin_1.pluginMiddleware(app);
middleware_route_1.routeMiddleware(app);
exports.default = app;
//# sourceMappingURL=app.js.map