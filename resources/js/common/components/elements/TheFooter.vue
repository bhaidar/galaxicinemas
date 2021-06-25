<template>
	<footer>
		<nav class="links">
			<ul>
				<li>
					<a
						title="Browse movies and showtimes for the next few weeks."
						href="/movies"
					>Now Playing</a>
				</li>
				<li>
					<a
						title="Browse list of movies that will premier in the next few months."
						href="/coming-soon"
					>Coming Soon</a>
					</li>
				<li>
					<a
						title="Manage the movies and showtimes for this theater."
						href="/dashboard"
					>Dashboard</a>
				</li>
				<li>
					<a
						title="Link to the GitHub repository for this project."
						href="https://github.com/sd31110/galaxicinemas"
						target="_blank"
					>GitHub</a>
				</li>
			</ul>
		</nav>
	</footer>
</template>

<script>
	export default {
		name: 'TheFooter'
	}
</script>
