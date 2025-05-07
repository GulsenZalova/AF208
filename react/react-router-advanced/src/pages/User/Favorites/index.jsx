import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import { FavoritesContext } from '../../../context/FavoritesContext';
import Favorite from '../../../components/User/Favorite';
function Favorites() {
 let {favorites}= useContext(FavoritesContext)

  return (
    <Container className='my-5 '>
    <Row>
        {
          favorites.length > 0 ? (
            favorites.map(favorite=>{
              return  <Favorite key={favorite.id} favorite={favorite}/>
             })
          ): (<h1>Bosdur</h1>)
        }
    </Row>
  </Container>
  )
}

export default Favorites