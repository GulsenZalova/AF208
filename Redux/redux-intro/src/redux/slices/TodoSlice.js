import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'


let localTodos= localStorage.getItem("todos")
let initialState={
    todos: localTodos ? JSON.parse(localTodos):[]
}


export let TodoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        AddMyTodo:(state,action)=>{
            let newTodo={
                id:nanoid(),
                text: action.payload,
                isCompleted:false
            }
            state.todos=[...state.todos,newTodo]
            localStorage.setItem("todos",JSON.stringify(state.todos))
        },
        DeleteTodo:(state,action)=>{
            console.log(action.payload)
            let filtered=state.todos.filter(x=>x.id!==action.payload)
            state.todos=[...filtered]
            localStorage.setItem("todos",JSON.stringify(state.todos))
        },
        isCompletedTodo:(state,action)=>{
            let finded=state.todos.find(x=>x.id==action.payload)
            finded.isCompleted=!finded.isCompleted
            state.todos=[...state.todos]
             localStorage.setItem("todos",JSON.stringify(state.todos))
        }
    }
})


export let {AddMyTodo,DeleteTodo,isCompletedTodo}=TodoSlice.actions
export default TodoSlice.reducer
