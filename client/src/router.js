import { createRouter, createWebHistory } from 'vue-router'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import RegisterAuth from './components/Register'
import LoginAuth from './components/Login'
// import GoogleAuthentication from './components/GoogleAuth'

const routerHistory = createWebHistory()
const router = createRouter({
	history: routerHistory,
	routes: [
		{ name: 'header', path: '/', component: Header },
		{ name: 'register', path: '/register', component: RegisterAuth },
		{ name: 'login', path: '/login', component: LoginAuth, meta: { login: true } },
		{ name: 'dashboard', path: '/dashboard', component: Dashboard, meta: { dashboard: true } }
	]
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(({ meta }) => meta.dashboard)) {
		if (!localStorage.getItem('accessToken')) {
			next({ name: 'login' })
		} else {
			next({ name: 'dashboard' })
		}
	} else {
		next()
	}

	if (to.matched.some(({ meta }) => meta.login)) {
		if (!localStorage.getItem('accessToken')) {
			next({ name: 'login' })
		} else {
			next({ name: 'dashboard' })
		}
	} else {
		next()
	}
})

export default router
