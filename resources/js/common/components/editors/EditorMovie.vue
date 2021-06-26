<template>
	
	<div class="editor editor-movie">

		<div class="py-3 border-bottom mb-0">
			<editor-string
				label="Title"
				v-model="inputName"
				:is-required="true"
			/>
		</div>

		<div class="row">

			<div class="col py-3 pe-4">
		
				<!-- <editor-select
					label="Genre"
					v-model="inputGenre"
					:options="[
						{ label: 'Action', value: 'action' },
						{ label: 'Comedy', value: 'comedy' },
						{ label: 'Documentary', value: 'documentary' },
						{ label: 'Drama', value: 'drama' },
						{ label: 'Fantasy', value: 'fantasy' },
						{ label: 'Horror', value: 'horror' },
						{ label: 'Musical', value: 'musical' },
						{ label: 'Romance', value: 'romance' },
						{ label: 'Science Fiction', value: 'scifi' },
						{ label: 'Thriller', value: 'thriller' },
						{ label: 'Western', value: 'western' }
					]"
				/> -->
		
				<editor-content
					label="Description"
					v-model="inputDescription"
					:is-required="true"
				/>

				<editor-string
					label="Directed by"
					v-model="inputDirector"
				/>

				<editor-string
					label="Starring"
					v-model="inputCast"
				/>
				
			</div>

			<div class="col-4 py-3 ps-4 border-start">

				<editor-image
					label="Poster"
					v-model="inputPoster"
				/>

				<editor-select
					label="Rating"
					v-model="inputRating"
					:options="['G', 'PG', 'PG-13', 'R', 'NC-17']"
					:is-required="true"
				/>
				
				<editor-number
					label="Duration (in minutes)"
					v-model="inputDuration"
					:min="0"
					:max="480"
					:is-required="true"
				/>
				
				<editor-date
					label="Release Date (req)"
					v-model="inputReleaseDate"
					:is-required="true"
				/>
				
			</div>

		</div>

		<div class="mt-0 border-top pt-3">
			<editor-boolean
				label="Display on 'Coming Soon' page."
				v-model="inputComingSoon"
			/>
		</div>

	</div>

</template>

<script>

	import { cloneDeep, get } from 'lodash';

	import DisplayCard from '@elements/DisplayCard';
	import IncludeBaseEditorComponents from '@mixins/IncludeBaseEditorComponents';

	export default {

		name: 'EditorMovie',

		mixins: [
			IncludeBaseEditorComponents
		],

		components: {
			DisplayCard
		},

		props: {
			value: {
				type: Object,
				required: true
			}
		},

		computed: {

			inputId() {
				return get(this.value, 'id', null);
			},

			inputName: {
				get() {
					return get(this.value, 'name', null);
				},
				set(newVal) {
					this.$emit('input', { name: newVal });
				}
			},

			inputRating: {
				get() {
					return get(this.value, 'rating', null);
				},
				set(newVal) {
					this.$emit('input', { rating: newVal });
				}
			},

			inputDescription: {
				get() {
					return get(this.value, 'description', null);
				},
				set(newVal) {
					this.$emit('input', { description: newVal });
				}
			},

			inputDuration: {
				get() {
					return get(this.value, 'duration', null);
				},
				set(newVal) {
					this.$emit('input', { duration: newVal });
				}
			},

			inputDirector: {
				get() {
					return get(this.value, 'director', null);
				},
				set(newVal) {
					this.$emit('input', { director: newVal });
				}
			},

			inputCast: {
				get() {
					return get(this.value, 'cast', null);
				},
				set(newVal) {
					this.$emit('input', { cast: newVal });
				}
			},

			inputPoster: {
				get() {
					return get(this.value, 'poster', null);
				},
				set(newVal) {
					this.$emit('input', { poster: newVal });
				}
			},

			inputReleaseDate: {
				get() {
					return get(this.value, 'release_date', null);
				},
				set(newVal) {
					this.$emit('input', { release_date: newVal });
				}
			},

			inputComingSoon: {
				get() {
					return get(this.value, 'coming_soon', false);
				},
				set(newVal) {
					this.$emit('input', { coming_soon: newVal });
				}
			}

		}

	}

</script>
