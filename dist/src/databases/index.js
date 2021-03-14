"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const knex_1 = tslib_1.__importDefault(require("knex"));
const knexfile_1 = tslib_1.__importDefault(require("../../knexfile"));
exports.default = knex_1.default(knexfile_1.default.development);
//# sourceMappingURL=index.js.map