import './App.css'
import router from './routes/router'
import React from 'react';
import {RouterProvider} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
// import DashBoard from "./pages/Admin/DashBoard";
// import Home from "./pages/User/Home";
// import Products from "./pages/User/Products";
// import { Products as AdminProducts } from "./pages/Admin/Products";
// import Basket from "./pages/User/Basket";
// import Favorites from "./pages/User/Favorites";
// import AddProduct from "./pages/Admin/AddProduct";
// import EditProduct from "./pages/Admin/EditProduct";
// import AdminRoot from "./components/Admin/AdminRoot";
// import UserRoot from "./components/User/UserRoot";

function App() {


  return (
    <>

  <RouterProvider router={router}/>

  <h1 className="text-3xl font-bold ">
    Hello world!
  </h1>

    </>
  )
}

export default App
