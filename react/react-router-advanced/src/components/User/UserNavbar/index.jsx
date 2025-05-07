import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { FavoritesContext } from '../../../context/FavoritesContext';
import { BasketContext } from '../../../context/BasketContext';

function UserNavbar() {
let {favorites}=useContext(FavoritesContext)
let {basket}=useContext(BasketContext)
  return (
    <Navbar className="bg-body-tertiary" bg='dark'>
      <Container>
        <Link to={"/"}><Navbar.Brand >Shop</Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to={"/favorites"}><FaHeart /></Link>
          <span className='mx-2' >{favorites.length}</span>
          </Navbar.Text>
          <Navbar.Text>
         <Link to={"/basket"}> <FaCartShopping/></Link>
          <span className='mx-2'>{basket.length}</span>
          </Navbar.Text>
 
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );



}

export default UserNavbar