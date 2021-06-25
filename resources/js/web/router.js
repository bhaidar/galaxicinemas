import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	base: '',
	mode: 'history',
	routes: [

		{
			path: '/',
			redirect: '/showtimes'

		},

		{
			path: '/movies',
			redirect: '/showtimes'

		},

		{
			path: '/showtimes',
			component: () => import('./screens/ScreenIndex'),
			meta: {
				pageTitle: 'Now Playing'
			}

		},

		{
			path: '/movie/:movieId',
			component: () => import('./screens/ScreenMovie'),
			meta: {
				pageTitle: 'Now Playing'
			},
			props: true
		},

		{
			path: '/coming-soon',
			component: () => import('./screens/ScreenComing'),
			meta: {
				pageTitle: 'Coming Soon'
			}
		},

		{
			path: '/not-found',
			component: () => import('./screens/Screen404'),
			meta: {
				pageTitle: 'Not Found'
			}
		},

		{
			path: '*',
			redirect: '/not-found'
		}
		
	]
});
