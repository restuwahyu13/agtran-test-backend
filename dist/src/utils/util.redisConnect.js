"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConnection = void 0;
const tslib_1 = require("tslib");
const ioredis_1 = tslib_1.__importDefault(require("ioredis"));
const redisConnection = () => {
    return new ioredis_1.default({
        host: '127.0.0.1',
        port: 6379,
        maxRetriesPerRequest: 50,
        connectTimeout: 30000,
        enableReadyCheck: true,
        enableAutoPipelining: true
    });
};
exports.redisConnection = redisConnection;
//# sourceMappingURL=util.redisConnect.js.map