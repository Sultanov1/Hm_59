import React, {useState} from "react";
import './MovieForm.css';

interface Props {
    addMovie: (movieName: string) => void;
}

const MovieForm: React.FC<Props> = ({addMovie}) => {
    const [movieCard, setMovieCard] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (movieCard) {
            addMovie(movieCard);
            setMovieCard('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Enter name of your movie'
                onChange={(e) => setMovieCard(e.target.value)}
                required/>
            <button className='success-btn' type='submit'>Add</button>
        </form>
    );
};

export default MovieForm;