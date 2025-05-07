import React, { useState } from 'react'
import { createContext } from 'react'

export let ToDoContext=createContext()

function TodoProvider({children}) {

  let [todos,setTodos]=useState([
    {
      id:0,
      text:"hello"
    },
    {
      id:1,
      text:"salam"
    },
    {
      id:2,
      text:"say"
    },
    {
      id:3,
      text:"go"
    },
  ])


  let value={
    todos,setTodos
  }



  return (
    <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>
  )
}

export default TodoProvider