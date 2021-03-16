import express, { Express, Request, Response } from 'express'
import { join } from 'path'
import { routeMiddleware } from './middlewares/middleware.route'
import { pluginMiddleware } from './middlewares/middleware.plugin'
import { pasportStrategy } from './utils/util.passport'

const app = express() as Express

pluginMiddleware(app)
routeMiddleware(app)
pasportStrategy()

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(join(__dirname, '../../client/dist')))

	app.get('*', (req: Request, res: Response) => {
		res.sendFile(join(__dirname, '../../client/dist/index.html'))
	})
}

export default app
