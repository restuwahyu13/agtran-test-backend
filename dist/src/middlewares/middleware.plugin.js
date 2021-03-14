"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginMiddleware = void 0;
const tslib_1 = require("tslib");
require("dotenv/config");
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const zlib_1 = tslib_1.__importDefault(require("zlib"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const passport_1 = tslib_1.__importDefault(require("passport"));
const express_session_1 = tslib_1.__importDefault(require("express-session"));
const connect_redis_1 = tslib_1.__importDefault(require("connect-redis"));
// import morgan from 'morgan'
const util_redisConnect_1 = require("../utils/util.redisConnect");
const RedisConnect = connect_redis_1.default(express_session_1.default);
const pluginMiddleware = (app) => {
    app.use(body_parser_1.default.json({ limit: '5mb' }));
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(cors_1.default());
    app.use(helmet_1.default());
    app.use(compression_1.default({
        level: zlib_1.default.constants.Z_BEST_COMPRESSION,
        strategy: zlib_1.default.constants.Z_HUFFMAN_ONLY
    }));
    app.use(express_session_1.default({
        name: 'express-session',
        store: new RedisConnect({ client: util_redisConnect_1.redisConnection(), ttl: 60 * 1000 * 90, prefix: 'redisSession:' }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport_1.default.session());
    app.use(passport_1.default.initialize());
    // global error handler
    app.use((error, req, res, next) => {
        res.once('finish', () => {
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
//# sourceMappingURL=middleware.plugin.js.map