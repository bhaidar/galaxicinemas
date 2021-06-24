/*

	Just a bunch of dummy data.

*/

class DummyHelper {

	constructor() {
		//
	}

	movies = [

		{
			id: 'dummy/movie-1',
			name: 'Movie One',
			rating: 'PG',
			description: 'A really great movie.',
			duration: 123,
			release_date: '2021-01-01'
		},

		{
			id: 'dummy/movie-2',
			name: 'Movie Two',
			rating: 'R',
			description: 'An okay movie.',
			duration: 234,
			release_date: '2021-02-01'
		},

		{
			id: 'dummy/movie-3',
			name: 'Movie Three: With a Particularly Long Title',
			rating: 'PG',
			description: 'The title is better than the movie in this case.',
			duration: 144,
			release_date: '2021-03-01'
		},

		{
			id: 'dummy/movie-4',
			name: 'Movie Four',
			rating: 'G',
			description: 'If you have nothing better to see, this will do.',
			duration: 140,
			release_date: '2021-05-01'
		},

		{
			id: 'dummy/movie-5',
			name: 'Movie Five Forever',
			rating: 'R',
			description: 'A great movie, great soundtrack, really great story and everything else.',
			duration: 150,
			release_date: '2021-07-01'
		},

		{
			id: 'dummy/movie-6',
			name: 'Movie Six',
			rating: 'PG-13',
			description: 'An okay movie with a lot of stuff that happens.',
			duration: 180,
			release_date: '2021-08-01'
		}

	]

}

const instance = new DummyHelper();
Object.freeze(instance);
export default instance;
