<template>
	<div class="container py-3">

		<h1 class="my-4">
			Welcome to the dashboard, {{ user.name }}!
		</h1>

		<display-card>
			<template #header>
				<h3>Movies</h3>
			</template>
			<p>There are (x) movies in the database.</p>
			<div class="btn-group">
				<router-link
					:to="{ path: '/movie' }"
					class="btn btn-primary"
				>Add Movie</router-link>
				<router-link
					:to="{ path: '/movies' }"
					class="btn btn-primary"
				>Browse Movies</router-link>
				<router-link
					:to="{ path: '/showtimes' }"
					class="btn btn-primary"
				>Manage Showtimes</router-link>
			</div>
		</display-card>

		<display-card>
			<template #header>
				<h3>Settings</h3>
			</template>
			<p>Configure the website.</p>
			<div class="btn-group">
				<router-link
					:to="{ path: '/settings' }"
					class="btn btn-primary"
				>Manage Settings</router-link>
			</div>
		</display-card>

	</div>
</template>
<script>

	import { mapState } from 'vuex';
	import DisplayCard from '@elements/DisplayCard.vue';

	export default {
		name: 'ScreenIndex',
		components: {
			DisplayCard
		},
		computed: {
			...mapState('account', [
				'user'
			])
		}
	}
</script>
