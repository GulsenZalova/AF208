import express from "express"
// import {connect } from "mongoose"
import ProductRouter from "./routes/ProductRouter.js"
import cors from "cors"
// import { json } from "body-parser"
import { config } from "dotenv"

const app=express()

// app.use(json())
app.use(express.json())
app.use(cors())
config()
import "./config/config.js"


// const ProductSchema=new  Schema({
//     title:String,
//     image:String,
//     description:String,
//     price:Number,
//     category:String
// })


// let ProductModel= model("product",ProductSchema)


// let ProductValidationSchema=joi.object({
//     title: joi.string().min(15).max(50),
//     image:joi.string().uri(),
//     description:joi.string().min(20).max(100),
//     price:joi.number().min(20).max(1000),
//     category:joi.string()
// })


// // Get
// app.get("/products",async (req,res)=>{
//    let products= await ProductModel.find()
//    res.send(products)
// })


// // GetById

// app.get("/products/:id",async (req,res)=>{
//    let {id}= req.params
//     let product= await ProductModel.findById({_id:id})
//     res.send(product)
//  })

// // Post

// app.post("/products",async (req,res)=>{
//    let {error}=  ProductValidationSchema.validate(req.body)
// //    console.log(error.details[0].message)
//    if(error){
//     return  res.send(error.details[0].message)
//    }
//     let newProduct= ProductModel(req.body)
//     await newProduct.save()
//     res.send(newProduct)
// })


// // Delete

// app.delete("/products/:id",async (req,res)=>{
//     let {id}= req.params
//      await ProductModel.findByIdAndDelete({_id:id})
//      res.send({
//         message:"Deleted"
//      })
//   })


//   app.put("/products/:id",async (req,res)=>{
//     let {id}= req.params
//     let updatedProduct= req.body
//    let result=  await ProductModel.findByIdAndUpdate({_id:id},updatedProduct,{new:true})
//      res.send(result)
//   })


// connect(process.env.DB_Password)
// .then(()=>{
//     console.log("connected")
// })
// .catch((err)=>{
//     console.log(err)
// })



app.use("/products",ProductRouter)
app.listen(3000,()=>{
    console.log("bu app 3000 portunda dinlenilir")
})