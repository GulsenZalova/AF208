import React from 'react'
import { useParams } from 'react-router'
import { useGetCategoryQuery } from '../../../redux/Categories/CategoryApi'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
function Detail() {
    let { id } = useParams()
    let { data: category, isLoading } = useGetCategoryQuery(id)
    return (


        <>
            {
                isLoading ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                    : <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{category.name}</Card.Title>
                            <Card.Text>
                              {category.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
            }



        </>
    )
}

export default Detail