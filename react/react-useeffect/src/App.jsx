import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'
import BaseUrl from './api/api';
function App() {
  let [count, setCount] = useState(0)
  let [categories, setCategories] = useState([])
  let [input, setInput] = useState("")
  let [loading, setLoading] = useState(true)
  let [newCategory, setNewCategory] = useState({ name: "", description: "" })
 let [orginal,setOrginal]=useState([])
  useEffect(() => {
    // fetch("https://northwind.vercel.app/api/categories")
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     setCategories(data)
    //     setLoading(false)
    //   })


    GetAllCategories()
  }, [])



  async function GetAllCategories() {
    let res = await axios.get(BaseUrl)
    setCategories(res.data)
    setOrginal(res.data)
    setLoading(false)
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`${BaseUrl}/${id}`)
      let filteredCategories = categories.filter((x) => x.id !== id)
      setCategories(filteredCategories)
    } catch (err) {
      console.log(err)
    }
  }

  function filterByPriceandName(e) {
    let searchString = e.target.value
    let filteredCategories
    switch (searchString) {
      case "low":
        filteredCategories = [...orginal].sort((x,y)=>x.price-y.price)
        break;
      case "high":
        filteredCategories = [...orginal].sort((x,y)=>y.price-x.price)
        break;
      case "a-z":
        filteredCategories = [...orginal].sort((x,y)=>x.name.localeCompare(y.name))
        break;
      case "z-a":
        filteredCategories = [...orginal].sort((x,y)=>y.name.localeCompare(x.name))
        break;
      case "all":
        filteredCategories = [...orginal]
        break;
      default:
        break;
    } 
  setCategories([...filteredCategories])

  }
  function handleSearch(e){
    let search=e.target.value
      let filtered=orginal.filter(category=>category.name.toLowerCase().trim().includes(search.toLowerCase().trim()))
      setCategories([...filtered])
      
    
  }
  async function handleSubmit(e) {
    e.preventDefault()
    await axios.post(BaseUrl, newCategory)
    setCategories([...categories, newCategory])
    setNewCategory({ name: "", description: "" })
    // GetAllCategories()
  }
  return (
    <>
      {/* <button onClick={()=>setCount(--count)}>-</button>
        <span>{count}</span>
        <button onClick={()=>setCount(++count)}>+</button>
        <input type="text" onChange={(e)=> setInput(e.target.value) }  />
        <span></span> */}

      {/* 
       submit
       inputdan deyer almaq
      
      */}

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={newCategory.name} placeholder='name' onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} />
        <input type="text" value={newCategory.description} placeholder='description' onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })} />
        <button>Add Category</button>
      </form>
      <input type="text" placeholder='search' onChange={(e)=>handleSearch(e)}/>
      <select name="" id="filter" onChange={(e) => filterByPriceandName(e)}>
        <option value="all">all</option>
        <option value="low">low</option>
        <option value="high">high</option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>


      {
        loading ? (<div className="loader"></div>) : (

          <ul>
            {
              categories.map(((category, index) => {
                return <li key={index}>{category.name} / {category.description} / {category.price} <button onClick={() => handleDelete(category.id)}>delete</button></li>
              }))
            }
          </ul>
        )
      }





    </>
  )
}

export default App


