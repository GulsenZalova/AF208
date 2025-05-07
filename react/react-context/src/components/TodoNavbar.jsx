import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { ToDoContext } from '../context/TodoContext';
import { useContext } from 'react';

function TodoNavbar() {
let {todos}=  useContext(ToDoContext)
console.log(todos)
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Todos {todos.length}</Navbar.Brand>
      </Container>
    </Navbar>


  )
}

export default TodoNavbar