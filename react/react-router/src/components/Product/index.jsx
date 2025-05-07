import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

function Product({supplier}) {
//    let {supplier}= props
    return (
        <tr>
            <td>{supplier.id}</td>
            <td>{supplier.companyName}</td>
            <td>{supplier.contactName}</td>
            <td>{supplier.contactTitle}</td>
            <td><Link to={`/products/${supplier.id}`}><Button variant="primary">Detail</Button></Link></td>
        </tr>
    )
}

export default Product