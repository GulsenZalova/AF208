import React from 'react'
import Table from 'react-bootstrap/Table';
import Product from '../../../components/Admin/Product';
import { useContext } from "react"
import { SupplierContext } from '../../../context/SupplierContext';
import Button from 'react-bootstrap/esm/Button';
import { Link} from 'react-router';
import styles from "./style.module.css"
export function Products() {
  let { suppliers } = useContext(SupplierContext)
  

  return (

    <>
      <Link to={"/admin/products/addproduct"}><Button variant="primary" className='my-4'>Add</Button></Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>

          {
            suppliers.map((supplier,index) => {
              return <Product key={index} supplier={supplier} />
            })
          }

        </tbody>
      </Table>


      <button className={`btn btn-primary ${styles.text}`}>click</button>
    </>
  )
}

