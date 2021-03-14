"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const seed = async (knex) => {
    // Inserts seed entries
    await knex('users').insert([
        {
            id: 1,
            firstName: 'john',
            lastName: 'doe',
            email: 'johndoe13@zetmail.com',
            password: 'qwerty12',
            icNumber: 20214350201,
            createdAt: new Date()
        },
        {
            id: 2,
            firstName: 'jane',
            lastName: 'doe',
            email: 'janedoe13@zetmail.com',
            password: 'qwerty12',
            icNumber: 20214350202,
            createdAt: new Date()
        }
    ]);
};
exports.seed = seed;
//# sourceMappingURL=users.js.map