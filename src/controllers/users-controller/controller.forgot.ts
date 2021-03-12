import { Request, Response } from 'express'
import sgMail from '@sendgrid/mail'
import { ClientResponse } from '@sendgrid/client/src/response'
import { service } from '../../services'
import { signAccessToken } from '../../utils/util.jwt'
import { expressValidator } from '../../utils/util.validator'
import { tempMailReset } from '../../templates/template.reset'
import { IRegisterMail } from '../../interface/interface.tempmail'
import { IJwt } from '../../interface/interface.jwt'

export const forgotController = async (req: Request, res: Response): Promise<Response<any>> => {
	const errors = expressValidator(req)

	if (errors.length > 0) {
		return res.status(400).json({
			method: req.method,
			status: res.statusCode,
			errors
		})
	} else {
		const { status, message, data } = await service.serviceForgot({ email: req.body.email })

		if (status >= 400) {
			return res.status(status).json({
				method: req.method,
				status: res.statusCode,
				message
			})
		} else {
			const { accessToken }: IJwt = signAccessToken()(req, { id: data._id, email: data.email }, { expiresIn: '5m' })
			const template: IRegisterMail = tempMailReset(data.email, accessToken)

			sgMail.setApiKey(process.env.SG_API_KEY)
			const sgResponse: [ClientResponse, any] = await sgMail.send(template)

			if (!sgResponse) {
				return res.status(500).json({
					method: req.method,
					status: res.statusCode,
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
