import {createBrowserRouter} from "react-router-dom";
import UserRoot from "../components/User/UserRoot";
import React from "react";
import Home from "../pages/User/Home";
import { Products } from "../pages/Admin/Products";
import {Products as UserProducts} from "../pages/User/Products"
import {ProductDetail as AdminProductDetail }from "../pages/Admin/ProductDetail";
import ProductDetail from "../pages/User/ProductDetail";
import Basket from "../pages/User/Basket";
import Favorites from "../pages/User/Favorites";
import AdminRoot from "../components/Admin/AdminRoot";
import DashBoard from "../pages/Admin/DashBoard";
import AddProduct from "../pages/Admin/AddProduct";
import EditProduct from "../pages/Admin/EditProduct";




let router=createBrowserRouter([
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"ui",
                element:<UserProducts/>
            },
            {
                path:"products",
                element:<UserProducts/>
            },
            {
                path:"products/:id",
                element:<ProductDetail/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
        ]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"",
                element:<DashBoard/>
            },
            {
                path:"products",
                element:<Products/>
            },
            {
                path:"products/:id",
                element:<AdminProductDetail/>
            },
            {
                path:"products/addproduct",
                element:<AddProduct/>
            },
            {
                path:"products/edit/:id",
                element:<EditProduct/>
            },
        ]
    }
])


export default router