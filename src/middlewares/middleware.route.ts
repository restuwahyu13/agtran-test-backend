import { Express } from 'express'
import userRoute from '../routes/route.user'
// import oauthRoute from '../routes/route.oauth'

export const routeMiddleware = (app: Express): void => {
	app.use('/api/v1', userRoute)
	// app.use('/api/v1', oauthRoute)
}
