const express = require('express')
const app = express()
require('dotenv').config()
const {userRouter} = require('./Routes')
const port = process.env.PORT || 5456
app.use(express.json())
app.use(express.urlencoded())
app.all('*',(req,res,next)=>{
    console.log("got in global middleware to handl request and log them")
    next()
})
app.use('/user',userRouter)



app.listen(port,()=>{
    console.log("app is working on port "+ port)
})