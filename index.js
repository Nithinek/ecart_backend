///automically load .env files into our project
//step1
require('dotenv').config()

//2.import express
const express= require('express')
//6IMPOrt cors
const cors=require('cors')
//import db
require('./db/connection')

//import router
const router = require('./routes/router')
//3 create a server application
const server= express()

//4to store port number
const PORT=5000

//7use in server application
server.use(cors())
server.use(express.json())
server.use(router)

//route - localhost://5000
//server.get('/',(req,res)=>{
  //  res.status(200).json('e commerce service Response')
//})

//5 To run the server appliccation
server.listen(5000,()=>{
    console.log('server lisenting on port'+PORT);
})
