<template>
	<div :class="movieTeaserClasses">

		<display-movie-poster
			:movie="movie"
		/>

		<template v-if="showTitles">
			<h4 class="movie-title">
				{{ movie.name }}
			</h4>
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
			interactive: {
				type: Boolean,
				default: true
			},
			movie: {
				type: Object,
				required: true
			},
			showTitles: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			movieTeaserClasses() {
				const list = ['movie', 'movie-teaser'];
				if(this.interactive)
					list.push('interactive');
				return list.join(' ');
			}
		}
	}
	
</script>
