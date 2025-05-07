import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import axios from "axios"
import Product from '../../components/Product';
function Products() {

    let [suppliers, setSuppliers] = useState([])

    async function GetSuppliers() {
        let suppliers = await axios.get("https://northwind.vercel.app/api/suppliers")
        setSuppliers(suppliers.data)
    }

    useEffect(() => {
        GetSuppliers()
    }, [])
    return (

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
                    suppliers.map((supplier) => {
                        return <Product key={supplier.id} supplier={supplier} />
                    })
                }

            </tbody>
        </Table>
    )
}

export default Products