import { Knex } from 'knex'

export const up = async (knex: Knex): Promise<Knex.SchemaBuilder> => {
	await knex.schema.createTable('users', (table: Knex.TableBuilder) => {
		table.increments('userId').notNullable().unique().primary()
		table.string('firstName').notNullable()
		table.string('lastName').notNullable()
		table.string('email').notNullable().unique()
		table.string('password').notNullable()
		table.date('birdDate').notNullable()
		table.integer('icNumber').notNullable().unique()
		table.boolean('active').nullable().defaultTo(false)
		table.dateTime('firstLogin').nullable()
		table.dateTime('lastLogin').nullable()
		table.timestamp('createdAt').nullable()
		table.timestamp('updatedAt').nullable()
	})
}

export const down = async (knex: Knex): Promise<void> => knex.schema.dropTable('users')
