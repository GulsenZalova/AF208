import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TodoNavbar from './components/TodoNavbar';
import Main from './components/Main';
import AddToDo from './components/AddToDo';
import {useState} from "react"

function App() {



  return (
    <>
      <TodoNavbar/>
      <AddToDo/>
      <Main/>
    </>
  )
}

export default App
