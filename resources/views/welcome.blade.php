<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Galaxi Cinemas, Movies and Showtimes</title>

		<!-- Fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet">

		<!-- Styles -->
		<style>


			:root {
				--color_primary: #4fb848;
				--color_secondary: #86b;
				--color_dark: #333;
				--color_dark-alt: #232323;
				--color_light: #b3b4b4;
				--color_light-alt: #fff;
			}


			html {
				font-size:  16px;
			}

			body {
				background-color: var(--color_dark);
				color: var(--color_light);
				font-family: 'Roboto', sans-serif;
				font-weight: 200;
				height: 100vh;
				margin: 0;
				font-size:  1rem;
			}

			a {
				color:  var(--color_secondary);
			}

			.full-height {
				height: 100vh;
			}

			.flex-center {
				align-items: center;
				display: flex;
				justify-content: center;
			}

			body > footer {
				position: fixed;
				right: 0; bottom: 0; left: 0;
				background: var(--color_dark-alt);
				height: 2rem;
				margin: 0; padding: 0;
				font-size: .8rem;
				line-height: 2.5;
				text-align: center;
			}

			footer .links > ul {
				margin: 0; padding: 0;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			footer .links > ul > li {
				list-style: none;
			}

			footer .links > ul > li > a {
				display: inline-block;
				padding: 0 .5rem;
				color: var(--color_dark);
			}

			footer .links > ul > li > a:active,
			footer .links > ul > li > a:focus,
			footer .links > ul > li > a:hover {
				color: var(--color_primary);
			}

		</style>
	</head>
	<body>
		<div class="flex-center position-ref full-height">
			@if (Route::has('login'))
				<div class="top-right links">
					@auth
						<a href="{{ url('/home') }}">Home</a>
					@else
						<a href="{{ route('login') }}">Login</a>

						@if (Route::has('register'))
							<a href="{{ route('register') }}">Register</a>
						@endif
					@endauth
				</div>
			@endif

			<div class="content">
				<div class="title m-b-md">
					<svg
						class="logo"
						width="440" height="160"
					>
						<use xlink:href="/images/logo_galaxi-cinemas.svg#logo" />
					</svg>
				</div>
			</div>
		</div>
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
							title="Contact details and other information about the theater."
							href="/about"
						>Theater Info</a>
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
	</body>
</html>
