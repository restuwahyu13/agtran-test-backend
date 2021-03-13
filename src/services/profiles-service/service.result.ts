import knex from '../../databases'
import { UsersDTO } from '../../dto/dto.user'
import { IUser } from '../../interface/interface.user'

export const serviceResultUser = (payload: IUser): Promise<Record<string, any>> => {
	return new Promise(async (resolve, reject) => {
		try {
			const checkUser: UsersDTO[] = await knex<UsersDTO>('users').select().where({ userId: payload.id }).returning('*')

			if (checkUser.length < 1) {
				resolve({
					status: 404,
					message: `user account is not exist for this userId ${payload.id}`
				})
			} else {
				resolve({
					status: 200,
					message: `user account already exist for this userId ${payload.id}`,
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
