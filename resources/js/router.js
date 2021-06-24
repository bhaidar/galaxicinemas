import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	base: '',
	mode: 'history',
	routes: [

		{
			path: '/',
			component: () => import(/* webpackChunkName: "route/web" */'@routes/web/RouteWebIndex'),
			meta: {
				pageTitle: 'Now Playing'
			}

		},

		{
			path: '/movie/:movieId',
			component: () => import(/* webpackChunkName: "route/web" */'@routes/web/RouteWebMovie'),
			meta: {
				pageTitle: 'Now Playing'
			}
		},

		{
			path: '/coming-soon',
			component: () => import(/* webpackChunkName: "route/web" */'@routes/web/RouteWebComing'),
			meta: {
				pageTitle: 'Coming Soon'
			}
		},

		{
			path: '/dashboard',
			component: () => import(/* webpackChunkName: "route/dash" */'@routes/dash/RouteDashIndex'),
			children: [
				
				{
					path: '/movie/:movieId',
					component: () => import(/* webpackChunkName: "route/dash" */'@routes/dash/RouteDashMovie')
				},
				
				{
					path: '/settings',
					component: () => import(/* webpackChunkName: "route/dash" */'@routes/dash/RouteDashSettings')
				}

			]
		}
		
	]
});
