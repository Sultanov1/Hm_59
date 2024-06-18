import MovieForm from '../../components /MovieForm/MovieForm';
import MovieList from '../../components /MovieList/MovieList';
import {useState} from 'react';
import {Movie} from '../../types';

const TodoList = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {id: '1', title: '12 Angry Men'},
    {id: '2', title: 'The Godfather'},
    {id: '3', title: 'Forrest Gump'},
  ]);

  return (
    <div>
      <h1>Todolist App</h1>
      <MovieForm/>
      <MovieList movies={movies}/>
    </div>
  );
};

export default TodoList;