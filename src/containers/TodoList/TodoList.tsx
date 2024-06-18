import {useState} from 'react';
import {Movie} from '../../types';
import MovieForm from '../../components /MovieForm/MovieForm';
import MovieList from '../../components /MovieList/MovieList';
import '../../App.css'

const TodoList = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {id: '1', title: '12 Angry Men'},
    {id: '2', title: 'The Godfather'},
    {id: '3', title: 'Forrest Gump'},
  ]);

  const addMovie = (movieName: string) => {
    const newMovie = { id: Math.random().toString(), title: movieName };
    setMovies([...movies, newMovie]);
  };

  const updateMovie = (id: string, newMovieName: string) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? {...movie, title: newMovieName} : movie
    );
    setMovies(updatedMovies);
  };

  const removeMovie = (id: string) => {
    const removeItem = movies.filter((movie) => movie.id !== id);
    setMovies(removeItem);
  };


  return (
    <div className='container'>
      <h1>Todolist App</h1>
      <MovieForm addMovie={addMovie}/>
      <MovieList
        movies={movies}
        removeMovie={removeMovie}
        updateMovie={updateMovie}
      />
    </div>
  );
};

export default TodoList;