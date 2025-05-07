import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeartCrack } from "react-icons/fa6";
import { useContext } from 'react';
import { FavoritesContext } from '../../../context/FavoritesContext';
function Favorite({ favorite }) {


    let { favorites, setFavorites } = useContext(FavoritesContext)

    function handleDeleteFavorite(favoriteItem) {

        let filtered = favorites.filter((favorite => favorite.id != favoriteItem.id))
        setFavorites(filtered)
    }

    console.log(favorites)
    return (
        <>
        
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={favorite.image} />
                            <Card.Body>
                                <Card.Title>{favorite.title}</Card.Title>
                                <Card.Text>
                                    {favorite.description}
                                </Card.Text>
                                <Card.Text>
                                    {favorite.price}
                                </Card.Text>
                                <Card.Text>
                                    {favorite.category}
                                </Card.Text>
                                <Button variant="danger" onClick={() => handleDeleteFavorite(favorite)} className='mx-3'><FaHeartCrack /></Button>
                                {/* <Button variant="primary"><FaCartShopping/></Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
               
            
            
        </>
    )
}

export default Favorite