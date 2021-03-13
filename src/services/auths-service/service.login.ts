import knex from '../../databases'
import { UsersDTO } from '../../dto/dto.user'
import { IUser } from '../../interface/interface.user'

export const serviceLogin = (payload: IUser): Promise<Record<string, any>> => {
	return new Promise(async (resolve, reject) => {
		try {
			const checkUser: UsersDTO[] = await knex<UsersDTO>('users')
				.select()
				.where({ email: payload.email })
				.returning(['email', 'active'])

			if (checkUser.length < 1) {
				resolve({
					status: 404,
					message: 'user account is not exist, please register new account'
				})
			} else {
				if (checkUser[0].active === false) {
					resolve({
						status: 403,
						message: 'account is not active, please resend new activation token'
					})
				} else {
					await knex<UsersDTO>('users')
						.where({ userId: checkUser[0].userId })
						.update({ firstLogin: new Date(), updatedAt: new Date() })

					resolve({
						status: 200,
						message: 'login successfully',
						data: checkUser
					})
				}
			}
		} catch (error) {
			resolve({
				status: 500,
				message: `internal server error: ${error}`
			})
		}
	})
}
