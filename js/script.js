const numberofFilms = +prompt('Скільки фільмів ви подивились','');

const personalMovieDB = {
    count:numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    private:false
};

const a = prompt('Один із останніх переглянутих фільмів?', ''),
      b = prompt('Як ви його оціните?',''),
      c = prompt('Один із останніх переглянутих фільмів?', ''),
      d = prompt('Як ви його оціните?','');
      personalMovieDB.movies[a] = b; 
      personalMovieDB.movies[c] = d;
      
      console.log(personalMovieDB);
