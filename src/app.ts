import express, { Express } from 'express'
import { resolve } from 'path'
import { routeMiddleware } from './middlewares/middleware.route'
import { pluginMiddleware } from './middlewares/middleware.plugin'
import { pasportStrategy } from './utils/util.passport'

const app = express() as Express

pluginMiddleware(app)
routeMiddleware(app)
pasportStrategy()

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(resolve(__dirname, '../client/dist')))

	app.get('*', (req, res) => {
		res.sendFile(resolve(__dirname, '../client/dist/index.html'))
	})
}

export default app
