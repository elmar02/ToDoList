import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./slices/toDoSlice";

const store = configureStore({
    reducer:{
        todo:toDoSlice,
    }
})

export default store