import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';
import { useContext } from 'react';
import { SupplierContext } from '../../../context/SupplierContext';
import axios from 'axios';
function Product({supplier}) {
  let {suppliers,setSuppliers}=useContext(SupplierContext)

 async  function handleDelete(id){
 await axios.delete(`http://localhost:3000/products/${id}`)
  let filtered= suppliers.filter(x=>x.id!==id)
  setSuppliers(filtered)
  }
  return (
    <tr>
    <td>{supplier.title.slice(0,15)}...</td>
    <td><img src={supplier.image} alt="" /></td>
    <td>{supplier.description.slice(0,30)}...</td>
    <td>{supplier.price}</td>
    <td>{supplier.category}</td>
    <td><Link to={`/admin/products/${supplier.id}`}><Button variant="primary">Detail</Button></Link></td>
    <td><Link to={`/admin/products/edit/${supplier.id}`}><Button variant="warning">Edit</Button></Link></td>
    <td><Button onClick={()=>handleDelete(supplier.id)} variant="danger">Delete</Button></td>
  </tr>
  )
}

export default Product