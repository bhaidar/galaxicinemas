<template>
	<div :class="bodyClasses">
		<the-header id="header" />
		<main id="main">
			<router-view />
		</main>
		<the-footer id="footer" />
	</div>
</template>
<script>

	import { get } from 'lodash';

	import TheHeader from '@elements/TheHeader.vue';
	import TheFooter from '@elements/TheFooter.vue';

	const _defaultBodyClasses = [
		'bg-light-alt', 'text-dark'
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
					'body-wrap',
					...get(this.$route, 'meta.bodyClasses', _defaultBodyClasses)
				];

			}
		}
	}

</script>

<style lang="scss">
</style>
