<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
	return view('app');
});

Route::get('/coming-soon', function () {
	return view('app');
});

Route::get('/dashboard', function () {
	return view('app');
});
