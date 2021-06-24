import Vue from 'vue';
Vue.config.productionTip = false;

import App from './App.vue';
import router from '@/router.js';

new Vue({
	el: '#app',
	render: h => h(App),
	router
});
