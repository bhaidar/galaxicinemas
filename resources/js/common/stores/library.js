import axios from 'axios';
import util from '@helpers/Utility.js';

import { findIndex } from 'lodash';

const state = {
	comingSoon: [],
	movies: [],
	nowPlaying: []
};

const getters = {
	getMovie: state => movieId => {
		const movieIndex = findIndex(state.movies, { id: movieId });
		if(movieIndex < 0)
			return null;
		return state.movies[movieIndex];
	}
};


const actions = {

	initComingSoon({ commit, state }) {
		return axios.get('/api/movies/coming-soon')
		.then(response => {
			const movieData = response.data;
			if(!movieData.length)
				return false;
			movieData.forEach(movie => {
				commit('addMovieToComingSoon', movie);
			});
		})
		.catch(error => {
			console.error('Coming Soon returned error.', error);
		})
		.then(result => {
			return result;
		});
	},

	initMovie({ commit, state }, movieId) {
		return axios.get('/api/movie/'+movieId)
		.then(response => {
			const movieData = response.data;
			if(!movieData)
				return false;
			commit('addMovie', movieData);
			return true;
		})
		.catch(error => {
			console.error('Movie returned error.', error);
		})
		.then(result => {
			return result;
		});
	},

	initNowPlaying({ commit, state }) {
		return axios.get('/api/movies/now-playing')
		.then(response => {
			const movieData = response.data;
			if(!movieData.length)
				return false;
			movieData.forEach(movie => {
				commit('addMovieToNowPlaying', movie);
			});
			return true;
		})
		.catch(error => {
			console.error('Now Playing returned error.', error);
		})
		.then(result => {
			return result;
		});
	}

};

const mutations = {

	addMovie(state, movie) {
		const movieIndex = findIndex(state.movies, { id: movie.id });
		if(movieIndex < 0)
			state.movies.push(movie);
		else
			state.movies[movieIndex] = movie;
	},

	addMovieToComingSoon(state, movie) {
		const movieIndex = findIndex(state.movies, { id: movie.id });
		if(movieIndex < 0)
			state.movies.push(movie);
		else
			state.movies[movieIndex] = movie;
		if(state.comingSoon.indexOf(movie.id) < 0)
			state.comingSoon.push(movie.id);
	},

	addMovieToNowPlaying(state, movie) {
		const movieIndex = findIndex(state.movies, { id: movie.id });
		if(movieIndex < 0)
			state.movies.push(movie);
		else
			state.movies[movieIndex] = movie;
		if(state.nowPlaying.indexOf(movie.id) < 0)
			state.nowPlaying.push(movie.id);
	}

};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
