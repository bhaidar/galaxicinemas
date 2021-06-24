<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model {

	protected $fillable = [
		'name',
		'rating',
		'description',
		'duration',
		'release_date'
	];

	public function persons() {
		return $this->hasMany(Person::class);
	}

	public function reviews() {
		return $this->hasMany(Review::class);
	}

}
