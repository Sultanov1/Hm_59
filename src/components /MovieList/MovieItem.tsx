import React from 'react';
import {Movie} from '../../types';

interface Props  {
  movie: Movie;
}

const MovieItem: React.FC<Props> = ({movie}) => {
  return (
    <li>
      <input type="text" value={movie.title}/>
      <button>X</button>
    </li>
  );
};

export default MovieItem;