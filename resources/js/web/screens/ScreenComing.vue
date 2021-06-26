<template>

	<div class="container">
		<ul
			class="list-group list-group-grid"
		>

			<li
				v-for="movie in movies"
				:key="movie.id"
				class="list-group-item"
			>
				<display-movie-teaser
					:movie="movie"
					:interactive="false"
				/>
			</li>

		</ul>
	</div>

</template>
<script>

	import { mapActions, mapGetters, mapState } from 'vuex';
	import DisplayMovieTeaser from '@elements/DisplayMovieTeaser';

	export default {
		name: 'ScreenComing',
		components: {
			DisplayMovieTeaser
		},
		computed: {
			...mapGetters('library', [
				'getMovie'
			]),
			...mapState('library', [
				'comingSoon'
			]),
			movies() {
				const movieList = [];
				this.comingSoon.forEach(movieId => {
					movieList.push(this.getMovie(movieId));
				});
				return movieList;
			}
		},
		methods: {
			...mapActions('library', [
				'initComingSoon'
			])
		},
		created() {
			if(!this.comingSoon.length)
				this.initComingSoon();
		}
	}

</script>
