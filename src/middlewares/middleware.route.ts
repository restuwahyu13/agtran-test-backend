import { Express } from 'express'
import userRoute from '../routes/route.auth'
import profileRoute from '../routes/route.profile'

export const routeMiddleware = (app: Express): void => {
	app.use('/api/v1', userRoute)
	app.use('/api/v1', profileRoute)
}
