import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import library from '@common/stores/library.js';

//  if strict === true, then a deep watch is used
//  which is useful for debugging but can be a huge performance hit

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        library
    }
});
