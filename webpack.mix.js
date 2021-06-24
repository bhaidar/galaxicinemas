const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'public/js')
   .vue()
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
   	resolve: {
   		alias: {
   			'@': path.resolve(__dirname, 'resources/js'),
   			'@editors': path.resolve(__dirname, 'resources/js/components/editors'),
   			'@elements': path.resolve(__dirname, 'resources/js/components/elements'),
   			'@helpers': path.resolve(__dirname, 'resources/js/helpers'),
            '@routes': path.resolve(__dirname, 'resources/js/routes')
   		}
   	}
   })
