import Vue from 'vue';
Vue.config.productionTip = false;

import App from './App.vue';
import router from './router.js';
import store from './store.js';
import axios from 'axios';

axios.defaults.headers.common['X-CSRFToken'] = window.system.csrf;

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
