<template>
	<div>
		<form @submit="socialLogin" action="/auth/google">
			<div class="form-group">
				<button type="submit" class="btn btn-dark form-control mt-2">Login With Google</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'GoogleAuth',
	methods: {
		socialLogin() {
			this.$http
				.get(`/auth/google/response`)
				.then((res) => {
					window.localStorage.setItem('users', res.data.emails[0].value)
					window.localStorage.setItem('accessToken', res.data.accessToken)
				})
				.catch((error) => {
					alert(error.response.data.message)
				})
		}
	}
}
</script>

<style scoped></style>
