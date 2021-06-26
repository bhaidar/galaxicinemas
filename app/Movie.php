<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Movie extends Model {

	protected $fillable = [
		'name',
		'rating',
		'description',
		'duration',
		'release_date',
		'coming_soon',
		'cast',
		'director',
		'poster'
	];

	protected $attributes = [
		'cast' => '',
		'director' => '',
		'poster' => ''
	];

	protected $appends = [
		'showtimes'
	];

	public function persons() {
		return $this->hasMany(Person::class);
	}

	public function reviews() {
		return $this->hasMany(Review::class);
	}

	public function getShowtimesAttribute() {
		return [
			'2021-06-24' => [
				1115,
				1400
			],
			'2021-06-25' => [
				1115,
				1400
			],
			'2021-06-26' => [
				1115,
				1400,
				1715,
				2000
			],
			'2021-06-27' => [
				1115,
				1400,
				1715,
				2000
			],
			'2021-06-29' => [
				1115,
				1400
			]
		];
	}

	public function store_poster(String $base64_or_filename) {
		if($base64_or_filename === $this->poster)
			return $this->poster; // its a filename
		$media_data = $this->_base64_to_media_data($base64_or_filename);
		if(empty($media_data))
			return false;
		$file = $this->_media_data_to_file($media_data);
		return $file['filename'];
	}

	// kinda threw these functions in here temporarily
	protected function _media_data_to_file(String $media_data) {
		$file = tempnam('/tmp', "poster_");
		file_put_contents($file, $media_data);
		list($width, $height, $type, $attr) = getimagesize($file);
		$extension = image_type_to_extension($type);
		if (!in_array($extension, ['.png','.gif','.jpg','.jpeg'])) {
			unlink($file);
			throw new Exception('Unsupported media type for poster.');
		}
		$size = filesize($file);
		if ($size > (2 * 1024 * 1024 * 1.66)) { // 2 bytes > 2 kilobytes > 2 megabytes > allowance for base64
			unlink($file);
			throw new Exception('Poster image too large.');
		}
		$filename = 'poster_'.$this->id.$extension;
		unlink($file);
		Storage::disk('public')->put($filename, $media_data);
		return [
			'filename' => $filename,
			'extension' => $extension
		];
	}

	protected function _base64_to_media_data(String $string) {
		if (empty($string))
			throw new Exception('Sorry, something went wrong with your poster upload.');
		// $string may have prefix like "data:image/png;base64,XXXXXXXXXXXX"
		if (strpos($string, "data:image") === 0) {
			list($prefix, $base64) = explode(',', $string);
			$media_data = base64_decode($base64);
		}
		else {
			$media_data = base64_decode($string);
		}
		if (empty($media_data))
			throw new Exception('Sorry, something went wrong with your poster upload.');
		return $media_data;
	}

}
