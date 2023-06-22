import { useSelector } from 'react-redux';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  // const todoState = useSelector((state)=>state.todo);
  // localStorage.setItem("todo",JSON.stringify(todoState));
  return (
    <>
    <div className="flex">
      <ToDoList/>
    </div>
    </>
  );
}

export default App;
