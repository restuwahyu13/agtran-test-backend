"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const up = async (knex) => {
    await knex.schema.createTable('users', (table) => {
        table.increments('userId').notNullable().unique().primary();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.date('birdDate').notNullable();
        table.integer('icNumber').notNullable().unique();
        table.boolean('active').nullable().defaultTo(false);
        table.dateTime('firstLogin').nullable();
        table.dateTime('lastLogin').nullable();
        table.timestamp('createdAt').nullable();
        table.timestamp('updatedAt').nullable();
    });
};
exports.up = up;
const down = async (knex) => knex.schema.dropTable('users');
exports.down = down;
//# sourceMappingURL=20210312152730_users.js.map