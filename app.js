const express = require('express')
const mongoose = require('mongoose')
const url ="mongodb://localhost/AlienDB"
const app =express()

mongoose.connect(url);
const con = mongoose.connection

con.on('open',function(){
    console.log("connected..")
})
//hey express!i want use json here
app.use(express.json())

const alienRouter =require('./route/endpoints')
app.use('/endpoints',alienRouter)

app.listen(9000,()=>{
    console.log("Server Connected..")
})