import React from 'react'
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { FaTrash } from "react-icons/fa";
import { BasketContext } from '../../../context/BasketContext';
import Button from 'react-bootstrap/Button';
import "./style.css"

function Basket() {
  let {basket,setBasket}=useContext(BasketContext)


  function handleDecrease(item){
     let finded=basket.find(x=>x.id==item.id)

     if(finded.count==1){
        let filtered=basket.filter(x=>x.id!==item.id)
        setBasket(filtered)
     }else{
      finded.count--
      setBasket([...basket])
      console.log(basket)
     }
  
  }

  function handleIncrease(item){
    let finded=basket.find(x=>x.id==item.id)
     finded.count++
     setBasket([...basket])
    
  }

  function handleDelete(item){
    let filtered=basket.filter(x=>x.id!==item.id)
    setBasket(filtered)
  }


  function calcTotalPrice(){
     let total= basket.reduce((sum,basketItem)=>sum + (basketItem.count * basketItem.price),0)
     return total
  }



  return (
      <>
         {
          basket.length>0 ? (
            <>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Total Price</th>
                <th>Increase</th>
                <th>Count</th>
                <th>Decrease</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
          {
            basket.map(item=>{
              return   <tr key={item.id}>
              <td>{item.title}</td>
              <td><img src={item.image} alt="" /></td>
              <td>{item.price}$</td>
              <td>{item.price*item.count}$</td>
              <td><Button variant='danger' onClick={()=>handleDecrease(item)}>-</Button></td>
              <td>{item.count}</td>
              <td><Button onClick={()=>handleIncrease(item)}>+</Button></td>
              <td><Button onClick={()=>handleDelete(item)}><FaTrash/></Button></td>
            </tr>
            })
          }
        
            
        
            </tbody>
          </Table>
        
          <span>Total: {calcTotalPrice().toFixed(2)}$</span>
          
          </>
          ): (<h1>Bosdur</h1>)
         }
      
      </>
  )
}

export default Basket