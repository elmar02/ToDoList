import { useDispatch, useSelector } from 'react-redux'
import { toDoActions } from '../redux/slices/toDoSlice';
import { useState } from 'react';

const ToDoList = () => {
    const [inputValue, setInputValue] = useState('');
    const tasks = useSelector(
        (state) => state.todo.tasks.filter((task) =>
            task.title.toLowerCase().includes(inputValue.toLowerCase())
        ));
    const totalTasks = useSelector((state) => state.todo.totalTasks);
    const completedTasks = useSelector((state) => state.todo.completedTasks);
    const dispatch = useDispatch();
    const addTask = () => {
        if (inputValue.trim() !== '') {
            dispatch(
                toDoActions.addTask({
                    title: inputValue,
                })
            );
            setInputValue('')
        }
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    }
    return (
        <div className='todo'>
            <h1 className='title'>TaskMaster</h1>
            <div className='inputbox'>
                <input type="text"
                    placeholder='Add or Search task'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={addTask}><i class="fa-solid fa-plus"></i></button>
            </div>
            <div className='todolist'>
                {
                    tasks.map((task) => (
                        <ToDo task={task} />
                    ))
                }
            </div>
            <p>Total Todos: {totalTasks} | Completed Todos: {completedTasks}</p>
            <p className='quote'>“Strength does not come from winning. Your struggles develop your strengths.” Arnold Schwarzenegger</p>
        </div>
    )
}

const ToDo = ({ task }) => {
    const completed = task.isCompleted;
    const dispatch = useDispatch();
    const completeTask = () => {
        dispatch(toDoActions.completeTask(task));
    }

    const removeTask = () => {
        dispatch(toDoActions.removeTask(task));
    }

    return (
        <div className={"todopart " + completed}>
            <h4>{task.title}</h4>
            <span className="add" onClick={completeTask}><i class="fa-solid fa-check"></i></span>
            <span className="remove" onClick={removeTask}><i class="fa-solid fa-xmark"></i></span>
            <p className='date'>{task.addedDate.toLocaleString()}</p>
        </div>
    )
}

export default ToDoList