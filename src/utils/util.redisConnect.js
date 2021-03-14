"use strict";
exports.__esModule = true;
exports.redisConnection = void 0;
var ioredis_1 = require("ioredis");
var redisConnection = function () {
    return new ioredis_1["default"]({
        host: '127.0.0.1',
        port: 6379,
        maxRetriesPerRequest: 50,
        connectTimeout: 30000,
        enableReadyCheck: true,
        enableAutoPipelining: true
    });
};
exports.redisConnection = redisConnection;
