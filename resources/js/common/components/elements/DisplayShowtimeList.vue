<template>
	<div class="showtime-list">
		<p v-if="!showtimes">
			No Showtimes Today
		</p>
		<template v-else>
			<div class="hours">
				<div
					v-for="(hour, idx) in hoursFriendly"
					:key="hour"
					class="hours-item"
					:style="{
						'left': (idx*6) + 'em'
					}"
				>
					<var class="hours-label">
						{{ hour }}
					</var>
				</div>
			</div>
			<div class="showtimes">
				<div
					v-for="(showtime, idx) in showtimes"
					:key="showtime"
					class="showtime-item"
					:style="{
						'left': (showtimeOffsets[idx]/10) + 'em'
					}"
				>
					<display-showtime
						:showtime="showtime"
						:duration="duration"
					/>
				</div>
			</div>
		</template>
	</div>
</template>

<script>

	import dateHelper from '@helpers/Date.js';
	import DisplayShowtime from '@elements/DisplayShowtime';

	export default {
		name: 'DisplayShowtimeList',
		components: {
			DisplayShowtime
		},
		props: {
			movie: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				hourIncrements: [
					900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300
				]
			}
		},
		computed: {
			modalClasses() {
				const classes = ['modal', 'modal-'+this.position];
				if(this.isActive)
					classes.push('is-active');
				return classes.join(' ');

			},
			duration() {
				return this.movie.duration;
			},
			hoursInMinutes() {
				const minutes = [];
				this.hourIncrements.forEach(hour => {
					minutes.push(dateHelper.getTotalMinutesInTime(hour));
				});
				return minutes;
			},
			hoursFriendly() {
				const friendly = [];
				this.hourIncrements.forEach(hour => {
					friendly.push(dateHelper.getFriendlyHourFromTime(hour));
				});
				return friendly;
			},
			showtimes() {
				return this.movie.showtimes;
			},
			showtimeOffsets() {
				const minutes = [];
				this.showtimes.forEach(showtime => {
					const offsetTime = showtime - this.hourIncrements[0];
					minutes.push(dateHelper.getTotalMinutesInTime(offsetTime));
				});
				return minutes;
			}
		},
		methods: {
			close() {
				this.$emit('close');
			}
		}
	}
	
</script>
