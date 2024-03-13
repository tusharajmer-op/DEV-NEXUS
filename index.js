/**
 * Express server for Artitech CRM.
 * @module index
 */

const express = require('express')
const app = express()
require('dotenv').config()
const {userRouter,adminRouter} = require('./routes')
const port = process.env.PORT || 5456
const {authenticator} = require('./service')
const swaggerSpec = require('./swagger');
const swaggerUI = require('swagger-ui-express');
const ErrorController = require('./controllers/errorController')
const logger = require('./utility/logger')
app.use(express.json())
app.use(express.urlencoded())

/**
 * Middleware to log the HTTP method and URL of each request.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
app.all('*',(req,res,next)=>{
    logger.info(`${req.ip}${req.method} ${req.url} `)
    next()
})

app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use((err, req, res, next) => {
    
    if (err instanceof ErrorController ) {
        res.status(err.statusCode).json({ "message": err.message, "data": [], "status": err.status })
        
    }
    else if (err instanceof Error) {
        res.status(500).json({ "message": "Internal server error", "data": [], "status": 500 })
    }
    else{
    res.status(500).json({"message":"something went wrong. Please try again later","data":[],"status":"Error"})
    }
}); 
/**
 * Start the server and listen on the specified port.
 */
app.listen(port,()=>{
    console.log("http://localhost:"+ port)
})