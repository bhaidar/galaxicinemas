import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    base: '',
    mode: 'history',
    routes: [

        {
            path: '/dashboard',
            component: () => import('./screens/ScreenIndex'),
            children: [
                
                {
                    path: '/movie/:movieId',
                    component: () => import('./screens/ScreenMovie')
                },
                
                {
                    path: '/settings',
                    component: () => import('./screens/ScreenSettings')
                }

            ]
        }
        
    ]
});
