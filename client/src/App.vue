<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="navbar-brand">
				<router-link exact to="/" class="text-decoration-none font-weight-bold text-light"> VueJs Google Auth </router-link>
			</div>
			<ul class="navbar-nav ml-auto mr-5">
				<li class="nav-item">
					<router-link to="/register" class="nav-link active">Register</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/login" class="nav-link active">Login</router-link>
				</li>
			</ul>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>
