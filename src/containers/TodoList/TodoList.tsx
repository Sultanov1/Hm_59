import MovieForm from '../../components /MovieForm/MovieForm';
import MovieList from '../../components /MovieList/MovieLIst';

const TodoList = () => {
  return (
    <div>
      <h1>Todolist App</h1>
      <MovieForm/>
      <MovieList/>
    </div>
  );
};

export default TodoList;