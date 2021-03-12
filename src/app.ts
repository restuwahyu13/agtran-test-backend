import express, { Express } from 'express'
import { routeMiddleware } from './middlewares/middleware.route'
import { pluginMiddleware } from './middlewares/middleware.plugin'

const app = express() as Express

pluginMiddleware(app)
routeMiddleware(app)

export default app
