import React from 'react'
import Todo from './Todo'
import { useContext } from 'react'
import { ToDoContext } from '../context/TodoContext'

function Todos() {
 let {todos}  =   useContext(ToDoContext)
 console.log(  useContext(ToDoContext))
    return (
        <ul>
            {
                todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} />
                })
            }
        </ul>
    )
}

export default Todos