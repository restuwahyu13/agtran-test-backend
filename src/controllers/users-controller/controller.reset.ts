import { Request, Response } from 'express'
import { service } from '../../services'
import { hashPassword } from '../../utils/util.encrypt'
import { verifySignAccessToken } from '../../utils/util.jwt'
import { expressValidator } from '../../utils/util.validator'

export const resetController = async (req: Request, res: Response): Promise<Response<any>> => {
	const errors = expressValidator(req)

	if (errors.length > 0) {
		return res.status(400).json({
			method: req.method,
			status: res.statusCode,
			errors
		})
	} else {
		const activationToken = verifySignAccessToken()(req.params.token)

		if (!activationToken) {
			return res.status(401).json({
				method: req.method,
				status: res.statusCode,
				message: 'activation token is not valid or expired, please forgot password again'
			})
		} else {
			const { status, message } = await service.serviceReset({
				id: activationToken.id,
				password: hashPassword(req.body.password)
			})

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
