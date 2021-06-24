<template>
	<div class="movie movie-details">

		<display-movie-poster
			:movie="movie"
		/>

		<h3 class="movie-title">
			{{ movie.name }}
		</h3>

		<p>
			<button
				class="btn btn-link"
				@click="toggleDescription"
			>Full Description</button>
		</p>

		<p>
			<strong class="movie-rating badge bg-light text-dark">
				{{ movie.rating }}
			</strong>
			<var class="movie-duration">
				{{ movie.duration }} minutes
			</var>
		</p>
		<p>
			{{ movie.description }}
		</p>
	</div>
</template>

<script>

	import DisplayMoviePoster from '@elements/DisplayMoviePoster';
	export default {
		name: 'DisplayMovieDetails',
		components: {
			DisplayMoviePoster
		},
		props: {
			movie: {
				type: Object,
				required: true
			}
		}
	}

</script>
