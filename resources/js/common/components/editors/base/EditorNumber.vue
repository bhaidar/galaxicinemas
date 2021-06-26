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
			type="number"
			:class="formControlClasses"
			v-model="inputValue"
			:min="min"
			:max="max"
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

		name: 'EditorNumber',

		mixins: [
			IncludeEditorDefaults
		],

		props: {

			min: {
				type: Number,
				default: 0
			},

			max: {
				type: Number,
				default: null
			},

			value: {
				type: Number,
				default: null
			}

		},

		computed: {

			inputValue: {

				// display string
				get() {
					return String(this.value); 
				},

				// but report integer
				set(newVal) {
					this.$emit('input', parseInt(newVal, 10));
				}
			}

		}

	}

</script>
