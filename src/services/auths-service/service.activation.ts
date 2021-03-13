import knex from '../../databases'
import { UsersDTO } from '../../dto/dto.user'
import { IUser } from '../../interface/interface.user'

export const serviceActivation = (payload: IUser): Promise<Record<string, any>> => {
	return new Promise(async (resolve, reject) => {
		try {
			const checkUser: UsersDTO[] = await knex<UsersDTO>('users').select().where({ email: payload.email }).returning('email')

			if (checkUser[0].active === true) {
				resolve({
					status: 200,
					message: 'user account hash been active, please login now'
				})
			} else {
				const updateUserActive: number = await knex<UsersDTO>('users')
					.where({ userId: checkUser[0].userId })
					.update({ active: true, updatedAt: new Date() })

				if (updateUserActive < 1) {
					resolve({
						status: 403,
						message: `activation account failed for this ${checkUser[0].email}`
					})
				} else {
					resolve({
						status: 200,
						message: `activation account successfully for this email ${checkUser[0].email}`
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
