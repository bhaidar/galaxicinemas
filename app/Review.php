<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model {

    protected $fillable = [
        'name',
        'email',
        'stars',
        'content',
        'approved'
    ];
    
    public function movie() {
        return $this->belongsTo(Movie::class);
    }
    
}
