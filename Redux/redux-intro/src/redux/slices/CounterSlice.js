import { createSlice } from "@reduxjs/toolkit";

let localCounter=localStorage.getItem("counter")

let initialState={
    count: localCounter ? JSON.parse(localCounter) : 0,
}


export let CounterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
          state.count++
          
        },
        decrement:(state)=>{
          state.count--
        },
        reset:(state)=>{
        state.count=0
        },
        incrementByAmount:(state,action)=>{
            console.log(action)
            state.count+=action.payload
        },
        decrementByAmount:(state,action)=>{
            state.count-=action.payload
        }
    } 
})



export let {increment,decrement,reset,incrementByAmount,decrementByAmount}=CounterSlice.actions
export default CounterSlice.reducer