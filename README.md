# Galaxi Cinemas
Website and Management tool for movie theaters.

## Demo
- website: https://cinema.galaxi.net
- dashboard: https://cinema.galaxi.net/dashboard
	- username **admin**
	- password **password**
## Requirements

### Environment
- PHP 7.4+
- MySQL database

### Frontend
- Axios
- Bootstrap
- Lodash
- MomentJS
- VueRouter
- VueJS
- Vuex

### Backend
- Laravel

## Installation

### Requirements
- NodeJS
- NPM
- SASS
- Webpack

### Steps
- web server should point domain to `public` subdirectory of this project
- within root directory of project:
	- `composer install`
	- setup and configure a database
	- `php artisan migrate`
	- `npm install`
	- `npm run prod`
- you need to setup an admin user for the dashboard
	- `php artistan tinker`
	- `>>> DB::table('users')->insert(['name' => 'Manager', 'username' => 'admin', 'email' => 'admin@host.net', 'password' => Hash::make('password')]);`
	- now if you go to `/dashboard` you should be able to login with
		- username **admin**
		- password **password**

### Known Issues
- images should be `280x400` for them to look good
- form validation is very rudimentary
- deleting movies does not work
