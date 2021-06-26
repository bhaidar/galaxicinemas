<template>
	<div class="container py-3">

		<h1 class="my-4">
			Settings
		</h1>
		
		<display-card>
			<template #header>
				<h3>Important Message</h3>
			</template>
			<p>
				Ran out of time before I could implement settings,
				but had planned to have configuration for things like:
			</p>
			<ul>
				<li>managing website colors</li>
				<li>managing auditoriums / capacities</li>
				<li>managing theater hours</li>
				<li>etc...</li>
			</ul>
		</display-card>

	</div>
</template>
<script>

	import DisplayCard from '@elements/DisplayCard';

	export default {
		name: 'ScreenSettings',
		components: {
			DisplayCard
		}
	}

</script>
 