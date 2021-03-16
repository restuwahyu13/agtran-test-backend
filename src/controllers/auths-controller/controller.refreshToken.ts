import { Request, Response } from 'express'
import { signRefreshToken } from '../../utils/util.jwt'
import { expressValidator } from '../../utils/util.validator'

export const refreshTokenController = (req: Request, res: Response): Response<any> => {
	const errors = expressValidator(req)

	if (errors.length > 0) {
		return res.status(400).json({
			method: req.method,
			status: 400,
			errors
		})
	} else {
		const newAccessToken = signRefreshToken()(req.body.refreshToken)

		if (!newAccessToken) {
			return res.status(401).json({
				method: req.method,
				status: 401,
				message: 'activation token is not valid or expired'
			})
		} else {
			return res.status(200).json({
				method: req.method,
				status: res.statusCode,
				accessToken: newAccessToken
			})
		}
	}
}
