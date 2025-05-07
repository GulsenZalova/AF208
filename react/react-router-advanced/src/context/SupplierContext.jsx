import React from 'react'
import {createContext} from "react"
import {useState,useEffect} from "react"
import axios from "axios"

export const SupplierContext=createContext()

function SupplierProvider({children}) {
  let [suppliers, setSuppliers] = useState([])

  async function GetSuppliers() {
    let res = await axios.get("http://localhost:3000/products")
    setSuppliers(res.data)
  }

  useEffect(() => {
    GetSuppliers()
  }, [])

  let value={
    suppliers,setSuppliers
  }


  return (
  <SupplierContext.Provider value={value}>{children}</SupplierContext.Provider>
  )
}

export default SupplierProvider