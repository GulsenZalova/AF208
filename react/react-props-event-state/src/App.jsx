
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Cards from './components/Cards'
import Counter from './components/Counter'
import Form from './components/Form'

function App() {

   let [todos,setTodos]=useState([])
   let [myTodo,setMyTodo]=useState({id:0,text:""})
  //  let [input,setInput]=useState("")


   function handleSubmit(e){
       e.preventDefault()
       myTodo.id=uuidv4()
      setTodos([...todos,myTodo])
      setMyTodo({...myTodo,text:""})
      console.log(todos)
   }


   function deleteTodo(id){
       let deleted= todos.filter(x=>x.id!=id)
       setTodos(deleted)
   }
  return (
    <>
 
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" value={myTodo.text} onChange={(e)=>{
          setMyTodo({...myTodo,text:e.target.value})
        }}  />
        <button>add</button>
      </form>

      <ul>
        {
          todos.map((todo,index)=>{
          return  <li key={index}  >{todo.text}  <button onClick={()=>deleteTodo(todo.id)}>delete</button></li>
          })
        }
      </ul>

    </>
  )
}

export default App
