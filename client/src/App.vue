<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="navbar-brand">
				<router-link exact to="/" class="text-decoration-none font-weight-bold text-light"> VueJs Google Auth </router-link>
			</div>
			<ul class="navbar-nav ml-auto mr-5">
				<li>
					<router-link exact to="/" class="nav-link active" v-if="isAuth"> Home </router-link>
				</li>
				<li class="nav-item" v-if="!isAuth">
					<router-link to="/register" class="nav-link active">Register</router-link>
				</li>
				<li class="nav-item" v-if="!isAuth">
					<router-link to="/login" class="nav-link active">Login</router-link>
				</li>
				<li class="nav-item" v-if="isAuth">
					<router-link to="/logout" class="nav-link active">Logout</router-link>
				</li>
				>
			</ul>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
	data: () => ({
		isAuth: undefined
	}),
	mounted() {
		this.isAuthenticated()
	},
	methods: {
		isAuthenticated() {
			if (!localStorage.getItem('users') && !localStorage.getItem('accessToken')) {
				this.isAuth = false
			} else {
				this.isAuth = true
			}
		}
	}
}
</script>
