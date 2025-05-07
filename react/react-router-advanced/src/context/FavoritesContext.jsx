import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export let FavoritesContext=createContext()

function FavoritesProvider({children}) {

    // proqram eger localda favorite mehsullar varsa onun uzerinden davam etmelidir yoxdursa bos array ile davam etmelidir
  let localFavorite = localStorage.getItem("favorites")
  let [favorites,setFavorites]=useState(localFavorite ? JSON.parse(localFavorite) : [])

   
  useEffect(()=>{
     localStorage.setItem("favorites",JSON.stringify(favorites))
  },[favorites])
  

  let value={
    favorites,setFavorites
  }

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  )
}

export default FavoritesProvider