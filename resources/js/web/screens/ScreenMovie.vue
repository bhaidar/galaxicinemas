<template>

	<div class="movie movie-details bg-dark text-light">

		<template v-if="!movie">
			<p>Sorry there was no movie found.</p>
		</template>
		<template v-else>
			<div class="bg-dark text-light">
				<div class="container">
					<div class="row">
						<display-movie-poster
							:movie="movie"
						/>
						<div class="movie-description">
							<h2 class="movie-title text-light-alt">
								{{ movie.name }}
							</h2>
							<p>
								<strong class="movie-rating badge bg-light text-dark">
									{{ movie.rating }}
								</strong>
								<var class="movie-duration">
									{{ movie.duration }} minutes
								</var>
							</p>
							<p>
								<a @click="setShowFullDescription(true)">Full Description</a>
							</P>
						</div>
					</div>
				</div>
			</div>

			<display-modal
				:is-active="showFullDescription"
				position="bottom"
				@close="setShowFullDescription(false)"
			>
				<h2 class="movie-title">{{ movie.name }}</h2>
				<p class="my-2">
					<strong class="movie-rating badge bg-light text-dark">
						{{ movie.rating }}
					</strong>
					<var class="movie-duration">
						{{ movie.duration }} minutes
					</var>
				</p>
				<div class="movie-summary my-4">
					{{ movie.description }}
				</div>
				<p>
					<a
						@click="setShowFullDescription(false)"
						class="btn btn-primary"
					>Done</a>
				</p>
			</display-modal>

			<div class="bg-light">
				<div class="container">
					<ul class="nav nav-tabs">
						<li class="nav-item">
							<a
								:class="{
									'nav-link': true,
									'active': activeTab === 'showtimes'
								}"
								@click="setActiveTab('showtimes')"
							>Showtimes</a>
						</li>
						<li class="nav-item">
							<a
								:class="{
									'nav-link': true,
									'active': activeTab === 'reviews'
								}"
								@click="setActiveTab('reviews')"
							>Reviews</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="bg-light-alt">
				<div class="container">
					<div class="tab-content">
						<div
							v-show="activeTab === 'showtimes'"
							class="tab-pane showtimes"
						>
							<div
								class="showtime-day"
								v-for="(showtimes, date) in movie.showtimes"
								:key="date"
							>
								<h3 class="text-dark mt-5 mb-3" style="font-weight:300">
									Showtimes for <br><strong>{{ getFriendlyDate(date) }}</strong>
								</h3>
								<display-showtime-list
									:showtimes="showtimes"
									:duration="movie.duration"
								/>
							</div>
						</div>
						<div
							v-show="activeTab === 'reviews'"
							class="tab-pane reviews"
						>
							showing reviews
						</div>
					</div>
				</div>
			</div>

		</template>

	</div>

</template>
<script>

	import dateHelper from '@helpers/Date.js';

	import { mapActions, mapGetters } from 'vuex';
	import DisplayModal from '@elements/DisplayModal';
	import DisplayMoviePoster from '@elements/DisplayMoviePoster';
	import DisplayShowtimeList from '@elements/DisplayShowtimeList';

	export default {
		name: 'ScreenMovie',
		components: {
			DisplayModal,
			DisplayMoviePoster,
			DisplayShowtimeList
		},
		props: {
			movieId: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				activeTab: 'showtimes',
				showFullDescription: false
			}
		},
		computed: {
			...mapGetters('library', [
				'getMovie'
			]),
			movie() {
				return this.getMovie(this.movieId);
			}
		},
		methods: {
			...mapActions('library', [
				'initMovie'
			]),
			getFriendlyDate(date) {
				return dateHelper.getFriendlyDateFromDate(date);
			},
			setActiveTab(activeTab) {
				this.activeTab = activeTab;
			},
			setShowFullDescription(newState) {
				this.showFullDescription = newState;
			}
		},
		created() {
			if(!this.movie)
				this.initMovie(this.movieId)
				.then(result => {
					if(result !== true)
						this.$router.push({ path: '/not-found' });
				});
		}
	}

</script>
