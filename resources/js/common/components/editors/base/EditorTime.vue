<template>
	
	<div class="mb-3">
		
		<label
			v-if="label"
			:for="id"
			class="form-label"
		>
			{{ label }}{{ isRequired ? '*' : '' }}
		</label>

		<input
			:id="id"
			ref="input"
			type="time"
			:class="formControlClasses"
			v-model="inputValue"
		/>

		<display-form-feedback
			:help="help"
			:error="error"
			:warning="warning"
		/>

	</div>
	
</template>
<script>

	import IncludeEditorDefaults from '@mixins/IncludeEditorDefaults.js';

	export default {

		name: 'EditorTime',

		mixins: [
			IncludeEditorDefaults
		],

		props: {

			value: {
				type: String,
				default: null
			}

		},

		computed: {

			inputValue: {
				get() {
					return this.value;
				},
				set(newVal) {
					this.$emit('input', newVal);
				}
			}

		}

	}

</script>
