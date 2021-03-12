import { Request, Response, NextFunction } from 'express'
import { verifySignAccessToken } from '../utils/util.jwt'

export const authJwt = () => (req: Request, res: Response, next: NextFunction): Response<any> => {
	const tokenHeader: string = req.headers.authorization
	if (tokenHeader) {
		const decodedToken: string | any = verifySignAccessToken()(tokenHeader.split('Bearer ')[1])

		if (decodedToken) {
			req.user = decodedToken
			next()
		} else {
			return res.status(401).json({
				method: req.method,
				statusCode: 401,
				message: 'unautorization, access token expired or not valid'
			})
		}
	} else {
		return res.status(401).json({
			method: req.method,
			statusCode: 401,
			message: 'unautorization, access token is required'
		})
	}
}
