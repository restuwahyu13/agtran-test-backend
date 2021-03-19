<template>
	<div>
		<div class="container mt-5 position-relative">
			<div class="row mx-auto d-flex justify-content-center">
				<div class="col-6">
					<div class="card">
						<div class="card-header">
							<h4>Form Login</h4>
						</div>
						<div class="body p-3">
							<form @submit.prevent="handleSubmit">
								<div class="form-group">
									<label for="email">Email</label>
									<input
										type="email"
										v-model="email"
										class="form-control"
										placeholder="Enter Email"
										autofocus
										required
										autocomplete="off"
									/>
								</div>
								<div class="form-group">
									<label for="password">Password</label>
									<input
										type="password"
										v-model="password"
										class="form-control"
										placeholder="Enter Password"
										autofocus
										required
										autocomplete="off"
									/>
								</div>
								<div class="form-group">
									<button type="submit" class="btn btn-dark form-control mt-2">Login</button>
								</div>
							</form>
							<GoogleAuth />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import GoogleAuth from './GoogleAuth'
import { setAuth, isAuthLocal } from '../utils/auth'

export default {
	name: 'Login',
	data: () => ({
		email: '',
		password: ''
	}),
	methods: {
		handleSubmit() {
			this.$http
				.post('/api/v1/users/auth/login', {
					email: this.email,
					password: this.password
				})
				.then((res) => {
					if (res.data) {
						setAuth('local', res)
						this.checkAuth()
					}
				})
				.catch((error) => {
					if (error.response.data.errors) {
						this.status = error.response.data.status
						const errors = error.response.data.errors
						for (let i in errors) {
							alert(errors[i].msg)
						}
					} else {
						alert(error.response.data.message)
					}
				})
		},
		checkAuth() {
			if (isAuthLocal()) {
				this.$router.go('/')
			} else {
				this.$router.push('/login')
			}
		}
	},
	components: { GoogleAuth }
}
</script>

<style scoped></style>
