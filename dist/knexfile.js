"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const path_1 = require("path");
exports.default = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.PG_HOST,
            user: process.env.PG_USERNAME,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
            port: process.env.PG_PORT
        },
        migrations: {
            directory: path_1.resolve(process.cwd(), 'src/databases/migrations/')
        },
        seeds: {
            directory: path_1.resolve('src/databases/seeds/')
        },
        log: {
            error: (msg) => console.error(msg),
            warn: (msg) => console.error(msg)
        }
    },
    production: {
        client: 'pg',
        connection: process.env.PG_URI,
        pool: { min: 1, max: 20 },
        migrations: {
            directory: path_1.resolve(process.cwd(), 'src/databases/migrations/')
        }
    }
};
//# sourceMappingURL=knexfile.js.map