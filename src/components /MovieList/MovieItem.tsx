import React from 'react';
import {Movie} from '../../types';
import './MoveList.css';

interface Props {
    movie: Movie;
    updateMovie: (id: string, newMovieName: string) => void;
    removeMovie: (id: string) => void;
}

const MovieItem: React.FC<Props> = React.memo(({movie, updateMovie, removeMovie}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateMovie(movie.id, e.target.value);
    };

    return (
        <li>
            <input type="text" value={movie.title} onChange={handleChange}/>
            <button className='danger-btn' onClick={() => removeMovie(movie.id)}>X</button>
        </li>
    );
});


export default MovieItem;