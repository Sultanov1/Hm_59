import TodoList from './containers/TodoList/TodoList';
import JokeItem from './containers/JokeItem/JokeItem';

const App = () => {
  return (
    <div className='container'>
      <TodoList/>
      <JokeItem/>
    </div>
  )
    ;
};

export default App;