import express, { Express } from 'express'
import { join } from 'path'
import { routeMiddleware } from './middlewares/middleware.route'
import { pluginMiddleware } from './middlewares/middleware.plugin'
import { pasportStrategy } from './utils/util.passport'

const app = express() as Express

pluginMiddleware(app)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../client/dist/')))
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
  })
}

routeMiddleware(app)
pasportStrategy()


export default app
