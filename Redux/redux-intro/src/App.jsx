import { useEffect } from 'react'
import './App.css'
import Counter from './components/Counter'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
     {/* <Counter/> */}
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
