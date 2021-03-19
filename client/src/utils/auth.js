import jwt from 'jsonwebtoken'

export const setAuth = (type, payload) => {
	if (type == 'local') {
		const decoded = jwt.decode(payload.data.accessToken)
		localStorage.setItem('users', decoded.email)
		localStorage.setItem('accessToken', payload.data.accessToken)
	} else {
		localStorage.setItem('users', payload.data.profile.emails[0].value)
		localStorage.setItem('accessToken', payload.data.accessToken)
	}
}

export const isAuthLocal = () => {
	const isAuth = localStorage.getItem('users') && localStorage.getItem('accessToken')
	if (!isAuth) {
		return false
	} else {
		return true
	}
}

export const isNotAuth = () => {
	const isAuth = localStorage.getItem('users') && localStorage.getItem('accessToken')
	if (isAuth) {
		localStorage.removeItem('users')
		localStorage.removeItem('accessToken')
	} else {
		return false
	}
}
