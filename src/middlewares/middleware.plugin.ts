import 'dotenv/config'
import { Express, NextFunction, Response, Request } from 'express'
import bodyParser from 'body-parser'
import zlib from 'zlib'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import passport from 'passport'
import session from 'express-session'
import connectRedis, { RedisStore } from 'connect-redis'
import { redisConnection } from '../utils/util.redisConnect'

const RedisConnect = connectRedis(session) as RedisStore

export const pluginMiddleware = (app: Express): void => {
	app.use(bodyParser.json({ limit: '5mb' }))
	app.use(bodyParser.urlencoded({ extended: false }))
	// app.use(passport.session())
	// app.use(passport.initialize())
	app.use(cors())
	app.use(helmet())
	app.use(
		compression({
			level: zlib.constants.Z_BEST_COMPRESSION,
			strategy: zlib.constants.Z_HUFFMAN_ONLY
		})
	)
	app.use(
		session({
			store: new RedisConnect({ client: redisConnection(), ttl: 60 * 24 * 60 * 1000 }),
			secret: process.env.SESSION_SECRET,
			resave: false,
			saveUninitialized: false
		})
	)

	// global error handling
	app.use((error: any, req: Request, res: Response, next: NextFunction) => {
		if (res.statusCode >= 400) {
			next(error)
		} else {
			next()
		}
	})

	app.enable('trust proxy')
	app.disable('x-powered-by')
}
