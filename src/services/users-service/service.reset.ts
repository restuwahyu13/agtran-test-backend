import knex from '../../databases'
import { UsersDTO } from '../../dto/dto.user'
import { IUser } from '../../interface/interface.user'

export const serviceReset = (payload: IUser): Promise<Record<string, any>> => {
	return new Promise(async (resolve, reject) => {
		try {
			const updateNewPassword: number = await knex<UsersDTO>('users')
				.where({ userId: payload.id })
				.update({ password: payload.password, updatedAt: new Date() })

			if (updateNewPassword < 1) {
				resolve({
					status: 403,
					message: 'change new password failed, please try again'
				})
			} else {
				resolve({
					status: 200,
					message: 'change new password successfully, please login now'
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
