import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Card from 'react-bootstrap/Card';
import axios from "axios"
import Button from 'react-bootstrap/esm/Button';

function ProductsDetail() {
    let { id } = useParams()
    let [supplier, setSupplier] = useState({})
    let navigate = useNavigate()
    
    async function GetSupplier() {
        let supplier = await axios.get(`https://northwind.vercel.app/api/suppliers/${id}`)
        setSupplier(supplier.data)
    }

    useEffect(() => {
        GetSupplier()
    }, [])
    return (
        <>
            <Button onClick={()=>navigate("/products")} variant="secondary">Back</Button>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{supplier.companyName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        {supplier.contactName}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductsDetail