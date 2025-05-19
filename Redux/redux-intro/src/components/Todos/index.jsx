import React from 'react'
import { useSelector } from 'react-redux'
import Todo from '../Todo'
function Todos() {
  let {todos}=useSelector((state)=>state.todo)
  return (
    <ul>
        {
            todos.map(todo=>{
              return  <Todo key={todo.id} todo={todo}/>
            })
        }
    </ul>
  )
}

export default Todos