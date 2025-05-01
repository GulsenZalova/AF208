import { ProductModel } from "../models/ProductModel.js"
import {ProductValidationSchema} from "../validation/ProductValidation.js"

// import joi from "joi"

// let ProductValidationSchema=joi.object({
//     title: joi.string().min(15).max(50),
//     image:joi.string().uri(),
//     description:joi.string().min(20).max(100),
//     price:joi.number().min(20).max(1000),
//     category:joi.string()
// })


export let ProductController={
    getAll: async (req,res)=>{
        let products= await ProductModel.find()
        res.send(products)
     },
    getById:async (req,res)=>{
        let {id}= req.params
         let product= await ProductModel.findById({_id:id})
         res.send(product)
    },
    postProduct: async (req,res)=>{
        let {error}=  ProductValidationSchema.validate(req.body)
     //    console.log(error.details[0].message)
        if(error){
         return  res.send(error.details[0].message)
        }
         let newProduct= ProductModel(req.body)
         await newProduct.save()
         res.send(newProduct)
     },
     deleteProduct: async (req,res)=>{
        let {id}= req.params
         await ProductModel.findByIdAndDelete({_id:id})
         res.send({
            message:"Deleted"
         })
    },
    putProduct:async (req,res)=>{

        let {error}=  ProductValidationSchema.validate(req.body)
        if(error){
            return  res.send(error.details[0].message)
           }
        let {id}= req.params
        let updatedProduct= req.body
       let result=  await ProductModel.findByIdAndUpdate({_id:id},updatedProduct,{new:true})
         res.send(result)
      }
}



