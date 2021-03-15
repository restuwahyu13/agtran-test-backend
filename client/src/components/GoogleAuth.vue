<template>
	<div>
		<div class="container mt-5 position-relative">
			<div class="row mx-auto d-flex justify-content-center">
				<div class="col-6">
					<div class="card">
						<div class="card-header">
							<h4>Login With Google</h4>
						</div>
						<div class="body">
							<form @submit.prevent="socialLogin">
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
export default {
	name: 'GoogleAuth',
	methods: {
		socialLogin() {
			window.location.href = '/auth/google'
		}
	}
}
</script>

<style scoped></style>
