import { Schema, model } from "mongoose"

const ProductSchema= new  Schema({
    title:String,
    image:String,
    description:String,
    price:Number,
    category:String
})


export let ProductModel= model("product",ProductSchema)