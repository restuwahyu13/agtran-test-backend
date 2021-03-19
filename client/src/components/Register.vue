<template>
	<div>
		<div class="container mt-3 position-relative">
			<div class="row mx-auto d-flex justify-content-center">
				<div class="col-6">
					<div class="card">
						<div class="card-header">
							<h4>Form Register</h4>
						</div>
						<div class="body p-3">
							<form @submit.prevent="handleSubmit">
								<div class="form-group">
									<label for="firstName">firstname</label>
									<input
										type="text"
										v-model="firstName"
										class="form-control"
										placeholder="Enter FirstName"
										autofocus
										required
										autocomplete="off"
									/>
								</div>
								<div class="form-group">
									<label for="lastName">lastname</label>
									<input
										type="text"
										v-model="lastName"
										class="form-control"
										placeholder="Enter LastName"
										autofocus
										required
										autocomplete="off"
									/>
								</div>
								<div class="form-group">
									<label for="email">email</label>
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
									<label for="birdDate">birdDate</label>
									<input
										type="date"
										v-model="birdDate"
										class="form-control"
										placeholder="Enter FirstName"
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
									<button type="submit" class="btn btn-dark form-control mt-2">Register</button>
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
import { uniqueNumber } from '../utils/uniqueNumber'

export default {
	name: 'Register',
	data: () => ({
		firstName: '',
		lastName: '',
		email: '',
		birdDate: '',
		password: ''
	}),
	methods: {
		handleSubmit() {
			this.$http
				.post('/api/v1/users/auth/login', {
					firstName: this.firstName,
					lastName: this.lastName,
					email: this.email,
					birdDate: this.birdDate,
					password: this.password,
					icNumber: uniqueNumber()
				})
				.then((res) => {
					alert(res.data.message)
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
