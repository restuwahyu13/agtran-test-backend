"use strict";
exports.__esModule = true;
var express_1 = require("express");
var middleware_route_1 = require("./middlewares/middleware.route");
var middleware_plugin_1 = require("./middlewares/middleware.plugin");
var app = express_1["default"]();
middleware_plugin_1.pluginMiddleware(app);
middleware_route_1.routeMiddleware(app);
exports["default"] = app;
