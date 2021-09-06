const express=require("express")
const dotenv=require("dotenv").config();
const db=require('./config/mongoose')
console.log(process.env.PORT)
const app=express();

app.use(express.json())
app.use('/',require('./routes/index'));
app.listen(8000,()=>{
    console.log("SERVER RUNNING")
})