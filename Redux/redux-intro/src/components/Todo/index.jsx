import { DeleteTodo,isCompletedTodo } from "../../redux/slices/TodoSlice"
import { useDispatch } from "react-redux"

function Todo({todo}) {
    let dispatch=useDispatch()
  return (
    <li style={{textDecoration: todo.isCompleted ? "line-through " :""}}>{todo.text} <button onClick={()=>dispatch(DeleteTodo(todo.id))}>x</button><button onClick={()=>dispatch(isCompletedTodo(todo.id))}>{todo.isCompleted ? "completed":"uncompleted"}</button></li>
  )
}

export default Todo