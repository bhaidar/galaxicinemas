<template>
	<div class="card my-4 text-dark">
		<div
			v-if="$slots['header']"
			class="card-header bg-dark text-light pt-3"
		>
			<slot name="header">
			</slot>
		</div>
		<div class="card-body">
			<slot></slot>			
		</div>
	</div>
</template>
<script>
	export default {
		name: 'DisplayCard'
	}
</script>