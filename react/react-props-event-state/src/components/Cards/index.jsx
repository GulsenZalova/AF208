import React from 'react'
import Card from '../Card'

function Cards({ products }) {
    return (
        <ul>
            {
                products.map((product,index)=> (
                    <Card key={index} product={product} />
                ))
            }
        </ul>
    )
}

export default Cards