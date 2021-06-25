<template>
	<div
		class="showtime"
		:style="{
			'width': (duration/10)+'em'
		}"
	>
		<!-- <div class="showtime-icon bg-dark-alt">
			<i class="star bg-light-alt text-contrast">&#x2605;</i>
		</div> -->
		<div class="showtime-label bg-dark bg-hover-contrast">
			<h5 class="text-light-alt m-0">
				{{ friendlyTime }}
			</h5>
			<h5 class="text-light m-0">
				BUY TICKETS
			</h5>
		</div>
		<div class="showtime-border">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">
				<path style="fill:var(--color_contrast)" d="M20,16.051v-16H0v100H20v-16a4,4,0,0,1,0-8v-12a4,4,0,0,1,0-8v-12a4,4,0,0,1,0-8v-12a4,4,0,0,1,0-8Z"/>
			</svg>
		</div>
	</div>
</template>

<script>

	import dateHelper from '@helpers/Date.js';

	export default {

		name: 'DisplayShowtime',

		props: {
			duration: {
				type: Number,
				required: true
			},
			showtime: {
				type: Number,
				required: true
			}
		},

		computed: {

			friendlyTime() {
				return dateHelper.getFriendlyTimeFromTime(this.showtime);;
			}

		}

	}
	
</script>
