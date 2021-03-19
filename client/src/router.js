import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard'
import RegisterAuth from './components/Register'
import LoginAuth from './components/Login'
import ActivationAuth from './components/Activation'
import LogoutAuth from './components/Logout'

const routerHistory = createWebHistory()
const router = createRouter({
	history: routerHistory,
	routes: [
		{
			name: 'dashboard',
			path: '/',
			component: Dashboard,
			beforeEnter(to, from, next) {
				if (!localStorage.getItem('users') && !localStorage.getItem('accessToken')) {
					next({ path: '/login' })
				} else {
					next()
				}
			}
		},
		{
			name: 'register',
			path: '/register',
			component: RegisterAuth,
			beforeEnter(to, from, next) {
				if (!localStorage.getItem('users') && !localStorage.getItem('accessToken')) {
					next()
				} else {
					next({ path: '/' })
				}
			}
		},
		{
			name: 'login',
			path: '/login',
			component: LoginAuth,
			beforeEnter(to, from, next) {
				if (!localStorage.getItem('users') && !localStorage.getItem('accessToken')) {
					next()
				} else {
					next({ path: '/' })
				}
			}
		},
		{ name: 'activation', path: '/activation/:token', component: ActivationAuth },
		{ name: 'logout', path: '/logout', component: LogoutAuth }
	]
})

export default router
