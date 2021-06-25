<template>

	<div class="container">

		<div v-if="!movies">
			<p>Sorry there are no movies.</p>
		</div>

		<ul
			v-else
			class="list-group list-group-grid"
		>

			<li
				@click="loadMovieDetails(movie)"
				v-for="movie in movies"
				:key="movie.id"
				class="list-group-item list-group-item-link"
			>
				<display-movie-teaser
					:movie="movie"
					:show-titles="false"
				/>
			</li>

		</ul>
	</div>

</template>
<script>

	import { mapActions, mapGetters, mapState } from 'vuex';
	import DisplayMovieTeaser from '@elements/DisplayMovieTeaser';

	export default {
		name: 'ScreenIndex',
		components: {
			DisplayMovieTeaser
		},
		computed: {
			...mapGetters('library', [
				'getMovie'
			]),
			...mapState('library', [
				'nowPlaying'
			]),
			movies() {
				const movieList = [];
				this.nowPlaying.forEach(movieId => {
					movieList.push(this.getMovie(movieId));
				});
				return movieList;
			}
		},
		methods: {
			...mapActions('library', [
				'initNowPlaying'
			]),
			loadMovieDetails(movie) {
				this.$router.push('/movie/'+movie.id);
			}
		},
		created() {
			if(!this.nowPlaying.length)
				this.initNowPlaying();
		}
	}

</script>
