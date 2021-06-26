import Vue from 'vue';
import VueRouter from 'vue-router';

import { get } from 'lodash';

Vue.use(VueRouter);
const router = new VueRouter({
	base: '/dashboard',
	mode: 'history',
	routes: [

		{
			path: '/',
			component: () => import('./screens/ScreenIndex'),
			redirect: '/movies'
		},

		{
			path: '/not-found',
			component: () => import('./screens/Screen404')
		},
		
		{
			name: 'login',
			path: '/login',
			meta: {
				requiresAuth: false
			},
			component: () => import('./screens/ScreenLogin')
		},
		
		{
			path: '/movies',
			component: () => import('./screens/ScreenMovieIndex')
		},
		
		{
			path: '/movie/:movieId?',
			component: () => import('./screens/ScreenMovieSingle'),
			props: true
		},
		
		{
			path: '/settings',
			component: () => import('./screens/ScreenSettings')
		}

	]
});

export default router;
