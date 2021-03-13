import { v4 as uuid } from 'uuid'
import knex from '../../databases'
import { UsersDTO } from '../../dto/dto.user'
import { IUser } from '../../interface/interface.user'

export const serviceForgot = (payload: IUser): Promise<Record<string, any>> => {
	return new Promise(async (resolve, reject) => {
		try {
			const checkUser: UsersDTO[] = await knex<UsersDTO>('users').select().where({ email: payload.email }).returning('email')

			if (checkUser.length < 1) {
				resolve({
					status: 404,
					message: `forgot password failed, user account for this email ${payload.email} is not exist`
				})
			} else {
				await knex<UsersDTO>('users').where({ userId: checkUser[0].userId }).update({ password: uuid(), updatedAt: new Date() })

				resolve({
					status: 200,
					message: `forgot password successfully please check your email reset password ${payload.email}`,
					data: checkUser
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
