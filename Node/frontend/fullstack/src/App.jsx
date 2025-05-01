
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  let [products,setProducts]=useState([])
   useEffect(()=>{
    fetch("http://localhost:3000/products/")
    .then(res=>res.json())
    .then(data=>setProducts(data))
   },[])
  return (
    <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
          {
            products.map(product=>{
             return <tr>
              <td>{product._id}</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            })
          }
       
      </tbody>
    </Table>
    </>
  )
}

export default App
