<template>
	<div :class="bodyClasses">
		<the-header />
		<main id="main">
			<router-view />
		</main>
		<the-footer id="footer" />
	</div>
</template>
<script>

	import { mapActions } from 'vuex';
	import { get } from 'lodash';

	import TheHeader from '@dash/components/elements/TheHeader.vue';
	import TheFooter from '@elements/TheFooter.vue';

	const _defaultBodyClasses = [
		'text-dark'
	];
	
	export default {
		name: 'App',
		components: {
			TheHeader,
			TheFooter
		},
		computed: {
			bodyClasses() {
				return [
					...get(this.$route, 'meta.bodyClasses', _defaultBodyClasses)
				];
			}
		},
		methods: {
			...mapActions('account', [
				'initUser'
			])
		},
		created() {
			this.initUser()
			.then(userResult => {
				if(userResult === false)
					this.$router.push('/login');
			});
		}
	}

</script>

<style lang="scss">
</style>
