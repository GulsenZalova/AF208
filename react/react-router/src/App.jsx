import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Basket from './pages/Basket';
import Favorites from './pages/Favorites';
import NotFound404 from './pages/NotFound404';
import ProductsDetail from './pages/ProductsDetail';
import AddProduct from './pages/AddProduct';

function App() {


  return (


    <>

<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          <li>
            <Link to="/basket">basket</Link>
          </li>
        </ul>
      </nav>

      {/* normal route */}

      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductsDetail/>}/>
        <Route path='/products/addproduct' element={<AddProduct/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='*' element={<NotFound404/>}/>
      </Routes> */}



        {/* nested route */}


        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products'>
            <Route index element={<Products/>}/>
            <Route path=':id' element={<ProductsDetail/>}/>
            <Route path='addproduct' element={<AddProduct/>}/>
        </Route>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='*' element={<NotFound404/>}/>
      </Routes>




    </>
  )
}

export default App
