"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_1 = tslib_1.__importDefault(require("http"));
const cluster_1 = tslib_1.__importDefault(require("cluster"));
const os_1 = require("os");
const consola_1 = tslib_1.__importDefault(require("consola"));
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const app_1 = tslib_1.__importDefault(require("./src/app"));
const coreThread = os_1.cpus();
if (cluster_1.default.isMaster) {
    for (let i = 0; i < coreThread.length; i++) {
        cluster_1.default.fork();
    }
    const workersTread = [];
    for (const id in cluster_1.default.workers) {
        workersTread.push(id);
    }
    workersTread.forEach(async (pid, _) => {
        await cluster_1.default.workers[pid].send({
            from: 'isMaster',
            type: 'SIGKILL',
            message: 'cleanup is worker dead and change to new worker'
        });
    });
    if (process.env.NODE_ENV !== 'production') {
        cluster_1.default.on('online', (worker) => {
            if (worker.isConnected()) {
                console.info(`${chalk_1.default.greenBright('worker active pid')}: ${worker.process.pid}`);
            }
        });
        cluster_1.default.on('exit', (worker, code, signal) => {
            if (worker.isDead()) {
                console.info(`${chalk_1.default.redBright('worker dead pid')}: ${worker.process.pid}`);
            }
            cluster_1.default.fork();
        });
    }
}
else {
    const server = http_1.default.createServer(app_1.default);
    const host = process.env.HOST;
    const port = process.env.PORT;
    server.listen(port, host, () => consola_1.default.success(`server is running on ${port}`));
}
//# sourceMappingURL=server.js.map