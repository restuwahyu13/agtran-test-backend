import { createRouter, createWebHistory } from 'vue-router'
import GoogleAuthentication from './components/GoogleAuth'
import Banner from './components/Banner'

const routerHistory = createWebHistory()
const router = createRouter({
	history: routerHistory,
	routes: [
		{ path: '/', component: Banner },
		{ path: '/login', component: GoogleAuthentication }
	]
})

export default router
