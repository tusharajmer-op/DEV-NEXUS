const router = require('express').Router()
const controllers = require('../controllers/index')
router.get("/login",(req,res)=>{
    res.status(200).json(controllers.login())
    
})


module.exports = router