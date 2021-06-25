<template>
	
	<div class="mb-3">
		
		<label
			v-if="label"
			:for="id"
			class="form-label"
		>
			{{ label }}
		</label>

		<input
			:id="id"
			ref="input"
			type="password"
			class="form-control"
			v-model="inputValue"
		/>

	</div>
	
</template>
<script>

	export default {

		name: 'EditorPassword',

		props: {

			label: {
				type: String,
				default: null
			},

			value: {
				type: String,
				default: ''
			}

		},

		data() {
			return {
				id: null
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
		},

		mounted() {
			this.id = this._uid;
		}

	}

</script>
