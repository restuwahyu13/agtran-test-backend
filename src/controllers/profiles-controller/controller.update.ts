import { Request, Response } from 'express'
import { expressValidator } from '../../utils/util.validator'
import { service } from '../../services'
import { hashPassword } from '../../utils/util.encrypt'
import { IUser } from '../../interface/interface.user'

export const updateUserController = async (req: Request, res: Response): Promise<Response<any>> => {
	const errors = expressValidator(req)

	if (errors.length > 0) {
		return res.status(400).json({
			method: req.method,
			status: res.statusCode,
			errors
		})
	} else {
		const { firstName, lastName, email, password, birdDate, icNumber }: IUser = req.body
		const { status, message } = await service.serviceUpdateUser({
			id: req.params.id,
			firstName,
			lastName,
			email,
			password: hashPassword(password),
			birdDate,
			icNumber
		})

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
