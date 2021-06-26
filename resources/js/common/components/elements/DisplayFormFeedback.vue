<template>
	<div class="my-1">
	
		<div
			v-if="help"
			class="form-help"
		>
			<small>{{ help }}</small>
		</div>

		<div
			v-if="error"
			class="form-error"
		>
			<small>{{ error }}</small>
		</div>

		<div
			v-if="warning && !error"
			class="form-warning"
		>
			<small>{{ warning }}</small>
		</div>

	</div>
</template>
<script>

	export default {
		
		name: 'DisplayFormFeedback',

		props: {

			help: {
				type: String,
				default: null
			},

			error: {
				type: String,
				default: null
			},

			warning: {
				type: String,
				default: null
			}

		}
	}

</script>