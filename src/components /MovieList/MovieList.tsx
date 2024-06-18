import {Movie} from '../../types';
import MovieItem from './MovieItem';
import React from 'react';
import './MoveList.css';

interface Props {
  movies: Movie[];
  updateMovie: (id: string, newMovieName: string) => void;
  removeMovie: (id: string) => void;
}

const MovieList: React.FC<Props> = ({movies, removeMovie, updateMovie}) => {
  return (
    <ul>
      {movies.map((movies) => (
        <MovieItem
          key={movies.id}
          movie={movies}
          removeMovie={removeMovie}
          updateMovie={updateMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;