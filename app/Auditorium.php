<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Auditorium extends Model {

	protected $fillable = [
		'name',
		'abbreviation',
		'capacity',
		'description'
	];
	
}
