import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import styles from "./style.module.css"


export function ProductDetail() {
    let [product,setproduct]=useState({})
    let { id } = useParams()
    let navigate=useNavigate()

    async function GetProduct() {
        let res = await axios.get(`http://localhost:3000/products/${id}`)
        setproduct(res.data)
    }



    useEffect(() => {
        GetProduct()
    }, [])


 console.log(styles)
    return (
    <>
        <Button variant="primary" onClick={()=>navigate("/admin/products")} className='my-4'>Go Back</Button>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
               {product.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <button className={styles.button}>click</button>
    </>

    
    )
}

