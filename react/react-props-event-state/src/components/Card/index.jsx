import React from 'react'

function Card({ product }) {
    console.log(product)
    return (
        <li>
            <span>{product.title}</span>
            <span>{product.price}</span>
        </li>
    )
}

export default Card