<template>
	<div>
		<div class="container mt-5">
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div v-if="status == 200" class="alert alert-success text-center font-weight-bold">
						{{ message }}
					</div>
					<div v-else class="alert alert-danger text-center font-weight-bold">
						{{ message }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Activation',
	data: () => ({
		status: null,
		message: ''
	}),
	mounted() {
		this.$http
			.get(`/api/v1/users/auth/activation/${this.$route.params.token}`)
			.then((res) => {
				this.status = res.data.status
				this.message = res.data.message
				// redirect after activation account success
				setTimeout(() => this.$router.push('/login'), 3000)
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
</script>

<style scoped></style>
