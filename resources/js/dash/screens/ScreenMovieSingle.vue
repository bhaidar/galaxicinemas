<template>
	<div class="container py-3">

		<h1 class="my-4">
			{{ movieId ? 'Update Movie' : 'Create Movie' }}
		</h1>

		<display-card v-if="inputMovie">
	
			<editor-movie
				:value="inputMovie"
				@input="inputMovieExtend"
			/>

			<div class="my-3">
			
				<div class="btn-group">
					<button
						@click="save"
						class="btn btn-primary"
						:disabled="!isValid"
					>{{ movieId ? 'Update' : 'Create' }}</button>
					<button
						@click="cancel"
						class="btn"
					>Cancel</button>
				</div>

				<em
					v-if="!isValid"
					class="text-warning mx-3"
				>
					Missing required info: {{ missingFields.join(', ') }}
				</em>

			</div>

		</display-card>
	
	</div>
</template>
<script>

	import { assign, cloneDeep, get, isEqual } from 'lodash';
	import { mapActions, mapGetters } from 'vuex';

	import dateHelper from '@helpers/Date';

	import DisplayCard from '@elements/DisplayCard';
	import EditorMovie from '@editors/EditorMovie.vue';

	const _emptyMovie = () => {
		return {
			id: null,
			name: null,
			rating: null,
			description: null,
			duration: null,
			poster: '',
			release_date: dateHelper.getToday(),
			coming_soon: false,
			cast: '',
			director: ''
		};
	}

	export default {

		name: 'ScreenMovieSingle',

		components: {
			DisplayCard,
			EditorMovie
		},

		data() {
			return {
				inputMovie: null,
				storedMovie: null,
				missingFields: []
			}
		},

		props: {
			movieId: {
				type: String,
				default: null
			}
		},

		computed: {

			...mapGetters('library', [
				'getMovie'
			]),
			
			hasChanges() {
				return !isEqual(this.storedMovie, this.inputMovie);
			},

			isValid() {

				// make sure ids match keep in mind the route sends as a string backend sends int
				if(this.movieId && parseInt(this.movieId, 10) !== this.inputMovie.id) {
					this.missingFields = ['id'];
					return false;
				}
				
				const missing = [];
				const requiredFieldKeys = [
					'name', 'rating', 'description', 'duration', 'release_date'
				];

				requiredFieldKeys.forEach(fieldKey => {
					if(get(this.inputMovie, fieldKey, null) === null)
						missing.push(fieldKey);
				});

				this.missingFields = missing;
				if(missing.length) {
					return false;
				}

				// only checking for missing required fields currently

				return true;

			}

		},

		created() {

			if(!this.movieId) {
				this.storedMovie = _emptyMovie();
				this.inputMovie = cloneDeep(this.storedMovie);
			}
			
			else {
				this.initMovie(this.movieId)
				.then(result => {
					this.storedMovie = this.getMovie(this.movieId);
					// if(!this.storedMovie)
					// 	this.$router.push('/not-found');
					this.inputMovie = cloneDeep(this.storedMovie);
				});
			}

		},

		methods: {

			...mapActions('library', [
				'initMovie',
				'saveMovie'
			]),

			inputMovieExtend(newVals) {
				assign(this.inputMovie, newVals);
			},

			cancel() {
				this.$router.push('/movies');
			},

			save() {

				const movieData = assign(this.inputMovie, { id: this.movieId || null });
				this.saveMovie(movieData)
				.then(result => {
					if(result)
						this.$router.push('/movies');
					else
						console.error('Save movie encountered an error.', result);
				});
			}

		}

	}

</script>
 