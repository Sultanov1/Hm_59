import {Movie} from '../../types';
import MovieItem from './MovieItem';
import React from 'react';

interface Props {
  movies: Movie[];
}

const MovieList: React.FC<Props> = ({movies}) => {
  return (
    <ul>
      {movies.map((movies) => (
        <MovieItem key={movies.id} movie={movies}/>
      ))}
    </ul>
  );
};

export default MovieList;