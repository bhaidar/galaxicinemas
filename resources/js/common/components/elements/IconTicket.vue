<template>
	<div class="icon icon-ticket" style="position:relative;width:calc(100% - 2em);background:var(--color_contrast);">
		<div class="star" style="position:absolute;top:50%;bottom:0;left:2.4em;margin-top:-2.4em;">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
				<rect style="fill:var(--color_light-alt)" x="0.757" y="0.427" width="46.513" height="46.513" rx="11.628"/>
				<ellipse style="fill:var(--color_contrast)" cx="23.549" cy="23.672" rx="15.645" ry="17.514"/>
			</svg>
		</div>
		<div class="border" style="position:absolute;top:0;right:0;bottom:0;width:2em;">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 100">
				<path style="fill:var(--color_contrast)" d="M20,16.051v-16H0v100H20v-16a4,4,0,0,1,0-8v-12a4,4,0,0,1,0-8v-12a4,4,0,0,1,0-8v-12a4,4,0,0,1,0-8Z"/>
			</svg>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'IconTicket'
	}
</script>