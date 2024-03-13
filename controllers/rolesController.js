const { roles } = require('../models')
const ErrorController = require('./errorController')
const {validation} = require('../utility')
const validate = new validation
const displayRoles = async (req) => {
    try {
        console.log('displayRoles')
        const rolesData = await roles.getRoles();
        return rolesData[1];
    } catch (err) {
        console.error('Database query error:', err);
        throw ErrorController.throwError('InternalError')
    }
}
const createRole = async (req, res) => {
    try {
        const {role} = req.body;
        const validInput = validate.role(req)
        if(validInput.error){
            return {"message":validInput.error.details[0].message,"data":[],"status":400}

        }
        const result = await roles.createRole(role);
        return {"message":"Role Created Successfully","data":[],"status":200}
    } catch (err) {
        console.log(err)
        throw ErrorController.throwError('INTERNAL_SERVER_ERROR')
    }
}
const getRole = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Role.getRole({ id });
        res.status(200).json(result);
    } catch (err) {
        throw ErrorController.throwError()
    }
}
const updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        const role = req.body;
        const validInput = validate.role(req)
        if(validInput.error){
            return {"message":validInput.error.details[0].message,"data":[],"status":400}

        }
        const result = await roles.updateRole({ id, role });
        return {"message":"Role updated Successfully","data":[],"success":200}
    } catch (err) {
        throw ErrorController.throwError('INTERNAL_SERVER_ERROR')
    }
}
const deleteRole = async (req, res) => {
    
        const { id } = req.params;
        const result = await roles.deleteRole({ id });
        return result;
    
}



module.exports = { displayRoles, createRole, getRole, updateRole, deleteRole}