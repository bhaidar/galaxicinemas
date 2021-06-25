<?php

use Illuminate\Support\Facades\Route;

Route::get('/dashboard', function () {
	return view('dash');
});

Route::get('/dashboard/{any}', function () {
	return view('dash');
});

Route::get('/', function () {
	return view('web');
});

Route::get('/movie/{movie_id}', function () {
	return view('web');
});

Route::get('/{any}', function () {
	return view('web');
});
