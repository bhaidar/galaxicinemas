<?php

use App\User;
use App\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::post('/authenticate', function (Request $request) {
	$credentials = $request->validate([
		'username' => ['required'],
		'password' => ['required']
	]);
	if(Auth::attempt($credentials)) {
		$token = $request->user()->createToken('Galaxi Password Grant Client');
	    return ['token' => $token->plainTextToken];
	}
	return response(['message' => 'That did not work.'], 422);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	return response(['user' => $request->user()], 200);
});

Route::get('/logout', function (Request $request) {
	$user = $request->user();
	if($user)
		$user->currentAccessToken()->delete();
	return response(['user' => null], 200);
});

// create new movie
Route::post('/movie', function(Request $request) {

	if(!empty($request->input('id'))) // there should NOT be an id attached
		return response(['message' => 'That movie could not be created as it already has an id.'], 400);

	$inputs = $request->all();
	$poster = !empty($inputs['poster']) ? $inputs['poster'] : null;
	unset($inputs['poster']);
	$movie = Movie::create($inputs);
	if(empty($movie))
		return response(['message' => 'That movie could not be created.'], 400);

	if(!empty($poster)) {
		$filename = $movie->store_poster($poster);
		if(!empty($filename))
			$movie->update(['poster' => $filename]);
	}

	return response(['message' => 'Create successful.', 'movie' => $movie], 200);

});

// update existing movie
Route::post('/movie/{movie_id}', function(Request $request, $movie_id) {

	$movie = Movie::where('id', $movie_id)->first();
	if(empty($movie))
		return response(['message' => 'That movie does not exist.'], 400);

	$inputs = $request->all();

	if(!empty($inputs['poster'])) {
		$filename = $movie->store_poster($inputs['poster']);
		if(!empty($filename))
			$inputs['poster'] = $filename;
		else
			$inputs['poster'] = '';
	}

	$movie->update($inputs);
	return response(['message' => 'Update successful.', 'movie' => $movie], 200);
	
});

Route::get('/movie/{movie_id}', function (Request $request, $movie_id) {
	$movie = Movie::where('id', $movie_id)->first();
	if(empty($movie))
		return response(['message' => 'That movie does not exist.'], 400);
	return response(['movie' => $movie], 200);
});

Route::get('/movies', function (Request $request) {
	$movies = Movie::latest()->take(500)->get();
	return response($movies, 200);
});

Route::get('/movies/coming-soon', function (Request $request) {
	$movies = Movie::where('coming_soon', true)->get();
	return response($movies, 200);
});

Route::get('/movies/now-playing', function (Request $request) {
	$movies = Movie::where('coming_soon', false)->get();
	return response($movies, 200);
});
