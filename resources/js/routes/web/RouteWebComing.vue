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
				/>
			</li>

		</ul>
	</div>

</template>
<script>
	import DisplayMovieTeaser from '@elements/DisplayMovieTeaser';
	import DummyHelper from '@helpers/Dummy.js';
	export default {
		name: 'RouteWebComing',
		components: {
			DisplayMovieTeaser
		},
		data() {
			return {
				movies: DummyHelper.movies
			}
		}
	}
</script>