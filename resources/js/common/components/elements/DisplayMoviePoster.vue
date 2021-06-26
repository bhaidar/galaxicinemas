<template>
	<figure class="movie-poster">
		<img
			:alt="'Movie poster for '+movie.name+'.'"
			:src="'/storage/'+movie.poster"
			:width="width" :height="height"
		/>
	</figure>
</template>

<script>
	export default {
		name: 'DisplayMoviePoster',
		props: {
			movie: {
				type: Object,
				required: true
			},
			width: {
				type: [Number, String],
				default: 140
			},
			height: {
				type: [Number, String],
				default: 200
			}
		}
	}
</script>
