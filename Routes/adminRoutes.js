const router = require('express').Router()
const {tokenValidation} = require('../middleware')
const {roles,department} = require('../controllers')
router.all("*", tokenValidation.validateToken)
router.get("/roles",async(req,res)=>{
    try{
        const data = await roles.displayRoles(req)
        res.status(200).json({"message":"success","data":data,"status":'OK'})
    }
    catch(err){
        
        next(err)
    }
});
router.post("/roles",async(req,res,next)=>{
    try{
        const data = await roles.createRole(req,res)
        res.status(data.status).json(data)

    }
    catch(err){
        next(err)
    }
});
router.put("/roles/:id",async(req,res)=>{
    try{
        
        const data = await roles.updateRole(req,res)
        res.status(200).json({"message":"success","data":data,"status":'OK'})
    }
    catch(err){
        console.log(err)
        next(err)
    }
});
router.delete("/roles/:id",async(req,res)=>{
        const data = await roles.deleteRole(req,res)
        res.status(data.status).json(data)
    
    
});

router.get("/departments",tokenValidation.validateToken,async(req,res)=>{
    try{
        const data = await department.displayDepartments(req,res)
        res.status(200).json({"message":"success","data":data,"status":'OK'})
    }
    catch(err){
        throw new Error(err)
    }
}
);
router.post("/departments",tokenValidation.validateToken,async(req,res)=>{
    try{
        const data = await department.createDepartment(req,res)
        res.status(data.status).json(data)

    }
    catch(err){
        throw new Error(err)
    }
});

module.exports = router