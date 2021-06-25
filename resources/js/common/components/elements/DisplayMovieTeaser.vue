<template>
	<div class="movie movie-teaser">

		<display-movie-poster
			:movie="movie"
		/>

		<template v-if="showTitles">
			<h3 class="movie-title">
				{{ movie.name }}
			</h3>
			<p>
				<strong class="movie-rating badge bg-light text-dark">
					{{ movie.rating }}
				</strong>
				<var class="movie-duration">
					{{ movie.duration }} minutes
				</var>
			</p>
		</template>
		
	</div>
</template>

<script>

	import DisplayMoviePoster from '@elements/DisplayMoviePoster';
	export default {
		name: 'DisplayMovieTeaser',
		components: {
			DisplayMoviePoster
		},
		props: {
			movie: {
				type: Object,
				required: true
			},
			showTitles: {
				type: Boolean,
				default: true
			}
		}
	}
	
</script>
