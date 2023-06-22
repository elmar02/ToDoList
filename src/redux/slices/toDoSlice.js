import { createSlice } from "@reduxjs/toolkit"

let initialState={
    tasks:[],
    totalTasks: 0,
    completedTasks: 0,
}

// const todoString = localStorage.getItem("todo");
// initialState = JSON.parse(todoString);

const toDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTask: (state,action)=>{
            const newTask = action.payload;
            const isExisted = state.tasks.find((task)=>task.title===newTask.title)
            if(!isExisted){
                state.totalTasks++;
                state.tasks.push({
                    title:newTask.title,
                    addedDate:new Date(),
                    isCompleted:'',
                })
            }
        },
        completeTask:(state,action)=>{
            const chosenTask = action.payload;
            const completedTask = state.tasks.find((task)=>task.title===chosenTask.title);
            if(completedTask.isCompleted!=''){
                state.completedTasks--;
                completedTask.isCompleted = ''
            }
            else{
                state.completedTasks++;
                completedTask.isCompleted='completed';
            }
        },
        removeTask:(state,action)=>{
            const chosenTask = action.payload;
            const removedTask = state.tasks.find((task)=>task.title===chosenTask.title);
            if(removedTask){
                if(removedTask.isCompleted!=''){
                    state.completedTasks--
                }
                state.tasks = state.tasks.filter((task)=>task.title!==chosenTask.title)
                state.totalTasks--;
            }
        }
    }
})

export const toDoActions = toDoSlice.actions;
export default toDoSlice.reducer;