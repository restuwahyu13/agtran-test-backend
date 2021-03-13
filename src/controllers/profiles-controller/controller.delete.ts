import { Request, Response } from 'express'
import { expressValidator } from '../../utils/util.validator'
import { serviceDeleteUser } from '../../services/profiles-service/service.delete'

export const deleteUserController = async (req: Request, res: Response): Promise<Response<any>> => {
	const errors = expressValidator(req)

	if (errors.length > 0) {
		return res.status(400).json({
			method: req.method,
			status: res.statusCode,
			errors
		})
	} else {
		const { status, message } = await serviceDeleteUser({ id: req.params.id })

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
				message
			})
		}
	}
}
