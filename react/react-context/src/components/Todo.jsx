import React from 'react'

function Todo({todo}) {
    console.log(todo)
  return (
    <li>{todo.text}</li>
  )
}

export default Todo