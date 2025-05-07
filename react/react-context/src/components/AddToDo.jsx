import React from 'react'
import {useState} from  "react"
import { useContext } from 'react'
import { ToDoContext } from '../context/TodoContext'

 
function AddToDo() {
 let {todos,setTodos}= useContext(ToDoContext)

    let [inp,setInp]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        let newToDo={
            id:todos.length+1,
            text:inp
        }
         setTodos([...todos,newToDo])
         console.log(todos)
         setInp("")
    }
  return (
    <form onSubmit={(e)=>handleSubmit(e)} >
        <input value={inp} onChange={(e)=>setInp(e.target.value)} type="text" />
        <button>add</button>
    </form>
  )
}

export default AddToDo