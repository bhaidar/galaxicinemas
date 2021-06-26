<template>
	<header v-show="!isLoggingIn">
		<nav class="navbar navbar-expand-sm navbar-dark bg-dark-alt">
			<div class="container">
				<router-link
					class="navbar-brand"
					:to="{
						path: '/'
					}"
				>
					<the-logo
						id="logo"
						:is-on-dark="isOnDark"
						:width="110" :height="40"

					/>
					<span
						id="logo-overlay"
						class="text-light bg-dark-alt"
					>
						DASHBOARD
					</span>
				</router-link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div
					class="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul class="navbar-nav me-auto mb-2 mb-sm-0 text-center text-sm-left w-100">
						<li class="nav-item">
							<router-link
								class="nav-link"
								active-class="active"
								:to="{
									path: '/movies'
								}"
							>
								Movies
							</router-link>
						</li>
						<li class="nav-item">
							<router-link
								class="nav-link"
								active-class="active"
								:to="{
									path: '/settings'
								}"
							>
								Settings
							</router-link>
						</li>
						<li class="nav-item ms-auto">
							<a
								class="nav-link"
								active-class="active"
								@click="logout"
							>
								Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>

	import { get } from 'lodash';
	import { mapActions } from 'vuex';
	import TheLogo from '@elements/TheLogo.vue';

	export default {
		name: 'TheHeader',
		components: {
			TheLogo
		},
		computed: {
			isLoggingIn() {
				return get(this.$route, 'name', null) === 'login';
			},
			isOnDark() {
				const bodyClasses = get(this.$route, 'meta.bodyClasses', []);
				if(bodyClasses.indexOf('bg-light') >= 0)
					return false;
				if(bodyClasses.indexOf('bg-light-alt') >= 0)
					return false;
				return true;
			}
		},
		methods: {
			...mapActions('account', [
				'deauth'
			]),
			logout() {
				this.deauth()
				.then(() => {
					this.$router.push('/login');
				});
			}
		}
	}
</script>
