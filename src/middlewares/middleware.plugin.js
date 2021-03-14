"use strict";
exports.__esModule = true;
exports.pluginMiddleware = void 0;
require("dotenv/config");
var body_parser_1 = require("body-parser");
var zlib_1 = require("zlib");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var compression_1 = require("compression");
var passport_1 = require("passport");
var express_session_1 = require("express-session");
var connect_redis_1 = require("connect-redis");
// import morgan from 'morgan'
var util_redisConnect_1 = require("../utils/util.redisConnect");
var RedisConnect = connect_redis_1["default"](express_session_1["default"]);
var pluginMiddleware = function (app) {
    app.use(body_parser_1["default"].json({ limit: '5mb' }));
    app.use(body_parser_1["default"].urlencoded({ extended: false }));
    app.use(cors_1["default"]());
    app.use(helmet_1["default"]());
    app.use(compression_1["default"]({
        level: zlib_1["default"].constants.Z_BEST_COMPRESSION,
        strategy: zlib_1["default"].constants.Z_HUFFMAN_ONLY
    }));
    app.use(express_session_1["default"]({
        name: 'express-session',
        store: new RedisConnect({ client: util_redisConnect_1.redisConnection(), ttl: 60 * 1000 * 90, prefix: 'redisSession:' }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport_1["default"].session());
    app.use(passport_1["default"].initialize());
    // global error handler
    app.use(function (error, req, res, next) {
        res.once('finish', function () {
            if (res.statusCode >= 400) {
                return res.status(res.statusCode).json({
                    method: req.method,
                    status: res.statusCode,
                    message: error
                });
            }
            else {
                next();
            }
        });
    });
    // if (process.env.NODE_ENV !== 'production') {
    // 	app.use(morgan('dev'))
    // }
    app.enable('trust proxy');
    app.disable('x-powered-by');
};
exports.pluginMiddleware = pluginMiddleware;
