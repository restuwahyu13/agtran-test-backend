"use strict";
exports.__esModule = true;
exports.routeMiddleware = void 0;
var route_auth_1 = require("../routes/route.auth");
var route_profile_1 = require("../routes/route.profile");
var routeMiddleware = function (app) {
    app.use('/api/v1', route_auth_1["default"]);
    app.use('/api/v1', route_profile_1["default"]);
};
exports.routeMiddleware = routeMiddleware;
