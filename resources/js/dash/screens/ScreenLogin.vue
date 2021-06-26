<template>
	<div class="container p-5">
		<form id="form-login">

			<div class="mb-3">
				<the-logo
					id="logo"
					:is-on-dark="true"
					:width="220" :height="80"
				/>
			</div>

			<editor-string
				label="Username"
				v-model="inputUsername"
			/>

			<editor-string
				label="Password"
				v-model="inputPassword"
				type="password"
			/>

			<button
				@click="attemptLogin"
				class="btn btn-primary"
			>Submit</button>

		</form>		
	</div>
</template>
<script>

	import { mapActions } from 'vuex';

	import EditorString from '@editors/base/EditorString';
	import TheLogo from '@elements/TheLogo';

	export default {

		name: 'ScreenLogin',

		components: {
			EditorString,
			TheLogo
		},

		data() {
			return {
				inputPassword: '',
				inputUsername: ''
			}
		},

		computed: {

		},

		methods: {
			...mapActions('account', [
				'authenticate',
				'initUser'
			]),
			attemptLogin(e) {
				e.preventDefault();
				this.authenticate({
					username: this.inputUsername,
					password: this.inputPassword
				})
				.then(loginResult => {
					if(loginResult === true)
						return this.initUser()
						.then(userResult => {
							if(userResult === true)
								this.$router.push('/');
						});
				});
			}
		}

	}

</script>
