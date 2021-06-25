const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/dash/index.js', 'public/js/dash.js')
	.js('resources/js/web/index.js', 'public/js/web.js')
	.sass('resources/sass/common/_index.scss', 'public/css/common.css')
	.sass('resources/sass/dash/_index.scss', 'public/css/dash.css')
	.sass('resources/sass/web/_index.scss', 'public/css/web.css')
	.webpackConfig({
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'resources/js'),
				'@common': path.resolve(__dirname, 'resources/js/common'),
				'@dash': path.resolve(__dirname, 'resources/js/dash'),
				'@web': path.resolve(__dirname, 'resources/js/web'),
				'@editors': path.resolve(__dirname, 'resources/js/common/components/editors'),
				'@elements': path.resolve(__dirname, 'resources/js/common/components/elements'),
				'@helpers': path.resolve(__dirname, 'resources/js/common/helpers')
			}
		}
	});

mix.vue();
