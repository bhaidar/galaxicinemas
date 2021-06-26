<template>
	
	<div class="mb-3">

		<div class="form-check">
		
			<input
				:id="id"
				ref="input"
				:class="formControlClasses"
				type="checkbox"
				v-model="inputValue"
			/>

			<label
				v-if="label"
				:for="id"
				class="form-check-label"
			>
				{{ label }}{{ isRequired ? '*' : '' }}
			</label>

		</div>

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

		name: 'EditorBoolean',

		mixins: [
			IncludeEditorDefaults
		],

		props: {

			value: {
				type: [Boolean, Number],
				default: false
			}

		},

		computed: {

			// mixin override
			formControlClasses() {
				const list = ['form-check-input'];
				if(this.hasError)
					list.push('is-invalid');
				return list.join(' ');
			},

			inputValue: {
				get() {
					return Boolean(this.value);
				},
				set(newVal) {
					this.$emit('input', newVal);
				}
			}

		}

	}

</script>
