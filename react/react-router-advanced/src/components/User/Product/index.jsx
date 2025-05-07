import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from 'react';
import { FavoritesContext } from '../../../context/FavoritesContext';
import { BasketContext } from '../../../context/BasketContext';
function Product({supplier}) {

let {favorites,setFavorites}=useContext(FavoritesContext)
let {basket,setBasket}=useContext(BasketContext)

  function handleAddFavorite(favoriteItem) {
    // mehsul yoxdursa elave etmeli
    // varsa alert gostermeli
    let finded=favorites.find(item=>item.id==favoriteItem.id)
     if(finded){
       alert("bu mehsul favoritede artiq var")
     }else{
        setFavorites([...favorites,favoriteItem])
         
     }
  }



  function handleAddBasket(basketItem){
    // mehsul yoxdursa elava edecek
    // varsa sayi artacaq

    let finded=basket.find(item=>item.id==basketItem.id)

console.log(basketItem)
console.log(finded)
    if(finded){
      finded.count++
      setBasket(basket)
      console.log(basket)
    }else{
      // ilk defe baskete atilirsa ona bir count deyeri vermeliyik
      setBasket([...basket,{...basketItem,count:1}])
    }
  }


  console.log(basket)
  return (
    <Col> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={supplier.image} />
    <Card.Body>
      <Card.Title>{supplier.title}</Card.Title>
      <Card.Text>
      {supplier.description}
      </Card.Text>
      <Card.Text>
      {supplier.price}
      </Card.Text>
      <Card.Text>
      {supplier.category}
      </Card.Text>
      <Button variant="danger" onClick={()=>handleAddFavorite(supplier)} className='mx-3'><FaHeart/></Button>
      <Button variant="primary" onClick={()=>handleAddBasket(supplier)}><FaCartShopping/></Button>
    </Card.Body>
  </Card></Col>    
  )
}

export default Product