'use strict';

const personaMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while (personaMovieDB.count == '' || personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
			personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
				b = prompt('На сколько оцените его?', '');
		
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personaMovieDB.movies[a] = b;
				console.log('Done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function() {
		if (personaMovieDB.count < 10) {
			console.log('Просмотренно довольно мало фильмов');
		} else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personaMovieDB.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personaMovieDB);
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <=3; i++) {
			personaMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
		}
	}
};



