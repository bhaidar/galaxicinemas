import Vue from 'vue';
Vue.config.productionTip = false;

import { Alert, Button, Collapse, Dropdown, Modal, Popover, Tab, Toast, Tooltip } from 'bootstrap';

import App from './App.vue';
import router from './router.js';
import store from './store.js';
import axios from 'axios';

axios.defaults.headers.common['X-CSRFToken'] = window.system.csrf;
const token = localStorage.getItem('token');
if(token)
    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
