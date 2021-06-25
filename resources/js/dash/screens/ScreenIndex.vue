<template>
	<div class="container">
		WELCOME TO THE DASHBOARD {{ user.name }}!
	</div>
</template>
<script>

	import { mapState } from 'vuex';
	export default {
		name: 'ScreenIndex',
		computed: {
			...mapState('account', [
				'user'
			])
		}
	}
</script>
