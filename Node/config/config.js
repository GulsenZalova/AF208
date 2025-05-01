import {connect } from "mongoose"
import { config } from "dotenv"
config()

connect(process.env.DB_Password)
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})