import { Request, Response } from 'express'
import { serviceResultUser } from '../../services/profiles-service/service.result'
import { expressValidator } from '../../utils/util.validator'

export const resultUserController = async (req: Request, res: Response): Promise<Response<any>> => {
	const errors = expressValidator(req)

	if (errors.length > 0) {
		return res.status(400).json({
			method: req.method,
			status: res.statusCode,
			errors
		})
	} else {
		const { status, message, data } = await serviceResultUser({ id: req.params.id })

		if (status >= 400) {
			return res.status(status).json({
				method: req.method,
				staus: res.statusCode,
				message
			})
		} else {
			return res.status(status).json({
				method: req.method,
				staus: res.statusCode,
				message,
				user: data
			})
		}
	}
}
