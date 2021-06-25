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
		<link href="/css/common.css" rel="stylesheet" />
		<link href="/css/dash.css" rel="stylesheet" />
		<style>

			:root {
				--color_primary: #4fb848;
				--color_secondary: #2ca449;
				--color_dark: #333;
				--color_dark-alt: #232323;
				--color_light: #b3b4b4;
				--color_light-alt: #fff;
				--color_contrast: #86b;
			}

			#progress-bar {
				display: block;
				margin: 2rem 0; padding: 0;
				width: 0; height: 1rem;
				transition: width 8s ease-out;
				background: var(--color_contrast);
			}

		</style>

	</head>
	<body>
		<div
			id="app"
			class="flex-center position-ref full-height"
		>
			<div class="content">
				<div class="title m-b-md">
					<img
						alt="Galaxi Cinemas logo"
						src="/images/logo.png"
						class="logo"
						width="220" height="80"
					/>
					<div id="progress-bar"></div>
				</div>
			</div>
		</div>
		<script>
			document.getElementById('progress-bar').style.width = '100%';
		</script>
		<script src="/js/dash.js"></script>
	</body>
</html>
