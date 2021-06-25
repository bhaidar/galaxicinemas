<template>
	<header
		@click="goHome"
	>

		<the-logo
			id="logo"
			:is-on-dark="isOnDark"
			:width="220" :height="80"

		/>

		<h1
			v-if="pageTitle"
			class="page-title text-primary"
		>{{ pageTitle }}</h1>

	</header>
</template>

<script>

	import { get } from 'lodash';
	import TheLogo from '@elements/TheLogo.vue';

	export default {
		name: 'TheHeader',
		components: {
			TheLogo
		},
		computed: {
			pageTitle() {
				return get(this.$route, 'meta.pageTitle', null);
			},
			isOnDark() {
				const bodyClasses = get(this.$route, 'meta.bodyClasses', []);
				if(bodyClasses.indexOf('bg-dark') >= 0)
					return true;
				if(bodyClasses.indexOf('bg-dark-alt') >= 0)
					return true;
				return false;            }
		},
		methods: {
			goHome() {
				this.$router.push('/');
			}
		}
	}
</script>
