<template>
	<div
		:class="modalClasses"
	>
		<div class="container">
			<div class="modal-content bg-light-alt text-dark">
				<div class="modal-header">
					<a
						class="modal-closer ml-auto"
						@click="close"
					>&#10006;</a>
				</div>
				<slot />
			</div>
		</div>
		<div
			@click="close"
			class="modal-underlay"
		/>
	</div>
</template>

<script>

	import DisplayMoviePoster from '@elements/DisplayMoviePoster';
	export default {
		name: 'DisplayMovieTeaser',
		components: {
			DisplayMoviePoster
		},
		props: {
			isActive: {
				type: Boolean,
				default: false
			},
			position: {
				type: String,
				default: 'center'
			}
		},
		computed: {
			modalClasses() {
				const classes = ['modal', 'modal-'+this.position];
				if(this.isActive)
					classes.push('is-active');
				return classes.join(' ');

			}
		},
		methods: {
			close() {
				this.$emit('close');
			}
		}
	}
	
</script>
