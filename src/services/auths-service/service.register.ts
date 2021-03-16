import knex from '../../databases'
import { UsersDTO } from '../../dto/dto.user'
import { IUser } from '../../interface/interface.user'

export const serviceRegister = (payload: IUser): Promise<Record<string, any>> => {
	return new Promise(async (resolve, reject) => {
		try {
			const checkUser: UsersDTO[] = await knex<UsersDTO>('users').select().where({ email: payload.email }).returning('email')

			if (checkUser.length > 0) {
				resolve({
					status: 409,
					message: `register new account failed email already taken ${payload.email}, please try again`
				})
			} else {
				const addNewUser: UsersDTO[] = await knex<UsersDTO>('users')
					.insert({
						firstName: payload.firstName,
						lastName: payload.lastName,
						email: payload.email,
						password: payload.password,
						birdDate: new Date(payload.birdDate),
						icNumber: payload.icNumber,
						createdAt: new Date()
					})
					.returning('*')

				if (!addNewUser) {
					resolve({
						status: 403,
						message: 'register new account failed, please try again'
					})
				} else {
					resolve({
						status: 201,
						message: `register new account successfully, please check your email ${payload.email}`,
						data: addNewUser
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
