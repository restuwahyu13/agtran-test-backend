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
					message: `user account is not exist for this id ${payload.id}`
				})
			} else {
				const updateUseAccount: number = await knex<UsersDTO>('users').where({ userId: checkUser[0].userId }).update({
					firstName: payload.firstName,
					lastName: payload.lastName,
					email: payload.email,
					password: payload.password,
					birdDate: payload.birdDate,
					icNumber: payload.icNumber,
					updatedAt: new Date()
				})

				if (updateUseAccount < 1) {
					resolve({
						status: 403,
						message: `updated user account for this userId ${payload.id} failed`
					})
				} else {
					resolve({
						status: 200,
						message: `updated user account for this userId ${payload.id} successfully`
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
