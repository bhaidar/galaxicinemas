<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviePersonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movie_person', function (Blueprint $table) {
            $table->id();
            $table->foreignId('movie_id');
            $table->foreignId('person_id');
            $table->enum('type', ['actor', 'director', 'writer']);
            $table->string('credit');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movie_person');
    }
}
