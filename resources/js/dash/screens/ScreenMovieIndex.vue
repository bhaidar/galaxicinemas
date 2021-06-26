<template>
	<div class="container py-3">

		<display-card>
			<template #header>
				<h1 class="mt-4">
					Browse Movies
				</h1>
			</template>

			<ul class="list-group list-group-flush">
				
				<li
					class="list-group-item px-0"
					v-for="movie in moviesByUpdated"
				>	
					<div
						class="media"
						style="cursor:pointer"
						@click.stop="editMovie(movie)"
					>

						<img
							:alt="'Poster image for '+movie.name+'.'"
							:src="'/storage/'+movie.poster"
							class="img-thumbnail border-0"
							:style="{
								'width': '8rem',
								'height': '6rem',
								'object-fit': 'cover'
							}"
						/>
						
						<div class="media-content">
							<h5>{{ movie.name }}</h5>
							<button
								class="btn btn-sm btn-danger"
							>Delete</button>
						</div>

					</div>
				</li>

			</ul>

			<div class="my-3">
				<router-link
					:to="{ path: '/movie' }"
					class="btn btn-primary"
				>Add Movie</router-link>
			</div>
		</display-card>

	</div>
</template>
<script>

	import DisplayCard from '@elements/DisplayCard';
	import { mapActions, mapState } from 'vuex';

	export default {
		
		name: 'ScreenMovieIndex',
		
		components: {
			DisplayCard
		},

		computed: {
			
			...mapState('library', [
				'movies'
			]),

			moviesByUpdated() {
				if(this.movies.length <= 1)
					return this.movies;
				return this.movies.sort((a, b) => (a.updated > b.updated) ? 1 : -1);
			}

		},

		created() {

			this.initMovies()
			.then(result => {
				console.debug('Init movies result: ', result);
			});

		},

		methods: {
			...mapActions('library', [
				'initMovies'
			]),
			editMovie(movie) {
				this.$router.push('/movie/'+movie.id);
			}
		}

	}


</script>
 