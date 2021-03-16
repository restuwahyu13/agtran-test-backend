import { Express } from 'express'
import authRoute from '../routes/route.auth'
import profileRoute from '../routes/route.profile'
import authscRoute from '../routes/route.authsc'

export const routeMiddleware = (app: Express): void => {
	app.use('/api/v1', authRoute)
	app.use('/api/v1', profileRoute)
	app.use('/', authscRoute)
}
