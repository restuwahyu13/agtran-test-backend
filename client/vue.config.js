module.exports = {
	devServer: {
		proxy: {
			'/auth/*': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				secure: false
			},
			'/api/v1/*': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				secure: false
			}
		}
	}
}
