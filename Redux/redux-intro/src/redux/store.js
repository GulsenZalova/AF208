import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "../redux/slices/CounterSlice"
import TodoReducer from "./slices/TodoSlice"
export const store=configureStore({
    reducer:{
        counter:CounterReducer,
        todo: TodoReducer
    }
})