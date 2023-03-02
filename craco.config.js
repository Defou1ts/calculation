const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@types': path.resolve(__dirname, 'src/types'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@constants': path.resolve(__dirname, 'src/constants'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@styles': path.resolve(__dirname, 'src/assets/styles'),
			'@images': path.resolve(__dirname, 'src/assets/images'),
		},
	},
};
