import { Request } from 'express'
import jwt, { SignOptions } from 'jsonwebtoken'
import { IUser } from '../interface/interface.user'

export const signAccessToken = () => (req: Request, payload: IUser, options: SignOptions): string | any => {
	try {
		if (!payload) {
			return null
		} else {
			const accessToken: string = jwt.sign({ ...payload }, process.env.ACCESS_TOKEN_SECRET, { ...options })
			const refreshToken: string = jwt.sign({ ...payload }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '90d' })
			req.session['refreshToken'] = refreshToken
			return { accessToken, refreshToken }
		}
	} catch (err) {}
}

export const verifySignAccessToken = () => (token: string): string | any => {
	try {
		const decoded: string | any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
		return decoded
	} catch (err) {}
}

export const signRefreshToken = () => (req: Request): string | any => {
	try {
		const getToken: string = req.session['refreshToken']
		const { id, email }: string | any = jwt.verify(getToken, process.env.REFRESH_TOKEN_SECRET)
		const accessToken: string = jwt.sign({ userId: id, email: email }, process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: '90d'
		})
		const encodedAccessToken: string = accessToken
		return encodedAccessToken
	} catch (err) {}
}
