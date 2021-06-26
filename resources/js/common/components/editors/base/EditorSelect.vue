<template>
	
	<div class="mb-3">
		
		<label
			v-if="label"
			:for="id"
			class="form-label"
		>
			{{ label }}{{ isRequired ? '*' : '' }}
		</label>

		<select
			:id="id"
			ref="input"
			:class="formControlClasses"
			v-model="inputValue"
		>
			
			<option
				v-if="placeholder"
				:value="null"
				:checked="value === null"
			>
				{{ placeholder }}
			</option>

			<option
				v-for="option in compiledOptions"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</option>

		</select>

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

		name: 'EditorSelect',

		mixins: [
			IncludeEditorDefaults
		],

		props: {

			options: {
				type: Array,
				required: true
			},

			// mixin override
			placeholder: {
				type: String,
				default: 'Select one...'
			},

			value: {
				type: [Number, String],
				default: null
			}

		},

		computed: {

			compiledOptions() {
				const compiled = [];
				this.options.forEach(option => {
					if(typeof option === 'string' || typeof option === 'integer') {
						compiled.push({
							label: String(option),
							value: option
						});
					}
					else {
						compiled.push(option);
					}
				});
				return compiled;
			},

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
