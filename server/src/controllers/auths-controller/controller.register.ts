import { Request, Response } from 'express'
import sgMail from '@sendgrid/mail'
import { ClientResponse } from '@sendgrid/client/src/response'
import { service } from '../../services'
import { signAccessToken } from '../../utils/util.jwt'
import { tempMailRegister } from '../../templates/template.register'
import { expressValidator } from '../../utils/util.validator'
import { hashPassword } from '../../utils/util.encrypt'
import { IRegisterMail } from '../../interface/interface.tempmail'
import { IUser } from '../../interface/interface.user'
import { IJwt } from '../../interface/interface.jwt'

export const registerController = async (req: Request, res: Response): Promise<Response<any>> => {
	const errors = expressValidator(req)

	if (errors.length > 0) {
		return res.status(400).json({
			method: req.method,
			status: res.statusCode,
			errors
		})
	} else {
		const { firstName, lastName, email, password, birdDate, icNumber }: IUser = req.body
		const { status, message, data } = await service.serviceRegister({
			firstName,
			lastName,
			email,
			birdDate,
			password: hashPassword(password),
			icNumber
		})

		if (status >= 400) {
			return res.status(status).json({
				method: req.method,
				status: res.statusCode,
				message
			})
		} else {
			const { accessToken }: IJwt = signAccessToken()(req, { id: data[0].userId, email: data[0].email }, { expiresIn: '5m' })
			const template: IRegisterMail = tempMailRegister(data[0].email, accessToken)

			sgMail.setApiKey(process.env.SG_API_KEY)
			const sgResponse: [ClientResponse, any] = await sgMail.send(template)

			if (!sgResponse) {
				return res.status(500).json({
					method: req.method,
					status: 500,
					message: 'Server error failed to sending email activation'
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
