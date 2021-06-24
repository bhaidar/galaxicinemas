<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Showtime extends Model {

    protected $fillable = [
        'start_date',
        'start_time'
    ];

    public function auditorium() {
        return $this->hasOne(Auditorium::class);
    }

    public function movie() {
        return $this->hasOne(Movie::class);
    }

}
