<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/api/user', function (Request $request) {
	return $request->user();
});

Route::get('/movie/{movie_id}', function (Request $request, $movie_id) {

	$_movies = [

		[
			'id' => 'dummy_movie-1',
			'name' => 'Movie One',
			'rating' => 'PG',
			'description' => 'A really great movie.',
			'duration' => 123,
			'release_date' => '2021-01-01',
			'showtimes' => [
				1115,
				1400
			]
		],

		[
			'id' => 'dummy_movie-2',
			'name' => 'Movie Two',
			'rating' => 'R',
			'description' => 'An okay movie.',
			'duration' => 110,
			'release_date' => '2021-02-01',
			'showtimes' => [
				1230,
				1430,
				1630,
				1830,
				2030,
				2230
			]
		],

		[
			'id' => 'dummy_movie-3',
			'name' => 'Movie Three: With a Particularly Long Title',
			'rating' => 'PG',
			'description' => 'The title is better than the movie in this case.',
			'duration' => 144,
			'release_date' => '2021-03-01',
			'showtimes' => [
				1200,
				1500,
				1800,
				2100
			]
		],

		[
			'id' => 'dummy_movie-4',
			'name' => 'Movie Four',
			'rating' => 'G',
			'description' => 'If you have nothing better to see, this will do.',
			'duration' => 140,
			'release_date' => '2021-05-01',
			'showtimes' => [
				1115,
				1345,
				1615,
				1845
			]
		],

		[
			'id' => 'dummy_movie-5',
			'name' => 'Movie Five Forever',
			'rating' => 'R',
			'description' => 'A great movie, great soundtrack, really great story and everything else.',
			'duration' => 150,
			'release_date' => '2021-07-01',
			'showtimes' => []
		],

		[
			'id' => 'dummy_movie-6',
			'name' => 'Movie Six',
			'rating' => 'PG-13',
			'description' => 'An okay movie with a lot of stuff that happens.',
			'duration' => 180,
			'release_date' => '2021-08-01',
			'showtimes' => []
		]

	];

	$movie_index = array_search($movie_id, array_column($_movies, 'id'));
	if($movie_index === false)
		return response(null, 200);
	return response($_movies[$movie_index], 200);

});

Route::get('/movies/coming-soon', function (Request $request) {

	$_movies = [

		[
			'id' => 'dummy_movie-1',
			'name' => 'Movie One',
			'rating' => 'PG',
			'description' => 'A really great movie.',
			'duration' => 123,
			'release_date' => '2021-01-01',
			'showtimes' => [
				1115,
				1400
			]
		],

		[
			'id' => 'dummy_movie-2',
			'name' => 'Movie Two',
			'rating' => 'R',
			'description' => 'An okay movie.',
			'duration' => 110,
			'release_date' => '2021-02-01',
			'showtimes' => [
				1230,
				1430,
				1630,
				1830,
				2030,
				2230
			]
		],

		[
			'id' => 'dummy_movie-3',
			'name' => 'Movie Three: With a Particularly Long Title',
			'rating' => 'PG',
			'description' => 'The title is better than the movie in this case.',
			'duration' => 144,
			'release_date' => '2021-03-01',
			'showtimes' => [
				1200,
				1500,
				1800,
				2100
			]
		],

		[
			'id' => 'dummy_movie-4',
			'name' => 'Movie Four',
			'rating' => 'G',
			'description' => 'If you have nothing better to see, this will do.',
			'duration' => 140,
			'release_date' => '2021-05-01',
			'showtimes' => [
				1115,
				1345,
				1615,
				1845
			]
		],

		[
			'id' => 'dummy_movie-5',
			'name' => 'Movie Five Forever',
			'rating' => 'R',
			'description' => 'A great movie, great soundtrack, really great story and everything else.',
			'duration' => 150,
			'release_date' => '2021-07-01',
			'showtimes' => []
		],

		[
			'id' => 'dummy_movie-6',
			'name' => 'Movie Six',
			'rating' => 'PG-13',
			'description' => 'An okay movie with a lot of stuff that happens.',
			'duration' => 180,
			'release_date' => '2021-08-01',
			'showtimes' => []
		]

	];

	return response([
		$_movies[4],
		$_movies[5]
	], 200);

});

Route::get('/movies/now-playing', function (Request $request) {

	$_movies = [

		[
			'id' => 'dummy_movie-1',
			'name' => 'Movie One',
			'rating' => 'PG',
			'description' => 'A really great movie.',
			'duration' => 123,
			'release_date' => '2021-01-01',
			'showtimes' => [
				1115,
				1400
			]
		],

		[
			'id' => 'dummy_movie-2',
			'name' => 'Movie Two',
			'rating' => 'R',
			'description' => 'An okay movie.',
			'duration' => 110,
			'release_date' => '2021-02-01',
			'showtimes' => [
				1230,
				1430,
				1630,
				1830,
				2030,
				2230
			]
		],

		[
			'id' => 'dummy_movie-3',
			'name' => 'Movie Three: With a Particularly Long Title',
			'rating' => 'PG',
			'description' => 'The title is better than the movie in this case.',
			'duration' => 144,
			'release_date' => '2021-03-01',
			'showtimes' => [
				1200,
				1500,
				1800,
				2100
			]
		],

		[
			'id' => 'dummy_movie-4',
			'name' => 'Movie Four',
			'rating' => 'G',
			'description' => 'If you have nothing better to see, this will do.',
			'duration' => 140,
			'release_date' => '2021-05-01',
			'showtimes' => [
				1115,
				1345,
				1615,
				1845
			]
		],

		[
			'id' => 'dummy_movie-5',
			'name' => 'Movie Five Forever',
			'rating' => 'R',
			'description' => 'A great movie, great soundtrack, really great story and everything else.',
			'duration' => 150,
			'release_date' => '2021-07-01',
			'showtimes' => []
		],

		[
			'id' => 'dummy_movie-6',
			'name' => 'Movie Six',
			'rating' => 'PG-13',
			'description' => 'An okay movie with a lot of stuff that happens.',
			'duration' => 180,
			'release_date' => '2021-08-01',
			'showtimes' => []
		]

	];

	return response([
		$_movies[0],
		$_movies[1],
		$_movies[2],
		$_movies[3]
	], 200);

});
