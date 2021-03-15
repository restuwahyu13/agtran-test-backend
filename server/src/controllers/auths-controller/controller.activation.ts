import { Request, Response } from 'express'
import { service } from '../../services'
import { verifySignAccessToken } from '../../utils/util.jwt'
import { expressValidator } from '../../utils/util.validator'

export const activationController = async (req: Request, res: Response): Promise<Response<any>> => {
	const errors = expressValidator(req)

	if (errors.length > 0) {
		return res.status(400).json({
			method: req.method,
			status: 400,
			errors
		})
	} else {
		const activationToken = verifySignAccessToken()(req.params.token)

		if (!activationToken) {
			return res.status(401).json({
				method: req.method,
				status: 401,
				message: 'activation token is not valid or expired, please resend new token'
			})
		} else {
			const { status, message } = await service.serviceActivation({ ...activationToken })

			if (status >= 400) {
				return res.status(status).json({
					method: req.method,
					status: res.statusCode,
					message
				})
			} else {
				return res.status(status).json({
					method: req.method,
					status: res.statusCode,
					message
				})
			}
		}
	}
}
