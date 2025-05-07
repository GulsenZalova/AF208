import { Routes, Route } from "react-router-dom";
import './App.css'
import DashBoard from "./pages/Admin/DashBoard";
import Home from "./pages/User/Home";
import Products from "./pages/User/Products";
import { Products as AdminProducts } from "./pages/Admin/Products";
import Basket from "./pages/User/Basket";
import Favorites from "./pages/User/Favorites";
import AddProduct from "./pages/Admin/AddProduct";
import EditProduct from "./pages/Admin/EditProduct";
import AdminRoot from "./components/Admin/AdminRoot";
import UserRoot from "./components/User/UserRoot";

function App() {


  return (
    <>
      <Routes>
        {/* User Route */}
        <Route path="/" element={<UserRoot/>} >
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="basket" element={<Basket />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>


        {/* Admin Route */}
        {/* <Route path="/admin">
        <Route index element={<DashBoard/>}/>
        <Route path="products" element={<AdminProducts/>}/>
        <Route path="products/addproduct" element={<AddProduct/>}/>
        <Route path="products/editproduct" element={<EditProduct/>}/>
        </Route> */}



        <Route path="/admin" element={<AdminRoot/>}>
          <Route index element={<DashBoard />} />
          <Route path="products">
            <Route index element={<AdminProducts />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="editproduct" element={<EditProduct />} />
          </Route>
        </Route>




      </Routes>


    </>
  )
}

export default App
