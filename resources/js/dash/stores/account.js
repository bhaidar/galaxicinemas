import axios from 'axios';
import util from '@helpers/Utility.js';

import { findIndex, get } from 'lodash';

const state = {
	user: null,
	token: null,
	busy: false
};

const getters = {
	isLoggedIn: state => {
		return state.user !== null;
	}
};


const actions = {

	deauth({ commit, dispatch, state }) {
		return axios.get('/api/logout')
		.then(response => {
			const token = get(response, 'data.token', null);
			localStorage.setItem('token', token);
			axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
			commit('setToken', token);
			return token !== null;
		})
		.catch(error => {
			console.error('Authenticate did not work.', error);
			localStorage.setItem('token', null);
			axios.defaults.headers.common['Authorization'] = null;
			commit('setToken', null);
			return false;
		});
	},

	authenticate({ commit, dispatch, state }, { username, password }) {
		return axios.post('/api/authenticate', {
			username,
			password
		})
		.then(response => {
			const token = get(response, 'data.token', null);
			localStorage.setItem('token', token);
			axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
			commit('setToken', token);
			return token !== null;
		})
		.catch(error => {
			console.error('Authenticate did not work.', error);
			localStorage.setItem('token', null);
			axios.defaults.headers.common['Authorization'] = null;
			commit('setToken', null);
			return false;
		});
	},

	initUser({ commit, state }) {
		return axios.get('/api/user')
		.then(response => {
			const user = get(response, 'data.user', null);
			commit('setUser', user);
			return user !== null;
		})
		.catch(error => {
			console.log('Authorize attempt failed.', error);
			commit('setToken', null);
			commit('setUser', null);
			return false;
		});
	}

};

const mutations = {

	setBusy(state, newVal) {
		state.busy = newVal;
	},

	setToken(state, token=null) {
		state.token = token;
	},

	setUser(state, user=null) {
		state.user = user;
	}

};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
