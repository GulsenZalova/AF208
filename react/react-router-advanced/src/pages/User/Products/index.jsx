import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../../../components/User/Product';
import {useContext} from "react"
import { SupplierContext } from '../../../context/SupplierContext';
export function Products() {
  let {suppliers}=useContext(SupplierContext)
  return (
    <Container className='my-5 '>
      <Row>
          {
            suppliers.map(supplier=>{
            return <Product key={supplier.id} supplier={supplier}/>
            })
          }
      </Row>
    </Container>
  )
}

