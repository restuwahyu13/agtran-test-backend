import express, { Express } from 'express'
import { routeMiddleware } from './middlewares/middleware.route'
import { pluginMiddleware } from './middlewares/middleware.plugin'
import { pasportStrategy } from './utils/util.passport'

const app = express() as Express

pluginMiddleware(app)
routeMiddleware(app)
pasportStrategy()

export default app
