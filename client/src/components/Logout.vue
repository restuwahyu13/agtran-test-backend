<template>
	<div></div>
</template>

<script>
import { isNotAuth, isAuthLocal } from '../utils/auth'

export default {
	name: 'Logout',
	mounted() {
		this.destroyStorage()
	},
	methods: {
		destroyStorage() {
			if (isAuthLocal()) {
				isNotAuth()
				window.localStorage.setItem('loading', false)
				this.$router.go('/login')
			} else {
				this.$router.push('/')
			}
		}
	}
}
</script>

<style scoped></style>
