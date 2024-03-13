const { log } = require('../service/debugger');
const errorMessages = require('../utility/errorMessages');
const logger = require('../utility/logger');
class ErrorController extends Error {


    constructor(statusCode, message) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
    }
    static throwError(error = 'INTERNAL_SERVER_ERROR'){
        
        const statusCode = errorMessages[error].statusCode;
        const message = errorMessages[error].message;
        logger.error(error)
        return new ErrorController(statusCode,message)
    }
    
}
module.exports = ErrorController;