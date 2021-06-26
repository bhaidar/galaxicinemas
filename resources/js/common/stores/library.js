import axios from 'axios';
import util from '@helpers/Utility.js';

import { get, findIndex } from 'lodash';

const state = {
	comingSoon: [],
	movies: [],
	nowPlaying: []
};

const getters = {
	getMovie: state => movieId => {
		// for now movie ids are ints
		const movieIndex = findIndex(state.movies, { id: parseInt(movieId, 10) });
		if(movieIndex < 0)
			return null;
		return state.movies[movieIndex];
	}
};


const actions = {

	initMovie({ commit, state }, movieId) {
		return axios.get('/api/movie/'+movieId)
		.then(response => {
			const movieData = get(response.data, 'movie', null);
			if(!movieData)
				return false;
			commit('updateMovie', movieData);
			return true;
		})
		.catch(error => {
			console.error('Movie returned error.', error);
			return false;
		})
		.then(result => {
			return result;
		});
	},

	initMovies({ commit, state }) {
		return axios.get('/api/movies')
		.then(response => {
			const movieData = response.data;
			if(!movieData.length)
				return false;
			movieData.forEach(movie => {
				if(!movie.coming_soon)
					commit('updateMovie', movie);
				else
					commit('addMovieToComingSoon', movie);
			});
			return true;
		})
		.catch(error => {
			console.error('Init Movies returned error.', error);
			return false;
		})
		.then(result => {
			return result;
		});
	},

	saveMovie({ commit, state }, inputMovie) {
		const movieId = inputMovie.id;
		const endpoint = !movieId ? '/api/movie' : '/api/movie/'+movieId;
		return axios.post(endpoint, inputMovie)
		.then(response => {
			const movieData = get(response.data, 'movie', null);
			if(!movieData)
				return false;
			commit('updateMovie', movieData);
			return true;
		})
		.catch(error => {
			console.error('Save Movie returned error.', error);
			return false;
		})
		
	},


	initComingSoon({ commit, state }) {
		return axios.get('/api/movies/coming-soon')
		.then(response => {
			const movieData = response.data;
			if(!movieData.length)
				return false;
			movieData.forEach(movie => {
				commit('addMovieToComingSoon', movie);
			});
			return true;
		})
		.catch(error => {
			console.error('Coming Soon returned error.', error);
			return false;
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
			return false;
		})
		.then(result => {
			return result;
		});
	}

};

const mutations = {

	updateMovie(state, movie) {
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
