
const jwt = require('jsonwebtoken');
const { user } = require('../models');
const { validation } = require('../utility');
const {encryption} = require('../service');
const validationService = new validation();
const {debug} = require('../service');
const errorController = require('../controllers/errorController');

/**
 * A module that represents a userController.
 * @module controllers/userController
 */
const login = async (req) => {
        const { error } = validationService.login(req);
        if (error) {
            throw new errorController.throwError('BAD_REQUEST')
        }
        
        const userRes = await user.login(req.body)
        
        if (!userRes[0]) {
            throw new errorController.throwError('Not_Found')
        }
        const hash = userRes[1][0].password;
        
        
        const match = await encryption.compare(req.body.password, hash);
        if (!match) {
            throw new errorController.throwError('UNAUTHORIZED')
        }
        const token = jwt.sign({ "email": req.body.email,"name":userRes[1][0].name,"role":userRes[1][0].role }, process.env.SECRET, { expiresIn: 60 * 60 * 24 })
        debug.log(token)
        return { "message": "user logged in successfully", "data": { "user": { "email": req.body.email,"name":userRes[1][0].name,"role":userRes[1][0].role }, "token": token }, "status": 200 }
    
}

const register = async (req) => {
    try {
        const { error } = validationService.register(req);
        if (error) {
            return { "message": error.details[0].message, "data": [], "status": 400 }
        }
        const password = await encryption.encrypt(req.body.password);
        req.body.password = password;
        const userRes = await user.register(req.body).then((res) => {
            return res
        });
        if (!userRes) {
            return { "message": "Invalid email or password", "data": [], "status": 400 }
        }
        const token = jwt.sign({ email: req.body.email }, process.env.SECRET, { expiresIn: 60 * 60 * 24 })
        debug.log(token)
        return { "message": "user registered successfully", "data": { "user": user, "token": token }, "status": 200 }
    } catch (err) {
        return { "message": "Internal server error", "data": [], "status": 500 }
    }
}

module.exports = { login, register }