<template>
	<div></div>
</template>

<script>
export default {
	name: 'Logout',
	mounted() {
		this.destroyStorage()
	},
	methods: {
		destroyStorage() {
			if (localStorage.getItem('users') && localStorage.getItem('accessToken')) {
				localStorage.removeItem('users')
				localStorage.removeItem('accessToken')
				this.$router.push('/login')
			} else {
				this.$router.push('/')
			}
		}
	}
}
</script>

<style scoped></style>
