const joi = require('joi');
/**
 * Class representing validation.
 */
class validate {
    /**
     * Validate the user input for login.
     * @param {Object} req - The request object.
     * @returns {Object} - The validation result.
     */
    login(req) {
        const schema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().min(6).required()
        });
        return schema.validate(req.body);
    }
    /**
     * Validate the user input for register.
     * @param {Object} req - The request object.
     * @returns {Object} - The validation result.
     */
    register(req) {
        const schema = joi.object({
            name: joi.string().min(3).required(),
            email: joi.string().email().required(),
            password: joi.string().min(6).required(),
            avatar: joi.string(),
            address: joi.string(),
            phone: joi.string()
        });
        console.log(schema.validate(req.body))
        return schema.validate(req.body);
    }
    role(req){
        const schema = joi.object({
            role: joi.string().required()
        })
        return schema.validate(req.body)
    }
    department(req){
        const schema = joi.object({
            department: joi.string().required()
        })
        return schema.validate(req.body)
    }
}

module.exports = validate;