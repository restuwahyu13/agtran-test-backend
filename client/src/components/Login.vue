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
								<div class="form-group">
									<button type="submit" class="btn btn-dark form-control mt-2">Login With Google</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import jwt from 'jsonwebtoken'

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
					const decoded = jwt.decode(res.data.accessToken)
					window.localStorage.setItem('users', decoded.email)
					window.localStorage.setItem('accessToken', res.data.accessToken)

					if (window.localStorage.getItem('users') && window.localStorage.getItem('accesstoken')) {
						this.$route.push('/dashboard')
					} else {
						this.$router.push(this.$route.fullpath)
					}
				})
				.catch((error) => {
					if (error.response.data.errors) {
						this.status = error.response.data.status
						const errors = error.response.data.errors
						for (let i in errors) {
							this.message = errors[i].msg
						}
					} else {
						this.status = error.response.data.status
						this.message = error.response.data.message
					}
				})
		}
	}
}
</script>

<style scoped></style>
