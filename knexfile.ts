import 'dotenv/config'
import { resolve } from 'path'

export default {
	development: {
		client: 'pg',
		connection: process.env.PG_URI_DEV,
		migrations: {
			directory: resolve(process.cwd(), 'src/databases/migrations/')
		},
		seeds: {
			directory: resolve('src/databases/seeds/')
		},
		log: {
			error: (msg: string | any): void => console.error(msg),
			warn: (msg: string | any): void => console.error(msg)
		}
	},
	production: {
		client: 'pg',
		connection: process.env.PG_URI_PROD,
		pool: { min: 1, max: 10 },
		migrations: {
			directory: resolve(process.cwd(), 'src/databases/migrations/')
		}
	}
}
