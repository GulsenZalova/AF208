import  { useState } from 'react'
import { AddMyTodo } from '../../redux/slices/TodoSlice'
import { useDispatch } from 'react-redux'
function AddTodo() {
    let [inp,setInp]=useState("")
    let dispatch=useDispatch()
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(AddMyTodo(inp))
        setInp("")
    }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='...todo' value={inp} onChange={(e)=>setInp(e.target.value)} />
        <button> Add Todo</button>
    </form>
  )
}

export default AddTodo