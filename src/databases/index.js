"use strict";
exports.__esModule = true;
var knex_1 = require("knex");
var knexfile_1 = require("../../knexfile");
exports["default"] = knex_1["default"](knexfile_1["default"].development);
