<template>

	<div class="container text-center">
		
		<p>Sorry, could not find what you were looking for!</p>
		<p><router-link :to="{ path: '/' }">Back</router-link></p>

	</div>

</template>
<script>

	import { mapState } from 'vuex';
	import DisplayMovieTeaser from '@elements/DisplayMovieTeaser';

	export default {
		name: 'Screen404',
		components: {
			DisplayMovieTeaser
		},
		computed: {
			...mapState('library', {
				movies: 'nowPlaying'
			})
		},
		methods: {
			loadMovieDetails(movie) {
				this.$router.push('/movie/'+movie.id);
			}
		}
	}

</script>
