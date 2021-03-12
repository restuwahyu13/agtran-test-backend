import knex from '../../databases'
import { UsersDTO } from '../../dto/dto.user'
import { IUser } from '../../interface/interface.user'

export const serviceResend = (payload: IUser): Promise<Record<string, any>> => {
	return new Promise(async (resolve, reject) => {
		try {
			const checkUser: UsersDTO[] = await knex<UsersDTO>('users').select().where({ email: payload.email }).returning('email')

			if (checkUser.length < 1) {
				resolve({
					status: 404,
					message: `resend new activation token failed, user account for this email ${payload.email} is not exist`
				})
			} else {
				resolve({
					status: 200,
					message: `resend new activation token successfully please check your email ${payload.email}`
				})
			}
		} catch (error) {
			resolve({
				status: 500,
				message: `internal server error: ${error}`
			})
		}
	})
}
