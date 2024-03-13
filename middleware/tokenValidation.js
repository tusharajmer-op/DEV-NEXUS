const errorController = require('../controllers/errorController');
const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
    try {
        if (!req.headers['authorization']) {
            next(errorController.throwError('TOKENNOTPROVIDED'));
        }
        const token = req.headers['authorization'].split(' ')[1];
    
        if (!token) {
            next(errorController.throwError('TOKENNOTPROVIDED'));
        }

        const decoded = jwt.verify(token, process.env.SECRET);
        
        req.user = decoded;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            next(errorController.throwError('TOKENEXPIREDERROR'));
        }
        else{
        next(errorController.throwError('TOKENINVALID'));
        }
    }
}

module.exports = { validateToken }