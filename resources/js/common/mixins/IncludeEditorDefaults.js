/*

	Requires a v-model to be used
	and to have a prop.value to be defined
	but other than that covers most needs

*/

import DisplayFormFeedback from '@elements/DisplayFormFeedback';

export default {

	props: {

		placeholder: {
			type: String,
			default: null
		},

		help: {
			type: String,
			default: null
		},

		label: {
			type: String,
			default: null
		},

		isDisabled: {
			type: Boolean,
			default: false
		},

		isRequired: {
			type: Boolean,
			default: false
		},

		error: {
			type: String,
			default: null
		},

		warning: {
			type: String,
			default: null
		}

	},

	components: {
		DisplayFormFeedback
	},

	data() {
		return {
			id: null
		}
	},

	computed: {

		formControlClasses() {
			const list = ['form-control'];
			if(this.hasError)
				list.push('is-invalid');
			return list.join(' ');
		},

		hasError() {
			return this.error !== null;
		},

		hasWarning() {
			if(this.hasError)
				return false;
			return this.Warning !== null;
		},

		isChanged() {
			return !isEqual(this.value, this.inputValue);
		}

	},

	created() {

		if(typeof this.value === 'undefined')
			console.error('Created an Editor without a value property!');

		if(typeof this.inputValue === 'undefined')
			console.error('Created an Editor without a computed inputValue!');

	},

	mounted() {

		this.id = this._uid;

	}

};
