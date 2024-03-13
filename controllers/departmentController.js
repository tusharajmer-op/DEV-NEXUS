const { department } = require('../models')
const ErrorController = require('./errorController')
const {validation} = require('../utility')
const validate = new validation
const displayDepartments = async (req, res) => {
    const departmentsData = await department.getDepartments();
    if (departmentsData[0]) {
        return {"message":"Departments Found","data":departmentsData[1],"status":200}
    }
    console.log(departmentsData)
    throw ErrorController.throwError('InternalError')
}
const createDepartment = async (req, res) => {
    
    const validInput = validate.department(req)
    if(validInput.error){
        return {"message":validInput.error.details[0].message,"data":[],"status":400}
    }
    
    const result = await department.createDepartment(validInput.value.department);
    if (result) {
        return {"message":"Department Created Successfully","data":[],"status":200}
    }
    
    
    throw ErrorController.throwError('InternalError')
}
module.exports = {
    displayDepartments,
    createDepartment
}