import { Request, Response } from 'express'
import { service } from '../../services'
import { expressValidator } from '../../utils/util.validator'
import { verifyPassword } from '../../utils/util.encrypt'
import { signAccessToken } from '../../utils/util.jwt'

export const loginController = async (req: Request, res: Response): Promise<Response<any>> => {
	const errors = expressValidator(req)

	if (errors.length > 0) {
		return res.status(400).json({
			method: req.method,
			status: res.statusCode,
			errors
		})
	} else {
		const { status, message, data } = await service.serviceLogin({ email: req.body.email })

		if (status >= 400) {
			return res.status(status).json({
				method: req.method,
				status: res.statusCode,
				message
			})
		} else {
			const accessToken = signAccessToken()(req, { id: data._id, email: data.email }, { expiresIn: '1d' })

			verifyPassword(req.body.password, data.password)
				.then(
					(success: boolean): Response<any> => {
						if (!success) {
							return res.status(200).json({
								method: req.method,
								status: res.statusCode,
								message
							})
						} else {
							return res.status(status).json({
								method: req.method,
								status,
								message,
								...accessToken
							})
						}
					}
				)
				.catch((err) => {
					return res.status(500).json({
						method: req.method,
						status: res.statusCode,
						message: `Verify Password Error ${err}`
					})
				})
		}
	}
}
